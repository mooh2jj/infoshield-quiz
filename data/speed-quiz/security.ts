import type { SpeedQuizChapter, SpeedQuizItem } from "./types";

export const SECURITY_CHAPTERS: SpeedQuizChapter[] = [
  { id: "system", name: "제1과목 시스템 보안", shortName: "시스템 보안" },
  { id: "network", name: "제2과목 네트워크 보안", shortName: "네트워크 보안" },
  { id: "application", name: "제3과목 애플리케이션 보안", shortName: "애플리케이션 보안" },
  { id: "general", name: "제4과목 정보보안 일반", shortName: "정보보안 일반" },
  { id: "law", name: "제5과목 정보보안 관리 및 법규", shortName: "관리 및 법규" },
];

export const SECURITY_QUIZ_LIST: SpeedQuizItem[] = [
  // === [제1과목] 시스템 보안 ===
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

  // === [제2과목] 네트워크 보안 ===
  {
    id: 4,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "TCP 3-Way Handshake 과정에서 대량의 SYN 패킷만을 서버로 전송하여 백로그 큐(Backlog Queue)를 고갈시키는 DoS 공격은?",
    answer: "SYN 플러딩 (SYN Flooding)"
  },
  {
    id: 5,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "공격자가 자신의 MAC 주소를 게이트웨이 또는 피해자의 MAC 주소인 것처럼 위조하여 트래픽을 도청·가로채는 공격은?",
    answer: "ARP 스푸핑 (ARP Spoofing)"
  },
  {
    id: 6,
    chapterId: "network",
    chapterName: "제2과목 네트워크 보안",
    question: "출발지 IP를 희생자 IP로 위조한 후 브로드캐스트 주소로 대량의 ICMP Echo Request를 보내 희생자를 마비시키는 증폭 공격은?",
    answer: "스머프 공격 (Smurf Attack)"
  },

  // === [제3과목] 애플리케이션 보안 ===
  {
    id: 7,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹 애플리케이션의 입력값 검증 미흡을 악용하여 악의적인 SQL 구문을 삽입함으로써 DB를 무단 조회·변조하는 웹 공격은?",
    answer: "SQL 인젝션 (SQL Injection)"
  },
  {
    id: 8,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "웹사이트에 악성 스크립트를 삽입하여 이를 열람하는 피해자의 브라우저에서 세션 쿠키 탈취 등의 악의적 행위를 수행하는 공격은?",
    answer: "XSS (크로스 사이트 스크립팅)"
  },
  {
    id: 9,
    chapterId: "application",
    chapterName: "제3과목 애플리케이션 보안",
    question: "로그인된 피해자의 권한과 신뢰 관계를 도용하여 공격자가 의도한 위조 요청(비밀번호 변경, 송금 등)을 강제로 전송하게 하는 공격은?",
    answer: "CSRF (크로스 사이트 요청 위조)"
  },

  // === [제4과목] 정보보안 일반 ===
  {
    id: 10,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "미국 NIST 표준 대칭키 블록 암호 알고리즘으로, 128비트 블록 크기와 128/192/256비트 키 길이를 지원하는 현대 표준 암호는?",
    answer: "AES (Advanced Encryption Standard)"
  },
  {
    id: 11,
    chapterId: "general",
    chapterName: "제4과목 정보보안 일반",
    question: "두 개의 거대한 소수의 곱을 소인수분해하기 어렵다는 수학적 난제를 기반으로 동작하는 대표적인 비대칭키(공개키) 암호 알고리즘은?",
    answer: "RSA (Rivest-Shamir-Adleman)"
  },

  // === [제5과목] 정보보안 관리 및 법규 ===
  {
    id: 12,
    chapterId: "law",
    chapterName: "제5과목 정보보안 관리 및 법규",
    question: "조직의 정보보호 및 개인정보보호 관리체계가 국가 기준에 적합한지 한국인터넷진흥원(KISA) 등이 종합 심사하는 국내 공인 인증 제도는?",
    answer: "ISMS-P"
  }
];
