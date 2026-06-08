import type { Metadata } from "next";
import Link from "next/link";
import { isTrestleConfigured, getListings, type TrestleListing } from "@/lib/trestle";

export const metadata: Metadata = {
  title: "Huntington Beach Homes for Sale | Ratowsky Group at Compass",
  description:
    "Browse active listings in Huntington Beach, Huntington Harbour, Sunset Beach, and surrounding coastal communities. Ratowsky Group at Compass.",
};

// Revalidate every 5 minutes — matches the Trestle fetch cache TTL
export const revalidate = 300;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatPrice(price: number | null): string {
  if (!price) return "Price TBD";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function ListingCard({ listing }: { listing: TrestleListing }) {
  const photo = listing.photos[0];
  const beds = listing.bedroomsTotal ?? "—";
  const baths = listing.bathroomsTotalDecimal
    ? listing.bathroomsTotalDecimal % 1 === 0
      ? String(listing.bathroomsTotalDecimal)
      : listing.bathroomsTotalDecimal.toFixed(1)
    : "—";
  const sqft = listing.livingArea
    ? new Intl.NumberFormat("en-US").format(Math.round(listing.livingArea)) + " sf"
    : "—";
  const dom = listing.daysOnMarket;

  return (
    <article className="border border-hairline rounded-xl overflow-hidden flex flex-col">
      {/* Photo */}
      <div className="aspect-[4/3] bg-canvas-tint relative overflow-hidden">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={`${listing.unparsedAddress} — MLS photo`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ink-muted text-sm">
            No photo
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-ink text-xs font-medium px-2 py-1 rounded-full">
            {listing.standardStatus}
          </span>
        </div>
        {dom !== null && dom <= 7 && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-serif text-xl leading-tight mb-1">
          {formatPrice(listing.listPrice)}
        </p>
        <p className="text-sm text-ink-soft mb-3">{listing.unparsedAddress}</p>

        <div className="flex gap-4 text-sm text-ink-soft border-t border-hairline pt-3 mt-auto">
          <span>{beds} bd</span>
          <span>{baths} ba</span>
          <span>{sqft}</span>
          {dom !== null && <span>{dom} DOM</span>}
        </div>

        {listing.waterfrontFeatures.length > 0 && (
          <p className="mt-2 text-xs text-accent font-medium">Waterfront</p>
        )}
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function ListingsPage() {
  const configured = isTrestleConfigured();
  let listings: TrestleListing[] = [];

  if (configured) {
    try {
      listings = await getListings({ top: 24 });
    } catch {
      // Render with empty state on Trestle error
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Active listings</p>
          <h1 className="mt-4 font-serif text-3xl lg:text-4xl tracking-tightest leading-[1.1]">
            Huntington Beach homes for sale.
          </h1>
          <p className="mt-4 text-md text-ink-soft max-w-xl">
            Ratowsky Group at Compass represents buyers and sellers across coastal Huntington Beach,
            Huntington Harbour, and Sunset Beach. The listings below are updated in real time from
            the MLS.
          </p>
        </div>
      </section>

      {/* Listings grid */}
      <section className="py-section">
        <div className="max-w-landing mx-auto px-6 lg:px-10">
          {!configured ? (
            /* Coming-soon state — shown until Trestle credentials are wired */
            <div className="py-20 text-center max-w-lg mx-auto">
              <p className="eyebrow mb-4">MLS integration coming soon</p>
              <h2 className="font-serif text-2xl mb-4">
                Live listing data activates when you add your MLS credentials.
              </h2>
              <p className="text-ink-soft text-md mb-8">
                The Trestle integration scaffold is in place. Add{" "}
                <code className="text-sm bg-canvas-tint px-1.5 py-0.5 rounded">
                  TRESTLE_CLIENT_ID
                </code>{" "}
                and{" "}
                <code className="text-sm bg-canvas-tint px-1.5 py-0.5 rounded">
                  TRESTLE_CLIENT_SECRET
                </code>{" "}
                to your Vercel environment to activate live MLS data.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-ink text-white rounded-full text-sm font-medium hover:bg-ink/80 transition-colors"
              >
                Contact us for current availability
              </Link>
            </div>
          ) : listings.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-ink-soft">No active listings found at the moment.</p>
              <Link href="/contact" className="mt-4 inline-block underline text-sm">
                Contact us for current availability
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {listings.map((listing) => (
                <ListingCard key={listing.listingKey} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-hairline py-section">
        <div className="max-w-prose mx-auto px-6 lg:px-10 text-center">
          <p className="eyebrow mb-4">Not finding what you need?</p>
          <h2 className="font-serif text-2xl mb-4">
            Many Harbour waterfront homes never reach the public MLS.
          </h2>
          <p className="text-ink-soft text-md mb-8">
            We carry pre-market access to Compass Private Exclusives across the Harbour islands and
            coastal Huntington Beach. Tell us what you are looking for.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-ink text-white rounded-full text-sm font-medium hover:bg-ink/80 transition-colors"
          >
            Talk to Justin
          </Link>
        </div>
      </section>
    </>
  );
}
