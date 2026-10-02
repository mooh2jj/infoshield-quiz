import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const SQL_ADVANCED_NOTES: Record<string, MindmapNodeNote> = {
  "순위 함수 3대장": {
    title: "RANK vs DENSE_RANK vs ROW_NUMBER",
    importance: 5,
    badge: "1순위 초빈출",
    definition: "윈도우 함수에서 특정 정렬 순서에 따라 행마다 순위를 매기는 3대 순위 결정 함수.",
    keyPoints: [
      "공동 2등이 2명인 경우의 결과 비교:",
      "RANK: 1, [2, 2], 4, 5 — 동순위가 발생하면 그 다음 순위를 건너뜀",
      "DENSE_RANK: 1, [2, 2], 3, 4 — 동순위가 발생해도 순위를 건너뛰지 않고 연속 번호 부여",
      "ROW_NUMBER: 1, 2, 3, 4, 5 — 동일한 값이라도 무조건 고유한 연속 일련번호 부여",
    ],
    examTip: "동점자 처리: 건너뛰면 RANK, 연속이면 DENSE_RANK, 무조건 일련번호면 ROW_NUMBER!",
  },
  "윈도우 프레임": {
    title: "윈도우 프레임 ROWS vs RANGE 차이",
    importance: 5,
    badge: "계산 킬러 문제",
    definition: "윈도우 집계 함수가 계산을 수행할 행의 범위를 세밀하게 지정하는 윈도우 프레임 구문.",
    keyPoints: [
      "ROWS: 물리적인 '행의 개수(위치)'를 기준으로 프레임을 지정 (예: `ROWS BETWEEN 1 PRECEDING AND CURRENT ROW`)",
      "RANGE: 논리적인 '값(Value)의 범위'를 기준으로 프레임을 지정",
      "★ RANGE의 동점자 합산: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` 실행 시, 정렬 기준 컬럼값이 동일한 행이 있으면 동점자 행의 값까지 한꺼번에 포함하여 합산!",
    ],
    examTip: "ORDER BY SAL 후 RANGE 집계 시 동일 급여를 받는 동점자는 한꺼번에 합산되어 동일한 누적값이 나옴!",
  },
  "그룹 함수와 조합": {
    title: "ROLLUP vs CUBE vs GROUPING SETS 단계 수",
    importance: 5,
    badge: "소계 계산 단골",
    definition: "GROUP BY 절에서 다양한 소계(Subtotal)와 총계(Grand Total)를 한 번에 산출하는 그룹 함수 체계.",
    keyPoints: [
      "ROLLUP(A, B): 계층적 소계 산출, 오른쪽 컬럼부터 하나씩 제거하여 (A, B) → (A) → () 총 3단계 (인수 N개 시 N+1단계)",
      "CUBE(A, B): 가능한 모든 차원의 조합 산출: (A, B) → (A) → (B) → () 총 4단계 (인수 N개 시 2^N 단계)",
      "GROUPING SETS(A, B): 명시된 인자별 개별 그룹 집계: (A), (B)만 각각 산출 (소계/총계 자동 생성 안 됨)",
      "복합 컬럼: `ROLLUP(A, (B, C))` 처럼 괄호로 묶으면 (B, C)를 단일 단위로 취급하여 3단계로 계산",
    ],
    examTip: "속성이 N개일 때 ROLLUP은 N+1개 조합, CUBE는 2^N개 조합!",
  },
  "GROUPING 함수": {
    title: "GROUPING() 및 GROUPING_ID() 함수",
    importance: 4,
    badge: "소계 판별 함수",
    definition: "소계나 총계로 인해 집계된 행인지 여부를 0 또는 1로 판별해주는 함수.",
    keyPoints: [
      "GROUPING(COL): 소계나 총계 계산을 위해 해당 컬럼이 NULL로 집계된 행이면 1을 반환, 일반 그룹 행이면 0을 반환",
      "용도: 실제 데이터에 원래 NULL이 저장되어 있는 경우와 소계 산출로 인해 생긴 NULL을 구분하기 위해 `CASE WHEN GROUPING(COL)=1 THEN '합계'` 형식으로 활용",
    ],
    examTip: "소계 산출 행이면 1, 일반 세부 행이면 0!",
  },
  "계층형 질의": {
    title: "계층형 질의 (START WITH / PRIOR 순방향·역방향)",
    importance: 5,
    badge: "상급 빈출 필수",
    definition: "조직도, 카테고리 트리처럼 부모-자식 관계를 가진 데이터를 계층적으로 탐색하는 Oracle 전용 문법.",
    keyPoints: [
      "START WITH: 계층 구조 전개의 시작 노드(루트 노드) 지정",
      "CONNECT BY: 부모와 자식 간의 관계 조건 지정",
      "★ 전개 방향 공식:",
      "- `PRIOR 자식 = 부모` (예: `PRIOR EMPNO = MGR`) : 부모에서 자식으로 내려가는 순방향(Top-down) 전개",
      "- `PRIOR 부모 = 자식` (예: `PRIOR MGR = EMPNO`) : 자식에서 부모로 올라가는 역방향(Bottom-up) 전개",
      "의사 컬럼: LEVEL(루트=1, 자식=2..), CONNECT_BY_ISLEAF(리프노드면 1, 아니면 0)",
      "ORDER SIBLINGS BY: 계층 구조의 형태를 깨뜨리지 않고 같은 부모를 둔 형제(Sibling) 노드들끼리만 정렬",
    ],
    examTip: "PRIOR가 자식 쪽에 붙어있으면 순방향(아래로), 부모 쪽에 붙어있으면 역방향(위로)!",
  },
  "신유형 함수": {
    title: "PIVOT / UNPIVOT 및 정규표현식(REGEXP)",
    importance: 4,
    badge: "개정 최신 신출제",
    definition: "최신 개정 시험에서 출제 빈도가 급증한 행-열 변환 및 정규표현식 패턴 매칭 함수.",
    keyPoints: [
      "PIVOT: 행 데이터를 열(Column)로 회전하여 변환 (집계 함수 필수 지정)",
      "UNPIVOT: 열 데이터를 행(Row)으로 회전하여 정규화 형태로 변환",
      "REGEXP_LIKE: 정규식 패턴과 일치하는 문자열 검색 (예: `REGEXP_LIKE(COL, '^[A-Z]')` - 대문자로 시작)",
      "LEAD(COL, n): 현재 행을 기준으로 이후 n번째 행의 값을 가져옴",
      "LAG(COL, n): 현재 행을 기준으로 이전 n번째 행의 값을 가져옴",
    ],
    examTip: "PIVOT은 행을 열로, UNPIVOT은 열을 행으로! 정규식 ^은 시작, $는 끝!",
  },
};

