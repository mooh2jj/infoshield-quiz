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
    regBox["레지스터 종류<br/>1) MAR — 메모리 주소 레지스터<br/>2) MBR — 메모리 버퍼 레지스터<br/>3) IR — 실행 중인 명령어 저장<br/>4) PC — 다음 명령어 주소 저장<br/>5) AC — 연산 결과 임시 저장"]
    cycleBox["명령어 실행 사이클<br/>1) Fetch — 메모리에서 명령어를 읽어옴<br/>2) Indirect — 간접 주소면 실제 주소 재참조<br/>3) Execute — CPU가 명령어를 실행<br/>4) Interrupt — 인터럽트 발생 여부 확인"]
    인터럽트
      내부 인터럽트
        프로그램 오류
        SVC 트랩
      외부 인터럽트
        정전 기계 착오
        입출력 요청
      interruptBox["처리 순서<br/>1) 인터럽트 발생<br/>2) 현재 상태 저장<br/>3) 서비스 루틴 실행<br/>4) 상태 복구 후 재개"]
    명령어 주소 지정 방식
      즉시 주소
      직접 주소
      간접 주소
      레지스터 주소`,
};
