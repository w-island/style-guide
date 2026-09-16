#!/usr/bin/env node
/**
 * ChatGPT·Gemini 등 플러그인을 못 쓰는 AI에 통째로 올릴
 * 단일 파일(wisland-design-system.md)을 만듭니다.
 *
 *   node scripts/build-bundle.mjs          파일 생성
 *   node scripts/build-bundle.mjs --check  최신 상태인지 검사만 (CI용, 어긋나면 exit 1)
 *
 * 스킬 문서가 원본이고 이 번들은 사본입니다. 번들을 직접 고치지 마세요 —
 * 다음 빌드에서 덮어써집니다.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKILL = 'plugins/wisland-design-system/skills/wisland-design-system';
const OUT = 'wisland-design-system.md';

const SOURCES = [
  `${SKILL}/SKILL.md`,
  `${SKILL}/references/tokens.md`,
  `${SKILL}/references/components.md`,
  `${SKILL}/references/ux-writing.md`,
];

const HEADER = `# 더블유아일랜드(W-ISLAND) 디자인 시스템 — 통합본

더블유아일랜드 사내 도구 UI의 **단일 기준** 문서입니다.
화면·컴포넌트·색상·문구를 만들거나 고칠 때 아래 값을 그대로 쓰세요.
여기 없는 값은 추측하지 말고 물어보세요.

> Claude Code를 쓴다면 이 파일 대신 플러그인을 설치하세요 — 자동으로 최신이 유지됩니다.
> \`claude plugin marketplace add w-island/style-guide\`
>
> 이 파일은 ChatGPT 등 플러그인을 못 쓰는 AI에 올리는 용도예요.
> **자동 갱신되지 않으니**, 가이드가 바뀌면 최신본을 다시 받아 올려주세요.

원본: https://github.com/w-island/style-guide
자동 생성본이라 이 파일을 직접 고치면 다음 빌드에서 덮어써집니다.
`;

/** 마크다운 맨 앞 YAML 프론트매터(--- ... ---)를 걷어냅니다. Claude 전용 메타라 외부 AI엔 잡음이에요. */
function stripFrontmatter(md) {
  if (!md.startsWith('---\n')) return md;
  const end = md.indexOf('\n---', 4);
  return end < 0 ? md : md.slice(end + 4).replace(/^\n+/, '');
}

function build() {
  const parts = SOURCES.map((p) =>
    stripFrontmatter(readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n')).trim(),
  );
  return `${HEADER}\n---\n\n${parts.join('\n\n---\n\n')}\n`;
}

const bundle = build();
const outPath = resolve(ROOT, OUT);

if (process.argv.includes('--check')) {
  let current = null;
  try {
    current = readFileSync(outPath, 'utf8').replace(/\r\n/g, '\n');
  } catch {
    console.error(`✗ ${OUT} 이 없어요. \`node scripts/build-bundle.mjs\` 를 실행하고 커밋해주세요.`);
    process.exit(1);
  }
  if (current !== bundle) {
    console.error(`✗ ${OUT} 이 스킬 문서보다 낡았어요.`);
    console.error('  `node scripts/build-bundle.mjs` 를 실행하고 커밋해주세요.');
    process.exit(1);
  }
  console.log(`✓ ${OUT} 최신 상태 (${bundle.length.toLocaleString()}자)`);
  process.exit(0);
}

writeFileSync(outPath, bundle, 'utf8');
console.log(`✓ ${OUT} 생성 — ${SOURCES.length}개 문서, ${bundle.length.toLocaleString()}자`);
