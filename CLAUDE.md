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
