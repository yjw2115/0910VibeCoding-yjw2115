# 프로젝트 개요

개인 소개(About Me) 페이지. 한 페이지짜리 정적 사이트로, 소개 글 / 관심사 / 링크를 보여주는 것이 목적.

## 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## 범위

- 페이지는 단 하나 (`/`)로 구성. 별도 라우팅/서브페이지 없음.
- 섹션: 소개 글, 관심사, 링크(소셜/프로젝트 등) 정도로 충분. 그 이상의 섹션을 임의로 추가하지 않는다.

## 데이터

- 콘텐츠는 로컬 JSON 파일로 관리한다 (예: `data/profile.json`).
- DB 연동은 하지 않는다. 나중에 별도로 진행할 예정이므로 관련 스키마/클라이언트 코드를 미리 만들지 않는다.

## 하지 않을 것 (지금은)

- Vercel 배포 설정/연동
- Supabase 연동 (DB, Auth 등)
- 인증, API 라우트, 서버 상태 관리 등 이 페이지 범위를 벗어나는 기능

위 항목들은 사용자가 명시적으로 요청하기 전까지 진행하지 않는다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
