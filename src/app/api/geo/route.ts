/**
 * GET /api/geo            — every coverage area as a GeoJSON FeatureCollection
 * GET /api/geo?kind=community
 * GET /api/geo?parent=huntington-harbour   — the Harbour's islands + Mainland
 *
 * Consumed by the IDX dashboards so the map layer and the listing routing
 * use the exact same polygons as the community pages.
 */
import { NextRequest, NextResponse } from "next/server";
import { geoAreas } from "@/content/geo";
import { areasToFeatureCollection, descendantSlugs } from "@/lib/geo";

// The kind/parent query filters are read per request, so this handler must
// stay dynamic. force-static would serve the unfiltered collection for every
// query string. The Cache-Control header below handles CDN caching instead.
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const kind = searchParams.get("kind");
  const parent = searchParams.get("parent");

  // A malformed filter is a 400, never a silent fall-through to the full
  // collection: a dashboard typo would otherwise render the wrong layers.
  if (kind !== null && kind !== "community" && kind !== "city") {
    return NextResponse.json({ ok: false, error: `unknown-kind: ${kind} (use community, city)` }, { status: 400 });
  }
  if (parent !== null && !geoAreas.some((a) => a.slug === parent)) {
    return NextResponse.json({ ok: false, error: `unknown-parent: ${parent}` }, { status: 400 });
  }

  let areas = geoAreas;
  if (kind) areas = areas.filter((a) => a.kind === kind);
  if (parent) {
    const allowed = new Set([parent, ...descendantSlugs(parent)]);
    areas = areas.filter((a) => allowed.has(a.slug));
  }

  return NextResponse.json(areasToFeatureCollection(areas), {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
