# maasjosthusmann.de

Personal website of Robin Maasjosthusmann — Platform & AI Engineer, independent consultant.

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

## Deployment

The site runs as a static container behind [Dokploy](https://dokploy.com):

1. The first release publishes the image to GHCR. Set the package to public (Package settings → Change visibility), or add GHCR credentials in Dokploy → Registry instead.
2. In Dokploy, create an Application with provider **Docker**, image `ghcr.io/robinmaas95/maasjosthusmann.de:latest`, container port `80`, and your domain.
3. Generate an API token in your Dokploy profile settings, then find the application ID:
   `curl -H "x-api-key: <token>" https://<dokploy-host>/api/project.all`
4. Add three repository secrets (Settings → Secrets and variables → Actions):
   - `DOKPLOY_URL` — e.g. `https://dokploy.example.com`
   - `DOKPLOY_API_KEY` — the API token
   - `DOKPLOY_APPLICATION_ID` — the application ID
5. If your Dokploy instance sits behind **Cloudflare Access**, also create a service token (Zero Trust → Access → Service Auth → Service Tokens) and add it to the application's policies, then store it as `CF_ACCESS_CLIENT_ID` and `CF_ACCESS_CLIENT_SECRET`. The deploy step sends them as headers; without Access they can stay empty.

The release workflow calls `POST /api/application.deploy` after publishing a new image, so every release redeploys automatically.

### Dev slots

Up to three parallel dev versions run on their own subdomains:

- `alpha.maasjosthusmann.de` ← image tag `:alpha`
- `beta.maasjosthusmann.de` ← image tag `:beta`
- `gamma.maasjosthusmann.de` ← image tag `:gamma`

Setup per slot:

1. In Dokploy, create an Application with provider **Docker**, image `ghcr.io/robinmaas95/maasjosthusmann.de:<slot>`, container port `80`, and the slot's subdomain.
2. Store the application ID as repository secret `DOKPLOY_APPLICATION_ID_ALPHA` / `_BETA` / `_GAMMA`.

Deploy via **Actions → Deploy dev slot → Run workflow**: pick the branch to build from, choose a slot, and leave the tag empty to build from source — or pass an existing image tag (e.g. `maasjosthusmann.de-v3.1.0`) to retag it onto the slot without rebuilding. The workflow builds and pushes the `:<slot>` image and redeploys that application. Slots without a configured secret are skipped.

Alternatively, pushing to a branch named `alpha`, `beta`, or `gamma` deploys that slot directly.
