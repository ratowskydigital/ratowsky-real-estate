/**
 * Geometry helpers for the community / city coverage layer.
 *
 * Everything here is dependency-free on purpose: it runs inside Next.js route
 * handlers, inside the validation script, and can be copied into a dashboard.
 * Coordinates are [longitude, latitude] to match GeoJSON.
 */

import { geoAreas, getGeoArea, getGeoChildren } from "@/content/geo";
import type { GeoArea, Ring } from "@/content/geo";

export type LngLat = [number, number];

export type BBox = {
  west: number;
  south: number;
  east: number;
  north: number;
};

// ---------------------------------------------------------------------------
// Core geometry
// ---------------------------------------------------------------------------

/** Ray-casting point-in-polygon. Points exactly on an edge count as inside. */
export function pointInRing(point: LngLat, ring: Ring): boolean {
  const [x, y] = point;
  let inside = false;
  const n = ring.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];

    // On-edge check (collinear and within the segment's bounding box).
    const cross = (xj - xi) * (y - yi) - (yj - yi) * (x - xi);
    if (
      Math.abs(cross) < 1e-12 &&
      x >= Math.min(xi, xj) - 1e-12 &&
      x <= Math.max(xi, xj) + 1e-12 &&
      y >= Math.min(yi, yj) - 1e-12 &&
      y <= Math.max(yi, yj) + 1e-12
    ) {
      return true;
    }

    const intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

export function pointInArea(point: LngLat, area: GeoArea): boolean {
  return area.polygons.some((ring) => pointInRing(point, ring));
}

export function ringBBox(ring: Ring): BBox {
  let west = Infinity;
  let south = Infinity;
  let east = -Infinity;
  let north = -Infinity;
  for (const [x, y] of ring) {
    if (x < west) west = x;
    if (x > east) east = x;
    if (y < south) south = y;
    if (y > north) north = y;
  }
  return { west, south, east, north };
}

/** Bounding box of all polygons in an area, or null when the area has none. */
export function areaBBox(area: GeoArea): BBox | null {
  if (area.polygons.length === 0) return null;
  const boxes = area.polygons.map(ringBBox);
  return {
    west: Math.min(...boxes.map((b) => b.west)),
    south: Math.min(...boxes.map((b) => b.south)),
    east: Math.max(...boxes.map((b) => b.east)),
    north: Math.max(...boxes.map((b) => b.north)),
  };
}

/** Shoelace area in square degrees — sign tells winding, magnitude is size. */
export function ringSignedArea(ring: Ring): number {
  let sum = 0;
  const n = ring.length;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    sum += x1 * y2 - x2 * y1;
  }
  return sum / 2;
}

/** Centroid of the first polygon — good enough for a map pin or a label. */
export function areaCentroid(area: GeoArea): LngLat | null {
  const ring = area.polygons[0];
  if (!ring) return null;
  const a = ringSignedArea(ring);
  if (Math.abs(a) < 1e-15) {
    const b = ringBBox(ring);
    return [(b.west + b.east) / 2, (b.south + b.north) / 2];
  }
  let cx = 0;
  let cy = 0;
  const n = ring.length;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    const f = x1 * y2 - x2 * y1;
    cx += (x1 + x2) * f;
    cy += (y1 + y2) * f;
  }
  return [cx / (6 * a), cy / (6 * a)];
}

/** Strict proper crossing of two segments (touching endpoints and collinear overlap do not count). */
function segmentsCross(a1: LngLat, a2: LngLat, b1: LngLat, b2: LngLat): boolean {
  const orient = (p: LngLat, q: LngLat, r: LngLat) => (q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]);
  const d1 = orient(b1, b2, a1);
  const d2 = orient(b1, b2, a2);
  const d3 = orient(a1, a2, b1);
  const d4 = orient(a1, a2, b2);
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
}

function onRingBoundary(point: LngLat, ring: Ring): boolean {
  const [x, y] = point;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const cross = (xj - xi) * (y - yi) - (yj - yi) * (x - xi);
    if (
      Math.abs(cross) < 1e-12 &&
      x >= Math.min(xi, xj) - 1e-12 &&
      x <= Math.max(xi, xj) + 1e-12 &&
      y >= Math.min(yi, yj) - 1e-12 &&
      y <= Math.max(yi, yj) + 1e-12
    ) {
      return true;
    }
  }
  return false;
}

