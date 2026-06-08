# 더블유아일랜드 디자인 시스템 (Claude Code 플러그인)

사내 도구(AI Hub 등)의 UI를 만들거나 수정할 때, Claude가 **더블유아일랜드 디자인 시스템**을 자동으로 따르게 해주는 Claude Code 플러그인이에요.

- 컬러: **W-ISLAND Blue**(UI `#1577cc` / 로고 `#1da4ff`) + 토스 스타일 중립 그레이
- 타이포: Pretendard · 라인 아이콘 · 토스풍 그림자
- 컴포넌트: 버튼·입력·리스트·뱃지·탭·토글·**캘린더·오버레이(모달/바텀시트/토스트)**
- 패턴: 로고 락업 · GNB/LNB 내비게이션
- 글쓰기: 해요체 UX 라이팅 6원칙
- 시각 가이드: https://w-island.github.io/style-guide/

## 설치 (팀원용, 한 번만)

Claude Code에서 아래 두 줄을 입력하세요. (레포를 clone할 필요 없어요)

```
/plugin marketplace add w-island/style-guide
/plugin install wisland-design-system@w-island
```

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

## 수동 호출 (필요할 때)

```
/wisland-design-system:wisland-design-system
```

---

문의: creative@wisland.co.kr
