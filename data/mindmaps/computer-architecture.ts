import type { MindmapSection } from "@/types/mindmap";

export const computerArchitectureMindmap: MindmapSection = {
  id: "computer-architecture",
  title: "컴퓨터 구조",
  description: "CPU·메모리·버스 구성과 명령어 실행 사이클 — 시스템 보안의 기초 체력",
  chart: `mindmap
  root((컴퓨터 구조))
    구성 요소
      중앙처리장치 CPU
        연산장치 ALU
        제어장치 CU
        레지스터
      주기억장치
        RAM 휘발성
        ROM 비휘발성
      보조기억장치
        HDD SSD
        광디스크
      입출력장치
      시스템 버스
        데이터 버스
        주소 버스
        제어 버스
    레지스터 종류
      PC 프로그램 카운터
      IR 명령 레지스터
      MAR 메모리 주소 레지스터
      MBR 메모리 버퍼 레지스터
      AC 누산기
    명령어 실행 사이클
      Fetch 인출
      Indirect 간접
      Execute 실행
      Interrupt 인터럽트
    인터럽트
      내부 인터럽트
        프로그램 오류
        SVC 트랩
      외부 인터럽트
        정전 기계 착오
        입출력 요청
      처리 순서
        인터럽트 발생
        현재 상태 저장
        서비스 루틴 실행
        상태 복구 후 재개
    명령어 주소 지정 방식
      즉시 주소
      직접 주소
      간접 주소
      레지스터 주소`,
};
