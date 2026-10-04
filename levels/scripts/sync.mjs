// Copy each level's workbook, and each download, from the Unity project (the
// private repo unity-programmer-curriculum-levels) into levels/content-src/, the
// copies the site is built from. Run it after a workbook changes there, then
// commit and push this repo:
//
//   npm run sync                       # the Unity project next to this repo
//   COURSE_REPO=/path/to/unity-programmer-curriculum-levels npm run sync
//
// Every level is copied, published or not, so a level is ready the day it's
// published.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { levels, downloads } from '../levels.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const REPO = path.join(ROOT, '..');
const COURSE = path.resolve(
  process.env.COURSE_REPO ?? path.join(REPO, '..', 'unity-programmer-curriculum-levels')
);

if (!fs.existsSync(path.join(COURSE, 'Assets', 'Levels'))) {
  throw new Error(`No Unity project at ${COURSE}: set COURSE_REPO to its folder`);
}

for (const item of [...levels, ...downloads]) {
  const from = path.join(COURSE, item.course);
  const to = path.join(REPO, item.src);
  const file = fs.readFileSync(from);
  // PDFs are in Git LFS there: without `git lfs pull`, the file on disk is a
  // small text pointer, and copying that would publish a broken PDF.
  if (file.subarray(0, 64).toString('latin1').startsWith('version https://git-lfs')) {
    throw new Error(`${item.course} is a Git LFS pointer, not the file: run  git lfs pull  in ${COURSE}`);
  }
  const changed = !fs.existsSync(to) || !fs.readFileSync(to).equals(file);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(to, file);
  console.log(`${changed ? 'updated  ' : 'unchanged'}  ${item.src}`);
}
