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
        reqValidationBox["요구사항 검증 기법<br/>1) 워크스루 — 작성자가 주도해 동료들과 간단히 검토<br/>2) 인스펙션 — 정형화된 절차로 결함을 찾는 공식 검토<br/>3) 동료검토 — 동료 개발자가 개별적으로 검토"]
    모델링 도구
      useCaseBox["유스케이스 다이어그램 관계(실기)<br/>1) Include — 다른 유스케이스를 필수로 포함하는 관계<br/>2) Extend — 조건에 따라 선택적으로 확장되는 관계<br/>3) Generalization — 유스케이스 간 상속(일반화) 관계"]
      classRelBox["클래스 다이어그램 관계(실기)<br/>1) 연관(Association) — 단순히 연결된 관계<br/>2) 집합(Aggregation) — 전체와 부분이 독립적인 생명주기를 가짐<br/>3) 복합(Composition) — 전체와 부분이 생명주기를 공유함<br/>4) 일반화(Generalization) — 상속(is-a) 관계<br/>5) 의존(Dependency) — 일시적으로 사용하는 관계"]
      시퀀스
      dfdBox["DFD 구성요소<br/>1) Process — 데이터를 변환하는 처리 과정<br/>2) Data Flow — 데이터의 흐름<br/>3) Data Store — 데이터 저장소<br/>4) External Entity — 외부 개체"]
      rumbaughBox["럼바우 객체지향 분석 절차(실기)<br/>1) 객체 모델링 — 객체 다이어그램으로 정적 구조를 표현<br/>2) 동적 모델링 — 상태 다이어그램으로 시간에 따른 상태 변화를 표현<br/>3) 기능 모델링 — 자료흐름도(DFD)로 데이터 처리 과정을 표현"]
    uiBox["UI/UX 설계 원칙<br/>1) 직관성 — 누구나 쉽게 이해<br/>2) 유효성 — 목적 달성의 정확성과 완전성<br/>3) 학습성 — 쉽게 배울 수 있음<br/>4) 유연성 — 다양한 상황에 대응"]
    설계 산출물
      codeTypeBox["코드 설계 종류(실기)<br/>1) 순차 코드 — 발생 순서대로 일련번호 부여<br/>2) 블록 코드 — 공통 특성별로 구간을 나눠 부여<br/>3) 연상 코드 — 대상의 특성을 코드에 반영<br/>4) 표의 숫자 코드 — 크기나 수량 자체를 코드로 사용"]
      hipoBox["HIPO(실기)<br/>1) 입력-처리-출력 관계를 그림으로 나타낸 분석·설계 도구<br/>2) 가시적 목차표 — 전체 구조를 한눈에 보여줌<br/>3) 총괄·상세 도표 — 기능을 계층적으로 상세화"]
    archBox["소프트웨어 아키텍처<br/>1) 계층형(Layered) — 계층별로 역할 분리<br/>2) MVC — Model·View·Controller 분리<br/>3) 파이프-필터 — 데이터를 순차적으로 처리<br/>4) 이벤트 드리븐 — 이벤트 발생 시 처리"]
    모듈화 지표
      couplingBox["결합도(낮음→높음, 실기)<br/>1) 자료(Data) — 값만 주고받음<br/>2) 스탬프(Stamp) — 자료구조 전체 전달<br/>3) 제어(Control) — 제어 흐름 전달<br/>4) 외부(External) — 외부 환경 변수 공유<br/>5) 공통(Common) — 전역 변수 공유<br/>6) 내용(Content) — 내부 코드 직접 참조"]
      cohesionBox["응집도(낮음→높음, 실기)<br/>1) 우연적·논리적·시간적 — 관련성 낮은 순서<br/>2) 절차적·통신적·순차적 — 실행·데이터 흐름 공유<br/>3) 기능적 — 하나의 기능만 수행, 가장 바람직"]
    GoF 디자인 패턴
      creationalBox["생성 패턴(실기)<br/>1) Factory Method — 객체 생성을 서브클래스에 위임<br/>2) Abstract Factory — 관련된 객체 군을 생성하는 인터페이스 제공<br/>3) Builder — 복잡한 객체를 단계별로 생성<br/>4) Prototype — 기존 객체를 복제해 새 객체 생성<br/>5) Singleton — 인스턴스를 하나만 생성해 공유"]
      structuralBox["구조 패턴(실기)<br/>1) Adapter — 호환되지 않는 인터페이스를 연결<br/>2) Decorator — 객체에 동적으로 책임을 추가<br/>3) Facade — 복잡한 서브시스템에 단순한 인터페이스 제공<br/>4) Proxy — 실제 객체 접근을 대리해 제어"]
      patternBox["행위 패턴 예시<br/>1) Observer — 상태 변화를 다른 객체에 자동 통지<br/>2) Strategy — 알고리즘을 캡슐화해 런타임 교체<br/>3) Template Method — 알고리즘 골격만 상위에서 정의"]
    연계와 미들웨어
      eaiBox["연계 기술 EAI 구축 유형<br/>1) Point-to-Point — 시스템 간 1:1 직접 연계<br/>2) Hub and Spoke — 허브를 통한 중앙집중 연계<br/>3) Message Bus — 미들웨어를 통한 비동기 연계<br/>4) Hybrid — Hub and Spoke와 Message Bus 혼합"]
      middlewareBox["미들웨어 종류(실기)<br/>1) WAS — 웹서버와 DB 사이에서 동적 콘텐츠 처리<br/>2) TP-Monitor — 트랜잭션 처리 과정을 감시·관리<br/>3) MOM — 메시지 큐 기반 비동기 통신<br/>4) ORB — 객체 간 원격 통신을 지원(CORBA)"]`,
};
