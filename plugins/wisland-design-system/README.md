# 더블유아일랜드 디자인 시스템 (Claude Code 플러그인)

사내 도구(AI Hub 등)의 UI를 만들거나 수정할 때, Claude가 **더블유아일랜드 디자인 시스템**을 자동으로 따르게 해주는 Claude Code 플러그인이에요.

- 컬러: **W-ISLAND Blue**(UI `#1577cc` / 로고 `#1da4ff`) + 토스 스타일 중립 그레이
- 타이포: Pretendard · 라인 아이콘 · 토스풍 그림자
- 컴포넌트: 버튼·입력·리스트·뱃지·탭·토글·**캘린더·오버레이(모달/바텀시트/토스트)**
- 패턴: 로고 락업 · GNB/LNB 내비게이션
- 글쓰기: 해요체 UX 라이팅 6원칙
- 시각 가이드: https://w-island.github.io/style-guide/

## 설치 (팀원용, 한 번만)

> ⚠️ **OS 터미널(cmd·PowerShell)이 아니에요.** 아래 `/명령`은 **Claude Code 대화 입력창**(평소 Claude에게 말 거는 칸)에 입력해요. VS Code 확장 · 데스크탑 앱 · 터미널 CLI 모두 동일.

```
/plugin marketplace add w-island/style-guide
/plugin install wisland-design-system@w-island
/reload-plugins
```

**메뉴(GUI)로도 가능**: 입력창에 `/plugin` → `Marketplaces` 탭에서 `w-island/style-guide` 추가 → `Discover` 탭에서 `wisland-design-system` 설치 → `Installed` 탭에서 확인.

설치하면 **본인의 모든 프로젝트**에서 작동해요(user 스코프 기본).

## 사용법 — 그냥 평소처럼 말하면 돼요

스킬 이름을 외울 필요 없어요. UI/디자인 작업을 부탁하면 Claude가 알아서 이 디자인 시스템을 적용합니다.

- "버튼 하나 추가해줘"
- "이 화면 색 우리 톤으로 바꿔줘"
- "다크모드 입혀줘"
- "안내 문구 다듬어줘"

> 참고: 단순한 한 줄 질문에는 안 뜰 수 있고, 실제 UI 작업일 때 발동돼요.

## 업데이트

디자인 시스템이 바뀌면 최신으로 당겨오세요.

```
/plugin marketplace update w-island
/plugin update wisland-design-system@w-island
```

## 진행 중인 작업에 전체 적용 (강하게)

"적용해줘"가 약하게 먹힐 때 — 슬래시 커맨드로 현재 작업 전체에 디자인 시스템을 **전면** 적용해요. 토큰·컴포넌트·문구·다크모드까지 한 번에 훑어 맞춰줍니다.

```
# 진행 중인 작업/프로젝트 전체에 적용 (범위 인자 옵션)
/wisland-design-system:apply 전체
# 또는 스킬을 직접 강제 호출
/wisland-design-system:wisland-design-system
```

### 잘 안 먹힐 때 체크리스트
- **설치·활성 확인**: `/plugin` 목록에 `wisland-design-system`이 enabled인지. 막 설치했다면 **세션을 새로 시작**해야 인식돼요(가장 흔한 원인).
- **프로젝트에 항상 강제**: 그 프로젝트 `CLAUDE.md`에 한 줄 추가 →
  `이 프로젝트의 모든 UI·문구는 wisland-design-system 디자인 시스템을 따른다.`
- **그래도 약하면** 위 `/wisland-design-system:apply`를 쓰세요. 자동 트리거와 달리 **항상** 전수 적용돼요.

---

문의: creative@wisland.co.kr
