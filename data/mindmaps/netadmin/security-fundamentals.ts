import type { MindmapSection } from "@/types/mindmap";

export const securityFundamentalsMindmap: MindmapSection = {
  id: "security-fundamentals",
  title: "정보보안",
  description: "보안 3대 요소, 네트워크 공격 기법, 방화벽·IDS/IPS·VPN, 무선 보안 표준",
  chart: `mindmap
  root((정보보안))
    보안 3대 요소와 공격 기법
      triadBox["보안 3대 요소<br/>1) 기밀성(Confidentiality)<br/>2) 무결성(Integrity)<br/>3) 가용성(Availability)"]
      dosBox["DoS·DDoS 공격<br/>1) SYN Flooding — 3-way handshake 미완성 연결로 자원 고갈<br/>2) Smurf — ICMP Echo 브로드캐스트 증폭<br/>3) Land Attack — 출발지·목적지 주소 동일하게 위조<br/>4) Teardrop — 조각화 오프셋 중첩<br/>5) Slowloris — HTTP 헤더를 지연 전송해 연결 점유"]
      spoofBox["스푸핑·스니핑(실기)<br/>1) IP Spoofing — 출발지 IP 위조<br/>2) ARP Spoofing(ARP Cache Poisoning) — 위조된 ARP Reply로 피해자 캐시를 변조해 트래픽 우회<br/>3) DNS Spoofing, 패킷 스니핑(Promiscuous Mode)"]
      hijackBox["TCP 세션 하이재킹<br/>1) 통신 중인 TCP 세션의 시퀀스 번호를 추측·탈취<br/>2) 인증을 마친 세션을 가로채 정상 사용자인 것처럼 통신을 이어감"]
    보안 시스템과 접근 통제
      firewallBox["방화벽(Firewall)<br/>1) 패킷 필터링 — 헤더 정보 기반 단순 검사<br/>2) 상태 기반 검사(Stateful Inspection) — 세션 상태를 추적<br/>3) 프록시 방화벽 — 애플리케이션 계층에서 중계"]
      idsIpsBox["IDS·IPS<br/>1) 오용 탐지(Signature-based) — 알려진 공격 패턴 탐지<br/>2) 이상 탐지(Anomaly-based) — 비정상 행위 기반, 제로데이 탐지 가능<br/>3) IDS는 탐지·경고(수동), IPS는 탐지 즉시 차단(능동)"]
      vpnBox["VPN(실기)<br/>1) IPSec — AH(인증·무결성), ESP(암호화·인증)<br/>2) 전송 모드(L4 페이로드만 암호화, End-to-End) vs 터널 모드(원본 IP 헤더 포함 전체 암호화, Site-to-Site)<br/>3) SSL-VPN"]
      wirelessSecBox["무선 LAN 보안 표준(실기)<br/>1) WEP — RC4 알고리즘, 취약(단시간 크랙 가능)<br/>2) WPA — TKIP로 과도기적 보완<br/>3) WPA2 — IEEE 802.11i, AES-CCMP 암호화<br/>4) WPA3 — 동시 동등 인증(SAE), 192비트 암호화"]
    암호화와 악성코드
      cryptoBox["암호화 알고리즘 기초<br/>1) 대칭키 — AES, DES, 속도가 빠르지만 키 공유 문제 존재<br/>2) 비대칭키(공개키) — RSA, 공개키·개인키 쌍으로 키 분배 문제 해결<br/>3) 해시 — MD5, SHA-256, 복호화 불가능하며 무결성 검증에 사용"]
      malwareBox["악성코드 유형<br/>1) 바이러스 — 숙주 파일이 필요, 실행 시 자가복제<br/>2) 웜(Worm) — 숙주 없이 네트워크를 통해 스스로 전파<br/>3) 트로이목마 — 정상 프로그램으로 위장, 자가복제 기능은 없음"]`,
};
