import type { MindmapSection } from "@/types/mindmap";

export const firmwareMindmap: MindmapSection = {
  id: "firmware",
  title: "임베디드 펌웨어 (부팅·인터럽트·크로스 툴체인)",
  description: "부트로더 4단계 파이프라인, 벡터테이블과 문맥교환, 툴체인·바이너리 유틸리티·디버깅",
  chart: `mindmap
  root((임베디드 펌웨어))
    부팅 시퀀스와 부트로더
      bootPipelineBox["4단계 부팅 파이프라인(실기)<br/>1) ROM Bootloader(BL0)<br/>2) SPL(BL1) — SRAM 초기화<br/>3) U-Boot(BL2) — DRAM 로드<br/>4) OS Kernel"]
      ubootInitBox["U-Boot 저수준 초기화<br/>1) 인터럽트 차단, 워치독 비활성화<br/>2) 클록(PLL) 설정, 스택 설정, 메모리 컨트롤러 초기화"]
      ubootCmdBox["U-Boot 환경변수·명령(실기)<br/>1) bootargs — 커널 전달 인자<br/>2) bootcmd — 자동 부팅 명령<br/>3) tftp, nfs, saveenv<br/>4) bootz 커널주소 initrd주소 dtb주소 — zImage+dtb 메모리 부팅"]
      startupBox["베어메탈 스타트업 코드 필수 작업<br/>1) 메인 스택 포인터(SP) 초기화<br/>2) .data 섹션을 플래시→SRAM으로 복사<br/>3) .bss 섹션을 0으로 클리어<br/>4) 클록·벡터 오프셋 설정 후 main() 진입"]
    인터럽트와 예외 처리
      vectorBox["벡터 테이블<br/>1) 베이스 0x00000000 또는 0xFFFF0000(하이벡터)<br/>2) Reset, Undef, SVC, PAbort, DAbort, IRQ, FIQ"]
      controllerBox["인터럽트 컨트롤러<br/>1) NVIC — Nested Vectored Interrupt Controller(Cortex-M)<br/>2) GIC — Generic Interrupt Controller(Cortex-A)"]
      contextSwitchBox["문맥 교환(실기)<br/>1) CPSR→SPSR 백업, PC→LR 보관<br/>2) 스택에 R0~R12 푸시<br/>3) 복귀 시 SPSR→CPSR 복원<br/>4) SVC(구 SWI) 명령 — 사용자모드에서 특권모드로 전환해 커널 시스템콜 핸들러로 진입"]
    크로스 툴체인과 하드웨어 디버깅
      toolchainBox["툴체인 빌드 체계<br/>1) arm-none-eabi-gcc — 베어메탈용<br/>2) aarch64-linux-gnu-gcc — 리눅스용"]
      binutilBox["바이너리 유틸리티(실기)<br/>1) objdump — 역어셈블 분석<br/>2) objcopy — ELF를 BIN/HEX로 변환해 플래시 롬라이팅용 순수 바이너리 추출<br/>3) readelf, nm<br/>4) strip — ELF 포맷 유지한 채 디버그 심볼만 제거"]
      debugIfBox["디버깅 인터페이스<br/>1) JTAG(IEEE 1149.1) — TCK, TMS, TDI, TDO, TRST<br/>2) SWD — 2선 직렬와이어(SWDIO, SWCLK)<br/>3) GDB Server"]`,
};
