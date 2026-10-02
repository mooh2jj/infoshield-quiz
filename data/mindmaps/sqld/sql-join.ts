import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const SQL_JOIN_NOTES: Record<string, MindmapNodeNote> = {
  "조인 기본과 OUTER": {
    title: "INNER JOIN 및 OUTER JOIN (LEFT/RIGHT/FULL)",
    importance: 5,
    badge: "SQL 필수 핵심",
    definition: "두 개 이상의 테이블을 연결하여 하나의 결과 집합으로 조회하는 관계형 데이터베이스의 핵심 연산.",
    keyPoints: [
      "INNER JOIN: 두 테이블의 조인 조건을 모두 만족하는 교집합 행만 반환",
      "LEFT OUTER JOIN: 왼쪽 테이블의 모든 행을 유지하며, 오른쪽 테이블에 매칭되는 데이터가 없으면 NULL로 채움",
      "RIGHT OUTER JOIN: 오른쪽 테이블의 모든 행을 유지하며, 왼쪽 미매칭 데이터는 NULL로 표시",
      "FULL OUTER JOIN: 양쪽 테이블의 모든 데이터를 포함하며, 일치하지 않는 쪽은 NULL로 채워 합집합 형태로 반환",
    ],
    examTip: "OUTER JOIN에서 매칭되지 않은 반대편 컬럼값은 무조건 'NULL'로 채워진다는 점을 기억!",
  },
  "NATURAL과 USING": {
    title: "NATURAL JOIN 및 USING 절의 엄격한 문법 제약",
    importance: 5,
    badge: "오류 판별 1순위",
    definition: "ANSI 표준 조인 방식으로, 동일한 컬럼명을 기준으로 자동 또는 명시적 조인을 수행한다.",
    keyPoints: [
      "NATURAL JOIN: 두 테이블에서 이름과 데이터 타입이 일치하는 모든 컬럼을 대상으로 자동 등가(=) 조인 수행",
      "USING 절: 공통 컬럼 중 특정 컬럼만을 조인 키로 지정할 때 사용 (`JOIN 테이블 USING (DEPTNO)`)",
      "★ 핵심 제약: NATURAL JOIN이나 USING 절에 사용된 조인 컬럼에는 테이블 명이나 별칭(Alias) 접두사를 절대 붙일 수 없음 (예: `SELECT A.DEPTNO` 사용 시 Syntax Error 발생, 오직 `SELECT DEPTNO`만 허용)",
    ],
    examTip: "NATURAL JOIN이나 USING 컬럼 앞에 'EMP.DEPTNO' 처럼 테이블 별칭이 붙어있으면 100% 문법 오류!",
  },
  "서브쿼리 분류": {
    title: "서브쿼리 위치별 분류 (스칼라·인라인뷰·중첩)",
    importance: 5,
    badge: "구문 해석 필수",
    definition: "메인 쿼리 내부에 포함되어 먼저 실행되거나 메인 쿼리와 연계되어 결과를 전달하는 하위 SQL 문장.",
    keyPoints: [
      "스칼라 서브쿼리(Scalar Subquery): SELECT 절에 위치하며, 반드시 단일 행·단일 컬럼(1개 값)만 반환해야 함 (결과가 없으면 NULL)",
      "인라인 뷰(Inline View): FROM 절에 위치하는 서브쿼리로, 가상의 동적 뷰 테이블처럼 동작",
      "중첩 서브쿼리(Nested Subquery): WHERE 또는 HAVING 절에 조건으로 사용되는 서브쿼리",
      "연관 서브쿼리(Correlated): 서브쿼리가 메인 쿼리의 컬럼을 참조하여 메인 행마다 반복 실행되는 쿼리",
    ],
    examTip: "SELECT 절의 스칼라 서브쿼리가 2건 이상의 행을 반환하면 즉시 런타임 에러(ORA-01427) 발생!",
  },
  "다중행과 NOT IN 함정": {
    title: "다중행 연산자 및 NOT IN vs NOT EXISTS NULL 함정",
    importance: 5,
    badge: "최고 빈출 킬러",
    definition: "다중 행 서브쿼리 연산자(IN, ANY, ALL, EXISTS)의 동작 원리와 NULL 포함 시의 평가 결과.",
    keyPoints: [
      "다중행 연산자: IN(하나라도 일치), ANY/SOME(하나라도 만족), ALL(모두 만족), EXISTS(존재 여부만 검사)",
      "★ NOT IN의 NULL 트랩: `WHERE COL NOT IN (SELECT ID FROM T)`에서 결과에 단 하나의 NULL이라도 포함되면, `AND (COL <> NULL)`이 UNKNOWN이 되어 전체 결과가 '공집합(0건)' 반환",
      "NOT EXISTS: NULL 존재 여부와 무관하게 행의 존재 여부(TRUE/FALSE)만 따지므로 NULL에 안전",
    ],
    examTip: "NOT IN 서브쿼리 결과에 NULL이 단 1개라도 섞여 있으면 카운트는 무조건 0건!",
  },
  "집합연산자": {
    title: "집합 연산자 4종 (UNION, UNION ALL, INTERSECT, MINUS)",
    importance: 5,
    badge: "연산자 단골",
    definition: "2개 이상의 SELECT 결과 집합을 하나로 결합하는 연산자.",
    keyPoints: [
      "UNION: 합집합, 중복 행을 제거(Distinct)하므로 내부 정렬(Sort) 부하 발생",
      "UNION ALL: 합집합, 중복을 제거하지 않고 그대로 합침, 정렬이 발생하지 않아 대용량 처리에 고속",
      "INTERSECT: 교집합, 양쪽 모두 존재하는 중복 없는 행 반환",
      "MINUS / EXCEPT: 차집합 (첫 번째 집합에서 두 번째 집합을 제외, Oracle=MINUS / SQL Server=EXCEPT)",
      "규칙: 각 SELECT 문의 컬럼 수와 데이터 타입이 일치해야 하며, 최종 컬럼명은 첫 번째 SELECT 기준",
    ],
    examTip: "성능상 중복 제거가 필요 없거나 데이터가 중복되지 않음이 보장되면 무조건 'UNION ALL' 사용!",
  },
};

