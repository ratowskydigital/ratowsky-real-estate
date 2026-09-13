/**
 * Resolver smoke test for the geo layer.
 *
 *   npm run geo:smoke
 *
 * Feeds sample CRMLS-shaped records through resolveCommunity / resolveCity
 * and asserts each lands on the page it should. Add a case here whenever a
 * listing shows up on the wrong dashboard.
 */
import {
  resolveCommunity,
  resolveCity,
  listingBelongsTo,
  areaCentroid,
  areaContains,
  odataFilterForArea,
  odataLiteral,
  ringsOverlap,
} from "../src/lib/geo";
import type { GeoArea, Ring } from "../src/content/geo";
import type { ListingLocationHints } from "../src/lib/geo";
import { geoAreas, getGeoArea } from "../src/content/geo";

type Case = { name: string; hints: ListingLocationHints; expect: string | null };

const cases: Case[] = [
  {
    name: "Trinidad by CRMLS subdivision",
    hints: { subdivisionName: "Trinidad Island (HTRI)", postalCode: "92649", city: "Huntington Beach" },
    expect: "trinidad-island",
  },
  {
    name: "Generic Harbour subdivision lands on the Harbour page",
    hints: { subdivisionName: "Huntington Harbour (HHAR)", postalCode: "92649" },
    expect: "huntington-harbour",
  },
  {
    name: "Coral Cay is Mainland",
    hints: { subdivisionName: "Coral Cay (HCC)", postalCode: "92649" },
    expect: "harbour-mainland",
  },
  {
    name: "Seacliff on the Greens beats Seacliff",
    hints: { subdivisionName: "Seacliff on the Greens (SCOG)", postalCode: "92648" },
    expect: "seacliff-on-the-greens",
  },
  {
    name: "Trinidad name with a downtown zip is rejected",
    hints: { subdivisionName: "Trinidad Island", postalCode: "92648" },
    expect: null,
  },
  {
    name: "Davenport by street name",
    hints: { streetName: "Davenport", postalCode: "92649" },
    expect: "davenport-island",
  },
  {
    name: "Pin only, no subdivision — Harbour Mainland east block",
    hints: { latitude: 33.72, longitude: -118.045, postalCode: "92649" },
    expect: "harbour-mainland",
  },
  {
    name: "Pin in the Pacific resolves to nothing",
    hints: { latitude: 33.6, longitude: -118.1 },
    expect: null,
  },
];

let fail = 0;
for (const t of cases) {
  const got = resolveCommunity(t.hints)?.area.slug ?? null;
  const ok = got === t.expect;
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} ${t.name}: got ${got}, expected ${t.expect}`);
}

// Every community centroid must belong on its own page. A parent's centroid
// may resolve to a child island first; listingBelongsTo walks back up.
for (const a of geoAreas.filter((x) => x.kind === "community")) {
  const c = areaCentroid(a);
  if (!c) continue;
  const ok = listingBelongsTo(a.slug, { latitude: c[1], longitude: c[0] });
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} centroid of ${a.slug} belongs on its own page`);
}

