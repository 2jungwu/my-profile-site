# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

정적 웹사이트 기반 개인 포트폴리오 사이트입니다. Tailwind CSS를 활용한 모던 디자인과 다크 모드, 반응형 레이아웃을 제공합니다.

## 기술 스택

- **마크업**: HTML5 (Tailwind CSS CDN 사용)
- **스타일**: Tailwind CSS + 커스텀 CSS
- **스크립트**: Vanilla JavaScript (프레임워크 없음)
- **폰트**: Google Fonts (Inter, Noto Sans KR)
- **배포**: 정적 사이트 (빌드 프로세스 없음)

## 구조

```
├── index.html      # 메인 HTML (nav, hero, articles, sidebar, footer)
├── script.js       # 다크 모드 전환, 모바일 메뉴 기능
├── style.css       # 추가 스타일 (scroll-behavior, 폰트 설정)
└── .gitignore
```

## 주요 기능

- **다크 모드**: localStorage에 사용자 선택 저장
- **모바일 반응형**: md 브레이크포인트에서 네비게이션 변경
- **모바일 메뉴**: 햄버거 아이콘 클릭 시 메뉴 토글 및 애니메이션
- **스무스 스크롤**: 앵커 링크 네비게이션

## 개발 시 주의사항

- Tailwind CSS는 CDN을 통해 로드되므로 커스텀 클래스 추가 시 적용되지 않을 수 있음
- JavaScript는 순수 바닐라 코드이므로 프레임워크 방식으로 변경하지 않기
- 모바일 메뉴 열기/닫기 로직과 다크 모드 상태 동기화 시 주의
- 색상은 Tailwind 기본 팔레트 사용 (gray, indigo, purple, teal)
