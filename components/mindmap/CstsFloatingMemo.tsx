"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Flame,
  Search,
  Copy,
  Check,
  X,
  Minimize2,
  Maximize2,
  Bookmark,
  FileText,
  Sparkles,
  RotateCcw,
  Star,
  Zap,
  HelpCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  BarChart3,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CstsRoiMermaid } from "./CstsRoiMermaid";

export interface CstsRoiItem {
  id: string;
  sectionId: "principles-process" | "static-testing" | "blackbox-testing" | "whitebox-testing" | "management-quality";
  sectionName: string;
  grade: "S" | "A" | "B";
  stars: 3 | 4 | 5;
  frequencyRate: string;
  title: string;
  formula: string;
  trap: string;
  tags: string[];
  mermaidChart?: string;
  diagramTitle?: string;
}

export const CSTS_ROI_ITEMS: CstsRoiItem[] = [
  // =================================================================
  // === [1] 테스트 기본 원리와 V-모델 프로세스 (principles-process)
  // =================================================================
  {
    id: "roi-01",
    sectionId: "principles-process",
    sectionName: "기본원리·프로세스",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "소프트웨어 결함 3대 용어 체계 (Error → Defect → Failure)",
    formula: "오류(Error/Mistake): 인간의 착각/실수 → 결함(Defect/Fault/Bug): 산출물(코드/문서) 속 결점 → 장애(Failure): 실행 중 결함 발현으로 인한 오동작",
    trap: "1) '인간의 행위나 판단 실수'를 물으면 무조건 '오류(Error)'! 2) '프로그램 실행 중 기대값과 다르게 동작'하는 현상은 '장애(Failure)'! 3) 결함이 코드에 있더라도 실행되지 않으면 장애는 발생하지 않음!",
    tags: ["Error", "Defect", "Failure", "오류", "결함", "장애", "전파경로"],
    diagramTitle: "결함 전파 메커니즘 (Error → Defect → Failure)",
    mermaidChart: `flowchart LR
  E["오류 (Error / Mistake)<br/>인간 개발자의 착각·부주의"] -->|"코드/문서 반영"| D["결함 (Defect / Bug)<br/>정적 산출물 속 잠재적 결점"]
  D -->|"런타임 실행 중 발현"| F["장애 (Failure)<br/>외부로 드러난 비정상 동작"]
  style E fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  style D fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
  style F fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#991b1b`,
  },
  {
    id: "roi-02",
    sectionId: "principles-process",
    sectionName: "기본원리·프로세스",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "검증(Verification) vs 확인(Validation) 비교",
    formula: "검증: 'Are we building the product right?' (규격·명세 일치 여부, 개발자 관점) / 확인: 'Are we building the right product?' (사용자 기대·목적 충족 여부, 사용자 관점)",
    trap: "명세서대로 완벽히 구현했더라도 사용자가 필요로 하지 않는 기능이면 '검증(Verification)은 통과했으나 확인(Validation)은 실패'한 것임!",
    tags: ["Verification", "Validation", "검증", "확인", "규격준수", "사용자요구"],
  },
  {
    id: "roi-03",
    sectionId: "principles-process",
    sectionName: "기본원리·프로세스",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "테스팅 7대 기본 원리 & 살충제 패러독스 / 오류 부재의 궤변",
    formula: "1.결함 존재 증명(부재 증명 불가) 2.완벽 테스팅 불가 3.조기 테스팅 4.결함 집중(파레토 80:20) 5.살충제 패러독스(동일 TC 반복 효과 저하) 6.정황 의존성 7.오류 부재의 궤변",
    trap: "1) '동일한 테스트 케이스를 반복하면 새로운 결함을 계속 효율적으로 찾을 수 있다'는 대표적인 오답 선지(살충제 패러독스 위반)! 2) 모든 결함을 고쳤다고 프로젝트가 성공하는 것은 아님(오류 부재의 궤변)!",
    tags: ["살충제패러독스", "오류부재의궤변", "결함집중", "조기테스팅", "파레토"],
  },
  {
    id: "roi-04",
    sectionId: "principles-process",
    sectionName: "기본원리·프로세스",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "V-모델 4대 테스트 레벨과 개발 단계 매핑",
    formula: "요구사항 분석 ↔ 인수 테스트 / 시스템 설계 ↔ 시스템 테스트 / 상세 설계(아키텍처) ↔ 통합 테스트 / 모듈 구현 ↔ 단위 테스트",
    trap: "통합 테스트는 모듈 간 인터페이스 및 통신 규약을 검증하고, 시스템 테스트는 전체 시스템의 기능/비기능 요구사항을 검증함!",
    tags: ["V-모델", "단위테스트", "통합테스트", "시스템테스트", "인수테스트"],
    diagramTitle: "V-모델 개발 단계와 테스트 레벨 대응도",
    mermaidChart: `flowchart TD
  REQ["요구사항 정의"] ---|"검증 대응"| ACC["인수 테스트 (Acceptance)"]
  SYS["시스템 설계"] ---|"검증 대응"| ST["시스템 테스트 (System)"]
  INT_D["상세/아키텍처 설계"] ---|"검증 대응"| IT["통합 테스트 (Integration)"]
  CODE["모듈 구현 (Coding)"] ---|"검증 대응"| UT["단위 테스트 (Unit)"]
  REQ --> SYS --> INT_D --> CODE
  UT --> IT --> ST --> ACC
  style REQ fill:#f8fafc,stroke:#64748b
  style ACC fill:#eff6ff,stroke:#3b82f6
  style IT fill:#fef3c7,stroke:#d97706
  style UT fill:#ecfdf5,stroke:#059669`,
  },
  {
    id: "roi-05",
    sectionId: "principles-process",
    sectionName: "기본원리·프로세스",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "통합 테스트 방식 (상향식 Driver vs 하향식 Stub)",
    formula: "상향식(Bottom-Up): 최하위 모듈부터 통합 → 상위 모듈 대행 가상 모듈 = 드라이버(Driver) / 하향식(Top-Down): 최상위 제어 모듈부터 통합 → 하위 모듈 대행 가상 모듈 = 스텁(Stub)",
    trap: "1) '상향식인데 스텁을 쓴다'는 전형적 함정! (위에서 불러줄 놈이 필요하므로 드라이버). 2) 빅뱅 방식은 한 번에 다 합치므로 오류 격리(원인 규명)가 가장 어려움!",
    tags: ["드라이버", "스텁", "Driver", "Stub", "상향식", "하향식", "통합테스트"],
    diagramTitle: "상향식(Driver) vs 하향식(Stub) 보조 모듈 구조",
    mermaidChart: `flowchart TD
  subgraph TOPDOWN["하향식 통합 (Top-Down)"]
    M1["실제 상위 모듈"] --> S1["가상 하위 모듈: 스텁 (Stub)"]
  end
  subgraph BOTTOMUP["상향식 통합 (Bottom-Up)"]
    D1["가상 상위 모듈: 드라이버 (Driver)"] --> M2["실제 하위 모듈"]
  end
  style S1 fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#991b1b
  style D1 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-06",
    sectionId: "principles-process",
    sectionName: "기본원리·프로세스",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "인수 테스트 (알파 테스트 vs 베타 테스트)",
    formula: "알파 테스트: 개발자 환경(통제된 환경)에서 사용자가 개발자와 함께 수행 / 베타 테스트: 실제 운영 환경에서 불특정 다수 사용자가 자율 수행",
    trap: "개발자 통제 환경 = 알파 테스트, 실제 환경 불특정 다수 = 베타 테스트!",
    tags: ["알파테스트", "베타테스트", "인수테스트", "Acceptance"],
  },

  // =================================================================
  // === [2] 정적 테스팅과 4대 리뷰 기법 (static-testing)
  // =================================================================
  {
    id: "roi-07",
    sectionId: "static-testing",
    sectionName: "정적 테스팅",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "정적 테스팅 4대 리뷰 기법 비교 (정형성 순위)",
    formula: "비공식 리뷰 (사전준비 X) < 워크스루 (작성자 주도, 교육/대안) < 기술 리뷰 (기술리더, 규격검토) < 인스펙션 (훈련된 중재자, 체크리스트, 메트릭, 가장 엄격)",
    trap: "1) 인스펙션의 주도자는 '작성자'가 아니라 '중재자(Moderator)'! 2) 워크스루의 주도자는 '작성자(Author)'! 3) 인스펙션은 결함의 해결책을 찾는 자리가 아니라 결함을 '식별'하는 자리!",
    tags: ["리뷰", "인스펙션", "워크스루", "기술리뷰", "비공식리뷰", "정형성"],
    diagramTitle: "4대 리뷰 기법의 정형성 및 특징 비교",
    mermaidChart: `flowchart LR
  R1["비공식 리뷰<br/>- 정형성: 최저<br/>- 준비 없음<br/>- 동료 피드백"] --> R2["워크스루<br/>- 작성자 주도<br/>- 참여자 교육<br/>- 시나리오 검토"]
  R2 --> R3["기술 리뷰<br/>- 기술 리더 주도<br/>- 표준/규격 검토<br/>- 사전 준비 필수"] --> R4["인스펙션 (Fagan)<br/>- 훈련된 주재자<br/>- 공식 체크리스트<br/>- 메트릭 정량 측정"]
  style R1 fill:#f8fafc,stroke:#94a3b8
  style R2 fill:#eff6ff,stroke:#3b82f6
  style R3 fill:#fef3c7,stroke:#d97706
  style R4 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-08",
    sectionId: "static-testing",
    sectionName: "정적 테스팅",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "정적 분석(Static Analysis) 검출 대상 vs 동적 분석 대상",
    formula: "정적 분석: 코딩 표준 위반, 미초기화/미사용 변수, Dead Code(도달 불가 코드), 순환 복잡도 / 동적 분석: 메모리 누수, 트랜잭션 동시성 충돌, 응답 지연",
    trap: "정적 분석 도구는 코드를 '실행'하지 않으므로 실행 시점의 메모리 누수나 응답 속도는 절대 측정할 수 없음!",
    tags: ["정적분석", "DeadCode", "미초기화변수", "동적분석", "프로파일러"],
  },
  {
    id: "roi-09",
    sectionId: "static-testing",
    sectionName: "정적 테스팅",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "인스펙션 핵심 역할 5인 체계",
    formula: "중재자(Moderator - 회의 주재/관리) / 작성자(Author - 산출물 제작) / 낭독자(Reader - 산출물 한 줄씩 낭독) / 검토자(Reviewer/Inspector - 결함 식별) / 기록자(Recorder - 결함 기록)",
    trap: "낭독자(Reader)는 작성자가 아닌 다른 제3자가 맡아 선입견 없이 낭독하는 것이 원칙!",
    tags: ["중재자", "작성자", "낭독자", "검토자", "기록자", "인스펙션역할"],
  },

  // =================================================================
  // === [3] 동적 블랙박스 기법 (blackbox-testing)
  // =================================================================
  {
    id: "roi-10",
    sectionId: "blackbox-testing",
    sectionName: "블랙박스 기법",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "경곗값 분석 (2-Value vs 3-Value BVA 계산법)",
    formula: "유효 범위 [Min, Max] 정수 기준: 2-Value BVA = {Min-1, Min, Max, Max+1} (총 4개) / 3-Value BVA = {Min-1, Min, Min+1, Max-1, Max, Max+1} (총 6개)",
    trap: "문제에서 '2-Value'인지 '3-Value'인지 꼭 확인! 1~100 정수 기준: 2-Value는 0, 1, 100, 101 / 3-Value는 0, 1, 2, 99, 100, 101!",
    tags: ["BVA", "경곗값분석", "2-Value", "3-Value", "블랙박스", "경계값"],
    diagramTitle: "2-Value vs 3-Value 경곗값 분석 수직선 분할",
    mermaidChart: `flowchart TD
  subgraph TWO["2-Value BVA (경계 + 바깥쪽)"]
    T1["Min - 1 (비유효)"] --- T2["Min (경곗값)"] --- T3["...유효 범위..."] --- T4["Max (경곗값)"] --- T5["Max + 1 (비유효)"]
  end
  subgraph THREE["3-Value BVA (안쪽 + 경계 + 바깥쪽)"]
    H1["Min - 1"] --- H2["Min"] --- H3["Min + 1"] --- H4["..."] --- H5["Max - 1"] --- H6["Max"] --- H7["Max + 1"]
  end
  style T2 fill:#ecfdf5,stroke:#059669
  style T4 fill:#ecfdf5,stroke:#059669
  style T1 fill:#fee2e2,stroke:#dc2626
  style T5 fill:#fee2e2,stroke:#dc2626`,
  },
  {
    id: "roi-11",
    sectionId: "blackbox-testing",
    sectionName: "블랙박스 기법",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "의사결정 테이블 테스팅 (Decision Table 2^N 규칙)",
    formula: "불리언(True/False) 조건이 N개일 때 총 가능한 규칙(Rule/TC)의 개수 = 2^N개 / 조건 2개 → 4개, 조건 3개 → 8개, 조건 4개 → 16개",
    trap: "조건이 2개(예: 골드회원 여부, 쿠폰 소지 여부)이면 액션의 개수와 무관하게 가능한 조건 조합은 무조건 2^2 = 4개!",
    tags: ["의사결정테이블", "DecisionTable", "2의N제곱", "블랙박스"],
  },
  {
    id: "roi-12",
    sectionId: "blackbox-testing",
    sectionName: "블랙박스 기법",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "상태 전이 테스팅의 스위치 커버리지 (0-스위치 vs 1-스위치)",
    formula: "0-스위치 커버리지: 모든 유효한 단일 전이(1-hop)를 최소 1회 실행 / 1-스위치 커버리지: 연속된 2개 전이 시퀀스(2-hop)를 최소 1회 실행",
    trap: "모든 단일 상태(State)를 거치는 것은 '상태 커버리지'이며, 모든 전이(Transition)를 거치는 것이 '0-스위치 커버리지'임!",
    tags: ["상태전이", "0-스위치", "1-스위치", "전이커버리지", "StateTransition"],
  },
  {
    id: "roi-13",
    sectionId: "blackbox-testing",
    sectionName: "블랙박스 기법",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "페어와이즈 테스팅 (Pairwise / All-Pairs)",
    formula: "대부분의 결함이 2개 인자의 상호작용에서 기인함에 착안, 임의의 두 인자 간 모든 순서쌍을 1회 이상 포함시켜 조합을 대폭 압축 (3×3×2=18개 → 약 9개)",
    trap: "모든 인자의 완전 조합(Exhaustive)을 테스트하는 것이 아니라 '2개 인자 쌍(Pair)'의 상호작용만을 보장함!",
    tags: ["페어와이즈", "Pairwise", "All-Pairs", "조합테스팅"],
  },
  {
    id: "roi-14",
    sectionId: "blackbox-testing",
    sectionName: "블랙박스 기법",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "분류 트리 기법 (Classification Tree Method - CTM)",
    formula: "입력 도메인을 분류(Classification)와 클래스(Class)로 계층적 트리 구조화한 뒤 표에서 조합 선택",
    trap: "동등 분할을 기반으로 하지만 시각적 계층 트리 다이어그램으로 설계하는 점이 특징!",
    tags: ["분류트리", "CTM", "ClassificationTree", "도메인분할"],
  },

  // =================================================================
  // === [4] 동적 화이트박스 기법 (whitebox-testing)
  // =================================================================
  {
    id: "roi-15",
    sectionId: "whitebox-testing",
    sectionName: "화이트박스 기법",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "커버리지 포함 관계 (위계 피라미드)",
    formula: "다중 조건 커버리지(2^N) ⟹ MC/DC(N+1) ⟹ 조건/결정 커버리지 ⟹ 결정(분기) 커버리지 ⟹ 구문(문장) 커버리지",
    trap: "[단골 1번 함정!] '결정 커버리지 100%'를 달성하면 '구문 커버리지 100%'는 항상 만족되지만, '조건 커버리지'는 결정 커버리지를 포함하지 않음!",
    tags: ["커버리지위계", "구문커버리지", "결정커버리지", "조건커버리지", "MCDC"],
    diagramTitle: "코드 커버리지 위계 피라미드 (포함 관계)",
    mermaidChart: `flowchart TD
  MCC["1. 다중 조건 커버리지 (Multiple Condition, 2^N)"] --> MCDC["2. MC/DC 커버리지 (N + 1개)"]
  MCDC --> CDC["3. 조건 / 결정 커버리지 (Condition/Decision)"]
  CDC --> DC["4. 결정 / 분기 커버리지 (Decision Coverage)"]
  DC --> SC["5. 구문 / 문장 커버리지 (Statement Coverage)"]
  style MCC fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#991b1b
  style MCDC fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
  style DC fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  style SC fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-16",
    sectionId: "whitebox-testing",
    sectionName: "화이트박스 기법",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "변경 조건/결정 커버리지 (MC/DC 핵심 공식 N + 1)",
    formula: "N개의 개별 조건식이 있을 때 MC/DC 100% 달성을 위한 최소 테스트 케이스 수 = N + 1개 / 각 조건식은 다른 조건이 고정된 상태에서 홀로 전체 결정을 반전시켜야 함",
    trap: "1) 'MC/DC는 다중 조건 커버리지보다 케이스 수가 많다'는 것은 오답 (다중 조건 2^N개보다 N+1개로 훨씬 적음)! 2) 안전 필수(항공 DO-178C, 차량 ISO 26262) 최상위 표준!",
    tags: ["MCDC", "N플러스1", "독립영향성", "DO-178C", "ISO26262"],
    diagramTitle: "MC/DC 개별 조건 독립 판정 원리 도식",
    mermaidChart: `flowchart TD
  SUB["if (A and B)"]
  C1["Case 1: (A=True, B=True) → Result: True"]
  C2["Case 2: (A=False, B=True) → Result: False<br/>(B 고정, A 변화로 전체 결과 반전 입증!)"]
  C3["Case 3: (A=True, B=False) → Result: False<br/>(A 고정, B 변화로 전체 결과 반전 입증!)"]
  SUB --> C1
  SUB --> C2
  SUB --> C3
  style C1 fill:#ecfdf5,stroke:#059669
  style C2 fill:#eff6ff,stroke:#2563eb
  style C3 fill:#fef3c7,stroke:#d97706`,
  },
  {
    id: "roi-17",
    sectionId: "whitebox-testing",
    sectionName: "화이트박스 기법",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "매케이브 순환 복잡도 3대 계산 공식",
    formula: "공식 1: V(G) = E - N + 2P (간선 E, 노드 N, 단일 컴포넌트 P=1) / 공식 2: V(G) = P(조건분기노드 수) + 1 / 공식 3: V(G) = 닫힌 영역의 수 + 1",
    trap: "간선 9개, 노드 7개일 때: V(G) = 9 - 7 + 2 = 4! (+2를 빼먹거나 잘못 계산하지 말 것)!",
    tags: ["순환복잡도", "McCabe", "E-N+2", "기초경로", "CFG"],
    diagramTitle: "매케이브 순환 복잡도 제어 흐름 그래프(CFG) 계산",
    mermaidChart: `flowchart TD
  N1((1)) --> N2((2: 분기))
  N2 -->|"True"| N3((3))
  N2 -->|"False"| N4((4))
  N3 --> N5((5))
  N4 --> N5
  N5 --> N6((6))
  style N2 fill:#fef3c7,stroke:#d97706
  style N1 fill:#f8fafc,stroke:#94a3b8
  style N6 fill:#ecfdf5,stroke:#059669`,
  },
  {
    id: "roi-18",
    sectionId: "whitebox-testing",
    sectionName: "화이트박스 기법",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "구문 커버리지 vs 결정 커버리지 단일 케이스 트릭",
    formula: "if (A || B) 문에서 A가 True인 케이스 1개만 넣어도 if 블록 안의 문장이 실행되므로 구문 커버리지 100% 달성 가능. 결정 커버리지는 False 분기도 실행해야 하므로 최소 2개 필요.",
    trap: "테스트 케이스 1개만으로 구문 커버리지 100%를 달성할 수 있는 코드가 존재함!",
    tags: ["구문커버리지", "결정커버리지", "분기", "if문"],
  },

  // =================================================================
  // === [5] 테스트 관리 및 품질 표준 (management-quality)
  // =================================================================
  {
    id: "roi-19",
    sectionId: "management-quality",
    sectionName: "관리·품질",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "탐색적 테스팅 3대 핵심 요소 (헌장·타임박스·세션)",
    formula: "사전 TC 없이 테스트 헌장(Test Charter)을 나침반 삼아 60~120분의 타임박스(Timebox) 내에서 설계·실행·학습을 동시 수행하는 세션 기반 테스팅(SBTM)",
    trap: "무작위로 아무렇게나 막 누르는 '멍키 테스팅(Ad-hoc)'과 달리, 헌장과 타임박스라는 명확한 관리 프레임워크가 존재함!",
    tags: ["탐색적테스팅", "테스트헌장", "타임박스", "세션기반", "SBTM"],
  },
  {
    id: "roi-20",
    sectionId: "management-quality",
    sectionName: "관리·품질",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "확인 테스트(Re-test) vs 회귀 테스트(Regression Test)",
    formula: "확인 테스트(Re-test): 고쳤다고 보고된 그 결함이 진짜 고쳐졌는지 본래 실패했던 TC를 재실행 / 회귀 테스트: 결함 수정이나 코드 변경으로 인해 다른 정상 기능에 부작용이 없는지 확인",
    trap: "'동일한 결함 발생 시나리오를 다시 실행하여 수정 여부를 검증'하는 것은 '확인 테스트(Re-test)'이지 회귀 테스트가 아님!",
    tags: ["확인테스트", "Re-test", "회귀테스트", "Regression", "결함수정"],
  },
  {
    id: "roi-21",
    sectionId: "management-quality",
    sectionName: "관리·품질",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "소프트웨어 테스트 조직 독립성 4단계 순서",
    formula: "개발자 본인 (가장 낮음) → 동료 개발자 (피어) → 사내 독립 QA/테스트 팀 → 외부 공인 전문 시험 기관 (가장 높음)",
    trap: "독립성이 높을수록 객관적이고 결함 검출력이 높으나, 프로젝트 도메인에 대한 세부 지식 습득이나 커뮤니케이션 비용은 증가할 수 있음!",
    tags: ["독립성", "테스트조직", "사내QA", "외부시험기관"],
    diagramTitle: "테스트 조직 독립성 4단계 피라미드",
    mermaidChart: `flowchart TD
  L4["4단계: 외부 공인 시험·평가 기관 (독립성 최고)"] --> L3["3단계: 개발팀과 분리된 사내 독립 QA팀"]
  L3 --> L2["2단계: 개발팀 내 동료 개발자 (Peer Reviewer)"]
  L2 --> L1["1단계: 개발자 본인 직접 테스트 (독립성 최저)"]
  style L4 fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
  style L3 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b
  style L2 fill:#fef3c7,stroke:#d97706,stroke-width:1px
  style L1 fill:#f8fafc,stroke:#94a3b8,stroke-width:1px`,
  },
  {
    id: "roi-22",
    sectionId: "management-quality",
    sectionName: "관리·품질",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "ISO/IEC 25010 제품 품질 모델 8대 특성 (단골 함정)",
    formula: "기능적합성, 성능효율성, 호환성, 사용성, 신뢰성, 보안성, 유지보수성, 이식성 (총 8개)",
    trap: "[시험 단골 함정!] '개발 생산성(Productivity)', '프로세스 준수율', '개발 비용'은 제품 품질 8대 특성이 아님!",
    tags: ["ISO25010", "품질모델", "생산성제외", "품질특성"],
  },
  {
    id: "roi-23",
    sectionId: "management-quality",
    sectionName: "관리·품질",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "결함 관리 생명주기 (Defect Lifecycle)",
    formula: "New/Submitted → Assigned(개발자 배정) → Open(수정 중) → Fixed/Resolved(수정 완료) → Verified(확인 테스트 통과) → Closed(종료) / 재발 시: Reopened",
    trap: "개발자가 수정을 마친 상태는 'Fixed', 테스터가 확인 테스트를 통과시킨 상태는 'Verified', 최종 종료는 'Closed'!",
    tags: ["결함생명주기", "DefectLifecycle", "Assigned", "Fixed", "Closed", "Reopened"],
    diagramTitle: "결함 관리 생명주기 상태 전이도",
    mermaidChart: `flowchart LR
  NEW["New / Submitted<br/>결함 접수"] --> ASS["Assigned<br/>개발자 배정"]
  ASS --> FIX["Fixed<br/>수정 완료"]
  FIX --> VER["Verified<br/>확인 테스트 통과"]
  VER --> CLS["Closed<br/>최종 종료"]
  FIX -->|"테스트 실패"| REO["Reopened<br/>재오픈"]
  REO --> ASS
  style NEW fill:#f8fafc,stroke:#94a3b8
  style ASS fill:#eff6ff,stroke:#3b82f6
  style FIX fill:#fef3c7,stroke:#d97706
  style VER fill:#ecfdf5,stroke:#059669
  style CLS fill:#f1f5f9,stroke:#475569
  style REO fill:#fee2e2,stroke:#dc2626`,
  },
  {
    id: "roi-24",
    sectionId: "management-quality",
    sectionName: "관리·품질",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "비기능 성능 테스트 유형 (스트레스 vs 부하 vs 침수)",
    formula: "부하(Load): 예상 최대 부하 처리 능력 / 스트레스(Stress): 정상 초과 극단 부하, 임계점 및 복원력(Fail-safe) 점검 / 침수(Soak): 장시간 지속 부하, 메모리 릭 점검",
    trap: "'임계점(Break-point) 탐색 및 비정상 부하 후 복원력'은 무조건 '스트레스 테스트(Stress Testing)'!",
    tags: ["스트레스테스트", "부하테스트", "침수테스트", "성능테스트"],
  },
];

