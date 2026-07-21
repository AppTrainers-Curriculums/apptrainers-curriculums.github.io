// Convert the AppTrainers workbook markdown (from content-src/) into Starlight
// doc pages under src/content/docs/<dir>/, one page per chapter + an intro page.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { materials } from '../materials.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'content-src');
const OUT = path.join(ROOT, 'src', 'content', 'docs');

// Only build the published materials; each entry maps to { src, dir, introTitle }.
const DOCS = materials
  .filter((m) => m.published)
  .map((m) => ({ src: m.src, dir: m.slug, introTitle: m.introTitle || 'Before You Start' }));

const stripFrontMatter = (md) => md.replace(/^---\n[\s\S]*?\n---\n?/, '');
const stripMd = (s) => s.replace(/[`*]/g, '').trim();
const slug = (s) => stripMd(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const yamlEscape = (s) => s.replace(/"/g, '\\"');

// Turn our custom markdown flavour into Starlight-friendly markdown.
function transform(text) {
  // ```lang:File.cs  ->  ```lang title="File.cs"  (filename tab + copy button)
  text = text.replace(/^```([A-Za-z0-9]+):(.+)$/gm, (_, lang, file) => `\`\`\`${lang} title="${file.trim()}"`);

  // Beat headings get an icon.
  text = text.replace(/^###\s+Idea\b/gm, '### 💡 Idea');
  text = text.replace(/^###\s+Do it/gm, '### ⌨️ Do it');
  text = text.replace(/^###\s+Test it/gm, '### ▶️ Test it');
  text = text.replace(/^###\s+Challenge\b/gm, '### 🧠 Challenge');

  // **Goal:** <paragraph>  ->  :::tip[Goal] aside
  text = text.replace(/^\*\*Goal:\*\*\s*([\s\S]*?)(?=\n\n)/m,
    (_, body) => `:::tip[Goal]\n${body.trim()}\n:::`);

  return text.trim() + '\n';
}

function page(title, order, body) {
  return `---\ntitle: "${yamlEscape(title)}"\nsidebar:\n  order: ${order}\n---\n\n${transform(body)}`;
}

function build(doc) {
  const md = stripFrontMatter(fs.readFileSync(path.join(SRC, doc.src), 'utf8'));
  const outDir = path.join(OUT, doc.dir);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const lines = md.split('\n');
  let introLines = [];
  let chapters = [];       // { num, title, lines }
  let cur = null;
  let inIntro = true;

  for (const line of lines) {
    const chapter = line.match(/^##\s+Chapter\s+(\d+)\s*[—-]\s*(.+)$/i);
    if (chapter) {
      inIntro = false;
      cur = { num: Number(chapter[1]), title: stripMd(chapter[2]), lines: [] };
      chapters.push(cur);
      continue;                       // heading becomes the page title
    }
    if (/^#\s+/.test(line)) continue; // drop Part dividers
    (inIntro ? introLines : cur.lines).push(line);
  }

  let count = 0;
  const write = (order, title, slugText, body) => {
    fs.writeFileSync(path.join(outDir, `${slug(slugText)}.md`), page(title, order, body));
    count++;
  };

  write(0, doc.introTitle, doc.introTitle, introLines.join('\n'));
  for (const c of chapters) write(c.num, `${c.num}. ${c.title}`, c.title, c.lines.join('\n'));

  console.log(`${doc.dir}: ${count} pages`);
}

fs.mkdirSync(OUT, { recursive: true });
// Remove any stale pages for materials that are now unpublished.
materials
  .filter((m) => !m.published)
  .forEach((m) => fs.rmSync(path.join(OUT, m.slug), { recursive: true, force: true }));
DOCS.forEach(build);
console.log('import done ->', path.relative(ROOT, OUT));
