/**
 * Resolver smoke test for the geo layer.
 *
 *   npm run geo:smoke
 *
 * Feeds sample CRMLS-shaped records through resolveCommunity / resolveCity
 * and asserts each lands on the page it should. Add a case here whenever a
 * listing shows up on the wrong dashboard.
 */
import { resolveCommunity, resolveCity, listingBelongsTo, areaCentroid } from "../src/lib/geo";
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
];
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
