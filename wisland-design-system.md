# 더블유아일랜드(W-ISLAND) 디자인 시스템 — 통합본

더블유아일랜드 사내 도구 UI의 **단일 기준** 문서입니다.
화면·컴포넌트·색상·문구를 만들거나 고칠 때 아래 값을 그대로 쓰세요.
여기 없는 값은 추측하지 말고 물어보세요.

> Claude Code를 쓴다면 이 파일 대신 플러그인을 설치하세요 — 자동으로 최신이 유지됩니다.
> `claude plugin marketplace add w-island/style-guide`
>
> 이 파일은 ChatGPT 등 플러그인을 못 쓰는 AI에 올리는 용도예요.
> **자동 갱신되지 않으니**, 가이드가 바뀌면 최신본을 다시 받아 올려주세요.

원본: https://github.com/w-island/style-guide
자동 생성본이라 이 파일을 직접 고치면 다음 빌드에서 덮어써집니다.

---

# 더블유아일랜드 디자인 시스템

더블유아일랜드 사내 도구의 화면을 만들거나 고칠 때, 모든 직군(디자이너·MD·CS·물류·경영·회계·지원팀)이 **같은 기준으로 일관된 경험**을 받도록 하기 위한 가이드입니다. 시각 자료의 원본은 스타일 가이드 사이트(https://w-island.github.io/style-guide/)에 있어요. 색상 칩·아이콘·컴포넌트를 눈으로 확인하려면 그 사이트를 열면 됩니다.

## 이 스킬을 쓰는 법 (워크플로)

UI 작업이 들어오면 다음 순서로 진행하세요.

1. **토큰부터 확인.** 색을 직접 hex로 박지 말고, 항상 의미 토큰(semantic token)을 씁니다. 그래야 다크 모드가 자동으로 따라와요. 토큰 정의는 `references/tokens.md`를 읽으세요.
2. **컴포넌트는 패턴 재사용.** 버튼·입력창·리스트·뱃지·탭·토글은 정해진 패턴이 있습니다. 새로 디자인하지 말고 `references/components.md`의 패턴을 가져다 쓰세요.
3. **문구는 해요체 6원칙.** 버튼 라벨, 안내문, 에러 메시지 등 모든 글자는 `references/ux-writing.md`의 규칙을 따릅니다.
4. **기존 코드 존중.** ai-hub의 `style.css`에 이미 변수/클래스가 있으면 그걸 우선 따르고, 없을 때만 이 토큰을 추가하세요. 토큰 이름과 값이 충돌하면 사용자에게 알려주세요.

### 이미 디자인 토큰 시스템이 있는 앱에 적용할 때 (예: AI Hub)
대상 앱이 이미 의미 토큰(`--accent`, `--bg`, `--text-*` 등)과 컴포넌트 클래스(`.btn-primary`, `.switch` 등)를 갖고 있고 화면을 JS로 렌더링한다면, **컴포넌트 CSS를 그대로 붙여넣지 마세요.** 클래스가 충돌해 기존 UI가 깨지고, 정적으로 삽입한 마크업은 JS 렌더링에 덮어쓰여 사라집니다.

대신 **앱의 기존 토큰 "값"을 디자인 시스템 팔레트로 리매핑**하세요. 마크업·JS를 건드리지 않고 `:root` / `[data-theme="dark"]`의 변수 값만 바꾸면 앱 전체가 한 번에 정렬됩니다. 매핑 예: `--accent → blue-500 (#1577cc)`, `--text-primary → gray-1000`, `--danger → status-negative (#d6173a)`. 적용 전 충돌하는 토큰(특히 액센트)은 사용자에게 먼저 알리고, 다크 모드 값은 가독성을 위해 한두 단계 밝은 blue를 쓰세요.

핵심 원칙은 아래에 요약돼 있습니다. **구체적인 값과 패턴이 필요할 때만** 참조 파일을 여세요(컨텍스트 절약).

## 핵심 원칙 (요약)

### 1. 색은 의미 토큰으로
- UI 메인색은 **Deep Azure (blue-500 = `#1577cc`)** — 차분하고 흰 글씨 대비가 좋아 버튼·링크·선택 상태에 씁니다. 밝은 로고색 **`#1da4ff`는 blue-400(브랜드 하이라이트)** 로 로고·강조에만.
- 보조(서포팅)는 **토스 스타일 중립 그레이 표면** — 페이지 `#f9fafb`, 카드 `#ffffff`, hover `#f2f4f6`. 크림 등 따뜻한 색은 쓰지 않아요.
- 텍스트·배경·경계선은 `txt-*`, `bg-*`, `border-*` 의미 토큰을 씁니다. raw gray/hex 직접 사용 금지.
- **배경은 차분한 중립 그레이로.** 누런/따뜻한 톤을 표면에 깔면 탁해지니 주의. (구조: `references/tokens.md`)
- **다크 모드는 눈이 편안하게**: 순흑/순백 대신 따뜻한 차콜 배경 + 오프화이트 텍스트(`#ECEAE3`) + 밝은 페리윙클 블루 액센트.
- 상태색: 성공 `#3BCC4B`, 실패 `#d6173a`. 서브 컬러는 쓰지 않습니다.

### 2. 타이포는 Pretendard
- 서체는 **Pretendard** 한 가지. 8단계 스케일(Display→Caption)을 쓰고, 임의 크기/굵기를 만들지 않습니다.
- 본문 16px·줄간 1.6 기준, 제목은 700 굵기. 표는 `references/tokens.md`.

### 3. 아이콘은 라인 스타일
- 기본 **라인(선) 스타일**, 끝과 꺾임은 **둥글게(round)**. 주목·인터랙션이 필요할 때만 Fill.
- 24×24 그리드, 두께 Bold 1.8px / Normal 1.3px. 기본 크기 24(L), 범위 XS12·S16·M20·L24·XL28.
- 이름은 kebab-case 또는 camelCase, 기능 기준(`search`, `share`)·없으면 형태 기준(`chevron-down`).
- 준비된 100+ 아이콘 셋은 `design-system.html`의 Iconography 섹션에 SVG path로 있습니다. 새 아이콘이 필요하면 같은 규칙(line·round·24그리드)으로 그립니다.

### 4. 레이아웃은 4px 그리드
- 간격은 4의 배수(2·4·8·12·16·20·24·32·40·48). 모바일 화면은 가로 375px 기준.
- 컴포넌트 모서리는 둥글게(sm 8 / md 12 / lg 16 / xl 20 / full). 단, **아이콘 내부** radius는 0–2px 별도 규칙.

### 5. 컴포넌트는 정해진 패턴
- **버튼**: 한 화면에 Primary(SAPPHIRE)는 하나만. 나머지는 Secondary/Outline/Ghost. (패턴: `references/components.md`)
- **입력창**: 라벨은 항상 위, 포커스는 blue-500, 에러는 status-negative + "무엇을 고칠지" 안내.
- **리스트/뱃지/탭/토글**: 패턴 그대로 사용.

### 6. 문구는 해요체 6원칙
한 줄 요약 — 자세한 규칙과 예시는 `references/ux-writing.md`:
1. **해요체로 통일** ("저장했어요")
2. **쉬운 말** (영어·약어·전문용어 풀어쓰기 — 전 직군이 봄)
3. **능동형** ("확인했어요")
4. **긍정형** ("~하면 쓸 수 있어요", 다이얼로그 왼쪽 버튼은 항상 `닫기`)
5. **캐주얼한 경어** ("입력할래요?")
6. **명사 → 동사** ("파일을 올리고 있어요")

## UX 원칙 (답답하지 않은 화면)
사내 도구라도 사용자를 가두거나 속이지 않습니다: ①진입 직후 화면 가로막기 금지 ②뒤로가기 막기 금지 ③거절 경로 항상 제공 ④예상 밖 전면 노출 금지 ⑤버튼 라벨은 결과가 보이게. (상세: `references/ux-writing.md`)

## 참조 파일
- `references/tokens.md` — 컬러(SAPPHIRE·그레이·투명도) · 의미 토큰(text/bg/border/status/diff) · 타이포 스케일 · 바로 붙여넣는 CSS `:root` 블록
- `references/components.md` — 버튼·입력창·리스트로우·뱃지·탭·토글·캘린더 + 로고 락업·GNB/LNB 내비게이션(카테고리 정렬 원칙)의 HTML/CSS 패턴
- `references/ux-writing.md` — 해요체 6원칙 Before/After + UX 5원칙
- 스타일 가이드 사이트 https://w-island.github.io/style-guide/ — 전체를 눈으로 보는 비주얼 레퍼런스

---

# 디자인 토큰

색은 **의미 토큰(semantic token)** 으로만 쓰세요. raw 컬러를 직접 박으면 다크 모드가 깨집니다. 의미 토큰은 그레이 스케일 위에서 자동 계산되고, 그레이 스케일은 라이트/다크에서 서로 매칭되도록 정의돼 있어요.

## 목차
1. Primary (SAPPHIRE)
2. Grayscale (Light / Dark)
3. Transparency
4. Status / Diff
5. Semantic tokens (text / bg / border)
6. Typography
7. Spacing / Radius
8. 바로 붙여넣는 CSS `:root` 블록

---

## 1. Primary · W-ISLAND Blue (Deep Azure)
UI 메인은 **500 (`#1577cc`)** — 차분하고 흰 글씨 대비가 좋아 버튼·링크·선택 상태에 씁니다. 밝은 로고색 **`#1DA4FF`는 400(브랜드 하이라이트)** 로 살려 로고·강조 포인트에만.

| 단계 | HEX | 단계 | HEX |
|---|---|---|---|
| 50 | `#ebf5fd` | 500 | `#1577cc` ← 기본(UI) |
| 100 | `#cce6fa` | 600 | `#1166b0` |
| 200 | `#9fd0f4` | 700 | `#0e5390` |
| 300 | `#5cb4ee` | 800 | `#0b4172` |
| 400 | `#1da4ff` (로고) | 900 | `#093356` |

### Secondary · Neutral Gray (Toss 스타일)
보조(서포팅) 톤. **라이트 모드의 배경/표면**에 토스 스타일의 차분한 **중립 그레이**를 씁니다. 포인트는 W-ISLAND Blue가 담당. (크림 등 따뜻한 색은 쓰지 않아요.)

| 토큰 | HEX | 용도 |
|---|---|---|
| white | `#ffffff` | 카드 표면 |
| bg | `#f9fafb` | 페이지 배경 |
| hover | `#f2f4f6` | hover·3차 표면 |
| border | `#e5e8eb` | 기본 보더 |
| strong | `#d1d6db` | 강한 보더 |

## 2. Grayscale (중립 — 텍스트·보더·중간톤)
라이트는 중립 회색, 다크는 **토스 스타일 차콜**(완전 블랙 대신 살짝 뜬 톤). 표면(배경)은 그레이가 아니라 아래 Surface 토큰을 씁니다.

| 단계 | Light | Dark | 단계 | Light | Dark |
|---|---|---|---|---|---|
| 50 | `#f9f9fa` | `#17171c` | 600 | `#b1b1bb` | `#8b95a1` |
| 100 | `#ececf0` | `#202028` | 700 | `#8a8a92` | `#a9adb8` |
| 200 | `#e3e3e8` | `#292932` | 800 | `#6b6b71` | `#c2c5cc` |
| 300 | `#d6d7de` | `#3c3c46` | 900 | `#515256` | `#e3e4e8` |
| 400 | `#cecfd7` | `#4e4e5a` | 1000 | `#2A2C2F` | `#f3f4f6` |
| 500 | `#c2c3cd` | `#6b6b78` | | | |

### Surface (배경 전용)
| 토큰 | Light | Dark | 용도 |
|---|---|---|---|
| `--surface-1` | `#ffffff` | `#202028` | 카드·표면 (bg-primary) |
| `--surface-2` | `#f9fafb` | `#17171c` | 페이지 배경 (bg-secondary) |
| `--surface-3` | `#f2f4f6` | `#292932` | 3차 표면 (bg-tertiary) |

## 3. Transparency
기준색 `#2A2C2F`에 opacity를 조절(0·5·10·20·30·40·50·60·70·80·90·100%). 경계선·딤드 배경 등에 사용. 의미 토큰에서는 gray-1000에 opacity를 곱해 자동 생성합니다.

## 4. Status / Diff
| 토큰 | 값 | 용도 |
|---|---|---|
| status-positive | `#3BCC4B` | 성공·긍정 |
| status-negative | `#d6173a` | 오류·실패, Input 실패 |
| status-warning | `#e8920c` | 주의 (Alert/검증 등 기능용 — 장식용 아님) |
| diff-add (light) | bg `#c5fad7` / txt `#00693d` | 추가된 부분 |
| diff-add (dark) | bg `#065433` / txt `#b4dac5` | 추가된 부분 |
| diff-remove (light) | bg `#ffc9c7` / txt `#b4002b` | 삭제된 부분 |
| diff-remove (dark) | bg `#650205` / txt `#fbbac6` | 삭제된 부분 |

> 서브 컬러(Neon Orange / Yellow)는 이 사내 도구군에서는 **사용하지 않습니다.**

## 5. Semantic tokens
gray-1000(=라이트 `#2A2C2F`, 다크 `#F6F6F6`)에 opacity를 곱해 텍스트/경계선을 만들고, bg는 그레이 단계를 직접 매핑합니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `--txt-primary` | gray-1000 · 100% | 기본 텍스트·아이콘 |
| `--txt-secondary` | gray-1000 · 80% | 보조/강조 텍스트 |
| `--txt-tertiary` | gray-1000 · 60% | 보조 텍스트 |
| `--txt-caption` | gray-1000 · 50% | 캡션 |
| `--txt-disabled` | gray-1000 · 30% | 비활성 |
| `--txt-link` | `#1f7a8c` (다크 `#5ec8d2`) | 링크 |
| `--txt-blue-primary` | blue-500 | 강조 텍스트 |
| `--txt-blue-secondary` | blue-400 | 강조 텍스트(보조) |
| `--bg-primary` | surface-1 (#ffffff / 다크 #202028) | 카드·표면 |
| `--bg-secondary` | surface-2 (#f9fafb / 다크 #17171c) | 페이지 배경 |
| `--bg-tertiary` | surface-3 (#f2f4f6 / 다크 #292932) | 3차 표면 |
| `--bg-invert` | `#2A2C2F` (다크 `#ECEAE3`) | 반전 배경(토스트 등) |
| `--bg-blue-primary` | blue-100 (다크 blue-800) | 강조 배경 |
| `--border-primary` | gray-1000 | 강한 경계선 |
| `--border-secondary` | gray-1000 · 20% | 기본 경계선 |
| `--border-tertiary` | gray-1000 · 10% | 약한 경계선 |

## 6. Typography
서체는 **Pretendard** 단일. (`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`)

| 단계 | 크기 | 굵기 | 줄간 | 용도 |
|---|---|---|---|---|
| Display | 36px | 700 | 1.25 | 가장 큰 타이틀 |
| Title 1 | 28px | 700 | 1.3 | 화면 제목 |
| Title 2 | 22px | 700 | 1.35 | 섹션 제목 |
| Heading | 18px | 600 | 1.45 | 카드/그룹 제목 |
| Body 1 | 16px | 400 | 1.6 | 본문 기본 |
| Body 2 | 14px | 400 | 1.6 | 보조 본문 |
| Label | 14px | 600 | 1.4 | 버튼·라벨 |
| Caption | 12px | 400 | 1.5 | 캡션·메타 |

## 7. Spacing / Radius / Shadow
- **Spacing(4px 그리드):** 2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48
- **Radius:** sm `8px` · md `12px` · lg `16px` · xl `20px` · full `999px` (아이콘 내부는 0–2px 별도)

### Shadow · Elevation (토스 스타일 — 부드럽고 옅게)
| 토큰 | Light | Dark | 용도 |
|---|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,.06)` | `…,.4)` | 카드 |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,.08)` | `…,.45)` | 팝오버·셀렉트·캘린더 |
| `--shadow-lg` | `0 10px 28px rgba(0,0,0,.10)` | `…,.5)` | 드롭다운·바텀시트 |
| `--shadow-xl` | `0 20px 48px rgba(0,0,0,.14)` | `…,.6)` | 모달·다이얼로그 |

> 그림자는 진하게 쓰지 말고 **경계선(border-tertiary)과 함께 옅게** 써서 "살짝 떠 있는" 느낌만 줘요.

### Motion
- 이징 `cubic-bezier(.2,.8,.2,1)` · 길이 fast `0.12s`(hover) · base `0.18s`(기본) · slow `0.28s`(시트·모달).
- 과한 bounce·1초+ 애니메이션 금지. 1초 넘는 작업엔 스피너/스켈레톤.

### Breakpoints (모바일 우선 · 기준 375px)
- Mobile `≤ 599px` · Tablet `600–1023px` · Desktop `≥ 1024px`

### 접근성(A11y) 최소 기준
- 대비 본문 4.5:1 / 큰 글씨·아이콘 3:1 · 포커스 링 항상 노출(outline 제거 금지) · 터치 영역 44×44 · 색만으로 정보 전달 금지(아이콘·텍스트 병행) · 키보드로 모든 동작(모달 esc).

## 8. 바로 붙여넣는 CSS `:root` 블록
새 화면/파일에 디자인 시스템을 적용할 때 이 블록을 그대로 넣고, 의미 토큰만 참조하세요. `data-theme` 속성으로 라이트/다크를 전환합니다.

```css
:root {
  /* Primary — W-ISLAND Blue: UI=Deep Azure 500, 로고색=400(#1da4ff) */
  --blue-50:#ebf5fd; --blue-100:#cce6fa; --blue-200:#9fd0f4; --blue-300:#5cb4ee;
  --blue-400:#1da4ff; --blue-500:#1577cc; --blue-600:#1166b0; --blue-700:#0e5390;
  --blue-800:#0b4172; --blue-900:#093356;
  --status-positive:#3BCC4B; --status-negative:#d6173a; --status-warning:#e8920c;
  --diff-add-bg:#c5fad7; --diff-add-txt:#00693d;
  --diff-remove-bg:#ffc9c7; --diff-remove-txt:#b4002b;
}
[data-theme="light"] {
  /* 중립 그레이 (텍스트·보더) */
  --gray-50:#f9f9fa; --gray-100:#ececf0; --gray-200:#e3e3e8; --gray-300:#d6d7de;
  --gray-400:#cecfd7; --gray-500:#c2c3cd; --gray-600:#b1b1bb; --gray-700:#8a8a92;
  --gray-800:#6b6b71; --gray-900:#515256; --gray-1000:#2A2C2F;
  --g1000-rgb:42,44,47;
  /* 표면 = 토스 스타일 중립 그레이 */
  --surface-1:#ffffff; --surface-2:#f9fafb; --surface-3:#f2f4f6;
  --txt-link:#1f7a8c; --bg-invert:#2A2C2F; --bg-blue-primary:#cce6fa;
  --shadow-sm:0 1px 3px rgba(0,0,0,.06); --shadow-md:0 4px 12px rgba(0,0,0,.08);
  --shadow-lg:0 10px 28px rgba(0,0,0,.10); --shadow-xl:0 20px 48px rgba(0,0,0,.14);
}
[data-theme="dark"] {
  /* 토스 스타일 다크 (완전 블랙 대신 살짝 뜬 차콜) */
  --gray-50:#17171c; --gray-100:#202028; --gray-200:#292932; --gray-300:#3c3c46;
  --gray-400:#4e4e5a; --gray-500:#6b6b78; --gray-600:#8b95a1; --gray-700:#a9adb8;
  --gray-800:#c2c5cc; --gray-900:#e3e4e8; --gray-1000:#f3f4f6;
  --g1000-rgb:243,244,246;
  --surface-1:#202028; --surface-2:#17171c; --surface-3:#292932;
  --txt-link:#5ec8d2; --bg-invert:#f3f4f6; --bg-blue-primary:#0b4172;
  --shadow-sm:0 1px 3px rgba(0,0,0,.4); --shadow-md:0 4px 12px rgba(0,0,0,.45);
  --shadow-lg:0 10px 28px rgba(0,0,0,.5); --shadow-xl:0 20px 48px rgba(0,0,0,.6);
}
:root {
  --txt-primary:rgba(var(--g1000-rgb),1);   --txt-secondary:rgba(var(--g1000-rgb),.80);
  --txt-tertiary:rgba(var(--g1000-rgb),.60); --txt-caption:rgba(var(--g1000-rgb),.50);
  --txt-disabled:rgba(var(--g1000-rgb),.30);
  --txt-blue-primary:var(--blue-500); --txt-blue-secondary:var(--blue-400);
  --bg-primary:var(--surface-1); --bg-secondary:var(--surface-2); --bg-tertiary:var(--surface-3);
  --border-primary:var(--gray-1000);
  --border-secondary:rgba(var(--g1000-rgb),.20); --border-tertiary:rgba(var(--g1000-rgb),.10);
}
```

---

# 컴포넌트 패턴

이미 의미 토큰이 정의돼 있다는 전제(`tokens.md`)로, 그 위에서 쓰는 컴포넌트 패턴입니다. 새로 디자인하지 말고 이 패턴을 가져다 쓰세요. 모든 컴포넌트는 의미 토큰을 참조하므로 다크 모드가 자동으로 따라옵니다.

## Button
규칙: **한 화면에 Primary(SAPPHIRE)는 하나만.** 가장 중요한 행동에만 씁니다. 나머지는 Secondary/Outline/Ghost. 높이는 lg 54 / md 48 / sm 38, radius는 lg 14 / md 12 / sm 10.

```css
.btn { font-family:inherit; font-weight:600; border:1px solid transparent; border-radius:12px;
  cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:6px;
  padding:0 18px; height:48px; font-size:15px; transition:.15s; color:var(--txt-primary);
  text-decoration:none; white-space:nowrap; }  /* text-decoration:none — <a class="btn">로도 쓸 수 있게 */
.btn.lg { height:54px; font-size:16px; border-radius:14px; padding:0 22px; }
.btn.sm { height:38px; font-size:13px; border-radius:10px; padding:0 14px; }
.btn-primary { background:var(--blue-500); color:#fff; }
.btn-primary:hover { background:var(--blue-600); }
.btn-secondary { background:var(--bg-tertiary); }
.btn-secondary:hover { background:var(--gray-300); }
.btn-outline { background:transparent; border-color:var(--border-secondary); }
.btn-ghost { background:transparent; color:var(--txt-blue-primary); }
.btn:disabled { background:var(--bg-tertiary); color:var(--txt-disabled); cursor:not-allowed; }
.btn-cta { width:100%; }              /* Bottom CTA: 전체 너비 */
[data-theme="dark"] .btn-ghost { color:var(--blue-300); }
```
라벨은 동사로("저장하기"), 다이얼로그 왼쪽 버튼은 항상 "닫기"(ux-writing.md 참고).

## Text Field
규칙: 라벨은 항상 입력칸 **위**. 포커스는 blue-500, 에러는 status-negative + "무엇을 고칠지" 헬퍼 텍스트.

```css
.field { width:240px; max-width:100%; min-width:0; }  /* min-width:0 — flex 안에서 네이티브 입력이 넘치는 것 방지 */
.field .file-input { max-width:100%; }
.field label { display:block; font-size:13px; font-weight:600; margin-bottom:7px; color:var(--txt-secondary); }
.field input { width:100%; font-family:inherit; font-size:15px; color:var(--txt-primary);
  background:var(--bg-primary); border:1.5px solid var(--border-secondary); border-radius:12px;
  padding:13px 15px; outline:none; transition:.15s; }
.field input::placeholder { color:var(--txt-disabled); }
.field input:focus { border-color:var(--blue-500); }
.field.error input { border-color:var(--status-negative); }
.field .help { font-size:12px; margin-top:7px; color:var(--txt-tertiary); }
.field.error .help { color:var(--status-negative); }
.field input:disabled { background:var(--bg-tertiary); color:var(--txt-disabled); }
```

## List Row
구조: 아이콘 리드 + 제목 + 보조설명 + 트레일링(화살표/토글/뱃지). 목록·설정·메뉴의 기본 단위.

```css
.listrow { display:flex; align-items:center; gap:14px; padding:16px 18px;
  background:var(--bg-primary); border:1px solid var(--border-tertiary); }
.listrow:first-child { border-radius:12px 12px 0 0; }
.listrow:last-child { border-radius:0 0 12px 12px; }
.listrow + .listrow { border-top:none; }
.listrow .lead { width:40px; height:40px; border-radius:10px; flex:0 0 auto;
  display:flex; align-items:center; justify-content:center;
  background:color-mix(in srgb, var(--blue-500) 14%, var(--bg-primary)); color:var(--blue-500); }
[data-theme="dark"] .listrow .lead { color:var(--blue-200); }
.listrow .body { flex:1; min-width:0; }
.listrow .body .t { font-size:15px; font-weight:600; }
.listrow .body .s { font-size:13px; color:var(--txt-tertiary); }
.listrow .trail { color:var(--txt-tertiary); display:flex; }
```

## Badge
상태 표시용 알약(pill). blue=신규/강조, pos=성공, neg=실패, gray=대기.

```css
.badge { display:inline-flex; align-items:center; gap:5px; font-size:12px; font-weight:700;
  padding:4px 11px; border-radius:999px; }
.badge.blue { background:color-mix(in srgb, var(--blue-500) 16%, var(--bg-primary)); color:var(--txt-blue-primary); }
.badge.pos { background:color-mix(in srgb, var(--status-positive) 18%, var(--bg-primary)); color:var(--status-positive); }
.badge.neg { background:color-mix(in srgb, var(--status-negative) 16%, var(--bg-primary)); color:var(--status-negative); }
.badge.gray { background:var(--bg-tertiary); color:var(--txt-secondary); }
[data-theme="dark"] .badge.blue { color:var(--blue-200); }
```

## Tab / Segmented
탭: 밑줄 강조(blue-500). 세그먼트: 배경 캡슐형.

```css
.tabs { display:flex; gap:4px; border-bottom:1.5px solid var(--border-tertiary); }
.tabs button { font-family:inherit; font-size:14px; font-weight:600; color:var(--txt-tertiary);
  background:none; border:none; cursor:pointer; padding:12px 16px; position:relative; }
.tabs button.active { color:var(--txt-blue-primary); }
.tabs button.active::after { content:''; position:absolute; left:12px; right:12px; bottom:-1.5px;
  height:2.5px; background:var(--blue-500); border-radius:2px; }
[data-theme="dark"] .tabs button.active { color:var(--blue-200); }

.seg { display:inline-flex; background:var(--bg-tertiary); border-radius:10px; padding:3px; }
.seg button { font-family:inherit; font-size:13px; font-weight:600; border:none; cursor:pointer;
  background:none; color:var(--txt-secondary); padding:8px 16px; border-radius:8px; }
.seg button.active { background:var(--bg-primary); color:var(--txt-primary); box-shadow:0 1px 3px rgba(0,0,0,.12); }
```

## Toggle (Switch)
켜짐일 때 blue-500.

```css
.switch { width:50px; height:30px; border-radius:999px; background:var(--gray-400);
  position:relative; cursor:pointer; border:none; transition:.2s; flex:0 0 auto; }
.switch.on { background:var(--blue-500); }
.switch::after { content:''; position:absolute; top:3px; left:3px; width:24px; height:24px;
  border-radius:50%; background:#fff; transition:.2s; }
.switch.on::after { left:23px; }
```

## Calendar (Datepicker)
토스 스타일 캘린더. 선택일은 brand blue **채운 원**, 오늘은 **링(inset box-shadow)**, 일요일 빨강·토요일 파랑. 카드엔 `--shadow-md`.

구조: `.cal`(카드) > `.cal-head`(제목 + 좌우 chevron 버튼) + `.cal-grid.cal-dow`(요일 7칸) + `.cal-grid.cal-days`(날짜 7칸 그리드, 첫 주는 빈 칸 `.cal-day.out`으로 채움).

```css
.cal { width:300px; background:var(--bg-primary); border:1px solid var(--border-tertiary);
  border-radius:16px; padding:18px; box-shadow:var(--shadow-md); }
.cal-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
.cal-title { font-size:16px; font-weight:700; }
.cal-nav { width:32px; height:32px; border:none; background:none; cursor:pointer; border-radius:9px;
  color:var(--txt-secondary); display:flex; align-items:center; justify-content:center; }
.cal-nav:hover { background:var(--bg-tertiary); color:var(--txt-primary); }
.cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:2px; }
.cal-dow span { text-align:center; font-size:12px; font-weight:600; color:var(--txt-tertiary); padding:6px 0; }
.cal-dow span.sun, .cal-day.sun { color:#e5484d; }       /* 일요일 빨강 */
.cal-dow span.sat, .cal-day.sat { color:var(--blue-500); } /* 토요일 파랑 */
[data-theme="dark"] .cal-day.sat { color:var(--blue-300); }
.cal-day { aspect-ratio:1; border:none; background:none; cursor:pointer; border-radius:999px;
  font-family:inherit; font-size:14px; color:var(--txt-primary); display:flex; align-items:center; justify-content:center; }
.cal-day:hover:not(.selected):not(:disabled) { background:var(--bg-tertiary); }
.cal-day.out { visibility:hidden; }
.cal-day.today:not(.selected) { font-weight:700; box-shadow:inset 0 0 0 1.5px var(--blue-500); }
.cal-day.selected { background:var(--blue-500); color:#fff; font-weight:700; }
```

## Overlay (Modal · Bottom Sheet · Toast)
화면 위 레이어. 딤 배경 + `--shadow-xl`로 깊이를 줘요.
- **Modal**: 중요한 확인·입력. 중앙 카드, radius 18. **왼쪽 버튼은 항상 `닫기`**(취소 금지 — ux-writing.md).
- **Bottom Sheet**: 모바일 선택·액션. 하단에서 올라오는 카드, 상단 라운드 + 핸들 바.
- **Toast**: 짧은 피드백. `bg-invert` 알약, 하단 중앙, 1~1.5초 후 자동 사라짐. 액션·에러엔 쓰지 않아요.
- 배경(backdrop) 클릭 또는 닫기로 해제. 한 번에 하나의 오버레이만.

```css
.ov-backdrop { position:fixed; inset:0; background:rgba(0,0,0,.45); z-index:50; }
[data-theme="dark"] .ov-backdrop { background:rgba(0,0,0,.6); }
.modal { position:fixed; left:50%; top:50%; transform:translate(-50%,-50%);
  width:min(400px,calc(100vw - 40px)); background:var(--bg-primary); border-radius:18px;
  box-shadow:var(--shadow-xl); padding:24px; z-index:51; }
.modal-actions { display:flex; gap:8px; margin-top:22px; } /* .btn { flex:1 } */
.sheet { position:fixed; left:50%; bottom:0; transform:translateX(-50%);
  width:min(440px,100vw); background:var(--bg-primary); border-radius:22px 22px 0 0;
  box-shadow:var(--shadow-xl); padding:8px 22px 26px; z-index:51; }
.sheet-handle { width:40px; height:4px; border-radius:999px; background:var(--gray-300); margin:8px auto 16px; }
.toast { position:fixed; bottom:28px; left:50%; transform:translateX(-50%);
  background:var(--bg-invert); color:var(--gray-50); font-size:13px; font-weight:600; padding:11px 20px;
  border-radius:999px; box-shadow:var(--shadow-lg); }  /* 다크: color:var(--gray-1000) */
```

## Empty State
데이터 없을 때 첫 화면. **아이콘 + 한 줄 설명 + 다음 행동(Primary)**. 문구 해요체("아직 만든 작업이 없어요").
```css
.empty { text-align:center; padding:36px 20px; }
.empty .ico { width:56px; height:56px; border-radius:16px; margin:0 auto 16px; display:flex; align-items:center; justify-content:center;
  background:var(--bg-blue-primary); color:var(--blue-500); }  /* 다크: color:var(--blue-200) */
.empty h4 { font-size:16px; font-weight:700; } .empty p { font-size:14px; color:var(--txt-tertiary); margin:8px 0 18px; }
```

## Loading · Skeleton
짧으면 스피너, 레이아웃 있으면 스켈레톤. 스켈레톤은 base + 흰빛 sweep(오버레이)로 테마 무관 동작.
```css
.spinner { width:28px; height:28px; border-radius:50%; border:3px solid var(--border-secondary);
  border-top-color:var(--blue-500); animation:spin .8s linear infinite; }
@keyframes spin { to { transform:rotate(360deg); } }
.skel { background:var(--bg-tertiary); border-radius:8px; position:relative; overflow:hidden; }
.skel::after { content:''; position:absolute; inset:0; transform:translateX(-100%);
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent); animation:shimmer 1.4s infinite; }
[data-theme="dark"] .skel::after { background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent); }
@keyframes shimmer { 100% { transform:translateX(100%); } }
.progress { height:8px; border-radius:999px; background:var(--bg-tertiary); overflow:hidden; }
.progress > i { display:block; height:100%; background:var(--blue-500); border-radius:999px; }
```

## Form (Dropdown · Checkbox · Radio)
Text Field(위 참고) + 드롭다운/체크/라디오. 라벨 위, 필수 `*`는 status-negative, 체크/라디오는 `accent-color:var(--blue-500)`.

**드롭다운(Select)은 커스텀으로 만들어요.** 네이티브 `<select>`는 닫힌 모습만 스타일링되고 **열린 옵션 목록은 OS가 그려서** 하이라이트 색·모양을 브랜드 톤으로 못 바꿔요(쨍한 기본 파랑). 그래서 트리거 버튼 + 직접 만든 listbox를 써요. 선택 항목 = `bg-blue-primary`+`txt-blue-primary`, hover = `bg-tertiary`, 메뉴 = `shadow-lg`. (JS로 open 토글·선택·바깥 클릭/esc 닫기) **파일 입력은 반대로 네이티브를 살려요** — `<select>`와 달리 파일 버튼은 `::file-selector-button`으로 브랜드 톤을 입힐 수 있어, 버튼만 고스트 버튼화하면 끝(JS 불필요).
```css
.req { color:var(--status-negative); }
.dropdown { position:relative; width:100%; }
.dd-trigger { width:100%; display:flex; align-items:center; justify-content:space-between; gap:8px;
  font:inherit; font-size:15px; color:var(--txt-primary); background:var(--bg-primary);
  border:1.5px solid var(--border-secondary); border-radius:12px; padding:13px 15px; cursor:pointer; }
.dropdown.open .dd-trigger { border-color:var(--blue-500); }
.dropdown.open .dd-chev { transform:rotate(180deg); }
.dd-menu { position:absolute; top:calc(100% + 6px); left:0; right:0; z-index:20; list-style:none; margin:0; padding:6px;
  background:var(--bg-primary); border:1px solid var(--border-tertiary); border-radius:12px; box-shadow:var(--shadow-lg); }
.dd-opt { font-size:14px; color:var(--txt-secondary); padding:10px 12px; border-radius:8px; cursor:pointer; }
.dd-opt:hover { background:var(--bg-tertiary); color:var(--txt-primary); }
.dd-opt.selected { background:var(--bg-blue-primary); color:var(--txt-blue-primary); font-weight:600; } /* 다크: var(--blue-200) */
/* 체크/라디오는 네이티브로 충분 — accent-color만 지정 */
.check { display:inline-flex; align-items:center; gap:9px; font-size:14px; color:var(--txt-secondary); cursor:pointer; }
.check input { width:18px; height:18px; accent-color:var(--blue-500); }
/* 파일 선택 — 네이티브 버튼을 ::file-selector-button 으로 고스트 버튼화 (JS 불필요) */
input[type=file].file-input { font-size:13px; color:var(--txt-tertiary); cursor:pointer; max-width:100%; border:none; background:none; padding:0; }
input[type=file].file-input::file-selector-button { margin-right:12px; padding:8px 14px; border-radius:8px;
  border:1px solid var(--border-secondary); background:var(--bg-primary); color:var(--txt-primary);
  font:inherit; font-size:13px; font-weight:600; cursor:pointer; transition:.15s; }
input[type=file].file-input::file-selector-button:hover { border-color:var(--blue-500); }
```

## Table · Data List
헤더 클릭 정렬(정렬중 = txt-blue-primary), 행 hover = bg-secondary, 숫자 우측 정렬, 하단 개수 + 페이지네이션(현재 페이지 = blue-500 채움).
```css
.tbl-wrap { border:1px solid var(--border-tertiary); border-radius:12px; overflow:hidden; }
.tbl { width:100%; border-collapse:collapse; font-size:14px; }
.tbl th { text-align:left; font-size:12px; font-weight:700; color:var(--txt-tertiary); background:var(--bg-secondary);
  padding:12px 16px; border-bottom:1px solid var(--border-tertiary); cursor:pointer; }
.tbl th.sorted { color:var(--txt-blue-primary); }
.tbl td { padding:13px 16px; border-bottom:1px solid var(--border-tertiary); }
.tbl tbody tr:hover { background:var(--bg-secondary); }
.pager button.active { background:var(--blue-500); color:#fff; border-color:var(--blue-500); }
```

## Alert · Banner
화면 내 상태 배너 4종(info/success/warn/error). 토스트(자동 사라짐)와 달리 사용자가 닫기 전까지 유지.
```css
.alert { display:flex; gap:10px; padding:13px 15px; border-radius:12px; font-size:13px; align-items:flex-start; }
.alert.info { background:var(--bg-blue-primary); color:var(--txt-blue-primary); }      /* 다크: var(--blue-200) */
.alert.success { background:color-mix(in srgb,var(--status-positive) 16%,var(--bg-primary)); color:var(--status-positive); }
.alert.warn { background:color-mix(in srgb,var(--status-warning) 18%,var(--bg-primary)); color:#9a6206; } /* 다크: #f0b35a */
.alert.error { background:color-mix(in srgb,var(--status-negative) 14%,var(--bg-primary)); color:var(--status-negative); }
```

## Logo & App Title (브랜드 노출 양식)
로고 마크 + 앱 타이틀 가로 락업을 GNB 좌측 상단에 고정해요.
- **보호 영역**: 마크 높이의 **50%** 여백 사방 확보(다른 요소 침범 금지).
- **최소 크기**: 마크 24px(PC)·20px(모바일), 타이틀 18px 이상.
- **타이포/색**: 타이틀 Title 2(22/700)~Heading(18/600), 색 `txt-primary`. 마크는 브랜드 블루(`blue-500`).
- **금지**: 회전·늘이기·그림자·그라데이션 변형, 마크-타이틀 간격 임의 변경, 저대비 배경 노출.

```css
.lockup { display:inline-flex; align-items:center; gap:10px; }
.logo-mark { width:32px; height:32px; border-radius:9px; background:var(--blue-500); color:#fff;
  display:flex; align-items:center; justify-content:center; }
.logo-title { font-size:20px; font-weight:700; letter-spacing:-.01em; color:var(--txt-primary); }
```

## Navigation (GNB / LNB)
전역 이동은 **GNB**(상단 바), 영역 내 이동은 **LNB**(좌측 카테고리). 깊이는 **2단계 이내**, 현재 위치는 브랜드 블루로 강조.

- **GNB**: 좌측 = 로고+타이틀, 우측 = 전역 액션(검색·추가·설정). 항상 고정 노출. `box-shadow:var(--shadow-sm)`.
- **LNB**: 카테고리 목록. 활성 항목은 `background:var(--bg-blue-primary); color:var(--txt-blue-primary)` (다크는 `blue-200`).

### 카테고리 정렬 원칙
1. **자주 쓰는 것 먼저** — 즐겨찾기·최근을 최상단에.
2. **핵심 → 부가** — 주 기능 위로, 설정·도움말은 맨 끝(또는 GNB 우측 끝).
3. **같은 성격끼리 그룹** — 그룹 사이는 여백·구분선으로 끊어 인지 부담↓.
4. **2단계 이내** — GNB > 카테고리 > 항목. 더 깊으면 길을 잃어요.
5. **활성은 하나만** — 현재 위치를 브랜드 블루로 표시(LNB 채움 / 탭 밑줄).

```css
.gnb { display:flex; align-items:center; justify-content:space-between;
  padding:12px 18px; background:var(--bg-primary); border:1px solid var(--border-tertiary);
  border-radius:12px; box-shadow:var(--shadow-sm); }
.lnb { width:240px; background:var(--bg-primary); border:1px solid var(--border-tertiary); border-radius:12px; padding:10px; }
.lnb-item { display:flex; align-items:center; gap:10px; padding:9px 10px; border-radius:9px;
  font-size:14px; color:var(--txt-secondary); cursor:pointer; }
.lnb-item:hover:not(.active) { background:var(--bg-tertiary); color:var(--txt-primary); }
.lnb-item.active { background:var(--bg-blue-primary); color:var(--txt-blue-primary); font-weight:600; }
.lnb-group + .lnb-group { border-top:1px solid var(--border-tertiary); margin-top:4px; padding-top:8px; }
```

## Page Header (화면 헤더)
GNB(앱 이름 고정) 아래, 각 화면 콘텐츠 **맨 위**에 오는 제목 + 한 줄 설명 블록. 모든 화면이 같은 양식을 쓰면 메뉴를 옮겨도 한 앱처럼 보여요. 제목 Title 2(22/700), 설명 Body 2(14)·`txt-tertiary` 한 줄.

- 콘텐츠가 **카드로 시작하면 첫 카드 안 맨 위**에, **KPI·표로 바로 시작하면 카드 밖**(콘텐츠 최상단)에 둬요 — 둘 다 `.page-head`로 감싸 어디서든 동일하게 렌더돼요.
- 화면당 헤더는 **하나만**. 카드·섹션 제목(Heading 18/600)과 혼동 금지 — 페이지 제목이 더 큽니다.

```css
.page-head { margin:0 0 18px; }
.ph-title { font-size:22px; font-weight:700; line-height:1.35; letter-spacing:-.02em; color:var(--txt-primary); margin:0 0 5px; }
.ph-sub { font-size:14px; font-weight:400; line-height:1.6; color:var(--txt-tertiary); margin:0; }
```

## Tooltip
hover 시 뜨는 짧은 한 줄 도움말. `bg-invert` 말풍선 + `--shadow-md`. 길면 쓰지 말 것.
```css
.tip { position:relative; display:inline-flex; }
.tip-bubble { position:absolute; bottom:calc(100% + 9px); left:50%; transform:translateX(-50%);
  background:var(--bg-invert); color:var(--gray-50); font-size:12px; padding:7px 10px; border-radius:8px;
  opacity:0; pointer-events:none; transition:.15s; box-shadow:var(--shadow-md); }  /* 다크: color:var(--gray-1000) */
.tip:hover .tip-bubble { opacity:1; }
```

## Tag · Chip
선택·필터·입력 토큰. 입력형은 ✕로 삭제. 강조는 `.brand`. 클래스명은 **`.tagchip`** (제네릭한 `.chip`/`.tag`는 이미 스와치·Before/After에 쓰여 충돌하므로 피함).
```css
.tagchip { display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:500;
  background:var(--bg-tertiary); color:var(--txt-secondary); padding:6px 8px 6px 12px; border-radius:999px; }
.tagchip.brand { background:var(--bg-blue-primary); color:var(--txt-blue-primary); } /* 다크: var(--blue-200) */
.tagchip .x { width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; }
.tagchip .x:hover { background:var(--border-secondary); color:var(--txt-primary); }
```

## Avatar
이미지 없으면 이니셜. 크기 sm(28)/기본(40)/lg(56). 여러 명은 stack(겹침).
```css
.avatar { width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center;
  font-size:15px; font-weight:700; color:#fff; background:var(--blue-500); }
.avatar.sm { width:28px; height:28px; font-size:12px; } .avatar.lg { width:56px; height:56px; font-size:20px; }
.avatar.gray { background:var(--gray-500); }
.avatar-stack .avatar { border:2px solid var(--bg-primary); margin-left:-10px; }
```

## Stepper
다단계 진행. 완료=채운 원, 현재=링(box-shadow), 이후=회색.
```css
.step .dot { width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center;
  font-size:13px; font-weight:700; background:var(--bg-tertiary); color:var(--txt-tertiary); }
.step.done .dot { background:var(--blue-500); color:#fff; }
.step.active .dot { background:var(--blue-500); color:#fff; box-shadow:0 0 0 4px var(--bg-blue-primary); }
.step-line { flex:1; height:2px; background:var(--border-secondary); margin:0 12px; }
.step-line.done { background:var(--blue-500); }
```

## Slider · Quantity
연속값은 슬라이더(볼륨처럼 채워지는 바), 정수는 −/+ 수량 스테퍼. 채움·포인트는 brand blue. 슬라이더 채움은 JS로 `linear-gradient(to right, var(--blue-500) N%, var(--bg-tertiary) N%)` 갱신.
```css
.slider { -webkit-appearance:none; appearance:none; width:240px; height:6px; border-radius:999px; background:var(--bg-tertiary); cursor:pointer; }
.slider::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; border-radius:50%;
  background:var(--blue-500); border:2px solid var(--bg-primary); box-shadow:var(--shadow-sm); }
.qty { display:inline-flex; align-items:center; border:1px solid var(--border-secondary); border-radius:12px; overflow:hidden; }
.qty button { width:40px; height:40px; border:none; background:var(--bg-primary); color:var(--txt-secondary); font-size:18px; cursor:pointer; }
.qty button:hover { background:var(--bg-tertiary); color:var(--txt-primary); }
.qty .val { min-width:48px; height:40px; display:flex; align-items:center; justify-content:center; font-weight:600;
  border-left:1px solid var(--border-tertiary); border-right:1px solid var(--border-tertiary); }
```

## Scrollbar
둥근 캡슐형 · 트랙에서 떠 있는 얇은 알약(padding-box 트릭). 위/아래 화살표 버튼 제거. **표준 `scrollbar-width/color`를 쓰면 Chromium이 webkit 의사요소를 무시하므로 webkit만 사용.**
```css
::-webkit-scrollbar { width:14px; height:14px; }
::-webkit-scrollbar-thumb { background-color:rgba(0,0,0,.22); border-radius:999px;
  border:4px solid transparent; background-clip:padding-box; min-height:44px; transition:background-color .2s ease; }
::-webkit-scrollbar-thumb:hover { background-color:rgba(0,0,0,.38); }
::-webkit-scrollbar-button { display:none; }
[data-theme="dark"] ::-webkit-scrollbar-thumb { background-color:rgba(255,255,255,.2); }
```

## 아이콘 사용
- inline SVG, `viewBox="0 0 24 24"`, `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`.
- 색은 `currentColor`로 두고 부모의 텍스트 색(`--txt-*`)을 상속받게 합니다.
- 준비된 100+ path는 `design-system.html`의 `ICON_GROUPS`/`ICON_MORE` 객체에서 가져오세요.

---

# UX 라이팅 & UX 원칙

제품 안의 모든 글자(버튼 라벨·안내문·에러·빈 화면·메뉴 이름)에 적용합니다. 핵심 전제: **사내 전 직군(디자이너·MD·CS·물류·경영·회계·지원팀)이 한 번에 이해할 수 있는 말**이 기준이에요. 친근함보다 "누가 봐도 바로 이해"가 우선입니다.

## 6대 원칙

### 1. 해요체로 통일
상황 불문 해요체. "저장됨", "저장하시겠습니까?" → **"저장했어요"**

### 2. 쉬운 말로
직군마다 익숙한 용어가 다릅니다. 영어·약어·전문용어를 풀어 쓰세요.

| 이렇게 ✗ | 이렇게 ✓ |
|---|---|
| 업로드 컴플리트 | 올리기 완료했어요 |
| 싱크 | 동기화했어요 |
| 어카운트 | 계정 |
| Confirm | 확인 |

### 3. 능동형
| ✗ | ✓ |
|---|---|
| 확인되었어요 | 확인했어요 |
| 등록되었습니다 | 등록했어요 |
| 처리 완료됨 | 처리했어요 |

### 4. 긍정형
"무엇이 안 된다"보다 "어떻게 하면 된다"를 알려줍니다.

| ✗ | ✓ |
|---|---|
| 권한이 없어요 | 관리자에게 요청하면 쓸 수 있어요 |
| 검색 결과가 없습니다 | 검색 결과를 찾지 못했어요 |

- **다이얼로그 왼쪽 버튼은 항상 `닫기`.** "취소"는 작업이 취소된다는 오해를 줄 수 있어요.

### 5. 캐주얼한 경어
과한 경어(~시겠어요?, ~께)를 피합니다.

| ✗ | ✓ |
|---|---|
| 입력하시겠어요? | 입력할래요? |
| ~께 전달 | ~에게 전달 |
| 확인 부탁드립니다 | 확인해 주세요 |

### 6. 명사 → 동사
명사를 두 개 이상 붙이지 말고 동사로 풉니다.

| ✗ | ✓ |
|---|---|
| 파일 업로드 진행 | 파일을 올리고 있어요 |
| 데이터 동기화 완료 | 데이터를 동기화했어요 |

## 예외 (수동형/부정형이 더 명확할 때)
규칙을 위한 규칙이 되지 않게, 다음은 예외로 허용합니다.
- **서비스 종료·기간 만료**: "곧 종료돼요"처럼 수동형이 뉘앙스를 정확히 전달.
- **사용자 행동의 결과 알림**(연체·해지 등): 인과관계를 명확히.
- **정책상 불가능**: 부정형으로 명확히 알리되, **안 되는 이유를 함께** 안내.
- 철자: '되어요'는 모두 '돼요'로 통일.

## UX 원칙 — 답답하지 않은 화면
사내 도구라도 사용자를 가두거나 속이지 않습니다. 아래는 화면 설계 시 지켜야 할 최소 기준이에요.

1. **진입 직후 화면을 가로막지 않기** — 들어오자마자 팝업·바텀시트로 전면을 막으면 집중이 끊기고 이탈로 이어져요.
2. **뒤로가기를 막지 않기** — 뒤로가기를 눌렀을 때 팝업으로 이전 화면 이동을 막지 않아요.
3. **거절 경로 제공** — 한쪽 선택지만 주는 강제 구조 금지. 닫기/거절 경로를 항상 둬요.
4. **예상 밖 노출 없애기** — 흐름 중 갑작스러운 전면 광고·팝업으로 몰입을 방해하지 않아요.
5. **버튼 라벨을 명확하게** — 버튼만 보고도 다음에 무슨 일이 일어날지 알 수 있게 써요.
