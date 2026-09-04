import type { GeoArea, Ring } from "./_types";

// -----------------------------------------------------------------------------
// Huntington Beach — city + every community page that lives under it.
//
// Reference grid used to draw these (WGS84, approximate):
//   East–west streets (latitude):  Edinger 33.7280 · Heil 33.7210 · Warner 33.7137
//     Slater 33.7065 · Talbert 33.6995 · Ellis 33.6925 · Garfield 33.6855
//     Yorktown 33.6795 · Adams 33.6715 · Atlanta 33.6575 · Hamilton 33.6505
//   North–south streets (longitude): Bolsa Chica -118.0407 · Springdale -118.0320
//     Edwards -118.0233 · Goldenwest -118.0146 · Gothard -118.0059
//     Beach Blvd -117.9885 · Magnolia -117.9711 · Brookhurst -117.9537
//   PCH runs NW–SE; the Pier sits at roughly (-118.0044, 33.6553).
//
// Every ring below is "approximate" precision: drawn from the street boundaries
// the community prose describes, not traced from parcel data. Run
// `npm run geo:export` and open public/geo/communities.geojson in geojson.io
// to review and tighten any ring, then paste the vertices back here.
// -----------------------------------------------------------------------------

// ---- Huntington Harbour ------------------------------------------------------
// The Harbour reads as five islands plus three Mainland blocks. The parent ring
// deliberately covers everything from PCH to Bolsa Chica Street and from the
// Naval Weapons Station boundary down past Warner to the Sea Bridge / Bay Club
// streets, so any listing on any island or Mainland street resolves to the
// Harbour page first, then to its island page.

const HARBOUR_PARENT: Ring = [
  [-118.0655, 33.7125], // PCH & Warner
  [-118.0771, 33.7245], // PCH, north end of the Harbour frontage (Sunset Beach line)
  [-118.0720, 33.7335], // Sunset Aquatic Park / Naval Weapons Station boundary
  [-118.0400, 33.7335], // NWS boundary at Bolsa Chica Street
  [-118.0400, 33.7137], // Bolsa Chica & Warner
  [-118.0505, 33.7137], // Warner, east edge of the Sea Bridge / Bay Club block (Brightwater begins east of here)
  [-118.0505, 33.7075], // south edge of the Bay Club streets
  [-118.0580, 33.7075],
  [-118.0655, 33.7125],
];

const ADMIRALTY: Ring = [
  [-118.0690, 33.7172],
  [-118.0665, 33.7172],
  [-118.0665, 33.7228],
  [-118.0750, 33.7228],
  [-118.0690, 33.7172],
];

const GILBERT: Ring = [
  [-118.0662, 33.7162],
  [-118.0632, 33.7162],
  [-118.0632, 33.7226],
  [-118.0662, 33.7226],
  [-118.0662, 33.7162],
];

const TRINIDAD: Ring = [
  [-118.0612, 33.7182],
  [-118.0562, 33.7182],
  [-118.0562, 33.7272],
  [-118.0612, 33.7272],
  [-118.0612, 33.7182],
];

const HUMBOLDT: Ring = [
  [-118.0558, 33.7205],
  [-118.0515, 33.7205],
  [-118.0515, 33.7272],
  [-118.0558, 33.7272],
  [-118.0558, 33.7205],
];

const DAVENPORT: Ring = [
  [-118.0580, 33.7145],
  [-118.0515, 33.7145],
  [-118.0515, 33.7198],
  [-118.0580, 33.7198],
  [-118.0580, 33.7145],
];

// Mainland block A — east of Saybrook Lane, Warner to Edinger (Seagate,
// Huntington Bay, the Mainland street grid).
const MAINLAND_EAST: Ring = [
  [-118.0510, 33.7137],
  [-118.0400, 33.7137],
  [-118.0400, 33.7280],
  [-118.0510, 33.7280],
  [-118.0510, 33.7137],
];

// Mainland block B — north of Edinger to the Naval Weapons Station
// (Coral Cay, Weatherly Bay, Broadmoor).
const MAINLAND_NORTH: Ring = [
  [-118.0720, 33.7282],
  [-118.0400, 33.7282],
  [-118.0400, 33.7335],
  [-118.0720, 33.7335],
  [-118.0720, 33.7282],
];

// Mainland block C — south of Warner (Sea Bridge, the Cape, Bay Club streets).
const MAINLAND_SOUTH: Ring = [
  [-118.0580, 33.7075],
  [-118.0508, 33.7075],
  [-118.0508, 33.7135],
  [-118.0580, 33.7135],
  [-118.0580, 33.7075],
];

