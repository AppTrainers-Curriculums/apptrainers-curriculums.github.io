# AppTrainers Materials — web

The AppTrainers curriculum materials as a website, built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build).
Hosts copy-along Unity game workbooks (Checkers, Top-Down Tank Survival, …).

Live site: <https://apptrainers-curriculums.github.io/>

## How it works

Each workbook lives as plain Markdown in **`content-src/`**. A small script
(`scripts/import.mjs`) converts each one into Starlight doc pages — one page per
chapter — and applies our conventions:

- ` ```csharp:File.cs ` fences → titled code blocks (filename tab + copy button)
- `### Idea / Do it / Test it / Challenge` → icon headings
- `**Goal:** …` → a highlighted "Goal" aside

**`materials.config.mjs`** is the single source of truth: it lists every
workbook and drives the generated pages, the sidebar, and the home-page cards.

The generated pages under `src/content/docs/<slug>/` are **git-ignored** — they
are rebuilt from `content-src/` on every build.

## Develop

```bash
npm install
npm run dev        # runs the import, then astro dev at :4321
npm run build      # import + astro build + encrypt -> dist/
npm run preview    # preview the built site
```

Requires **Node 20+**.

## Add / edit a material

1. Drop or edit a workbook Markdown file in `content-src/`.
2. Add an entry to the `materials` array in **`materials.config.mjs`** (slug,
   source file, sidebar label, home-card text, `published`, `protected`, `salt`).

That one entry wires up the pages, the sidebar group, and the home card.

### Show / hide a material

Flip `published` in `materials.config.mjs`:

- `published: true` → built into the site.
- `published: false` → left out of the build entirely (not on the site).

Rebuild and push to apply.

## Password-protecting a course

Set `protected: true` on a material and its built pages are **AES-encrypted**
with [StatiCrypt](https://github.com/robinmoisson/staticrypt) at build time
(`scripts/encrypt.mjs`). Visitors get a branded password prompt and must enter
the course's password to read it — real protection, no backend. "Remember me"
keeps a course unlocked in the browser, so a student enters the password once.

Passwords are **never** committed. Each protected course reads its password from
an environment variable **`COURSE_PW_<SLUG>`** (slug uppercased, `-` → `_`):

| Course          | Env var / secret          |
| --------------- | ------------------------- |
| `checkers`      | `COURSE_PW_CHECKERS`      |
| `tank-survival` | `COURSE_PW_TANK_SURVIVAL` |

- **In CI:** add each as a GitHub **repository secret**
  (Settings → Secrets and variables → Actions → New repository secret). The
  deploy workflow passes them to the build and runs in **strict mode**
  (`STATICRYPT_STRICT=1`): if a protected course has no password, the build
  **fails** — so a locked course is never accidentally deployed unlocked.
- **Locally:** pass them inline, e.g.
  `COURSE_PW_CHECKERS=… COURSE_PW_TANK_SURVIVAL=… npm run build`. A missing
  password locally just skips (leaves that course unencrypted) with a warning.

To run a course for students: keep it `published: true` / `protected: true` and
simply **give students the password**. Rotate it by changing the secret.

The `salt` per course is a fixed 32-hex string — **not secret**. It keeps builds
reproducible and lets "Remember me" work across a course's chapters.

> **Note:** site search (Pagefind) is disabled, because the search index is built
> from the *plaintext* pages and would leak protected content.

> **Note:** hiding/encrypting affects the **website**. This repo is public, so
> the source Markdown in `content-src/` is still readable on GitHub. To hide the
> source too, make the repo private.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Protected courses need their `COURSE_PW_*` secrets
set first, or the strict build will fail.

This is the org root site (repo `apptrainers-curriculums.github.io`), so
`astro.config.mjs` sets `base: '/'`. For a custom domain, add a `public/CNAME`
file and keep `base` at root.
