// Build the "All the Code" companion page for a workbook: every code block from
// the workbook, in chapter order, stripped of the prose — so a student can copy
// each step without hunting through the text.
//
// A workbook block is one of two things, and the page has to say which:
//   * a complete file  — paste it over the whole file
//   * a snippet        — a method or field that goes inside a file you already
//                        have; the chapter page shows where
// We detect that structurally (a col-0 `using` or `class` means a whole file),
// never by guessing. Snippets that carry no filename in the workbook are left
// unlabelled on purpose: the nearest filename in the prose is reliably the
// WRONG one, and a wrong filename is worse than none.

const FENCE_OPEN = /^```([A-Za-z0-9]+)(?::(.+))?$/;
const IS_WHOLE_FILE = [
  /^using\s/m,
  // A file may open straight into a namespace, which indents its class.
  /^namespace\s/m,
  /^(?:public |internal |abstract |sealed |static |partial )*class\s/m,
];

// The instruction that introduces a block: the last sentence of the paragraph
// just above it ("Open `GameManager.cs` and add the two marked lines:"), with
// list markers stripped.
function captionFor(lines, fenceIndex) {
  let i = fenceIndex - 1;
  while (i >= 0 && !lines[i].trim()) i--;
  // Two fences back to back: there is no prose to quote, and walking further
  // would scrape the previous block's own source as if it were a sentence.
  if (i < 0 || lines[i].trim().startsWith('```')) return '';
  const para = [];
  while (i >= 0 && lines[i].trim()) {
    if (lines[i].trim().startsWith('```')) return '';
    para.unshift(lines[i].trim());
    i--;
  }
  if (!para.length) return '';
  const text = para.join(' ').replace(/\s+/g, ' ');
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z0-9`*_])/);
  return sentences[sentences.length - 1]
    .replace(/^[-*]\s+/, '')
    .replace(/^\d+\.\s+/, '')
    .trim();
}

// Every fenced block with a language, in source order.
export function extractBlocks(lines) {
  const blocks = [];
  let open = null;
  lines.forEach((line, i) => {
    if (!open) {
      const m = line.match(FENCE_OPEN);
      if (m) open = { lang: m[1], file: (m[2] || '').trim(), caption: captionFor(lines, i), code: [] };
      return;
    }
    if (line.trim() === '```') {
      const code = open.code.join('\n').replace(/^\n+|\n+$/g, '');
      const whole = IS_WHOLE_FILE.some((re) => re.test(code));
      blocks.push({ ...open, code, whole });
      open = null;
      return;
    }
    open.code.push(line);
  });
  return blocks;
}

const INTRO = `Every piece of code in this workbook, in order, with the prose taken out — so
you can copy a step without scrolling through the chapter. Hit the copy button
in the corner of a block.

A block tabbed with just a filename is that **whole file** — paste it over
everything in the file. A block tabbed **· snippet** is a piece that goes
*inside* a file you already have; open the chapter if you're unsure where it
lands.`;

export function buildCodePage(slug, chapters) {
  const out = [];
  let whole = 0;
  let snippet = 0;

  for (const c of chapters) {
    const blocks = extractBlocks(c.lines).filter((b) => b.lang === 'csharp');
    if (!blocks.length) continue;

    out.push(`## ${c.num}. ${c.title}`, '');
    out.push(`<a href="/${slug}/${c.pageSlug}/">Read chapter ${c.num} →</a>`, '');

    for (const b of blocks) {
      b.whole ? whole++ : snippet++;
      const tab = b.file
        ? `${b.file}${b.whole ? '' : ' · snippet'}`
        : 'snippet';
      if (b.caption) out.push(b.caption, '');
      out.push(`\`\`\`csharp title="${tab.replace(/"/g, '')}"`, b.code, '```', '');
    }
  }

  const body = `---\ntitle: "All the Code"\nsidebar:\n  order: 999\n---\n\n${INTRO}\n\n${out.join('\n')}`;
  return { body, whole, snippet };
}
