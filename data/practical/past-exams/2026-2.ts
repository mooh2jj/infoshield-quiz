import type { SecurityPastExamRound } from "./types";

export const SECURITY_PAST_EXAM_2026_2: SecurityPastExamRound = {
  id: "2026-2",
  title: "2026년 제2회 정보보안기사 실기 기출 완제 복원",
  roundLabel: "2026년 2회",
  examDate: "2026년 9월 시행",
  overview: {
    summary:
      "2026년 2회차 실기 18문항 완제 복원입니다. 단답형 1~12번(Linux named.conf/resolv.conf, 라우터 ACL Telnet/FTP 포트, 개인정보 안전성 기준 망분리 3대 조건, KISA 취약성 평가, SIEM, XSS 3대 유형 분류, OpenSSL Heartbleed, hping3, Windows 감사 정책 3종, 대칭키 암호화, BCP, 샌드박스), 서술형 13~15번(원격 무인증 hosts.equiv 차단, 네트워크 DoS 3종 Land/Smurf/Teardrop, 이메일 스푸핑 방지 SPF/DKIM/DMARC), 실무형 16~18번(웹쉘 4대 심층 방어 실무, SetUID/SetGID 점검 및 chmod/find 조치, Linux iptables 5대 방화벽 정책 구성 실무) 전 문항이 수록되었습니다.",
    difficulty: "상",
    passRateEstimate: "약 8.5%",
    keyThemes: [
      "Linux DNS 환경 설정 파일 (named.conf, resolv.conf)",
      "라우터 ACL 서비스 및 포트 번호 분석 (Telnet, FTP 제어 21, FTP 데이터 20)",
      "개인정보 안전성 확보조치 기준 (인터넷망 차단 3대 조건)",
      "KISA 위험 평가 (취약성 평가 / Vulnerability Assessment)",
      "보안 관제 통합 분석 솔루션 (SIEM)",
      "XSS 3대 유형 분류 (반사형, 저장형, DOM 기반)",
      "OpenSSL 하트블리드 (Heartbleed / CVE-2014-0160)",
      "맞춤형 패킷 생성 도구 (hping3)",
      "Windows 감사 정책 (계정 관리, 로그온 이벤트, 권한 사용)",
      "대칭키 암호화 방식 및 비즈니스 연속성 계획 (BCP)",
      "행위 기반 가상 실행 분석 환경 (샌드박스 / Sandbox)",
      "원격 무인증 접속 제한 (/etc/hosts.equiv, .rhosts)",
      "네트워크 DoS 3종 동작 원리 (Land, Smurf, Teardrop)",
      "이메일 스푸핑 방지 3대 메커니즘 (SPF, DKIM, DMARC)",
      "웹 서버 파일 업로드 취약점 및 웹쉘 4대 심층 방어",
      "특수 권한 (SetUID / SetGID) 점검 및 chmod/find 조치",
      "Linux iptables 5대 패킷 필터링 방화벽 정책 구성 실무",
    ],
    analysis: [
      {
        domain: "시스템 보안",
        desc: "Windows 감사(3점), BCP(3점), 샌드박스(3점), 원격 무인증 hosts.equiv(12점), SetUID/SetGID 점검 및 조치(14점), iptables 방화벽 정책 구성(14점)",
      },
      {
        domain: "네트워크 보안",
        desc: "DNS 설정 파일(3점), 라우터 ACL(3점), hping3(3점), DoS 3종 동작원리(12점), 이메일 보안 SPF/DKIM/DMARC(12점), iptables 패킷 필터링(14점/복합)",
      },
      {
        domain: "애플리케이션 보안",
        desc: "XSS 3종 분류(3점), OpenSSL Heartbleed(3점), 대칭키 암호화(3점), 웹쉘 4대 심층 방어 실무(14점)",
      },
      {
        domain: "보안 관리 및 법률",
        desc: "개인정보 안전성 확보조치 망분리(3점), KISA 취약성 평가(3점), SIEM(3점), BCP(3점)",
      },
    ],
  },
  questions: [
    // =================================================================
    // [단답형 1~12번] 문항당 3점
    // =================================================================
    {
      id: 1,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크·시스템 / DNS 설정",
      title: "Linux DNS 환경 설정 파일",
      description:
        "리눅스 시스템의 DNS 환경 설정 파일에 관한 물음이다. 각 설명에 해당하는 파일명을 쓰시오.",
      scenario:
        "(1) BIND DNS 서버의 데몬 환경 및 Zone(영역) 구성을 선언하는 메인 설정 파일\n(2) 리눅스 호스트에서 질의할 네임서버 IP와 기본 도메인을 지정하는 파일",
      subItems: [
        {
          number: 1,
          question: "BIND DNS 서버의 데몬 환경 및 Zone(영역) 구성을 선언하는 메인 설정 파일",
          answer: "named.conf (또는 /etc/named.conf)",
          scoringCriteria: "named.conf 작성 시 1.5점",
        },
        {
          number: 2,
          question: "리눅스 호스트에서 질의할 네임서버 IP와 기본 도메인을 지정하는 파일",
          answer: "resolv.conf (또는 /etc/resolv.conf)",
          scoringCriteria: "resolv.conf 작성 시 1.5점",
        },
      ],
      answer: [
        "(1) named.conf (또는 /etc/named.conf)",
        "(2) resolv.conf (또는 /etc/resolv.conf)",
      ],
      scoringPoints: [
        "(1) named.conf (1.5점)",
        "(2) resolv.conf (1.5점)",
      ],
      explanation:
        "• 서버 데몬 설정 파일(named.conf)과 리졸버(클라이언트) 설정 파일(resolv.conf)의 용도 구분입니다.",
    },
    {
      id: 2,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크 보안 / 라우터 ACL",
      title: "라우터 ACL 차단 규칙 분석",
      description:
        "아래 라우터 ACL 규칙에서 차단되는 서비스 명칭과 해당 TCP 포트 번호를 각각 쓰시오.",
      scenario: `deny tcp any any eq telnet
deny tcp any any eq ftp
deny tcp any any eq ftp-data`,
      answer: [
        "Telnet (TCP 23)",
        "FTP 제어 (TCP 21)",
        "FTP 데이터 (TCP 20)",
      ],
      scoringPoints: [
        "Telnet (TCP 23) (1점)",
        "FTP 제어 (TCP 21) (1점)",
        "FTP 데이터 (TCP 20) (1점)",
      ],
      explanation:
        "• FTP는 제어(21)와 데이터 전송(20)으로 포트가 분리되어 있음을 명확히 기술해야 합니다.",
    },
    {
      id: 3,
      subjectId: "law",
      type: "short",
      score: 3,
      domain: "정보보안 법률 / 안전성 확보조치",
      title: "개인정보 안전성 확보조치 기준 (인터넷망 차단)",
      description:
        "개인정보처리시스템에 대한 ( ① )을 설정할 수 있는 개인정보취급자 및 개인정보를 ( ② ) 또는 ( ③ )할 수 있는 개인정보취급자의 컴퓨터는 물리적 또는 논리적으로 망분리(인터넷망 차단)를 하여야 한다.",
      answer: [
        "① 접속 권한 (또는 접근 권한)",
        "② 다운로드",
        "③ 파기 (또는 삭제)",
      ],
      scoringPoints: [
        "① 접속 권한 또는 접근 권한 (1점)",
        "② 다운로드 (1점)",
        "③ 파기 또는 삭제 (1점)",
      ],
      explanation:
        "• 개인정보보호법 안전성 확보조치 기준 제6조(접근통제) 개정 조문 암기 항목입니다.",
    },
    {
      id: 4,
      subjectId: "law",
      type: "short",
      score: 3,
      domain: "정보보안 관리 / 위험 평가",
      title: "KISA 위험 평가 - 취약성 평가",
      description:
        "위험 분석/평가 방법론 중 정보시스템에 내재된 잠재적 보안 약점과 통제 결함을 식별하여 정량적/정성적 위험 크기를 산정하는 데 기초가 되는 평가 활동은?",
      answer: "취약성 평가 (또는 취약점 평가 / Vulnerability Assessment)",
      scoringPoints: [
        "'취약성 평가' 또는 '취약점 평가' 또는 'Vulnerability Assessment' 기술 시 3점",
      ],
      explanation:
        "• 위협 평가(Threat)와 취약성 평가(Vulnerability)의 유기적 결합입니다.",
    },
    {
      id: 5,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "정보보안 일반 / SIEM",
      title: "보안 관제 및 로그 통합 분석 솔루션 (SIEM)",
      description:
        "다양한 이기종 네트워크/시스템 장비의 대용량 보안 로그를 중앙 집중 수집하여 빅데이터 상관분석을 통해 통합 관제하는 시스템은?",
      answer: "SIEM (Security Information and Event Management)",
      scoringPoints: ["'SIEM' 또는 'Security Information and Event Management' 작성 시 3점"],
      explanation:
        "• 대용량 로그 수집 및 상관분석(Correlation)을 지원하는 통합 관제 플랫폼입니다.",
    },
    {
      id: 6,
      subjectId: "application",
      type: "short",
      score: 3,
      domain: "애플리케이션 보안 / XSS",
      title: "XSS 3대 유형 분류",
      description:
        "다음 각 설명에 해당하는 XSS 공격 유형을 쓰시오.",
      scenario:
        "(1) 공격 링크 클릭 시 파라미터가 서버 응답 페이지를 통해 브라우저로 즉시 반사되는 공격\n(2) 게시판 DB 등에 저장되어 열람자에게 지속적인 피해를 입히는 공격\n(3) 서버 통신 없이 브라우저 내 DOM 객체 조작으로 스크립트가 실행되는 공격",
      subItems: [
        {
          number: 1,
          question: "공격 링크 클릭 시 파라미터가 서버 응답 페이지를 통해 브라우저로 즉시 반사되는 공격",
          answer: "반사형 (Reflected XSS)",
          scoringCriteria: "반사형 또는 Reflected XSS 작성 시 1점",
        },
        {
          number: 2,
          question: "게시판 DB 등에 저장되어 열람자에게 지속적인 피해를 입히는 공격",
          answer: "저장형 (Stored XSS)",
          scoringCriteria: "저장형 또는 Stored XSS 작성 시 1점",
        },
        {
          number: 3,
          question: "서버 통신 없이 브라우저 내 DOM 객체 조작으로 스크립트가 실행되는 공격",
          answer: "DOM 기반 (DOM-based XSS)",
          scoringCriteria: "DOM 기반 또는 DOM-based XSS 작성 시 1점",
        },
      ],
      answer: [
        "(1) 반사형 (Reflected XSS)",
        "(2) 저장형 (Stored XSS)",
        "(3) DOM 기반 (DOM-based XSS)",
      ],
      scoringPoints: [
        "(1) 반사형 / Reflected XSS (1점)",
        "(2) 저장형 / Stored XSS (1점)",
        "(3) DOM 기반 / DOM-based XSS (1점)",
      ],
      explanation:
        "• 각 유형별 전파 경로와 피해 범위 차이입니다.",
    },
    {
      id: 7,
      subjectId: "application",
      type: "short",
      score: 3,
      domain: "애플리케이션 보안 / 오픈소스 취약점",
      title: "OpenSSL 취약점 - 하트블리드 (Heartbleed)",
      description:
        "TLS/DTLS의 Heartbeat 확장에서 요청 페이로드의 길이 검증이 누락되어, 공격자가 최대 64KB의 서버 프로세스 메모리 데이터를 무단으로 유출시킬 수 있었던 치명적 취약점(CVE-2014-0160)의 명칭은?",
      answer: "하트블리드 (Heartbleed)",
      scoringPoints: ["'하트블리드' 또는 'Heartbleed' 기술 시 3점"],
      explanation:
        "• 경계 검사(Boundary Check) 부재로 인한 버퍼 오버리드(Buffer Over-read) 취약점입니다.",
    },
    {
      id: 8,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크 보안 / 패킷 생성",
      title: "맞춤형 패킷 생성 도구 hping3",
      description:
        "Salvatore Sanfilippo가 개발하였으며 TCP, UDP, ICMP 등 다양한 프로토콜의 임의 패킷을 조작/생성하여 방화벽 룰 테스트 및 모의 DoS 공격 실습에 활용되는 CLI 도구는?",
      answer: "hping (또는 hping3)",
      scoringPoints: ["'hping' 또는 'hping3' 기술 시 3점"],
      explanation:
        "• 원시 소켓 기반 패킷 생성 도구로 모의 공격 및 방화벽 테스트에 사용됩니다.",
    },
    {
      id: 9,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / Windows 감사",
      title: "Windows 감사 정책 (Audit Policy) 분류",
      description:
        "Windows 시스템의 로컬 감사 정책에 관한 물음이다. 각 설명에 해당하는 감사 카테고리 명칭을 쓰시오.",
      scenario:
        "(1) 사용자 계정이나 그룹의 생성, 삭제, 이름 변경, 패스워드 재설정을 기록하는 감사\n(2) 사용자가 시스템에 로그인하거나 네트워크를 통해 접속을 시도할 때 성공/실패를 기록하는 감사\n(3) 관리자 권한 및 시스템 특수 권한의 사용 여부를 기록하는 감사",
      subItems: [
        {
          number: 1,
          question: "사용자 계정이나 그룹의 생성, 삭제, 이름 변경, 패스워드 재설정을 기록하는 감사",
          answer: "계정 관리 감사",
          scoringCriteria: "계정 관리 감사 작성 시 1점",
        },
        {
          number: 2,
          question: "사용자가 시스템에 로그인하거나 네트워크를 통해 접속을 시도할 때 성공/실패를 기록하는 감사",
          answer: "로그온 이벤트 감사 (또는 계정 로그온 이벤트 감사)",
          scoringCriteria: "로그온 이벤트 감사 작성 시 1점",
        },
        {
          number: 3,
          question: "관리자 권한 및 시스템 특수 권한의 사용 여부를 기록하는 감사",
          answer: "권한 사용 감사",
          scoringCriteria: "권한 사용 감사 작성 시 1점",
        },
      ],
      answer: [
        "(1) 계정 관리 감사",
        "(2) 로그온 이벤트 감사 (또는 계정 로그온 이벤트 감사)",
        "(3) 권한 사용 감사",
      ],
      scoringPoints: [
        "(1) 계정 관리 감사 (1점)",
        "(2) 로그온 이벤트 감사 (1점)",
        "(3) 권한 사용 감사 (1점)",
      ],
      explanation:
        "• 로컬 보안 정책의 감사 정책 카테고리 명칭 숙지가 필요합니다.",
    },
    {
      id: 10,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "정보보안 일반 / 암호학",
      title: "대칭키 암호화 방식",
      description:
        "치환(Substitution)과 전치(Permutation) 연산을 기본으로 구성하며, 암호화 키와 복호화 키가 동일하여 송·수신자 간 사전에 비밀키를 안전하게 공유해야 하는 암호 체계는?",
      answer: "대칭키 암호화 방식 (대칭 암호 / 비밀키 암호)",
      scoringPoints: [
        "'대칭키 암호화 방식' 또는 '대칭 암호' 또는 '비밀키 암호' 기술 시 3점",
      ],
      explanation:
        "• 키 배송 문제(Key Distribution Problem)가 발생하지만 대량 데이터의 고속 처리에 적합합니다.",
    },
    {
      id: 11,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "보안 관리 / 비즈니스 연속성",
      title: "비즈니스 연속성 계획 (BCP)",
      description:
        "재난, 재해, 사이버 공격 등으로 비즈니스 중단 사태가 발생했을 때 핵심 업무의 손실을 최소화하고 영속성을 유지하기 위해 수립하는 포괄적인 관리 체계는?",
      answer: "BCP (Business Continuity Plan, 업무 연속성 계획)",
      scoringPoints: [
        "'BCP' 또는 'Business Continuity Plan' 또는 '업무 연속성 계획' 기술 시 3점",
      ],
      explanation:
        "• BIA(업무영향분석) -> RTO/RPO 설정 -> BCP/DRP 수립 단계로 이어집니다.",
    },
    {
      id: 12,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "보안 일반 / 악성코드 분석",
      title: "샌드박스 (Sandbox)",
      description:
        "외부에서 유입된 악성코드나 비인가 실행 파일의 실제 행위를 분석하기 위해 실제 운영체제 및 네트워크로부터 격리된 안전한 가상 실행 환경을 무엇이라 하는가?",
      answer: "샌드박스 (Sandbox)",
      scoringPoints: ["'샌드박스' 또는 'Sandbox' 기술 시 3점"],
      explanation:
        "• 행위 기반 동적 분석 격리 가상 환경입니다.",
    },

    // =================================================================
    // [서술형 13~15번] 문항당 12점
    // =================================================================
    {
      id: 13,
      subjectId: "system",
      type: "descriptive",
      score: 12,
      domain: "시스템 보안 / 계정 신뢰 관리",
      title: "원격 무인증 접속 제한 설정 (/etc/hosts.equiv, $HOME/.rhosts)",
      description:
        "과거 r-command 계열 서비스의 무인증 접근 취약점을 방지하기 위한 설정 파일 점검 기준에 대해 (1) 소유자, (2) 파일 권한, (3) 파일 내에서 반드시 제거해야 할 특수문자 및 그 이유를 서술하시오.",
      subItems: [
        {
          number: 1,
          question: "해당 설정 파일들의 적정 소유자 기준",
          answer: "root 또는 해당 사용자 계정",
          scoringCriteria: "root 또는 해당 사용자 계정 명시 시 3.5점",
        },
        {
          number: 2,
          question: "해당 설정 파일들의 적정 파일 권한 기준",
          answer: "600 이하 (소유자 외 읽기/쓰기/실행 권한 박탈)",
          scoringCriteria: "600 이하 명시 시 4점",
        },
        {
          number: 3,
          question: "파일 내에서 반드시 제거해야 할 특수문자 및 그 이유",
          answer:
            "• 제거 기호: `+` (플러스 기호)\n• 이유: `+` 설정 시 모든 원격 호스트 및 모든 계정에 대해 패스워드 인증 없는 로그인(Trust 접속)을 허용하는 심각한 보안 결함이 발생하기 때문.",
          scoringCriteria: "+ 기호 명시(2점), 모든 호스트/계정 무인증 로그인 허용 이유 서술(2.5점) 총 4.5점",
        },
      ],
      answer: [
        "1. 소유자: root 또는 해당 사용자 계정",
        "2. 파일 권한: 600 이하",
        "3. 제거 기호 및 이유: `+` (플러스 기호) / 모든 원격 호스트 및 사용자의 패스워드 없는 Trust 로그인을 허용하므로 반드시 제거해야 함",
      ],
      scoringPoints: [
        "소유자 root 또는 해당 계정 (3.5점)",
        "파일 권한 600 이하 (4점)",
        "+ 기호 및 무인증 전면 허용 위험성 (4.5점)",
      ],
      explanation:
        "• Unix/Linux 주요정보통신기반시설 기술적 가이드라인 필수 점검 항목입니다.",
    },
    {
      id: 14,
      subjectId: "network",
      type: "descriptive",
      score: 12,
      domain: "네트워크 보안 / DoS",
      title: "네트워크 DoS(서비스 거부) 공격 3종 동작 원리",
      description:
        "Land Attack, Smurf Attack, Teardrop Attack의 패킷 조작 메커니즘을 각각 서술하시오.",
      subItems: [
        {
          number: 1,
          question: "Land Attack의 패킷 조작 메커니즘",
          answer: "출발지(Source) IP 주소와 목적지(Destination) IP 주소를 희생자의 IP 주소로 동일하게 변조한 TCP SYN 패킷을 전송하여, 수신 시스템이 자기 자신과 세션을 맺거나 응답 루프에 빠져 CPU 및 네트워크 스택 자원을 고갈시키는 공격.",
          scoringCriteria: "출발지 IP = 목적지 IP = 희생자 IP 변조 원리 서술 시 4점",
        },
        {
          number: 2,
          question: "Smurf Attack의 패킷 조작 메커니즘",
          answer: "출발지 IP를 희생자의 IP로 위조한 후 서브넷의 다이렉트 브로드캐스트(Directed Broadcast) 주소로 대량의 ICMP Echo Request를 전송하여, 네트워크 내 모든 호스트가 일제히 희생자 IP로 Echo Reply를 쏟아붓게 해 대역폭을 고갈시키는 공격.",
          scoringCriteria: "희생자 IP 위조 및 브로드캐스트 주소 전송, 대량 Reply 증폭 서술 시 4점",
        },
        {
          number: 3,
          question: "Teardrop Attack의 패킷 조작 메커니즘",
          answer: "패킷 단편화(Fragmentation) 전송 시 오프셋(Fragment Offset) 값을 조작하여 조각 간의 중복(Overlap) 또는 누락을 유발함으로써, 패킷 재조합(Reassembly) 루틴의 바운드 에러를 유발해 시스템 크래시를 일으키는 공격.",
          scoringCriteria: "Fragment Offset 조작 및 재조합 중복(Overlap) 오류 유발 서술 시 4점",
        },
      ],
      answer: [
        "1. Land Attack: 출발지/목적지 IP를 희생자 IP로 동일 변조하여 자기 자신과의 루프 세션으로 자원 고갈",
        "2. Smurf Attack: 출발지 IP를 희생자로 위조하여 브로드캐스트로 ICMP Echo Request 전송, 대량 Reply 증폭 유도",
        "3. Teardrop Attack: 패킷 단편화 오프셋(Fragment Offset)을 중복 조작하여 재조합 루틴 오류로 시스템 크래시 유발",
      ],
      scoringPoints: [
        "Land: 출발지/목적지 IP 동일 변조 (4점)",
        "Smurf: 브로드캐스트 및 Echo Reply 증폭 (4점)",
        "Teardrop: 오프셋 중복(Overlap) 조작 (4점)",
      ],
      explanation:
        "• IP 스푸핑(Land, Smurf), 브로드캐스트 증폭(Smurf), 오프셋 중복 조작(Teardrop) 핵심 키워드를 포함해야 합니다.",
    },
    {
      id: 15,
      subjectId: "network",
      type: "descriptive",
      score: 12,
      domain: "네트워크·메일 보안 / SPF·DKIM·DMARC",
      title: "이메일 스푸핑 방지 3대 메커니즘 (SPF, DKIM, DMARC)",
      description:
        "이메일 스푸핑 방지를 위한 기술에 관한 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "SPF 검증 시 수신 메일 서버가 대조하는 핵심 정보는 무엇인가?",
          answer: "수신 메일 서버에 연결된 발신 메일 서버의 실제 IP 주소가 발신 도메인의 SPF 레코드에 선언된 허용 IP와 일치하는지 대조한다.",
          scoringCriteria: "발신 메일 서버 실제 IP와 발신 도메인 SPF 등록 허용 IP 대조 명시 시 3점",
        },
        {
          number: 2,
          question: "SPF 정책 조회를 위해 질의하는 DNS 레코드 타입을 쓰시오.",
          answer: "DNS TXT 레코드 (예: v=spf1 ... ~all)",
          scoringCriteria: "DNS TXT 레코드 작성 시 3점",
        },
        {
          number: 3,
          question: "DKIM 검증을 위해 발신자가 전자서명 검증용 공개키를 수신측과 공유하는 방식을 서술하시오.",
          answer: "발신 도메인의 DNS TXT 레코드에 공개키를 등록하여, 수신 메일 서버가 DNS 질의를 통해 공개키를 획득하고 메일 헤더의 DKIM 디지털 서명을 검증하도록 한다.",
          scoringCriteria: "발신 도메인 DNS TXT 레코드에 공개키 등록 명시 시 3점",
        },
        {
          number: 4,
          question: "SPF/DKIM 인증 실패 시 수신측의 메일 처리 정책(격리, 거부 등)을 선언하는 프로토콜의 명칭을 쓰시오.",
          answer: "DMARC (Domain-based Message Authentication, Reporting and Conformance)",
          scoringCriteria: "DMARC 기술 시 3점",
        },
      ],
      answer: [
        "(1) SPF 검증 정보: 발신 메일 서버의 실제 IP vs 발신 도메인 SPF에 등록된 허용 IP 목록",
        "(2) DNS 레코드 타입: DNS TXT 레코드",
        "(3) DKIM 공개키 공유: 발신 도메인의 DNS TXT 레코드에 공개키 등록",
        "(4) 정책 선언 프로토콜: DMARC (Domain-based Message Authentication, Reporting and Conformance)",
      ],
      scoringPoints: [
        "SPF 검증 정보 대조 (3점)",
        "DNS TXT 레코드 (3점)",
        "DNS TXT 공개키 등록 (3점)",
        "DMARC 프로토콜 (3점)",
      ],
      explanation:
        "• IP 기반 검증(SPF) -> 전자서명 기반 검증(DKIM) -> 실패 처리 정책 및 리포팅(DMARC) 흐름입니다.",
    },

    // =================================================================
    // [실무형 16~18번] 문항당 14점 (실전 2문항 선택)
    // =================================================================
    {
      id: 16,
      subjectId: "application",
      type: "practical",
      score: 14,
      domain: "애플리케이션 보안 / 웹쉘 방어",
      title: "웹 서버 파일 업로드 취약점 및 웹쉘(WebShell) 방어 실무",
      description:
        "웹 애플리케이션의 게시판 첨부파일 기능을 통한 웹쉘 업로드 공격을 방어하기 위한 대책 4가지를 애플리케이션 및 인프라 관점에서 서술하시오.",
      answer: [
        "1. 화이트리스트 확장자 검증: 서버단 코드에서 실행 가능한 확장자(.php, .jsp, .asp 등)를 배제하고 허용된 안전한 확장자(.jpg, .png, .pdf 등)만 업로드되도록 엄격히 검증",
        "2. 업로드 디렉터리 실행 권한 제거: 웹 서버 설정(Apache Options -ExecCGI, Nginx location 블록)을 통해 업로드 디렉터리 내 스크립트 실행 권한을 원천 차단",
        "3. 웹 루트(DocumentRoot) 외부 저장: 파일 저장 위치를 웹 문서 루트 디렉터리 외부에 격리하여 URL을 통한 직접 호출(Direct Execution)을 방지",
        "4. 파일명 난수화 및 확장자 치환: 저장 시 파일명을 UUID 또는 해시값으로 변경하여 공격자가 자신이 업로드한 파일의 경로와 실행 파일명을 유추하지 못하도록 처리",
      ],
      scoringPoints: [
        "화이트리스트 확장자 검증 (3.5점)",
        "업로드 디렉터리 실행 권한 제거 (3.5점)",
        "웹 루트(DocumentRoot) 외부 저장 (3.5점)",
        "파일명 난수화 / UUID 치환 (3.5점)",
      ],
      explanation:
        "• 클라이언트(JS) 검증의 한계와 다계층 심층 방어(서버단 검증 + 파일시스템 권한 + 웹서버 파싱 억제) 전략입니다.",
    },
    {
      id: 17,
      subjectId: "system",
      type: "practical",
      score: 14,
      domain: "시스템 보안 / 특수 권한 점검",
      title: "리눅스 특수 권한(SetUID / SetGID) 점검 및 조치",
      description:
        "리눅스 시스템의 SetUID / SetGID 권한 점검 및 조치에 관한 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "SetUID가 설정된 바이너리 파일 관리 부실 시 발생하는 보안 위험을 서술하시오.",
          answer: "일반 사용자가 해당 명령어를 실행하더라도 실행 순간 파일 소유자(root) 권한으로 프로세스가 동작하므로, 바이너리의 취약점(버퍼 오버플로우 등)을 악용하여 로컬 권한 상승(Privilege Escalation)이 발생하고 시스템 최고 권한을 탈취당할 수 있음.",
          scoringCriteria: "소유자 root 권한 동작 및 로컬 권한 상승(Privilege Escalation) 위험 서술 시 5점",
        },
        {
          number: 2,
          question: "특정 실행 파일(`test_bin`)에서 SetUID 및 SetGID를 제거하는 명령어를 각각 작성하시오.",
          answer: [
            "SUID 제거: chmod u-s test_bin",
            "SGID 제거: chmod g-s test_bin",
          ],
          scoringCriteria: "chmod u-s test_bin (2.5점), chmod g-s test_bin (2.5점) 총 5점",
        },
        {
          number: 3,
          question: "파일시스템 전체에서 root 소유의 SetUID가 설정된 파일을 탐색하는 `find` 명령어를 작성하시오.",
          answer: "find / -user root -perm -4000 -print (또는 find / -user root -perm -u=s -type f 2>/dev/null)",
          scoringCriteria: "find / -user root -perm -4000 정확히 작성 시 4점",
        },
      ],
      answer: [
        "1. 보안 위험: 프로세스가 소유자(root) 권한으로 동작하여 취약점 악용 시 로컬 권한 상승(Privilege Escalation) 발생",
        "2. 제거 명령어:\n• SUID 제거: chmod u-s test_bin\n• SGID 제거: chmod g-s test_bin",
        "3. root 소유 SUID 탐색 명령어:\nfind / -user root -perm -4000 -print",
      ],
      scoringPoints: [
        "로컬 권한 상승(Privilege Escalation) 위험 서술 (5점)",
        "chmod u-s 및 chmod g-s 명령어 (5점)",
        "find -user root -perm -4000 명령어 (4점)",
      ],
      explanation:
        "• SetUID(4000), SetGID(2000), Sticky Bit(1000) 8진수 비트 구조 및 find 명령어의 -perm 옵션 활용입니다.",
    },
    {
      id: 18,
      subjectId: "system",
      type: "practical",
      score: 14,
      domain: "시스템·네트워크 보안 / iptables 방화벽",
      title: "Linux iptables 패킷 필터링 방화벽 정책 구성 실무",
      description:
        "리눅스 방화벽 `iptables`를 이용하여 다음 요구사항을 만족하는 룰셋 설정 명령어를 작성하시오.\n\n[요구사항]\n1. 외부로부터 들어오는 모든 인바운드 패킷의 기본 정책을 `DROP`으로 설정\n2. 루프백(lo) 인터페이스를 통한 패킷은 모두 허용\n3. 연결이 이미 확립되었거나 연관된 세션 패킷(`ESTABLISHED`, `RELATED`)은 허용\n4. 관리자 IP(`192.168.1.100`)에서 들어오는 SSH(TCP 22) 접속만 허용\n5. 모든 외부 IP로부터 웹 서비스(TCP 80, 443) 접속 허용",
      subItems: [
        {
          number: 1,
          question: "요구사항 1: 인바운드 기본 정책 DROP 설정 구문",
          answer: "iptables -P INPUT DROP",
          scoringCriteria: "iptables -P INPUT DROP (2.5점)",
        },
        {
          number: 2,
          question: "요구사항 2: 루프백 인터페이스 허용 구문",
          answer: "iptables -A INPUT -i lo -j ACCEPT",
          scoringCriteria: "iptables -A INPUT -i lo -j ACCEPT (2.5점)",
        },
        {
          number: 3,
          question: "요구사항 3: 기존 확립/연관 세션 허용 (Stateful Inspection) 구문",
          answer: "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT (또는 -m conntrack --ctstate ESTABLISHED,RELATED)",
          scoringCriteria: "-m state --state ESTABLISHED,RELATED -j ACCEPT (3점)",
        },
        {
          number: 4,
          question: "요구사항 4: 관리자 IP(192.168.1.100) 대상 SSH 허용 구문",
          answer: "iptables -A INPUT -p tcp -s 192.168.1.100 --dport 22 -j ACCEPT",
          scoringCriteria: "-p tcp -s 192.168.1.100 --dport 22 -j ACCEPT (3점)",
        },
        {
          number: 5,
          question: "요구사항 5: 웹 서비스 포트(80, 443) 다중 허용 구문",
          answer: "iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT",
          scoringCriteria: "-p tcp -m multiport --dports 80,443 -j ACCEPT (3점)",
        },
      ],
      answer: [
        "# 1. 기본 정책 설정\niptables -P INPUT DROP\n\n# 2. 루프백 인터페이스 허용\niptables -A INPUT -i lo -j ACCEPT\n\n# 3. 기존 세션 허용 (Stateful Inspection)\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n\n# 4. 관리자 IP 특정 SSH 허용\niptables -A INPUT -p tcp -s 192.168.1.100 --dport 22 -j ACCEPT\n\n# 5. 웹 서비스 포트 다중 허용\niptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT",
      ],
      codeBlock: {
        language: "bash",
        code: `# 1. 기본 정책 설정 (Default DROP)
iptables -P INPUT DROP

# 2. 루프백 인터페이스 허용
iptables -A INPUT -i lo -j ACCEPT

# 3. 기존 세션 허용 (Stateful Inspection)
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# 4. 관리자 IP 특정 SSH 허용
iptables -A INPUT -p tcp -s 192.168.1.100 --dport 22 -j ACCEPT

# 5. 웹 서비스 포트 다중 허용 (HTTP, HTTPS)
iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT`,
      },
      scoringPoints: [
        "기본 정책 iptables -P INPUT DROP (2.5점)",
        "루프백 -i lo 허용 (2.5점)",
        "상태 추적 -m state --state ESTABLISHED,RELATED (3점)",
        "관리자 특정 IP -s 192.168.1.100 --dport 22 (3점)",
        "멀티포트 -m multiport --dports 80,443 (3점)",
      ],
      explanation:
        "• Default Drop 원칙, 루프백 인터페이스 필수 허용, 상태 추적 모듈(`-m state`), 멀티포트(`-m multiport`) 옵션 작성법입니다.",
    },
  ],
};
