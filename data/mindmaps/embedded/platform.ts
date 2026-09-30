import type { MindmapSection } from "@/types/mindmap";

export const platformMindmap: MindmapSection = {
  id: "platform",
  title: "임베디드 플랫폼 (RTOS·임베디드 리눅스·동기화·파일시스템)",
  description: "RTOS 결정론적 특성, 동기화 프리미티브와 우선순위 역전, 메모리 할당, 플래시 파일시스템",
  chart: `mindmap
  root((임베디드 플랫폼))
    임베디드 운영체제 구조
      rtosBox["RTOS(실기)<br/>1) FreeRTOS, μC/OS, VxWorks<br/>2) 결정론적(Deterministic) — 데드라인 내 응답을 수학적으로 보장, 평균 처리량이 아닌 예측가능성이 핵심<br/>3) 선점형 우선순위 스케줄링, 틱 타이머"]
      linuxBox["Embedded Linux<br/>1) 커널(Kernel)<br/>2) 디바이스 트리(DTS/DTB)<br/>3) 툴체인 — Glibc/Musl<br/>4) 루트 파일시스템 — BusyBox, Buildroot, Yocto"]
    커널 동기화 메커니즘과 실시간성
      syncPrimBox["동기화 프리미티브(실기)<br/>1) 뮤텍스(Mutex) — 소유권 개념 존재, 우선순위 상속 자체 지원<br/>2) 세마포어 — Counting/Binary, 소유권 없음<br/>3) 스핀락(Spinlock) — 슬립 불가, 바쁜 대기, 임계구역 내 msleep·copy_to_user·kmalloc(GFP_KERNEL) 호출 금지(교착 위험)"]
      priorityInvBox["우선순위 역전과 해결 프로토콜<br/>1) 우선순위 역전(Priority Inversion) — 저우선순위 태스크가 락을 쥔 채 고우선순위 태스크를 막는 현상<br/>2) 우선순위 상속(Priority Inheritance) — 대기 중인 고순위 태스크의 우선순위로 동적 상향, FreeRTOS 뮤텍스가 지원해 기아(Starvation) 방지<br/>3) 우선순위 천장(Priority Ceiling) — 자원 획득 즉시 사전 정의된 최고 우선순위로 상향"]
      memAllocBox["커널 메모리 할당<br/>1) kmalloc — 물리적·가상적 연속, DMA용, 빠름(버디+슬랩)<br/>2) vmalloc — 가상연속·물리비연속, 대용량 버퍼, 페이지테이블 재구성으로 느림"]
    임베디드 전용 파일시스템
      flashFsBox["플래시 메모리 전용<br/>1) UBIFS — UBI 계층 기반 대용량 고성능<br/>2) JFFS2, YAFFS2 — 웨어 레벨링, 배드 블록 관리"]
      rofsBox["읽기 전용/램 파일시스템<br/>1) SquashFS — 높은 압축률, 부팅 RootFS 표준<br/>2) initramfs/initrd — 램디스크 메모리 임시 파일시스템"]`,
};
