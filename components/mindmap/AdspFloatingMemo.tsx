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
  // === [제1과목] 데이터 이해 (15문항: 기존 12선 최신화 + 신규 3선)
  // =================================================================
  {
    id: "roi-01",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "DIKW 피라미드 4단계 & 사례 구분",
    formula: "데이터(Data: 객관적 사실) ➔ 정보(Information: 의미·맥락 부여) ➔ 지식(Knowledge: 규칙·원리) ➔ 지혜(Wisdom: 통찰·창의적 전략)",
    trap: "[50회 1번·49회 3·4번 연속 출제!] 1) '통찰(Insight)'은 DIKW 기본 4단계 명칭이 아님(50회 1번 정답)! 2) 데이터 가공 시 중간 정보(I) 단계 없이 곧바로 지식(K)으로 도약한다는 설명은 오답(49회 3번)! 3) '내수 비중은 65%이다'는 정보(I), '수출 다변화·공급망 재편 전략을 추진한다'는 지혜(W)(49회 4번)!",
    sectionId: "adsp-understanding",
    tags: ["DIKW", "데이터", "정보", "지식", "지혜", "통찰함정"],
    diagramTitle: "DIKW 계층 피라미드 & 가치 상승 구조 (50·49회 기출)",
    mermaidChart: `flowchart TD
  W["지혜 (Wisdom - 49회 4번)<br/>통찰력 / 수출 다변화·사업 전환 등 미래 전략"]
  K["지식 (Knowledge)<br/>상호 연결된 정보의 구조화·규칙·원리"]
  I["정보 (Information - 49회 4번)<br/>의미·맥락 부여 (예: 내수 소비 비중 65%)"]
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
    frequencyRate: "출제율 99%+",
    title: "SECI 모델 (지식 변환 4단계 나선 구조)",
    formula: "공통화(암묵➔암묵) ➔ 표출화(암묵➔형식) ➔ 연결화(형식➔형식) ➔ 내면화(형식➔암묵)",
    trap: "[50회 4번·49회 2번·48회 1번·47회 1번 4회 연속 출제!] 내면에 체화되어 언어·문서로 표현하기 어려운 지식 = '암묵지(50회 4번)'! 암묵지를 언어·기호·도표·문서 등 형식지로 외부화 = '표출화(49회 2번)'! 형식지들을 조합·체계화 = '연결화(48회 1번)'! 경험 공유 전수 = '공통화(47회 1번)'!",
    sectionId: "adsp-understanding",
    tags: ["SECI", "암묵지", "형식지", "표출화", "연결화", "공통화", "내면화"],
    diagramTitle: "SECI 모델 지식 상호작용 선순환 나선 구조 (47~50회 전 단계 출제)",
    mermaidChart: `flowchart LR
  S["1. 공통화 (Socialization - 47회)<br/>암묵지 ➔ 암묵지<br/>현장 경험·노하우 직접 전수"]
  E["2. 표출화 (Externalization - 49회)<br/>암묵지(50회) ➔ 형식지<br/>언어·도표·문서·매뉴얼화"]
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
    frequencyRate: "출제율 95%+",
    title: "빅데이터 3대 위기 요인 & 통제 방안",
    formula: "사생활 침해(동의제➔사후 책임 원칙) / 책임 원칙 훼손(알고리즘 접근권 보장) / 데이터 오용(알고리즈미스트 & 공정성 감사)",
    trap: "[49회 8번 ㄱ~ㅁ 조합형·48회 6·8번·47회 8번 연속 출제!] 예측 알고리즘으로 잠재 행위를 사전 처벌하는 것은 '책임 원칙 훼손(49회 ㄴ)'! 알고리즘 피해 구제·설명 책임 전문가는 '알고리즈미스트(49회 ㅁ)'! 사전 동의(Opt-in) 강화만으로 완벽 통제된다거나 비식별화로 사후 통제가 불필요하다는 보기는 오답!",
    sectionId: "adsp-understanding",
    tags: ["위기요인", "책임원칙", "알고리즘접근권", "알고리즈미스트", "사후책임"],
  },
  {
    id: "roi-04",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "데이터 웨어하우스(DW) 4대 특징 & CRM",
    formula: "DW 4대 특징: 주제 지향성, 통합성, 시계열성, 비휘발성(읽기 전용) / CRM: 고객 접점 데이터 통합·생애가치(LTV) 극대화 시스템",
    trap: "[50회 6번 기출!] 운영 데이터베이스(OLTP)와 달리 DW는 분석을 위해 과거 데이터를 누적 보관하므로 '비휘발성'을 가짐! 고객 생애 주기 전반의 경험을 개선하고 장기 충성 고객을 확보하는 기업 정보 시스템은 'CRM(고객관계관리)'!",
    sectionId: "adsp-understanding",
    tags: ["DW", "데이터웨어하우스", "비휘발성", "주제지향성", "CRM"],
  },
  {
    id: "roi-05",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "데이터 마트(DM) vs 데이터 레이크 (Data Lake)",
    formula: "DM = 전사 DW로부터 특정 부서(마케팅·영업)나 특정 분석 주제에 맞춰 요약·구축한 소규모 저장소 / Data Lake = 정형·비정형 원시(Raw) 대규모 저장소",
    trap: "[50회 5번·49회 1번 2회 연속 출제!] 데이터 마트가 전사 모든 원천 데이터를 관리하는 중앙 저장소라는 설명은 오답(DW 설명)! 전사적 DW로부터 특정 부서나 분석 주제 영역에 초점을 맞춰 맞춤형으로 구축된 저장소가 '데이터 마트(DM)'!",
    sectionId: "adsp-understanding",
    tags: ["데이터마트", "데이터레이크", "DM", "DW"],
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
    frequencyRate: "출제율 95%+",
    title: "데이터 사이언티스트 핵심 역량 (Hard vs Soft)",
    formula: "Hard Skill = 빅데이터 이론·통계/수학·MapReduce/Spark·DB 인덱스 튜닝 / Soft Skill = 도메인 기반 문제 정의·시각화 스토리텔링·협업 소통",
    trap: "[50회 10번·48회 9번 기출!] MapReduce 파이프라인 개발, RDBMS B-Tree 인덱스 설계, 경사하강법 수식 유도는 모두 Hard Skill! 비즈니스 도메인 지식을 바탕으로 문제를 정의하고 이해관계자를 설득하는 시각화 스토리텔링은 'Soft Skill'!",
    sectionId: "adsp-understanding",
    tags: ["데이터사이언티스트", "HardSkill", "SoftSkill", "역량", "스토리텔링"],
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
    frequencyRate: "출제율 98%+",
    title: "데이터베이스 4대 고유 특성 & 운영 특성",
    formula: "4대 고유 특성: 통합(중복 배제), 저장(컴퓨터 매체), 운영(업무 필수), 공용(다수 공유) / 운영 특성: 실시간 접근성, 계속적인 변화, 동시 공용, 내용에 의한 참조",
    trap: "[50회 3번·49회 5·6번·48회 4번·47회 3번 전 회차 출제!] 1) 다수 사용자의 동시 접근을 차단하는 '독립된 단독 데이터'는 오답(50회 3번, 공용 데이터)! 2) 삽입·삭제·갱신으로 최신성을 동적 유지하는 특성은 '계속적인 변화(49회 5번 정답)'! 3) 모든 DB가 오직 2차원 테이블로만 저장된다는 보기는 오답(49회 6번, NoSQL 다차원 구조)!",
    sectionId: "adsp-understanding",
    tags: ["데이터베이스", "DBMS", "공용데이터", "계속적인변화", "원격조작성"],
  },
  {
    id: "roi-52",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "실시간 OLTP vs 다차원 분석용 OLAP & 익명화",
    formula: "OLTP = 일상 거래 트랜잭션 실시간 처리(ACID 무결성) / OLAP = DW·DM의 다차원 대량 데이터 집계·분석·의사결정 / 익명화 = 비가역적 재식별 불가 조치",
    trap: "[49회 7번·47회 9번·4번 기출!] DW나 데이터 마트에 축적된 방대한 다차원 데이터를 빠르게 집계·조회하여 분석적 통찰을 얻는 시스템은 'OLAP(49회 7번 정답)'! 주문·결제 실시간 트랜잭션 처리는 'OLTP(47회 9번)'!",
    sectionId: "adsp-understanding",
    tags: ["OLTP", "OLAP", "익명화", "비식별화", "트랜잭션"],
  },
  {
    id: "roi-61",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "하둡 맵리듀스(MapReduce) & 빅데이터 사후처리 패러다임",
    formula: "Map(입력 분할 ➔ Key-Value 쌍 변환) ➔ Shuffle/Sort ➔ Reduce(동일 Key 데이터 취합·집계) / 패러다임 변화: 사전처리➔사후처리, 표본➔전수, 질➔양, 인과➔상관",
    trap: "[50회 7번·8번 기출!] 맵리듀스는 Scale-out 분산 병렬 처리 프레임워크로 Map과 Reduce 단계로 처리함(50회 7번)! 또한 빅데이터 시대에는 사전 정제 후 적재하던 방식에서 원시 데이터를 대량 수집한 뒤 분석 목적에 맞게 가공하는 '사후처리(Schema-on-Read)'로 전환됨(50회 8번)!",
    sectionId: "adsp-understanding",
    tags: ["맵리듀스", "MapReduce", "하둡", "사후처리", "패러다임"],
  },
  {
    id: "roi-62",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "소셜 네트워크 분석(SNA) 중심성 지표 & 유전 알고리즘",
    formula: "연결 중심성(직접 연결 수) / 매개 중심성(최단 경로 상 정보 중개·통제) / 근접 중심성(모든 노드까지 최단거리) / 유전 알고리즘(적자생존·자연선택·교차·돌연변이 최적화)",
    trap: "[50회 9번·49회 10번 기출!] SNA는 그래프 이론과 인접 행렬을 통해 수학적·정량적 계산이 가능하므로 '정량화가 불가능하다'는 보기는 오답(50회 9번)! 다윈의 적자생존·돌연변이·교차 등 생물학적 진화 원리를 모방해 최적해를 탐색하는 기법은 '유전 알고리즘(49회 10번 정답)'!",
    sectionId: "adsp-understanding",
    tags: ["SNA", "소셜네트워크분석", "매개중심성", "연결중심성", "유전알고리즘"],
    diagramTitle: "SNA 4대 중심성 지표 & 빅데이터 분석 기법 매칭 (50·49회 기출)",
    mermaidChart: `flowchart LR
  subgraph SNA ["소셜 네트워크 분석 (SNA - 50회 9번)"]
    direction TB
    D["연결 중심성 (Degree)<br/>직접 연결된 링크 수"]
    B["매개 중심성 (Betweenness)<br/>최단 경로 상 중개·브로커 역할"]
    C["근접 중심성 (Closeness)<br/>전체 노드까지 최단거리 역수"]
    E["고유벡터 중심성 (Eigenvector)<br/>영향력 큰 노드와의 연결 가중치"]
  end
  subgraph Tech ["최적화 & 마이닝 기법 (49회 10번)"]
    direction TB
    GA["유전 알고리즘 (Genetic)<br/>적자생존·교차·돌연변이 최적해 탐색"]
    SA["감성 분석 (Sentiment)<br/>텍스트 긍정·부정 극성 판별"]
  end`,
  },
  {
    id: "roi-63",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 85%+",
    title: "디지털 데이터 용량 단위 계층 & 비트(Bit)/바이트(Byte)",
    formula: "최소 단위: 1 Bit(0 또는 1 이진 상태) ➔ 1 Byte(8 Bits) ➔ KB(2¹⁰) ➔ MB(2²⁰) ➔ GB(2³⁰) ➔ TB(2⁴⁰) ➔ PB(2⁵⁰) ➔ EB(2⁶⁰) ➔ ZB(2⁷⁰) ➔ YB(2⁸⁰)",
    trap: "[50회 2번·49회 9번 연속 출제!] 정보 표현의 물리적·논리적 최소 단위는 1바이트가 아니라 '1비트(Bit)'이며 1 Byte = 8 Bits, 1 KB = 1,024 Byte(50회 2번)! 용량 단위 크기 순서 'Byte ➔ KB ➔ MB ➔ GB ➔ TB ➔ PB ➔ EB ➔ ZB ➔ YB(킬메기테페엑제요)'에서 MB와 GB 순서를 바꾼 함정 주의(49회 9번)!",
    sectionId: "adsp-understanding",
    tags: ["용량단위", "비트", "바이트", "페타바이트", "제타바이트", "요타바이트"],
  },

  // =================================================================
  // === [제2과목] 데이터 분석 기획 (15문항: 기존 12선 최신화 + 신규 3선)
  // =================================================================
  {
    id: "roi-06",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "분석 과제 4분면 (What 대상 × How 방법)",
    formula: "최적화(Known×Known) / 솔루션(What Known×How Unknown) / 통찰(What Unknown×How Known) / 발견(Unknown×Unknown)",
    trap: "[49회 11번·48회 11번·47회 14번 3회 연속 적중!] 분석 방법(How)은 아는데 대상(What)을 모르면 '통찰(Insight)', 대상을 아는데 방법(How)을 모르면 '솔루션(Solution)', 대상과 방법을 모두 모르면 통찰이 아니라 '발견(Discovery, 49회 11번 오답 함정)'!",
    sectionId: "adsp-planning",
    tags: ["4분면", "최적화", "솔루션", "통찰", "발견"],
    diagramTitle: "분석 과제 발굴 4분면 매트릭스 (49·48·47회 3연속 출제)",
    mermaidChart: `flowchart TD
  subgraph Q ["분석 과제 4분면 (대상 What × 방법 How)"]
    direction TB
    OPT["최적화 (Optimization - 49회)<br/>대상 앎(Known) × 방법 앎(Known)"]
    SOL["솔루션 (Solution - 47·49회)<br/>대상 앎(Known) × 방법 모름(Unknown)"]
    INS["통찰 (Insight - 48·49회)<br/>대상 모름(Unknown) × 방법 앎(Known)"]
    DIS["발견 (Discovery - 49회)<br/>대상 모름(Unknown) × 방법 모름(Unknown)"]
  end`,
  },
  {
    id: "roi-07",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "하향식(Top-Down) vs 상향식(Bottom-Up) 접근법 & 융합",
    formula: "하향식(문제 명확·가설 검증 연역적): 문제 탐색 ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토 / 상향식(문제 미정의·데이터 EDA/비지도 탐색 귀납적) / 디자인 씽킹(발산·수렴 반복 융합)",
    trap: "[50회 15번·49회 15·16·17번 대량 출제!] 문제가 정의되지 않은 상태에서 보유 데이터를 EDA·비지도학습으로 탐색해 과제를 도출하는 것은 '상향식 접근법(50·49회 15번)'! 목표가 명확할 때 가설을 검증하는 것은 '하향식 접근법(49회 16번)'! 실제 환경에서는 두 방식을 배타적으로 분리하지 않고 상호보완적으로 융합함(49회 17번)!",
    sectionId: "adsp-planning",
    tags: ["하향식", "상향식", "문제탐색", "문제정의", "타당성검토", "디자인씽킹"],
  },
  {
    id: "roi-08",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "CRISP-DM 분석 방법론 6단계 & 전개 모니터링",
    formula: "업무 이해 ➔ 데이터 이해(EDA) ➔ 데이터 준비(정제·통합) ➔ 모델링(기법선택·테스트설계·모델작성·모델기술평가) ➔ 평가(비즈니스 목표 검토·프로세스 리뷰) ➔ 전개(이관·모니터링·재학습)",
    trap: "[50회 14번·49회 12번·48회 12번 연속 출제!] 1) 비즈니스 최종 목표 달성 여부 검토 및 전체 프로세스 리뷰(Review Process)는 모델링 단계가 아니라 '평가(Evaluation) 단계' 태스크(50회 14번 정답)! 2) 평가 및 전개 단계에서는 배포 후 '모니터링 및 재학습(Retraining) 관리 계획'을 반드시 수립해야 함(49회 12번 정답)!",
    sectionId: "adsp-planning",
    tags: ["CRISP-DM", "데이터이해", "데이터준비", "모델링", "평가", "전개"],
    diagramTitle: "CRISP-DM 6단계 순환 피드백 프로세스 (50·49·48회 기출)",
    mermaidChart: `flowchart LR
  B["1. 업무 이해"] --> U["2. 데이터 이해<br/>(EDA·품질식별 - 48회)"]
  U --> P["3. 데이터 준비<br/>(정제·통합 60~80% 공수)"]
  P --> M["4. 모델링<br/>(기법선택·테스트설계·모델작성)"]
  M --> E["5. 평가 (50회 14번)<br/>(목표달성 검토·프로세스 리뷰)"]
  E --> D["6. 전개 (49회 12번)<br/>(이관·모니터링·재학습 계획)"]
  M -.-> P
  E -.-> B`,
  },
  {
    id: "roi-09",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 92%+",
    title: "분석 수준 진단 4분면 (준비도 Readiness × 성숙도 Maturity)",
    formula: "준비형(준비도 低 × 성숙도 低) / 도입형(준비도 低 × 성숙도 高) / 정착형(준비도 高 × 성숙도 低) / 확산형(준비도 高 × 성숙도 高)",
    trap: "[50회 19·20번·47회 17번 기출!] 6대 영역의 분석 준비도와 CMMI 기반 분석 성숙도가 모두 낮은 기업 유형은 '준비형(50회 20번 정답)'! 준비도는 높으나 활용 성숙도가 낮으면 '정착형(47회 17번 정답)'! 진단 목적은 현재 역량 수준을 파악해 단계별 이행 로드맵을 수립하는 것(50회 19번)!",
    sectionId: "adsp-planning",
    tags: ["준비도", "성숙도", "정착형", "준비형", "도입형", "확산형"],
    diagramTitle: "분석 수준 진단 4분면 (준비도 × 성숙도 매트릭스 - 50·47회 기출)",
    mermaidChart: `flowchart TD
  subgraph LevelMatrix ["분석 수준 사분면 (준비도 Readiness × 성숙도 Maturity)"]
    direction TB
    Spread["확산형 (Spread)<br/>준비도 高 × 성숙도 高<br/>(전사적 분석 역량 완비)"]
    Settle["정착형 (Settle - 47회 17번 정답!)<br/>준비도 高 × 성숙도 低<br/>(인프라 준비 완료, 실무 정착 필요)"]
    Intro["도입형 (Introduction)<br/>준비도 低 × 성숙도 高<br/>(분석 활용도는 높으나 인프라 미흡)"]
    Prep["준비형 (Preparation - 50회 20번 정답!)<br/>준비도 低 × 성숙도 低<br/>(기초 인프라·조직 사전 준비 착수)"]
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
    frequencyRate: "출제율 95%+",
    title: "분석 조직 구조 3가지 모델 (집중형·기능형·분산형)",
    formula: "집중형(독립된 전사 분석 전담 부서 CoE 총괄) / 기능형(별도 전담 없이 각 현업 부서 자체 수행) / 분산형(전담 분석 인력을 현업 부서에 직접 배치)",
    trap: "[49회 19번·47회 18번 기출!] 전사 차원의 독립된 분석 전담 부서(CoE)를 두고 전사 분석 과제의 기획·인력 배분·인프라 관리를 집중 수행하는 구조는 '집중형 조직 구조(49회 19번 정답)'! 현업 부서와의 우선순위 갈등이 생길 수 있음!",
    sectionId: "adsp-planning",
    tags: ["조직구조", "집중형", "기능형", "분산형", "CoE"],
  },
  {
    id: "roi-32",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "CoE (Center of Excellence) & 기업 정보시스템(IS)",
    formula: "CoE = 전사적 분석 역량 내재화·기획·교육 총괄 전문 조직 / 정보시스템(IS) = 내·외부 데이터를 수집·가공·분석해 의사결정권자에게 적시 정보 제공",
    trap: "[49회 18번 기출!] 정보 시스템(Information System)은 조직의 내·외부 데이터를 체계적으로 수집·저장·가공·분석하여 의사결정권자에게 적시에 유용한 정보를 제공함으로써 비즈니스 가치를 창출함!",
    sectionId: "adsp-planning",
    tags: ["CoE", "정보시스템", "거버넌스", "역량내재화"],
  },
  {
    id: "roi-33",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 91%+",
    title: "분석 프로젝트 수행 모델 (나선형 vs 프로토타입 vs 폭포수)",
    formula: "나선형(계획➔위험분석➔개발➔고객평가 반복, 위험 조기 통제) / 프로토타입(시제품 신속 제작·피드백) / 파일럿 검증➔유효성 평가➔전사 확산",
    trap: "[50회 12·17번·49회 13번·47회 13번 기출!] 초기 요구사항 불명확 시 핵심 프로세스를 반복하며 '위험을 조기에 식별·관리'하고 완성도를 점진적으로 발전시키는 모델은 '나선형 모델(Spiral, 49회 13번 정답)'! 분석 프로젝트는 EDA와 모델링 피드백에 따라 초기 계획과 가설을 반복적(Iterative)으로 유연하게 수정·보완해야 함(50회 17번)!",
    sectionId: "adsp-planning",
    tags: ["SDLC", "폭포수", "나선형", "프로토타입", "위험분석", "파일럿"],
  },
  {
    id: "roi-34",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "KDD 분석 방법론 5단계 순서",
    formula: "데이터 선택(Selection) ➔ 데이터 전처리(Preprocessing) ➔ 데이터 변환(Transformation) ➔ 데이터 마이닝(Data Mining) ➔ 결과 해석 및 평가(Interpretation/Evaluation)",
    trap: "[50회 13번 기출 정답!] 잡음·이상치·결측치를 정제하는 2단계는 '전처리(Preprocessing)', 변수 생성·정규화·차원 축소를 수행하는 3단계는 '변환(Transformation)'! 5단계 순서를 뒤섞은 선지 주의!",
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
    formula: "원칙(Principles), 조직(Organization), 프로세스(Process), 관리체계 / 데이터 표준화: 표준 단어, 표준 용어, 표준 도메인, 표준 코드",
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
    trap: "[47회 11번·15번 기출!] 모델의 복잡도를 무조건 높인다고 좋은 게 아님! 복잡할수록 과적합 위험과 설명 불가 리스크가 커지므로 단순 모형이 선호됨. 하향식 문제 탐색 시 STEEP 프레임워크 활용!",
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
  {
    id: "roi-64",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "과녁판 비유: 정확도(Accuracy) vs 정밀도(Precision) & 오분류율",
    formula: "정확도(Accuracy) = 측정값들의 평균이 참값(과녁 중심)에 가까운 정도(낮은 편향 Bias) / 정밀도(Precision) = 반복 측정 시 값들이 일관되게 한곳에 모여 있는 안정성(낮은 분산 Variance) / 오분류율 = 1 - 정확도",
    trap: "[50회 35번·49회 14번 기출!] 관측값들이 과녁 중심에서 벗어나 있더라도 조밀하게 한곳에 모여 있다면 정확도가 높은 것이 아니라 '정밀도(Precision, 반복 측정의 안정성·재현성)'가 높은 상태(49회 14번 정답)! 전체 정확도가 0.4(40%)이면 오분류율(Error Rate)은 1 - 0.4 = 0.6(50회 35번 정답)!",
    sectionId: "adsp-planning",
    tags: ["정확도", "정밀도", "Accuracy", "Precision", "오분류율", "과녁비유"],
    diagramTitle: "과녁판 비유: 정확도(편향 Bias) × 정밀도(분산 Variance) 4유형 (49회 14번)",
    mermaidChart: `flowchart TD
  subgraph Target ["과녁판 측정 품질 비교 (49회 14번 기출)"]
    direction TB
    T1["정확도 高 × 정밀도 高<br/>과녁 정중앙에 조밀하게 밀집 (이상적)"]
    T2["정확도 低 × 정밀도 高 (★ 49회 킬러)<br/>과녁 중심에선 벗어났으나 한곳에 일관되게 밀집<br/>(안정성·재현성 높음, 분산 낮음)"]
    T3["정확도 高 × 정밀도 低<br/>탄착군 넓게 퍼져 있으나 평균 중심은 정중앙"]
    T4["정확도 低 × 정밀도 低<br/>중심에서도 벗어나고 산만하게 흩어짐"]
  end`,
  },
  {
    id: "roi-65",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "분석 거버넌스 5대 관리 구성요소 & 분석 과제 정의서",
    formula: "분석 거버넌스 5대 구성요소: 조직(Organization), 프로세스(Process), 시스템(System), 데이터(Data), 인력(Human Resource) / 분석 과제 정의서(Project Charter): Why·What·Data·How·일정·KPI",
    trap: "[50회 11번·18번 기출!] 분석 거버넌스는 단순 IT 시스템 구축만이 아니라 조직·프로세스·시스템·데이터·인력(교육 및 마인드 육성)의 5대 영역이 통합 관리되어야 함(50회 18번)! 분석 과제 정의서에는 분석 목적(Why/What), 데이터 소스(Data), 분석 방법 및 평가지표(How)가 포함됨(50회 11번)!",
    sectionId: "adsp-planning",
    tags: ["분석거버넌스", "과제정의서", "ProjectCharter", "인력양성", "분석문화"],
  },
  {
    id: "roi-66",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "반정형 데이터(Semi-structured) & 협의의 분석 플랫폼",
    formula: "정형(RDBMS 고정 스키마) vs 반정형(태그·메타데이터 포함, 파싱 해석: JSON, XML, HTML, 웹 로그, 센서) vs 비정형(영상·음성·텍스트) / 협의의 분석 플랫폼 = 분석 엔진·분석 라이브러리·데이터 저장소·시각화 UI 계층",
    trap: "[50회 16번·49회 20번 기출!] 1) 고정 테이블 스키마는 아니지만 내부에 태그나 메타데이터를 포함해 파싱(Parsing)으로 구조를 해석할 수 있는 JSON, XML, 웹 서버 로그, 센서 데이터는 '반정형 데이터'(50회 16번 정답)! 2) 데이터 센터 건물, 항온항습 설비, 전력 인프라는 광의의 물리 인프라로 '협의의 분석 플랫폼'에 해당하지 않음(49회 20번 정답)!",
    sectionId: "adsp-planning",
    tags: ["반정형데이터", "JSON", "XML", "웹로그", "분석플랫폼", "파싱"],
  },

  // =================================================================
  // === [제3과목] 데이터 분석 (45문항: 기존 36선 최신화 + 신규 9선)
  // =================================================================
  {
    id: "roi-11",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "F1-Score (F-측도) 공식 & 혼동행렬 실전 계산",
    formula: "Precision = TP/(TP+FP), Recall = TP/(TP+FN) / F1 = 2 × (Precision × Recall) / (Precision + Recall) [조화평균]",
    trap: "[49회 44번 계산 기출·48회 44번·47회 44번 3회 연속 출제!] 49회 44번 실전 수치: TP=3, FN=5, FP=8, TN=24일 때 재현율(Recall) = 3/(3+5) = 3/8, 정밀도(Precision) = 3/(3+8) = 3/11 ➔ F1-Score = 2 × (9/88) / (57/88) = 18/57 = 6/19!",
    sectionId: "adsp-analysis",
    tags: ["F1-Score", "정밀도", "재현율", "조화평균", "혼동행렬"],
  },
  {
    id: "roi-12",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "로지스틱 회귀분석: 로그 오즈(로짓) & 오즈비(Odds Ratio)",
    formula: "이항 분류 모형(연체=1, 정상=0) / 오즈(Odds) = p / (1 - p) / 로짓 연결함수 ln(p / (1 - p)) = β₀ + β₁X / X가 1단위 증가 시: 로그 오즈는 β₁만큼 증가, 오즈(승산)는 exp(β₁)배 증가",
    trap: "[50회 30·37번·48회 34번 연속 출제!] 50회 37번 킬러: 회귀계수 β₁ = 0.6일 때 X₁이 1단위 증가하면 사건 발생 확률(p) 자체가 0.6 증가하는 것이 아니라, '로그 오즈(Log-odds, 로짓) 값이 0.6만큼 증가'함(오즈는 exp(0.6)배 증가)! 연결함수는 '로짓 함수'!",
    sectionId: "adsp-analysis",
    tags: ["로지스틱", "오즈비", "로그오즈", "로짓", "Odds", "연결함수"],
  },
  {
    id: "roi-13",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "계층 군집 와드 연결법 (Ward's Linkage Method)",
    formula: "두 군집을 병합했을 때 발생하는 군집 내 오차제곱합(SSE / ESS)의 증가량(ΔSSE)이 최소가 되도록 병합하는 방식",
    trap: "[49회 47번·48회 47번·47회 49번 3회 연속 출제!] 단순 점 간 거리(최단/최장/평균)가 아니라 '군집 내 오차제곱합(SSE) 증가량 최소화'라는 키워드가 나오면 1초 만에 '와드 연결법(Ward's Method)' 선택! 크기가 비슷한 구형 군집을 형성함!",
    sectionId: "adsp-analysis",
    tags: ["군집분석", "와드연결법", "ESS", "SSE", "오차제곱합"],
  },
  {
    id: "roi-14",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "왜도(Skewness): 대표값 대소 관계 & 선형변환 불변성",
    formula: "양의 왜도(오른쪽 긴 꼬리): 최빈값 < 중앙값 < 평균 / 음의 왜도(왼쪽 긴 꼬리): 평균 < 중앙값 < 최빈값 / 양수 선형변환 Z = aX + b (a > 0) 시 왜도(Skewness)는 불변!",
    trap: "[49회 28·32번·47회 26번 기출!] 1) 확률변수 X를 Z = aX + b(a>0)로 선형 변환하면 평균(aμ+b), 중앙값, 표준편차(aσ)는 모두 변하지만, 3차 표준화 모멘트인 '왜도(Skewness)'는 분자·분모의 a³이 약분되어 불변임(49회 28번 정답)! 2) R summary()에서 Mean(1.54) > Median(1.30)이면 양의 왜도 분포임(49회 32번)!",
    sectionId: "adsp-analysis",
    tags: ["왜도", "Skewness", "선형변환불변", "평균", "중앙값", "최빈값"],
    diagramTitle: "왜도(비대칭 분포) 대표값 대소 관계 & 선형변환 성질 (49·47회)",
    mermaidChart: `flowchart LR
  subgraph Pos ["양의 왜도 (Right-skewed, 오른쪽 긴 꼬리 - 49·47회)"]
    direction LR
    P1["최빈값 (Mode)"] --> P2["중앙값 (Median)"] --> P3["평균 (Mean, 최대)"]
  end
  subgraph Neg ["음의 왜도 (Left-skewed, 왼쪽 긴 꼬리)"]
    direction LR
    N1["평균 (Mean, 최소)"] --> N2["중앙값 (Median)"] --> N3["최빈값 (Mode)"]
  end
  subgraph Inv ["선형 변환 Z = aX + b (a > 0) (49회 28번)"]
    direction TB
    I1["평균·중앙값·표준편차: 변화함"]
    I2["왜도(Skewness)·상관계수: 불변 유지!"]
  end`,
  },
  {
    id: "roi-15",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "연관성 분석 3대 지표 (지지도·신뢰도·향상도 실전 계산)",
    formula: "지지도(Support) = P(A∩B) = n(A∩B)/N / 신뢰도(Confidence, A➔B) = P(B|A) = P(A∩B)/P(A) / 향상도(Lift) = P(A∩B) / (P(A)×P(B)) = 신뢰도 / P(B)",
    trap: "[50회 39·40번·49회 49·50번·48회 45·49·50번·47회 50번 매 회차 2~3문제 출제!] 1) 신뢰도(A➔B) 조건부 확률 수식은 P(A|B)가 아니라 'P(B|A)'(50회 40번)! 2) P(A)=3/4, P(B)=1/2, P(A∩B)=1/2일 때 향상도 = (1/2)/(3/8) = 4/3(50회 39번)! 3) 100건 중 기저귀(51), 맥주(50), 동시(34)일 때 지지도 = 34/100 = 0.34, 신뢰도(기저귀➔맥주) = 34/51 ≈ 0.67(49회 49·50번)!",
    sectionId: "adsp-analysis",
    tags: ["지지도", "신뢰도", "향상도", "연관분석", "장바구니", "조건부확률"],
  },
  {
    id: "roi-16",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "시계열 ACF / PACF 모형 식별 & ARMA·MA 수식 구조",
    formula: "AR(p): PACF 시차 p 이후 절단(Cut-off) + ACF 점진 감소, 계수 기호 φ(파이) / MA(q): ACF 시차 q 이후 절단 + PACF 점진 감소, 백색잡음 오차항(ε_t, ..., ε_{t-q}) 선형결합 / ARMA(p, 0) = AR(p)",
    trap: "[50회 47·48·49·50번 4문제 연속 출제!] 1) AR(2) 모형은 ACF가 점진 감소하고 'PACF가 시차 2 이후 0으로 절단'됨(50회 47번)! 2) MA(q) 모형은 과거 관측치가 아니라 '현시점 및 과거 q개 시점의 백색잡음 오차항(ε)'들의 선형 결합임(50회 48번)! 3) ARMA(2, 0)은 q=0이므로 'AR(2) 모형'과 완전 동일함(50회 49번)! 4) AR(2) 수식에서 자기회귀계수 기호는 'φ₁, φ₂'(50회 50번)!",
    sectionId: "adsp-analysis",
    tags: ["시계열", "ACF", "PACF", "AR", "MA", "ARMA", "자기회귀계수"],
    diagramTitle: "시계열 ACF / PACF 절단 판정 및 수식 구조 결정 트리 (50회 47~50번)",
    mermaidChart: `flowchart TD
  S["정상 시계열 모형 식별 (50회 47~50번)"] --> PACF{"PACF (편자기상관)"}
  PACF -- "시차 p 이후 절단 (Cut-off)<br/>(ACF 점진 감쇄)" --> AR["AR(p) 자기회귀 모형 = ARMA(p, 0)<br/>과거 관측치 선형결합 (계수: φ₁, φ₂)"]
  PACF -- "점진적 감쇄" --> ACF{"ACF (자기상관)"}
  ACF -- "시차 q 이후 절단 (Cut-off)<br/>(PACF 점진 감쇄)" --> MA["MA(q) 이동평균 모형 = ARMA(0, q)<br/>백색잡음 오차항(ε_t ~ ε_{t-q}) 선형결합 (계수: θ)"]
  ACF -- "둘 다 점진적 감쇄" --> ARMA["ARMA(p, q) 혼합 모형"]`,
  },
  {
    id: "roi-17",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "앙상블 학습: 배깅(Bagging) vs 부스팅(Boosting) & 다양성",
    formula: "앙상블 = 여러 단일 모델(Base Learner)을 결합해 일반화 성능 극대화 (필수 조건: 개별 정확성 + 모형 간 다양성 Diversity) / 배깅 = 병렬 복원추출(분산 감소) / 부스팅 = 순차 오차가중 학습(편향 감소)",
    trap: "[50회 33번·49회 40번·47회 42번 기출!] 여러 단일 예측 모델을 결합해 강력한 최종 모델을 구축하는 기법은 '앙상블 학습(49회 40번)'! 앙상블 효과를 높이려면 결합되는 개별 모형들이 완전히 동일한 오류 패턴을 가져서는 안 되며, 모형 간 상관관계가 낮고 '다양성(Diversity)'이 확보되어야 함(50회 33번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["앙상블", "배깅", "부스팅", "분산감소", "편향감소", "다양성"],
    diagramTitle: "배깅(병렬 분산감소) vs 부스팅(순차 편향감소) 구조",
    mermaidChart: `flowchart LR
  subgraph Bag ["배깅 (Bagging - 랜덤포레스트)"]
    direction TB
    B1["복원추출 (Bootstrap)"] --> B2["병렬 독립 모델 학습<br/>(모형 간 다양성 확보 - 50회)"] --> B3["다수결 투표 / 평균<br/>➔ 분산(Variance) 감소"]
  end
  subgraph Boost ["부스팅 (Boosting - AdaBoost/GBM)"]
    direction TB
    S1["오분류 오차 가중치 부여"] --> S2["순차적(Sequential) 학습"] --> S3["오차 보정 집중<br/>➔ 편향(Bias) 감소"]
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
    formula: "VIF(분산팽창계수) = 1 / (1 - R_k²) ≥ 10이면 심각. 해결: 상관 높은 변수 제거, PCA 주성분 직교화, 릿지/라쏘 규제",
    trap: "F-검정 유의하고 R² 높으나 개별 t-검정이 유의하지 않고 회귀계수 부호가 왜곡될 때 의심!",
    sectionId: "adsp-analysis",
    tags: ["다중공선성", "VIF", "회귀분석", "PCA"],
  },
  {
    id: "roi-19",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "의사결정나무 불순도 지표 (지니지수 vs 엔트로피)",
    formula: "불순도(Impurity): 작을수록(0에 가까울수록) 순수도(Purity)가 높고 우수한 분할! / 단일 클래스 완전 순수 노드: 지니지수 = 0.0, 엔트로피 = 0.0 / 이진 50:50 최대 불순: 지니 = 0.5, 엔트로피 = 1.0",
    trap: "[50회 45번·49회 45·46번 연속 출제!] 1) 지니지수가 0에 가까워질수록 불순도가 낮고 특정 클래스로 잘 모여 있어 순수도(Purity)가 높음(50회 45번)! 2) '지니지수 값이 클수록 더 좋은 분리 기준이 된다'는 보기는 정반대 오답(49회 45번 정답)! 3) 단 하나의 동일한 클래스로만 구성된 완전 순수 노드의 지니지수와 엔트로피는 모두 '0.0'임(49회 46번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["의사결정나무", "CART", "지니지수", "엔트로피", "불순도", "순수도"],
  },
  {
    id: "roi-20",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "실루엣 계수 (Silhouette Coefficient) & 군집분석 목표",
    formula: "군집 내 유사성 최대화 + 군집 간 유사성 최소화(비지도학습) / s(i) = (b(i) - a(i)) / max(a(i), b(i)) [-1 ~ +1 범위]",
    trap: "[49회 38번 기출!] 군집분석은 사전 정답 레이블(Y)이 없는 비지도 학습이므로 '사전에 정의된 타겟 클래스를 확정적으로 분류·예측한다'는 보기는 오답(분류 모형 설명)! 실루엣 계수는 1에 가까울수록 우수!",
    sectionId: "adsp-analysis",
    tags: ["실루엣", "군집평가", "비지도학습", "군집분석"],
  },
  {
    id: "roi-21",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "가설검정: 제1종·제2종 오류, 검정력 & 유의확률(p-value)",
    formula: "제1종 오류(α: H₀ 참인데 기각) / 제2종 오류(β: H₀ 거짓인데 채택) / 검정력(1 - β) / 판정 규칙: p-value < α(유의수준) 일 때 귀무가설(H₀) 기각, 대립가설(H₁) 채택!",
    trap: "[49회 22번·47회 24·28번 기출!] 유의확률(p-value)은 귀무가설이 참이라는 가정하에 현재 표본보다 더 극단적인 통계량이 관측될 확률임! 'p-value가 유의수준(α)보다 클수록 귀무가설을 기각한다'는 보기는 정반대 오답(49회 22번 정답, 작을수록 기각)!",
    sectionId: "adsp-analysis",
    tags: ["가설검정", "제1종오류", "제2종오류", "검정력", "유의확률", "p-value"],
  },
  {
    id: "roi-22",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "모형 선택 지표 AIC & BIC",
    formula: "AIC = -2×ln(Likelihood) + 2k / BIC = -2×ln(Likelihood) + k×ln(n) (표본 크기 n 페널티 반영)",
    trap: "AIC와 BIC 모두 값이 '작을수록(최소일수록)' 적합도와 간명성을 갖춘 우수한 모형!",
    sectionId: "adsp-analysis",
    tags: ["AIC", "BIC", "모형선택", "회귀분석"],
  },
  {
    id: "roi-23",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "결정계수(R²) vs 수정된 결정계수 (Adjusted R²)",
    formula: "R² = SSR / SST = 1 - (SSE / SST) [범위: 0 ≤ R² ≤ 1, 표본평균 예측 시 R² = 0] / 독립변수 개수가 다른 다중회귀 모형 비교 시: 자유도 페널티를 보정한 '수정된 결정계수(Adjusted R²)' 필수!",
    trap: "[50회 31번·49회 24번 연속 출제!] 1) 포함된 독립변수 개수가 서로 다른 다중회귀 모형들의 설명력을 공정하게 비교할 때는 '수정된 결정계수(Adjusted R²)'를 사용함(50회 31번 정답)! 2) 일반적인 선형 회귀의 결정계수(R²)가 무조건 +1 이상의 값을 갖는다는 보기는 오답(49회 24번 정답, 0~1 사이)!",
    sectionId: "adsp-analysis",
    tags: ["결정계수", "수정된R2", "회귀평가", "AdjustedR2"],
  },
  {
    id: "roi-24",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "아프리오리 알고리즘 (Apriori)",
    formula: "어떤 항목집합이 빈발하지 않으면, 이를 포함하는 모든 초집합(Superset)도 빈발하지 않다",
    trap: "최소 지지도 기준 미달 집합의 가지치기(Pruning)로 탐색 공간을 극적으로 축소!",
    sectionId: "adsp-analysis",
    tags: ["아프리오리", "Apriori", "가지치기", "연관규칙"],
  },
  {
    id: "roi-25",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "랜덤 포레스트 OOB (Out-of-Bag) 미선택 확률 수식",
    formula: "크기 d인 데이터셋에서 d번 복원추출(Bootstrap) 시 특정 관측치가 한 번도 뽑히지 않을 확률 = (1 - 1/d)ᵈ ➔ d ➔ ∞ 극한값 = e⁻¹ ≈ 0.368 (약 36.8%)",
    trap: "[50회 32번·44회 기출!] 배깅 및 랜덤포레스트에서 크기 d개 데이터를 d번 복원추출할 때 OOB 데이터로 남을 확률 수식 '(1 - 1/d)ᵈ'가 50회 32번에 그대로 출제됨! (1/d)ᵈ나 1-(1/d)ᵈ 함정 선지 주의!",
    sectionId: "adsp-analysis",
    tags: ["OOB", "랜덤포레스트", "부트스트랩", "복원추출"],
  },
  {
    id: "roi-36",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "공분산과 상관계수(피어슨·스피어만) & 음수 선형변환",
    formula: "공분산 = 선형 방향(+, -)은 알 수 있으나 측정 단위에 의존해 강도 비교 불가 / 피어슨 r = [-1, +1] 표준화, 강도는 절댓값(|r|) 비교! / U = aX+b, V = cY+d 변환 시: a·c > 0이면 r 불변, a·c < 0이면 부호 반전(-r)!",
    trap: "[50회 27·29번·49회 29번·48회 28번·47회 37번 전 회차 출제!] 1) 측정 단위에 영향을 받아 강도 비교가 어려운 것은 '공분산'(50회 27번)! 2) r = -0.8과 r = 0.6 중 선형 관계가 더 강한 것은 절댓값이 큰 '-0.8'(50회 29번)! 3) r(X,Y)=0.2일 때 U = -3X+5, V = 2Y-7이면 음수 계수(-3)로 인해 부호가 반전되어 r(U,V) = -0.2가 됨(49회 29번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["공분산", "상관계수", "피어슨", "스피어만", "선형변환", "부호반전"],
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
    frequencyRate: "출제율 95%+",
    title: "PCA 주성분 개수 결정 기준 3가지 (비지도 차원축소)",
    formula: "1) 고유값(Eigenvalue) ≥ 1.0 (Kaiser 규칙) / 2) 누적 분산 설명 비율 70~85% 이상 / 3) 스크리 도표(Scree Plot)의 엘보우(Elbow) 지점 직전",
    trap: "[50회 28번·48회 32번·47회 30번 기출!] PCA는 정답 레이블이 없는 비지도 학습이므로 '지도 학습 분류 모형의 타겟 오분류율을 단독 기준으로 주성분 개수를 선정한다'는 보기는 오답(50회 28번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["PCA", "카이저기준", "고윳값", "스크리플롯", "누적기여율"],
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
    frequencyRate: "출제율 95%+",
    title: "군집 거리 척도: 맨해튼(L₁) vs 유클리드(L₂) vs 마할라노비스",
    formula: "맨해튼 거리 L₁ = |x₁-x₂| + |y₁-y₂| / 유클리드 거리 L₂ = √((x₁-x₂)² + (y₁-y₂)²) ➔ 항상 L₁ ≥ L₂ (맨해튼 ≥ 유클리드) / 마할라노비스 = 공분산(상관성) 및 표준편차 보정 통계적 거리",
    trap: "[49회 48번·48회 43번 연속 출제!] 1) 두 점이 동일 좌표가 아닌 경우 삼각부등식에 의해 격자 경로인 '맨해튼 거리는 항상 최단 직선인 유클리드 거리보다 크거나 같다(L₁ ≥ L₂)'(49회 48번 정답)! 2) 변수 간 단위 차이와 상관관계(공분산)를 반영하는 거리는 '마할라노비스 거리'(48회 43번)!",
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
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "선형회귀 4대 기본 가정 & EDA 산점도·잔차 진단",
    formula: "선형성(회귀계수에 대해 선형, 다항항 포함 가능), 독립성(더빈-왓슨 d≈2), 등분산성(잔차 산점도 균일 폭), 정규성(Q-Q 플롯) / 두 연속형 변수 관계 탐색 시각화 = 산점도(Scatter Plot)",
    trap: "[50회 25번·49회 21번·48회 29번·47회 36번 4회 연속 출제!] 1) 회귀분석의 선형성은 회귀계수(β)에 대한 선형 결합을 뜻하며 교호작용이나 다항식(X²)도 포함 가능함('오직 1차원 직선만 가능' 오답, 50회 25번)! 2) 두 연속형 수치 변수의 관계·군집·이상치를 파악하는 EDA 도표는 '산점도(49회 21번)'!",
    sectionId: "adsp-analysis",
    tags: ["회귀가정", "선형성", "등분산성", "정규성", "산점도", "다항회귀"],
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
    frequencyRate: "출제율 91%+",
    title: "의사결정나무 정지규칙(Stopping Rule) & 가지치기(Pruning)",
    formula: "정지규칙(사전 제어: 최대 깊이 Max Depth, 노드 분할 최소 표본 수 지정) / 가지치기(사후 제어: 복잡하고 불안정한 말단 분기 제거) ➔ 공통 목적: 과대적합(Overfitting) 방지 및 일반화 성능 확보!",
    trap: "[50회 42번·47회 46번 기출!] 트리의 최대 깊이나 리프 노드 최소 표본 수를 지정하는 '정지규칙(Stopping Rule)'과 '가지치기(Pruning)'의 주된 목적은 모두 학습 데이터의 잡음까지 암기하는 '과대적합(Overfitting)을 방지하고 일반화 성능을 높이는 것'(50회 42번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["의사결정나무", "정지규칙", "가지치기", "과적합방지", "StoppingRule"],
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
    frequencyRate: "출제율 98%+",
    title: "상자그림(Box Plot) 안쪽울타리 계산 & 이상치 처리 원칙",
    formula: "IQR = Q3 - Q1 / 하한선(Lower Fence) = Q1 - 1.5×IQR / 상한선(Upper Fence) = Q3 + 1.5×IQR (예: Q1=10, Q3=14 ➔ IQR=4, 하한=4, 상한=20)",
    trap: "[49회 26·34번·48회 21·22번·47회 23번 3회 연속 출제!] 1) 49회 34번 계산: Q1=10, Q3=14이면 IQR=4, 하한=10-6=4, 상한=14+6=20! 2) 49회 26번 원칙: 이상치를 무조건 영구 삭제해야 한다는 보기는 오답(사기 탐지·불량 탐지 등 이상값 자체가 핵심 분석 목표면 유지하여 분석)! 3) 상자그림만으로는 표본 크기(N) 확인 불가(48회 21번)!",
    sectionId: "adsp-analysis",
    tags: ["상자그림", "BoxPlot", "IQR", "안쪽울타리", "이상치", "표본크기"],
    diagramTitle: "상자그림(Box Plot) 5수치 & 울타리/이상치 계산 구조 (49·48·47회)",
    mermaidChart: `flowchart TD
  OH["상한 이상치 (Outlier - 사기탐지 등 목적에 따라 유지/제거)"] --> UF["상한 안쪽울타리: Q3 + 1.5 * IQR<br/>(49회: 14 + 6 = 20 / 47회: 12 + 12 = 24)"]
  UF --> MAX["정상 관측 최댓값 (Whisker 끝)"]
  MAX --> Q3["제3사분위수 (Q3, 상위 25% 경계)"]
  Q3 --> M["중앙값 (Median, Q2 50%)"]
  M --> Q1["제1사분위수 (Q1, 하위 25% 경계)"]
  Q1 --> MIN["정상 관측 최솟값 (Whisker 끝)"]
  MIN --> LF["하한 안쪽울타리: Q1 - 1.5 * IQR<br/>(49회: 10 - 6 = 4 / 47회: 4 - 12 = -8)"]
  LF --> OL["하한 이상치 (Outlier)"]`,
  },
  {
    id: "roi-57",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "표본추출(층화 vs 집락) & 표본오차 vs 비표본오차",
    formula: "층화추출 = 층 내 동질적, 층 간 이질적 (각 층별 무작위 추출) / 집락(군집)추출 = 집락 내 이질적, 집락 간 동질적 (집락 단위 추출) / 표본 크기(n) 증가 시: 표본오차는 감소, 비표본오차는 오히려 증가 위험!",
    trap: "[49회 25·37번·47회 27번 기출!] 1) '집락추출법은 집락 내부가 극도로 동질적이어야 한다'는 보기는 층화추출법과 뒤섞은 오답(49회 25번 정답)! 2) 표본 크기(n)를 늘리면 표본오차는 감소하지만, 조사 관리 부실·응답 누락으로 인한 '비표본오차(Non-sampling Error)'는 오히려 증가할 수 있음(49회 37번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["표본추출", "집락추출", "층화추출", "표본오차", "비표본오차"],
    diagramTitle: "층화추출 vs 집락추출 & 표본/비표본오차 비교 (49·47회 기출)",
    mermaidChart: `flowchart LR
  subgraph Stratified ["층화추출법 (Stratified - 49회 25번)"]
    direction TB
    S1["층(계층) 내: 동질적 (Homogeneous)"]
    S2["층(계층) 간: 이질적 (Heterogeneous)"]
    S3["각 층마다 무작위 표본 추출"]
    S1 --> S2 --> S3
  end
  subgraph Cluster ["집락(군집)추출법 (Cluster - 47·49회)"]
    direction TB
    C1["집락 내: 이질적 (모집단 축소판)"]
    C2["집락 간: 동질적 (Mutual Homogeneous)"]
    C3["선택된 집락 단위로 추출"]
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
    trap: "[48회 37번·47회 31번 계산 기출!] 단순회귀 잔차자유도가 576이면 표본수 n = 576 + 2 = 578개! SSE=25, n=12이면 MSE = 25/(12-2) = 25/10 = 2.50! (n이 아닌 n-2로 나눔!)",
    sectionId: "adsp-analysis",
    tags: ["단순회귀", "잔차자유도", "MSE", "SSE", "분산분석표"],
    diagramTitle: "회귀분석 제곱합 분해 & 자유도 분산분석 구조",
    mermaidChart: `flowchart TD
  SST["총제곱합 (SST = SSR + SSE - 50회 26번)<br/>자유도: n - 1"] --> SSR["회귀제곱합 (SSR)<br/>자유도: 1 (단순회귀 기울기 모수)"]
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
  {
    id: "roi-67",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "이산확률변수 기댓값 E(X) 계산 & 연속형 확률밀도함수(PDF) 성질",
    formula: "이산 기댓값 E(X) = ∑ x_i·P(X=x_i) / 연속형 PDF f(x): 전체 면적 ∫f(x)dx = 1, 한 점 확률 P(X=c) = 0, 특정 지점 함수 높이 f(x) > 1 가능! / 독립 시행: 3회 모두 발생 = p³, 동전 5회 모두 뒷면 = (1/2)⁵ = 1/32",
    trap: "[50회 22·23번·49회 23·27·39번 대량 출제!] 1) 49회 23번 정답: 연속확률변수의 확률밀도함수(PDF)에서 전체 적분 면적은 1이지만, 좁은 구간(예: U(0, 0.5))에서 '특정 지점의 함수 높이 f(x) 자체는 1보다 클 수 있다'! 2) 49회 27번 계산: P(X=1)=1/6, P(X=2)=1/2, P(X=3)=1/3일 때 E(X) = 1/6 + 1 + 1 = 13/6! 3) 초기하·기하·포아송은 이산분포, 대기시간을 다루는 '지수분포'는 연속확률분포(49회 39번)!",
    sectionId: "adsp-analysis",
    tags: ["확률분포", "기댓값", "확률밀도함수", "PDF", "이항분포", "지수분포"],
    diagramTitle: "이산확률분포(PMF) vs 연속확률분포(PDF) 핵심 성질 및 분류 (50·49회)",
    mermaidChart: `flowchart LR
  subgraph Discrete ["이산확률분포 (PMF - 셀 수 있는 값)"]
    direction TB
    D1["0 ≤ P(X=x) ≤ 1, ∑ P(X=x) = 1"]
    D2["기댓값 E(X) = ∑ x·P(X=x) (49회: 13/6)"]
    D3["이항분포(50회: 1/32)·포아송·기하·초기하분포"]
  end
  subgraph Continuous ["연속확률분포 (PDF - 구간 면적이 확률)"]
    direction TB
    C1["전체 적분 면적 ∫f(x)dx = 1, 한 점 확률 P(X=c) = 0"]
    C2["★ 함수 높이 f(x) > 1 가능! (49회 23번 정답)"]
    C3["정규·t·F·카이제곱·지수분포(49회 39번 대기시간)"]
  end`,
  },
  {
    id: "roi-68",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "시계열 정상성(Stationarity) 3대 조건 & 평활화·불규칙 변동",
    formula: "정상성 3조건: 1) 시점 무관 평균 일정, 2) 시점 무관 분산 일정, 3) 자기공분산은 시점 무관 오직 '시차(Lag)'에만 의존 / 평활화(이동평균·지수평활): 단기 불규칙 잡음 완화 ➔ 장기 추세(Trend) 파악",
    trap: "[50회 46번·49회 31·35번·47회 34번 연속 출제!] 1) 정상성 조건에서 '모든 시점 간 관측값들은 서로 통계적 독립이어야 한다'는 보기는 킬러 오답(49회 31번 정답, 독립이면 시계열 예측 자체가 불가능)! 2) 이동평균법·지수평활법 등 평활화의 목적은 단기 불규칙 잡음을 완화해 장기 추세를 파악하는 것(50회 46번)! 3) 불규칙 변동은 예측 불가능한 우연적 돌발 잡음임(49회 35번)!",
    sectionId: "adsp-analysis",
    tags: ["정상성", "시계열", "자기공분산", "평활화", "이동평균", "불규칙변동"],
  },
  {
    id: "roi-69",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "SVM 커널 트릭(Kernel Trick) & 밀도 기반 군집화 DBSCAN",
    formula: "SVM 커널 트릭 = 저차원 비선형 분리 불가 데이터를 '고차원 특징 공간'으로 매핑하여 선형 초평면 분리 / DBSCAN = 군집 수 K 사전 지정 불필요, 밀도(반경 ε, 최소점 MinPts) 기반 비선형 군집 및 이상치(Noise) 자동 탐지",
    trap: "[50회 34·38번·49회 33·41번 연속 출제!] 1) SVM의 커널 트릭을 '원래의 고차원 데이터를 저차원 공간으로 압축·투영하는 기법'으로 설명한 보기는 오답(49회 41번 정답, 저차원➔고차원 매핑)! 2) 군집 수 K 지정 없이 밀도 기반으로 기하학적 군집과 잡음(Noise)을 자동 식별하는 알고리즘은 'DBSCAN'(50회 38번 정답)! 3) 로지스틱·SVM·KNN은 분류 모형이나 다중선형회귀는 회귀 모형임(50회 34번·49회 33번)!",
    sectionId: "adsp-analysis",
    tags: ["SVM", "커널트릭", "서포트벡터", "DBSCAN", "밀도기반군집", "분류알고리즘"],
    diagramTitle: "SVM 커널 트릭(저차원➔고차원) & DBSCAN 밀도 군집화 비교 (50·49회)",
    mermaidChart: `flowchart LR
  subgraph SVM ["서포트 벡터 머신 (SVM - 49회 41번)"]
    direction TB
    V1["저차원 비선형 데이터"] --> V2["커널 트릭 (Kernel Trick)<br/>★ 고차원 특징 공간으로 확장 매핑"] --> V3["서포트 벡터 간 마진(Margin) 최대화<br/>선형 분리 초평면 도출"]
  end
  subgraph DB ["DBSCAN 밀도 기반 군집 (50회 38번)"]
    direction TB
    B1["군집 수 K 사전 지정 불필요"] --> B2["반경(ε) 내 최소 점(MinPts) 밀도 연결"] --> B3["비선형 기하학적 군집 탐색<br/>& 저밀도 이상치(Noise) 자동 분류"]
  end`,
  },
  {
    id: "roi-70",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "표준화 회귀계수(β*) 해석 & 회귀 제곱합 분해(SST = SSR + SSE)",
    formula: "회귀 제곱합: SST(총제곱합) = SSR(회귀제곱합) + SSE(오차제곱합) / 표준화 회귀계수(Standardized Beta, Z-표준화): 독립변수 X가 1표준편차(1σ_X) 증가할 때 종속변수 Y가 평균적으로 β* 표준편차(σ_Y)만큼 변화",
    trap: "[50회 26·43번 기출!] 1) 회귀 분산분석의 제곱합 관계식은 'SST = SSR + SSE'임(50회 26번 정답, SSR = SST + SSE 오답 주의)! 2) 모든 변수를 평균 0, 표준편차 1로 표준화한 후 도출한 표준화 회귀계수가 0.1이면, '독립변수 X가 1표준편차 증가할 때 종속변수 Y는 평균적으로 0.1표준편차 증가'함을 뜻함(50회 43번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["표준화회귀계수", "제곱합", "SST", "SSR", "SSE", "다중회귀"],
  },
  {
    id: "roi-71",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "분산분석(ANOVA)과 독립표본 t-검정 통계량 관계 (F = t²)",
    formula: "두 독립 집단 평균 차이 검정 시: 일원배치 분산분석 F-통계량 = (독립표본 t-통계량)² ➔ F = t² / 이원배치 분산분석(Two-Way ANOVA) = 독립변수(요인 Factor) 2개 × 종속변수 1개 (주효과 + 교호작용 검정)",
    trap: "[49회 30번 ㄱ·ㄴ 기출!] 1) 이원배치 분산분석(Two-Way ANOVA)을 '두 개의 종속변수에 영향을 미치는 단일한 독립변수의 효과를 검정한다'고 서술한 보기는 오답(49회 30번 ㄱ 거짓, 독립변수가 2개이고 종속변수는 1개)! 2) 두 집단 비교 시 독립표본 t-통계량의 제곱은 ANOVA의 F-통계량과 정확히 일치함(F = t², 49회 30번 ㄴ 참)!",
    sectionId: "adsp-analysis",
    tags: ["분산분석", "ANOVA", "이원배치분산분석", "t검정", "F통계량"],
  },
  {
    id: "roi-72",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "다층 신경망 기울기 소실(Vanishing Gradient) & tanh 활성화 함수",
    formula: "은닉층 수 증가 ➔ 역전파(Backpropagation) 시 오차 기울기가 0에 수렴해 앞쪽 은닉층 학습 불가 = 기울기 소실 / 하이퍼볼릭 탄젠트(tanh): 0 중심 대칭(Zero-centered), 출력값 범위 [-1, +1]",
    trap: "[50회 36번·49회 43번 연속 출제!] 1) 시그모이드 함수의 출력 범위는 [0, 1]이나, 출력 중심을 0으로 대칭시킨 하이퍼볼릭 탄젠트(tanh)의 출력값 범위는 '[-1, 1](-1에서 1 사이)'임(50회 36번 정답)! 2) 은닉층 수를 깊게 늘릴 때 역전파 과정에서 오차 기울기가 작아져 앞쪽 층으로 전달되지 못하는 현상은 '기울기 소실(Vanishing Gradient)'임(49회 43번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["인공신경망", "기울기소실", "역전파", "하이퍼볼릭탄젠트", "tanh", "활성화함수"],
    diagramTitle: "인공신경망 4대 활성화 함수 범위 및 특징 비교 (50·49·47회)",
    mermaidChart: `flowchart TD
  subgraph Act ["인공신경망 활성화 함수 4종 비교"]
    direction TB
    A1["시그모이드 (Sigmoid - 47회)<br/>범위: [0, 1] / 중심 0.5 편향, 기울기 소실 유발"]
    A2["하이퍼볼릭 탄젠트 (tanh - 50회 36번)<br/>★ 범위: [-1, 1] / 0 중심 대칭 (Zero-centered)"]
    A3["ReLU (max(0, x))<br/>범위: [0, ∞) / 양수 구간 기울기=1로 기울기 소실(49회 43번) 해결"]
    A4["소프트맥스 (Softmax - 47회)<br/>다중분류 출력층 / 전체 클래스 확률 총합 = 1.0"]
  end`,
  },
  {
    id: "roi-73",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "클래스 불균형(Class Imbalance & SMOTE) & 데이터 분할 전략",
    formula: "클래스 불균형(정상 99% vs 사기 1%): 정확도(Accuracy) 왜곡 ➔ F1-Score/ROC-AUC 평가 & SMOTE(소수 클래스 KNN 보간 합성 오버샘플링) 적용 / 데이터 분할: Train(학습) > Validation(튜닝·모형선택) / Test(최종 일반화 평가)",
    trap: "[50회 41·44번 기출!] 1) 사기 탐지·희귀 질환처럼 범주 비율이 극도로 치우친 상태를 '클래스 불균형'이라 하며, F1-Score/ROC-AUC 평가 및 SMOTE 오버샘플링으로 대응함(50회 41번 정답)! 2) 데이터 분할 시 '테스트 데이터(Test) 비율을 훈련 데이터(Train)보다 항상 2배 이상 크게 배정해야 한다'는 보기는 오답(50회 44번 정답, 훈련 데이터가 가장 커야 함)!",
    sectionId: "adsp-analysis",
    tags: ["클래스불균형", "SMOTE", "오버샘플링", "데이터분할", "검증데이터"],
  },
  {
    id: "roi-74",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "결측치 처리(완전분석법 vs 평균대치법) & ESD 이상치 판별",
    formula: "완전 분석법(Complete Analysis / 목록 삭제 Listwise Deletion) = 결측치가 하나라도 포함된 관측치 행 전체 제외 / 평균 대치법 = 평균값 대체(분산 과소추정) / ESD 기법 = 정규분포 가정 평균(μ)에서 ±3σ 이상 벗어난 값을 이상치로 판별",
    trap: "[50회 21번·49회 42번 기출!] 1) 정규분포 가정하에 평균으로부터 표준편차의 3배(μ ± 3σ, 외곽 약 0.3%) 이상 벗어난 관측값을 이상치로 판별하는 기법은 'ESD(Extreme Studentized Deviate) 기법'임(50회 21번 정답)! 2) 결측치가 단 하나라도 포함된 레코드(행)를 통째로 제외하고 분석하는 방식은 '완전 분석법(Complete Analysis)'임(49회 42번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["결측치", "완전분석법", "평균대치법", "ESD", "이상치", "3시그마"],
  },
  {
    id: "roi-75",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 86%+",
    title: "다차원 척도법(MDS) 스트레스 지수 & 모수(Parameter) vs 통계량(Statistic)",
    formula: "MDS(다차원 척도법) = 개체 간 근접성·거리를 바탕으로 2·3차원 저차원 공간에 상대적 위치를 시각화하는 비지도학습(적합도 척도: Stress 지수, 0에 가까울수록 우수) / 모수(모집단 상수 μ, σ²) vs 통계량(표본 관측치 함수값 X̄, S²)",
    trap: "[50회 24번·49회 36번 기출!] 1) 모집단의 특성을 나타내는 상수를 '모수(Parameter)'라 할 때, 추출된 표본 데이터들로부터 계산되는 함수값은 '통계량(Statistic)'임(50회 24번 정답)! 2) 다차원 척도법(MDS)은 타겟 레이블이 없는 비지도 학습 차원축소·시각화 기법이므로 '목표 범주를 분류하는 지도 학습 확률 분류 알고리즘'이라는 보기는 오답(49회 36번 정답)!",
    sectionId: "adsp-analysis",
    tags: ["다차원척도법", "MDS", "스트레스지수", "모수", "통계량"],
  },
];

