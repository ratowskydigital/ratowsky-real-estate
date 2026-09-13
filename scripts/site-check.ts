/**
 * Post-deploy verification for the live site (or a Vercel preview).
 *
 *   npm run site:check -- https://<preview>.vercel.app
 *   SITE_URL=http://localhost:3000 npm run site:check
 *
 * The target is required. There is no default because the domain that
 * currently serves ratowskyrealestate.com is built from a different
 * repository; checking it from here would say nothing about this code.
 * Point it at the Vercel preview for this branch, a local `next start`, or
 * production once this repository is what deploys there.
 *
 * Fails (exit 1) when any of these is true on the deployed site:
 *   - a city or community page is missing (non-200)
 *   - a published page still renders as a stub ("Brief in progress",
 *     "Status: stub", or a noindex robots tag)
 *   - the sitemap does not list every published city and community
 *   - /api/geo/huntington-harbour?children=true does not return the Harbour
 *     plus all five islands and the Mainland
 *   - /api/geo/<slug> is missing for any community
 *
 * This is the check Justin asked for after merge: "make sure the polygons are
 * correct and the stubs have been merged with content." Polygon *topology*
 * (every island inside the Harbour, vertices and edges, using the same
 * containment test as geo:check) is verified here against the deployed
 * GeoJSON. Polygon *vertex accuracy* still needs a human pass in geojson.io;
 * see README "Reviewing a polygon".
 */
import { cities } from "../src/content/cities";
import { communities } from "../src/content/communities";
import { geoAreas } from "../src/content/geo";
import { pointInRing, ringInsideRing } from "../src/lib/geo";

const target = process.argv[2] ?? process.env.SITE_URL;
if (!target || !/^https?:\/\//.test(target)) {
  console.error("site:check needs a target URL: `npm run site:check -- https://<deployment>` or SITE_URL=...");
  process.exit(2);
}
const base = target.replace(/\/$/, "");
const STUB_MARKERS = [/brief in progress/i, /status:\s*stub/i, /name="robots"[^>]*noindex/i, /coming soon\./i];

const errors: string[] = [];
const ok: string[] = [];

async function fetchText(path: string): Promise<{ status: number; text: string }> {
  try {
    const res = await fetch(`${base}${path}`, { redirect: "follow", headers: { "User-Agent": "ratowsky-site-check/1.0" } });
    return { status: res.status, text: await res.text() };
  } catch (err) {
    return { status: 0, text: String(err) };
  }
}

async function checkPage(path: string, label: string) {
  const { status, text } = await fetchText(path);
  if (status !== 200) {
    errors.push(`${label}: ${path} returned ${status || "no response"}`);
    return;
  }
  const hit = STUB_MARKERS.find((re) => re.test(text));
  if (hit) {
    errors.push(`${label}: ${path} still looks like a stub (matched ${hit})`);
    return;
  }
  if (!/<h1[\s>]/i.test(text) || text.length < 8000) {
    errors.push(`${label}: ${path} rendered thin content (${text.length} bytes)`);
    return;
  }
  ok.push(`${label}: ${path}`);
}

