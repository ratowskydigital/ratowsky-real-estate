/**
 * Coverage validator for the geo layer.
 *
 *   npm run geo:check
 *
 * Fails the build (exit 1) when:
 *   - a community or city page has no GeoArea
 *   - a GeoArea points at a slug with no page
 *   - a child area is not fully inside its parent (e.g. an island outside the Harbour)
 *   - a ring is degenerate (fewer than 3 vertices or zero area)
 *   - sibling community polygons overlap each other's centroids
 *   - the community's declared parentCommunitySlug disagrees with the geo parentSlug
 */
import { communities } from "../src/content/communities";
import { cities } from "../src/content/cities";
import { geoAreas, getGeoArea } from "../src/content/geo";
import {
  areaCentroid,
  areaContains,
  pointInArea,
  ringSignedArea,
  descendantSlugs,
} from "../src/lib/geo";

const errors: string[] = [];
const warnings: string[] = [];

// 1. Every page has coverage, every coverage has a page.
for (const c of communities) {
  const g = getGeoArea(c.slug);
  if (!g) errors.push(`community "${c.slug}" has no GeoArea`);
  else if (g.kind !== "community") errors.push(`GeoArea "${c.slug}" should be kind=community`);
  else {
    const expectedParent = c.parentCommunitySlug ?? c.parentCitySlug;
    if (g.parentSlug !== expectedParent) {
      errors.push(
        `GeoArea "${c.slug}" parentSlug=${g.parentSlug} but the community page says ${expectedParent}`,
      );
    }
    if (g.polygons.length === 0) errors.push(`community "${c.slug}" has no polygon`);
  }
}
for (const city of cities) {
  const g = getGeoArea(city.slug);
  if (!g) errors.push(`city "${city.slug}" has no GeoArea`);
  else if (g.kind !== "city") errors.push(`GeoArea "${city.slug}" should be kind=city`);
  else if (!g.mlsCity) errors.push(`city "${city.slug}" has no mlsCity matcher`);
}
for (const g of geoAreas) {
  const hasPage =
    g.kind === "city" ? cities.some((c) => c.slug === g.slug) : communities.some((c) => c.slug === g.slug);
  if (!hasPage) errors.push(`GeoArea "${g.slug}" has no matching page`);
  if (g.parentSlug && !getGeoArea(g.parentSlug)) {
    errors.push(`GeoArea "${g.slug}" parentSlug "${g.parentSlug}" does not exist`);
  }
}

// 2. Ring sanity.
for (const g of geoAreas) {
  g.polygons.forEach((ring, i) => {
    if (ring.length < 3) errors.push(`${g.slug} polygon[${i}] has fewer than 3 vertices`);
    if (Math.abs(ringSignedArea(ring)) < 1e-9) errors.push(`${g.slug} polygon[${i}] has zero area`);
    for (const [lng, lat] of ring) {
      if (lat < 33.3 || lat > 33.95 || lng < -118.3 || lng > -117.5) {
        errors.push(`${g.slug} polygon[${i}] vertex [${lng}, ${lat}] is outside Orange County`);
      }
    }
  });
}

// 3. Containment — every child fully inside its parent.
for (const g of geoAreas) {
  if (!g.parentSlug) continue;
  const parent = getGeoArea(g.parentSlug);
  if (!parent) continue;
  if (!areaContains(parent, g)) {
    const bad = g.polygons
      .flatMap((ring, i) => ring.filter((v) => !pointInArea(v, parent)).map((v) => `poly${i} [${v[0]}, ${v[1]}]`))
      .slice(0, 4)
      .join(", ");
    errors.push(`"${g.slug}" is not fully inside "${parent.slug}" — outside vertices: ${bad}`);
  }
}

// 4. Sibling overlap — no community centroid should fall inside a sibling.
const bySlug = new Map(geoAreas.map((g) => [g.slug, g] as const));
for (const g of geoAreas) {
  if (g.kind !== "community") continue;
  const c = areaCentroid(g);
  if (!c) continue;
  for (const other of geoAreas) {
    if (other.slug === g.slug || other.kind !== "community") continue;
    if (other.parentSlug !== g.parentSlug) continue;
    if (pointInArea(c, other)) {
      errors.push(`centroid of "${g.slug}" falls inside sibling "${other.slug}" — polygons overlap`);
    }
  }
}

// 5. Report: what each parent covers.
console.log("Coverage tree:");
for (const g of geoAreas.filter((a) => !a.parentSlug)) {
  const print = (slug: string, depth: number) => {
    const a = bySlug.get(slug)!;
    const tag = a.precision === "verified" ? "" : "  (approximate)";
    console.log(`${"  ".repeat(depth)}- ${a.name} [${a.slug}]${tag}`);
    for (const child of geoAreas.filter((x) => x.parentSlug === slug)) print(child.slug, depth + 1);
  };
  print(g.slug, 0);
}
const harbour = getGeoArea("huntington-harbour");
if (harbour) {
  const kids = descendantSlugs("huntington-harbour");
  console.log(`\nHuntington Harbour covers ${kids.length} sub-areas: ${kids.join(", ")}`);
}

const approx = geoAreas.filter((a) => a.precision === "approximate" && a.polygons.length > 0);
if (approx.length > 0) {
  warnings.push(
    `${approx.length} polygon(s) are still marked "approximate": ${approx.map((a) => a.slug).join(", ")}. Review them in geojson.io (npm run geo:export) and set precision: "verified" with a reviewedOn date once checked.`,
  );
}

console.log("");
for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
if (errors.length > 0) {
  console.log(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log(`geo:check passed — ${geoAreas.length} areas, ${warnings.length} warning(s).`);
