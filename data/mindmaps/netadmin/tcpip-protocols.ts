import type { MindmapSection } from "@/types/mindmap";

export const tcpipProtocolsMindmap: MindmapSection = {
  id: "tcpip-protocols",
  title: "TCP/IP 프로토콜",
  description: "IPv4/IPv6, 서브넷팅 계산, TCP/UDP, 주요 포트 번호",
  chart: `mindmap
  root((TCP IP 프로토콜))
    L3 프로토콜 상세
      ipv4Box["IPv4 헤더 구조<br/>1) 32비트 주소<br/>2) 주요 필드 — IHL, ToS/DSCP, Total Length, Identification, Flags, Fragment Offset, TTL, Protocol, Header Checksum"]
      ipv6Box["IPv6 헤더 구조<br/>1) 128비트 주소 — 16비트 8필드, 16진수 표기<br/>2) 유니캐스트/애니캐스트/멀티캐스트 — 브로드캐스트 폐지<br/>3) 기본 헤더 40바이트 고정, Flow Label(흐름 라벨) 필드로 QoS 처리"]
      arpBox["주소 해석 및 제어 프로토콜<br/>1) ARP(IP→MAC), RARP(MAC→IP)<br/>2) Gratuitous ARP — IP 충돌 검출, ARP 테이블 갱신<br/>3) Proxy ARP — 다른 네트워크 호스트를 대신해 ARP 응답"]
      icmpBox["ICMP와 IGMP<br/>1) ICMP — Type 0 Echo Reply, Type 3 Destination Unreachable, Type 5 Redirect, Type 8 Echo Request, Type 11 Time Exceeded<br/>2) IGMP — 멀티캐스트 그룹 가입/탈퇴 관리"]
    서브넷팅과 슈퍼넷팅
      classfulBox["클래스풀 주소 체계<br/>1) A클래스(0~127, /8), B클래스(128~191, /16), C클래스(192~223, /24)<br/>2) D클래스(224~239, 멀티캐스트), E클래스(240~255, 실험용)"]
      privateBox["사설 IP와 APIPA<br/>1) 사설 IP(RFC 1918) — 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16<br/>2) APIPA — 169.254.0.0/16, DHCP 실패 시 윈도우 OS가 자동 부여"]
      subnetCalcBox["서브넷팅 간이 계산법(실기)<br/>1) 블록 크기 = 256 − 해당 옥텟 서브넷마스크 10진수 값<br/>2) 가용 호스트 수 = 2^(32−CIDR비트) − 2<br/>3) 예: 192.168.10.0/27 → 마스크 255.255.255.224, 블록 32, 서브넷 8개, 2번째 서브넷 네트워크 .32/브로드캐스트 .63"]
    L4 전송 프로토콜
      tcpBox["TCP 흐름·혼잡 제어<br/>1) 흐름 제어 — 슬라이딩 윈도우(Sliding Window)<br/>2) 혼잡 제어 — Slow Start(지수 증가), Congestion Avoidance(선형 증가), Fast Retransmit(중복 ACK 3개), Fast Recovery<br/>3) 3-Way Handshake(연결) vs 4-Way Handshake(종료)"]
      udpBox["UDP 특징<br/>1) 비연결, 비신뢰성, 최소 오버헤드<br/>2) 헤더 8바이트 고정 — Source Port, Dest Port, Length, Checksum"]
    L7 응용 프로토콜과 포트 번호
      portFileBox["파일 전송·원격 접속 포트<br/>1) FTP — 제어 21, 데이터 20<br/>2) TFTP — UDP 69, SFTP — 22<br/>3) Telnet — 23, SSH — 22"]
      portMailWebBox["메일·웹·네임 서비스 포트<br/>1) SMTP 25/587, POP3 110/995, IMAP 143/993<br/>2) HTTP 80, HTTPS 443<br/>3) DNS TCP/UDP 53, DHCP 서버 67/클라이언트 68"]
      portMgmtBox["망 관리 서비스 포트<br/>1) SNMP — 161(질의)/162(트랩)<br/>2) NTP — 123<br/>3) Syslog — UDP 514"]
    NAT와 DHCP 할당 과정
      natBox["NAT/PAT 주소 변환(실기)<br/>1) NAT — 사설 IP ↔ 공인 IP를 1:1로 변환<br/>2) PAT(NAPT) — 포트 번호까지 이용해 여러 사설 IP를 하나의 공인 IP로 다대일 변환, 가정용 공유기 방식<br/>3) 공인 IP 절약과 내부망 은닉(보안) 효과"]
      dhcpProcessBox["DHCP 할당 과정(DORA)(실기)<br/>1) Discover — 클라이언트가 브로드캐스트로 DHCP 서버 탐색<br/>2) Offer — 서버가 사용 가능한 IP를 제안<br/>3) Request — 클라이언트가 특정 IP 사용을 요청<br/>4) Ack — 서버가 할당을 최종 확정 응답"]`,
};