export const sqlJoinMindmap: MindmapSection = {
  id: "sql-join",
  title: "SQL 활용 (JOIN·서브쿼리·집합연산자)",
  description: "INNER/OUTER/NATURAL/USING 조인, 스칼라/인라인뷰/중첩 서브쿼리, NOT IN NULL 트랩, 집합 연산자",
  chart: `mindmap
  root((SQL 활용 심화))
    조인 연산 체계
      joinTypeBox["조인 기본과 OUTER<br/>1) INNER JOIN: 양쪽 테이블 조인 조건 만족 교집합<br/>2) LEFT OUTER JOIN: 왼쪽 기준 유지 + 불일치 컬럼 NULL 채움<br/>3) RIGHT OUTER JOIN: 오른쪽 기준 유지 + 불일치 컬럼 NULL 채움<br/>4) FULL OUTER JOIN: 양쪽 모든 데이터 포함 + 상호 미매칭 NULL 채움<br/>5) CROSS JOIN: 카테시안 곱 (M * N 건수 산출)"]
      naturalJoinBox["NATURAL과 USING<br/>1) NATURAL JOIN: 동일 컬럼명 자동 조인 (등가 조인)<br/>2) USING (COL): 명시적 공통 컬럼 지정 조인<br/>3) ★ 엄격한 제약: 조인 기준 컬럼에 테이블 별칭(Alias) 접두사 사용 시 에러! (E.DEPTNO 불가, DEPTNO 만 허용)"]
    서브쿼리 구조
      subqueryTypeBox["서브쿼리 분류<br/>1) 스칼라(Scalar): SELECT 절 위치, 단일 행·단일 컬럼(1개 값) 반환 필수<br/>2) 인라인 뷰(Inline View): FROM 절 위치, 가상 임시 뷰 테이블로 동작<br/>3) 중첩(Nested): WHERE / HAVING 절 위치, 메인 쿼리 조건 평가<br/>4) 연관 서브쿼리: 서브쿼리가 메인 컬럼을 참조하여 행마다 반복 실행"]
      subqueryTrapBox["다중행과 NOT IN 함정<br/>1) 다중행 연산자: IN, ANY/SOME, ALL, EXISTS<br/>2) EXISTS: 조건 만족 시 즉시 종료 (고속, 반환값 유무만 판별)<br/>3) ★ NOT IN NULL 트랩: 서브쿼리 결과에 NULL이 단 1개라도 포함되면 전체 결과 0건(공집합) 반환!"]
    집합 연산자
      setOpBox["집합연산자<br/>1) UNION: 합집합 + 중복 행 제거 (Sort 정렬 부하 발생)<br/>2) UNION ALL: 합집합 (중복 포함, 정렬 없음, 대용량 처리 고속)<br/>3) INTERSECT: 교집합 (양쪽 공통 행만 반환)<br/>4) MINUS / EXCEPT: 차집합 (Oracle=MINUS, SQL Server=EXCEPT)<br/>5) 제약: SELECT 절 컬럼 수와 데이터 타입 일치 필수 (컬럼명은 첫 SELECT 기준)"]`,
  notes: SQL_JOIN_NOTES,
};
