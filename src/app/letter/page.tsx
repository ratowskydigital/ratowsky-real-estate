import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "The Tides | Huntington Beach Coastal Real Estate | Ratowsky Group",
  description:
    "The Tides is the Ratowsky Group monthly market letter: coastal real estate intel for Huntington Beach, Huntington Harbour, Sunset Beach, and beyond. One issue per month, no fluff.",
  openGraph: {
    title: "The Tides: Huntington Beach Real Estate Newsletter",
    description:
      "Monthly coastal market intel from Ratowsky Group at Compass. Inventory, price moves, and the strategic plays we're seeing across the Compass network.",
  },
};

// ---------------------------------------------------------------------------
// Issue data — add future issues here and they render automatically
// ---------------------------------------------------------------------------
type Issue = {
  slug: string;
  volume: number;
  issue: number;
  month: string;
  year: number;
  publishDate: string;
  headline: string;
  subhead: string;
  lede: string;
  sections: {
    heading: string;
    body: string[];
    callout?: string;
  }[];
  closingNote: string;
};

const issues: Issue[] = [
  {
    slug: "june-2026",
    volume: 1,
    issue: 1,
    month: "June",
    year: 2026,
    publishDate: "June 9, 2026",
    headline: "The summer market is already here, and it's running on low inventory.",
    subhead: "Coastal Huntington Beach inventory is roughly 30% below its five-year seasonal average. Here is what that means for buyers, sellers, and the Harbour.",
    lede:
      "Memorial Day weekend traditionally marks the informal start of the coastal listing season. In 2026, what it marked instead was the gap between how many buyers showed up and how little they found to look at. This is the issue where we break down what is driving that compression, where the opportunities are, and what we are seeing across Compass's pre-market network that the public MLS is not showing.",
    sections: [
      {
        heading: "The inventory picture",
        body: [
          "Active inventory in coastal Huntington Beach (the area we define as the zip codes anchored by downtown, Seacliff, Huntington Harbour, and the Sunset Beach overlay) entered June at roughly 30 percent below its five-year seasonal average for the same calendar period. That is not a dramatic single-month decline; it is the tail of a trend that has been building since Q4 2025.",
          "The driver is not a sudden drop in new listings. It is a slower absorption of what comes to market, combined with a seller pool that is reluctant to list into what they perceive as an uncertain rate environment. The result is a market where well-priced product moves in days, overpriced product accumulates, and the gap between the two is wider than it has been in several years.",
          "What this means in practice: buyers who are pre-qualified and ready to move have less to choose from at any given moment, but when the right property hits, the competitive window is short. Sellers who price correctly and use a pre-market strategy are capturing demand they would have had to compete for at a public launch, doing it in a cleaner offer environment.",
        ],
        callout:
          "The Huntington Harbour island market is tighter than the broader coastal picture. Trinidad Island has seen fewer than three public MLS listings in the past 60 days. The real inventory is in the Compass Private Exclusive channel.",
      },
      {
        heading: "Huntington Harbour: what we're seeing",
        body: [
          "The Harbour is the most supply-constrained sub-market in our coverage area right now. Owner tenure on the islands trends long: five, ten, twenty years for many waterfront families, and the conversion rate from 'thinking about moving' to 'actively listing' is lower here than anywhere else in the city. The result is a buyer pool that consistently exceeds the available inventory, particularly for main-channel waterfront on Trinidad and Davenport.",
          "We are currently carrying three pre-market conversations with Harbour waterfront owners who are at various stages of a life-stage decision. None of those homes has a public listing yet. Two of them may not ever get one. The right buyer may be found through the agent network before the MLS ever needs to be involved. If you are a qualified buyer targeting the Harbour, this is why working with a Compass agent with active island relationships is not just a nice-to-have.",
          "On the buyer side, we have had two Harbour buyer clients receive accepted offers in the past 30 days, both from Compass Private Exclusive inventory that cleared without ever hitting Zillow. One was a main-channel waterfront on Davenport with a 48-foot dock permit. The other was an interior Trinidad home that fit a buyer whose vessel was small enough not to require a primary-dock position but who wanted the Trinidad address and community.",
        ],
        callout:
          "Dock permit status is the most common escrow problem in Harbour transactions. Before any Harbour offer, pull the city permit file and verify the as-built against the dimensions in the listing.",
      },
      {
        heading: "Seacliff and Edwards Hill",
        body: [
          "The Seacliff sub-markets (Seacliff proper, Old Seacliff, and Seacliff on the Greens) are performing differently from each other in ways that are not obvious from the zip-code level data. Seacliff on the Greens fairway-facing inventory has tightened meaningfully in the past 90 days. The premium for lots directly on the fairway line is running in the 15-20% range over comparable non-fairway Greens homes when the renovations are equivalent.",
          "Edwards Hill had one public listing hit the MLS in May, a custom estate that drew multiple offers within two weeks. The guard-gated entry and the ocean-view positioning are doing what they have always done in the premium buyer segment: attracting cash-heavy, semi-retired, or fully-retired buyers who have monetized equity elsewhere and are looking for a final upgrade. Edwards Hill inventory is rare enough that we do not attempt to generalize from single sales.",
          "The Huntington Club (formerly Seacliff Country Club, the golf course around which Seacliff on the Greens is built) is running its summer event calendar. We will have a note on club happenings in a future issue; for now, the proximity premium to the course is real and pricing reflects it.",
        ],
      },
      {
        heading: "Rate environment: our practical read",
        body: [
          "We are not economists and we will not pretend to forecast rates. What we can tell you is what the rate environment is doing to the transaction composition we are seeing across our active deals. Cash is running at a higher share of Harbour and premium Seacliff transactions than it was 12 months ago, not dramatically higher, but meaningfully so. That is consistent with the buyer profile for these properties, which skews toward equity-rich move-up buyers and out-of-state cash arrivals.",
          "For financed buyers in the $2M to $4M range, the impact is real but the market has adapted. Buyers are running scenario models on rate buydowns, 5-1 ARMs, and jumbo-to-conforming hybrid structures in a way that was unusual two years ago. The buyers who are winning offers are the ones who have done that modeling in advance and can demonstrate to a listing agent that their financing structure is solid before the offer is written.",
        ],
      },
    ],
    closingNote:
      "That is the June issue. This letter goes out once a month. If someone forwarded this to you and you want to be on the list directly, there is a signup form below: one click, no spam, one issue per month. If you are a buyer or seller working through a decision right now and want a private read on a specific community or property, the contact form at ratowskyrealestate.com/contact goes directly to Justin.",
  },
];

