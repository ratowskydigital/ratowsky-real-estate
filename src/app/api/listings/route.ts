/**
 * /api/listings — Trestle MLS listings endpoint
 *
 * GET /api/listings?city=Huntington+Beach&status=Active&top=24
 * GET /api/listings?harbour=true&top=12               (alias of community=huntington-harbour; only
 *     difference is the default sort, price-first; status/type/top/sort all apply)
 * GET /api/listings?community=trinidad-island&top=24
 * GET /api/listings?community=huntington-harbour   (returns all five islands + Mainland)
 * GET /api/listings?city=newport-coast&top=24      (slug or CRMLS City name both work)
 * GET /api/listings?community=trinidad-island&sort=price   (recent | price | price-asc;
 *     default recent, except harbour=true which defaults to price)
 * GET /api/listings?community=trinidad-island&polygon=verified   (drop pin-only matches on
 *     rings not yet reviewed). The default is "all": pin-only listings are routed by the
 *     ring even while it is marked approximate, because CRMLS SubdivisionName and StreetName
 *     are checked first and decide most records, and the dashboards need listings now. Each
 *     listing carries communityMatchedBy and each response carries area.precision, so a
 *     consumer can flag or hide polygon matches until the ring is reviewed.
 * GET /api/listings?key=<listingKey>
 *
 * Returns { ok: true, listings: TrestleListing[] } or a "coming-soon" stub
 * when Trestle credentials are not yet configured.
 */

import { NextRequest, NextResponse } from "next/server";
import { isTrestleConfigured, getListings, getListing, getListingsInArea } from "@/lib/trestle";
import { geoAreas, getGeoArea } from "@/content/geo";
import { odataLiteral } from "@/lib/geo";

/** Accept a page slug, a CRMLS City value, or an alias, and return the area slug. */
function resolveAreaSlug(value: string | null): string | null {
  if (!value) return null;
  if (getGeoArea(value)) return value;
  const wanted = value.trim().toLowerCase();
  const byName = geoAreas.find(
    (a) =>
      a.kind === "city" &&
      (a.mlsCity?.toLowerCase() === wanted || a.mlsCityAliases?.some((alias) => alias.toLowerCase() === wanted)),
  );
  return byName?.slug ?? null;
}

export const runtime = "nodejs";

/** Largest page a single request may ask for; anything above it is rejected with a 400. */
const MAX_TOP = 100;

/** Sort options exposed on the endpoint. Default is newest first, matching getListings. */
const SORTS: Record<string, string> = {
  recent: "ModificationTimestamp desc",
  price: "ListPrice desc",
  "price-asc": "ListPrice asc",
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // Graceful degradation — return empty stub if credentials are not wired yet
  if (!isTrestleConfigured()) {
    return NextResponse.json({
      ok: true,
      configured: false,
      listings: [],
      message:
        "MLS integration is not yet activated. Set TRESTLE_CLIENT_ID and TRESTLE_CLIENT_SECRET to enable live listing data.",
    });
  }

  try {
    // Single listing by key
    const key = searchParams.get("key");
    if (key) {
      const listing = await getListing(key);
      if (!listing) {
        return NextResponse.json({ ok: false, error: "not-found" }, { status: 404 });
      }
      return NextResponse.json({ ok: true, listing });
    }

    // `top` is parsed once here and every helper below receives a finite
    // positive integer. Anything else (NaN, 0, negatives, fractions) is a 400
    // rather than a NaN forwarded to Trestle.
    const topRaw = searchParams.get("top");
    const top = topRaw === null ? 24 : Number(topRaw);
    if (!Number.isInteger(top) || top < 1 || top > MAX_TOP) {
      return NextResponse.json({ ok: false, error: `invalid-top: ${topRaw} (use an integer from 1 to ${MAX_TOP})` }, { status: 400 });
    }
    const cappedTop = top;

    const sortKey = searchParams.get("sort");
    // Own-key check: "constructor" or "toString" must not read through the prototype.
    const orderBy = sortKey !== null && Object.prototype.hasOwnProperty.call(SORTS, sortKey) ? SORTS[sortKey] : null;
    if (sortKey !== null && !orderBy) {
      return NextResponse.json(
        { ok: false, error: `unknown-sort: ${sortKey} (use ${Object.keys(SORTS).join(", ")})` },
        { status: 400 },
      );
    }

    // `harbour=true` is an alias for community=huntington-harbour that keeps
    // its historical price-high-first default. Everything else (status, type,
    // top, explicit sort, response shape) is the shared area path below.
    const harbourAlias = searchParams.get("harbour") === "true";

    const status = searchParams.get("status") ?? "Active";
    const propertyType = searchParams.get("type") ?? "Residential";
    const areaOrderBy = orderBy ?? (harbourAlias ? SORTS.price : SORTS.recent);
    const polygonParam = searchParams.get("polygon") ?? "all";
    if (polygonParam !== "all" && polygonParam !== "verified") {
      return NextResponse.json({ ok: false, error: `unknown-polygon: ${polygonParam} (use all, verified)` }, { status: 400 });
    }
    const polygonMatches = polygonParam === "verified" ? "verified-only" : "all";

    // Community / city coverage area (polygon + subdivision matched)
    const community = harbourAlias ? "huntington-harbour" : searchParams.get("community");
    const cityParam = searchParams.get("city") ?? "Huntington Beach";
    const areaSlug = community ?? resolveAreaSlug(cityParam);
    if (areaSlug) {
      const area = getGeoArea(areaSlug);
      if (!area) {
        return NextResponse.json({ ok: false, error: `unknown-area: ${areaSlug}` }, { status: 404 });
      }
      const result = await getListingsInArea(areaSlug, {
        status,
        propertyType,
        top: cappedTop,
        orderBy: areaOrderBy,
        polygonMatches,
      });
      return NextResponse.json({
        ok: true,
        configured: true,
        area: { slug: area.slug, name: area.name, kind: area.kind, precision: area.precision },
        listings: result.listings,
        // True when the candidate crawl hit its page cap before `top` matches
        // were found; the list is correct but may be incomplete for the area.
        truncated: result.truncated,
      });
    }

    // General query by a CRMLS City name we have no coverage page for.
    const filter = [
      `StandardStatus eq ${odataLiteral(status)}`,
      `City eq ${odataLiteral(cityParam)}`,
      `PropertyType eq ${odataLiteral(propertyType)}`,
    ].join(" and ");

    const listings = await getListings({ filter, top: cappedTop, orderBy: areaOrderBy });
    return NextResponse.json({ ok: true, configured: true, listings });
  } catch (err) {
    console.error("[listings] Error:", err);
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
