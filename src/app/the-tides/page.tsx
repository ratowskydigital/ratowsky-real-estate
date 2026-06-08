import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "The Tides",
  description:
    "The Tides — a monthly Orange County coastal real-estate market update from Ratowsky Group at Compass.",
};

export default function TheTidesPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">The Tides &middot; Newsletter</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            One monthly read. Coastal market intel, no fluff.
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            The Tides is the Ratowsky Group&rsquo;s monthly market update for Huntington Beach,
            Huntington Harbour, Sunset Beach, Seal Beach, and Newport Coast. Inventory levels,
            days-on-market, neighborhood-level price moves, and the strategic plays we are seeing
            across Compass&rsquo; private network.
          </p>
          <p className="mt-4 text-md text-ink-soft">
            Past issues archive coming soon.
          </p>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
