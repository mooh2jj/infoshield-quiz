import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const SQL_BASIC_NOTES: Record<string, MindmapNodeNote> = {
  "SQL 명령어 분류": {
    title: "SQL 문장 4대 분류 (DDL·DML·DCL·TCL)",
    importance: 5,
    badge: "기본 필수",
    definition: "관계형 데이터베이스 관리 시스템에서 데이터를 정의, 조작, 제어, 트랜잭션 관리하기 위한 표준 언어 분류.",
    keyPoints: [
      "DDL(데이터 정의어): CREATE, ALTER, DROP, TRUNCATE, RENAME (Auto-Commit 발생)",
      "DML(데이터 조작어): SELECT, INSERT, UPDATE, DELETE (사용자가 직접 Commit/Rollback)",
      "DCL(데이터 제어어): GRANT(권한 부여), REVOKE(권한 회수)",
      "TCL(트랜잭션 제어어): COMMIT, ROLLBACK, SAVEPOINT",
    ],
    examTip: "TRUNCATE는 데이터만 지우지만 DML이 아니라 'DDL'이므로 자동 커밋된다는 점이 최다 빈출!",
  },
  "데이터 삭제 3총사": {
    title: "DELETE vs TRUNCATE vs DROP 완벽 비교",
    importance: 5,
    badge: "1순위 초빈출",
    definition: "테이블 데이터 또는 객체를 삭제하는 3가지 명령어의 작동 원리와 차이점.",
    keyPoints: [
      "DELETE(DML): 특정 조건(WHERE) 행 삭제 가능, Undo 로그 기록, ROLLBACK 가능, 속도 느림",
      "TRUNCATE(DDL): 테이블 전체 데이터 삭제(초기화), 공간 반납(HWM 초기화), 자동 COMMIT(ROLLBACK 불가), 대용량 고속 삭제",
      "DROP(DDL): 테이블 구조(Schema), 데이터, 관련 인덱스 및 제약조건까지 완전히 삭제",
    ],
    examTip: "TRUNCATE는 Rollback 불가(Auto-Commit)! WHERE 절 지정 불가!",
  },
  "NULL 특성과 연산": {
    title: "NULL의 정의와 3대 황금 연산 규칙",
    importance: 5,
    badge: "계산문제 함정 1순위",
    definition: "존재하지 않거나 알 수 없는(Unknown) 미지의 값을 의미하며, 0이나 공백('')과는 완전히 다르다.",
    keyPoints: [
      "산술 연산: NULL과 숫자의 모든 연산 결과는 무조건 NULL (예: 10 + NULL = NULL)",
      "비교 연산: 'COL = NULL'은 항상 UNKNOWN(거짓 취급)을 반환하므로 반드시 'IS NULL', 'IS NOT NULL' 사용",
      "집계 함수: SUM, AVG, MAX, MIN 등 모든 집계 함수는 NULL을 자동 제외하고 계산 (단, COUNT(*)는 NULL 행도 카운트)",
    ],
    examTip: "NULL과 어떤 수를 더하거나 곱해도 무조건 NULL! 집계 함수는 NULL을 빼고 계산!",
  },
  "NULL 정렬 및 함수": {
    title: "NULL 정렬 순서 및 NULL 변환 함수",
    importance: 4,
    badge: "DBMS 차이 빈출",
    definition: "ORDER BY 정렬 시 NULL의 기본 위치 및 NULL을 다른 값으로 치환하는 함수 체계.",
    keyPoints: [
      "Oracle 정렬: NULL을 '가장 큰 값'으로 취급 (ASC: 끝에 위치, DESC: 처음에 위치)",
      "SQL Server 정렬: NULL을 '가장 작은 값'으로 취급 (ASC: 처음에 위치, DESC: 끝에 위치)",
      "NVL(expr1, expr2): expr1이 NULL이면 expr2 반환 (Oracle)",
      "ISNULL(expr1, expr2): expr1이 NULL이면 expr2 반환 (SQL Server)",
      "COALESCE(e1, e2, ...): 인자 중 최초로 NULL이 아닌 값을 반환 (ANSI 표준)",
      "NULLIF(e1, e2): 두 값이 같으면 NULL, 다르면 e1 반환",
    ],
    examTip: "Oracle은 NULL이 무한대처럼 가장 크고, SQL Server는 -무한대처럼 가장 작음!",
  },
  "테이블 제약조건": {
    title: "무결성 제약조건 5가지와 참조 옵션",
    importance: 5,
    badge: "무결성 핵심",
    definition: "데이터의 정확성과 일관성을 유지하기 위해 테이블 컬럼에 정의하는 규칙.",
    keyPoints: [
      "PRIMARY KEY: 주식별자, NOT NULL + UNIQUE 만족 (테이블당 1개)",
      "FOREIGN KEY: 외래키, 부모 테이블의 기본키를 참조하여 참조 무결성 보장",
      "CASCADE 옵션: ON DELETE CASCADE (부모 삭제 시 자식 행 연쇄 삭제)",
      "SET NULL 옵션: ON DELETE SET NULL (부모 삭제 시 자식의 FK 컬럼을 NULL로 변경)",
      "UNIQUE: 중복 불가 (단, NULL 값은 중복 입력 허용 가능)",
      "CHECK: 입력 가능한 값의 범위나 조건 제한 (예: AGE >= 0)",
    ],
    examTip: "UNIQUE 컬럼은 NULL 값을 허용할 수 있음(DBMS에 따라 여러 NULL 허용)!",
  },
  "트랜잭션과 TCL": {
    title: "트랜잭션 4대 특성(ACID)과 TCL 제어",
    importance: 5,
    badge: "트랜잭션 기본",
    definition: "데이터베이스의 논리적 작업 단위(LUW)를 제어하는 COMMIT, ROLLBACK, SAVEPOINT.",
    keyPoints: [
      "ACID 특성: 원자성(All or Nothing), 일관성(모순 없음), 격리성(동시성 간섭 차단), 영속성(결과 보존)",
      "COMMIT: 트랜잭션 작업 내용을 데이터베이스에 영구 반영 (이전 상태 복구 불가)",
      "ROLLBACK: 트랜잭션 시작 전 또는 지정한 SAVEPOINT까지 모든 변경 사항 취소",
      "SAVEPOINT: 트랜잭션 내 저장점 지정 (`SAVEPOINT SV1;` $\\rightarrow$ `ROLLBACK TO SV1;`)",
      "DDL 자동 커밋: Oracle은 CREATE/ALTER/DROP 등 DDL 실행 시 암묵적 COMMIT 발생",
    ],
    examTip: "Oracle에서 DML 작업 중 DDL(예: CREATE TABLE)을 실행하면 이전 DML도 함께 자동 COMMIT됨!",
  },
};

