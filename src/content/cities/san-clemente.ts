import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const sanClemente: City = {
  slug: "san-clemente",
  name: "San Clemente",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Spanish-village coastline, Talega and Sea Pointe estate enclaves, and the southernmost Orange County beach market.",
  directAnswer:
    "San Clemente is the southernmost coastal city in Orange County, California, between Dana Point and the San Diego County line, known for its Spanish-village architecture, the Pier Bowl and Avenida del Mar downtown, the surf breaks at Trestles and San Onofre, and the master-planned Talega and Forster Ranch communities inland. Inventory ranges from cottages in the Pier Bowl and Southwest San Clemente to custom estates in Cyprus Shore, Cotton's Point, and Sea Pointe Estates.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What San Clemente is, and who it fits.",
      paragraphs: [
        "San Clemente was founded in the 1920s as a Spanish village by the sea, and the architecture still follows that founding idea: white walls, red tile roofs, and a downtown along Avenida del Mar that runs down to the pier. The coastal neighborhoods sit on the bluffs and canyons above the beach, and the inland master plans of Talega, Forster Ranch, and Rancho San Clemente climb the hills with newer construction and association amenities.",
        "For Huntington Beach clients, San Clemente is the far end of the coastal move. It attracts buyers who want a surf-town feel, a walkable downtown, and a lower entry price than Newport or Laguna, along with buyers who want a newer home in a master plan without leaving the coast. It is a drive from Huntington Beach, so it is usually a lifestyle decision rather than a commute decision.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The San Clemente neighborhoods and how each trades.",
      bullets: {
        items: [
          "The Pier Bowl and downtown. Cottages, condos, and rebuilt homes around the pier and Avenida del Mar, the most walkable and most in-demand pocket.",
          "Southwest San Clemente and the Riviera District. Bluff-top and beach-adjacent streets south of the pier with ocean views and a strong remodel cycle.",
          "Cyprus Shore, Cotton's Point, and Cyprus Cove. Gated oceanfront and beach-access enclaves at the south end near Trestles, at the top of the price stack.",
          "Sea Pointe Estates. A gated hillside estate community with panoramic ocean views and large custom lots.",
          "Talega. The largest master plan in the city, with 2000s construction, golf, and extensive amenities, and the highest special assessments.",
          "Forster Ranch, Rancho San Clemente, and Marblehead. Established master-planned tracts from the 1980s onward with ocean views on many streets.",
          "North Beach and Capistrano Shores. The northern edge near Dana Point, with beachfront and rail-adjacent lots that require specific diligence.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in San Clemente.",
      paragraphs: [
        "Ocean view and walkability lead. A view from the Riviera District, a whitewater view in Cyprus Shore, and a hillside panorama in Sea Pointe are different products with different buyer pools. Downtown proximity carries a premium in the Pier Bowl and Southwest. In the master plans, floor plan, condition, and assessment burden decide the comp.",
        "Bluff and slope geology is the San Clemente-specific variable. Several coastal bluffs and hillside areas have documented slope movement, and the rail line runs along the beach. Any property on the coastal bluff or a mapped slope needs a geotechnical review before the offer is written.",
      ],
      callout: {
        title: "Agent insight",
        body: "Talega's Mello-Roos assessments are among the largest in South County and materially change the monthly carry. We are not tax professionals; we pull the county tax bill for every Talega property and build the full number before a client falls in love with the house.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a San Clemente property.",
      bullets: {
        items: [
          "Slope stability and geotechnical history on bluff-top and hillside lots, including the city's coastal hazard mapping.",
          "Mello-Roos and community facilities district assessments in Talega and other master plans, confirmed on the county tax bill.",
          "Coastal Zone status and the city's Local Coastal Program for rebuilds and additions near the beach.",
          "Rail line proximity and noise on beachfront and North Beach parcels.",
          "Association rules, dues, and beach access rights in the gated communities.",
          "Short-term rental permit status, which the city regulates.",
          "Capistrano Unified attendance boundaries, verified at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "From Huntington Beach to San Clemente.",
      paragraphs: [
        "San Clemente draws Huntington Beach owners who want a surf town with a lower price tier and are no longer tied to a north-county commute, and downsizers heading for a coastal condo near the pier. The Compass South County network surfaces Private Exclusives here before they reach the public MLS, and we sequence the Huntington Beach sale so the buyer arrives with certainty.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the Pier Bowl in San Clemente?",
      a: "The neighborhood surrounding the San Clemente Pier at the foot of Avenida del Mar, with cottages, condos, and rebuilt homes in a walkable setting. It is the most in-demand pocket in the city for buyers who want downtown and the beach on foot.",
    },
    {
      q: "Does Talega have Mello-Roos?",
      a: "Yes, and the assessments are among the larger ones in South County, varying by tract and parcel. Confirm the exact line items on the county tax bill. We are not tax professionals and recommend verifying with your tax advisor.",
    },
    {
      q: "Are there gated oceanfront communities in San Clemente?",
      a: "Yes. Cyprus Shore, Cotton's Point, and Cyprus Cove at the south end near Trestles offer gated oceanfront and beach-access homes at the top of the city's price stack. Sea Pointe Estates is a gated hillside community with panoramic views.",
    },
    {
      q: "Is San Clemente a good market for a second home?",
      a: "It is one of the most active second-home markets in Orange County because of the surf, the pier, and the walkable downtown. Confirm short-term rental rules before assuming rental income, because the city regulates permits.",
    },
    {
      q: "Which school district serves San Clemente?",
      a: "Capistrano Unified School District. Attendance boundaries should be confirmed with the district for any specific address.",
    },
  ],
  sources: [
    { label: "City of San Clemente, official website", url: "https://www.san-clemente.org/" },
    { label: "San Onofre State Beach and Trestles, California State Parks", url: "https://www.parks.ca.gov/?page_id=647" },
    { label: "Capistrano Unified School District", url: "https://capousd.org/" },
    ...countySources,
  ],
  cta: cityCta("San Clemente"),
};
