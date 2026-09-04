// -----------------------------------------------------------------------------
// Geographic coverage layer for community + city pages.
//
// Why this exists: the Trestle (CRMLS) IDX feed returns a Latitude/Longitude
// and a SubdivisionName per listing, but nothing that says "this is Trinidad
// Island" in the same words our pages use. Every community page therefore
// carries a GeoArea that says, in machine-readable form, exactly which ground
// the prose on that page is describing. Dashboards, the /api/listings
// endpoint, and the /api/geo GeoJSON export all read from this one source.
//
// Coordinates are GeoJSON order: [longitude, latitude], WGS84.
// -----------------------------------------------------------------------------

/** A closed ring. First and last vertex may be equal; the helpers close it. */
export type Ring = [number, number][];

/**
 * One polygon = one outer ring (holes are not needed for our neighborhoods).
 * A GeoArea may carry several polygons (for example the Harbour Mainland is
 * three separate blocks of land around the islands).
 */
export type GeoPrecision =
  /** Vertices traced against parcel or street data and reviewed on a map. */
  | "verified"
  /** Drawn from the street boundaries described on the page. Good enough to
   *  route listings; should be reviewed once against a map before IDX launch. */
  | "approximate";

export type GeoArea = {
  /** Matches the community slug or city slug exactly. */
  slug: string;
  kind: "community" | "city";
  name: string;

  /**
   * If set, this area is a child of another GeoArea and must sit entirely
   * inside the parent's coverage. The validator enforces that, which is what
   * guarantees "Huntington Harbour" covers all five islands plus Mainland.
   */
  parentSlug?: string;

  precision: GeoPrecision;
  /** ISO date the polygon was last reviewed against a map. */
  reviewedOn?: string;
  /** Free-text note on how the boundary was drawn (street names etc). */
  boundaryNote: string;

  polygons: Ring[];

  /**
   * MLS matchers. These are checked BEFORE the polygon because when the
   * listing agent filled in the CRMLS subdivision correctly it is more
   * reliable than a GPS pin that may have been dropped on the street.
   * Matching is case-insensitive "contains".
   */
  subdivisionNames?: string[];
  /** Street names (without suffix) that exist only inside this area. */
  streetNames?: string[];
  /** Postal codes that can contain this area. Used as a sanity gate. */
  postalCodes?: string[];
  /** Exact CRMLS City value for city-level areas. */
  mlsCity?: string;
  /** Other CRMLS City values that belong on this page (e.g. "Sunset Beach" under HB). */
  mlsCityAliases?: string[];
};