// Mainland block D — the PCH-side strip between Warner and Admiralty
// (Peter's Landing, Portofino Cove, Huntington Harbour Mall frontage).
const MAINLAND_WEST: Ring = [
  [-118.0655, 33.7127],
  [-118.0512, 33.7140],
  [-118.0585, 33.7143],
  [-118.0585, 33.7168],
  [-118.0688, 33.7168],
  [-118.0655, 33.7127],
];

// ---- Other Huntington Beach communities ----------------------------------

const SUNSET_BEACH: Ring = [
  [-118.0655, 33.7125], // PCH & Warner
  [-118.0771, 33.7245], // PCH at the Harbour line
  [-118.0800, 33.7262], // Anderson Street (Seal Beach city line), inland side
  [-118.0850, 33.7225], // Anderson at the sand
  [-118.0700, 33.7090], // beach south of Warner
  [-118.0655, 33.7125],
];

const BRIGHTWATER: Ring = [
  [-118.0500, 33.7135], // Warner, west end
  [-118.0407, 33.7135], // Warner & Bolsa Chica
  [-118.0407, 33.7095], // Los Patos
  [-118.0500, 33.7095],
  [-118.0500, 33.7135],
];

const BOLSA_LANDMARK: Ring = [
  [-118.0407, 33.7135], // Bolsa Chica & Warner
  [-118.0300, 33.7135], // Graham & Warner
  [-118.0300, 33.7040],
  [-118.0407, 33.7040], // wetlands edge
  [-118.0407, 33.7135],
];

const EDWARDS_HILL: Ring = [
  [-118.0233, 33.6925], // Edwards & Ellis
  [-118.0146, 33.6925], // Goldenwest & Ellis
  [-118.0146, 33.6855], // Goldenwest & Garfield
  [-118.0233, 33.6855], // Edwards & Garfield
  [-118.0233, 33.6925],
];

// Seacliff master plan — the whole bluff between Ellis Avenue and PCH, west of
// Goldenwest Street. Parent of Seacliff on the Greens.
const SEACLIFF: Ring = [
  [-118.0290, 33.6925], // Seapoint & Ellis
  [-118.0235, 33.6925], // Edwards & Ellis
  [-118.0235, 33.6855], // Edwards & Garfield
  [-118.0146, 33.6855], // Goldenwest & Garfield
  [-118.0146, 33.6643], // Goldenwest & PCH
  [-118.0330, 33.6760], // PCH at Seapoint
  [-118.0290, 33.6925],
];

// Seacliff on the Greens — the golf-course half of the master plan.
const SEACLIFF_ON_THE_GREENS: Ring = [
  [-118.0290, 33.6925], // Seapoint & Ellis
  [-118.0235, 33.6925], // Edwards & Ellis
  [-118.0235, 33.6855], // Edwards & Garfield
  [-118.0146, 33.6855], // Goldenwest & Garfield
  [-118.0146, 33.6800], // Goldenwest, north of Palm
  [-118.0290, 33.6800],
  [-118.0290, 33.6925],
];

const DOWNTOWN_PIER: Ring = [
  [-118.0146, 33.6643], // Goldenwest & PCH
  [-118.0146, 33.6795], // Goldenwest & Yorktown
  [-117.9885, 33.6795], // Beach & Yorktown
  [-117.9895, 33.6413], // Beach & PCH
  [-118.0146, 33.6643],
];

const DUTCH_HAVEN_MARINA: Ring = [
  [-117.9711, 33.6575], // Magnolia & Atlanta
  [-117.9537, 33.6575], // Brookhurst & Atlanta
  [-117.9537, 33.6470], // Brookhurst, south toward PCH
  [-117.9711, 33.6470], // Magnolia Marsh edge
  [-117.9711, 33.6575],
];

// Coarse city ring. Trestle's `City` field is the primary city matcher;
// this ring only exists so the city page can render coverage and so the
// validator can confirm every HB community sits inside HB.
const HUNTINGTON_BEACH_CITY: Ring = [
  [-118.0860, 33.7230], // Pacific off Sunset Beach
  [-118.0800, 33.7270], // Anderson Street / Seal Beach line
  [-118.0720, 33.7340], // Naval Weapons Station
  [-117.9950, 33.7340], // Westminster line
  [-117.9400, 33.7300], // Fountain Valley line, north
  [-117.9400, 33.6450], // Santa Ana River mouth, north
  [-117.9520, 33.6280], // Pacific, south of the river
  [-118.0200, 33.6480], // Pacific off downtown
  [-118.0860, 33.7230],
];

// -----------------------------------------------------------------------------