/**
 * True when two rings share interior area: any edge properly crosses an edge
 * of the other, or any vertex of one lies strictly inside the other. Rings
 * that only touch along a shared boundary (Sunset Beach and the Harbour meet
 * on the PCH line) are not overlapping.
 */
export function ringsOverlap(a: Ring, b: Ring): boolean {
  for (let i = 0; i < a.length; i++) {
    const a1 = a[i];
    const a2 = a[(i + 1) % a.length];
    for (let j = 0; j < b.length; j++) {
      if (segmentsCross(a1, a2, b[j], b[(j + 1) % b.length])) return true;
    }
  }
  const strictlyInside = (p: LngLat, ring: Ring) => pointInRing(p, ring) && !onRingBoundary(p, ring);
  return a.some((v) => strictlyInside(v, b)) || b.some((v) => strictlyInside(v, a));
}

/** True when any polygon of `a` shares interior area with any polygon of `b`. */
export function areasOverlap(a: GeoArea, b: GeoArea): boolean {
  return a.polygons.some((ra) => b.polygons.some((rb) => ringsOverlap(ra, rb)));
}

/**
 * True when every vertex of `child` sits inside `parent`. For the simple
 * convex-ish rings we draw this is a sufficient containment test, and it is
 * exactly the guarantee we want: "the Harbour page covers every island".
 */
export function areaContains(parent: GeoArea, child: GeoArea): boolean {
  if (parent.polygons.length === 0 || child.polygons.length === 0) return true;
  return child.polygons.every((ring) => ring.every((v) => pointInArea(v, parent)));
}

// ---------------------------------------------------------------------------
// Listing → community resolution
// ---------------------------------------------------------------------------

export type ListingLocationHints = {
  latitude?: number | null;
  longitude?: number | null;
  subdivisionName?: string | null;
  streetName?: string | null;
  postalCode?: string | null;
  city?: string | null;
};

export type GeoMatch = {
  area: GeoArea;
  /** Which signal decided the match. Useful when auditing IDX dashboards. */
  matchedBy: "subdivision" | "street" | "polygon" | "city";
};

function norm(s: string | null | undefined): string {
  return (s ?? "").trim().toLowerCase();
}

function postalOk(area: GeoArea, postalCode: string | null | undefined): boolean {
  if (!area.postalCodes || area.postalCodes.length === 0) return true;
  const pc = norm(postalCode).slice(0, 5);
  if (!pc) return true; // no postal code on the record — do not block
  return area.postalCodes.includes(pc);
}

/**
 * Resolve the most specific community for a listing.
 *
 * Order of evidence:
 *   1. CRMLS SubdivisionName contains one of the area's subdivisionNames
 *      (deepest area wins — "Trinidad Island" beats "Huntington Harbour").
 *   2. StreetName matches an area's exclusive street list.
 *   3. Lat/Lng falls inside the area polygon (deepest area wins).
 * Every step is gated by postal code when the area declares one.
 */
export function resolveCommunity(hints: ListingLocationHints): GeoMatch | null {
  const communities = geoAreas.filter((a) => a.kind === "community");
  const depth = (a: GeoArea): number => {
    let d = 0;
    let cur: GeoArea | undefined = a;
    while (cur?.parentSlug) {
      d++;
      cur = getGeoArea(cur.parentSlug);
    }
    return d;
  };
  const byDepth = [...communities].sort((a, b) => depth(b) - depth(a));

  const sub = norm(hints.subdivisionName);
  if (sub) {
    for (const area of byDepth) {
      if (!postalOk(area, hints.postalCode)) continue;
      if (area.subdivisionNames?.some((n) => sub.includes(norm(n)))) {
        return { area, matchedBy: "subdivision" };
      }
    }
  }

  const street = norm(hints.streetName);
  if (street) {
    for (const area of byDepth) {
      if (!postalOk(area, hints.postalCode)) continue;
      if (area.streetNames?.some((n) => street === norm(n) || street.startsWith(norm(n) + " "))) {
        return { area, matchedBy: "street" };
      }
    }
  }

  if (
    typeof hints.latitude === "number" &&
    typeof hints.longitude === "number" &&
    Number.isFinite(hints.latitude) &&
    Number.isFinite(hints.longitude)
  ) {
    const pt: LngLat = [hints.longitude, hints.latitude];
    for (const area of byDepth) {
      if (!postalOk(area, hints.postalCode)) continue;
      if (pointInArea(pt, area)) return { area, matchedBy: "polygon" };
    }
  }

  return null;
}

