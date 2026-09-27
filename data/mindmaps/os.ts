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
    운영체제 종류
      일괄처리 Batch
      다중프로그래밍
      시분할 Time Sharing
      다중처리 Multi Processing
      실시간 Real Time
      분산처리 Distributed
    메모리 관리
      캐시 메모리 사상 방법
        직접 사상
        연관 사상
        집합 연관 사상
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
      선점 스케줄링
        Round Robin
        SRT
        MLQ
        MLFQ
      비선점 스케줄링
        FCFS
        SJF
        HRN
    교착상태 Deadlock
      발생 조건
        상호배제
        점유와 대기
        비선점
        환형대기
      deadlockBox["대응 기법<br/>1) 예방 — 발생 조건 중 하나를 제거<br/>2) 회피 — 은행원 알고리즘으로 안전상태 유지<br/>3) 발견 — 자원할당그래프로 순환 탐지<br/>4) 회복 — 희생자를 선택해 자원 회수"]
    diskBox["디스크 스케줄링<br/>1) FCFS — 요청 순서대로 처리<br/>2) SSTF — 가장 가까운 요청 우선 처리<br/>3) SCAN — 엘리베이터처럼 한 방향 이동<br/>4) C-SCAN — 바깥에서 안쪽 한 방향으로만 처리"]`,
};
