import type { MindmapSection } from "@/types/mindmap";

export const applicationMindmap: MindmapSection = {
  id: "application",
  title: "애플리케이션 보안",
  description: "FTP·메일·웹·전자상거래 보안과 시큐어코딩 7대 유형",
  chart: `mindmap
  root((애플리케이션 보안))
    FTP 보안
      Active Passive 모드
      ftpBox["FTP 취약점<br/>1) Anonymous FTP — 인증 없이 접근 가능<br/>2) Bounce Attack — 제3자 서버 경유 포트 스캔"]
    전자우편 보안
      mailProtoBox["전자우편 프로토콜<br/>1) SMTP — 25번 포트, 메일 발송<br/>2) POP3 — 110번 포트, 읽고 서버에서 삭제<br/>3) IMAP — 143번 포트, 서버에 남겨 동기화"]
      PGP 분산키 관리
      S MIME
      spamBox["스팸 차단<br/>1) SPF — 발신 서버 IP를 도메인 소유자가 인증<br/>2) DKIM — 전자서명으로 위변조 검증<br/>3) DMARC — SPF·DKIM 결과를 정책에 반영"]
    웹서버 보안
      httpdConfBox["httpd.conf 보안 설정<br/>1) indexes 제거 — 디렉토리 리스팅 차단<br/>2) FollowSymLinks 제거 — 심볼릭 링크 차단<br/>3) ServerSignature Off — 서버 정보 노출 차단<br/>4) ServerTokens Prod — 배너에 최소 정보만 노출"]
      access log error log
    DNS 보안
      Recursive Iterative 질의
      DNSSEC
      DNS 스푸핑 캐시 변조
      dnsRecordBox["DNS 레코드 유형<br/>1) A — IPv4 주소<br/>2) AAAA — IPv6 주소<br/>3) PTR — 특수 이름 도메인(역방향)<br/>4) NS — DNS 서버<br/>5) MX — 메일 서버<br/>6) CNAME — 호스트의 다른 이름"]
    전자상거래 보안
      SET 이중서명
      SSL TLS 핸드셰이크
      ipsecBox["IPSec 모드와 프로토콜<br/>1) 터널 모드 — IP 헤더까지 암호화<br/>2) 전송 모드 — 메시지만 암호화<br/>3) AH — 인증과 무결성만 제공<br/>4) ESP — 암호화·인증·무결성 모두 제공<br/>5) IKE — 키 교환"]
      전자화폐 특성
        익명성
        이중사용 방지
    디지털콘텐츠 보안
      DRM 저작권 관리
      워터마킹 정보은닉
      DOI 무결성 관리
    secureCodingBox["시큐어코딩 7대 유형<br/>1) 입력데이터 검증 및 표현 — SQL Injection, XSS, CSRF, 경로 조작, OS 명령어 삽입<br/>2) 보안기능 — 하드코딩된 비밀번호, 약한 암호화<br/>3) 시간 및 상태 — 경쟁 조건<br/>4) 에러처리 — 정보 노출<br/>5) 코드오류 — 널 참조<br/>6) 캡슐화 — 세션 정보 노출<br/>7) API 오용"]
    데이터베이스 보안
      암호화 방식
        Plug In 방식
        API 방식
      접근제어와 감사로그`,
};
