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
  ExternalLink,
  RotateCcw,
  Star,
  Zap,
  HelpCircle,
  AlertTriangle,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MathText } from "@/components/ui/MathText";
import { AdspRoiMermaid } from "./AdspRoiMermaid";

export interface RoiMemoItem {
  id: string;
  subjectId: "ch1" | "ch2" | "ch3";
  subjectName: string;
  grade: "S" | "A" | "B";
  stars: 3 | 4 | 5;
  frequencyRate: string;
  title: string;
  formula: string;
  trap: string;
  sectionId: string;
  tags: string[];
  mermaidChart?: string;
  diagramTitle?: string;
}

export const ADSP_ROI_ITEMS: RoiMemoItem[] = [
  // =================================================================
  // === [제1과목] 데이터 이해 (10문항)
  // =================================================================
  {
    id: "roi-01",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "DIKW 피라미드 4단계",
    formula: "데이터(Data) ➔ 정보(Information) ➔ 지식(Knowledge) ➔ 지혜(Wisdom)",
    trap: "지혜(Wisdom)는 지식 없이 발생하는 단순 직관이 아니라, 축적된 지식을 바탕으로 창의적 아이디어와 유연한 통찰을 발휘하는 단계!",
    sectionId: "adsp-understanding",
    tags: ["DIKW", "데이터", "정보", "지식", "지혜"],
    diagramTitle: "DIKW 계층 피라미드 & 가치 상승 구조",
    mermaidChart: `flowchart TD
  W["지혜 (Wisdom)<br/>통찰력 / 유연한 창의적 아이디어"]
  K["지식 (Knowledge)<br/>규칙 / 원리 / 축적된 노하우"]
  I["정보 (Information)<br/>의미와 목적이 부여된 데이터"]
  D["데이터 (Data)<br/>가공되지 않은 순수한 객관적 사실"]
  D --> I --> K --> W
  style W fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  style K fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
  style I fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b
  style D fill:#f3f4f6,stroke:#4b5563,stroke-width:2px,color:#1f2937`,
  },
  {
    id: "roi-02",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "SECI 모델 (지식 변환 4단계 나선 구조)",
    formula: "공통화(암묵➔암묵) ➔ 표출화(암묵➔형식) ➔ 연결화(형식➔형식) ➔ 내면화(형식➔암묵)",
    trap: "[48회 1번·47회 1번 연속 출제!] 연결화(Combination)는 형식지들을 결합·분류·체계화하는 것이며, 형식지를 개인의 암묵지로 체화하는 것은 '내면화(Internalization)'!",
    sectionId: "adsp-understanding",
    tags: ["SECI", "암묵지", "형식지", "표출화", "연결화", "내면화"],
    diagramTitle: "SECI 모델 지식 상호작용 선순환 나선 구조",
    mermaidChart: `flowchart LR
  S["1. 공통화 (Socialization)<br/>암묵지 ➔ 암묵지<br/>경험 공유·공감대 형성"]
  E["2. 표출화 (Externalization)<br/>암묵지 ➔ 형식지<br/>문서화·매뉴얼화·개념화"]
  C["3. 연결화 (Combination - 48회)<br/>형식지 ➔ 형식지<br/>분류·편집·체계적 결합"]
  I["4. 내면화 (Internalization)<br/>형식지 ➔ 암묵지<br/>행동·학습·개인 체화"]
  S --> E --> C --> I --> S`,
  },
  {
    id: "roi-03",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 92%+",
    title: "빅데이터 3대 위기 요인 & 통제 방안",
    formula: "사생활 침해(사후 책임 원칙) / 책임 원칙 훼손(알고리즘 접근권 보장) / 데이터 오용(알고리즈미스트 & 공정성)",
    trap: "[48회 6번·47회 8번 연계] 3대 위기요인은 사생활침해/책임원칙훼손/데이터오용! 익명화나 알고리즘 공개는 위기요인이 아닌 '대응방안(통제기제)'이며, 수집 사전동의제 강화는 오답!",
    sectionId: "adsp-understanding",
    tags: ["위기요인", "책임원칙", "알고리즘접근권", "알고리즈미스트"],
  },
  {
    id: "roi-04",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "데이터 웨어하우스(DW) 4대 특징",
    formula: "주제 지향성, 통합성, 시계열성, 비휘발성 (읽기 전용)",
    trap: "운영 데이터베이스(OLTP)와 달리 분석을 위해 과거 데이터를 누적 보관하므로 '비휘발성'을 가짐!",
    sectionId: "adsp-understanding",
    tags: ["DW", "데이터웨어하우스", "비휘발성", "주제지향성"],
  },
  {
    id: "roi-05",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 78%+",
    title: "데이터 마트(DM) vs 데이터 레이크",
    formula: "DM = 특정 부서 맞춤형 소규모 주제 DB / Data Lake = 모든 형태(정형·비정형) 원시 Raw 대규모 저장소",
    trap: "특정 부서(마케팅, 재무)의 빠른 의사결정 지원은 DW가 아니라 '데이터 마트(DM)'!",
    sectionId: "adsp-understanding",
    tags: ["데이터마트", "데이터레이크", "DM"],
  },
  {
    id: "roi-26",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "정성적 데이터 vs 정량적 데이터",
    formula: "정성적 = 언어·문자·비정형(해석 중심, 주관식 설문) / 정량적 = 수치·도형·기호(통계 분석 용이, 매출·온도)",
    trap: "설문조사의 주관식 텍스트나 SNS 글은 정량적이 아닌 '정성적 데이터'!",
    sectionId: "adsp-understanding",
    tags: ["정성적데이터", "정량적데이터", "데이터유형"],
  },
  {
    id: "roi-27",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "데이터 사이언티스트 핵심 역량 (Hard vs Soft)",
    formula: "Hard Skill = 빅데이터 이론·통계 기법·IT 엔지니어링 / Soft Skill = 통찰력·설득력 있는 전달·다분야 협업",
    trap: "분석 결과를 경영진에 설득력 있게 전달하는 프레젠테이션과 비즈니스 통찰력은 'Soft Skill'에 해당!",
    sectionId: "adsp-understanding",
    tags: ["데이터사이언티스트", "HardSkill", "SoftSkill", "역량"],
  },
  {
    id: "roi-28",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "빅데이터 가치 패러다임 변화 3단계",
    formula: "1단계: 디지털화(Digitalization) ➔ 2단계: 연결(Connection) ➔ 3단계: 에이전시(Agency/지능화)",
    trap: "가치 패러다임 3단계 발전 순서(디지털화 ➔ 연결 ➔ 에이전시) 암기 필수!",
    sectionId: "adsp-understanding",
    tags: ["패러다임", "디지털화", "연결", "에이전시"],
  },
  {
    id: "roi-29",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "마이데이터 (MyData)와 개인정보 전송요구권",
    formula: "정보주체(개인)가 본인의 데이터를 능동적으로 관리·통제하고, 본인 또는 제3자에게 전송을 요구할 권리",
    trap: "기업의 데이터 독점을 막고 정보주체의 '개인정보 자기결정권'을 실질적으로 보장하는 제도!",
    sectionId: "adsp-understanding",
    tags: ["마이데이터", "MyData", "전송요구권", "자기결정권"],
  },
  {
    id: "roi-30",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 82%+",
    title: "개인정보 비식별 조치 5대 기법",
    formula: "1) 가명처리(식별자 대체), 2) 총계처리(평균·합계), 3) 데이터 삭제(감추기), 4) 범주화(구간화), 5) 데이터 마스킹(***)",
    trap: "주민번호 뒷자리를 ***로 가리는 것은 '마스킹', 나이 23세를 20대로 묶는 것은 '범주화'!",
    sectionId: "adsp-understanding",
    tags: ["비식별화", "가명처리", "마스킹", "범주화"],
  },
  {
    id: "roi-51",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "데이터베이스 4대 본질 특성 & DBMS",
    formula: "통합 데이터(중복 최소화), 저장 데이터(컴퓨터 기억장치), 운영 데이터(조직 업무 필수), 공용 데이터(다수 동시 공유)",
    trap: "[48회 4번·47회 3번 기출!] DBMS는 다수 사용자가 자원을 동시 공유하는 '공용 데이터(Shared Data)'를 지원함! 기계가독성, 검색가능성, 원격조작성은 '정보의 축적 및 전달' 측면의 특성!",
    sectionId: "adsp-understanding",
    tags: ["데이터베이스", "DBMS", "공용데이터", "통합데이터", "원격조작성"],
  },
  {
    id: "roi-52",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "실시간 OLTP vs 분석용 OLAP & 익명화",
    formula: "OLTP = 일상 트랜잭션 실시간 기록·갱신(무결성/일관성) / OLAP = 다차원 대량 데이터 분석·의사결정 / 익명화 = 비가역적 재식별 불가 조치",
    trap: "[47회 9번·4번 기출!] 주문·결제 즉시 데이터베이스에 실시간으로 반영하여 무결성을 유지하는 것은 OLAP가 아닌 'OLTP'! 특정 개인을 다시 알아볼 수 없도록 비가역적으로 조치하는 것은 '익명화(Anonymization)'!",
    sectionId: "adsp-understanding",
    tags: ["OLTP", "OLAP", "익명화", "비식별화", "트랜잭션"],
  },

  // =================================================================
  // === [제2과목] 데이터 분석 기획 (12문항)
  // =================================================================
  {
    id: "roi-06",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "분석 과제 4분면 (What 대상 × How 방법)",
    formula: "최적화(Known×Known) / 솔루션(What Known×How Unknown) / 통찰(What Unknown×How Known) / 발견(Unknown×Unknown)",
    trap: "[48회 11번·47회 14번 연속 적중!] 분석 방법(How)은 아는데 대상(What)을 모르면 '통찰(Insight)', 대상을 아는데 방법(How)을 모르면 '솔루션(Solution)'!",
    sectionId: "adsp-planning",
    tags: ["4분면", "최적화", "솔루션", "통찰", "발견"],
    diagramTitle: "분석 과제 발굴 4분면 매트릭스",
    mermaidChart: `flowchart TD
  subgraph Q ["분석 과제 4분면 (대상 What × 방법 How)"]
    direction TB
    OPT["최적화 (Optimization)<br/>대상 앎(Known) × 방법 앎(Known)"]
    SOL["솔루션 (Solution - 47회)<br/>대상 앎(Known) × 방법 모름(Unknown)"]
    INS["통찰 (Insight - 48회)<br/>대상 모름(Unknown) × 방법 앎(Known)"]
    DIS["발견 (Discovery)<br/>대상 모름(Unknown) × 방법 모름(Unknown)"]
  end`,
  },
  {
    id: "roi-07",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "하향식 접근법(Top-Down) 4단계",
    formula: "문제 탐색 ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토",
    trap: "문제가 이미 주어진 상태에서 해법을 찾는 절차로, 4단계 순서 나열이 시험 단골!",
    sectionId: "adsp-planning",
    tags: ["하향식", "문제탐색", "문제정의", "타당성검토"],
  },
  {
    id: "roi-08",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "CRISP-DM 분석 방법론 6단계",
    formula: "업무 이해 ➔ 데이터 이해 ➔ 데이터 준비 ➔ 모델링 ➔ 평가 ➔ 전개",
    trap: "전체 프로젝트 기간의 60~80%가 소요되는 가장 많은 공수 단계는 '데이터 준비(Data Preparation)'!",
    sectionId: "adsp-planning",
    tags: ["CRISP-DM", "데이터준비", "방법론"],
    diagramTitle: "CRISP-DM 6단계 순환 피드백 프로세스",
    mermaidChart: `flowchart LR
  B["1. 업무 이해"] --> U["2. 데이터 이해<br/>(EDA 탐색)"]
  U --> P["3. 데이터 준비<br/>(60~80% 최다 공수)"]
  P --> M["4. 모델링"]
  M --> E["5. 평가"]
  E --> D["6. 전개"]
  M -.-> P
  E -.-> B`,
  },
  {
    id: "roi-09",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "분석 수준 진단 4분면 (준비도 × 성숙도)",
    formula: "준비형(준비도 低 × 성숙도 低) / 도입형(준비도 低 × 성숙도 高) / 정착형(준비도 高 × 성숙도 低) / 확산형(준비도 高 × 성숙도 高)",
    trap: "[47회 17번 기출 정답!] 조직·인력 등 인프라 준비도는 높으나 전사 업무 성숙도가 낮으면 '정착형(Settle)'! 둘 다 낮으면 준비형, 둘 다 높으면 확산형!",
    sectionId: "adsp-planning",
    tags: ["준비도", "성숙도", "정착형", "준비형", "도입형", "확산형"],
    diagramTitle: "분석 수준 진단 4분면 (준비도 × 성숙도 매트릭스)",
    mermaidChart: `flowchart TD
  subgraph LevelMatrix ["분석 수준 사분면 (준비도 Readiness × 성숙도 Maturity)"]
    direction TB
    Spread["확산형 (Spread)<br/>준비도 高 × 성숙도 高<br/>(전사적 분석 역량 완비)"]
    Settle["정착형 (Settle - 47회 17번 기출!)<br/>준비도 高 × 성숙도 低<br/>(인프라 준비 완료, 업무 정착 필요)"]
    Intro["도입형 (Introduction)<br/>준비도 低 × 성숙도 高<br/>(업무 실적 우수하나 인프라 미흡)"]
    Prep["준비형 (Preparation)<br/>준비도 低 × 성숙도 低<br/>(기반 및 역량 사전 준비 착수)"]
  end`,
  },
  {
    id: "roi-10",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 80%+",
    title: "분석 마스터플랜 과제 우선순위 (시급성 vs 난이도)",
    formula: "우선순위 3대 기준: 전략적 중요도, 비즈니스 성과(ROI), 실행 용이성(시급성/난이도). 최우선: 3사분면(시급성 高, 난이도 低 Quick-Win)",
    trap: "[48회 15번·47회 16번 연계] 데이터 양과 범위를 줄이는 것은 '난이도' 조정이지 비즈니스 '시급성'을 낮출 수 없음! 난이도 중심 추진 순서: 3사분면 ➔ 1사분면 ➔ 2사분면!",
    sectionId: "adsp-planning",
    tags: ["마스터플랜", "시급성", "난이도", "Quick-Win", "우선순위"],
    diagramTitle: "마스터플랜 과제 우선순위 평가 사분면",
    mermaidChart: `flowchart TD
  subgraph MP ["마스터플랜 추진 우선순위 사분면 (시급성 vs 난이도)"]
    direction TB
    Q3["3사분면 ★ 최우선 (Quick-Win)<br/>시급성 高 × 난이도 低"]
    Q1["1사분면 (난이도 기준 2순위)<br/>시급성 高 × 난이도 高"]
    Q2["2사분면 (시급성 기준 2순위)<br/>시급성 低 × 난이도 低"]
    Q4["4사분면 (중장기 과제)<br/>시급성 低 × 난이도 高"]
  end
  Q3 --> Q1 --> Q2 --> Q4`,
  },
  {
    id: "roi-31",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "분석 조직 구조 3가지 모델",
    formula: "집중형(전사 전담 CoE 총괄) / 기능형(전담 없이 각 현업 부서 수행) / 분산형(전담 분석가를 현업에 직접 배치)",
    trap: "전담 부서 없이 각 현업 부서가 자체적으로 필요할 때 분석을 수행하는 것은 '기능형 조직 구조'!",
    sectionId: "adsp-planning",
    tags: ["조직구조", "집중형", "기능형", "분산형"],
  },
  {
    id: "roi-32",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "CoE (Center of Excellence) 전담 센터",
    formula: "기업의 전사적 분석 역량을 내재화하고 분석 기획·방법론·교육을 표준화·총괄 지원하는 전문 조직",
    trap: "일회성 프로젝트 TF가 아니라 전사 데이터 거버넌스와 역량을 영구 총괄하는 전담 센터!",
    sectionId: "adsp-planning",
    tags: ["CoE", "조직", "거버넌스", "역량내재화"],
  },
  {
    id: "roi-33",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "소프트웨어 개발 모델 (나선형 vs 애자일)",
    formula: "폭포수(순차 하향식) / 나선형(목표➔위험분석➔개발➔평가 반복 점진적) / 애자일(짧은 스프린트, 기민한 변화 대응)",
    trap: "목표 설정 후 '위험 분석(Risk Analysis)'을 주기적으로 거치며 점진적으로 반복하는 모델은 '나선형 모델(Spiral)'!",
    sectionId: "adsp-planning",
    tags: ["SDLC", "폭포수", "나선형", "애자일", "위험분석"],
  },
  {
    id: "roi-34",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 85%+",
    title: "KDD 분석 방법론 5단계 순서",
    formula: "데이터셋 선택(Selection) ➔ 전처리(Preprocessing) ➔ 변환(Transformation) ➔ 데이터 마이닝(Mining) ➔ 평가(Evaluation)",
    trap: "잡음과 이상치를 제거하는 것은 '전처리', 파생변수를 만들고 차원을 축소하는 것은 '변환(Transformation)'!",
    sectionId: "adsp-planning",
    tags: ["KDD", "선택", "전처리", "변환", "데이터마이닝"],
  },
  {
    id: "roi-35",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 81%+",
    title: "데이터 거버넌스 4대 구성요소 & 표준화",
    formula: "조직, 프로세스, 시스템, 데이터 표준 (표준 단어, 표준 용어, 표준 도메인, 표준 코드)",
    trap: "데이터 표준화 관리 대상 4가지는 '단어, 용어, 도메인, 코드'!",
    sectionId: "adsp-planning",
    tags: ["거버넌스", "데이터표준", "용어사전", "도메인"],
  },
  {
    id: "roi-53",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "오컴의 면도날 법칙 & 거시적 STEEP 환경분석",
    formula: "오컴의 면도날: 동일 성능이면 단순한 모형 선택(설명력·해석력 우선) / STEEP: 사회(S), 기술(T), 경제(E), 환경(E), 정치(P)",
    trap: "[47회 11번·15번, 48회 11번 기출!] 모델의 복잡도를 무조건 높인다고 좋은 게 아님! 복잡할수록 과적합 위험과 설명 불가 리스크가 커지므로 단순 모형이 선호됨. 하향식 문제 탐색 시 STEEP 프레임워크 활용!",
    sectionId: "adsp-planning",
    tags: ["오컴의면도날", "STEEP", "복잡도", "과적합", "하향식탐색"],
  },
  {
    id: "roi-54",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "분석 프로젝트 품질 관리 (품질보증 QA vs 품질통제 QC)",
    formula: "품질보증(QA) = 프로젝트 수행 절차가 표준 프로세스를 준수하는지 점검 / 품질통제(QC) = 최종 산출물이 명세·품질 요구조건을 충족하는지 검토",
    trap: "[48회 14번 기출!] 품질 보증은 종료 시점이 아니라 '프로젝트 전 과정'에 걸쳐 수행됨! 품질 관리는 프로세스를 감사하는 '품질보증(QA)'과 산출물을 검사하는 '품질검토(QC)'로 구성!",
    sectionId: "adsp-planning",
    tags: ["품질관리", "품질보증", "QA", "QC", "프로젝트관리"],
  },

  // =================================================================
  // === [제3과목] 데이터 분석 (36문항 - 시험 60% 비중)
  // =================================================================
  {
    id: "roi-11",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "F1-Score (F-측도) 공식",
    formula: "F1 = 2 × (Precision × Recall) / (Precision + Recall) [정밀도와 재현율의 조화평균]",
    trap: "불균형 데이터 평가에서 정확도(Accuracy)의 왜곡을 방지하기 위해 쓰이며, 산술평균이 아닌 '조화평균'!",
    sectionId: "adsp-analysis",
    tags: ["F1-Score", "정밀도", "재현율", "조화평균"],
  },
  {
    id: "roi-12",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "로지스틱 회귀분석 & 오즈비 (Odds Ratio)",
    formula: "Odds = p / (1 - p), 로짓 연결함수 ln(p / (1 - p)) = β0 + β1*X, 독립변수 1단위 증가 시 승산 배율 = exp(β1)배",
    trap: "[48회 34번 기출!] 회귀계수의 exp값은 '확률'의 증가가 아니라 '승산(Odds = p/(1-p))'의 배율 증가! 연결함수(Link Function)는 '로짓 함수'이며 시그모이드는 역함수!",
    sectionId: "adsp-analysis",
    tags: ["로지스틱", "오즈비", "로짓", "Odds", "연결함수"],
  },
  {
    id: "roi-13",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "계층 군집 와드 연결법 (Ward's Method)",
    formula: "두 군집 병합 시 발생하는 군집 내 오차제곱합(SSE/ESS) 증가량 최소화 기준 병합",
    trap: "[48회 47번·47회 49번 2회 연속 출제!] 거리 기준이 아니라 '군집 내 편차 오차제곱합(SSE/ESS)의 증가분 최소화'를 기준으로 병합하여 비슷한 크기의 조밀한 구형 군집 형성!",
    sectionId: "adsp-analysis",
    tags: ["군집분석", "와드연결법", "ESS", "SSE", "오차제곱합"],
  },
  {
    id: "roi-14",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "왜도(Skewness)와 대표값 위치 관계",
    formula: "양의 왜도(오른쪽 긴 꼬리): 최빈값 < 중앙값 < 평균 / 음의 왜도(왼쪽 긴 꼬리): 평균 < 중앙값 < 최빈값",
    trap: "[47회 26번 기출!] 오른쪽으로 꼬리가 길면(양의 왜도) 극단적으로 큰 값들이 평균을 오른쪽으로 끌어당기므로 평균이 가장 큼! (최빈값 < 중앙값 < 평균)",
    sectionId: "adsp-analysis",
    tags: ["왜도", "Skewness", "평균", "중앙값", "최빈값"],
    diagramTitle: "왜도(비대칭 분포)에 따른 대표값 대소 관계",
    mermaidChart: `flowchart LR
  subgraph Pos ["양의 왜도 (Right-skewed, 오른쪽 긴 꼬리 - 47회)"]
    direction LR
    P1["최빈값 (Mode)"] --> P2["중앙값 (Median)"] --> P3["평균 (Mean, 최대)"]
  end
  subgraph Neg ["음의 왜도 (Left-skewed, 왼쪽 긴 꼬리)"]
    direction LR
    N1["평균 (Mean, 최소)"] --> N2["중앙값 (Median)"] --> N3["최빈값 (Mode)"]
  end`,
  },
  {
    id: "roi-15",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "연관성 분석 3대 지표 (장바구니 분석)",
    formula: "지지도 = n(A∩B)/N, 신뢰도 = n(A∩B)/n(A), 향상도 = P(A∩B) / (P(A)*P(B)) = 신뢰도 / P(B)",
    trap: "[48회 45·49·50번, 47회 50번 초빈출!] 품목 A, B가 상호 독립일 때 향상도는 0이 아니라 1! 향상도 > 1이면 보완재(양의 상관), 향상도 < 1이면 대체재(음의 상관)!",
    sectionId: "adsp-analysis",
    tags: ["지지도", "신뢰도", "향상도", "연관분석", "장바구니"],
  },
  {
    id: "roi-16",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "시계열 ACF / PACF 모형 식별",
    formula: "AR(p): PACF p차 시차 이후 절단 + ACF 지수감소 / MA(q): ACF q차 시차 이후 절단 + PACF 지수감소",
    trap: "PACF가 뚝 끊겨 절단되면 무조건 'AR 모형', ACF가 뚝 끊기면 'MA 모형'!",
    sectionId: "adsp-analysis",
    tags: ["시계열", "ACF", "PACF", "AR", "MA"],
    diagramTitle: "시계열 ACF / PACF 절단 판정 결정 트리",
    mermaidChart: `flowchart TD
  S["정상 시계열 데이터"] --> PACF{"PACF (부분자기상관)"}
  PACF -- "p차 시차 이후 절단<br/>(ACF 지수 감쇄)" --> AR["AR(p) 자기회귀 모형"]
  PACF -- "지수적 감쇄" --> ACF{"ACF (자기상관)"}
  ACF -- "q차 시차 이후 절단<br/>(PACF 지수 감쇄)" --> MA["MA(q) 이동평균 모형"]
  ACF -- "둘 다 지수적 감쇄" --> ARMA["ARMA(p, q) 혼합 모형"]`,
  },
  {
    id: "roi-17",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "앙상블: 배깅(Bagging) vs 부스팅(Boosting)",
    formula: "배깅(랜덤포레스트) = 독립 병렬 복원추출 ➔ '분산 감소' / 부스팅(XGBoost) = 오차 가중 순차 학습 ➔ '편향 감소'",
    trap: "배깅은 '분산(Variance) 감소', 부스팅은 '편향(Bias) 감소' 목적이 정반대!",
    sectionId: "adsp-analysis",
    tags: ["앙상블", "배깅", "부스팅", "분산감소", "편향감소"],
    diagramTitle: "배깅(병렬 분산감소) vs 부스팅(순차 편향감소) 구조",
    mermaidChart: `flowchart LR
  subgraph Bag ["배깅 (Bagging - 랜덤포레스트)"]
    direction TB
    B1["복원추출 (Bootstrap)"] --> B2["병렬 독립 모델 학습"] --> B3["다수결 투표 / 평균<br/>➔ 분산(Variance) 감소"]
  end
  subgraph Boost ["부스팅 (Boosting - XGBoost)"]
    direction TB
    S1["오분류 오차 가중치"] --> S2["순차적(Sequential) 학습"] --> S3["오차 보정 집중<br/>➔ 편향(Bias) 감소"]
  end`,
  },
  {
    id: "roi-18",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "다중공선성 (Multicollinearity) & VIF",
    formula: "VIF(분산팽창계수) ≥ 10이면 심각. 해결: 변수 제거, PCA 주성분 직교화, 릿지/라쏘 규제",
    trap: "F-검정 유의하고 R² 높으나 개별 t-검정이 유의하지 않고 부호가 왜곡될 때 의심!",
    sectionId: "adsp-analysis",
    tags: ["다중공선성", "VIF", "회귀분석", "PCA"],
  },
  {
    id: "roi-19",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "의사결정나무 불순도 (지니 vs 엔트로피)",
    formula: "지니 지수(CART, 50:50 분할 시 최댓값 0.5) / 엔트로피(C4.5, 50:50 분할 시 최댓값 1.0)",
    trap: "CART는 지니 지수를 사용하고 오직 '이진 분할'만 수행!",
    sectionId: "adsp-analysis",
    tags: ["의사결정나무", "CART", "지니지수", "엔트로피"],
  },
  {
    id: "roi-20",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "실루엣 계수 (Silhouette Coefficient)",
    formula: "s(i) = (b(i) - a(i)) / max(a(i), b(i)) [-1 ~ +1 범위]",
    trap: "1에 가까울수록 조밀·우수, 0 근처는 경계 중첩, 음수(-1)는 타 군집에 잘못 할당됨!",
    sectionId: "adsp-analysis",
    tags: ["실루엣", "군집평가", "비지도학습"],
  },
  {
    id: "roi-21",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "가설검정 오류 (제1종·제2종) & 검정력",
    formula: "제1종 오류(α: H0 참인데 기각) / 제2종 오류(β: H0 거짓인데 채택) / 검정력(1 - β)",
    trap: "표본 크기(N)를 대규모로 늘리면 제1종 오류와 제2종 오류를 동시에 줄일 수 있음!",
    sectionId: "adsp-analysis",
    tags: ["가설검정", "제1종오류", "제2종오류", "검정력"],
  },
  {
    id: "roi-22",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "모형 선택 지표 AIC (Akaike)",
    formula: "AIC = -2×ln(Likelihood) + 2k (우도 + 변수 개수 복잡도 페널티)",
    trap: "값이 '작을수록(최소일수록)' 적합도와 간명성을 갖춘 우수한 모형!",
    sectionId: "adsp-analysis",
    tags: ["AIC", "BIC", "모형선택", "회귀분석"],
  },
  {
    id: "roi-23",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "R² vs 수정된 결정계수 (Adjusted R²)",
    formula: "일반 R²는 쓰레기 변수 추가해도 항상 증가/유지 ➔ 다중회귀 모형 간 비교는 자유도 반영한 수정된 R² 필수",
    trap: "독립변수 수가 다른 다중회귀 모델을 비교할 때 일반 R²를 쓰면 과적합된 모델이 선택됨!",
    sectionId: "adsp-analysis",
    tags: ["결정계수", "수정된R2", "회귀평가"],
  },
  {
    id: "roi-24",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "아프리오리 알고리즘 (Apriori)",
    formula: "어떤 항목집합이 빈발하지 않으면, 이를 포함하는 모든 슈퍼셋도 빈발하지 않다",
    trap: "최소 지지도 기준 미달 집합의 가지치기(Pruning)로 탐색 공간을 극적으로 축소!",
    sectionId: "adsp-analysis",
    tags: ["아프리오리", "Apriori", "가지치기", "연관규칙"],
  },
  {
    id: "roi-25",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 82%+",
    title: "랜덤 포레스트 OOB (Out-of-Bag)",
    formula: "부트스트랩 복원추출 시 선택되지 않고 남은 약 36.8%의 데이터로 별도 검증셋 없이 자체 평가",
    trap: "별도의 Validation 데이터셋 분할 없이도 일반화 오차를 객관적으로 측정 가능!",
    sectionId: "adsp-analysis",
    tags: ["OOB", "랜덤포레스트", "부트스트랩"],
  },
  {
    id: "roi-36",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "상관계수 비교: 피어슨 vs 스피어만",
    formula: "피어슨 = 등간/비율 척도, 선형(Linear) 관계, 선형변환(상수 덧셈·양수 곱셈) 시 불변 / 스피어만 = 서열/순위 척도, 비모수, 단조(Monotonic) 관계",
    trap: "[48회 28번·47회 37번 연속 적중!] 피어슨은 X에 0.3을 더하고 Y에 0.2를 더해도 r은 불변! 비선형이라도 순위 기반 단조 증가/감소 관계를 측정하려면 '스피어만 상관계수' 필수!",
    sectionId: "adsp-analysis",
    tags: ["상관계수", "피어슨", "스피어만", "순위척도", "선형변환"],
  },
  {
    id: "roi-37",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "더빈-왓슨(Durbin-Watson) 검정과 잔차 독립성",
    formula: "검정통계량 d ≈ 2이면 자기상관 없음(독립성 만족), 0에 가까우면 양의 자기상관, 4에 가까우면 음의 자기상관",
    trap: "d = 0이 아니라 'd ≈ 2'일 때 자기상관이 없고 독립성을 만족한다는 점이 킬러 함정!",
    sectionId: "adsp-analysis",
    tags: ["더빈왓슨", "DurbinWatson", "독립성", "잔차분석"],
  },
  {
    id: "roi-38",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "PCA 주성분 개수 결정 기준 3가지",
    formula: "1) 고윳값(Eigenvalue) ≥ 1 (카이저 기준) / 2) 누적설명분산비율 70~85% 이상 / 3) 스크리 플롯 엘보우 지점",
    trap: "스크리 산점도에서 곡선 경사가 완만해지는 엘보우(Elbow) 지점 직전의 주성분 수를 선택!",
    sectionId: "adsp-analysis",
    tags: ["PCA", "카이저기준", "고윳값", "스크리플롯"],
  },
  {
    id: "roi-39",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "혼동행렬 특이도(Specificity)와 1-특이도(FPR)",
    formula: "특이도(TNR) = TN / (TN + FP) [실제 음성 중 맞춘 비율] / 위양성률(FPR) = 1 - 특이도 = FP / (TN + FP)",
    trap: "ROC 곡선의 가로축(X축)은 특이도 자체가 아니라 '1 - 특이도(위양성률, FPR)'임에 유의!",
    sectionId: "adsp-analysis",
    tags: ["특이도", "Specificity", "FPR", "혼동행렬"],
    diagramTitle: "혼동행렬 2×2 구조 및 4대 성능 평가지표",
    mermaidChart: `flowchart TD
  subgraph CM ["혼동행렬 (Confusion Matrix)"]
    direction TB
    TP["TP: 실제 True / 예측 True"]
    FN["FN: 실제 True / 예측 False (2종 오류)"]
    FP["FP: 실제 False / 예측 True (1종 오류)"]
    TN["TN: 실제 False / 예측 False"]
  end
  TP & FP --> P["정밀도(Precision) = TP / (TP + FP)"]
  TP & FN --> R["재현율(Recall/TPR) = TP / (TP + FN)"]
  FP & TN --> S["특이도(TNR) = TN / (FP + TN)"]
  S --> FPR["위양성률(FPR) = 1 - 특이도 (ROC 가로축)"]`,
  },
  {
    id: "roi-40",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 92%+",
    title: "군집 거리 척도: 유클리드 vs 맨해튼 vs 마할라노비스",
    formula: "유클리드 = 최단 직선 / 맨해튼 = L1 격자(|Δx|+|Δy|) / 마할라노비스 = 공분산 역행렬 반영 상관성·표준편차 보정 거리",
    trap: "[48회 43번 기출!] 변수들의 측정 단위(척도) 차이뿐만 아니라 변수 간의 통계적 상관관계(공분산)까지 함께 고려하여 거리를 측정하는 것은 '마할라노비스 거리'!",
    sectionId: "adsp-analysis",
    tags: ["거리척도", "유클리드", "맨해튼", "마할라노비스", "공분산"],
  },
  {
    id: "roi-41",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "완전연결법(최장) vs 단일연결법(최단)",
    formula: "단일연결 = 군집 간 최단거리 (사슬 형태 체이닝 발생, 이상치 취약) / 완전연결 = 군집 간 최장거리 (체이닝 방지)",
    trap: "사슬처럼 길게 늘어지는 체이닝(Chaining) 문제가 발생하는 것은 완전연결이 아니라 '단일연결법'!",
    sectionId: "adsp-analysis",
    tags: ["계층군집", "단일연결법", "완전연결법", "체이닝효과"],
  },
  {
    id: "roi-42",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "k-Means 비계층 군집화의 한계와 단점",
    formula: "중심점(Centroid) 기반 빠른 연산. 단점: 1) 이상치 민감, 2) 초기 중심점 위치 의존성, 3) k값 사전 지정 필수, 4) 비구형 군집 실패",
    trap: "이상치에 매우 취약하며, 초기 중심점 위치에 따라 로컬 최적해에 빠질 수 있음!",
    sectionId: "adsp-analysis",
    tags: ["k-Means", "비계층군집", "중심점", "초기값"],
  },
  {
    id: "roi-43",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "선형회귀 4대 기본 가정 & 잔차 진단",
    formula: "선형성(산점도/다항회귀), 독립성(더빈-왓슨 d≈2), 등분산성(잔차 산점도 균일 폭), 정규성(Q-Q 플롯, 샤피로-윌크 p≥0.05)",
    trap: "[48회 29번·47회 36번 기출!] 잔차 산점도가 2차 곡선(U자 형태)을 보이면 선형성 가정 위배 ➔ '다항 회귀(Polynomial Regression)'로 개선해야 함!",
    sectionId: "adsp-analysis",
    tags: ["회귀가정", "선형성", "등분산성", "정규성", "잔차분석", "다항회귀"],
  },
  {
    id: "roi-44",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "시계열 차분(Differencing)과 계절 차분",
    formula: "일반 차분(∇Yt = Yt - Yt-1) ➔ '평균 추세(Trend) 제거' / 계절 차분(Yt - Yt-s) ➔ '계절성(Seasonality) 제거'",
    trap: "시간에 따라 분산이 변하는 경우는 차분이 아니라 '로그 변환'을 적용해야 함!",
    sectionId: "adsp-analysis",
    tags: ["시계열", "차분", "계절차분", "정상성", "추세제거"],
  },
  {
    id: "roi-45",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "변수 선택법 3가지 (전진, 후진, 단계적)",
    formula: "전진(절편부터 유의 변수 추가) / 후진(전체에서 무의미 변수 제거) / 단계적(추가와 제거를 반복하며 기존 변수 재평가)",
    trap: "변수가 매우 많고 설명변수 간 다중공선성이 심할 때 후진제거법은 시작부터 모델 피팅이 불안정할 수 있음!",
    sectionId: "adsp-analysis",
    tags: ["변수선택법", "전진선택법", "후진제거법", "단계적선택법"],
  },
  {
    id: "roi-46",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "의사결정나무 가지치기(Pruning) 목적",
    formula: "트리의 과적합(Overfitting) 방지. 학습 데이터 오차는 약간 허용하되 검증 데이터 일반화 오차를 최소화",
    trap: "가치치기를 하지 않은 최대 트리는 학습 데이터 정확도는 100%에 가깝지만 실제 테스트 시 과적합으로 성능 폭락!",
    sectionId: "adsp-analysis",
    tags: ["의사결정나무", "가지치기", "과적합방지", "비용복잡도"],
  },
  {
    id: "roi-47",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 83%+",
    title: "정규성 검정: 샤피로-윌크(Shapiro-Wilk)",
    formula: "H0(귀무가설): 데이터가 정규분포를 따른다. p-value ≥ 0.05면 귀무가설 채택 ➔ 정규성 만족",
    trap: "p-value가 0.05보다 작으면 귀무가설 기각 ➔ 정규분포를 따르지 않는다고 판정!",
    sectionId: "adsp-analysis",
    tags: ["샤피로윌크", "정규성검정", "p-value", "가설검정"],
  },
  {
    id: "roi-48",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 82%+",
    title: "텍스트 마이닝 TF-IDF 가중치 공식",
    formula: "TF-IDF = TF(단어의 문서 내 빈도) × IDF(단어의 역문서 빈도 = log(전체문서수 / 단어등장문서수))",
    trap: "문서 내 빈도가 높더라도 모든 문서에 흔하게 등장하는 불용어(the, a 등)는 IDF가 낮아져 가중치가 낮아짐!",
    sectionId: "adsp-analysis",
    tags: ["TF-IDF", "텍스트마이닝", "단어빈도", "역문서빈도"],
  },
  {
    id: "roi-49",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 81%+",
    title: "요약변수 vs 파생변수 비교",
    formula: "요약변수 = 기간별 합계, 결제 횟수 등 단순 집계 / 파생변수 = 분석가가 조건식·수식으로 특정 의미를 부여해 새로 정의",
    trap: "최근 3개월 구매 총금액은 '요약변수', 주말/평일 구매 비율을 계산해 VIP성향을 정의한 것은 '파생변수'!",
    sectionId: "adsp-analysis",
    tags: ["요약변수", "파생변수", "데이터마트", "피처엔지니어링"],
  },
  {
    id: "roi-50",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 80%+",
    title: "R기초 패키지 reshape vs plyr",
    formula: "reshape = melt(넓은 형태➔긴 형태 변환) & cast(긴 형태➔넓은 형태 요약) / plyr = ddply (데이터 분할·적용·결합)",
    trap: "가로로 넓은 데이터를 세로로 긴(Long) 데이터로 녹이는 함수는 'melt()'!",
    sectionId: "adsp-analysis",
    tags: ["R패키지", "reshape", "melt", "cast", "plyr"],
  },
  {
    id: "roi-55",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "측정 척도 4단계 (명목·서열·등간·비율) & 절대영점",
    formula: "명목(구분, 성별) ➔ 서열(순서, 학점) ➔ 등간(간격일정, 덧셈/뺄셈, 절대영점 없음, 온도) ➔ 비율(절대영점 존재, 사칙연산/배수 가능, 무게·길이·매출)",
    trap: "[48회 25번·47회 21번 연속 출제!] 섭씨온도는 절대영점이 없어 2배 뜨겁다고 할 수 없는 '등간척도'! '절대적인 참된 0(부재)'이 존재하여 나눗셈/비율 계산이 가능한 최상위 척도는 '비율척도'!",
    sectionId: "adsp-analysis",
    tags: ["척도", "등간척도", "비율척도", "절대영점", "사칙연산"],
  },
  {
    id: "roi-56",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "상자그림(Box Plot) 안쪽울타리 수식 & 표본크기 한계",
    formula: "IQR = Q3 - Q1 / 하한펜스 = Q1 - 1.5*IQR / 상한펜스 = Q3 + 1.5*IQR (펜스 밖 = 이상치)",
    trap: "[47회 23번·48회 21번·22번 기출!] 상자그림은 사분위수 기반이며 표준오차(SE)를 쓰지 않음! 또한 상자그림만으로는 각 집단의 '전체 관측치 개수(표본 크기 N)'를 직접 파악할 수 없음!",
    sectionId: "adsp-analysis",
    tags: ["상자그림", "BoxPlot", "IQR", "안쪽울타리", "이상치", "표본크기"],
    diagramTitle: "상자그림(Box Plot) 5수치 & 울타리/이상치 구조",
    mermaidChart: `flowchart TD
  OH["상한 이상치 (Outlier)"] --> UF["상한 안쪽울타리: Q3 + 1.5 * IQR (47회)"]
  UF --> MAX["정상 관측 최댓값 (Whisker 끝)"]
  MAX --> Q3["제3사분위수 (Q3, 상위 75%)"]
  Q3 --> M["중앙값 (Median, Q2 50%)"]
  M --> Q1["제1사분위수 (Q1, 상위 25%)"]
  Q1 --> MIN["정상 관측 최솟값 (Whisker 끝)"]
  MIN --> LF["하한 안쪽울타리: Q1 - 1.5 * IQR (47회)"]
  LF --> OL["하한 이상치 (Outlier)"]`,
  },
  {
    id: "roi-57",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "확률적 표본추출: 군집(집락)추출 vs 층화추출",
    formula: "층화추출 = 집단(층) 내 동질적, 집단 간 이질적 (각 층 무작위 추출) / 군집추출 = 군집 내 이질적(소모집단), 군집 간 동질적 (군집 통째로 추출)",
    trap: "[47회 27번 기출 정답!] 군집(집락)추출은 '군집 내부는 이질적, 군집 간에는 동질적'이어야 함! 집단 내 동질적, 집단 간 이질적인 것은 '층화추출법'!",
    sectionId: "adsp-analysis",
    tags: ["표본추출", "군집추출", "층화추출", "이질적", "동질적"],
    diagramTitle: "층화추출 vs 군집추출 집단 내/간 특성 비교",
    mermaidChart: `flowchart LR
  subgraph Stratified ["층화추출법 (Stratified)"]
    direction TB
    S1["집단(층) 내: 동질적 (Homogeneous)"]
    S2["집단(층) 간: 이질적 (Heterogeneous)"]
    S3["각 층마다 무작위 표본 추출"]
    S1 --> S2 --> S3
  end
  subgraph Cluster ["군집(집락)추출법 (Cluster - 47회 정답)"]
    direction TB
    C1["군집 내: 이질적 (모집단 축소판)"]
    C2["군집 간: 동질적 (Mutual Homogeneous)"]
    C3["선택된 군집 전체를 전수 조사"]
    C1 --> C2 --> C3
  end`,
  },
  {
    id: "roi-58",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "단순회귀 잔차 자유도(n-2) 및 평균제곱오차(MSE)",
    formula: "단순회귀: 전체 표본 수 n = 잔차 자유도 + 2(모수: 절편, 기울기) / MSE = SSE / (n - 2)",
    trap: "[48회 37번·47회 31번 계산 기출!] 단순회귀 잔차자유도가 576이면 표본수 n = 576 + 2 = 578개! SSE=20, n=10이면 MSE = 20/(10-2) = 20/8 = 2.50! (n이 아닌 n-2로 나눔!)",
    sectionId: "adsp-analysis",
    tags: ["단순회귀", "잔차자유도", "MSE", "SSE", "분산분석표"],
    diagramTitle: "회귀분석 제곱합 분해 & 자유도 분산분석 구조",
    mermaidChart: `flowchart TD
  SST["총제곱합 (SST)<br/>자유도: n - 1"] --> SSR["회귀제곱합 (SSR)<br/>자유도: 1 (기울기 모수)"]
  SST --> SSE["잔차제곱합 (SSE)<br/>자유도: n - 2 (48회 기출)"]
  SSE --> MSE["MSE = SSE / (n - 2) (47회 계산 기출)"]
  MSE --> F["F-통계량 = MSR / MSE<br/>(모형 전체 유의성 검정)"]`,
  },
  {
    id: "roi-59",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "인공신경망 활성화 함수: 소프트맥스 vs 시그모이드",
    formula: "시그모이드 = 이진분류/로지스틱, 출력 [0, 1], 기울기소실 문제 / 소프트맥스 = 다중분류 출력층, 모든 클래스 확률 총합 = 1",
    trap: "[48회 42번·47회 41번·43번 기출!] 3개 이상 클래스를 분류하는 다중분류 출력층에서 확률 총합이 1이 되도록 정규화하는 함수는 '소프트맥스(Softmax)'! 뉴런의 비선형 변환 함수 = 활성화 함수!",
    sectionId: "adsp-analysis",
    tags: ["활성화함수", "소프트맥스", "시그모이드", "인공신경망", "다중분류"],
    diagramTitle: "이진분류(Sigmoid) vs 다중분류(Softmax) 결정 경로",
    mermaidChart: `flowchart LR
  In["선형 가중합<br/>z = WX + b"] --> Task{"분류 문제 유형"}
  Task -- "이진 분류 (Binary)" --> Sig["시그모이드 (Sigmoid)<br/>출력: 0 ~ 1 독립 확률<br/>임계값 0.5 기준 판정"]
  Task -- "다중 분류 (Multi-class)" --> Soft["소프트맥스 (Softmax - 47회 기출)<br/>K개 클래스 확률 총합 = 1<br/>최대 확률 클래스 선택"]`,
  },
  {
    id: "roi-60",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "정형 데이터마이닝 5단계 절차 & 회귀 잔차도 U자형",
    formula: "목적 정의 ➔ 데이터 준비 ➔ 데이터 가공(전처리·파생변수) ➔ 마이닝 기법 적용(모델링) ➔ 검증 및 평가",
    trap: "[48회 40번·29번 기출!] 데이터 준비(수집) 다음은 모델링이 아니라 '데이터 가공(가 ➔ 나 ➔ 다 ➔ 라 ➔ 마)'! 회귀분석 후 잔차도가 U자 곡선을 띠면 비선형이므로 '다항 회귀'를 적용해야 함!",
    sectionId: "adsp-analysis",
    tags: ["데이터마이닝", "수행단계", "잔차도", "다항회귀", "비선형"],
    diagramTitle: "정형 데이터마이닝 5단계 순차 워크플로우",
    mermaidChart: `flowchart LR
  S1["1. 목적 정의"] --> S2["2. 데이터 준비<br/>(원천 데이터 수집)"]
  S2 --> S3["3. 데이터 가공<br/>(전처리·파생변수)"]
  S3 --> S4["4. 마이닝 기법 적용<br/>(알고리즘 모델링)"]
  S4 --> S5["5. 검증 및 평가"]`,
  },
];

