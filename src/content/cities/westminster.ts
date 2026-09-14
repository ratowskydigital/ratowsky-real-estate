import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const westminster: City = {
  slug: "westminster",
  name: "Westminster",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: false,
  oneLine:
    "The inland gateway between Huntington Beach and the 405. A value market with short drives to the coast and rising demand from HB buyers.",
  directAnswer:
    "Westminster is an inland city in northwestern Orange County, California, directly north of Huntington Beach and east of Seal Beach, bisected by the 405 and 22 freeways. Housing stock is dominated by single-family homes built from the 1950s through the 1980s on tract streets, with condos and townhomes along the major corridors. The city is home to Little Saigon, one of the largest Vietnamese-American commercial districts in the country. Long-term ownership is common, and demand from buyers priced out of Huntington Beach has pushed values steadily upward.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Westminster is, and why it is on so many Huntington Beach buyer lists.",
      paragraphs: [
        "Westminster is the city you drive through on Bolsa Chica, Goldenwest, or Beach Boulevard between Huntington Beach and the 405. It was built out mostly in the 1950s through the 1970s as single-family tracts, and it has remained a predominantly single-family city. Little Saigon along Bolsa Avenue is the commercial and cultural center, and the 405 and 22 make the city one of the best-connected in the county for commuting.",
        "For Huntington Beach buyers, Westminster is the closest place where the same budget buys noticeably more house. The southern tracts near Bolsa Chica and Edwards are a few minutes from the HB line and share the same coastal breeze and the same drive to the beach. For sellers, it is a market with a deep and consistent buyer pool that responds well to preparation.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "How Westminster breaks down.",
      bullets: {
        items: [
          "South Westminster. The tracts between Bolsa Avenue and the Huntington Beach line, closest to the coast and the most requested by HB-adjacent buyers.",
          "West Westminster. Streets near the Seal Beach and Naval Weapons Station side, with 1960s single-story tracts and larger lots on some blocks.",
          "Central Westminster and the Civic Center area. Established tracts around Westminster Boulevard and Goldenwest, with a mix of single-story and two-story homes.",
          "North Westminster and the 22 corridor. Tracts near Garden Grove with the widest range of condition and price.",
          "Condos and townhomes. Concentrated along Beach Boulevard, Bolsa, and Westminster Boulevard, forming the entry tier.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Westminster.",
      paragraphs: [
        "Proximity to Huntington Beach is the first variable; the southern tracts trade at a premium to the northern ones. Condition and floor plan are next. Single-story homes with updated kitchens and baths draw the broadest buyer pool. Lot size and the potential for an accessory dwelling unit matter more here than in many coastal markets because the lots are often generous relative to the house.",
        "Well-prepared homes sell quickly. Westminster is a market where Compass Concierge and a proper preparation plan routinely move a listing from one tier to the next, because much of the inventory is in original or lightly updated condition and buyers pay for turnkey.",
      ],
      callout: {
        title: "Agent insight",
        body: "Many Westminster sellers have owned for decades and are moving to be near family or to simplify. The conversation about timing, preparation, and what comes next usually matters more than the listing price itself. We are glad to start that conversation early and with no pressure.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Westminster property.",
      bullets: {
        items: [
          "Permit history for additions, garage conversions, and second units, which are common on older tract streets.",
          "Original systems on 1950s and 1960s homes: roof, panel, sewer lateral, and plumbing.",
          "Freeway noise exposure on streets near the 405 and 22, which varies block by block.",
          "Association rules and dues on condo and townhome properties.",
          "Attendance boundaries across the Westminster, Ocean View, and Garden Grove school districts and Huntington Beach Union High School District, confirmed at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "Westminster and Huntington Beach.",
      paragraphs: [
        "The border between the two cities is porous for buyers. North Huntington Beach tracts near Bolsa Chica and Edinger and the southern Westminster tracts share a buyer pool, a commute, and a drive to the beach. We price homes on both sides of the line against the same comp logic and tell clients plainly where the value is on a given week.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Westminster a good alternative to Huntington Beach for a first-time buyer?",
      a: "Often, yes. The southern Westminster tracts are minutes from the Huntington Beach line and the same budget buys more house. Buyers whose priority is walking to the beach or a specific HB neighborhood will still prefer Huntington Beach, but many first-time buyers start in Westminster and move to HB later.",
    },
    {
      q: "Does Westminster have Mello-Roos?",
      a: "Generally no. The city was built out before community facilities districts were common. Confirm on the county tax bill for any specific parcel. We are not tax professionals; verify with your tax advisor.",
    },
    {
      q: "Which school districts serve Westminster?",
      a: "Westminster School District, Ocean View School District, and Garden Grove Unified serve different parts of the city for elementary and middle grades, and Huntington Beach Union High School District serves most high school students. Confirm boundaries at the address with the districts.",
    },
    {
      q: "What is Little Saigon?",
      a: "The commercial and cultural district centered on Bolsa Avenue in Westminster, one of the largest Vietnamese-American business districts in the United States. It anchors the city's dining and retail and draws visitors from across Southern California.",
    },
    {
      q: "How quickly do homes sell in Westminster?",
      a: "Well-prepared, correctly priced homes generally draw offers in the first week or two. Homes in original condition or priced above the tract's comps can sit. Preparation and pricing decide most outcomes.",
    },
  ],
  sources: [
    { label: "City of Westminster, official website", url: "https://www.westminster-ca.gov/" },
    { label: "Westminster School District", url: "https://www.wsdk8.us/" },
    ...countySources,
  ],
  cta: cityCta("Westminster"),
};
