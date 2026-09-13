/**
 * CoreLogic Trestle MLS integration — scaffold
 *
 * Status: INACTIVE — activate by setting TRESTLE_CLIENT_ID and TRESTLE_CLIENT_SECRET
 *         environment variables in Vercel. Once set, the OAuth2 client will
 *         automatically obtain tokens and the listing helpers below will return
 *         real data from the Trestle OData feed.
 *
 * Required env vars:
 *   TRESTLE_CLIENT_ID      — CoreLogic Trestle OAuth2 client ID
 *   TRESTLE_CLIENT_SECRET  — CoreLogic Trestle OAuth2 client secret
 *
 * Documentation:
 *   https://trestle.corelogic.com/documentation
 *   https://trestle.corelogic.com/documentation/getting-started
 *
 * Endpoints used:
 *   Token:    https://api.trestle.io/connect/token
 *   Listings: https://api.trestle.io/reso/odata/Property
 */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

import { getGeoArea } from "@/content/geo";
import { listingBelongsTo, odataFilterForArea, odataLiteral, resolveCommunity } from "@/lib/geo";
import type { GeoMatch } from "@/lib/geo";

const TRESTLE_TOKEN_URL = "https://api.trestle.io/connect/token";
const TRESTLE_ODATA_BASE = "https://api.trestle.io/reso/odata";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Normalised listing record returned by helpers in this module. */
export type TrestleListing = {
  listingKey: string;
  listingId: string;
  mlsStatus: string;
  standardStatus: "Active" | "Pending" | "Closed" | "Expired" | string;
  listPrice: number | null;
  closePrice: number | null;
  bedroomsTotal: number | null;
  bathroomsTotalDecimal: number | null;
  livingArea: number | null;
  lotSizeSquareFeet: number | null;
  yearBuilt: number | null;
  city: string;
  postalCode: string;
  stateOrProvince: string;
  streetNumber: string;
  streetName: string;
  unparsedAddress: string;
  latitude: number | null;
  longitude: number | null;
  publicRemarks: string;
  modificationTimestamp: string;
  photos: string[]; // URLs from Media sub-resource
  daysOnMarket: number | null;
  listDate: string | null;
  closeDate: string | null;
  propertyType: string;
  propertySubType: string;
  waterBodyName: string | null;
  waterfrontFeatures: string[];
  dockFeatures: string[];
  communityFeatures: string[];
  /** CRMLS subdivision / tract name, e.g. "Trinidad Island (HTRI)". */
  subdivisionName: string | null;
  /** CRMLS area, e.g. "17 - Northwest Huntington Beach". */
  mlsAreaMajor: string | null;
  /** Community page slug resolved from the coverage layer, if any. */
  communitySlug: string | null;
  /** Which signal resolved the community: subdivision, street, or polygon. */
  communityMatchedBy: GeoMatch["matchedBy"] | null;
};

/** Raw Trestle Property record (partial — only fields we map). */
type TrestleRawProperty = {
  ListingKey?: string;
  ListingId?: string;
  MlsStatus?: string;
  StandardStatus?: string;
  ListPrice?: number;
  ClosePrice?: number;
  BedroomsTotal?: number;
  BathroomsTotalDecimal?: number;
  LivingArea?: number;
  LotSizeSquareFeet?: number;
  YearBuilt?: number;
  City?: string;
  PostalCode?: string;
  StateOrProvince?: string;
  StreetNumber?: string;
  StreetName?: string;
  UnparsedAddress?: string;
  Latitude?: number;
  Longitude?: number;
  PublicRemarks?: string;
  ModificationTimestamp?: string;
  DaysOnMarket?: number;
  ListingContractDate?: string;
  CloseDate?: string;
  PropertyType?: string;
  PropertySubType?: string;
  WaterBodyName?: string;
  WaterfrontFeatures?: string[];
  DockFeatures?: string[];
  CommunityFeatures?: string[];
  SubdivisionName?: string;
  MLSAreaMajor?: string;
  Media?: { MediaURL?: string; Order?: number }[];
};

