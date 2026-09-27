import type { MindmapSection } from "@/types/mindmap";

export const communicationNetworkMindmap: MindmapSection = {
  id: "communication-network",
  title: "정보통신네트워크",
  description: "OSI/TCP-IP 계층·라우팅, 무선·이동통신, 구내통신망·방송공동수신",
  chart: `mindmap
  root((정보통신네트워크))
    OSI 7계층과 TCP IP 스택
      l2Box["데이터링크 계층(L2)<br/>1) HDLC, PPP<br/>2) 이더넷 — IEEE 802.3 프레임 구조, CSMA/CD<br/>3) IEEE 802.1Q — VLAN 태깅"]
      l3Box["네트워크 계층(L3)(실기)<br/>1) IPv4/IPv6 헤더 비교<br/>2) 서브넷 마스크(CIDR) — VLSM 분할·네트워크·브로드캐스트 주소 계산<br/>3) 사설 IP 대역, NAT, ARP/RARP, ICMP, IGMP"]
      routingBox["라우팅 프로토콜(실기)<br/>1) IGP 거리벡터 — RIP, 벨만-포드(Bellman-Ford), 최대 15홉, 스플릿 호라이즌<br/>2) IGP 링크상태 — OSPF, 다익스트라(Dijkstra) SPF, Area 분할(Area 0 백본)<br/>3) EGP — BGP-4, 경로벡터, AS 간 라우팅"]
      l4l7Box["전송·응용 계층(L4~L7)(실기)<br/>1) TCP — 3-way handshake(SYN→SYN,ACK→ACK), 순서제어, 혼잡제어(Slow Start)<br/>2) UDP — 비연결형<br/>3) 응용 — DNS, DHCP(DORA), HTTP/1.1 vs HTTP/2(Multiplexing) vs HTTP/3(QUIC)"]
    무선 및 이동통신 인프라
      wifiBox["무선 LAN 세대별 특징<br/>1) 802.11n(Wi-Fi 4) → ac(Wi-Fi 5) → ax(Wi-Fi 6/6E, OFDMA)<br/>2) 802.11be(Wi-Fi 7) — 320MHz 대역폭, 4096-QAM, MLO(Multi-Link Operation)"]
      mobileBox["이동통신 진화와 5G 서비스(실기)<br/>1) 4G LTE-A — CA, CoMP<br/>2) 5G NR — NSA/SA, 밀리미터파, Massive MIMO, 빔포밍, 네트워크 슬라이싱<br/>3) 5G 3대 시나리오 — eMBB(초고속), URLLC(초저지연·고신뢰), mMTC(대규모 IoT 연결)"]
    구내통신망 및 배선 설비
      premiseBox["구내통신 배선 계층<br/>1) MDF(주배선반) → 간선계(구내간선/건물간선) → IDF(중간배선반)<br/>2) 수평배선계 → 인출구"]
      matvBox["방송공동수신설비<br/>1) MATV, SMATV<br/>2) 지상파/위성 헤드엔드, 광분배망"]
    차세대 네트워크 기술
      sdnBox["SDN과 NFV<br/>1) SDN — 제어평면과 데이터평면을 분리, 컨트롤러가 OpenFlow로 스위치 제어<br/>2) NFV — 방화벽·로드밸런서 등 네트워크 기능을 범용 서버의 소프트웨어로 가상화"]
      ipv6Box["IPv6 주소체계(실기)<br/>1) 128비트 주소 — 16비트씩 8그룹, 콜론으로 구분한 16진수 표기<br/>2) :: — 연속된 0 그룹을 축약 표기, 주소 하나에 단 1회만 사용 가능<br/>3) 주소 유형 — 유니캐스트, 애니캐스트, 멀티캐스트(브로드캐스트 없음)"]
    MPLS와 네트워크 보안장비
      mplsBox["MPLS 라벨 스위칭<br/>1) 패킷 헤더 앞에 라벨(Label)을 부착해 IP 룩업 없이 고속 스위칭<br/>2) LSP(Label Switched Path) — 라벨 기반으로 설정된 전용 경로<br/>3) FEC(Forwarding Equivalence Class) — 동일하게 전달 처리할 패킷 그룹 분류 기준"]
      securityDeviceBox["네트워크 보안장비<br/>1) 방화벽 — 패킷 필터링(단순 헤더 검사) vs 상태기반 검사(Stateful Inspection, 세션 상태 추적)<br/>2) IDS — 침입을 탐지해 관리자에게 알림(수동적)<br/>3) IPS — 탐지 즉시 트래픽을 차단(능동적)"]`,
};
