# AGENTS.md

Project-specific guidance for AI coding agents.

## Project

Personal website of Robin Maasjosthusmann. SvelteKit with `@sveltejs/adapter-static` — the whole site prerenders to static files in `dist/`. Single page plus legal routes, hand-rolled HTML/CSS with no UI framework or component library; keep it that way. English and German copy lives in `src/lib/copy.ts`, shared between the main page and legal routes via a Svelte store in `src/lib/locale.ts`.

Note: the SvelteKit/adapter configuration is inline in `vite.config.ts` (there is no `svelte.config.js`). `legal-static/` is the static-assets directory (`files.assets`); contains `robots.txt` and image assets, copied into `dist/` at build time. Legal pages (impressum, privacy) are proper SvelteKit routes at `src/routes/impressum/` and `src/routes/privacy/`, importing legal HTML from `src/lib/legal/`. `dist/` is generated and gitignored — never edit it directly.

## Commands

- `npm run check` — svelte-check; must pass with 0 errors before committing
- `npm run test:unit` — vitest
- `npm run test:e2e` — Playwright (builds and previews the site)
- `npm run build` — static output in `dist/`

## Conventions

- Conventional Commits for everything; releases are automated via release-please.
- `feat:`/`fix:` drive version bumps and redeploys. `copy:` marks content edits that belong in the changelog but do not ship on their own.
- Keep EN and DE copy in `src/lib/copy.ts` in sync when editing text.
- CI runs check, unit tests, e2e, and a Docker build on every push/PR. Releases build a Docker image to GHCR and redeploy via the Dokploy API. See `README.md` for the full pipeline.

## Agent skills

### Issue tracker

Issues and PRDs are tracked in this repository's GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Canonical triage roles use the default GitHub label strings. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. See `docs/agents/domain.md`.
