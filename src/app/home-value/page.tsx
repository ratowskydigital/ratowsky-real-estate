import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/Callout";
import { HomeValueForm } from "@/components/HomeValueForm";

export const metadata: Metadata = {
  title: "What's My Huntington Beach Home Worth? | Ratowsky Group at Compass",
  description:
    "Free home valuation for Huntington Beach, Huntington Harbour, and coastal Orange County. Real comps, Compass Private Exclusive data, and a one-page strategy memo from Ratowsky Group, returned within one business day.",
  openGraph: {
    title: "What's My Huntington Beach Home Worth?",
    description:
      "Online estimates miss what really moves coastal buyers. Get a real number from a local Compass team, based on homes that just sold near you, adjusted for your specific improvements.",
  },
  alternates: {
    canonical: "https://ratowskyrealestate.com/home-value",
  },
};

const faqItems = [
  {
    question: "Is this a real valuation or an automated estimate?",
    answer:
      "Real. Justin or Craig personally reviews your home against recent comparable sales in your neighborhood and current buyer activity. You're getting a professional opinion, not a computer guess. We see Compass Private Exclusive closings that public sites never report, which matters most on the Harbour and in Edwards Hill where off-market sales represent a meaningful share of total volume.",
  },
  {
    question: "Do I have to list with you to get the number?",
    answer:
      "No. The valuation is free and there's no obligation. Plenty of homeowners use it just to plan. If and when you're ready to sell, we'd love to earn the business. The first conversation carries no strings.",
  },
  {
    question: "How is the Huntington Beach market right now?",
    answer:
      "Coastal HB remains in demand. Homes in well-priced condition are seeing multiple offers and selling in roughly a month, with Huntington Harbour waterfront commanding a strong premium. Your street's story may differ significantly from the headlines, which is exactly why a local read matters more than a zip-code average.",
  },
  {
    question: "What if I'm a year or more away from selling?",
    answer:
      "That's actually the best time to start. Knowing your number and the ideal window early lets you make smart decisions on timing, pre-sale work, and whether Compass Concierge (which covers renovation costs upfront, repaid at close) makes sense for your home. We've had clients plan a sale 18 months in advance and end up with $200,000 more than they'd have gotten by listing without a strategy.",
  },
  {
    question: "Two homes on the same street are listed at different prices. Why?",
    answer:
      "Dock size, view angle, renovation scope, lot orientation, HOA compliance, and condition all affect value in ways algorithms can't see. On Trinidad Island, for example, a main-channel dock position with 6+ feet of water depth can mean $500,000 to $800,000 more than an interior-facing property on the same street. The valuation we send shows you exactly what's driving your number.",
  },
];

const inclusions = [
  {
    title: "Active comps in your immediate market",
    body: "Pulled live from CRMLS. Not Zillow's sample, not a national average.",
  },
  {
    title: "Recent closings, including off-market transactions",
    body: "We see Compass Private Exclusive closings that public sites never report. On the Harbour and Edwards Hill, that data changes the price story.",
  },
  {
    title: "A pricing range, not a point estimate",
    body: "What you'd clear in 60 days, what you'd clear in 14 days, and what we'd push for in a fully orchestrated launch.",
  },
  {
    title: "A one-page strategy memo, written by Justin or Craig",
    body: "No automated PDF. A human read on your home, your timing, and what we'd do if it were ours to list.",
  },
];

export default function HomeValuePage() {
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
          <p className="eyebrow">Home valuation</p>
          <h1 className="mt-4 font-serif text-2xl lg:text-[2.5rem] tracking-tightest leading-[1.1] max-w-2xl">
            What&rsquo;s your Huntington Beach home actually worth?
          </h1>
          <p className="mt-6 text-md text-ink-soft max-w-xl">
            Online estimates miss what really moves coastal buyers. Get a real number from a local
            Compass team, based on the homes that just sold near you, not an algorithm.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#request-valuation"
              className="inline-flex h-11 items-center rounded-md bg-ink px-6 text-sm font-medium text-surface hover:bg-ink/90 transition-colors"
            >
              Get my home&rsquo;s value
            </a>
            <Link
              href="/sellers"
              className="inline-flex h-11 items-center rounded-md border border-hairline px-6 text-sm text-ink hover:bg-canvas-tint transition-colors"
            >
              See the full selling process
            </Link>
          </div>
        </div>
      </section>

      {/* Why Zestimate isn't enough */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow mb-4">The number that actually matters</p>
          <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
            A Zestimate isn&rsquo;t a strategy.
          </h2>
          <p className="text-md text-ink-soft leading-relaxed mb-4">
            Two homes on the same street can be worth six figures apart. Algorithms can&rsquo;t see
            your remodel, your view, your lot, or what buyers are actually competing for this month.
            We can.
          </p>
          <div className="mt-10">
            <Callout title="What you get">
              No portal sign-up. No drip campaign. No automated PDF. One real strategy memo,
              delivered within one business day, written by Justin or Craig.
            </Callout>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="border-b border-hairline bg-canvas-tint">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow mb-8">What&rsquo;s included</p>
          <ul className="grid gap-8 md:grid-cols-2">
            {inclusions.map((it) => (
              <li key={it.title} className="flex flex-col gap-2">
                <p className="font-serif text-lg text-ink">{it.title}</p>
                <p className="text-base text-ink-soft">{it.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section id="request-valuation" className="border-b border-hairline">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-section">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="eyebrow mb-4">Free, no obligation</p>
              <h2 className="font-serif text-xl lg:text-2xl tracking-tightest leading-[1.15] mb-6">
                Get your home&rsquo;s true market value.
              </h2>
              <p className="text-md text-ink-soft leading-relaxed mb-4">
                Tell us about your home and we&rsquo;ll send back a real, market-grounded valuation
                prepared by a person who knows your neighborhood.
              </p>
              <blockquote className="mt-8 border-l-4 border-accent pl-5 py-1">
                <p className="text-sm font-medium text-ink italic">
                  &ldquo;Justin and Craig knew our Harbour neighborhood cold and priced us right
                  the first time. Sold fast and over ask.&rdquo;
                </p>
                <footer className="mt-2 text-xs text-muted">Huntington Beach seller</footer>
              </blockquote>
            </div>
            <div className="rounded-card border border-hairline bg-surface p-6 lg:p-8">
              <HomeValueForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Internal links */}
      <section className="border-b border-hairline bg-canvas-tint">
        <div className="max-w-landing mx-auto px-6 lg:px-10 py-10">
          <p className="eyebrow mb-6">Related pages</p>
          <ul className="flex flex-wrap gap-4">
            {[
              { href: "/sellers", label: "The full selling process" },
              { href: "/luxury", label: "Luxury and waterfront homes" },
              { href: "/insights", label: "Market insights" },
              { href: "/communities/huntington-harbour", label: "Huntington Harbour" },
              { href: "/communities/seacliff", label: "Seacliff on the Greens" },
              { href: "/communities/edwards-hill", label: "Edwards Hill" },
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
    </>
  );
}
