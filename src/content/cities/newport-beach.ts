import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const newportBeach: City = {
  slug: "newport-beach",
  name: "Newport Beach",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Harbor estates, Balboa Peninsula village streets, and the move-up destination for Huntington Harbour sellers heading south.",
  directAnswer:
    "Newport Beach is a coastal city in central Orange County, California, anchored by Newport Harbor, the Balboa Peninsula, and the Pelican Hill and Crystal Cove luxury enclaves along Newport Coast. Inventory ranges from cottages and duplexes on the Peninsula and Balboa Island to bayfront homes with private docks, mid-century tracts in Eastbluff and the Bluffs, and custom estates above the harbor. Newport Coast and Corona del Mar are covered on their own pages.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Newport Beach is, and why so many of our Huntington Beach clients end up here.",
      paragraphs: [
        "Newport Beach sits directly south of Huntington Beach across the Santa Ana River, and it is the first place most HB homeowners look when they want to trade up. The city wraps around Newport Harbor, one of the largest small-craft harbors on the West Coast, with the Balboa Peninsula on the ocean side, Balboa and Lido islands inside the bay, and the bluffs and master-planned villages of Newport Center, Eastbluff, and the Back Bay inland.",
        "For a buyer, the practical difference from Huntington Beach is scale. Newport pricing starts where much of HB tops out, the harbor is larger and more established, and the buyer pool is national. For a seller in the Harbour, that is a feature. The equity from a Huntington Harbour waterfront sale is exactly what buys a Newport bayfront or a Peninsula lot, and we work both sides of that move regularly.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The Newport Beach neighborhoods buyers ask about first.",
      paragraphs: [
        "Newport is a collection of very different villages that share a city hall. Each has its own product type and its own comp set.",
      ],
      bullets: {
        items: [
          "Balboa Peninsula. Cottages, duplexes, and new construction on 30-foot lots between the bay and the sand, from the Wedge to Lido. Walkable, dense, and heavily influenced by rental rules.",
          "Balboa Island and Lido Isle. Small lots, canal or bay frontage, and some of the highest price-per-square-foot figures in the county. Lido carries a strong HOA and yacht-club culture.",
          "Dover Shores, Bayshores, and the bayfront. Larger waterfront homes with private docks along the Back Bay and the main harbor channel. This is the closest analog to Huntington Harbour island living.",
          "Eastbluff, the Bluffs, and Newport Center. Mid-century and 1970s tracts and townhomes on the bluff above the Back Bay, near Fashion Island. The move-up market for buyers who want Newport without the water premium.",
          "West Newport and Newport Shores. The stretch nearest Huntington Beach, with beach cottages, mixed-density blocks, and a canal community at Newport Shores.",
          "Newport Heights and Cliff Haven. Older neighborhoods above PCH with larger lots, view potential, and a steady rebuild cycle.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Newport Beach.",
      paragraphs: [
        "Water frontage is the first variable and view orientation is the second. A bayfront lot with a dock on a wide channel comps differently from an interior lot two houses away, in the same way Trinidad Island comps differently from the Harbour Mainland. Lot width matters more than square footage on the Peninsula and the islands, because the lot decides what can be rebuilt.",
        "Days on market run longer than Huntington Beach at the top of the stack because the buyer pool is national and the price points are higher. Precision on pricing from day one matters more here than almost anywhere else we work. Overpricing in Newport does not produce a quick reduction and a sale; it produces a stale listing that buyers discount for months.",
      ],
      callout: {
        title: "Agent insight",
        body: "Compass has one of the deepest agent networks in Newport Beach. When we represent a Huntington Beach seller who is buying in Newport, that network is how we surface Private Exclusives before they are public. It is the single biggest advantage we can offer on the buy side of a move south.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Newport Beach property.",
      bullets: {
        items: [
          "Coastal development permits. Almost all of coastal Newport is inside the Coastal Zone. Remodels, additions, and dock work can require a permit through the city's Local Coastal Program.",
          "Tidelands and dock permits. Bayfront docks sit over public tidelands and are permitted through the city's Harbor Department. Pull the permit and confirm the as-built footprint.",
          "Short-term rental permits. The Peninsula and the islands have a capped permit program. Do not underwrite rental income without confirming the property holds a permit.",
          "Flood and sea-level planning. Balboa Island and parts of the Peninsula are the subject of ongoing seawall and flood planning. Review the FEMA zone and the city's coastal hazard work.",
          "HOA and architectural review in the master-planned villages, and Mello-Roos in the newer developments. We are not tax professionals; confirm assessments on the county tax bill.",
          "Newport-Mesa Unified attendance boundaries, verified at the address level.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "Selling in Huntington Beach, buying in Newport Beach.",
      paragraphs: [
        "This is one of the most common moves we handle. The sequencing matters: the HB sale usually needs to close or be firmly in escrow before a Newport seller will take a contingent offer seriously. We run the HB listing through our three-phase system to compress the timeline and create certainty, then use the Compass network to line up the Newport purchase, often before the public sees it. If you are thinking about this move in the next year, the planning conversation should happen now rather than at listing time.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Newport Coast part of Newport Beach?",
      a: "Yes. Newport Coast was annexed into the City of Newport Beach and uses the 92657 zip code. It trades as its own market with its own master plan, so we cover it on a separate page, along with Corona del Mar.",
    },
    {
      q: "What is the difference between Newport Beach and Huntington Beach for a homeowner?",
      a: "Scale and price tier, mostly. Newport pricing begins where much of Huntington Beach ends, the harbor and yacht culture is larger, and the buyer pool is national. Huntington Beach offers the coast, the Harbour, and a wider range of entry points. Many of our clients own in one and eventually move to the other.",
    },
    {
      q: "Can you buy a home with a boat dock in Newport Beach?",
      a: "Yes. Bayfront homes in Dover Shores, Bayshores, Balboa Island, Lido Isle, and along the Peninsula bay side carry private docks over city-permitted tidelands. Slip size, water depth, and permit status vary lot by lot, exactly as they do in Huntington Harbour.",
    },
    {
      q: "Are short-term rentals allowed in Newport Beach?",
      a: "Only with a city permit, and the permit program is capped and concentrated on the Peninsula and the islands. Confirm whether a specific property holds a permit before assuming rental income.",
    },
    {
      q: "Which neighborhoods in Newport Beach are the natural move-up from Huntington Harbour?",
      a: "Dover Shores, Bayshores, Balboa Island, and Lido Isle for buyers who want to keep a dock. Eastbluff, the Bluffs, and Newport Heights for buyers who want more house and less water premium. Newport Coast for buyers trading the harbor for ocean views and a gated master plan.",
    },
  ],
  sources: [
    { label: "City of Newport Beach, official website", url: "https://www.newportbeachca.gov/" },
    {
      label: "City of Newport Beach, Harbor Department (docks, moorings, tidelands)",
      url: "https://www.newportbeachca.gov/government/departments/harbor-department",
    },
    { label: "Newport-Mesa Unified School District", url: "https://www.nmusd.us/" },
    ...countySources,
  ],
  cta: cityCta("Newport Beach"),
};