const DEFAULT_MEMO_TEMPLATE = `[💡 나의 ADsP 시험 직전 최종 암기 노트 (48회·47회 최신 반영)]
=========================================
[제1과목 데이터 이해]
- DIKW: 데이터(사실) ➔ 정보(의미) ➔ 지식(규칙) ➔ 지혜(통찰)
- SECI: 공통화(암묵→암묵), 표출화(암묵→형식), 연결화(형식→형식/48회), 내면화(형식→암묵)
- DB 본질 특성: 통합(최소중복), 저장, 운영, 공용(다수공유/48회), 원격조작성(47회)
- DW 4대 특징: 주제 지향성, 통합성, 시계열성, 비휘발성 (OLTP=실시간/47회)
- 빅데이터 위기 통제: 사생활 침해(사후 책임원칙), 책임 훼손(알고리즘 접근권), 오용(알고리즈미스트)

[제2과목 데이터 분석 기획]
- 분석 4분면: 최적화(K×K), 솔루션(What K×How U/47회), 통찰(What U×How K/48회), 발견(U×U)
- 분석 수준 4분면: 정착형(준비도 高×성숙도 低/47회), 준비형(둘 다 低), 도입형(준비도 低×성숙도 高), 확산형(둘 다 高)
- 하향식 4단계: 문제 탐색(STEEP) ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토
- CRISP-DM 6단계: 업무이해 ➔ 데이터이해(EDA) ➔ 데이터준비(가공/정제) ➔ 모델링 ➔ 평가 ➔ 전개
- 마스터플랜 우선순위: 3사분면(시급성 高, 난이도 低 Quick-Win 최우선)
- 프로젝트 관리: 품질보증 QA(프로세스 전 과정) vs 품질통제 QC(산출물 검사) (48회)

[제3과목 데이터 분석 (60% 비중)]
- 척도: 등간(절대영점 없음, 온도) vs 비율(절대영점 존재, 사칙연산/배수/48·47회)
- 상자그림: IQR=Q3-Q1, 하한=Q1-1.5*IQR, 상한=Q3+1.5*IQR (표본크기 N 확인불가/48·47회)
- 표본추출: 층화(층 내 동질, 층 간 이질) vs 군집(군집 내 이질, 군집 간 동질/47회)
- 단순회귀: 잔차자유도 = n - 2 (n = df + 2/48회), MSE = SSE / (n - 2) (47회)
- 잔차도 U자형 곡선: 비선형 패턴 ➔ 다항 회귀(Polynomial) 적용 (48회)
- F1-Score = 2*(Precision*Recall)/(Precision+Recall) (조화평균)
- 로지스틱 오즈비 = exp(회귀계수) = 승산 배율 증가, 연결함수 = 로짓(Logit/48회)
- 신경망 출력층: 이진=시그모이드, 다중분류=소프트맥스(확률 총합=1/47회)
- 와드연결법 = 군집 내 오차제곱합(SSE/ESS) 증가량 최소화 (48·47회 연속 출제!)
- 왜도 양수(오른쪽 긴 꼬리): 최빈값 < 중앙값 < 평균 (47회)
- 연관성 지표: 지지도 P(A∩B), 신뢰도 P(B|A), 향상도 = 독립 시 1, Lift>1 보완재 (48·47회)
- 시계열 ACF/PACF: PACF 절단 ➔ AR / ACF 절단 ➔ MA, 추세 비정상 ➔ 차분
- 다중공선성: VIF ≥ 10이면 심각 (해결: 변수제거, PCA, 릿지/라쏘)
- 더빈-왓슨 d ≈ 2 ➔ 자기상관 없음(독립성 만족), AIC = 작을수록 우수
- 군집 거리: 마할라노비스 = 상관관계 & 분산 보정 통계적 거리 (48회)
`;