/**
 * Resolve the city-level area for a listing.
 *
 * The CRMLS City field is authoritative. Postal codes only change the answer
 * inside an explicit umbrella/child mapping (`umbrellaMlsCity`), which today
 * means Newport Beach <-> Newport Coast / Corona del Mar:
 *   - City = umbrella, postal = child's        -> child
 *   - City = child,    postal = umbrella's     -> umbrella
 * A recognised City with any other postal code stays where the City says
 * (PO-box and edge-case zips exist). Postal-only matching is the last resort
 * for records whose City value we do not recognise at all.
 */
export function resolveCity(hints: ListingLocationHints): GeoMatch | null {
  const cityName = norm(hints.city);
  const pc = norm(hints.postalCode).slice(0, 5);
  const cities = geoAreas.filter((a) => a.kind === "city");
  const hasPostal = (a: GeoArea, code: string) => Boolean(code) && (a.postalCodes ?? []).includes(code);
  const namedAs = (a: GeoArea, name: string) =>
    Boolean(name) && (norm(a.mlsCity) === name || (a.mlsCityAliases ?? []).some((alias) => norm(alias) === name));

  if (cityName) {
    // Umbrella -> child: filed under Newport Beach with a Newport Coast zip.
    const child = cities.find((a) => a.umbrellaMlsCity && norm(a.umbrellaMlsCity) === cityName && hasPostal(a, pc));
    if (child) return { area: child, matchedBy: "city" };

    const direct = cities.find((a) => namedAs(a, cityName));
    if (direct) {
      // Child -> umbrella: filed under Newport Coast with a Newport Beach zip.
      if (direct.umbrellaMlsCity && pc && !hasPostal(direct, pc)) {
        const umbrella = cities.find((a) => namedAs(a, norm(direct.umbrellaMlsCity)));
        if (umbrella && hasPostal(umbrella, pc)) return { area: umbrella, matchedBy: "city" };
      }
      return { area: direct, matchedBy: "city" };
    }
  }

  if (pc) {
    const byPostalOnly = cities.find((a) => hasPostal(a, pc));
    if (byPostalOnly) return { area: byPostalOnly, matchedBy: "city" };
  }
  return null;
}

/**
 * Does the listing belong on the page for `slug`? True for the area itself
 * and for any descendant (a Trinidad listing belongs on the Harbour page).
 */
export function listingBelongsTo(slug: string, hints: ListingLocationHints): boolean {
  const target = getGeoArea(slug);
  if (!target) return false;

  if (target.kind === "city") {
    const c = resolveCity(hints);
    return c?.area.slug === slug;
  }

  const match = resolveCommunity(hints);
  if (!match) return false;
  let cur: GeoArea | undefined = match.area;
  while (cur) {
    if (cur.slug === slug) return true;
    cur = cur.parentSlug ? getGeoArea(cur.parentSlug) : undefined;
  }
  return false;
}

/** All descendant slugs (not including self), depth-first. */
export function descendantSlugs(slug: string): string[] {
  const out: string[] = [];
  const walk = (s: string) => {
    for (const child of getGeoChildren(s)) {
      out.push(child.slug);
      walk(child.slug);
    }
  };
  walk(slug);
  return out;
}

// ---------------------------------------------------------------------------
// OData helpers for Trestle
// ---------------------------------------------------------------------------

/**
 * Escape a value for use inside a single-quoted OData string literal.
 * OData doubles embedded single quotes; nothing else can break out of the
 * literal, so this is sufficient to keep request parameters from injecting
 * extra predicates into a $filter.
 */
export function odataLiteral(value: string): string {
  return `'${String(value).replace(/'/g, "''")}'`;
}

/**
 * Degrees of padding around a community's bounding box in the coarse Trestle
 * query. Every ring is hand-drawn from street descriptions, so a correctly
 * filed listing can sit just outside the box; the padding (roughly 650 m)
 * keeps it in the candidate set so the CRMLS SubdivisionName matcher, which is
 * checked before the polygon, can still claim it. Candidates that match
 * nothing are dropped by `listingBelongsTo`, so padding costs only fetch size.
 */
