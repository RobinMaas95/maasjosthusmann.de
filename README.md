# maasjosthusmann.de

My personal website.

[![CI](https://github.com/RobinMaas95/maasjosthusmann.de/actions/workflows/ci.yml/badge.svg)](https://github.com/RobinMaas95/maasjosthusmann.de/actions/workflows/ci.yml)

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) with `@sveltejs/adapter-static` — the site is fully prerendered to static files in `dist/`
- Hand-rolled HTML/CSS, no UI framework, English and German copy in one locale map
- Vitest unit tests, Playwright end-to-end tests
- Multi-stage Docker build: Node build stage, `nginx:alpine` serving the static output

## Develop

```bash
npm ci
npm run dev        # local dev server
npm run check      # svelte-check (types + a11y)
npm run test:unit  # vitest
npm run test:e2e   # playwright (builds and previews the site)
npm run build      # static output in dist/
```

## Docker

```bash
docker build -t maasjosthusmann.de .
docker run --rm -p 8080:80 maasjosthusmann.de
# http://localhost:8080
```

## Release process

Releases are automated with [release-please](https://github.com/googleapis/release-please) and follow [Conventional Commits](https://www.conventionalcommits.org/):

1. Merge to `main` using conventional commit messages (`feat:`, `fix:`, `copy:`, `chore:`, …).
2. release-please maintains a release PR with the next semver version and a generated changelog.
3. Merging that PR tags the release and publishes a multi-arch Docker image to GHCR:
   `ghcr.io/robinmaas95/maasjosthusmann.de:maasjosthusmann.de-v<version>` (the full release tag) and `:latest`.

Note: `feat:`/`fix:` commits drive version bumps; `copy:` changes appear in the changelog but do not trigger a release on their own — use `feat:` or `fix:` for content changes that should ship.
