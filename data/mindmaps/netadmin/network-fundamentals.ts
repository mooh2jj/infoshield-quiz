import type { MindmapSection } from "@/types/mindmap";

export const networkFundamentalsMindmap: MindmapSection = {
  id: "network-fundamentals",
  title: "네트워크 일반",
  description: "네트워크 분류·토폴로지, OSI 7계층, 매체 접근 제어, UTP 케이블 제작 실기",
  chart: `mindmap
  root((네트워크 일반))
    네트워크 분류와 전송 방식
      classifyBox["네트워크 규모별 분류<br/>1) LAN, MAN, WAN, PAN<br/>2) WLAN — 무선 LAN<br/>3) SAN(Storage Area Network) — 스토리지 전용 네트워크"]
      transmissionBox["전송 방식과 회선 구성<br/>1) Simplex(단방향), Half-Duplex(양방향 교대), Full-Duplex(양방향 동시)<br/>2) Point-to-Point(1대1), Multi-Point(1대다)"]
    토폴로지
      topologyBox["토폴로지 종류와 특징<br/>1) Star(성형) — 중앙 집중 허브, 장애 국소화 용이<br/>2) Bus(버스형) — 양 끝단에 터미네이터 필요<br/>3) Ring(링형) — 토큰 패싱 방식<br/>4) Mesh(그물형) — 노드 N개일 때 최대 N(N-1)/2 링크<br/>5) Tree(계층형)"]
    OSI 7계층 참조 모델
      osiLowerBox["하위 계층(L1~L4)<br/>1) 물리(L1) — 비트, 리피터, 더미 허브, UTP/STP, 광섬유<br/>2) 데이터링크(L2) — 프레임, MAC 주소(48비트=OUI 24비트+UAA 24비트), 브리지<br/>3) 네트워크(L3) — 패킷, 논리주소(IP), 라우터<br/>4) 전송(L4) — 세그먼트, 포트 번호(16비트), TCP(신뢰성) vs UDP(고속성)"]
      osiUpperBox["상위 계층(L5~L7)<br/>1) 세션(L5) — 동기점(주동기·보조동기), 대화 제어, 연결 설정/유지/종료<br/>2) 표현(L6) — 데이터 포맷 변환(ASCII, EBCDIC), 암호화(SSL/TLS), 압축(JPEG, MPEG)<br/>3) 응용(L7) — HTTP, FTP, SMTP, DNS, DHCP"]
    매체 접근 제어
      macBox["매체 접근 제어(MAC) 방식<br/>1) CSMA/CD — 유선 이더넷(IEEE 802.3), 충돌을 검출한 뒤 재전송<br/>2) CSMA/CA — 무선랜(IEEE 802.11), RTS/CTS로 가상 반송파 감지 후 충돌을 회피"]
    UTP 케이블 제작 실기
      utpBox["T568B 다이렉트 케이블(실기)<br/>1) 색상 순서 — 주황줄무늬-주황-초록줄무늬-파랑-파랑줄무늬-초록-갈색줄무늬-갈색<br/>2) 다이렉트(양쪽 T568B) — 서로 다른 계층 장비 연결(PC-스위치, 라우터-스위치)<br/>3) 크로스오버(한쪽 T568A, 한쪽 T568B) — 동일 계층 장비 연결(PC-PC, 스위치-스위치)"]
    PDU 캡슐화와 케이블 표준
      pduBox["계층별 PDU 이름과 캡슐화<br/>1) 응용·표현·세션(L5~L7) — Data<br/>2) 전송(L4) — Segment, 네트워크(L3) — Packet, 데이터링크(L2) — Frame, 물리(L1) — Bit<br/>3) 송신 시 각 계층 헤더를 덧붙이는 캡슐화, 수신 시 헤더를 벗기는 역캡슐화(디캡슐화)"]
      t568aBox["T568A 색상 순서와 표준 비교(실기)<br/>1) T568A — 초록줄무늬-초록-주황줄무늬-파랑-파랑줄무늬-주황-갈색줄무늬-갈색<br/>2) T568A는 3번과 1번(초록/주황 그룹) 위치가 T568B와 서로 교차됨<br/>3) 국내는 T568B가 표준, 미국 관공서 등은 T568A를 사용하기도 함"]`,
};
