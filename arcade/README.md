# MakeCode Arcade course — web

The AppTrainers Game Development training plan (Microsoft MakeCode Arcade, in Arabic)
as a website: four games and 16 teaching modules. It's a site of its own, with its own
style, served under the org root site at `/arcade/`.

Live site: <https://apptrainers-curriculums.github.io/arcade/>

## How it works

Like the Robotics course, this site isn't built with Astro. **`site/`** is a ready-made
static site, the page and files of the course package as they came:

- `index.html`, `styles.css`: the page
- `app.js`: the curriculum (the `games` array) and the code that renders the page from it
- `assets/`: the logo, the favicon, and the games' thumbnails and simulator captures
- `evidence/`: the source of the four games as reviewed, which each teaching plan links

The package's own README isn't here: this one replaces it.

`build.mjs` copies `site/` to `dist/`, moves `app.js` into the page, and encrypts the
HTML. It needs no install of its own: it uses the StatiCrypt from the npm install at this
repo's root.

The four games, their thumbnails and their code belong to their creators and Microsoft
MakeCode. The plan is AppTrainers' own, and not an official Microsoft curriculum.

## Update the course

Replace the files in `site/` with the new package's (the same files, nothing else), then
commit and push. To change the curriculum itself, edit `games` in `site/app.js`.

If the page's `<script>` tag for `app.js` changes, `build.mjs` stops with an error rather
than leave the curriculum unencrypted: update `APP_TAG` there to match.

## Develop

From this repo's root:

```bash
npm install
COURSE_PW_PYTHON=… node arcade/build.mjs   # -> arcade/dist/
```

To see it as the live site does, it has to be served under `/arcade/`: put `arcade/dist`
in an empty folder as `arcade`, and serve that folder.

## Password protection

The page is **AES-encrypted** with
[StatiCrypt](https://github.com/robinmoisson/staticrypt) at build time, as the other
courses are. Visitors get a password prompt, in Arabic, and enter the password once:
"Remember me" is ticked by default and lasts 30 days.

The password is **never** committed. It comes from the env var **`COURSE_PW_PYTHON`**,
named after the course's first path, `/python/`; renaming it means renaming the secret too:

- **In CI:** add it as a GitHub **organization secret** of AppTrainers-Curriculums, like
  the other passwords (Settings → Secrets and variables → Actions → Manage organization
  secrets → New organization secret), with this repo,
  `apptrainers-curriculums.github.io`, given access to it. The deploy workflow runs in
  **strict mode** (`STATICRYPT_STRICT=1`): without the secret the build **fails**, and
  with it the whole deploy, every other course included. Add the secret before pushing.
- **Locally:** a missing password just skips the encryption, with a warning.

The `SALT` in `build.mjs` is a fixed 32-hex string, **not secret**.

> **Note:** the password protects the **page** only. StatiCrypt encrypts HTML, so anyone
> with the direct URL can open the images and the games' code in `evidence/`. And this
> repo is public, so everything in `site/`, the curriculum in `app.js` included, is
> readable on GitHub, as the other courses' workbooks are.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` at this repo's root. After the
other sites, it runs `build.mjs` and puts `arcade/dist` in the root site's `/arcade/`, and
publishes them all to GitHub Pages.

The page's links are all relative, so moving the site means changing only the workflow's
`cp` line.