const DEFAULT_MEMO_TEMPLATE = `[💡 나의 ADsP 시험 직전 최종 암기 노트 (50회·49회·48회·47회 최신 반영)]
=========================================
[제1과목 데이터 이해]
- DIKW: 데이터(사실) ➔ 정보(의미/내수비중 65%) ➔ 지식(규칙) ➔ 지혜(수출다변화 전략/49회) [함정: 통찰 제외/50회]
- SECI: 공통화(암묵→암묵/47회), 표출화(암묵→형식/49회), 연결화(형식→형식/48회), 내면화(형식→암묵) [체화지식=암묵지/50회]
- DB 특성: 통합, 저장, 운영, 공용(다수공유/50·48회), 계속적인 변화(삽입·삭제·갱신 최신성/49회), 원격조작성(47회)
- DW vs DM: 전사 DW로부터 특정 부서(마케팅·영업) 맞춤형 소규모 구축 = 데이터 마트(DM/50·49회), 다차원 분석 = OLAP(49회)
- 하둡 & 패러다임: Map(Key-Value 분할) ➔ Reduce(집계/50회), 사전처리 ➔ 사후처리(50회), 인과 ➔ 상관
- 용량 & 분석기법: 1 Bit(최소단위) ➔ Byte(8bit) ➔ KB ➔ MB ➔ GB ➔ TB ➔ PB(50·49회) / SNA 매개중심성(50회) / 유전 알고리즘(진화·최적화/49회)
- 빅데이터 위기 통제: 책임 원칙 훼손(잠재행위 사전처벌/49·47회), 알고리즈미스트(피해구제 전문가/49·48회)

[제2과목 데이터 분석 기획]
- 분석 4분면: 최적화(K×K/49회), 솔루션(What K×How U/49·47회), 통찰(What U×How K/49·48회), 발견(U×U/49회)
- 접근법: 상향식(문제 미정의·데이터 EDA 탐색/50·49회) vs 하향식(목표 명확·가설검증/49회) ➔ 상호보완 융합(49회)
- 분석 수준 4분면: 준비형(준비도 低×성숙도 低/50회), 정착형(준비도 高×성숙도 低/47회), 도입형(低×高), 확산형(高×高)
- KDD 5단계: 선택(Selection) ➔ 전처리(Preprocessing) ➔ 변환(Transformation) ➔ 마이닝 ➔ 해석 및 평가 (50회)
- CRISP-DM 6단계: 업무이해 ➔ 데이터이해(EDA/48회) ➔ 데이터준비 ➔ 모델링 ➔ 평가(목표달성·프로세스 리뷰/50회) ➔ 전개(모니터링·재학습/49회)
- 개발 모델 & 품질: 나선형 모델(반복·위험분석 조기통제/49회), 과녁 비유 정밀도(반복 측정 일관성·안정성/49회), 정확도 0.4면 오분류율 0.6(50회)
- 거버넌스 & 데이터: 분석 거버넌스 5요소(조직·프로세스·시스템·데이터·인력/50회), 반정형 데이터(JSON·XML·웹로그/50회), 협의의 플랫폼(건물·설비 제외/49회)

[제3과목 데이터 분석 (60% 비중)]
- 이상치 & 결측치: ESD(평균 ± 3σ 이상치/50회), 완전 분석법(결측 포함 행 전체 삭제/49회), 상자그림 Q1=10·Q3=14 ➔ 하한 4, 상한 20(49회)
- 확률 & 분포: 독립 3회 = p³(50회), 동전 5회 뒷면 = 1/32(50회), 기댓값 E(X)=13/6(49회), 연속 PDF 높이 f(x) > 1 가능(49회), 지수분포=연속형(49회)
- 표본 & 추론: 모수 vs 통계량(표본 함수값/50회), 집락추출(집락 내 이질·집락 간 동질) vs 층화추출(49·47회), 표본 크기 증가 시 비표본오차 증가 가능(49회)
- 왜도 & 상관계수: 양수 선형변환(aX+b) 시 왜도(Skewness) 불변(49회), 음수 선형변환(U=-3X+5) 시 상관계수 부호 반전 r=-0.2(49회), 강도는 절댓값 |-0.8|>|0.6|(50회)
- 회귀 & ANOVA: SST = SSR + SSE(50회), 변수 수 다른 모형 비교 = 수정된 결정계수 Adjusted R²(50회), 표준화 회귀계수 0.1 = 1표준편차당 0.1표준편차 증가(50회), 두 집단 F = t²(49회)
- 로지스틱 & 신경망: β₁=0.6이면 로그 오즈(로짓) 0.6 증가(50회), tanh 범위 [-1, 1](50회), 은닉층 깊이 증가 시 기울기 소실(49회)
- 분류 & 앙상블: F1-Score = 2PR/(P+R) (TP=3, FN=5, FP=8 ➔ 6/19 / 49회), 부트스트랩 OOB 확률 = (1 - 1/d)ᵈ(50회), SVM 커널 트릭(저차원➔고차원 매핑/49회), 클래스 불균형 SMOTE(50회)
- 의사결정나무: 정지규칙·가지치기 = 과적합 방지(50·47회), 지니·엔트로피 작을수록 우수(50·49회), 완전 순수 노드는 지니=0·엔트로피=0(49회)
- 군집 & 차원축소: 와드연결법 = 군집 내 SSE 증가량 최소화(49·48·47회 3연속!), DBSCAN(K 미지정·밀도기반·이상치 탐지/50회), 맨해튼 거리 L₁ ≥ 유클리드 거리 L₂(49회), MDS(비지도·Stress 지수/49회)
- 연관분석: 지지도 P(A∩B), 신뢰도(A➔B) = P(B|A)(50회), 향상도 Lift = (1/2)/(3/8) = 4/3(50회), 기저귀(51)·맥주(50)·동시(34)/100건 ➔ 지지도 0.34, 신뢰도 34/51 ≈ 0.67(49회)
- 시계열: 정상성 3조건(평균·분산 일정, 공분산은 시차에만 의존 / 시점 간 독립 아님!/49회), 평활화=단기잡음 제거·추세 파악(50회), AR(2)는 PACF 시차 2 절단·ARMA(2,0)과 동일·계수 φ(50회), MA(q)는 백색잡음 오차항(ε) 선형결합(50회)
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
    if (window.confirm("메모장을 기본 템플릿(50회·49회 최신 반영본)으로 초기화할까요?")) {
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
            75선
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
                      50회·49회·48회·47회 최신 반영
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    50회~47회 최신 기출 전수 반영 75대 킬러 개념 &amp; 20종 도표 &amp; 나만의 시험 요약장
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

            {/* 탭 전환 바 (ROI 랭킹 75제 vs 나만의 직전 암기장) */}
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
                기출 빈출 ROI 랭킹 (75제)
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
                        placeholder="토픽명, 회차, 키워드 검색 (예: 50회, 49회, 와드, 오즈, 왜도, DBSCAN, 커널트릭, F1, ARMA, ESD)..."
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
