import type { City } from "../communities/_types";

// -----------------------------------------------------------------------------
// City stub helper. Cities can be hand-authored later or filled by the
// autoblogger — the stub renders a minimal landing with community grid + CTA.
// -----------------------------------------------------------------------------
function cityStub(args: {
  slug: string;
  name: string;
  shortName?: string;
  oneLine: string;
  directAnswer: string;
  isPrimaryMarket?: boolean;
}): City {
  return {
    slug: args.slug,
    name: args.name,
    shortName: args.shortName,
    county: "Orange County",
    state: "California",
    stateCode: "CA",
    oneLine: args.oneLine,
    directAnswer: args.directAnswer,
    status: "stub",
    lastUpdated: "2026-05-08",
    isPrimaryMarket: args.isPrimaryMarket,
  };
}

// -----------------------------------------------------------------------------
// All 13 OC cities Ratowsky Group covers. HB is the primary market — every
// other city gets a presence so the OC footprint is real, not aspirational.
// -----------------------------------------------------------------------------
export const cities: City[] = [
  cityStub({
    slug: "huntington-beach",
    name: "Huntington Beach",
    shortName: "HB",
    isPrimaryMarket: true,
    oneLine:
      "Surf City — eight miles of Pacific coastline, the deep-water Huntington Harbour, and a coastal-luxury market the Ratowsky Group has worked since 1977.",
    directAnswer:
      "Huntington Beach is a coastal city in northwest Orange County, California, with eight miles of Pacific shoreline, the residential boating community of Huntington Harbour, and master-planned bluff-top neighborhoods including Seacliff, Brightwater, and Edwards Hill. Ratowsky Group at Compass is the resident specialist team, with combined experience dating to 1977.",
  }),
  cityStub({
    slug: "newport-beach",
    name: "Newport Beach",
    oneLine:
      "Harbor estates, Balboa Peninsula village, and the move-up destination for Huntington Harbour sellers heading south.",
    directAnswer:
      "Newport Beach is a coastal city in central Orange County, California, anchored by Newport Harbor, the Balboa Peninsula, and the Pelican Hill / Crystal Cove luxury enclaves. Inventory ranges from $1.5M cottages on the Peninsula to $30M+ custom estates above the harbor.",
  }),
  cityStub({
    slug: "newport-coast",
    name: "Newport Coast",
    oneLine:
      "Custom estates, ocean-view condos, and the gated communities south of MacArthur — the natural Compass move-up market.",
    directAnswer:
      "Newport Coast is a master-planned coastal community in southern Newport Beach, California, comprising Pelican Hill, Crystal Cove, Pelican Crest, and the gated neighborhoods south of MacArthur Boulevard. The buyer pool is national and international; pricing typically runs $3.5M for condos and $8M–$30M+ for custom estates.",
  }),
  cityStub({
    slug: "corona-del-mar",
    name: "Corona del Mar",
    shortName: "CdM",
    oneLine:
      "Village walkability, ocean-view bluffs, and one of the highest price-per-square-foot markets in coastal Orange County.",
    directAnswer:
      "Corona del Mar is a coastal village within Newport Beach, California, sitting on the bluffs above the Pacific between Newport Harbor and Crystal Cove. The village center along East Coast Highway anchors a walkable lifestyle market; bluff-front and ocean-view homes command some of the highest price-per-square-foot figures in coastal Orange County.",
  }),
  cityStub({
    slug: "seal-beach",
    name: "Seal Beach",
    oneLine:
      "Old Town walkability, College Park cul-de-sacs, and the Hill estates above Main Street — slower-paced than HB with longer-hold ownership.",
    directAnswer:
      "Seal Beach is a small coastal city at the northwest tip of Orange County, California, comprising Old Town between PCH and the beach, the College Park neighborhood east of the 405, the Hill estates above Main Street, and the Bridgeport waterfront. Average years-in-home is materially higher than Huntington Beach, producing tighter inventory.",
  }),
  cityStub({
    slug: "fountain-valley",
    name: "Fountain Valley",
    oneLine:
      "Inland-OC family market with strong long-hold ownership, Mile Square Park amenities, and consistent move-up demand from Huntington Beach.",
    directAnswer:
      "Fountain Valley is an inland city in northern Orange County, California, bordered by Huntington Beach to the west and Costa Mesa to the south. The market is dominated by single-family homes built between the late 1960s and 1990s, with Mile Square Park as the central amenity.",
  }),
  cityStub({
    slug: "costa-mesa",
    name: "Costa Mesa",
    oneLine:
      "Eastside Costa Mesa cottage market, Mesa Verde golf-course homes, and the Westside arts-district pivot — one of OC's most architecturally varied cities.",
    directAnswer:
      "Costa Mesa is a city in central Orange County, California, comprising the Eastside cottage neighborhoods, Mesa Verde and Mesa del Mar golf-course tracts, the South Coast Plaza commercial district, and the Westside arts and industrial pivot. Inventory is among the most architecturally varied in the county.",
  }),
  cityStub({
    slug: "irvine",
    name: "Irvine",
    oneLine:
      "Master-planned villages, top-tier school zones, and the corporate relocation destination of Orange County.",
    directAnswer:
      "Irvine is a master-planned city in central Orange County, California, organized around 30+ villages developed by the Irvine Company since the 1970s. The city is the largest corporate relocation destination in OC and consistently ranks among the safest large cities in the United States.",
  }),
  cityStub({
    slug: "westminster",
    name: "Westminster",
    oneLine:
      "Inland gateway between Huntington Beach and the 405 — strong value market with short commutes to the coast.",
    directAnswer:
      "Westminster is an inland city in northwestern Orange County, California, between Huntington Beach and the 405 freeway. Housing stock is dominated by single-family homes built from the 1950s through the 1980s, with strong long-term ownership and rising median prices driven by HB-adjacent demand.",
  }),
  cityStub({
    slug: "dana-point",
    name: "Dana Point",
    oneLine:
      "Headlands estates, Lantern District village, and the Dana Point Harbor revitalization — the southernmost true coastal-village market in OC.",
    directAnswer:
      "Dana Point is a coastal city in southern Orange County, California, comprising the Headlands gated estates, the Lantern District village, the Capistrano Beach neighborhoods, and the Niguel Shores enclave. The Dana Point Harbor revitalization is reshaping the southern OC waterfront market.",
  }),
  cityStub({
    slug: "san-clemente",
    name: "San Clemente",
    oneLine:
      "Spanish-village coastline, Talega and Sea Pointe estate enclaves, and the southernmost Orange County beach market.",
    directAnswer:
      "San Clemente is the southernmost coastal city in Orange County, California, known for its Spanish-village character, the Talega and Sea Pointe master-planned communities, and the surf breaks along Trestles. Inventory ranges from cottages in the Pier Bowl to custom estates in Cyprus Shore.",
  }),
  cityStub({
    slug: "laguna-beach",
    name: "Laguna Beach",
    oneLine:
      "Cove-and-canyon coastline, the artist colony lineage, and a market where pricing follows ocean view and architectural pedigree more than square footage.",
    directAnswer:
      "Laguna Beach is a coastal city in southern Orange County, California, set across seven miles of cove-and-canyon shoreline. The market is highly view-driven; architectural pedigree and ocean orientation drive value more than raw square footage. Sub-areas include North Laguna, the Village, Three Arch Bay, and Emerald Bay.",
  }),
  cityStub({
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    oneLine:
      "Mission-town heritage, equestrian estates in The Hunt Club, and the historic core anchored by Mission San Juan Capistrano.",
    directAnswer:
      "San Juan Capistrano is an inland city in southern Orange County, California, anchored by Mission San Juan Capistrano. Inventory includes equestrian estates in The Hunt Club, hillside custom homes in Connemara and Hidden Mountain, and Spanish-village condos near the historic core.",
  }),
];

// -----------------------------------------------------------------------------
// Lookup helpers
// -----------------------------------------------------------------------------
export function getCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function listPublishedCities(): City[] {
  return cities.filter((c) => c.status === "published");
}

export function getPrimaryMarket(): City | undefined {
  return cities.find((c) => c.isPrimaryMarket);
}
