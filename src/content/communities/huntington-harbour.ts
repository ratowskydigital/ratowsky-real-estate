import type { Community } from "./_types";

export const huntingtonHarbour: Community = {
  slug: "huntington-harbour",
  name: "Huntington Harbour",
  parentCity: "Huntington Beach",
  parentCitySlug: "huntington-beach",
  subCommunitySlugs: [
    "trinidad-island",
    "davenport-island",
    "gilbert-island",
    "humboldt-island",
    "admiralty-island",
    "harbour-mainland",
  ],
  oneLine:
    "Five man-made islands, a Mainland strip, and the only true deep-water residential boating community on the Orange County coast.",
  directAnswer:
    "Huntington Harbour is a residential boating community in northwest Huntington Beach, California, built across five man-made islands and an adjacent Mainland section. Most homes carry a private dock, side ties, or direct seawall frontage, and the area sits inside a navigable channel system that connects through the Sunset Aquatic Park to the Pacific Ocean.",
  heroImage: "/images/drone/harbour-yacht-golden-hour.jpg",
  heroAlt:
    "Golden-hour view of a yacht moored in front of a waterfront Huntington Harbour home.",
  status: "published",
  lastUpdated: "2026-06-07",

  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      heading: "What Huntington Harbour actually is, in one paragraph.",
      paragraphs: [
        "Huntington Harbour sits at the northern edge of Huntington Beach, between the Bolsa Chica wetlands to the south and the city of Seal Beach to the north. The community was developed through the 1960s and 1970s on land dredged from coastal wetlands and engineered into a network of channels, fingers, and dredged basins. Today it is one of only a handful of residential neighborhoods in Southern California where a buyer can own a single-family home with a private boat dock attached to it. That single fact — fee-simple residential property with on-site water access — is what drives the price stack, the buyer pool, and the negotiating dynamics across all eight Harbour sub-neighborhoods.",
        "On a map, the Harbour reads as five distinct islands plus Mainland. Each island has its own street grid, its own architectural feel, and its own waterfront geometry. A 4,000 square foot home on Trinidad Island and a 4,000 square foot home in the Mainland Cape section can transact at materially different price points based purely on where the dock points and how the channel is shaped on the lot. Pricing the Harbour without understanding the islands is the single most common mistake we see agents from outside the community make.",
        "Ratowsky Group has worked the Harbour since the 1970s. Craig Ratowsky was licensed in 1977 and has watched the channel system, the dock-permit regime, and the buyer pool change through five distinct market cycles. The data on this page is the consolidated playbook we would hand a serious buyer or seller before the first walkthrough.",
      ],
    },
    {
      id: "islands",
      eyebrow: "Geography",
      heading: "The eight Harbour sub-neighborhoods.",
      paragraphs: [
        "The City of Huntington Beach lists Huntington Harbour as one sub-region, but on the ground the community functions as eight distinct micro-markets. Five of them are man-made islands. Three are Mainland or peninsula areas connected by bridge or roadway. Each carries its own price ceiling, dock geometry, and buyer profile.",
        "Island lots and Mainland lots do not comp against each other in any meaningful way. When we run a CMA for a Harbour seller, we group recent sales by island first and then by water-orientation second. A south-facing dock on Trinidad and a north-facing slip on Humboldt are functionally different products even when the home behind them is similar.",
      ],
      callout: {
        title: "Pricing rule of thumb",
        body: "On the islands, the dock and the seawall frontage drive the comp, not the square footage of the house. A home with a 50-foot end-tie on a wide channel will frequently outsell a comparable home one block inland by a wide margin — even if the inland home is larger and more recently remodeled.",
      },
    },
    {
      id: "ownership",
      eyebrow: "What you actually own",
      heading: "Fee-simple house. State-leased water. Private dock in between.",
      paragraphs: [
        "Almost every Harbour home is sold fee-simple, meaning the buyer owns the land and the structure outright. The water in front of the home — the channel, the side tie, the dock footprint — is a different legal animal. The submerged lands that make up the channels are either privately platted or, for parcels touching the Main Channel, leased through the California State Lands Commission. This is referenced in CSL staff reports going back decades.",
        "What this means in practice: when you buy a waterfront Harbour home you are typically purchasing the lot, the home, and the right to use a dock structure that sits over either privately owned submerged land or a state-leased parcel. The dock structure itself is a permitted improvement, not part of the underlying land grant. Replacing or reconfiguring it requires a city Harbor Permit and, depending on the lot, a separate permit through the California Coastal Commission.",
        "We do not give legal opinions to clients — that is the role of the title company and a coastal-property attorney — but we do tell every Harbour buyer to read their preliminary title report carefully and ask the listing agent for the active dock permit, the most recent seawall inspection, and any open compliance items with the city. A clean dock-permit file is one of the strongest signals that a property has been maintained properly. A messy file is one of the cheapest things for a seller to fix and one of the most expensive things for a buyer to inherit.",
      ],
      bullets: {
        title: "Standard documents we ask for during the buyer-side diligence period",
        items: [
          "Active City of Huntington Beach Harbor Permit, with the as-built dock dimensions on file.",
          "Most recent seawall inspection report (private engineer, not the city).",
          "California Coastal Commission permit history for any post-2000 dock or seawall modification.",
          "If the lot fronts the Main Channel: any State Lands Commission lease documentation.",
          "HOA documents, if the island has an active homeowners association.",
          "Slip dimensions confirmed by physical measurement, not just what the listing flyer claims.",
        ],
      },
    },
    {
      id: "height-limits",
      eyebrow: "How high you can build",
      heading: "The 35-foot rule, the 30-foot CUP threshold, and what an addition actually triggers.",
      paragraphs: [
        "The City of Huntington Beach caps the maximum height for most main residential dwellings at thirty-five feet. The standard rule across the residential districts that cover most of the Harbour is that a main dwelling may rise to thirty feet by-right, and any structure proposed between thirty and thirty-five feet requires a Conditional Use Permit reviewed by the Zoning Administrator. The thirty-five-foot ceiling is the practical cap for almost every Harbour single-family lot. Anything beyond it requires a discretionary entitlement, and discretionary entitlements in the Coastal Zone draw a longer review.",
        "What this means at the kitchen-table level: a Harbour buyer who is planning a third-story rebuild for ocean glimpses or a roof deck for sunset entertaining is almost always working inside a thirty-to-thirty-five-foot envelope, not above it. Within that envelope, side and rear setbacks, lot-coverage limits, and floor-area-ratio caps further constrain the buildable mass. A two-story floor plan that pencils out on paper will often crash into setback or coverage rules before it touches the height cap, so we tell every Harbour buyer to evaluate the rebuild math at the lot level, not the height-line level, before they assume a property supports a particular addition.",
        "Additions to existing structures carry the same height ceiling. Where additions get expensive fast is in the parallel triggers — once a project crosses certain valuation, square-footage, or scope thresholds, the City requires public-improvement upgrades along the property frontage (curbs, gutters, sidewalks, sewer laterals, water meters, accessibility ramps, driveway aprons) under HBMC §17.05 grading standards and the Zoning and Subdivision Ordinance §230.84. The threshold most commonly cited by Public Works is improvements valued at more than one-third of the existing building's value. It is one of the most-missed cost line items in Harbour remodel underwriting and we surface it before the offer is written, not after permits are pulled.",
        "Layered on top of the city ceiling: the entire Harbour is inside the California Coastal Zone. Any project that affects view corridors, water access, or the visual character of the bulkhead reach can pull a Coastal Development Permit (CDP) review even when the city is satisfied. Most by-right single-family residential remodels under the height cap are exempt or processed locally; rebuilds, third-story adds, and any structure that touches the seawall-to-pierhead area routinely require a separate CDP. Plan the project around two parallel review tracks, not one, and budget the timeline accordingly.",
      ],
      bullets: {
        title: "The four height-and-addition triggers we walk every Harbour buyer through",
        items: [
          "Standard main-dwelling height cap: thirty-five feet, with a thirty-foot threshold for Conditional Use Permit review (HBMC Zoning and Subdivision Ordinance, residential districts).",
          "Setback, lot-coverage, and floor-area-ratio limits frequently constrain the buildable mass before the height cap does. Evaluate the lot, not just the elevation.",
          "Public-improvement triggers: scope or value above ~one-third of the existing structure pulls in curbs, sidewalks, sewer-lateral, and accessibility upgrades along the property frontage (HBMC §17.05; HB ZSO §230.84).",
          "Coastal Zone overlay: the Harbour is wholly inside the Coastal Zone. CDP review can apply on top of the city's local entitlement, particularly for rebuilds, third-story additions, and any structure touching the bulkhead-to-pierhead area.",
        ],
      },
      callout: {
        title: "Verify everything at the lot",
        body: "Height limits and addition rules are address-specific. The exact zoning district, overlay, setback schedule, lot-coverage cap, and floor-area-ratio rule should be confirmed with the City of Huntington Beach Community Development Department before any offer that depends on a planned remodel or rebuild. Anything we publish here is a general read of the current code, not a substitute for an entitlement opinion on a specific parcel.",
      },
    },
    {
      id: "docks",
      eyebrow: "Dock rules",
      heading: "The dock-permit playbook most agents will not tell you.",
      paragraphs: [
        "The single most common reason a Harbour transaction falls out of contract is dock-related. A buyer planned to keep a 55-foot vessel; the dock turns out to be permitted at 48 feet. A seller assumes their dock is grandfathered; the city flags an extension that was added without a permit in 1994. A boat slip is described as deep-water; the channel actually shallows out at low tide. Every one of these problems is preventable if both sides know the rules going in.",
        "There are three regulatory layers stacked on every Harbour dock, and a typical residential dock project pulls every one of them. The first is the City of Huntington Beach. Public Works issues an Approval-in-Concept for the structural plans; the Planning Division confirms the zoning. The waterside portion of most Harbour parcels is designated Open Space — Water Recreation under the certified Local Coastal Program (Implementation Plan, Chapter 213), which is the layer that allows private docks adjacent to the single-family parcel. The second layer is the California Coastal Commission. Because every dock project is seaward of the mean high tide line, the dock itself sits inside the Commission's retained permit jurisdiction, which means a Coastal Development Permit is required — even when the City has issued an AIC, even when the property has a long-permitted dock already in place, and even when the project is a like-for-like float replacement. The third layer is the California State Lands Commission, which holds sovereign-land rights over the Main Channel and reviews leases or use authorizations on state-owned submerged lands. The three agencies do not always communicate cleanly with each other, which is why dock permits issued decades ago sometimes do not match what a current Coastal Commission staff report would approve today.",
        "What this means in practice for a buyer or seller: a Harbour dock without an active Coastal Development Permit on file is not a clean asset. The City may have permitted the structure at the time of build (many were built in the 1960s and 1970s, before the Coastal Act); but any modification, replacement, repair, or expansion since then almost certainly requires a CDP. The Commission has been active in cleaning up the Harbour's permit history over the past decade, and we have seen unpermitted-dock issues surface in escrow as after-the-fact CDP applications running double the standard fee. Read the dock-permit file on every Harbour transaction and do not assume a long-installed dock is automatically permitted.",
        "What Justin and Craig have learned from sitting through dozens of these reviews: bring your own measurements. Do not rely on the listing flyer or the prior MLS listing. We carry a tape measure to every Harbour walkthrough and we recommend buyers do the same. Slip length, beam clearance, side-tie length, and the distance from the dock to the pierhead line all matter individually. Pre-construction eelgrass and Caulerpa surveys are required for any new or replacement dock — eelgrass surveys are valid only during the active growth period (March through October) and expire each year; Caulerpa surveys are valid for ninety days from the survey date.",
      ],
      bullets: {
        title: "The four dock dimensions that determine vessel fit",
        items: [
          "Slip length — the longest vessel the dock can physically accept inside the U-shape or alongside the side tie.",
          "Beam clearance — the widest beam the slip will accept without the vessel rubbing the dock or the seawall.",
          "Bridge air clearance — the height of the lowest fixed bridge between the slip and open water. Huntington Harbour Marina publicly references its bridge clearance at approximately 23 feet, which is the practical sailing-vessel ceiling for the harbour as a whole.",
          "Pierhead line — the imaginary line set by the city beyond which no dock, float, or structure may extend. State Lands Commission staff reports describe the Main Channel pierhead line as 60 feet from the bulkhead. Anything past that line is not permittable.",
        ],
      },
      callout: {
        title: "Approximate, not exact",
        body: "We deliberately use approximate language for clearances and dimensions on this page. The harbour is tidal and the published numbers come from secondary sources. For any specific transaction, measurements should be verified by the city, the marina, and a qualified surveyor — not relied on from a real-estate website.",
      },
    },
    {
      id: "dock-projection",
      eyebrow: "How far you can go from the seawall",
      heading: "Pierhead lines, side setbacks, and the projection rules that govern every Harbour dock.",
      paragraphs: [
        "Every Harbour parcel carries two imaginary lines drawn out from the bulkhead. The first is the bulkhead line — the vertical face of the seawall itself, where the lot ends and the channel begins. The second is the pierhead line — the city-set boundary beyond which no dock, float, pier, pylon, cantilevered deck, or other private structure may extend. The water between the bulkhead and the pierhead line is the only zone in which a private dock may legally sit. The water beyond the pierhead line is reserved for navigation and shared public use of the channel.",
        "The pierhead and bulkhead lines for the Huntington Harbour area are formally established by the City Council and recorded in the offices of the Director of Public Works and the City Clerk under HBMC Chapter 13.32 (Harbors Generally) and Chapter 13.36 (Boating Regulations). The exact distance from the bulkhead to the pierhead line varies by channel and is not a single uniform number across the Harbour. The Main Channel reference, on file with the California State Lands Commission, places the pierhead line at sixty feet from the bulkhead inside a four-hundred-foot-wide channel. The narrower fingers, dredged basins, and side channels that thread the islands carry their own pierhead distances, and the only authoritative reference for any specific lot is the city's recorded chart for that parcel.",
        "On top of the pierhead line, two other dimensional rules govern dock placement. First, side setbacks: under the California Coastal Commission's reviewing standard for the Harbour, dock projections from the bulkhead are measured against the extension of the side property lines into the water. A dock that crowds either side property-line extension can draw a setback objection from the neighboring property owner during the Coastal Commission review window, which is the most common cause of a CDP being held up at hearing. Second, cantilevered decks: the Coastal Commission has historically allowed land-side cantilevered decks to extend up to five feet over the water from the bulkhead in the Main Channel — a separate dimension from the dock-and-float footprint and one that is increasingly subject to lease-fee mitigation under recent CCC permit conditions.",
        "What this means for an owner who wants a bigger dock or a bigger vessel: the answer is almost never to push the dock farther into the channel. The pierhead line is the hard ceiling. The lever that actually moves dock-and-vessel capacity on a Harbour lot is the bulkhead-to-pierhead width — which is fixed for the parcel — combined with the side-setback envelope and the dock geometry inside that envelope. Reconfiguring the existing dock footprint, adding a side-tie within the property-line extensions, or rebuilding to maximize the parcel's pierhead allowance is the common path. Pushing past the pierhead line is not.",
      ],
      bullets: {
        title: "How dock projection actually gets calculated on a Harbour parcel",
        items: [
          "Locate the bulkhead line — the city-recorded face of the seawall for the parcel.",
          "Locate the pierhead line — the city-recorded line beyond which no private structure may extend. The Main Channel reference is sixty feet from the bulkhead; finger and basin pierhead lines vary and must be pulled from the city for the specific lot.",
          "Project the side property lines straight into the water. The dock must sit inside the resulting bulkhead-pierhead-side-extension box.",
          "Cantilevered land-side decks are governed separately and have historically been capped at approximately five feet over Main Channel water.",
          "Any structure or expansion past these lines is not permittable under HBMC Chapter 13 and triggers an enforcement action with both the City and the Coastal Commission.",
        ],
      },
    },
    {
      id: "vessel-size",
      eyebrow: "How big a boat the Harbour will actually accept",
      heading: "Slip dimensions, bridge clearance, and the four limits that decide vessel fit.",
      paragraphs: [
        "The Harbour does not have a single 'maximum vessel size.' Vessel fit is decided lot by lot, dock by dock, and tide by tide. The four limits that always apply: slip length (longest vessel the dock can physically accept), beam clearance (widest vessel the slip will accept without rubbing the dock or seawall), water depth (governed by the channel's dredged contour and tide cycle), and air-draft (height above waterline relative to the lowest fixed bridge between the slip and open ocean).",
        "Slip length on private Harbour docks ranges widely. Huntington Harbour Marina, the public-facing reference for the area, lists slips from twenty feet to seventy-five feet. Private home docks can sit anywhere inside that band depending on the bulkhead-to-pierhead distance for the specific parcel, the orientation of the dock inside the side-setback envelope, and the original permitted as-built footprint. A common configuration on a wide-channel lot will accept a forty-five to fifty-five foot vessel comfortably; lots on the narrower fingers may cap below forty feet. Larger vessels — the sixty-five-to-seventy-five-foot pool — fit only on a small subset of Harbour parcels and almost always require a wide-channel orientation plus a custom dock build.",
        "Air-draft is the limit most often missed in pre-purchase due diligence. The Huntington Harbour Marina lists bridge clearance at approximately twenty-three feet. That figure is tide-dependent and references the lowest fixed bridge in the harbour transit path. A sailing vessel with a fifty-foot mast cannot reach open ocean from any Harbour slip without lowering the mast or transiting through the marina inlet at a specific tide. Power vessels with tuna towers, hard tops, antennas, or radar arches need to clear the same number on the higher tides. We have walked buyers off otherwise-perfect docks because their vessel could not transit the bridge cycle reliably.",
        "Water depth is the fourth limit and it varies inside the same dock. The pierhead-line water is the deepest part of a parcel's allocation; water close to the bulkhead is shallower and tide-dependent. A heavy displacement vessel may need a specific tide window to enter or exit a slip even when the slip dimensions otherwise fit. We pull a low-tide and high-tide read on every Harbour dock we tour with a buyer planning to keep a deep-draft vessel. Slip listings that say 'deep-water' without a measured low-tide depth at the slip face are not actually telling the buyer what they need to know.",
      ],
      bullets: {
        title: "The vessel-size due-diligence we run on every Harbour dock",
        items: [
          "Measure the slip — length inside the dock, beam clearance at the narrowest point, side-tie length if relevant.",
          "Pull the City Public Works permit to confirm the as-built dock footprint matches what is in the water.",
          "Confirm bridge air clearance against the vessel's air-draft, with a margin for tide variation. The Huntington Harbour Marina reference of approximately twenty-three feet is the working ceiling for the harbour as a whole.",
          "Check water depth at the slip face at both high tide and low tide. A deep-water claim should be backed by a measurement, not a description.",
          "If the buyer has a specific vessel — not a hypothetical — match its documented length, beam, draft, and air-draft against the dock and the bridge-cycle data before opening escrow.",
          "If the vessel is not yet purchased, calibrate the dock's vessel ceiling against the realistic upper end of the buyer's intended use, not the lower end.",
        ],
      },
      callout: {
        title: "Approximate, not exact",
        body: "Bridge clearance, slip dimensions, and channel depths are tide-dependent and the published figures for the Harbour come from secondary sources. For any specific transaction or vessel purchase, measurements should be verified by the city, the marina, the dock builder, and a qualified surveyor — not relied on from a real-estate website or a public listing flyer.",
      },
    },
    {
      id: "seawalls",
      eyebrow: "Seawall reality",
      heading: "The most expensive surprise in Harbour ownership.",
      paragraphs: [
        "Every Harbour home with channel frontage has a seawall — concrete, steel-sheet, or a hybrid. Seawalls fail. Slowly, then all at once. The most expensive single line item in the Harbour ownership budget is not the dock, the boat, or the HOA. It is the day a seawall section needs replacement, which can run six figures and require coordination with the neighboring properties, the city, and the Coastal Commission.",
        "When we represent Harbour sellers, we order a private engineer's seawall inspection before we put the home on the market. The reasons are tactical: a clean inspection lets us list the home with confidence and rebut buyer-side concerns; a flagged inspection lets us either price for it, repair before listing, or disclose with full documentation. Either outcome is better than discovering a seawall issue mid-escrow when negotiating leverage has shifted.",
        "When we represent Harbour buyers, we read the listing-side inspection report carefully and, when the home is older or the inspection is dated, we order our own. The cost of an independent seawall inspection is small compared to inheriting a structural issue at close.",
      ],
      bullets: {
        title: "Seawall risk factors we look for",
        items: [
          "Visible cracking, displacement, or rotation of the cap.",
          "Tieback corrosion — particularly in older steel-sheet installations.",
          "Loss of fill behind the wall (sinkholes, depressions in the lawn close to the cap).",
          "Joint separation between adjacent properties' seawall sections.",
          "Documented past repairs without a city permit on file.",
        ],
      },
    },
    {
      id: "buying",
      eyebrow: "Buying in the Harbour",
      heading: "The local diligence checklist we hand every buyer.",
      paragraphs: [
        "Buying a Harbour home is not the same transaction as buying inland in Huntington Beach. The land is different, the legal structure is different, the inspection list is different, and the buyer pool is different. We hand every Harbour buyer the same diligence checklist on day one of representation, and we do not make offers without working through it.",
        "The checklist starts with the question most buyers think about last: what is the boat? Vessel length, beam, draft, and air-draft determine which docks fit and which do not. We have walked buyers off otherwise-perfect homes when the slip would not accommodate their existing yacht, and we have walked buyers onto smaller homes that priced lower because they were the only ones in the channel that could take a 60-foot vessel.",
        "The second question is timing. Harbour inventory comes online in waves driven by retirement, downsizing to Newport Coast, or estate transitions. Compass Private Exclusives and our agent-network relationships frequently surface listings 7 to 14 days before they hit the public MLS. For buyers committed to the Harbour, that early-look window is materially the difference between getting in at strategy-pricing or competing in a multiple-offer situation later.",
      ],
      bullets: {
        title: "The Harbour buyer-side diligence checklist",
        items: [
          "Define the vessel in writing — length, beam, draft, air-draft, fuel type. Match against the dock dimensions before any inspection contingency runs.",
          "Pull the dock permit from the City of Huntington Beach Public Works Department. Confirm the as-built matches the permit.",
          "Order a private seawall inspection if the listing report is older than 24 months.",
          "Pull two king-tide videos of the street and the seawall if a high-tide cycle is available. The Harbour's lowest streets take occasional water during seasonal king tides — we know which ones.",
          "Confirm the HOA, if any, and read the dock-rental and short-term-rental rules carefully.",
          "Check whether the lot fronts the Main Channel or a private finger; that distinction changes the regulatory layer.",
          "Verify school zoning if the buyers have children — the Harbour straddles two school districts depending on the island.",
        ],
      },
    },
    {
      id: "selling",
      eyebrow: "Selling in the Harbour",
      heading: "How we position a Harbour listing.",
      paragraphs: [
        "Selling a Harbour home is a marketing problem before it is a pricing problem. The buyer pool is national. Harbour listings get traction with cash buyers from the Bay Area, the Pacific Northwest, Texas, and Idaho who are looking for a Southern California coastal lifestyle property with on-site boating. Reaching that pool reliably requires a marketing layer that goes beyond the local MLS.",
        "Our standard Harbour listing strategy is the Compass three-phase system. Phase one is a Compass Private Exclusive — a controlled, agent-network-only release that lets us test demand and gather buyer feedback before we ever invest in public marketing. Phase two is a targeted demand campaign across Compass's national agent network, paid social, and email. Phase three is the timed public launch, designed to convert demand into competitive multiple offers in the first seven days on market.",
        "The Trinidad Island case that anchors our home page — a waterfront listing with a Zillow estimate of $2.45M that we sold for $3.925M, eight days on market, twelve offers, eight all cash, $643K over asking — is the literal output of this three-phase system applied to a Harbour-grade property. Not every Harbour home will produce that result, but the structure is repeatable and the variables are tunable.",
      ],
      bullets: {
        title: "What we do before we list a Harbour home",
        items: [
          "Independent seawall inspection ordered, reviewed, and either repaired or disclosed.",
          "Dock permit pulled and reconciled against as-built measurements.",
          "Slip dimensions documented with vessel-fit guidance for marketing.",
          "Aerial drone media — the Harbour reads dramatically different from the air than from the street.",
          "King-tide video, if seasonally available, used proactively if the lot is well-elevated; disclosed up-front if it is not.",
          "Compass Private Exclusive listing during the first 14-day demand-test window.",
          "A pricing strategy explicitly modeled against the last 12 months of comps for that specific island, not the Harbour average.",
        ],
      },
    },
    {
      id: "hoas",
      eyebrow: "HOAs and rules",
      heading: "What changes from one island to the next.",
      paragraphs: [
        "Some Harbour islands have active homeowners associations with monthly dues and architectural review. Others operate without a formal HOA. The differences are material when budgeting carrying costs and when planning any exterior or dock improvement.",
        "Architectural review is the most overlooked variable. On the islands with active review, exterior color, fence height, hardscape, and roofline all need approval. We have seen buyers skip this in their due diligence and then discover months later that the remodel they planned needs a completely different scope. Read the CC&Rs before you write the offer, not after.",
        "Short-term rental rules also vary. Some pockets of the Harbour permit short-term rentals; others do not, either by city rule or by HOA policy. If a buyer is underwriting the home with assumed STR income, we verify the rule layer before submitting the offer.",
      ],
    },
    {
      id: "lifestyle",
      eyebrow: "Lifestyle",
      heading: "The boating community most of Orange County does not see.",
      paragraphs: [
        "What sets the Harbour apart day-to-day is the water. Residents wake up to a paddleboard launch off the back deck. Kids learn to sail at the Huntington Harbour Yacht Club. Holidays revolve around the annual Cruise of Lights, where decorated boats parade through the channels with thousands of spectators along the Mainland seawalls. Summer mornings start with electric-boat coffee runs from one island to another. Sunset is a glass of wine off the dock with the channel quiet and the bridges lit up.",
        "The boating culture is the lifestyle anchor. Most Harbour homeowners keep a boat, a Duffy electric, a kayak rack, or some combination. The harbour itself connects to Sunset Aquatic Park and out to the Pacific through an inlet near the marina, which is what makes the deep-water-vessel pool functional rather than decorative.",
        "Beyond the water, the community is ten minutes from downtown Huntington Beach, fifteen minutes from Sunset Beach and Bolsa Chica, and forty-five minutes from John Wayne Airport. It is unusually well-positioned for residents who want a boating lifestyle without a long commute to the broader Orange County job market.",
      ],
    },
    {
      id: "market",
      eyebrow: "Market dynamics",
      heading: "How the Harbour trades, in plain language.",
      paragraphs: [
        "The Harbour is not a high-velocity market. Average days on market trends longer than downtown Huntington Beach or Seacliff because the buyer pool is narrower — boating-anchored, often relocating, frequently cash. That narrower pool produces a wider price-bid distribution at sale, which is why pricing strategy from day one matters more here than almost anywhere else in the city.",
        "Our experience: a correctly priced Harbour home with a clean dock permit, a clean seawall, and a strategic three-phase launch can attract competitive offers inside the first 7 to 14 days. An incorrectly priced Harbour home will sit, age on the MLS, and ultimately trade at a discount even after price reductions. The first seven days on market are the most expensive days a Harbour seller will ever own.",
        "We do not publish neighborhood-level price statistics on this page. Median, average, and price-per-square-foot numbers for the Harbour move quickly enough that any number we put in a website would be outdated within weeks. For a current pricing read on a specific island, the most useful thing we can do is run a private CMA against the last 90 to 180 days of sales for that water orientation. Any seller or buyer can request one through the contact form below.",
      ],
    },
  ],

  islandTable: [
    {
      name: "Trinidad Island",
      profile:
        "Largest island, widest channel access, most consistent waterfront price ceiling. Premium market for fully-renovated waterfront homes.",
    },
    {
      name: "Davenport Island",
      profile:
        "Mid-to-upper price tier with strong remodel inventory. Waterfront geometry varies by street — north and south sides comp differently.",
    },
    {
      name: "Humboldt Island",
      profile:
        "Wide range of waterfront-orientation options. Strong value pocket for buyers who want Harbour life with more inventory turnover.",
    },
    {
      name: "Admiralty Island",
      profile:
        "Smaller island with a tighter, quieter feel. Variable water frontage; lot-by-lot evaluation matters more than average.",
    },
    {
      name: "Gilbert Island",
      profile:
        "Mid-tier island with strong remodel activity. Dock geometry tends to favor vessels under 50 feet.",
    },
    {
      name: "Coral Cay",
      profile:
        "Distinctive architectural character; waterfront homes here are tightly held. Inventory is rare.",
    },
    {
      name: "Weatherly Bay",
      profile:
        "Bay-side orientation rather than channel-finger. Different water dynamic; more sheltered, slower current.",
    },
    {
      name: "Seagate / Mainland",
      profile:
        "Entry-point Harbour ownership. Mainland Cape and condo inventory price below the islands but include some of the most walkable streets in the community.",
    },
  ],

  faqs: [
    {
      q: "What is the maximum building height in Huntington Harbour?",
      a: "Most Huntington Harbour residential parcels are governed by the City of Huntington Beach standard residential height rule. Main dwellings are capped at thirty-five feet, with thirty feet typically as the by-right ceiling and a Conditional Use Permit required for any height between thirty and thirty-five feet. Setbacks, lot-coverage limits, and floor-area-ratio caps frequently constrain the buildable mass before the height limit does. Because the Harbour is inside the California Coastal Zone, any rebuild, third-story addition, or structure that affects view corridors can also pull a Coastal Development Permit on top of the city's local entitlement.",
    },
    {
      q: "Can I add on to a Huntington Harbour home or rebuild for a third story?",
      a: "Yes, with the same thirty-five-foot height ceiling and the same setback, lot-coverage, and floor-area-ratio rules that govern any Huntington Beach residential lot. Additions that exceed thresholds defined under HBMC §17.05 grading standards and HB Zoning and Subdivision Ordinance §230.84 — typically scope or value above approximately one-third of the existing structure — also require public-improvement upgrades along the property frontage (curbs, sidewalks, sewer laterals, accessibility ramps). And because the entire Harbour is inside the Coastal Zone, rebuilds and third-story additions frequently require a Coastal Development Permit in parallel with the city's local entitlement.",
    },
    {
      q: "How far can a dock extend from the seawall in Huntington Harbour?",
      a: "Private docks may only extend from the bulkhead out to the city-recorded pierhead line for that specific parcel. The pierhead line is set by the City Council and recorded in the offices of the Director of Public Works and the City Clerk under HBMC Chapters 13.32 and 13.36. The Main Channel reference, on file with the California State Lands Commission, places the pierhead line at sixty feet from the bulkhead inside a four-hundred-foot-wide channel. Other channels, fingers, and dredged basins carry their own pierhead distances. No dock, float, pier, pylon, or other structure may extend past the pierhead line. Side setbacks measured from the extension of the side property lines also constrain the dock footprint.",
    },
    {
      q: "What is the maximum boat size for a Huntington Harbour home dock?",
      a: "Vessel size is decided lot by lot. Four limits always apply: slip length, beam clearance, water depth, and air-draft against the lowest fixed bridge in the harbour transit. Huntington Harbour Marina lists slips from twenty feet to seventy-five feet for context, and bridge clearance at approximately twenty-three feet. Private home docks fall inside that band depending on the bulkhead-to-pierhead distance for the parcel, the orientation of the dock inside the side-setback envelope, and the original permitted as-built footprint. A common wide-channel Harbour parcel comfortably accepts a forty-five-to-fifty-five-foot vessel; sixty-five-to-seventy-five-foot vessels fit only on a small subset of parcels.",
    },
    {
      q: "Can I extend or replace the dock on my Huntington Harbour home?",
      a: "Almost any dock modification or replacement triggers a three-agency review. The City of Huntington Beach Public Works issues an Approval-in-Concept for the structural plans; the Planning Division confirms zoning under the Open Space — Water Recreation designation in Chapter 213 of the certified Local Coastal Program. The California Coastal Commission requires a Coastal Development Permit because the dock sits seaward of the mean high tide line in the Commission's retained jurisdiction. The California State Lands Commission reviews any project touching sovereign-land submerged parcels in the Main Channel. Pre-construction eelgrass and Caulerpa surveys are required for new and replacement docks. After-the-fact applications for unpermitted dock modifications carry up to five times the standard CDP fee under Section 13055 of the Coastal Commission's regulations.",
    },
    {
      q: "What is the bridge clearance in Huntington Harbour?",
      a: "Huntington Harbour Marina lists bridge clearance at approximately 23 feet, which functions as the practical air-draft ceiling for vessels transiting the harbour. Specific clearances are tide-dependent and should be verified directly with the marina or the city for any particular transit plan.",
    },
    {
      q: "What is the pierhead line in the Main Channel?",
      a: "California State Lands Commission staff reports describe the Main Channel pierhead line as 60 feet from the bulkhead. No dock, float, or structure is permitted to extend past that line. The pierhead line is set by city rule and varies by channel; the 60-foot reference applies specifically to the Main Channel.",
    },
    {
      q: "What size boats can I keep at a Huntington Harbour home dock?",
      a: "Vessel size is determined by the specific dock — by slip length, beam clearance, and the bridge air clearance between the slip and open water. Huntington Harbour Marina lists slips ranging from 20 feet to 75 feet for context. For a private home dock, the only reliable answer is to measure the slip directly, pull the city Harbor Permit to confirm the as-built footprint, and match against the vessel's documented length, beam, draft, and air-draft.",
    },
    {
      q: "Do I own the water in front of my Huntington Harbour home?",
      a: "Most Harbour homes are sold fee-simple for the land and structure. The water itself — the channel and the dock footprint — is a separate legal layer. Some channels are privately platted; lots that touch the Main Channel typically involve California State Lands Commission sovereign-land considerations. The dock structure is a permitted improvement, not part of the underlying land grant. Read the title report and ask for the active dock permit before assuming what is and is not included.",
    },
    {
      q: "How much does a Huntington Harbour home cost?",
      a: "Prices range widely by island, water orientation, and dock geometry. Mainland and Cape inventory anchors the entry tier; Davenport, Humboldt, and Gilbert occupy the mid tier; Trinidad waterfront and rare Coral Cay listings sit at the top of the price stack. We do not publish specific median figures on this page because they move quickly. For a private pricing read on a specific island or street, request a CMA through the contact form below.",
    },
    {
      q: "Are seawalls expensive to maintain in Huntington Harbour?",
      a: "Seawall replacement is one of the largest single-line cost items in Harbour ownership. Routine maintenance is modest; full replacement of a wall section can run into six figures and typically requires coordination with neighboring properties and city permitting. We recommend a private engineer's seawall inspection before listing or purchasing any Harbour home with channel frontage.",
    },
    {
      q: "Are short-term rentals allowed in Huntington Harbour?",
      a: "Short-term rental rules vary by lot and by HOA. Some Harbour pockets permit STR; others restrict it through city rule, HOA policy, or both. If a buyer is underwriting a Harbour purchase with assumed STR income, the rule layer should be confirmed in writing before any offer is submitted.",
    },
    {
      q: "Which schools serve Huntington Harbour?",
      a: "The Harbour straddles two school districts depending on the island and street. Specific zoning should be confirmed at the address level rather than assumed by community name. We provide school-zoning verification as part of buyer-side diligence.",
    },
    {
      q: "Does Compass have private listings in Huntington Harbour?",
      a: "Yes. Compass Private Exclusives are a meaningful portion of how Harbour-grade waterfront inventory transacts. Many sellers list to the Compass agent network for an initial 7 to 14 day demand-test window before the home reaches the public MLS. Buyers who work with a Compass agent in the Harbour see this inventory at the same time the rest of the agent network does, which is materially earlier than the public-MLS launch.",
    },
    {
      q: "Why do Ratowsky Group and Compass focus on Huntington Harbour?",
      a: "Craig Ratowsky has worked the Harbour since the 1970s; Justin grew up in Huntington Beach and has run the team's modern marketing layer since 2017. Compass operates the largest agent-network distribution platform in coastal Orange County, which matches the national buyer pool that drives Harbour transactions. The combination is what we use to position waterfront listings and to source off-market inventory for Harbour buyers.",
    },
  ],

  sources: [
    {
      label: "HBMC Chapter 13.32 — Harbors—Generally (pierhead and bulkhead lines)",
      url: "https://ecode360.com/43799647",
    },
    {
      label: "HBMC Chapter 13.36 — Boating Regulations",
      url: "https://ecode360.com/43799694",
    },
    {
      label:
        "City of Huntington Beach — Public Works Harbor Information & Application",
      url:
        "https://www.huntingtonbeachca.gov/government/departments/public_works/development_services/harbor_information.cfm",
    },
    {
      label:
        "HB Zoning and Subdivision Ordinance — Residential Districts (height standards)",
      url: "https://ecode360.com/43804075",
    },
    {
      label:
        "HBMC §17.05 + ZSO §230.84 — Grading and public-improvement triggers for additions",
      url:
        "https://cms3.revize.com/revize/huntingtonbeachca/Documents/Departments/Community%20Development/Building%20Inspections/Permit%20Centre/Applications%20&%20Forms/Additional%20Information%20&%20Forms/HBMC17.05andHBZSO230.84.pdf",
    },
    {
      label:
        "California Coastal Commission — Administrative Permit 5-22-0114 (Foster, Huntington Harbour)",
      url:
        "https://documents.coastal.ca.gov/reports/2022/12/W7b/W7b-12-2022-report.pdf",
    },
    {
      label:
        "California Coastal Commission — Huntington Harbour permit example (2018)",
      url:
        "https://documents.coastal.ca.gov/reports/2018/3/w7a/w7a-3-2018-report.pdf",
    },
    {
      label:
        "California State Lands Commission — Staff Report referencing the Main Channel pierhead line (60 ft, 400-ft channel)",
      url:
        "https://www.slc.ca.gov/wp-content/uploads/sites/355/Meeting_Summaries/2018_Documents/06-21-18/",
    },
    {
      label: "Huntington Harbour Marina — Technical Details (bridge clearance reference)",
      url: "https://www.huntingtonharbourmarina.com/technical-details",
    },
    {
      label: "Huntington Harbour Marina — Slip Sizes and Pricing (20–75 ft slip range)",
      url: "https://www.huntingtonharbourmarina.com/pricing",
    },
  ],

  related: [
    "trinidad-island",
    "davenport-island",
    "gilbert-island",
    "humboldt-island",
    "admiralty-island",
    "seacliff",
    "brightwater",
    "sunset-beach",
  ],

  cta: {
    eyebrow: "Working the Harbour",
    title: "Want a private read on a specific island?",
    body:
      "Tell us the island, the vessel, and the timeline. We will pull the active inventory, the off-market Compass Private Exclusives, and the comp set for the right water orientation — and walk you through what is realistic before you ever schedule a tour.",
    primaryHref: "/contact",
    primaryLabel: "Request a Harbour brief",
  },
};
