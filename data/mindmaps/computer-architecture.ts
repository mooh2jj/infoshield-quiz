import type { MindmapSection } from "@/types/mindmap";

export const computerArchitectureMindmap: MindmapSection = {
  id: "computer-architecture",
  title: "컴퓨터 구조",
  description: "CPU·메모리·버스 구성과 명령어 실행 사이클 — 시스템 보안의 기초 체력",
  chart: `mindmap
  root((컴퓨터 구조))
    구성 요소
      cpuBox["CPU 구성요소<br/>1) ALU — 산술·논리 연산을 수행<br/>2) CU — 명령어를 해석해 제어신호 생성<br/>3) 레지스터 — 데이터를 임시로 고속 저장"]
      주기억장치
        RAM 휘발성
        ROM 비휘발성
      보조기억장치
        HDD SSD
        광디스크
      입출력장치
      busBox["시스템 버스 종류<br/>1) 데이터 버스 — 실제 데이터를 전송<br/>2) 주소 버스 — 접근할 메모리 주소를 전달<br/>3) 제어 버스 — 읽기·쓰기 등 제어 신호를 전달"]
      hwCmdBox["하드웨어 확인 명령어(실기)<br/>1) lscpu — CPU 정보 확인<br/>2) free -h — 메모리 사용량 확인<br/>3) df -h — 디스크 사용량 확인<br/>4) dmesg — 부팅 시 하드웨어 인식 로그 확인"]
    regBox["레지스터 종류<br/>1) MAR — 메모리 주소 레지스터<br/>2) MBR — 메모리 버퍼 레지스터<br/>3) IR — 실행 중인 명령어 저장<br/>4) PC — 다음 명령어 주소 저장<br/>5) AC — 연산 결과 임시 저장"]
    cycleBox["명령어 실행 사이클<br/>1) Fetch — 메모리에서 명령어를 읽어옴<br/>2) Indirect — 간접 주소면 실제 주소 재참조<br/>3) Execute — CPU가 명령어를 실행<br/>4) Interrupt — 인터럽트 발생 여부 확인"]
    인터럽트
      typeBox["인터럽트 종류<br/>1) 내부 인터럽트 — 프로그램 오류, SVC 트랩<br/>2) 외부 인터럽트 — 정전·기계 착오, 입출력 요청"]
      interruptBox["처리 순서<br/>1) 인터럽트 발생<br/>2) 현재 상태 저장<br/>3) 서비스 루틴 실행<br/>4) 상태 복구 후 재개"]
    addrBox["명령어 주소 지정 방식<br/>1) 즉시 주소 — 명령어에 값을 직접 포함<br/>2) 직접 주소 — 메모리 주소를 직접 지정<br/>3) 간접 주소 — 주소가 저장된 주소를 지정<br/>4) 레지스터 주소 — 레지스터에 저장된 값을 사용"]`,
};
