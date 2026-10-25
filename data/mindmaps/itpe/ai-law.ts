import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const AI_LAW_NOTES: Record<string, MindmapNodeNote> = {
  "추론형 AI": {
    title: "추론형 AI (Reasoning LLM) & Test-Time Compute",
    importance: 5,
    badge: "최신 AI 패러다임 S등급",
    definition: "사전학습(Pre-training) 규모 확장의 물리적 한계를 극복하고, 모델이 응답을 생성하는 추론 시점의 연산량(Test-Time Compute)을 집중 투입하여 다단계 생각의 사슬(Chain of Thought)을 스스로 검증·수정하며 논리적 정답을 도출하는 혁신 패러다임.",
    keyPoints: [
      "System 1 vs System 2 사고: 빠르고 직관적인 언어 모사(System 1)에서 벗어나, 심사숙고하고 자가 오류를 수정하는 논리적 사고(System 2) 구현",
      "과정 보상 모델(PRM, Process Reward Model): 최종 결과에만 보상을 주는 결과 보상(ORM)과 달리, 추론의 매 스텝마다 점수를 매겨 최적의 탐색 경로 유도",
      "강화학습(RL) 기반 자기 성찰(Self-Reflection) 및 MCTS(몬테카를로 트리 탐색) 결합",
      "대표 아키텍처: OpenAI o1/o3, DeepSeek-R1",
    ],
    examTip: "'스케일링 법칙의 진화: Pre-training 스케일링 → Test-Time Compute 스케일링' 관점 서술!",
  },
  "Agentic AI": {
    title: "Agentic AI 4대 디자인 패턴 및 자율 에이전트",
    importance: 5,
    badge: "에이전트 아키텍처 S등급",
    definition: "단순한 단발성 프롬프트-응답 처리를 넘어, 목표를 달성하기 위해 자율적으로 계획을 세우고 도구를 사용하며 결과를 평가하여 반복 수정하는 차세대 AI 에이전트 시스템.",
    keyPoints: [
      "4대 디자인 패턴(Andrew Ng 제안): 반성(Reflection, 자기 검증) / 도구 사용(Tool Use, API/계산기 호출) / 기획(Planning, 하위 태스크 분해 및 순서화) / 다중 에이전트 협업(Multi-Agent Collaboration, 역할 분담)",
      "ReAct 프레임워크: Thought(생각) → Action(행동) → Observation(관찰)의 순환 루프",
      "주요 프레임워크: LangGraph, CrewAI, AutoGen",
    ],
    examTip: "4대 디자인 패턴 박스 다이어그램과 LangGraph 기반 상태 순환도 필수 도식화!",
  },
  "MCP": {
    title: "MCP (Model Context Protocol) 및 A2A 통신",
    importance: 5,
    badge: "에이전트 통신 표준 S등급",
    definition: "Anthropic이 발표한 오픈 표준 프로토콜로, AI 모델(호스트/클라이언트)이 로컬 및 원격 데이터 소스, 도구, 엔터프라이즈 시스템과 안전하고 통일된 규격으로 연결되도록 하는 인터페이스 표준.",
    keyPoints: [
      "USB-C의 비유: 각 도구마다 파편화되어 있던 커스텀 API 통합 방식을 단일 프로토콜로 표준화",
      "3대 주요 구성: Resources(데이터 및 파일 컨텍스트), Prompts(템플릿), Tools(실행 가능한 함수)",
      "A2A (Agent-to-Agent): 서로 다른 벤더와 환경에서 실행되는 지능형 에이전트들이 상호 협업하고 작업을 위임하기 위한 에이전트 간 통신 규약",
    ],
    examTip: "'LLM Host ↔ Client ↔ MCP Server ↔ DB/API' 계층형 통신 아키텍처 작성!",
  },
  "GraphRAG": {
    title: "GraphRAG (지식 그래프 결합 RAG) 아키텍처",
    importance: 5,
    badge: "차세대 RAG S등급",
    definition: "단순 텍스트 청킹에 의존하는 기존 Naive RAG의 한계를 극복하기 위해, 대규모 문서군에서 LLM을 이용해 개체(Entity)와 관계(Relation)를 추출하여 지식 그래프(Knowledge Graph)를 구축하고 계층적 요약을 통해 복합 추론을 수행하는 기술.",
    keyPoints: [
      "Leiden 커뮤니티 탐색 알고리즘: 연관된 노드들을 군집화하고 계층별 커뮤니티 요약 보고서(Community Summaries) 자동 생성",
      "Local Search vs Global Search: 특정 개체 중심의 질문은 Local Search, 전체 코퍼스의 거시적 주제·트렌드 질문은 Global Search로 처리",
      "Multi-hop 복합 추론 가능: 여러 문서에 흩어진 연결 고리를 그래프 순회(Traversal)를 통해 정확히 포착",
    ],
    examTip: "기존 Naive RAG vs GraphRAG vs Agentic RAG 3자 비교표 및 그래프 구축 흐름도 작도!",
  },
  "인공지능기본법": {
    title: "인공지능기본법 (2026년 시행) 핵심 규제 및 진흥 체계",
    importance: 5,
    badge: "핵심 법령 1순위 S등급",
    definition: "대한민국 AI 산업의 글로벌 경쟁력 확보를 위한 진흥책과, 국민의 생명·안전·권익을 보호하기 위한 신뢰 기반 규율을 종합적으로 규정한 국가 인공지능 종합 기본 법률.",
    keyPoints: [
      "고영향 인공지능(High-Risk AI): 보건, 의료, 원자력, 생체인식, 채용, 금융 신용평가 등 인명·기본권에 중대한 영향을 미치는 AI에 대한 신뢰성·안전성 확보 조치 의무 부과",
      "투명성 및 워터마크 의무: 생성형 AI가 제작한 텍스트·이미지·영상에 명시적 워터마크 표시 의무화 및 이용자 사전 고지",
      "거버넌스: 국가인공지능위원회 설치, AI 안전연구소(AI Safety Institute) 설립을 통한 위험 평가 및 글로벌 공조",
    ],
    examTip: "'진흥(연구개발·데이터지원)과 규제(고영향AI·워터마크·안전연구소)의 양 날개 구조' 서술!",
  },
  "피지컬 AI": {
    title: "피지컬 AI (Physical AI) & 온디바이스 경량화",
    importance: 4,
    badge: "미래 융합기술 A등급",
    definition: "가상 디지털 공간을 넘어 현실 세계의 물리 법칙을 이해하고, 센서와 액추에이터를 통해 로봇 및 모빌리티를 자율 제어하는 물리적 상호작용 AI.",
    keyPoints: [
      "월드 모델(World Model): 중력, 마찰력, 충돌 등 물리적 세계의 시간·공간적 변화를 3차원으로 시뮬레이션하고 예측",
      "VLA 모델(Vision-Language-Action): 시각적 인식(V)과 언어적 지시(L)를 결합하여 실제 로봇의 물리적 제어 행동(A)으로 직접 변환",
      "온디바이스 AI 최적화: NPU 탑재 및 모델 압축(양자화 AWQ/GPTQ, LoRA, 지식증류)을 통해 엣지 기기에서 초저지연 오프라인 실행",
    ],
    examTip: "디지털 AI(LLM)와 피지컬 AI(월드모델+VLA)의 차이점 및 NPU 온디바이스 연계 구조 서술!",
  },
};

