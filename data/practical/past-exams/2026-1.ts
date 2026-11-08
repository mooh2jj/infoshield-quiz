import type { SecurityPastExamRound } from "./types";

export const SECURITY_PAST_EXAM_2026_1: SecurityPastExamRound = {
  id: "2026-1",
  title: "2026년 제1회 정보보안기사 실기 기출 완제 복원",
  roundLabel: "2026년 1회",
  examDate: "2026년 4월 시행",
  overview: {
    summary:
      "2026년 1회차 실기 18문항 완제 복원입니다. 단답형 1~12번(/etc/passwd의 'x' 마스킹, DNS 스푸핑, iptables icmp-type 8 DROP, Tripwire/Nessus, Windows httperr 로그, 단방향 해시 함수, KISA 위험관리 6단계, 퍼징, Sendmail /etc/mail/access, IIS URL Rewrite, IDC 사업자, SIEM), 서술형 13~15번(CISO 법정 4대 업무, XSS 3대 유형 비교, 생체인식 정보 보호 6대 원칙 중 4가지), 실무형 16~18번(SSL/TLS 핸드셰이크 공개키 vs 대칭키 활용, Fiddler HTTPS 복호화 및 XSS 방어, 쿠키 vs 세션 비교 및 CSRF 방어 구현) 전 문항이 수록되었습니다.",
    difficulty: "상",
    passRateEstimate: "약 9.1%",
    keyThemes: [
      "Linux /etc/passwd 패스워드 마스킹 ('x')",
      "DNS 스푸핑 (DNS Spoofing)",
      "iptables ICMP Ping 차단 (-p icmp --icmp-type 8 -j DROP)",
      "Tripwire(무결성) 및 Nessus(취약점 진단)",
      "Windows IIS httperr 로그 디렉터리",
      "KISA 위험 관리 6단계 프로세스",
      "퍼징 (Fuzzing / Fuzz Testing)",
      "Sendmail 스팸 릴레이 통제 (/etc/mail/access & access.db)",
      "IIS URL Rewrite 모듈 및 서버 정보 은닉",
      "집적정보통신시설 사업자 (IDC 사업자) 및 SIEM",
      "CISO(정보보호최고책임자)의 법정 4대 핵심 업무",
      "XSS 3대 유형 (저장형, 반사형, DOM 기반) 비교",
      "생체인식 정보 보호 6대 기본 원칙 (비례성, 적법성, 목적제한, 안전성)",
      "SSL/TLS 핸드셰이크 단계별 암호화 알고리즘 (비대칭키 vs 대칭키)",
      "Fiddler 프록시 HTTPS 복호화 (루트 CA 설치) 및 XSS 방어",
      "쿠키 vs 세션 상태 관리 비교 및 CSRF 토큰/SameSite 방어",
    ],
    analysis: [
      {
        domain: "시스템 보안",
        desc: "/etc/passwd 마스킹(3점), Tripwire/Nessus(3점), Windows httperr 로그(3점), 퍼징 테스트(3점), Fiddler 프록시 분석(14점/복합)",
      },
      {
        domain: "네트워크 보안",
        desc: "DNS 스푸핑(3점), iptables ICMP DROP(3점), Sendmail /etc/mail/access(3점), SSL/TLS 핸드셰이크 알고리즘(14점/복합)",
      },
      {
        domain: "애플리케이션 보안",
        desc: "IIS URL Rewrite(3점), 단방향 해시(3점), XSS 3대 유형 서술(12점), Fiddler XSS 방어(14점/복합), 쿠키/세션 및 CSRF 방어(14점)",
      },
      {
        domain: "보안 관리 및 법률",
        desc: "위험 관리 6단계(3점), IDC 사업자(3점), SIEM(3점), CISO 법정 4대 업무 서술(12점), 생체인식 정보 보호 6대 원칙(12점)",
      },
    ],
  },
  questions: [
    // =================================================================
    // [단답형 1~12번] 문항당 3점
    // =================================================================
    {
      id: 1,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / 계정 관리",
      title: "Linux /etc/passwd 패스워드 마스킹",
      description:
        "`/etc/passwd` 파일에서 패스워드가 `/etc/shadow` 파일로 쉐도잉되어 안전하게 분리 관리되고 있음을 나타내는 두 번째 필드의 기호는?",
      answer: "x",
      scoringPoints: ["'x' 문자 정확히 기술 시 3점"],
      explanation:
        "• 과거 평문 해시 저장 방식의 한계와 shadow 파일 분리 메커니즘입니다.",
    },
    {
      id: 2,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크 보안 / DNS 공격",
      title: "DNS 스푸핑 (DNS Spoofing)",
      description:
        "클라이언트가 정상 DNS 서버로 도메인 질의를 보냈을 때, 동일 네트워크 상에서 패킷을 가로채 실제 DNS 서버의 응답보다 먼저 조작된 응답(IP) 패킷을 주입하는 공격 기법은?",
      answer: "DNS 스푸핑 (DNS Spoofing)",
      scoringPoints: ["'DNS 스푸핑' 또는 'DNS Spoofing' 작성 시 3점"],
      explanation:
        "• ARP 스푸핑과 결합된 MITM 방식. DNS 캐시 포이즈닝(서버 대상 공격)과의 명확한 주체 비교가 중요합니다.",
    },
    {
      id: 3,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크 보안 / iptables",
      title: "iptables ICMP Ping 차단 규칙",
      description:
        "외부로부터 들어오는 Ping(Echo Request) 요청을 시스템의 존재를 숨기기 위해 응답 없이 버리도록 iptables 정책을 설정하고자 한다. 빈칸을 채우시오.",
      scenario: "iptables -A INPUT -p ( ① ) --icmp-type ( ② ) -j ( ③ )",
      answer: [
        "① icmp",
        "② 8 (또는 echo-request)",
        "③ DROP",
      ],
      scoringPoints: [
        "① icmp (1점)",
        "② 8 또는 echo-request (1점)",
        "③ DROP (1점)",
      ],
      explanation:
        "• Echo Request(8), Echo Reply(0). `REJECT`는 ICMP unreachable 응답을 반환하여 시스템의 존재를 알리므로 스텔스 차단에는 `DROP` 사용.",
    },
    {
      id: 4,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / 보안 도구",
      title: "시스템 무결성 점검 도구 및 취약점 스캐너",
      description:
        "다음 각 설명에 해당하는 대표적인 보안 도구의 명칭을 기술하시오.",
      scenario:
        "(1) 시스템 주요 바이너리 및 설정 파일의 해시 DB를 구축하고, 정기적으로 변경 여부를 대조하는 무결성 점검 도구\n(2) 미국의 Tenable사에서 제작한 대표적인 호스트 및 네트워크 취약점 진단 도구",
      answer: [
        "(1) 트립와이어 (Tripwire)",
        "(2) Nessus (넥서스)",
      ],
      scoringPoints: [
        "(1) 트립와이어 / Tripwire (1.5점)",
        "(2) Nessus / 넥서스 (1.5점)",
      ],
      explanation:
        "• 호스트 기반 침입 탐지/무결성 도구(Tripwire, AIDE)와 종합 취약점 진단 도구(Nessus)입니다.",
    },
    {
      id: 5,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / Windows 로그",
      title: "Windows 서비스 에러 로그 디렉터리 (httperr)",
      description:
        "Windows IIS 웹 서버 환경에서 HTTP 요청 처리 실패 및 프로토콜 에러 로그가 저장되는 `System32\\LogFiles` 하위 폴더 명칭은?",
      answer: "httperr (경로: C:\\Windows\\System32\\LogFiles\\HTTPERR)",
      scoringPoints: ["'httperr' 또는 'HTTPERR' 기술 시 3점"],
      explanation:
        "• HTTPERR 로그는 웹 요청이 IIS 워커 프로세스(w3wp.exe)에 도달하기 전 `HTTP.sys` 커널 드라이버에서 발생하는 오류를 기록합니다.",
    },
    {
      id: 6,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "암호학 / 해시 함수",
      title: "단방향 암호화 (Hash Function)",
      description:
        "임의의 길이를 갖는 평문을 고정된 길이의 비트열로 출력하며, 단방향성을 지녀 원문 역산이 불가능한 암호 기술은?",
      answer: "해시 함수 (단방향 해시 / Hash)",
      scoringPoints: ["'해시 함수' 또는 '단방향 해시' 또는 'Hash' 기술 시 3점"],
      explanation:
        "• 충돌 저항성(Collision Resistance)과 역상 저항성(Preimage Resistance)을 갖는 단방향 암호 기술입니다.",
    },
    {
      id: 7,
      subjectId: "law",
      type: "short",
      score: 3,
      domain: "정보보안 관리 / 위험 관리",
      title: "KISA 위험 관리 6단계 프로세스",
      description:
        "다음 위험 관리 단계의 빈칸을 채우시오.",
      scenario: "전략 및 계획 수립 → ( ① ) → ( ② ) → 대책 선정 → 계획 수립 → ( ③ )",
      answer: [
        "① 위험 분석 (Risk Analysis)",
        "② 위험 평가 (Risk Evaluation)",
        "③ 대책 구현 및 운영 (또는 실행)",
      ],
      scoringPoints: [
        "① 위험 분석 (1점)",
        "② 위험 평가 (1점)",
        "③ 대책 구현 및 운영/실행 (1점)",
      ],
      explanation:
        "• 분석(식별)과 평가(DoA 대조 및 우선순위 선정)의 구분이 핵심 포인트입니다.",
    },
    {
      id: 8,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "소프트웨어 보안 / 테스팅",
      title: "퍼징 (Fuzzing)",
      description:
        "소프트웨어의 잠재적 결함, 버퍼 오버플로우, 메모리 누수를 유발하기 위해 비정상적이거나 예상치 못한 무작위 입력값을 대량 주입하는 블랙박스 테스팅 기법은?",
      answer: "퍼징 (Fuzzing / Fuzz Testing)",
      scoringPoints: ["'퍼징' 또는 'Fuzzing' 또는 'Fuzz Testing' 기술 시 3점"],
      explanation:
        "• 시큐어 코딩 검증 및 제로데이 취약점 발굴 자동화 기법입니다.",
    },
    {
      id: 9,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크·메일 보안 / Sendmail",
      title: "Sendmail 스팸 릴레이 통제 파일",
      description:
        "Sendmail 환경에서 특정 IP나 도메인에 대한 릴레이(RELAY) 및 거부(REJECT) 정책을 설정하는 원본 텍스트 파일과 이를 데몬이 읽을 수 있도록 변환한 바이너리 DB 파일명을 각각 쓰시오.",
      answer: [
        "텍스트 파일: /etc/mail/access",
        "바이너리 DB: /etc/mail/access.db",
      ],
      scoringPoints: [
        "/etc/mail/access (1.5점)",
        "/etc/mail/access.db (1.5점)",
      ],
      explanation:
        "• `makemap hash /etc/mail/access < /etc/mail/access` 변환 명령어와 연계됩니다.",
    },
    {
      id: 10,
      subjectId: "application",
      type: "short",
      score: 3,
      domain: "애플리케이션 보안 / IIS 모듈",
      title: "IIS 서버 정보 은폐 모듈",
      description:
        "IIS 웹 서버에서 HTTP 응답 헤더의 `Server: Microsoft-IIS/...` 배너 정보를 제거하거나 마스킹하기 위해 활용하는 공식 확장 모듈은?",
      answer: "URL Rewrite (URL 재작성 모듈)",
      scoringPoints: ["'URL Rewrite' 또는 'URL 재작성 모듈' 기술 시 3점"],
      explanation:
        "• 아웃바운드 룰(Outbound Rules)을 이용한 서버 헤더 삭제 설정입니다.",
    },
    {
      id: 11,
      subjectId: "law",
      type: "short",
      score: 3,
      domain: "정보보안 법률 / 정보통신망법",
      title: "집적정보통신시설 사업자 (IDC)",
      description:
        "정보통신망법 제46조에 따라 타인의 정보통신서비스 제공을 위하여 서버, 네트워크 등 집적된 정보통신시설을 위탁 운영·관리하는 사업자의 법률상 명칭은?",
      answer: "집적정보통신시설 사업자 (또는 IDC 사업자)",
      scoringPoints: [
        "'집적정보통신시설 사업자' 또는 'IDC 사업자' 기술 시 3점",
      ],
      explanation:
        "• 보호조치 의무 대상자 및 법적 정의 조문입니다.",
    },
    {
      id: 12,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "정보보안 일반 / SIEM",
      title: "보안 관제 통합 분석 솔루션 SIEM",
      description:
        "조직 내 다양한 보안 장비(방화벽, IPS 등)와 네트워크, 서버 로그를 실시간으로 중앙 수집하여 빅데이터 상관분석을 통해 공격을 종합 탐지하는 시스템은?",
      answer: "SIEM (Security Information and Event Management)",
      scoringPoints: ["'SIEM' 또는 'Security Information and Event Management' 작성 시 3점"],
      explanation:
        "• 로그 정규화(Normalization)와 상관분석(Correlation) 기능을 제공하는 통합 관제 솔루션입니다.",
    },

    // =================================================================
    // [서술형 13~15번] 문항당 12점
    // =================================================================
    {
      id: 13,
      subjectId: "law",
      type: "descriptive",
      score: 12,
      domain: "정보보안 관리 및 법률 / CISO",
      title: "CISO(정보보호최고책임자)의 법적 지정 기준 및 주요 업무",
      description:
        "정보통신망법상 CISO가 수행해야 하는 주요 업무 권한과 책임을 4가지 서술하시오.",
      answer: [
        "1. 정보보호 관리체계의 수립 및 관리·운영",
        "2. 정보보호 취약점 분석·평가 및 개선 대책의 수립",
        "3. 침해사고 발생 시 원인 분석 및 긴급 대응, 피해 확산 방지",
        "4. 임직원 대상 정보보호 교육 및 훈련 계획의 수립 및 시행",
      ],
      scoringPoints: [
        "정보보호 관리체계 수립/운영 (3점)",
        "취약점 분석·평가 및 개선 대책 수립 (3점)",
        "침해사고 원인 분석 및 긴급 대응, 피해 확산 방지 (3점)",
        "임직원 교육 및 훈련 계획 수립/시행 (3점)",
      ],
      explanation:
        "• 정보통신망법 시행령 제36조의7(정보보호최고책임자의 업무 등) 조문 준용 항목입니다.",
    },
    {
      id: 14,
      subjectId: "application",
      type: "descriptive",
      score: 12,
      domain: "애플리케이션 보안 / XSS",
      title: "XSS 3대 유형(저장형, 반사형, DOM 기반) 비교 서술",
      description:
        "XSS의 3가지 유형인 Stored XSS, Reflected XSS, DOM-based XSS의 공격 메커니즘을 각각 비교하여 서술하시오.",
      subItems: [
        {
          number: 1,
          question: "저장형 (Stored XSS)의 메커니즘을 서술하시오.",
          answer: "악성 스크립트가 포함된 게시물이나 입력값이 웹 서버의 DB에 영구 저장된 후, 해당 페이지를 열람하는 불특정 다수의 희생자 브라우저로 렌더링되면서 악성코드가 실행되는 방식.",
          scoringCriteria: "웹 서버 DB 영구 저장 및 열람자 브라우저 렌더링 실행 서술 시 4점",
        },
        {
          number: 2,
          question: "반사형 (Reflected XSS)의 메커니즘을 서술하시오.",
          answer: "URL 파라미터 등에 악성 스크립트를 포함시켜 희생자가 해당 링크를 클릭하도록 유도하고, 서버 응답 본문에 그대로 반사되어 사용자의 브라우저에서 즉시 실행되는 방식.",
          scoringCriteria: "URL 파라미터 및 서버 응답 즉시 반사 실행 서술 시 4점",
        },
        {
          number: 3,
          question: "DOM 기반 (DOM-based XSS)의 메커니즘을 서술하시오.",
          answer: "악성 페이로드가 서버로 전송되어 응답 페이지를 거치지 않고, 브라우저 단에서 클라이언트 스크립트(JavaScript)가 DOM 트리를 조작(예: `document.location`, `innerHTML`)하는 과정에서 실행되는 방식.",
          scoringCriteria: "서버 미경유 및 브라우저 JS의 DOM 조작 실행 서술 시 4점",
        },
      ],
      answer: [
        "1. 저장형 (Stored XSS): 악성 스크립트가 웹 서버 DB에 영구 저장되어 게시글 열람자 브라우저에서 실행됨",
        "2. 반사형 (Reflected XSS): URL 파라미터에 포함된 스크립트가 서버 응답 본문에 즉시 반사되어 실행됨",
        "3. DOM 기반 (DOM-based XSS): 서버 응답을 거치지 않고 브라우저 클라이언트 JS가 DOM 트리를 동적 조작할 때 실행됨",
      ],
      scoringPoints: [
        "저장형: DB 저장 및 열람자 실행 (4점)",
        "반사형: URL 파라미터 및 즉시 반사 (4점)",
        "DOM 기반: 서버 미경유 및 브라우저 DOM 조작 (4점)",
      ],
      explanation:
        "• 서버 저장 유무와 브라우저 단 DOM 조작 유무를 기준으로 명확히 구분합니다.",
    },
    {
      id: 15,
      subjectId: "law",
      type: "descriptive",
      score: 12,
      domain: "정보보안 관리 및 법률 / 생체정보",
      title: "생체인식 정보 보호 6대 기본 원칙",
      description:
        "개인정보보호위원회의 '생체정보 보호 가이드라인'에 규정된 6대 기본 원칙 중 4가지를 쓰고 설명하시오.",
      answer: [
        "1. 비례성: 생체정보 처리로 얻는 공익/편익과 정보주체의 기본권 침해 위험 간의 균형을 고려하여 최소한으로 처리해야 함",
        "2. 적법성: 법령에 근거가 있거나 정보주체로부터 명시적·별도 동의를 받아 정당하게 수집·이용해야 함",
        "3. 목적 제한: 사전에 고지하고 동의받은 수집 목적 범위 내에서만 처리하며, 목적 외 이용 및 제3자 제공을 금지함",
        "4. 안전성: 도난, 위조, 변조를 방지하기 위해 템플릿 암호화, 일방향 변환, 접근 제어 등 강력한 기술적 보호조치를 취해야 함",
        "(추가 인정: 투명성, 통제권 보장)",
      ],
      scoringPoints: [
        "비례성 원칙 및 설명 (3점)",
        "적법성 원칙 및 설명 (3점)",
        "목적 제한 원칙 및 설명 (3점)",
        "안전성 원칙 및 설명 (3점)",
      ],
      explanation:
        "• 생체정보 보호 6대 기본 원칙: 비례성, 적법성, 목적 제한, 투명성, 안전성, 통제권 보장.",
    },

    // =================================================================
    // [실무형 16~18번] 문항당 14점 (실전 2문항 선택)
    // =================================================================
    {
      id: 16,
      subjectId: "network",
      type: "practical",
      score: 14,
      domain: "네트워크·암호학 / TLS 실무",
      title: "SSL/TLS 핸드셰이크 단계별 암호화 알고리즘 활용 실무",
      description:
        "TLS 1.2 연결 수립 과정에서 비대칭키(공개키) 암호화와 대칭키 암호화가 각각 어느 단계에서 어떤 보안 목적으로 사용되는지 구체적으로 서술하시오.",
      subItems: [
        {
          number: 1,
          question: "비대칭키(공개키) 암호화의 사용 단계와 2대 목적을 서술하시오.",
          answer: [
            "• 인증서 서명 검증: 서버가 전달한 인증서의 CA 전자서명을 검증하여 접속한 서버 신원의 진위성을 확인하고 중간자 공격을 방지함.",
            "• 세션 키 교환 (Client Key Exchange): 클라이언트가 생성한 Pre-master Secret을 서버의 공개키로 암호화하여 전송함으로써, 도청 위협 없이 안전하게 비밀키를 서버와 공유함.",
          ],
          scoringCriteria: "인증서 서명 검증(3.5점), Pre-master Secret 키 교환 암호화(3.5점) 총 7점",
        },
        {
          number: 2,
          question: "대칭키 암호화의 사용 단계와 목적을 서술하시오.",
          answer: "핸드셰이크 완료 후 실제 데이터 전송 단계에서, Master Secret으로 생성한 대칭 세션키(AES 등)를 사용하여 실제 송수신되는 HTTP 응용 데이터(Application Data)를 고속으로 암·복호화하여 통신의 기밀성을 보장함.",
          scoringCriteria: "핸드셰이크 완료 후 데이터 전송 단계 및 고속 암복호화/기밀성 보장 명시 시 7점",
        },
      ],
      answer: [
        "1. 비대칭키(공개키) 암호화:\n• 인증서 서명 검증 (서버 신원 인증)\n• 세션 키 교환 (Pre-master Secret 암호화 전송)",
        "2. 대칭키 암호화:\n• 실제 데이터 전송 단계에서 대칭 세션키로 대용량 HTTP 응용 데이터(Application Data)를 고속 암·복호화하여 기밀성 보장",
      ],
      scoringPoints: [
        "비대칭키: 인증서 검증 및 Pre-master Secret 키 교환 (7점)",
        "대칭키: 응용 데이터 고속 암복호화 및 기밀성 보장 (7점)",
      ],
      explanation:
        "• 연산 오버헤드를 고려하여 키 교환 및 인증에는 공개키, 대량 데이터 스트림 암호화에는 대칭키를 쓰는 하이브리드 아키텍처입니다.",
    },
    {
      id: 17,
      subjectId: "application",
      type: "practical",
      score: 14,
      domain: "애플리케이션 보안 / 웹 프록시 분석",
      title: "Fiddler 웹 프록시 분석 및 XSS 대응 실무",
      description:
        "웹 애플리케이션 진단 과정에서 Fiddler를 실행했으나 HTTPS 트래픽이 복호화되지 않았다. 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "HTTPS 트래픽이 복호화되지 않는 기술적 원인을 서술하시오.",
          answer: "HTTPS는 종단 간 SSL/TLS 터널로 보호되므로 중간 프록시가 복호화할 수 없으며, Fiddler의 Decrypt HTTPS 기능 미사용 및 신뢰된 루트 인증서가 부재하기 때문.",
          scoringCriteria: "종단 암호화 및 Fiddler 루트 인증서 부재/Decrypt 미사용 원인 서술 시 4.5점",
        },
        {
          number: 2,
          question: "클라이언트 PC에서의 해결 조치를 서술하시오.",
          answer: "Fiddler 옵션에서 `Decrypt HTTPS traffic`을 활성화하고, Fiddler가 동적 생성한 루트 CA 인증서를 클라이언트 운영체제/브라우저의 '신뢰할 수 있는 루트 인증 기관'에 등록한다.",
          scoringCriteria: "Decrypt HTTPS 활성화 및 루트 CA를 신뢰할 수 있는 인증기관에 등록 명시 시 4.5점",
        },
        {
          number: 3,
          question: "파라미터에서 발견된 취약점(`<script>alert(1)</script>`)에 대한 웹 애플리케이션 보안 코딩 대책 2가지를 쓰시오.",
          answer: [
            "1. 사용자의 입력/출력값에 대해 HTML 특수문자(`<`, `>`, `&`, `\"`, `'`)를 HTML Entity(예: `&lt;`, `&gt;`)로 서버단에서 치환(HTML 인코딩)",
            "2. 세션 쿠키 탈취를 방지하기 위해 쿠키 발급 시 `HttpOnly` 속성을 강제 적용",
          ],
          scoringCriteria: "HTML Entity 인코딩 (2.5점), HttpOnly 쿠키 플래그 적용 (2.5점) 총 5점",
        },
      ],
      answer: [
        "1. 원인: 종단간 TLS 암호화 및 Fiddler 루트 CA 인증서 미신뢰/Decrypt HTTPS 미활성화",
        "2. 조치: Decrypt HTTPS traffic 활성화 및 Fiddler 루트 CA를 '신뢰할 수 있는 루트 인증 기관'에 설치",
        "3. 대책:\n• 서버단 HTML Entity 인코딩 (`<` -> `&lt;` 등)\n• 세션 쿠키에 HttpOnly 속성 강제 부여",
      ],
      scoringPoints: [
        "복호화 불가 원인 (4.5점)",
        "루트 CA 등록 및 Decrypt 설정 (4.5점)",
        "HTML 인코딩 및 HttpOnly 속성 (5점)",
      ],
      explanation:
        "• MITM 프록시 원리와 XSS 2차 피해(세션 하이재킹) 방어 플래그입니다.",
    },
    {
      id: 18,
      subjectId: "application",
      type: "practical",
      score: 14,
      domain: "애플리케이션 보안 / 상태 관리 및 CSRF",
      title: "세션/쿠키 개념 비교 및 CSRF 방어 구현",
      description:
        "웹 애플리케이션의 세션/쿠키 상태 관리와 사이트 간 요청 위조(CSRF) 공격 및 방어에 관한 물음이다.",
      subItems: [
        {
          number: 1,
          question: "세션(Session)과 쿠키(Cookie)의 저장 위치 및 상태 관리 방식의 차이점을 서술하시오.",
          answer: "쿠키는 클라이언트 웹 브라우저의 로컬 스토리지에 키-값 형태로 저장되어 요청마다 HTTP 헤더로 전송되는 반면, 세션은 민감한 인증 정보를 웹 서버 메모리나 DB에 보관하고 클라이언트에는 이를 식별하기 위한 난수 세션 ID(Session ID)만 쿠키로 발급함.",
          scoringCriteria: "쿠키(브라우저 로컬 저장) vs 세션(서버 메모리/DB 보관 및 세션 ID 쿠키 발급) 차이 명시 시 5점",
        },
        {
          number: 2,
          question: "정상 로그인된 사용자의 권한을 도용하여 원치 않는 요청(비밀번호 변경 등)을 전송시키는 공격 명칭을 쓰시오.",
          answer: "CSRF (사이트 간 요청 위조 / Cross-Site Request Forgery)",
          scoringCriteria: "CSRF 기술 시 4점",
        },
        {
          number: 3,
          question: "이를 방어하기 위한 구현 방안 2가지를 서술하시오.",
          answer: [
            "1. CSRF 난수 토큰(Token) 검증: 매 폼(Form) 생성 시 세션별 고유하고 예측 불가능한 난수 토큰을 hidden 필드에 포함시키고 서버 수신 시 일치 여부를 검증",
            "2. 재인증 요구: 비밀번호 변경 등 주요 트랜잭션 시 현재 비밀번호 재입력 강제",
            "3. SameSite 쿠키 속성(Strict 또는 Lax)을 적용하여 타 사이트 간 요청의 쿠키 전송 차단",
          ],
          scoringCriteria: "CSRF 토큰 검증, 재인증 요구, SameSite 쿠키 속성 중 2가지 서술 시 5점",
        },
      ],
      answer: [
        "1. 세션 vs 쿠키 차이:\n• 쿠키: 클라이언트 브라우저 로컬에 저장되어 매 요청마다 헤더로 전송\n• 세션: 서버 메모리/DB에 정보 보관, 클라이언트는 세션 ID만 보유",
        "2. 공격 명칭: CSRF (Cross-Site Request Forgery / 사이트 간 요청 위조)",
        "3. 방어 방안 (2가지):\n• CSRF Token 검증: 요청 폼마다 동적 난수 토큰 검증\n• SameSite 쿠키 속성 적용 (Strict/Lax)\n• 중요 트랜잭션에 대한 비밀번호 재인증 강제",
      ],
      scoringPoints: [
        "세션과 쿠키의 저장 위치 및 관리 방식 비교 (5점)",
        "CSRF 명칭 (4점)",
        "CSRF Token 검증 및 SameSite 쿠키 등 방어책 2가지 (5점)",
      ],
      explanation:
        "• 세션 기반 상태 관리 원리와 CSRF Token 및 SameSite 쿠키 방어 로직입니다.",
    },
  ],
};
