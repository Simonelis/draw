# ADR-0001: Vanilla JS + ES Modules (no framework, no TypeScript)

Date: 2026-02-25
Status: Accepted

## Context
The product is a canvas-heavy editor with a relatively small spec list. The main risk is geometry correctness + UX feel, not UI framework complexity.

We want:
- fast iteration
- minimal tooling overhead
- local-first behavior

## Decision
Build the MVP as:
- Plain HTML/CSS/JavaScript (no React/Vue/etc.)
- ES modules (`import`/`export`) for code organization
- No TypeScript in the build pipeline

Optional dev-time guardrails:
- Use `// @ts-check` + JSDoc types in `.js` files for editor type hints (still “vanilla JS” at runtime).

## Consequences
Pros:
- Lowest complexity and fastest iteration.
- Great fit for a canvas editor.

Cons:
- Fewer compile-time checks than TypeScript (mitigated by JSDoc + tests).
- If the app grows significantly, we may revisit TypeScript later.

