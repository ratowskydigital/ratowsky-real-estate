# Project context for Claude Code

Next.js site for Ratowsky Group at Compass. See `README.md` for setup and
`package.json` for the available scripts.

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
