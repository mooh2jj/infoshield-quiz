import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const SW_ENG_NOTES: Record<string, MindmapNodeNote> = {
  "ISO 25010": {
    title: "ISO/IEC 25010:2023 품질 특성 개정 (9대 특성)",
    importance: 5,
    badge: "SW품질 최우선 S등급",
    definition: "2023년 전면 개정된 SW 제품 품질 모델로, 기존 8대 품질 특성 체계에서 '안전성(Safety)'이 독립적인 9번째 품질 특성으로 추가되고 명칭 및 범위가 현대화됨.",
    keyPoints: [
      "안전성(Safety) 신설: 인명 피해, 건강 위험, 재산 손실, 환경 파괴를 유발하지 않는 시스템의 안전 보장 능력 (Fail-safe, Hazard 완화)",
      "사용성(Usability) → 상호작용성(Interaction Capability)으로 개칭: 접근성(Accessibility) 및 포용성 강화",
      "이식성(Portability) → 유연성(Flexibility)으로 개칭: 클라우드 환경 적응성, 확장성, 교체 용이성 반영",
      "9대 특성: 기능적합성, 성능효율성, 호환성, 상호작용성, 신뢰성, 보안성, 유지보수성, 유연성, 안전성",
    ],
    examTip: "답안 작성 시 '2011판 8대 특성 vs 2023판 9대 특성 변화 3포인트'를 비교표로 제시할 것!",
  },
  "카오스 엔지니어링": {
    title: "카오스 엔지니어링 (Chaos Engineering) & SRE",
    importance: 4,
    badge: "신뢰성 공학 A등급",
    definition: "분산 시스템(MSA, K8s, 클라우드)이 운영 중 겪을 수 있는 예기치 않은 난기류(장애)를 견딜 수 있는지 사전에 검증하기 위해, 프로덕션 환경에 의도적으로 장애를 주입하는 실험적 기법.",
    keyPoints: [
      "4대 원칙: 정상 상태(Steady State) 정의 → 가설 수립 → 현실 장애 주입 → 가설 검증 및 자동화",
      "폭발 반경(Blast Radius) 최소화: 카나리 배포 환경이나 일부 트래픽에만 한정하여 장애 주입",
      "주요 도구: Netflix Chaos Monkey, LitmusChaos, Chaos Mesh",
      "SRE 연계: 가용성 목표인 SLO(Service Level Objective) 및 에러 버짓(Error Budget)과 결합",
    ],
    examTip: "'정상상태 정의 → 장애주입 → 회복성 검증' 실험 라이프사이클을 도식화할 것!",
  },
  "Saga 패턴": {
    title: "MSA 분산 트랜잭션: Saga 패턴 (Choreography vs Orchestration)",
    importance: 5,
    badge: "MSA 아키텍처 S등급",
    definition: "Database-per-Service 구조의 MSA에서 전통적인 2PC의 블로킹 문제를 해결하기 위해, 긴 전역 트랜잭션을 여러 로컬 트랜잭션으로 쪼개고 실패 시 보상 트랜잭션(Compensating Transaction)을 수행하는 비동기 BASE 트랜잭션 패턴.",
    keyPoints: [
      "Choreography 방식: 중앙 조정자 없이 각 서비스가 도메인 이벤트를 브로커(Kafka)로 발행·구독하며 자율 연쇄 반응 (단순 시스템 적합, 이벤트 순환 의존 주의)",
      "Orchestration 방식: 중앙의 Saga 조정자(Orchestrator)가 상태 머신을 기반으로 다음 서비스의 로컬 트랜잭션 및 롤백용 보상 트랜잭션을 직접 명령 (복잡한 비즈니스 적합, 가시성 우수)",
      "2PC 대비 장점: 동기 락(Lock)을 잡지 않아 SPOF 해소 및 고성능 보장",
    ],
    examTip: "Choreography(이벤트 연쇄)와 Orchestration(중앙 지휘자)의 구조 개념도와 트레이드오프 비교표 필수!",
  },
  "Transactional Outbox": {
    title: "Transactional Outbox 패턴 및 CDC 메시지 발행",
    importance: 5,
    badge: "분산 일관성 S등급",
    definition: "데이터베이스 상태 변경(INSERT/UPDATE)과 메시지 브로커로의 이벤트 발행 간 발생하는 '이중 쓰기(Dual Write)' 문제를 해결하여, 최소 1회(At-Least-Once) 메시지 발행 원자성을 보장하는 패턴.",
    keyPoints: [
      "원자적 로컬 커밋: 비즈니스 테이블과 'Outbox(발행 대기)' 테이블을 동일 DB의 단일 ACID 트랜잭션으로 커밋",
      "CDC(Change Data Capture) 연계: Debezium 등의 CDC 툴이 DB 트랜잭션 로그(Binlog/WAL)를 실시간 테일링하여 Kafka로 전달",
      "소비자 멱등성(Idempotency) 필수: At-Least-Once 특성상 중복 메시지가 수신될 수 있으므로 고유 메시지 ID 검증 테이블 설계 병행",
    ],
    examTip: "'비즈니스 테이블 + Outbox 테이블 (단일 트랜잭션) → CDC Debezium → Kafka' 개념도 도식화!",
  },
  "플랫폼 엔지니어링": {
    title: "플랫폼 엔지니어링 (Platform Engineering) & IDP",
    importance: 5,
    badge: "개발 생산성 S등급",
    definition: "클라우드 네이티브 기술의 복잡성으로 인해 개발자가 겪는 인지 부하(Cognitive Load)를 해소하기 위해, 전담 플랫폼 팀이 셀프 서비스형 '내부 개발자 플랫폼(IDP, Internal Developer Platform)'을 구축·제공하는 현대적 엔지니어링 기법.",
    keyPoints: [
      "인지 부하 경감: 개발자가 K8s, 인프라 Terraform, CI/CD 파이프라인의 저수준 세부사항을 몰라도 API/포털로 즉시 개발 착수",
      "황금 경로(Golden Path): 조직의 모범 규정(보안, 관측성, 배포 정책)이 기본 내장된 표준 템플릿 제공",
      "플랫폼을 제품(Platform as a Product)으로 취급하여 지속적 사용자 피드백 반영",
    ],
    examTip: "DevOps의 발전형으로 'DevOps의 인지과부하 한계 → IDP 셀프서비스 솔루션' 흐름으로 서술!",
  },
  "STPA": {
    title: "SW 안전성 분석 기법: STPA 및 FTA",
    importance: 4,
    badge: "시스템 안전 S등급",
    definition: "자율주행, 의료, 항공 등 복잡한 SW 집약형 시스템에서 단순 부품 결함뿐 아니라 컴포넌트 간 상호작용 오류로 인한 위험을 분석하는 시스템 이론 기반 안전 분석 기법(STAMP 이론 기반).",
    keyPoints: [
      "STPA(System-Theoretic Process Analysis): 제어 루프(Control Loop) 상에서 안전하지 않은 제어 명령(UCA, Unsafe Control Action)을 4가지 유형으로 식별",
      "UCA 4유형: 명령 미제공, 부적절 제공, 조기/지연 제공, 너무 오래/일찍 중단",
      "FTA(Fault Tree Analysis): 연역적(Top-Down) 기법으로 최상위 사고(Top Event)의 원인을 불 대수 논리 게이트로 분석",
    ],
    examTip: "STPA의 제어 루프(컨트롤러-액추에이터-프로세스-센서) 및 4대 UCA 유형을 키워드로 제시!",
  },
  "MCDC": {
    title: "MC/DC (Modified Condition/Decision Coverage) 및 화이트박스",
    importance: 4,
    badge: "테스트 커버리지 A등급",
    definition: "각 개별 조건식이 전체 결정식의 결과에 독립적으로 영향을 미치는지를 검증하는 고신뢰성 SW(항공 DO-178C, 차량 ISO 26262)의 필수 테스트 커버리지 기준.",
    keyPoints: [
      "조건 수 N개일 때 필요 최소 테스트 케이스 수: $N + 1$개 (다중조건 커버리지 $2^N$개의 기하급수적 한계 극복)",
      "테스트 커버리지 위계: 구문(Statement) → 분기(Decision/Branch) → 조건(Condition) → MC/DC → 다중조건(Multiple Condition)",
    ],
    examTip: "$N+1$개 수식과 조건식 진리표 예시(A and B or C)를 약식으로 그려내면 완벽!",
  },
};

