# ratowsky-real-estate
Source Code for the ratowskyrealestate.com website built by next.js

## Content status rules

Every city (`src/content/cities/`) and community (`src/content/communities/`) page carries a `status`. Only `"published"` pages are indexable and included in `/sitemap.xml`; anything else is rendered with `noindex` and left out of the sitemap so a half-written page can never derank the site. Today every city and community page is published.

## Geo coverage layer (Trestle IDX)

`src/content/geo/` holds one `GeoArea` per city and community page. Community areas carry a polygon (or several) plus CRMLS matchers (`subdivisionNames`, `streetNames`, `postalCodes`). City areas are matcher-only: they route by the CRMLS `City` value, its aliases, and postal codes, and their GeoJSON features have `geometry: null` and `coverage: "matchers"`. The one exception is Huntington Beach, which also carries a coarse outline so the validator can confirm every HB community sits inside it. This is the single source of truth for "which listings belong on which page."

Resolution order for a listing: CRMLS `SubdivisionName`, then street name, then polygon, deepest area first, each gated by postal code. For cities the `City` field is authoritative; a postal code only changes the answer inside the explicit umbrella mapping (Newport Beach with a 92657 or 92625 zip routes to Newport Coast or Corona del Mar, and the reverse).

- `npm run geo:check` — fails if any page lacks coverage, any child polygon (an island) is not fully inside its parent (Huntington Harbour), or any two unrelated polygons share interior area (edge crossing or a vertex strictly inside the other; touching along a shared boundary is fine). Runs automatically before `next build`.
- `npm run geo:smoke` — feeds sample CRMLS-shaped records through the resolver and asserts each lands on the right page.
- `npm run geo:export` — writes `public/geo/*.geojson` (one file per area plus `coverage.geojson` and `communities.geojson`).
- `GET /api/geo`, `GET /api/geo/[slug]?children=true` — the same polygons as GeoJSON for dashboards and the IDX map layer.
- `GET /api/listings?community=<slug>` — Trestle listings filtered to that page's coverage. A parent (`huntington-harbour`) returns every island plus the Mainland.

### Reviewing a polygon

The rings were drawn from the street boundaries each page describes and are marked `precision: "approximate"`. To tighten one: run `npm run geo:export`, open `public/geo/communities.geojson` at https://geojson.io, adjust the vertices, paste them back into `src/content/geo/huntington-beach.ts`, set `precision: "verified"` with a `reviewedOn` date, and run `npm run geo:check`.
