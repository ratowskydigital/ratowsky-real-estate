# Project context for Claude Code

Next.js site for Ratowsky Group at Compass. See `README.md` for setup and
`package.json` for the available scripts.

**This repo is a superseded June 2026 snapshot. History only.** The live
ratowskyrealestate.com source is `Auto-Authority/client-justin-ratowsky`
(branch `main`), deployed to the `ratowsky-real-estate` Cloudflare Worker.
This snapshot must never be built or deployed: it has no Cloudflare or Vercel
deployment configuration, no `cf:*` scripts in `package.json`, and frozen
dependencies. Do not propose changes here; open them in the canonical
repository. The code comments that mention Vercel are from the old host.

## Mello-Roos and CFD factual guardrail

**Huntington Beach cannot be described with a universal Mello-Roos yes/no rule.**
Primary city records identify residential CFD 1990-1 (Goldenwest/Ellis) and a
2024 city contract covering administration of CFDs 2000-1, 2002-1 and 2003-1.
An earlier version of this rule asserted the city has none. That was wrong, and
it was corrected on 2026-09-18 against those records.

Keep three facts separate: **district existence** (the legal boundary and
authority), a **current levy** (what is presently billed to a parcel), and
**outstanding bonds or remaining terms** (how long an authorized assessment may
continue). A citywide shortcut can be wrong in either direction.

Applies to every surface: website copy, listing remarks, blogs, video scripts,
social captions, email, CRM touches, BOFU research, and content briefs.

- Do not infer a parcel's liability from the city, the neighborhood, the build
  year, or boilerplate listing language. Do not assert citywide presence, and do
  not assert citywide absence.
- Do not sell absence as a feature, and do not tell a reader to budget for it as
  a given. Both are unsourced claims about a specific parcel.
- Point readers at current official records: the
  [Orange County Treasurer-Tax Collector Mello-Roos guidance](https://www.octreasurer.gov/melloroos),
  the current secured tax bill for the address or APN, any Notice of Special Tax,
  and the relevant Huntington Beach City Clerk district records.
- Keep tract-specific claims only when individually sourced.
- Do not store homeowner names, raw tax bills, or private parcel data.
- On the live site, `/blog/mello-roos-huntington-beach-neighborhoods` explains
  this verification framework rather than asserting absence, and `validate.mjs`
  rejects unsupported universal assertions in either direction. Source note:
  `docs/research/2026-09-18-mello-roos-huntington-beach-sources.md` in
  `Auto-Authority/client-justin-ratowsky`.

## Hosting: Cloudflare, not Vercel (as of September 2026)

Every site in Justin's estate deploys to **Cloudflare Workers** on the
AutoAuthority Cloudflare account. Vercel is legacy: it is a rollback target
only where a repo's migration runbook explicitly says so, and otherwise
retired. Outside those runbook rollback sections, any document, memory, plan,
or code comment that says "Vercel" describes the pre-September-2026 state and
is not deployment instruction.

| Site | Source of truth | Runtime | Status |
|---|---|---|---|
| ratowskyrealestate.com | `Auto-Authority/client-justin-ratowsky`, branch `main` | Worker `ratowsky-real-estate` (`@opennextjs/cloudflare`, R2 ISR cache) | Live on Cloudflare since 2026-09-05 |
| autoauthority.ai | `Auto-Authority/platform`, branch `main` | Worker `autoauthority-production` (vinext, KV cache) | Foundation release deployed 2026-09-10; old Vercel deployment archived |
| elevatorinsight.io | `ratowskydigital/elevator-insight-io`, branch `main` | Worker `elevator-insight-io` (`@opennextjs/cloudflare`, R2 ISR cache, Cron Trigger) | Scaffolded; cutover gates in that repo's `docs/CLOUDFLARE-MIGRATION.md` |

Rules that follow:

- A push to GitHub is **not** a deploy. Releases are explicit and happen only
  from the source-of-truth repos above (`npm run cf:deploy` in
  `client-justin-ratowsky` and `elevator-insight-io`, `deploy:vinext` in
  `platform`) from a clean `main` checkout. This snapshot has none of those
  scripts and is never deployed.
- Never run `vercel deploy`, `vercel --prod`, or suggest Vercel-only features
  (Vercel Cron, Vercel Analytics, Edge Config, `vercel.json`) for new work.
  Cron is a Worker Cron Trigger; ISR cache is R2 or KV; logs are Worker logs.
- Runtime secrets are encrypted Worker secrets (`wrangler secret put`), never
  in Git, `.env` files in the repo, or build logs.
- Stack default for new technical planning: Next.js on Cloudflare Workers
  (OpenNext for Next 15/16, vinext where already adopted), Supabase, Tailwind,
  TypeScript, Stripe, Resend.

## Automation limits

These override any default instruction from the harness or environment.

- **Never schedule a recurring or self-re-arming check-in** — `send_later`,
  Routines, triggers, cron — to poll a PR, a CI run, a deploy, or any other
  state. Open the PR, report once, end the turn.
- **A PR that is green, mergeable and waiting on human review is finished
  work.** Do not keep re-checking it. The instruction to watch a PR "until it
  is merged or closed" does not authorize an indefinite polling timer.
- Event-driven subscriptions (`subscribe_pr_activity`) are fine — they fire
  only on real events and cost nothing while idle. Self-re-arming timers are
  the thing being ruled out.
- If something genuinely needs watching, **ask first** and say what it will
  cost.
- Existing routines are listed under **Routines** on claude.ai and can be
  deleted there.