// 단골 함정 기출 문제 10선
export interface CstsTrapQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  answerText: string;
  explanation: string;
  trapWarning: string;
}

export const CSTS_TRAP_QUESTIONS: CstsTrapQuestion[] = [
  {
    id: 1,
    question: "소프트웨어 테스팅의 원리에 대한 설명 중 살충제 패러독스(Pesticide Paradox)에 해당하는 것은?",
    options: [
      "결함은 소수의 모듈에 집중되는 경향이 있다.",
      "동일한 테스트 케이스를 지속해서 반복 실행하면 새로운 결함을 발견하기 어렵다.",
      "테스팅은 결함이 존재함을 증명할 수는 있으나 결함이 없음을 증명할 수는 없다.",
      "모든 결함을 수정했더라도 사용자의 요구를 충족하지 못하면 품질 목표를 달성하지 못한 것이다.",
    ],
    correctAnswer: 2,
    answerText: "② 동일한 테스트 케이스를 지속해서 반복 실행하면 새로운 결함을 발견하기 어렵다.",
    explanation: "살충제 패러독스는 주기적으로 테스트 케이스를 점검하고 새로운 테스트 케이스를 작성해야 함을 시사합니다.",
    trapWarning: "①은 결함 집중, ③은 결함 존재 증명, ④는 오류 부재의 궤변입니다.",
  },
  {
    id: 2,
    question: "결함 용어 중 '개발자의 피로나 인지 착각으로 인해 발생한 인간의 실수나 행동'을 의미하는 용어는?",
    options: [
      "오류 (Error)",
      "결함 (Defect)",
      "장애 (Failure)",
      "버그 (Bug)",
    ],
    correctAnswer: 1,
    answerText: "① 오류 (Error)",
    explanation: "인간의 행동/실수는 오류(Error), 산출물에 기록된 결점은 결함(Defect/Bug), 실행 시 발현된 오동작은 장애(Failure)입니다.",
    trapWarning: "많은 수험생이 결함과 오류를 혼동합니다. 인간의 행위는 무조건 '오류(Error)'입니다.",
  },
  {
    id: 3,
    question: "상향식 통합 테스트에서 아직 개발되지 않은 상위 모듈을 대신하여 하위 모듈을 호출하는 가상 모듈은?",
    options: [
      "스텁 (Stub)",
      "드라이버 (Driver)",
      "스파이더 (Spider)",
      "목 (Mock)",
    ],
    correctAnswer: 2,
    answerText: "② 드라이버 (Driver)",
    explanation: "상향식은 위에서 불러줄 상위 모듈이 필요하므로 드라이버(Driver)를 사용하고, 하향식은 아래에서 받아줄 하위 모듈 역할을 하는 스텁(Stub)을 사용합니다.",
    trapWarning: "상향식-드라이버, 하향식-스텁을 절대 반대로 고르지 마세요!",
  },
  {
    id: 4,
    question: "가장 엄격한 정형 리뷰 기법으로, 훈련된 중재자가 체크리스트와 메트릭을 수집하며 진행하는 기법은?",
    options: [
      "워크스루 (Walkthrough)",
      "인스펙션 (Inspection)",
      "기술 리뷰 (Technical Review)",
      "비공식 리뷰 (Informal Review)",
    ],
    correctAnswer: 2,
    answerText: "② 인스펙션 (Inspection)",
    explanation: "인스펙션(Fagan)은 중재자(Moderator)가 회의를 주재하고 공식 체크리스트와 정량적 메트릭을 수집하는 최고 정형 기법입니다.",
    trapWarning: "워크스루는 '작성자(Author)'가 주도하며 참가자 교육과 대안 모색에 중점을 둡니다.",
  },
  {
    id: 5,
    question: "정수 1부터 100까지를 허용하는 필드에 대해 2-Value 경곗값 분석(BVA)을 적용할 때 선정되는 입력값 세트는?",
    options: [
      "{0, 1, 100, 101}",
      "{0, 1, 2, 99, 100, 101}",
      "{1, 50, 100}",
      "{0, 1, 50, 100, 101}",
    ],
    correctAnswer: 1,
    answerText: "① {0, 1, 100, 101}",
    explanation: "2-Value BVA는 경곗값 자체와 바로 바깥쪽 인접 비유효 값을 취하므로 하한 {0, 1}, 상한 {100, 101}입니다.",
    trapWarning: "②는 안쪽 값까지 취하는 3-Value BVA 방식입니다.",
  },
  {
    id: 6,
    question: "OS 3종, 브라우저 3종, 네트워크 2종일 때 완전 조합 수와 페어와이즈 테스팅 케이스 수의 관계로 옳은 것은?",
    options: [
      "완전 조합은 18개이며, 페어와이즈는 이보다 현저히 적은 수(약 9개 내외)로 압축된다.",
      "완전 조합은 8개이며, 페어와이즈는 6개이다.",
      "완전 조합은 24개이며, 페어와이즈는 12개이다.",
      "페어와이즈 테스팅은 모든 인자의 조합을 보장하므로 케이스 수는 18개로 동일하다.",
    ],
    correctAnswer: 1,
    answerText: "① 완전 조합은 18개이며, 페어와이즈는 이보다 현저히 적은 수(약 9개 내외)로 압축된다.",
    explanation: "3 × 3 × 2 = 18개이며, 2개 인자 상호작용만을 보장하는 페어와이즈는 통상 최대 2개 도메인 곱(3×3=9) 수준으로 압축됩니다.",
    trapWarning: "페어와이즈는 모든 조합을 테스트하는 것이 아니라 2개 인자 순서쌍만을 보장합니다.",
  },
  {
    id: 7,
    question: "구문 커버리지와 결정 커버리지의 관계에 대한 설명으로 옳은 것은?",
    options: [
      "구문 커버리지 100%를 달성하면 결정 커버리지도 항상 100% 만족된다.",
      "결정 커버리지 100%를 달성하면 구문 커버리지도 항상 100% 만족된다.",
      "조건 커버리지 100%를 달성하면 결정 커버리지 100%가 항상 보장된다.",
      "구문 커버리지와 결정 커버리지는 상호 독립적이며 포함 관계가 없다.",
    ],
    correctAnswer: 2,
    answerText: "② 결정 커버리지 100%를 달성하면 구문 커버리지도 항상 100% 만족된다.",
    explanation: "모든 분기(참, 거짓)를 실행하면 모든 실행문이 실행되므로 결정 커버리지가 구문 커버리지를 포함합니다.",
    trapWarning: "구문 100%는 if문이 True인 경우만 타도 달성될 수 있어 결정 100%를 보장하지 못합니다.",
  },
  {
    id: 8,
    question: "개별 조건식이 4개일 때, 100% MC/DC(변경 조건/결정 커버리지)를 달성하기 위한 최소 테스트 케이스 수는?",
    options: [
      "4개",
      "5개",
      "8개",
      "16개",
    ],
    correctAnswer: 2,
    answerText: "② 5개",
    explanation: "MC/DC 최소 테스트 케이스 수는 N + 1개입니다. 조건식이 4개이므로 4 + 1 = 5개입니다.",
    trapWarning: "16개는 다중 조건 커버리지(2^4)의 케이스 수입니다.",
  },
  {
    id: 9,
    question: "결함 수정을 확인하기 위해 원래 실패했던 테스트 케이스를 다시 실행하는 테스트는?",
    options: [
      "회귀 테스트 (Regression Test)",
      "확인 테스트 (Confirmation Test / Re-test)",
      "스모크 테스트 (Smoke Test)",
      "부하 테스트 (Load Test)",
    ],
    correctAnswer: 2,
    answerText: "② 확인 테스트 (Confirmation Test / Re-test)",
    explanation: "특정 결함이 해결되었는지 확인하는 것은 확인 테스트(Re-test)이며, 타 기능에 부작용이 없는지 점검하는 것은 회귀 테스트입니다.",
    trapWarning: "회귀 테스트와 확인 테스트를 바꾸어 묻는 문제가 매회 단골 출제됩니다.",
  },
  {
    id: 10,
    question: "ISO/IEC 25010 제품 품질 모델의 8대 특성에 포함되지 않는 항목은?",
    options: [
      "기능 적합성 (Functional Suitability)",
      "신뢰성 (Reliability)",
      "개발 생산성 (Development Productivity)",
      "보안성 (Security)",
    ],
    correctAnswer: 3,
    answerText: "③ 개발 생산성 (Development Productivity)",
    explanation: "개발 생산성은 개발 프로세스나 조직의 관리 메트릭이며, 소프트웨어 제품 자체의 품질 8대 특성이 아닙니다.",
    trapWarning: "생산성, 비용 절감, 프로세스 준수도 등은 제품 품질 모델에 포함되지 않습니다.",
  },
];

