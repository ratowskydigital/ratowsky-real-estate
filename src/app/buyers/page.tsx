import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { Callout } from "@/components/Callout";
import { TourBookingForm } from "@/components/TourBookingForm";

export const metadata: Metadata = {
  title: "Buy a Home in Huntington Beach | Ratowsky Group at Compass",
  description:
    "Ready to tour Huntington Beach? Ratowsky Group finds off-market and coming-soon coastal homes before they hit Zillow. 55+ years of local experience, curated showings same week.",
  openGraph: {
    title: "Buy a Home in Huntington Beach | Ratowsky Group at Compass",
    description:
      "Pre-approved and looking? Send us your criteria and we'll have a curated tour lined up by the weekend, including coming-soon and Compass Private Exclusive inventory.",
  },
  alternates: {
    canonical: "https://ratowskyrealestate.com/buyers",
  },
};

const faqItems = [
  {
    question: "I'm pre-approved. How fast can you set up showings?",
    answer:
      "Same week. Send us your criteria and budget and we'll have a curated set of showings lined up by the weekend, with first access to anything coming-soon or off-market that fits. We don't line up everything on Zillow and call it a tour. You'll see homes that are actually worth your time.",
  },
  {
    question: "How do you help buyers win in a multiple-offer situation?",
    answer:
      "Huntington Beach homes are averaging around three offers right now. We structure your offer around the listing's specific pressure points: price relative to the comp set, contingency terms that reduce seller risk, escrow timeline if speed matters, and escalation clauses when the seller is clearly running a best-and-final. More than 55 years of local negotiating means we know when to hold a contingency and when waiving it is the right call.",
  },
  {
    question: "What is Compass Private Exclusive and why does it matter?",
    answer:
      "It's a pre-market listing inside the Compass agent network, usually 7 to 14 days before the public MLS, sometimes longer in Huntington Harbour where owners move slowly. We often have showings on Private Exclusive homes before they hit Zillow. That access is how several of our buyers have bought without ever entering a bidding war.",
  },
  {
    question: "We're selling and buying at the same time. Is that manageable?",
    answer:
      "Yes, but the sequencing matters more than most agents will tell you. The wrong order costs you the new home or forces a rushed sale on your current one. We map the timing before you talk to any lender so you know exactly which scenario keeps you in control. One team running both sides means the coordination actually happens.",
  },
  {
    question: "Do you work with first-time buyers or only move-up and luxury?",
    answer:
      "Both. Craig has worked with first-time buyers since 1977 and there's no minimum price. We've closed everything from condos near the pier to $6.6M oceanfronts in Newport Beach. The diligence is the same regardless of price point. What changes is the market-specific knowledge we bring to each one.",
  },
];

const steps = [
  {
    n: "01",
    title: "Strategy call",
    body: "Thirty minutes to walk your timing, your numbers, and what you actually want. We don't show homes before we understand the buyer: what is non-negotiable, what is flexible, and what is a price ceiling versus a comfort number.",
  },
  {
    n: "02",
    title: "Market mapping",
    body: "We pull active, pending, and recently closed inventory across the markets you care about. Compass Private Exclusives (off-market listings inside the Compass network) get folded in here, usually 7 to 14 days before they hit the public MLS, often longer in the Harbour.",
  },
  {
    n: "03",
    title: "Showings and dock checks",
    body: "On the Harbour and Sunset Beach, every showing includes a dock measurement and tide check. On Edwards Hill and Newport Coast, every showing includes the HOA bylaws and Mello-Roos breakdown. Inland or coastal, every showing ends with the comp set written down and the price-per-foot math run.",
  },
  {
    n: "04",
    title: "Offer strategy",
    body: "We write the offer that fits the listing. Not the offer that fits a template. Cash terms, contingency structure, escrow timeline, leaseback. Justin and Craig both read every term before submission. Two sets of eyes, every time.",
  },
  {
    n: "05",
    title: "Inspections and contingencies",
    body: "Inspector recommendations matched to the home (waterfront homes get marine-specialty inspectors, custom estates get structural). We negotiate credits and repairs with the comp data in hand, not gut feel.",
  },
  {
    n: "06",
    title: "Close and keys",
    body: "Final walkthrough, escrow coordination, and the handoff. Most Ratowsky Group buyers stay in touch for years: a yearly equity update, a quick second opinion when a contractor quote feels off, and a referral pipeline that runs on real relationships.",
  },
];

const stats = [
  { label: "Combined HB experience", value: "55+ yrs" },
  { label: "Clients served", value: "300+" },
  { label: "RealTrends-verified rank", value: "Top 1.5%" },
  { label: "Compass off-market access", value: "Yes" },
];

