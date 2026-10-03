import type { SpeedQuizChapter, SpeedQuizItem } from "./types";

export const SECURITY_CHAPTERS: SpeedQuizChapter[] = [
  { id: "system", name: "제1과목 시스템 보안", shortName: "시스템 보안" },
  { id: "network", name: "제2과목 네트워크 보안", shortName: "네트워크 보안" },
  { id: "application", name: "제3과목 애플리케이션 보안", shortName: "애플리케이션 보안" },
  { id: "general", name: "제4과목 정보보안 일반", shortName: "정보보안 일반" },
  { id: "law", name: "제5과목 정보보안 관리 및 법규", shortName: "관리 및 법규" },
];

export const SECURITY_QUIZ_LIST: SpeedQuizItem[] = [
  // =================================================================
  // === [제1과목] 시스템 보안 (8문항)
  // =================================================================
  {
    id: 1,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스 시스템에서 일반 사용자가 실행할 때 파일 소유자(root)의 권한으로 임시 실행되도록 부여하는 8진수 4000번대의 특수 권한은?",
    answer: "SetUID (SUID)"
  },
  {
    id: 2,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "스택 메모리에 할당된 버퍼 크기를 초과하는 데이터를 주입하여 반환 주소(RET)를 변조해 임의의 코드를 실행하는 공격 기법은?",
    answer: "버퍼 오버플로우 (Buffer Overflow)"
  },
  {
    id: 3,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "버퍼 오버플로우 공격을 방어하기 위해 스택의 RET 직전에 카나리(Canary) 값을 삽입하여 변조 여부를 검증하는 보호 기법은?",
    answer: "스택 가드 (StackGuard / Stack Canary)"
  },
  {
    id: 4,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "printf 등 C언어 출력 함수의 포맷 인자(%x, %s, %n 등)를 부적절하게 검증하지 않아 메모리 내용을 읽거나 변조하는 취약점 공격은?",
    answer: "포맷 스트링 공격 (Format String Attack)"
  },
  {
    id: 5,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "자원에 대한 검사 시점(Check)과 사용 시점(Use) 사이의 시간차를 악용하여 심볼릭 링크 등을 통해 권한을 탈취하는 동시성 취약점 공격은?",
    answer: "레이스 컨디션 (Race Condition / TOCTOU)"
  },
  {
    id: 6,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "프로그램 실행 시마다 스택, 힙, 라이브러리 메모리 주소를 무작위로 배치하여 공격자의 악성 코드 주소 예측을 방해하는 기법은?",
    answer: "ASLR (주소 공간 배치 무작위화)"
  },
  {
    id: 7,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "시스템 내 주요 파일들의 해시(MD5/SHA 등) 값을 데이터베이스화해 두고, 주기적으로 비교하여 파일의 변조 및 백도어를 탐지하는 무결성 검사 도구는?",
    answer: "트립와이어 (Tripwire)"
  },
  {
    id: 8,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스/유닉스 환경에서 응용 프로그램의 수정 없이 다양한 사용자 인증 방식(패스워드, OTP 등)을 모듈화하여 관리하는 프레임워크는?",
    answer: "PAM (장착형 인증 모듈)"
  },

  // =================================================================
  // === [제2과목] 네트워크 보안 (8문항)
  // =================================================================
  {
    id: 9,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "TCP 3-Way Handshake 과정에서 대량의 SYN 패킷만을 서버로 전송하여 백로그 큐(Backlog Queue)를 고갈시키는 DoS 공격은?",
    answer: "SYN 플러딩 (SYN Flooding)"
  },
  {
    id: 10,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "공격자가 자신의 MAC 주소를 게이트웨이 또는 피해자의 MAC 주소인 것처럼 위조하여 트래픽을 도청·가로채는 공격은?",
    answer: "ARP 스푸핑 (ARP Spoofing)"
  },
  {
    id: 11,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "출발지 IP를 희생자 IP로 위조한 후 브로드캐스트 주소로 대량의 ICMP Echo Request를 보내 희생자를 마비시키는 증폭 공격은?",
    answer: "스머프 공격 (Smurf Attack)"
  },
  {
    id: 12,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "TCP 연결 상태의 클라이언트와 서버 사이에서 시퀀스 번호(Sequence Number)를 위조·예측하여 통신 세션 제어권을 탈취하는 공격은?",
    answer: "TCP 세션 하이재킹 (TCP Session Hijacking)"
  },
  {
    id: 13,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "IP 단편화 시 오프셋(Offset)과 길이를 비정상적으로 중복 조작하여 수신 측이 패킷 재조합 시 시스템 충돌을 일으키게 하는 DoS 공격은?",
    answer: "티어드롭 공격 (Teardrop Attack)"
  },
  {
    id: 14,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "오픈소스 기반의 대표적인 네트워크 침입 탐지 및 방지 시스템(NIDS/NIPS)으로, 패킷 캡처 및 규칙(Rule) 기반 패턴 매칭을 수행하는 도구는?",
    answer: "스노트 (Snort)"
  },
  {
    id: 15,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "IP(네트워크) 계층에서 기밀성, 무결성, 인증을 제공하며 인증 헤더(AH)와 암호화 캡슐화(ESP)로 구성된 표준 보안 프로토콜은?",
    answer: "IPSec"
  },
  {
    id: 16,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "출발지 IP를 피해자 IP로 변조한 후 개방형 DNS 재귀 서버에 대량의 질의를 보내 대용량 응답 트래픽으로 공격하는 반사 증폭 DRDoS는?",
    answer: "DNS 증폭 DRDoS 공격"
  },

  // =================================================================
  // === [제3과목] 애플리케이션 보안 (8문항)
  // =================================================================
  {
    id: 17,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹 애플리케이션의 입력값 검증 미흡을 악용하여 악의적인 SQL 구문을 삽입함으로써 DB를 무단 조회·변조하는 웹 공격은?",
    answer: "SQL 인젝션 (SQL Injection)"
  },
  {
    id: 18,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹사이트에 악성 스크립트를 삽입하여 이를 열람하는 피해자의 브라우저에서 세션 쿠키 탈취 등의 악의적 행위를 수행하는 공격은?",
    answer: "XSS (크로스 사이트 스크립팅)"
  },
  {
    id: 19,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "로그인된 피해자의 권한과 신뢰 관계를 도용하여 공격자가 의도한 위조 요청(비밀번호 변경, 송금 등)을 강제로 전송하게 하는 공격은?",
    answer: "CSRF (크로스 사이트 요청 위조)"
  },
  {
    id: 20,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹 파라미터에 '../' 와 같은 경로 순회 문자를 주입하여 웹 루트 외부의 시스템 파일(/etc/passwd 등)에 무단 접근하는 공격은?",
    answer: "디렉토리 트래버설 (Directory Traversal)"
  },
  {
    id: 21,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "공격자가 취약한 웹 서버를 조작하여 서버가 내부 네트워크의 비공개 자원이나 인트라넷 서비스로 요청을 보내도록 유도하는 공격은?",
    answer: "SSRF (Server-Side Request Forgery)"
  },
  {
    id: 22,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "애플리케이션 계층(OSI 7계층)에서 HTTP/HTTPS 트래픽을 검사하여 SQL 인젝션, XSS 등 웹 공격을 전문적으로 방어하는 전용 보안 장비는?",
    answer: "WAF (웹 방화벽)"
  },
  {
    id: 23,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "이메일 헤더에 발신자의 디지털 서명을 첨부하고 수신 측이 발신 도메인의 DNS 공개키로 서명을 검증하여 메일 위조를 방지하는 기술은?",
    answer: "DKIM (도메인키 식별 메일)"
  },
  {
    id: 24,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹 브라우저에서 프로토콜, 호스트, 포트 번호가 모두 일치하는 출처(Origin)의 스크립트만 문서(DOM)와 데이터에 접근을 허용하는 핵심 보안 정책은?",
    answer: "SOP (동일 출처 정책)"
  },

  // =================================================================
  // === [제4과목] 정보보안 일반 (7문항)
  // =================================================================
  {
    id: 25,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "미국 NIST 표준 대칭키 블록 암호 알고리즘으로, 128비트 블록 크기와 128/192/256비트 키 길이를 지원하는 현대 표준 암호는?",
    answer: "AES (Advanced Encryption Standard)"
  },
  {
    id: 26,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "두 개의 거대한 소수의 곱을 소인수분해하기 어렵다는 수학적 난제를 기반으로 동작하는 대표적인 비대칭키(공개키) 암호 알고리즘은?",
    answer: "RSA (Rivest-Shamir-Adleman)"
  },
  {
    id: 27,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "사전 비밀키 공유 없이 공개된 통신망에서 이산대수의 어려움을 이용하여 안전하게 대칭 세션키를 공유할 수 있게 해주는 알고리즘은?",
    answer: "디피-헬만 (Diffie-Hellman) 키 교환"
  },
  {
    id: 28,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "송신자의 개인키로 해시값을 암호화하고 수신자가 송신자의 공개키로 검증하여 위조 방지, 무결성, 부인 방지를 제공하는 기술은?",
    answer: "전자서명 (Digital Signature)"
  },
  {
    id: 29,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "타원곡선 상의 이산대수 난이도에 기반하여 RSA 대비 훨씬 짧은 키 길이(256비트)로 대등한 보안 강도를 제공하는 공개키 암호는?",
    answer: "ECC (타원곡선 암호)"
  },
  {
    id: 30,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "송·수신자가 공유하는 비밀키와 원본 메시지를 해시 함수에 입력하여 생성하며 데이터 무결성과 송신자 인증을 검증하는 코드는?",
    answer: "MAC (메시지 인증 코드 / HMAC)"
  },
  {
    id: 31,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "정보보호의 3대 핵심 목표로서 인가된 접근만 허용하는 기밀성, 변조를 막는 무결성, 필요 시 사용을 보장하는 가용성을 일컫는 용어는?",
    answer: "CIA 트라이어드 (보안 3대 요소)"
  },

  // =================================================================
  // === [제5과목] 정보보안 관리 및 법규 (6문항)
  // =================================================================
  {
    id: 32,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "조직의 정보보호 및 개인정보보호 관리체계가 국가 기준에 적합한지 한국인터넷진흥원(KISA) 등이 종합 심사하는 국내 공인 인증 제도는?",
    answer: "ISMS-P"
  },
  {
    id: 33,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "기업이나 기관의 정보보안 종합 대책을 수립하고 보안 예산, 인력 및 기술적 보호대책을 총괄 지휘하는 임원급 최고 책임자는?",
    answer: "CISO (정보보호 최고책임자)"
  },
  {
    id: 34,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "개인정보보호법에 따라 기업이나 공공기관에서 개인정보의 처리와 보호, 정보주체 권리 구제 및 유출 방지를 총괄하는 책임자는?",
    answer: "CPO (개인정보 보호책임자)"
  },
  {
    id: 35,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "재난 발생 시 비즈니스 기능 중단에 따른 재정적·운영적 손실을 평가하여 각 업무의 복구 우선순위를 결정하는 체계적 분석 기법은?",
    answer: "BIA (업무 영향 분석)"
  },
  {
    id: 36,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "재난 및 장애 발생 시점부터 업무가 정상적으로 복구되어 재가동될 때까지 허용되는 최대 목표 복구 시간을 의미하는 지표는?",
    answer: "RTO (Recovery Time Objective, 목표 복구 시간)"
  },
  {
    id: 37,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "악성코드 감염 및 기밀 유출 방지를 위해 사내 업무망(내부망)과 인터넷망(외부망)을 물리적 또는 가상화로 분리하는 조치는?",
    answer: "망분리 (물리적/논리적 망분리)"
  }
];