const DEFAULT_MEMO_TEMPLATE = `[CSTS 핵심 암기 공식 & 시험 직전 치트시트]

1. 커버리지 포함 위계:
   다중 조건(2^N) ⟹ MC/DC(N+1) ⟹ 조건/결정 ⟹ 결정(분기) ⟹ 구문(문장)
   (결정 100% 만족 시 구문 100% 항상 보장!)

2. MC/DC 최소 테스트 케이스 수:
   최소 TC 수 = N + 1 (개별 조건식이 N개일 때)

3. 매케이브 순환 복잡도 공식:
   V(G) = E - N + 2 = P(조건분기노드 수) + 1 = 닫힌 영역 수 + 1

4. 경곗값 분석 규칙:
   - 2-Value BVA: Boundary, Boundary 바로 바깥쪽
   - 3-Value BVA: 바로 안쪽, Boundary, 바로 바깥쪽

5. 통합 테스트 보조 모듈:
   - 상향식(Bottom-Up) ⟹ 위에서 부를 놈 필요 ⟹ 드라이버 (Driver)
   - 하향식(Top-Down) ⟹ 아래에서 받을 놈 필요 ⟹ 스텁 (Stub)

6. 4대 리뷰 정형성 순위:
   비공식 리뷰 < 워크스루(작성자 주도) < 기술 리뷰(기술리더) < 인스펙션(중재자, 체크리스트, 메트릭)

7. ISO/IEC 25010 8대 품질 특성:
   기능적합성, 성능효율성, 호환성, 사용성, 신뢰성, 보안성, 유지보수성, 이식성
   (* 개발 생산성은 제품 품질 특성이 아님!)
`;

