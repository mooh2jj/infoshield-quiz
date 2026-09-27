import type { MindmapSection } from "@/types/mindmap";

export const programmingOsMindmap: MindmapSection = {
  id: "programming-os",
  title: "프로그래밍 언어 활용",
  description: "C·Java·Python 핵심 문법과 운영체제 프로세스·메모리 관리",
  chart: `mindmap
  root((프로그래밍 언어 활용))
    언어별 핵심 문법
      cBox["C 언어 핵심(실기)<br/>1) *p — 포인터가 가리키는 값(역참조)<br/>2) &var — 변수의 메모리 주소<br/>3) 문자열은 널문자로 끝을 표시<br/>4) 2차원 배열은 메모리에 1차원으로 연속 배치"]
      cArrayPointerBox["C 배열·포인터 연산 예제(실기)<br/>1) int arr[3][3]과 int *p = &arr[0][0]<br/>2) *(p + i*3 + i)로 대각선 원소에 순서대로 접근<br/>3) 대각선 원소의 합 10+50+90 = 150"]
      javaBox["Java OOP 핵심<br/>1) 캡슐화·상속·다형성·추상화가 4대 특징<br/>2) 오버라이딩 — 상속 관계에서 메서드 재정의<br/>3) 오버로딩 — 같은 이름, 다른 매개변수로 재정의<br/>4) 동적 바인딩 — 실행 시점 실제 객체의 메서드 호출"]
      javaPolyBox["Java 다형성 코드 해석 예제(실기)<br/>1) Parent p = new Child(); — 참조형은 Parent, 실제 객체는 Child<br/>2) p.print() — 동적 바인딩으로 Child의 재정의 메서드 호출<br/>3) 다운캐스팅 후 super.x — 부모 클래스의 필드 값을 직접 참조"]
      pythonBox["Python 핵심 문법<br/>1) 슬라이싱 — 리스트를 구간·역순으로 반환<br/>2) list tuple set dict — 대표 컬렉션 자료형<br/>3) lambda — 이름 없는 익명 함수 정의<br/>4) 리스트 컴프리헨션 — 반복문을 한 줄로 축약"]
      pythonSliceBox["Python 필터·슬라이싱 예제(실기)<br/>1) filter(lambda x: x % 2 != 0, data) — 조건에 맞는 값만 추출<br/>2) 리스트[::-2] — 역순으로 뒤집으며 2칸 간격으로 추출"]
    프로세스와 스케줄링
      processBox["프로세스 상태 전이<br/>1) 생성 → 준비 — 프로세스가 생성되어 대기<br/>2) 준비 → 실행 — Dispatch로 CPU 할당<br/>3) 실행 → 대기 — I/O 요청 등으로 Block<br/>4) 대기 → 준비 — 이벤트 완료 후 Wakeup"]
      threadBox["프로세스 vs 스레드<br/>1) 프로세스 — 독립된 메모리 공간을 가지는 실행 단위<br/>2) 스레드 — 프로세스 내에서 자원을 공유하며 실행되는 단위<br/>3) 스레드는 문맥 전환 비용이 프로세스보다 적음"]
      schedulingBox["CPU 스케줄링 기법<br/>1) 비선점 — FCFS(선입선출), SJF(최단작업 우선), HRN<br/>2) 선점 — Round Robin(시분할), SRT(최단잔여시간)"]
    memBox["메모리 관리 기법<br/>1) 페이징 — 고정 크기로 분할, 외부단편화 없음·내부단편화 있음<br/>2) 세그멘테이션 — 가변 크기로 분할, 논리적 단위 기준<br/>3) 페이지 교체 — FIFO·LRU·LFU·NUR 알고리즘 사용"]
    deadlockBox["교착상태(Deadlock, 실기)<br/>1) 발생 조건 — 상호배제·점유와대기·비선점·환형대기<br/>2) 예방 — 조건 중 하나를 제거<br/>3) 회피 — 은행가 알고리즘으로 안전 상태 유지<br/>4) 발견 및 회복 — 자원 할당 그래프로 탐지 후 프로세스 종료"]
    네트워크 기초
      netBox["네트워크 기본 개념<br/>1) IPv4(32bit) vs IPv6(128bit)<br/>2) 서브넷 마스크 — CIDR 표기(/26 등)로 네트워크 범위 지정<br/>3) DNS — 도메인 이름을 IP 주소로 변환<br/>4) 소켓 프로그래밍 — IP·포트 기반 통신 채널 생성"]
      cidrBox["서브넷 계산 예제(실기)<br/>1) /26 → 호스트 비트 6개, 2^6=64개 주소<br/>2) 네트워크·브로드캐스트 주소 2개 제외<br/>3) 실제 할당 가능 호스트 = 64-2 = 62개"]`,
};
