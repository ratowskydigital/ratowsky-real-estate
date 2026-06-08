/**
 * /api/listings — Trestle MLS listings endpoint
 *
 * GET /api/listings?city=Huntington+Beach&status=Active&top=24
 * GET /api/listings?harbour=true&top=12
 * GET /api/listings?key=<listingKey>
 *
 * Returns { ok: true, listings: TrestleListing[] } or a "coming-soon" stub
 * when Trestle credentials are not yet configured.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  isTrestleConfigured,
  getListings,
  getListing,
  getHarbourListings,
} from "@/lib/trestle";

export const runtime = "nodejs";

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

    const top = Math.min(Number(searchParams.get("top") ?? "24"), 100);

    // Huntington Harbour shortcut
    if (searchParams.get("harbour") === "true") {
      const listings = await getHarbourListings(top);
      return NextResponse.json({ ok: true, configured: true, listings });
    }

    // General query
    const city = searchParams.get("city") ?? "Huntington Beach";
    const status = searchParams.get("status") ?? "Active";
    const propertyType = searchParams.get("type") ?? "Residential";

    const filter = [
      `StandardStatus eq '${status}'`,
      `City eq '${city}'`,
      `PropertyType eq '${propertyType}'`,
    ].join(" and ");

    const listings = await getListings({ filter, top });
    return NextResponse.json({ ok: true, configured: true, listings });
  } catch (err) {
    console.error("[listings] Error:", err);
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