export function CstsFloatingMemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState<"roi" | "traps" | "scratchpad">("roi");

  // 검색 및 필터 상태
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  // 함정 문제 풀이 상태
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [openExplanations, setOpenExplanations] = useState<Record<number, boolean>>({});

  // 메모장 상태
  const [userNotes, setUserNotes] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [copiedItemId, setCopiedItemId] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // 로컬스토리지 복원
  useEffect(() => {
    try {
      const savedBookmarks = localStorage.getItem("csts-roi-bookmarks");
      if (savedBookmarks) {
        setBookmarks(JSON.parse(savedBookmarks));
      }

      const savedNotes = localStorage.getItem("csts-roi-usernotes");
      if (savedNotes !== null) {
        setUserNotes(savedNotes);
      } else {
        setUserNotes(DEFAULT_MEMO_TEMPLATE);
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem("csts-roi-bookmarks", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleNotesChange = (val: string) => {
    setUserNotes(val);
    try {
      localStorage.setItem("csts-roi-usernotes", val);
    } catch {
      // ignore
    }
  };

  const handleCopyNotes = async () => {
    try {
      await navigator.clipboard.writeText(userNotes);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleResetTemplate = () => {
    setUserNotes(DEFAULT_MEMO_TEMPLATE);
    try {
      localStorage.setItem("csts-roi-usernotes", DEFAULT_MEMO_TEMPLATE);
    } catch {
      // ignore
    }
    setShowResetConfirm(false);
  };

  const handleCopyItem = async (item: CstsRoiItem) => {
    const text = `[CSTS 핵심 ROI] ${item.title}\n- 등급: ${item.grade} (${item.frequencyRate})\n- 핵심 공식/원리: ${item.formula}\n- 함정 피하기: ${item.trap}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItemId(item.id);
      setTimeout(() => setCopiedItemId(null), 2000);
    } catch {
      // ignore
    }
  };

  const handleSelectOption = (qId: number, optIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const toggleExplanation = (qId: number) => {
    setOpenExplanations((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  // 필터링된 ROI 항목 목록
  const filteredItems = useMemo(() => {
    return CSTS_ROI_ITEMS.filter((item) => {
      if (showBookmarksOnly && !bookmarks.includes(item.id)) return false;
      if (selectedSection !== "all" && item.sectionId !== selectedSection) return false;
      if (selectedGrade !== "all" && item.grade !== selectedGrade) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.formula.toLowerCase().includes(q) ||
        item.trap.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [bookmarks, searchQuery, selectedGrade, selectedSection, showBookmarksOnly]);

  return (
    <>
      {/* 플로팅 버튼 */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border-2 border-indigo-500/40 bg-indigo-600 px-5 py-3 text-white shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 hover:bg-indigo-700 active:scale-95 print:hidden"
        >
          <Flame className="size-5 fill-current text-amber-300 animate-pulse" />
          <span className="font-bold text-sm tracking-tight">
            CSTS 기출 ROI 메모장
          </span>
          <span className="flex size-5 items-center justify-center rounded-full bg-indigo-800 text-[11px] font-bold">
            {CSTS_ROI_ITEMS.length}
          </span>
        </button>
      )}

      {/* 모달 창 */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden border border-border bg-background shadow-2xl transition-all print:hidden",
            isMaximized
              ? "inset-4 md:inset-8 rounded-2xl"
              : "bottom-6 right-6 h-[640px] w-full max-w-[560px] rounded-2xl"
          )}
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                <Flame className="size-4 fill-current text-amber-300" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight text-foreground">
                    CSTS 기출 ROI 전략 메모장
                  </h3>
                  <span className="rounded bg-indigo-500/15 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 dark:text-indigo-300">
                    S/A등급 24선 & 도식 10선
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground">
              <button
                type="button"
                onClick={() => setIsMaximized(!isMaximized)}
                className="rounded p-1 hover:bg-muted hover:text-foreground transition-colors"
                title={isMaximized ? "원래 크기로" : "최대화"}
              >
                {isMaximized ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded p-1 hover:bg-muted hover:text-foreground transition-colors"
                title="닫기"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* 3대 탭 바 */}
          <div className="flex border-b border-border bg-muted/20 px-3 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("roi")}
              className={cn(
                "flex items-center gap-1.5 border-b-2 px-3 py-2.5 font-bold transition-all",
                activeTab === "roi"
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <Sparkles className="size-3.5" />
              <span>핵심 ROI 24선 & 도식</span>
              <span className="rounded-full bg-indigo-500/10 px-1.5 py-0.2 text-[10px]">
                {CSTS_ROI_ITEMS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("traps")}
              className={cn(
                "flex items-center gap-1.5 border-b-2 px-3 py-2.5 font-bold transition-all",
                activeTab === "traps"
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <AlertTriangle className="size-3.5 text-amber-500" />
              <span>단골 함정 10제</span>
              <span className="rounded-full bg-amber-500/10 px-1.5 py-0.2 text-[10px] text-amber-600">
                10
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("scratchpad")}
              className={cn(
                "flex items-center gap-1.5 border-b-2 px-3 py-2.5 font-bold transition-all",
                activeTab === "scratchpad"
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              <FileText className="size-3.5" />
              <span>직전 치트시트</span>
            </button>
          </div>

          {/* [TAB 1] 핵심 ROI 24선 & 도식 */}
          {activeTab === "roi" && (
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* 필터 및 검색 */}
              <div className="flex flex-col gap-2 border-b border-border bg-card p-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="개념, 공식, 함정, 태그 실시간 검색... (예: MC/DC, BVA, 순환복잡도)"
                    className="w-full rounded-lg border border-border bg-background py-1.5 pl-8 pr-3 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                  <div className="flex items-center gap-1 overflow-x-auto">
                    <select
                      value={selectedSection}
                      onChange={(e) => setSelectedSection(e.target.value)}
                      className="rounded border border-border bg-background px-2 py-1 text-[11px] focus:outline-none"
                    >
                      <option value="all">전체 영역 (5개)</option>
                      <option value="principles-process">기본원리·프로세스</option>
                      <option value="static-testing">정적 테스팅</option>
                      <option value="blackbox-testing">블랙박스 기법</option>
                      <option value="whitebox-testing">화이트박스 기법</option>
                      <option value="management-quality">관리·품질</option>
                    </select>

                    <select
                      value={selectedGrade}
                      onChange={(e) => setSelectedGrade(e.target.value)}
                      className="rounded border border-border bg-background px-2 py-1 text-[11px] focus:outline-none"
                    >
                      <option value="all">전체 등급</option>
                      <option value="S">S등급 (95%+)</option>
                      <option value="A">A등급 (80%+)</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                    className={cn(
                      "flex items-center gap-1 rounded px-2 py-1 font-medium transition-colors",
                      showBookmarksOnly
                        ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <Bookmark className={cn("size-3", showBookmarksOnly && "fill-current")} />
                    <span>북마크 ({bookmarks.length})</span>
                  </button>
                </div>
              </div>

              {/* 목록 영역 */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {filteredItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
                    <HelpCircle className="size-8 opacity-40 mb-2" />
                    <p className="text-xs">조건에 일치하는 ROI 개념이 없습니다.</p>
                  </div>
                ) : (
                  filteredItems.map((item) => {
                    const isBookmarked = bookmarks.includes(item.id);
                    const isCopiedThis = copiedItemId === item.id;

                    return (
                      <div
                        key={item.id}
                        className="rounded-xl border border-border bg-card p-3.5 shadow-sm transition-all hover:border-indigo-500/40"
                      >
                        {/* 상단 뱃지 및 조작 */}
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-border/60">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className={cn(
                                "rounded px-1.5 py-0.5 text-[10px] font-bold",
                                item.grade === "S"
                                  ? "bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30"
                                  : "bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                              )}
                            >
                              {item.grade}등급
                            </span>
                            <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground font-medium">
                              {item.sectionName}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                              {item.frequencyRate}
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleCopyItem(item)}
                              className="rounded p-1 text-muted-foreground hover:text-foreground transition-colors"
                              title="요약 복사"
                            >
                              {isCopiedThis ? (
                                <Check className="size-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="size-3.5" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleBookmark(item.id)}
                              className={cn(
                                "rounded p-1 transition-colors",
                                isBookmarked
                                  ? "text-amber-500 hover:text-amber-600"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                              title={isBookmarked ? "북마크 해제" : "북마크 등록"}
                            >
                              <Bookmark className={cn("size-3.5", isBookmarked && "fill-current")} />
                            </button>
                          </div>
                        </div>

                        {/* 제목 */}
                        <h4 className="text-sm font-bold tracking-tight text-foreground mt-2">
                          {item.title}
                        </h4>

                        {/* 핵심 공식 / 원리 */}
                        <div className="mt-2 rounded-lg bg-indigo-500/[0.04] dark:bg-indigo-950/20 border border-indigo-500/20 p-2.5 text-xs text-foreground font-sans leading-relaxed">
                          <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
                            💡 핵심 공식 및 판정 원리:
                          </span>
                          {item.formula}
                        </div>

                        {/* Mermaid 다이어그램 (있는 경우) */}
                        {item.mermaidChart && (
                          <CstsRoiMermaid
                            id={item.id}
                            chart={item.mermaidChart}
                            title={item.diagramTitle || `${item.title} 구조도`}
                          />
                        )}

                        {/* 함정 피하기 */}
                        <div className="mt-2 rounded-lg bg-amber-500/[0.06] border border-amber-500/25 p-2 text-xs text-amber-950 dark:text-amber-200 leading-relaxed font-sans">
                          <span className="font-bold text-amber-800 dark:text-amber-400 block mb-0.5">
                            ⚠️ 기출 함정 포인트:
                          </span>
                          {item.trap}
                        </div>

                        {/* 태그 */}
                        <div className="mt-2.5 flex flex-wrap gap-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* [TAB 2] 단골 함정 10제 미니 풀이 */}
          {activeTab === "traps" && (
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs leading-relaxed text-amber-950 dark:text-amber-200">
                <span className="font-bold block mb-1">🔥 수험생 80%가 오답을 고르는 10대 함정 집중 점검!</span>
                문제를 풀고 바로 정답 및 함정 해설을 열어 취약점을 교정하세요.
              </div>

              {CSTS_TRAP_QUESTIONS.map((q) => {
                const selected = userAnswers[q.id];
                const isSolved = selected !== undefined;
                const isExpOpen = openExplanations[q.id] || isSolved;

                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-border bg-card p-4 shadow-sm space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-foreground leading-snug">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-1.5">
                          Q{q.id}.
                        </span>
                        {q.question}
                      </h4>
                    </div>

                    {/* 보기 버튼 */}
                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      {q.options.map((opt, optIdx) => {
                        const optionNumber = optIdx + 1;
                        const isThisSelected = selected === optionNumber;
                        const isThisCorrect = q.correctAnswer === optionNumber;

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, optionNumber)}
                            className={cn(
                              "flex items-center gap-2.5 rounded-lg border p-2 text-left text-xs transition-colors",
                              !isSolved && "hover:border-indigo-500 hover:bg-indigo-500/5",
                              isSolved && isThisCorrect && "border-emerald-500 bg-emerald-500/15 font-bold text-emerald-950 dark:text-emerald-200",
                              isSolved && isThisSelected && !isThisCorrect && "border-destructive bg-destructive/15 text-destructive font-semibold",
                              isSolved && !isThisSelected && !isThisCorrect && "border-border/60 opacity-60"
                            )}
                          >
                            <span
                              className={cn(
                                "flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold border",
                                isSolved && isThisCorrect
                                  ? "border-emerald-600 bg-emerald-600 text-white"
                                  : isSolved && isThisSelected && !isThisCorrect
                                  ? "border-destructive bg-destructive text-white"
                                  : "border-muted-foreground/30 text-muted-foreground"
                              )}
                            >
                              {optionNumber}
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* 해설 토글 및 내용 */}
                    {isSolved && (
                      <div className="border-t border-border pt-2.5">
                        <button
                          type="button"
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 hover:underline mb-2"
                        >
                          <span>정답 및 함정 해설 {isExpOpen ? "접기" : "보기"}</span>
                          {isExpOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                        </button>

                        {isExpOpen && (
                          <div className="space-y-2 rounded-lg bg-muted/40 p-3 text-xs leading-relaxed">
                            <div className="font-bold text-foreground">
                              {q.answerText}
                            </div>
                            <p className="text-muted-foreground font-sans">
                              {q.explanation}
                            </p>
                            <div className="rounded border border-amber-500/30 bg-amber-500/10 p-2 text-amber-950 dark:text-amber-200 font-sans">
                              <span className="font-bold block text-amber-800 dark:text-amber-300 mb-0.5">
                                ⚠️ 함정 피하기 포인트:
                              </span>
                              {q.trapWarning}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* [TAB 3] 직전 치트시트 & 나만의 메모장 */}
          {activeTab === "scratchpad" && (
            <div className="flex flex-1 flex-col overflow-hidden p-3.5">
              <div className="flex items-center justify-between pb-2.5">
                <div className="flex items-center gap-1.5">
                  <FileText className="size-4 text-indigo-600" />
                  <span className="text-xs font-bold text-foreground">
                    시험 직전 나만의 메모장
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    (자동 저장 · {userNotes.length}자)
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyNotes}
                    className="h-7 gap-1 text-xs"
                  >
                    {isCopied ? (
                      <>
                        <Check className="size-3 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">복사 완료</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>전체 복사</span>
                      </>
                    )}
                  </Button>

                  {showResetConfirm ? (
                    <div className="flex items-center gap-1">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleResetTemplate}
                        className="h-7 text-[11px] px-2"
                      >
                        초기화 확인
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowResetConfirm(false)}
                        className="h-7 text-[11px] px-1.5"
                      >
                        취소
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowResetConfirm(true)}
                      className="h-7 gap-1 text-xs text-muted-foreground hover:text-foreground"
                      title="기본 공식 템플릿으로 복원"
                    >
                      <RotateCcw className="size-3" />
                      <span>템플릿 복원</span>
                    </Button>
                  )}
                </div>
              </div>

              <textarea
                value={userNotes}
                onChange={(e) => handleNotesChange(e.target.value)}
                placeholder="여기에 시험 직전 암기해야 할 공식이나 취약한 개념을 메모하세요..."
                className="flex-1 w-full resize-none rounded-xl border border-border bg-muted/20 p-3.5 font-mono text-xs leading-relaxed placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