async function main() {
  console.log(`Checking ${base}\n`);

  // 1. Every published city and community page renders as full content.
  for (const c of cities.filter((x) => x.status === "published")) {
    await checkPage(`/cities/${c.slug}`, `city ${c.name}`);
  }
  for (const c of communities.filter((x) => x.status === "published")) {
    await checkPage(`/communities/${c.slug}`, `community ${c.name}`);
  }
  await checkPage("/cities", "cities hub");
  await checkPage("/communities", "communities hub");

  // 2. Sitemap lists every published page.
  const sitemap = await fetchText("/sitemap.xml");
  if (sitemap.status !== 200) {
    errors.push(`sitemap.xml returned ${sitemap.status}`);
  } else {
    for (const c of cities.filter((x) => x.status === "published")) {
      if (!sitemap.text.includes(`/cities/${c.slug}<`)) errors.push(`sitemap missing /cities/${c.slug}`);
    }
    for (const c of communities.filter((x) => x.status === "published")) {
      if (!sitemap.text.includes(`/communities/${c.slug}<`)) errors.push(`sitemap missing /communities/${c.slug}`);
    }
    ok.push("sitemap lists every published city and community");
  }

  const robots = await fetchText("/robots.txt");
  if (robots.status !== 200 || !/sitemap:/i.test(robots.text)) errors.push("robots.txt missing or has no Sitemap line");
  else ok.push("robots.txt points at the sitemap");

  // 3. Deployed geo layer: Harbour covers all five islands + Mainland.
  const harbour = await fetchText("/api/geo/huntington-harbour?children=true");
  if (harbour.status !== 200) {
    errors.push(`/api/geo/huntington-harbour?children=true returned ${harbour.status}`);
  } else {
    type Feature = { id: string; geometry: { type: string; coordinates: number[][][] | number[][][][] } | null };
    const fc = JSON.parse(harbour.text) as { features: Feature[] };
    const ids = fc.features.map((f) => f.id);
    const expected = [
      "huntington-harbour",
      "trinidad-island",
      "davenport-island",
      "humboldt-island",
      "gilbert-island",
      "admiralty-island",
      "harbour-mainland",
    ];
    for (const e of expected) if (!ids.includes(e)) errors.push(`deployed Harbour GeoJSON is missing ${e}`);

    const parent = fc.features.find((f) => f.id === "huntington-harbour");
    const parentRing =
      parent?.geometry?.type === "Polygon" ? (parent.geometry.coordinates as number[][][])[0] : null;
    if (!parentRing) {
      errors.push("deployed Harbour parent polygon is missing");
    } else {
      const parentRingT = parentRing.map((v) => [v[0], v[1]] as [number, number]);
      for (const f of fc.features) {
        if (f.id === "huntington-harbour" || !f.geometry) continue;
        const rings = (
          f.geometry.type === "Polygon"
            ? [(f.geometry.coordinates as number[][][])[0]]
            : (f.geometry.coordinates as number[][][][]).map((p) => p[0])
        ).map((ring) => ring.map((v) => [v[0], v[1]] as [number, number]));
        // Same test as geo:check: every vertex inside AND no edge crossing or
        // leaving the Harbour outline, which has a concave south side.
        const outsideVertices = rings.flat().filter((v) => !pointInRing(v, parentRingT)).length;
        const contained = rings.every((ring) => ringInsideRing(ring, parentRingT));
        if (!contained) {
          errors.push(
            outsideVertices > 0
              ? `deployed ${f.id} has ${outsideVertices} vertices outside the Harbour`
              : `deployed ${f.id} has an edge that crosses or leaves the Harbour outline`,
          );
        }
      }
      if (!errors.some((e) => e.includes("outside the Harbour") || e.includes("leaves the Harbour"))) {
        ok.push("deployed Harbour polygon contains all five islands and the Mainland");
      }
    }
  }

  // 4. Every community has a deployed GeoJSON endpoint.
  for (const a of geoAreas.filter((x) => x.kind === "community")) {
    const r = await fetchText(`/api/geo/${a.slug}`);
    if (r.status !== 200) errors.push(`/api/geo/${a.slug} returned ${r.status}`);
  }
  ok.push("every community has a GeoJSON endpoint");

  console.log(ok.map((l) => `ok    ${l}`).join("\n"));
  if (errors.length > 0) {
    console.log("\n" + errors.map((l) => `ERROR ${l}`).join("\n"));
    console.log(`\nsite:check failed with ${errors.length} error(s).`);
    process.exit(1);
  }
  const approx = geoAreas.filter((a) => a.precision === "approximate" && a.polygons.length > 0).length;
  console.log(`\nsite:check passed. Note: ${approx} polygon(s) are still marked approximate; review vertices in geojson.io (README).`);
}

main();
