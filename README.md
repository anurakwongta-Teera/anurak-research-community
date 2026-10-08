# Anurak Wongta | Research & Community

A responsive static Astro website. **Practical science. Real-world impact.**

## Local setup

Use Node.js 22.12+ and npm. CI uses Node 22.

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/anurak-research-community/`.

```sh
npm run check
npm run build
npm test
npm run preview
```

Output is in `dist/`. No database, paid API, authentication, analytics, or runtime backend. System fonts, local CSS, locally hosted licensed photographs, and original SVG icons avoid runtime external font/image dependencies. Photographs are clearly labeled temporary stock scenes, not the researcher's actual team or activities. Credits and replacement instructions are in [public/images/README.md](public/images/README.md).

## Architecture

Eight main pages, collection detail pages, and a 404 page. Shared layout/components live in `src/layouts` and `src/components`; styles in `src/styles`; page copy in `src/data`; identity in `src/lib/site.ts`; Markdown in `src/content`; schemas in `src/content.config.ts`.

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for templates, review workflow, and Thai expansion. Drafts are excluded from the website but are not private in a public repository. Verified publications, biography/team details, and contact details must be supplied by the researcher.

## GitHub Pages

Configured site: `https://anurakwongta-Teera.github.io`; base: `/anurak-research-community`.

Expected URL: https://anurakwongta-Teera.github.io/anurak-research-community/

The workflow checks pull requests. Only pushes to `main` deploy. It never approves or merges a pull request automatically.

### Owner setup

1. Select **Settings → Pages → Build and deployment → GitHub Actions**. Use a public repository for free Pages hosting on a free account.
2. Ensure Actions permits the included checkout, setup-node, upload-pages-artifact, and deploy-pages actions.
3. Protect `main` with required pull requests, researcher review where supported, and the `build` check. Authors cannot approve their own PR: designate a reviewer or use deployment environment approval.
4. In **Settings → Environments → github-pages**, restrict deployment to `main` and configure a required researcher reviewer if available. This enforces publication approval; Markdown flags alone do not.
5. Review placeholders and add an approved email in `src/lib/site.ts`. The contact page remains explicit about missing contact details until then.
6. Merge the reviewed PR and confirm the deployment in Actions. No custom domain is required.

Configuration follows the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/). If the repository name or domain changes, update `site`, `base`, and the output-check base together.

## Design and checks

Forest green, deep navy, white, sans-serif headings, a photographic fieldwork hero, three equally prominent core areas, image-led project/update cards, and dedicated laboratory/community sections. Includes semantic landmarks, skip link, visible keyboard focus, native mobile menu, active navigation, canonical metadata, and no client JavaScript. Existing Astro routes and collections are unchanged. English is complete; Thai architecture is prepared, with translations/routes deferred.

`npm run check` validates Astro and TypeScript; `npm run build` validates collection schemas; `npm test` checks all required routes, internal links/assets, headings, language, and draft exclusion.
