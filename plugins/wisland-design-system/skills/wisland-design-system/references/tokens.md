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
