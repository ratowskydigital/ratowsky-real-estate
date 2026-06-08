import type { Metadata } from "next";
import { Callout } from "@/components/Callout";
import { HomeValueForm } from "@/components/HomeValueForm";

export const metadata: Metadata = {
  title: "Home Valuation — A real number, written by a human",
  description:
    "Free home valuation for Huntington Beach, Huntington Harbour, and coastal Orange County. Real comps, Compass Private Exclusive data, and a one-page strategy memo from Ratowsky Group.",
};

const inclusions = [
  {
    title: "Active comps in your immediate market",
    body: "Pulled live from CRMLS — not Zillow's sample, not a national average.",
  },
  {
    title: "Recent closings, including off-market transactions",
    body: "We see Compass Private Exclusive closings that public sites never report. On the Harbour and Edwards Hill, that data changes the price story.",
  },
  {
    title: "A pricing range, not a point estimate",
    body: "What you would clear in 60 days, what you would clear in 14 days, and what we would push for in a fully orchestrated launch.",
  },
  {
    title: "A one-page strategy memo, written by Justin or Craig",
    body: "No automated PDF. A human read on your home, your timing, and what we would do if it were ours to list.",
  },
];

export default function HomeValuePage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Home valuation</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            A real number,
            <span className="block text-muted">written by a human.</span>
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Zillow gives you an algorithmic estimate based on public square footage and the last
            sale on your street. We give you a pricing memo based on the actual market — active
            comps, recent closings, off-market Compass data, and the strategic plays that move
            price on the OC coast.
          </p>
          <div className="mt-10">
            <Callout title="What you get">
              No portal sign-up. No drip campaign. No automated PDF. One real strategy memo,
              delivered within one business day, written by Justin or Craig.
            </Callout>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">What's included</p>
          <h2 className="mt-4 font-serif text-xl tracking-tightest">
            Four things in every valuation.
          </h2>
          <ul className="mt-10 space-y-8">
            {inclusions.map((it) => (
              <li key={it.title}>
                <p className="font-serif text-lg text-ink">{it.title}</p>
                <p className="mt-2 text-base text-ink-soft">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Request a valuation</p>
          <h2 className="mt-4 font-serif text-xl tracking-tightest">
            Tell us about the property.
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            One business day turnaround. We will reach out by email or phone — your preference.
          </p>
          <div className="mt-10">
            <HomeValueForm />
          </div>
        </div>
      </section>
    </>
  );
}
