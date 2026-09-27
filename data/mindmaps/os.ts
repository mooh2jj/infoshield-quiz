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
      페이지 교체 기법
        FIFO
        LRU
        LFU
        Optimal
        NUR
        SCR
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
      예방 Prevention
      회피 Avoidance 은행원 알고리즘
      발견 Detection 자원할당그래프
      회복 Recovery 희생자 선택
    디스크 스케줄링
      FCFS
      SSTF
      SCAN 엘리베이터
      C SCAN`,
  notes: [
    {
      term: "페이지 교체 기법",
      items: [
        "FIFO — 가장 먼저 들어온 페이지를 교체",
        "LRU — 가장 오래 사용되지 않은 페이지를 교체",
        "LFU — 사용 빈도가 가장 낮은 페이지를 교체",
        "Optimal — 앞으로 가장 늦게 사용될 페이지를 교체(이론적 최적값)",
      ],
    },
    {
      term: "교착상태 대응 기법",
      items: [
        "예방 — 4가지 발생 조건 중 하나를 원천적으로 제거",
        "회피 — 은행원 알고리즘으로 안전 상태만 허용",
        "발견 — 자원할당 그래프로 순환 대기를 탐지",
        "회복 — 희생 프로세스를 선택해 자원을 회수",
      ],
    },
    {
      term: "디스크 스케줄링",
      items: [
        "FCFS — 요청 들어온 순서대로 처리",
        "SSTF — 현재 위치에서 가장 가까운 요청을 우선 처리",
        "SCAN — 엘리베이터처럼 한 방향으로 이동하며 처리",
        "C-SCAN — 항상 바깥에서 안쪽 한 방향으로만 처리",
      ],
    },
  ],
};
