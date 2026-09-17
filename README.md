# 더블유아일랜드 디자인 시스템 (W-Island Style Guide)

더블유아일랜드 사내 도구(AI Hub 등)의 디자인 시스템 홈이에요.
컬러 · 타이포 · 아이콘 · 컴포넌트 · 패턴 · UX 라이팅을 한곳에서 관리하고,
Claude Code 플러그인으로 배포합니다.

## 🔗 시각 가이드
**https://w-island.github.io/style-guide/**
(색상 칩 클릭 → HEX 복사, 우측 상단 토글 → 다크 모드, 스크롤 시 좌측 네비에 현재 위치 표시)

## 📦 설치 (팀원용, 딱 한 번)

**Claude Code 입력창에 아래 문단을 통째로 붙여넣고 엔터**를 누르세요. 나머지는 Claude가 알아서 합니다.

```
더블유아일랜드 디자인 시스템 플러그인을 설치해줘. 순서대로 해줘.

1. 터미널에서 `claude plugin marketplace add w-island/style-guide` 실행
   (이미 등록돼 있다는 메시지가 나오면 그냥 다음 단계로)
2. 터미널에서 `claude plugin install wisland-design-system@w-island` 실행
3. ~/.claude/settings.json 을 읽고, 기존 내용을 지우지 말고 아래 두 항목만 병합해줘.
   이미 있으면 값만 맞춰줘.
   - extraKnownMarketplaces 에 "w-island" 키:
     { "source": { "source": "github", "repo": "w-island/style-guide" }, "autoUpdate": true }
   - enabledPlugins 에 "wisland-design-system@w-island": true
4. settings.json 이 유효한 JSON인지 확인하고, 설치된 플러그인 버전을 알려줘.
```

끝나면 **Claude Code를 한 번 껐다 켜주세요.** (플러그인은 재시작해야 적용돼요)

이후에는 평소처럼 *"버튼 추가해줘 / 색 바꿔줘 / 다크모드 입혀줘 / 문구 다듬어줘"* 라고만 해도
Claude가 이 디자인 시스템대로 작업합니다. 화면 전체를 한 번에 정리하려면 `/apply`.

> **3번이 핵심입니다.** 플러그인은 설치 시점의 복사본을 캐시해두기 때문에, 이 설정이 없으면
> 가이드가 바뀌어도 **내 Claude는 옛날 값을 계속 씁니다.** `autoUpdate: true`를 넣어두면
> 시작할 때마다 알아서 최신으로 맞춰줘요. (실제로 3개월 뒤처진 채 작업하던 사례가 있었습니다)

수동으로 당장 최신화하고 싶을 때:
```
claude plugin marketplace update w-island
claude plugin update wisland-design-system@w-island
```

## 🤖 ChatGPT · 다른 AI에서 쓰기

위 설치 블록은 Claude Code 전용이에요(플러그인 설치 명령이라 ChatGPT엔 안 먹혀요).
ChatGPT엔 **아래 문단을 대화에 붙여넣으면 끝**입니다. 설치할 게 없어요.

```
아래 링크의 더블유아일랜드 디자인 시스템 문서를 열어서 전부 읽어줘.
https://w-island.github.io/style-guide/wisland-design-system.md

앞으로 이 대화의 UI·디자인·문구 작업은 그 문서의 색상·토큰·컴포넌트·문구 규칙을 그대로 따라줘.
문서에 없는 값은 추측하지 말고 나에게 물어봐.
```

매번 넣기 싫으면 [통합본 파일](https://w-island.github.io/style-guide/wisland-design-system.md)을
받아서 ChatGPT **프로젝트 파일**로 올려두고, 프로젝트 지침에 한 줄만 넣으세요.

> UI·디자인·문구 작업은 업로드된 더블유아일랜드 디자인 시스템 문서의 값을 그대로 쓴다. 문서에 없는 값은 추측하지 말고 물어본다.

> ⚠️ 업로드한 **파일은 자동 갱신되지 않아요.** 가이드가 바뀌면 새로 받아 올려주세요.
> (링크를 읽는 위 프롬프트 방식은 항상 최신을 봅니다)

버튼 하나로 복사하려면 → **https://w-island.github.io/style-guide/#install**

## 📁 구성
```
index.html                          # 디자인 시스템 가이드 (GitHub Pages)
wisland-design-system.md            # 외부 AI용 통합본 (자동 생성 — 직접 고치지 마세요)
.claude-plugin/marketplace.json     # 마켓플레이스 "w-island"
plugins/wisland-design-system/      # 플러그인 (plugin.json + 스킬 번들)
scripts/                            # 동기화 검사 · 통합본 빌드
```

## ✏️ 수정 방법
디자인 시스템은 **이 레포에서만** 수정해요. 가이드(`index.html`)와 스킬(`plugins/.../skills/`)을 함께 갱신하고 push하면, 위 설치 안내를 따른 팀원에게는 다음 실행 때 자동으로 반영됩니다.

> `index.html`은 사람이 보는 화면, `references/*.md`는 AI가 읽는 문서 — **같은 시스템의 두 벌**이라 한쪽만 고치면 팀원의 AI가 낡은 값으로 작업하게 됩니다.

스킬 문서를 고쳤다면 **외부 AI용 통합본도 다시 빌드**하고 함께 커밋하세요:
```
node scripts/build-bundle.mjs
```

두 벌이 어긋나지 않았는지 검사:
```
node scripts/check-sync.mjs
```
push하면 GitHub Actions에서 위 두 가지(값 대조 + 통합본 최신 여부)가 자동으로 돌아요.
어긋나면 어디가 다른지 알려주고 실패합니다.
의도적으로 달라야 하는 값은 `scripts/check-sync.mjs`의 `ALLOWED`에 추가하세요.

---
문의: creative@wisland.co.kr