export const sqlBasicMindmap: MindmapSection = {
  id: "sql-basic",
  title: "SQL 기본 (DDL·DML·TCL·NULL)",
  description: "DDL/DML/TCL 명령어 분류, DELETE/TRUNCATE/DROP 비교, NULL 연산 규칙, 제약조건, 트랜잭션",
  chart: `mindmap
  root((SQL 기본 문법))
    SQL 명령어 체계
      commandBox["SQL 명령어 분류<br/>1) DDL: CREATE / ALTER / DROP / TRUNCATE (Auto-Commit)<br/>2) DML: SELECT / INSERT / UPDATE / DELETE (사용자 트랜잭션)<br/>3) DCL: GRANT(부여) / REVOKE(회수)<br/>4) TCL: COMMIT / ROLLBACK / SAVEPOINT"]
      deleteBox["데이터 삭제 3총사<br/>1) DELETE(DML): 행 단위 삭제, WHERE 가능, Undo 기록, Rollback 가능, 느림<br/>2) TRUNCATE(DDL): 테이블 초기화, High Water Mark 초기화, Auto-Commit, 고속<br/>3) DROP(DDL): 테이블 스키마, 데이터, 인덱스, 제약조건 완전 제거"]
    NULL과 연산 특성
      nullCalcBox["NULL 특성과 연산<br/>1) 산술 연산: NULL + 숫자 = 항상 NULL<br/>2) 비교 연산: COL = NULL 은 UNKNOWN (반드시 IS NULL / IS NOT NULL 사용)<br/>3) 집계 함수: SUM, AVG 등은 NULL 자동 제외 (단 COUNT(*)는 NULL 포함)"]
      nullFuncBox["NULL 정렬 및 함수<br/>1) 정렬 순서: Oracle(가장 큰 값) vs SQL Server(가장 작은 값)<br/>2) 치환 함수: NVL(Oracle) / ISNULL(SQL Server) / COALESCE(표준 다중인자)<br/>3) NULLIF(A, B): 두 값이 같으면 NULL, 다르면 A 반환"]
    제약조건과 무결성
      constraintBox["테이블 제약조건<br/>1) PRIMARY KEY: NOT NULL + UNIQUE (테이블당 1개)<br/>2) FOREIGN KEY: 참조 무결성 유지 (부모 PK/UNIQUE 참조)<br/>3) 삭제 옵션: ON DELETE CASCADE(연쇄삭제) vs ON DELETE SET NULL(NULL로 변경)<br/>4) UNIQUE / CHECK / DEFAULT / NOT NULL"]
    트랜잭션 제어
      tclBox["트랜잭션과 TCL<br/>1) ACID: 원자성(Atomicity), 일관성, 고립성, 영속성<br/>2) COMMIT: 영구 저장 / ROLLBACK: 트랜잭션 작업 취소<br/>3) SAVEPOINT: ROLLBACK TO 저장점명 (부분 롤백)<br/>4) 자동 커밋: Oracle은 DDL 실행 시 이전 트랜잭션 강제 Auto-Commit"]`,
  notes: SQL_BASIC_NOTES,
};