export const COARSE_QUERY_PAD_DEG = 0.006;

/**
 * Build the coarse OData filter for an area so Trestle only sends back
 * candidates. Polygon precision is applied afterwards in resolveCommunity.
 */
export function odataFilterForArea(area: GeoArea): string {
  const parts: string[] = [];

  if (area.kind === "city" && area.mlsCity) {
    const names = [area.mlsCity, ...(area.mlsCityAliases ?? [])];
    const clauses = names.map((n) => `City eq ${odataLiteral(n)}`);
    if (area.umbrellaMlsCity && area.postalCodes && area.postalCodes.length > 0) {
      // Newport Coast / Corona del Mar listings are often filed under Newport Beach.
      const pcs = area.postalCodes.map((p) => `PostalCode eq ${odataLiteral(p)}`).join(" or ");
      clauses.push(`(City eq ${odataLiteral(area.umbrellaMlsCity)} and (${pcs}))`);
    }
    parts.push(clauses.length === 1 ? clauses[0] : "(" + clauses.join(" or ") + ")");
    return parts.join(" and ");
  }

  const box = areaBBox(area);
  if (box) {
    const pad = COARSE_QUERY_PAD_DEG;
    parts.push(
      `Latitude ge ${(box.south - pad).toFixed(5)} and Latitude le ${(box.north + pad).toFixed(5)}`,
      `Longitude ge ${(box.west - pad).toFixed(5)} and Longitude le ${(box.east + pad).toFixed(5)}`,
    );
  }
  if (area.postalCodes && area.postalCodes.length > 0) {
    parts.push("(" + area.postalCodes.map((p) => `PostalCode eq ${odataLiteral(p)}`).join(" or ") + ")");
  }
  return parts.join(" and ");
}

// ---------------------------------------------------------------------------
// GeoJSON export
// ---------------------------------------------------------------------------

export type GeoJsonFeature = {
  type: "Feature";
  id: string;
  properties: Record<string, unknown>;
  geometry:
    | { type: "Polygon"; coordinates: number[][][] }
    | { type: "MultiPolygon"; coordinates: number[][][][] }
    | null;
};

export type GeoJsonFeatureCollection = {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
};

function closeRing(ring: Ring): number[][] {
  const first = ring[0];
  const last = ring[ring.length - 1];
  const closed = first[0] === last[0] && first[1] === last[1] ? ring : [...ring, first];
  return closed.map(([x, y]) => [x, y]);
}

export function areaToFeature(area: GeoArea): GeoJsonFeature {
  const rings = area.polygons.map(closeRing);
  const geometry: GeoJsonFeature["geometry"] =
    rings.length === 0
      ? null
      : rings.length === 1
        ? { type: "Polygon", coordinates: [rings[0]] }
        : { type: "MultiPolygon", coordinates: rings.map((r) => [r]) };

  const centroid = areaCentroid(area);
  return {
    type: "Feature",
    id: area.slug,
    properties: {
      slug: area.slug,
      name: area.name,
      kind: area.kind,
      parentSlug: area.parentSlug ?? null,
      precision: area.precision,
      reviewedOn: area.reviewedOn ?? null,
      boundaryNote: area.boundaryNote,
      subdivisionNames: area.subdivisionNames ?? [],
      streetNames: area.streetNames ?? [],
      postalCodes: area.postalCodes ?? [],
      mlsCity: area.mlsCity ?? null,
      mlsCityAliases: area.mlsCityAliases ?? [],
      umbrellaMlsCity: area.umbrellaMlsCity ?? null,
      /** "polygon" when geometry is present; "matchers" for city pages routed by CRMLS City + postal code. */
      coverage: area.polygons.length > 0 ? "polygon" : "matchers",
      centroid,
      pageUrl: area.kind === "city" ? `/cities/${area.slug}` : `/communities/${area.slug}`,
    },
    geometry,
  };
}

export function areasToFeatureCollection(areas: GeoArea[] = geoAreas): GeoJsonFeatureCollection {
  return { type: "FeatureCollection", features: areas.map(areaToFeature) };
}
