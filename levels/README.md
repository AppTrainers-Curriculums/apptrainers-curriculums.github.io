# Unity Programmer Curriculum — web

The curriculum levels as a website, built with
[Astro](https://astro.build) + [Starlight](https://starlight.astro.build), the
same way as the materials site around it. It's a site of its own, with its own
style, served under the org root site at `/levels/`.

Live site: <https://apptrainers-curriculums.github.io/levels/>

## How it works

Each level's workbook is written in the Unity project, the **private** repo
`unity-programmer-curriculum-levels`, at
**`Assets/Levels/LevelN/Docs~/workbook/workbook.md`**: the same file the PDF is
built from. This repo is public (GitHub Pages needs that), so it keeps a copy of
each workbook in **`levels/content-src/<slug>.md`**, and the site is built from
the copy. **`npm run sync`** (`scripts/sync.mjs`) refreshes every copy from the
Unity project next to this repo (or the one in `COURSE_REPO`): after a workbook
changes there, sync, commit and push here, and the site follows.

> **Note:** the copies in `content-src/` are readable on GitHub, as the
> materials' workbooks are. The site's password protects the pages, not this
> repo's source.

`scripts/import.mjs` converts each workbook into Starlight doc pages, one page
per chapter, in the book's teaching order, and applies our conventions:

- `# Part N — Title` → a sidebar group (Part 0 is the **Before You Start** page)
- `## Chapter N — Title` → a build chapter page, numbered in the sidebar
- `## C# N — Title` → a C# Concept page, with a slate **C# N** badge
- any other `##` after Part 0 → its own page (Part 5's questions, answers,
  cheat sheet, checklist)
- ` ```csharp:File.cs ` fences → titled code blocks (filename tab + copy button)
- a plain fence straight under a C# example, or introduced by a paragraph that
  mentions the Console → a **Console** box (what the code prints)
- `### Idea / Do it / Test it / Challenge` → icon headings
- `**Goal:** …` → a highlighted "Goal" aside
- `> **Tip:**` / `> **Note:**` / `> **Watch out:**` → tip / note / caution asides

`scripts/workbook.mjs` does the splitting. The sidebar in `astro.config.mjs`
reads the same parse, so pages and navigation always agree.

Each level also gets a generated **"All the Code"** page
(`scripts/code-page.mjs`) at **`/code/<slug>/`**: every C# block from the
**build chapters**, in chapter order, with the prose stripped out, so a student
can copy a step straight into Unity. The C# Concept examples are left out: they
are for trying out, not part of the game. Blocks are tabbed with their filename
(a whole file the workbook leaves unnamed is named after its class), and marked
**· snippet** when the block is a piece that goes inside an existing file.

These pages are **unlisted**: no sidebar entry, no link anywhere on the site, and
`noindex, nofollow` so they stay out of search results. You hand out the URL —
`/code/<slug>/` — to whoever should have the code.

They live **outside** the level directories on purpose. `encrypt.mjs` locks
`dist/<slug>/`, so a code page inside a level would demand the level password;
at `/code/<slug>/` it stays readable. That means **the C# of a protected level
is public**: hand out the code without handing out the workbook.

**`levels.config.mjs`** is the single source of truth: it lists every level and
drives the generated pages, the sidebar, and the home-page cards.

The generated pages under `src/content/docs/` (everything except `index.mdx`)
are **git-ignored**: they are rebuilt from the workbooks on every dev / build.

## Downloads

The home page also links files the site serves as they are, listed in
`downloads` in `levels.config.mjs`. Today that's the curriculum overview,
`Assets/Levels/Unity-Programmer-Curriculum-Levels.pdf` in the Unity project.
`npm run sync` copies it into `content-src/files/`, and `scripts/import.mjs`
copies that into `public/files/` (git-ignored) on every build: replace the PDF in
the Unity project, sync, push, and the site follows. Downloads are **public**,
never password-protected: don't list a trainer-only file.

PDFs are in Git LFS in the Unity project: run `git lfs pull` there first, or the
sync stops rather than copy a pointer file.

## Develop

```bash
cd levels
npm install
npm run sync       # copy the workbooks and the PDF from the Unity project
npm run dev        # import, then astro dev at :4321/levels/
npm run build      # import + astro build + encrypt -> levels/dist/
npm run preview    # preview the built site
```

Requires **Node 20+**. After editing a workbook while `npm run dev` is running,
run `npm run sync` and `npm run import` (or restart dev) to pick up the change.

## Add a level

Every new game's book goes on the site this way, here, not in the Unity project.

1. Write the level's workbook in the Unity project, at
   `Assets/Levels/LevelN/Docs~/workbook/workbook.md`, with the same headings as
   Level 0 (`# Part N — …`, `## Chapter N — …`, `## C# N — …`).
2. Add an entry to the `levels` array in **`levels.config.mjs`**: slug, `src`
   (`levels/content-src/<slug>.md`), `course` (the workbook's path in the Unity
   project), sidebar label, home-card text, `published`, `protected`, and a new
   `salt` (`openssl rand -hex 16`).
3. `npm run sync`, so `content-src/` has its copy.
4. If it's protected, add its `COURSE_PW_<SLUG>` **organization secret** (see
   below), and pass it in `.github/workflows/deploy.yml` (at this repo's root)
   next to `COURSE_PW_LEVEL_0`.
5. Commit and push.

That one entry wires up the pages, the sidebar group, and the home card.

### Show / hide a level

Flip `published` in `levels.config.mjs`:

- `published: true` → built into the site.
- `published: false` → left out of the build entirely (not on the site).

Commit and push to apply.

## Password-protecting a level

Set `protected: true` on a level and its built pages are **AES-encrypted** with
[StatiCrypt](https://github.com/robinmoisson/staticrypt) at build time
(`scripts/encrypt.mjs`). Visitors get a branded password prompt and must enter
the level's password to read it. "Remember me" is ticked by default, so a
student enters the password once per level.

Passwords are **never** committed. Each protected level reads its password from
an environment variable **`COURSE_PW_<SLUG>`** (slug uppercased, `-` → `_`):

| Level                   | Env var / secret                  |
| ----------------------- | --------------------------------- |
| `level-0`               | `COURSE_PW_LEVEL_0`               |
| `level-1`               | `COURSE_PW_LEVEL_1`               |
| `level-2-mini-golf`     | `COURSE_PW_LEVEL_2_MINI_GOLF`     |
| `level-2-space-shooter` | `COURSE_PW_LEVEL_2_SPACE_SHOOTER` |
| `level-2-tank-arena`    | `COURSE_PW_LEVEL_2_TANK_ARENA`    |
| `level-3-knight-run`    | `COURSE_PW_LEVEL_3_KNIGHT_RUN`    |
| `level-3-crypt-keys`    | `COURSE_PW_LEVEL_3_CRYPT_KEYS`    |
| `level-3-gate-guard`    | `COURSE_PW_LEVEL_3_GATE_GUARD`    |
| `level-4-arcane-duel`   | `COURSE_PW_LEVEL_4_ARCANE_DUEL`   |

Level 2 has three books, one per game (Mini Golf, Space Shooter, Tank Arena),
each its own entry in `levels.config.mjs` with its own secret. The three can
share a password: give each secret the same value. Their `workbook.md` files are
assembled from each game's `book.md` and the shared C# Concept chapters (see
`Assets/Levels/Level2-Shared/README.md`): after editing a shared chapter,
re-assemble them in the Unity project, then sync and push here, or the site keeps
the old text.

Level 3 works the same way, from `Assets/Levels/Level3-Shared`. Its three books,
Knight Run, Crypt Keys and Gate Guard, are published, each locked with its own
secret: `COURSE_PW_LEVEL_3_KNIGHT_RUN`, `COURSE_PW_LEVEL_3_CRYPT_KEYS` and
`COURSE_PW_LEVEL_3_GATE_GUARD`. Add a new book's secret before setting its
`published: true`.

Level 4 works the same way, from `Assets/Levels/Level4-Shared`. Its first book,
Arcane Duel, is published, locked with `COURSE_PW_LEVEL_4_ARCANE_DUEL` (Moayad added
the secret on 3 October 2026).

- **In CI:** add each as a GitHub **organization secret** of
  AppTrainers-Curriculums, like the materials' passwords (Settings → Secrets and
  variables → Actions → Manage organization secrets → New organization secret),
  with this repo, `apptrainers-curriculums.github.io`, given access to it. The
  deploy workflow runs in **strict mode** (`STATICRYPT_STRICT=1`): if a
  protected level has no password, the build **fails**, so a locked level is
  never accidentally deployed unlocked.
- **Locally:** `COURSE_PW_LEVEL_0=… COURSE_PW_LEVEL_1=… npm run build`. A missing password locally
  just skips (leaves that level unencrypted) with a warning.

The `salt` per level is a fixed 32-hex string — **not secret**. It keeps builds
reproducible and lets "Remember me" work across a level's chapters.

> **Note:** site search (Pagefind) is disabled, because the search index is built
> from the *plaintext* pages and would leak protected content.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` at this repo's root. It
builds the materials site, then this one on its own (with its own
`package.json`, style and passwords), and puts this one's `dist/` in the root
site's `/levels/`, and publishes both to GitHub Pages. A change to a workbook in
the Unity project reaches the site only when you sync it here and push.

The levels' `COURSE_PW_*` secrets are organization secrets, next to the
materials' (added 4 October 2026). A protected level without one fails the strict
build, and with it the whole deploy.

`astro.config.mjs` sets `base: '/levels/'`: this site lives in the root site's
`/levels/` folder. Its links are built from the base, so moving it means
changing the base and the workflow's `cp` line, nothing else.

Until 4 October 2026 the site lived in the Unity project's repo, in `web/`, at
`/unity-programmer-curriculum-levels/`. It moved here when that repo became
private: GitHub Pages needs a public repo.