export const huntingtonBeachGeo: GeoArea[] = [
  {
    slug: "huntington-beach",
    kind: "city",
    name: "Huntington Beach",
    precision: "approximate",
    boundaryNote:
      "Coarse city outline from Anderson Street (Seal Beach line) to the Santa Ana River. Listings are matched to the city by the CRMLS City field first; this ring is a coverage and validation aid.",
    polygons: [HUNTINGTON_BEACH_CITY],
    mlsCity: "Huntington Beach",
    mlsCityAliases: ["Sunset Beach", "Huntington Harbour"],
    postalCodes: ["90742", "92646", "92647", "92648", "92649"],
  },

  // ---- Harbour -------------------------------------------------------------
  {
    slug: "huntington-harbour",
    kind: "community",
    name: "Huntington Harbour",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "PCH on the west, the Naval Weapons Station on the north, Bolsa Chica Street on the east, and the Sea Bridge / Bay Club streets south of Warner on the south. Covers all five islands (Trinidad, Davenport, Humboldt, Gilbert, Admiralty) and every Mainland block (Coral Cay, Weatherly Bay, Broadmoor, Seagate, Huntington Bay, the Cape, Sea Bridge, Peter's Landing).",
    polygons: [HARBOUR_PARENT],
    subdivisionNames: [
      "Huntington Harbour",
      "Trinidad Island",
      "Davenport Island",
      "Humboldt Island",
      "Gilbert Island",
      "Admiralty Island",
      "Coral Cay",
      "Weatherly Bay",
      "Broadmoor",
      "Seagate",
      "Huntington Bay",
      "Sea Bridge",
      "Seabridge",
      "Mainland",
      "Peter's Landing",
      "Portofino Cove",
      "Bay Club",
    ],
    postalCodes: ["92649"],
  },
  {
    slug: "trinidad-island",
    kind: "community",
    name: "Trinidad Island",
    parentSlug: "huntington-harbour",
    precision: "approximate",
    boundaryNote:
      "The island reached from Edinger Avenue via the Trinidad Lane bridge, west of Humboldt Island and east of the Main Channel.",
    polygons: [TRINIDAD],
    subdivisionNames: ["Trinidad Island", "Trinidad"],
    streetNames: ["Trinidad"],
    postalCodes: ["92649"],
  },
  {
    slug: "davenport-island",
    kind: "community",
    name: "Davenport Island",
    parentSlug: "huntington-harbour",
    precision: "approximate",
    boundaryNote:
      "The southernmost island, reached from Saybrook Lane via Davenport Drive, south of Humboldt Island and north of Warner Avenue.",
    polygons: [DAVENPORT],
    subdivisionNames: ["Davenport Island", "Davenport"],
    streetNames: ["Davenport"],
    postalCodes: ["92649"],
  },
  {
    slug: "humboldt-island",
    kind: "community",
    name: "Humboldt Island",
    parentSlug: "huntington-harbour",
    precision: "approximate",
    boundaryNote:
      "The island reached from Edinger Avenue and Saybrook Lane via Humboldt Drive, between Trinidad Island and Saybrook Lane, north of Davenport Island.",
    polygons: [HUMBOLDT],
    subdivisionNames: ["Humboldt Island", "Humboldt"],
    streetNames: ["Humboldt"],
    postalCodes: ["92649"],
  },
  {
    slug: "gilbert-island",
    kind: "community",
    name: "Gilbert Island",
    parentSlug: "huntington-harbour",
    precision: "approximate",
    boundaryNote:
      "Bounded by Admiralty Island on the west and the Main Channel on the east; reached through Admiralty Island via Gilbert Drive.",
    polygons: [GILBERT],
    subdivisionNames: ["Gilbert Island", "Gilbert"],
    streetNames: ["Gilbert"],
    postalCodes: ["92649"],
  },
  {
    slug: "admiralty-island",
    kind: "community",
    name: "Admiralty Island",
    parentSlug: "huntington-harbour",
    precision: "approximate",
    boundaryNote:
      "The westernmost island, entered directly from Pacific Coast Highway at Admiralty Drive.",
    polygons: [ADMIRALTY],
    subdivisionNames: ["Admiralty Island", "Admiralty"],
    streetNames: ["Admiralty"],
    postalCodes: ["92649"],
  },
  {
    slug: "harbour-mainland",
    kind: "community",
    name: "Harbour Mainland",
    parentSlug: "huntington-harbour",
    precision: "approximate",
    boundaryNote:
      "Every non-island block of the Harbour: east of Saybrook Lane from Warner to Edinger (Seagate, Huntington Bay, the Mainland grid), north of Edinger to the Naval Weapons Station (Coral Cay, Weatherly Bay, Broadmoor), south of Warner (Sea Bridge, the Cape, Bay Club), and the PCH-side strip (Peter's Landing, Portofino Cove).",
    polygons: [MAINLAND_EAST, MAINLAND_NORTH, MAINLAND_SOUTH, MAINLAND_WEST],
    subdivisionNames: [
      "Coral Cay",
      "Weatherly Bay",
      "Broadmoor",
      "Seagate",
      "Huntington Bay",
      "Sea Bridge",
      "Seabridge",
      "Mainland",
      "Peter's Landing",
      "Portofino Cove",
      "Bay Club",
      "The Cape",
    ],
    postalCodes: ["92649"],
  },

  // ---- Rest of HB ----------------------------------------------------------
  {
    slug: "sunset-beach",
    kind: "community",
    name: "Sunset Beach",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "Anderson Street (Seal Beach line) on the north to Warner Avenue on the south, the sand on the west, and the PCH-side alley and Park Avenue strip on the east.",
    polygons: [SUNSET_BEACH],
    subdivisionNames: ["Sunset Beach"],
    postalCodes: ["90742", "92649"],
  },
  {
    slug: "brightwater",
    kind: "community",
    name: "Brightwater",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "Warner Avenue on the north, the Bolsa Chica Ecological Reserve on the west, Los Patos Avenue on the south, and the older residential streets on the east.",
    polygons: [BRIGHTWATER],
    subdivisionNames: ["Brightwater"],
    postalCodes: ["92649"],
  },
  {
    slug: "bolsa-landmark",
    kind: "community",
    name: "Bolsa Landmark",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "Mid-century tract east of Bolsa Chica Street between Warner Avenue and the northern edge of the Bolsa Chica wetlands.",
    polygons: [BOLSA_LANDMARK],
    subdivisionNames: ["Bolsa Landmark", "Landmark"],
    postalCodes: ["92649"],
  },
  {
    slug: "edwards-hill",
    kind: "community",
    name: "Edwards Hill",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "Ellis Avenue on the north, Garfield Avenue on the south, Edwards Street on the west, Goldenwest Street on the east.",
    polygons: [EDWARDS_HILL],
    subdivisionNames: ["Edwards Hill", "Ellis-Goldenwest", "Ellis Goldenwest"],
    postalCodes: ["92648"],
  },
  {
    slug: "seacliff",
    kind: "community",
    name: "Seacliff",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "The Seacliff master plan: Ellis Avenue on the north, Goldenwest Street on the east, PCH on the south-west, and the Bolsa Chica bluff on the west. Covers Seacliff on the Greens, the Peninsula, Turnberry, the Estates, and the original Seacliff tract nearest PCH.",
    polygons: [SEACLIFF],
    subdivisionNames: ["Seacliff", "Sea Cliff", "Seacliff Estates", "Peninsula", "Turnberry", "Sandcastle", "Greens"],
    postalCodes: ["92648"],
  },
  {
    slug: "seacliff-on-the-greens",
    kind: "community",
    name: "Seacliff on the Greens",
    parentSlug: "seacliff",
    precision: "approximate",
    boundaryNote:
      "The golf-course half of the Seacliff master plan: west of Edwards Street between Ellis and Garfield, wrapping the Huntington Club fairways down to the streets north of Palm Avenue.",
    polygons: [SEACLIFF_ON_THE_GREENS],
    subdivisionNames: ["Seacliff on the Greens", "Sea Cliff on the Greens", "Greens"],
    postalCodes: ["92648"],
  },
  {
    slug: "downtown-pier",
    kind: "community",
    name: "Downtown Pier District",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "Pacific Coast Highway to Yorktown Avenue, Goldenwest Street east to Beach Boulevard.",
    polygons: [DOWNTOWN_PIER],
    subdivisionNames: ["Downtown", "Pacific City", "Old Town", "Townsquare", "Pier Colony", "Huntington Pacific", "Beachwalk"],
    postalCodes: ["92648"],
  },
  {
    slug: "dutch-haven-marina",
    kind: "community",
    name: "Dutch Haven Marina",
    parentSlug: "huntington-beach",
    precision: "approximate",
    boundaryNote:
      "South Huntington Beach tract between Magnolia Street and Brookhurst Street, from Atlanta Avenue south toward the Magnolia Marsh and PCH.",
    polygons: [DUTCH_HAVEN_MARINA],
    subdivisionNames: ["Dutch Haven Marina", "Dutch Haven"],
    postalCodes: ["92646"],
  },
];
