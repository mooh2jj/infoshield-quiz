export type ItpeChapterId = "all" | "d1" | "d2" | "d3" | "d4" | "d5" | "d6";

export interface ItpeChapter {
  id: "d1" | "d2" | "d3" | "d4" | "d5" | "d6";
  name: string;
  shortName: string;
}

export const ITPE_CHAPTERS: ItpeChapter[] = [
  { id: "d1", name: "제1도메인 정보전략 및 관리", shortName: "정보전략·PM" },
  { id: "d2", name: "제2도메인 소프트웨어 공학", shortName: "SW공학" },
  { id: "d3", name: "제3도메인 자료처리 및 빅데이터", shortName: "데이터·DB" },
  { id: "d4", name: "제4도메인 컴퓨터 시스템 및 통신", shortName: "컴퓨터·통신" },
  { id: "d5", name: "제5도메인 정보보안", shortName: "정보보안" },
  { id: "d6", name: "제6도메인 최신기술 및 법규", shortName: "최신기술·법규" },
];

export interface SpeedQuizItem {
  id: number;
  chapterId: "d1" | "d2" | "d3" | "d4" | "d5" | "d6";
  chapterName: string;
  question: string;
  answer: string;
}

export const ITPE_QUIZ_LIST: SpeedQuizItem[] = [
  // =================================================================
  // === [제1도메인] 정보전략 및 관리 (10문항)
  // =================================================================
  {
    id: 1,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "조직이 AI 시스템을 윤리적·법적 규제에 맞춰 안전하게 개발·운영하기 위한 세계 최초의 AI 거버넌스 국제 표준은?",
    answer: "ISO/IEC 42001 (인공지능 경영시스템)"
  },
  {
    id: 2,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "재무와 DevOps를 융합하여 클라우드 비용 가시성을 확보하고 비즈니스 가치를 극대화하는 재무 운영 문화는?",
    answer: "FinOps (핀옵스)"
  },
  {
    id: 3,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "FinOps의 핵심 3단계 라이프사이클 순서는?",
    answer: "Inform(가시화) ➔ Optimize(최적화) ➔ Operate(운영거버넌스)"
  },
  {
    id: 4,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "생성형 AI 도입 시 기존 기능점수(FP) 방식의 한계를 극복하기 위해 신설된 공공 대가 체계는?",
    answer: "초거대 AI 활용 서비스 개발 대가산정 가이드"
  },
  {
    id: 5,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "정부 부처 간 데이터 사일로를 해소하고 민관 협업 기반 원스톱 서비스를 제공하는 국가 DX 청사진은?",
    answer: "디지털플랫폼정부 (DPG)"
  },
  {
    id: 6,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "PMBOK 7판이 기존 6판의 '프로세스 중심'에서 탈피하여 새롭게 채택한 핵심 패러다임 2가지는?",
    answer: "12대 원칙 & 가치 인도 시스템 (Value Delivery)"
  },
  {
    id: 7,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "귀무가설이 참임에도 불구하고 이를 잘못 기각하여 발생하는 통계적 오류는?",
    answer: "제1종 오류 (Alpha 오류, 생산자 위험)"
  },
  {
    id: 8,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "공공 IT 감리의 3대 기본 점검 기준은?",
    answer: "적합성, 타당성, 효과성"
  },
  {
    id: 9,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "프로젝트 진행 상황을 계획 가치(PV), 획득 가치(EV), 실제 원가(AC)로 계량 평가하는 관리 기법은?",
    answer: "EVM (획득가치관리, Earned Value Management)"
  },
  {
    id: 10,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "조직의 비즈니스 구조와 정보화 시스템 간의 일치성을 확보하기 위한 전사적 아키텍처 청사진은?",
    answer: "EA (Enterprise Architecture, 전사적 아키텍처)"
  },

  // =================================================================
  // === [제2도메인] 소프트웨어 공학 (11문항)
  // =================================================================
  {
    id: 11,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "ISO/IEC 25010:2023 개정판에서 9번째 독립 품질 특성으로 신규 추가된 항목은?",
    answer: "안전성 (Safety)"
  },
  {
    id: 12,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "ISO/IEC 25010:2023에서 기존 '사용성(Usability)'과 '이식성(Portability)'의 변경된 명칭은?",
    answer: "상호작용성(Interaction Capability) & 유연성(Flexibility)"
  },
  {
    id: 13,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "MSA 환경에서 분산 트랜잭션의 결과적 일관성을 위해 각 로컬 트랜잭션 실패 시 실행하는 역순 롤백 트랜잭션은?",
    answer: "보상 트랜잭션 (Compensating Transaction)"
  },
  {
    id: 14,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "Saga 패턴의 2가지 구현 방식 중 중앙 조정자가 상태 머신으로 워크플로우를 직접 지휘하는 방식은?",
    answer: "Orchestration Saga (오케스트레이션 사가)"
  },
  {
    id: 15,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "MSA에서 DB 커밋과 메시지 브로커 발행의 이중 쓰기(Dual Write) 불일치를 해결하기 위한 패턴은?",
    answer: "Transactional Outbox 패턴"
  },
  {
    id: 16,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "DB 트랜잭션 로그(Binlog)를 실시간 테일링하여 Outbox 테이블의 이벤트를 브로커로 추출하는 기술은?",
    answer: "CDC (Change Data Capture, 예: Debezium)"
  },
  {
    id: 17,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "네트워크 재시도로 인해 동일한 이벤트가 중복 수신되어도 시스템 결과가 항상 동일함을 보장하는 설계 원칙은?",
    answer: "멱등성 (Idempotency)"
  },
  {
    id: 18,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "개발자의 인지 부하(Cognitive Load)를 줄이기 위해 전담 팀이 셀프 서비스형 IDP와 황금 경로를 제공하는 엔지니어링은?",
    answer: "플랫폼 엔지니어링 (Platform Engineering)"
  },
  {
    id: 19,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "분산 시스템의 회복탄력성을 검증하기 위해 운영 환경에 고의로 장애를 주입하는 실험적 기법은?",
    answer: "카오스 엔지니어링 (Chaos Engineering)"
  },
  {
    id: 20,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "시스템 이론을 기반으로 제어 루프 상에서 4대 안전하지 않은 제어 명령(UCA)을 도출하는 안전 분석 기법은?",
    answer: "STPA (System-Theoretic Process Analysis)"
  },
  {
    id: 21,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "N개의 개별 조건식이 있을 때 최소 N+1개의 테스트 케이스로 결정식의 독립적 영향을 검증하는 화이트박스 커버리지는?",
    answer: "MC/DC (수정 조건/결정 커버리지)"
  },

  // =================================================================
  // === [제3도메인] 자료처리 및 빅데이터 (10문항)
  // =================================================================
  {
    id: 22,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "스킵 리스트 원리를 응용하여 고차원 임베딩 벡터를 O(log N) 속도로 탐색하는 근사 최근접 이웃(ANN) 알고리즘은?",
    answer: "HNSW (Hierarchical Navigable Small World)"
  },
  {
    id: 23,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "키워드 기반 BM25(희소)와 의미 기반 Dense(밀집) 검색 결과를 순위 역수 합산으로 재순위화하는 알고리즘은?",
    answer: "RRF (Reciprocal Rank Fusion, 하이브리드 검색)"
  },
  {
    id: 24,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "머신러닝 및 AI 학습 파이프라인 전 주기에 걸쳐 데이터 대표성과 라벨링 일관성을 다루는 국제 품질 표준은?",
    answer: "ISO/IEC 5259"
  },
  {
    id: 25,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "AI가 생성한 합성 데이터만을 반복 학습할 경우 데이터 분포의 꼬리가 소실되어 모델 성능이 퇴화하는 현상은?",
    answer: "모델 붕괴 (Model Collapse)"
  },
  {
    id: 26,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "오브젝트 스토리지 위에 메타데이터 계층을 두어 ACID 트랜잭션과 타임 트래블을 지원하는 오픈 테이블 포맷은?",
    answer: "Apache Iceberg (아파치 아이스버그)"
  },
  {
    id: 27,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "중앙 집중식 데이터 팀의 병목을 해결하기 위해 도메인별 분권화와 '데이터의 제품화(Data as a Product)'를 채택한 아키텍처는?",
    answer: "Data Mesh (데이터 메시)"
  },
  {
    id: 28,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "RDB에서 읽기 작업과 쓰기 작업이 락(Lock) 없이 공존할 수 있도록 언두 로그(Undo Log)와 Read View를 유지하는 동시성 제어 기법은?",
    answer: "MVCC (다중 버전 동시성 제어)"
  },
  {
    id: 29,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "한 트랜잭션 내에서 동일 쿼리를 두 번 실행했을 때 이전에 없던 유령(새로운) 레코드가 나타나는 격리성 이상 현상은?",
    answer: "Phantom Read (팬텀 리드)"
  },
  {
    id: 30,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "메모리의 MemTable에 쓰기를 먼저 기록하고 순차적으로 디스크의 SSTable로 머지하여 쓰기 성능을 극대화한 NoSQL 자료구조는?",
    answer: "LSM-Tree (Log-Structured Merge-Tree)"
  },
  {
    id: 31,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "HNSW 인덱스의 극심한 RAM 메모리 소모량을 줄이기 위해 고차원 벡터를 서브 벡터로 쪼개어 코드북으로 압축하는 기술은?",
    answer: "PQ (Product Quantization, 곱 양자화)"
  },

  // =================================================================
  // === [제4도메인] 컴퓨터 시스템 및 통신 (10문항)
  // =================================================================
  {
    id: 32,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "리눅스 커널 소스를 수정하지 않고도 커널 내부에서 안전하게 샌드박스 바이트코드를 실행하는 혁신 기술은?",
    answer: "eBPF (Extended Berkeley Packet Filter)"
  },
  {
    id: 33,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "eBPF를 활용하여 사이드카 프록시 없이 커널 레벨에서 L4/L7 라우팅 및 보안 관측성을 구현한 클라우드 솔루션은?",
    answer: "Cilium (실리움)"
  },
  {
    id: 34,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "DRAM을 TSV(실리콘 관통전극)로 수직 적층하여 초고대역폭을 구현함으로써 메모리 월 병목을 극복한 메모리는?",
    answer: "HBM (High Bandwidth Memory, 고대역폭 메모리)"
  },
  {
    id: 35,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "PCIe 기반으로 CPU, GPU, 메모리 간 캐시 일관성을 보장하고 대규모 메모리 풀링(Pooling)을 지원하는 인터커넥트 표준은?",
    answer: "CXL (Compute Express Link, 3.0)"
  },
  {
    id: 36,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "쿠버네티스에서 정적 노드 그룹 없이 파드의 요구사항에 맞춰 최적의 인스턴스를 초 단위로 JIT 프로비저닝하는 오토스케일러는?",
    answer: "Karpenter (카펜터)"
  },
  {
    id: 37,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "TCP와 TLS를 통합하고 UDP 기반의 QUIC 프로토콜을 사용하여 HOL 블로킹을 해소한 최신 웹 전송 표준은?",
    answer: "HTTP/3"
  },
  {
    id: 38,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "지상망의 커버리지 한계를 극복하고 저궤도(LEO) 위성 및 HAPS를 결합하여 지구 전역에 3차원 입체 통신을 제공하는 6G 핵심 규격은?",
    answer: "NTN (Non-Terrestrial Network, 비지상 네트워크)"
  },
  {
    id: 39,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "모바일 단말이 Wi-Fi에서 LTE/5G로 네트워크 IP가 변경되어도 재핸드셰이크 없이 세션을 유지하는 QUIC의 기능은?",
    answer: "연결 마이그레이션 (Connection Migration)"
  },
  {
    id: 40,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "메모리 내부에서 직접 단순 연산을 수행하여 CPU-메모리 간 데이터 이동 버스 병목을 없애는 반도체 기술은?",
    answer: "PIM (Processing-in-Memory)"
  },
  {
    id: 41,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "eBPF 바이트코드가 실행되기 전 무한 루프나 유효하지 않은 메모리 접근 여부를 정적으로 검증하는 커널 모듈은?",
    answer: "eBPF Verifier (검증기)"
  },

  // =================================================================
  // === [제5도메인] 정보보안 (10문항)
  // =================================================================
  {
    id: 42,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "획일적 물리적 망분리를 탈피하여 공공 데이터를 C-S-O 3개 등급으로 나누고 차등 보안을 적용하는 국가 보안 개편 체계는?",
    answer: "N2SF (국가망보안체계) / 다층보안체계(MLS)"
  },
  {
    id: 43,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "N2SF(국가망보안체계)의 데이터 중요도 3등급(C, S, O)의 한글 명칭은?",
    answer: "기밀(Classified), 민감(Sensitive), 공개(Open)"
  },
  {
    id: 44,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "제로 트러스트 아키텍처에서 모든 리소스 접근 정책을 최종 판정하는 핵심 두 축(결정점과 시행점)의 약어는?",
    answer: "PDP (정책결정점) & PEP (정책시행점)"
  },
  {
    id: 45,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "내부망 침투 공격자의 수평 측면 이동(Lateral Movement)을 방지하기 위해 네트워크를 최소 보안 영역으로 격리하는 기법은?",
    answer: "마이크로 세그멘테이션 (Micro-segmentation)"
  },
  {
    id: 46,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "양자컴퓨터의 쇼어 알고리즘에 대응하기 위해 NIST가 2024년 최종 표준화한 격자 기반 양자내성 공개키 교환 알고리즘은?",
    answer: "ML-KEM (FIPS 203, 구 Kyber)"
  },
  {
    id: 47,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "외부 웹페이지나 PDF 문서를 검색·요약하는 RAG 과정에서 악의적 명령이 은닉되어 모델을 조작하는 AI 공격은?",
    answer: "간접 프롬프트 인젝션 (Indirect Prompt Injection)"
  },
  {
    id: 48,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "SW를 구성하는 모든 오픈소스 라이브러리와 버전 및 취약점 정보를 기계 판독형으로 명시한 소프트웨어 부품명세서는?",
    answer: "SBOM (Software Bill of Materials, SPDX/CycloneDX)"
  },
  {
    id: 49,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "통계 데이터 조회 결과에 수학적으로 계산된 라플라스 노이즈를 주입하여 특정 개인의 존재 여부를 감추는 보호 기술은?",
    answer: "차분 프라이버시 (Differential Privacy)"
  },
  {
    id: 50,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "데이터를 복호화하여 평문으로 변환하지 않고도 암호화된 상태 그대로 사칙연산과 AI 연산을 수행하는 차세대 암호는?",
    answer: "동형암호 (Homomorphic Encryption)"
  },
  {
    id: 51,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "입력 프롬프트의 탈옥 시도와 출력 텍스트의 유해성·개인정보 유출을 실시간 필터링하는 AI 보안 방벽은?",
    answer: "AI 가드레일 (Guardrails)"
  },

  // =================================================================
  // === [제6도메인] 최신기술 및 법규 (10문항)
  // =================================================================
  {
    id: 52,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "사전학습 스케일링 법칙 한계를 넘어, 추론 시점의 연산량(Test-Time Compute)을 늘려 깊은 사고를 수행하는 AI 패러다임은?",
    answer: "추론형 AI (Reasoning LLM, 예: DeepSeek-R1, OpenAI o1)"
  },
  {
    id: 53,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "추론형 모델에서 최종 결과뿐 아니라 추론의 매 중간 단계(Step)마다 정확도를 평가하여 탐색 경로를 유도하는 보상 모델은?",
    answer: "PRM (Process Reward Model, 과정 보상 모델)"
  },
  {
    id: 54,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "Andrew Ng 교수가 제안한 Agentic AI의 4대 핵심 디자인 패턴은?",
    answer: "반성(Reflection), 도구사용(Tool Use), 기획(Planning), 다중협업(Multi-Agent)"
  },
  {
    id: 55,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "Anthropic이 제안한 오픈 표준으로, AI 모델과 엔터프라이즈 도구/데이터 간의 연결을 USB-C처럼 규격화한 통신 프로토콜은?",
    answer: "MCP (Model Context Protocol)"
  },
  {
    id: 56,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "문서에서 엔티티-관계를 추출하여 지식 그래프를 구축하고, Leiden 클러스터링으로 커뮤니티 요약을 생성해 복합 추론을 지원하는 RAG는?",
    answer: "GraphRAG (그래프 RAG)"
  },
  {
    id: 57,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "2026년부터 대한민국에서 본격 시행되며 고영향 AI 기준과 생성형 AI 워터마크 표시 의무를 규정한 법률은?",
    answer: "인공지능기본법"
  },
  {
    id: 58,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "가상 공간을 넘어 물리 세계의 법칙(중력, 마찰)을 시뮬레이션하는 월드 모델과 VLA 모델을 결합한 차세대 AI는?",
    answer: "피지컬 AI (Physical AI)"
  },
  {
    id: 59,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "피지컬 AI에서 시각적 인식(Vision)과 자연어 명령(Language)을 로봇의 물리적 제어 행동(Action)으로 직접 변환하는 모델은?",
    answer: "VLA 모델 (Vision-Language-Action)"
  },
  {
    id: 60,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "LLM 서빙 시 가상 메모리 페이징 원리를 적용하여 KV 캐시 메모리 단편화를 제거하고 처리량을 2~4배 높인 기술은?",
    answer: "PagedAttention (vLLM 핵심 엔진)"
  },
  {
    id: 61,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "여러 다른 환경과 시스템에서 구동되는 독립된 AI 에이전트들이 상호 작업을 위임하고 협업하기 위한 에이전트 간 통신 규약은?",
    answer: "A2A (Agent-to-Agent)"
  },

  // =================================================================
  // === [보강 문항] 제1도메인 정보전략 및 관리 (Q62 ~ Q68)
  // =================================================================
  {
    id: 62,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "프로젝트 일정 단축 기법 중 순차적인 활동들을 위험을 감수하고 중첩·병행하여 수행하는 기법은?",
    answer: "Fast Tracking (패스트 트래킹, 공정압축법)"
  },
  {
    id: 63,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "주공정선(Critical Path) 상의 작업에 추가 비용이나 인력을 투입하여 작업 기간을 단축하는 기법은?",
    answer: "Crashing (크래싱, 자원추가법)"
  },
  {
    id: 64,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "통계적 가설검정에서 대립가설이 참일 때 귀무가설을 올바르게 기각할 확률을 의미하는 통계 지표는?",
    answer: "검정력 (1 - β, Statistical Power)"
  },
  {
    id: 65,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "새로운 증거(데이터)가 주어졌을 때 사전확률을 업데이트하여 사후확률을 도출하는 조건부 확률 공식은?",
    answer: "베이즈 정리 (Bayes' Theorem)"
  },
  {
    id: 66,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "공공 SW 사업 제안서 평가 시 기술력 중심 평가를 위해 적용되는 기술능력 대 가격평가의 권장 비율은?",
    answer: "기술평가 90% : 가격평가 10%"
  },
  {
    id: 67,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "FinOps 3단계 사이클 중 약정할인(RI/Savings Plans)과 자원 라이트사이징(Right-sizing)을 수행하는 단계는?",
    answer: "Optimize (최적화) 단계"
  },
  {
    id: 68,
    chapterId: "d1",
    chapterName: "제1도메인 정보전략 및 관리",
    question: "IT 투자 타당성 분석에서 초기 투자비와 향후 발생하는 현금흐름의 순현재가치(NPV)를 0으로 만드는 할인율은?",
    answer: "내부수익률 (IRR, Internal Rate of Return)"
  },

  // =================================================================
  // === [보강 문항] 제2도메인 소프트웨어 공학 (Q69 ~ Q76)
  // =================================================================
  {
    id: 69,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "도메인 전문가와 개발자가 동일한 어휘로 시스템을 모델링하기 위해 정의하는 합의된 공통 언어는?",
    answer: "유비쿼터스 언어 (Ubiquitous Language)"
  },
  {
    id: 70,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "도메인 주도 설계(DDD)에서 특정 비즈니스 도메인의 모델과 용어가 유효하게 적용되는 논리적 경계 영역은?",
    answer: "Bounded Context (경계 컨텍스트)"
  },
  {
    id: 71,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "데이터 변경(Command) 모델과 조회(Query) 모델을 물리적으로 분리하여 성능과 확장성을 최적화하는 패턴은?",
    answer: "CQRS (Command Query Responsibility Segregation)"
  },
  {
    id: 72,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "SRE에서 서비스 가용성 목표치(SLO)를 기반으로 혁신과 안정성의 균형을 위해 허용된 장애 허용 지표는?",
    answer: "에러 버짓 (Error Budget)"
  },
  {
    id: 73,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "TDD(테스트 주도 개발)의 핵심 3단계 개발 주기 순서는?",
    answer: "Red(실패작성) ➔ Green(성공구현) ➔ Refactor(리팩토링)"
  },
  {
    id: 74,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "결함 허용을 위해 원격 마이크로서비스 호출 실패가 반복될 때 호출을 즉시 차단하여 장애 전파를 막는 패턴은?",
    answer: "서킷 브레이커 (Circuit Breaker) 패턴"
  },
  {
    id: 75,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "리팩토링 수행 시 기존 코드의 외부 동작(기능)은 그대로 보존하면서 내부 구조를 개선한다는 원칙은?",
    answer: "기능 보존 (Behavior Preservation)"
  },
  {
    id: 76,
    chapterId: "d2",
    chapterName: "제2도메인 소프트웨어 공학",
    question: "단일책임(S), 개방폐쇄(O), 리스코프치환(L), 인터페이스분리(I), 의존역전(D) 5대 객체지향 설계 원칙의 약어는?",
    answer: "SOLID 원칙"
  },

  // =================================================================
  // === [보강 문항] 제3도메인 자료처리 및 빅데이터 (Q77 ~ Q84)
  // =================================================================
  {
    id: 77,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "순차 쓰기(Append-Only)로 WAL과 MemTable에 기록 후 SSTable로 병합하여 쓰기 성능을 극대화한 NoSQL 자료구조는?",
    answer: "LSM-Tree (Log-Structured Merge-Tree)"
  },
  {
    id: 78,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "고차원 벡터를 서브벡터로 쪼개어 코드북 인덱스로 압축함으로써 메모리 소모량을 획기적으로 줄이는 기술은?",
    answer: "PQ (Product Quantization, 곱 양자화)"
  },
  {
    id: 79,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "관계형 데이터베이스에서 복합 기본키의 일부분에만 종속되는 부분 함수 종속성을 제거하는 정규화 단계는?",
    answer: "제2정규화 (2NF)"
  },
  {
    id: 80,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "기본키가 아닌 일반 컬럼 간에 발생하는 이행적 함수 종속성(X ➔ Y, Y ➔ Z)을 분리하는 정규화 단계는?",
    answer: "제3정규화 (3NF)"
  },
  {
    id: 81,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "RDB 트랜잭션의 신뢰성을 보장하는 4대 필수 특성(ACID)은?",
    answer: "원자성(Atomicity), 일관성(Consistency), 격리성(Isolation), 지속성(Durability)"
  },
  {
    id: 82,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "분산 시스템에서 일관성(C), 가용성(A), 분할용단성(P) 중 최대 2가지만을 만족할 수 있다는 분산 시스템 정리는?",
    answer: "CAP 정리 (Brewer's CAP Theorem)"
  },
  {
    id: 83,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "빅데이터 파이프라인에서 데이터의 원천 출처, 가공 단계, 이동 경로를 시간순으로 추적·시각화하는 기술은?",
    answer: "데이터 리니지 (Data Lineage, 데이터 계보)"
  },
  {
    id: 84,
    chapterId: "d3",
    chapterName: "제3도메인 자료처리 및 빅데이터",
    question: "고성능 벡터 검색을 위해 이방성 벡터 양자화(Anisotropic Vector Quantization)를 적용한 구글의 오픈소스 ANN 라이브러리는?",
    answer: "ScaNN (Scalable Nearest Neighbors)"
  },

  // =================================================================
  // === [보강 문항] 제4도메인 컴퓨터 시스템 및 통신 (Q85 ~ Q92)
  // =================================================================
  {
    id: 85,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "파드마다 사이드카 프록시를 두지 않고 노드 ztunnel과 네임스페이스별 Waypoint 프록시로 계층화한 2세대 서비스 메시는?",
    answer: "Ambient Mesh (앰비언트 메시, eBPF 기반)"
  },
  {
    id: 86,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "커널 네트워크 스택 상위 계층을 거치지 않고 NIC 드라이버 레벨에서 직접 패킷을 초고속으로 바이패스 처리하는 eBPF 기술은?",
    answer: "XDP (eXpress Data Path)"
  },
  {
    id: 87,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "프로세스 간 교착상태(Deadlock)를 발생시키는 Coffman의 4대 필수 조건은?",
    answer: "상호배제, 점유대기, 비선점, 환형대기"
  },
  {
    id: 88,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "안전 상태(Safe State)만을 유지하며 자원을 할당하여 교착상태를 사전에 동적으로 회피하는 다익스트라의 알고리즘은?",
    answer: "은행원 알고리즘 (Banker's Algorithm)"
  },
  {
    id: 89,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "DRAM 메모리 다이 내부에 직접 단순 연산 로직을 집적하여 CPU-메모리 간 전송 버스 병목을 줄이는 반도체 기술은?",
    answer: "PIM (Processing-in-Memory)"
  },
  {
    id: 90,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "CXL 3.0에서 여러 대의 서버가 독립된 대규모 메모리 풀을 스위치로 공유하여 유휴 자원 낭비를 방지하는 기능은?",
    answer: "메모리 풀링 (Memory Pooling)"
  },
  {
    id: 91,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "다중 코어 프로세서 환경에서 각 코어의 로컬 캐시에 저장된 동일 메모리 주소의 데이터가 일치하도록 보장하는 메커니즘은?",
    answer: "캐시 일관성 (Cache Coherency, 예: MESI 프로토콜)"
  },
  {
    id: 92,
    chapterId: "d4",
    chapterName: "제4도메인 컴퓨터 시스템 및 통신",
    question: "HTTP/3의 기반이 되는 QUIC 프로토콜이 TCP 대신 전송 계층으로 채택한 프로토콜은?",
    answer: "UDP"
  },

  // =================================================================
  // === [보강 문항] 제5도메인 정보보안 (Q93 ~ Q100)
  // =================================================================
  {
    id: 93,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "물리적 망분리를 대신하여 공공 데이터를 기밀(C), 민감(S), 공개(O) 3단계로 차등 통제하는 국가 보안 체계는?",
    answer: "N2SF (국가망보안체계) / 다층보안체계(MLS)"
  },
  {
    id: 94,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "공공기관 클라우드 도입 시 보안성을 인증하는 제도로 상·중·하 등급제로 개편된 인증 제도는?",
    answer: "CSAP (클라우드 보안인증제)"
  },
  {
    id: 95,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "데이터를 복호화하지 않고 암호문 상태 그대로 덧셈과 곱셈 등 임의의 연산을 무제한 수행할 수 있는 차세대 암호는?",
    answer: "FHE (완전 동형암호, Fully Homomorphic Encryption)"
  },
  {
    id: 96,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "제로 트러스트(Zero Trust)의 3대 핵심 기본 원칙은?",
    answer: "결코 신뢰하지 않고 항상 검증(Never Trust, Always Verify) / 최소 권한 원칙 / 침해 가정(Assume Breach)"
  },
  {
    id: 97,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "쇼어(Shor) 알고리즘을 수행하는 양자컴퓨터의 등장으로 기존 공개키 암호체계가 일제히 붕괴되는 가상의 시점은?",
    answer: "Y2Q (또는 Q-Day)"
  },
  {
    id: 98,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "NIST가 2024년 공식 발표한 격자 기반 양자내성 전자서명 최종 표준 알고리즘의 명칭은?",
    answer: "ML-DSA (FIPS 204, 구 CRYSTALS-Dilithium)"
  },
  {
    id: 99,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "SW 개발 수명주기(SDLC) 전반에 보안 활동을 내재화하여 배포 전 보안 결함을 선제적으로 제거하는 개발운영 문화는?",
    answer: "DevSecOps (데브섹옵스)"
  },
  {
    id: 100,
    chapterId: "d5",
    chapterName: "제5도메인 정보보안",
    question: "프롬프트 인젝션 공격 중 공격자가 LLM에게 시스템 프롬프트 지침을 무시하도록 유도하는 전형적인 탈옥 기법은?",
    answer: "이전 지침 무시 공격 (Ignore Previous Instructions, 탈옥 Jailbreak)"
  },

  // =================================================================
  // === [보강 문항] 제6도메인 최신기술 및 법규 (Q101 ~ Q105)
  // =================================================================
  {
    id: 101,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "사전학습 가중치는 고정하고 저차원 분해 행렬(B×A)만 학습하여 파라미터를 99% 이상 절감하는 파인튜닝 기법은?",
    answer: "LoRA (Low-Rank Adaptation)"
  },
  {
    id: 102,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "베이스 LLM을 4비트 NormalFloat(NF4)로 양자화하여 단일 상용 GPU에서도 파인튜닝을 가능하게 한 기술은?",
    answer: "QLoRA (양자화 LoRA)"
  },
  {
    id: 103,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "운영체제의 가상 메모리 페이징 기법을 응용하여 불연속 메모리에 KV 캐시를 할당함으로써 VRAM 단편화를 4% 미만으로 줄인 서빙 엔진은?",
    answer: "PagedAttention (vLLM)"
  },
  {
    id: 104,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "OpenAI o1 및 DeepSeek-R1 등 추론형 모델에서 질문을 받고 답을 생성하기 전 깊은 생각을 거치는 연산량 투입 패러다임은?",
    answer: "Test-Time Compute (추론 시점 연산 확장)"
  },
  {
    id: 105,
    chapterId: "d6",
    chapterName: "제6도메인 최신기술 및 법규",
    question: "2026년부터 대한민국에서 전면 시행되는 인공지능기본법에서 딥페이크 및 생성형 AI 결과물에 부과한 법적 의무 사항은?",
    answer: "인공지능 생성물 명시적 워터마크 표시 의무"
  },
];
