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
  notes: [
    {
      term: "레지스터 종류",
      items: [
        "MAR — 메모리 주소 레지스터, 접근할 주소를 저장",
        "MBR — 메모리 버퍼 레지스터, 읽거나 쓸 데이터를 저장",
        "IR — 현재 실행 중인 명령어를 저장",
        "PC — 다음에 실행할 명령어의 주소를 저장",
      ],
    },
    {
      term: "명령어 실행 사이클",
      items: [
        "Fetch — 메모리에서 명령어를 읽어옴",
        "Indirect — 간접 주소 지정이면 실제 주소를 다시 참조",
        "Execute — CPU가 명령어를 실행",
        "Interrupt — 인터럽트 발생 여부를 확인",
      ],
    },
    {
      term: "인터럽트 처리 순서",
      items: [
        "인터럽트 발생",
        "현재 프로세스 상태 저장",
        "인터럽트 서비스 루틴 실행",
        "저장된 상태 복구 후 재개",
      ],
    },
  ],
};
