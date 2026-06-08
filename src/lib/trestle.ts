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
    const body = await res.text();
    throw new Error(`Trestle token request failed: ${res.status} ${body}`);
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
  const token = await getAccessToken();
  const url = new URL(`${TRESTLE_ODATA_BASE}/${path}`);
  for (const [key, val] of Object.entries(params)) {
    url.searchParams.set(key, val);
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    // Next.js 15 fetch caching: revalidate every 5 minutes
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Trestle OData request failed [${path}]: ${res.status} ${body}`);
  }

  return (await res.json()) as ODataResponse<T>;
}

// ---------------------------------------------------------------------------
// Normaliser
// ---------------------------------------------------------------------------

function normalise(raw: TrestleRawProperty): TrestleListing {
  const photos = (raw.Media ?? [])
    .sort((a, b) => (a.Order ?? 0) - (b.Order ?? 0))
    .map((m) => m.MediaURL ?? "")
    .filter(Boolean);

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

/**
 * Fetch listings from Trestle.
 * Throws if Trestle credentials are not configured.
 */
export async function getListings(options: ListingsQueryOptions = {}): Promise<TrestleListing[]> {
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

  return data.value.map(normalise);
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

/**
 * Huntington Harbour active waterfront listings.
 */
export async function getHarbourListings(top = 12): Promise<TrestleListing[]> {
  return getListings({
    filter:
      "StandardStatus eq 'Active' and City eq 'Huntington Beach' and PostalCode eq '92649' and PropertyType eq 'Residential'",
    top,
    orderBy: "ListPrice desc",
  });
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
