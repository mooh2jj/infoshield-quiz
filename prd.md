# [PRD] 웹 개발자를 위한 실무 연계형 정보보안기사 퀴즈 웹앱: infosheild-quiz

---

## 1. 프로젝트 개요 (Overview)

* **프로젝트명**: `infosheild-quiz`
* **타깃 사용자**:
* 웹 개발 실무(Frontend, Backend, DevOps)와 정보보안기사 자격증 준비를 병행하는 개발자
* 실무에서 자주 마주치는 보안 취약점과 인프라 보안 표준을 체계적인 이론으로 정리하고 싶은 엔지니어


* **목적**:
* 출퇴근길 모바일 환경이나 업무 중간 데스크톱 화면에서 1~2문제씩 빠르게 학습할 수 있는 마이크로 러닝 플랫폼 구축
* 단순 기출 암기를 넘어 웹 개발 실무 관점의 코드·설정 팁(Dev Context)이 연결된 정교한 해설 제공
* 과한 AI 생성물 느낌을 덜어내고, Linear나 Vercel처럼 절제되고 직관적인 개발자 친화적 UI/UX 구현



---

## 2. 제품 가치 및 차별화 포인트

| 구분 | 기존 기출 앱/수험서 | infosheild-quiz |
| --- | --- | --- |
| **풀이 속도** | 시험 모의고사 위주 (장시간 소요) | **1분 1문제 즉시 피드백** (마이크로 러닝) |
| **해설 깊이** | 시험용 단답 해설 위주 | **개념 정의 + 오답 분석 + 개발 실무 팁(Dev Context)** |
| **인터랙션** | 클릭 중심 모바일 뷰 | **모바일 터치 최적화 + 데스크톱 키보드 단축키 완벽 대응** |
| **디자인 톤** | 복잡하고 화려한 상업용 UI | **Shadcn UI 기반의 모노톤/미니멀 테크니컬 디자인** |

---

## 3. 정보 구조 및 출제 영역

정보보안기사 표준 5대 과목 체계를 기반으로 태그 및 카테고리를 분류합니다.

```
[infosheild-quiz]
 ├── 1. 시스템 보안 (Linux/Unix 권한, 로그 분석, 버퍼 오버플로우, 메모리 보호 기법)
 ├── 2. 네트워크 보안 (TCP/IP 취약점, 패킷 스니핑, 방화벽/IDS/IPS, VPN, TLS/SSL)
 ├── 3. 어플리케이션 보안 (OWASP Top 10, SQLi/XSS, 웹 서버 세팅, 전자상거래/인증)
 ├── 4. 정보보호 일반 (대칭/비대칭 암호, 해시 함수, 전자서명, PKI, 접근통제 DAC/MAC/RBAC)
 └── 5. 정보보호 관리 및 법규 (ISMS-P 인증, 개인정보보호법, 정보통신망법)

```

---

## 4. 문제 유형 및 풀이 로직

### 유형 1: 용어/개념 식별형 (주관식 단답형 or 키워드 매칭)

* **목적**: 정보보안기사 실기 단답형 대비 및 필수 테크 용어 리콜 훈련
* **인터랙션**:
* 질문 지문(상황 설명, 공격 기법, 알고리즘 특징 등) 제시
* 텍스트 인풋창에 단어 입력 (대소문자/공백 무시 처리, 영문/한글 복수 정답 매핑)
* 필요 시 힌트 토글(예: 첫 글자 또는 글자 수 힌트)



### 유형 2: 4지선다 객관식

* **목적**: 필기 기출 유형 대비 및 핵심 개념 비교 이해
* **인터랙션**:
* 4개 선지 중 하나 선택 즉시 정답/오답 하이라이트
* 데스크톱 단축키(`1`, `2`, `3`, `4`) 지원



### 해설 출력 표준 구조

1. **Definition (핵심 요약)**: 시험 기준의 정확한 학술적/법적 정의 (1~2줄)
2. **Options Breakdown (선지 분석)**: 각 선지가 정답/오답인 명확한 이유
3. **Dev Context (실무 팁)**:
* *예: "Spring Security에서 CSRF Token을 비활성화하면 안 되는 케이스"*, *"Nginx의 CSP(Content Security Policy) 헤더 설정 예시"* 등 웹 개발자가 바로 적용할 수 있는 실무 포인트 첨부



---

## 5. UI/UX 디자인 원칙 (Anti-AI & Minimalist)

* **비주얼 톤앤매너**:
* 화려한 그라디언트, 네온 컬러, 과도한 일러스트 배제
* 흑백 모노톤 중심, 1px 보더(`border-border`), 서브틀한 배경 대비(`bg-muted`), 정돈된 산세리프 폰트
* 라이트 모드 / 다크 모드 100% 대응


