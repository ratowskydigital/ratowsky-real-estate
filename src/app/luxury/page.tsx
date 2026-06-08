import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { LuxuryPortfolioForm } from "@/components/LuxuryPortfolioForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Luxury Huntington Harbour Real Estate | Ratowsky Group at Compass",
  description:
    "Selling a waterfront, harbour-front, or premium coastal estate in Huntington Beach? Ratowsky Group's luxury marketing plan: cinematic production, pre-market buyer access, and 55+ years of local negotiating at the top of the market.",
  openGraph: {
    title: "Luxury Waterfront Real Estate | Ratowsky Group at Compass",
    description:
      "At the $2M–$10M+ level, the right buyer rarely comes from the MLS. See the marketing plan that actually sells Huntington Harbour waterfront before you decide who lists it.",
  },
  alternates: {
    canonical: "https://ratowskyrealestate.com/luxury",
  },
};

const faqItems = [
  {
    question: "How is selling a luxury home in Huntington Harbour different from a standard listing?",
    answer:
      "At the $3M+ level, the buyer pool is smaller, the diligence is deeper, and one bad photo or a price that misses the comp set costs you six figures. We run a pre-market phase through the Compass network before the public MLS opens, so we've already identified the most capable buyers before the public clock starts. The dock permit file, the seawall inspection, the water-depth measurement at MLLW. That work gets done before the listing goes live, not during escrow.",
  },
  {
    question: "What does your marketing plan actually include at this price point?",
    answer:
      "Architectural photography, twilight and aerial drone video, a designed property narrative (not bullet points), and a curated distribution to the Compass luxury buyer network nationally and internationally. For waterfront, we also run a channel-specific buyer campaign targeting boaters, yacht owners, and move-up buyers coming out of equity events in Southern California and out of state. The full plan comes with the portfolio we send after you reach out.",
  },
  {
    question: "What is the Compass Private Exclusive and why does it matter for luxury?",
    answer:
      "It's a pre-market listing inside the Compass agent network (roughly 30,000 agents and their qualified buyer pools) before anything goes public. At the $3M+ level, this phase does two things: it surfaces the most capable buyers quietly, and it lets us refine our pricing story before the public MLS launch. Deals that start in the Private Exclusive phase frequently close without ever needing a price reduction, because we're not testing demand on an open market where every visitor leaves a digital footprint.",
  },
  {
    question: "How do you price waterfront accurately when Zillow is so far off?",
    answer:
      "Zillow's algorithm weights square footage and bed count. On the Harbour islands, the dock permit, water depth at MLLW, channel orientation, and vessel-size compatibility drive the premium. We build the comp set from dock-adjusted closed sales, not from gross square-footage averages. On a main-channel Trinidad or Davenport position, the right comp methodology can mean a $400,000 to $800,000 difference from what an automated estimate suggests.",
  },
  {
    question: "Do I have to list with you to get the marketing portfolio?",
    answer:
      "No. The portfolio and confidential value opinion are complimentary, with no strings. Plenty of homeowners use it to plan a decision that's still 12 to 18 months out. When you're ready to list, we'd like to earn it. The first conversation carries no obligation.",
  },
];

const features = [
  {
    n: "01",
    title: "Cinematic presentation",
    body: "Architectural photography, twilight and aerial drone video, and a designed property story. The goal is to make the right buyer feel the home before they walk in. Not to document it.",
  },
  {
    n: "02",
    title: "The right buyers, quietly",
    body: "A curated coastal buyer database and the Compass agent network, plus optional pre-market exposure. The best buyers see it first, without a public price-drop paper trail if the market takes time.",
  },
  {
    n: "03",
    title: "Local and global reach",
    body: "Compass syndication puts your home in front of qualified buyers across the country and abroad. Paired with a team that knows every dock geometry, water depth, and view angle in the Harbour.",
  },
];

const stats = [
  { label: "Price range", value: "$2M – $10M+" },
  { label: "Combined HB experience", value: "55+ yrs" },
  { label: "Clients served", value: "300+" },
  { label: "RealTrends-verified rank", value: "Top 1.5%" },
];

