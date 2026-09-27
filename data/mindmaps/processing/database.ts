import type { MindmapSection } from "@/types/mindmap";

export const databaseMindmap: MindmapSection = {
  id: "database",
  title: "데이터베이스 구축",
  description: "데이터 모델링, 관계대수·정규화, SQL과 트랜잭션",
  chart: `mindmap
  root((데이터베이스 구축))
    modelBox["설계 단계<br/>1) 개념적 설계 — ERD로 개체·관계 정의<br/>2) 논리적 설계 — 정규화, 테이블로 매핑<br/>3) 물리적 설계 — 반정규화, 인덱스·파티셔닝 적용"]
    관계형 DB 기본
      relBox["릴레이션 구성요소<br/>1) 튜플(Tuple) — 행, 개수는 카디널리티<br/>2) 속성(Attribute) — 열, 개수는 차수(Degree)<br/>3) 도메인 — 속성이 가질 수 있는 값의 범위"]
      integrityBox["무결성 제약조건<br/>1) 개체 무결성 — 기본키는 NULL·중복 불가<br/>2) 참조 무결성 — 외래키는 참조 테이블에 존재해야 함<br/>3) 도메인 무결성 — 속성 값은 정의된 도메인 범위 내"]
    algebraBox["관계대수 연산자(실기)<br/>1) Select(σ) — 조건에 맞는 행(튜플) 추출<br/>2) Project(π) — 지정한 열(속성) 추출, 중복 제거<br/>3) Join(⋈) — 공통 속성으로 두 릴레이션 결합<br/>4) Division(÷) — R÷S, S의 모든 값을 포함하는 R의 튜플 반환"]
    normBox["정규화 단계(암기: 도-부-이-결-다-조, 실기)<br/>1) 1NF — 도메인이 원자값으로만 구성<br/>2) 2NF — 부분 함수 종속 제거<br/>3) 3NF — 이행적 함수 종속 제거<br/>4) BCNF — 결정자가 아닌 후보키 제거(모든 결정자=후보키)<br/>5) 4NF — 다치 종속 제거<br/>6) 5NF — 조인 종속성 제거"]
    sqlBox["SQL 분류<br/>1) DDL — CREATE·ALTER·DROP·TRUNCATE, 구조 정의<br/>2) DML — SELECT·INSERT·UPDATE·DELETE, 데이터 조작<br/>3) DCL — GRANT·REVOKE, 권한 제어<br/>4) TCL — COMMIT·ROLLBACK, 트랜잭션 제어"]
    트랜잭션 관리
      acidBox["ACID 특성<br/>1) 원자성 — 전부 반영되거나 전부 취소<br/>2) 일관성 — 트랜잭션 전후 데이터 일관성 유지<br/>3) 격리성 — 동시 실행 트랜잭션은 서로 영향 없음<br/>4) 영속성 — 완료된 결과는 영구적으로 반영"]
      병행제어 로킹 2PL 타임스탬프 MVCC
      recoveryBox["회복 기법(실기)<br/>1) REDO — 로그를 이용해 완료된 트랜잭션을 재실행<br/>2) UNDO — 미완료 트랜잭션의 작업을 취소<br/>3) Checkpoint — 회복 시작 시점을 기록해 회복 시간 단축"]`,
};
