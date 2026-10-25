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
  BookmarkCheck,
  Sparkles,
  Zap,
  HelpCircle,
  AlertTriangle,
  FileText,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MathText } from "@/components/ui/MathText";

export type ItpeDomainId = "all" | "d1" | "d2" | "d3" | "d4" | "d5" | "d6";

export interface ItpeRoiMemoItem {
  id: string;
  domainId: "d1" | "d2" | "d3" | "d4" | "d5" | "d6";
  domainName: string;
  grade: "S" | "A" | "B";
  stars: 3 | 4 | 5;
  frequencyRate: string;
  title: string;
  formula: string; // 핵심 텍스트 개념도 / 메커니즘
  trap: string; // 기술사 차별화 킬러 포인트 & 채점관 공략 함정
  sectionId: string;
  tags: string[];
  goldenTemplate?: {
    whyWhat: string;
    architecture: string;
    comparison: string;
    insight: string;
  };
}

export const ITPE_ROI_ITEMS: ItpeRoiMemoItem[] = [
  // =================================================================
  // === Domain 1. 정보 전략 및 관리 (ISP / PM / 감리)
  // =================================================================
  {
    id: "itpe-roi-01",
    domainId: "d1",
    domainName: "1. 정보전략 및 관리",
    grade: "S",
    stars: 5,
    frequencyRate: "최신 빈출 95%+",
    title: "ISO/IEC 42001 (인공지능 경영시스템, AIMS)",
    formula: "조직 맥락 분석 ➔ AI 리스크 평가 & 영향평가(AIIA) ➔ PDCA 통제 주기 ➔ 지속적 신뢰성 보장",
    trap: "단순한 알고리즘 성능 측정이 아니라, '조직 차원의 AI 거버넌스 및 윤리·법적 책임 관리 체계(PDCA)'임을 명확히 서술해야 함! 2026년 인공지능기본법 및 EU AI Act의 고영향 AI 적격성 입증 핵심 표준.",
    sectionId: "itpe-strategy",
    tags: ["ISO42001", "AI거버넌스", "PDCA", "AIIA", "인공지능기본법"],
    goldenTemplate: {
      whyWhat: "AI의 환각, 편향, 보안 취약점으로 인한 사회적 위험 증가에 대응하여 세계 최초로 제정된 AI 거버넌스 국제 표준(2023).",
      architecture: "조직 상황 파악 ➔ 리더십/방침 ➔ 기획(리스크 평가 및 AIIA) ➔ 지원/운영 ➔ 성과평가(내부감사) ➔ 개선(PDCA)",
      comparison: "ISO 9001(품질), ISO 27001(보안) 대비 AI 생명주기(데이터 전처리, 학습, 편향 완화, 투명성) 전주기 특화 통제 항목 추가.",
      insight: "공공 및 금융 분야 초거대 AI 도입 시 제안요청서(RFP)의 필수 인증 요건으로 내재화 필요.",
    },
  },
  {
    id: "itpe-roi-02",
    domainId: "d1",
    domainName: "1. 정보전략 및 관리",
    grade: "A",
    stars: 4,
    frequencyRate: "실무 정책 빈출 90%+",
    title: "공공 SW 초거대 AI 도입 대가산정 체계",
    formula: "기존 FP(기능점수) 한계 극복 ➔ 데이터 전처리/임베딩비 + 파인튜닝/가드레일 공수 + GPU/토큰 인프라비(FinOps)",
    trap: "기존의 트랜잭션/데이터 입출력 위주 기능점수(FP) 방식만으로는 RAG 청킹, 벡터 임베딩, 프롬프트 엔지니어링 및 환각 가드레일 검증 공수를 전혀 반영할 수 없음!",
    sectionId: "itpe-strategy",
    tags: ["초거대AI대가산정", "기능점수", "RAG대가", "프롬프트공수", "FinOps"],
    goldenTemplate: {
      whyWhat: "생성형 AI 기반 대민 서비스 구축 시 과업 범위와 비용 산정의 기준 부재로 인한 사업 유찰 방지 및 정당 대가 지급 목적.",
      architecture: "기획(데이터 가공 기획) ➔ 구축(임베딩, 파인튜닝, 프롬프트 최적화, 안전 가드레일) ➔ 운영(토큰/GPU FinOps, 지속적 정렬).",
      comparison: "기존 FP: 기능 규모(FP) × 단가 / 초거대 AI 가이드: 데이터 품질 전처리 난이도 + LLM 튜닝 공수 + 인프라 종량제 결합.",
      insight: "초기 구축비뿐 아니라 운영 단계의 토큰/호스팅 유지비용(SLA 및 FinOps)을 포함한 총소유비용(TCO) 관점 예산 책정 권고.",
    },
  },
  {
    id: "itpe-roi-03",
    domainId: "d1",
    domainName: "1. 정보전략 및 관리",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "FinOps (클라우드 재무 운영 3단계 라이프사이클)",
    formula: "1단계 Inform (비용 가시화 & 태깅) ➔ 2단계 Optimize (단가/사용량 최적화) ➔ 3단계 Operate (문화 및 지속적 거버넌스)",
    trap: "FinOps는 단순히 클라우드 비용을 '줄이는(Cost Reduction)' 활동이 아니라, 비즈니스 가치와 단위 경제성(Unit Economics)을 극대화하는 재무-엔지니어링 협업 문화임!",
    sectionId: "itpe-strategy",
    tags: ["FinOps", "클라우드비용", "Inform", "Optimize", "Operate", "RI"],
    goldenTemplate: {
      whyWhat: "클라우드 민첩성의 대가로 발생하는 예측 불가능한 지출(빌 쇼크) 및 유휴 자원 낭비를 통제하기 위한 재무적 거버넌스 프랙티스.",
      architecture: "Inform(자원 태깅, 할당 가시화) → Optimize(약정 할인 RI/Savings Plans, 라이트사이징, 스팟) → Operate(자동화 알림, KPI 수립).",
      comparison: "전통적 IT 재무(Capex, 사전 예산 승인) vs FinOps(Opex, 실시간 지출 모니터링 및 엔지니어 주도 자율 최적화).",
      insight: "생성형 AI 워크로드(GPU 자원 및 LLM API 토큰 소모) 급증에 따라 FinOps 조직(CoE) 구축이 기업 생존 과제로 대두.",
    },
  },
  {
    id: "itpe-roi-04",
    domainId: "d1",
    domainName: "1. 정보전략 및 관리",
    grade: "B",
    stars: 3,
    frequencyRate: "1교시 방어용",
    title: "PMBOK 7판 12대 원칙 및 8대 성과 도메인",
    formula: "프로세스 중심(6판) 탈피 ➔ 가치 인도(Value Delivery) 시스템 + 12대 원칙 + 8대 성과 도메인 + 테일러링(Tailoring)",
    trap: "6판의 10대 지식영역과 49대 프로세스가 폐지된 것이 아니라, 7판은 원칙 기반의 최상위 프레임워크로 진화하고 '프로세스 그룹 실무 가이드'로 이관됨!",
    sectionId: "itpe-strategy",
    tags: ["PMBOK7판", "가치인도", "테일러링", "12대원칙", "8대도메인"],
  },

  // =================================================================
  // === Domain 2. 소프트웨어 공학 (SW Eng.)
  // =================================================================
  {
    id: "itpe-roi-05",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "S",
    stars: 5,
    frequencyRate: "매회 출제 98%+",
    title: "ISO/IEC 25010:2023 품질 특성 개정 (9대 특성)",
    formula: "기존 8대 특성 ➔ [Safety(안전성)] 신설(9대) + [상호작용성(Interaction)] 및 [유연성(Flexibility)] 명칭 개편",
    trap: "2011년 구 버전을 쓰면 즉시 감점! 9번째 특성 '안전성(Safety)'이 신설되었으며, 사용성→상호작용성(접근성 강화), 이식성→유연성(클라우드 확장성)으로 바뀐 점을 명확히 명시해야 차별화 고득점 달성!",
    sectionId: "itpe-sw-eng",
    tags: ["ISO25010:2023", "안전성", "Safety", "상호작용성", "유연성", "SW품질"],
    goldenTemplate: {
      whyWhat: "AI, 자율주행, 클라우드 환경의 급변을 반영하여 인명·환경 안전 및 포용적 사용자 경험을 평가하도록 2023년 전면 개정된 국제 SW 품질 표준.",
      architecture: "9대 특성: 기능적합성, 성능효율성, 호환성, 상호작용성, 신뢰성, 보안성, 유지보수성, 유연성, 안전성(신설).",
      comparison: "구 25010(2011, 8대) vs 신 25010(2023, 9대): 안전성(Safety) 독립화, 사용성→상호작용성, 이식성→유연성.",
      insight: "차량(ISO 26262), 의료(IEC 62304) 등 고신뢰성 도메인 SW 개발 시 ISO 25010:2023 안전성 지표를 핵심 인수 테스트 기준으로 적용.",
    },
  },
  {
    id: "itpe-roi-06",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99% (서술형 25점 킬러)",
    title: "MSA 분산 트랜잭션: Saga 패턴 (Choreography vs Orchestration)",
    formula: "2PC 동기 락 한계 극복 ➔ 로컬 트랜잭션 분할 + 실패 시 보상 트랜잭션(Compensating) 역순 실행",
    trap: "Saga 패턴은 ACID가 아닌 BASE(결과적 일관성)를 추구함! Choreography는 이벤트 브로커 기반 자율 협업이나 서비스 증가 시 순환 의존 위험, Orchestration은 중앙 오케스트레이터가 상태머신으로 제어하여 복잡한 트랜잭션 관리에 필수적임.",
    sectionId: "itpe-sw-eng",
    tags: ["Saga패턴", "MSA", "보상트랜잭션", "Choreography", "Orchestration", "2PC"],
    goldenTemplate: {
      whyWhat: "Database-per-Service 환경에서 2PC의 동기식 블로킹과 SPOF 한계를 극복하고 결과적 일관성을 보장하기 위한 분산 아키텍처 패턴.",
      architecture: "주문 생성 ➔ 결제 승인 ➔ 재고 차감 (실패 시) ➔ [보상 트랜잭션] 결제 취소 명령 역순 전파.",
      comparison: "Choreography: 별도 조정자 없음, 이벤트 구독 방식, 단순 업무 적합 / Orchestration: 중앙 조정자 존재, 복잡한 롤백 가시성 우수, 핵심 금융/커머스 필수.",
      insight: "Saga 패턴 적용 시 메시지 중복 수신에 대비한 컨슈머 멱등성(Idempotency) 설계와 Outbox 패턴 결합이 필수적.",
    },
  },
  {
    id: "itpe-roi-07",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "Transactional Outbox 패턴 & CDC 기반 이벤트 발행",
    formula: "비즈니스 DB INSERT + Outbox 테이블 INSERT (단일 로컬 ACID 트랜잭션) ➔ CDC(Debezium)가 Binlog 감시 ➔ Kafka 최소 1회 발행",
    trap: "이중 쓰기(Dual Write) 문제(DB 저장 후 브로커 전송 전 서버 다운 시 데이터 정합성 깨짐)의 근본 해결책! 메시지 소비 측에서는 반드시 고유 메시지 ID 기반의 멱등성(Idempotency) 테이블 검증이 병행되어야 함.",
    sectionId: "itpe-sw-eng",
    tags: ["TransactionalOutbox", "CDC", "Debezium", "DualWrite", "멱등성", "Kafka"],
    goldenTemplate: {
      whyWhat: "MSA에서 로컬 DB 갱신과 메시지 브로커 전송을 원자적으로 수행하지 못해 발생하는 데이터 불일치를 원천 차단하는 패턴.",
      architecture: "[서비스 로직] → (단일 ACID 트랜잭션) → [비즈니스 테이블 + Outbox 테이블] ➔ [Debezium CDC (Binlog 추적)] ➔ [Kafka 브로커] ➔ [소비자 멱등성 처리].",
      comparison: "어플리케이션 직접 발행(유실 위험 高) vs 폴링 발행(DB 부하) vs Transactional Outbox + CDC(무부하, 원자성 100% 보장).",
      insight: "Kafka Connect와 Debezium을 사내 엔지니어링 표준 플랫폼 템플릿으로 패키징하여 개발자 생산성을 극대화해야 함.",
    },
  },
  {
    id: "itpe-roi-08",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "S",
    stars: 5,
    frequencyRate: "최신 킬러 92%+",
    title: "플랫폼 엔지니어링 (Platform Engineering) & IDP",
    formula: "DevOps의 인지 부하(Cognitive Load) 한계 극복 ➔ 전담 플랫폼 팀 ➔ 내부 개발자 플랫폼(IDP) 셀프 서비스 + 황금 경로(Golden Path)",
    trap: "DevOps를 대체하는 것이 아니라 DevOps의 성공적 확장을 돕는 진화형 모델임! 개발자에게 K8s, Terraform 저수준 설정을 강요하지 않고 '셀프 서비스 포털/API'를 제공하는 것이 핵심.",
    sectionId: "itpe-sw-eng",
    tags: ["플랫폼엔지니어링", "IDP", "황금경로", "인지부하", "DevOps"],
    goldenTemplate: {
      whyWhat: "클라우드 네이티브 기술 스택의 급격한 복잡화로 개발팀이 겪는 번아웃과 생산성 저하를 해결하기 위해 등장.",
      architecture: "개발자 ➔ [IDP 셀프서비스 포털/CLI] ➔ [표준화된 황금 경로 템플릿] ➔ [인프라 프로비저닝 (K8s, CI/CD, 보안 가드레일 자동화)].",
      comparison: "전통적 운영팀(티켓 기반 지연) vs 순수 DevOps(개발자 인지과부하) vs 플랫폼 엔지니어링(셀프서비스 기반 황금경로 제공).",
      insight: "IDP 구축 시 플랫폼을 하나의 '제품(Product as a Service)'으로 간주하고 개발자 경험(DevEx) 만족도 조사를 지속 반영해야 함.",
    },
  },
  {
    id: "itpe-roi-09",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "SW 안전성 분석: STPA (시스템 이론 기반) vs FTA",
    formula: "STPA: 제어 루프(Control Loop) 모델링 ➔ 4대 UCA(안전하지 않은 제어 명령) 도출 ➔ 안전 제약조건 수립",
    trap: "단순한 하드웨어 부품 고장(FTA)만 다루는 것이 아니라, 모든 부품이 정상 동작하더라도 '복잡한 SW 컴포넌트 간 상호작용 오작동(UCA)'으로 사고가 발생할 수 있음을 분석하는 최신 기법!",
    sectionId: "itpe-sw-eng",
    tags: ["STPA", "SW안전", "UCA", "FTA", "제어루프", "FailSafe"],
  },

  // =================================================================
  // === Domain 3. 자료처리 및 빅데이터 (DB / Data)
  // =================================================================
  {
    id: "itpe-roi-10",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "S",
    stars: 5,
    frequencyRate: "매회 출제 99%+",
    title: "Vector DB & HNSW (Hierarchical Navigable Small World)",
    formula: "고차원 임베딩 ➔ 스킵 리스트 원리 다계층 그래프 구축 ➔ 상위 레이어 성큼 탐색 + 하위 레이어 정밀 탐색 ($O(\\log N)$)",
    trap: "전수 검색(Flat)의 $O(N)$ 연산 폭증(차원의 저주)을 극복하는 ANN(근사 최근접 이웃) 표준 알고리즘! 그래프 인덱스가 RAM을 과도하게 차지하므로 PQ(Product Quantization) 또는 SQ(Scalar Quantization) 압축과 결합함을 반드시 언급할 것.",
    sectionId: "itpe-database",
    tags: ["VectorDB", "HNSW", "ANN", "SkipList", "PQ", "임베딩"],
    goldenTemplate: {
      whyWhat: "LLM RAG 및 추천 시스템에서 수억 건의 고차원 벡터 유사도를 밀리초 단위로 초고속 탐색하기 위한 근사 최근접 이웃 그래프 인덱스.",
      architecture: "Layer 2(성큼성큼 진입 노드) ➔ Layer 1(중간 탐색) ➔ Layer 0(최하위 밀집 그래프 정밀 탐색) ➔ 코사인/내적 유사도 Top-K 반환.",
      comparison: "Flat(정확도 100%, $O(N)$ 매우 느림) vs IVF-PQ(군집화 후 압축, 메모리 절약) vs HNSW(속도 최고, 메모리 소모 큼).",
      insight: "대규모 프로덕션에서는 HNSW의 속도 장점과 PQ의 메모리 절약 장점을 결합한 HNSW-PQ 하이브리드 인덱스를 채택.",
    },
  },
  {
    id: "itpe-roi-11",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "하이브리드 검색 (Hybrid Search) 및 RRF 재순위화",
    formula: "BM25 희소 벡터(키워드/품번) + Dense 밀집 벡터(문맥/의미) ➔ RRF(순위 역수 합산: $1/(k + \\text{rank})$) ➔ 고품질 리랭킹",
    trap: "점수 척도(Cosine 유사도 0~1 vs BM25 0~수십)가 서로 다르므로 단순 점수 합산이 불가능함! 오직 '순위(Rank)'만을 기반으로 역수를 취해 합산하는 RRF(Reciprocal Rank Fusion, 통상 $k=60$)를 거쳐야 공정한 결과가 도출됨.",
    sectionId: "itpe-database",
    tags: ["하이브리드검색", "BM25", "DenseVector", "RRF", "ReRanking", "RAG"],
    goldenTemplate: {
      whyWhat: "밀집 벡터 검색의 고유명사/약어 누락 한계와 키워드 검색의 의미 파악 실패 한계를 상호 보완하는 최신 RAG 검색 표준 기법.",
      architecture: "질의 ➔ [병렬 검색: BM25 검색기 + Vector DB] ➔ [RRF Re-ranker] ➔ [Cross-Encoder 정밀 평가] ➔ [LLM 프롬프트 주입].",
      comparison: "Sparse Search(정확한 단어 일치, 어휘 불일치 문제) vs Dense Search(의미 유사, 희귀 키워드 오작동) vs Hybrid(두 장점 결합).",
      insight: "사내 전문 용어나 법률·의료 코드 검색 품질을 높이기 위해 RAG 파이프라인의 하이브리드 검색 도입은 필수불가결함.",
    },
  },
  {
    id: "itpe-roi-12",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "ISO/IEC 5259 (AI 데이터 품질 표준) & 합성 데이터",
    formula: "데이터 수집·가공 ➔ 대표성/편향배제/라벨링일관성 검증 ➔ 합성데이터 활용 시 모델 붕괴(Model Collapse) 예방",
    trap: "기존 관계형 DB 정적 품질 표준인 ISO 8000으로는 AI 학습용 비정형 데이터의 다양성, 윤리적 편향성, 라벨링 노이즈를 다룰 수 없음! AI 전용 표준인 ISO 5259를 명확히 제시해야 함.",
    sectionId: "itpe-database",
    tags: ["ISO5259", "AI데이터품질", "합성데이터", "ModelCollapse", "데이터편향"],
  },
  {
    id: "itpe-roi-13",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "Data Lakehouse (Apache Iceberg) vs Data Mesh",
    formula: "저비용 오브젝트 스토리지(S3) + 메타데이터 계층(Iceberg ACID/타임트래블) / 중앙 병목 극복 도메인 분권화(Data Mesh)",
    trap: "Iceberg는 데이터 포맷이 아닌 '오픈 테이블 포맷'임! Parquet 파일들 위에 메타데이터 계층(스냅샷, 매니페스트)을 얹어 완벽한 ACID 및 스키마 변경, 롤백을 지원함.",
    sectionId: "itpe-database",
    tags: ["Lakehouse", "ApacheIceberg", "DataMesh", "ACID", "타임트래블"],
  },

  // =================================================================
  // === Domain 4. 컴퓨터 시스템 및 통신 (CA / OS / NW)
  // =================================================================
  {
    id: "itpe-roi-14",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "S",
    stars: 5,
    frequencyRate: "최신 킬러 95%+",
    title: "eBPF (Extended Berkeley Packet Filter) & 사이드카리스 인프라",
    formula: "커널 소스 무수정 ➔ 안전한 커널 샌드박스 바이트코드 실행 ➔ Cilium 사이드카리스 서비스 메시 & L4/L7 라우팅",
    trap: "기존 Istio Envoy 사이드카 프록시는 파드마다 컨테이너가 떠서 CPU/메모리 낭비와 홉(Hop) 지연을 유발함. eBPF는 커널 내부에서 패킷을 직접 가로채 처리하므로 오버헤드가 제로에 가깝고 보안 관측성이 뛰어남!",
    sectionId: "itpe-system-nw",
    tags: ["eBPF", "Cilium", "사이드카리스", "서비스메시", "커널샌드박스", "XDP"],
    goldenTemplate: {
      whyWhat: "리눅스 커널의 안정성을 해치지 않으면서도 커널 공간에서 사용자 정의 프로그램을 고성능으로 실행하는 혁신적 인프라 기술.",
      architecture: "C 코드 작성 ➔ Clang/LLVM 바이트코드 컴파일 ➔ eBPF Verifier(무한루프/안전성 검증) ➔ JIT 컴파일 ➔ 커널 이벤트(Kprobe, XDP) 후킹.",
      comparison: "iptables/IPVS(규칙 증가 시 $O(N)$ 지연) vs eBPF BPF 맵($O(1)$ 초고속 해시 룩업 및 사이드카리스 서비스 메시).",
      insight: "쿠버네티스 대규모 클러스터 구축 시 기본 CNI를 Cilium(eBPF 기반)으로 표준화하여 네트워크 지연을 최소화해야 함.",
    },
  },
  {
    id: "itpe-roi-15",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 92%+",
    title: "AI 반도체 아키텍처: HBM & CXL 3.0",
    formula: "메모리 월 극복 ➔ HBM (TSV 기반 DRAM 수직 적층 초광대역) + CXL (PCIe 기반 캐시 일관성 & 메모리 풀링)",
    trap: "HBM은 대역폭(Bandwidth)을 극대화한 것이고, CXL은 대용량 메모리 풀링(Capacity Expansion) 및 이기종 간 캐시 일관성을 보장하는 기술로 상호 보완 관계임!",
    sectionId: "itpe-system-nw",
    tags: ["HBM", "CXL", "메모리월", "TSV", "메모리풀링", "캐시일관성"],
  },
  {
    id: "itpe-roi-16",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "HTTP/3 & QUIC 전송 계층 혁신",
    formula: "TCP+TLS 폐기 ➔ UDP 기반 QUIC ➔ 독립 스트림 전송(HOL 블로킹 해소) + 0-RTT 빠른 연결 + Connection ID 마이그레이션",
    trap: "TCP의 Head-of-Line 블로킹은 하나의 패킷이 손실되면 뒤따르는 모든 패킷이 멈추는 현상임. QUIC은 각 스트림이 완전히 독립된 UDP 패킷으로 전송되어 다른 스트림에 영향이 없음!",
    sectionId: "itpe-system-nw",
    tags: ["HTTP3", "QUIC", "UDP", "HOL블로킹", "0-RTT", "ConnectionMigration"],
  },
  {
    id: "itpe-roi-17",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 85%+",
    title: "NTN (비지상 네트워크) & 6G 입체 통신",
    formula: "지상 기지국 커버리지 한계 극복 ➔ 저궤도(LEO) 위성 + HAPS + 지상망 통합 ➔ 지구 전역 3차원 무선 서비스",
    trap: "도플러 시프트(Doppler Shift) 보정 기술과 긴 지연시간(Propagation Delay), 지상-위성 간 고속 핸드오버 극복 방안을 핵심 기술요소로 제시해야 함.",
    sectionId: "itpe-system-nw",
    tags: ["NTN", "6G", "LEO위성", "비지상망", "도플러시프트", "UAM"],
  },

  // =================================================================
  // === Domain 5. 정보보안 (Security)
  // =================================================================
  {
    id: "itpe-roi-18",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 100% (국가 정책 1순위)",
    title: "국가망보안체계 (N2SF) 및 다층보안체계(MLS)",
    formula: "획일적 물리적 망분리 폐지 ➔ 기밀(Classified, C) / 민감(Sensitive, S) / 공개(Open, O) 3등급 차등 통제 ➔ 제로트러스트 결합",
    trap: "무조건적인 망분리 완화가 아님! 국가 핵심 안보가 걸린 C등급은 기존 수준의 강력한 통제를 유지하고, S등급은 보안 통제 하에 연계하며, O등급만 인터넷망 및 생성형 AI에 완전 개방하는 다층 구조임을 명문화해야 함.",
    sectionId: "itpe-security",
    tags: ["N2SF", "MLS", "망분리개편", "C-S-O", "기밀민감공개", "제로트러스트"],
    goldenTemplate: {
      whyWhat: "18년간 유지된 획일적 물리적 망분리로 인해 공공기관의 클라우드(SaaS) 도입 및 생성형 AI 활용이 전면 차단되는 문제를 해결하기 위한 국가 망보안 패러다임 전환.",
      architecture: "기밀(C: 기존 물리망분리 유지) ↔ 민감(S: 데이터 암호화, 접근통제 하 연계) ↔ 공개(O: 인터넷망 개방, AI/SaaS 적극 활용).",
      comparison: "과거 망분리(획일적 물리 격리, 생산성 급락) vs N2SF(데이터 중요도 기반 다층보안, 제로트러스트 기반 안전한 AI 연계).",
      insight: "국가정보원 가이드라인에 맞춰 공공 데이터 분류 기준표를 조기 수립하고, S등급 연계를 위한 제로트러스트 보안 솔루션 도입 검토 필수.",
    },
  },
  {
    id: "itpe-roi-19",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "S",
    stars: 5,
    frequencyRate: "매회 빈출 96%+",
    title: "제로 트러스트 2.0 (Zero Trust) 성숙도 모델",
    formula: "Never Trust, Always Verify ➔ 주체 ➔ PEP (정책시행점) ➔ PDP (정책결정점: ICAM/엔진) ➔ 마이크로 세그멘테이션 리소스",
    trap: "경계선(방화벽) 통과 후 내부 사용자를 무조건 신뢰하는 레거시 모델을 전면 부정! 모든 접속 트랜잭션마다 신원, 기기 상태, 시간, 위치 문맥을 재검증하여 최소 권한만 부여.",
    sectionId: "itpe-security",
    tags: ["제로트러스트", "PDP", "PEP", "마이크로세그멘테이션", "ICAM", "최소권한"],
    goldenTemplate: {
      whyWhat: "내부망 침투 후 측면 이동(Lateral Movement)을 통해 발생하는 대규모 정보 유출을 차단하기 위한 NIST SP 800-207 표준 보안 모델.",
      architecture: "[사용자/기기] ➔ [PEP (방화벽/프록시)] ↔ [PDP (정책 엔진 & 정책 관리자)] ➔ [마이크로 세그멘테이션된 개별 워크로드/데이터].",
      comparison: "경계선 보안(성벽 중심, 내부 무제한 신뢰) vs 제로트러스트(지속적 인증, 동적 정책 기반 단위 인가).",
      insight: "성숙도 모델(기존 → 초급 → 고급 → 최적) 단계별 이행 로드맵을 수립하고 자동화된 SOAR 시스템과 연동해야 함.",
    },
  },
  {
    id: "itpe-roi-20",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "S",
    stars: 5,
    frequencyRate: "NIST 최종 표준 발표 빈출 95%+",
    title: "양자내성암호 (PQC) NIST 표준: ML-KEM & ML-DSA",
    formula: "쇼어 알고리즘(RSA/ECC 무력화) 대응 ➔ 격자(Lattice, LWE/MLWE) 수학 난제 ➔ ML-KEM(키교환) + ML-DSA(전자서명)",
    trap: "양자암호통신(QKD, 하드웨어 물리 현상)과 양자내성암호(PQC, 수학적 소프트웨어 알고리즘)는 완전히 다름! 기존 암호 인프라에 PQC를 점진적으로 이식하는 '암호 민첩성(Crypto-Agility)' 전략 제시 필수.",
    sectionId: "itpe-security",
    tags: ["양자내성암호", "PQC", "ML-KEM", "ML-DSA", "격자암호", "CryptoAgility"],
  },
  {
    id: "itpe-roi-21",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "S",
    stars: 5,
    frequencyRate: "최신 AI 위협 94%+",
    title: "OWASP Top 10 for LLM & AI 가드레일 / 레드팀",
    formula: "LLM01 프롬프트 인젝션(직접 탈옥 & 간접 주입) ➔ 입출력 AI 가드레일 ➔ 과도한 대리권 통제 ➔ AI 레드팀 상시 모의침투",
    trap: "간접 프롬프트 인젝션(Indirect Prompt Injection)은 외부 웹페이지나 PDF 문서를 검색·요약하는 과정에서 악성 프롬프트가 주입되는 치명적 공격임을 명확히 서술해야 함!",
    sectionId: "itpe-security",
    tags: ["OWASP-LLM", "프롬프트인젝션", "AI가드레일", "AI레드팀", "간접인젝션"],
  },

  // =================================================================
  // === Domain 6. 최신 기술, 법규 및 정책 (AI / Law)
  // =================================================================
  {
    id: "itpe-roi-22",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "S",
    stars: 5,
    frequencyRate: "패러다임 대전환 최우선 100%",
    title: "추론형 AI (Reasoning LLM) & Test-Time Compute",
    formula: "사전학습 스케일링 법칙 한계 ➔ 추론 시점 연산량(Test-Time Compute) 집중 ➔ System 2 깊은 생각의 사슬 + PRM 과정보상모델",
    trap: "기존 LLM은 다음 단어 확률 예측(System 1 직관)에 불과했으나, 추론형 모델(DeepSeek-R1, o1)은 강화학습과 자기 성찰(Self-Reflection)을 통해 오류를 스스로 검증·수정함! 결과만 채점하는 ORM과 달리 각 추론 스텝을 채점하는 과정 보상 모델(PRM)이 핵심 원리.",
    sectionId: "itpe-ai-law",
    tags: ["추론형AI", "TestTimeCompute", "System2", "PRM", "DeepSeek-R1", "SelfReflection"],
    goldenTemplate: {
      whyWhat: "모델 파라미터 크기와 사전학습 데이터 확장에만 의존하던 기존 스케일링 법칙의 병목을 극복하고, 복잡한 수학·코딩 문제를 해결하는 차세대 AI 패러다임.",
      architecture: "질의 수신 ➔ 잠재적 CoT 경로 탐색 (MCTS) ➔ 각 단계별 PRM(Process Reward Model) 평가 ➔ 자가 교정(Self-Correction) ➔ 최종 정답 산출.",
      comparison: "전통적 LLM(빠른 직관, 환각 잦음, System 1) vs Reasoning LLM(생각 시간 소요, 논리적 검증, System 2, Test-Time Compute 증대).",
      insight: "기업용 서비스 설계 시 단순 대화는 일반 LLM으로 빠르게 처리하고, 복합 정책 판정이나 코드 생성에는 추론형 LLM을 동적으로 라우팅하는 비용 최적화 필수.",
    },
  },
  {
    id: "itpe-roi-23",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "GraphRAG (지식 그래프 결합 RAG) 아키텍처",
    formula: "문서군에서 Entity-Relation 추출 ➔ Leiden 알고리즘 계층적 커뮤니티 요약 ➔ Local Search(엔티티) + Global Search(거시주제) 복합 추론",
    trap: "기존 Naive RAG의 분절된 텍스트 청크 검색 한계(Lost in the Middle, Multi-hop 질문 실패)를 완벽히 극복! 그래프 구축 시 초기 LLM 토큰 비용이 발생하므로 하이브리드 라우터(단순 질문은 Vector DB, 복합 질문은 GraphRAG)와 결합해야 함.",
    sectionId: "itpe-ai-law",
    tags: ["GraphRAG", "지식그래프", "Leiden알고리즘", "MultiHop", "GlobalSearch", "RAG"],
    goldenTemplate: {
      whyWhat: "단순 벡터 유사도 기반 Naive RAG의 문맥 단절과 전체 문서 요약 불가 한계를 지식 그래프의 구조적 연결로 해결한 최신 RAG 프레임워크.",
      architecture: "[문서군] → (LLM 추출) → [엔티티-관계 그래프] → (Leiden 클러스터링) → [계층적 커뮤니티 요약] → [Local/Global 검색] → [답변 생성].",
      comparison: "Naive RAG(단일 청크 유사도 Top-K, 지소적 질문에 한정) vs GraphRAG(그래프 순회 + Map-Reduce 요약, 전사 거시 질의 및 다단계 추론 가능).",
      insight: "엔터프라이즈 환경에서는 검색 비용과 응답 지연을 고려해 Hybrid Search와 GraphRAG를 질의 복잡도에 따라 분기하는 아키텍처 구축 권고.",
    },
  },
  {
    id: "itpe-roi-24",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "Agentic AI 4대 디자인 패턴 & MCP / A2A",
    formula: "단발성 프롬프트 탈피 ➔ [반성 Reflection + 도구사용 Tool Use + 기획 Planning + 다중협업 Multi-Agent] ➔ 표준 프로토콜(MCP/A2A)",
    trap: "에이전트 시스템의 파편화된 도구 연결 규격을 표준화하기 위해 Anthropic이 발표한 'MCP(Model Context Protocol)'와 서로 다른 에이전트 간 통신 규약인 'A2A'를 상호 연계하여 기술해야 만점 답안 도출!",
    sectionId: "itpe-ai-law",
    tags: ["AgenticAI", "MCP", "A2A", "ReAct", "Reflection", "MultiAgent"],
    goldenTemplate: {
      whyWhat: "자율적으로 환경을 관찰하고 도구를 호출하며 목표를 달성하는 지능형 에이전트의 구현 패턴 및 표준 연동 규약.",
      architecture: "사용자 목표 ➔ [Planning (태스크 분해)] ➔ [Tool Use via MCP Server] ➔ [Reflection (결과 자체 검증)] ➔ [다중 에이전트 협업] ➔ 목표 완수.",
      comparison: "기존 챗봇(정적 단일 응답) vs Agentic AI(상태 유지, 도구 실행, 실패 시 자동 대안 탐색 루프).",
      insight: "엔터프라이즈 레거시 API를 MCP 서버로 래핑하여 사내 AI 에이전트가 안전하고 일관된 권한으로 접근할 수 있도록 생태계 조성 필요.",
    },
  },
  {
    id: "itpe-roi-25",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "S",
    stars: 5,
    frequencyRate: "2026 시행 최우선 법령 100%",
    title: "인공지능기본법 (2026 시행) 핵심 프레임워크",
    formula: "AI 산업 진흥(R&D/데이터지원) + 신뢰 기반 규제 ➔ 고영향 AI 기준 수립 + 생성형 AI 워터마크/사전고지 의무 + AI안전연구소",
    trap: "EU AI Act처럼 전면적 처벌 중심이 아니라, 산업 혁신을 저해하지 않도록 '우선 허용·사후 규제' 원칙을 조화시킨 법안임! 고영향 AI(보건·채용·금융 등 인명·기본권 영향)의 신뢰성 검증과 AI 워터마크 표시 의무가 핵심 골자.",
    sectionId: "itpe-ai-law",
    tags: ["인공지능기본법", "고영향AI", "워터마크의무", "AI안전연구소", "AI거버넌스"],
    goldenTemplate: {
      whyWhat: "인공지능 생태계 활성화와 국민의 안전·신뢰 확보를 동시에 달성하기 위해 2026년부터 본격 시행되는 대한민국 AI 최상위 기본법.",
      architecture: "진흥축(국가인공지능위원회, 기술혁신, 데이터 집적단지) + 규제축(고영향 AI 안전 확보 조치, 생성물 워터마크 표시 의무, 안전연구소).",
      comparison: "EU AI Act(위험도 4단계 엄격 사전 규제 및 과징금) vs 한국 인공지능기본법(진흥과 안전의 균형, 고영향 AI 위험관리 중심).",
      insight: "기업은 AI 서비스 런칭 전 자체 영향평가를 수행하고, 이용자에게 생성형 AI 활용 여부를 명시적으로 고지하는 UI/UX 프로세스 정비 필수.",
    },
  },
  {
    id: "itpe-roi-26",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "피지컬 AI (Physical AI) & 온디바이스 AI",
    formula: "디지털 공간 LLM 초월 ➔ 현실 세계 월드 모델(물리 시뮬레이션) + VLA(Vision-Language-Action) 로봇 제어 + 온디바이스 NPU 구동",
    trap: "단순히 로봇에 ChatGPT를 붙인 것이 아님! 물리 법칙(질량, 마찰, 중력)을 이해하는 '월드 모델'과 시각-언어 인식을 실제 모터 구동 액션으로 직접 변환하는 'VLA 모델'이 결합된 형태임.",
    sectionId: "itpe-ai-law",
    tags: ["피지컬AI", "월드모델", "VLA", "온디바이스AI", "휴머노이드", "NPU"],
  },

  // =================================================================
  // === 추가 고빈출 킬러 토픽 (도메인별 보강)
  // =================================================================
  {
    id: "itpe-roi-27",
    domainId: "d1",
    domainName: "1. 정보전략 및 관리",
    grade: "B",
    stars: 3,
    frequencyRate: "1교시 단답형 90%+",
    title: "통계적 가설검정 (p-value, 제1·2종 오류, 검정력)",
    formula: "귀무가설($H_0$) vs 대립가설($H_1$) ➔ p-value < $\\alpha$(유의수준) 시 $H_0$ 기각 ➔ 검정력($1-\\beta$)",
    trap: "제1종 오류($\\alpha$): 참인 귀무가설을 기각하는 오류(생산자 위험). 제2종 오류($\\beta$): 거짓인 귀무가설을 채택하는 오류(소비자 위험). 검정력($1-\\beta$)은 대립가설이 참일 때 귀무가설을 올바르게 기각할 확률임!",
    sectionId: "itpe-strategy",
    tags: ["가설검정", "p-value", "제1종오류", "제2종오류", "검정력", "알파오류", "베타오류"],
    goldenTemplate: {
      whyWhat: "SW 품질 보증 및 데이터 분석 결과의 통계적 유의성을 객관적으로 판정하기 위한 검정 기법.",
      architecture: "가설 설정($H_0, H_1$) ➔ 유의수준($\\alpha=0.05$) 결정 ➔ 검정통계량 및 p-value 계산 ➔ 가설 기각/채택 판정.",
      comparison: "제1종 오류($\\alpha$: 무죄를 유죄로 판결) vs 제2종 오류($\\beta$: 유죄를 무죄로 방면). 둘은 상충(Trade-off) 관계.",
      insight: "공공 SW 감리 및 빅데이터 모델 검증 시 단순 정확도 외에 p-value와 통계적 검정력을 분석 보고서에 명시 권고.",
    },
  },
  {
    id: "itpe-roi-28",
    domainId: "d1",
    domainName: "1. 정보전략 및 관리",
    grade: "B",
    stars: 3,
    frequencyRate: "기초 단답형 85%+",
    title: "베이즈 정리 (Bayes' Theorem) & 사후확률 추론",
    formula: "사전확률 $P(A)$ + 우도(Likelihood) $P(B|A)$ ➔ 사후확률 $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$ 계산",
    trap: "새로운 증거(데이터 $B$)가 주어졌을 때 기존의 믿음(사전확률 $P(A)$)을 업데이트하여 사후확률을 도출하는 조건부 확률 정리임! 머신러닝 나이브 베이즈 분류기 및 스팸 필터의 핵심 원리.",
    sectionId: "itpe-strategy",
    tags: ["베이즈정리", "사전확률", "사후확률", "우도", "조건부확률", "나이브베이즈"],
  },
  {
    id: "itpe-roi-29",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "S",
    stars: 5,
    frequencyRate: "MSA 설계 빈출 95%+",
    title: "도메인 주도 설계 (DDD: Bounded Context & CQRS)",
    formula: "유비쿼터스 언어 ➔ Bounded Context(경계 컨텍스트) 식별 ➔ Aggregate 루트 ➔ CQRS(명령/조회 책임 분리)",
    trap: "DDD는 단순한 코딩 스타일이 아니라 '도메인 전문가와 개발자 간 언어 일치(Ubiquitous Language)'와 서브도메인 분할을 통해 MSA 서비스 경계를 도출하는 핵심 설계 방법론임!",
    sectionId: "itpe-sw-eng",
    tags: ["DDD", "도메인주도설계", "BoundedContext", "CQRS", "유비쿼터스언어", "MSA"],
    goldenTemplate: {
      whyWhat: "복잡한 비즈니스 로직을 가진 대규모 엔터프라이즈 시스템에서 비즈니스 도메인과 SW 모델 간 불일치를 해소하는 소프트웨어 설계 접근법.",
      architecture: "전략적 설계(도메인, Bounded Context, Context Map) ➔ 전술적 설계(Entity, Value Object, Aggregate, Repository, Service) ➔ CQRS 패턴 연계.",
      comparison: "데이터 중심 설계(DB ERD 우선 도출, 비즈니스 종속) vs 도메인 주도 설계(도메인 행위 우선 모델링, 독립적 변경 용이).",
      insight: "MSA 전환 프로젝트에서 서비스 경계 분할의 실패를 방지하기 위해 이벤트 스토밍(Event Storming) 기반 DDD 워크숍 선행 필수.",
    },
  },
  {
    id: "itpe-roi-30",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "A",
    stars: 4,
    frequencyRate: "SRE 실무 빈출 92%+",
    title: "SRE 신뢰성 지표 (SLI, SLO, SLA & Error Budget)",
    formula: "SLI (실제 측정값) ➔ SLO (내부 목표치) ➔ SLA (고객 보상 계약) | 에러 버짓($\\text{Error Budget} = 100\\% - \\text{SLO}$)",
    trap: "가용성 목표 100%는 불가능하며 혁신을 저해함! 남은 에러 버짓이 충분할 때는 신기능 배포를 장려하고, 에러 버짓이 소진되면 신규 배포를 중단하고 시스템 안정화에 집중하는 것이 핵심 운영 메커니즘.",
    sectionId: "itpe-sw-eng",
    tags: ["SRE", "SLI", "SLO", "SLA", "에러버짓", "ErrorBudget", "가용성"],
    goldenTemplate: {
      whyWhat: "개발팀(빠른 변경·출시)과 운영팀(시스템 안정성 유지) 간의 고질적 갈등을 수치화된 신뢰성 지표로 해결하는 구글의 엔지니어링 프랙티스.",
      architecture: "SLI(성공 요청수/총 요청수) 측정 ➔ SLO(가용성 99.9% 설정) ➔ 에러 버짓 계산(0.1%) ➔ 소진 시 배포 동결(Freeze) 정책 발동.",
      comparison: "SLA(대외 계약, 위반 시 위약금) vs SLO(내부 목표, 위반 시 배포 우선순위 조정) vs SLI(지표 측정 도구 로그).",
      insight: "클라우드 네이티브 MSA 전환 시 대시보드(Prometheus/Grafana)에 에러 버짓 소진율(Burn Rate) 알람을 필수로 연동해야 함.",
    },
  },
  {
    id: "itpe-roi-31",
    domainId: "d2",
    domainName: "2. 소프트웨어 공학",
    grade: "A",
    stars: 4,
    frequencyRate: "테스트 빈출 90%+",
    title: "TDD (Test-Driven Development) & 리팩토링",
    formula: "Red (실패하는 테스트 작성) ➔ Green (테스트를 통과하는 최소 코드 구현) ➔ Refactor (중복 제거 및 설계 개선)",
    trap: "TDD는 단순한 '테스트 기법'이 아니라 '설계 기법'임! 테스트를 먼저 작성함으로써 인터페이스가 깔끔해지고 결합도가 낮아지며, 회귀 테스트 자동화 스위트가 자연스럽게 구축됨.",
    sectionId: "itpe-sw-eng",
    tags: ["TDD", "테스트주도개발", "RedGreenRefactor", "단위테스트", "리팩토링"],
  },
  {
    id: "itpe-roi-32",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "A",
    stars: 4,
    frequencyRate: "DB 구조 빈출 94%+",
    title: "저장 엔진 인덱스 구조: B+Tree vs LSM-Tree",
    formula: "B+Tree (In-Place 갱신, 순차/범위 조회 최적화, 읽기 위주) vs LSM-Tree (Append-Only, MemTable + WAL ➔ SSTable ➔ Compaction, 쓰기 위주)",
    trap: "LSM-Tree는 디스크 무작위 쓰기(Random I/O)를 순차 쓰기(Sequential I/O)로 변환하여 초고속 쓰기를 달성하나, 백그라운드 컴팩션(Compaction) 시 발생하는 쓰기 증폭(Write Amplification) 및 읽기 증폭(Read Amplification)이 트레이드오프임!",
    sectionId: "itpe-database",
    tags: ["B+Tree", "LSM-Tree", "MemTable", "SSTable", "Compaction", "쓰기증폭"],
    goldenTemplate: {
      whyWhat: "전통적인 RDB의 범위 검색 성능(B+Tree)과 대규모 로그·시계열 NoSQL의 초고속 쓰기 성능(LSM-Tree)을 비교하여 적재적소에 DB 엔진을 선정하기 위한 핵심 지식.",
      architecture: "LSM-Tree: 쓰기 요청 ➔ WAL(로그) + MemTable(메모리 정렬) ➔ 플러시 ➔ L0 SSTable(디스크) ➔ 백그라운드 병합(Compaction).",
      comparison: "B+Tree(읽기 $O(\\log N)$, 쓰기 In-place 오버헤드, MySQL InnoDB) vs LSM-Tree(쓰기 $O(1)$ 순차 기록, 읽기는 다중 파일 탐색, Cassandra/RocksDB).",
      insight: "대용량 AI 로그 및 IoT 센서 데이터 수집에는 LSM-Tree 기반 저장소(RocksDB/Cassandra)를, 정밀 트랜잭션 처리에는 B+Tree RDB를 복합 배치하는 하이브리드 아키텍처 권장.",
    },
  },
  {
    id: "itpe-roi-33",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "A",
    stars: 4,
    frequencyRate: "모델링 빈출 91%+",
    title: "RDB 정규화(1NF~BCNF) vs 반정규화 성능 최적화",
    formula: "1NF(원자값) ➔ 2NF(부분함수종속 제거) ➔ 3NF(이행함수종속 제거) ➔ BCNF(모든 결정자가 후보키) / 조회 성능 병목 시 반정규화",
    trap: "정규화는 데이터 중복과 삽입·삭제·갱신 이상(Anomaly)을 없애는 최우선 절차이나, 과도한 정규화는 다중 테이블 조인(Join)으로 조회 성능을 떨어뜨림. 반정규화는 인덱스 조정, 뷰 생성, 캐시(Redis) 적용 등 대안을 모두 검토한 후 최후의 수단으로 신중히 단행해야 함!",
    sectionId: "itpe-database",
    tags: ["정규화", "반정규화", "이상현상", "함수종속성", "1NF", "2NF", "3NF", "BCNF"],
  },
  {
    id: "itpe-roi-34",
    domainId: "d3",
    domainName: "3. 자료처리 및 빅데이터",
    grade: "S",
    stars: 5,
    frequencyRate: "Vector DB 빈출 93%+",
    title: "Vector DB 색인 알고리즘: IVF-PQ vs HNSW",
    formula: "IVF (Inverted File 역색인 군집화) + PQ (Product Quantization 서브벡터 압축: 128차원 ➔ 16바이트) ➔ 메모리 대폭 절감",
    trap: "HNSW는 검색 속도와 재현율(Recall)이 가장 우수하지만 메모리(RAM)를 매우 많이 차지함. 수천만~수억 건의 대규모 벡터 데이터셋에서는 메모리 비용을 1/10 이하로 줄여주는 IVF-PQ 또는 ScaNN 알고리즘이 엔터프라이즈 환경에서 필수적임!",
    sectionId: "itpe-database",
    tags: ["IVF-PQ", "HNSW", "ProductQuantization", "VectorDB", "양자화", "ANN"],
  },
  {
    id: "itpe-roi-35",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "S",
    stars: 5,
    frequencyRate: "서비스메시 킬러 94%+",
    title: "eBPF Ambient Mesh (사이드카리스 서비스 메시 구조)",
    formula: "파드별 사이드카(Sidecar) 제거 ➔ 노드별 ztunnel(L4 mTLS 암호화) + 네임스페이스별 Waypoint 프록시(L7 인가/라우팅)",
    trap: "기존 Istio Sidecar 방식은 애플리케이션 파드마다 Envoy 컨테이너를 강제 주입하여 리소스 낭비와 재배포 번거로움이 심했음. Ambient Mesh는 L4(보안 전송)와 L7(비즈니스 정책)을 계층 분리하여 무중단 투명 서비스 메시를 구현함!",
    sectionId: "itpe-system-nw",
    tags: ["AmbientMesh", "eBPF", "ztunnel", "Waypoint", "사이드카리스", "Istio"],
    goldenTemplate: {
      whyWhat: "전통적 사이드카 아키텍처의 리소스 오버헤드(CPU/메모리 낭비) 및 앱 컨테이너 라이프사이클 결합 문제를 해결하기 위해 등장한 2세대 서비스 메시.",
      architecture: "L4 계층: eBPF 기반 ztunnel(Zero Trust 터널, 노드 공유, 고속 mTLS) ➔ L7 계층: 필요 시에만 Waypoint 프록시(Envoy 기반 정책 검사) 호출.",
      comparison: "Sidecar Mesh(파드당 1 Envoy, 앱 재시작 필요, 메모리 소모 극심) vs Ambient Mesh(사이드카 없음, L4/L7 계층 분리, 무중단 적용).",
      insight: "대규모 마이크로서비스 인프라 도입 시 eBPF ztunnel을 적용하여 기본 클러스터 네트워크 비용(FinOps)을 50% 이상 절감 가능.",
    },
  },
  {
    id: "itpe-roi-36",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "B",
    stars: 3,
    frequencyRate: "OS 기본 단골 88%+",
    title: "교착상태 (Deadlock) 4대 조건과 은행원 알고리즘",
    formula: "4대 발생조건: 상호배제(Mutual Exclusion), 점유대기(Hold & Wait), 비선점(No Preemption), 환형대기(Circular Wait) ➔ 회피: Banker's Algorithm",
    trap: "데드락 해결 4대 전략: 예방(4조건 중 하나 사전 차단) / 회피(안전 상태 유지, 은행원 알고리즘) / 탐지(자원할당그래프 RAG 사이클 검사) / 회복(프로세스 강제 종료 또는 자원 선점).",
    sectionId: "itpe-system-nw",
    tags: ["데드락", "교착상태", "Coffman4조건", "은행원알고리즘", "상호배제", "환형대기"],
  },
  {
    id: "itpe-roi-37",
    domainId: "d4",
    domainName: "4. 컴퓨터시스템 및 통신",
    grade: "A",
    stars: 4,
    frequencyRate: "AI 반도체 빈출 89%+",
    title: "PIM (Processing-in-Memory) & PNM (Processing-Near-Memory)",
    formula: "폰 노이만 병목(CPU-메모리 버스 대역폭 한계) 극복 ➔ DRAM 내부 연산 유닛 내장(PIM) / 메모리 컨트롤러 인접 연산(PNM)",
    trap: "GPU 연산 속도가 아무리 빨라도 메모리에서 데이터를 퍼오는 버스 대역폭이 턱없이 부족한 '메모리 월' 현상을 해결하기 위해, 데이터가 머무는 메모리 내부에서 직접 행렬 곱셈/활성화 함수를 연산하는 혁신 아키텍처임!",
    sectionId: "itpe-system-nw",
    tags: ["PIM", "PNM", "폰노이만병목", "메모리월", "AI반도체", "DRAM"],
  },
  {
    id: "itpe-roi-38",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "A",
    stars: 4,
    frequencyRate: "공공 보안 정책 93%+",
    title: "클라우드 보안인증제 (CSAP) 등급제 (상·중·하)",
    formula: "획일적 인증 탈피 ➔ 상 등급(국가안보, 비공개) / 중 등급(공공 행정, 개인정보) / 하 등급(개인정보 미포함 공개 업무, 논리적 망분리 허용)",
    trap: "하 등급에 한해 글로벌 CSP(AWS, MS Azure 등)의 국내 공공 진입을 허용하는 '논리적 망분리'가 인정되었으나, 개인정보가 포함된 핵심 업무(중·상 등급)는 여전히 물리적 망분리와 엄격한 검증 기준이 유지됨을 구분할 것!",
    sectionId: "itpe-security",
    tags: ["CSAP", "클라우드보안인증", "상중하등급제", "논리적망분리", "공공클라우드"],
  },
  {
    id: "itpe-roi-39",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "A",
    stars: 4,
    frequencyRate: "PETs 암호학 91%+",
    title: "동형암호 (Homomorphic Encryption) 3단계 발전",
    formula: "PHE (부분 동형: 덧셈 또는 곱셈 단일 연산) ➔ SHE (준 동형: 횟수 제한 연산) ➔ FHE (완전 동형: 암호화 상태 무제한 사칙연산, 부트스트래핑)",
    trap: "완전 동형암호(FHE, Gentry 제안)는 데이터를 복호화하지 않고도 암호문 상태로 임의의 연산이 가능하여 완벽한 프라이버시 보존 AI 추론을 실현하지만, 연산 속도가 평문 대비 수천~수만 배 느린 '속도 오버헤드'를 가속기(FPGA/ASIC)로 극복하는 것이 실용화의 관건임!",
    sectionId: "itpe-security",
    tags: ["동형암호", "FHE", "PHE", "SHE", "부트스트래핑", "PETs", "프라이버시"],
  },
  {
    id: "itpe-roi-40",
    domainId: "d5",
    domainName: "5. 정보보안",
    grade: "S",
    stars: 5,
    frequencyRate: "보안 프레임워크 95%+",
    title: "제로 트러스트 5대 핵심 축 (Pillars) & CISA 성숙도 모델",
    formula: "5대 축: 신원(Identity), 기기(Device), 네트워크(Network), 애플리케이션 및 워크로드, 데이터 | 거버넌스 및 자동화 교차 연계",
    trap: "CISA 성숙도 4단계: 기존(Traditional: 수동 사일로) ➔ 초기(Initial: 최소 기준 자동화) ➔ 진보(Advanced: 중앙화 정책 기반) ➔ 최적(Optimal: 동적 AI 실시간 적응형 정책 통제). 기술사 답안에는 5대 축 매트릭스와 성숙도 발전 단계를 함께 제시해야 고득점!",
    sectionId: "itpe-security",
    tags: ["제로트러스트", "CISA성숙도", "5대기둥", "Pillars", "ICAM", "마이크로세그멘테이션"],
  },
  {
    id: "itpe-roi-41",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "S",
    stars: 5,
    frequencyRate: "LLM 파인튜닝 S등급 97%+",
    title: "LLM 파라미터 효율적 튜닝: LoRA & QLoRA",
    formula: "사전학습 가중치 $W_0$ 고정 ➔ 저차원 분해 행렬 $B(d \\times r) \\times A(r \\times k)$만 학습 ➔ $W = W_0 + \\Delta W$ (단, $r \\ll d$)",
    trap: "수십억 파라미터 전체를 파인튜닝(Full Fine-Tuning)하면 수백 GB VRAM과 막대한 GPU가 소모됨. LoRA는 랭크(Rank $r$)를 8~64로 줄여 학습 파라미터를 99% 이상 절감하고, QLoRA는 베이스 모델을 4비트 NormalFloat(NF4)로 양자화하여 단일 상용 GPU에서도 파인튜닝을 가능하게 함!",
    sectionId: "itpe-ai-law",
    tags: ["LoRA", "QLoRA", "PEFT", "파인튜닝", "저차원분해", "NF4", "양자화"],
    goldenTemplate: {
      whyWhat: "거대 언어 모델의 도메인 특화 미세조정 시 요구되는 천문학적 컴퓨팅 자원과 저장 공간을 획기적으로 절감하기 위한 파라미터 효율적 미세조정(PEFT) 기술.",
      architecture: "입력 $x$ ➔ [기존 $W_0$ 고정 통과] + [학습 가능한 저랭크 행렬 $B \\times A$ 통과] ➔ 출력 $h = W_0 x + \\Delta W x$.",
      comparison: "Full Fine-Tuning(전체 가중치 갱신, 치명적 망각 위험, 거대 VRAM) vs LoRA(원본 동결, 분해 행렬만 갱신, 모델 교체 경량 어댑터).",
      insight: "엔터프라이즈 환경에서 단일 파운데이션 모델 위에 부서별 특화 LoRA 어댑터(금융, 법률, 고객센터)를 동적 스왑하는 서빙 아키텍처 구축 권장.",
    },
  },
  {
    id: "itpe-roi-42",
    domainId: "d6",
    domainName: "6. 최신기술 및 법규",
    grade: "S",
    stars: 5,
    frequencyRate: "LLM 서빙 최적화 96%+",
    title: "KV 캐시 메모리 최적화: PagedAttention 및 vLLM",
    formula: "운영체제(OS) 가상 메모리 페이징 원리 ➔ 불연속 메모리 공간에 KV 캐시 블록 동적 할당 ➔ 내부 단편화 4% 미만 달성",
    trap: "LLM 생성 시 이전 토큰들의 Key/Value 텐서를 캐싱하는 KV Cache는 시퀀스 길이에 따라 동적으로 팽창하여 심각한 메모리 단편화(Fragmentation)와 낭비를 초래함. PagedAttention은 물리 메모리를 블록 단위로 매핑하여 서빙 처리량(Throughput)을 2~4배 극대화함!",
    sectionId: "itpe-ai-law",
    tags: ["PagedAttention", "vLLM", "KVCache", "가상메모리", "내부단편화", "LLM서빙"],
    goldenTemplate: {
      whyWhat: "생성형 AI 서빙 시 요청 간 동적 시퀀스 길이로 인해 발생하는 VRAM 낭비와 메모리 대역폭 병목을 OS 페이징 기법으로 해결한 혁신 엔진.",
      architecture: "논리적 KV 블록 ➔ [블록 테이블 (Block Table)] 매핑 ➔ 물리적 GPU 메모리 블록 (비연속적 동적 할당) ➔ Copy-on-Write 지원.",
      comparison: "기존 HuggingFace 서빙(최대 길이 사전 고정 할당으로 60~80% 메모리 낭비) vs vLLM PagedAttention(낭비 4% 미만, 배치 크기 극대화).",
      insight: "온프레미스 LLM 인프라 구축 시 vLLM 엔진을 컨테이너 런타임으로 표준화하여 고비용 H100/A100 GPU 구매 비용을 최적화(FinOps)해야 함.",
    },
  },
];

