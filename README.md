# AppTrainers Materials — web

The AppTrainers curriculum materials as a website, built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build).
Currently hosts the **Build a Checkers Game in Unity** workbook (17 chapters).

Live site: <https://apptrainers-curriculums.github.io/>

## How it works

The workbook content lives as plain Markdown in **`content-src/`**. A small
script (`scripts/import.mjs`) converts each workbook into Starlight doc pages —
one page per chapter — and applies our conventions:

- ` ```csharp:File.cs ` fences → titled code blocks (filename tab + copy button)
- `### Idea / Do it / Test it / Challenge` → icon headings
- `**Goal:** …` → a highlighted "Goal" aside

The generated pages (`src/content/docs/checkers/`,
`src/content/docs/board-foundation/`) are **git-ignored** — they're rebuilt from
`content-src/` on every build, so `content-src/` is the single source of truth.

## Develop

```bash
npm install
npm run dev        # runs the import, then astro dev at :4321
npm run build      # import + astro build -> dist/
npm run preview    # preview the built site
```

Requires **Node 20+**.

## Add / edit a material

1. Drop or edit a workbook Markdown file in `content-src/`.
2. Register it in the `DOCS` array in `scripts/import.mjs` (source file, output
   directory, intro-page title).
3. Add a sidebar group for it in `astro.config.mjs`, and a card on the home page
   (`src/content/docs/index.mdx`).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. Enable it once in the repo:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

This is the org root site (repo name `apptrainers-curriculums.github.io`), so
`astro.config.mjs` sets `base: '/'`. For a custom domain, add a `public/CNAME`
file and keep `base` at root.
