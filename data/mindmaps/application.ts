import type { MindmapSection } from "@/types/mindmap";

export const applicationMindmap: MindmapSection = {
  id: "application",
  title: "애플리케이션 보안",
  description: "FTP·메일·웹·전자상거래 보안과 시큐어코딩 7대 유형",
  chart: `mindmap
  root((애플리케이션 보안))
    FTP 보안
      Active Passive 모드
      Anonymous FTP
      Bounce Attack
    전자우편 보안
      SMTP POP3 IMAP
      PGP 분산키 관리
      S MIME
      스팸 차단 SPF DKIM DMARC
    웹서버 보안
      httpd conf 설정
      디렉토리 리스팅 차단
      서버 시그니처 숨김
      access log error log
    DNS 보안
      Recursive Iterative 질의
      DNSSEC
      DNS 스푸핑 캐시 변조
    전자상거래 보안
      SET 이중서명
      SSL TLS 핸드셰이크
      IPSec AH ESP IKE
      전자화폐 특성
        익명성
        이중사용 방지
    디지털콘텐츠 보안
      DRM 저작권 관리
      워터마킹 정보은닉
      DOI 무결성 관리
    시큐어코딩 7대 유형
      입력데이터 검증
        SQL Injection
        XSS
        CSRF
        경로 조작
        OS 명령어 삽입
      보안기능
        하드코딩된 비밀번호
        약한 암호화 알고리즘
      시간 및 상태
        경쟁 조건
      에러처리
        정보 노출
      코드오류
        널 참조
      캡슐화
        세션 정보 노출
      API 오용
    데이터베이스 보안
      암호화 방식
        Plug In 방식
        API 방식
      접근제어와 감사로그`,
};
