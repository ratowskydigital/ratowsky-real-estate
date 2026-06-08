export type Insight = {
  slug: string;
  title: string;
  dek: string;
  publishedAt: string;
  readMinutes: number;
  category: "Strategy" | "Market" | "Neighborhood" | "Buyer guide" | "Seller guide";
  body: string;
};

export const insights: Insight[] = [
  {
    slug: "what-a-compass-private-exclusive-actually-does",
    title: "What a Compass Private Exclusive actually does for your listing",
    dek: "A pre-market test of demand inside the largest agent network in the country, before a single public dollar is spent on marketing.",
    publishedAt: "2026-04-15",
    readMinutes: 6,
    category: "Seller guide",
    body: `A Compass Private Exclusive is the quiet first chapter of every signature Ratowsky Group listing. It is not a "coming soon" sign on the public MLS. It is a brand of pre-market that is only available inside Compass, distributed to roughly 30,000 agents and their qualified buyer pools across every premier U.S. coastal market.

Here is what it actually does, in plain English.

**It tests pricing without burning days on market.** The number you list at on day one of public MLS is the number every buyer compares to every price reduction that follows. A Private Exclusive lets us test that number on a ready-now buyer pool first. If the response is loud, we hold or raise. If it is quiet, we adjust before the public clock starts ticking.

**It surfaces the buyers who don't shop the public MLS.** Cash buyers, relocation executives, and ultra-private high-net-worth individuals largely do not browse Zillow. They tell their agents what they want and wait. Compass Private Exclusives are how that tier hears about listings.

**It protects sellers from the days-on-market trap.** Once a property hits the public MLS, the day counter starts and never resets. A property that sat on the public market for 60 days at the wrong price is permanently scarred. A Private Exclusive lets us refine pricing, presentation, and positioning while that counter is still at zero.

We do not use a Private Exclusive on every listing. Only when there is a genuine reason to. For most Ratowsky Group sellers in Huntington Harbour, Edwards Hill, and signature waterfront, the answer is yes. For a competitively priced beach cottage in downtown HB, full public exposure on day one is usually the right call.

The decision sits in the listing strategy session, before a single photo is taken.`,
  },
  {
    slug: "huntington-harbour-dock-size-buyers-guide",
    title: "How to read Huntington Harbour dock sizes like a buyer",
    dek: "Dock dimensions, deep-water access, and the cost-per-foot premium that drives Harbour valuations.",
    publishedAt: "2026-04-08",
    readMinutes: 5,
    category: "Buyer guide",
    body: `Huntington Harbour is the only market in coastal Orange County where dock dimensions move price as much as square footage. If you are buying here, you need to read a listing for the dock first and the house second.

**Dock length is the headline number.** A 40-foot slip fits a typical mid-size powerboat or sailboat with room to maneuver. A 50-foot slip opens up sportfishers and mid-size yachts. A 60+ foot slip is rare on the islands and commands a premium that sometimes exceeds the cost of the house remodel itself.

**Deep-water access is binary.** Either the dock can berth a vessel at low tide or it cannot. The MLS rarely says this clearly. A dock with 5+ feet of water at MLLW (mean lower low water) is genuinely deep-water. Anything less, and the boat sits on mud six hours a day. We tide-check every Harbour listing before we let a buyer write an offer.

**Trinidad permits the largest docks, by ordinance.** Trinidad Island has the longest permitted dock lengths of any island in the Harbour. Davenport and Humboldt have meaningful constraints. Gilbert is mixed.

**The dock premium is real and measurable.** A waterfront home with a 50-foot dock and deep-water access typically prices $400k–$800k above an interior comp on the same street. We track this premium quarterly so our buyers do not overpay and our sellers do not under-list.

For Ratowsky Group buyers on the Harbour, the first showing always includes the dock, measured, photographed, and tide-checked. The house can be remodeled. The dock cannot.`,
  },
  {
    slug: "first-seven-days-on-market",
    title: "The first seven days are the most expensive days you will ever own",
    dek: "Why the opening week on market decides everything, and why the preparation that precedes it is the only thing sellers can actually control.",
    publishedAt: "2026-04-22",
    readMinutes: 7,
    category: "Seller guide",
    body: `There is a phrase we use in every seller consultation: the first seven days on market are the most expensive days you will ever own.

Most sellers hear it and nod. They understand it in principle. What they do not understand, until they have watched a listing stagnate, is how literally true it is.

**The opening week creates the permanent record.** Once a property hits the MLS, a public clock starts that never resets. Buyers and their agents are watching. They see how many days a listing has been active. They see the original price. They see every price reduction that follows. A listing that generates no offers in the first ten days will carry the stigma of that silence for the remainder of its market exposure, regardless of what the seller does next.

**Demand does not grow with time. It collapses.** The common mistake sellers make is assuming they can start high and work down. The reality is the opposite. A listing generates the most buyer attention in the first 72 hours, when it is new to the portal algorithms and fresh to the agent network. That attention is unrepeatable. Every day that passes without an offer is a day the listing's first impression erodes.

**Pricing to ask is not the same as pricing to sell.** There is a real difference between a price that starts a negotiation and a price that creates competition. Competition produces the final number that actually moves above ask. Starting a negotiation produces a number somewhere below your starting point. We price every listing to produce the first outcome, not the second.

**What the preparation actually involves.** The seven days that matter are not the seven days after the lockbox goes on. They are the seven weeks before. Condition, presentation, photography, the Compass Private Exclusive pre-market, the paid social targeting, the agent network call. All of it has to be finished before the first buyer walks in the door. The listing strategy is set in the seller consultation, not on launch day.

For Ratowsky Group sellers in Huntington Beach, the first seven days are the result of seven weeks of preparation. We do not list a home until we have built the audience for it.`,
  },
  {
    slug: "seacliff-hoa-what-buyers-miss",
    title: "What Seacliff buyers miss about the HOA layer",
    dek: "Fairway frontage, gated enclaves, and architectural review, and the governance details that determine whether Seacliff is the right community for your lifestyle.",
    publishedAt: "2026-04-01",
    readMinutes: 6,
    category: "Buyer guide",
    body: `Seacliff is one of the most desirable communities in Huntington Beach and one of the most misunderstood by buyers who are encountering it for the first time.

The physical features are easy to understand: large lots, golf-course frontage, gated enclaves, bluff-adjacent positioning. What buyers consistently miss is the governance layer, and in Seacliff, the governance layer affects every decision you will make as an owner.

**Multiple HOA structures, not one.** Seacliff is not governed by a single HOA. There is the master community layer, and then there are the sub-association layers for each gated enclave or product collection. The rules, the dues, and the enforcement practices vary meaningfully from one enclave to the next. A modification that is approved by one enclave's architectural review committee may be prohibited two streets over. We do a gate-by-gate walk-through with every Seacliff buyer because the lifestyle implications change block by block.

**Architectural review is real and active.** The Architectural Review Committee in Seacliff's gated enclaves reviews exterior changes before they happen. Paint colors, window replacements, hardscape additions, landscaping materials. All of it goes through a written application process with a defined review period. We have seen buyers acquire a Seacliff home with a specific renovation plan, then discover during escrow that the ARC approval timeline or restriction list makes the plan infeasible on that parcel. We surface this before the offer is submitted, not after.

**The HOA financials matter as much as the house.** Before any Seacliff offer, we obtain the current HOA financial statements, reserve fund study, and meeting minutes from the prior twelve months. An underfunded HOA reserve in a community of large estates can produce special assessment calls in the six-figure range. We have seen it happen. It is not disclosed in the listing. It is in the documents.

**What Seacliff HOA governance does well.** The consistent architecture, the maintained landscaping, the security gate. These are HOA-delivered products. If you want a community that looks as planned after 30 years, the HOA is why. Buyers who have lived in high-HOA communities before generally adapt quickly. Buyers who are used to no-HOA environments sometimes find the approval processes more constraining than they expected.

Seacliff is the right community for a defined buyer profile. That profile includes people who value the physical amenity and the maintained environment enough to operate within the governance structure. If you are not in that profile, Seacliff will frustrate you. We tell every buyer this upfront.`,
  },
  {
    slug: "huntington-beach-market-mid-2026",
    title: "Huntington Beach residential market: mid-2026 read",
    dek: "Where prices are, what is moving, and what we are telling buyers and sellers right now.",
    publishedAt: "2026-04-28",
    readMinutes: 5,
    category: "Market",
    body: `This is not a prediction. It is the market read we are giving buyers and sellers in our consultations right now. We update it when the data changes, not on a publishing schedule.

**The broad Huntington Beach market.** Inventory is below 2019 levels across all product types. The rate environment since 2022 has kept long-tenured homeowners in place. The lock-in effect is real and measurable in the days-on-market and turnover data. Buyers who were priced out in 2021 and 2022 are back, but they are more selective and more patient than the 2021 buyer pool was.

**Huntington Harbour.** The waterfront tier is healthy. Premier island listings with properly permitted docks and deep-water access are still generating multiple-offer situations when priced correctly. The Mainland is slower. More inventory, longer days-on-market, and more negotiating room on the buyer side. The gap between island and Mainland is wider now than it was two years ago.

**Seacliff and Edwards Hill.** The estate tier above $3M is showing longer days-on-market than the mid-tier. National buyers are the primary driver for the top-priced estates, and that buyer pool is more interest-rate sensitive than local move-up buyers. Listings that are priced at the market are moving. Listings priced for 2022 demand are sitting.

**Downtown pier district.** The most active segment of the Huntington Beach market. New construction in the numbered streets is moving well. The cottage tier has tightened. There are fewer sellers willing to move because there is less obvious place to go. Buyers here are competing on well-presented inventory.

**Brightwater and Bolsa Landmark.** Brightwater bluff-edge inventory is thin and, when it hits, moves quickly. Interior Brightwater is more patient. Bolsa Landmark continues to draw strong first-time and downsize buyer demand. The single-story floor plan and no-HOA carrying cost is a real competitive advantage against Brightwater at the same price point.

**What we are telling sellers.** If the condition is right and the price reflects the current comp set (not the comp set from 18 months ago). Inventory is moving. If you are anchoring to a 2022 number, you will be disappointed. We are having the honest pricing conversation in the consultation, before the sign goes in.

**What we are telling buyers.** The best listings are still moving fast. If you are not prepared to move in 72 hours on correctly priced product, you will lose it. Pre-approved, decision framework settled, agent embedded. Those are the minimum conditions to compete in this market.`,
  },
  {
    slug: "compass-concierge-what-it-is",
    title: "What Compass Concierge actually is, and when it makes sense",
    dek: "How the presale home-improvement program works, what it costs, and the situations where it changes a listing's outcome.",
    publishedAt: "2026-03-18",
    readMinutes: 5,
    category: "Seller guide",
    body: `Compass Concierge is a presale home-improvement program available to Compass sellers. The short version: Compass fronts the cost of approved presale renovations, and the seller repays from the proceeds at closing. No interest, no fees if repaid on time, no out-of-pocket cost before the sale.

Here is how it actually works and where we use it.

**The mechanics.** The seller and the listing agent agree on a renovation scope: paint, flooring, kitchen updates, landscaping, staging, photography. Compass reviews and approves the scope and budget. The work is completed before the listing goes live. At closing, the seller repays the cost from proceeds. If the sale falls through, the repayment timeline extends. The full program terms are documented in the Concierge agreement and should be reviewed carefully before signing.

**When it changes a listing outcome.** Concierge has the most impact in the $1.2M to $2.5M range where buyer expectations are high, the property has clear deficiencies relative to competitive listings, and the seller has the equity to repay but not the available cash to fund improvements out of pocket before closing. A $35,000 kitchen paint, flooring, and appliance update that takes a listing from "needs updating" to "move-in ready" can shift the buyer pool from investors and flippers to full-market buyers. In a tight comp set, that shift can mean $75,000 to $150,000 in additional offers.

**When it does not add value.** For pristine, move-in-ready homes, the incremental improvement from Concierge work is limited. For properties where the fundamental issue is price or location rather than condition, Concierge will not fix what is actually wrong. For sellers who have the cash to fund improvements independently, the program's financing component adds no real benefit.

**Our honest take.** Concierge is a genuinely useful tool when applied correctly. We do not use it as a default or as a selling point to win listings. We use it when the specific property and the specific improvement scope make a measurable difference to buyer pool and final price. If the math supports it, we will tell you. If it does not, we will tell you that too.`,
  },
];

export function getInsightSlugs(): string[] {
  return insights.map((i) => i.slug);
}

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function listInsights(): Insight[] {
  return [...insights].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
