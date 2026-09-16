#!/usr/bin/env node
/**
 * 가이드 사이트(index.html)와 AI가 읽는 스킬 문서(references/*.md)의 CSS 값이
 * 어긋났는지 검사합니다. 사람이 두 곳을 같이 고치는 걸 깜빡해도 여기서 걸립니다.
 *
 *   node scripts/check-sync.mjs
 *
 * 어긋난 값이 있으면 목록을 출력하고 exit 1.
 */

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const REFS = 'plugins/wisland-design-system/skills/wisland-design-system/references';

const TARGETS = [`${REFS}/components.md`, `${REFS}/tokens.md`];

/**
 * 의도적으로 다른 값들. 사이트는 애니메이션 "닫힘" 상태를 적고,
 * 문서는 개발자가 바로 쓰는 "열림" 상태를 적기 때문입니다.
 */
const ALLOWED = new Set([
  '.modal|transform',
  '.sheet|transform',
  '.tip-bubble|transform',
  '.toast|transform',
]);

const read = (p) => readFileSync(resolve(ROOT, p), 'utf8');

function styleBlock(html) {
  const start = html.indexOf('<style>');
  const end = html.indexOf('</style>');
  if (start < 0 || end < 0) throw new Error('index.html에서 <style> 블록을 찾지 못했어요.');
  return html.slice(start + 7, end);
}

function cssBlocks(md) {
  return [...md.matchAll(/```css\n([\s\S]*?)```/g)].map((m) => m[1]).join('\n');
}

const normSel = (s) => s.split(/\s+/).join(' ').trim();
const normVal = (v) => v.replace(/\s+/g, '').replace(/;$/, '').toLowerCase();

function parse(css) {
  const out = new Map();
  for (const m of css.matchAll(/([^{}]+?)\s*\{([^{}]*)\}/g)) {
    const raw = m[1].split('\n').pop();
    if (!raw || raw.includes('@')) continue;
    for (const sel of raw.split(',')) {
      const key = normSel(sel);
      if (!key) continue;
      const props = out.get(key) ?? new Map();
      for (const decl of m[2].split(';')) {
        const i = decl.indexOf(':');
        if (i > 0) {
          const name = decl.slice(0, i).trim();
          if (/^[-a-z]/i.test(name)) props.set(name, normVal(decl.slice(i + 1)));
        }
      }
      out.set(key, props);
    }
  }
  return out;
}

const site = parse(styleBlock(read('index.html')));
const drifts = [];
let compared = 0;

for (const target of TARGETS) {
  const doc = parse(cssBlocks(read(target)));
  for (const [sel, props] of doc) {
    const siteProps = site.get(sel);
    if (!siteProps) continue;
    for (const [name, docVal] of props) {
      const siteVal = siteProps.get(name);
      if (siteVal === undefined) continue;
      compared++;
      if (siteVal !== docVal && !ALLOWED.has(`${sel}|${name}`)) {
        drifts.push({ target, sel, name, siteVal, docVal });
      }
    }
  }
}

if (drifts.length === 0) {
  console.log(`✓ 동기화 정상 — 선언 ${compared}개 대조, 불일치 0건`);
  process.exit(0);
}

console.error(`✗ 값이 어긋난 선언 ${drifts.length}건 (총 ${compared}개 대조)\n`);
for (const d of drifts) {
  console.error(`  ${d.sel} { ${d.name} }`);
  console.error(`    index.html : ${d.siteVal}`);
  console.error(`    ${d.target.split('/').pop().padEnd(11)}: ${d.docVal}\n`);
}
console.error('index.html이 기준입니다. references/*.md를 사이트 값에 맞춰 고쳐주세요.');
console.error('의도된 차이라면 scripts/check-sync.mjs의 ALLOWED에 추가하세요.');
process.exit(1);
