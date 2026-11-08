import type { MindmapSection } from "@/types/mindmap";

export const principlesProcessMindmap: MindmapSection = {
  id: "principles-process",
  title: "테스트 기본 원리와 V-모델 프로세스",
  description: "결함 전파 체계, 검증과 확인, 테스팅 7대 원리 및 V-모델 개발·테스트 레벨",
  chart: `mindmap
  root((테스트 원리 및 프로세스))
    결함 용어 체계
      오류["오류 Error<br/>인간의 착각/실수/부주의"]
      결함["결함 Defect/Bug<br/>코드나 문서에 잔존하는 결점"]
      장애["장애 Failure<br/>실행 중 결함이 발현되어 오동작"]
    검증 vs 확인
      검증["검증 Verification<br/>Are we building the product right?<br/>규격 및 명세서 일치 여부"]
      확인["확인 Validation<br/>Are we building the right product?<br/>사용자 요구 및 사용목적 충족"]
    테스팅 7대 기본 원리
      원리1_결함존재["1. 결함 존재 증명<br/>결함 부재 증명 불가"]
      원리2_완벽불가["2. 완벽 테스팅 불가<br/>리스크 기반 우선순위화"]
      원리3_조기테스팅["3. 조기 테스팅 Early Testing<br/>결함 전파 방지 및 수정비용 절감"]
      원리4_결함집중["4. 결함 집중 Defect Clustering<br/>소수 모듈에 결함 집중(파레토 80:20)"]
      원리5_살충제["5. 살충제 패러독스<br/>동일 TC 반복 시 결함 발견 저하"]
      원리6_정황의존["6. 정황 의존성<br/>도메인/환경별 테스트 방식 차별화"]
      원리7_오류부재궤변["7. 오류 부재의 궤변<br/>결함 모두 고쳐도 사용자 기대 미충족 시 실패"]
    V모델 테스트 레벨
      단위테스트["단위 테스트 Unit<br/>개별 모듈 로직/기능 검증 (화이트박스)"]
      통합테스트["통합 테스트 Integration<br/>모듈 간 인터페이스 & 상호작용 검증<br/>- 상향식: Driver 필요<br/>- 하향식: Stub 필요"]
      시스템테스트["시스템 테스트 System<br/>전체 시스템 기능 및 비기능(성능, 보안)"]
      인수테스트["인수 테스트 Acceptance<br/>고객 인수 결정 (알파/베타 테스트)"]`,
  notes: {
    오류: {
      title: "오류 (Error / Mistake)",
      importance: 5,
      badge: "CSTS 1순위",
      definition: "소프트웨어 개발자, 기획자, 설계자가 지식 부족, 피로, 착각 등으로 인해 발생시킨 인간의 행위 또는 잘못된 판단.",
      keyPoints: [
        "전파 경로: 오류(인간의 실수) → 결함(코드/문서의 결점) → 장애(런타임 비정상 작동)",
        "시험에서 인간의 행동/실수를 묻는다면 무조건 '오류(Error)'가 정답입니다.",
      ],
      examTip: "인간의 행위 = 오류, 문서/코드 속 흔적 = 결함(버그), 시스템 비정상 동작 = 장애",
    },
    결함: {
      title: "결함 (Defect / Fault / Bug)",
      importance: 5,
      badge: "CSTS 필수",
      definition: "오류로 인해 요구사항 명세서, 설계 문서, 소스코드 등에 남아있는 결점이나 불일치.",
      keyPoints: [
        "정적 테스팅(리뷰, 정적 분석)을 통해 실행 전 단계에서 결함을 직접 발견할 수 있음.",
        "결함이 코드에 존재하더라도 실행 경로를 타지 않으면 장애로 발현되지 않을 수 있음.",
      ],
      examTip: "Defect, Fault, Bug는 모두 동의어로 사용됩니다.",
    },
    장애: {
      title: "장애 (Failure)",
      importance: 5,
      badge: "CSTS 필수",
      definition: "소프트웨어가 실행되는 도중 결함이 발현되어 사용자가 기대하는 기능이나 규격을 수행하지 못하는 외적 현상.",
      keyPoints: [
        "장애는 시스템을 '실행(동적)'해야만 관측 가능함.",
        "환경 요인(하드웨어 방사선, 전원 단절 등)으로 인해 결함 없이도 일시적 장애가 발생할 수 있음.",
      ],
      examTip: "실행 중 오동작/중단 = 장애(Failure)",
    },
    검증: {
      title: "검증 (Verification)",
      importance: 5,
      badge: "기출 단골",
      definition: "'Are we building the product right?' — 개발 단계 산출물이 이전 단계의 명세서 및 표준 규격을 충족하는지 개발자/엔지니어 관점에서 점검.",
      keyPoints: [
        "명세서 일치성, 코딩 표준 준수, 아키텍처 규칙 부합 여부를 점검.",
        "단위 테스트, 컴포넌트 통합 테스트, 인스펙션 등이 대표적 검증 활동.",
      ],
      examTip: "Product Right? (규격 준수) = 검증 / Right Product? (사용자 만족) = 확인",
    },
    확인: {
      title: "확인 (Validation)",
      importance: 5,
      badge: "기출 단골",
      definition: "'Are we building the right product?' — 최종 구축된 소프트웨어가 사용자의 실제 필요, 의도 및 비즈니스 목적을 올바르게 충족하는지 사용자 관점에서 점검.",
      keyPoints: [
        "명세서대로 구현되었더라도 사용자가 원하는 요구와 다르면 확인 실패.",
        "인수 테스트, 사용자 사용성 테스트, 베타 테스트가 대표적 확인 활동.",
      ],
      examTip: "사용자 요구 만족 = 확인(Validation)",
    },
    통합테스트: {
      title: "통합 테스트 (Integration Test)",
      importance: 5,
      badge: "출제율 99%",
      definition: "개별적으로 검증된 단위 모듈들을 결합하여 모듈 간의 인터페이스, 통신 규약 및 데이터 교환의 이상 여부를 점검하는 테스트 레벨.",
      keyPoints: [
        "상향식(Bottom-Up): 최하위 모듈부터 통합. 미구현 상위 모듈을 대신하는 '드라이버(Driver)' 필요.",
        "하향식(Top-Down): 최상위 제어 모듈부터 통합. 미구현 하위 모듈을 대신하는 '스텁(Stub)' 필요.",
        "빅뱅(Big-Bang): 모든 모듈을 한 번에 통합. 결함 격리 및 원인 분석이 가장 어려움.",
      ],
      examTip: "상향식 = 드라이버(위에서 부름) / 하향식 = 스텁(밑에서 받아줌)",
    },
  },
};
