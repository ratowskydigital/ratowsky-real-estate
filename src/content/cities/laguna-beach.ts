import type { City } from "../communities/_types";
import { CITY_PUBLISH_DATE, cityCta, countySources } from "./_shared";

export const lagunaBeach: City = {
  slug: "laguna-beach",
  name: "Laguna Beach",
  county: "Orange County",
  state: "California",
  stateCode: "CA",
  isCoastal: true,
  oneLine:
    "Cove-and-canyon coastline, the artist colony lineage, and a market where ocean view and architectural pedigree drive value more than square footage.",
  directAnswer:
    "Laguna Beach is a coastal city in southern Orange County, California, set across roughly seven miles of cove-and-canyon shoreline between Newport Coast and Dana Point. The market is highly view-driven, and architectural pedigree and ocean orientation move value more than raw square footage. Sub-areas include North Laguna, the Village and downtown, Temple Hills and Top of the World, Bluebird Canyon, Woods Cove, Victoria Beach, South Laguna, and the gated communities of Emerald Bay, Three Arch Bay, Irvine Cove, and Lagunita.",
  status: "published",
  lastUpdated: CITY_PUBLISH_DATE,
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Laguna Beach is, and why it does not comp like anywhere else.",
      paragraphs: [
        "Laguna Beach is the one coastal Orange County city that was never master-planned. It grew as an artist colony along a series of coves and canyons, and the housing stock reflects that: cottages from the 1920s, mid-century post-and-beam homes, contemporary hillside architecture, and oceanfront estates in the gated coves, often on the same street. Downtown and the Village sit on Main Beach with galleries, restaurants, and the Festival of Arts grounds up Laguna Canyon Road.",
        "For our Huntington Beach clients, Laguna is the destination when the priority is character, view, and a small-town coastal feel over a dock or a master plan. It is also the market where our judgment matters most, because portal estimates fail badly here. Two homes with the same square footage can trade multiples apart based on view, lot, and the name of the architect.",
      ],
    },
    {
      id: "sub-areas",
      eyebrow: "Sub-areas",
      heading: "The Laguna Beach neighborhoods, from the coves to the ridgeline.",
      bullets: {
        items: [
          "North Laguna and Crescent Bay. Cottages and rebuilt homes on the bluff and the flats north of downtown, walkable to Main Beach, with ocean views on the upper streets.",
          "The Village and downtown. Cottages, condos, and mixed-use blocks around Main Beach and Forest Avenue. The most walkable pocket in the city.",
          "Temple Hills, Mystic Hills, and Top of the World. Hillside neighborhoods above downtown with panoramic ocean and canyon views and a wide range of architecture.",
          "Bluebird Canyon, Woods Cove, and Victoria Beach. Canyon and cove neighborhoods south of downtown with beach access, ocean views, and a mix of cottages and contemporary rebuilds.",
          "South Laguna. The southern stretch toward Dana Point with beach-adjacent streets, hillside view homes, and a quieter feel.",
          "Emerald Bay, Irvine Cove, Three Arch Bay, and Lagunita. Gated oceanfront communities with private beaches at the top of the Laguna price stack.",
          "Laguna Canyon. Homes along the canyon road and its side canyons, with a rural feel and specific fire and flood diligence.",
        ],
      },
    },
    {
      id: "how-it-trades",
      eyebrow: "How the market trades",
      heading: "What moves value in Laguna Beach.",
      paragraphs: [
        "View first: whitewater, coastline, cove, and Catalina views are each priced differently, and the angle and permanence of the view matter as much as its existence. Architecture second: homes by recognized architects and well-executed contemporary rebuilds command premiums that have nothing to do with square footage. Lot and access third: hillside lots with steep driveways, limited parking, or shared access trade at a discount that surprises buyers from flatter cities.",
        "Days on market can be long at the top of the stack because the buyer pool for a specific view and a specific architectural style is small. That is normal in Laguna. Pricing precision and the right marketing to the right pool, including the Compass network's national reach, decide outcomes here more than anywhere else we work.",
      ],
      callout: {
        title: "Agent insight",
        body: "Laguna Beach's design review process is among the most detailed in the county. Remodel and rebuild timelines are longer than in Huntington Beach, and view preservation rules can constrain what a neighbor builds as much as what you build. Read the city's design review guidelines before pricing a property on its rebuild potential.",
      },
    },
    {
      id: "diligence",
      eyebrow: "Before you commit",
      heading: "What to verify on a Laguna Beach property.",
      bullets: {
        items: [
          "Design review requirements and view preservation rules for any planned remodel or rebuild.",
          "Slope stability, geotechnical history, and the city's landslide and coastal hazard mapping on hillside and bluff lots.",
          "Fire hazard severity zone status and insurance availability, especially in the canyons and upper hillsides.",
          "Coastal Zone status and coastal development permit requirements near the beach.",
          "Access, parking, and easements on hillside lots with shared or steep driveways.",
          "Association rules, dues, and beach access rights in the gated cove communities.",
          "Short-term rental rules, which the city restricts outside specific zones.",
          "Laguna Beach Unified attendance boundaries, verified at the address.",
        ],
      },
    },
    {
      id: "hb-connection",
      eyebrow: "The HB connection",
      heading: "From Huntington Beach to Laguna Beach.",
      paragraphs: [
        "Laguna draws Huntington Beach owners who want a coastal town with more architectural character and a slower pace, and it draws second-home buyers from across the country. Because the inventory is idiosyncratic and much of it trades quietly, the Compass agent network in Laguna is the practical advantage we bring. We sequence the Huntington Beach sale first so the buyer can move on the right Laguna property the week it surfaces.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why are Laguna Beach prices so different from house to house?",
      a: "Because value is driven by view, lot, architecture, and access rather than square footage. Two homes of the same size on the same street can trade multiples apart if one has a permanent whitewater view and recognized architecture and the other does not. Portal estimates are unreliable here for that reason.",
    },
    {
      q: "Which Laguna Beach communities are gated with private beaches?",
      a: "Emerald Bay, Irvine Cove, Three Arch Bay, and Lagunita are the principal gated cove communities with private beach access. Each has its own association rules, dues, and access rights that should be confirmed before purchase.",
    },
    {
      q: "How hard is it to remodel or rebuild in Laguna Beach?",
      a: "More involved than in most Orange County cities. The city's design review process, view preservation rules, hillside and coastal regulations, and Coastal Commission oversight add time and constraints. Plan on longer timelines and confirm feasibility before pricing a property on its rebuild potential.",
    },
    {
      q: "Are short-term rentals allowed in Laguna Beach?",
      a: "The city restricts short-term rentals to specific zones and permits, and most residential neighborhoods do not allow them. Confirm the rules for a specific property before assuming rental income.",
    },
    {
      q: "Which school district serves Laguna Beach?",
      a: "Laguna Beach Unified School District. Confirm attendance boundaries with the district for any specific address.",
    },
  ],
  sources: [
    { label: "City of Laguna Beach, official website", url: "https://www.lagunabeachcity.net/" },
    { label: "Laguna Beach Unified School District", url: "https://www.lbusd.org/" },
    { label: "Laguna Art Museum, the city's art colony history", url: "https://lagunaartmuseum.org/" },
    ...countySources,
  ],
  cta: cityCta("Laguna Beach"),
};
