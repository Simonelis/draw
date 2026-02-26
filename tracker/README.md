# Tracker (Jira-like, append-only)

This folder is a lightweight “Jira equivalent” that lives in git.

**Append-only rule (by convention):**
- Don’t rewrite history.
- If something was wrong, append a correction entry instead of editing earlier text.
- Prefer adding new files over editing old ones.

## Where things live
- Vision: `high_level_plan.md`
- Architecture: `docs/architecture.md`
- Roadmap: `docs/roadmap.md`
- Backlog (editable): `docs/backlog.md`
- Tickets (append-only logs): `tracker/tickets/`
- Sprints (append-only plans + reviews): `tracker/sprints/`
- Work log (optional daily notes): `tracker/worklog/`
- Decisions (append-only ADRs): `tracker/decisions/`

## Ticket workflow (solo-friendly)
- Create a ticket file from `tracker/tickets/TEMPLATE.md`.
- Estimate it in story points (1/2/3/5/8; 8 means “split”).
- Work it in a branch/PR or directly on main (your choice).
- Append progress notes and a completion entry.

## Sprint workflow (optional)
If you want “real sprints”, keep it simple:
- Pick a sprint length (1 week is a good default).
- Pull a small set of tickets (total points you can actually finish).
- At the end, append what shipped + what changed.

