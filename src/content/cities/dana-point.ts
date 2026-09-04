import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const danaPoint: City = {
  slug: "dana-point",
  name: "Dana Point",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Headlands estates, the Lantern District village, Capistrano Beach, and a harbor in the middle of a generational rebuild. The southernmost true coastal-village market in Orange County.",
  directAnswer:
    "Dana Point is a coastal city in southern Orange County, California, between Laguna Beach and San Clemente, comprising the Lantern District village above the harbor, the gated Headlands and Monarch Bay enclaves, the Monarch Beach resort corridor, Niguel Shores, and the Capistrano Beach neighborhoods to the south. Dana Point Harbor is undergoing a multi-year revitalization that is reshaping the waterfront, and the city's housing ranges from 1960s bluff-top tracts to custom oceanfront estates.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Dana Point is, and why coastal Orange County sellers keep ending up here.",
      paragraphs: [
        "Dana Point is built around its harbor. The Lantern District sits on the bluff above it with a walkable village of restaurants and shops along PCH and Del Prado. North of the harbor, the Headlands and Monarch Bay hold the gated oceanfront estates, and the Monarch Beach resort corridor around the Waldorf Astoria and Ritz-Carlton carries the resort-adjacent homes. South of the harbor, Capistrano Beach and Palisades run along the sand toward San Clemente with a mix of bluff-top tracts and beachfront lots.",
        "For our clients, Dana Point is usually the answer when someone wants a true coastal village at a lower price tier than Newport or Laguna, or when a Huntington Harbour owner wants to keep a boat without owning a seawall. The harbor's slips, the resort amenities, and the village make it a strong second-home and downsizing market as well.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The Dana Point neighborhoods and how each trades.",
      bullets: {
        items: [
          "Lantern District and Lantern Village. Cottages, condos, and rebuilt homes on the bluff above the harbor with a walkable commercial core. The most active infill and remodel zone in the city.",
          "The Headlands. Guard-gated custom estates on the point between the harbor and Salt Creek, the top of the Dana Point price stack.",
          "Monarch Bay and Monarch Beach. Gated oceanfront and resort-adjacent communities with private beach club access and some of the highest values in the city.",
          "Niguel Shores. A gated bluff-top community with a private beach access, a range of single-family homes and townhomes, and strong association amenities.",
          "Capistrano Beach and Palisades. Bluff-top tracts and beachfront lots along the southern coastline toward San Clemente, with ocean views and a quieter feel.",
          "Dana Point condos and townhomes. Concentrated near the harbor and the Lantern District, forming the entry tier and a strong second-home market.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Dana Point.",
      paragraphs: [
        "Ocean view and gate status lead, as they do throughout South County. A whitewater view in the Lantern District, a Catalina view in Capistrano Beach, and a harbor view above the marina are three different products. Beach club and private beach access in Monarch Bay and Niguel Shores carry real premiums. In the Lantern District, rebuild potential on the smaller lots drives land value.",
        "The harbor revitalization is the variable specific to Dana Point. As the marina, commercial core, and hotels rebuild over the next several years, the Lantern District and harbor-adjacent inventory are being repriced. Buyers should understand the construction timeline for the specific street; sellers should understand what the completed harbor does to their comp set.",
      ],
      callout: {
        title: "Agent insight",
        body: "Coastal bluff geology matters throughout Dana Point. On any bluff-top or bluff-edge property, a geotechnical review and a look at the city's coastal hazard mapping are not optional. We build that into the diligence timeline before an offer, not after.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Dana Point property.",
      bullets: {
        items: [
          "Coastal Zone status and the city's Local Coastal Program for rebuilds and additions.",
          "Bluff stability, geotechnical reports, and coastal hazard mapping on bluff-top lots.",
          "Association rules, dues, and beach club access rights in the gated communities.",
          "Short-term rental permit status, which the city regulates and caps.",
          "Harbor revitalization construction timeline and its effect on the specific street.",
          "Capistrano Unified attendance boundaries, verified at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "From Huntington Beach to Dana Point.",
      paragraphs: [
        "Dana Point is a common destination for Huntington Harbour sellers who want to keep boating without the maintenance of a private seawall and dock, trading the Harbour for a harbor slip and a village home. It also draws Huntington Beach owners downsizing to a coastal condo. The Compass network in South County is the same network we use in Newport Coast and Laguna, and it surfaces Private Exclusives well before the public MLS.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is the Lantern District in Dana Point?",
      a: "The village on the bluff above Dana Point Harbor, centered on PCH and Del Prado, with streets named for ship lanterns. It holds cottages, condos, and rebuilt homes and is the most walkable and most active remodel area in the city.",
    },
    {
      q: "Is Dana Point Harbor being rebuilt?",
      a: "Yes. A multi-year public-private revitalization is rebuilding the marina, commercial core, and hotels. The timeline and its effect on nearby streets should be part of any purchase or listing decision in the Lantern District or harbor area.",
    },
    {
      q: "Which Dana Point communities have private beach access?",
      a: "Monarch Bay, Niguel Shores, and several of the gated communities along the coast provide private beach or beach club access through their associations. Access rights and fees are set by each association and should be confirmed before purchase.",
    },
    {
      q: "Is Capistrano Beach part of Dana Point?",
      a: "Yes. Capistrano Beach is the southern portion of the City of Dana Point, using the 92624 zip code, running along the coast toward San Clemente with bluff-top tracts and beachfront lots.",
    },
    {
      q: "Which school district serves Dana Point?",
      a: "Capistrano Unified School District. Attendance boundaries should be confirmed with the district for any specific address.",
    },
  ],
  sources: [
    { label: "City of Dana Point, official website", url: "https://www.danapoint.org/" },
    { label: "Dana Point Harbor Partners, harbor revitalization", url: "https://www.danapointharbor.com/" },
    { label: "Capistrano Unified School District", url: "https://capousd.org/" },
    ...countySources,
  ],
  cta: cityCta("Dana Point"),
};