export default function BuyersPage() {
  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">For buyers</p>
          <h1 className="mt-4 font-serif text-2xl lg:text-[2.5rem] tracking-tightest leading-[1.1] max-w-xl">
            Pre-approved? Let&rsquo;s tour Huntington Beach this weekend.
          </h1>
          <p className="mt-6 text-md text-ink-soft max-w-xl">
            Stop refreshing Zillow. Send us your criteria and we&rsquo;ll have the right showings
            lined up by the weekend, including coastal homes before they hit the open market.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book-tour"
              className="inline-flex h-11 items-center rounded-md bg-ink px-6 text-sm font-medium text-surface hover:bg-ink/90 transition-colors"
            >
              Book a tour
            </a>
            <Link
              href="/communities"
              className="inline-flex h-11 items-center rounded-md border border-hairline px-6 text-sm text-ink hover:bg-canvas-tint transition-colors"
            >
              Browse communities
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-hairline bg-canvas-tint">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-8">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted uppercase tracking-widest">{s.label}</dt>
                <dd className="mt-1 font-serif text-xl text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why touring everything wastes time */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow mb-4">Why we do it differently</p>
          <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
            A good agent saves you from the wrong houses.
          </h2>
          <p className="text-md text-ink-soft leading-relaxed mb-8">
            In a market where homes get multiple offers and sell in about a month, touring
            everything wastes your weekends. We line up the right homes and help you win the one
            you want.
          </p>
          <div className="mt-10">
            <Callout title="What we tell buyers on the first call">
              The right house is the one you can hold for ten years and still be glad you bought.
              Everything else is timing, financing, and contingency math. We&rsquo;ll run that math
              with you in plain English.
            </Callout>
          </div>
        </div>
      </section>

      {/* Tour booking form */}
      <section id="book-tour" className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow mb-4">Book a tour</p>
              <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
                Tell us what you&rsquo;re looking for.
              </h2>
              <p className="text-md text-ink-soft leading-relaxed mb-8">
                Send your criteria and budget. We&rsquo;ll have a tight, curated tour set up fast
                , only the homes actually worth your time.
              </p>
              <ul className="space-y-3">
                {[
                  "A curated list of homes that actually fit your budget and must-haves",
                  "First look at coming-soon and off-market coastal inventory",
                  "Showings set up around your schedule, not ours",
                  "Straight talk on value, offers, and what it takes to win",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-8 border-l-4 border-accent pl-5 py-1">
                <p className="text-sm font-medium text-ink italic">
                  &ldquo;They showed us a home before it listed and we closed without a bidding
                  war. Couldn&rsquo;t have done it on Zillow.&rdquo;
                </p>
                <footer className="mt-2 text-xs text-muted">Huntington Beach buyer</footer>
              </blockquote>
            </div>
            <div className="rounded-card border border-hairline bg-surface p-6 lg:p-8">
              <TourBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Our process</p>
          <h2 className="mt-4 font-serif text-xl tracking-tightest">
            Six steps from first call to keys.
          </h2>
          <ol className="mt-12 space-y-12">
            {steps.map((s) => (
              <li key={s.n}>
                <p className="eyebrow tabular">{s.n}</p>
                <h3 className="mt-3 font-serif text-lg text-ink">{s.title}</h3>
                <p className="mt-3 text-base text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Where we work */}
      <section className="border-b border-hairline bg-surface-warm">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">Where we work</p>
          <h2 className="mt-4 font-serif text-xl tracking-tightest">
            Hyper-local matters more than ever in 2026.
          </h2>
          <p className="mt-4 text-base text-ink-soft leading-relaxed">
            On the Harbour, dock dimensions move price. In Edwards Hill, HOA rules and Mello-Roos
            tax tracts vary by block. In Sunset Beach, short-term-rental permission separates the
            buyer pool. In downtown HB, lot orientation matters more than square footage. The
            difference between a great purchase and a regret is almost always block-level
            knowledge of an island most agents only visit on showings. That is the access we bring.
          </p>
          <p className="mt-6">
            <Link
              href="/communities"
              className="text-accent underline underline-offset-[3px] hover:text-accent-deep"
            >
              See the full coverage map &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ section */}
      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow mb-8">Questions buyers ask us</p>
          <div className="max-w-prose space-y-10">
            {faqItems.map((item, i) => (
              <div key={i}>
                <h3 className="font-medium text-ink mb-3">{item.question}</h3>
                <p className="text-md text-ink-soft leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        title="Looking on the coast? Let's start with what you actually want."
        body="A 30-minute call to walk your timing, your numbers, and the markets you care about. No pressure, no portal sign-up, no spam."
        primaryHref="#book-tour"
        primaryLabel="Book a tour"
        secondaryHref="/communities"
        secondaryLabel="Browse communities"
      />
    </>
  );
}
