import type { MindmapSection } from "@/types/mindmap";

export const osMindmap: MindmapSection = {
  id: "os",
  title: "운영체제",
  description: "메모리 관리·스케줄링·교착상태 — 컴퓨터 구조 위에 쌓는 두 번째 층",
  chart: `mindmap
  root((운영체제))
    구성 3요소
      커널 Kernel
      셸 Shell
      파일시스템
    osTypeBox["운영체제 종류<br/>1) Batch — 작업을 모아 순차적·일괄 처리<br/>2) Multi Programming — 여러 프로그램을 동시 기동<br/>3) Time Sharing — 시간을 분할해 CPU 공유<br/>4) Multi Processing — 여러 CPU로 처리<br/>5) Real Time — 정해진 시간 내 실시간 처리<br/>6) Distributed — 네트워크로 분산된 자원을 처리"]
    메모리 관리
      cacheBox["캐시 메모리 사상 방법<br/>1) 직접 사상 — 특정 블록만 매핑, 구현 간단<br/>2) 연관 사상 — 아무 위치에나 매핑, 검색 가장 빠름<br/>3) 집합 연관 사상 — 두 방식을 절충"]
      가상 메모리 할당 기법
        페이징
        세그멘테이션
      pageBox["페이지 교체 기법<br/>1) FIFO — 가장 먼저 들어온 페이지 교체<br/>2) LRU — 가장 오래 안 쓴 페이지 교체<br/>3) LFU — 사용 빈도가 가장 낮은 페이지 교체<br/>4) Optimal — 이후 가장 늦게 쓰일 페이지 교체<br/>5) NUR — 참조비트로 근사 판단<br/>6) SCR — 참조비트로 2차 기회 부여"]
      페이지 부재 예방
        Locality
        Working Set
        PFF
      배치 기법
        First Fit
        Next Fit
        Best Fit
        Worst Fit
    CPU 스케줄링
      프로세스 상태 전이
        준비 실행 대기
      schedBox["스케줄링 방식<br/>1) 선점 — 우선순위 높은 프로세스가 끼어듦, Round Robin·SRT·MLQ·MLFQ<br/>2) 비선점 — 실행 중인 프로세스를 끝까지 실행, FCFS·SJF·HRN"]
    교착상태 Deadlock
      발생 조건
        상호배제
        점유와 대기
        비선점
        환형대기
      deadlockBox["대응 기법<br/>1) 예방 — 발생 조건 중 하나를 제거<br/>2) 회피 — 은행원 알고리즘으로 안전상태 유지<br/>3) 발견 — 자원할당그래프로 순환 탐지<br/>4) 회복 — 희생자를 선택해 자원 회수"]
    diskBox["디스크 스케줄링<br/>1) FCFS — 요청 순서대로 처리<br/>2) SSTF — 가장 가까운 요청 우선 처리<br/>3) SCAN — 엘리베이터처럼 한 방향 이동<br/>4) C-SCAN — 바깥에서 안쪽 한 방향으로만 처리"]`,
};