export const itpeAiLawMindmap: MindmapSection = {
  id: "itpe-ai-law",
  title: "6. 최신 기술, 법규 및 정책 (AI / Law)",
  description: "출제 비중 16% (급증 최고 ROI) | 추론형 AI, Agentic AI, MCP/A2A, GraphRAG, 인공지능기본법(2026), 피지컬 AI",
  chart: `mindmap
  root((6. 최신기술 및 법규))
    차세대 추론형 AI
      추론형 AI Reasoning LLM
        Test-Time Compute 연산 집중
        System 2 깊은 생각의 사슬
        PRM 과정 보상 모델
        강화학습 자기 성찰 Self-Reflection
      LLM 경량화 및 서빙
        양자화 AWQ GPTQ
        LoRA 및 QLoRA 미세조정
        PagedAttention vLLM 캐시최적화
    에이전트 및 연계 표준
      Agentic AI 4대 패턴
        반성 Reflection
        도구 사용 Tool Use
        기획 Planning
        다중 협업 Multi-Agent
      MCP 모델 컨텍스트 프로토콜
        도구 연계 표준화
        A2A 에이전트 간 통신
      LangGraph 워크플로우
    고도화 RAG 아키텍처
      GraphRAG 지식그래프 결합
        Entity Relation 추출
        Leiden 알고리즘 커뮤니티 요약
        Local 및 Global Search
        Multi-hop 복합 추론
      Agentic RAG 자율 재검색
    국가 법규 및 정책
      인공지능기본법 2026 시행
        고영향 AI 기준과 의무
        생성형 AI 워터마크 표시
        AI 안전연구소 설립
      SW진흥법 및 데이터산업법
    미래 융합기술
      피지컬 AI Physical AI
        월드 모델 물리법칙 시뮬레이션
        VLA 비전 언어 액션 로봇제어
      온디바이스 AI NPU 탑재`,
  notes: AI_LAW_NOTES,
};
