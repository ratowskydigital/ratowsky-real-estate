export type Neighborhood = {
  slug: string;
  name: string;
  blurb: string;
  body: string;
  buyerProfile: string;
  ceilings: string;
  insiderNotes: string[];
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "huntington-harbour",
    name: "Huntington Harbour",
    blurb:
      "Trinidad, Davenport, Humboldt, Gilbert. Dock homes, deep-water access, the full Harbour lifestyle.",
    body: "Five islands and a Mainland strip on the inland side of Pacific Coast Highway. Trinidad and Davenport sit at the top of the price stack, Humboldt and Gilbert run mid-tier with stronger remodel inventory, and Mainland is the entry point for buyers who want Harbour life without an island address. Dock-equipped homes price independently of comparable interior square footage — a 50-foot dock can swing value $300k–$700k.",
    buyerProfile:
      "Move-up coastal families, retired sailors, and out-of-state cash buyers from Texas, Idaho, and the Pacific Northwest. Boat ownership is the lifestyle anchor.",
    ceilings: "Sub-$2M for interior Mainland; $3M–$5M typical island; $6M+ for waterfront with deep-water dock.",
    insiderNotes: [
      "Dock-size minimums vary by island — Trinidad permits the largest, Gilbert and Davenport are mid, Humboldt has the most water-frontage variation.",
      "King-tide flooding affects specific Mainland streets; we know which ones have lifted slabs and which still take water.",
      "Compass private network sees most premier Harbour listings 7–14 days before they hit the public MLS.",
    ],
  },
  {
    slug: "downtown-hb",
    name: "Downtown Huntington Beach",
    blurb:
      "Walk-to-pier living, surf-culture core. New construction, classic beach cottages, and lock-and-leave condos.",
    body: "From Goldenwest east to Beach Boulevard, between PCH and Yorktown. New three-story builds on Walnut and 11th, classic 1920s beach cottages south of Main, and lock-and-leave luxury condos along Pacific View. Pace is faster than the Harbour — first weekend on market usually decides whether the listing sells at, above, or below ask.",
    buyerProfile:
      "Younger high-income professionals, second-home buyers from inland California, and surf-culture-anchored locals trading up.",
    ceilings: "$1.5M–$2M for cottage; $2M–$3.5M for new construction; $1.2M–$2.5M for premier condo.",
    insiderNotes: [
      "Lot orientation matters more than square footage — south-facing lots on a numbered street comp differently than north-facing.",
      "Short-term rental rules tightened in 2023; condo HOAs now vary widely on what's allowed.",
      "First seven days on market are the most expensive days you will ever own — pricing strategy decides everything.",
    ],
  },
  {
    slug: "edwards-hill",
    name: "Edwards Hill & SeaCliff",
    blurb:
      "Gated luxury, golf-course frontage, and the largest single-family lots in the city.",
    body: "Edwards Hill, SeaCliff Country Club estates, and the Peninsula homes. Largest single-family lots in Huntington Beach, gated communities, golf-course frontage, and the buyer pool that quietly drives the city's high-end. National reach plus discreet Compass Private Exclusives is the playbook here — Edwards Hill is where most agents over-list and stall.",
    buyerProfile:
      "Move-up families relocating from inland OC, out-of-state corporate relocations, and Newport-adjacent buyers wanting more land for the same money.",
    ceilings: "$2.5M–$4M for SeaCliff interior; $4M–$8M for Edwards Hill estate.",
    insiderNotes: [
      "HOA rules on landscaping and exterior modifications differ block by block.",
      "Buyer pool is national, not local — listings need video, drone, and a Compass Private Exclusive launch to read correctly.",
      "Average days-on-market is longer than HB beach areas; pricing has to be precise from day one.",
    ],
  },
  {
    slug: "sunset-beach",
    name: "Sunset Beach",
    blurb:
      "Two miles of beachfront village. Coastal cottages, boardwalk frontage, true insider market.",
    body: "Two miles of beachfront village between Anderson and Warner. Cottages on the boardwalk, value plays on Park Avenue, and rentals that quietly print income. True insider market — most listings change hands through the agent network before the public MLS ever sees them.",
    buyerProfile:
      "Income-property investors, second-home owners from inland CA, and locals trading up from interior HB to a numbered-street boardwalk lot.",
    ceilings: "$1.5M–$2.5M for boardwalk cottage; $2.5M–$4.5M for renovated multi-unit.",
    insiderNotes: [
      "STR income separates the buyer pool — some lots permit short-term rentals, others do not.",
      "Sand encroachment + sea-wall maintenance affects boardwalk-adjacent lots.",
      "Most premier inventory transacts off-market through agent network.",
    ],
  },
  {
    slug: "seal-beach",
    name: "Seal Beach",
    blurb:
      "Old Town walkability, college-park cul-de-sacs, and the Hill estates above Main Street.",
    body: "Old Town between PCH and the beach, College Park east of the 405, the Hill estates above Main Street, and the Bridgeport waterfront. Slower-paced than HB with stronger long-term-hold ownership patterns — average years-in-home is materially higher, which means lower turnover and tighter inventory.",
    buyerProfile:
      "Long-term residents, retired couples downsizing from larger HB or Long Beach homes, and value-driven buyers looking for HB-coastal feel without HB pricing.",
    ceilings: "$1.2M–$2M for Old Town cottage; $2M–$3M for the Hill; $1.5M–$2.5M for Bridgeport waterfront.",
    insiderNotes: [
      "Old Town lot sizes vary block-by-block — what looks like a comp on Zillow often is not.",
      "The Hill has stricter exterior architectural review than Old Town.",
      "Bridgeport HOA fees and dock-rental policies vary by slip.",
    ],
  },
  {
    slug: "newport-coast",
    name: "Newport Coast & Corona del Mar",
    blurb:
      "Custom estates, ocean-view condos, and the move-up market for Harbour sellers heading south.",
    body: "Pelican Hill, Crystal Cove, and the gated Newport Coast neighborhoods south of MacArthur. The natural move-up destination for Harbour sellers exiting waterfront equity. Compass has the strongest Newport Coast inventory in the brokerage, which is the leverage we use when we represent HB sellers planning a move south.",
    buyerProfile:
      "Tech, finance, and entertainment families relocating from the Bay Area, Manhattan, and Westside LA. International buyers from Asia and the UAE for premier estates.",
    ceilings: "$3.5M–$8M for Crystal Cove condo; $8M–$30M+ for custom estate.",
    insiderNotes: [
      "Buyer pool is national and international — listings require global Compass network distribution.",
      "Mello-Roos taxes vary substantially by tract; affects monthly carry calculations.",
      "Pelican Hill HOA has different short-term rental rules than Crystal Cove.",
    ],
  },
];

export function getNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
