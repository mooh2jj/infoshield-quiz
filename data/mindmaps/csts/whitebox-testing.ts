import type { MindmapSection } from "@/types/mindmap";

export const whiteboxTestingMindmap: MindmapSection = {
  id: "whitebox-testing",
  title: "구조 기반 동적 화이트박스 기법",
  description: "소스코드 제어 흐름 기반 커버리지 6단계 위계와 매케이브(McCabe) 순환 복잡도",
  chart: `mindmap
  root((화이트박스 테스팅))
    커버리지 위계 구조
      다중조건["1. 다중 조건 커버리지<br/>개별 조건식의 모든 2^N개 진리 조합 검증"]
      MCDC["2. MC/DC 변경 조건/결정 커버리지<br/>각 조건식의 독립적 영향력 검증<br/>최소 케이스 = N + 1개 (항공/철도 표준)"]
      조건결정["3. 조건/결정 커버리지<br/>개별 조건식 T/F 만족 + 전체 결정문 T/F 만족"]
      결정커버리지["4. 결정/분기 커버리지<br/>모든 분기의 True/False 경로 최소 1회 실행<br/>* 구문 커버리지 100% 보장 *"]
      조건커버리지["5. 조건 커버리지 (주의)<br/>각 개별 조건식 T/F 최소 1회 실행<br/>* 결정 커버리지 보장 못함 *"]
      구문커버리지["6. 구문 커버리지 Statement<br/>코드 내 모든 실행 가능한 문장을 최소 1회 실행"]
    MC_DC 상세 원리
      독립성검증["다른 조건식 값을 고정시킨 상태에서<br/>자신의 값 변화만으로 전체 결정을 반전"]
      케이스수["조건식 N개일 때 최소 케이스 수 = N + 1개<br/>다중 조건(2^N) 대비 경제성 극대화"]
    매케이브 순환 복잡도
      정의["CFG에서 선형 독립적인 기초 경로(Basis Path)의 수"]
      공식1["공식 1: V(G) = E - N + 2P<br/>(E: 간선 수, N: 노드 수, P: 단일 컴포넌트=1)"]
      공식2["공식 2: V(G) = P_predicate + 1<br/>(조건 분기 노드의 수 + 1)"]
      공식3["공식 3: V(G) = R<br/>(닫힌 영역 수 + 바깥 영역 1)"]`,
  notes: {
    MCDC: {
      title: "변경 조건/결정 커버리지 (MC/DC)",
      importance: 5,
      badge: "CSTS 최고 ROI",
      definition: "각 개별 조건식이 다른 조건식들의 진리값에 영향을 받지 않고 오직 자신의 값 변경만으로 전체 결정문의 결과를 변경시킬 수 있음을 입증하는 커버리지.",
      keyPoints: [
        "필요 최소 테스트 케이스 수: N + 1 개 (N은 개별 조건식의 수).",
        "다중 조건 커버리지(2^N개)의 폭발적 비용을 줄이면서도 동등 수준의 결함 검출력을 확보.",
        "항공기 소프트웨어(DO-178C Level A), 자동차 안전 표준(ISO 26262 ASIL-D) 등 필수 충족 기준.",
      ],
      examTip: "MC/DC 최소 케이스 = N + 1 (조건 4개면 5개, 5개면 6개)",
    },
    결정커버리지: {
      title: "결정 커버리지 / 분기 커버리지 (Decision Coverage)",
      importance: 5,
      badge: "기출 단골",
      definition: "프로그램 내의 모든 조건문(분기점)의 전체 결과가 참(True)과 거짓(False)이 되는 모든 경로를 최소 1회 이상 통과하는 커버리지.",
      keyPoints: [
        "결정 커버리지 100%를 달성하면 구문 커버리지(Statement Coverage) 100%는 '항상' 보장됩니다.",
        "반대로 구문 커버리지 100%를 달성하더라도 결정 커버리지가 100% 보장되지는 않습니다 (단일 if문에서 True 분기만 타도 구문 커버리지는 100% 가능).",
      ],
      examTip: "결정 100% 만족 시 구문 100% 자동 보장!",
    },
    순환복잡도: {
      title: "매케이브 순환 복잡도 (Cyclomatic Complexity)",
      importance: 5,
      badge: "계산 공식 필수",
      definition: "토마스 매케이브(Thomas McCabe)가 제안한 소프트웨어 복잡도 척도로, 제어 흐름 그래프(CFG)에서 선형 독립적인 실행 경로(Basis Path)의 최소 수를 측정.",
      keyPoints: [
        "간선과 노드로 계산: V(G) = E - N + 2 (단일 컴포넌트)",
        "분기 조건 노드로 계산: V(G) = P + 1 (Predicate Node + 1)",
        "영역으로 계산: V(G) = 닫힌 영역의 수 + 1 (바깥 영역)",
      ],
      examTip: "E - N + 2 = P + 1 = 닫힌 영역 + 1",
    },
  },
};