export function AdspFloatingMemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState<"roi" | "scratchpad">("roi");

  // 필터링 상태
  const [selectedSubject, setSelectedSubject] = useState<"all" | "ch1" | "ch2" | "ch3">("all");
  const [selectedGrade, setSelectedGrade] = useState<"all" | "S" | "A" | "B">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyDiagrams, setOnlyDiagrams] = useState(false);

  // 즐겨찾기(북마크) 상태
  const [starredIds, setStarredIds] = useState<string[]>([]);

  // 도표 펼침 상태 (ID 배열)
  const [expandedDiagramIds, setExpandedDiagramIds] = useState<string[]>([]);

  // 유저 스크래치패드 메모 상태
  const [userNotes, setUserNotes] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isCopiedNotes, setIsCopiedNotes] = useState(false);

  // 로컬 스토리지 메모 및 즐겨찾기 동기화
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedNotes = localStorage.getItem("adsp_mindmap_scratchpad");
      if (savedNotes !== null) {
        setUserNotes(savedNotes);
      } else {
        setUserNotes(DEFAULT_MEMO_TEMPLATE);
      }

      const savedStarred = localStorage.getItem("adsp_mindmap_favorites");
      if (savedStarred !== null) {
        try {
          setStarredIds(JSON.parse(savedStarred));
        } catch {
          setStarredIds([]);
        }
      }
    }
  }, []);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNotesChange = (text: string) => {
    setUserNotes(text);
    if (typeof window !== "undefined") {
      localStorage.setItem("adsp_mindmap_scratchpad", text);
    }
  };

  const toggleStar = (id: string) => {
    setStarredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      if (typeof window !== "undefined") {
        localStorage.setItem("adsp_mindmap_favorites", JSON.stringify(next));
      }
      return next;
    });
  };

  const toggleDiagram = (id: string) => {
    setExpandedDiagramIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyCard = (item: RoiMemoItem) => {
    const textToCopy = `[ADsP 기출 빈출 - ${item.title}]\n공식: ${item.formula}\n주의: ${item.trap}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleCopyAllNotes = () => {
    navigator.clipboard.writeText(userNotes);
    setIsCopiedNotes(true);
    setTimeout(() => setIsCopiedNotes(false), 1800);
  };

  const handleResetNotes = () => {
    if (window.confirm("메모장을 기본 템플릿으로 초기화할까요?")) {
      handleNotesChange(DEFAULT_MEMO_TEMPLATE);
    }
  };

  // 검색 및 필터링된 ROI 리스트
  const filteredList = useMemo(() => {
    return ADSP_ROI_ITEMS.filter((item) => {
      if (onlyFavorites && !starredIds.includes(item.id)) return false;
      if (onlyDiagrams && !item.mermaidChart) return false;
      if (selectedSubject !== "all" && item.subjectId !== selectedSubject) return false;
      if (selectedGrade !== "all" && item.grade !== selectedGrade) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inFormula = item.formula.toLowerCase().includes(q);
        const inTrap = item.trap.toLowerCase().includes(q);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!inTitle && !inFormula && !inTrap && !inTags) return false;
      }
      return true;
    });
  }, [selectedSubject, selectedGrade, searchQuery, onlyFavorites, onlyDiagrams, starredIds]);

  // 과목별 문항 수 집계
  const subjectCounts = useMemo(() => {
    return {
      all: ADSP_ROI_ITEMS.length,
      ch1: ADSP_ROI_ITEMS.filter((i) => i.subjectId === "ch1").length,
      ch2: ADSP_ROI_ITEMS.filter((i) => i.subjectId === "ch2").length,
      ch3: ADSP_ROI_ITEMS.filter((i) => i.subjectId === "ch3").length,
    };
  }, []);

  // 마인드맵 특정 섹션으로 스크롤 이동
  const handleScrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <>
      {/* 1. 우측 하단 플로팅 트리거 버튼 */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 px-5 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 active:scale-95"
        >
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-white" />
          </span>
          <Flame className="size-5 fill-white transition-transform group-hover:rotate-12" />
          <span className="text-sm font-bold tracking-tight">
            기출빈도 ROI 전략 메모장
          </span>
          <span className="rounded-full bg-black/25 px-2 py-0.5 text-xs font-semibold backdrop-blur-sm">
            60선
          </span>
        </Button>
      </div>

      {/* 2. 중앙 대형 모달창 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-3 backdrop-blur-sm print:hidden sm:p-6 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className={cn(
              "flex flex-col rounded-2xl border border-border bg-card shadow-2xl transition-all duration-200 overflow-hidden",
              isMaximized
                ? "h-full w-full max-w-7xl"
                : "h-[85vh] w-full max-w-4xl"
            )}
          >
            {/* 상단 헤더 바 */}
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-sm">
                  <Flame className="size-4 fill-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
                    ADsP 기출빈도 ROI 전략 메모장
                    <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                      48회·47회 최신 반영
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    48회·47회 최신 기출 전수 반영 60대 킬러 개념 &amp; 나만의 시험 요약장
                  </p>
                </div>
              </div>

              {/* 창 최대화 / 닫기 컨트롤 */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMaximized((prev) => !prev)}
                  title={isMaximized ? "원래 크기로" : "최대화"}
                >
                  {isMaximized ? (
                    <Minimize2 className="size-4" />
                  ) : (
                    <Maximize2 className="size-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                  title="닫기"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>

            {/* 탭 전환 바 (ROI 랭킹 60제 vs 나만의 직전 암기장) */}
            <div className="flex border-b border-border bg-muted/20 px-5 pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("roi")}
                className={cn(
                  "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                  activeTab === "roi"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <Flame className="size-3.5 fill-current" />
                기출 빈출 ROI 랭킹 (60제)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scratchpad")}
                className={cn(
                  "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                  activeTab === "scratchpad"
                    ? "border-amber-500 text-amber-600 dark:text-amber-400"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <FileText className="size-3.5" />
                나만의 직전 암기장 (Scratchpad)
                {userNotes.trim().length > 0 && (
                  <span className="size-1.5 rounded-full bg-amber-500 ml-1" />
                )}
              </button>
            </div>

            {/* [TAB 1] 기출 빈출 ROI 랭킹 목록 */}
            {activeTab === "roi" && (
              <div className="flex flex-1 flex-col overflow-hidden">
                {/* 검색 바 & 필터 컨트롤 */}
                <div className="flex flex-col gap-3 border-b border-border bg-muted/15 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    {/* 검색 바 */}
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="토픽명, 키워드 검색 (예: 와드, 오즈, 척도, 상자그림, 소프트맥스, 더빈왓슨, F1, 왜도, 마할라노비스)..."
                        className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-8 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          <X className="size-3.5" />
                        </button>
                      )}
                    </div>

                    {/* 북마크 필터 토글 */}
                    <Button
                      variant={onlyFavorites ? "default" : "outline"}
                      size="sm"
                      onClick={() => setOnlyFavorites((prev) => !prev)}
                      className={cn(
                        "h-9 gap-1.5 text-xs font-semibold",
                        onlyFavorites
                          ? "bg-amber-600 hover:bg-amber-700 text-white"
                          : "text-muted-foreground"
                      )}
                    >
                      <Star className={cn("size-3.5", onlyFavorites ? "fill-white" : "fill-amber-500 text-amber-500")} />
                      즐겨찾기 ({starredIds.length})
                    </Button>

                    {/* 도표 필터 토글 */}
                    <Button
                      variant={onlyDiagrams ? "default" : "outline"}
                      size="sm"
                      onClick={() => setOnlyDiagrams((prev) => !prev)}
                      className={cn(
                        "h-9 gap-1.5 text-xs font-semibold",
                        onlyDiagrams
                          ? "bg-amber-600 hover:bg-amber-700 text-white"
                          : "text-muted-foreground"
                      )}
                    >
                      <BarChart3 className={cn("size-3.5", onlyDiagrams ? "text-white" : "text-amber-500")} />
                      도표 요약 ({ADSP_ROI_ITEMS.filter((i) => Boolean(i.mermaidChart)).length})
                    </Button>
                  </div>

                  {/* 과목 선택 탭 */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                    {(
                      [
                        { id: "all", label: `전체 과목 (${subjectCounts.all})` },
                        { id: "ch1", label: `1. 데이터 이해 (${subjectCounts.ch1})` },
                        { id: "ch2", label: `2. 데이터 분석 기획 (${subjectCounts.ch2})` },
                        { id: "ch3", label: `3. 데이터 분석 60% (${subjectCounts.ch3})` },
                      ] as const
                    ).map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setSelectedSubject(sub.id)}
                        className={cn(
                          "shrink-0 rounded-md px-2.5 py-1 font-medium transition-colors",
                          selectedSubject === sub.id
                            ? "bg-foreground text-background font-semibold"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        )}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>

                  {/* 등급(Grade) 필터 및 카운터 */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-[11px] font-medium text-muted-foreground mr-1">
                      우선순위:
                    </span>
                    {(
                      [
                        { id: "all", label: "전체 등급" },
                        { id: "S", label: "🏆 [S] 초빈출 킬러" },
                        { id: "A", label: "🥈 [A] 핵심 빈출" },
                        { id: "B", label: "🥉 [B] 기본 개념" },
                      ] as const
                    ).map((gr) => (
                      <button
                        key={gr.id}
                        type="button"
                        onClick={() => setSelectedGrade(gr.id)}
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors border",
                          selectedGrade === gr.id
                            ? "border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold"
                            : "border-border bg-background text-muted-foreground hover:bg-muted"
                        )}
                      >
                        {gr.label}
                      </button>
                    ))}
                    <span className="ml-auto text-[11px] text-muted-foreground">
                      총 <strong>{filteredList.length}</strong>개 토픽 검색됨
                    </span>
                  </div>
                </div>

                {/* 카드 리스트 영역 */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                  {filteredList.length === 0 ? (
                    <div className="flex h-64 flex-col items-center justify-center gap-2 text-center text-muted-foreground">
                      <HelpCircle className="size-10 stroke-[1.5]" />
                      <p className="text-sm">조건에 일치하는 기출 ROI 토픽이 없습니다.</p>
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedSubject("all");
                          setSelectedGrade("all");
                          setOnlyFavorites(false);
                          setOnlyDiagrams(false);
                        }}
                        className="gap-1 text-xs text-amber-600 dark:text-amber-400"
                      >
                        <RotateCcw className="size-3" />
                        검색 필터 초기화
                      </Button>
                    </div>
                  ) : (
                    filteredList.map((item) => {
                      const isStarred = starredIds.includes(item.id);
                      const isDiagramExpanded = expandedDiagramIds.includes(item.id);

                      return (
                        <div
                          key={item.id}
                          className="group relative rounded-xl border border-border bg-card p-4 transition-all hover:border-amber-500/40 hover:shadow-md"
                        >
                          {/* 카드 상단 배지 및 헤더 */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex flex-wrap items-center gap-1.5">
                              {/* 등급 배지 */}
                              <span
                                className={cn(
                                  "rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider",
                                  item.grade === "S"
                                    ? "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30"
                                    : item.grade === "A"
                                    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30"
                                    : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                                )}
                              >
                                Tier {item.grade === "S" ? "1 [S]" : item.grade === "A" ? "2 [A]" : "3 [B]"}
                              </span>

                              <span className="rounded bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                                {item.subjectName}
                              </span>

                              <span className="flex items-center gap-0.5 rounded bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                                <Sparkles className="size-3" />
                                {item.frequencyRate}
                              </span>
                            </div>

                            {/* 즐겨찾기 및 복사 버튼 */}
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => toggleStar(item.id)}
                                className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-amber-500 transition-colors"
                                title={isStarred ? "즐겨찾기 해제" : "즐겨찾기 저장"}
                              >
                                {isStarred ? (
                                  <Star className="size-4 text-amber-500 fill-amber-500" />
                                ) : (
                                  <Star className="size-4" />
                                )}
                              </button>
                              <button
                                type="button"
                                onClick={() => handleCopyCard(item)}
                                className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                title="요약 복사"
                              >
                                {copiedId === item.id ? (
                                  <Check className="size-4 text-emerald-500" />
                                ) : (
                                  <Copy className="size-4" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* 토픽 타이틀 (MathText 적용) */}
                          <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                            <MathText text={item.title} />
                          </h4>

                          {/* 핵심 공식 / 정답 키워드 박스 (MathText 적용) */}
                          <div className="rounded-lg border border-border/80 bg-muted/40 p-3 mb-2.5 font-mono text-xs text-foreground/90 leading-relaxed overflow-x-auto">
                            <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground mb-1">
                              <Zap className="size-3 text-amber-500" />
                              <span>핵심 메커니즘 &amp; 판정 공식:</span>
                            </div>
                            <MathText text={item.formula} />
                          </div>

                          {/* 시험 함정 주의 포인트 (MathText 적용) */}
                          <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                            <div className="flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400 mb-0.5">
                              <AlertTriangle className="size-3.5" />
                              <span>출제관 공략 &amp; 시험장 함정 방어 포인트:</span>
                            </div>
                            <MathText text={item.trap} />
                          </div>

                          {/* Mermaid 도표 시각화 토글 영역 */}
                          {item.mermaidChart && (
                            <div className="mt-2.5">
                              <button
                                type="button"
                                onClick={() => toggleDiagram(item.id)}
                                className={cn(
                                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all",
                                  isDiagramExpanded
                                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                                    : "bg-muted/80 text-foreground/80 hover:bg-muted border border-border/60 hover:border-amber-500/40"
                                )}
                              >
                                <BarChart3 className="size-3.5 text-amber-500" />
                                <span>{isDiagramExpanded ? "도표 요약 접기" : "📊 핵심 구조·도표 보기"}</span>
                                {isDiagramExpanded ? (
                                  <ChevronUp className="size-3.5 text-muted-foreground" />
                                ) : (
                                  <ChevronDown className="size-3.5 text-muted-foreground" />
                                )}
                              </button>

                              {isDiagramExpanded && (
                                <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                                  <AdspRoiMermaid
                                    id={item.id}
                                    chart={item.mermaidChart}
                                    title={item.diagramTitle || `${item.title} 시각화 다이어그램`}
                                  />
                                </div>
                              )}
                            </div>
                          )}

                          {/* 하단 태그 및 마인드맵 바로가기 */}
                          <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-xs">
                            <div className="flex flex-wrap gap-1 text-[11px] text-muted-foreground">
                              {item.tags.map((tag) => (
                                <span key={tag} className="hover:text-amber-600 dark:hover:text-amber-400">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            <button
                              type="button"
                              onClick={() => handleScrollToSection(item.sectionId)}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                            >
                              마인드맵 이동
                              <ExternalLink className="size-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {/* [TAB 2] 나만의 직전 암기장 (Scratchpad) */}
            {activeTab === "scratchpad" && (
              <div className="flex flex-1 flex-col p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <BookmarkCheck className="size-4 text-amber-500" />
                    작성한 내용은 브라우저(localStorage)에 실시간 자동 저장됩니다.
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs gap-1.5 px-3"
                      onClick={handleCopyAllNotes}
                    >
                      {isCopiedNotes ? (
                        <>
                          <Check className="size-3.5 text-emerald-500" />
                          복사 완료
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          전체 복사
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs gap-1.5 px-3 text-muted-foreground hover:text-destructive"
                      onClick={handleResetNotes}
                    >
                      <RotateCcw className="size-3.5" />
                      기본 서식으로 초기화
                    </Button>
                  </div>
                </div>

                <textarea
                  value={userNotes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  placeholder="시험 직전 헷갈리는 공식이나 나만의 암기 팁을 자유롭게 적어보세요..."
                  className="flex-1 w-full rounded-xl border border-input bg-card p-4 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none leading-relaxed"
                />
                <div className="mt-2.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>총 글자 수: {userNotes.length.toLocaleString()}자</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ 실시간 자동 저장됨</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
