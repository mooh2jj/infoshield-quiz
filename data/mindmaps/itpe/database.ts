import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const DATABASE_NOTES: Record<string, MindmapNodeNote> = {
  "Vector DB": {
    title: "Vector DB & 고차원 임베딩 검색 엔진",
    importance: 5,
    badge: "AI/DB 초고빈출 S등급",
    definition: "텍스트, 이미지 등을 임베딩 모델을 통해 변환한 수백~수천 차원의 부동소수점 벡터를 저장하고, 의미론적 유사도(Cosine, Dot Product, L2 Distance)를 고속으로 탐색하는 전용 데이터베이스.",
    keyPoints: [
      "전수 검색(Flat Search)의 한계: 차원의 저주(Curse of Dimensionality)로 인한 $O(N)$ 연산 부하",
      "근사 최근접 이웃(ANN, Approximate Nearest Neighbor): 검색 정확도를 약간 희생하는 대신 극적인 속도 향상 달성",
      "주요 솔루션: Milvus, Pinecone, Qdrant, Chroma, pgvector",
      "RAG(검색 증강 생성) 시스템의 핵심 지식 베이스로 활용",
    ],
    examTip: "'임베딩 벡터화 → ANN 인덱싱 → 유사도 측정(코사인/내적) → 메타데이터 필터링' 파이프라인 제시!",
  },
  "HNSW": {
    title: "HNSW (Hierarchical Navigable Small World) 인덱스 알고리즘",
    importance: 5,
    badge: "Vector DB 핵심 알고리즘 S등급",
    definition: "스킵 리스트(Skip List)의 계층적 원리를 그래프 탐색에 접목하여, 고차원 벡터 데이터에서 $O(\log N)$ 수준의 초고속 근사 최근접 이웃(ANN) 탐색을 실현한 최신 표준 알고리즘.",
    keyPoints: [
      "다계층 그래프 구조(Multi-layer): 상위 레이어는 긴 링크로 성큼성큼 이동(거친 탐색), 최하위 레이어(Layer 0)에서 촘촘한 정밀 탐색 수행",
      "작은 세상 네트워크(Small World Network): 군집 계수가 높고 평균 경로 길이가 짧은 특성 활용",
      "트레이드오프: 인덱스를 메모리(RAM)에 전량 적재하므로 메모리 소모량이 큼 → 양자화(PQ, Product Quantization) 기법으로 압축",
    ],
    examTip: "다계층 그래프 개념도(상위 Sparse 레이어 → 하위 Dense 레이어로 점진적 하강) 도식화 필수!",
  },
  "하이브리드 검색": {
    title: "하이브리드 검색 (Hybrid Search) 및 RRF 재순위화",
    importance: 5,
    badge: "RAG 검색 고도화 S등급",
    definition: "키워드 기반의 전통적 희소 벡터(Sparse Vector, BM25) 검색과 딥러닝 기반의 밀집 벡터(Dense Vector) 의미 검색을 결합하고, RRF 알고리즘으로 결과를 통합하여 검색 품질을 극대화하는 기법.",
    keyPoints: [
      "BM25 (Sparse): 고유명사, 품번, 전문 용어 등 키워드 일치에 탁월 (Out-of-Vocabulary 극복)",
      "Dense Embedding: 동의어, 문맥, 의미론적 유사도 파악에 탁월",
      "RRF (Reciprocal Rank Fusion): 점수 척도가 다른 두 검색 결과의 순위(Rank)만을 역수 합산($RRF\\_Score = \\sum \\frac{1}{k + r_i}$)하여 공정하게 리랭킹(Re-ranking)",
    ],
    examTip: "'BM25 + Dense Vector → Reciprocal Rank Fusion ($k=60$) → Re-ranker' 3단 흐름도 작성!",
  },
  "ISO 5259": {
    title: "ISO/IEC 5259 (AI 및 빅데이터 품질 표준)",
    importance: 5,
    badge: "데이터 품질 S등급",
    definition: "기존 관계형 DB 위주의 ISO 8000의 한계를 넘어, 머신러닝(ML) 및 인공지능 분석 파이프라인 전 과정에서 요구되는 정형·비정형 학습 데이터의 품질 기준을 규정한 국제 표준.",
    keyPoints: [
      "주요 평가 요소: 데이터 대표성(Representativeness), 편향 부재(Fairness), 라벨링 일관성(Labeling Consistency), 완전성, 최신성",
      "인공지능기본법 및 EU AI Act의 고영향 AI 학습 데이터 적격성 입증 핵심 표준",
      "데이터 라이프사이클(수집-가공-정제-라벨링-검증) 전 주기에 대한 품질 측정 메트릭 제공",
    ],
    examTip: "ISO 8000(기존 DB 중심) vs ISO 5259(AI 학습데이터 중심) 차별화 포인트 부각!",
  },
  "합성 데이터": {
    title: "합성 데이터 (Synthetic Data) & 모델 붕괴 방지",
    importance: 4,
    badge: "최신 AI 데이터 A등급",
    definition: "실제 데이터를 수집·이용하기 어려운 상황에서 실제 데이터의 통계적 특성과 패턴을 모사하여 생성형 AI(GAN, Diffusion, LLM)로 인공 생성한 데이터.",
    keyPoints: [
      "장점: 개인정보 침해 우려 해소(가명·익명 처리 불필요), 희귀 케이스(Corner/Edge case) 대량 보강",
      "주의점 - 모델 붕괴(Model Collapse): AI가 생성한 합성 데이터만을 반복 재학습할 경우 데이터 분포의 꼬리(Tail)가 소실되어 모델의 다양성과 추론 능력이 급격히 퇴화하는 현상",
      "대응책: 원본 고품질 실데이터 비율 유지(Filtering), 워터마크 기반 출처 추적, 사람 검증(RLHF/RLAIF)",
    ],
    examTip: "합성 데이터의 효용(Privacy/Cost)과 위험(Model Collapse)의 균형 잡힌 시각 제시!",
  },
  "Data Lakehouse": {
    title: "Data Lakehouse (Apache Iceberg) vs Data Mesh",
    importance: 4,
    badge: "빅데이터 아키텍처 A등급",
    definition: "데이터 레이크의 저비용 대용량 저장성(S3/HDFS)과 데이터 웨어하우스(DW)의 ACID 트랜잭션 및 고성능 거버넌스 기능을 결합한 현대적 통합 데이터 플랫폼 아키텍처.",
    keyPoints: [
      "Apache Iceberg: 메타데이터 계층(Snapshot, Manifest) 기반으로 대규모 테이블의 ACID 트랜잭션, 타임 트래블(Time Travel), 스키마 에볼루션 지원",
      "Data Mesh: 중앙 집중식 데이터 팀의 병목을 해결하기 위해, 비즈니스 도메인별 분권화된 '데이터 프로덕트(Data as a Product)' 체계 채택",
      "Data Fabric: 분산된 메타데이터를 지식 그래프와 AI로 분석하여 데이터 연계 및 거버넌스를 자동화",
    ],
    examTip: "Lakehouse vs Mesh vs Fabric 3자 비교표로 답안을 구조화할 것!",
  },
  "MVCC": {
    title: "RDB 트랜잭션 격리수준과 MVCC 메커니즘",
    importance: 4,
    badge: "DB 엔진 내부구조 A등급",
    definition: "동시성 제어를 위해 데이터에 잠금(Lock)을 걸지 않고, 데이터의 여러 버전(Snapshot)을 유지하여 읽기 작업과 쓰기 작업이 서로를 블로킹하지 않도록 하는 동시성 제어 기법.",
    keyPoints: [
      "Undo Log & Read View: UPDATE/DELETE 시 이전 데이터를 Undo 영역에 보관하고, 트랜잭션의 시작 시점 Read View에 맞춰 적절한 버전을 판독",
      "트랜잭션 격리 수준 4단계: Read Uncommitted → Read Committed → Repeatable Read → Serializable",
      "이상 현상: Dirty Read, Non-Repeatable Read, Phantom Read",
    ],
    examTip: "격리수준별 이상현상 발생 여부 매트릭스와 Undo Log 포인터 체인 도식화!",
  },
};

