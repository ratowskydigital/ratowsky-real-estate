import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const costaMesa: City = {
  slug: "costa-mesa",
  name: "Costa Mesa",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: false,
  oneLine:
    "Eastside cottages, Mesa Verde golf-course homes, and the Westside arts-district pivot. One of Orange County's most architecturally varied cities.",
  directAnswer:
    "Costa Mesa is a city in central Orange County, California, directly inland from Newport Beach and bordered by Huntington Beach and Fountain Valley on the west. It comprises the Eastside cottage neighborhoods near Newport Boulevard and 17th Street, the Mesa Verde and Mesa del Mar golf-course tracts, the South Coast Plaza and South Coast Metro district, College Park, and the Westside, where former industrial blocks are turning into small-lot homes and creative space. Inventory is among the most architecturally varied in the county, from 1920s cottages to new construction.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Costa Mesa is, and where it fits for a coastal Orange County buyer.",
      paragraphs: [
        "Costa Mesa sits on the mesa above Newport Beach, between the Santa Ana River and the 55 freeway. It is the city Huntington Beach and Newport buyers turn to when they want to stay within a short drive of the coast but need more house, more variety, or a different price tier. Eastside Costa Mesa borders Newport Heights and trades like a Newport-adjacent neighborhood. Mesa Verde wraps the golf course with larger mid-century lots. The Westside, once light industrial, has become the most active infill and small-lot development zone in the area.",
        "The city is also one of Orange County's cultural centers, with South Coast Plaza, Segerstrom Center for the Arts, and the fairgrounds, which shapes both the buyer pool and the rental market. It is a city where two homes a mile apart can be completely different products, which is exactly why it rewards local knowledge.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The Costa Mesa neighborhoods that drive the market.",
      bullets: {
        items: [
          "Eastside. Cottages, bungalows, and rebuilt homes on the streets between Newport Boulevard, 17th Street, and the Newport Beach line. The most Newport-adjacent pricing in the city.",
          "Mesa Verde. 1960s tracts and larger custom homes around Mesa Verde Country Club, with the golf-course frontage carrying a premium.",
          "Mesa del Mar and College Park. Mid-century single-family tracts near Orange Coast College and the fairgrounds, popular with buyers who want a walkable, established street.",
          "The Westside and the arts district. Small-lot detached homes, live-work product, and remodeled bungalows on former industrial blocks west of Harbor Boulevard.",
          "South Coast Metro and the Halecrest area. Condos, townhomes, and tract homes near South Coast Plaza and the 405, the entry tier and the strongest rental demand.",
          "Halecrest, Lower Birds, and Upper Birds. Established tracts with a mix of single-story and two-story homes and steady move-up demand.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Costa Mesa.",
      paragraphs: [
        "Neighborhood first, always. Eastside comps do not apply to Mesa Verde, and Westside new construction does not comp against a 1950s tract two blocks away. Within a neighborhood, lot size and the potential for an accessory dwelling unit or a rebuild carry real weight, because Costa Mesa lots on the Eastside and Westside are often larger than the house on them suggests.",
        "Condition matters more in the mid-century tracts, where original kitchens and dated systems are common. Costa Mesa buyers are often coming from a rental in Newport or Irvine, and they pay a premium for turnkey. That makes preparation and Compass Concierge a strong lever for sellers.",
      ],
      callout: {
        title: "Agent insight",
        body: "Costa Mesa has been an active infill and small-lot development market for a decade. If a listing is on a large lot in an area zoned for it, land value can exceed the value of the house. We check that before pricing any older Eastside or Westside property.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Costa Mesa property.",
      bullets: {
        items: [
          "Zoning and lot potential, including accessory dwelling unit rules and small-lot subdivision history.",
          "Permit history for additions and garage conversions, which are common throughout the city.",
          "Flood zone status near the Santa Ana River on the Westside.",
          "Association rules and dues in the townhome and condo communities near South Coast Metro.",
          "Noise and traffic exposure near the 55, the 405, and the fairgrounds, which affect specific streets differently.",
          "Newport-Mesa Unified attendance boundaries, verified at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "Huntington Beach and Costa Mesa.",
      paragraphs: [
        "Costa Mesa shows up for our Huntington Beach clients in two ways. Buyers priced out of coastal HB look at the Westside and College Park for a detached home within a short drive of the beach. Investors and move-up buyers look at the Eastside as a Newport-adjacent play. Sellers leaving Costa Mesa often head to South HB or Fountain Valley for a larger lot, or to Newport for the water. We handle all of those moves with the same comp logic across city lines.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between Eastside and Westside Costa Mesa?",
      a: "Eastside borders Newport Beach and is defined by cottages and rebuilt homes on established streets, with pricing that tracks Newport Heights. The Westside is former light-industrial land that has become an active infill area with small-lot homes, live-work product, and the arts district. They are different markets with different buyer pools.",
    },
    {
      q: "Is Costa Mesa a good alternative to Newport Beach?",
      a: "For many buyers, yes. Eastside Costa Mesa in particular offers a short drive to Newport and the coast with a lower entry price. It is one of the most common searches we run for clients who started in Newport and want more house for the money.",
    },
    {
      q: "Does Costa Mesa have Mello-Roos?",
      a: "Most of the city does not, because it was built out before community facilities districts were common. Some newer developments carry assessments. Confirm on the county tax bill for the specific parcel. We are not tax professionals; verify with your tax advisor.",
    },
    {
      q: "Which school district serves Costa Mesa?",
      a: "Newport-Mesa Unified School District. Attendance boundaries should be confirmed with the district for any specific address.",
    },
    {
      q: "Can I build an ADU on a Costa Mesa lot?",
      a: "State law and the city's ordinance allow accessory dwelling units on most single-family lots, subject to setbacks, size limits, and parking rules. Confirm the specific requirements with the city before pricing a property on ADU potential.",
    },
  ],
  sources: [
    { label: "City of Costa Mesa, official website", url: "https://www.costamesaca.gov/" },
    { label: "Newport-Mesa Unified School District", url: "https://www.nmusd.us/" },
    ...countySources,
  ],
  cta: cityCta("Costa Mesa"),
};