type ODataResponse<T> = {
  "@odata.context"?: string;
  "@odata.nextLink"?: string;
  value: T[];
};

// ---------------------------------------------------------------------------
// OAuth2 token cache (in-memory, server-side only)
// ---------------------------------------------------------------------------

let _tokenCache: {
  accessToken: string;
  expiresAt: number; // ms since epoch
} | null = null;

async function getAccessToken(): Promise<string> {
  if (_tokenCache && Date.now() < _tokenCache.expiresAt - 30_000) {
    return _tokenCache.accessToken;
  }

  const { TRESTLE_CLIENT_ID, TRESTLE_CLIENT_SECRET } = process.env;

  if (!TRESTLE_CLIENT_ID || !TRESTLE_CLIENT_SECRET) {
    throw new Error(
      "Trestle credentials not configured. Set TRESTLE_CLIENT_ID and TRESTLE_CLIENT_SECRET."
    );
  }

  const res = await fetch(TRESTLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: TRESTLE_CLIENT_ID,
      client_secret: TRESTLE_CLIENT_SECRET,
      grant_type: "client_credentials",
      scope: "api",
    }),
  });

  if (!res.ok) {
    // Provider body stays in the server log; the public route echoes error messages.
    const body = await res.text();
    console.error(`[trestle] token request failed ${res.status}: ${body}`);
    throw new Error(`Trestle token request failed with status ${res.status}.`);
  }

  const data = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };

  _tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };

  return _tokenCache.accessToken;
}

// ---------------------------------------------------------------------------
// OData fetch helper
// ---------------------------------------------------------------------------

async function odataFetch<T>(path: string, params: Record<string, string> = {}): Promise<ODataResponse<T>> {
  const url = new URL(`${TRESTLE_ODATA_BASE}/${path}`);
  for (const [key, val] of Object.entries(params)) {
    url.searchParams.set(key, val);
  }
  return odataFetchUrl<T>(url.toString());
}

/**
 * Fetch an absolute OData URL. Used for the first page (built by odataFetch)
 * and for every `@odata.nextLink` Trestle hands back, which is already a
 * complete URL carrying the original $filter/$select/$skiptoken.
 */
async function odataFetchUrl<T>(url: string): Promise<ODataResponse<T>> {
  if (!isTrestleOdataUrl(url)) {
    // Never send the bearer token anywhere but Trestle, whatever a nextLink says.
    console.error("[trestle] refusing to follow a link outside the OData base:", url);
    throw new Error("Trestle returned a continuation link outside its API; request aborted.");
  }
  const token = await getAccessToken();

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    // Next.js 15 fetch caching: revalidate every 5 minutes
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    // Full URL (with $skiptoken) and body stay in the server log; the thrown
    // message is what the public route echoes back, so it carries only the status.
    const body = await res.text();
    console.error(`[trestle] OData request failed ${res.status} [${url}]: ${body}`);
    throw new Error(`Trestle OData request failed with status ${res.status}.`);
  }

  return (await res.json()) as ODataResponse<T>;
}

/** True only for URLs on Trestle's origin whose path is the OData base or a resource under it. */
function isTrestleOdataUrl(url: string): boolean {
  let parsed: URL;
  let base: URL;
  try {
    parsed = new URL(url);
    base = new URL(TRESTLE_ODATA_BASE);
  } catch {
    return false;
  }
  if (parsed.origin !== base.origin) return false;
  const basePath = base.pathname.replace(/\/$/, "");
  return parsed.pathname === basePath || parsed.pathname.startsWith(basePath + "/");
}

// ---------------------------------------------------------------------------
// Normaliser
// ---------------------------------------------------------------------------

