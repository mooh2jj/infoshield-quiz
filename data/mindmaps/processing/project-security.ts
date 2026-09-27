import type { MindmapSection } from "@/types/mindmap";

export const projectSecurityMindmap: MindmapSection = {
  id: "project-security",
  title: "정보시스템 구축 관리",
  description: "비용·일정 산정, 네트워크 계층·라우팅, 보안 3요소와 웹 취약점",
  chart: `mindmap
  root((정보시스템 구축 관리))
    costBox["비용·일정 산정 기법<br/>1) COCOMO — 소스코드 라인 수(LOC) 기반 산정<br/>2) Putnam — 소프트웨어 개발주기 예측 모형<br/>3) 기능점수(FP) — 기능 단위로 비용 산정<br/>4) CPM PERT — 임계경로로 프로젝트 일정 관리"]
    osi7Box["OSI 7계층(실기)<br/>1) 물리(1)·데이터링크(2) — 전기신호 전달, MAC 기반 프레임 전달<br/>2) 네트워크(3)·전송(4) — IP 경로 결정, TCP UDP로 신뢰성 있게 전달<br/>3) 세션(5)·표현(6) — 연결 수립·유지, 데이터 형식 변환<br/>4) 응용(7) — 사용자와 맞닿는 서비스 계층"]
    네트워크 계층과 장비
      layerBox["계층별 장비<br/>1) L2 — 스위치, MAC 주소 기반 전달<br/>2) L3 — 라우터, IP 주소 기반 경로 결정<br/>3) L4 — 로드밸런서, TCP UDP 포트 기반 분산<br/>4) L7 — WAF, 애플리케이션 데이터 기반 처리"]
      portBox["잘 알려진 포트 번호(실기)<br/>1) FTP 20/21, SSH 22, Telnet 23<br/>2) SMTP 25, DNS 53<br/>3) HTTP 80, HTTPS 443"]
      routingBox["라우팅 프로토콜<br/>1) RIP — 거리벡터, 벨만-포드, 최대 15홉<br/>2) OSPF — 링크상태, 다익스트라, 대규모망에 적합<br/>3) BGP — 경로벡터, 인터넷 백본 간 라우팅"]
      cloudBox["클라우드 서비스 모델(실기)<br/>1) IaaS — 서버·스토리지 등 인프라를 제공<br/>2) PaaS — 애플리케이션 실행 플랫폼을 제공<br/>3) SaaS — 완성된 소프트웨어를 서비스로 제공"]
      sdnBox["네트워크 신기술(실기)<br/>1) SDN — 제어와 데이터 전달을 분리해 소프트웨어로 네트워크 제어<br/>2) NFV — 네트워크 장비의 기능을 가상화해 소프트웨어로 구현<br/>3) 컨테이너(Docker 등) — 운영체제 커널을 공유하는 경량 가상화 기술"]
    ciaBox["정보보안 3대 요소<br/>1) 기밀성 — 인가된 사용자만 접근 가능<br/>2) 무결성 — 정보가 변조되지 않고 정확함<br/>3) 가용성 — 필요할 때 정상적으로 사용 가능"]
    cryptoBox["암호 키 체계<br/>1) 대칭키 — 블록(DES·AES·SEED·ARIA), 스트림(RC4)<br/>2) 비대칭키 — RSA(소인수분해), Diffie-Hellman(이산대수), ECC(타원곡선)<br/>3) 해시 — SHA·MD5, 무결성 검증에 사용"]
    digitalSignatureBox["전자서명 원리(실기)<br/>1) 송신자가 메시지 해시값을 자신의 개인키로 서명<br/>2) 수신자는 송신자의 공개키로 서명을 검증<br/>3) 메시지 무결성과 부인방지를 동시에 제공"]
    공격 기법
      webAttackBox["웹 취약점(실기)<br/>1) SQL Injection — 입력값에 SQL 구문 삽입<br/>2) XSS — 악성 스크립트 삽입, HttpOnly로 쿠키 보호<br/>3) CSRF — 정상 세션을 이용한 위조 요청, CSRF 토큰으로 방어<br/>4) SSRF — 서버가 임의 주소로 요청하게 유도"]
      dosBox["서비스 거부 공격 종류(실기)<br/>1) SYN Flooding — 3way handshake 취약점으로 연결 자원 고갈<br/>2) Smurf — 브로드캐스트로 ICMP 응답을 증폭시켜 공격<br/>3) Land Attack — 송신자·수신자 IP를 동일하게 위조<br/>4) Ping of Death — 비정상적으로 큰 ICMP 패킷 전송"]
    보안 관리
      solutionBox["보안 솔루션과 인증체계<br/>1) IDS — 오용탐지(패턴 기반)·이상탐지(정상행위 기반)<br/>2) IPS — 실시간으로 탐지 후 차단까지 수행<br/>3) ISMS-P — 정보보호와 개인정보보호 통합 인증체계<br/>4) 접근통제 — DAC(임의적)·MAC(강제적)·RBAC(역할기반)"]
      riskMgmtBox["위험 관리(실기)<br/>1) 위험(Risk) = 자산 × 위협 × 취약점<br/>2) 위험 분석 — 자산·위협·취약점을 식별해 위험도 평가<br/>3) 대응 전략 — 수용·감소·회피·전가 중 선택"]`,
};
