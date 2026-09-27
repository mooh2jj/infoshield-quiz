import type { MindmapSection } from "@/types/mindmap";

export const networkEquipmentMindmap: MindmapSection = {
  id: "network-equipment",
  title: "네트워크 운용기기",
  description: "L1~L7 장비, 스위칭·VLAN·STP, 라우팅 프로토콜, Cisco CLI 실기",
  chart: `mindmap
  root((네트워크 운용기기))
    네트워크 장비 계층별 분류
      l1l2DeviceBox["L1~L2 장비<br/>1) NIC, 리피터(신호 증폭)<br/>2) 더미 허브 — 충돌 도메인 공유<br/>3) L2 스위치 — 포트별 충돌 도메인 분리, MAC 학습/플러딩/포워딩/필터링/에이징"]
      l3l7DeviceBox["L3~L7 장비<br/>1) L3 스위치 — 하드웨어 기반 고속 IP 라우팅, 라우터 — 브로드캐스트 도메인 분리<br/>2) L4 스위치 — SLB 부하분산(Round Robin, Weighted, Least Connection)<br/>3) L7 스위치 — 페이로드(URL/쿠키) 기반 트래픽 제어"]
    스위칭과 VLAN 기술
      frameProcessBox["프레임 처리 방식<br/>1) Store-and-Forward — 프레임 전체 수신 후 에러 검증<br/>2) Cut-Through — 목적지 MAC만 읽고 즉시 전송<br/>3) Fragment-Free — 앞 64바이트만 충돌 검사"]
      vlanBox["VLAN(가상 LAN)<br/>1) 포트 기반 VLAN<br/>2) IEEE 802.1Q — 4바이트 태깅, TPID 0x8100 + TCI VID 12비트<br/>3) 트렁킹(Trunking) — 여러 VLAN 트래픽을 한 링크로 전달"]
      stpBox["루핑 방지 프로토콜(실기)<br/>1) STP(IEEE 802.1D) — Root Bridge 선출<br/>2) 포트 상태 전이 — Blocking → Listening(BPDU 송수신, 역할 결정) → Learning(MAC 학습) → Forwarding<br/>3) RSTP(802.1w) — 빠른 수렴"]
    라우팅 프로토콜
      staticDynamicBox["정적 vs 동적 라우팅<br/>1) 정적 라우팅(Static Route) — 관리자가 직접 경로 설정<br/>2) 동적 라우팅(Dynamic Route) — 프로토콜이 경로를 자동 계산"]
      dvBox["거리 벡터(Distance Vector)<br/>1) RIPv1/v2 — 벨만-포드, 홉수 메트릭, 최대 15홉 제한<br/>2) 루핑 방지 — Split Horizon, Route Poisoning, Poison Reverse"]
      lsBox["링크 상태(Link State)<br/>1) OSPF — 다익스트라 알고리즘, Cost 메트릭<br/>2) 계층형 Area 구조, DR/BDR 선출"]
      pvBox["경로 벡터(Path Vector)<br/>1) BGP-4 — AS 간 라우팅 프로토콜<br/>2) TCP 179번 포트 사용"]
    Cisco 라우터 CLI 실기
      ciscoInterfaceBox["기본 관리와 서브인터페이스(실기)<br/>1) enable → configure terminal → interface 진입 후 ip address, no shutdown(필수) 순서로 활성화<br/>2) Router-on-a-Stick — 서브인터페이스에서 encapsulation dot1Q [VLAN]을 ip address보다 반드시 먼저 입력"]
      ciscoRoutingBox["라우팅 설정(실기)<br/>1) 정적 라우팅 — ip route [목적지네트워크] [서브넷마스크] [Next-Hop-IP]<br/>2) 기본 경로 — ip route 0.0.0.0 0.0.0.0 [Next-Hop-IP]<br/>3) RIPv2 — router rip → version 2 → no auto-summary → network [주소]"]
      ciscoVtyBox["콘솔·VTY 보안과 저장(실기)<br/>1) line console 0 / line vty 0 4 → password → login → exec-timeout [분] [초]<br/>2) copy running-config startup-config — NVRAM 저장 누락 시 재부팅 후 설정 소실"]
    도메인 분리와 게이트웨이 이중화
      domainBox["충돌 도메인과 브로드캐스트 도메인<br/>1) 더미 허브 — 모든 포트가 하나의 충돌 도메인 공유<br/>2) L2 스위치 — 포트별로 충돌 도메인은 분리되지만 브로드캐스트 도메인은 공유<br/>3) 라우터 — 브로드캐스트 도메인까지 분리"]
      hsrpBox["게이트웨이 이중화(HSRP/VRRP)(실기)<br/>1) 두 대 이상의 라우터가 하나의 가상 IP·가상 MAC을 공유<br/>2) Active 라우터가 트래픽을 처리, Standby는 대기<br/>3) Active 장애 시 Standby가 가상 IP를 자동으로 인수해 게이트웨이 단절을 방지"]`,
};
