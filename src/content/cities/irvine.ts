import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const irvine: City = {
  slug: "irvine",
  name: "Irvine",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: false,
  oneLine:
    "Master-planned villages, consistent architecture, and the corporate relocation destination of Orange County.",
  directAnswer:
    "Irvine is a master-planned city in central Orange County, California, organized into dozens of villages developed largely by the Irvine Company from the 1970s onward, including Turtle Rock, University Park, Woodbridge, Northwood, Westpark, Northpark, Quail Hill, Shady Canyon, Woodbury, Portola Springs, and the Great Park neighborhoods. It is the largest corporate relocation destination in the county, home to the University of California, Irvine, and known for consistent architectural control, extensive association amenities, and a substantial share of newer construction relative to coastal cities.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Irvine is, and where it fits for a coastal client.",
      paragraphs: [
        "Irvine is the opposite of Huntington Beach in almost every structural way. Huntington Beach grew up organically along the coast over a century; Irvine was planned village by village by a single master developer. That produces a city with consistent streetscapes, active associations, large parks and trail systems, newer homes, and a predictable set of rules about what you can and cannot do to your house.",
        "For our clients, Irvine shows up in two situations. Corporate relocations landing in Orange County often start in Irvine because it is close to the major employers and easy to understand from out of state. And Huntington Beach families who want a newer home with more square footage sometimes trade the coast for an Irvine village. In both cases the Compass network is deep here, and the village-by-village knowledge matters as much as it does island by island in the Harbour.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Villages",
      heading: "How Irvine's villages group, from oldest to newest.",
      bullets: {
        items: [
          "Turtle Rock, University Park, and Rancho San Joaquin. The original 1960s and 1970s villages near UC Irvine, with larger lots, mature trees, and some of the city's strongest long-term appreciation.",
          "Woodbridge and Northwood. 1970s and 1980s villages built around lakes, pools, and greenbelts, with a wide range of condos, townhomes, and single-family homes.",
          "Westpark, Oak Creek, and Westpark II. 1980s and 1990s villages with Mediterranean tract architecture and strong association amenities.",
          "Quail Hill, Turtle Ridge, and Shady Canyon. Hillside villages from the 2000s, with Shady Canyon as the guard-gated custom estate community at the top of the Irvine price stack.",
          "Northpark, Woodbury, Stonegate, Cypress Village, and Eastwood. 2000s and 2010s villages in the northern part of the city with newer construction and larger community facilities.",
          "Portola Springs, Orchard Hills, and the Great Park neighborhoods. The newest villages, still building out, with the most new-construction inventory and the highest special assessments.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Irvine.",
      paragraphs: [
        "Village first, then product type, then age. Detached single-family homes in the established villages carry a premium for lot size and land ownership. Newer villages trade on floor plan, finishes, and amenities. Condos and townhomes are a large share of the city's inventory and form the entry tier. Within any village, the streets that back to greenbelts, parks, or trails carry a measurable premium.",
        "Carrying cost is the variable buyers most often miss. Mello-Roos and community facilities district assessments in the newer villages can add materially to the monthly payment, and association dues stack across master and sub-associations. A lower list price in a new village can cost more per month than a higher list price in an older one. We build the full picture before any offer.",
      ],
      callout: {
        title: "Agent insight",
        body: "Irvine is a data-rich market where portal estimates are closer to reality than they are in coastal Huntington Beach, because the housing stock is consistent. The judgment still lives in the details: assessment expiration dates, land-lease status on some older parcels, and association rules on rentals and remodels.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on an Irvine property.",
      bullets: {
        items: [
          "Mello-Roos and community facilities district assessments by parcel, including the expiration schedule. We are not tax professionals; confirm on the county tax bill and with your tax advisor.",
          "Master and sub-association dues, and any pending special assessments.",
          "Land ownership status. A small number of older Irvine parcels historically involved ground leases; confirm fee-simple ownership in the title report.",
          "Architectural review rules for exterior changes, solar, and additions.",
          "Rental restrictions in the association documents if you plan to lease.",
          "Irvine Unified and Tustin Unified attendance boundaries, verified at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "Huntington Beach and Irvine.",
      paragraphs: [
        "The move from Huntington Beach to Irvine is usually about square footage and a newer home. The move from Irvine to Huntington Beach is usually about the coast, the Harbour, and a lot you own outright without a master association. We work both directions and, because we are a Compass team, the agent network in Irvine is the same network we use in Newport Coast and the Harbour.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does Irvine have Mello-Roos?",
      a: "Most villages built after the early 1980s carry Mello-Roos or community facilities district assessments, and the amounts and expiration dates vary widely by village and parcel. Older villages such as Turtle Rock and University Park generally do not. Confirm on the county tax bill for the specific property. We are not tax professionals and recommend verifying with your tax advisor.",
    },
    {
      q: "Which Irvine villages are the most established?",
      a: "Turtle Rock, University Park, Rancho San Joaquin, Woodbridge, and Northwood are the oldest and most mature villages, with larger lots and established landscaping. The newest villages are in the north around the Great Park, Portola Springs, and Orchard Hills.",
    },
    {
      q: "Is Irvine a good choice for a corporate relocation?",
      a: "It is the most common landing spot in Orange County for relocations because of proximity to major employers, consistent housing stock, and abundant new construction. Many relocating buyers later move to the coast once they know the county, which is where we come in.",
    },
    {
      q: "Which school districts serve Irvine?",
      a: "Irvine Unified School District serves most of the city, and Tustin Unified serves some northern villages. Confirm attendance boundaries with the districts for any specific address.",
    },
    {
      q: "How do Irvine association fees work?",
      a: "Most homes belong to a master community association and a sub-association for the specific tract, each with its own dues and rules. Condos and townhomes add building-level dues. Ask for all association documents before writing an offer.",
    },
  ],
  sources: [
    { label: "City of Irvine, official website", url: "https://www.cityofirvine.org/" },
    { label: "Irvine Company, master developer", url: "https://www.irvinecompany.com/" },
    { label: "Irvine Unified School District", url: "https://iusd.org/" },
    ...countySources,
  ],
  cta: cityCta("Irvine"),
};
