import type { PracticalQuestion, PracticalSubject } from "./types";

export const SECURITY_PRACTICAL_SUBJECTS: PracticalSubject[] = [
  { id: "system", name: "시스템 보안", shortName: "시스템" },
  { id: "network", name: "네트워크 보안", shortName: "네트워크" },
  { id: "application", name: "애플리케이션 보안", shortName: "애플리케이션" },
  { id: "general", name: "정보보안 일반 & 암호학", shortName: "보안일반·암호" },
  { id: "law", name: "정보보안 관리 및 법률", shortName: "관리·법률" },
];

export const SECURITY_PRACTICAL_TRENDS = {
  title: "정보보안기사 실기 최신 출제 트렌드 분석",
  summary:
    "단순 암기를 넘어 실제 리눅스/네트워크 설정 파일 구조 분석, Snort/iptables 실무 룰 작성, 최신 웹 공격 벡터(CORS, XSS 세부유형, 크리덴셜 스터핑) 및 ISMS-P 기반 위험관리 시나리오 서술 비중이 대폭 강화되었습니다.",
  keyPoints: [
    {
      domain: "시스템 & 네트워크",
      desc: "리눅스 계정/패스워드 파일 구조(/etc/shadow), iptables 상태추적 방화벽, 로그 분석(/var/log), IPSec 프로토콜 세부 헤더 분석",
    },
    {
      domain: "애플리케이션 & 공격 기법",
      desc: "XSS 3대 세부 유형, Slow 계열 DoS(Slowloris, RUDY), 크리덴셜 스터핑, OpenSSL Heartbleed 취약점 패치 및 인증서 재발급 조치",
    },
    {
      domain: "보안 관리 & 법률",
      desc: "자산-위협-취약점 관계 분석, 정성적 위험 산정(델파이법 등), 위험 처리 4대 전략, 개인정보 유출 신고 기한 및 안전성 확보조치 기준",
    },
  ],
};

