import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const fountainValley: City = {
  slug: "fountain-valley",
  name: "Fountain Valley",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: false,
  oneLine:
    "Inland Orange County move-up market with long-hold ownership, Mile Square Park at the center, and steady demand from Huntington Beach next door.",
  directAnswer:
    "Fountain Valley is an inland city in northern Orange County, California, bordered by Huntington Beach to the west and south, Westminster and Garden Grove to the north, Santa Ana to the east, and Costa Mesa to the south. The housing stock is dominated by single-family homes built between the mid-1960s and the 1990s on tract streets, with Mile Square Regional Park as the central amenity. Ownership tenure is long and turnover is modest, which keeps inventory tight relative to demand from Huntington Beach and central Orange County.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Fountain Valley is, and why it matters to a Huntington Beach client.",
      paragraphs: [
        "Fountain Valley is the city directly inland from Huntington Beach, sharing a long border along Brookhurst, Ward, and Garfield. It was built out almost entirely between the mid-1960s and the early 1990s as single-family tract housing, and it has stayed that way. Mile Square Regional Park anchors the middle of the city with golf, sports fields, and lakes. The 405 runs through the north end, which makes commuting toward Irvine and Los Angeles straightforward.",
        "For buyers, Fountain Valley is where you get a larger, newer, or better-conditioned house than the same money buys on the Huntington Beach side of the line, at the cost of being a few minutes farther from the sand. For sellers, it is a market with a deep, consistent buyer pool and a short list of things that decide the outcome.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "How Fountain Valley breaks down.",
      bullets: {
        items: [
          "Green Valley. Master-planned 1970s tracts in the south-central part of the city with association-maintained greenbelts, pools, and a consistent streetscape. One of the most requested pockets.",
          "The Mile Square Park perimeter. Tracts along Brookhurst, Euclid, Edinger, and Warner that back to or sit near the park. Park adjacency carries a premium.",
          "Northwest Fountain Valley. Streets near the Huntington Beach and Westminster lines, with 1960s single-story tracts and the closest drive to the coast.",
          "Southeast Fountain Valley. Newer 1980s and 1990s tracts near the Santa Ana River and Costa Mesa, with two-story floor plans and larger homes.",
          "Condos and townhomes. Concentrated near Brookhurst and Talbert and along the 405 corridor, the entry tier for the city.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Fountain Valley.",
      paragraphs: [
        "Condition and floor plan lead. Single-story homes draw consistent demand across the buyer pool, and homes with original kitchens and baths trade at a discount that is often larger than the cost of updating them. Lot size and pool status matter on the tract streets. Park adjacency and the Green Valley associations carry measurable premiums.",
        "Fountain Valley is not a market where a listing sits. Well-prepared, correctly priced homes draw multiple offers in the first week, and the difference between a good outcome and a great one is preparation. This is the market where Compass Concierge does the most work relative to price, because a modest investment in paint, flooring, and staging can move a 1970s tract home into a higher tier.",
      ],
      callout: {
        title: "Agent insight",
        body: "Many Fountain Valley sellers are long-time owners moving to be closer to the coast or simplifying after decades in the home. The listing conversation usually starts a year before the sign goes up. We are glad to have that conversation early, with no pressure and no timeline.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Fountain Valley property.",
      bullets: {
        items: [
          "Permit history for room additions, patio enclosures, and garage conversions, which are common in 1970s tracts.",
          "Association rules and dues in Green Valley and other planned tracts.",
          "Flood zone status near the Santa Ana River corridor.",
          "Original systems: roof, electrical panel, sewer lateral, and galvanized plumbing on the oldest streets.",
          "School attendance boundaries across Fountain Valley School District, Garden Grove Unified, and Huntington Beach Union High School District, confirmed at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "The Fountain Valley and Huntington Beach loop.",
      paragraphs: [
        "These two cities trade owners constantly. Fountain Valley buyers move to South HB and the inland HB tracts when they want to be closer to the beach; Huntington Beach owners move to Fountain Valley when they want a newer or larger home for the same money. Because we work both cities every week, we can price a client's current home and their target home against the same comp logic and tell them, in real numbers, what the move actually costs.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Fountain Valley a good alternative to Huntington Beach?",
      a: "For buyers whose priority is the house rather than the beach, often yes. The same budget generally buys a larger or newer home in Fountain Valley, and the drive to the coast is short. Buyers whose priority is walking to the sand or the Harbour lifestyle will still prefer Huntington Beach.",
    },
    {
      q: "What is Green Valley in Fountain Valley?",
      a: "A set of master-planned 1970s tracts in the south-central part of the city with homeowners associations that maintain greenbelts, pools, and common areas. It is one of the most requested pockets in Fountain Valley and carries a premium for the amenities and consistency.",
    },
    {
      q: "Does Fountain Valley have Mello-Roos?",
      a: "Generally no. The city was built out before community facilities districts became common. Confirm on the county tax bill for any specific parcel. We are not tax professionals and recommend verifying with your tax advisor.",
    },
    {
      q: "Which school districts serve Fountain Valley?",
      a: "Fountain Valley School District and Garden Grove Unified serve the elementary and middle grades depending on the address, and Huntington Beach Union High School District serves most of the city's high school students. Verify boundaries at the address with the districts.",
    },
    {
      q: "How quickly do homes sell in Fountain Valley?",
      a: "Well-prepared and correctly priced homes generally draw offers within the first week. Homes that are overpriced or in original condition can sit. Preparation and pricing strategy decide most outcomes here.",
    },
  ],
  sources: [
    { label: "City of Fountain Valley, official website", url: "https://www.fountainvalley.org/" },
    { label: "OC Parks, Mile Square Regional Park", url: "https://www.ocparks.com/parks-trails/mile-square-regional-park" },
    { label: "Fountain Valley School District", url: "https://www.fvsd.us/" },
    ...countySources,
  ],
  cta: cityCta("Fountain Valley"),
};
