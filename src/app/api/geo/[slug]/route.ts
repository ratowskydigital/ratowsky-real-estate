/**
 * GET /api/geo/[slug]                 — one area as a GeoJSON FeatureCollection
 * GET /api/geo/[slug]?children=true   — the area plus every descendant
 *
 * Example: /api/geo/huntington-harbour?children=true returns the Harbour
 * outline and all five islands + Mainland as separate features.
 */
import { NextRequest, NextResponse } from "next/server";
import { geoAreas, getGeoArea } from "@/content/geo";
import { areasToFeatureCollection, descendantSlugs } from "@/lib/geo";

export function generateStaticParams() {
  return geoAreas.map((a) => ({ slug: a.slug }));
}

export async function GET(request: NextRequest, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const area = getGeoArea(slug);
  if (!area) {
    return NextResponse.json({ ok: false, error: "not-found" }, { status: 404 });
  }

  const withChildren = request.nextUrl.searchParams.get("children") === "true";
  const slugs = withChildren ? [slug, ...descendantSlugs(slug)] : [slug];
  const areas = slugs.map((s) => getGeoArea(s)!).filter(Boolean);

  return NextResponse.json(areasToFeatureCollection(areas), {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
