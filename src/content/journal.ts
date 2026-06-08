/**
 * Journal — personal, narrative posts from the field.
 *
 * Distinct from /insights (strategy briefs, buyer/seller guides).
 * Journal entries are longer-form, story-driven, first-person voice —
 * deal narratives, community observations, behind-the-curtain moments.
 */

export type JournalPost = {
  slug: string;
  title: string;
  dek: string;
  publishedAt: string; // ISO date string YYYY-MM-DD
  readMinutes: number;
  category: "Deal story" | "Field notes" | "Community" | "Market watch" | "Behind the curtain";
  body: string; // **heading** on its own line = h3; **text** inline = strong; > text = blockquote
  featuredImage?: string;
  featuredImageAlt?: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "twelve-offers-in-eight-days",
    title: "Twelve offers in eight days: what actually happened on Trinidad Island",
    dek: "A $3,925,000 sale. Twelve competing offers. Eight all-cash. $643,000 over Zillow's estimate. Here is the story of that transaction, from the first walkthrough to the close.",
    publishedAt: "2026-06-09",
    readMinutes: 9,
    category: "Deal story",
    featuredImage: "/images/drone/harbour-yacht-golden-hour.jpg",
    featuredImageAlt: "Aerial view of Trinidad Island in Huntington Harbour at golden hour.",
    body: `The call came in on a Thursday afternoon in February.

The sellers had owned the Trinidad Island home for eleven years. They had renovated it in stages: kitchen first, then primary bath, then the outdoor space. The dock was original-era, maintained but not rebuilt. They had been thinking about this move for eighteen months. They had talked to two other agents. Now they wanted to sit down with us.

By the time I got off that first call, I had one note in my phone: *dock permit. Pull before listing strategy.*

That note is where every Huntington Harbour listing starts for us. Not the price. Not the photos. The dock.

**What the dock actually was**

The Trinidad Island main-channel positions carry some of the largest dock permits in the Harbour. This home's dock had been built out in the 1990s, extended once in the 2000s, and (I confirmed this before the listing strategy meeting) the as-built matched the city permit on file. Clean. The slip had 6.2 feet of water at MLLW. The permitted length accommodated vessels well into the 50-foot range.

The dock was worth more to the right buyer than anything in the house.

This sounds like an obvious observation. It is not. Most agents price the house and treat the dock as a supporting feature. In Huntington Harbour, particularly on Trinidad and Davenport, the dock is the primary asset. The house is what you live in. The dock is why you paid a premium for Trinidad over a comparable property in Seacliff or Brightwater. Getting the pricing right means understanding which buyers need a 50-foot dock and how many of them are in the market right now. Not what the MLS comp average says per square foot.

**The conversation about price**

The sellers had a number in their head. It was reasonable, in the range of the last two comp sales on the island. I asked them where the Zillow estimate was sitting. They pulled it up. It showed $2.45 million.

I told them I thought we could do considerably better than that, and I showed them why.

The comparable sale methodology for Harbour waterfront requires looking at dock geometry, water depth, channel orientation, and lot facing. Not just square footage and bed count. When you group the Trinidad Island sales by those variables instead of the standard residential variables, the comp set for this home pointed to a number closer to $3.5 million as the floor for a correctly priced launch.

I also told them what the first seven days would look like if we priced it right and used the Compass pre-market window properly.

**The Compass Private Exclusive phase**

We listed the home as a Compass Private Exclusive for twelve days before going public. During that window, it went to every Compass agent network in Southern California and to the national Compass buyer list. This is not a "coming soon" sign. It is active distribution to the largest agent-to-agent network in the country.

In those twelve days, we had seven showings. Every one of them was pre-qualified at or above the anticipated list price. Three of the seven told their agents they were serious. We had one low offer come in, which we declined. We learned from the feedback that the kitchen and the deck were strong points; the secondary bathrooms were a question mark; the dock was the reason most buyers had scheduled.

We adjusted the public launch price up slightly based on what we heard. We had already prepared the MLS listing, the drone package, and the full paid social campaign before the Private Exclusive closed. The public launch was already built.

**Day one on the public MLS**

The listing went live on a Thursday at 8 a.m.

By noon, we had eleven showing requests.

By Thursday evening, we had confirmed nine showings for the weekend and were getting calls from agents in Arizona, Texas, and the Bay Area whose clients had seen it on the portal.

We set an offer deadline for the following Monday at 5 p.m.

**The offers**

Twelve offers came in by the deadline. Eight were all-cash. The range ran from $3.4 million at the low end to $3.925 million at the high end. Two of the cash offers had no contingencies. One had an inspection contingency waived, appraisal contingency waived, and a 21-day close.

The sellers accepted the $3.925 million offer.

The sale closed in 21 days, as promised. No drama. No re-negotiation. Clean.

**What the number actually meant**

$3,925,000 was $643,000 above the Zillow estimate the sellers had been looking at eleven years into ownership.

It was also $425,000 above the highest comp on Trinidad Island in the prior twelve months.

The premium was not luck. It was the result of three things happening in the right sequence: the dock was clean and verifiable, which meant the most capable buyers could underwrite the offer confidently. The pre-market phase identified the serious buyer pool before the public launch, which compressed the timeline. And the pricing strategy (anchored to dock-adjusted comps rather than gross square-footage averages) gave us a credible foundation to hold the line when lower offers came in.

**Why I'm writing this down**

Not as a trophy. I am writing it down because the mechanism is repeatable, and sellers in Huntington Harbour deserve to understand what it is before they sit across from any agent.

The common version of Harbour listing advice is: clean the house, get good photos, price it right. That advice is not wrong. It is just incomplete. The dock permits, the seawall inspection, the tide-adjusted water-depth measurement, the vessel-size compatibility analysis. Those things are not optional add-ons for a Harbour waterfront listing. They are the foundation of the pricing conversation, the offer-evaluation conversation, and the buyer-qualification conversation.

The buyers who competed on this home had done their dock homework. They were bidding on a specific dock in a specific position in a specific channel. Not on a "waterfront home with dock." That precision is what produced the final number.

Craig has been doing this on the Harbour since the 1970s. The specifics of the deal have changed. The Zillow estimate did not exist in 1977, and neither did the Compass private network. The underlying logic has not changed at all. Know the dock. Know the buyer. Trust the market to do the rest.`,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getJournalSlugs(): string[] {
  return journalPosts.map((p) => p.slug);
}

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function listJournalPosts(): JournalPost[] {
  return [...journalPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
}