// ---------------------------------------------------------------------------
// Layout helpers
// ---------------------------------------------------------------------------

function IssueArticle({ issue }: { issue: Issue }) {
  return (
    <article id={issue.slug} className="border-b border-hairline py-section">
      <div className="max-w-prose mx-auto px-6 lg:px-10">
        {/* Masthead */}
        <div className="flex items-center gap-3 mb-8">
          <span className="eyebrow">
            The Tides &middot; Vol.{issue.volume} No.{issue.issue} &middot;{" "}
            {issue.month} {issue.year}
          </span>
          <span className="text-ink-muted text-sm">{issue.publishDate}</span>
        </div>

        <h2 className="font-serif text-2xl lg:text-3xl tracking-tightest leading-[1.1] mb-4">
          {issue.headline}
        </h2>

        <p className="text-ink-soft text-md italic mb-6">{issue.subhead}</p>

        <p className="text-md mb-8 leading-relaxed">{issue.lede}</p>

        {issue.sections.map((section, i) => (
          <section key={i} className="mb-10">
            <h3 className="font-serif text-xl mb-4 text-ink">{section.heading}</h3>
            {section.body.map((paragraph, j) => (
              <p key={j} className="text-md leading-relaxed mb-4 text-ink-soft">
                {paragraph}
              </p>
            ))}
            {section.callout && (
              <blockquote className="border-l-4 border-accent pl-6 py-1 my-6 text-ink font-medium text-md leading-relaxed">
                {section.callout}
              </blockquote>
            )}
          </section>
        ))}

        <p className="text-md text-ink-soft italic mt-8 pt-8 border-t border-hairline">
          {issue.closingNote}
        </p>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LetterPage() {
  const [latestIssue, ...archiveIssues] = issues;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
          <p className="eyebrow">The Tides &middot; Monthly Letter</p>
          <h1 className="mt-4 font-serif text-3xl lg:text-4xl tracking-tightest leading-[1.1]">
            Coastal real estate intel. Once a month.
          </h1>
          <p className="mt-6 text-md text-ink-soft max-w-xl">
            The Tides is the Ratowsky Group monthly market letter for Huntington Beach, Huntington
            Harbour, Sunset Beach, and the surrounding coastal communities. Inventory levels,
            price moves, dock-permit notes, and the strategic plays running through the Compass
            pre-market network. One issue per month, no filler.
          </p>
        </div>
      </section>

      {/* Signup CTA — above the fold before first issue */}
      <div className="bg-canvas-tint border-b border-hairline">
        <div className="max-w-prose mx-auto px-6 lg:px-10 py-10">
          <p className="font-medium text-ink mb-2">Get the next issue in your inbox.</p>
          <p className="text-sm text-ink-soft mb-5">
            Join the list: one email per month, unsubscribe any time.
          </p>
          <NewsletterSignup compact />
        </div>
      </div>

      {/* Latest issue */}
      {latestIssue && <IssueArticle issue={latestIssue} />}

      {/* Archive — shows previous issues when they exist */}
      {archiveIssues.length > 0 && (
        <section className="border-b border-hairline">
          <div className="max-w-prose mx-auto px-6 lg:px-10 py-section">
            <p className="eyebrow mb-6">Past issues</p>
            <ul className="space-y-4">
              {archiveIssues.map((issue) => (
                <li key={issue.slug}>
                  <Link
                    href={`/letter#${issue.slug}`}
                    className="block group"
                  >
                    <span className="text-sm text-ink-muted">
                      {issue.month} {issue.year} &mdash;
                    </span>{" "}
                    <span className="text-md font-medium group-hover:underline">
                      {issue.headline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Bottom signup */}
      <NewsletterSignup />
    </>
  );
}
