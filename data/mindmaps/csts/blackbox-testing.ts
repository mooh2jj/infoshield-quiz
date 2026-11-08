import type { MindmapSection } from "@/types/mindmap";

export const blackboxTestingMindmap: MindmapSection = {
  id: "blackbox-testing",
  title: "명세 기반 동적 블랙박스 기법",
  description: "내부 구조를 보지 않고 요구사항 명세를 기반으로 케이스를 도출하는 6대 기법",
  chart: `mindmap
  root((블랙박스 테스팅))
    동등 분할 Equivalence
      개념["입력/출력 도메인을 동등 클래스로 분할<br/>- 유효 클래스 Valid Class<br/>- 비유효 클래스 Invalid Class"]
      설계원칙["각 분할 클래스에서 최소 1개의 대표값 선정<br/>- 동일 분할 내 값들은 동일한 결함 검출력 가정"]
    경곗값 분석 BVA
      개념["동등 분할의 경계선에서 결함 발생 확률이 가장 높음"]
      2Value_BVA["2-Value BVA (표준)<br/>- 경곗값 자체 (Boundary)<br/>- 바로 바깥쪽 값 (Just Outside)<br/>예: 1~100 정수 -> {0, 1, 100, 101}"]
      3Value_BVA["3-Value BVA (엄격)<br/>- 바로 안쪽 값 (Just Inside)<br/>- 경곗값 자체 (Boundary)<br/>- 바로 바깥쪽 값 (Just Outside)<br/>예: 1~100 정수 -> {0, 1, 2, 99, 100, 101}"]
    의사결정 테이블 Decision Table
      개념["조건들의 복잡한 불리언 조합과 동작의 관계를 표로 모델링"]
      규칙수["조건이 N개일 때 총 규칙 수 = 2^N개<br/>비즈니스 규칙 누락 방지에 최적"]
    상태 전이 State Transition
      0스위치["0-스위치 커버리지<br/>모든 단일 전이(1-hop)를 최소 1회 실행"]
      1스위치["1-스위치 커버리지<br/>연속된 2개 전이 시퀀스(2-hop)를 최소 1회 실행"]
    페어와이즈 Pairwise
      개념["결함의 70~80%는 2개 인자의 상호작용에서 발생<br/>모든 2개 입력의 순서쌍 조합을 최소 1회 포함"]
      효과["완전 조합 대비 케이스 수 대폭 압축<br/>예: 3x3x2 = 18개 -> 9개 내외"]
    기타 명세 기반
      분류트리기법["분류 트리 기법 CTM<br/>도메인을 트리로 시각화하여 조합 설계"]
      유스케이스["유스케이스 테스팅<br/>액터와 시스템 간의 정상/대안 흐름 검증"]`,
  notes: {
    경곗값분석: {
      title: "경곗값 분석 (Boundary Value Analysis)",
      importance: 5,
      badge: "CSTS 1순위",
      definition: "동등 분할 경계선 부근에서 개발자의 조건문 오작동(<= 대신 < 사용 등)으로 결함이 집중된다는 원리를 이용한 기법.",
      keyPoints: [
        "2-Value BVA: 경곗값 자체와 인접한 비유효 바깥쪽 값 2개를 선택. (1~100 정수 -> 0, 1, 100, 101)",
        "3-Value BVA: 경곗값 자체, 바로 안쪽, 바로 바깥쪽 3개를 선택. (1~100 정수 -> 0, 1, 2, 99, 100, 101)",
        "시험 문제에서 '2-Value'인지 '3-Value'인지 반드시 조건을 먼저 확인할 것!",
      ],
      examTip: "2-Value = 경계 + 바깥(2개씩) / 3-Value = 안쪽 + 경계 + 바깥(3개씩)",
    },
    의사결정테이블: {
      title: "의사결정 테이블 테스팅 (Decision Table)",
      importance: 5,
      badge: "계산 빈출",
      definition: "시스템의 복잡한 비즈니스 로직과 복합 조건문을 조건(Conditions)과 동작(Actions)의 매트릭스 표로 구조화하는 기법.",
      keyPoints: [
        "조건이 참/거짓 2진 상태일 때 N개 조건의 완전 조합은 2^N개.",
        "불가능한 조합이나 결과가 동일한 규칙은 병합(규칙 압축) 가능.",
      ],
      examTip: "N개 불리언 조건의 총 규칙 수 = 2^N",
    },
    페어와이즈: {
      title: "페어와이즈 테스팅 (Pairwise Testing)",
      importance: 4,
      badge: "CSTS 필수",
      definition: "모든 인자의 전수 조합을 테스트하지 않고, 임의의 두 인자 간의 가능한 모든 조합(Pair)만을 최소 1회 이상 포함하도록 테스트 케이스를 최적화하는 기법.",
      keyPoints: [
        "조합의 폭발(Combinatorial Explosion) 문제를 해결.",
        "경험적 연구에 따르면 소프트웨어 결함의 대부분은 단일 또는 2개 인자의 상호작용으로 유발됨.",
      ],
      examTip: "2개 인자 상호작용 최적화 = 페어와이즈 (All-Pairs)",
    },
  },
};
