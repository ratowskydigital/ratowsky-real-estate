import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { Callout } from "@/components/Callout";
import { StatCard } from "@/components/StatCard";
import { signatureCaseStudy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sellers — Strategy over effort",
  description:
    "How Ratowsky Group sells coastal Orange County listings: a three-phase Compass marketing system built around pricing, presentation, and timed exposure.",
};

const phases = [
  {
    label: "Phase one",
    title: "Compass Private Exclusive",
    body: "A pre-market launch inside the Compass network — roughly 30,000 agents and their qualified buyer pools, before a single public dollar is spent on marketing. The point is to test demand, surface ready-now buyers, and refine pricing before the public clock starts.",
  },
  {
    label: "Phase two",
    title: "Targeted demand campaign",
    body: "Drone and twilight photography, dock-fit videography where it matters, and distribution across Compass national, paid social geo-targeted to relevant move-up buyer pools, and the local agent network. The goal is a fully formed audience by the time the listing goes live.",
  },
  {
    label: "Phase three",
    title: "Timed public release",
    body: "We hit the public MLS on a deliberate day, not a default day. Open houses are scheduled to compress demand. An offer-review deadline converts interest into competition. The result is a closing price that reflects what the market will actually pay, not what an algorithm estimated.",
  },
];

const principles = [
  {
    title: "The first seven days are the most expensive days you will ever own.",
    body: "Get pricing, presentation, and exposure right or pay for it later. The market reads the first weekend hard. We plan all three before a single photo is taken.",
  },
  {
    title: "Two sets of eyes on every contract.",
    body: "Justin and Craig both read every offer, every counter, every term. Forty-plus years of contract experience between us. Nothing leaves the team without both reads.",
  },
  {
    title: "Pricing is a strategy, not a number.",
    body: "We price to create competition, not to start a negotiation. There is a real difference between $2,995,000 and $3,000,000, and we will tell you which one fits your home and your buyer pool.",
  },
  {
    title: "We say no to listings we cannot win.",
    body: "If your timeline, expectations, or condition do not match what the market will reward, we will tell you before we sign. Ratowsky Group does not take listings to keep busy.",
  },
];

export default function SellersPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">For sellers</p>
          <h1 className="mt-4 font-serif text-2xl tracking-tightest leading-[1.1]">
            Most homes are listed.
            <span className="block text-muted">Ours are launched.</span>
          </h1>
          <p className="mt-6 text-md text-ink-soft">
            Ratowsky Group runs every signature listing through the same three-phase Compass
            marketing system that took a Trinidad Island waterfront from a {signatureCaseStudy.zillowEstimate} Zillow
            estimate to a {signatureCaseStudy.soldPrice} sale in {signatureCaseStudy.daysOnMarket} days, with{" "}
            {signatureCaseStudy.offers} offers on the table and {signatureCaseStudy.allCash} of them all cash.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline bg-surface-warm">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section grid gap-4 md:grid-cols-4">
          <StatCard label="Sold price" value={signatureCaseStudy.soldPrice} />
          <StatCard label="Over asking" value={signatureCaseStudy.overAsking} />
          <StatCard
            label="Offers"
            value={String(signatureCaseStudy.offers)}
            hint={`${signatureCaseStudy.allCash} all cash`}
          />
          <StatCard label="Days on market" value={String(signatureCaseStudy.daysOnMarket)} />
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Our system</p>
          <h2 className="mt-4 font-serif text-xl tracking-tightest">
            The three-phase Compass marketing system
          </h2>
          <div className="mt-12 space-y-12">
            {phases.map((phase) => (
              <article key={phase.label}>
                <p className="eyebrow">{phase.label}</p>
                <h3 className="mt-3 font-serif text-lg text-ink">{phase.title}</h3>
                <p className="mt-3 text-base text-ink-soft">{phase.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">What we believe</p>
          <h2 className="mt-4 font-serif text-xl tracking-tightest">
            Four principles that shape every listing.
          </h2>
          <div className="mt-12 space-y-8">
            {principles.map((p) => (
              <Callout key={p.title} title={p.title}>
                {p.body}
              </Callout>
            ))}
          </div>
          <p className="mt-12 text-base text-ink-soft">
            Curious how it actually played out?{" "}
            <Link
              href="/sold-stories"
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
            >
              See the case studies
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBlock
        title="Thinking about selling? Let's start with strategy."
        body="A 30-minute call to walk your home, your timing, and what the current market is actually paying for what you have. No pressure, no pitch deck."
        secondaryHref="/home-value"
        secondaryLabel="Get a free home valuation"
      />
    </>
  );
}
