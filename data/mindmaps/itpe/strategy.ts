import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const STRATEGY_NOTES: Record<string, MindmapNodeNote> = {
  "ISO 42001": {
    title: "ISO/IEC 42001 (인공지능 경영시스템, AIMS)",
    importance: 5,
    badge: "AI 거버넌스 S등급",
    definition: "조직이 인공지능(AI) 시스템을 개발, 제공, 활용할 때 발생 가능한 위험을 식별하고 윤리적·법적 규제를 체계적으로 관리하기 위한 세계 최초의 국제 표준 거버넌스 프레임워크(PDCA 사이클 기반).",
    keyPoints: [
      "AI 리스크 평가(Risk Assessment): 의도치 않은 편향, 환각, 모델 탈옥, 개인정보 유출 위험 식별",
      "AI 시스템 영향 평가(AIIA): 조직, 사용자, 사회에 미치는 전방위적 영향 분석",
      "지속적 관리(PDCA): 계획(Plan) → 실행(Do) → 점검(Check) → 개선(Act) 사이클 적용",
      "EU AI Act, 대한민국 인공지능기본법(2026 시행) 준수를 위한 핵심 입증 수단으로 급부상",
    ],
    examTip: "답안 작성 시 'PDCA 프레임워크 + AI 수명주기 전반 통제 + 윤리/신뢰성 보장' 3단 구조 제시!",
  },
  "초거대 AI 대가체계": {
    title: "공공 SW 대가산정 및 초거대 AI 도입 대가체계",
    importance: 4,
    badge: "PM/제도 A등급",
    definition: "기존의 기능점수(FP) 방식으로는 산정이 어려운 생성형 AI/LLM 도입, 프롬프트 엔지니어링, RAG 구축, 파인튜닝 등의 특수성을 반영한 새로운 SW 사업 대가산정 기준.",
    keyPoints: [
      "기존 FP의 한계: 정형 데이터의 입출력/트랜잭션 위주로, 비정형 LLM 파이프라인 공수 미반영",
      "AI 대가체계 반영 항목: 데이터 전처리 및 벡터 임베딩 구축비, 파인튜닝/LoRA 학습 공수, 프롬프트 최적화 및 가드레일/환각 검증 공수, GPU 인프라 구독료(FinOps)",
      "초거대 AI 활용 서비스 개발 대가산정 가이드라인(NIA/KOSA) 기반 산정",
    ],
    examTip: "기존 FP와 신규 초거대 AI 대가 항목을 1:1 비교표로 작성하면 고득점!",
  },
  "디지털플랫폼정부": {
    title: "디지털플랫폼정부(DPG)와 국가 데이터 아키텍처",
    importance: 4,
    badge: "정보전략 A등급",
    definition: "모든 데이터가 연결되는 '디지털플랫폼정부' 구현을 위해 정부 전 부처의 사일로(Silo)를 허물고, 민·관 협업 기반의 국민 맞춤형 선제적 서비스를 제공하는 국가 DX 청사진.",
    keyPoints: [
      "핵심 인프라: DPG 허브(통합 데이터 및 서비스 연계), 원스톱 전자정부 서비스",
      "마이데이터 연계: 정보주체의 자기결정권 보장 및 행정정보 공유 혁신",
      "공공 SaaS 적극 도입 및 민간 초거대 AI 모델의 공공 영역 안전 연계",
    ],
    examTip: "사일로 해소, DPG 허브, 제로트러스트 및 N2SF와의 연계 아키텍처 강조!",
  },
  "FinOps": {
    title: "FinOps (클라우드 재무 운영 프레임워크)",
    importance: 4,
    badge: "IT 투자성과 A등급",
    definition: "재무(Finance)와 개발운영(DevOps)의 합성어로, 클라우드 사용 비용의 가시성을 확보하고 비즈니스 가치에 최적화된 지출을 유도하는 문화이자 프랙티스.",
    keyPoints: [
      "FinOps 3단계 수명주기: Inform(가시화 및 비용 할당) → Optimize(사용량 및 단가 최적화) → Operate(지속적 거버넌스 및 자동화)",
      "단가 최적화(RI, Savings Plans, 스팟 인스턴스) + 사용량 최적화(Right-sizing, 미사용 자원 삭제)",
      "생성형 AI 토큰 비용 및 GPU 인프라 급증에 대응하는 핵심 관리 체계",
    ],
    examTip: "Inform → Optimize → Operate 3단계 사이클 다이어그램 도식화 필수!",
  },
  "PMBOK 7판": {
    title: "PMBOK 7판 12대 원칙과 8대 성과 도메인",
    importance: 4,
    badge: "프로젝트 관리 A등급",
    definition: "기존 6판의 프로세스(10개 지식영역, 49개 프로세스) 중심에서 벗어나, 원칙(Principles) 기반의 가치 인도(Value Delivery) 시스템으로 전면 전환된 프로젝트 관리 표준.",
    keyPoints: [
      "12대 원칙: 청지기 정신(Stewardship), 팀(Team), 이해관계자, 가치(Value), 시스템 사고, 리더십, 맞춤화(Tailoring), 품질, 복잡성, 리스크, 적응성 및 복원력, 변화 관리",
      "8대 성과 도메인: 이해관계자, 팀, 개발 접근법 및 생명주기, 기획, 프로젝트 업무, 인도, 측정, 불확실성",
      "테일러링(Tailoring): 프로젝트 상황에 맞춘 예측형(Waterfall), 적응형(Agile), 하이브리드 조합",
    ],
    examTip: "6판(프로세스 중심) vs 7판(원칙 및 가치 중심) 비교표 준비!",
  },
  "IT 감리": {
    title: "공공 IT 감리 3대 관점 및 통계적 품질 검증",
    importance: 3,
    badge: "감리/품질 B등급",
    definition: "발주자와 사업자로부터 독립된 감리법인이 공공 정보시스템 구축 전 과정에 걸쳐 적정성을 종합 검토하고 시정 조치를 요구하는 제도.",
    keyPoints: [
      "감리 3대 기준: 적합성, 타당성, 효과성",
      "3대 관점: 사업관리, 응용시스템, 데이터베이스 및 시스템 구조",
      "통계적 가설검정: 귀무가설($H_0$) vs 대립가설($H_1$), p-value 유의확률, 제1종 오류($\alpha$)와 제2종 오류($\beta$)",
    ],
    examTip: "감리 시정조치 3단계(개선권고, 필수개선, 즉각중단) 및 감리인 독립성 원칙 서술!",
  },
};

