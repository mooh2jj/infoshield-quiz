import type { MindmapSection } from "@/types/mindmap";

export const softwareMindmap: MindmapSection = {
  id: "software",
  title: "임베디드 소프트웨어 (디바이스 드라이버·비트연산·IPC)",
  description: "문자 디바이스 드라이버와 인터럽트 하반부, 비트 매크로·구조체 패킹·엔디안, IPC와 전원관리",
  chart: `mindmap
  root((임베디드 소프트웨어))
    리눅스 디바이스 드라이버 개발
      driverTypeBox["드라이버 3대 분류와 번호 체계<br/>1) 문자(Char), 블록(Block), 네트워크(Network) 디바이스<br/>2) 주번호(Major) — 드라이버 식별<br/>3) 부번호(Minor) — 물리 장비 번호"]
      fopsBox["핵심 인터페이스(실기)<br/>1) struct file_operations — .open, .release, .read, .write, .unlocked_ioctl<br/>2) ioctl() — 속도변경·버퍼플러시·모터방향 등 하드웨어 특화 제어, .unlocked_ioctl과 매핑<br/>3) copy_to_user(), copy_from_user() — 유저·커널 공간 간 포인터 직접 참조 금지, 반드시 경유"]
      bottomHalfBox["인터럽트 상/하반부(실기)<br/>1) Top-Half(ISR) — 인터럽트 콘텍스트, 신속 처리<br/>2) Tasklet — Softirq 기반 인터럽트 콘텍스트, 절대 Sleep 불가<br/>3) Workqueue — 커널 스레드(Worker Thread) 콘텍스트, Sleep·메모리할당·I/O 대기 등 블로킹 작업 가능"]
    임베디드 C 코어 프로그래밍
      keywordBox["C 키워드<br/>1) volatile — 컴파일러 캐싱/순서변경 최적화 방지, 레지스터·ISR 전역변수 필수<br/>2) const, static"]
      bitMacroBox["비트 단위 연산 매크로(실기 100% 빈출)<br/>1) Set — reg |= (1 << bit)<br/>2) Clear — reg &= ~(1 << bit)<br/>3) Toggle — reg ^= (1 << bit)<br/>4) Check — reg & (1 << bit)<br/>5) 다중비트: reg = (reg & ~(mask << shift)) | ((val & mask) << shift)"]
      structPackBox["구조체 패킹과 엔디안<br/>1) #pragma pack(1) 또는 __attribute__((packed)) — 패딩 제거, 네트워크 패킷/HW 헤더 바이트 정렬<br/>2) 기본 4바이트 정렬 예: char(1)+int(4)+short(2) → 패딩 포함 12바이트, pack(1) 시 7바이트<br/>3) 엔디안 — 리틀(ARM/x86, LSB 우선) vs 빅(네트워크 바이트순서, MSB 우선)"]
      ringBufBox["락-프리 링 버퍼(실기)<br/>1) SPSC 구조 — head는 생산자(ISR)만, tail은 소비자(메인태스크)만 갱신<br/>2) 두 인덱스 모두 volatile 필수 — 컴파일러 캐싱 방지<br/>3) 별도 뮤텍스/인터럽트 락 없이 경쟁상태(Race Condition) 회피"]
    프로세스 간 통신과 저전력 설계
      ipcBox["IPC 기법<br/>1) 파이프(Pipe), 메시지 큐<br/>2) 공유 메모리(Shared Memory) — 최고 속도, 별도 동기화 필요<br/>3) 유닉스 도메인 소켓"]
      pmBox["전원 관리(PM)<br/>1) DVFS — 동적 전압 및 주파수 스케일링<br/>2) Sleep/Stop/Standby 모드<br/>3) 웨이크업 인터럽트"]`,
};
