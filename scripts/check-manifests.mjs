#!/usr/bin/env node
/**
 * Claude Code 와 Codex 는 매니페스트 형식이 달라서 같은 플러그인을 두 벌로 적습니다.
 * 한쪽만 고치면 한 AI 는 신버전, 다른 AI 는 구버전을 쓰게 되므로 여기서 걸러냅니다.
 *
 *   node scripts/check-manifests.mjs
 *
 * 어긋나면 어디가 다른지 출력하고 exit 1.
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PLUGIN = 'plugins/wisland-design-system';

const read = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));

const claude = read(`${PLUGIN}/.claude-plugin/plugin.json`);
const codex = read(`${PLUGIN}/.codex-plugin/plugin.json`);
const claudeMarket = read('.claude-plugin/marketplace.json');
const codexMarket = read('.agents/plugins/marketplace.json');

const errors = [];

// 1. 두 플러그인 매니페스트의 공통 필드가 같은지
for (const field of ['name', 'version', 'description']) {
  if (claude[field] !== codex[field]) {
    errors.push(
      `${field}: .claude-plugin 은 ${JSON.stringify(claude[field])}, ` +
        `.codex-plugin 은 ${JSON.stringify(codex[field])}`,
    );
  }
}

// 2. Claude 마켓플레이스 항목의 version 이 플러그인 매니페스트와 같은지
const claudeEntry = claudeMarket.plugins?.find((p) => p.name === claude.name);
if (!claudeEntry) {
  errors.push(`.claude-plugin/marketplace.json 에 ${claude.name} 항목이 없어요.`);
} else if (claudeEntry.version !== claude.version) {
  errors.push(
    `version: plugin.json 은 ${claude.version}, ` +
      `.claude-plugin/marketplace.json 은 ${claudeEntry.version}`,
  );
}

// 3. Codex 마켓플레이스가 같은 플러그인을 실제 존재하는 경로로 가리키는지
//    (Codex 항목엔 version 이 없어요 — 경로만 맞으면 plugin.json 을 그대로 읽습니다)
const codexEntry = codexMarket.plugins?.find((p) => p.name === codex.name);
if (!codexEntry) {
  errors.push(`.agents/plugins/marketplace.json 에 ${codex.name} 항목이 없어요.`);
} else {
  const target = resolve(ROOT, codexEntry.source?.path ?? '');
  if (!existsSync(resolve(target, '.codex-plugin/plugin.json'))) {
    errors.push(
      `.agents/plugins/marketplace.json 의 경로 ${codexEntry.source?.path} 에 ` +
        `.codex-plugin/plugin.json 이 없어요.`,
    );
  }
}

// 4. 스킬 문서는 한 벌을 공유합니다. Codex 가 그 폴더를 가리키고 있는지 확인.
const skillsDir = resolve(ROOT, PLUGIN, codex.skills ?? './skills/');
if (!existsSync(resolve(skillsDir, 'wisland-design-system/SKILL.md'))) {
  errors.push(`.codex-plugin/plugin.json 의 skills 경로에서 SKILL.md 를 찾지 못했어요.`);
}

if (errors.length) {
  console.error('✗ Claude·Codex 매니페스트가 어긋났어요.');
  for (const e of errors) console.error(`  - ${e}`);
  console.error('\n  두 곳을 같이 고치고 다시 커밋해주세요.');
  process.exit(1);
}

console.log(`✓ 매니페스트 일치 — ${claude.name} ${claude.version} (Claude · Codex)`);
