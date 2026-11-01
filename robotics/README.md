# Robotics course — web

The AppTrainers Robotics course (Arduino, for beginners, in Arabic) as a website:
ten lessons and the final Smart Parking Garage project. It's a site of its own, with
its own style, served under the org root site at `/robotics/`.

Live site: <https://apptrainers-curriculums.github.io/robotics/>

## How it works

Unlike the materials and the levels, this site isn't built with Astro. **`site/`**
is a ready-made static site, the page and files of the course package as they came:

- `index.html`, `website.css`, `website.js`: the page, with the lessons, search,
  and code copying
- `assets/`: the logo, the favicon, and the project diagram
- `Arduino/` and `ملفات-Arduino.zip`: the ten sketches, one by one and together
- `المنهج ودليل المدرّب.docx` and `كراسة المتدرّب.docx`: the trainer guide and the
  student workbook

The package's own notes and its two stand-alone HTML documents aren't here: the page
doesn't link them.

`build.mjs` copies `site/` to `dist/` and encrypts the HTML. It needs no install of
its own: it uses the StatiCrypt from the npm install at this repo's root.

## Update the course

Replace the files in `site/` with the new package's (the same files, nothing else),
then commit and push.

## Develop

From this repo's root:

```bash
npm install
COURSE_PW_ROBOTICS=… node robotics/build.mjs   # -> robotics/dist/
```

To see it as the live site does, it has to be served under `/robotics/`: put
`robotics/dist` in an empty folder as `robotics`, and serve that folder.

## Password protection

The pages are **AES-encrypted** with
[StatiCrypt](https://github.com/robinmoisson/staticrypt) at build time, as the
materials and the levels are. Visitors get a password prompt, in Arabic, and enter the
password once: "Remember me" is ticked by default and lasts 30 days.

The password is **never** committed. It comes from the env var **`COURSE_PW_ROBOTICS`**:

- **In CI:** add it as a GitHub **organization secret** of AppTrainers-Curriculums, like
  the other passwords (Settings → Secrets and variables → Actions → Manage organization
  secrets → New organization secret), with this repo,
  `apptrainers-curriculums.github.io`, given access to it. The deploy workflow runs in
  **strict mode** (`STATICRYPT_STRICT=1`): without the secret the build **fails**, and
  with it the whole deploy, materials and levels included. Add the secret before pushing.
- **Locally:** a missing password just skips the encryption, with a warning.

The `SALT` in `build.mjs` is a fixed 32-hex string, **not secret**.

> **Note:** the password protects the **pages** only, and the page holds the trainers'
> answer keys. StatiCrypt encrypts HTML, so anyone with the direct URL can download the
> sketches and both DOCX files, including the trainer guide. And this repo is public, so
> everything in `site/`, the page's answer keys included, is readable on GitHub, as the
> materials' and levels' workbooks are.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` at this repo's root. After the
materials and the levels, it runs `build.mjs` and puts `robotics/dist` in the root site's
`/robotics/`, and publishes them all to GitHub Pages.

The page's links are all relative, so moving the site means changing only the workflow's
`cp` line.