// The Harbour page must claim every island and Mainland listing.
const harbourKids = [
  "trinidad-island",
  "davenport-island",
  "humboldt-island",
  "gilbert-island",
  "admiralty-island",
  "harbour-mainland",
];
for (const k of harbourKids) {
  const c = areaCentroid(getGeoArea(k)!)!;
  const ok = listingBelongsTo("huntington-harbour", { latitude: c[1], longitude: c[0] });
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} ${k} listing belongs on the huntington-harbour page`);
}

const cityCases: { hints: ListingLocationHints; expect: string | null }[] = [
  { hints: { city: "Newport Beach", postalCode: "92657" }, expect: "newport-coast" },
  { hints: { city: "Newport Beach", postalCode: "92625" }, expect: "corona-del-mar" },
  { hints: { city: "Newport Beach", postalCode: "92660" }, expect: "newport-beach" },
  { hints: { city: "Newport Coast", postalCode: "92657" }, expect: "newport-coast" },
  { hints: { city: "Huntington Beach", postalCode: "92649" }, expect: "huntington-beach" },
  { hints: { city: "Sunset Beach", postalCode: "90742" }, expect: "huntington-beach" },
  { hints: { city: "Anaheim", postalCode: "92801" }, expect: null },
  // The CRMLS City field is authoritative outside the explicit umbrella mapping.
  { hints: { city: "Huntington Beach", postalCode: "92625" }, expect: "huntington-beach" },
  { hints: { city: "Newport Beach", postalCode: "90740" }, expect: "newport-beach" },
  { hints: { city: "Huntington Beach", postalCode: "92615" }, expect: "huntington-beach" },
  // Child filed with an umbrella zip goes back to the umbrella.
  { hints: { city: "Newport Coast", postalCode: "92660" }, expect: "newport-beach" },
  { hints: { city: "Corona del Mar", postalCode: "92625" }, expect: "corona-del-mar" },
  // Unrecognised City value falls back to postal code.
  { hints: { city: "Huntington Bch", postalCode: "92648" }, expect: "huntington-beach" },
];

// The overlap detector must catch shared area and ignore shared boundaries.
{
  const trinidad: Ring = [[-118.0612, 33.7182], [-118.0562, 33.7182], [-118.0562, 33.7272], [-118.0612, 33.7272]];
  const oldDavenport: Ring = [[-118.058, 33.7145], [-118.0515, 33.7145], [-118.0515, 33.7198], [-118.058, 33.7198]];
  const newDavenport: Ring = [[-118.0558, 33.7145], [-118.0515, 33.7145], [-118.0515, 33.7198], [-118.0558, 33.7198]];
  // Two rings meeting along one edge (the PCH line) share no interior.
  const west: Ring = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const east: Ring = [[1, 0], [2, 0], [2, 1], [1, 1]];
  // Elongated rings whose centroids are outside each other but which still cross.
  const bar: Ring = [[0, 0.4], [3, 0.4], [3, 0.6], [0, 0.6]];
  const post: Ring = [[1.4, -1], [1.6, -1], [1.6, 2], [1.4, 2]];
  // Coincident and collinear cases: no proper crossing, no vertex strictly inside.
  const identical: Ring = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const identicalExtraVertex: Ring = [[0, 0], [0.5, 0], [1, 0], [1, 1], [0, 1]];
  const slidLeft: Ring = [[0, 0], [2, 0], [2, 1], [0, 1]];
  const slidRight: Ring = [[1, 0], [3, 0], [3, 1], [1, 1]];
  const bottomHalf: Ring = [[0, 0], [2, 0], [2, 1], [0, 1]];
  const fullSquare: Ring = [[0, 0], [2, 0], [2, 2], [0, 2]];
  const cornerTouch: Ring = [[1, 1], [2, 1], [2, 2], [1, 2]];
  const checks: [string, boolean, boolean][] = [
    ["old Davenport ring overlapped Trinidad", ringsOverlap(oldDavenport, trinidad), true],
    ["new Davenport ring is disjoint from Trinidad", ringsOverlap(newDavenport, trinidad), false],
    ["rings sharing only an edge do not overlap", ringsOverlap(west, east), false],
    ["crossing rings overlap even when neither centroid is inside the other", ringsOverlap(bar, post), true],
    ["identical rings overlap", ringsOverlap(identical, identical), true],
    ["same outline with an extra collinear vertex overlaps", ringsOverlap(identical, identicalExtraVertex), true],
    ["collinear rings sharing a strip overlap", ringsOverlap(slidLeft, slidRight), true],
    ["a ring covering half of another overlaps it", ringsOverlap(bottomHalf, fullSquare), true],
    ["rings touching at a single corner do not overlap", ringsOverlap(identical, cornerTouch), false],
  ];
  for (const [name, got, want] of checks) {
    const ok = got === want;
    if (!ok) fail++;
    console.log(`${ok ? "ok  " : "FAIL"} ${name}`);
  }
}

// Containment must reject an edge that leaves a concave parent, and must not
// claim containment when the parent has no polygon at all.
{
  const area = (slug: string, polygons: Ring[], extra: Partial<GeoArea> = {}): GeoArea => ({
    slug,
    kind: "community",
    name: slug,
    precision: "approximate",
    boundaryNote: "smoke fixture",
    polygons,
    ...extra,
  });
  // U-shaped parent: the notch between x=1..2 above y=1 is outside.
  const uShape: Ring = [[0, 0], [3, 0], [3, 3], [2, 3], [2, 1], [1, 1], [1, 3], [0, 3]];
  const parent = area("u", [uShape]);
  const leftArm = area("left-arm", [[[0.2, 0.2], [0.8, 0.2], [0.8, 2.8], [0.2, 2.8]]]);
  const bridge = area("bridge", [[[0.5, 2], [2.5, 2], [2.5, 2.5], [0.5, 2.5]]]);
  const bridgeOnRim = area("bridge-on-rim", [[[0.5, 1], [2.5, 1], [2.5, 0.5], [0.5, 0.5]]]);
  const bridgeAboveRim = area("bridge-above-rim", [[[0.5, 1], [2.5, 1], [2.5, 1.5], [0.5, 1.5]]]);
  const matcherOnlyCity = area("no-polygon-city", [], { kind: "city", mlsCity: "Nowhere" });
  const checks: [string, boolean, boolean][] = [
    ["child inside one arm of a U-shaped parent is contained", areaContains(parent, leftArm), true],
    ["child bridging the notch has every vertex inside but is not contained", areaContains(parent, bridge), false],
    ["child whose top edge runs along the notch rim is contained", areaContains(parent, bridgeOnRim), true],
    ["child whose bottom edge runs along the rim and body sits in the notch is not contained", areaContains(parent, bridgeAboveRim), false],
    ["a parent with no polygon cannot claim containment", areaContains(matcherOnlyCity, leftArm), false],
    ["a child with no polygon is trivially contained", areaContains(parent, area("empty", [])), true],
  ];
  for (const [name, got, want] of checks) {
    const ok = got === want;
    if (!ok) fail++;
    console.log(`${ok ? "ok  " : "FAIL"} ${name}`);
  }
}

// The coarse Trestle filter must be a superset of what the resolver accepts.
{
  const hb = getGeoArea("huntington-beach")!;
  const cityFilter = odataFilterForArea(hb);
  const coast = odataFilterForArea(getGeoArea("newport-coast")!);
  const trinidadFilter = odataFilterForArea(getGeoArea("trinidad-island")!);
  const checks: [string, boolean][] = [
    ["city filter matches on the CRMLS City value", cityFilter.includes("City eq 'Huntington Beach'")],
    ["city filter matches on aliases", cityFilter.includes("City eq 'Sunset Beach'")],
    ["city filter includes postal codes so unrecognised City values still reach the resolver", cityFilter.includes("PostalCode eq '92648'")],
    ["child city filter reaches umbrella-filed listings by postal code", coast.includes("PostalCode eq '92657'")],
    ["community filter is gated by the padded bounding box", /Latitude ge .* and Longitude ge /.test(trinidadFilter)],
    ["community filter lets records with no postal code through", trinidadFilter.includes("PostalCode eq null")],
  ];
  for (const [name, ok] of checks) {
    if (!ok) fail++;
    console.log(`${ok ? "ok  " : "FAIL"} ${name}`);
  }
}

// OData literal escaping must neutralise quote injection.
{
  const lit = odataLiteral("Huntington Beach' or City ne '");
  const ok = lit === "'Huntington Beach'' or City ne '''";
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} odataLiteral doubles embedded quotes: ${lit}`);
}
for (const t of cityCases) {
  const got = resolveCity(t.hints)?.area.slug ?? null;
  const ok = got === t.expect;
  if (!ok) fail++;
  console.log(`${ok ? "ok  " : "FAIL"} city ${JSON.stringify(t.hints)} -> ${got} (expected ${t.expect})`);
}

if (fail > 0) {
  console.log(`\n${fail} failure(s)`);
  process.exit(1);
}
console.log("\ngeo:smoke passed");