function normalise(raw: TrestleRawProperty): TrestleListing {
  const photos = (raw.Media ?? [])
    .sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0))
    .map((m) => m.MediaURL ?? "")
    .filter(Boolean);

  const match = resolveCommunity({
    latitude: raw.Latitude ?? null,
    longitude: raw.Longitude ?? null,
    subdivisionName: raw.SubdivisionName ?? null,
    streetName: raw.StreetName ?? null,
    postalCode: raw.PostalCode ?? null,
    city: raw.City ?? null,
  });

  return {
    listingKey: raw.ListingKey ?? "",
    listingId: raw.ListingId ?? "",
    mlsStatus: raw.MlsStatus ?? "",
    standardStatus: raw.StandardStatus ?? "",
    listPrice: raw.ListPrice ?? null,
    closePrice: raw.ClosePrice ?? null,
    bedroomsTotal: raw.BedroomsTotal ?? null,
    bathroomsTotalDecimal: raw.BathroomsTotalDecimal ?? null,
    livingArea: raw.LivingArea ?? null,
    lotSizeSquareFeet: raw.LotSizeSquareFeet ?? null,
    yearBuilt: raw.YearBuilt ?? null,
    city: raw.City ?? "",
    postalCode: raw.PostalCode ?? "",
    stateOrProvince: raw.StateOrProvince ?? "",
    streetNumber: raw.StreetNumber ?? "",
    streetName: raw.StreetName ?? "",
    unparsedAddress: raw.UnparsedAddress ?? "",
    latitude: raw.Latitude ?? null,
    longitude: raw.Longitude ?? null,
    publicRemarks: raw.PublicRemarks ?? "",
    modificationTimestamp: raw.ModificationTimestamp ?? "",
    daysOnMarket: raw.DaysOnMarket ?? null,
    listDate: raw.ListingContractDate ?? null,
    closeDate: raw.CloseDate ?? null,
    propertyType: raw.PropertyType ?? "",
    propertySubType: raw.PropertySubType ?? "",
    waterBodyName: raw.WaterBodyName ?? null,
    waterfrontFeatures: raw.WaterfrontFeatures ?? [],
    dockFeatures: raw.DockFeatures ?? [],
    communityFeatures: raw.CommunityFeatures ?? [],
    subdivisionName: raw.SubdivisionName ?? null,
    mlsAreaMajor: raw.MLSAreaMajor ?? null,
    communitySlug: match?.area.slug ?? null,
    communityMatchedBy: match?.matchedBy ?? null,
    photos,
  };
}

// ---------------------------------------------------------------------------
// Listing query helpers
// ---------------------------------------------------------------------------

/** Base $select clause — request only the fields we use. */
const BASE_SELECT = [
  "ListingKey",
  "ListingId",
  "MlsStatus",
  "StandardStatus",
  "ListPrice",
  "ClosePrice",
  "BedroomsTotal",
  "BathroomsTotalDecimal",
  "LivingArea",
  "LotSizeSquareFeet",
  "YearBuilt",
  "City",
  "PostalCode",
  "StateOrProvince",
  "StreetNumber",
  "StreetName",
  "UnparsedAddress",
  "Latitude",
  "Longitude",
  "PublicRemarks",
  "ModificationTimestamp",
  "DaysOnMarket",
  "ListingContractDate",
  "CloseDate",
  "PropertyType",
  "PropertySubType",
  "WaterBodyName",
  "WaterfrontFeatures",
  "DockFeatures",
  "CommunityFeatures",
  "SubdivisionName",
  "MLSAreaMajor",
  "Media",
].join(",");

export type ListingsQueryOptions = {
  /** OData $filter clause. Default: active residential in HB */
  filter?: string;
  /** Number of listings to return. Default: 24 */
  top?: number;
  /** OData $orderby clause. Default: ModificationTimestamp desc */
  orderBy?: string;
};

/** One page of listings plus the link to the next page, when Trestle has more. */
type ListingsPage = { listings: TrestleListing[]; nextLink: string | null };