export const itpeDatabaseMindmap: MindmapSection = {
  id: "itpe-database",
  title: "3. 자료처리 및 빅데이터 (DB / Data)",
  description: "출제 비중 20% (최고 ROI) | Vector DB(HNSW), 하이브리드 검색, ISO 5259, 합성 데이터, Lakehouse/Mesh, MVCC",
  chart: `mindmap
  root((3. 자료처리 및 빅데이터))
    Vector DB 및 AI 검색
      Vector DB 임베딩 저장소
      HNSW 인덱스
        Skip List 다계층 그래프
        O log N 초고속 ANN 탐색
        Scalar 및 Product Quantization
      하이브리드 검색
        BM25 희소 벡터 키워드 검색
        Dense 밀집 벡터 의미 검색
        RRF 순위 역수 합산 리랭킹
    AI 데이터 품질 및 관리
      ISO 5259 AI 학습데이터 품질
        데이터 대표성 및 편향 배제
        라벨링 일관성 검증
      합성 데이터 Synthetic Data
        프라이버시 이슈 및 엣지케이스 극복
        모델 붕괴 Model Collapse 예방
      데이터 리니지 Data Lineage
    차세대 데이터 아키텍처
      Data Lakehouse
        Apache Iceberg 메타데이터
        대규모 ACID 및 타임 트래블
      Data Mesh 도메인 분권화
        데이터의 제품화 Data as a Product
        연합형 거버넌스
      Data Fabric AI 메타데이터 자동화
    DBMS 내부 메커니즘
      동시성 제어와 MVCC
        Undo Log와 Read View
        트랜잭션 격리수준 4단계
        Phantom Read 방지
      저장구조 비교
        B+Tree 고성능 범위조회
        LSM-Tree 쓰기 최적화 MemTable`,
  notes: DATABASE_NOTES,
};
