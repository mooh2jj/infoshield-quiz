import type { MindmapSection } from "@/types/mindmap";

export const networkMindmap: MindmapSection = {
  id: "network",
  title: "네트워크 보안",
  description: "프로토콜 구조부터 공격 기법, 방어 솔루션까지",
  chart: `mindmap
  root((네트워크 보안))
    프로토콜 구조
      OSI 7계층
      TCP IP 4계층
      TCP 연결지향 3way handshake
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
      서비스 거부 공격
        SYN Flooding
        Smurf
        Land Attack
        Tear Drop
        Ping of Death
        Slowloris
        DRDoS
      세션 하이재킹
      포트 스캐닝
        TCP Connect Scan
        SYN Stealth Scan
        FIN NULL Xmas Scan
    네트워크 보안 솔루션
      방화벽
        스크리닝 라우터
        베스천 호스트
        스크린드 서브넷
      IDS IPS
        오용 탐지
        이상 탐지
        인라인 실시간 차단
      NAC 접근통제
      허니팟 유인
      VPN
        SSL VPN
        IPSec VPN
        PPTP L2TP MPLS
      통합관리 UTM ESM SIEM
    무선랜 보안
      WEP RC4 정적키 취약
      WPA TKIP 802 1x
      WPA2 AES CCMP
      RFID 보안
        Kill Tag
        Faraday Cage`,
};
