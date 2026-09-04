import type { GeoArea } from "./_types";

// -----------------------------------------------------------------------------
// City-level coverage for the other Orange County markets we publish pages for.
//
// These are matched against the Trestle feed with the CRMLS `City` value and
// a postal-code gate rather than a polygon. City limits are irregular enough
// that a hand-drawn ring would misroute more listings than the City field
// does. Community polygons inside these cities can be added the same way the
// Huntington Beach file does it, with parentSlug set to the city slug.
// -----------------------------------------------------------------------------

function city(args: {
  slug: string;
  name: string;
  mlsCity: string;
  postalCodes: string[];
  boundaryNote: string;
}): GeoArea {
  return {
    slug: args.slug,
    kind: "city",
    name: args.name,
    precision: "approximate",
    boundaryNote: args.boundaryNote,
    polygons: [],
    mlsCity: args.mlsCity,
    postalCodes: args.postalCodes,
  };
}

export const orangeCountyCityGeo: GeoArea[] = [
  city({
    slug: "newport-beach",
    name: "Newport Beach",
    mlsCity: "Newport Beach",
    postalCodes: ["92660", "92661", "92662", "92663"],
    boundaryNote: "CRMLS City = Newport Beach, excluding the 92657 Newport Coast and 92625 Corona del Mar postal codes which have their own pages.",
  }),
  city({
    slug: "newport-coast",
    name: "Newport Coast",
    mlsCity: "Newport Coast",
    postalCodes: ["92657"],
    boundaryNote: "CRMLS City = Newport Coast (some listings file under Newport Beach with postal code 92657; the postal gate catches those).",
  }),
  city({
    slug: "corona-del-mar",
    name: "Corona del Mar",
    mlsCity: "Corona del Mar",
    postalCodes: ["92625"],
    boundaryNote: "CRMLS City = Corona del Mar, or Newport Beach with postal code 92625.",
  }),
  city({
    slug: "seal-beach",
    name: "Seal Beach",
    mlsCity: "Seal Beach",
    postalCodes: ["90740"],
    boundaryNote: "CRMLS City = Seal Beach.",
  }),
  city({
    slug: "fountain-valley",
    name: "Fountain Valley",
    mlsCity: "Fountain Valley",
    postalCodes: ["92708"],
    boundaryNote: "CRMLS City = Fountain Valley.",
  }),
  city({
    slug: "costa-mesa",
    name: "Costa Mesa",
    mlsCity: "Costa Mesa",
    postalCodes: ["92626", "92627"],
    boundaryNote: "CRMLS City = Costa Mesa.",
  }),
  city({
    slug: "irvine",
    name: "Irvine",
    mlsCity: "Irvine",
    postalCodes: ["92602", "92603", "92604", "92606", "92612", "92614", "92617", "92618", "92620"],
    boundaryNote: "CRMLS City = Irvine.",
  }),
  city({
    slug: "westminster",
    name: "Westminster",
    mlsCity: "Westminster",
    postalCodes: ["92683"],
    boundaryNote: "CRMLS City = Westminster.",
  }),
  city({
    slug: "dana-point",
    name: "Dana Point",
    mlsCity: "Dana Point",
    postalCodes: ["92624", "92629"],
    boundaryNote: "CRMLS City = Dana Point, including Capistrano Beach (92624).",
  }),
  city({
    slug: "san-clemente",
    name: "San Clemente",
    mlsCity: "San Clemente",
    postalCodes: ["92672", "92673"],
    boundaryNote: "CRMLS City = San Clemente.",
  }),
  city({
    slug: "laguna-beach",
    name: "Laguna Beach",
    mlsCity: "Laguna Beach",
    postalCodes: ["92651", "92652"],
    boundaryNote: "CRMLS City = Laguna Beach.",
  }),
  city({
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    mlsCity: "San Juan Capistrano",
    postalCodes: ["92675"],
    boundaryNote: "CRMLS City = San Juan Capistrano.",
  }),
];