export const sqlAdvancedMindmap: MindmapSection = {
  id: "sql-advanced",
  title: "고급 SQL (순위·그룹함수·계층형·윈도우)",
  description: "RANK/DENSE_RANK/ROW_NUMBER, ROWS vs RANGE, ROLLUP/CUBE, 계층형 질의, PIVOT, 정규표현식",
  chart: `mindmap
  root((고급 SQL 및 신기출))
    순위와 윈도우 프레임
      rankBox["순위 함수 3대장<br/>1) RANK: 동순위 발생 시 건너뜀 (1, 2, 2, 4)<br/>2) DENSE_RANK: 동순위 발생해도 연속 순위 유지 (1, 2, 2, 3)<br/>3) ROW_NUMBER: 동점과 무관하게 무조건 고유 일련번호 부여 (1, 2, 3, 4)<br/>4) 비율 함수: RATIO_TO_REPORT, CUME_DIST, PERCENT_RANK"]
      frameBox["윈도우 프레임<br/>1) ROWS: 물리적 행 단위 프레임 경계 지정<br/>2) RANGE: 논리적 값(Value)의 범위 기준 프레임 지정<br/>3) ★ RANGE 동점자 함정: UNBOUNDED PRECEDING AND CURRENT ROW 시 동점자는 한꺼번에 합산되어 동일 누적치 산출!"]
    그룹 함수 체계
      rollupCubeBox["그룹 함수와 조합<br/>1) ROLLUP(A, B): 계층적 소계 산출, 오른쪽부터 제거, N+1 단계 조합<br/>2) CUBE(A, B): 가능한 모든 다차원 조합 산출, 2^N 단계 조합<br/>3) GROUPING SETS: 명시한 개별 항목별 집계만 독립 수행<br/>4) 복합 컬럼: ROLLUP(A, (B, C)) 처럼 묶으면 (B, C)를 하나로 취급"]
      groupingBox["GROUPING 함수<br/>1) GROUPING(COL): 소계·총계로 집계된 행이면 1, 일반 세부 행이면 0<br/>2) CASE WHEN GROUPING(COL) = 1 THEN '소계' 형태로 디스플레이 가공"]
    계층형 질의
      hierarchyBox["계층형 질의<br/>1) START WITH: 시작 루트 노드 조건 지정<br/>2) PRIOR 자식 = 부모: 위에서 아래로 내려가는 순방향(Top-down)<br/>3) PRIOR 부모 = 자식: 아래에서 위로 올라가는 역방향(Bottom-up)<br/>4) 의사컬럼: LEVEL (트리 깊이), CONNECT_BY_ISLEAF (말단 노드 여부 1/0)<br/>5) ORDER SIBLINGS BY: 계층 트리를 유지하며 형제 노드 간 정렬"]
    신출제 유형
      newTrendBox["신유형 함수<br/>1) PIVOT: 행(Row)을 열(Column)로 회전 집계<br/>2) UNPIVOT: 열(Column)을 행(Row)으로 환원<br/>3) REGEXP_LIKE: 정규표현식 패턴 매칭 (^[0-9], [A-Z]$ 등)<br/>4) LEAD / LAG: 이후 행 / 이전 행 컬럼값 참조"]`,
  notes: SQL_ADVANCED_NOTES,
};
