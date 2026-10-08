# Researcher-reviewed content workflow

1. ChatGPT prepares a Markdown draft. Never include confidential data in this repository.
2. The researcher verifies facts, citations, dates, permissions, and innovation stage.
3. Add approved content on a feature branch, set `reviewStatus: approved`, and open a pull request. Unreviewed entries remain `draft` and are excluded from site listings and detail routes.
4. The owner reviews and merges the pull request. GitHub Actions publishes the approved main branch. Pull requests only build and check; they do not deploy.

The review flag is editorial metadata, not access control. Enforce approval with repository rules and deployment environment review. Draft source is still visible in a public repository: never commit private data.

## Content locations

- `src/content/projects/*.md`: research projects
- `src/content/innovation/*.md`: laboratory innovation
- `src/content/publications/*.md`: verified citations
- `src/content/news/*.md`: news and activities
- `src/data/pages.ts`: static page text
- `src/lib/site.ts`: identity, navigation, and verified email

Use stable lowercase hyphenated filenames: they become URLs. Source content is independent of layouts.

## Markdown template

```yaml
---
title: A verified descriptive title
summary: One or two factual sentences.
category: Environmental health
locale: en
reviewStatus: draft
placeholder: false
featured: false
# date: 2026-10-08 # Only use a verified date.
---
```

Add headings and paragraphs below the frontmatter. News is sorted newest first, undated entries last. Up to three approved featured projects appear on the homepage.

Innovation also requires `stage: Concept`, `stage: Work in progress`, or `stage: Validated outcome`. Validated outcomes require an `evidence:` field with a verifiable reference, plus scope, limitations, and intended use in the body. The schema checks presence; the researcher must assess evidence quality.

Publications need checked authors, title, journal, year, volume/pages, and a DOI or publisher link in the body. Never invent a citation to fill the layout.

V1 samples use `placeholder: true` and are approved for display as examples only. They are not verified scientific claims. Replace or remove them before formal launch if desired.

## Thai expansion

Astro declares `en` (unprefixed) and `th`; collections have a validated locale field. Current routes display English only. Add translated UI dictionaries and `/th/` routes filtering Thai entries, update HTML language and alternate-language links, and publish translations only after review. A language switcher is intentionally deferred until translations exist.
