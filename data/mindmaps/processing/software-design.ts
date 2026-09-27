import type { MindmapSection } from "@/types/mindmap";

export const softwareDesignMindmap: MindmapSection = {
  id: "software-design",
  title: "소프트웨어 설계",
  description: "생명주기·요구사항 분석부터 아키텍처·디자인 패턴까지",
  chart: `mindmap
  root((소프트웨어 설계))
    개발 방법론
      sdlcBox["소프트웨어 생명주기<br/>1) 폭포수 모델 — 순차적 개발, 요구사항 변경에 취약<br/>2) 프로토타이핑 — 시제품으로 요구사항 검증<br/>3) 나선형 모델 — 위험 분석을 반복하며 점진적 개발<br/>4) 애자일 — Scrum·XP·Kanban, 짧은 반복 주기"]
      요구사항 분석
        기능 비기능 요구사항
        검증 워크스루 인스펙션 동료검토
    모델링 도구
      유스케이스 클래스 시퀀스
      dfdBox["DFD 구성요소<br/>1) Process — 데이터를 변환하는 처리 과정<br/>2) Data Flow — 데이터의 흐름<br/>3) Data Store — 데이터 저장소<br/>4) External Entity — 외부 개체"]
    uiBox["UI/UX 설계 원칙<br/>1) 직관성 — 누구나 쉽게 이해<br/>2) 유효성 — 목적 달성의 정확성과 완전성<br/>3) 학습성 — 쉽게 배울 수 있음<br/>4) 유연성 — 다양한 상황에 대응"]
    archBox["소프트웨어 아키텍처<br/>1) 계층형(Layered) — 계층별로 역할 분리<br/>2) MVC — Model·View·Controller 분리<br/>3) 파이프-필터 — 데이터를 순차적으로 처리<br/>4) 이벤트 드리븐 — 이벤트 발생 시 처리"]
    모듈화 지표
      couplingBox["결합도(낮음→높음, 실기)<br/>1) 자료(Data) — 값만 주고받음<br/>2) 스탬프(Stamp) — 자료구조 전체 전달<br/>3) 제어(Control) — 제어 흐름 전달<br/>4) 외부(External) — 외부 환경 변수 공유<br/>5) 공통(Common) — 전역 변수 공유<br/>6) 내용(Content) — 내부 코드 직접 참조"]
      cohesionBox["응집도(낮음→높음, 실기)<br/>1) 우연적·논리적·시간적 — 관련성 낮은 순서<br/>2) 절차적·통신적·순차적 — 실행·데이터 흐름 공유<br/>3) 기능적 — 하나의 기능만 수행, 가장 바람직"]
    GoF 디자인 패턴
      생성 Factory Method Abstract Factory Builder Singleton
      구조 Adapter Decorator Facade Proxy
      patternBox["행위 패턴 예시<br/>1) Observer — 상태 변화를 다른 객체에 자동 통지<br/>2) Strategy — 알고리즘을 캡슐화해 런타임 교체<br/>3) Template Method — 알고리즘 골격만 상위에서 정의"]
    eaiBox["연계 기술 EAI 구축 유형<br/>1) Point-to-Point — 시스템 간 1:1 직접 연계<br/>2) Hub and Spoke — 허브를 통한 중앙집중 연계<br/>3) Message Bus — 미들웨어를 통한 비동기 연계<br/>4) Hybrid — Hub and Spoke와 Message Bus 혼합"]`,
};