export const itpeStrategyMindmap: MindmapSection = {
  id: "itpe-strategy",
  title: "1. 정보 전략 및 관리 (ISP / PM / 감리)",
  description: "출제 비중 14% | AI 거버넌스(ISO 42001), 초거대 AI 대가체계, DPG, FinOps, PMBOK 7판, IT 감리",
  chart: `mindmap
  root((1. 정보전략 및 관리))
    정보전략 및 거버넌스
      ISP와 EA 아키텍처
      디지털플랫폼정부 DPG
      ISO 42001 인공지능 경영시스템
      AI 윤리 및 신뢰성 프레임워크
    IT 투자성과 관리
      FinOps 클라우드 재무운영
        Inform 가시화
        Optimize 최적화
        Operate 거버넌스
      TCO와 IT ROI 분석
    프로젝트 관리 PM
      PMBOK 7판
        12대 원칙 기반 가치인도
        8대 성과 도메인
        테일러링 Tailoring
      초거대 AI 대가체계
        데이터 전처리 및 임베딩 비용
        프롬프트 엔지니어링 공수
        가드레일 환각 검증
      기능점수 FP 대가산정
      Agile 스크럼과 칸반
    IT 감리 및 통계검정
      공공 IT 감리 3대 기준
      통계적 품질 검증
        가설검정과 p-value
        제1종 및 제2종 오류`,
  notes: STRATEGY_NOTES,
};
