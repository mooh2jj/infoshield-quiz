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
  },

  // =================================================================
  // === [실기 연계 특별 테마] 최신 실기 빈출 핵심 스피드 퀴즈 (15문항)
  // =================================================================
  {
    id: 38,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "윈도우 NTFS 파일 시스템에서 정상 파일 뒤에 숨겨진 별도 데이터 스트림을 연결할 수 있어 악성코드 은닉에 악용되는 고유 기능은?",
    answer: "ADS (대체 데이터 스트림 / Alternate Data Streams)"
  },
  {
    id: 39,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "메신저 통신 시 중계 서버 관리자나 통신 사업자조차 복호화 키가 없어 평문을 열람할 수 없도록 송·수신 단말 간에만 암호화를 수행하는 기술은?",
    answer: "E2EE (종단간 암호화 / End-to-End Encryption)"
  },
  {
    id: 40,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "사내 민감 정보나 기밀 데이터가 USB, 이메일, 메신저 등을 통해 외부로 불법 유출되는 것을 콘텐츠 기반으로 탐지 및 차단하는 보안 솔루션은?",
    answer: "DLP (데이터 유출 방지 / Data Loss Prevention)"
  },
  {
    id: 41,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "DNS 리졸버가 네임서버로부터 수신한 IP 매핑 레코드를 캐시에 보관하여 재사용할 수 있는 유효 시간(초 단위)을 나타내는 리소스 레코드 필드는?",
    answer: "TTL (Time To Live)"
  },
  {
    id: 42,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스에서 프로세스 어카운팅(pacct) 감사 기능을 활성화했을 때, 종료된 프로세스의 실행 명령어와 실행 사용자 이력을 조회하는 명령어는?",
    answer: "lastcomm"
  },
  {
    id: 43,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "모바일 앱에 신뢰할 수 있는 서버의 공개키나 인증서 해시를 하드코딩하여 프록시 도구를 통한 중간자(MITM) 패킷 감청을 원천 차단하는 기법은?",
    answer: "인증서 피닝 (Certificate Pinning / SSL Pinning)"
  },
  {
    id: 44,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "유효하지 않은 NULL 주소를 가리키는 포인터를 통해 메모리 값에 직접 접근을 시도하여 프로세스 비정상 종료(Segmentation Fault)를 초래하는 보안 약점은?",
    answer: "널 포인터 역참조 (Null Pointer Dereference / CWE-476)"
  },
  {
    id: 45,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "지능형 지속 위협(APT) 공격 과정을 '정찰 -> 무기화 -> 전달 -> 취약점 공격 -> 설치 -> C2 -> 행동'의 7단계로 모델링한 보안 프레임워크는?",
    answer: "사이버 킬체인 (Cyber Kill Chain)"
  },
  {
    id: 46,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "취약한 웹 서버가 공격자가 조작한 URL로 대리 요청을 보내도록 유도하여 외부에서 접근할 수 없는 내부망 자원이나 클라우드 메타데이터(169.254.169.254)를 탈취하는 공격은?",
    answer: "SSRF (서버 측 요청 위조 / Server-Side Request Forgery)"
  },
  {
    id: 47,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스 시스템에서 실행 중인 프로세스가 오픈한 파일 디스크립터 목록이나 특정 포트를 점유하고 있는 네트워크 소켓(`-i` 옵션)을 확인하는 명령어는?",
    answer: "lsof (List Open Files)"
  },
  {
    id: 48,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스 시스템에서 무차별 대입 공격 등을 분석하기 위해 `/var/log/btmp`에 기록된 로그인 실패 이력을 조회하는 명령어는?",
    answer: "lastb"
  },
  {
    id: 49,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "희생자 IP로 위조된 ICMP Echo Request 브로드캐스트 패킷의 유입 및 반사 증폭을 차단하기 위해 라우터 인터페이스에 적용하는 Cisco 명령어는?",
    answer: "no ip directed-broadcast"
  },
  {
    id: 50,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "윈도우 NetBIOS over TCP/IP(137~139) 서비스에서 패스워드 없이 익명 연결을 맺어 원격에서 계정 및 공유 폴더 목록을 열거하는 데 악용되는 취약점은?",
    answer: "널 세션 (Null Session)"
  },
  {
    id: 51,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "Java 웹 개발 시 SQL 쿼리의 구조와 사용자 입력값을 분리하여 위치 홀더(`?`)에 파라미터를 바인딩함으로써 SQL 인젝션을 원천 차단하는 JDBC 객체는?",
    answer: "PreparedStatement"
  },
  {
    id: 52,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "NTP 서버의 최근 접속 클라이언트 최대 600개 목록을 반환하는 특성을 악용하여 수백 배의 트래픽을 희생자에게 반사 집중시키는 DRDoS 공격 명령어는?",
    answer: "monlist (NTP monlist)"
  },
  {
    id: 53,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "디스크 없는 호스트(Diskless Host) 등이 부팅 시 자신의 물리적 MAC 주소는 알지만 논리적 IP 주소를 모를 때 IP를 할당받기 위해 사용하는 프로토콜은?",
    answer: "RARP (Reverse ARP)"
  },
  {
    id: 54,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "정보화 사업 추진(CIO)과 정보보호 통제(CISO) 간의 이해 상충을 방지하기 위해 전자금융거래법 및 망법에서 규정한 CISO의 핵심 인사 제한 규정은?",
    answer: "CISO 겸직 금지"
  },
  {
    id: 55,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "클라이언트의 요청 헤더를 그대로 에코(반사)하여 반환하는 디버깅용 메서드로, XSS와 결합 시 HttpOnly 쿠키까지 탈취하는 XST 공격에 악용되는 HTTP 메서드는?",
    answer: "TRACE (XST / Cross-Site Tracing)"
  },
  {
    id: 56,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "MS SQL Server에서 데이터베이스 계정으로 윈도우 운영체제의 커맨드 쉘(cmd.exe) 명령어를 실행할 수 있어 보안상 비활성화해야 하는 확장 저장 프로시저는?",
    answer: "xp_cmdshell"
  },
  {
    id: 57,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "TCP 3-Way Handshake를 완료하지 않고 SYN 패킷 전송 후 SYN/ACK 응답을 받으면 즉시 RST를 전송하여 대상 시스템에 접속 로그를 남기지 않는 스캔 기법은?",
    answer: "SYN 스캔 (Half-Open Scan)"
  },
  {
    id: 58,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "TCP 제어 플래그 중 FIN, PSH, URG 플래그를 모두 1로 설정하여 크리스마스 트리처럼 불을 켠 형태로 패킷을 전송하는 스텔스 포트 스캔 기법은?",
    answer: "XMAS 스캔 (Xmas Scan)"
  },
  {
    id: 59,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "단 하나의 공인 IP 주소에 고유한 레이어 4 포트(Port) 번호를 매핑하여 수많은 내부 사설 단말기가 동시에 인터넷에 접속할 수 있도록 하는 N:1 주소 변환 기술은?",
    answer: "PAT (Port Address Translation / NAPT)"
  },
  {
    id: 60,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "주 센터와 동일한 전산 설비를 원격지에 구축하고 데이터를 실시간(동기식)으로 이중화 복제하여 재해 발생 시 즉시(RTO=0) 서비스 전환이 가능한 재해복구센터 형태는?",
    answer: "미러 사이트 (Mirror Site)"
  },
  {
    id: 61,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "전산실 공간, 전력, 공조 시설 등 기본 인프라만 확보해 두고 재해 발생 시 장비 도입과 데이터 복원을 시작하여 복구 시간(RTO)이 수주~수개월 걸리는 가장 저렴한 재해복구센터 형태는?",
    answer: "콜드 사이트 (Cold Site)"
  },
  {
    id: 62,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스 시스템에서 umask 값이 027로 설정되어 있을 때, 사용자가 `touch` 명령어로 생성한 일반 파일(기본 666)의 최종 8진수 접근 권한 숫자는?",
    answer: "640 (rw-r-----)"
  },
  {
    id: 63,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "MyBatis 프레임워크에서 문자열 치환(`${}`) 대신 SQL 인젝션을 원천 방지하기 위해 내부적으로 PreparedStatement의 `?` 바인딩을 적용하는 문법은?",
    answer: "#{ } (파라미터 바인딩)"
  },
  {
    id: 64,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "안드로이드 AndroidManifest.xml에서 외부 비인가 앱이 임의로 액티비티나 서비스를 실행하지 못하도록 비공개 컴포넌트에 선언해야 하는 속성 값은?",
    answer: "android:exported=\"false\""
  },
  {
    id: 65,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스에서 `/var/log/lastlog` 파일을 참조하여 시스템에 등록된 모든 사용자 계정의 '가장 최근(마지막) 로그인 시각과 접속 IP'를 일괄 조회하는 명령어는?",
    answer: "lastlog"
  },
  {
    id: 66,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "오라클 DB에서 단순 테이블 접근 여부를 넘어 '급여 > 1000만원' 등 특정 조건문(WHERE 절)에 부합하는 세부 데이터 행(Row) 단위로 정밀하게 감사를 기록하는 기법은?",
    answer: "FGA (Fine-Grained Auditing / 미세 조정 감사)"
  },
  {
    id: 67,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "개인정보 유출이나 해킹 사고로 인한 거액의 재무적 손실에 대비하여 '정보보호 배상책임보험'에 가입하거나 보안관제를 전문 업체에 위탁하는 위험 처리 전략은?",
    answer: "위험 전가 (Risk Transfer / 공유)"
  },
  {
    id: 68,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "노후화되어 보안 패치가 중단된 취약한 결제 모듈의 위험을 제거하기 위해 해당 비즈니스 서비스를 전면 중단하고 폐쇄하는 위험 처리 전략은?",
    answer: "위험 회피 (Risk Avoidance)"
  },
  {
    id: 69,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "정보통신망법 제48조의3에 따라 정보통신서비스 제공자가 해킹이나 서비스 거부 공격 등 침해사고가 발생했을 때 즉시 신고해야 하는 정부 주무부처는?",
    answer: "과학기술정보통신부 (과기정통부 / KISA)"
  },
  {
    id: 70,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "개인정보 안전성 확보조치 기준에 따라 5만 명 이상의 정보주체 개인정보를 처리하거나 고유식별정보·민감정보를 처리하는 시스템의 접속기록 최소 보관 기간은?",
    answer: "2년 (2년 이상)"
  },
  {
    id: 71,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "취약한 Custom URL Scheme 대신 웹 도메인 소유권(assetlinks.json)을 상호 검증하여 오직 공식 앱만 안전하게 실행되도록 보장하는 모바일 표준 링크 기술은?",
    answer: "앱 링크 (App Links / Universal Links)"
  },
  {
    id: 72,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "AWS, GCP 등 클라우드 인스턴스 환경에서 SSRF 취약점 공격자가 IAM 임시 보안 자격증명(Access Key) 토큰을 탈취하기 위해 접근하는 링크-로컬 기본 IP 주소는?",
    answer: "169.254.169.254"
  },
  {
    id: 73,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스 `/etc/shadow` 파일의 두 번째 필드에서 `$6$`으로 시작하는 패스워드 해시 암호화에 사용된 일방향 알고리즘은?",
    answer: "SHA-512"
  },
  {
    id: 74,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "IPSec 프로토콜 군 중 발신지 인증과 무결성은 제공하지만, 페이로드 암호화(기밀성)는 제공하지 않는 헤더 프로토콜은?",
    answer: "AH (Authentication Header)"
  },
  {
    id: 75,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "침입 탐지 시스템 Snort 룰에서 페이로드 문자열을 매칭할 때 검색 시작 위치를 바이트 단위로 지정하는 옵션 키워드는?",
    answer: "offset (오프셋)"
  },
  {
    id: 76,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "HTTP 요청 헤더의 끝을 알리는 빈 줄(`\\r\\n\\r\\n`)을 보내지 않고 조작된 헤더를 매우 느린 주기로 지속 전송하여 웹 서버 연결을 고갈시키는 DoS 공격은?",
    answer: "슬로로리스 (Slowloris)"
  },
  {
    id: 77,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "HTTP POST 요청 시 Content-Length를 거대하게 설정한 후 본문 데이터를 1바이트씩 매우 긴 간격으로 전송하여 서버 세션을 고갈시키는 DoS 공격은?",
    answer: "RUDY (R-U-Dead-Yet)"
  },
  {
    id: 78,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "TLS Heartbeat 확장의 길이 검증 부재를 악용하여 공격자가 서버 메모리 데이터(최대 64KB)를 인가 없이 원격 유출할 수 있었던 OpenSSL 취약점은?",
    answer: "하트블리드 (Heartbleed / CVE-2014-0160)"
  },
  {
    id: 79,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹 브라우저가 다른 출처(Cross-Origin)로 실제 요청을 보내기 전, 서버의 허용 출처 및 헤더를 사전 확인하기 위해 보내는 HTTP 사전 요청 메서드는?",
    answer: "OPTIONS (Preflight 요청)"
  },
  {
    id: 80,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "대칭 블록 암호 CBC 모드에서 첫 번째 평문 블록과 XOR 연산을 수행하기 위해 입력하는 무작위 난수 비트 열은?",
    answer: "IV (초기화 벡터 / Initialization Vector)"
  },
  {
    id: 81,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "무작위 서브도메인 질의를 연속 발생시켜 권위 네임서버의 응답보다 먼저 위조된 글루 레코드를 주입하는 지능형 DNS 캐시 포이즈닝 기법은?",
    answer: "카민스키 공격 (Kaminsky Attack)"
  },
  {
    id: 82,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "디지털 포렌식 증거의 수집부터 법정 제출까지 모든 취급자와 보관 장소를 연속 기록하여 증거 훼손이 없음을 입증하는 원칙은?",
    answer: "연계보관성의 원칙 (Chain of Custody)"
  },
  {
    id: 83,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "사용자 입력값에 개행 문자(`%0D%0A`)를 주입하여 HTTP 응답 헤더와 본문을 강제 분리시키고 위조된 본문(XSS 등)을 출력시키는 공격은?",
    answer: "HTTP 응답 분할 (CRLF Injection)"
  },
  {
    id: 84,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "IEEE 802.1Q 트렁크 환경에서 2개의 802.1Q 태그를 삽입한 패킷을 전송하여 외부에서 접근할 수 없는 격리된 VLAN으로 패킷을 침투시키는 공격은?",
    answer: "VLAN 홉핑 (VLAN Hopping / 이중 태깅 공격)"
  },
  {
    id: 85,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "별도의 클라이언트 전용 소프트웨어 설치 없이 표준 웹 브라우저만으로 원격 접근 암호화 터널을 제공하는 전송/응용 계층 기반 VPN 기술은?",
    answer: "SSL VPN"
  },
  {
    id: 86,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "화면에 SQL 에러나 데이터가 출력되지 않을 때, 참/거짓 조건에 따른 응답 차이나 DB 지연 함수(SLEEP)를 이용해 데이터를 1글자씩 추출하는 공격은?",
    answer: "블라인드 SQL 인젝션 (Blind SQLi)"
  },
  {
    id: 87,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "네트워크 7계층(L7)의 HTTP/HTTPS 페이로드를 검사하여 SQL 인젝션, XSS, 웹쉘 업로드 등 웹 애플리케이션 공격을 실시간 차단하는 보안 솔루션은?",
    answer: "WAF (웹 방화벽 / Web Application Firewall)"
  },
  {
    id: 88,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "리눅스 pacct 회계 로그를 기반으로 특정 사용자나 프로세스가 실행한 명령어 이력, CPU 사용 시간 등을 조회하는 시스템 보안 명령어는?",
    answer: "lastcomm"
  },
  {
    id: 89,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "포인터가 가리키는 메모리가 NULL인 상태에서 참조를 시도할 때 프로그램 비정상 종료(Crash)나 DoS를 유발하는 메모리 소프트웨어 보안 취약점은?",
    answer: "NULL Pointer 역참조 (Null Pointer Dereference)"
  },
  {
    id: 90,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "IP 주소를 모르는 디스크 없는 호스트(디스크리스 워크스테이션)가 자신의 MAC 주소를 브로드캐스트하여 서버로부터 IP를 할당받는 프로토콜은?",
    answer: "RARP (Reverse ARP)"
  },
  {
    id: 91,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "침해사고를 선제적으로 방어하기 위해 공격자의 행동 단계(정찰→무기화→전달→취약점 악용→설치→C2→행동)를 7단계로 모델링한 보안 프레임워크는?",
    answer: "사이버 킬체인 (Cyber Kill Chain)"
  },
  {
    id: 92,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "스마트폰 모바일 앱에서 커스텀 스킴 URL(`myapp://...`)을 호출하여 다른 앱을 실행하거나 특정 파라미터 화면으로 직행시키는 기능이자 취약점 표적은?",
    answer: "딥링크 (Deeplink / Custom URL Scheme)"
  },
  {
    id: 93,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹 공격자가 서버로 하여금 내부망 비인가 주소(`127.0.0.1`, 클라우드 메타데이터 URL 등)로 조작된 HTTP 요청을 대신 전송하게 만드는 취약점 공격은?",
    answer: "SSRF (Server-Side Request Forgery)"
  },
  {
    id: 94,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "자바 DB 연동 시 SQL 파라미터를 '?' 플레이스홀더로 컴파일 후 바인딩하여 특수문자 조작을 원천 방어하는 가장 확실한 방어 인터페이스는?",
    answer: "PreparedStatement"
  },
  {
    id: 95,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "공격자가 출발지 IP를 희생자 IP로 위조한 후 서브넷 브로드캐스트 주소로 ICMP Echo Request를 대량 전송하여 희생자를 고갈시키는 증폭 공격은?",
    answer: "스머핑 (Smurf 공격 / Direct Broadcast)"
  },
  {
    id: 96,
    chapterId: "system",
    chapterName: "제1과목 시스템 보안",
    question: "공격자가 특정 계정의 암호를 알아내기 위해 시스템에 접속을 반복 시도하다가 '실패한 로그인 기록'(/var/log/btmp)을 확인하는 명령어는?",
    answer: "lastb"
  },
  {
    id: 97,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "재해 발생 시 비즈니스 핵심 기능의 중단 영향을 평가하여 RTO(목표복구시간)와 RPO(목표복구시점)를 산출하는 재해복구 분석 활동은?",
    answer: "BIA (업무 영향 분석 / Business Impact Analysis)"
  },
  {
    id: 98,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "정보보호 위험 대응 전략 중 위험 수준이 수용 가능한 한계치(DoA) 이하일 때 별도의 추가 통제 없이 조직이 위험을 그대로 감수하는 전략은?",
    answer: "위험 수용 (Risk Acceptance)"
  },
  {
    id: 99,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "모든 자산에 기본 보안 대책을 일괄 적용(기준선)한 후, 고위험 중요 자산에 대해서만 추가 상세 위험분석을 수행하는 고효율 절충형 위험분석법은?",
    answer: "복합적 접근법 (Combined Approach)"
  },
  {
    id: 100,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "NTP 증폭 디도스 공격(Monlist)을 방어하기 위해 ntp.conf 설정 파일에서 반드시 비활성화해야 하는 쿼리 제한 옵션은?",
    answer: "noquery (또는 nomodify noquery)"
  },
  {
    id: 101,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "개인정보의 안전성 확보조치 기준에서 전산실, 자료보관실 등 개인정보를 보관하는 중요 장소에 대해 출입 인가를 설정하고 통제하는 물리적 구역은?",
    answer: "통제구역"
  },
  {
    id: 102,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "기업에서 정보기술(IT) 인프라 구축 및 혁신을 총괄하는 책임자와 정보보호 정책 및 보안 거버넌스를 전담하는 최고책임자를 분리할 때 각각의 직책은?",
    answer: "CIO (최고정보책임자) / CISO (최고정보보호책임자)"
  }
];