* **화면 레이아웃**:
* **모바일**: 한 손 조작이 가능한 하단 액션 버튼, 넓은 터치 영역(최소 44px)
* **데스크톱**: 중앙 집중형 카드 뷰(최대 폭 680px), 키보드 단축키 가이드 힌트 표시


* **사용자 경험 흐름**:
* 로그인 없이 브라우저 진입 즉시 퀴즈 시작 가능 (진입 장벽 제로)
* 진행 상태, 오답 목록은 `localStorage`에 자동 저장



---

## 6. 기능 요구사항 명세 (Functional Specifications)

| 모듈 | 상세 기능 | 우선순위 |
| --- | --- | --- |
| **필터/설정** | 5대 과목 다중 선택 (시스템, 네트워크, 어플리케이션, 일반, 법규) | P0 |
| **문제 유형 선택** | 전체 / 객관식만 / 단답형(용어식별)만 필터링 | P0 |
| **퀴즈 인터랙션** | 문제 렌더링, 코드 블록(Syntax Highlight), 답안 제출 및 즉시 채점 | P0 |
| **상세 해설** | 정답 즉시 노출 + 선지별 근거 + Dev Context 아코디언/카드 노출 | P0 |
| **단축키 지원** | 데스크톱 환경에서 선지 선택(`1~4`), 다음 문제(`Enter`), 힌트(`H`) | P1 |
| **진행 현황** | 현재 푼 문제 수, 정답률, 상단 미니멀 프로그레스 바 | P1 |
| **로컬 오답노트** | 틀린 문제를 브라우저에 저장하고 '오답만 모아 풀기' 모드 제공 | P1 |
| **코드 스니펫** | SQL 인젝션, XSS 스크립트, 리눅스 명령어 지문 시 다크 테마 코드 블록 지원 | P2 |

---

## 7. 시스템 아키텍처 및 기술 스택

```
Frontend: Next.js (App Router), TypeScript, Tailwind CSS
UI Kit: Shadcn UI (Radix UI Primitives 기반)
Icons: Lucide React
Code Highlight: Shiki 또는 PrismJS
State & Storage: Zustand + LocalStorage (Persist Middleware)
Deployment: Vercel / Cloudflare Pages

```

### 데이터 스키마 초안 (`types/quiz.ts`)

```typescript
export type SubjectCategory = 
  | 'system' 
  | 'network' 
  | 'application' 
  | 'general' 
  | 'law';

export type QuestionType = 'multiple_choice' | 'term_identification';

export interface QuizItem {
  id: string;
  category: SubjectCategory;
  type: QuestionType;
  title: string;
  question: string;
  codeSnippet?: string;
  options?: string[]; // 4지선다용 (단답형일 경우 생략)
  answerIndex?: number; // 4지선다 정답 인덱스
  termAnswers?: string[]; // 단답형 허용 정답 리스트 (대소문자/한영 동의어)
  explanation: {
    definition: string;
    optionsBreakdown?: string[];
    devContext: string; // 웹 개발 실무 팁
  };
  tags: string[];
}

```

---

## 8. 화면 흐름도 (Screen Flow)

```
[1. Home Screen (/)]
  - 서비스 타이틀: "infosheild-quiz"
  - 슬로건: "웹 개발자를 위한 정보보안기사 1분 트레이닝"
  - 과목 칩(Toggle) & 유형 선택
  - [퀴즈 시작] CTA 버튼
          │
          ▼
[2. Quiz Session (/quiz)]
  - 상단: 진행률 프로그레스 바 + [X] 나가기
  - 본문: 과목 뱃지, 문제 내용, (코드 블록), 선지 선택 또는 단답 입력창
  - 제출 즉시: 초록/빨강 상태 전환 및 하단에 상세 해설(Dev Context 포함) 표시
  - [다음 문제 (Enter)] 액션
          │
          ▼
[3. Summary Screen (/result)]
  - 세션 점수 (정답률 %), 과목별 취약점 인덱스
  - [오답 다시 풀기] / [홈으로]

```

---

## 9. 로드맵 및 마일스톤

* **Phase 1 (기반 다지기)**: Next.js + Shadcn UI 프로젝트 세팅, 5대 과목별 샘플 문제 10문항씩 총 50문항 JSON 데이터 구축
* **Phase 2 (코어 퀴즈 엔진)**: 반응형 문제 카드, 키보드 단축키 지원, 즉시 해설 및 Dev Context 렌더링
* **Phase 3 (오답노트 & 고도화)**: `localStorage` 기반 오답 복습 모드, 다크 모드 완성, 배포 및 성능 최적화

---