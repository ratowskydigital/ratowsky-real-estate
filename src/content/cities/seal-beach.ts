import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const sealBeach: City = {
  slug: "seal-beach",
  name: "Seal Beach",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Old Town walkability, College Park cul-de-sacs, and the Hill above Main Street. Slower-paced than HB with longer-hold ownership and tighter inventory.",
  directAnswer:
    "Seal Beach is a small coastal city at the northwest tip of Orange County, California, directly north of Huntington Beach and Sunset Beach, comprising Old Town between Pacific Coast Highway and the beach, the Hill above Main Street, the College Park East and West neighborhoods near the 405, the Bridgeport waterfront, and the Leisure World retirement community. Homeowners tend to hold longer than in Huntington Beach, producing lower turnover and tighter inventory.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Seal Beach is, and why HB buyers keep looking at it.",
      paragraphs: [
        "Seal Beach is the first city north of Huntington Beach, separated from Sunset Beach by Anderson Street and from the Harbour by the Naval Weapons Station. Old Town, with Main Street running from PCH to the pier, is a walkable grid of cottages, duplexes, and new construction that reads a lot like downtown Huntington Beach with a slower pulse. The Hill sits on the bluff above Old Town with larger lots and ocean views. Bridgeport is a small waterfront community along the Anaheim Bay channel. College Park East and West are 1960s and 1970s tracts across the 405 and near the Los Alamitos line.",
        "The reason Seal Beach shows up on so many Huntington Beach buyer lists is value per lifestyle. It offers a coastal-village feel with pricing that, in some segments, undercuts the equivalent HB product. The trade-off is inventory. Owners stay a long time, so the right house may take a season or two to appear.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The Seal Beach neighborhoods and how each trades.",
      bullets: {
        items: [
          "Old Town. Cottages, duplexes, and rebuilt homes on 25- and 37.5-foot lots between PCH and the beach. Lot size varies block by block, and the numbered streets closest to the pier and the sand command the premium.",
          "The Hill. Larger lots and ocean-view homes on the bluff above Main Street and along Marina Drive, with stricter architectural review than Old Town.",
          "Bridgeport. Waterfront townhomes and single-family homes along the channel behind the Naval Weapons Station, some with dock or slip access governed by the association.",
          "College Park East and West. Single-story and two-story tract homes on cul-de-sacs, popular with buyers who want Seal Beach schools and a quieter street without the coastal premium.",
          "Leisure World. A large age-qualified cooperative community with its own ownership structure, financing rules, and resale process. Very different from the rest of the city and worth its own conversation.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Seal Beach.",
      paragraphs: [
        "In Old Town, the lot decides the comp. A 37.5-foot lot and a 25-foot lot on the same street are different products, and a portal estimate that averages them is wrong in both directions. Distance to the sand and Main Street is the second variable. On the Hill, view and lot size lead. In College Park, it is condition and floor plan, with single-story homes drawing consistent demand.",
        "Turnover is low. Average years in home runs materially higher than Huntington Beach, so when a well-prepared listing does come to market it tends to draw a deep, local buyer pool quickly. For sellers, that is an argument for full preparation and a Private Exclusive launch rather than a rush to the MLS.",
      ],
      callout: {
        title: "Agent insight",
        body: "Bridgeport association rules on docks, slip rentals, and exterior changes vary by phase. If water access is the reason you are looking, read the association documents before you tour.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Seal Beach property.",
      bullets: {
        items: [
          "Actual lot dimensions in Old Town, from the county record rather than the listing.",
          "Coastal Zone status and the city's Local Coastal Program for any rebuild or addition near the beach.",
          "Flood zone and seawall or sand-management history along the beachfront and the San Gabriel River side.",
          "Architectural review requirements on the Hill and in Bridgeport.",
          "For Leisure World, the cooperative's ownership, financing, and resale rules, which differ from fee-simple ownership.",
          "Los Alamitos Unified School District attendance boundaries, verified at the address level.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "Moving between Huntington Beach and Seal Beach.",
      paragraphs: [
        "We see this move in both directions. Huntington Harbour and Sunset Beach owners downsize into Old Town or the Hill to keep the coast and simplify. Seal Beach owners who want a dock or more land look at the Harbour and North HB. Because the two cities share a border and a buyer pool, we treat them as one search when a client is flexible, and the Compass network covers both.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Seal Beach more affordable than Huntington Beach?",
      a: "In some segments, yes. College Park and parts of Old Town can undercut comparable Huntington Beach product. The Hill and the beachfront compete with HB's coastal tier. The bigger difference is inventory, which is tighter in Seal Beach because owners hold longer.",
    },
    {
      q: "What is Leisure World Seal Beach?",
      a: "An age-qualified cooperative community in the eastern part of the city. Ownership is a share in a cooperative rather than a fee-simple deed, financing options are more limited, and resale runs through the community's process. We are happy to explain how it differs from the rest of the Seal Beach market.",
    },
    {
      q: "Does Seal Beach have waterfront homes with docks?",
      a: "Bridgeport offers waterfront townhomes and homes along the channel with slip or dock access managed through the association. It is smaller and more rule-driven than Huntington Harbour, so confirm the specific rights attached to any unit.",
    },
    {
      q: "Which school district serves Seal Beach?",
      a: "Los Alamitos Unified School District serves most of the city. Attendance boundaries should be confirmed with the district for any specific address.",
    },
    {
      q: "Are short-term rentals allowed in Seal Beach?",
      a: "The city regulates short-term rentals, and rules in Old Town in particular have tightened over time. Confirm the current ordinance before underwriting rental income on any property.",
    },
  ],
  sources: [
    { label: "City of Seal Beach, official website", url: "https://www.sealbeachca.gov/" },
    { label: "Los Alamitos Unified School District", url: "https://www.losal.org/" },
    ...countySources,
  ],
  cta: cityCta("Seal Beach"),
};