async function getListingsPage(options: ListingsQueryOptions = {}): Promise<ListingsPage> {
  const {
    filter = "StandardStatus eq 'Active' and City eq 'Huntington Beach' and PropertyType eq 'Residential'",
    top = 24,
    orderBy = "ModificationTimestamp desc",
  } = options;

  const data = await odataFetch<TrestleRawProperty>("Property", {
    $filter: filter,
    $top: String(top),
    $orderby: orderBy,
    $select: BASE_SELECT,
    $expand: "Media($select=MediaURL,Order;$orderby=Order asc;$top=10)",
  });

  return { listings: data.value.map(normalise), nextLink: data["@odata.nextLink"] ?? null };
}

/**
 * Fetch listings from Trestle.
 * Throws if Trestle credentials are not configured.
 */
export async function getListings(options: ListingsQueryOptions = {}): Promise<TrestleListing[]> {
  return (await getListingsPage(options)).listings;
}

/**
 * Fetch a single listing by ListingKey.
 */
export async function getListing(listingKey: string): Promise<TrestleListing | null> {
  const data = await odataFetch<TrestleRawProperty>(`Property('${listingKey}')`, {
    $select: BASE_SELECT,
    $expand: "Media($select=MediaURL,Order;$orderby=Order asc;$top=30)",
  });

  // Single-entity endpoint returns the record directly (no .value array)
  const raw = (data as unknown as TrestleRawProperty) ?? null;
  return raw ? normalise(raw) : null;
}

/** Trestle's maximum page size for the coarse area query. */
const AREA_PAGE_SIZE = 200;
/** Smallest coarse page worth a round trip; below this the per-request overhead dominates. */
const AREA_MIN_PAGE_SIZE = 25;
/** Candidates fetched per match wanted. The padded box and matcher clauses usually reject well under three in four. */
const AREA_CANDIDATES_PER_MATCH = 4;
/** Hard stop on candidates examined per request so a sparse area can never turn into an unbounded crawl. */
const AREA_MAX_CANDIDATES = 600;

/**
 * Coarse page size for a request wanting `top` matches: a few candidates per
 * match, never smaller than a useful page and never above Trestle's maximum.
 * Requesting more than `top` is what keeps the nextLink alive when the first
 * page's candidates are rejected; requesting the maximum for every call
 * would pull 200 records plus media for a `top=1` request.
 */
function coarsePageSize(top: number): number {
  return Math.min(AREA_PAGE_SIZE, Math.max(AREA_MIN_PAGE_SIZE, top * AREA_CANDIDATES_PER_MATCH));
}

export type AreaListingsResult = {
  listings: TrestleListing[];
  /**
   * True when the candidate cap was hit while Trestle still had more
   * candidates and fewer than `top` matches had been found. The listings
   * returned are correct but may not be the complete set for the area;
   * consumers should say so rather than present them as everything.
   */
  truncated: boolean;
  /** Number of coarse candidate pages fetched from Trestle. */
  pagesFetched: number;
  /** Number of coarse candidates examined. */
  candidatesExamined: number;
};

/**
 * Listings inside a community or city coverage area.
 *
 * Two-pass: Trestle gets a coarse OData filter (bounding box + postal code
 * for communities, City field + postal codes for cities) so the feed only
 * returns candidates, then every candidate is checked against the page's
 * polygon and CRMLS subdivision matchers in `resolveCommunity`. A parent
 * area (Huntington Harbour) returns listings from every child (all five
 * islands plus Mainland), which is what the dashboards expect.
 *
 * Because the coarse filter is wider than the polygon, a single page of
 * candidates can hold fewer than `top` matches even when more exist. Pages
 * are followed through `@odata.nextLink` until `top` matches are collected
 * or the feed is exhausted. The crawl is bounded two ways: the page size
 * scales with `top` (see coarsePageSize) so a small request stays small,
 * and AREA_MAX_CANDIDATES caps the records examined per request; when the
 * cap stops the loop early the result is flagged `truncated` so callers
 * never present an under-filled page as the whole area. Every page fetch
 * goes through Next's data cache (revalidate 300s), so repeated dashboard
 * loads of the same area reuse the same Trestle responses. Order is
 * preserved, so `orderBy` applies across the whole result, not just the
 * first page.
 */
