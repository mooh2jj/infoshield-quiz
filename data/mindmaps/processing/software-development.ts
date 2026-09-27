import type { MindmapSection } from "@/types/mindmap";

export const softwareDevelopmentMindmap: MindmapSection = {
  id: "software-development",
  title: "소프트웨어 개발",
  description: "자료구조·알고리즘, 형상관리, 테스트 기법과 유지보수",
  chart: `mindmap
  root((소프트웨어 개발))
    dsBox["기본 자료구조<br/>1) 스택 — LIFO, 함수 호출·괄호 검사에 사용<br/>2) 큐 — FIFO, 프로세스 스케줄링에 사용<br/>3) 트리 — 계층 구조, 순회는 전위·중위·후위<br/>4) 그래프 — BFS(너비 우선)·DFS(깊이 우선) 탐색"]
    treeTraverseBox["트리 순회 방식(실기)<br/>1) 전위 순회(Preorder) — Root → Left → Right<br/>2) 중위 순회(Inorder) — Left → Root → Right<br/>3) 후위 순회(Postorder) — Left → Right → Root"]
    sortBox["정렬 알고리즘 복잡도(실기)<br/>1) 삽입·선택·버블 정렬 — O(n^2)<br/>2) 퀵·병합·힙 정렬 — O(n log n)<br/>3) 이진 탐색 — O(log n), 정렬된 배열 전제"]
    recursionBox["재귀 함수 특징<br/>1) 자기 자신을 호출하는 함수 구조<br/>2) 반드시 종료 조건(Base Case)이 필요<br/>3) 호출될 때마다 스택 프레임이 쌓여 메모리를 사용"]
    통합 구현
      Git SVN
      gitBox["형상관리 기본 명령(실기)<br/>1) git add / commit — 변경사항 스냅샷 저장<br/>2) git branch / merge — 브랜치 생성·병합<br/>3) git push / pull — 원격 저장소와 동기화"]
      cmBox["형상관리 절차(실기)<br/>1) 형상식별 — 형상 관리 대상을 식별<br/>2) 형상통제 — 변경 요청을 검토·승인·반영<br/>3) 형상감사 — 형상항목이 기준에 맞는지 검사<br/>4) 형상기록 — 변경 이력을 기록·보고"]
      CI CD 자동화
    테스트 기법
      testTypeBox["테스트 분류<br/>1) 정적 테스트 — 실행하지 않고 리뷰·인스펙션으로 검증<br/>2) 동적 테스트 — 실제 실행하며 결과 확인<br/>3) 화이트박스 — 내부 로직과 구조를 보고 테스트<br/>4) 블랙박스 — 입출력만 보고 테스트"]
      vvBox["검증과 확인(V&V)<br/>1) 검증(Verification) — 소프트웨어가 요구사항대로 만들어졌는가<br/>2) 확인(Validation) — 소프트웨어가 실제로 의도대로 동작하는가"]
      coverageBox["화이트박스 커버리지(실기)<br/>1) 구문 커버리지 — 모든 문장을 한 번 이상 실행<br/>2) 분기 커버리지 — 모든 분기를 한 번 이상 실행<br/>3) 조건 커버리지 — 개별 조건의 참·거짓을 모두 실행<br/>4) MC/DC — 조건과 분기 커버리지를 모두 만족"]
      blackBoxBox["블랙박스 테스트 기법<br/>1) 동등 분할 — 입력을 유효·무효 클래스로 분할<br/>2) 경계값 분석 — 경계값과 전후 값을 테스트<br/>3) 원인-결과 그래프 — 입력과 결과의 인과관계 분석<br/>4) 오류 예측 — 과거 오류 이력 기반 추정"]
      integrationBox["통합 테스트 방식<br/>1) Top-down — 상위 모듈부터, 하위는 Stub으로 대체<br/>2) Bottom-up — 하위 모듈부터, 상위는 Driver로 대체<br/>3) Big-bang — 전체 모듈을 한 번에 통합"]
      단위 시스템 인수 Alpha Beta
    유지보수 및 개선
      리팩토링 기술부채
      cleanCodeBox["클린 코드 원칙<br/>1) 가독성 — 누구나 쉽게 읽을 수 있는 코드<br/>2) 단순성 — 하나의 기능만 담당하는 단순한 코드<br/>3) 의존성 최소화 — 다른 모듈에 미치는 영향 최소화"]`,
};
