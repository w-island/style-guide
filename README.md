# 더블유아일랜드 디자인 시스템 (W-Island Style Guide)

더블유아일랜드 사내 도구(AI Hub 등)의 디자인 시스템 홈이에요.
컬러 · 타이포 · 아이콘 · 컴포넌트 · 패턴 · UX 라이팅을 한곳에서 관리하고,
Claude Code 플러그인으로 배포합니다.

## 🔗 시각 가이드
**https://w-island.github.io/style-guide/**
(색상 칩 클릭 → HEX 복사, 우측 상단 토글 → 다크 모드, 스크롤 시 좌측 네비에 현재 위치 표시)

## 📦 Claude Code 플러그인 설치 (팀원용, 한 번만)
```
/plugin marketplace add w-island/style-guide
/plugin install wisland-design-system@w-island
```
설치하면 **본인의 모든 프로젝트**에서 작동해요. 평소처럼 *"버튼 추가해줘 / 색 바꿔줘 / 다크모드 입혀줘 / 문구 다듬어줘"* 라고 하면 Claude가 이 디자인 시스템대로 작업합니다.

업데이트:
```
/plugin marketplace update w-island
/plugin update wisland-design-system@w-island
```

## 📁 구성
```
index.html                          # 디자인 시스템 가이드 (GitHub Pages)
.claude-plugin/marketplace.json     # 마켓플레이스 "w-island"
plugins/wisland-design-system/      # 플러그인 (plugin.json + 스킬 번들)
```

## ✏️ 수정 방법
디자인 시스템은 **이 레포에서만** 수정해요. 가이드(`index.html`)와 스킬(`plugins/.../skills/`)을 함께 갱신하고 push → 팀원은 `/plugin marketplace update`로 최신 반영.

---
문의: creative@wisland.co.kr
