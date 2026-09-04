// Canonical taxonomy for the Ratowsky / AutoAuthority site.
//
// Hierarchy (flat URLs, structured-data driven):
//   County  →  City  →  Community  →  Sub-community
//
// URLs are intentionally flat for AI-search citation cleanliness:
//   /communities/[slug]  and  /cities/[slug]
//
// Hierarchy is conveyed via:
//   - parentCitySlug / parentCommunitySlug fields
//   - <Breadcrumb /> UI component
//   - BreadcrumbList JSON-LD schema (auto-emitted on every page)

export type CommunitySection = {
  id: string;
  eyebrow?: string;
  heading: string;
  paragraphs?: string[];              // optional — a section may be bullets-only
  bullets?: { title?: string; items: string[] };
  callout?: { title?: string; body: string };
};

export type CommunityFaq = {
  q: string;
  a: string;
};

export type CommunitySource = {
  label: string;
  url: string;
};

export type CommunityIslandRow = {
  name: string;
  profile: string;
};

export type CommunityCta = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
};

// -----------------------------------------------------------------------------
// City — top-level market page (e.g. Huntington Beach, Newport Beach).
// -----------------------------------------------------------------------------
export type City = {
  slug: string;                        // "huntington-beach"
  name: string;                        // "Huntington Beach"
  shortName?: string;                  // "HB"
  county: string;                      // "Orange County"
  state: string;                       // "California"
  stateCode: string;                   // "CA"
  oneLine: string;                     // editorial one-liner used on cards & meta
  directAnswer: string;                // LLM-citation-friendly paragraph
  heroImage?: string;
  heroAlt?: string;
  status: "published" | "draft" | "stub";
  lastUpdated: string;                 // ISO date
  isPrimaryMarket?: boolean;           // true for HB — gets featured treatment
  isCoastal?: boolean;                 // groups the /cities hub (coastal vs inland)
  sections?: CommunitySection[];       // optional long-form content
  faqs?: CommunityFaq[];
  sources?: CommunitySource[];
  cta?: CommunityCta;
};

// -----------------------------------------------------------------------------
// Community — neighborhoods, subdivisions, islands, gated enclaves.
// A community can be a sibling under a city (e.g. Seacliff under HB) OR a
// child of another community (e.g. Trinidad Island under Huntington Harbour).
// -----------------------------------------------------------------------------
export type Community = {
  slug: string;                        // "trinidad-island" — globally unique, flat
  name: string;                        // "Trinidad Island"
  parentCity: string;                  // display name — "Huntington Beach"
  parentCitySlug: string;              // routing slug — "huntington-beach"
  parentCommunitySlug?: string;        // for sub-communities — e.g. "huntington-harbour"
  subCommunitySlugs?: string[];        // children listed on this page — e.g. ["trinidad-island", ...]
  oneLine: string;
  directAnswer: string;
  heroImage?: string;
  heroAlt?: string;
  status: "published" | "draft" | "stub";
  lastUpdated: string;                 // ISO date
  sections: CommunitySection[];
  islandTable?: CommunityIslandRow[];  // legacy quick-reference table — still useful
  faqs: CommunityFaq[];
  sources: CommunitySource[];
  related: string[];                   // sibling community slugs
  cta: CommunityCta;
};
