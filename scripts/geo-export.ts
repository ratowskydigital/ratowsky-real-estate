/**
 * Write the coverage layer to public/geo/ as GeoJSON.
 *
 *   npm run geo:export
 *
 * Output:
 *   public/geo/coverage.geojson      — every area (cities + communities)
 *   public/geo/communities.geojson   — communities only (drop into geojson.io to review)
 *   public/geo/<slug>.geojson        — one file per area, for dashboards / IDX map layers
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { geoAreas } from "../src/content/geo";
import { areasToFeatureCollection } from "../src/lib/geo";

const outDir = join(process.cwd(), "public", "geo");
mkdirSync(outDir, { recursive: true });

const all = areasToFeatureCollection(geoAreas);
writeFileSync(join(outDir, "coverage.geojson"), JSON.stringify(all, null, 2));

const communitiesOnly = areasToFeatureCollection(geoAreas.filter((a) => a.kind === "community"));
writeFileSync(join(outDir, "communities.geojson"), JSON.stringify(communitiesOnly, null, 2));

for (const area of geoAreas) {
  writeFileSync(
    join(outDir, `${area.slug}.geojson`),
    JSON.stringify(areasToFeatureCollection([area]), null, 2),
  );
}

console.log(`Wrote ${geoAreas.length + 2} GeoJSON files to public/geo/`);
