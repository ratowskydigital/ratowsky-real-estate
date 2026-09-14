import type { GeoArea } from "./_types";
import { huntingtonBeachGeo } from "./huntington-beach";
import { orangeCountyCityGeo } from "./orange-county-cities";

export type { GeoArea, Ring, GeoPrecision } from "./_types";

/** Every area we publish coverage for, cities and communities alike. */
export const geoAreas: GeoArea[] = [...huntingtonBeachGeo, ...orangeCountyCityGeo];

export function getGeoArea(slug: string): GeoArea | undefined {
  return geoAreas.find((a) => a.slug === slug);
}

export function getGeoChildren(parentSlug: string): GeoArea[] {
  return geoAreas.filter((a) => a.parentSlug === parentSlug);
}

/** Walk parentSlug links up to the city. Returns [self, parent, ..., city]. */
export function getGeoLineage(slug: string): GeoArea[] {
  const out: GeoArea[] = [];
  let cur = getGeoArea(slug);
  const seen = new Set<string>();
  while (cur && !seen.has(cur.slug)) {
    out.push(cur);
    seen.add(cur.slug);
    cur = cur.parentSlug ? getGeoArea(cur.parentSlug) : undefined;
  }
  return out;
}