export function ItpeFloatingMemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<ItpeDomainId>("all");
  const [selectedGrade, setSelectedGrade] = useState<"all" | "S" | "A" | "B">("all");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // 로컬 스토리지 북마크 동기화
  useEffect(() => {
    try {
      const saved = localStorage.getItem("itpe_roi_bookmarks");
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("itpe_roi_bookmarks", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleCopy = (item: ItpeRoiMemoItem) => {
    const textToCopy = `[정보관리기술사 킬러 토픽] ${item.title} (${item.grade}등급 | ${item.frequencyRate})\n- 핵심 메커니즘: ${item.formula}\n- 기술사적 차별화 팁: ${item.trap}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredItems = useMemo(() => {
    return ITPE_ROI_ITEMS.filter((item) => {
      if (onlyBookmarks && !bookmarkedIds.includes(item.id)) return false;
      if (selectedDomain !== "all" && item.domainId !== selectedDomain) return false;
      if (selectedGrade !== "all" && item.grade !== selectedGrade) return false;

      if (!searchTerm.trim()) return true;
      const lower = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(lower) ||
        item.formula.toLowerCase().includes(lower) ||
        item.trap.toLowerCase().includes(lower) ||
        item.tags.some((t) => t.toLowerCase().includes(lower))
      );
    });
  }, [searchTerm, selectedDomain, selectedGrade, onlyBookmarks, bookmarkedIds]);

  return (
    <>
      {/* 플로팅 트리거 버튼 (우측 하단) */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="group relative flex h-14 items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-orange-500 px-5 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/25 active:scale-95"
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
            {ITPE_ROI_ITEMS.length}선
          </span>
        </Button>
      </div>

      {/* 모달/드로어 창 */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-3 backdrop-blur-sm print:hidden sm:p-6 animate-in fade-in duration-200">
          <div
            className={cn(
              "flex flex-col rounded-2xl border border-border bg-card shadow-2xl transition-all duration-200 overflow-hidden",
              isMaximized
                ? "h-full w-full max-w-7xl"
                : "h-[85vh] w-full max-w-4xl"
            )}
          >
            {/* 상단 헤더 */}
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-sm">
                  <Flame className="size-4 fill-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
                    정보관리기술사(ITPE) 기출빈도 ROI 전략 메모장
                    <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                      2026 최신 개정판
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    방대한 기술사 범위를 압축하는 S/A/B등급 우선순위 및 실전 개념도 모음
                  </p>
                </div>
              </div>

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

            {/* 필터 및 검색 컨트롤 */}
            <div className="flex flex-col gap-3 border-b border-border bg-muted/15 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {/* 검색 바 */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="토픽명, 키워드 검색 (예: HNSW, Saga, N2SF, GraphRAG, 42001, 25010)..."
                    className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-8 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                {/* 북마크 필터 토글 */}
                <Button
                  variant={onlyBookmarks ? "default" : "outline"}
                  size="sm"
                  onClick={() => setOnlyBookmarks((prev) => !prev)}
                  className={cn(
                    "h-9 gap-1.5 text-xs font-semibold",
                    onlyBookmarks
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "text-muted-foreground"
                  )}
                >
                  <Bookmark className="size-3.5 fill-current" />
                  북마크만 ({bookmarkedIds.length})
                </Button>
              </div>

              {/* 도메인 선택 탭 */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {(
                  [
                    { id: "all", label: "전체 도메인" },
                    { id: "d1", label: "1. 정보전략/PM" },
                    { id: "d2", label: "2. SW공학" },
                    { id: "d3", label: "3. 자료처리/DB" },
                    { id: "d4", label: "4. 컴퓨터/NW" },
                    { id: "d5", label: "5. 정보보안" },
                    { id: "d6", label: "6. 최신기술/법규" },
                  ] as const
                ).map((dom) => (
                  <button
                    key={dom.id}
                    onClick={() => setSelectedDomain(dom.id)}
                    className={cn(
                      "shrink-0 rounded-md px-2.5 py-1 font-medium transition-colors",
                      selectedDomain === dom.id
                        ? "bg-foreground text-background font-semibold"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    )}
                  >
                    {dom.label}
                  </button>
                ))}
              </div>

              {/* 등급(Grade) 필터 */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[11px] font-medium text-muted-foreground mr-1">
                  우선순위:
                </span>
                {(
                  [
                    { id: "all", label: "전체 등급" },
                    { id: "S", label: "🏆 [S] 초고효율 최우선" },
                    { id: "A", label: "🥈 [A] 서술형 빈출" },
                    { id: "B", label: "🥉 [B] 1교시 단답형" },
                  ] as const
                ).map((gr) => (
                  <button
                    key={gr.id}
                    onClick={() => setSelectedGrade(gr.id)}
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors border",
                      selectedGrade === gr.id
                        ? "border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold"
                        : "border-border bg-background text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {gr.label}
                  </button>
                ))}
                <span className="ml-auto text-[11px] text-muted-foreground">
                  총 <strong>{filteredItems.length}</strong>개 토픽 검색됨
                </span>
              </div>
            </div>

            {/* 카드 리스트 영역 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {filteredItems.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center gap-2 text-center text-muted-foreground">
                  <HelpCircle className="size-10 stroke-[1.5]" />
                  <p className="text-sm">조건에 일치하는 킬러 토픽이 없습니다.</p>
                  <Button
                    variant="link"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedDomain("all");
                      setSelectedGrade("all");
                      setOnlyBookmarks(false);
                    }}
                    className="gap-1 text-xs"
                  >
                    <RotateCcw className="size-3" />
                    검색 필터 초기화
                  </Button>
                </div>
              ) : (
                filteredItems.map((item) => {
                  const isBookmarked = bookmarkedIds.includes(item.id);
                  const isExpanded = expandedItemId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="group relative rounded-xl border border-border bg-card p-4 transition-all hover:border-rose-500/40 hover:shadow-md"
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
                            {item.domainName}
                          </span>

                          <span className="flex items-center gap-0.5 rounded bg-orange-500/10 px-2 py-0.5 text-[11px] font-semibold text-orange-600 dark:text-orange-400">
                            <Sparkles className="size-3" />
                            {item.frequencyRate}
                          </span>
                        </div>

                        {/* 북마크 및 복사 버튼 */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => toggleBookmark(item.id)}
                            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-amber-500 transition-colors"
                            title={isBookmarked ? "북마크 해제" : "북마크 저장"}
                          >
                            {isBookmarked ? (
                              <BookmarkCheck className="size-4 text-amber-500 fill-amber-500" />
                            ) : (
                              <Bookmark className="size-4" />
                            )}
                          </button>
                          <button
                            onClick={() => handleCopy(item)}
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

                      {/* 토픽 타이틀 */}
                      <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                        <MathText text={item.title} />
                      </h4>

                      {/* 핵심 텍스트 개념도 / 메커니즘 */}
                      <div className="rounded-lg border border-border/80 bg-muted/40 p-3 mb-2.5 font-mono text-xs text-foreground/90 leading-relaxed overflow-x-auto">
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground mb-1">
                          <Zap className="size-3 text-amber-500" />
                          <span>핵심 메커니즘 & 텍스트 개념도:</span>
                        </div>
                        <MathText text={item.formula} />
                      </div>

                      {/* 기술사적 차별화 팁 & 함정 */}
                      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
                        <div className="flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400 mb-0.5">
                          <AlertTriangle className="size-3.5" />
                          <span>기술사 채점관 사로잡는 차별화 킬러 포인트:</span>
                        </div>
                        <MathText text={item.trap} />
                      </div>

                      {/* 모범답안 상세 템플릿 토글 (있는 경우) */}
                      {item.goldenTemplate && (
                        <div className="mt-3">
                          <button
                            onClick={() =>
                              setExpandedItemId((prev) => (prev === item.id ? null : item.id))
                            }
                            className="flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline"
                          >
                            <BookOpen className="size-3.5" />
                            {isExpanded
                              ? "모범 답안 프레임워크 접기"
                              : "1페이지 실전 모범 답안 프레임워크 보기"}
                          </button>

                          {isExpanded && (
                            <div className="mt-2.5 space-y-2 rounded-lg border border-rose-500/20 bg-rose-500/5 p-3.5 text-xs text-foreground animate-in fade-in duration-150">
                              <div>
                                <span className="font-bold text-rose-600 dark:text-rose-400">
                                  I. 배경 및 정의 (Why & What):
                                </span>{" "}
                                <p className="mt-0.5 text-muted-foreground">
                                  <MathText text={item.goldenTemplate.whyWhat} />
                                </p>
                              </div>
                              <div>
                                <span className="font-bold text-rose-600 dark:text-rose-400">
                                  II. 핵심 아키텍처 (How):
                                </span>{" "}
                                <p className="mt-0.5 text-muted-foreground font-mono">
                                  <MathText text={item.goldenTemplate.architecture} />
                                </p>
                              </div>
                              <div>
                                <span className="font-bold text-rose-600 dark:text-rose-400">
                                  III. 비교 분석 (Comparison):
                                </span>{" "}
                                <p className="mt-0.5 text-muted-foreground">
                                  <MathText text={item.goldenTemplate.comparison} />
                                </p>
                              </div>
                              <div>
                                <span className="font-bold text-rose-600 dark:text-rose-400">
                                  IV. 기술사적 제언 (Enterprise Insight):
                                </span>{" "}
                                <p className="mt-0.5 text-muted-foreground">
                                  <MathText text={item.goldenTemplate.insight} />
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* 태그 리스트 */}
                      <div className="flex flex-wrap items-center gap-1 mt-3 pt-2 border-t border-border/50">
                        {item.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchTerm(tag)}
                            className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* 하단 푸터 */}
            <div className="flex items-center justify-between border-t border-border bg-muted/30 px-5 py-2.5 text-xs text-muted-foreground">
              <span>
                💡 마인드맵 노드를 클릭하면 해당 토픽의 상세 노트를 즉시 확인할 수 있습니다.
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-7 text-xs"
              >
                닫기
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
