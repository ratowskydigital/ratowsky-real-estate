export type SoldStory = {
  slug: string;
  neighborhood: string;
  headline: string;
  zillowEstimate?: string;
  listPrice?: string;
  soldPrice: string;
  overAsking?: string;
  daysOnMarket: number;
  offers?: number;
  allCash?: number;
  closedAt: string;
  representedSide: "seller" | "buyer" | "both";
  body: string;
};

export const soldStories: SoldStory[] = [
  {
    slug: "trinidad-island-3925000",
    neighborhood: "Trinidad Island, Huntington Harbour",
    headline: "Zillow estimated $2.45M. We sold it for $3,925,000.",
    zillowEstimate: "$2.45M",
    listPrice: "$3,295,000",
    soldPrice: "$3,925,000",
    overAsking: "$643,000",
    daysOnMarket: 8,
    offers: 12,
    allCash: 8,
    closedAt: "2025-09-12",
    representedSide: "seller",
    body: `Trinidad Island waterfront with a 50-foot dock, deep-water access, and a remodeled main residence. Zillow's automated estimate sat at $2.45M based on interior square footage and the prior sale on the street. The actual market — Compass Private Exclusive buyers, vetted, ready, and watching — paid $3,925,000.

**Phase one: Compass Private Exclusive.** We launched quietly inside Compass for ten days. Three confidential showings to qualified buyer pools generated two soft offers, both above the Zillow number. We held.

**Phase two: targeted demand campaign.** Drone photography, twilight stills, dock-fit videography. Distributed across Compass national, paid social geo-targeted to Westside LA + Newport Coast move-up buyers, and the local agent network.

**Phase three: timed public release.** We hit the public MLS on a Thursday with a Saturday-Sunday open house and Tuesday offer-review deadline. Twelve offers landed by Tuesday afternoon. Eight all cash. Final sale price $3,925,000 — $630k over the list, $1.475M over the Zillow estimate.

The strategy pre-existed the listing. Eight days on market is the visible part. The seven weeks of preparation behind it is what made eight days possible.`,
  },
  {
    slug: "seacliff-estate-fairway-2024",
    neighborhood: "Seacliff, Huntington Beach",
    headline: "Listed Friday. In escrow Tuesday. $180,000 over ask.",
    listPrice: "$2,895,000",
    soldPrice: "$3,075,000",
    overAsking: "$180,000",
    daysOnMarket: 4,
    offers: 7,
    allCash: 3,
    closedAt: "2024-11-14",
    representedSide: "seller",
    body: `Seacliff estate home on a fairway-fronting lot in a gated enclave. Four bedrooms, three-car garage, recently updated kitchen and primary suite. The seller had been watching the market for eighteen months and was skeptical about pricing above $2.85M based on what they had seen from comparable listings that had sat.

**The conversation we had.** The comparable listings that sat were priced at $2.89M on original-condition product in adjacent enclaves with different HOA governance and inferior lot orientation. The fairway-fronting premium on this specific lot, in this specific enclave, was not captured in any of the seller's reference points. We built the case for $2,895,000 with a comp analysis that isolated lot-orientation premiums and enclave-specific sale data going back three years.

**The preparation.** Compass Concierge-funded exterior repaint, new landscaping, staging throughout. Photography and drone video produced over two days. Compass Private Exclusive ran for eight days with two scheduled showings. Both buyers indicated serious interest. We launched public on a Friday.

**The result.** Seven offers by Tuesday morning. Three all cash. Final contract at $3,075,000 — $180,000 over list, $225,000 over the seller's prior price expectation. Closed in 21 days.

The seller's question at the listing consultation was whether $2.895M was aggressive. Our answer was that it was correct. There is a difference.`,
  },
  {
    slug: "downtown-hb-cottage-2025",
    neighborhood: "Downtown Pier District, Huntington Beach",
    headline: "Beach cottage. First weekend. Eight offers. $95,000 over ask.",
    listPrice: "$1,595,000",
    soldPrice: "$1,690,000",
    overAsking: "$95,000",
    daysOnMarket: 6,
    offers: 8,
    closedAt: "2025-03-22",
    representedSide: "seller",
    body: `A 1940s beach cottage two blocks from Pacific Coast Highway in the downtown pier district. Three bedrooms, updated kitchen, newer roof, outdoor shower. The seller had purchased in 2018 and done the right improvements over seven years. The neighborhood had multiple comparable listings in the prior six months — two that closed above ask in the first week and one that stalled at $1.55M for forty days before dropping to $1.49M.

**Why the third comp was the warning, not the target.** The listing that stalled had original bathrooms, a deferred exterior, and no staging. It launched at $1.55M on a Tuesday with mediocre photos and no pre-market work. By the time it dropped, the buyer pool had mentally filed it under "problem property." Our seller had a legitimately better product and had done the work to show it.

**The preparation.** Two weeks out: staging consultation, minor repairs, professional exterior cleaning, new front landscaping. One week out: photography — full interior, exterior, twilight, drone. Compass Private Exclusive for seven days with four showings. All four indicated interest.

**The launch.** Thursday MLS release, Saturday-Sunday open houses, Tuesday offer deadline. Eight offers by Tuesday. No all-cash, but five were over-ask with escalation clauses. Final contract at $1,690,000.

The lesson the seller took from this process: the forty-day listing down the street was not a market problem. It was a preparation problem. The market is not slow when the product is right.`,
  },
];

export function getSoldStorySlugs(): string[] {
  return soldStories.map((s) => s.slug);
}

export function getSoldStory(slug: string): SoldStory | undefined {
  return soldStories.find((s) => s.slug === slug);
}

export function listSoldStories(): SoldStory[] {
  return [...soldStories].sort((a, b) => (a.closedAt < b.closedAt ? 1 : -1));
}
