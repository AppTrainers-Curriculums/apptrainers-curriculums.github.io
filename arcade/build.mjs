// Builds the MakeCode Arcade course for /arcade/: copies the ready-made static site in
// site/ to dist/, then AES-encrypts its page with StatiCrypt so visitors need the
// course's password to read it. Same lock as the Robotics course (see
// robotics/build.mjs), run from this repo's root, whose npm install has StatiCrypt.
//
// The password comes from the env var COURSE_PW_PYTHON: the secret keeps the name the
// course's first path gave it, /python/. Locally, a missing password
// just leaves the page unencrypted (with a warning). In CI we set STATICRYPT_STRICT=1
// so a missing password FAILS the build, which prevents ever deploying the course
// unlocked.
//
// StatiCrypt only encrypts HTML: the images and game code in site/ stay readable by
// direct URL.
import { execFileSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const SITE = path.join(HERE, 'site');
const DIST = path.join(HERE, 'dist');
const STRICT = process.env.STATICRYPT_STRICT === '1';
const PASSWORD_VAR = 'COURSE_PW_PYTHON';
const SALT = '1f8e92f5849176bf3d257ec0a60f1b02'; // fixed and NOT secret: keeps "Remember me" working across builds
const REMEMBER_DAYS = 30; // "Remember me" keeps the course unlocked in the browser

fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(SITE, DIST, { recursive: true });

// The whole curriculum is in app.js, which the page renders from, and a .js file
// wouldn't be encrypted: it would stay readable at /arcade/app.js. So it moves into the
// page, at the end of <body> because it needs the DOM, and isn't served on its own.
const PAGE = path.join(DIST, 'index.html');
const APP = path.join(DIST, 'app.js');
const APP_TAG = '<script defer src="app.js"></script>';
const page = fs.readFileSync(PAGE, 'utf8');
const app = fs.readFileSync(APP, 'utf8');
if (!page.includes(APP_TAG) || app.includes('</script')) {
  console.error('✗ Could not move app.js into index.html: the page or the script has changed.');
  process.exit(1);
}
fs.writeFileSync(PAGE, page.replace(APP_TAG, '').replace('</body>', () => `<script>${app}</script></body>`));
fs.rmSync(APP);

const password = process.env[PASSWORD_VAR];
if (!password) {
  const msg = `No ${PASSWORD_VAR} set — arcade will NOT be encrypted.`;
  if (STRICT) {
    console.error(`✗ ${msg}`);
    process.exit(1);
  }
  console.warn(`⚠ ${msg} (set it to protect this course)`);
  process.exit(0);
}

// Encrypt into a temp dir, then copy the encrypted pages back over dist/.
// StatiCrypt writes to <outDir>/<basename(input)>/..., so files land in tmp/dist/.
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'enc-arcade-'));
execFileSync(
  'npx',
  [
    'staticrypt', DIST,
    '-r',                         // recurse, so a page added to site/ is locked too
    '-d', tmp,                    // output dir
    '-p', password,
    '-s', SALT,
    '-c', 'false',                // don't read/write a .staticrypt.json config
    '--remember', String(REMEMBER_DAYS),
    '--short',                    // don't prompt about password length
    // The course is in Arabic, so its password prompt is too.
    '--template-title', 'خطة Game Development التدريبية',
    '--template-instructions', 'هذا المحتوى محمي بكلمة مرور. أدخل كلمة المرور التي حصلت عليها.',
    '--template-placeholder', 'كلمة المرور',
    '--template-remember', 'تذكّرني',
    '--template-button', 'فتح',
    '--template-error', 'كلمة المرور غير صحيحة',
    '--template-toggle-show', 'إظهار كلمة المرور',
    '--template-toggle-hide', 'إخفاء كلمة المرور',
    '--template-color-primary', '#EC4A5A',
    '--template-color-secondary', '#3E4655',
  ],
  { cwd: ROOT, stdio: 'inherit' }
);
fs.cpSync(path.join(tmp, 'dist'), DIST, { recursive: true });
fs.rmSync(tmp, { recursive: true, force: true });

// Tick "Remember me" by default, so a visitor enters the password once, and set the
// prompt right to left, moving what StatiCrypt pins to the right over to the left. The
// decrypted page brings its own <html lang="ar" dir="rtl">.
const RTL_PROMPT = `<style>
  .staticrypt-toggle-password-visibility { right: auto; left: 0; }
  .staticrypt-remember input[type="checkbox"] { margin-right: 0; margin-left: 1em; }
</style>
</head>`;
const REMEMBER_OFF = 'id="staticrypt-remember" type="checkbox" name="remember" />';
const REMEMBER_ON = 'id="staticrypt-remember" type="checkbox" name="remember" checked />';
for (const entry of fs.readdirSync(DIST, { recursive: true })) {
  if (!entry.endsWith('.html')) continue;
  const file = path.join(DIST, entry);
  const html = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(
    file,
    html
      .replaceAll(REMEMBER_OFF, REMEMBER_ON)
      .replace('<html class="staticrypt-html">', '<html lang="ar" dir="rtl" class="staticrypt-html">')
      .replace('</head>', RTL_PROMPT)
  );
}
console.log('🔒 encrypted arcade');