export default function LuxuryPage() {
  return (
    <>
      {/* FAQ JSON-LD */}
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
          <p className="eyebrow">Ratowsky Group at Compass &middot; Luxury</p>
          <h1 className="mt-4 font-serif text-2xl lg:text-4xl tracking-tightest leading-[1.1] max-w-2xl">
            A $3M Harbour home needs more than 24 photos.
          </h1>
          <p className="mt-6 text-md text-ink-soft max-w-xl">
            At the top of the Huntington Beach market, the right buyer rarely comes from the MLS.
            See the marketing plan that actually sells waterfront before you decide who lists it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="inline-flex h-11 items-center rounded-md bg-ink px-6 text-sm font-medium text-surface hover:bg-ink/90 transition-colors"
            >
              Request the marketing portfolio
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex h-11 items-center rounded-md border border-hairline px-6 text-sm text-ink hover:bg-canvas-tint transition-colors tabular"
            >
              Call {site.phone}
            </a>
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

      {/* Why it matters at this price point */}
      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <div className="max-w-prose">
            <p className="eyebrow mb-4">At the top of this market</p>
            <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
              Premium homes don't sell themselves. They're positioned.
            </h2>
            <p className="text-md text-ink-soft leading-relaxed mb-4">
              Through imagery, story, and access that the open market never provides. The wrong
              agent at this level costs you six figures in presentation and negotiation. Here is
              what selling a luxury Huntington Beach home should actually look like.
            </p>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <li key={f.n} className="flex flex-col gap-3">
                <span className="font-serif text-3xl text-ink/20">{f.n}</span>
                <h3 className="font-medium text-ink">{f.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b border-hairline bg-canvas-tint">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <blockquote className="border-l-4 border-accent pl-6 py-1">
            <p className="text-md font-medium text-ink leading-relaxed italic">
              &ldquo;They treated our home like the asset it was. The video alone brought us a
              buyer we&rsquo;d never have reached on the open market.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-muted">Huntington Harbour Seller</footer>
          </blockquote>
        </div>
      </section>

      {/* Portfolio request form */}
      <section id="portfolio" className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow mb-4">Confidential</p>
              <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
                See the plan before you decide.
              </h2>
              <p className="text-md text-ink-soft leading-relaxed mb-8">
                Request our luxury marketing portfolio and a confidential opinion of value for your
                home. No obligation, complete discretion.
              </p>
              <ul className="space-y-3">
                {[
                  "The full marketing plan and recent results on premium HB homes",
                  "A confidential, market-grounded value range for your property",
                  "A clear read on pricing, timing, and pre-market strategy",
                  "Handled personally by Justin and Craig. Never passed off.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-hairline bg-surface p-6 lg:p-8">
              <LuxuryPortfolioForm />
            </div>
          </div>
        </div>
      </section>

      {/* Buyer side */}
      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <div className="max-w-prose">
            <p className="eyebrow mb-4">For buyers at this level</p>
            <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
              The best Harbour homes are sold before they're listed.
            </h2>
            <p className="text-md text-ink-soft leading-relaxed mb-4">
              If you're looking in the $2M+ range, you want access: off-market and coming-soon
              inventory, private showings, and an advocate who negotiates quietly on your behalf.
              That's how the top of this market actually moves.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-1 my-8">
              <p className="text-md font-medium text-ink leading-relaxed italic">
                &ldquo;We saw two waterfront homes that never hit Zillow. Bought the second
                one.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-muted">Coastal buyer, Huntington Beach</footer>
            </blockquote>
            <Link
              href="/buyers"
              className="inline-flex h-11 items-center rounded-md border border-hairline px-6 text-sm text-ink hover:bg-canvas-tint transition-colors"
            >
              Arrange a private buyer consultation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow mb-8">Questions sellers ask us</p>
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

      {/* Internal linking */}
      <section className="border-b border-hairline bg-canvas-tint">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-10">
          <p className="eyebrow mb-6">Learn more</p>
          <ul className="flex flex-wrap gap-4">
            {[
              { href: "/communities/huntington-harbour", label: "Huntington Harbour overview" },
              { href: "/communities/trinidad-island", label: "Trinidad Island" },
              { href: "/communities/davenport-island", label: "Davenport Island" },
              { href: "/communities/seacliff", label: "Seacliff on the Greens" },
              { href: "/communities/edwards-hill", label: "Edwards Hill" },
              {
                href: "/journal/twelve-offers-in-eight-days",
                label: "Case study: twelve offers in eight days",
              },
              { href: "/insights/compass-concierge-hb", label: "Compass Concierge explained" },
              { href: "/sellers", label: "The full selling process" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex h-9 items-center rounded-full border border-hairline px-4 text-sm text-ink-soft hover:bg-surface hover:text-ink hover:border-ink/30 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock
        eyebrow="Ratowsky Group at Compass"
        title="Ready to talk about your home's value?"
        body="A confidential 30-minute call to walk through the pricing, the plan, and what we're seeing in your specific neighborhood."
        primaryHref="#portfolio"
        primaryLabel="Request the portfolio"
        secondaryHref="/contact"
        secondaryLabel="Call or text us"
      />
    </>
  );
}