export const SECURITY_PRACTICAL_QUESTIONS: PracticalQuestion[] = [
  // =================================================================
  // [문제 1] 단답형 (3점) - 시스템 보안
  // =================================================================
  {
    id: 1,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 시스템 계정 및 패스워드 구조 (/etc/shadow)",
    description:
      "리눅스 시스템의 `/etc/shadow` 파일에서 패스워드 해시 필드는 `$` 기호로 구분된 형태(예: `$6$salt$encrypted...`)를 띤다. 여기서 첫 번째 필드에 위치하는 `$id`가 의미하는 바와 `$6$`이 나타내는 해시 알고리즘을 각각 기술하시오.",
    scenario: "user01:$6$qZ4vX8w9$K9yH...:19500:0:99999:7:::",
    answer: [
      "$id의 의미: 패스워드 암호화에 사용된 일방향 해시 알고리즘 식별 번호 (알고리즘 종류)",
      "$6$의 알고리즘: SHA-512",
    ],
    scoringPoints: [
      "$id 의미: 일방향 암호화 해시 알고리즘 식별자/종류 언급 시 부분점수 인정",
      "$6: 'SHA-512' 정확히 기술 시 정답 인정",
    ],
    explanation:
      "리눅스 shadow 파일의 2번째 필드는 `$알고리즘ID$Salt$해시값` 형태로 구성됩니다.\n\n• $1 : MD5\n• $2a 또는 $2y : Blowfish (bcrypt)\n• $5 : SHA-256\n• $6 : SHA-512 (최신 리눅스 기본값)\n\nSalt는 동일한 패스워드라도 서로 다른 해시값이 생성되도록 하여 레인보우 테이블(Rainbow Table) 공격을 방어합니다.",
    examTips:
      "단답형 기출 단골 유형입니다. $1(MD5), $5(SHA-256), $6(SHA-512)는 반드시 암기해 두어야 합니다.",
  },

  // =================================================================
  // [문제 2] 단답형 (3점) - 네트워크 보안
  // =================================================================
  {
    id: 2,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "IPSec 프로토콜 헤더 구조 및 재전송 공격 방지",
    description:
      "IPSec(IP Security) 프로토콜 군에 관한 물음이다. 다음 설명의 빈칸 (A), (B)에 들어갈 알맞은 용어를 각각 기술하시오.",
    scenario:
      "IPSec의 세부 프로토콜 중 무결성과 인증을 제공하며 재전송 공격(Replay Attack)을 방지하기 위하여 (  A  ) 프로토콜 헤더에 (  B  ) 필드를 포함하여 송신 패킷마다 단조 증가하는 고유 번호를 부여한다.",
    answer: [
      "(A): AH (Authentication Header) 또는 ESP (Encapsulating Security Payload)",
      "(B): Sequence Number (순서 번호)",
    ],
    scoringPoints: [
      "(A): AH 또는 ESP 중 하나 이상 기술 시 정답 인정",
      "(B): Sequence Number 또는 순서 번호 / 시퀀스 번호 기술 시 정답 인정",
    ],
    explanation:
      "IPSec의 주요 세부 프로토콜:\n• AH(Authentication Header): 발신지 인증, 무결성 제공 (기밀성 미제공)\n• ESP(Encapsulating Security Payload): 기밀성, 발신지 인증, 무결성 제공\n\n두 프로토콜 모두 헤더 내에 32비트 크기의 Sequence Number(순서 번호) 필드를 유지하여 단조 증가시킵니다. 수신 측은 슬라이딩 윈도우(Sliding Window) 메커니즘을 통해 이미 처리된 번호나 범위를 벗어난 패킷을 탐지 및 폐기하여 재전송 공격(Replay Attack)을 무력화합니다.",
    examTips:
      "IPSec은 AH와 ESP의 차이(기밀성 제공 여부)와 터널 모드 vs 전송 모드의 IP 헤더 캡슐화 차이가 서술형으로도 자주 출제됩니다.",
    mermaidChart: `graph TD
    subgraph Raw["원본 IP 패킷"]
        OIP["IP Header (출발지/도착지)"] --- OData["TCP Header + Payload (데이터)"]
    end

    subgraph Transport["전송 모드 (Transport Mode) - 단말 간 암호화"]
        TIP["IP Header (원본)"] --- TESP["ESP Header"] --- TData["TCP + Payload (암호화 영역)"] --- TTail["ESP Trailer"] --- TAuth["ESP Auth (인증 영역)"]
    end

    subgraph Tunnel["터널 모드 (Tunnel Mode) - 게이트웨이/VPN 구간 암호화"]
        NIP["New IP Header (VPN 게이트웨이)"] --- NESP["ESP Header"] --- NOIP["Original IP Header (암호화 영역)"] --- NData["TCP + Payload (암호화 영역)"] --- NTail["ESP Trailer"] --- NAuth["ESP Auth (인증 영역)"]
    end`,
  },

  // =================================================================
  // [문제 3] 서술·작업형 (14점) - 침입 탐지 시스템 (IDS)
  // =================================================================
  {
    id: 3,
    subjectId: "network",
    type: "practical",
    score: 14,
    domain: "네트워크 보안 / 실무 작업형",
    title: "침입 탐지 시스템(IDS) 및 Snort 탐지 룰 작성",
    description:
      "침입 탐지 시스템인 Snort(스노트) 운영 및 탐지 룰 세팅에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "Snort 탐지 룰을 지나치게 좁거나 넓게 작성했을 때 발생하는 탐지 오류 2가지(오탐, 미탐)의 개념을 각각 명확히 서술하시오.",
        answer: [
          "오탐 (False Positive): 정상 트래픽을 비정상(공격) 트래픽으로 잘못 판단하여 탐지/차단하는 오류 (룰 범위가 너무 넓거나 일반적일 때 발생)",
          "미탐 (False Negative): 실제 공격 트래픽을 탐지하지 못하고 정상 트래픽으로 통과시키는 오류 (룰이 지나치게 협소하거나 변종 패턴을 반영하지 못할 때 발생)",
        ],
        scoringCriteria: "오탐과 미탐의 정의 및 각각의 발생 원인을 명시할 경우 6점 만점 부여",
      },
      {
        number: 2,
        question:
          "사내 웹 서버(IP: 192.168.1.100, Port: 80)로 외부(any)에서 유입되는 TCP 패킷 중, 페이로드에 '/etc/passwd' 문자열이 대소문자 구분 없이 포함되어 있을 때 alert를 발생시키는 Snort 룰을 작성하시오. (단, sid: 1000001, rev: 1로 지정할 것)",
        answer:
          'alert tcp any any -> 192.168.1.100 80 (msg:"Access /etc/passwd Attempt"; content:"/etc/passwd"; nocase; sid:1000001; rev:1;)',
        scoringCriteria:
          "Rule Header(프로토콜, 방향, IP/Port) 정확도(4점), Rule Options(content, nocase, sid, rev 세미콜론 포함 문법) 정확도(4점)",
      },
    ],
    answer: [
      "1. 탐지 오류 개념:\n• 오탐 (False Positive): 정상 트래픽을 공격으로 잘못 판정\n• 미탐 (False Negative): 실제 공격 트래픽을 정상으로 오인하여 놓침",
      '2. Snort 룰:\nalert tcp any any -> 192.168.1.100 80 (msg:"Access /etc/passwd Attempt"; content:"/etc/passwd"; nocase; sid:1000001; rev:1;)',
    ],
    codeBlock: {
      language: "snort",
      code: 'alert tcp any any -> 192.168.1.100 80 (msg:"Access /etc/passwd Attempt"; content:"/etc/passwd"; nocase; sid:1000001; rev:1;)',
    },
    scoringPoints: [
      "Rule Header: action(alert), protocol(tcp), src_ip(any), src_port(any), direction(->), dst_ip(192.168.1.100), dst_port(80)",
      "Rule Options: msg 옵션, content:\"/etc/passwd\", 대소문자 무시(nocase), 사용자 정의 sid(1000001 이상), rev(1)",
      "주의: 각 옵션 끝에는 반드시 세미콜론(;)이 포함되어야 문법 오류가 나지 않습니다.",
    ],
    explanation:
      "Snort 룰 문법 구조:\n[Rule Header] [Action] [Protocol] [Src IP] [Src Port] -> [Dst IP] [Dst Port]\n[Rule Options] (옵션명:값; 옵션명:값; ...)\n\n• nocase : 대소문자를 구분하지 않고 content 패턴 매칭을 수행합니다.\n• sid : Snort Rule ID로 1,000,000번 이상은 사용자 정의(Custom) 룰에 할당됩니다.\n• rev : 룰의 수정 리비전 번호입니다.",
    examTips:
      "실기 시험 14점 배점의 핵심 단골 문제입니다. 세미콜론 누락, 화살표 방향(->), 대소문자 미구분(nocase) 옵션을 정확히 적는 것이 감점을 방지하는 핵심입니다.",
    mermaidChart: `flowchart TD
    Traffic["네트워크 유입 트래픽"] --> Actual{"실제 트래픽 성격"}

    Actual -->|정상 트래픽| Normal["정상(Normal) 트래픽"]
    Actual -->|공격 트래픽| Attack["공격(Attack) 트래픽"]

    Normal -->|IDS 차단/경고| FP["⚠️ 오탐 (False Positive)<br/>정상을 공격으로 오판 (업무 방해)"]
    Normal -->|IDS 통과| TN["✔️ 진음성 (True Negative)<br/>정상을 정상으로 통과"]

    Attack -->|IDS 탐지/차단| TP["✔️ 진양성 (True Positive)<br/>공격을 공격으로 정확히 탐지"]
    Attack -->|IDS 미탐지 통과| FN["🚨 미탐 (False Negative)<br/>공격을 놓치고 정상 처리 (보안 사고)"]`,
  },

  // =================================================================
  // [문제 4] 단답형 (3점) - 애플리케이션 보안
  // =================================================================
  {
    id: 4,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "최신 웹/인증 공격 기법 (자격증명 재사용 공격)",
    description:
      "다음에서 설명하는 사이버 공격 기법의 정확한 명칭을 영문 또는 국문으로 기술하시오.",
    scenario:
      "공격자가 사전에 다크웹 등에서 유출된 대량의 사용자 계정 자격 증명(ID/Password) 목록을 확보한 후, 사용자들이 여러 웹 사이트에서 동일한 계정 정보를 재사용한다는 점을 악용하여 다른 웹 서비스들에 무차별 대입해 로그인을 시도하는 공격 기법이다.",
    answer: "크리덴셜 스터핑 (Credential Stuffing)",
    scoringPoints: [
      "크리덴셜 스터핑 또는 Credential Stuffing 정확히 기재 시 3점 만점",
    ],
    explanation:
      "• 크리덴셜 스터핑(Credential Stuffing): 이미 유출된 'ID/패스워드 쌍(Credentials)'을 여러 서비스에 무차별 대입하는 공격입니다. 다중 인증(MFA), CAPTCHA, 비정상 로그인 차단 정책으로 방어합니다.\n• 패스워드 스프레이(Password Spraying): 대량의 계정을 대상으로 흔히 쓰이는 소수의 패스워드(예: Summer2024!)를 계정당 1~2회만 시도하여 계정 잠금 정책을 우회하는 기법으로, 둘의 차이를 명확히 구분해야 합니다.",
    examTips:
      "기출 단골 문제로 브루트포스(단일 계정 대상 무차별 대입), 딕셔너리 공격, 크리덴셜 스터핑, 패스워드 스프레이의 차이점을 묻는 단답형으로 자주 출제됩니다.",
  },

  // =================================================================
  // [문제 5] 단답형 (3점) - 네트워크 보안
  // =================================================================
  {
    id: 5,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "리눅스 iptables 상태 추적 방화벽 규칙",
    description:
      "리눅스 iptables 방화벽에서 '이미 연결이 수립되어 있거나(ESTABLISHED), 기존 연결과 관련된 패킷(RELATED)'에 대해 통과를 허용하는 상태 추적(Stateful Inspection) 규칙을 작성하고자 한다. 빈칸에 들어갈 옵션을 쓰시오.",
    scenario:
      "iptables -A INPUT -m state --state [     빈칸     ] -j ACCEPT",
    answer: "ESTABLISHED,RELATED",
    scoringPoints: [
      "ESTABLISHED,RELATED (공백 없이 콤마로 연결) 정확히 기술 시 정답 인정",
    ],
    explanation:
      "iptables 상태 추적(State Machine) 4가지 상태:\n• NEW: 새로운 연결을 시작하는 패킷 (예: TCP SYN)\n• ESTABLISHED: 이미 양방향 통신이 성공적으로 수립된 세션의 패킷\n• RELATED: 기존 연결과 연관되어 새로 생성된 연결 패킷 (예: FTP 데이터 세션, ICMP 오류 메시지)\n• INVALID: 어떤 상태에도 속하지 않는 비정상적인 패킷",
    examTips:
      "실기 시험에서 iptables 기본 정책(DROP) 설정 후 상태 추적 허용 규칙은 실무 작업형 단골 기출입니다.",
  },

  // =================================================================
  // [문제 6] 단답형 (3점) - 애플리케이션 보안
  // =================================================================
  {
    id: 6,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "HTTP 보안 응답 헤더 메커니즘",
    description:
      "웹 서버가 웹 브라우저에게 응답할 때 전달하여 보안 정책을 강제하는 HTTP 보안 헤더에 관한 물음이다. 빈칸 (A), (B)를 각각 채우시오.",
    scenario:
      "1. 웹 브라우저가 오직 HTTPS로만 해당 사이트에 접속하도록 강제하여 SSL Stripping 공격을 방지하는 헤더: (  A  )\n2. 웹 페이지가 <frame>, <iframe> 내에서 렌더링되는 것을 방지하여 클릭재킹(Clickjacking) 공격을 방어하는 헤더: (  B  )",
    answer: [
      "(A): Strict-Transport-Security (또는 HSTS)",
      "(B): X-Frame-Options",
    ],
    scoringPoints: [
      "(A): Strict-Transport-Security 또는 HSTS 기술 시 1.5점",
      "(B): X-Frame-Options 기술 시 1.5점",
    ],
    explanation:
      "주요 HTTP 보안 헤더:\n• Strict-Transport-Security(HSTS): `max-age=31536000; includeSubDomains`\n• X-Frame-Options: `DENY`(모든 프레임 차단) 또는 `SAMEORIGIN`(동일 출처만 허용)\n• Content-Security-Policy(CSP): 스크립트, 이미지 등의 리소스 로딩 출처를 엄격히 제한하여 XSS를 방어\n• X-Content-Type-Options: `nosniff`(MIME 스니핑 방지)",
    examTips:
      "최신 실기 시험에서 웹 보안 헤더(HSTS, X-Frame-Options, CSP)의 영문 정식 명칭과 옵션 값을 묻는 문제가 매우 빈출됩니다.",
  },

  // =================================================================
  // [문제 7] 단답형 (3점) - 시스템 보안
  // =================================================================
  {
    id: 7,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 주요 시스템 바이너리 로그 파일 분석",
    description:
      "리눅스 시스템의 `/var/log` 디렉터리에 존재하는 바이너리(Binary) 로그 파일에 관한 설명이다. 각 설명에 해당하는 로그 파일명을 쓰시오.",
    scenario:
      "(A): 현재 시스템에 로그인한 사용자들의 상태 정보를 저장하며, `who` 또는 `w` 명령어로 확인하는 파일\n(B): 사용자의 성공한 로그인/로그아웃 이력 및 시스템 재부팅 이력을 기록하며, `last` 명령어로 확인하는 파일\n(C): 로그인에 실패한 이력(계정, 접속 IP, 시간 등)을 기록하며, `lastb` 명령어로 무차별 대입 공격을 분석하는 파일",
    answer: [
      "(A): /var/log/utmp (또는 /run/utmp, utmp)",
      "(B): /var/log/wtmp (또는 wtmp)",
      "(C): /var/log/btmp (또는 btmp)",
    ],
    scoringPoints: [
      "(A) utmp, (B) wtmp, (C) btmp 각각 1점씩 부여",
    ],
    explanation:
      "리눅스 계정 로그 4대장:\n• utmp: 현재 접속 중인 사용자 (who, w)\n• wtmp: 성공한 로그인/로그아웃/재부팅 누적 이력 (last)\n• btmp: 로그인 실패 이력 (lastb) - 침해사고 분석 1순위!\n• lastlog: 각 계정별 마지막 로그인 시간 (lastlog)",
    examTips:
      "텍스트 뷰어(cat, vi)로 볼 수 없고 전용 명령어(last, lastb, who)로 열람해야 하는 바이너리 로그라는 특징이 시험에 자주 강조됩니다.",
  },

  // =================================================================
  // [문제 8] 단답형 (3점) - 암호학 & PKI
  // =================================================================
  {
    id: 8,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "암호학 & PKI",
    title: "공개키 기반구조(PKI) 인증서 폐기 상태 검증",
    description:
      "인증기관(CA)에서 발급한 디지털 인증서(X.509)의 폐기 여부를 클라이언트가 실시간으로 확인하는 메커니즘에 관한 물음이다. 빈칸 (A), (B)를 각각 기술하시오.",
    scenario:
      "1. 인증기관이 주기적으로 서명하여 배포하는 폐기된 인증서 목록 파일로, 파일 크기가 커질수록 네트워크 대역폭 낭비와 갱신 지연이 발생하는 방식: (  A  )\n2. 인증서 상태 확인을 위해 전체 목록을 다운로드받는 대신, 특정 인증서의 일련번호를 전송하여 실시간 폐기 여부를 즉시 질의/응답받는 경량 프로토콜: (  B  )",
    answer: [
      "(A): CRL (Certificate Revocation List / 인증서 폐기 목록)",
      "(B): OCSP (Online Certificate Status Protocol / 온라인 인증서 상태 프로토콜)",
    ],
    scoringPoints: [
      "(A): CRL 또는 인증서 폐기 목록 1.5점",
      "(B): OCSP 또는 온라인 인증서 상태 프로토콜 1.5점",
    ],
    explanation:
      "• CRL(Certificate Revocation List): 주기적 발행 방식으로 실시간성이 떨어지고 목록 파일이 계속 커지는 단점이 있습니다.\n• OCSP(Online Certificate Status Protocol): 실시간으로 특정 인증서 상태만 HTTP 질의하여 'Good', 'Revoked', 'Unknown' 응답을 받으므로 효율적입니다.\n• OCSP Stapling: 웹 서버가 CA로부터 OCSP 응답을 미리 받아 캐싱해 두고 클라이언트에게 TLS 핸드셰이크 시 함께 전달하여 CA 부하와 프라이버시 침해를 방지하는 최신 기술입니다.",
    examTips:
      "CRL의 한계와 이를 극복하기 위해 등장한 OCSP의 개념을 비교하는 문제가 단답형 및 서술형으로 빈출됩니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Client as 클라이언트 (브라우저)
    participant Server as 웹 서버
    participant CA as OCSP Responder (CA)

    Note over Client,CA: [OCSP Stapling 검증 흐름]
    Server->>CA: 인증서 폐기 상태 질의 (사전 캐싱)
    CA-->>Server: 디지털 서명된 OCSP 응답 반환
    Client->>Server: TLS Client Hello (접속 요청)
    Server-->>Client: TLS Server Hello + 인증서 + OCSP 응답 동봉(Stapling)
    Note over Client: CA 직접 조회 없이 즉시 인증서 유효성 확인 완료!`,
  },

  // =================================================================
  // [문제 9] 서술·작업형 (14점) - 보안 관리 및 위험 분석
  // =================================================================
  {
    id: 9,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "보안 관리 & 법률",
    title: "위험 관리 프로세스 및 정성적 위험 분석 방법론",
    description:
      "조직의 정보자산 보호를 위한 위험 관리(Risk Management) 프로세스에 관한 다음 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "위험 관리의 핵심 3요소인 자산(Asset), 위협(Threat), 취약점(Vulnerability)의 관계를 서술 또는 수식 형태로 설명하시오.",
        answer:
          "위험(Risk)은 자산에 존재하는 취약점을 매개로 위협이 발생하여 자산에 손실을 초래할 수 있는 잠재적 가능성이다. (Risk = Asset × Threat × Vulnerability)",
        scoringCriteria: "3요소의 유기적 관계 또는 곱셈 관계식 명시 시 4점",
      },
      {
        number: 2,
        question:
          "정성적 위험 분석 방법론 중 '전문가 집단에게 독립적인 설문지를 반복 배포·회수하여 익명으로 의견을 수렴함으로써 집단사고(편향) 없이 합의를 도출하는 기법'의 명칭과 장점 1가지를 기술하시오.",
        answer:
          "• 명칭: 델파이법 (Delphi Method)\n• 장점: 전문가들의 익명성을 보장하여 특정 권위자의 영향력이나 집단 순응 압력(집단사고)을 배제하고 객관적인 합의를 도출할 수 있다.",
        scoringCriteria: "명칭(2점), 장점(3점) 총 5점",
      },
      {
        number: 3,
        question:
          "위험 처리(Risk Treatment) 전략 4가지(완화, 회피, 전가, 수용)의 개념을 각각 한 문장으로 명확히 요약 기술하시오.",
        answer:
          "1. 위험 완화(Mitigation): 보안 통제 및 방화벽 설치 등 보호 대책을 적용하여 위험 발생 가능성이나 영향도를 낮춤\n2. 위험 회피(Avoidance): 위험을 유발하는 활동이나 서비스 자체를 중단하여 위험 요인을 원천 제거함\n3. 위험 전가(Transference): 보험 가입 또는 아웃소싱을 통해 위험 발생 시의 책임을 제3자에게 이전함\n4. 위험 수용(Acceptance): 대응 비용이 잠재 손실보다 크거나 발생 확률이 극히 낮을 때 별도 조치 없이 잔여 위험을 감수함",
        scoringCriteria: "4가지 전략의 핵심 개념을 각각 정확히 기술 시 각 1.25점씩 총 5점",
      },
    ],
    answer: [
      "1. 관계: Risk = Asset × Threat × Vulnerability (자산 가치, 위협 발생 빈도, 취약점이 결합하여 위험 형성)",
      "2. 델파이법 (익명성을 통한 집단 편향 및 권위주의 배제)",
      "3. 4대 전략: 완화(대책 적용), 회피(사업/서비스 중단), 전가(보험/외주), 수용(잔여위험 감수)",
    ],
    scoringPoints: [
      "위험 3요소 관계 정의 정확도 (4점)",
      "델파이법 명칭 및 익명성 보장에 따른 장점 기술 (5점)",
      "위험 처리 4대 전략(완화/회피/전가/수용)의 올바른 매칭 (5점)",
    ],
    explanation:
      "위험 분석 기법 분류:\n• 정량적(Quantitative): 연간예상손실액(ALE = SLE × ARO), 수학적 계산, 투자대비효과 산출 가능\n• 정성적(Qualitative): 델파이법(익명 설문), 시나리오법, 순위결정법, 브레인스토밍 (비용 절감, 주관성 개입)",
    examTips:
      "실기 14점 배점 서술형 1순위 문제입니다. 델파이법의 '익명성' 키워드와 위험 4대 처리 전략의 구체적 사례(보험=전가, 사업철수=회피 등)를 명확히 적어야 감점이 없습니다.",
    mermaidChart: `flowchart TD
    subgraph Triad["위험 분석 3요소 (Risk = Asset × Threat × Vulnerability)"]
        Asset["보호 대상 자산 (Asset)<br/>가치 산정"]
        Threat["보안 위협 (Threat)<br/>발생 빈도"]
        Vuln["시스템 취약점 (Vulnerability)<br/>보안 약점"]
        Asset --> Risk["위험도 산정 (Risk)"]
        Threat --> Risk
        Vuln --> Risk
    end

    Risk --> Compare{"수용 가능 위험(DoA)<br/>초과 여부?"}
    Compare -->|DoA 이하| Acceptance["4. 위험 수용 (Acceptance)<br/>잔여 위험 감수 및 주기적 모니터링"]
    Compare -->|DoA 초과| Action["위험 처리 (Treatment) 대책"]

    Action --> Mitigation["1. 위험 완화 (Mitigation)<br/>방화벽·암호화·인증 통제 대책 구축"]
    Action --> Avoidance["2. 위험 회피 (Avoidance)<br/>위험 유발 사업/서비스 중단 및 폐기"]
    Action --> Transference["3. 위험 전가 (Transference)<br/>보안 보험 가입, 전문업체 위탁(아웃소싱)"]`,
  },

  // =================================================================
  // [문제 10] 서술·작업형 (14점) - 침해사고 분석
  // =================================================================
  {
    id: 10,
    subjectId: "system",
    type: "practical",
    score: 14,
    domain: "침해사고 분석 / 시스템 보안",
    title: "OpenSSL Heartbleed 취약점(CVE-2014-0160) 분석 및 후속 조치",
    description:
      "다음은 특정 웹 서버에서 발생한 OpenSSL 관련 중대 침해사고 취약점 분석 내용이다. 물음에 답하시오.",
    scenario:
      "클라이언트가 SSL/TLS 연결 유지를 위해 Heartbeat 확장 기능을 사용할 때, 임의의 페이로드와 함께 해당 페이로드의 길이를 지정하여 보낸다. 서버는 요청받은 길이만큼 메모리에서 읽어 응답 패킷으로 반환하는데, 이때 요청된 길이와 실제 페이로드 길이에 대한 경계값 검증(Bounds Check)을 수행하지 않아 버퍼 오버리드(Buffer Over-read)가 발생한다. 이로 인해 서버 프로세스 메모리에 저장된 비밀키(Private Key), 세션 쿠키, 계정 비밀번호 등이 공격자에게 최대 64KB씩 무단 유출된다.",
    subItems: [
      {
        number: 1,
        question: "해당 취약점의 일반적인 통칭(명칭)을 쓰시오.",
        answer: "하트블리드 (Heartbleed) 취약점",
        scoringCriteria: "하트블리드 또는 Heartbleed 정확히 기술 시 4점",
      },
      {
        number: 2,
        question: "운영체제 및 시스템 측면에서의 기술적 조치 방안 2가지를 서술하시오.",
        answer:
          "1. OpenSSL 패키지를 취약점이 패치된 최신 안정 버전(1.0.1g 이상)으로 업데이트한다.\n2. 즉각적인 패키지 업데이트가 어려운 경우, Heartbeat 확장을 비활성화하는 컴파일 옵션('-DOPENSSL_NO_HEARTBEATS')을 적용하여 소스 재컴파일을 수행한다.",
        scoringCriteria: "최신 버전 패치(2.5점), Heartbeat 비활성화 컴파일 옵션(2.5점) 총 5점",
      },
      {
        number: 3,
        question:
          "취약점 패치 완료 후, 침해 피해를 최소화하기 위해 보안 관리자가 반드시 수행해야 하는 후속 조치 2가지를 서술하시오.",
        answer:
          "1. 서버의 SSL/TLS 비밀키(Private Key)가 이미 탈취되었을 가능성에 대비하여, 기존 인증서를 폐기(Revocation)하고 새로운 키 쌍으로 인증서를 재발급받아 적용한다.\n2. 유출되었을 수 있는 사용자/관리자 계정 비밀번호를 강제 재설정(Reset)하고, 기존의 모든 활성 웹 세션을 강제 만료(Logout)시킨다.",
        scoringCriteria: "인증서 폐기 및 재발급(2.5점), 비밀번호 변경 및 세션 만료(2.5점) 총 5점",
      },
    ],
    answer: [
      "1. 명칭: 하트블리드 (Heartbleed)",
      "2. 시스템 조치: OpenSSL 1.0.1g 이상 업데이트 또는 -DOPENSSL_NO_HEARTBEATS 옵션 재컴파일",
      "3. 후속 조치: SSL 인증서 폐기 및 재발급, 관리자/사용자 비밀번호 재설정 및 기존 세션 강제 종료",
    ],
    scoringPoints: [
      "Heartbleed 명칭 정확도 (4점)",
      "패키지 업데이트 및 컴파일 옵션 비활성화 서술 (5점)",
      "인증서 재발급 및 세션/비밀번호 무효화 후속 대책 (5점)",
    ],
    explanation:
      "Heartbleed(CVE-2014-0160)의 무서운 점은 서버에 어떠한 비정상적인 로그(흔적)도 남기지 않고 메모리 데이터를 훔쳐갈 수 있다는 점이었습니다. 따라서 패치를 한 후에도 이미 유출되었을 가능성이 있는 개인키와 세션을 반드시 폐기/갱신해야 완전한 조치가 됩니다.",
    examTips:
      "단순 패치만 적으면 감점됩니다! '인증서 재발급(폐기)'과 '비밀번호 변경 및 세션 만료'라는 후속 보안 거버넌스 조치를 반드시 함께 서술해야 14점 만점을 받을 수 있습니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Attacker as 공격자 (클라이언트)
    participant Server as 취약한 OpenSSL 웹 서버
    participant Memory as 서버 프로세스 메모리 버퍼

    Note over Attacker,Server: [정상 Heartbeat 요청]
    Note over Attacker,Server: Payload: 'BIRD' (4 Bytes) + Length: 4 지정 -> 정상 응답
    Note over Attacker,Server: [Heartbleed 악의적 요청 (버퍼 오버리드)]
    Attacker->>Server: Heartbeat Request (Payload: 'BIRD', Length: 65,535 Bytes 조작)
    Note over Server: ⚠️ 경계값 검사 누락 (Bounds Check 부재)<br/>실제 크기(4바이트) 검증 없이 요청 길이(64KB) 신뢰
    Server->>Memory: 메모리에서 65,535 바이트를 읽어 응답 버퍼로 복사
    Memory-->>Server: 'BIRD' + [인접 메모리 64KB (개인키, 세션 쿠키, 계정 비밀번호)]
    Server-->>Attacker: 64KB 메모리 덤프 패킷 반환 (Buffer Over-read 정보 유출)`,
  },

  // =================================================================
  // [문제 11] 서술·작업형 (14점) - 웹 취약점 분석 및 시큐어 코딩
  // =================================================================
  {
    id: 11,
    subjectId: "application",
    type: "practical",
    score: 14,
    domain: "애플리케이션 보안 / 시큐어 코딩",
    title: "SQL 인젝션 방어(Prepared Statement) 및 XSS 3대 유형 분석",
    description:
      "웹 애플리케이션의 대표적인 입력값 검증 취약점에 관한 다음 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "SQL 인젝션을 방어하기 위해 사용하는 'Prepared Statement(선컴파일 쿼리)'의 방어 원리를 서술하시오.",
        answer:
          "데이터베이스 쿼리문 구조를 미리 컴파일하여 실행 계획(Execution Plan)을 고정해 두고, 사용자 입력값을 단순한 '파라미터(값)'로만 바인딩 처리함으로써 입력값 내에 악의적인 SQL 구문이 포함되어 있더라도 쿼리의 문법적 구조를 절대 변경하지 못하도록 무력화한다.",
        scoringCriteria: "선컴파일 쿼리 구조 고정 및 입력값을 파라미터로만 취급한다는 핵심 원리 서술 시 5점",
      },
      {
        number: 2,
        question:
          "XSS(크로스 사이트 스크립팅)의 3가지 유형(Stored, Reflected, DOM-based)의 공격 대상 및 스크립트 실행 경로의 차이점을 각각 1문장으로 비교 서술하시오.",
        answer:
          "1. 저장형(Stored XSS): 악성 스크립트가 게시판 DB 등 서버 저장소에 영구 보관되어, 해당 글을 조회하는 모든 피해자 브라우저에서 실행됨\n2. 반사형(Reflected XSS): 악성 스크립트가 URL 쿼리스트링에 포함되어 서버로 전달된 후, 응답 페이지에 그대로 반사(출력)되어 클릭한 피해자 브라우저에서 실행됨\n3. DOM 기반(DOM-based XSS): 악성 스크립트가 서버를 거치지 않고, 브라우저 단에서 클라이언트 자바스크립트가 DOM 객체를 동적으로 처리하는 과정에서 직접 실행됨",
        scoringCriteria: "3가지 유형의 저장 위치 및 서버 경유 여부 차이를 정확히 비교 시 6점",
      },
      {
        number: 3,
        question:
          "자바스크립트(`document.cookie`)를 통한 세션 쿠키 탈취를 원천 차단하기 위해 쿠키 발급 시 설정해야 하는 보안 플래그 명칭을 쓰시오.",
        answer: "HttpOnly 플래그",
        scoringCriteria: "HttpOnly 정확히 기재 시 3점",
      },
    ],
    answer: [
      "1. Prepared Statement: 쿼리 구조 선컴파일 및 입력값의 단순 파라미터 바인딩으로 문법 변조 차단",
      "2. XSS 3대 유형: Stored(DB 저장), Reflected(URL 반사), DOM-based(클라이언트 스크립트가 직접 DOM 조작)",
      "3. 쿠키 보호 플래그: HttpOnly",
    ],
    scoringPoints: [
      "Prepared Statement의 컴파일 및 바인딩 원리 명시 (5점)",
      "Stored, Reflected, DOM-based XSS의 서버 개입 여부 및 전달 경로 명시 (6점)",
      "HttpOnly 쿠키 플래그 명칭 (3점)",
    ],
    explanation:
      "시큐어 코딩 핵심 원칙:\n• SQL Injection 방어: Prepared Statement 기본 적용 + 동적 쿼리 사용 시 화이트리스트 검증\n• XSS 방어: HTML 엔티티 치환(입출력 인코딩) + 안전한 라이브러리(Lucy-XSS, DOMPurify) + HttpOnly 쿠키 플래그 + CSP 헤더 적용",
    examTips:
      "DOM-based XSS는 '서버로 스크립트가 전송되지 않고 브라우저 DOM 파싱 과정에서 발생한다'는 점이 단골 출제 포인트입니다.",
    mermaidChart: `flowchart TD
    subgraph Stored["1. Stored XSS (저장형 - DB 영구 보관)"]
        A1["공격자"] -->|"1. 악성 스크립트 글 등록"| S1["웹 서버 및 DB"]
        V1["일반 사용자"] -->|"2. 게시글 조회 요청"| S1
        S1 -->|"3. 악성 스크립트 포함 응답"| V1
        V1 -->|"4. 브라우저에서 실행 (쿠키 탈취)"| A1
    end

    subgraph Reflected["2. Reflected XSS (반사형 - URL 쿼리 파라미터)"]
        A2["공격자"] -->|"1. 악성 파라미터 링크 전달"| V2["희생자"]
        V2 -->|"2. 링크 클릭 (서버 전달)"| S2["웹 서버"]
        S2 -->|"3. 응답에 스크립트 반사"| V2
        V2 -->|"4. 브라우저에서 실행"| A2
    end

    subgraph DOMBased["3. DOM-based XSS (클라이언트 DOM 조작)"]
        A3["공격자"] -->|"1. 악성 URL 접속 유도"| V3["희생자 브라우저"]
        V3 -->|"2. 클라이언트 JS 파싱"| D3["브라우저 DOM 객체 조작"]
        D3 -->|"3. 악성 스크립트 실행"| V3
    end`,
  },

  // =================================================================
  // [문제 12] 서술·작업형 (14점) - 네트워크 DoS 공격 분석
  // =================================================================
  {
    id: 12,
    subjectId: "network",
    type: "practical",
    score: 14,
    domain: "네트워크 보안 / 침해 공격 대응",
    title: "Slow 계열 DoS(서비스 거부) 공격 3종 원리 및 대응 방안",
    description:
      "적은 대역폭으로 웹 서버의 가용성을 고갈시키는 Slow 계열 DoS 공격에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "Slowloris(Slow HTTP Header DoS) 공격의 원리를 HTTP 요청 헤더의 종료 문자와 관련지어 서술하시오.",
        answer:
          "정상적인 HTTP 헤더의 끝은 빈 줄인 CRLF 2번(`\\r\\n\\r\\n`)이어야 하나, Slowloris는 헤더의 마지막에 개행을 1번(`\\r\\n`)만 보낸 뒤 조작된 임의의 헤더를 매우 긴 주기(예: 10~15초)로 찔끔찔끔 전송하여 웹 서버가 헤더 수신 완료를 대기하느라 연결(Connection)을 장시간 유지하게 만듦으로써 서버의 동시 연결 자원(Connection Pool)을 고갈시킨다.",
        scoringCriteria: "CRLF 미완성 및 주기적 헤더 전송으로 인한 연결 유지 메커니즘 서술 시 5점",
      },
      {
        number: 2,
        question:
          "RUDY(Slow HTTP POST DoS) 공격의 원리를 Content-Length 헤더 및 Body 전송 방식과 관련지어 서술하시오.",
        answer:
          "HTTP POST 요청 시 `Content-Length` 헤더를 비정상적으로 매우 큰 값(예: 수만~수십만 바이트)으로 설정한 후, 실제 메시지 본문(Body) 데이터를 1바이트씩 매우 느린 간격으로 쪼개어 전송함으로써 웹 서버가 본문 수신을 끝내지 못하고 연결을 계속 열어두게 만들어 세션을 고갈시킨다.",
        scoringCriteria: "Content-Length 대용량 설정 및 본문 데이터 분할 지연 전송 원리 명시 시 5점",
      },
      {
        number: 3,
        question:
          "이러한 Slow 계열 DoS 공격을 방어하기 위한 웹 서버(Apache 등) 차원의 대응 방안 2가지를 서술하시오.",
        answer:
          "1. HTTP 헤더 및 바디 수신 제한 시간(Timeout)을 짧게 설정하고 최소 데이터 전송 속도를 강제한다. (예: Apache의 `mod_reqtimeout` 모듈을 활성화하여 `RequestReadTimeout` 지시자 설정)\n2. 동일 IP당 동시 접속 연결 수(Max Connections per IP)를 엄격히 제한한다. (예: iptables의 connlimit 모듈 또는 웹 방화벽(WAF) 설정)",
        scoringCriteria: "RequestReadTimeout 등 타임아웃/최소속도 설정(2점), IP당 동시 연결 수 제한(2점) 총 4점",
      },
    ],
    answer: [
      "1. Slowloris: HTTP 헤더 끝(CRLF CRLF) 미완성 상태로 주기적 더미 헤더 지연 전송",
      "2. RUDY: Content-Length를 거대하게 설정한 후 본문을 1바이트씩 지연 전송",
      "3. 대응 방안: Apache mod_reqtimeout(RequestReadTimeout) 적용, IP당 최대 동시 연결 제한(connlimit)",
    ],
    scoringPoints: [
      "Slowloris의 헤더 종료 플래그 미완성 원리 (5점)",
      "RUDY의 Content-Length와 바디 지연 전송 원리 (5점)",
      "mod_reqtimeout 및 IP 동시 연결 수 제한 방어책 (4점)",
    ],
    explanation:
      "Slow DoS 공격의 핵심은 SYN Flooding이나 UDP Flooding처럼 거대한 트래픽(볼륨)을 쏟아붓는 것이 아니라, 합법적인 TCP 3-Way Handshake를 마친 정상 세션을 아주 느리게 유지하여 아파치의 MaxClients(MaxRequestWorkers)를 잠식하는 애플리케이션 계층 지능형 공격이라는 점입니다.",
    examTips:
      "실기 시험에서 Slowloris, RUDY(Slow POST), Slow Read DoS 3가지의 명칭과 아파치 방어 모듈(mod_reqtimeout)의 명칭은 단답형과 서술형을 넘나드는 초빈출 키워드입니다.",
    mermaidChart: `flowchart TD
    subgraph Normal["정상 HTTP 요청 처리"]
        N1["GET / HTTP/1.1<br/>Host: test.com<br/>(완전한 CRLF 2회 개행)"] --> N2["서버: 수신 완료 즉시 응답 후 세션 반환"]
    end

    subgraph Slowloris["1. Slowloris (Slow Header DoS)"]
        S1["GET / HTTP/1.1<br/>Host: test.com<br/>X-a: 1<br/>(CRLF 1회만 전송)"]
        S2["10~15초마다 추가 헤더 전송 ('X-b: 2')"]
        S1 --> S2 --> S3["서버: 헤더 끝 대기 상태 유지 -> Connection Pool 고갈"]
    end

    subgraph RUDY["2. R.U.D.Y (Slow POST DoS)"]
        R1["POST /upload HTTP/1.1<br/>Content-Length: 100000 (대용량 선언)"]
        R2["본문(Body)을 1바이트씩 10초 간격 지연 전송"]
        R1 --> R2 --> R3["서버: Body 수신 완료 대기 -> 웹 서버 작업 쓰레드 점유/마비"]
    end`,
  },

  // =================================================================
  // [문제 13] 서술·작업형 (14점) - 개인정보보호법 & ISMS-P
  // =================================================================
  {
    id: 13,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "보안 관리 & 법률",
    title: "개인정보 유출 통지·신고 기준 및 안전성 확보조치 기준",
    description:
      "개인정보보호법 및 '개인정보의 안전성 확보조치 기준'에 관한 다음 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "개인정보처리자가 개인정보가 유출되었음을 알게 되었을 때, 정보주체에게 지체 없이 알려야 하는 법정 통지 기한과 통지 항목 3가지를 서술하시오.",
        answer:
          "• 통지 기한: 72시간 이내 (정당한 사유가 없는 한 지체 없이 72시간 이내에 통지)\n• 통지 항목(3가지): 1) 유출된 개인정보의 항목, 2) 유출된 시점과 그 경위, 3) 피해를 최소화하기 위해 정보주체가 할 수 있는 방법, 4) 개인정보처리자의 대응조치 및 피해 구제절차, 5) 담당부서 및 연락처 중 3가지",
        scoringCriteria: "72시간 이내 명시(2점), 유출 통지 항목 3가지 정확히 서술(3점) 총 5점",
      },
      {
        number: 2,
        question:
          "개인정보보호위원회 또는 한국인터넷진흥원(KISA) 등 전문기관에 의무적으로 유출 신고를 해야 하는 유출 규모(건수) 기준과 신고 기한을 서술하시오.",
        answer:
          "• 기준: 1천 명 이상의 정보주체에 관한 개인정보가 유출된 경우\n• 신고 기한: 72시간 이내에 전문기관에 신고",
        scoringCriteria: "1천 명 이상 기준(2.5점), 72시간 이내 신고(2.5점) 총 5점",
      },
      {
        number: 3,
        question:
          "개인정보처리시스템의 '접속기록 보관 및 점검' 기준에 따라, 개인정보취급자가 개인정보처리시스템에 접속한 기록은 최소 몇 년(월) 이상 보관해야 하는지 일반 기준과 강화 기준(5만 명 이상 등)을 각각 쓰시오.",
        answer:
          "• 일반 기준: 최소 1년 이상 보관·관리\n• 강화 기준(5만 명 이상의 정보주체 정보 처리 또는 고유식별정보·민감정보 처리 시스템): 최소 2년 이상 보관·관리",
        scoringCriteria: "일반 1년 이상(2점), 강화 2년 이상(2점) 총 4점",
      },
    ],
    answer: [
      "1. 정보주체 통지: 72시간 이내 / 항목: 유출 항목, 시점/경위, 조치방법, 피해구제절차, 담당자 연락처",
      "2. 전문기관 신고: 1천 명 이상 유출 시 72시간 이내 신고",
      "3. 접속기록 보관: 일반 1년 이상 / 5만명 이상 또는 고유식별·민감정보 처리 시 2년 이상",
    ],
    scoringPoints: [
      "개정 개인정보보호법에 따른 72시간 통지 기한 (과거 24시간에서 72시간으로 개정된 점 주의) (2점)",
      "통지 항목 중 3가지 이상 명시 (3점)",
      "전문기관 신고 기준 1천 명 및 72시간 기재 (5점)",
      "접속기록 일반 1년, 5만명 이상 2년 정확도 (4점)",
    ],
    explanation:
      "2023~2024 개정 개인정보보호법 핵심 변경 사항:\n• 정보주체 통지 및 전문기관 신고 기한이 기존 '24시간'에서 글로벌 기준(GDPR 등)에 맞추어 '72시간 이내'로 통일되었습니다.\n• 접속기록 점검 주기는 월 1회 이상이며, 5만 명 이상 고유식별정보 처리 시스템은 2년 이상 보관해야 합니다.",
    examTips:
      "법률 개정 사항(72시간)과 접속기록 보관 기간(1년/2년)은 실기 시험 법률 파트에서 단골로 출제되는 핵심 숫자 문제입니다.",
  },
];