export type PolygonMatchPolicy =
  /** Pin-only matches count for every area, including rings still marked approximate (default). */
  | "all"
  /** Pin-only matches count only for areas whose ring has been reviewed (`precision: "verified"`). */
  | "verified-only";

export async function getListingsInArea(
  slug: string,
  options: {
    status?: string;
    propertyType?: string;
    top?: number;
    orderBy?: string;
    /**
     * How to treat listings that reach a page only through the polygon (no
     * CRMLS subdivision or street match). Matchers are checked first and
     * decide most CRMLS records; the polygon is the fallback for pin-only
     * records. Every listing carries `communityMatchedBy` so a dashboard can
     * flag polygon matches, and `area.precision` says whether the ring has
     * been reviewed. "verified-only" drops polygon matches on approximate
     * rings for callers that would rather show fewer listings than risk a
     * boundary miss before the geojson.io review pass. Only applies to
     * community targets; city targets are matcher-routed.
     */
    polygonMatches?: PolygonMatchPolicy;
  } = {},
): Promise<AreaListingsResult> {
  const area = getGeoArea(slug);
  if (!area) throw new Error(`Unknown coverage area: ${slug}`);

  const {
    status = "Active",
    propertyType = "Residential",
    top: topOption = 48,
    orderBy = "ModificationTimestamp desc",
    polygonMatches = "all",
  } = options;
  // Defensive normalisation for callers other than the route: a non-finite or
  // non-positive target would otherwise become `$top=NaN` or an off-by-one stop.
  const top = Number.isFinite(topOption) && topOption >= 1 ? Math.floor(topOption) : 48;

  const filter = [
    `StandardStatus eq ${odataLiteral(status)}`,
    `PropertyType eq ${odataLiteral(propertyType)}`,
    odataFilterForArea(area),
  ]
    .filter(Boolean)
    .join(" and ");

  const belongs = (l: TrestleListing) => {
    const ok = listingBelongsTo(slug, {
      latitude: l.latitude,
      longitude: l.longitude,
      subdivisionName: l.subdivisionName,
      streetName: l.streetName,
      postalCode: l.postalCode,
      city: l.city,
    });
    if (!ok) return false;
    // City targets are matcher-routed (resolveCity); a community ring's review
    // state has no bearing on whether a listing belongs to the city.
    if (area.kind === "community" && polygonMatches === "verified-only" && l.communityMatchedBy === "polygon") {
      const matched = l.communitySlug ? getGeoArea(l.communitySlug) : undefined;
      return matched?.precision === "verified";
    }
    return true;
  };

  const matched: TrestleListing[] = [];
  let page = await getListingsPage({ filter, top: coarsePageSize(top), orderBy });
  let pagesFetched = 1;
  let candidatesExamined = 0;
  for (;;) {
    for (const l of page.listings) {
      candidatesExamined++;
      if (belongs(l)) matched.push(l);
      if (matched.length >= top) return { listings: matched, truncated: false, pagesFetched, candidatesExamined };
    }
    if (!page.nextLink) return { listings: matched, truncated: false, pagesFetched, candidatesExamined };
    if (candidatesExamined >= AREA_MAX_CANDIDATES) {
      return { listings: matched, truncated: true, pagesFetched, candidatesExamined };
    }
    const next = await odataFetchUrl<TrestleRawProperty>(page.nextLink);
    page = { listings: next.value.map(normalise), nextLink: next["@odata.nextLink"] ?? null };
    pagesFetched++;
  }
}

/**
 * Check whether Trestle credentials are present.
 * Used by the listings route to return graceful "coming soon" state
 * when the API is not yet activated.
 */
export function isTrestleConfigured(): boolean {
  return (
    Boolean(process.env.TRESTLE_CLIENT_ID) &&
    Boolean(process.env.TRESTLE_CLIENT_SECRET)
  );
}
