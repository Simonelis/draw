# T-0001: Scaffold web app (dev server + TypeScript)

Created: 2026-02-25
Estimate: 2 points
Owner: simonas
Status history (append-only):
- 2026-02-25: OPEN
- 2026-02-26: IN_PROGRESS
- 2026-02-26: DONE

## Goal
Have a real “app workspace” (not just a double-clicked HTML file) that we can evolve safely.

## Acceptance criteria
- [ ] Repo has a runnable local dev server (hot reload).
- [ ] App opens to an empty editor shell page we can iterate on.

### Update (2026-02-25)
Decision: vanilla JS + ESM modules; no TypeScript required (see `tracker/decisions/ADR-0001_vanilla-js-esm.md`).
- [ ] No TypeScript build step; plain `.js` modules.
- [ ] Hot reload is optional; manual refresh is acceptable for MVP.

## Notes / formulation
This is intentionally boring but unlocks persistence, modularization, and future testing.

## Implementation notes
- Created vanilla JS app scaffold under `app/`:
  - `app/index.html` (ES module entry)
  - `app/styles.css` (shell layout + placeholder editor styles)
  - `app/src/main.js`
  - `app/src/ui-shell.js`
- Added local dev server script:
  - `scripts/dev.sh` (uses `python3 -m http.server`)
- Added usage notes:
  - `app/README.md`
- Smoke check:
  - Server started with `bash scripts/dev.sh 4173`
  - `HEAD /` returned `HTTP/1.0 200 OK`
- Note:
  - Node is currently unusable on this machine due a local `icu4c` mismatch, so the no-dependency Python server keeps momentum without affecting the app runtime architecture.

## Completion evidence (append-only)
- 2026-02-26: Acceptance criteria met for Sprint 1 scaffold (local server + app shell page).

## Log (append-only)
- 2026-02-25 10:05: Ticket created.
- 2026-02-25 10:10: Updated: keep vanilla JS; removed TypeScript requirement.
- 2026-02-26 09:58: Started implementation.
- 2026-02-26 10:00: Added `app/` scaffold (HTML/CSS/ES modules) and `scripts/dev.sh`.
- 2026-02-26 10:02: Verified local server startup and `HEAD /` 200 response on `127.0.0.1:4173`.
- 2026-02-26 10:03: Marked ticket done.
