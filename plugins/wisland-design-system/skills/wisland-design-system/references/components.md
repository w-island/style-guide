# 컴포넌트 패턴

이미 의미 토큰이 정의돼 있다는 전제(`tokens.md`)로, 그 위에서 쓰는 컴포넌트 패턴입니다. 새로 디자인하지 말고 이 패턴을 가져다 쓰세요. 모든 컴포넌트는 의미 토큰을 참조하므로 다크 모드가 자동으로 따라옵니다.

## Button
규칙: **한 화면에 Primary(SAPPHIRE)는 하나만.** 가장 중요한 행동에만 씁니다. 나머지는 Secondary/Outline/Ghost. 높이는 lg 54 / md 48 / sm 38, radius는 lg 14 / md 12 / sm 10.

```css
.btn { font-family:inherit; font-weight:600; border:1px solid transparent; border-radius:12px;
  cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:6px;
  padding:0 18px; height:48px; font-size:15px; transition:.15s; color:var(--txt-primary); }
.btn.lg { height:54px; font-size:16px; border-radius:14px; padding:0 22px; }
.btn.sm { height:38px; font-size:13.5px; border-radius:10px; padding:0 14px; }
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
.field label { display:block; font-size:13px; font-weight:600; margin-bottom:7px; color:var(--txt-secondary); }
.field input { width:100%; font-family:inherit; font-size:15px; color:var(--txt-primary);
  background:var(--bg-primary); border:1.5px solid var(--border-secondary); border-radius:12px;
  padding:13px 15px; outline:none; transition:.15s; }
.field input::placeholder { color:var(--txt-disabled); }
.field input:focus { border-color:var(--blue-500); }
.field.error input { border-color:var(--status-negative); }
.field .help { font-size:12.5px; margin-top:7px; color:var(--txt-tertiary); }
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
.badge { display:inline-flex; align-items:center; gap:5px; font-size:12.5px; font-weight:700;
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
.tabs button { font-family:inherit; font-size:14.5px; font-weight:600; color:var(--txt-tertiary);
  background:none; border:none; cursor:pointer; padding:12px 16px; position:relative; }
.tabs button.active { color:var(--txt-blue-primary); }
.tabs button.active::after { content:''; position:absolute; left:12px; right:12px; bottom:-1.5px;
  height:2.5px; background:var(--blue-500); border-radius:2px; }
[data-theme="dark"] .tabs button.active { color:var(--blue-200); }

.seg { display:inline-flex; background:var(--bg-tertiary); border-radius:10px; padding:3px; }
.seg button { font-family:inherit; font-size:13.5px; font-weight:600; border:none; cursor:pointer;
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
  background:var(--bg-invert); color:var(--gray-50); font-weight:600; padding:12px 20px;
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
.dd-opt { font-size:14.5px; color:var(--txt-secondary); padding:10px 12px; border-radius:8px; cursor:pointer; }
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
.alert { display:flex; gap:10px; padding:13px 15px; border-radius:12px; font-size:13.5px; align-items:flex-start; }
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
  border:4px solid transparent; background-clip:padding-box; min-height:44px; transition:background-color .2s; }
::-webkit-scrollbar-thumb:hover { background-color:rgba(0,0,0,.38); }
::-webkit-scrollbar-button { display:none; }
[data-theme="dark"] ::-webkit-scrollbar-thumb { background-color:rgba(255,255,255,.2); }
```

## 아이콘 사용
- inline SVG, `viewBox="0 0 24 24"`, `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`.
- 색은 `currentColor`로 두고 부모의 텍스트 색(`--txt-*`)을 상속받게 합니다.
- 준비된 100+ path는 `design-system.html`의 `ICON_GROUPS`/`ICON_MORE` 객체에서 가져오세요.