export const itpeSwEngMindmap: MindmapSection = {
  id: "itpe-sw-eng",
  title: "2. 소프트웨어 공학 (SW Eng.)",
  description: "출제 비중 22% (최고 ROI) | ISO 25010:2023, MSA 분산 트랜잭션(Saga/Outbox), 플랫폼 엔지니어링, STPA, 카오스공학",
  chart: `mindmap
  root((2. 소프트웨어 공학))
    SW 품질 및 안전성
      ISO 25010 2023년 개정
        Safety 안전성 신설
        상호작용성 포용성
        유연성 클라우드 적응
      SW 안전성 분석
        STPA 제어루프 안전분석
        FTA 결함수 분석
        UCA 4대 위험명령
    현대적 아키텍처
      MSA 마이크로서비스
        Saga 패턴
          Choreography 이벤트연쇄
          Orchestration 중앙지휘
          보상 트랜잭션
        Transactional Outbox
          단일 로컬 ACID 트랜잭션
          CDC Debezium 테일링
          소비자 멱등성 보장
      도메인 주도 설계 DDD
        Bouded Context
        Ubiquitous Language
    개발 운영 및 플랫폼
      플랫폼 엔지니어링
        내부 개발자 플랫폼 IDP
        황금 경로 Golden Path
        인지 부하 인프라 추상화
      카오스 엔지니어링
        정상 상태 가설 검증
        폭발 반경 통제
        LitmusChaos와 ChaosMonkey
      Site Reliability Eng SRE
        SLI와 SLO 지표
        에러 버짓 Error Budget
    구현 및 테스트 검증
      화이트박스 테스트
        MCDC 커버리지 N+1개
        구문 분기 조건 커버리지
      레거시 현대화 7R 전략
      TDD BDD 테스트 자동화`,
  notes: SW_ENG_NOTES,
};
