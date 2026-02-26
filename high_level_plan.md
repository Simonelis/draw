# High-Level Plan (Human-Edited)

EVERYTHING IS HUMAN EDITED (AI can propose edits; human decides what stays).

This document is the single source of truth for the app's vision and what we’re building. Keep it stable and high-level; AI-generated plans (architecture, epics, tasks) should derive from this.

## 1) One-sentence pitch
A local-first app where you trace an apartment plan over a screenshot and get instant renovation estimates that update as you edit (starting with baseboards).

**Definition:** “Up to date” means recalculated on every edit (or on-demand via a button), not vendor-real-time pricing.

## 2) Problem & why now
- We can draw nice architectures or think of nice features but its never clear if we are within the budget or not and how much will this or that addition cost.  
- Its important to stay within the budget or extend the budget in a smart way, good for financial health and good for marital health :D   
- We are in a gold rush in construction and most of the vendors can be accessed online or via api, so its the best time to build.  

## 3) Target users
- Architects exploring the possibilities of new apartments. 
- Future homeowners that have no clue how much things could cost  

## 4) Success criteria
- Trace a typical 2BR plan in **< 5 minutes**.
- Feels **completely lag free** while drawing/dragging/resizing.
- Baseboard length computed within **2%** of a careful manual estimate.
- Estimate recalculation updates in **< 200ms** after an edit (or button press).
- Project works locally; the “database” is a **JSON** file (or local persisted JSON).
- Closing and reopening restores the current drawing automatically.


## 5) Core user journeys (top 3–5)
1. **Open plan → draw it:** User opens a plan with a screenshot background, sets scale (if needed), traces the apartment by drawing aligned rectangles/walls until geometry checks pass.
2. **Examine outputs:** User sees quantities/estimates (start with baseboard length + cost), with a clear breakdown and a “show me on the plan” overlay for debugging.
3. **Reopen → tweak → see updates:** User reopens the same plan later, changes a wall/door dimension, and the numbers update immediately.
4. **Tag rooms (and merge):** User tags each rectangle as belonging to a room type. If a room is made of multiple rectangles (e.g. L-shape), user selects rectangles and merges them into one logical room (e.g. bathroom) so exclusions work (no baseboards in bathrooms/toilets).

## 6) MVP scope (what we will build first)
- **Must-have:**
  - Background image overlay (apartment screenshot) and scale setting.
  - Fast drawing/editing of orthogonal rectangles/walls with snapping/magnet behavior and geometry validation.
  - Room tagging + multi-rectangle room merge (logical room objects).
  - Doors/windows placement + resizing (enough to drive exclusions for calculations).
  - Baseboard quantity + simple estimate model (local price catalog).
  - Persistent save + reopen.
- **Nice-to-have:**
  - Improved door/window UX (types, visuals, snapping affordances).
  - Export (JSON) and a simple report view.
  - Undo/redo and better debugging overlays.
- **Out of scope (explicit non-goals):**
  - ML converting screenshots into vectors (for now).
  - Non-orthogonal/curved walls (for now).
  - Vendor-integrated live quotes (for now).

## 7) Key requirements
- **Functional requirements:**
  - Trace plan from screenshot (no ML dependency).
  - Constrain to 90° geometry initially; enforce closure/validity.
  - Quantities/estimates update continuously with edits (or via a button).
  - Baseboard logic: all relevant wall segments, excluding openings and excluded room types.
  - Doors/windows must be editable and affect quantities.
  - Room tagging + merged rooms (multi-rectangle rooms).
- **Non-functional (performance, reliability, privacy, accessibility):**
  - Local-first, works offline.
  - Snappy interactions; recalculation under 200ms.
  - No network requirement for MVP; user data stays local.

## 8) Constraints & preferences
- **Platforms (web/iOS/Android/desktop):** Web app (local development; MVP can be local-only).
- **Auth (if any):** None for MVP.
- **Data sources / integrations (if any):** Local price catalog (JSON). No vendor integrations for MVP.
- **Budget/time constraints:** Optimize for speed of iteration and correctness of the core loop.

## 9) Open questions / risks
- Scale calibration UX: how does the user set “meters per pixel” reliably from a screenshot?
- Persistence: localStorage vs a real JSON file (file:// constraints vs running a local server).
- Definition of “apartment is complete”: what geometric checks are required and how strict?
- Door/window representation that works with snapping + measurement + exclusions.
- Baseboard rules in edge cases (kitchen cabinets, built-ins, partial walls).

See `docs/drawing_model.md` for drawing model notes derived from the current prototypes.
