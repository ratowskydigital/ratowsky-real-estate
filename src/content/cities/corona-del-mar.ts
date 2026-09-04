import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const coronaDelMar: City = {
  slug: "corona-del-mar",
  name: "Corona del Mar",
  shortName: "CdM",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Village walkability, ocean-view bluffs, and one of the highest price-per-square-foot markets in coastal Orange County.",
  directAnswer:
    "Corona del Mar is a coastal village within the City of Newport Beach, California, using the 92625 zip code and sitting on the bluffs above the Pacific between the Newport Harbor entrance and Crystal Cove. The Flower Streets village between PCH and the ocean anchors a walkable lifestyle market of cottages, duplexes, and new construction on narrow lots, while Cameo Shores, Shore Cliffs, Irvine Terrace, and Harbor View Hills carry the larger view homes. Bluff-front and ocean-view homes command some of the highest price-per-square-foot figures in coastal Orange County.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Corona del Mar is, and who it fits.",
      paragraphs: [
        "Corona del Mar is the part of Newport Beach that feels like a village. The Flower Streets run from PCH down toward the bluff and the beach, lined with cottages, duplexes, and newer builds on 30- and 40-foot lots. The commercial strip along East Coast Highway is walkable in a way almost nothing else in Orange County is. South of the village, Cameo Shores and Shore Cliffs hold the bluff-front estates, and inland of PCH, Irvine Terrace, Harbor View Hills, and Spyglass Hill step up the hillside with harbor and ocean views.",
        "For our Huntington Beach clients, CdM is the answer when the priority is walkability and a village feel rather than a dock or a gated master plan. It attracts downsizers from larger Newport and Newport Coast homes, second-home buyers, and locals trading up from the Peninsula. Inventory is small and turnover is slow, so patience and network access decide most purchases here.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The pockets of Corona del Mar and how they differ.",
      bullets: {
        items: [
          "The Flower Streets (the Village). Cottages, front-back duplexes, and three-level new construction between PCH and Ocean Boulevard. Lot width and ocean-side versus inland-side of PCH drive value.",
          "Ocean Boulevard and the bluff. Front-row homes above the beach and the harbor jetty, with the highest price ceiling in CdM.",
          "Cameo Shores and Cameo Highlands. Mid-century tracts on the bluff south of the village with private beach access, many rebuilt as custom homes.",
          "Shore Cliffs. A small bluff-top enclave with ocean frontage and larger lots.",
          "Irvine Terrace, Harbor View Hills, Spyglass Hill, and Jasmine Creek. Hillside neighborhoods inland of PCH with harbor and ocean views, larger lots, and active homeowners associations.",
          "Corona del Mar condos and townhomes. Lock-and-leave inventory near the village and along the hillside.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in CdM.",
      paragraphs: [
        "Three variables dominate. First, the side of PCH: the ocean side of the highway carries a consistent premium over the inland side. Second, lot width and the buildable envelope, because much of the village stock is being rebuilt and the lot decides what the rebuild can be. Third, view, which in CdM can mean whitewater, harbor entrance, jetty, or Catalina, each priced differently.",
        "New construction on the Flower Streets sets the ceiling for the village, and dated cottages trade on land value with a discount for demolition and carrying costs during the build. On the hillside, view protection covenants and association rules materially affect resale, so we read the CC&Rs before writing an offer.",
      ],
      callout: {
        title: "Agent insight",
        body: "Duplexes in the village are their own product. Owner-occupied front units with a rented back unit change the underwriting for many buyers. Confirm permitted use, parking, and the city's rental rules before assuming income.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Corona del Mar property.",
      bullets: {
        items: [
          "Coastal Zone status and the city's Local Coastal Program, which govern rebuilds and additions on the ocean side.",
          "Bluff-edge setbacks and geotechnical reports on any bluff-top or bluff-front lot.",
          "View protection provisions in the hillside associations, and whether the view you are buying is protected at all.",
          "Short-term rental permit status, which is capped and not transferable by assumption.",
          "Parking and access rules on the Flower Streets, including alley-loaded garages and curb cuts.",
          "Newport-Mesa Unified attendance boundaries, verified at the address level.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "From Huntington Beach to Corona del Mar.",
      paragraphs: [
        "The move from a downtown Huntington Beach cottage or a Seacliff home to Corona del Mar is common when clients want the village lifestyle with a step up in price tier. The sequencing is the same as any move south: sell the HB home through the three-phase system for certainty, then work the Compass network for CdM inventory before it hits the public MLS. Given how little inventory CdM produces in a year, the early-look window is often the entire difference between getting in and waiting another season.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Corona del Mar a separate city from Newport Beach?",
      a: "No. Corona del Mar is a neighborhood within the City of Newport Beach with its own zip code, 92625. It has a distinct village character and trades as its own market, which is why we cover it separately.",
    },
    {
      q: "What are the Flower Streets?",
      a: "The residential streets of the CdM village between PCH and the bluff, named after flowers in alphabetical order. They hold the cottages, duplexes, and new construction that define the walkable core of Corona del Mar.",
    },
    {
      q: "Why is price per square foot so high in Corona del Mar?",
      a: "Small lots, scarce inventory, walkability, and ocean proximity. Much of the value is in the land and location, so a small home on a good lot can trade at a per-square-foot number that looks unusual next to a large inland home.",
    },
    {
      q: "Are there homes with private beach access in CdM?",
      a: "Cameo Shores and Cameo Highlands have private beach access for residents through the community association. Access rules and fees should be confirmed with the association.",
    },
    {
      q: "Which school district serves Corona del Mar?",
      a: "Newport-Mesa Unified School District. Confirm attendance boundaries at the address with the district.",
    },
  ],
  sources: [
    { label: "City of Newport Beach, official website", url: "https://www.newportbeachca.gov/" },
    { label: "Corona del Mar Chamber of Commerce", url: "https://www.cdmchamber.com/" },
    { label: "Newport-Mesa Unified School District", url: "https://www.nmusd.us/" },
    ...countySources,
  ],
  cta: cityCta("Corona del Mar"),
};
