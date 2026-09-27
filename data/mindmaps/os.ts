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
};
