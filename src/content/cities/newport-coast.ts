import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const newportCoast: City = {
  slug: "newport-coast",
  name: "Newport Coast",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Custom estates, ocean-view condos, and the gated communities south of MacArthur. The natural Compass move-up market for coastal Orange County sellers.",
  directAnswer:
    "Newport Coast is a master-planned coastal community within the City of Newport Beach, California, using the 92657 zip code and comprising Pelican Hill, Pelican Crest, Crystal Cove, Pelican Point, and the gated villages inland of Pacific Coast Highway between Corona del Mar and Laguna Beach. The buyer pool is national and international. Pricing generally runs from ocean-view condos and townhomes at the entry tier to custom estates in the tens of millions at the top.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Newport Coast is, in plain terms.",
      paragraphs: [
        "Newport Coast is the hillside between Corona del Mar and Laguna Beach, developed by the Irvine Company from the late 1980s onward as a series of gated and guard-gated villages above Crystal Cove State Park. It is part of the City of Newport Beach but functions as a separate market: newer construction, master-planned streets, community associations with real architectural control, and view corridors that were engineered rather than inherited.",
        "For our Huntington Beach and Huntington Harbour clients, Newport Coast is the most common destination when the goal is to trade harbor life for ocean views, a gated community, and a home that does not need a seawall inspection. It is also the market where Compass carries some of its strongest inventory in Orange County, which is leverage we use when we represent a seller planning this move.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The Newport Coast villages, from entry tier to the top of the stack.",
      bullets: {
        items: [
          "Crystal Cove. Guard-gated custom and semi-custom homes on the ocean side of PCH above the state park. Consistently the top of the Newport Coast price stack.",
          "Pelican Crest and Pelican Point. Custom estate lots with unobstructed ocean and Catalina views. Large homes, long build cycles, and international buyers.",
          "Pelican Hill and Pelican Ridge. Semi-custom and tract homes around the Pelican Hill golf courses and resort. Strong resale demand for turnkey product.",
          "Newport Ridge, Ocean Heights, Altezza, and the inland villages. Tract single-family homes and townhomes, many with ocean or canyon views, at the more attainable end of the community.",
          "Newport Coast condos and townhomes. Lock-and-leave inventory with resort-style amenities, often the first purchase for buyers relocating into Orange County.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value on the Coast.",
      paragraphs: [
        "View is the first variable. A whitewater ocean view, a Catalina view, a canyon view, and a peek view are four different products in the same floor plan, and the spread between them can be enormous. Gate status is second: guard-gated villages carry a premium over gated and non-gated streets. Condition is third, because buyers at this tier expect turnkey and will discount heavily for dated finishes.",
        "The buyer pool is national and international, which means listings need global distribution, video, drone, and a Private Exclusive launch to reach the right people. Days on market at the estate tier can run long by Huntington Beach standards. That is normal here and is not a signal of a bad listing; it is a signal of a small, specific buyer pool.",
      ],
      callout: {
        title: "Agent insight",
        body: "Mello-Roos and association fees vary substantially from one Newport Coast village to the next and materially change the monthly carry. We build the full carrying-cost picture before a client falls in love with a view. We are not tax professionals, so the final numbers are confirmed with the county tax bill and your advisor.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Newport Coast property.",
      bullets: {
        items: [
          "Community facilities district and Mello-Roos assessments on the county tax bill, by parcel.",
          "Master association plus sub-association dues, and what each covers.",
          "Architectural review rules for exterior changes, landscaping, and additions.",
          "View protection. Some associations have view-preservation provisions; many do not. Confirm what protects the view you are paying for.",
          "Short-term rental rules, which differ between Pelican Hill, Crystal Cove, and the inland villages.",
          "Fire hazard severity zone status and insurance availability, which affect hillside properties throughout coastal Orange County.",
          "Coastal Zone status for parcels on the ocean side of PCH.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "Trading Huntington Harbour equity for a Newport Coast view.",
      paragraphs: [
        "This move is the one we plan most carefully. The Harbour sale is usually the funding event, so it gets the full three-phase treatment to maximize the number and compress the timeline. Then the Compass network goes to work on the Coast side, where a meaningful share of the best inventory trades as a Private Exclusive before it reaches the public MLS. Get us involved a year ahead and the two transactions can be sequenced so you are never carrying two homes longer than you choose to.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Newport Coast its own city?",
      a: "No. Newport Coast is a community within the City of Newport Beach with its own zip code, 92657. It was master-planned by the Irvine Company and trades as a distinct market from the rest of Newport Beach.",
    },
    {
      q: "Does Newport Coast have Mello-Roos?",
      a: "Many parcels do, and the amounts vary by village and by the year the district was formed. Some assessments have expired or are close to it. We pull the actual county tax bill for every property we show. We are not tax professionals, so confirm the details with your tax advisor.",
    },
    {
      q: "What is the difference between Crystal Cove and Pelican Hill?",
      a: "Crystal Cove is a guard-gated community on the ocean side of PCH above the state park, with custom and semi-custom homes and the highest price ceiling in Newport Coast. Pelican Hill sits inland around the golf courses and resort, with a broader mix of semi-custom and tract homes and a different set of association rules, including on short-term rentals.",
    },
    {
      q: "Are there condos in Newport Coast?",
      a: "Yes. Several villages offer condos and townhomes with ocean or canyon views and resort-style amenities. They are the most common entry point for buyers relocating into coastal Orange County.",
    },
    {
      q: "Which school district serves Newport Coast?",
      a: "Newport-Mesa Unified School District. Attendance boundaries should be confirmed at the address level with the district.",
    },
  ],
  sources: [
    { label: "City of Newport Beach, official website", url: "https://www.newportbeachca.gov/" },
    { label: "Crystal Cove State Park, California State Parks", url: "https://www.parks.ca.gov/?page_id=644" },
    { label: "Irvine Company, master developer of Newport Coast", url: "https://www.irvinecompany.com/" },
    { label: "Newport-Mesa Unified School District", url: "https://www.nmusd.us/" },
    ...countySources,
  ],
  cta: cityCta("Newport Coast"),
};
