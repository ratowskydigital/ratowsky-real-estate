import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, countySources } from "./_shared";

export const huntingtonBeach: City = {
  slug: "huntington-beach",
  name: "Huntington Beach",
  shortName: "HB",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isPrimaryMarket: true,
  isCoastal: true,
  oneLine:
    "Surf City. More than eight miles of Pacific coastline, the deep-water Huntington Harbour, and a coastal market the Ratowsky Group has worked since 1977.",
  directAnswer:
    "Huntington Beach is a coastal city in northwest Orange County, California, with more than eight miles of Pacific shoreline, the residential boating community of Huntington Harbour, and bluff-top master-planned neighborhoods including Seacliff, Brightwater, and Edwards Hill. Housing ranges from 1960s and 1970s single-family tracts inland to waterfront estates with private docks, beach cottages and new construction downtown, and condos throughout. Ratowsky Group at Compass is the resident specialist team, with combined experience in the city dating to 1977.",
  heroImage: "/images/drone/hb-pier-aerial.jpg",
  heroAlt: "Top-down drone view of the Huntington Beach Pier and the Pacific Ocean.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,

  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Huntington Beach is, for someone deciding whether to buy or sell here.",
      paragraphs: [
        "Huntington Beach runs along the coast from the Seal Beach line at Anderson Street down to the Santa Ana River, and inland to Westminster and Fountain Valley. Roughly 190,000 people live here across four zip codes. The city is best known for the pier, the surf, and the beach, but most of the housing stock is not on the sand. It is 1960s and 1970s single-family tracts on quiet inland streets, which is where most first-time and move-up buyers actually land.",
        "The coastal edge is where the city gets interesting for pricing. Huntington Harbour in the northwest is one of the only places in Southern California where a single-family home can come with a private boat dock. Seacliff, Edwards Hill, and Brightwater sit on the bluff above the Bolsa Chica wetlands. Downtown and the numbered streets near the pier trade as beach cottages, new three-story construction, and lock-and-leave condos. Sunset Beach is its own oceanfront village at the north end. Each of those pockets has its own comp set and its own buyer pool.",
        "Justin was born and raised here and has lived in North HB near the wetlands, in South HB, in the Harbour, in Sunset Beach, downtown, and now in Old Town. Craig has been selling here since 1977. That is the lens on every page in this section: the city as it actually trades, not as it looks on a listing portal.",
      ],
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "Four Huntington Beach markets that do not comp against each other.",
      paragraphs: [
        "The mistake we see most often is treating Huntington Beach as one market. A Zillow-style estimate averages across the city and misses by a wide margin on anything coastal. We segment the city four ways, and the segments rarely overlap.",
      ],
      bullets: {
        title: "The four segments",
        items: [
          "Huntington Harbour (92649). Five man-made islands and the Mainland blocks. Value is driven by dock geometry, channel width, and seawall condition before square footage. Island waterfront generally trades in the multi-million range, with the Mainland and condo inventory as the entry tier.",
          "The bluff (92648). Seacliff, Seacliff on the Greens, Edwards Hill, and Brightwater. Larger lots, gated enclaves, golf frontage, and wetlands views. The buyer pool is regional and national, so days on market run longer and pricing has to be precise from day one.",
          "Downtown and the coast (92648). Beach cottages on 25-foot lots, new three-story builds on the numbered streets, and condos along Pacific View and in Pacific City. The first weekend on market usually decides the outcome.",
          "Inland tracts (92646 and 92647). South HB, Central Park, Hope View, Marine View, Bolsa Landmark, and the Goldenwest corridor. Single-story floor plans, deep lots, and long-hold ownership. This is the highest-volume segment and the most consistent for move-up sellers.",
        ],
      },
      callout: {
        title: "Agent insight",
        body: "Inventory in Huntington Beach is structurally tight because the city is built out. Most sellers here have owned for a decade or more, which means the decision to list is usually a life decision first and a market decision second. That is why our best listings come from conversations, not cold leads.",
      },
    },
    {
      id: "neighborhoods",
      eyebrow: "Neighborhoods",
      heading: "The community pages we maintain inside Huntington Beach.",
      paragraphs: [
        "Every community listed below has its own brief on this site, written street by street, with the diligence checklist we use on real transactions. The Harbour page covers all five islands plus the Mainland, and each island has its own page underneath it. The card grid further down this page links to every one of them.",
        "If a neighborhood you care about is not listed, it is still in our coverage. The inland tracts share enough characteristics that we handle them through the city-level conversation rather than a separate page, and we are happy to walk any specific street with you.",
      ],
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on any Huntington Beach property before you write or accept an offer.",
      paragraphs: [
        "Most of the surprises we have seen in HB escrows fall into a short list. None of them are deal-breakers on their own, but every one of them changes price or terms if it is discovered late.",
      ],
      bullets: {
        items: [
          "Coastal Zone status. Anything seaward of the coastal zone boundary can require a coastal development permit for remodels, additions, and dock work. The Local Coastal Program governs; confirm at the address level.",
          "Flood zone. Streets around the Harbour, Sunset Beach, Bolsa Chica, and the Talbert and Magnolia marshes fall into mapped flood zones. Pull the FEMA determination and, for the Harbour, ask about king-tide history on the specific street.",
          "Special assessments. Newer master plans such as Brightwater and parts of Seacliff carry Mello-Roos or community facilities district line items. We are not tax professionals, so verify the line items with the county tax bill and your tax advisor.",
          "HOA and architectural review. Gated enclaves on the bluff and several Harbour islands have active review of exterior changes. Read the CC&Rs before you plan a remodel.",
          "Short-term rental rules. The city tightened permitting in recent years, and condo HOAs vary widely. Confirm before you underwrite rental income.",
          "School attendance boundaries. Huntington Beach is served by several elementary districts plus the Huntington Beach Union High School District, and the lines do not follow neighborhood names. Verify at the address.",
          "Seawalls and docks. On any Harbour waterfront lot, get a private seawall inspection and pull the city harbor permit for the as-built dock.",
        ],
      },
    },
    {
      id: "selling",
      eyebrow: "Selling in HB",
      heading: "How we take a Huntington Beach listing to market.",
      paragraphs: [
        "Our listing process is the same three phases on every property, scaled to the price point. Phase one is a Compass Private Exclusive, where the home is exposed to the Compass agent network and our own buyer list before it hits the public MLS. Phase two is the demand campaign: professional photography, drone, video, and targeted digital marketing to the specific buyer pool for that segment. Phase three is the timed public release, launched when demand has already been built.",
        "The Seascape sale in Trinidad Island is the clearest example of what that produces. A Zillow estimate around $2.45M, sold for $3,925,000, twelve offers, eight of them all cash, eight days on market, $643,000 over asking. Not every home produces that, but the structure is repeatable, and it is the same structure we run on an inland tract home at a fraction of the price.",
        "Preparation matters as much as marketing. Compass Concierge lets qualified sellers front the cost of paint, flooring, landscaping, and staging with no interest, repaid at closing. In a city where most homes are 50 years old, that program frequently moves a listing from one price tier to the next.",
      ],
      callout: {
        title: "Off-market first",
        body: "A meaningful share of the premier coastal listings in HB trade through the agent network before the public ever sees them. Whether you are buying or selling, that early window is where the leverage lives.",
      },
    },
    {
      id: "moving-between",
      eyebrow: "Who moves where",
      heading: "How Huntington Beach connects to the cities around it.",
      paragraphs: [
        "Buyers usually come to HB from Long Beach, Fountain Valley, Westminster, and inland Orange County looking for the coast without Newport pricing. Sellers leaving HB most often head south to Newport Coast or Corona del Mar when they are trading up, or to Seal Beach, Fountain Valley, or San Juan Capistrano when they are simplifying. We keep a page for each of those cities for exactly that reason. The move out of HB is half the transaction, and we want to be useful on both halves.",
      ],
    },
  ],

  faqs: [
    {
      q: "What are the zip codes in Huntington Beach and which areas do they cover?",
      a: "92649 covers Huntington Harbour, Sunset Beach's inland side, Brightwater, and the northwest tracts. 92648 covers downtown, the pier area, Seacliff, Edwards Hill, and central HB. 92647 is the north-central tracts around Goldenwest and Edinger. 92646 is South Huntington Beach from Adams down toward the Santa Ana River. Sunset Beach itself uses 90742.",
    },
    {
      q: "Is Huntington Beach a good place to buy a home right now?",
      a: "It depends entirely on which segment and what you need from it. Inland tracts offer the most consistent value and turnover. Coastal and Harbour inventory is scarce, so timing and access to off-market listings matter more than trying to time the market. We are happy to give you a segment-specific read without any obligation.",
    },
    {
      q: "How much do homes cost in Huntington Beach?",
      a: "We do not publish city-wide medians here because they move quickly and average across very different products. Broadly, inland single-family homes sit at the entry tier for the city, downtown cottages and condos above that, bluff and Seacliff homes higher, and Harbour waterfront at the top. For a current number on a specific street, ask us for a private comp review.",
    },
    {
      q: "Does Huntington Beach have Mello-Roos?",
      a: "Most of the city does not, because the housing stock predates community facilities districts. Newer master plans, including Brightwater and portions of the Seacliff and Pacific City developments, can carry special assessments. Verify on the county tax bill for the specific parcel. We are not tax professionals and recommend confirming with your tax advisor.",
    },
    {
      q: "Can I own a home with a boat dock in Huntington Beach?",
      a: "Yes. Huntington Harbour is a residential boating community with five man-made islands and Mainland waterfront where most homes have a private dock, side tie, or seawall frontage. Vessel size is decided lot by lot based on slip length, beam, water depth, and bridge clearance. Our Huntington Harbour page covers the full diligence checklist.",
    },
    {
      q: "Which school districts serve Huntington Beach?",
      a: "High schools are in the Huntington Beach Union High School District. Elementary and middle schools are split among the Huntington Beach City, Ocean View, Fountain Valley, and Westminster school districts depending on the address. Attendance boundaries do not follow neighborhood names, so confirm with the district for any specific property.",
    },
    {
      q: "How is Ratowsky Group different from other Huntington Beach agents?",
      a: "Craig has sold in this city since 1977 and Justin was born and raised here, so the local knowledge is lived rather than researched. We pair that with Compass tools, a Private Exclusive network, modern digital marketing, and AI-assisted follow-up systems so nothing gets dropped. Old-school relationships, new-school systems.",
    },
  ],

  sources: [
    { label: "City of Huntington Beach, official website", url: "https://www.huntingtonbeachca.gov/" },
    {
      label: "City of Huntington Beach, Community Development and Local Coastal Program",
      url: "https://www.huntingtonbeachca.gov/government/departments/community-development",
    },
    { label: "Bolsa Chica Conservancy, wetlands and ecological reserve", url: "https://bolsachica.org/" },
    { label: "Huntington Beach Union High School District", url: "https://www.hbuhsd.edu/" },
    ...countySources,
  ],

  cta: {
    eyebrow: "Next step",
    title: "Curious what your Huntington Beach home could sell for in today's market?",
    body: "Craig and Justin Ratowsky are happy to put together a quick private home value review. No pressure, just useful information.",
    primaryHref: "/home-value",
    primaryLabel: "Request a private home value review",
  },
};
