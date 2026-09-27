import type { MindmapSection } from "@/types/mindmap";

export const networkMindmap: MindmapSection = {
  id: "network",
  title: "네트워크 보안",
  description: "프로토콜 구조부터 공격 기법, 방어 솔루션까지",
  chart: `mindmap
  root((네트워크 보안))
    프로토콜 구조
      osiBox["OSI 7계층<br/>1) 물리(1) — 리피터, 전기 신호 전송<br/>2) 데이터링크(2) — 스위치·브리지, 프레임 전송<br/>3) 네트워크(3) — 라우터, 경로 결정<br/>4) 전송(4) — 종단간 신뢰성 있는 전달<br/>5) 세션(5) — 연결 수립·유지<br/>6) 표현(6) — 데이터 형식 변환<br/>7) 응용(7) — 게이트웨이, 사용자 서비스"]
      TCP IP 4계층
      tcpFlagBox["TCP 연결지향<br/>1) SYN — 연결 동기화 요청<br/>2) ACK — 응답 확인<br/>3) PSH — 즉시 전송 요구<br/>4) FIN — 정상 종료<br/>5) RST — 비정상 종료 후 재연결"]
      UDP 비연결형 빠른 전송
      IP 주소체계 IPv4 32bit IPv6 128bit
      ICMP 오류제어 메시지
      ARP RARP 주소 변환
    네트워크 공격 기법
      스니핑 Promiscuous Mode
      스푸핑
        ARP 스푸핑
        IP 스푸핑
        DNS 스푸핑
      dosBox["서비스 거부 공격<br/>1) SYN Flooding — 3way handshake 취약점으로 연결 자원 고갈<br/>2) Smurf — 브로드캐스트로 ICMP 응답 증폭<br/>3) Land Attack — 송신자·수신자 IP를 동일하게 위조<br/>4) Tear Drop — 시퀀스 번호를 조작해 재조립 방해"]
      Ping of Death
      Slowloris
      DRDoS
      세션 하이재킹
      scanBox["포트 스캐닝 기법<br/>1) TCP Connect Scan — 완전한 3way handshake로 스캔, 로그에 남음<br/>2) SYN Stealth Scan — SYN만 보내고 RST로 종료, 로그 잘 안 남음<br/>3) FIN NULL Xmas Scan — 비정상 플래그로 방화벽 우회 시도"]
    네트워크 보안 솔루션
      firewallBox["방화벽 아키텍처<br/>1) Screening Router — 패킷 필터링만 수행<br/>2) Dual Homed Gateway — 두 인터페이스를 가진 베스천 호스트<br/>3) Screened Host — 라우터 뒤에 베스천 호스트 배치<br/>4) Screened Subnet — 이중 라우터 사이에 DMZ 구성"]
      idsBox["IDS 탐지 방식<br/>1) 오용 탐지 — 알려진 패턴 기반, False Negative가 큼<br/>2) 이상 탐지 — 정상행위 프로파일 기반, False Positive가 큼"]
      인라인 실시간 차단 IPS
      NAC 접근통제
      허니팟 유인
      VPN
        SSL VPN
        IPSec VPN
        PPTP L2TP MPLS
      통합관리 UTM ESM SIEM
    무선랜 보안
      wlanBox["WEP·WPA·WPA2<br/>1) WEP — RC4, 40bit 고정키, 24bit IV, 무작위 공격에 취약<br/>2) WPA — 128bit 동적 암호화, TKIP, 802.1x·EAP 준수<br/>3) WPA2 — AES, 802.11i, CCMP 사용"]
      RFID 보안
        Kill Tag
        Faraday Cage`,
};
