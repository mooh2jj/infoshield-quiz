import type { MindmapSection } from "@/types/mindmap";

export const architectureDesignMindmap: MindmapSection = {
  id: "architecture-design",
  title: "로봇 소프트웨어 구조설계 (ROS 2 코어·아키텍처·안전규격)",
  description: "ROS 2 통신·QoS·생명주기, 3-Tier/행동트리 아키텍처, 테스트와 기능안전 규격",
  chart: `mindmap
  root((로봇 소프트웨어 구조설계))
    로봇 미들웨어와 ROS 2 코어
      ros2CoreBox["ROS 1 vs ROS 2<br/>1) ROS 1 — Master-Slave 구조, 단일 실패점(SPOF) 병목<br/>2) ROS 2 — DDS 기반 P2P 완전 분산형"]
      interfaceBox["통신 인터페이스 선택 기준(실기)<br/>1) Topic — 연속적 센서 스트리밍(LiDAR 스캔 등), 비동기 1:N 단방향<br/>2) Service — 지연없는 단발성 명령/확인, 동기 1:1 양방향<br/>3) Action — 장시간 목표 수행, 진행률 피드백·중도 취소 가능(Goal-Feedback-Result)"]
      qosBox["DDS QoS 정책과 호환성 규칙(실기)<br/>1) Reliability — Best Effort(센서 고주파) vs Reliable(cmd_vel·E-Stop 등 명령)<br/>2) Durability — Volatile(휘발성) vs Transient Local(map, tf_static 래치)<br/>3) History&Depth — Keep Last(N) vs Keep All<br/>4) 호환성 규칙 — Publisher가 Best Effort인데 Subscriber가 Reliable 요구 시 연결 불가(Incompatible QoS) → Subscriber를 Best Effort로 낮춰야 함"]
      lifecycleBox["노드 생명주기(Lifecycle Node)<br/>1) Unconfigured → Inactive → Active → Finalized"]
    아키텍처와 디자인 패턴
      tierBox["하이브리드 계층 구조<br/>1) 3-Tier — Deliberative(심의단) · Executive(실행단) · Reactive(반응단)"]
      btBox["제어 모델(실기)<br/>1) Behavior Tree — Nav2 표준 제어 프레임워크<br/>2) Sequence(AND논리) — 자식 모두 SUCCESS여야 성공, 하나라도 FAILURE면 즉시 중단<br/>3) Fallback/Selector(OR논리) — 하나라도 SUCCESS면 즉시 성공, 모두 FAILURE여야 실패<br/>4) Finite State Machine(FSM)과 비교"]
      swPatternBox["소프트웨어 공학 패턴<br/>1) 컴포넌트 기반 설계(CBSE)<br/>2) 싱글톤, 옵저버, 상태 패턴<br/>3) 의존성 주입(DI)"]
    검증과 안전 규격
      testBox["단위/통합 테스트<br/>1) gtest, rostest, pytest"]
      safetyBox["기능 안전 규격<br/>1) ISO 10218 — 산업용 로봇 안전<br/>2) ISO 13849 — 안전 제어 시스템 성능수준(PLr d/e)"]`,
};
