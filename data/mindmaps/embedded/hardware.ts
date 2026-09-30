import type { MindmapSection } from "@/types/mindmap";

export const hardwareMindmap: MindmapSection = {
  id: "hardware",
  title: "임베디드 하드웨어 (ARM 코어·캐시·버스·직렬통신)",
  description: "파이프라인·레지스터·해저드, 캐시 정책과 MMU/MPU, AMBA 버스와 UART/I2C/SPI/CAN",
  chart: `mindmap
  root((임베디드 하드웨어))
    프로세서 코어 아키텍처
      pipelineBox["파이프라인과 코어<br/>1) 폰 노이만 vs 하버드 구조<br/>2) 3/5/8단계 파이프라인, 슈퍼스칼라, 분기 예측<br/>3) 해저드 — 구조적(Structural), 데이터(RAW/WAR/WAW), 제어(Control)<br/>4) RAW 해저드 해결: 포워딩(Forwarding/Bypassing)"]
      registerBox["레지스터 구조(실기)<br/>1) R0~R12 — 범용 레지스터<br/>2) R13(SP) — 스택 포인터<br/>3) R14(LR) — 링크 레지스터, BL 호출 시 복귀주소 저장<br/>4) R15(PC) — 프로그램 카운터"]
      cpsrBox["상태 레지스터와 명령어 세트<br/>1) CPSR — N,Z,C,V 플래그, I/F 인터럽트 마스크, 모드 비트<br/>2) SPSR — 예외 진입 시 CPSR 백업용<br/>3) ARM-Thumb 인터워킹 — BX 명령어, 최하위 1비트(T-bit)로 모드 판별<br/>4) Thumb-2(실기) — 모드 전환 오버헤드 없이 16/32비트 가변 길이 명령어를 단일 스트림에서 혼용, Cortex-M/A에 도입"]
    메모리 서브시스템과 캐시 제어
      memHierarchyBox["메모리 계층<br/>1) 레지스터 → L1/L2 캐시 → SRAM → SDRAM/DDR → 플래시(NOR/NAND)"]
      cachePolicyBox["캐시 정책(실기)<br/>1) Write-Through — 캐시·메모리 동시 기록, 일관성 쉬움, 버스 트래픽 큼<br/>2) Write-Back — 캐시만 먼저 기록 후 Dirty 비트 마킹, 교체/플러시 시 메모리 반영, DMA 시 Coherency 문제 주의<br/>3) 일관성 유지 — 플러시(Flush), 클린(Clean), 인벌리데이트(Invalidate)"]
      mmuBox["가상 메모리 보호<br/>1) MMU — TLB·페이지 테이블 기반 가상-물리 주소 변환<br/>2) MPU — 영역 단위 메모리 보호(페이징 없음)"]
    버스 구조와 직렬 통신 인터페이스
      busBox["온칩 버스(AMBA)와 매핑<br/>1) AXI — 고성능 파이프라인/비동기<br/>2) AHB — 고속 시스템 버스<br/>3) APB — 저전력 주변장치 버스<br/>4) Memory-Mapped I/O(LDR/STR) vs I/O-Mapped I/O(x86 IN/OUT)"]
      serialBox["주변장치 통신 프로토콜(실기)<br/>1) UART — 비동기 전이중, 보레이트 분주기, FIFO/링버퍼<br/>2) I2C — 동기 반이중 2선(SDA,SCL), 오픈드레인+풀업, 7/10비트 주소, ACK/NACK, 클록 스트레칭(슬레이브가 SCL을 LOW로 고정)<br/>3) SPI — 동기 전이중 4선(MOSI,MISO,SCK,CS), CPOL/CPHA 4모드<br/>4) CAN — 차동 2선(CAN_H/L), 120옴 종단, 우성비트(0)가 열성비트(1)를 이기는 비파괴 중재 — ID값 작을수록 우선순위 높음<br/>5) DMA — CPU 개입 없는 블록 전송, 버스트 모드 vs 사이클 스틸링"]`,
};
