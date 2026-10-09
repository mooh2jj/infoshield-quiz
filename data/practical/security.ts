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
    mermaidChart: `flowchart TD
    Leak["개인정보 유출 인지"] --> Time{"인지 시점부터<br/>72시간 이내"}

    Time --> Notice["정보주체 통지 (원칙)<br/>1) 유출 항목, 2) 시점·경위<br/>3) 피해 최소화 방법, 4) 대응조치<br/>5) 담당부서 및 연락처"]

    Time --> CheckScale{"유출 규모 검토"}
    CheckScale -->|"1천 명 이상 유출"| Report["전문기관 의무 신고<br/>개인정보보호위원회 또는 KISA<br/>(72시간 이내 전자문서/웹)"]
    CheckScale -->|"1천 명 미만 유출"| Internal["자체 대응 및 기록 보존<br/>(홈페이지 공지 등)"]`,
  },

  // =================================================================
  // [문제 14] 단답형 (3점) - 애플리케이션 보안 / 웹 표준
  // =================================================================
  {
    id: 14,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "CORS 사전 요청(Preflight) 메커니즘 및 보안 헤더",
    description:
      "웹 브라우저의 동일 출처 정책(SOP)을 안전하게 완화하여 다른 출처의 리소스를 요청할 때 동작하는 CORS(Cross-Origin Resource Sharing)에 관한 물음이다. 빈칸 (A), (B)를 각각 기술하시오.",
    scenario:
      "웹 브라우저는 'PUT', 'DELETE' 메소드를 사용하거나 커스텀 HTTP 헤더를 포함하는 교차 출처 요청을 전송하기 전, 실제 요청이 안전한지 서버에 미리 확인하기 위해 HTTP (  A  ) 메소드를 사용한 사전 요청(Preflight Request)을 보낸다. 서버가 해당 출처를 신뢰하여 요청을 허용하고자 할 때 응답 헤더에 (  B  ) 헤더를 포함하여 반환해야 한다.",
    answer: [
      "(A): OPTIONS",
      "(B): Access-Control-Allow-Origin",
    ],
    scoringPoints: [
      "(A): OPTIONS 메소드 정확히 기재 시 1.5점",
      "(B): Access-Control-Allow-Origin 헤더 정확히 기재 시 1.5점",
    ],
    explanation:
      "• Preflight Request(사전 요청):\n브라우저가 본 요청(Actual Request)을 보내기 전, 서버가 허용하는 Origin, Method, Header를 확인하기 위해 'OPTIONS' 메소드로 날리는 가벼운 사전 질의입니다.\n• 핵심 CORS 응답 헤더:\n1) Access-Control-Allow-Origin: 허용할 Origin 지정 (와일드카드 '*' 사용 시 보안 위험 발생)\n2) Access-Control-Allow-Methods: 허용할 HTTP 메소드 목록 (GET, POST, PUT, DELETE 등)\n3) Access-Control-Allow-Headers: 허용할 커스텀 헤더\n4) Access-Control-Allow-Credentials: 쿠키 등 인증 정보 포함 허용 여부 ('true' 설정 시 Allow-Origin에 '*' 사용 불가)",
    examTips:
      "Preflight 요청에 사용되는 메소드(OPTIONS)와 와일드카드(*) 사용 시 쿠키(Credentials) 전송 불가 제약 조건이 서술형/단답형 단골 기출입니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Browser as 브라우저 (Origin: a.com)
    participant Server as 교차 출처 서버 (Origin: b.com)

    Note over Browser,Server: 1단계: 사전 검증 (Preflight Request)
    Browser->>Server: OPTIONS /api/data (Origin: a.com, Access-Control-Request-Method: PUT)
    Server-->>Browser: 200 OK (Access-Control-Allow-Origin: https://a.com, Allow-Methods: PUT)

    Note over Browser,Server: 2단계: 본 요청 (Actual Request) 전송
    Browser->>Server: PUT /api/data (실제 데이터 페이로드 전송)
    Server-->>Browser: 200 OK (처리 결과 반환)`,
  },

  // =================================================================
  // [문제 15] 단답형 (3점) - 암호학 & PKI / 블록 암호 운영 모드
  // =================================================================
  {
    id: 15,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "암호학 & PKI",
    title: "대칭키 블록 암호 운영 모드 (CBC 모드와 초기화 벡터)",
    description:
      "현대 대칭키 블록 암호 알고리즘(AES, SEED 등)의 운영 모드(Operation Mode)에 관한 설명이다. 빈칸 (A), (B)를 각각 채우시오.",
    scenario:
      "1. ECB(Electronic Codebook) 모드의 패턴 노출 취약점을 방지하기 위하여, 첫 번째 평문 블록을 암호화하기 직전에 XOR 연산을 수행하기 위해 도입된 임의의 난수 블록: (  A  )\n2. 이전 단계에서 생성된 암호문 블록을 다음 평문 블록과 연속적으로 XOR 연산한 후 암호화를 수행하는 체이닝(Chaining) 방식의 대표적인 블록 암호 운영 모드: (  B  )",
    answer: [
      "(A): 초기화 벡터 (IV / Initialization Vector)",
      "(B): CBC (Cipher Block Chaining)",
    ],
    scoringPoints: [
      "(A): IV 또는 초기화 벡터 (Initialization Vector) 1.5점",
      "(B): CBC 또는 Cipher Block Chaining 1.5점",
    ],
    explanation:
      "블록 암호 운영 모드 비교:\n• ECB(Electronic Codebook): 평문 블록마다 독립 암호화. 동일 평문=동일 암호문이 되어 패턴이 그대로 노출되므로 기밀성이 낮음 (사용 금지 권고)\n• CBC(Cipher Block Chaining): 이전 암호문 블록과 현재 평문 블록을 XOR한 뒤 암호화. 첫 블록을 위해 IV(Initialization Vector)가 필수적임\n• CTR(Counter) & GCM(Galois/Counter Mode): 카운터 값을 암호화하여 스트림 암호처럼 동작하며, 병렬 연산이 가능하고 GCM의 경우 인증 암호화(AEAD)를 제공함",
    examTips:
      "초기화 벡터(IV)의 필요성과 CBC 모드의 연쇄 구조는 단답형 및 암호학 기초 문항으로 매년 반복 출제됩니다.",
    mermaidChart: `flowchart LR
    subgraph Block1["첫 번째 블록"]
        P1["평문 블록 1"]
        IV["초기화 벡터 (IV)"]
        XOR1((XOR))
        ENC1["블록 암호화 (Key)"]
        C1["암호문 블록 1"]
        P1 --> XOR1
        IV --> XOR1
        XOR1 --> ENC1 --> C1
    end

    subgraph Block2["두 번째 블록 (체이닝)"]
        P2["평문 블록 2"]
        XOR2((XOR))
        ENC2["블록 암호화 (Key)"]
        C2["암호문 블록 2"]
        P2 --> XOR2
        C1 -.->|"이전 암호문 전달"| XOR2
        XOR2 --> ENC2 --> C2
    end`,
  },

  // =================================================================
  // [문제 16] 서술·작업형 (14점) - 네트워크 보안 / DNS 침해사고
  // =================================================================
  {
    id: 16,
    subjectId: "network",
    type: "practical",
    score: 14,
    domain: "네트워크 보안 / 침해사고 분석",
    title: "DNS 캐시 포이즈닝(Kaminsky 공격) 분석 및 BIND 방어",
    description:
      "도메인 네임 시스템(DNS)을 대상으로 가짜 IP 주소를 주입하는 DNS 캐시 포이즈닝(DNS Cache Poisoning) 공격과 대응 방안에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "공격자가 로컬 DNS 캐시 서버에 위조된 DNS 응답 패킷을 주입(Poisoning)하여 성공시키기 위해 반드시 일치시켜야 하는 DNS/UDP 헤더 필드 2가지를 쓰시오.",
        answer:
          "1. Transaction ID (16비트 질의 식별자 번호)\n2. UDP Source Port (질의 패킷의 출발지 포트 번호)",
        scoringCriteria: "Transaction ID(2.5점), UDP Source Port(2.5점) 총 5점",
      },
      {
        number: 2,
        question:
          "DNS 응답 데이터의 위·변조를 원천 방지하기 위해 공개키 기반 디지털 서명을 도입하여 응답의 출처 인증과 무결성을 보장하는 보안 확장 기술의 명칭을 쓰시오.",
        answer: "DNSSEC (DNS Security Extensions)",
        scoringCriteria: "DNSSEC 또는 DNS Security Extensions 정확히 기술 시 4점",
      },
      {
        number: 3,
        question:
          "리눅스 BIND DNS 서버(`named.conf`)에서 외부의 불특정 호스트가 자사 DNS 서버를 재귀적 질의 서버(Open Resolver)로 악용하여 캐시 포이즈닝이나 증폭 DDoS 공격을 유발하지 못하도록 재귀 질의를 차단하거나 사내 네트워크로만 제한하는 지시자 설정 구문을 작성하시오.",
        answer:
          "recursion no; (외부 전체 차단) 또는 allow-recursion { 127.0.0.1; 192.168.1.0/24; }; (특정 내부망만 허용)",
        scoringCriteria: "recursion no; 또는 allow-recursion 설정 구문 정확히 기술 시 5점",
      },
    ],
    answer: [
      "1. 일치 필드: Transaction ID, UDP Source Port (출발지 포트)",
      "2. 보안 확장 프로토콜: DNSSEC (DNS Security Extensions)",
      "3. BIND 설정: recursion no; 또는 allow-recursion { 내부 대역; };",
    ],
    codeBlock: {
      language: "bind",
      code: `options {
    directory "/var/named";
    recursion no;                       // 외부 재귀 질의 전면 비활성화 (권장)
    // 또는 내부 인가된 대역만 허용:
    // allow-recursion { 127.0.0.1; 192.168.10.0/24; };
};`,
    },
    scoringPoints: [
      "Transaction ID 및 UDP Port 무작위화(Randomization) 공격 매칭 (5점)",
      "DNSSEC 명칭 및 디지털 서명 무결성 검증 원리 (4점)",
      "BIND named.conf의 recursion 설정 구문 (5점)",
    ],
    explanation:
      "• DNS Cache Poisoning 원리:\n로컬 DNS가 외부 권한 DNS로 도메인 질의를 보낸 직후, 공격자가 권한 DNS보다 먼저 위조된 IP 응답을 쏟아붓습니다. 16비트 Transaction ID와 질의 출발지 포트가 일치하면 위조 IP가 캐시에 등록되어 모든 내부 사용자가 피싱 사이트로 유도됩니다.\n• 방어책:\n1) 소스 포트 무작위화 (Source Port Randomization, 53번 고정 방지)\n2) Open Resolver 차단 (`recursion no;`)\n3) DNSSEC 적용 (RRSIG 레코드를 통한 전자서명 검증)",
    examTips:
      "실기 14점 단골 문제입니다. Transaction ID와 출발지 포트 번호 2가지 필드명과 named.conf의 recursion 지시자는 반드시 손으로 적을 수 있어야 합니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Victim as 사용자
    participant LocalDNS as 로컬 DNS 캐시 서버
    actor Attacker as 공격자 (스푸핑)
    participant AuthDNS as 정상 권한 DNS 서버

    Victim->>LocalDNS: bank.com 질의
    LocalDNS->>AuthDNS: bank.com 질의 (TXID: 0x4A1F, Port: 54321)
    critical 응답 경합 (Race Condition)
        Attacker-->>LocalDNS: 위조 응답 대량 전송 (TXID 0x4A1F 추측 + 피싱 IP)
        Note over LocalDNS: 위조 패킷이 먼저 도착하여 캐시에 가짜 IP 저장!
    option 정상 응답
        AuthDNS-->>LocalDNS: 정상 응답 도착 (이미 캐시되어 무시됨)
    end
    LocalDNS-->>Victim: 피싱 IP 주소 반환 (파밍 공격 피해)`,
  },

  // =================================================================
  // [문제 17] 서술·작업형 (14점) - 시스템 보안 / 리눅스 권한
  // =================================================================
  {
    id: 17,
    subjectId: "system",
    type: "practical",
    score: 14,
    domain: "시스템 보안 / 리눅스 계정·권한 관리",
    title: "리눅스 특수 권한(SetUID/SetGID/Sticky Bit) 및 권한 상승 점검",
    description:
      "리눅스 시스템의 특수 권한 설정 및 이를 악용한 권한 상승(Privilege Escalation) 보안 취약점 점검에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "리눅스 3대 특수 권한인 SetUID, SetGID, Sticky Bit의 의미와 각각을 8진수로 표기할 때의 숫자를 쓰시오.",
        answer:
          "1. SetUID (4000): 실행 파일 실행 시 해당 프로세스가 파일 소유자(User)의 권한으로 동작함\n2. SetGID (2000): 실행 시 파일 그룹(Group) 권한으로 동작하거나 디렉터리 내 생성 파일이 상위 디렉터리 그룹을 상속받음\n3. Sticky Bit (1000): 공용 디렉터리(예: /tmp)에서 누구나 파일 생성이 가능하지만 삭제·수정은 파일 소유자와 root만 가능함",
        scoringCriteria: "각 권한별 설명 및 8진수(4000, 2000, 1000) 정확도 각 2점씩 총 6점",
      },
      {
        number: 2,
        question:
          "루트(root) 소유이면서 SetUID 권한이 설정되어 있는 시스템 내 모든 일반 파일을 검색하여 보안 점검을 수행하고자 한다. 이를 수행하는 `find` 명령어 전체 구문을 작성하시오.",
        answer:
          "find / -user root -perm -4000 -print (또는 find / -user root -perm /4000 -type f 2>/dev/null)",
        scoringCriteria: "경로(/), -user root, -perm -4000 (또는 /4000) 옵션 정확히 기술 시 4점",
      },
      {
        number: 3,
        question:
          "보안 점검 결과 취약한 백도어로 판명된 `/usr/local/bin/backup_tool` 파일의 SetUID 권한만을 안전하게 제거하는 `chmod` 명령어를 기호 모드(Symbolic)와 8진수 숫자 모드로 각각 작성하시오. (기존 권한은 4755라고 가정)",
        answer:
          "• 기호 모드: chmod u-s /usr/local/bin/backup_tool\n• 숫자 모드: chmod 0755 /usr/local/bin/backup_tool (또는 chmod 755)",
        scoringCriteria: "기호 모드(2점), 숫자 모드(2점) 총 4점",
      },
    ],
    answer: [
      "1. 특수 권한: SetUID(4000, 소유자 권한 실행), SetGID(2000, 그룹 권한 실행), Sticky Bit(1000, 소유자만 삭제 가능)",
      "2. find 명령어: find / -user root -perm -4000 -print (또는 -type f)",
      "3. chmod 제거: chmod u-s /경로 또는 chmod 0755 /경로",
    ],
    codeBlock: {
      language: "bash",
      code: `# 1. root 소유의 SetUID 파일 전수 점검
find / -user root -perm -4000 -type f 2>/dev/null

# 2. 불필요한 SetUID 제거 조치
chmod u-s /usr/local/bin/backup_tool
# 확인: ls -l /usr/local/bin/backup_tool (rwsr-xr-x -> rwxr-xr-x)`,
    },
    scoringPoints: [
      "SetUID(4000), SetGID(2000), Sticky Bit(1000) 개념 및 진수 (6점)",
      "find 옵션(-user root, -perm -4000) 정확도 (4점)",
      "chmod u-s 및 0755 문법 정확도 (4점)",
    ],
    explanation:
      "• SetUID의 양날의 검:\n`/usr/bin/passwd`처럼 일반 사용자가 자신의 암호를 바꿀 때 일시적으로 root 권한이 필요한 경우 필수적이지만, 공격자가 root 권한의 SetUID 셸(Shell)이나 프로그램을 심어두면 임의의 일반 계정으로 접속 후 루트 권한을 획득(Privilege Escalation)할 수 있습니다.\n• 표기법:\n실행 권한(x) 자리에 소문자 `s`가 오면 실행권한+SetUID, 대문자 `S`가 오면 실행권한이 없는 상태에서 SetUID만 켜진 비정상 상태입니다.",
    examTips:
      "find 명령어 옵션(-perm -4000)과 권한 회수 명령어(chmod u-s)는 시스템 실무 작업형 14점 단골 문제입니다.",
    mermaidChart: `flowchart TD
    User["일반 사용자 (UID: 1001, RUID: 1001)"] --> Exec["SetUID 바이너리 실행 (/usr/bin/passwd)"]

    Exec --> Process["프로세스 메모리 적재 (Process)"]
    Process --> Check{"파일에 SetUID(4000)<br/>비트가 설정되어 있는가?"}

    Check -->|"YES (소유자: root)"| RootEUID["EUID = 0 (root 권한 획득!)<br/>시스템 파일(/etc/shadow) 수정 가능"]
    Check -->|"NO"| NormalEUID["EUID = 1001 (일반 사용자 권한 유지)"]`,
  },

  // =================================================================
  // [문제 18] 서술·작업형 (14점) - 보안 관리 & 법률 / 침해사고 대응
  // =================================================================
  {
    id: 18,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "보안 관리 & 법률 / 침해사고 대응",
    title: "침해사고 대응 절차 6단계 및 디지털 포렌식 5대 원칙",
    description:
      "한국인터넷진흥원(KISA) 침해사고 대응 가이드 및 디지털 포렌식 증거 수집 원칙에 관한 다음 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "일반적인 침해사고 처리 절차(라이프사이클) 6단계를 순서대로 명확히 나열하시오.",
        answer:
          "1단계: 사고 전 준비 (Preparation)\n2단계: 사고 탐지 (Detection)\n3단계: 초기 대응 (Containment/Triage - 증거 확보)\n4단계: 대응 전략 수립 및 억제 (Eradication preparation)\n5단계: 사고 조사 및 근본 조치/복구 (Eradication & Recovery)\n6단계: 사후 검토 및 교훈 (Post-Incident Review / Lessons Learned)",
        scoringCriteria: "6단계를 올바른 순서대로 기술 시 5점 (1단계 누락 시 감점)",
      },
      {
        number: 2,
        question:
          "법정에 제출되는 디지털 증거의 증거 능력을 인정받기 위한 '디지털 포렌식 5대 기본 원칙' 중 3가지를 제시하고 개념을 간략히 설명하시오.",
        answer:
          "1. 정당성의 원칙: 모든 증거 수집은 적법 절차(영장주의 등)를 준수해야 함\n2. 재현성의 원칙: 동일한 조건에서 동일한 도구와 절차로 검증 시 동일한 결과가 도출되어야 함\n3. 신속성의 원칙: 휘발성 증거의 소멸을 방지하기 위해 신속하게 수집되어야 함\n4. 연계보관성의 원칙 (Chain of Custody): 증거 획득부터 법정 제출까지 인계자, 보관자, 시간, 장소의 이동 경로가 투명하게 기록·관리되어야 함\n5. 무결성의 원칙: 수집된 증거는 위·변조되지 않았음을 해시값(MD5, SHA 등)을 통해 입증해야 함 (중 3가지 기술)",
        scoringCriteria: "3가지 원칙 명칭 및 설명 정확도 각 2점씩 총 6점",
      },
      {
        number: 3,
        question:
          "침해사고 발생 시스템 조사 시 전원을 즉시 끄지 않고 가장 먼저 물리 메모리(RAM) 등 휘발성 데이터(Volatile Data)를 수집해야 하는 기술적 이유를 서술하시오.",
        answer:
          "전원이 차단되면 물리 메모리에 상주하는 휘발성 데이터가 영구 소실되기 때문이며, 메모리에는 공격자의 활성 네트워크 연결(세션), 실행 중인 악성 프로세스, 인메모리 악성코드, 암호화 키, 계정 자격증명 등 디스크에 저장되지 않는 결정적인 휘발성 증거가 포함되어 있기 때문이다.",
        scoringCriteria: "전원 차단 시 소멸 및 활성 프로세스/네트워크/키 등 핵심 증거 존재 이유 기술 시 3점",
      },
    ],
    answer: [
      "1. 6단계: 사고 전 준비 -> 사고 탐지 -> 초기 대응 -> 대응 전략 -> 근본 조치(제거/복구) -> 사후 검토",
      "2. 포렌식 원칙(3가지): 무결성의 원칙(해시 검증), 연계보관성의 원칙(Chain of Custody), 재현성의 원칙(동일 결과 도출)",
      "3. 휘발성 메모리 수집 이유: 전원 차단 시 소멸되는 활성 네트워크 연결, 악성 프로세스, 암호키 등 결정적 증거 보존",
    ],
    scoringPoints: [
      "침해사고 대응 6단계 순서의 정확도 (5점)",
      "포렌식 5대 원칙(무결성, 연계보관성, 정당성, 재현성, 신속성) 중 3가지 (6점)",
      "휘발성 데이터(RAM) 소멸 방지 및 인메모리 증거 보존 서술 (3점)",
    ],
    explanation:
      "• 휘발성 데이터 수집 순서 (Order of Volatility):\n1) 레지스터 및 캐시\n2) 라우팅 테이블, ARP 캐시, 프로세스 테이블, 커널 통계, 물리 메모리(RAM)\n3) 임시 파일 시스템(/tmp, swap)\n4) 보조기억장치(디스크)\n5) 원격 로깅 및 네트워크 토폴로지\n6) 백업 미디어",
    examTips:
      "실기 시험에서 연계보관성(Chain of Custody)과 무결성(Hash)의 정의, 그리고 사고 대응 6단계의 명칭 순서는 매년 14점 배점으로 반복 출제되는 핵심 주제입니다.",
    mermaidChart: `flowchart TD
    S1["1단계: 사고 전 준비<br/>(대응팀 구성, 도구 확보)"] --> S2["2단계: 사고 탐지<br/>(IDS/SIEM 경고, 이상 징후)"]
    S2 --> S3["3단계: 초기 대응<br/>(휘발성 메모리 수집, 증거 보전)"]
    S3 --> S4["4단계: 대응 전략 수립<br/>(네트워크 격리, 감염 확산 방지)"]
    S4 --> S5["5단계: 근본 조치 및 복구<br/>(악성코드 제거, 시스템 복구)"]
    S5 --> S6["6단계: 사후 검토<br/>(원인 보고서, 보안 정책 개선)"]
    S6 -.->|"피드백 반영 (개선)"| S1`,
  },

  // =================================================================
  // [문제 19] 단답형 (3점) - 애플리케이션 보안 / 세션 쿠키 보안
  // =================================================================
  {
    id: 19,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "HTTP 세션 쿠키 보안 3대 속성 (HttpOnly, Secure, SameSite)",
    description:
      "웹 서버가 사용자의 웹 브라우저에게 세션 쿠키를 발급할 때 사용하는 `Set-Cookie` 응답 헤더의 핵심 보안 속성에 관한 설명이다. 빈칸 (A), (B), (C)를 각각 기술하시오.",
    scenario:
      "1. 브라우저의 클라이언트 스크립트(document.cookie)를 통한 쿠키 접근을 원천 차단하여 XSS 공격 시 세션 탈취를 방지하는 속성: (  A  )\n2. HTTPS(SSL/TLS) 암호화 연결 채널을 통해서만 쿠키를 전송하도록 강제하여 평문 스니핑(Sniffing)을 방지하는 속성: (  B  )\n3. 타 사이트로부터 발생하는 교차 출처(Cross-Site) 요청 시 쿠키 전송 여부를 제어하여 CSRF(크로스 사이트 요청 위조)를 방어하는 속성 (Strict, Lax, None 옵션): (  C  )",
    answer: [
      "(A): HttpOnly",
      "(B): Secure",
      "(C): SameSite",
    ],
    scoringPoints: [
      "(A): HttpOnly 정확히 기술 시 1점",
      "(B): Secure 정확히 기술 시 1점",
      "(C): SameSite 정확히 기술 시 1점",
    ],
    explanation:
      "• Set-Cookie 보안 속성 3대장:\n1) HttpOnly: 브라우저 JavaScript API(`document.cookie`)의 접근을 차단하여 XSS 취약점이 터지더라도 세션 쿠키가 직접 탈취되는 것을 방어합니다.\n2) Secure: 쿠키를 반드시 HTTPS 연결에서만 암호화하여 전송하도록 강제합니다. (HTTP 평문 전송 차단)\n3) SameSite: CSRF 방어의 핵심 플래그\n   • Strict: 모든 교차 출처 요청에서 쿠키 전송을 전면 차단 (가장 안전하나 외부 링크 유입 시 로그인 풀림)\n   • Lax: 안전한 탐색(GET 링크 클릭 등)을 제외한 위험한 요청(POST, iframe 등)에서 쿠키 제외 (기본값 권장)\n   • None: 모든 요청에 쿠키 포함 (반드시 Secure 속성이 함께 설정되어야 함)",
    examTips:
      "단답형 초빈출 3총사입니다. 'HttpOnly(XSS 방어)', 'Secure(스니핑 방어)', 'SameSite(CSRF 방어)'의 보호 대상 공격을 정확히 매칭해야 합니다.",
    mermaidChart: `flowchart TD
    Cookie["Set-Cookie: SESSIONID=abc123xyz..."] --> Flags{"보안 속성 부여"}

    Flags -->|"1. HttpOnly"| P_XSS["✔️ XSS 세션 탈취 방어<br/>document.cookie 접근 차단"]
    Flags -->|"2. Secure"| P_Sniff["✔️ 스니핑/도청 방어<br/>HTTPS 암호화 채널에서만 전송"]
    Flags -->|"3. SameSite (Strict/Lax)"| P_CSRF["✔️ CSRF 위조 요청 방어<br/>외부 사이트 링크 요청 시 쿠키 전송 제한"]`,
  },

  // =================================================================
  // [문제 20] 서술·작업형 (14점) - 애플리케이션 보안 / 시큐어 코딩
  // =================================================================
  {
    id: 20,
    subjectId: "application",
    type: "practical",
    score: 14,
    domain: "애플리케이션 보안 / 시큐어 코딩",
    title: "HTTP 응답 분할(CRLF Injection) 공격 메커니즘 및 대응",
    description:
      "웹 애플리케이션에서 사용자 입력값이 HTTP 응답 헤더에 동적으로 반영될 때 발생하는 CRLF 인젝션(HTTP Response Splitting) 취약점에 관한 물음에 답하시오.",
    scenario:
      "공격자가 로그인 후 리다이렉트되는 웹 애플리케이션의 URL 파라미터에 다음과 같은 악의적인 페이로드를 전달하였다.\nGET /login.jsp?redirect_url=http://service.com%0d%0aSet-Cookie:%20admin_session=hacked%0d%0a%0d%0a<html><script>alert(document.domain)</script></html>\n웹 서버는 입력값을 검증하지 않고 HTTP 응답의 `Location` 헤더에 그대로 반영하여 응답을 전송하였다.",
    subItems: [
      {
        number: 1,
        question:
          "CRLF 문자를 구성하는 2가지 제어 문자(CR, LF)의 영문 정식 명칭과 URL 인코딩된 16진수 아스키 코드 값을 각각 쓰시오.",
        answer:
          "1. CR (Carriage Return): 16진수 %0D (또는 0x0D, \\r)\n2. LF (Line Feed): 16진수 %0A (또는 0x0A, \\n)",
        scoringCriteria: "CR과 LF의 영문 명칭 및 %0D, %0A 코드 값 정확히 기술 시 4점",
      },
      {
        number: 2,
        question:
          "위 시나리오처럼 HTTP 응답 헤더 내에 연속된 CRLF(%0d%0a%0d%0a)가 삽입되었을 때 발생하는 'HTTP 응답 분할(HTTP Response Splitting)'의 기술적 원리와 공격자가 유발할 수 있는 대표적인 2차 공격 2가지를 서술하시오.",
        answer:
          "• 기술적 원리: HTTP 프로토콜 규격상 헤더와 본문(Body)은 빈 줄(CRLF 2회: \\r\\n\\r\\n)로 구분된다. 공격자가 %0d%0a%0d%0a를 삽입하면 서버가 보낸 단일 응답의 헤더 영역이 조기 종료되고, 공격자가 주입한 스크립트가 본문 영역으로 분할 해석되어 1개의 응답이 2개의 응답으로 분할된다.\n• 2차 공격(2가지): 1) Set-Cookie 헤더를 삽입하여 관리자 권한을 위조하거나 세션을 고정하는 세션 고정(Session Fixation) 공격, 2) 조작된 본문(Body)을 브라우저에 렌더링시키는 XSS 공격 (또는 프록시/캐시 서버를 오염시키는 웹 캐시 포이즈닝)",
        scoringCriteria: "헤더 조기 종료 및 1개 응답의 2개 분할 원리(3점), 세션 조작 및 XSS/캐시 포이즈닝 2가지(3점) 총 6점",
      },
      {
        number: 3,
        question:
          "CRLF 인젝션 취약점을 원천 차단하기 위한 서버 측 입력값 검증 및 시큐어 코딩 방안을 서술하시오.",
        answer:
          "HTTP 응답 헤더(Location, Set-Cookie 등)에 사용자 입력값을 동적으로 포함해야 하는 경우, 개행 문자(\\r, \\n, %0d, %0a)가 포함되어 있는지 철저히 검사하여 제거(Replace/Filter)하거나 요청 자체를 거부 처리하며, 최신 WAS 프레임워크의 내장 응답 헤더 유효성 검사 기능을 적용한다.",
        scoringCriteria: "개행 문자(\\r, \\n, %0d, %0a)의 제거/필터링 및 입력값 검증 서술 시 4점",
      },
    ],
    answer: [
      "1. CR(Carriage Return, %0D) 및 LF(Line Feed, %0A)",
      "2. 원리: CRLF 2번 삽입으로 헤더 조기 종료 및 응답 분할 / 2차 공격: Set-Cookie 주입(세션 고정), 가짜 본문 주입(XSS, 캐시 포이즈닝)",
      "3. 시큐어 코딩: HTTP 응답 헤더에 반영되는 모든 입력값에서 개행 문자(\\r, \\n, %0d, %0a) 필터링/제거",
    ],
    codeBlock: {
      language: "java",
      code: `// [시큐어 코딩] HTTP 응답 헤더 주입 방어 (Java 예시)
String redirectUrl = request.getParameter("redirect_url");

if (redirectUrl != null) {
    // CRLF 개행 문자(\\r, \\n) 원천 제거
    redirectUrl = redirectUrl.replaceAll("\\r", "").replaceAll("\\n", "");
    
    // 신뢰할 수 있는 화이트리스트 도메인 검증 후 리다이렉트
    if (isValidDomain(redirectUrl)) {
        response.setHeader("Location", redirectUrl);
    }
}`,
    },
    scoringPoints: [
      "CR(%0D, 0x0D) 및 LF(%0A, 0x0A) 명칭과 16진수 코드 정확도 (4점)",
      "HTTP 응답 분할 원리(헤더-바디 분리 플래그 악용) 서술 (3점)",
      "2차 피해: 세션 고정/조작 및 XSS 공격 (3점)",
      "개행 문자(\\r, \\n) 필터링/제거 시큐어 코딩 대책 (4점)",
    ],
    explanation:
      "• HTTP 프로토콜의 헤더 구조:\nHTTP 메시지는 `Header1: Value\\r\\nHeader2: Value\\r\\n\\r\\nBody` 형태로 구성됩니다. 따라서 헤더 값에 `%0d%0a`가 들어가면 새로운 임의의 헤더를 마음대로 주입할 수 있고, `%0d%0a%0d%0a`가 들어가면 서버의 실제 본문 앞에 공격자가 조작한 가짜 HTML/JavaScript가 위치하게 되어 완벽한 XSS 및 캐시 오염 공격이 완성됩니다.",
    examTips:
      "실기 14점 배점으로 출제될 때, %0D(CR)와 %0A(LF)의 16진수 아스키 코드 값을 묻는 단답형 서브 문항이 반드시 포함되므로 코드를 확실히 암기해야 합니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Attacker as 공격자
    participant Server as 취약한 웹 서버
    actor Victim as 일반 희생자 (브라우저)

    Attacker->>Server: GET /login?url=test%0d%0aSet-Cookie: admin=true%0d%0a%0d%0a<script>...
    Note over Server: 입력값 검증 없이 Location 헤더에 주입 반영
    Server-->>Victim: HTTP/1.1 302 Found<br/>Location: test<br/>Set-Cookie: admin=true (임의 헤더 주입)<br/>[CRLF 2회: 헤더 조기 종료]<br/><html><script>XSS 실행!</script></html> (가짜 본문)
    Note over Victim: 브라우저는 단일 응답을 2개의 분할된 응답으로 해석하여<br/>세션 조작 및 악성 스크립트(XSS) 실행 피해 발생!`,
  },

  // =================================================================
  // [문제 21] 단답형 (3점) - 네트워크 보안 / SNMP
  // =================================================================
  {
    id: 21,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안 / 프로토콜 보안",
    title: "SNMP 프로토콜 버전별 보안 메커니즘 및 취약점",
    description:
      "네트워크 관리 프로토콜인 SNMP(Simple Network Management Protocol)에 관한 설명이다. 빈칸 (A), (B), (C)를 각각 기술하시오.",
    scenario:
      "1. SNMP v1 및 v2c는 인증을 위해 (  A  ) 문자열을 패킷 내에 평문으로 전송하므로 네트워크 스니핑에 매우 취약하다.\n2. 장비 제조 시 읽기(Read) 전용과 읽기/쓰기(Write) 전용으로 기본 설정되어 있어 반드시 변경해야 하는 기본값 문자열 2가지: (  B  )\n3. SNMP v3는 사용자 기반 보안 모델(USM)을 통해 3단계 보안 수준을 제공한다. 이 중 인증(HMAC)과 데이터 기밀성(DES/AES 암호화)을 모두 제공하는 최상위 보안 모드: (  C  )",
    answer: [
      "(A): 커뮤니티 스트링 (Community String)",
      "(B): public (읽기 전용), private (쓰기 전용)",
      "(C): authPriv (Authentication and Privacy)",
    ],
    scoringPoints: [
      "(A): Community String (커뮤니티 스트링) 1점",
      "(B): public 및 private 모두 기재 시 1점",
      "(C): authPriv 1점",
    ],
    explanation:
      "• SNMP v1 / v2c의 한계:\n패킷이 암호화되지 않고 Community String(일종의 패스워드)이 평문 전송됩니다. 기본값인 `public`(ro)과 `private`(rw)를 그대로 두면 공격자가 MIB(Management Information Base) 트리를 조회하여 네트워크 토폴로지, 계정 정보를 탈취하거나 장비 설정을 무단 변경(SetRequest)할 수 있습니다.\n• SNMP v3 보안 모델 (USM - User-based Security Model):\n1) noAuthNoPriv: 인증 X, 암호화 X (식별자만 확인)\n2) authNoPriv: 인증 O(MD5/SHA), 암호화 X\n3) authPriv: 인증 O(HMAC) + 기밀성 암호화 O(DES/AES) - 실무 권장",
    examTips:
      "SNMP v3의 보안 3단계(noAuthNoPriv, authNoPriv, authPriv)와 기본 포트 번호(에이전트 UDP 161, Trap UDP 162)는 단답형 초빈출입니다.",
    mermaidChart: `flowchart TD
    subgraph Legacy["SNMP v1 / v2c (취약)"]
        M1["NMS (관리자)"] -->|"평문 Community String (public/private)"| A1["Agent (네트워크 장비)"]
        Snoop["🚨 스니퍼 도청 시 Community String 즉시 유출!"]
    end

    subgraph Secure["SNMP v3 (안전 - USM 적용)"]
        M2["NMS (관리자)"] -->|"authPriv: HMAC 인증 + AES/DES 암호화"| A2["Agent (네트워크 장비)"]
        Defense["✔️ 도청 및 패킷 변조 원천 차단"]
    end`,
  },

  // =================================================================
  // [문제 22] 서술·작업형 (14점) - 네트워크 보안 / VLAN & 스위치
  // =================================================================
  {
    id: 22,
    subjectId: "network",
    type: "practical",
    score: 14,
    domain: "네트워크 보안 / 스위치 및 가상 랜",
    title: "VLAN 태깅(IEEE 802.1Q) 및 VLAN Hopping(이중 태깅) 방어",
    description:
      "가상 랜(VLAN)을 구성하는 IEEE 802.1Q 트렁킹 프로토콜과 이를 악용한 VLAN Hopping 공격 및 스위치 보안 설정에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "IEEE 802.1Q 표준에서 이더넷 프레임에 삽입되는 4바이트 VLAN 태그 필드 중, 802.1Q 프레임임을 식별하는 2바이트 프로토콜 식별자(TPID)의 16진수 값과, 실제 VLAN 번호를 지정하는 VID 필드의 비트(bit) 크기 및 할당 가능한 최대 VLAN 개수를 쓰시오.",
        answer:
          "• TPID (Tag Protocol Identifier): 0x8100\n• VID (VLAN Identifier) 크기: 12비트 (12 bits)\n• 최대 개수: 4,096개 (2^12 = 4,096개, 실제 사용 1~4094)",
        scoringCriteria: "0x8100(2점), 12비트(2점), 4096개(1점) 총 5점",
      },
      {
        number: 2,
        question:
          "VLAN Hopping 공격 기법 중 '이중 태깅(Double Tagging)' 공격의 발생 원리와 공격자가 패킷에 태그를 부착하는 구조를 서술하시오.",
        answer:
          "공격자는 패킷에 외부 태그(Outer Tag)와 내부 태그(Inner Tag) 2개를 중첩 삽입한다. 첫 번째 스위치는 외부 태그가 트렁크 링크의 Native VLAN과 일치하면 외부 태그를 제거(Untagging)한 채 트렁크 링크로 전송한다. 두 번째 스위치는 패킷에 남아있는 내부 태그(희생자 VLAN)를 확인하여 해당 VLAN 포트로 패킷을 포워딩함으로써, 공격자가 다른 VLAN의 호스트로 패킷을 비인가 전송(VLAN 도약)하게 된다.",
        scoringCriteria: "이중 태그 삽입 및 Native VLAN 언태깅 특성을 이용한 2차 스위치 도약 원리 명시 시 5점",
      },
      {
        number: 3,
        question:
          "이중 태깅 공격 및 스위치 스푸핑(Switch Spoofing)을 방어하기 위해 시스코 스위치에서 권장하는 2가지 포트 보안 설정 방안을 서술하시오.",
        answer:
          "1. 트렁크 포트의 Native VLAN을 기본값인 VLAN 1이 아닌 사용하지 않는 더미 VLAN(예: VLAN 999)으로 변경한다.\n2. 일반 사용자 접속 포트에서 DTP(Dynamic Trunking Protocol)를 비활성화하고 강제로 액세스 모드로 고정한다. (명령어: switchport mode access 및 switchport nonegotiate 적용)",
        scoringCriteria: "Native VLAN 변경(2점), DTP 비활성화/액세스 모드 고정(2점) 총 4점",
      },
    ],
    answer: [
      "1. TPID: 0x8100 / VID: 12비트 (최대 4,096개)",
      "2. 이중 태깅 원리: 외부 태그(Native VLAN)가 첫 스위치에서 제거된 후, 내부 태그(희생자 VLAN)가 두 번째 스위치에서 해석되어 격리된 타 VLAN으로 패킷 침투",
      "3. 스위치 보안: Native VLAN을 비사용 VLAN으로 변경, switchport mode access 및 switchport nonegotiate(DTP 차단)",
    ],
    codeBlock: {
      language: "cisco",
      code: `! 1. 사용자 포트 보안 (스위치 스푸핑 방지)
interface FastEthernet 0/1
 switchport mode access          ! 트렁크 협상 거부 및 액세스 고정
 switchport nonegotiate          ! DTP 프레임 비활성화

! 2. 트렁크 포트 Native VLAN 보안 (이중 태깅 방지)
interface GigabitEthernet 0/1
 switchport mode trunk
 switchport trunk native vlan 999 ! 기본 VLAN 1 대신 비사용 VLAN 할당`,
    },
    scoringPoints: [
      "TPID(0x8100) 및 VID(12bit, 4096개) 정확도 (5점)",
      "Native VLAN 언태깅 악용 이중 태깅 메커니즘 (5점)",
      "Native VLAN 변경 및 DTP 차단 방어 설정 (4점)",
    ],
    explanation:
      "• Double Tagging 공격의 전제 조건:\n1) 공격자가 스위치 트렁크 포트의 Native VLAN과 동일한 VLAN에 속해 있어야 함\n2) 스위치 간 트렁크 연결이 802.1Q로 구성되어 있어야 함\n따라서 Native VLAN을 사용자가 속하지 않는 더미 VLAN 번호로 격리하면 원천 방어됩니다.",
    examTips:
      "802.1Q 태그 필드 구조(TPID 0x8100, VID 12비트)와 Native VLAN 취약점 방어 설정은 실기 네트워크 단골 문제입니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Attacker as 공격자 (VLAN 10)
    participant SW1 as 1차 스위치
    participant SW2 as 2차 스위치
    actor Victim as 희생자 (격리된 VLAN 20)

    Note over Attacker: 패킷 조작: [Outer Tag: 10 (Native)] + [Inner Tag: 20]
    Attacker->>SW1: 이중 태그 프레임 전송
    Note over SW1: Outer Tag가 Native VLAN(10)이므로<br/>외부 태그를 벗겨내고(Untag) 트렁크로 전송
    SW1->>SW2: 단일 태그 프레임 전송 [Tag: 20 (희생자)]
    Note over SW2: 남아있는 Tag 20을 보고 VLAN 20 포트로 전달
    SW2->>Victim: 패킷 도달! (VLAN Hopping 침투 성공)`,
  },

  // =================================================================
  // [문제 23] 단답·서술형 (3점) - 네트워크 보안 / VPN
  // =================================================================
  {
    id: 23,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안 / VPN",
    title: "가상사설망(VPN) 기술 비교 (IPSec VPN vs SSL VPN)",
    description:
      "원격 접속 및 본·지사 보안 연결에 사용되는 대표적인 VPN 기술인 IPSec VPN과 SSL VPN에 관한 설명이다. 빈칸 (A), (B), (C)를 채우시오.",
    scenario:
      "1. OSI 7계층 중 네트워크 계층(3계층)에서 동작하며, 주로 본사와 지사 간(Site-to-Site) 대량 트래픽의 전용 터널을 구축하는 데 적합한 VPN: (  A  )\n2. 전송/응용 계층(4~7계층)에서 동작하며, 클라이언트 전용 소프트웨어 설치 없이 웹 브라우저만으로 안전하게 사내망에 접속할 수 있는 재택근무용 VPN: (  B  )\n3. SSL VPN이 표준 웹 포트인 TCP (  C  )번 포트를 사용하여 방화벽 및 NAT 장비를 별도 정책 변경 없이 쉽게 통과할 수 있는 특징을 갖는다.",
    answer: [
      "(A): IPSec VPN",
      "(B): SSL VPN",
      "(C): 443",
    ],
    scoringPoints: [
      "(A): IPSec VPN 1점",
      "(B): SSL VPN 1점",
      "(C): 443 (또는 443번 포트) 1점",
    ],
    explanation:
      "• IPSec VPN vs SSL VPN 비교:\n1) 계층: IPSec은 3계층(IP 계층), SSL VPN은 4/7계층(전송/응용 계층)\n2) 클라이언트: IPSec은 전용 SW/설정이 필수적이나, SSL VPN은 표준 브라우저(Web VPN)로 무설치 접속 가능\n3) 방화벽 통과: IPSec(ESP 프로토콜 50번, IKE UDP 500번)은 방화벽/NAT 통과 시 설정이 복잡하나, SSL VPN은 표준 HTTPS 포트(TCP 443)를 사용하여 어디서나 우회 없이 원활히 접속됨\n4) 접근 제어: IPSec은 네트워크 전체 접근, SSL VPN은 특정 웹/포털 서비스별 세밀한 권한 제어가 가능함",
    examTips:
      "재택근무 확산으로 SSL VPN과 IPSec VPN의 계층(3계층 vs 4/7계층), 포트(443), 전용 클라이언트 필요 여부를 비교하는 단답/서술 문항이 매우 빈출됩니다.",
    mermaidChart: `flowchart TD
    subgraph IPSec["IPSec VPN (3계층 - Site-to-Site)"]
        HQ["본사 방화벽/게이트웨이"] <== "IPSec 터널 (ESP / IKE UDP 500)" ==> Branch["지사 게이트웨이"]
        Note1["네트워크 대 네트워크 연결 / 전용 장비 및 SW 필수"]
    end

    subgraph SSL["SSL VPN (4~7계층 - Remote Access)"]
        User["재택근무자 (웹 브라우저)"] -->|"HTTPS (TCP 443 표준 포트)"| Gate["사내 SSL VPN 게이트웨이"]
        Gate --> App["특정 사내 인트라넷/ERP 서비스"]
        Note2["클라이언트 무설치 / 특정 애플리케이션 단위 세밀한 제어"]
    end`,
  },

  // =================================================================
  // [문제 24] 서술·작업형 (14점) - 보안 관리 및 법률 / 안전성 확보조치
  // =================================================================
  {
    id: 24,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "보안 관리 & 법률",
    title: "개인정보의 안전성 확보조치 기준(고시) 핵심 보호조치 분석",
    description:
      "개인정보보호위원회의 '개인정보의 안전성 확보조치 기준'에 규정된 기술적·관리적 보호조치에 관한 다음 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "개인정보처리시스템 및 정보통신망에서 반드시 암호화해야 하는 개인정보 항목을 1) 일방향 암호화 대상 1가지와 2) 양방향 안전한 암호화 대상 3가지를 구분하여 기술하시오.",
        answer:
          "1) 일방향 암호화 대상: 비밀번호 (Password)\n2) 양방향 암호화 대상: 고유식별정보(주민등록번호, 여권번호, 운전면허번호, 외국인등록번호), 바이오정보(생체인식정보), 계좌정보(신용카드번호, 은행계좌번호)",
        scoringCriteria: "일방향(비밀번호 2점), 양방향 대상(고유식별정보, 바이오정보, 계좌/카드정보 중 3가지 3점) 총 5점",
      },
      {
        number: 2,
        question:
          "개인정보취급자에 대한 '접근 권한 관리' 기준에 따라, 담당자 퇴직 또는 인사이동으로 취급자가 변경되었을 때 권한을 변경·말소해야 하는 기한과, 권한 부여·변경·말소 내역을 보관해야 하는 최소 법정 보관 기간을 쓰시오.",
        answer:
          "• 변경·말소 기한: 지체 없이 (정당한 사유가 없는 한 지체 없이 반영)\n• 권한 이력 보관 기간: 최소 3년 이상 보관",
        scoringCriteria: "지체 없이(2.5점), 최소 3년 이상(2.5점) 총 5점",
      },
      {
        number: 3,
        question:
          "개인정보처리시스템의 '접속기록 보관 및 점검' 규정에 따라, 접속기록의 위·변조 및 도난·분실을 방지하기 위하여 개인정보관리책임자가 접속기록을 점검해야 하는 최소 주기와 확인해야 하는 이상 징후 사항 1가지를 서술하시오.",
        answer:
          "• 점검 주기: 최소 월 1회 이상 정기적으로 점검\n• 이상 징후 사항: 개인정보를 다운로드한 내역, 비인가자의 접속 시도(로그인 실패 급증), 근무시간 외의 비정상 대량 조회 등",
        scoringCriteria: "월 1회 이상(2점), 다운로드/비인가접속 등 이상징후 1가지 명시(2점) 총 4점",
      },
    ],
    answer: [
      "1. 암호화 대상: 일방향(비밀번호) / 양방향(고유식별정보, 바이오정보, 계좌/카드번호)",
      "2. 접근 권한 관리: 지체 없이 변경·말소 / 권한 이력 최소 3년 이상 보관",
      "3. 접속기록 점검: 월 1회 이상 점검 / 다운로드 내역, 비정상 대량 조회 등 이상 징후 분석",
    ],
    scoringPoints: [
      "비밀번호의 일방향 암호화 원칙 명시 (2점)",
      "고유식별정보, 바이오정보, 금융정보의 양방향 암호화 명시 (3점)",
      "지체 없는 권한 말소 및 3년 보관 기간 (5점)",
      "월 1회 이상 접속기록 점검 주기 및 다운로드 이상 징후 (4점)",
    ],
    explanation:
      "• 안전성 확보조치 기준 주요 숫자 총정리:\n1) 권한 관리 기록 보관: 3년\n2) 접속기록 보관: 일반 1년 이상 / 5만명 이상 또는 고유식별정보 처리 2년 이상\n3) 접속기록 점검 주기: 월 1회 이상 (다운로드 시 내부 승인 절차)\n4) 유출 통지 및 전문기관 신고: 72시간 이내 (1천명 이상 시 전문기관 신고)",
    examTips:
      "실기 14점 배점으로 매회 출제되는 법률 파트 1순위 고시입니다. 비밀번호=일방향, 주민번호/금융/바이오=양방향, 권한 이력=3년 보관은 절대 잊으면 안 됩니다.",
    mermaidChart: `flowchart TD
    subgraph Crypto["암호화 대상 분류"]
        PW["비밀번호"] --> OneWay["일방향 암호화<br/>(SHA-512, bcrypt, Salt 필수)"]
        Priv["고유식별정보<br/>(주민/여권/면허/외국인번호)<br/>바이오정보, 신용카드/계좌번호"] --> TwoWay["안전한 양방향 암호화<br/>(AES-256, ARIA, SEED)"]
    end

    subgraph Operation["관리적·기술적 의무 주기"]
        AuthMgt["권한 인사이동 시<br/>지체 없이 말소"] --> Hist["권한 변경 이력<br/>최소 3년 보관"]
        LogCheck["접속기록 점검<br/>최소 월 1회 이상"] --> Detect["대량 다운로드<br/>이상 징후 탐지"]
    end`,
  },

  // =================================================================
  // [문제 25] 서술·작업형 (14점) - 시스템 보안 / PAM
  // =================================================================
  {
    id: 25,
    subjectId: "system",
    type: "practical",
    score: 14,
    domain: "시스템 보안 / 리눅스 인증 모듈",
    title: "리눅스 PAM(Pluggable Authentication Modules) 아키텍처 및 계정 잠금",
    description:
      "리눅스 시스템에서 응용 프로그램의 인증 방식을 모듈화하여 유연하게 관리하는 PAM(Pluggable Authentication Modules) 구조와 계정 잠금 정책에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "PAM 설정 파일의 4가지 모듈 인터페이스(Type)인 auth, account, password, session의 역할을 각각 한 줄로 요약하여 설명하시오.",
        answer:
          "1. auth: 사용자의 신원을 인증(패스워드 확인 등)하고 자격 증명(Credential)을 부여함\n2. account: 계정의 유효성(계정 만료일, 로그인 허용 시간, 비밀번호 변경 주기 등)을 검사함\n3. password: 사용자의 비밀번호 변경 및 복잡도(길이, 특수문자 등) 규칙을 강제함\n4. session: 사용자의 서비스 이용 전후 환경 설정(홈 디렉터리 마운트, 리소스 제한, 로깅 등)을 수행함",
        scoringCriteria: "4가지 타입의 역할을 정확히 서술 시 각 1.25점씩 총 5점",
      },
      {
        number: 2,
        question:
          "PAM의 4대 제어 플래그(Control Flag) 중 'required'와 'requisite'의 동작 차이점을 인증 실패(Failure) 시의 스택 처리 관점에서 명확히 비교 서술하시오.",
        answer:
          "• required: 모듈 실행이 실패하더라도 스택 내의 나머지 모듈들을 끝까지 모두 실행한 후 최종적으로 실패를 반환함 (공격자에게 어느 모듈에서 실패했는지 은폐하기 위함)\n• requisite: 모듈 실행이 실패하면 나머지 모듈을 실행하지 않고 그 즉시 인증을 중단하며 즉각 실패를 반환함",
        scoringCriteria: "실패 시 나머지 모듈 실행 지속(required) vs 즉시 중단(requisite) 차이 명시 시 5점",
      },
      {
        number: 3,
        question:
          "로그인 무차별 대입 공격(Brute Force)을 방어하기 위해, 패스워드 입력 실패가 연속 5회 발생 시 계정을 10분(600초) 동안 자동 잠금하는 PAM 계정 잠금 모듈(`pam_faillock.so` 또는 `pam_tally2.so`) 설정 옵션 구문을 작성하시오.",
        answer:
          "auth required pam_faillock.so preauth silent deny=5 unlock_time=600\n(또는 auth required pam_tally2.so deny=5 unlock_time=600 onerr=fail)",
        scoringCriteria: "deny=5 및 unlock_time=600 옵션이 포함된 구문 작성 시 4점",
      },
    ],
    answer: [
      "1. PAM 타입: auth(신원 인증), account(계정 유효성 검사), password(암호 변경/규칙), session(세션 환경 구성/정리)",
      "2. 제어 플래그: required는 실패해도 나머지 모듈 끝까지 수행 후 최종 실패 / requisite는 실패 시 즉시 중단하고 반환",
      "3. 계정 잠금 설정: deny=5 unlock_time=600 옵션을 지정하여 pam_faillock.so 또는 pam_tally2.so 구성",
    ],
    codeBlock: {
      language: "pam",
      code: `# /etc/pam.d/system-auth 또는 password-auth 설정 예시 (pam_faillock 기준)
auth        required      pam_env.so
auth        required      pam_faillock.so preauth silent deny=5 unlock_time=600
auth        sufficient    pam_unix.so nullok try_first_pass
auth        [default=die] pam_faillock.so authfail deny=5 unlock_time=600
auth        required      pam_deny.so

account     required      pam_faillock.so`,
    },
    scoringPoints: [
      "PAM 4대 모듈 타입(auth, account, password, session) 정의 (5점)",
      "required와 requisite의 실패 시 스택 진행/중단 차이 (5점)",
      "deny=5 및 unlock_time=600(또는 10분) 옵션 정확도 (4점)",
    ],
    explanation:
      "• PAM 제어 플래그 4대장:\n1) required: 성공해도 계속 진행, 실패해도 끝까지 진행 후 실패\n2) requisite: 성공 시 계속 진행, 실패 시 즉시 중단 및 실패\n3) sufficient: 이전 모듈이 성공했고 이 모듈도 성공하면 나머지 auth 스택 건너뛰고 즉시 성공\n4) optional: 이 모듈의 성공/실패는 다른 모듈 결과에 영향을 미치지 않음",
    examTips:
      "실기 14점 단골 문제입니다. required vs requisite의 차이점 서술과 deny=5, unlock_time=600 계정 잠금 지시자는 1점도 감점당하지 않도록 암기해야 합니다.",
    mermaidChart: `flowchart TD
    Req["인증 요청 유입"] --> M1["모듈 1: required"]

    M1 -->|실패| FlagFail["실패 상태 플래그 세팅"]
    FlagFail --> M2["모듈 2 실행 (스택 계속 진행!)"]
    M1 -->|성공| M2

    M2 --> CheckReq{"모듈 2: requisite<br/>실패 여부?"}
    CheckReq -->|실패| Stop["🚨 즉시 중단 및 거부! (Return Failure)"]
    CheckReq -->|성공| M3["모듈 3: sufficient"]

    M3 -->|성공| Success["✔️ 즉시 인증 성공! (나머지 스택 생략)"]
    M3 -->|실패| Rest["다음 모듈 진행"]`,
  },

  // =================================================================
  // [문제 26] 단답형 (3점) - 네트워크 보안 / VLAN 분류
  // =================================================================
  {
    id: 26,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안 / 스위치 및 가상 랜",
    title: "가상 랜(VLAN)의 구성 방식 및 유형 분류",
    description:
      "네트워크 스위치에서 브로드캐스트 도메인을 논리적으로 분할하는 VLAN(Virtual LAN)의 구성 방식에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 각각 기술하시오.",
    scenario:
      "1. 스위치의 물리적 포트 번호에 VLAN ID를 고정 할당하는 방식으로, 관리가 직관적이고 가장 널리 사용되지만 사용자가 다른 포트로 이동하면 VLAN이 변경되는 정적 방식: (  A  )\n2. 단말기 네트워크 카드(NIC)의 물리적 주소를 기반으로 VLAN을 매핑하는 방식으로, 사용자가 스위치의 어느 포트로 자리를 이동하더라도 동일한 VLAN이 유지되는 동적 방식: (  B  )\n3. 3계층 IP 서브넷 주소나 상위 네트워크 프로토콜(IPv4, IPv6, IPX 등)의 종류를 기준으로 브로드캐스트 도메인을 분할하는 방식: (  C  )",
    answer: [
      "(A): 포트 기반 VLAN (Port-based VLAN)",
      "(B): MAC 주소 기반 VLAN (MAC-based VLAN)",
      "(C): 프로토콜 / 서브넷 기반 VLAN (Protocol/Subnet-based VLAN)",
    ],
    scoringPoints: [
      "(A): 포트 기반 VLAN (Port-based VLAN) 1점",
      "(B): MAC 주소 기반 VLAN (MAC-based VLAN) 1점",
      "(C): 프로토콜 기반 또는 IP 서브넷 기반 VLAN 1점",
    ],
    explanation:
      "• VLAN 구성 방식 4가지 분류:\n1) 포트 기반(Port-based): 스위치 포트에 직접 VLAN 매핑 (정적 VLAN, 1계층/물리 기반)\n2) MAC 주소 기반(MAC-based): 단말 MAC 주소를 기반으로 동적 VLAN 할당 (2계층 기반, 이동성 우수하나 초기 등록 번거로움)\n3) IP 서브넷 기반(Subnet-based): IP 주소 대역(네트워크 ID)에 따라 VLAN 분할 (3계층 기반)\n4) 프로토콜 기반(Protocol-based): 프레임 내 상위 프로토콜 헤더(IP, ARP, IPX 등)에 따라 분할",
    examTips:
      "포트 이동 시에도 VLAN이 그대로 유지되는 방식이 'MAC 주소 기반 VLAN'이라는 점이 기출 단골 함정 포인트입니다.",
    mermaidChart: `flowchart TD
    subgraph PortBased["1. 포트 기반 VLAN (정적 할당)"]
        SW1["스위치 포트 1: VLAN 10 고정"] --> PC1["PC-A (VLAN 10)"]
        SW2["스위치 포트 2: VLAN 20 고정"] --> PC2["PC-B (VLAN 20)"]
        Note1["포트를 옮겨 꽂으면 VLAN이 변경됨"]
    end

    subgraph MacBased["2. MAC 주소 기반 VLAN (동적 할당)"]
        VMPS["VLAN 관리 서버 (MAC 매핑 DB)"] --> Switch["스위치"]
        Switch -->|"MAC 인식: 00:11:22..."| Laptop["노트북 (어느 포트에 꽂아도 VLAN 10 자동 유지!)"]
        Note2["사용자 이동성(Mobility) 보장"]
    end`,
  },

  // =================================================================
  // [문제 27] 서술·작업형 (14점) - 애플리케이션 보안 / 캐시 공격
  // =================================================================
  {
    id: 27,
    subjectId: "application",
    type: "practical",
    score: 14,
    domain: "애플리케이션 보안 / 웹 캐시 보안",
    title: "HTTP Cache-Control 지시자 및 웹 캐시 공격 (Poisoning & Deception)",
    description:
      "웹 성능 향상을 위해 사용되는 HTTP 캐시 메커니즘과 이를 악용한 웹 캐시 디셉션(Web Cache Deception) 및 웹 캐시 포이즈닝에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "HTTP `Cache-Control` 응답 헤더의 핵심 지시자 중 1) 브라우저나 프록시 등 어떠한 캐시 저장소에도 응답 내용을 영구히 저장하지 못하도록 강제하는 지시자와, 2) 캐시 저장은 허용하되 매 요청마다 반드시 원서버(Origin Server)에 캐시 유효성(ETag, 304 Not Modified)을 재검증하도록 요구하는 지시자를 각각 쓰시오.",
        answer:
          "1) no-store\n2) no-cache",
        scoringCriteria: "no-store(2.5점), no-cache(2.5점) 총 5점",
      },
      {
        number: 2,
        question:
          "공격자가 희생자에게 `/my-account/profile.php/nonexistent.css`와 같은 경로의 링크를 전달하여 클릭하게 만들었을 때, 프록시/CDN 캐시 서버가 정적 파일 확장자(`.css`)만 보고 동적 개인정보 페이지를 캐시에 저장하여 제3자에게 유출시키는 공격 기법의 명칭과 발생 원인을 서술하시오.",
        answer:
          "• 공격 명칭: 웹 캐시 디셉션 (Web Cache Deception)\n• 발생 원인: CDN/프록시 캐시 서버는 URL 끝의 확장자(`.css`, `.js` 등)를 기준으로 정적 자원으로 오인하여 무조건 캐싱하지만, 백엔드 웹 서버는 경로 해석 시 실제 엔드포인트(`profile.php`)를 실행하여 사용자의 개인정보가 포함된 동적 HTML을 반환함으로써, 민감한 개인정보 페이지가 공용 캐시 서버에 그대로 저장되어 공격자가 URL 직접 접근으로 타인의 정보를 열람하게 됨",
        scoringCriteria: "웹 캐시 디셉션 명칭(2점), CDN 확장자 캐싱 오인 및 백엔드 동적 응답 불일치 원리 서술(3점) 총 5점",
      },
      {
        number: 3,
        question:
          "로그인 세션, 마이페이지, 결제 정보 등 민감한 개인정보가 포함된 동적 웹 페이지에서 중간 프록시나 CDN에 캐시 데이터가 절대 저장되지 않도록 방어하기 위해 웹 서버가 전송해야 하는 안전한 `Cache-Control` 응답 헤더 설정을 작성하시오.",
        answer:
          "Cache-Control: no-store, no-cache, must-revalidate, private\n(또는 Cache-Control: no-store)",
        scoringCriteria: "no-store 지시자가 포함된 응답 헤더 구문 작성 시 4점",
      },
    ],
    answer: [
      "1. 지시자: 1) no-store (저장 일체 금지), 2) no-cache (저장하되 원서버 재검증 필수)",
      "2. 웹 캐시 디셉션(Web Cache Deception): CDN 캐시의 확장자 기반 캐싱 정책과 백엔드의 동적 스크립트 실행 간 불일치로 개인정보가 공용 CDN에 저장되는 취약점",
      "3. 방어 헤더: Cache-Control: no-store, no-cache, must-revalidate, private",
    ],
    scoringPoints: [
      "no-store와 no-cache의 개념 차이 명확화 (5점)",
      "웹 캐시 디셉션(Web Cache Deception) 명칭 및 경로 해석 불일치 원리 (5점)",
      "Cache-Control: no-store 방어 헤더 설정 (4점)",
    ],
    explanation:
      "• no-cache vs no-store의 결정적 차이:\n• `no-cache`: 캐시를 하지 말라는 뜻이 아니라, '캐시에 저장하되 쓸 때마다 원서버에 304 유효성 확인을 받아라'는 의미입니다.\n• `no-store`: 어떠한 메모리나 디스크 캐시에도 '절대 저장하지 말라'는 의미로, 민감 정보 노출을 막으려면 반드시 `no-store`를 지정해야 합니다.\n• `Web Cache Poisoning`: 캐시 키(Cache Key)에 포함되지 않는 비표준 헤더(X-Forwarded-Host 등)를 조작하여 캐시를 오염시키는 공격인 반면, `Web Cache Deception`은 경로 해석 차이를 이용해 타인의 민감 정보를 캐시에 저장시키는 공격입니다.",
    examTips:
      "no-cache와 no-store의 차이점은 단답형으로, 웹 캐시 디셉션(Web Cache Deception)은 최신 웹 보안 서술형 14점으로 출제 가능성이 매우 높습니다.",
    mermaidChart: `sequenceDiagram
    autonumber
    actor Attacker as 공격자
    actor Victim as 피해자 (로그인 상태)
    participant CDN as CDN / 캐시 프록시
    participant Server as 웹 서버 (WAS)

    Attacker->>Victim: 악성 링크 전달 (/mypage.php/test.css)
    Victim->>CDN: GET /mypage.php/test.css (피해자 세션 쿠키 포함)
    Note over CDN: 캐시 미스! 확장자가 .css이므로 정적 파일로 인식
    CDN->>Server: GET /mypage.php/test.css
    Note over Server: 백엔드는 .css 무시하고 mypage.php 실행 (개인정보 응답)
    Server-->>CDN: 200 OK (피해자 개인정보 포함 HTML)
    Note over CDN: ⚠️ .css 확장자이므로 응답을 캐시에 영구 저장!
    CDN-->>Victim: 정상 응답 렌더링

    Attacker->>CDN: GET /mypage.php/test.css 요청
    CDN-->>Attacker: 🚨 캐시된 피해자 개인정보 반환! (정보 유출)`,
  },

  // =================================================================
  // [문제 28] 단답형 (3점) - 시스템 & 네트워크 보안 / NetBIOS
  // =================================================================
  {
    id: 28,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 및 네트워크 보안 / 윈도우 프로토콜",
    title: "윈도우 NetBIOS over TCP/IP 서비스 및 포트 분석",
    description:
      "윈도우 시스템에서 근거리 통신망(LAN) 파일 및 프린터 공유를 지원하는 NetBIOS over TCP/IP(NBT) 프로토콜에 관한 설명이다. 각 서비스와 대응하는 포트 번호를 올바르게 매칭하여 빈칸 (A), (B), (C)를 채우시오.",
    scenario:
      "1. 네트워크 상의 컴퓨터 이름(NetBIOS Name)을 IP 주소로 해석하거나 등록·조회하는 이름 서비스(Name Service): (  A  )\n2. 비연결형 메시지 전송 및 브로드캐스트 기반 통신을 수행하는 데이터그램 서비스(Datagram Service): (  B  )\n3. 두 컴퓨터 간 연결 지향 세션을 맺고 파일·프린터 공유(SMB) 데이터를 송수신하는 세션 서비스(Session Service): (  C  )",
    answer: [
      "(A): UDP 137",
      "(B): UDP 138",
      "(C): TCP 139",
    ],
    scoringPoints: [
      "(A): UDP 137 (포트 번호 137) 1점",
      "(B): UDP 138 (포트 번호 138) 1점",
      "(C): TCP 139 (포트 번호 139) 1점",
    ],
    explanation:
      "• NetBIOS over TCP/IP 포트 정리:\n• 137/UDP: NetBIOS Name Service (이름 해석 - nbtstat 명령어)\n• 138/UDP: NetBIOS Datagram Service (브로드캐스트 데이터 전송)\n• 139/TCP: NetBIOS Session Service (SMB 파일/프린터 공유 세션)\n• 445/TCP: NetBIOS 계층 없이 순수 TCP 상에서 직접 동작하는 SMB(Direct-hosted SMB) 포트\n• 보안 취약점:\n과거 윈도우 시스템에서 139/445번 포트를 열어두면 인증 없이 접속하는 '널 세션(Null Session: IPC$)' 공격을 통해 사용자 계정 목록, 공유 폴더, 시스템 정보를 무단 유출당하는 중대한 취약점이 존재했습니다.",
    examTips:
      "137(UDP), 138(UDP), 139(TCP)의 프로토콜/포트 번호와 최신 윈도우의 445(TCP) 포트는 방화벽 차단 정책의 초빈출 단골 문제입니다.",
    mermaidChart: `flowchart TD
    NBT["NetBIOS over TCP/IP (NBT)"] --> NS["이름 서비스 (Name Service)<br/>컴퓨터 이름 등록 및 조회"]
    NBT --> DS["데이터그램 서비스 (Datagram)<br/>비연결형 브로드캐스트"]
    NBT --> SS["세션 서비스 (Session)<br/>연결지향 파일/프린터 공유"]

    NS --> P137["UDP 137 포트"]
    DS --> P138["UDP 138 포트"]
    SS --> P139["TCP 139 포트"]

    SMB445["순수 Direct SMB<br/>(NetBIOS 우회)"] --> P445["TCP 445 포트"]`,
  },

  // =================================================================
  // [문제 29] 단답형 (3점) - 애플리케이션 보안 / 정보 수집
  // =================================================================
  {
    id: 29,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안 / 웹 취약점 점검",
    title: "검색엔진 로봇 배제 표준(robots.txt) 및 디렉터리 노출",
    description:
      "웹 서버 루트 디렉터리에 위치하여 검색엔진 크롤러(Robot)의 수집 동작을 제어하는 `robots.txt` 파일에 관한 물음이다. 빈칸 (A), (B)를 각각 채우시오.",
    scenario:
      "1. `robots.txt` 파일에서 '모든 크롤러(A)'를 대상으로 '/admin/' 디렉터리에 대한 '접근 수집을 금지(B)'하도록 선언하는 표준 문법:\nUser-agent: (  A  )\n(  B  ): /admin/\n\n2. 보안 관리 측면에서 `robots.txt`는 강제적인 접근 통제 기술이 아니므로, 공격자가 이 파일을 열람하여 숨겨진 관리자 페이지나 백업 디렉터리 경로를 파악하는 (        ) 수집 단계의 정찰 벡터로 악용될 수 있다.",
    answer: [
      "(A): * (와일드카드 / 모든 크롤러)",
      "(B): Disallow",
      "보안 취약점: 정보 노출 (Information Disclosure) 또는 사전 정찰(Reconnaissance) 경로 노출",
    ],
    scoringPoints: [
      "(A): * 기호 1점",
      "(B): Disallow 지시자 1점",
      "robots.txt의 정보 노출/정찰 취약점 이해 1점",
    ],
    explanation:
      "• robots.txt의 원리와 한계:\n• `User-agent`: 규칙을 적용받을 크롤러 지정 (`*`는 모든 크롤러, `Googlebot` 등 특정 지정 가능)\n• `Disallow`: 크롤링을 금지할 디렉터리/파일 경로 지정\n• `Allow`: Disallow 하위에서 특정 경로만 허용\n• ⚠️ 중대한 보안적 오해:\n`robots.txt`는 선의의 검색엔진 크롤러가 지켜주는 권고안(표준 규약)일 뿐, 기술적인 '접근 제어(Access Control)'나 방화벽이 아닙니다. 오히려 외부에 노출되어서는 안 되는 `/admin/`, `/backup/`, `/secret/` 같은 민감 경로를 `Disallow`에 적어두면, 해커가 가장 먼저 `robots.txt`를 읽고 비인가 관리 페이지를 찾아내는 표적이 됩니다.",
    examTips:
      "Disallow 문법 표기법과 robots.txt가 접근 통제 대책이 될 수 없다는 점(민감 경로는 웹서버 인증/인가로 막아야 함)이 시험의 핵심 정답 포인트입니다.",
    mermaidChart: `flowchart TD
    subgraph GoogleBot["선의의 검색엔진 로봇"]
        G1["robots.txt 조회"] --> G2["Disallow: /admin/ 확인"]
        G2 --> G3["/admin/ 경로 수집 제외 (규약 준수) ✔️"]
    end

    subgraph Attacker["악의적인 공격자 (해커)"]
        A1["GET /robots.txt 열람"] --> A2["Disallow: /admin/ 경로 발견!"]
        A2 --> A3["/admin/ 경로 직접 침투 시도 🚨<br/>(숨겨진 관리자 페이지 역탐지)"]
    end`,
  },

  // =================================================================
  // [문제 30] 서술·작업형 (14점) - 보안 관리 및 법률 / ISMS 위험평가
  // =================================================================
  {
    id: 30,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "보안 관리 & 법률 / ISMS-P 위험관리",
    title: "ISMS / ISO 27001 정보보호 위험평가(Risk Assessment) 5단계",
    description:
      "정보보호 관리체계(ISMS-P / ISO 27001) 인증 기준의 핵심 요구사항인 위험 관리(Risk Management)의 세부 위험평가 절차에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "위험평가(Risk Assessment)를 수행하는 5단계 프로세스를 순서대로 명확히 나열하시오.",
        answer:
          "1단계: 정보자산 식별 및 가치 산정 (Asset Identification & Valuation)\n2단계: 위협(Threat) 및 취약점(Vulnerability) 식별 및 분석\n3단계: 위험도(Risk) 산정 및 평가 (위험 분석)\n4단계: 수용 가능 위험 수준(DoA: Degree of Acceptance) 설정 및 비교\n5단계: 위험 처리(Risk Treatment) 전략 선정 및 정보보호 대책(이행 계획) 수립",
        scoringCriteria: "5단계의 순서 및 핵심 내용 정확히 기술 시 5점",
      },
      {
        number: 2,
        question:
          "위험평가 결과 도출된 위험도가 조직의 수용 가능 위험 수준(DoA)을 초과할 때 선택할 수 있는 '위험 처리 4대 전략'의 명칭과 각각의 구체적 대응 사례를 1가지씩 기술하시오.",
        answer:
          "1. 위험 완화(Mitigation): 방화벽 구축, 접근제어 강화, 암호화 적용 등 보안 통제를 적용하여 위험도를 DoA 이하로 낮춤\n2. 위험 회피(Avoidance): 위험도가 높은 사업 영역 철수, 고위험 서비스 폐지 등 위험 유발 활동 자체를 중단함\n3. 위험 전가(Transference): 사이버 종합배상보험 가입, 보안 관제 전문업체 아웃소싱 등을 통해 위험 책임을 제3자에게 이전함\n4. 위험 수용(Acceptance): 대응 비용이 잠재 손실보다 크거나 발생 확률이 극히 낮을 때 경영진의 정식 승인을 거쳐 잔여 위험을 감수함",
        scoringCriteria: "4대 전략 명칭 및 구체적 사례 매칭 시 5점 (각 1.25점씩)",
      },
      {
        number: 3,
        question:
          "위험 분석 기법 중 정량적 위험 분석(Quantitative Analysis)에서 사용하는 단일예상손실액(SLE), 연간발생률(ARO), 연간예상손실액(ALE)의 상관관계를 계산 공식으로 작성하시오.",
        answer:
          "ALE (연간예상손실액) = SLE (단일예상손실액) × ARO (연간발생률)\n(단, SLE = 자산가치 AV × 노출계수 EF)",
        scoringCriteria: "ALE = SLE × ARO 공식 정확히 기술 시 4점",
      },
    ],
    answer: [
      "1. 5단계: 자산 식별/가치산정 -> 위협·취약점 분석 -> 위험도 산정 -> DoA 비교 -> 위험 처리 계획 수립",
      "2. 4대 전략: 완화(보안통제 적용), 회피(사업/서비스 중단), 전가(보험 가입), 수용(경영진 승인 하 잔여위험 감수)",
      "3. 공식: ALE = SLE × ARO (단일예상손실액 × 연간발생률)",
    ],
    scoringPoints: [
      "위험평가 5단계 순서의 정확도 (5점)",
      "위험 처리 4대 전략(완화, 회피, 전가, 수용) 및 사례 매칭 (5점)",
      "정량적 공식: ALE = SLE × ARO (4점)",
    ],
    explanation:
      "• ISMS 위험관리 핵심 개념:\n• DoA (Degree of Acceptance): 조직이 감당할 수 있는 위험의 임계 기준치로, DoA 이하의 위험은 '잔여 위험(Residual Risk)'으로 수용하고, DoA를 초과하는 위험은 정보보호 대책(완화/회피/전가)을 반드시 수립해야 합니다.\n• ARO (Annual Rate of Occurrence): 특정 위협이 1년 동안 발생할 것으로 예상되는 빈도\n• SLE (Single Loss Expectancy): 위협 발생 1회당 입는 금전적 피해액 (자산가치 × 피해비율)",
    examTips:
      "실기 14점 배점 서술형 단골 문제입니다. 위험평가 5단계의 명칭과 ALE = SLE × ARO 공식은 1점도 감점 없이 완벽히 서술할 수 있어야 합니다.",
    mermaidChart: `flowchart TD
    S1["1단계: 정보자산 식별 & 가치 산정"] --> S2["2단계: 위협(Threat) 및 취약점(Vuln) 분석"]
    S2 --> S3["3단계: 위험도 산정 (ALE = SLE × ARO)"]
    S3 --> S4{"4단계: 위험 평가<br/>DoA(수용수준) 초과 여부?"}

    S4 -->|"DoA 이하"| Residual["잔여 위험 수용 (Acceptance)<br/>경영진 승인 및 주기적 모니터링"]
    S4 -->|"DoA 초과"| S5["5단계: 위험 처리 대책 수립"]

    S5 --> T1["위험 완화 (보안 통제 구축)"]
    S5 --> T2["위험 회피 (서비스 폐기)"]
    S5 --> T3["위험 전가 (보안 보험 가입)"]`,
  },

  // =================================================================
  // [문제 31] 서술·작업형 (14점) - 네트워크 보안 / TCP 제어 플래그
  // =================================================================
  {
    id: 31,
    subjectId: "network",
    type: "practical",
    score: 14,
    domain: "네트워크 보안 / 패킷 및 스캔 분석",
    title: "TCP 헤더 6대 제어 플래그(Control Flags) 및 스캔(Scan) 공격",
    description:
      "TCP 프로토콜의 신뢰성 있는 연결 제어를 위해 사용되는 6가지 기본 제어 플래그와 이를 조작하여 포트를 탐지하는 포트 스캐닝 기법에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "TCP 헤더의 6개 기본 제어 플래그(URG, ACK, PSH, RST, SYN, FIN)의 약어 명칭과 각각의 역할을 1문장으로 기술하시오.",
        answer:
          "1. URG (Urgent): 긴급 포인터(Urgent Pointer) 필드가 유효하며 긴급 데이터를 우선 처리함을 알림\n2. ACK (Acknowledgment): 확인 응답 번호(Acknowledgment Number) 필드가 유효함을 나타냄\n3. PSH (Push): 수신 버퍼가 찰 때까지 기다리지 않고 수신 애플리케이션으로 즉시 전송을 요청함\n4. RST (Reset): 비정상적인 세션을 강제 종료하거나 연결을 재설정(리셋)함\n5. SYN (Synchronize): 3-Way Handshake 시 연결 수립을 위해 순서 번호(Sequence Number)를 동기화함\n6. FIN (Finish): 송신 측의 데이터 전송이 완료되어 정상적으로 연결을 종료하고자 함을 알림",
        scoringCriteria: "6가지 플래그의 명칭 및 역할 정확히 기술 시 6점 (각 1점씩)",
      },
      {
        number: 2,
        question:
          "공격자가 침입차단시스템(방화벽)의 로그 기록을 우회하기 위해 사용하는 대표적인 스텔스 스캔(Stealth Scan) 3가지(TCP Half-Open Scan, Xmas Scan, Null Scan)의 플래그 조합과 포트가 열려 있을 때(Open)의 응답 특성을 서술하시오.",
        answer:
          "1. TCP Half-Open (SYN) Scan: SYN 패킷 전송 후 대상으로부터 SYN/ACK 수신 시 포트가 열린 것으로 판단하며, 즉시 RST 패킷을 전송하여 연결을 성립시키지 않고 중단함 (로그 미기록)\n2. Xmas Scan: URG, PSH, FIN 플래그를 모두 1로 켜서 전송. 포트가 열려 있으면 무응답(No Response), 닫혀 있으면 RST/ACK 응답 수신\n3. Null Scan: 모든 플래그를 0(None)으로 세팅하여 전송. 포트가 열려 있으면 무응답(No Response), 닫혀 있으면 RST/ACK 응답 수신",
        scoringCriteria: "SYN 스캔의 RST 차단 원리(2점), Xmas 플래그(URG+PSH+FIN) 및 응답 특성(3점), Null 플래그 및 응답 특성(3점) 총 8점",
      },
    ],
    answer: [
      "1. 6대 플래그: URG(긴급 처리), ACK(수신 확인), PSH(즉시 버퍼 비움), RST(연결 리셋), SYN(연결 동기화), FIN(정상 종료)",
      "2. 스텔스 스캔:\n• SYN(Half-Open): SYN -> SYN/ACK 수신 후 즉시 RST 전송\n• Xmas: URG+PSH+FIN 플래그 조합 / 열린 포트는 무응답, 닫힌 포트는 RST 응답\n• Null: 플래그 0 / 열린 포트는 무응답, 닫힌 포트는 RST 응답",
    ],
    scoringPoints: [
      "TCP 6대 플래그(URG, ACK, PSH, RST, SYN, FIN)의 정확한 정의 (6점)",
      "SYN Half-open 스캔의 세션 미완성 원리 (2점)",
      "Xmas Scan의 URG+PSH+FIN 조합 및 무응답 특성 (3점)",
      "Null Scan의 플래그 0 및 무응답 특성 (3점)",
    ],
    explanation:
      "• TCP 6 Control Flags 메모리 구조 (6비트):\n`| URG | ACK | PSH | RST | SYN | FIN |`\n• RFC 793 규약 기반 스텔스 스캔의 원리:\n비정상적인 플래그(Xmas, Null, FIN Scan)가 닫힌 포트에 도착하면 대상 호스트는 반드시 RST 패킷으로 응답해야 하지만, 열려 있는 포트에서는 해당 비정상 패킷을 그냥 무시(Drop)하여 응답하지 않습니다. 따라서 공격자는 '무응답'을 통해 포트가 열려 있음을 간접 확인합니다. (단, 윈도우 OS는 RFC 793을 따르지 않고 열린 포트에서도 RST를 반환하므로 유닉스/리눅스 계열 점검에 유효함)",
    examTips:
      "실기 14점 단골 문제입니다. URG+PSH+FIN 조합(Xmas)과 포트가 열려 있을 때 '무응답(No Response)'이라는 특징을 명확히 써야 감점이 없습니다.",
    mermaidChart: `flowchart TD
    subgraph XmasScan["Xmas Scan (URG + PSH + FIN = 1)"]
        Attacker["공격자 (스캐너)"] -->|"비정상 플래그 전송 (URG, PSH, FIN)"| Target{"대상 포트 상태"}
        Target -->|"포트가 열려 있음 (OPEN)"| NoResp["무응답 (No Response)<br/>패킷 폐기 -> 공격자는 OPEN 판정!"]
        Target -->|"포트가 닫혀 있음 (CLOSED)"| RSTResp["RST / ACK 응답 수신<br/>-> 공격자는 CLOSED 판정!"]
    end

    subgraph SynScan["SYN Half-Open Scan (스텔스 3-Way)"]
        S_Atk["공격자"] -->|"1. SYN 전송"| S_Tgt["서버"]
        S_Tgt -->|"2. SYN / ACK 수신 (포트 열림)"| S_Atk
        S_Atk -->|"3. 즉시 RST 전송 (연결 강제 해제)"| S_Tgt
        Note_Syn["세션을 맺지 않아 웹 서버 접속 로그 미기록!"]
    end`,
  },

  // =================================================================
  // [문제 32] 서술·작업형 (14점) - 애플리케이션 보안 / SQL 인젝션
  // =================================================================
  {
    id: 32,
    subjectId: "application",
    type: "practical",
    score: 14,
    domain: "애플리케이션 보안 / 데이터베이스 보안",
    title: "SQL 인젝션(SQLi) 4대 공격 유형 및 데이터 추출 메커니즘",
    description:
      "웹 애플리케이션의 입력값 검증 미흡으로 발생하는 SQL 인젝션(SQL Injection)의 세부 공격 기법에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "기존 쿼리의 결과에 공격자가 원하는 임의의 SELECT 쿼리 결과를 결합하여 데이터를 탈취하는 'Union-based SQL Injection' 공격을 성공시키기 위해 충족해야 하는 필수 전제 조건 2가지를 기술하시오.",
        answer:
          "1. 원래의 기존 SELECT 쿼리와 UNION으로 결합하는 악의적인 SELECT 쿼리의 '컬럼(열)의 개수'가 정확히 일치해야 한다.\n2. 각 대응하는 컬럼 간의 '데이터 타입(문자열, 숫자, 날짜 등)'이 상호 호환되어야 한다.",
        scoringCriteria: "컬럼 개수 일치(2.5점), 데이터 타입 호환성(2.5점) 총 5점",
      },
      {
        number: 2,
        question:
          "웹 화면에 데이터베이스 오류 메시지나 조회 결과가 일체 출력되지 않는 환경에서 데이터를 유출하는 'Blind SQL Injection'의 2가지 세부 유형(Boolean-based, Time-based)의 동작 원리를 각각 비교 설명하시오.",
        answer:
          "• 참/거짓 기반(Boolean-based Blind SQLi): 조건식(참/거짓)을 주입한 뒤, 서버의 HTTP 응답 페이지 내용(성공 문구, 특정 텍스트 존재 여부, HTTP 상태 코드 등)의 미세한 변화를 관찰하여 참/거짓 여부를 한 글자씩 추론함\n• 시간 지연 기반(Time-based Blind SQLi): 서버의 응답 내용에 전혀 차이가 없는 경우, 조건식이 참일 때 `SLEEP()`(MySQL) 또는 `WAITFOR DELAY`(MSSQL) 같은 시간 지연 함수를 실행시켜 서버의 HTTP 응답 지연 시간(초)을 측정함으로써 참/거짓을 판별함",
        scoringCriteria: "Boolean-based 원리(2.5점), Time-based 시간 지연 함수 및 응답 시간 측정 원리(2.5점) 총 5점",
      },
      {
        number: 3,
        question:
          "공격자가 입력한 악의적인 SQL 구문이 1차 입력 시점에는 실행되지 않고 DB에 안전하게 저장된 후, 추후 다른 정상적인 관리자 기능이나 배치 작업에서 호출되어 쿼리가 실행될 때 비로소 인젝션이 발생하는 고난도 공격 기법의 명칭을 쓰시오.",
        answer: "2차 SQL 인젝션 (Second-Order SQL Injection 또는 Stored SQL Injection)",
        scoringCriteria: "2차 SQL 인젝션 또는 Second-Order SQLi 정확히 기술 시 4점",
      },
    ],
    answer: [
      "1. UNION SQLi 전제조건: 1) 컬럼 수 일치, 2) 컬럼 데이터 타입 호환",
      "2. Blind SQLi 2종:\n• Boolean-based: 조건식 참/거짓에 따른 응답 페이지 변화 관찰\n• Time-based: SLEEP/WAITFOR 함수를 통한 서버 응답 지연 시간 측정",
      "3. 공격 기법: 2차 SQL 인젝션 (Second-Order SQL Injection)",
    ],
    scoringPoints: [
      "UNION 문의 컬럼 개수 및 데이터 타입 일치 조건 (5점)",
      "Boolean-based 및 Time-based Blind SQLi 원리 비교 (5점)",
      "Second-Order SQL Injection(2차 SQL 인젝션) 명칭 (4점)",
    ],
    explanation:
      "• SQL Injection 공격 분류 체계:\n1) In-band SQLi (동일 채널): Error-based(오류 유발을 통한 데이터 노출), Union-based(화면에 다른 테이블 결과 결합 노출)\n2) Inferential / Blind SQLi (추론 채널): 화면 출력이 없을 때, Boolean-based(참/거짓 반응 분기), Time-based(시간 지연 반응)\n3) Out-of-band SQLi (외부 채널): DNS 질의나 HTTP 역방향 요청을 통해 공격자의 외부 서버로 데이터를 전송시키는 기법",
    examTips:
      "Blind SQLi에서 사용되는 SUBSTRING, ASCII, LENGTH 함수와 SLEEP() 함수의 조합, 그리고 UNION 문의 컬럼 개수 맞추기(ORDER BY 1, 2, 3...) 테크닉은 실기 시험의 단골 서술형 문항입니다.",
    mermaidChart: `flowchart TD
    SQLi["SQL Injection 분류 체계"] --> InBand["1. 인밴드(In-Band) SQLi<br/>요청과 응답이 동일 채널"]
    SQLi --> Blind["2. 블라인드(Blind) SQLi<br/>응답 화면에 결과 노출 없음"]
    SQLi --> OutOfBand["3. 아웃오브밴드(OOB) SQLi<br/>외부 DNS/HTTP 채널 유출"]

    InBand --> Union["Union-based (컬럼수/타입 일치 필요)"]
    InBand --> Error["Error-based (DB 에러 메시지 활용)"]

    Blind --> Bool["Boolean-based (참/거짓 응답 페이지 비교)"]
    Blind --> Time["Time-based (SLEEP 시간 지연 함수 측정)"]`,
  },

  // =================================================================
  // [문제 33] 서술·작업형 (14점) - 애플리케이션 보안 / 웹쉘 대응
  // =================================================================
  {
    id: 33,
    subjectId: "application",
    type: "practical",
    score: 14,
    domain: "애플리케이션 보안 / 파일 업로드 보안",
    title: "웹쉘(Webshell) 파일 업로드 취약점 및 다계층 방어 대책",
    description:
      "게시판이나 프로필 첨부파일 기능에서 발생하는 악성 웹쉘(Webshell) 업로드 취약점과 이를 방어하기 위한 시큐어 코딩 및 웹 서버 인프라 보안 설정에 관한 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "공격자가 웹쉘 파일(예: `shell.php`)을 업로드하기 위해 전송하는 HTTP 요청에서, 클라이언트 측 자바스크립트 확장자 검증이나 Content-Type 검증을 우회하기 위해 흔히 악용하는 기법 2가지를 기술하시오.",
        answer:
          "1. 프록시 도구(Burp Suite 등)를 이용하여 웹 브라우저의 클라이언트 측 스크립트 검증을 통과한 후, 전송 패킷의 확장자나 `Content-Type` 헤더(예: `image/jpeg`로 위장)를 가로채어 변조 전송\n2. 확장자 우회 기법 악용 (대소문자 혼용 `.pHP`, 실행 가능한 대체 확장자 `.php5`, `.phtml`, `.inc` 사용, 또는 이중 확장자 `shell.php.jpg` 사용)",
        scoringCriteria: "프록시를 통한 Content-Type 변조 및 대체 확장자 우회 기법 명시 시 4점",
      },
      {
        number: 2,
        question:
          "서버 측 소스코드(애플리케이션 레벨)에서 위험한 확장자를 차단할 때 '블랙리스트 방식'을 사용하면 안 되는 이유와 올바른 '화이트리스트 방식' 검증의 원리를 서술하시오.",
        answer:
          "• 블랙리스트의 한계: 위험하다고 정의된 특정 확장자(asp, php, jsp 등)만 차단하므로, 새로운 실행 확장자(php7, phtml, war, jspx, cer)나 아파치 설정에 의해 실행 가능한 변종 확장자를 모두 완벽히 나열하여 차단하는 것이 원천적으로 불가능함\n• 화이트리스트 검증 원리: 오직 비실행 안전 확장자(예: jpg, png, pdf, zip)만을 명시적으로 사전 정의하여 허용하고, 허용 목록에 없는 그 밖의 모든 확장자는 기본 거부(Default Deny)함으로써 알려지지 않은 변종 실행 파일의 유입을 원천 차단함",
        scoringCriteria: "블랙리스트의 변종 우회 취약점(2.5점), 화이트리스트의 허용 목록 외 기본 거부 원리(2.5점) 총 5점",
      },
      {
        number: 3,
        question:
          "공격자가 파일 확장자 검증을 우회하여 웹쉘을 업로드하는 데 성공하더라도, 서버 상에서 스크립트가 절대 실행되지 못하도록 인프라 및 웹 서버(Apache 등) 레벨에서 구축해야 하는 핵심 보안 조치 2가지를 서술하시오.",
        answer:
          "1. 업로드된 파일이 저장되는 디렉터리의 '스크립트 실행 권한(Execute Permission)'을 제거하여, URL 직접 호출 시에도 웹 서버가 스크립트 해석 엔진(PHP/JSP)을 구동하지 않고 단순 텍스트로 처리하거나 403 Forbidden 차단하도록 설정한다. (예: Apache 설정에서 `php_flag engine off`, `Options -ExecCGI` 적용)\n2. 업로드 저장 디렉터리를 웹 서버의 문서 루트(DocumentRoot) 외부에 격리하여 외부 브라우저에서 직접 URL 경로로 접근할 수 없도록 격리하고, 파일명을 난수(UUID 등)로 변경하여 저장한다.",
        scoringCriteria: "업로드 디렉터리 실행 권한 제거(2.5점), 웹 루트 외부 격리 또는 파일명 난수화(2.5점) 총 5점",
      },
    ],
    answer: [
      "1. 우회 기법: Burp Suite를 통한 Content-Type 헤더 변조(image/jpeg), 대체 확장자(.php5, .phtml) 사용",
      "2. 화이트리스트: 허용된 안전 확장자(jpg, png 등)만 통과시키고 나머지는 Default Deny 처리",
      "3. 실행 차단 조치: 업로드 디렉터리 실행 권한 제거(php_flag engine off), 웹 루트 외부 저장 및 UUID 난수화 파일명 저장",
    ],
    codeBlock: {
      language: "apache",
      code: `# Apache 업로드 디렉터리 (.htaccess) 실행 권한 차단 설정
<Directory "/var/www/html/uploads">
    # 1. CGI 및 스크립트 실행 금지
    Options -ExecCGI
    
    # 2. PHP 해석 엔진 비활성화 (스크립트가 평문으로도 미실행)
    php_flag engine off
    
    # 3. 브라우저에서 .php, .jsp 등 실행 확장자 직접 호출 차단
    <FilesMatch "\\.(?i:php|phtml|php3|php5|jsp|asp|aspx)$">
        Require all denied
    </FilesMatch>
</Directory>`,
    },
    scoringPoints: [
      "Content-Type 변조 및 대체 확장자 우회 기법 서술 (4점)",
      "블랙리스트 한계 및 화이트리스트(Default Deny) 원리 서술 (5점)",
      "업로드 디렉터리 실행 권한 제거 및 웹 루트 외부 격리 (5점)",
    ],
    explanation:
      "• 웹쉘(Webshell) 4중 방어벽 (Defense-in-Depth):\n1단계: 클라이언트 및 서버 측 화이트리스트 확장자 검증 (대소문자 소문자 변환 후 검사)\n2단계: 파일 시그니처(Magic Number) 검사로 페이크 이미지 차단\n3단계: 저장 시 원본 파일명을 무작위 난수(UUID)로 변경하고 확장자 고정\n4단계: 업로드 디렉터리의 실행 권한 박탈 및 웹 루트(DocRoot) 외부 격리 저장",
    examTips:
      "실기 14점 배점으로 매년 출제되는 최우선 순위 문제입니다. '화이트리스트 확장자 검증'과 아파치/Nginx의 '업로드 디렉터리 실행 권한 제거' 키워드는 서술형 답안에 반드시 포함되어야 합니다.",
    mermaidChart: `flowchart TD
    Attacker["공격자 (웹쉘 업로드 시도)"] --> Step1{"1단계: 파일 확장자 검사"}
    
    Step1 -->|"화이트리스트 통과 (jpg, png 등)"| Step2{"2단계: 파일 시그니처 검사"}
    Step1 -->|"위험 확장자 (php, jsp 등)"| Block1["🚨 즉시 차단 (Default Deny)"]

    Step2 -->|"매직 넘버 위조 탐지"| Block2["🚨 파일 위변조 차단"]
    Step2 -->|"정상 파일 확인"| Step3["3단계: 파일명 난수화 (UUID)<br/>웹 루트 외부 디렉터리에 저장"]

    Step3 --> Step4["4단계: 업로드 디렉터리 보호<br/>실행 권한(Execute) 제거 (php_flag engine off)"]
    Step4 --> Safe["✔️ 웹쉘 업로드 및 실행 원천 무력화!"]`,
  },

  // =================================================================
  // [문제 34] 단답형 (3점) - 시스템 보안 (NTFS)
  // =================================================================
  {
    id: 34,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "윈도우 NTFS 파일 시스템 보안 기능 (ACL, EFS, ADS)",
    description:
      "윈도우의 대표적인 파일 시스템인 NTFS(New Technology File System)의 보안 및 암호화 기능에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 각각 기술하시오.",
    scenario:
      "(A): NTFS는 파일 및 디렉터리마다 개별 사용자/그룹별 접근 권한을 부여하는 (  A  )(Access Control List) 기반의 정밀한 접근 통제를 지원한다.\n(B): 파일 및 폴더를 사용자의 공개키 기반 대칭키로 투명하게 암호화하여 저장하는 윈도우 기본 암호화 파일 시스템은 (  B  )이다.\n(C): 정상 파일 뒤에 숨겨진 별도 데이터 스트림을 결합할 수 있어 악성코드 은닉에 악용되는 NTFS 고유 기능은 (  C  )(Alternate Data Streams)이다.",
    answer: [
      "(A): ACL (또는 접근 제어 목록 / Access Control List)",
      "(B): EFS (Encrypting File System)",
      "(C): ADS (Alternate Data Streams / 대체 데이터 스트림)",
    ],
    scoringPoints: [
      "(A): ACL 또는 Access Control List 정확히 기술 (1점)",
      "(B): EFS 또는 Encrypting File System 정확히 기술 (1점)",
      "(C): ADS 또는 Alternate Data Streams 정확히 기술 (1점)",
    ],
    explanation:
      "• ACL(Access Control List): 각 파일/디렉터리의 접근 권한(읽기, 쓰기, 실행, 수정)을 세밀하게 제어\n• EFS(Encrypting File System): NTFS 볼륨에서 파일/폴더를 대칭키(AES)로 암호화하고 해당 대칭키를 사용자 공개키(RSA)로 암호화하여 저장\n• ADS(Alternate Data Streams): 하나의 파일에 여러 데이터 스트림을 연결할 수 있는 기능으로, 악성코드가 `notepad.exe:hidden.exe` 형태로 백신 탐지를 우회하여 악성 바이너리를 은닉하는 데 악용됨",
    examTips:
      "NTFS와 FAT32의 결정적 차이(보안성, 접근통제, EFS)와 ADS 은닉 기법은 단답형으로 매우 자주 출제됩니다.",
  },

  // =================================================================
  // [문제 35] 단답형 (3점) - 암호학 (종단간 암호화 & E2EE)
  // =================================================================
  {
    id: 35,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "정보보호 일반 & 암호학",
    title: "종단간 암호화(E2EE, End-to-End Encryption)와 전방향 안전성",
    description:
      "메신저 및 금융 데이터 전송에 사용되는 종단간 암호화 기술에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 각각 기술하시오.",
    scenario:
      "송신 단말기에서 데이터를 암호화하여 수신 단말기에서만 복호화할 수 있도록 보장하고, 중간 네트워크 사업자나 중계 서버 관리자조차 복호화 키가 없어 평문을 열람할 수 없도록 통제하는 기술을 (  A  )(End-to-End Encryption)라고 한다. 또한, 추후 서버의 장기 개인키가 유출되더라도 과거에 주고받은 세션 암호문이 해독되지 않도록 보장하는 암호학적 특성을 (  B  )(Forward Secrecy)라고 한다.",
    answer: [
      "(A): E2EE (또는 End-to-End Encryption / 종단간 암호화)",
      "(B): 전방향 안전성 (또는 PFS / Perfect Forward Secrecy)",
    ],
    scoringPoints: [
      "(A): E2EE 또는 종단간 암호화 기술 시 (1.5점)",
      "(B): 전방향 안전성 또는 PFS 기술 시 (1.5점)",
    ],
    explanation:
      "• E2EE(End-to-End Encryption): TLS와 같은 구간 암호화(Hop-by-Hop)와 달리 중간 서버에서도 데이터가 복호화되지 않아 서버 해킹이나 도청으로부터 메시지를 완벽히 보호함\n• PFS(Perfect Forward Secrecy, 완전 순방향 비밀성): 세션마다 임시 Diffie-Hellman(DHE, ECDHE) 키 교환을 수행하여 세션 키를 생성하므로, 장기 개인키가 탈취되어도 이전 세션 트래픽 복호화가 불가능함",
    examTips:
      "구간 암호화(TLS)와 종단간 암호화(E2EE)의 차이, 그리고 PFS(전방향 안전성)의 정의는 최신 암호학 단골 출제 주제입니다.",
  },

  // =================================================================
  // [문제 36] 단답형 (3점) - 애플리케이션 보안 (DLP)
  // =================================================================
  {
    id: 36,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "데이터 유출 방지(DLP) 기술 및 데이터 처리 3대 상태",
    description:
      "사내 중요 정보 및 개인정보의 외부 유출을 원천 통제하는 DLP(Data Loss Prevention) 기술에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 각각 기술하시오.",
    scenario:
      "사내 기밀 데이터나 개인정보가 인쇄, USB 복사, 이메일, 메신저 등을 통해 외부로 불법 유출되는 것을 차단하는 보안 솔루션을 (  A  )(Data Loss Prevention)라고 한다. DLP는 데이터의 상태에 따라 DB나 PC에 저장된 데이터인 (  B  )(Data at Rest), 네트워크를 통해 이동 중인 (  C  )(Data in Motion/Transit), 메모리에서 사용 중인 Data in Use 3가지 상태를 모두 식별하여 보호한다.",
    answer: [
      "(A): DLP (또는 Data Loss Prevention / 데이터 유출 방지)",
      "(B): Data at Rest (또는 저장 데이터)",
      "(C): Data in Motion (또는 Data in Transit / 전송 중 데이터)",
    ],
    scoringPoints: [
      "(A): DLP 또는 데이터 유출 방지 (1점)",
      "(B): Data at Rest 또는 저장 데이터 (1점)",
      "(C): Data in Motion / Data in Transit 또는 전송 중 데이터 (1점)",
    ],
    explanation:
      "• DLP(Data Loss Prevention): 콘텐츠(Content) 및 콘텍스트(Context) 인식을 기반으로 민감 데이터의 생성, 복사, 전송 행위를 모니터링 및 차단\n• 데이터 3대 상태:\n1. Data at Rest (저장 데이터): 파일 서버, 데이터베이스, 스토리지에 보관된 상태\n2. Data in Motion/Transit (전송 데이터): 네트워크 패킷, 이메일, 메신저로 전송 중인 상태\n3. Data in Use (사용 데이터): RAM, 캐시 메모리에서 CPU에 의해 연산 처리 중인 상태",
    examTips:
      "DLP의 기본 약어와 데이터 3가지 상태(Rest, Motion, Use)의 영문/한글 명칭을 명확히 알아두어야 합니다.",
  },

  // =================================================================
  // [문제 37] 단답형 (3점) - 소프트웨어 보안 (버퍼 오버플로우 취약 API)
  // =================================================================
  {
    id: 37,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "소프트웨어 보안",
    title: "버퍼 오버플로우 취약 C 표준 함수 및 안전한 대체 API",
    description:
      "C 언어에서 대상 버퍼의 경계(Boundary) 크기를 검사하지 않아 스택 버퍼 오버플로우를 유발하는 대표적 취약 함수와 이를 대체하는 안전한 표준 함수에 관한 물음이다. 빈칸 (A), (B)에 들어갈 함수명을 각각 기술하시오.",
    scenario:
      "• 문자열 복사 시 목적지 버퍼의 크기를 검증하지 않는 취약 함수 (  A  ) 대신, 복사할 최대 문자 수(size_t n)를 명시적으로 전달하는 strncpy() 또는 C11의 strcpy_s()를 사용해야 한다.\n• 표준 입력(stdin)에서 개행 문자를 만날 때까지 버퍼 크기 제한 없이 읽어들이는 취약 함수 (  B  ) 대신, 버퍼 크기를 지정할 수 있는 fgets()를 사용해야 한다.",
    answer: [
      "(A): strcpy (대체 함수: strncpy, strcpy_s)",
      "(B): gets (대체 함수: fgets, gets_s)",
    ],
    scoringPoints: [
      "(A): strcpy 정확히 기술 시 (1.5점)",
      "(B): gets 정확히 기술 시 (1.5점)",
    ],
    explanation:
      "• 대표적인 버퍼 오버플로우 취약 함수 및 대체 함수:\n- `strcpy()` -> `strncpy()`, `strlcpy()`, `strcpy_s()`\n- `gets()` -> `fgets()`, `gets_s()` (gets는 C11 표준에서 완전히 제거됨)\n- `strcat()` -> `strncat()`, `strcat_s()`\n- `sprintf()` -> `snprintf()`, `sprintf_s()`\n이들 함수는 널(NULL) 문자를 만날 때까지 메모리에 계속 쓰기를 수행하므로 복귀 주소(RET) 덮어쓰기 공격을 허용합니다.",
    examTips:
      "strcpy와 gets는 정보보안기사 실기에서 가장 많이 출제된 취약 C 함수입니다. 대체 함수(strncpy, fgets)와 함께 쌍으로 기억하세요.",
  },

  // =================================================================
  // [문제 38] 단답형 (3점) - 네트워크 보안 (DNS, Cache, TTL)
  // =================================================================
  {
    id: 38,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "DNS 캐시 동작 메커니즘과 TTL(Time To Live)",
    description:
      "DNS(Domain Name System)의 캐싱 메커니즘과 자원 레코드 설정에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 각각 기술하시오.",
    scenario:
      "DNS 리졸버(Resolver)나 로컬 네임서버가 상위 네임서버로부터 수신한 IP 매핑 레코드를 캐시에 저장하여 재사용할 수 있는 유효 시간(초 단위)을 나타내는 DNS 리소스 레코드 필드를 (  A  )(Time To Live)이라고 한다. 만약 이 값이 만료되었을 때 공격자가 조작된 매핑 정보를 권위 네임서버보다 먼저 리졸버에 응답하여 캐시를 오염시키는 공격을 (  B  )(DNS Cache Poisoning)이라고 한다.",
    answer: [
      "(A): TTL (Time To Live)",
      "(B): DNS 캐시 포이즈닝 (DNS Cache Poisoning / DNS 스푸핑)",
    ],
    scoringPoints: [
      "(A): TTL 또는 Time To Live 기술 시 (1.5점)",
      "(B): DNS 캐시 포이즈닝 또는 DNS Cache Poisoning / DNS 스푸핑 기술 시 (1.5점)",
    ],
    explanation:
      "• TTL(Time To Live): DNS 레코드가 캐시 서버에 머무를 수 있는 시간(초). 짧을수록 IP 변경 반영이 빠르지만 DNS 질의 부하가 늘고, 길수록 네트워크 부하는 줄지만 DNS 정보 갱신이 지연됨\n• DNS Cache Poisoning: 취약한 DNS 리졸버의 트랜잭션 ID(TxID) 및 UDP 소스 포트의 무작위성 부재를 악용하여 위조 IP를 캐시에 주입하는 공격\n• 대응: BIND의 소스 포트 무작위화 및 DNSSEC(전자서명 기반 위변조 검증) 도입",
    examTips:
      "TTL의 정의(초 단위 캐시 수명)와 DNS 캐시 포이즈닝(Kaminsky 공격)은 네트워크 단답형 핵심 단골입니다.",
  },

  // =================================================================
  // [문제 39] 단답형 (3점) - 정보보호 관리 (위험 분석 4대 접근법)
  // =================================================================
  {
    id: 39,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "위험 분석 4대 접근 방법론 (기준선, 상세, 복합적 접근법)",
    description:
      "정보보호 위험 관리 프로세스에서 위험 분석(Risk Analysis)을 수행할 때 활용하는 접근 방법론에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 접근법 명칭을 각각 기술하시오.",
    scenario:
      "• (  A  ) 접근법: 국내외 표준, 법적 요구사항, 베이스라인 보안 체크리스트를 기반으로 모든 시스템에 표준 보안 통제를 일괄 적용하는 방식 (시간/비용 절약, 과도하거나 부족한 보안 투자 우려)\n• (  B  ) 접근법: 자산, 위협, 취약점을 정량적/정성적 기법으로 항목별 정밀 분석하는 방식 (높은 정확도, 많은 시간과 비용 소요)\n• (  C  ) 접근법: 고위험 중요 자산에는 상세 위험 분석을 적용하고, 일반 자산에는 기준선 접근법을 병행 적용하는 현실적이고 합리적인 방식",
    answer: [
      "(A): 기준선 접근법 (또는 베이스라인 접근법 / Baseline Approach)",
      "(B): 상세 위험 분석 (Detailed Risk Analysis)",
      "(C): 복합적 접근법 (또는 혼합 접근법 / Combined Approach)",
    ],
    scoringPoints: [
      "(A): 기준선 접근법 또는 베이스라인 접근법 (1점)",
      "(B): 상세 위험 분석 (1점)",
      "(C): 복합적 접근법 또는 혼합 접근법 (1점)",
    ],
    explanation:
      "• 위험 분석 4대 접근법:\n1. 기준선(베이스라인) 접근법: 모든 자산에 일괄 보안 체크리스트 적용 (적은 비용, 자산별 특화 부족)\n2. 비정형(전문가) 접근법: 전문가의 직관과 경험에 의존\n3. 상세 위험 분석: 자산 평가, 위협/취약점 분석, 손실액 산정 등 정밀 분석 수행\n4. 복합적(혼합) 접근법: 중요 자산은 상세 분석, 일반 자산은 기준선 접근법을 혼합 적용하여 비용 대비 효율을 극대화함",
    examTips:
      "복합적 접근법(Combined Approach)의 개념과 기준선 접근법의 장단점을 묻는 문제는 실기 시험 단답형 및 서술형의 핵심 빈출입니다.",
  },

  // =================================================================
  // [문제 40] 단답형 (3점) - 정보보호 법률 (정보통신망법)
  // =================================================================
  {
    id: 40,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "정보통신망법 침해사고 신고 의무 및 주무부처",
    description:
      "정보통신망 이용촉진 및 정보보호 등에 관한 법률(정보통신망법) 제48조의3(침해사고의 신고 등)에 관한 물음이다. 빈칸 (A), (B)에 들어갈 알맞은 내용을 기술하시오.",
    scenario:
      "정보통신서비스 제공자는 해킹, 컴퓨터바이러스, 서비스 거부 공격 등으로 인하여 정보통신망 또는 정보시스템에 침해사고가 발생하면 즉시 (  A  )(또는 한국인터넷진흥원 KISA)에 그 사실을 신고하여야 한다. 또한 과기정통부장관이나 KISA는 사고 원인 분석을 위해 해당 사업자에게 접속기록 등 관련 (  B  )의 보전을 요구할 수 있다.",
    answer: [
      "(A): 과학기술정보통신부장관 (또는 과학기술정보통신부 / 과기정통부)",
      "(B): 로그기록 (또는 접속기록 / 보전 자료)",
    ],
    scoringPoints: [
      "(A): 과학기술정보통신부장관 또는 과기정통부 기술 시 (1.5점)",
      "(B): 로그기록 또는 접속기록 기술 시 (1.5점)",
    ],
    explanation:
      "• 침해사고 신고 주무부처 비교:\n- 정보통신망법 침해사고 신고: 과학기술정보통신부장관(과기정통부) 또는 한국인터넷진흥원(KISA) -> 지체 없이 즉시 신고\n- 개인정보보호법 개인정보 유출 신고: 개인정보보호위원회 또는 KISA -> 72시간 이내 신고(1천명 이상 유출 시 필수)",
    examTips:
      "정보통신망법(과기정통부)과 개인정보보호법(개인정보보호위원회)의 신고 기관 차이는 함정 단골 문제입니다.",
  },

  // =================================================================
  // [문제 41] 단답형 (3점) - 애플리케이션 보안 (Indexes & DB 암호화)
  // =================================================================
  {
    id: 41,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "데이터베이스 인덱스(Index) 암호화 및 검색 보안",
    description:
      "데이터베이스 보안에서 개인정보 및 민감 데이터를 암호화할 때 인덱스(Index) 검색 성능과 보안성을 절충하는 기술에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "DB 암호화 컬럼에 B-Tree 인덱스를 유지하기 위해 동일한 평문이 항상 동일한 암호문으로 변환되도록 하는 방식을 (  A  ) 암호화(Deterministic Encryption)라고 한다. 반면 무작위 IV/Salt를 사용하는 확률적 암호화는 안전하지만 일반적인 인덱스 조회가 불가능하므로, 컬럼의 일방향 해시값을 별도로 색인하여 일치 검색(=)을 지원하는 (  B  ) 인덱스(또는 Blind Index) 기법을 활용한다.",
    answer: [
      "(A): 결정적 (또는 결정론적 / Deterministic)",
      "(B): 해시 (또는 블라인드 / Blind Index / Hash)",
    ],
    scoringPoints: [
      "(A): 결정적 또는 결정론적(Deterministic) 기술 시 (1.5점)",
      "(B): 해시(Hash) 또는 블라인드(Blind) 기술 시 (1.5점)",
    ],
    explanation:
      "• 결정적 암호화(Deterministic Encryption): 동일 평문 -> 동일 암호문 (인덱스 검색 가능하나 패턴 분석/빈도 분석 공격에 취약)\n• 확률적 암호화(Probabilistic Encryption): 동일 평문이라도 매번 무작위 IV에 의해 다른 암호문 생성 (안전하나 인덱스 생성 불가)\n• 블라인드 인덱스(Blind Index): `HMAC(Salt, Plaintext)`의 해시 결과를 별도 컬럼으로 인덱싱하여 검색을 지원하는 안전한 대안",
    examTips:
      "DB 컬럼 암호화와 인덱스 검색(Full Table Scan 문제) 간의 관계를 묻는 실무형 문제입니다.",
  },

  // =================================================================
  // [문제 42] 단답형 (3점) - 시스템 보안 (lastcomm / pacct)
  // =================================================================
  {
    id: 42,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 프로세스 회계 감사 로그 및 lastcomm 명령어",
    description:
      "리눅스 시스템에서 사용자가 터미널이나 백그라운드에서 실행한 명령어의 실행 이력을 추적하는 프로세스 회계(Process Accounting) 기능에 관한 설명이다. 빈칸 (A), (B)에 들어갈 파일명과 명령어를 기술하시오.",
    scenario:
      "리눅스에서 `accton` 명령으로 프로세스 어카운팅을 활성화하면, 시스템에서 종료된 모든 프로세스의 명령어 이름, CPU 시간, 실행한 사용자 계정 정보가 바이너리 파일인 (  A  )(또는 pacct)에 기록된다. 시스템 침해사고 조사관은 이 감사 로그를 확인하기 위하여 (  B  ) 명령어를 사용하여 사용자별 실행 내역을 추적한다.",
    answer: [
      "(A): /var/account/pacct (또는 pacct / acct)",
      "(B): lastcomm",
    ],
    scoringPoints: [
      "(A): pacct 또는 /var/account/pacct 기술 시 (1.5점)",
      "(B): lastcomm 기술 시 (1.5점)",
    ],
    explanation:
      "• 프로세스 어카운팅 로그:\n- 로그 파일: `/var/account/pacct` (또는 `/var/log/account/pacct`)\n- 조회 명령어: `lastcomm`\n• 주요 활용 예시:\n- `lastcomm user01`: user01이 실행한 모든 명령어 확인\n- `lastcomm rm`: rm 명령어를 실행한 모든 계정과 시간 확인\nwtmp나 history와 달리 사용자가 `.bash_history`를 지워도 실행된 프로세스가 커널 수준에서 누적 기록됩니다.",
    examTips:
      "lastcomm과 pacct 파일은 리눅스 침해사고 분석/포렌식 영역의 단답형 빈출 키워드입니다.",
  },

  // =================================================================
  // [문제 43] 단답형 (3점) - 모바일 보안 (인증서 피닝 & 안드로이드 취약점)
  // =================================================================
  {
    id: 43,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "모바일 보안",
    title: "모바일 앱 인증서 피닝 및 컴포넌트 접근 통제",
    description:
      "모바일 애플리케이션 보안 취약점 점검 항목에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어와 설정을 기술하시오.",
    scenario:
      "• 클라이언트 모바일 앱 내에 신뢰할 수 있는 서버의 공개키나 인증서 해시를 하드코딩하여, 사용자 단말기에 사설 Root CA가 설치되더라도 프록시 툴을 통한 중간자 공격(MITM) 및 패킷 감청을 원천 무력화하는 기법을 (  A  )(Certificate Pinning)이라고 한다.\n• 안드로이드 앱의 `AndroidManifest.xml`에서 외부 비인가 앱이 임의로 컴포넌트(Activity, Service, Receiver)를 실행하지 못하도록 비공개 컴포넌트에 적용해야 하는 속성 설정은 (  B  )이다.",
    answer: [
      "(A): 인증서 피닝 (Certificate Pinning / SSL Pinning)",
      "(B): android:exported=\"false\"",
    ],
    scoringPoints: [
      "(A): 인증서 피닝 또는 Certificate Pinning 기술 시 (1.5점)",
      "(B): android:exported=\"false\" 또는 exported=false 기술 시 (1.5점)",
    ],
    explanation:
      "• Certificate Pinning(인증서 피닝): 앱이 통신할 때 OS의 신뢰된 CA 저장소를 맹신하지 않고, 사전에 고정(Pin)해 둔 인증서/공개키만 승인하여 Burp Suite 등 프록시 도구를 통한 패킷 복호화를 차단함\n• android:exported=\"false\": 다른 애플리케이션의 Intent 호출을 차단하여 비인가 접근 및 권한 상승 취약점을 방지함",
    examTips:
      "모바일 보안 진단 가이드에서 SSL Pinning과 AndroidManifest 컴포넌트 exported 설정은 최우선 점검 항목입니다.",
  },

  // =================================================================
  // [문제 44] 단답형 (3점) - 소프트웨어 보안 (NULL Pointer Dereference)
  // =================================================================
  {
    id: 44,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "소프트웨어 보안",
    title: "소프트웨어 보안 약점: 널 포인터 역참조(Null Pointer Dereference)",
    description:
      "소프트웨어 개발 보안(시큐어 코딩) 가이드에서 다루는 메모리 참조 취약점에 관한 설명이다. 빈칸 (A)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "함수가 메모리 할당(malloc) 실패나 객체 조회 실패 등으로 인해 유효하지 않은 주소인 NULL 값을 반환했음에도 불구하고, 반환값을 사전 검증하지 않고 포인터를 통해 메모리의 값에 직접 접근(값 읽기/쓰기)하려고 할 때 발생하는 취약점을 (  A  )(Null Pointer Dereference, CWE-476)라고 한다. 이 취약점은 운영체제로부터 세그멘테이션 오류(Segmentation Fault)를 일으켜 프로세스 비정상 종료(DoS)를 초래한다.",
    answer: [
      "(A): 널 포인터 역참조 (Null Pointer Dereference)",
    ],
    scoringPoints: [
      "(A): 널 포인터 역참조 또는 Null Pointer Dereference 정확히 기술 시 (3점)",
    ],
    explanation:
      "• 널 포인터 역참조(Null Pointer Dereference): 포인터 변수가 가리키는 주소가 0x0(NULL)일 때 `*ptr`이나 `ptr->field` 등으로 역참조를 시도하면 커널의 가상 메모리 보호 메커니즘에 의해 프로세스에 SIGSEGV 시그널이 전송되어 크래시 발생\n• 대응: 포인터 역참조 전 반드시 `if (ptr != NULL)` 유효성 검사 수행",
    examTips:
      "행정안전부 SW 개발보안 가이드 보안약점 중 널 포인터 역참조의 정확한 명칭을 숙지해야 합니다.",
  },

  // =================================================================
  // [문제 45] 단답형 (3점) - 네트워크 보안 (보안관제 3요소)
  // =================================================================
  {
    id: 45,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "보안관제(SOC) 업무 프로세스 3대 핵심 요소",
    description:
      "24시간 365일 실시간 위협 모니터링 및 침해사고 방어를 수행하는 보안관제(Security Operations Center)의 3대 핵심 업무 단계에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 단계를 기술하시오.",
    scenario:
      "1. (  A  )(Detection): ESM, SIEM, IDS/IPS, 웹방화벽 등 보안 장비에서 발생하는 대용량 보안 로그와 네트워크 트래픽을 실시간 감시하여 이상 징후를 식별하는 단계\n2. (  B  )(Analysis): 발생한 경보가 실제 사이버 공격인지 정상 트래픽의 오탐(False Positive)인지 판단하고, 공격 기법과 침해 영향도를 파악하는 단계\n3. (  C  )(Response): 실제 공격으로 확인된 공격자 IP 차단 룰 적용, 감염 시스템 망 분리/격리, 피해 보고 및 침해사고 대응팀(CERT) 전파를 수행하는 단계",
    answer: [
      "(A): 탐지 (Detection)",
      "(B): 분석 (Analysis)",
      "(C): 대응 (Response)",
    ],
    scoringPoints: [
      "(A) 탐지, (B) 분석, (C) 대응 각 1점씩 부여 (총 3점)",
    ],
    explanation:
      "보안관제 3요소는 '탐지(Detection) -> 분석(Analysis) -> 대응(Response)'의 3단계 순환 체계입니다.\n• 탐지: SIEM/ESM 상관분석 룰을 통한 이벤트 수집 및 알림\n• 분석: 패킷 분석, 페이로드 분석, 공격 시나리오 검증\n• 대응: 침입차단시스템(방화벽) IP 차단 정책 적용, 악성코드 격리, 재발 방지",
    examTips:
      "네트워크 보안관제의 기본 3대 프로세스(탐지, 분석, 대응)는 실무형 단답형의 기본 문제입니다.",
  },

  // =================================================================
  // [문제 46] 단답형 (3점) - 정보보호 관리 (위험 대응 방법 4가지)
  // =================================================================
  {
    id: 46,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "정보보호 위험 관리: 4대 위험 처리(대응) 전략",
    description:
      "위험 평가 후 수용 가능한 위험 수준(DoA)을 초과하는 위험에 대해 적용하는 4가지 위험 처리(Risk Treatment) 전략에 관한 설명이다. 빈칸 (A), (B), (C), (D)에 들어갈 전략 명칭을 기술하시오.",
    scenario:
      "• (  A  ): 위험이 발생하는 서비스나 업무 활동 자체를 중단하거나 기능을 폐기하여 위험 요인을 원천 제거함\n• (  B  ): 보안 전문 기업에 보안관제를 외주 위탁하거나 사이버 보안 보험에 가입하여 위험 책임을 제3자와 공유함\n• (  C  ): 접근제어 솔루션 도입, 암호화 적용, 보안 패치 등 적절한 보안 통제를 구현하여 위험의 발생 가능성이나 피해 규모를 낮춤\n• (  D  ): 잔여 위험이 DoA 이하이거나 추가 통제 대책의 구축 비용이 예상 손실액보다 클 경우 최고경영진의 승인을 받아 추가 조치 없이 감수함",
    answer: [
      "(A): 위험 회피 (Risk Avoidance)",
      "(B): 위험 전가 (Risk Transfer / 공유)",
      "(C): 위험 완화 (Risk Mitigation / 감소)",
      "(D): 위험 수용 (Risk Acceptance / 보유)",
    ],
    scoringPoints: [
      "4대 전략 명칭 정확히 기술 시 각 0.75점 (총 3점)",
    ],
    explanation:
      "• 위험 처리 4대 전략:\n1. 회피(Avoidance): 위험 사업 포기, 기능 폐쇄\n2. 전가(Transfer): 보험 가입, 아웃소싱\n3. 감소/완화(Mitigation): 기술적/관리적 보안 통제 적용\n4. 수용(Acceptance): 잔여 위험 감수 (DoA 이하, 경영진 결재 필수)",
    examTips:
      "ISMS-P 위험 관리 요구사항에서 매년 출제되는 최빈출 필수 암기 항목입니다.",
  },

  // =================================================================
  // [문제 47] 단답형 (3점) - 정보보호 법률 (접속기록 보관 기준 및 용량)
  // =================================================================
  {
    id: 47,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "개인정보처리시스템 접속기록 보관 기간 및 용량 관리",
    description:
      "개인정보의 안전성 확보조치 기준(고시) 제8조(접속기록의 보관 및 점검)에 규정된 접속기록 보관 기간에 관한 물음이다. 빈칸 (A), (B)에 들어갈 보관 기간 숫자를 기술하시오.",
    scenario:
      "개인정보처리자는 개인정보취급자가 개인정보처리시스템에 접속한 기록을 최소 (  A  ) 이상 보관·관리하여야 한다. 다만, 5만 명 이상의 정보주체에 관하여 개인정보를 처리하거나 고유식별정보 또는 민감정보를 처리하는 시스템의 접속기록은 (  B  ) 이상 보관·관리하여야 한다. 또한 접속기록이 위·변조되거나 분실되지 않도록 정기적으로 백업하고 저장 용량을 주기적으로 점검하여야 한다.",
    answer: [
      "(A): 1년 (또는 1년 이상)",
      "(B): 2년 (또는 2년 이상)",
    ],
    scoringPoints: [
      "(A): 1년 기술 시 (1.5점)",
      "(B): 2년 기술 시 (1.5점)",
    ],
    explanation:
      "• 개인정보 접속기록 보관 기준 (고시 제8조):\n- 일반 개인정보처리시스템: 1년 이상 보관\n- 5만 명 이상 정보주체 처리 또는 고유식별정보(주민등록번호 등)·민감정보 처리 시스템: 2년 이상 보관\n- 접속기록 필수 항목: ID, 접속일시, 접속지(IP), 수행업무(열람, 수정, 삭제 등), 정보주체 정보\n- 점검 주기: 월 1회 이상 정기 점검",
    examTips:
      "접속기록 보관 기간(1년/2년)과 점검 주기(월 1회)는 실기 단답형 1순위 법적 기준입니다.",
  },

  // =================================================================
  // [문제 48] 단답형 (3점) - 모바일 보안 (딥링크 Deeplink)
  // =================================================================
  {
    id: 48,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "모바일 보안",
    title: "모바일 앱 딥링크(Deeplink) 및 인텐트 파라미터 검증 취약점",
    description:
      "모바일 애플리케이션의 특정 화면이나 기능을 외부 URI 링크를 통해 직접 호출하는 딥링크(Deeplink) 기술과 보안 취약점에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "앱이 자체 정의한 커스텀 URL 스킴(예: `myapp://transfer?to=user&amt=1000`)을 처리할 때 전달되는 파라미터 유효성 검증이 미흡하면, 악성 웹페이지나 제3의 악성 앱이 악의적 URI를 호출하여 비인가 송금이나 민감 데이터를 유출시키는 취약점을 (  A  ) 취약점이라고 한다. 이를 방지하기 위해 웹 도메인의 디지털 자산 링크 검증(`/.well-known/assetlinks.json`)을 거쳐 특정 도메인 소유 앱만 안전하게 연결하는 안드로이드의 표준 기술은 (  B  )(Android App Links)이다.",
    answer: [
      "(A): 딥링크 (Deeplink / Custom URL Scheme) 취약점",
      "(B): 앱 링크 (App Links / Android App Links)",
    ],
    scoringPoints: [
      "(A): 딥링크 또는 커스텀 URL 스킴 기술 시 (1.5점)",
      "(B): 앱 링크 또는 App Links 기술 시 (1.5점)",
    ],
    explanation:
      "• Custom URL Scheme(`myapp://`): 어떤 앱이든 동일한 스킴을 선점(Scheme Hijacking)할 수 있어 취약함\n• Android App Links(또는 iOS Universal Links): HTTPS 표준 도메인을 기반으로 OS가 도메인 소유권(assetlinks.json)을 검증하여 오직 인증된 공식 앱만 호출되도록 보장함\n• 대응: 딥링크 파라미터에 대한 엄격한 화이트리스트 검증 및 민감 기능 실행 시 재인증 요구",
    examTips:
      "최신 모바일 웹-앱 연동 취약점 가이드에서 딥링크(Deeplink)와 App Links는 핵심 단답형 문제입니다.",
  },

  // =================================================================
  // [문제 49] 단답형 (3점) - 정보보호 일반 (사이버 킬체인)
  // =================================================================
  {
    id: 49,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "정보보호 일반 & APT 공격",
    title: "사이버 킬체인(Cyber Kill Chain) 7단계 공격 라이프사이클",
    description:
      "지능형 지속 위협(APT) 공격의 전 과정을 7단계로 모델링한 록히드 마틴의 '사이버 킬체인(Cyber Kill Chain)'에 관한 물음이다. 빈칸 (A), (B), (C)에 들어갈 단계를 순서대로 기술하시오.",
    scenario:
      "1단계: 정찰 (Reconnaissance) - 대상 시스템 및 직원 정보 수집\n2단계: (  A  ) (Weaponization) - 원격 접근 악성코드와 취약점 공격 도구를 결합\n3단계: 전달 (Delivery) - 스피어 피싱 이메일 첨부파일, 웹 드라이브 바이 다운로드 등을 통해 전송\n4단계: (  B  ) (Exploitation) - 대상 시스템의 취약점을 촉발하여 악성 코드 실행\n5단계: 설치 (Installation) - 대상 단말기에 지속성(Persistence) 유지를 위한 백도어 설치\n6단계: (  C  ) (Command & Control / C2) - 외부 명령 제어 서버와 암호화 통신 채널 수립\n7단계: 행동 (Actions on Objectives) - 데이터 탈취, 시스템 파괴 등 최종 목적 수행",
    answer: [
      "(A): 무기화 (Weaponization)",
      "(B): 취약점 공격 (Exploitation / 익스플로잇)",
      "(C): 명령 및 제어 (Command and Control / C2 / C&C)",
    ],
    scoringPoints: [
      "(A) 무기화, (B) 취약점 공격, (C) 명령제어/C2 각 1점씩 (총 3점)",
    ],
    explanation:
      "사이버 킬체인은 공격자가 7단계를 순차적으로 거친다는 점에 착안하여, 어느 한 단계에서라도 탐지 및 차단(Break the Chain)에 성공하면 전체 사이버 공격을 무력화할 수 있다는 선제 방어 프레임워크입니다.",
    examTips:
      "킬체인 7단계의 명칭 순서와 특히 2단계(무기화), 4단계(취약점 공격), 6단계(명령제어)는 단답형 초빈출입니다.",
  },

  // =================================================================
  // [문제 50] 단답형 (3점) - 애플리케이션 보안 (SSRF)
  // =================================================================
  {
    id: 50,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "서버 측 요청 위조(SSRF, Server-Side Request Forgery) 공격",
    description:
      "웹 애플리케이션 취약점 중 OWASP Top 10에 등재된 서버 측 요청 위조(SSRF) 공격에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어와 IP 주소를 기술하시오.",
    scenario:
      "웹 서버가 사용자가 제공한 URL로 원격 자원을 다운로드하거나 대리 요청을 수행하는 기능의 취약점을 악용하여, 공격자가 내부망 사설 IP(192.168.x.x, 127.0.0.1 등)나 클라우드 메타데이터 서비스에 대리 접근하도록 유도하는 공격을 (  A  )(Server-Side Request Forgery)라고 한다. 특히 AWS 환경에서는 링크-로컬 IP인 (  B  )의 메타데이터 서비스에 접근하여 IAM 임시 보안 자격증명을 탈취하는 데 흔히 악용된다.",
    answer: [
      "(A): SSRF (또는 Server-Side Request Forgery / 서버 측 요청 위조)",
      "(B): 169.254.169.254",
    ],
    scoringPoints: [
      "(A): SSRF 또는 서버 측 요청 위조 기술 시 (1.5점)",
      "(B): 169.254.169.254 정확히 기술 시 (1.5점)",
    ],
    explanation:
      "• SSRF(Server-Side Request Forgery): 외부 방화벽을 우회하여 웹 서버 권한으로 내부 네트워크 자원을 스캔하거나 제어하는 공격\n• 169.254.169.254: 클라우드 인스턴스 메타데이터 서비스(IMDSv1)의 기본 IP로, `http://169.254.169.254/latest/meta-data/iam/security-credentials/` 경로를 통해 IAM Role 토큰 탈취 가능\n• 방어: 화이트리스트 URL 검증, 사설 IP 대역(RFC 1918) 요청 차단, IMDSv2(토큰 헤더 요구) 활성화",
    examTips:
      "SSRF의 개념과 클라우드 메타데이터 IP(169.254.169.254)는 최신 기출문제에 반드시 출제되는 핵심 포인트입니다.",
  },

  // =================================================================
  // [문제 51] 단답형 (3점) - 시스템 보안 (lsof 명령어)
  // =================================================================
  {
    id: 51,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 파일 및 프로세스 네트워크 소켓 감사 (lsof 명령어)",
    description:
      "리눅스 시스템에서 프로세스가 열고 있는 파일 디스크립터와 네트워크 포트 소켓을 추적하는 감사 명령어에 관한 설명이다. 빈칸 (A), (B)에 들어갈 명령어와 옵션을 기술하시오.",
    scenario:
      "리눅스는 소켓과 디바이스를 포함한 모든 자원을 파일로 취급한다. 시스템에서 현재 열려 있는 모든 파일 및 소켓 정보를 조회하는 명령어는 (  A  )(List Open Files)이다. 침해사고 분석 시 특정 포트(예: 8080)를 열고 외부와 통신 중인 프로세스를 식별하기 위해 사용하는 옵션 조합은 `(  A  ) (  B  ):8080`이다.",
    answer: [
      "(A): lsof",
      "(B): -i (또는 -i :8080)",
    ],
    scoringPoints: [
      "(A): lsof 명령어 기술 시 (1.5점)",
      "(B): -i 옵션 기술 시 (1.5점)",
    ],
    explanation:
      "• `lsof` 주요 옵션:\n- `lsof -i :포트`: 특정 포트를 사용하는 프로세스 및 연결 상태 확인\n- `lsof -i tcp`: 모든 TCP 연결 소켓 확인\n- `lsof -p PID`: 특정 PID가 오픈하고 있는 파일 경로 확인\n- `lsof -u 사용자`: 특정 사용자가 실행하여 열어둔 파일 확인\n악성 백도어나 의심스러운 네트워크 소켓을 추적할 때 netstat/ss와 함께 가장 널리 쓰이는 명령어입니다.",
    examTips:
      "lsof의 기본 명령어 명칭과 네트워크 확인 옵션(-i)은 실기 시스템 분석의 단골 문제입니다.",
  },

  // =================================================================
  // [문제 52] 단답형 (3점) - 시스템 보안 (lastb 및 /var/log/btmp)
  // =================================================================
  {
    id: 52,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 실패 로그인 기록 점검 (/var/log/btmp 및 lastb)",
    description:
      "리눅스 시스템에서 SSH나 콘솔을 통한 비인가자의 무차별 대입(Brute Force) 공격 시도를 탐지하기 위한 로그 파일 및 명령어에 관한 설명이다. 빈칸 (A), (B)에 들어갈 로그 파일명과 명령어를 기술하시오.",
    scenario:
      "리눅스 시스템에서 사용자 계정 로그인에 실패한 모든 이력(실패 계정명, 접속 시도 IP, 시각)은 바이너리 형식으로 (  A  ) 파일에 기록된다. 보안 관리자는 이 실패 로그를 조회하여 외부에서의 사전 공격이나 크리덴셜 스터핑 시도를 분석하기 위해 (  B  ) 명령어를 사용한다.",
    answer: [
      "(A): /var/log/btmp (또는 btmp)",
      "(B): lastb",
    ],
    scoringPoints: [
      "(A): /var/log/btmp 또는 btmp 기술 시 (1.5점)",
      "(B): lastb 명령어 기술 시 (1.5점)",
    ],
    explanation:
      "• 리눅스 3대 로그인 로그 비교:\n- 성공 로그인: `/var/log/wtmp` -> `last` 명령어로 조회\n- 실패 로그인: `/var/log/btmp` -> `lastb` 명령어로 조회\n- 현재 접속자: `/var/run/utmp` -> `who`, `w`, `users` 명령어로 조회\n모두 바이너리 형식이므로 vi로 직접 볼 수 없고 전용 명령어를 사용해야 합니다.",
    examTips:
      "wtmp(last) vs btmp(lastb) vs utmp(who)의 파일 경로와 조회 명령어 매핑은 무조건 외워야 합니다.",
  },

  // =================================================================
  // [문제 53] 단답형 (3점) - 네트워크 보안 (Static VLAN, Dynamic VLAN, show vlan)
  // =================================================================
  {
    id: 53,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "가상 랜(VLAN) 정적/동적 구성 방식 및 확인 명령어",
    description:
      "스위치 네트워크를 브로드캐스트 도메인 단위로 논리적으로 분할하는 VLAN(Virtual LAN)의 구성 방식과 확인 명령어에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 용어와 명령어를 기술하시오.",
    scenario:
      "• 스위치의 물리적 포트마다 고정적으로 VLAN ID를 매핑하는 가장 일반적인 방식을 (  A  ) VLAN(Port-based VLAN)이라고 한다.\n• 접속하는 단말기의 MAC 주소를 기반으로 스위치가 VLAN을 자동 할당하는 방식을 (  B  ) VLAN이라고 한다.\n• Cisco 스위치 CLI에서 현재 장비에 생성된 모든 VLAN 번호, 이름, 할당된 포트 상태를 확인하는 명령어는 (  C  )(또는 show vlan brief)이다.",
    answer: [
      "(A): Static VLAN (또는 정적 VLAN / 포트 기반 VLAN)",
      "(B): Dynamic VLAN (또는 동적 VLAN / MAC 기반 VLAN)",
      "(C): show vlan (또는 show vlan brief)",
    ],
    scoringPoints: [
      "(A) Static/정적, (B) Dynamic/동적, (C) show vlan/show vlan brief 각 1점씩 (총 3점)",
    ],
    explanation:
      "• Static VLAN(정적 VLAN): 관리자가 포트별로 수동 할당 (안정적, 이동 시 수동 재구성 필요)\n• Dynamic VLAN(동적 VLAN): VMPS(VLAN Management Policy Server)에 등록된 MAC 주소를 기반으로 포트가 동적으로 VLAN을 할당받음\n• `show vlan brief`: VLAN ID, 이름, 상태(Active), 할당 포트 확인 명령어",
    examTips:
      "VLAN 구성 2대 방식(Static, Dynamic)과 Cisco 스위치 확인 명령어는 네트워크 실무 기초 단답형 문제입니다.",
  },

  // =================================================================
  // [문제 54] 단답형 (3점) - 정보보호 관리 (정보자산 중요도 및 자산 그룹핑)
  // =================================================================
  {
    id: 54,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "정보자산 중요도 평가 및 CIA 기준 자산 그룹핑(Grouping)",
    description:
      "ISMS-P 인증 기준 중 자산 식별 및 가치 평가(Asset Valuation) 프로세스에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "조직의 정보자산 중요도를 산정할 때 정보보안 3대 특성인 (  A  )(Confidentiality), 무결성(Integrity), 가용성(Availability)에 미치는 손실 영향을 각각 등급화(예: 1~3등급)하여 최종 자산 가치를 도출한다. 또한 수많은 정보자산에 대해 효율적인 위험 평가와 통제 대책을 수립하기 위하여 운영 목적, 보안 요구사항, 관리 부서가 유사한 자산들을 묶는 단계를 자산 (  B  )(Asset Grouping)이라고 한다.",
    answer: [
      "(A): 기밀성 (Confidentiality)",
      "(B): 그룹핑 (또는 자산 그룹핑 / Asset Grouping / 그룹화)",
    ],
    scoringPoints: [
      "(A): 기밀성 또는 Confidentiality 기술 시 (1.5점)",
      "(B): 그룹핑 또는 자산 그룹핑 / 그룹화 기술 시 (1.5점)",
    ],
    explanation:
      "• 자산 가치 평가: CIA(기밀성, 무결성, 가용성)를 기준으로 침해 시 조직에 미치는 재무적/법적/평판적 영향을 종합 평가함\n• 자산 그룹핑(Asset Grouping): 개별 서버나 PC마다 평가할 수 없으므로 '웹 서버군', 'DB 서버군', '개발 PC' 등으로 그룹화하여 위험 평가와 보안 대책의 일관성을 확보함",
    examTips:
      "자산 식별 -> 자산 분류/그룹핑 -> 자산 가치 산정(CIA)으로 이어지는 ISMS-P 흐름을 기억하세요.",
  },

  // =================================================================
  // [문제 55] 단답형 (3점) - 웹 애플리케이션 보안 (세션 쿠키 vs 영속 쿠키 & 보안 속성)
  // =================================================================
  {
    id: 55,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "웹 애플리케이션 보안",
    title: "HTTP 쿠키 유형(세션 쿠키 vs 영속 쿠키)과 보안 플래그",
    description:
      "웹 브라우저 쿠키(Cookie)의 수명 주기와 보안 속성에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "• 만료일(Expires 또는 Max-Age) 속성이 지정되지 않아 브라우저 메모리에만 상주하고 브라우저가 종료되면 즉시 자동 삭제되는 쿠키를 (  A  ) 쿠키(Session Cookie)라고 한다.\n• 만료일이 지정되어 브라우저가 닫혀도 로컬 디스크 파일에 저장되어 만료 시점까지 유지되는 쿠키를 (  B  ) 쿠키(Persistent Cookie)라고 한다.\n• 쿠키 생성 시 자바스크립트의 `document.cookie`를 통한 접근을 차단하여 XSS 공격 시 세션 탈취를 방지하는 보안 속성은 (  C  )이다.",
    answer: [
      "(A): 세션 (Session) 쿠키",
      "(B): 영속 (Persistent / 영속성 / 지속성) 쿠키",
      "(C): HttpOnly",
    ],
    scoringPoints: [
      "(A): 세션 쿠키 (1점)",
      "(B): 영속 쿠키 또는 Persistent Cookie (1점)",
      "(C): HttpOnly (1점)",
    ],
    explanation:
      "• 세션 쿠키: 메모리 보관, 세션 종료 시 소멸\n• 영속 쿠키: 디스크 보관, 장기 자동 로그인/장바구니에 활용\n• 쿠키 3대 보안 플래그:\n- `HttpOnly`: 스크립트 접근 차단 (XSS 방어)\n- `Secure`: HTTPS 암호화 채널에서만 전송\n- `SameSite`: 서드파티 크로스 사이트 요청 전송 제한 (CSRF 방어)",
    examTips:
      "세션 쿠키 vs 영속 쿠키의 차이와 HttpOnly, Secure, SameSite 플래그는 필기/실기 공통 최빈출 주제입니다.",
  },

  // =================================================================
  // [문제 56] 단답형 (3점) - 네트워크 보안 (Smurfing & Directed Broadcast)
  // =================================================================
  {
    id: 56,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "ICMP Smurf(스머프) 증폭 공격 메커니즘과 방어 설정",
    description:
      "서비스 거부(DoS) 공격 중 ICMP 반사 증폭 공격인 스머핑(Smurfing)에 관한 설명이다. 빈칸 (A), (B)에 들어갈 패킷 종류와 라우터 방어 명령어를 기술하시오.",
    scenario:
      "공격자가 출발지 IP 주소를 피해자(희생자)의 IP로 위조(Spoofing)한 후, 증폭 네트워크의 브로드캐스트 주소로 (  A  )(ICMP Echo Request) 패킷을 전송하면, 해당 서브넷의 모든 활성 호스트들이 일제히 피해자 IP로 ICMP Echo Reply를 응답하여 피해자의 회선 대역폭을 고갈시킨다. 이를 방어하기 위해 네트워크 경계 라우터 인터페이스에서 외부 브로드캐스트 유입을 차단하는 Cisco 명령어는 `no ip (  B  )`이다.",
    answer: [
      "(A): ICMP Echo Request (또는 ICMP 에코 요청 / ICMP Type 8)",
      "(B): directed-broadcast (또는 no ip directed-broadcast)",
    ],
    scoringPoints: [
      "(A): ICMP Echo Request 또는 에코 요청 기술 시 (1.5점)",
      "(B): directed-broadcast 기술 시 (1.5점)",
    ],
    explanation:
      "• Smurf 공격 메커니즘:\n1. 공격자 -> 희생자 IP 위조 후 증폭 네트워크로 ICMP Echo Request 브로드캐스트\n2. 서브넷 내 수백 대의 호스트 -> 희생자에게 대량의 Echo Reply 집중 전송 (증폭 DoS)\n• 대응:\n- 라우터에서 `no ip directed-broadcast` 적용\n- 호스트 OS에서 브로드캐스트 핑 응답 거부 (`net.ipv4.icmp_echo_ignore_broadcasts = 1`)",
    examTips:
      "스머프 공격의 Echo Request/Reply 패킷과 라우터의 'no ip directed-broadcast' 명령어는 단답형의 단골 문제입니다.",
  },

  // =================================================================
  // [문제 57] 단답형 (3점) - 정보보호 법률 (개인정보 물리적 안전조치 3대 항목)
  // =================================================================
  {
    id: 57,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "개인정보 안전성 확보조치 기준: 물리적 안전조치 3대 통제 항목",
    description:
      "개인정보의 안전성 확보조치 기준(고시) 제10조(물리적 안전조치)에 규정된 3대 통제 항목에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 조치 내용을 기술하시오.",
    scenario:
      "1. 전산실, 자료보관실 등 개인정보를 보관하고 있는 물리적 보관 장소에 대하여 (  A  )(설정)를 하여야 한다.\n2. 출입통제 절차를 수립·운영하고 출입 인가권자 외 비인가자의 출입을 엄격히 제한하는 (  B  ) 대책을 마련하여야 한다.\n3. 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 반출·반입 시 (  C  ) 대장을 작성하여 관리하여야 한다.",
    answer: [
      "(A): 통제구역 지정 (또는 통제구역 설정)",
      "(B): 출입통제 (또는 출입통제 절차 수립)",
      "(C): 반입·반출 관리 (또는 반출입 통제 관리 / 반출입 대장 작성)",
    ],
    scoringPoints: [
      "(A) 통제구역 지정, (B) 출입통제, (C) 반입·반출 관리 각 1점씩 (총 3점)",
    ],
    explanation:
      "• 개인정보의 안전성 확보조치 기준 제10조(물리적 안전조치):\n1. 통제구역 지정: 전산실, 자료보관실 등 민감 장소를 통제구역으로 설정\n2. 출입통제: 출입증, 생체인식, 출입기록부 작성 등으로 비인가자 출입 방지\n3. 반입·반출 관리: 외장하드, USB 등 보조저장매체의 반출입 승인 및 관리 대장 작성 의무화",
    examTips:
      "안전성 확보조치 기준의 물리적 3대 조치(통제구역 지정, 출입통제, 반입반출관리)는 법률 단답형의 핵심 암기 사항입니다.",
  },

  // =================================================================
  // [문제 58] 단답형 (3점) - 네트워크 보안 (NetBIOS 취약점 및 보안 설정)
  // =================================================================
  {
    id: 58,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "윈도우 NetBIOS over TCP/IP(NBT) 서비스 취약점 및 보안 설정",
    description:
      "윈도우 시스템에서 근거리 네트워크 통신에 사용되는 NetBIOS over TCP/IP(NBT)의 취약한 이유와 보안 대책에 관한 설명이다. 빈칸 (A), (B)에 들어갈 포트 번호와 취약 원인을 기술하시오.",
    scenario:
      "NetBIOS over TCP/IP(NBT)는 TCP/UDP (  A  )번 포트(137: 네임 서비스, 138: 데이터그램, 139: 세션)를 사용한다. NBT는 아이디/패스워드 없이 익명으로 연결되는 (  B  )(Null Session)을 허용하여, 공격자가 원격에서 시스템의 사용자 계정 목록, 공유 폴더, 보안 정책을 무단 열거(Enumeration)할 수 있는 치명적 약점이 있다. 이를 방어하기 위해 인터넷에 연결된 서버는 네트워크 어댑터 TCP/IP 고급 설정에서 NetBIOS over TCP/IP를 '사용 안 함(Disable)'으로 설정하거나 방화벽에서 해당 포트를 차단해야 한다.",
    answer: [
      "(A): 137~139 (또는 137, 138, 139)",
      "(B): 널 세션 (Null Session / 익명 연결)",
    ],
    scoringPoints: [
      "(A): 137, 138, 139 포트 기술 시 (1.5점)",
      "(B): 널 세션 또는 Null Session 기술 시 (1.5점)",
    ],
    explanation:
      "• NetBIOS over TCP/IP 포트: 137(Name), 138(Datagram), 139(Session)\n• 취약한 이유: Null Session(`net use \\\\target\\ipc$ \"\" /u:\"\"`)을 통해 익명 접속이 가능하여 공격자가 nbtstat, enum4linux 등으로 SID, 계정명, 공유 목록을 전부 탈취할 수 있음\n• 대응: TCP/IP 고급 WINS 설정에서 'NetBIOS over TCP/IP 사용 안 함' 선택 및 경계 방화벽에서 137~139 포트 차단",
    examTips:
      "NetBIOS 3대 포트(137~139)와 널 세션(Null Session) 취약점, 비활성화 보안 설정은 단답형으로 매우 자주 출제됩니다.",
  },

  // =================================================================
  // [문제 59] 단답형 (3점) - 정보보호 관리 (자산 중요도 설정)
  // =================================================================
  {
    id: 59,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "위험분석 시 자산 중요도 설정 개념 및 고려사항",
    description:
      "정보보호 위험분석에서 정보자산의 가치를 평가하고 중요도를 산정할 때의 핵심 원칙에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "(A): 자산의 중요도는 해당 자산이 침해되었을 때 조직에 미치는 영향을 정보보안의 3대 요소인 기밀성, (  A  ), 가용성 관점에서 각각 등급화(1~3등급 또는 1~5점)하여 산정한다.\n(B): 자산 중요도 설정 시 단순 시스템 구축 비용뿐 아니라 업무 중단 시 발생하는 손실 규모를 파악하는 업무 영향도 분석인 (  B  )(Business Impact Analysis) 결과를 필수적으로 반영해야 한다.\n(C): 자산의 기술적 특성뿐 아니라 해당 자산의 업무적 가치를 가장 잘 이해하고 있는 (  C  )(Asset Owner)의 참여 하에 중요도가 최종 결정되어야 한다.",
    answer: [
      "(A): 무결성 (Integrity)",
      "(B): BIA (Business Impact Analysis / 업무 영향도 분석)",
      "(C): 자산 소유자 (또는 자산 관리책임자 / Asset Owner)",
    ],
    scoringPoints: [
      "(A): 무결성 또는 Integrity (1점)",
      "(B): BIA 또는 업무 영향도 분석 (1점)",
      "(C): 자산 소유자 또는 Asset Owner (1점)",
    ],
    explanation:
      "• 자산 중요도 산정 개념: 자산의 물리적 가치(하드웨어 가격)가 아닌, 해당 자산이 유출·위변조·파괴되었을 때 조직의 비즈니스에 미치는 영향(CIA 손실액)을 기준으로 산정함\n• 중요 고려사항:\n1. BIA(업무 영향도 분석)와의 연계: 핵심 비즈니스 프로세스와의 의존도 파악\n2. 법적/규제 요구사항: 개인정보, 전자금융거래법 등 법정 보호 의무 자산 가중치 반영\n3. 자산 소유자(Owner) 참여: 실무 부서 책임자의 가치 판단 반영",
    examTips:
      "자산 가치 산정 시 '구축 비용'이 아닌 '손실 영향도(CIA + BIA)' 기준이라는 점과 '자산 소유자 참여'가 핵심 채점 포인트입니다.",
  },

  // =================================================================
  // [문제 60] 단답형 (3점) - 시스템 보안 (쉘의 정의와 기능)
  // =================================================================
  {
    id: 60,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "운영체제 쉘(Shell)의 정의와 4대 핵심 기능",
    description:
      "리눅스/유닉스 운영체제 환경에서 사용자와 커널 간의 상호작용을 담당하는 쉘(Shell)에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "• 쉘(Shell)은 사용자가 입력한 명령어를 해석하여 운영체제의 핵심인 (  A  )(Kernel)에 전달하고 그 결과를 반환하는 명령어 해석기(Command Interpreter)이다.\n• 한 명령어의 표준 출력을 다음 명령어의 표준 입력으로 직접 연결해 주는 기능을 (  B  )(Pipe, 기호 `|`)라고 한다.\n• 명령어의 표준 입력, 표준 출력, 표준 에러의 대상을 화면/키보드가 아닌 파일이나 디바이스로 변경하는 기능을 입출력 (  C  )(Redirection, 기호 `<`, `>`, `>>`)라고 한다.",
    answer: [
      "(A): 커널 (Kernel)",
      "(B): 파이프 (Pipe)",
      "(C): 리다이렉션 (또는 방향 재지정 / Redirection)",
    ],
    scoringPoints: [
      "(A): 커널 또는 Kernel (1점)",
      "(B): 파이프 또는 Pipe (1점)",
      "(C): 리다이렉션 또는 방향 재지정 (1점)",
    ],
    explanation:
      "• 쉘(Shell)의 정의: 사용자 <-> 쉘(명령어 해석기) <-> 커널(하드웨어 제어)\n• 쉘의 4대 핵심 기능:\n1. 명령어 해석 및 실행 (내장/외장 명령어 처리)\n2. 프로세스 제어 (포그라운드 및 백그라운드 `&` 실행)\n3. 입출력 방향 재지정(Redirection) 및 파이프라인(Pipe `|`)\n4. 환경 변수 관리 및 쉘 스크립트 프로그래밍 (제어문, 루프, 함수 지원)",
    examTips:
      "쉘의 정의(커널과 사용자 사이의 명령어 해석기)와 파이프/리다이렉션의 역할은 시스템 기초 단답형의 필수입니다.",
  },

  // =================================================================
  // [문제 61] 단답형 (3점) - 데이터베이스 보안 (Oracle 감사 정책)
  // =================================================================
  {
    id: 61,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "데이터베이스 보안",
    title: "Oracle 데이터베이스 감사 정책 (Audit Policy)",
    description:
      "오라클 데이터베이스에서 데이터 위·변조 및 이상 행위를 추적하기 위한 감사(Auditing) 기법에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "• 오라클 DB에서 특정 테이블이나 뷰에 대해 SELECT, INSERT, UPDATE, DELETE 등 DML 명령어가 실행될 때 감사를 수행하도록 설정하는 기본 감사 유형을 (  A  ) 감사(Object Auditing)라고 한다.\n• 단순 테이블 접근 여부를 넘어, 특정 조건(예: '급여 > 1000만원' 또는 '특정 IP에서 접속')을 만족하는 세부 데이터 행(Row)과 컬럼 단위로 정밀하게 감사를 기록하는 오라클 고유의 미세 조정 감사 기능을 (  B  )(Fine-Grained Auditing)라고 한다.",
    answer: [
      "(A): 객체 (Object / 객체 감사)",
      "(B): FGA (또는 Fine-Grained Auditing / 미세 조정 감사)",
    ],
    scoringPoints: [
      "(A): 객체 또는 Object (1.5점)",
      "(B): FGA 또는 Fine-Grained Auditing / 미세 조정 감사 (1.5점)",
    ],
    explanation:
      "• 오라클 전통 감사 3종:\n1. 문장 감사(Statement Auditing): 특정 SQL 문장 실행 감사 (예: AUDIT TABLE)\n2. 권한 감사(Privilege Auditing): 시스템 권한 사용 감사 (예: AUDIT CREATE USER)\n3. 객체 감사(Object Auditing): 특정 테이블/뷰에 대한 작업 감사 (예: AUDIT SELECT ON emp)\n• FGA(Fine-Grained Auditing): `DBMS_FGA` 패키지를 통해 특정 조건문(WHERE 절)에 부합하는 정밀 감사 수행 (불필요한 감사 로그 폭증 방지)",
    examTips:
      "DBMS 감사 정책 중 FGA(Fine-Grained Auditing)와 Object Auditing의 차이는 단답형으로 자주 출제됩니다.",
  },

  // =================================================================
  // [문제 62] 단답형 (3점) - 네트워크 보안 (Telnet vs SSH & vsFTP vs SFTP)
  // =================================================================
  {
    id: 62,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "원격 관리 프로토콜의 평문 통신 취약점 및 안전한 대체 프로토콜",
    description:
      "원격 서버 관리 및 파일 전송 시 사용되는 레거시 프로토콜의 취약점과 안전한 암호화 프로토콜 전환에 관한 설명이다. 빈칸 (A), (B)에 들어갈 프로토콜 명칭을 기술하시오.",
    scenario:
      "• TCP 23번 포트를 사용하는 원격 접속 프로토콜인 Telnet과 TCP 21번을 사용하는 vsftpd(FTP)는 계정 패스워드와 전송 데이터를 (  A  )(Plaintext)으로 전송하여 스니핑(Sniffing) 공격에 취약하다.\n• 따라서 리눅스 보안 가이드에 따라 Telnet은 비대칭키 및 대칭키 기반의 암호화 터널을 제공하는 TCP 22번 포트의 (  B  )(Secure Shell)로 대체하고, FTP는 SSH 서브시스템 기반의 SFTP 또는 SSL/TLS를 결합한 FTPS로 전환하여야 한다.",
    answer: [
      "(A): 평문 (Plaintext / 암호화되지 않은 평문)",
      "(B): SSH (Secure Shell)",
    ],
    scoringPoints: [
      "(A): 평문 또는 Plaintext (1.5점)",
      "(B): SSH 또는 Secure Shell (1.5점)",
    ],
    explanation:
      "• 레거시 프로토콜(Telnet, FTP, rlogin, HTTP)은 인증 정보 및 데이터가 암호화되지 않고 평문으로 전송되어 Wireshark 등의 패킷 캡처 도구로 계정 정보가 즉시 노출됨\n• 안전한 대체:\n- Telnet(23) -> SSH(22)\n- FTP(21) -> SFTP(22) 또는 FTPS(990/21 with TLS)\n- HTTP(80) -> HTTPS(443)",
    examTips:
      "주요 취약 서비스의 평문 전송 위험과 SSH(22번) 및 SFTP 대체 원칙은 주요 보안 점검 항목의 기본입니다.",
  },

  // =================================================================
  // [문제 63] 단답형 (3점) - 네트워크 보안 (RARP 프로토콜)
  // =================================================================
  {
    id: 63,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "RARP(Reverse Address Resolution Protocol)의 개념 및 동작",
    description:
      "TCP/IP 네트워크 계층의 주소 변환 프로토콜에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 프로토콜 명칭을 기술하시오.",
    scenario:
      "• IP 주소를 기반으로 상대방의 물리적 하드웨어 주소(MAC 주소)를 알아내기 위해 사용하는 프로토콜은 ARP(Address Resolution Protocol)이다.\n• 반대로, 디스크가 없는 임베디드 단말기(Diskless Host)나 씬 클라이언트가 부팅 시 자신의 물리적 하드웨어 주소(MAC)는 알고 있으나 자신의 논리적 IP 주소를 모를 때, 브로드캐스트 질의를 통해 RARP 서버로부터 IP 주소를 할당받기 위해 사용하는 프로토콜은 (  A  )(Reverse Address Resolution Protocol)이다. (이 프로토콜은 이후 BOOTP와 (  B  )로 발전하여 대체되었다.)",
    answer: [
      "(A): RARP (Reverse Address Resolution Protocol)",
      "(B): DHCP (Dynamic Host Configuration Protocol)",
    ],
    scoringPoints: [
      "(A): RARP 또는 Reverse ARP (1.5점)",
      "(B): DHCP (1.5점)",
    ],
    explanation:
      "• ARP: IP 주소 -> MAC 주소 변환\n• RARP: MAC 주소 -> IP 주소 변환 (데이터링크 계층 헤더에 RARP 요청 브로드캐스트)\n• 발전 과정: RARP (IP만 제공, 라우터 통과 불가) -> BOOTP (IP, 서브넷, 게이트웨이 제공, UDP 사용) -> DHCP (IP 자동 대여 및 동적 회수 기능 추가)",
    examTips:
      "ARP(IP->MAC)와 RARP(MAC->IP)의 변환 방향 차이 및 후속 프로토콜(DHCP)과의 관계를 기억하세요.",
  },

  // =================================================================
  // [문제 64] 단답형 (3점) - 정보보호 관리 (CISO와 CIO 직무 분리)
  // =================================================================
  {
    id: 64,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "CISO와 CIO의 역할 정의 및 CISO 겸직 금지 법적 규정",
    description:
      "전자금융거래법 및 정보통신망법상 정보보호최고책임자(CISO)와 최고정보관리책임자(CIO)의 역할 분담 및 겸직 제한에 관한 설명이다. 빈칸 (A), (B)에 들어갈 직무 약어를 기술하시오.",
    scenario:
      "• 기업의 정보화 사업 추진 및 IT 인프라 구축·운영을 총괄하는 책임자는 (  A  )(Chief Information Officer)이다.\n• 정보통신시스템의 보안 정책 수립, 침해사고 예방 및 사후 조치를 전담하는 책임자는 (  B  )(Chief Information Security Officer)이다.\n• 정보화 추진(비용 절감, 편의성 추구)과 정보보호(통제, 보안성 확보) 간의 상충 문제를 방지하기 위해, 일정 규모 이상의 기업에서는 (  B  )가 (  A  ) 등 다른 정보기술 직무를 겸직할 수 없도록 법으로 엄격히 금지하고 있다.",
    answer: [
      "(A): CIO (Chief Information Officer / 최고정보책임자)",
      "(B): CISO (Chief Information Security Officer / 정보보호최고책임자)",
    ],
    scoringPoints: [
      "(A): CIO 기술 시 (1.5점)",
      "(B): CISO 기술 시 (1.5점)",
    ],
    explanation:
      "• CIO: 정보기술(IT) 도입, 시스템 개발, 업무 효율화 및 시스템 가용성 극대화 추구\n• CISO: 정보보호 계획 수립, 보안 통제, 취약점 점검, 정보 유출 방지 추구\n• CISO 겸직 금지: CIO가 CISO를 겸직할 경우 정보화 사업 일정이나 비용 절감을 위해 보안 요구사항을 축소·은폐할 위험이 있으므로, 자산총액 5조원 이상 기업 등은 CISO 겸직 금지가 법제화됨",
    examTips:
      "CIO와 CISO의 관점 차이(가용성/효율성 vs 기밀성/통제)와 CISO 겸직 금지 법령 취지는 단답형 및 서술형 단골 주제입니다.",
  },

  // =================================================================
  // [문제 65] 단답형 (3점) - 네트워크 보안 (SNMP 프로토콜 보안)
  // =================================================================
  {
    id: 65,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "SNMP 프로토콜 버전별 보안 메커니즘 (Community String vs SNMPv3)",
    description:
      "네트워크 장비 모니터링에 사용되는 SNMP(Simple Network Management Protocol)의 취약점과 보안 강화 버전에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "• SNMPv1과 SNMPv2c는 인증을 위해 (  A  ) String(예: public, private)을 사용하지만, 이 값이 암호화되지 않은 평문으로 전송되어 스니핑에 노출되는 치명적인 취약점이 있다.\n• 이를 해결하기 위해 사용자 기반 보안 모델(USM)과 뷰 기반 접근 통제(VACM)를 도입하여 메시지 인증(SHA/MD5), 무결성, 기밀성(AES/DES 암호화)을 모두 제공하는 최신 안전한 버전은 (  B  )이다.",
    answer: [
      "(A): 커뮤니티 (Community / Community String)",
      "(B): SNMPv3 (또는 SNMP 버전 3)",
    ],
    scoringPoints: [
      "(A): Community 또는 커뮤니티 (1.5점)",
      "(B): SNMPv3 또는 SNMP 버전 3 (1.5점)",
    ],
    explanation:
      "• SNMPv1 / v2c:\n- 인증 방식으로 평문 Community String 사용 (읽기용: public, 쓰기용: private 기본값 유지 시 심각한 보안 위협)\n- 기밀성 기능 부재\n• SNMPv3 3대 보안 레벨:\n1. noAuthNoPriv: 인증 X, 암호화 X\n2. authNoPriv: 인증 O(HMAC-MD5/SHA), 암호화 X\n3. authPriv: 인증 O, 암호화 O(DES/AES)",
    examTips:
      "Community String의 평문 전송 취약점과 SNMPv3의 보안 모델(USM, VACM, authPriv)은 시험 빈출입니다.",
  },

  // =================================================================
  // [문제 66] 단답형 (3점) - 소프트웨어 관리 (업데이트 vs 업그레이드)
  // =================================================================
  {
    id: 66,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "소프트웨어 관리",
    title: "보안 업데이트(Update)와 소프트웨어 업그레이드(Upgrade)의 차이",
    description:
      "시스템 및 소프트웨어 형상 관리에서 사용하는 업데이트(Update)와 업그레이드(Upgrade)의 개념적 차이에 관한 설명이다. 빈칸 (A), (B)에 들어갈 용어를 기술하시오.",
    scenario:
      "• 동일한 주 버전(Major Version) 내에서 발견된 보안 취약점을 패치(Security Patch)하거나 소규모 버그를 수정하는 마이너(Minor) 변경 작업을 (  A  )(Update)라고 한다.\n• 소프트웨어의 핵심 구조, 데이터베이스 스키마 또는 주요 기능이 완전히 변경되어 새로운 주 버전으로 교체되는 메이저(Major) 변경 작업을 (  B  )(Upgrade)라고 한다.",
    answer: [
      "(A): 업데이트 (Update / 패치)",
      "(B): 업그레이드 (Upgrade)",
    ],
    scoringPoints: [
      "(A): 업데이트 또는 Update (1.5점)",
      "(B): 업그레이드 또는 Upgrade (1.5점)",
    ],
    explanation:
      "• 업데이트(Update): 예) v2.1.3 -> v2.1.4 (보안 패치, 핫픽스, 호환성 유지, 무중단 적용 가능)\n• 업그레이드(Upgrade): 예) Python 2 -> Python 3, Windows 10 -> 11 (신규 기능, 성능 향상, 기존 API 비호환 가능성 존재하므로 철저한 회귀 테스트 및 변경 관리 필요)",
    examTips:
      "소프트웨어 수명주기 및 취약점 패치 관리(업데이트)와 시스템 갱신(업그레이드)의 개념 차이를 숙지하세요.",
  },

  // =================================================================
  // [문제 67] 단답형 (3점) - 웹 보안 (HTTP Method: OPTIONS, HEAD, TRACE)
  // =================================================================
  {
    id: 67,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "웹 애플리케이션 보안",
    title: "HTTP 메서드(OPTIONS, HEAD, TRACE)의 기능 및 보안 취약점",
    description:
      "웹 서버가 지원하는 HTTP 요청 메서드(Methods)의 동작과 보안 위협에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 HTTP 메서드명을 각각 기술하시오.",
    scenario:
      "• (  A  ): 대상 리소스에 대해 서버가 허용하는 HTTP 메서드 목록(Allow 헤더)을 조회하는 메서드로, 공격자의 공격 표면(Attack Surface) 정찰에 악용됨\n• (  B  ): GET 메서드와 동일한 요청을 보내지만, 본문(Body)은 제외하고 HTTP 응답 헤더만 수신하여 캐시 갱신 여부나 링크 유효성을 검사하는 메서드\n• (  C  ): 클라이언트가 보낸 요청 메시지를 서버가 그대로 에코(반사)하여 반환하는 디버깅용 메서드로, XSS 공격과 결합 시 HttpOnly 플래그가 설정된 쿠키까지 탈취할 수 있는 XST(Cross-Site Tracing) 공격을 유발하므로 웹 서버에서 반드시 비활성화해야 함",
    answer: [
      "(A): OPTIONS",
      "(B): HEAD",
      "(C): TRACE",
    ],
    scoringPoints: [
      "(A): OPTIONS (1점)",
      "(B): HEAD (1점)",
      "(C): TRACE (1점)",
    ],
    explanation:
      "• 주요 HTTP 메서드 보안 점검:\n- GET / POST: 정상 비즈니스 로직용 기본 메서드\n- HEAD: 헤더만 수신 (정상)\n- OPTIONS: 웹서버 지원 메서드 확인 (CORS 사전 요청 등에 활용)\n- TRACE: 요청 헤더를 Body에 반사 -> XST(Cross-Site Tracing) 공격으로 쿠키 탈취 가능 -> 비활성화 필수\n- PUT / DELETE: 임의 파일 업로드 및 삭제 위험 -> 웹 서버에서 차단 필수",
    examTips:
      "TRACE 메서드의 XST(Cross-Site Tracing) 취약점과 OPTIONS의 Allow 헤더 확인은 웹 보안 단골 문제입니다.",
  },

  // =================================================================
  // [문제 68] 단답형 (3점) - 웹 보안 (Stored Procedure SQLi & xp_cmdshell)
  // =================================================================
  {
    id: 68,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "웹 애플리케이션 보안",
    title: "저장 프로시저 SQL 인젝션 및 OS 명령어 실행 확장 프로시저",
    description:
      "데이터베이스의 저장 프로시저(Stored Procedure)에서 발생하는 SQL 인젝션과 운영체제 명령 실행 취약점에 관한 설명이다. 빈칸 (A), (B)에 들어갈 알맞은 용어와 프로시저명을 기술하시오.",
    scenario:
      "• 저장 프로시저를 사용하더라도 프로시저 내부에서 정적 쿼리가 아닌 `EXEC('SELECT ... ' + @input)`과 같이 입력값을 문자열 결합하여 실행하는 방식을 (  A  ) SQL(Dynamic SQL)이라고 하며, 이 경우 SQL 인젝션 공격이 그대로 발생한다.\n• Microsoft SQL Server(MSSQL)에서 데이터베이스 관리자가 운영체제 커맨드 쉘 명령어를 직접 실행할 수 있도록 제공하는 확장 저장 프로시저로, 공격자가 sa 권한 획득 시 시스템 장악을 위해 악용하는 프로시저 이름은 (  B  )이다.",
    answer: [
      "(A): 동적 (Dynamic / 동적 SQL)",
      "(B): xp_cmdshell",
    ],
    scoringPoints: [
      "(A): 동적 또는 Dynamic (1.5점)",
      "(B): xp_cmdshell (1.5점)",
    ],
    explanation:
      "• 저장 프로시저(SP) 오해: SP를 쓴다고 무조건 안전한 것이 아니며, SP 내부에서 동적 SQL(Dynamic SQL)을 조립하면 SQLi에 취약함. 반드시 매개변수화된 쿼리(`sp_executesql`과 파라미터 정의)를 사용해야 함\n• `xp_cmdshell`: MSSQL에서 윈도우 cmd.exe 명령을 실행하는 강력한 프로시저. 침해사고 예방을 위해 `sp_configure 'xp_cmdshell', 0`으로 비활성화해야 함",
    examTips:
      "MSSQL의 대표적인 공격 대상인 'xp_cmdshell'과 동적 SQL(Dynamic SQL)의 위험성은 기출 단골입니다.",
  },

  // =================================================================
  // [문제 69] 단답형 (3점) - 시스템 보안 (who, history, lastlog)
  // =================================================================
  {
    id: 69,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 사용자 접속 감사 명령어 (who, history, lastlog)",
    description:
      "리눅스 시스템에서 사용자의 현재 접속 상태와 과거 활동 내역을 확인하는 감사 명령어에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 명령어를 각각 기술하시오.",
    scenario:
      "• (  A  ): `/var/run/utmp` 파일을 참조하여 현재 시스템에 로그인되어 있는 사용자 계정, 접속 터미널(tty/pts), 접속 시간, 원격 IP를 조회하는 명령어 (유사: `w`)\n• (  B  ): 현재 로그인한 사용자가 쉘에서 실행했던 이전 명령어들의 목록(기본 1000개)을 순서대로 조회하는 명령어\n• (  C  ): `/var/log/lastlog` 파일을 참조하여 시스템에 등록된 모든 사용자 계정의 '가장 최근 로그인 시각과 접속 IP'를 일괄 조회하는 명령어",
    answer: [
      "(A): who (또는 w)",
      "(B): history",
      "(C): lastlog",
    ],
    scoringPoints: [
      "(A): who 또는 w (1점)",
      "(B): history (1점)",
      "(C): lastlog (1점)",
    ],
    explanation:
      "• `who`: 현재 로그인 세션 확인 (`/var/run/utmp`)\n• `last`: 과거 성공한 모든 로그인/재부팅 기록 (`/var/log/wtmp`)\n• `lastb`: 실패한 로그인 기록 (`/var/log/btmp`)\n• `lastlog`: 각 계정별 '마지막 로그인' 1건만 요약 출력 (`/var/log/lastlog`)\n• `history`: 실행 명령어 히스토리 (`~/.bash_history`)",
    examTips:
      "who, last, lastb, lastlog의 참조 파일과 출력 내용 매핑은 시스템 단답형의 단골 출제 문제입니다.",
  },

  // =================================================================
  // [문제 70] 단답형 (3점) - 네트워크 보안 (포트 스캐닝 기법)
  // =================================================================
  {
    id: 70,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "포트 스캐닝 기법 비교 (SYN, NULL, XMAS, Decoy Scan)",
    description:
      "Nmap 등 네트워크 스캐닝 도구에서 사용하는 다양한 포트 스캔 기법에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 스캔 기법 명칭을 기술하시오.",
    scenario:
      "• (  A  ) Scan: TCP 3-Way Handshake를 완료하지 않고 SYN 패킷 전송 후 대상으로부터 SYN/ACK를 받으면 즉시 RST를 보내 연결을 끊는 Half-Open 스캔 기법 (서버에 연결 로그가 남지 않음)\n• (  B  ) Scan: TCP 제어 플래그 중 FIN, PSH, URG 플래그를 모두 활성화하여 크리스마스 트리처럼 불을 켠 형태로 전송하는 스텔스 스캔 기법\n• (  C  ) Scan: 실제 공격자의 IP 주소 외에 다수의 가짜 IP 주소(미끼)를 섞어서 스캔 패킷을 전송함으로써, 대상 시스템의 방화벽/IDS 관리자가 실제 공격자를 특정하지 못하게 혼란을 주는 기법",
    answer: [
      "(A): SYN Scan (또는 Half-Open Scan / SYN 스캔)",
      "(B): XMAS Scan (또는 크리스마스 스캔 / Xmas)",
      "(C): Decoy Scan (또는 미끼 스캔 / 디코이 스캔)",
    ],
    scoringPoints: [
      "(A): SYN Scan 또는 Half-Open Scan (1점)",
      "(B): XMAS Scan 또는 Xmas (1점)",
      "(C): Decoy Scan 또는 미끼 스캔 (1점)",
    ],
    explanation:
      "• SYN Scan (Half-Open): 완전한 3-Way Handshake를 맺지 않아 로그 회피 가능\n• 스텔스 스캔 (RFC 793 비정상 플래그):\n- NULL Scan: 플래그 0개\n- FIN Scan: FIN 플래그만 설정\n- XMAS Scan: FIN + PSH + URG 설정\n(열린 포트는 응답 없음, 닫힌 포트는 RST/ACK 응답)\n• Decoy Scan: Nmap의 `-D RND:10` 옵션 등으로 가짜 출발지 IP를 섞어 공격 원점 은닉",
    examTips:
      "SYN(Half-Open) 스캔과 XMAS 스캔, Decoy(미끼) 스캔의 패킷 플래그와 동작 특성은 필수 암기 항목입니다.",
  },

  // =================================================================
  // [문제 71] 단답형 (3점) - 정보보호 관리 (위험대응 전략 시나리오 매핑)
  // =================================================================
  {
    id: 71,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "위험 관리 4대 대응 전략 시나리오 매핑 (회피, 전가, 완화, 수용)",
    description:
      "기업의 보안 위험 대응 사례이다. 각 사례 (1), (2), (3)에 해당하는 위험 처리 전략 명칭을 기술하시오.",
    scenario:
      "사례 (1): 개인정보 유출 시 거액의 손해배상 리스크에 대비하여 '개인정보보호 배상책임보험'에 가입하였다.\n사례 (2): 노후화되어 보안 패치가 중단된 구형 전자상거래 결제 모듈의 취약점을 제거하기 위해 해당 서비스를 전면 중단하고 메뉴에서 삭제하였다.\n사례 (3): 웹 취약점을 통한 해킹 공격을 방어하기 위해 웹방화벽(WAF)을 도입하고 소스코드 시큐어 코딩을 적용하였다.",
    answer: [
      "(1): 위험 전가 (Risk Transfer)",
      "(2): 위험 회피 (Risk Avoidance)",
      "(3): 위험 완화 (Risk Mitigation / 위험 감소)",
    ],
    scoringPoints: [
      "(1): 위험 전가 (1점)",
      "(2): 위험 회피 (1점)",
      "(3): 위험 완화 또는 위험 감소 (1점)",
    ],
    explanation:
      "• 위험 전가: 제3자(보험사, 외주업체)에 위험의 재무적 손실 책임 이전\n• 위험 회피: 활동 포기, 서비스 폐쇄, 위험 요소 원천 제거\n• 위험 완화(감소): 보안 대책(방화벽, 암호화, 정책) 적용으로 발생 확률 또는 영향도 경감\n• 위험 수용: 통제 비용 > 손실액일 때 잔여 위험 감수 (DoA 이하)",
    examTips:
      "실제 업무 시나리오를 제시하고 위험 대응 4가지(전가, 회피, 완화, 수용) 중 하나를 고르는 문제는 실기 단답형 빈출입니다.",
  },

  // =================================================================
  // [문제 72] 단답형 (3점) - 네트워크 보안 (NAT 유형)
  // =================================================================
  {
    id: 72,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "NAT(Network Address Translation) 기술 유형 (Static, Dynamic, PAT)",
    description:
      "IPv4 주소 고갈 문제를 해결하고 사설 내부망을 은닉하기 위해 사용하는 주소 변환(NAT) 기술에 관한 설명이다. 빈칸 (A), (B), (C)에 들어갈 알맞은 용어를 기술하시오.",
    scenario:
      "• (  A  ) NAT: 하나의 사설 IP 주소를 하나의 공인 IP 주소와 1:1로 고정 매핑하는 방식 (주로 내부 웹서버나 메일서버를 외부에 공개할 때 사용)\n• (  B  ) NAT: 여러 개의 사설 IP 주소를 공인 IP 주소 풀(Pool)에서 동적으로 할당하여 1:1로 매핑하는 방식\n• (  C  )(Port Address Translation): 단 하나의 공인 IP 주소에 고유한 레이어 4 포트(Port) 번호를 매핑하여 수백~수천 대의 내부 사설 단말기가 동시에 인터넷에 접속할 수 있도록 하는 다대일(N:1) 변환 방식",
    answer: [
      "(A): Static NAT (정적 NAT)",
      "(B): Dynamic NAT (동적 NAT)",
      "(C): PAT (Port Address Translation / NAPT)",
    ],
    scoringPoints: [
      "(A): Static NAT 또는 정적 NAT (1점)",
      "(B): Dynamic NAT 또는 동적 NAT (1점)",
      "(C): PAT 또는 NAPT (1점)",
    ],
    explanation:
      "• Static NAT (1:1 고정): 외부에서 내부 서버로의 직접 접속 허용\n• Dynamic NAT (N:M 동적): 공인 IP 풀 내에서 가용 IP를 동적 대여\n• PAT (NAPT, N:1): IP 헤더의 IP와 TCP/UDP 헤더의 포트 번호를 변환하여 하나의 공인 IP로 대규모 내부 호스트 공유\n• 보안 효과: 외부 인터넷에서 내부 사설 IP(192.168.x.x 등)로의 직접 라우팅이 불가능하여 내부 자산 은닉 효과 제공",
    examTips:
      "Static NAT vs Dynamic NAT vs PAT(NAPT)의 1:1, N:M, N:1 차이점은 네트워크 기초 핵심입니다.",
  },

  // =================================================================
  // [문제 73] 서술·작업형 (14점) - 정보보호 관리 (ISO 13335-1 복합 접근법)
  // =================================================================
  {
    id: 73,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "정보보호 관리 및 법률",
    title: "ISO 13335-1 위험관리 복합 접근법(Combined Approach) 개념 및 장단점 분석",
    description:
      "국제 정보보호 가이드라인(ISO 13335-1)에서 제시하는 위험 분석 4대 접근법 중 실무에서 가장 널리 활용되는 '복합 접근법(Combined Approach)'에 관한 서술형 물음이다. 하위 3가지 요구사항을 기술하시오.",
    subItems: [
      {
        number: 1,
        question:
          "복합 접근법(Combined Approach)의 기본 개념과 작동 원리를 서술하시오.",
        answer:
          "조직의 전체 정보자산 중 고위험 중요 자산(핵심 시스템, 개인정보 DB 등)에는 시간과 비용이 많이 드는 '상세 위험 분석(Detailed Risk Analysis)'을 적용하고, 위험도가 상대적으로 낮은 일반 자산에는 표준 체크리스트 기반의 '기준선 접근법(Baseline Approach)'을 병행 적용하는 혼합형 위험 분석 기법이다.",
        scoringCriteria:
          "고위험 중요 자산에 상세 위험 분석 적용, 일반 자산에 기준선 접근법 병행 적용 원리 서술 시 4점 인정",
      },
      {
        number: 2,
        question:
          "복합 접근법이 가지는 핵심 장점 2가지를 서술하시오.",
        answer:
          "1. 비용 및 시간의 효율성: 모든 자산에 상세 분석을 적용할 때 발생하는 과도한 시간과 인력 비용을 대폭 절감할 수 있다.\n2. 한정된 보안 자원의 집중: 조직의 핵심 자산에 정밀한 보안 대책을 집중 투자하여 위험 관리의 실효성을 극대화할 수 있다.",
        scoringCriteria:
          "비용/시간 절감 및 핵심 자원에 보안 자원 집중 장점 언급 시 5점 인정 (각 2.5점)",
      },
      {
        number: 3,
        question:
          "복합 접근법의 주요 단점(한계점) 2가지를 서술하시오.",
        answer:
          "1. 자산 분류 오류의 위험: 초기 자산 중요도 평가가 잘못되어 고위험 자산이 일반 자산으로 분류될 경우, 상세 분석 대상에서 누락되어 심각한 보안 사각지대가 발생할 수 있다.\n2. 기준선 영역의 과소/과대 보안: 기준선 접근법이 적용된 자산은 조직의 고유한 위협을 반영하지 못해 불필요한 과잉 투자가 되거나 최소한의 보안조차 미흡할 수 있다.",
        scoringCriteria:
          "초기 자산 식별 오류 시 보안 공백 발생 및 기준선 영역의 보안 부적합성 서술 시 5점 인정 (각 2.5점)",
      },
    ],
    answer: [
      "1. 개념: 고위험 중요 자산은 상세 위험 분석, 일반 자산은 기준선 접근법을 복합 적용",
      "2. 장점: 분석 시간/비용의 경제적 절감, 고위험 핵심 자산에 보안 투자 집중",
      "3. 단점: 초기 자산 중요도 분류 오류 시 고위험 자산 누락 위험, 기준선 영역의 고유 위협 미반영",
    ],
    scoringPoints: [
      "복합 접근법의 개념 정확히 서술 (4점)",
      "비용 절감 및 자원 집중 등 장점 2가지 서술 (5점)",
      "분류 오류 시 사각지대 발생 등 단점 2가지 서술 (5점)",
    ],
    explanation:
      "• ISO 13335-1 위험 분석 접근법 비교:\n- 기준선 접근법: 체크리스트 일괄 적용 (빠르고 저렴하나 자산별 특화 부재)\n- 비정형 접근법: 전문가 경험 의존 (주관적)\n- 상세 위험 분석: 자산/위협/취약점 정량 정밀 분석 (정확하나 막대한 시간/비용)\n- 복합 접근법: 상세 분석 + 기준선 접근법의 조합으로 현실적인 최선의 타협안",
    examTips:
      "복합 접근법의 개념, 장점(경제성/효율성), 단점(초기 자산 스크리닝 오류 시 치명적)은 14점 서술형 단골 문제입니다.",
  },

  // =================================================================
  // [문제 74] 단답형 (3점) - 정보보호 법률 (정보통신망법 제45조)
  // =================================================================
  {
    id: 74,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보호 관리 및 법률",
    title: "정보통신망법 제45조에 근거한 정보보호 지침 수립 항목",
    description:
      "정보통신망 이용촉진 및 정보보호 등에 관한 법률 제45조(정보통신망의 안정성 확보 등) 및 시행령에 따라 정보통신서비스 제공자가 수립·시행해야 하는 정보보호 조치 항목에 관한 물음이다. 빈칸 (A), (B)에 들어갈 알맞은 조치 항목을 기술하시오.",
    scenario:
      "정보통신망법 제45조에 따라 정보통신서비스 제공자는 정보보호 관리체계를 수립하고 기술적·물리적·관리적 보호조치를 취하여야 한다. 법령에서 규정한 주요 보호조치에는 비인가자의 접근을 차단하기 위한 (  A  ) 권한 관리, 시스템 침해사고 예방을 위한 백신 소프트웨어 설치 및 정기적인 보안 (  B  ) 적용, 침해사고 발생 시 신속한 대응을 위한 비상연락망 및 대응 절차 수립 등이 포함된다.",
    answer: [
      "(A): 접근 (접근통제 / 접근 권한)",
      "(B): 패치 (업데이트 / 보안 패치)",
    ],
    scoringPoints: [
      "(A): 접근 권한 또는 접근통제 기술 시 (1.5점)",
      "(B): 보안 패치 또는 업데이트 기술 시 (1.5점)",
    ],
    explanation:
      "• 정보통신망법 제45조 및 시행령 제37조(정보보호조치의 내용):\n1. 정보보호 관리책임자 지정 및 조직 구성\n2. 시스템 접근통제 및 접근 권한 관리\n3. 암호화 기술 적용\n4. 백신 설치 및 최신 보안 패치 적용\n5. 접속기록 보관 및 위변조 방지\n6. 침해사고 대응 및 복구 절차",
    examTips:
      "정보통신망법 제45조는 ISMS 의무 인증의 모법 조항이므로 기술적·관리적 보호조치 세부 항목을 숙지해야 합니다.",
  },

  // =================================================================
  // [문제 75] 단답형 (3점) - 시스템 보안 (리눅스 파일 권한 및 umask)
  // =================================================================
  {
    id: 75,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 파일 권한 설정 및 umask 기본값 계산",
    description:
      "리눅스 시스템의 파일 퍼미션(Permission)과 기본 생성 마스크인 umask에 관한 물음이다. 빈칸 (A), (B)에 들어갈 8진수 권한 숫자를 기술하시오.",
    scenario:
      "• 소유자에게 읽기/쓰기/실행(rwx), 그룹에게 읽기/실행(r-x), 기타 사용자에게 읽기(r--) 권한을 부여하고자 할 때 `chmod` 명령어에 지정해야 하는 8진수 권한 숫자는 (  A  )이다.\n• 시스템의 `umask` 값이 `027`로 설정되어 있을 때, 사용자가 `touch secure.txt` 명령으로 신규 일반 파일을 생성할 경우 해당 파일에 최종 부여되는 8진수 권한 숫자는 (  B  )이다. (단, 파일의 최대 기본 권한은 666)",
    answer: [
      "(A): 754",
      "(B): 640",
    ],
    scoringPoints: [
      "(A): 754 정확히 기술 시 (1.5점)",
      "(B): 640 정확히 기술 시 (1.5점)",
    ],
    explanation:
      "• (A) 권한 계산: rwx(4+2+1=7) / r-x(4+0+1=5) / r--(4+0+0=4) -> `754`\n• (B) umask 계산:\n- 일반 파일 최대 권한: `666` (rw-rw-rw-)\n- umask: `027` (--- -w- rwx)\n- 비트 연산: `666 & ~027` -> 소유자 6(rw-), 그룹 6-2=4(r--), 기타 6-7(권한 전부 박탈)=0(---) -> `640`",
    examTips:
      "umask 계산 시 파일은 666 기준, 디렉터리는 777 기준이라는 점과 `umask 027` 적용 시 640이 되는 원리는 단답형 빈출입니다.",
  },

  // =================================================================
  // [문제 76] 서술·작업형 (14점) - 비즈니스 연속성 (BIA 및 재해복구 4대 유형)
  // =================================================================
  {
    id: 76,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "비즈니스 연속성(BCP/DRP)",
    title: "BIA(업무영향분석) 기반 재해복구센터(DRS) 4대 운영 형태 비교",
    description:
      "재해나 사이버 테러로 인한 업무 중단에 대비하여 구축하는 재해복구센터(Disaster Recovery Site)의 4가지 유형(Mirror, Hot, Warm, Cold)에 관한 서술형 물음이다. 하위 3가지 요구사항에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "재해복구 목표 지표인 RTO(목표 복구 시간)와 RPO(목표 복구 시점)의 개념을 각각 간략히 정의하시오.",
        answer:
          "• RTO (Recovery Time Objective, 목표 복구 시간): 재해 발생 시점부터 시스템과 업무 기능이 정상 재개될 때까지 허용되는 최대 소요 시간\n• RPO (Recovery Point Objective, 목표 복구 시점): 재해 발생 시 허용 가능한 최대 데이터 손실 시점(손실 허용량)",
        scoringCriteria:
          "RTO(복구 소요 시간) 및 RPO(데이터 손실 허용 시점) 정확히 정의 시 4점 (각 2점)",
      },
      {
        number: 2,
        question:
          "Mirror Site(미러 사이트)와 Hot Site(핫 사이트)의 데이터 복제 방식과 RTO 특성을 비교하여 서술하시오.",
        answer:
          "• Mirror Site: 주 센터와 동일한 전산 설비를 구축하고 데이터를 실시간(동기식)으로 이중화하여, 재해 발생 시 즉시(RTO = 0에 수렴) 서비스 전환이 가능하지만 비용이 가장 높다.\n• Hot Site: 주 센터와 동일한 대기 장비를 갖추고 주기적(비동기/동기) 데이터 복제를 유지하여, 재해 발생 시 수 시간 이내(RTO < 수 시간) 복구가 가능하지만 약간의 데이터 손실(RPO)이 발생할 수 있다.",
        scoringCriteria:
          "Mirror Site의 실시간 복제 및 RTO=0 특성, Hot Site의 상시 대기 및 수시간 이내 RTO 특성 서술 시 5점",
      },
      {
        number: 3,
        question:
          "Warm Site(웜 사이트)와 Cold Site(콜드 사이트)의 인프라 준비 상태와 복구 시간(RTO) 차이를 서술하시오.",
        answer:
          "• Warm Site: 중요 전산 장비(서버 등)는 사전에 구축되어 있으나 최신 데이터는 백업 테이프나 미디어로 보관되어 있어, 재해 발생 시 데이터를 복원하는 데 수일~수주(RTO = 수일)가 소요된다.\n• Cold Site: 전산실 공간, 전력, 공조 시설 등 기본 환경만 마련되어 있고 하드웨어 장비와 데이터가 없어, 재해 발생 시 장비 도입과 데이터 복원을 모두 수행하므로 수주일~수개월(RTO = 수주~수개월)이 소요되며 비용은 가장 저렴하다.",
        scoringCriteria:
          "Warm Site(장비 보유, 백업 데이터 복원 필요, RTO 수일)와 Cold Site(공간/기반시설만 보유, RTO 수주 이상) 차이 서술 시 5점",
      },
    ],
    answer: [
      "1. RTO는 업무 재개 허용 시간, RPO는 데이터 손실 허용 시점",
      "2. Mirror Site는 실시간 복제 및 즉시(RTO=0) 복구 / Hot Site는 상시 대기 장비 및 수시간 내 복구",
      "3. Warm Site는 장비 구축 완료 및 백업 데이터 복원(RTO 수일) / Cold Site는 공간만 확보 후 장비 신규 도입(RTO 수주~수개월)",
    ],
    scoringPoints: [
      "RTO 및 RPO 정의 정확히 기술 (4점)",
      "Mirror Site와 Hot Site의 데이터 동기화 및 RTO 비교 (5점)",
      "Warm Site와 Cold Site의 인프라 준비 상태 및 복구 기간 비교 (5점)",
    ],
    explanation:
      "• 재해복구센터 4대 유형 비교표:\n| 구분 | 인프라 준비 상태 | 데이터 복제 | RTO | 비용 |\n| Mirror | 주 센터와 100% 동일 | 실시간 동기화 | 즉시(0) | 최고 |\n| Hot | 주 센터와 동일 설비 | 주기적 동기화 | 수 시간 | 높음 |\n| Warm | 주요 서버만 구축 | 백업 테이프/원격 전송 | 수 일 | 중간 |\n| Cold | 전산실 공간, 전원만 확보 | 데이터/장비 없음 | 수 주~수 개월 | 최저 |",
    examTips:
      "RTO/RPO 지표와 4대 재해복구 사이트(Mirror, Hot, Warm, Cold)의 특성 비교는 실기 14점 서술형 최우선 순위 문제입니다.",
  },

  // =================================================================
  // [문제 77] 서술·작업형 (14점) - 시큐어 코딩 (Java SQLi 및 파일 업로드)
  // =================================================================
  {
    id: 77,
    subjectId: "application",
    type: "practical",
    score: 14,
    domain: "소프트웨어 개발보안 (시큐어 코딩)",
    title: "Java 시큐어 코딩: SQL Injection 방어 및 안전한 파일 업로드 구현",
    description:
      "Java 웹 애플리케이션에서 SQL 인젝션과 악성 웹쉘 파일 업로드 공격을 방어하기 위한 시큐어 코딩 지침에 관한 물음이다. 하위 요구사항을 작성하시오.",
    subItems: [
      {
        number: 1,
        question:
          "Java JDBC 환경에서 SQL Injection을 원천 차단하기 위해 문자열 결합 방식의 `Statement` 대신 사용해야 하는 객체와 파라미터 바인딩 방식을 서술하시오.",
        answer:
          "위치 홀더(Placeholder, `?`)를 지원하는 `PreparedStatement` 객체를 사용하고, 사용자 입력값을 `pstmt.setString(1, input)`과 같이 파라미터 바인딩(Parameter Binding)으로 전달하여 입력값이 SQL 쿼리 구조를 변경하지 않고 순수 데이터 리터럴로만 처리되도록 해야 한다.",
        scoringCriteria:
          "PreparedStatement 객체 언급 (2점), 위치 홀더 `?` 및 파라미터 바인딩 원리 서술 (3점)",
      },
      {
        number: 2,
        question:
          "MyBatis 프레임워크 사용 시 SQL 인젝션을 방어하기 위해 동적 치환 변수 `${}` 대신 안전한 파라미터 바인딩 변수인 (       )을 사용해야 한다. 빈칸을 채우고 그 이유를 서술하시오.",
        answer:
          "빈칸: `#{}`\n이유: `${}`는 전달된 값을 SQL 문자열에 그대로 결합(치환)하여 악의적 SQL 문법이 실행될 수 있지만, `#{}`는 PreparedStatement의 `?` 바인딩 방식으로 변환되어 안전하게 이스케이프 처리되기 때문이다.",
        scoringCriteria:
          "빈칸 `#{}` 정확히 기술 (2점), PreparedStatement 바인딩 변환 이유 서술 (2점)",
      },
      {
        number: 3,
        question:
          "Java 파일 업로드 구현 시 악성 웹쉘 실행을 방지하기 위한 핵심 보안 조치 3가지를 서술하시오.",
        answer:
          "1. 파일 확장자 화이트리스트 검증: 허용된 안전 확장자(jpg, png 등)만 통과시키고 jsp, war 등 실행 확장자는 전면 차단한다.\n2. 원본 파일명 난수화(UUID): 저장 시 `UUID.randomUUID()`를 사용하여 파일명을 무작위로 변경하여 직접 URL 접근을 방지한다.\n3. 웹 루트 외부 저장 및 실행 권한 제거: 업로드 디렉터리를 Web Root 외부 디렉터리에 격리 저장하고 실행(Execute) 권한을 박탈한다.",
        scoringCriteria:
          "화이트리스트 확장자 검증, UUID 파일명 난수화, 웹 루트 외부 격리 저장 3가지 서술 시 5점",
      },
    ],
    answer: [
      "1. PreparedStatement 객체 사용 및 '?' 바인딩 변수 적용",
      "2. MyBatis의 '#{}' 파라미터 바인딩 문법 적용",
      "3. 파일 업로드 3대 방어: 화이트리스트 확장자 검증, UUID 파일명 난수화, 웹 루트 외부 격리 저장",
    ],
    scoringPoints: [
      "PreparedStatement 및 파라미터 바인딩 원리 서술 (5점)",
      "MyBatis '#{}' 문법 및 이유 서술 (4점)",
      "파일 업로드 3대 보안 조치 서술 (5점)",
    ],
    explanation:
      "• SQL Injection 방어:\n- Java JDBC: `PreparedStatement` 사용 필수\n- MyBatis: `#{id}`는 PreparedStatement 파라미터 바인딩, `${id}`는 정적 문자열 치환이므로 `${}` 사용 금지\n• 파일 업로드 4중 방어:\n1. 클라이언트/서버 화이트리스트 확장자 검증\n2. 매직 넘버(File Signature) 검사\n3. 파일명 UUID 난수화\n4. 웹 루트 외부 저장 및 디렉터리 실행 권한 제거",
    examTips:
      "PreparedStatement, MyBatis #{}, 파일 업로드 화이트리스트 및 UUID 난수화는 개발보안 실기 문제의 1순위 핵심입니다.",
  },

  // =================================================================
  // [문제 78] 서술·작업형 (14점) - 네트워크 보안 (NTP 증폭 DRDoS 공격 및 보안 대책)
  // =================================================================
  {
    id: 78,
    subjectId: "network",
    type: "descriptive",
    score: 14,
    domain: "네트워크 보안",
    title: "NTP 취약점 증폭 DDoS(DRDoS monlist) 공격 원리 및 4대 보안 대책",
    description:
      "UDP 프로토콜 기반의 반사 증폭 서비스 거부 공격(DRDoS) 중 NTP(Network Time Protocol)의 취약점을 악용한 공격에 관한 서술형 물음이다. 하위 3가지 요구사항에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "NTP 증폭 공격에서 공격자가 악용하는 질의 명령어와 이를 통해 수백 배의 트래픽 증폭이 발생하는 메커니즘을 서술하시오.",
        answer:
          "공격자가 희생자의 IP로 출발지 IP를 위조(IP Spoofing)한 후 전송하는 명령어는 `monlist`(또는 req_monlist)이다. 이 명령어는 NTP 서버에 최근 접속한 최대 600개의 클라이언트 IP 주소 목록을 반환하므로, 작은 크기의 단일 요청 패킷(수십 바이트)에 대해 수십~수백 배에 달하는 거대한 UDP 응답 트래픽이 희생자에게 일제히 반사 집중된다.",
        scoringCriteria:
          "monlist 명령어 명칭 언급 (2점), 희생자 IP 위조 및 수백 대의 클라이언트 목록 응답으로 인한 증폭 원리 서술 (3점)",
      },
      {
        number: 2,
        question:
          "NTP 서버 설정 파일(`ntp.conf`)에서 `monlist` 취약점을 무력화하기 위한 보안 설정 지시자 2가지를 서술하시오.",
        answer:
          "1. 모니터링 기능 비활성화: `disable monitor` 지시자를 추가하여 원격 질의 모니터링을 차단한다.\n2. 접근 제한 설정: `restrict default noquery` 또는 `restrict default nomonitor` 지시자를 설정하여 외부 비인가 호스트의 상태 조회 쿼리를 거부한다.",
        scoringCriteria:
          "`disable monitor` 및 `restrict default noquery` (또는 nomonitor) 설정 서술 시 5점 (각 2.5점)",
      },
      {
        number: 3,
        question:
          "네트워크 인프라 및 소프트웨어 관리 관점에서 NTP 증폭 공격을 예방하기 위한 추가 대응 대책 2가지를 서술하시오.",
        answer:
          "1. NTP 소프트웨어 최신 업데이트: 취약한 구버전 NTP 데몬을 `monlist` 기능이 기본 비활성화되거나 제거된 최신 버전(v4.2.7p26 이상)으로 패치한다.\n2. 네트워크 라우터 안티 스푸핑 적용: 인터넷 서비스 제공자(ISP) 및 경계 라우터에서 BCP 38 / uRPF(Unicast Reverse Path Forwarding)를 적용하여 위조된 출발지 IP 패킷을 차단한다.",
        scoringCriteria:
          "NTP 데몬 최신 패치 및 라우터 uRPF/BCP 38 안티 스푸핑 적용 서술 시 4점 (각 2점)",
      },
    ],
    answer: [
      "1. monlist 명령어 악용 및 최근 접속 클라이언트 600개 목록 응답을 통한 트래픽 반사 증폭",
      "2. ntp.conf 설정: 'disable monitor' 설정 및 'restrict default noquery' 적용",
      "3. NTP 데몬 최신 패치(v4.2.7 이상) 및 라우터 uRPF(안티 스푸핑) 차단 적용",
    ],
    scoringPoints: [
      "monlist 명령어 및 증폭 메커니즘 정확히 기술 (5점)",
      "ntp.conf 내 disable monitor 및 restrict noquery 지시자 서술 (5점)",
      "NTP 최신 패치 및 uRPF 스푸핑 방어 대책 서술 (4점)",
    ],
    explanation:
      "• NTP DRDoS (monlist 공격):\n- UDP 123 포트 사용 (비연결형이므로 IP 스푸핑 용이)\n- monlist 명령어: 작은 요청 1개에 대해 최대 600개 IP 목록을 담은 수십 개의 UDP 패킷 반사 (증폭률 약 200~1000배)\n• 4대 종합 대책:\n1. `ntp.conf`에 `disable monitor` 지시자 설정\n2. `ntp.conf`에 `restrict default noquery` 설정\n3. 최신 NTP 데몬(v4.2.7p26+) 패치\n4. 네트워크 라우터에서 uRPF(Unicast Reverse Path Forwarding) 적용하여 위조된 IP 원천 차단",
  },

  // =================================================================
  // [문제 79] 단답형 (3점) - 시스템 보안 (패스워드 최소 길이 설정)
  // =================================================================
  {
    id: 79,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 계정 패스워드 최소 길이 설정 파일 및 지시자",
    description:
      "리눅스 시스템에서 사용자 계정 생성 및 패스워드 설정 시 패스워드의 최소 길이를 8자리 이상으로 강제하기 위해 수정해야 하는 환경 설정 파일명과 해당 설정 변수(지시자)명을 기술하시오.",
    answer: [
      "설정 파일명: `/etc/login.defs` (또는 `/etc/security/pwquality.conf`, `/etc/pam.d/system-auth`)",
      "설정 변수명: `PASS_MIN_LEN` (pwquality의 경우 `minlen`)",
    ],
    scoringPoints: [
      "설정 파일명 `/etc/login.defs` 정확히 기술 시 1.5점",
      "설정 변수명 `PASS_MIN_LEN` 정확히 기술 시 1.5점",
      "(PAM pwquality 기준 `/etc/security/pwquality.conf` 및 `minlen`도 정답 인정)",
    ],
    explanation:
      "• `/etc/login.defs`는 사용자 계정 및 암호 생성 기본 정책을 정의하는 파일입니다.\n- `PASS_MIN_LEN 8`: 패스워드 최소 글자 수 제한\n- `PASS_MAX_DAYS 90`: 패스워드 최대 사용 기간 (만료 주기)\n- `PASS_MIN_DAYS 1`: 패스워드 최소 변경 유예 기간\n- `PASS_WARN_AGE 7`: 패스워드 만료 전 경고 일수\n• 최신 배포판(RHEL/CentOS 7+)에서는 PAM 모듈 `pam_pwquality.so`와 `/etc/security/pwquality.conf`의 `minlen = 8` 설정을 함께 활용합니다.",
    examTips:
      "주요정보통신기반시설 기술적 취약점 분석·평가 가이드 [U-02 패스워드 복잡성 설정]의 1순위 핵심 단답형 문제입니다.",
  },

  // =================================================================
  // [문제 80] 서술·작업형 (14점) - 네트워크 보안 (무선 LAN CSMA/CA 절차 및 핵심 용어)
  // =================================================================
  {
    id: 80,
    subjectId: "network",
    type: "descriptive",
    score: 14,
    domain: "네트워크 보안",
    title: "무선 LAN IEEE 802.11 CSMA/CA 충돌 회피 절차 및 핵심 메커니즘",
    description:
      "유선 이더넷의 CSMA/CD와 달리 무선 환경에서는 신호 감쇠 및 히든 노드 문제로 인해 CSMA/CA(Carrier Sense Multiple Access with Collision Avoidance) 방식을 사용한다. 하위 3가지 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "무선 프레임 간의 충돌을 방지하고 프레임 우선순위를 보장하기 위해 프레임 전송 사이에 의무적으로 두는 대기 시간(간격)의 일반 명칭과 가장 높은 우선순위를 갖는 제어 프레임(ACK, CTS 등)용 간격의 명칭을 쓰시오.",
        answer:
          "일반 명칭: IFS (Inter-Frame Space / 프레임 간 간격)\n최우선 간격: SIFS (Short Inter-Frame Space)",
        scoringCriteria:
          "IFS 및 SIFS 명칭을 정확히 기술 시 4점 (각 2점)",
      },
      {
        number: 2,
        question:
          "무선 환경의 고질적인 '숨은 노드 문제(Hidden Node Problem)'를 해결하기 위해 송신측과 수신측이 실제 데이터 전송 전에 주고받는 2가지 제어 핸드셰이크 프레임의 약어와 동작을 서술하시오.",
        answer:
          "1. RTS (Request To Send): 송신측이 AP나 수신측에게 데이터를 보낼 준비가 되었음을 알리고 채널 예약을 요청하는 프레임\n2. CTS (Clear To Send): 수신측이 RTS에 응답하여 전송을 승낙하고 주변의 모든 노드에게 지정 시간 동안 송신을 멈추도록 알리는 브로드캐스트 프레임",
        scoringCriteria:
          "RTS, CTS 명칭 및 채널 예약/송신 유예 동작을 기술 시 5점",
      },
      {
        number: 3,
        question:
          "다른 노드가 전송 중인 RTS/CTS 프레임을 수신한 제3의 무선 스테이션들이 채널이 사용 중임을 가상으로 인지하고 송신을 지연시키기 위해 설정하는 타이머(가상 반송파 감지)의 명칭을 쓰시오.",
        answer: "NAV (Network Allocation Vector / 네트워크 할당 벡터)",
        scoringCriteria: "NAV 명칭 정확히 기술 시 5점",
      },
    ],
    answer: [
      "1. 프레임 간 간격: IFS, 최우선 간격: SIFS",
      "2. 핸드셰이크 프레임: RTS (Request To Send) / CTS (Clear To Send)",
      "3. 가상 반송파 감지 타이머: NAV (Network Allocation Vector)",
    ],
    scoringPoints: [
      "IFS 및 SIFS 명칭 (4점)",
      "RTS / CTS 제어 프레임 명칭 및 히든 노드 해결 역할 (5점)",
      "NAV (Network Allocation Vector) 명칭 (5점)",
    ],
    explanation:
      "• 무선 LAN CSMA/CA 4단계 핸드셰이크:\n1. DIFS(Distributed IFS) 동안 채널 유휴 상태 감지 및 무작위 백오프(Backoff)\n2. 송신 노드가 RTS(Request to Send) 전송\n3. SIFS 후 수신 노드가 CTS(Clear to Send) 회신\n4. CTS를 들은 주변의 다른 모든 노드는 NAV(Network Allocation Vector)를 설정하여 데이터 전송 기간 동안 전송을 유예함\n• 우선순위 간격 크기: SIFS < PIFS < DIFS < EIFS",
    examTips:
      "무선랜 보안 및 통신 프로토콜의 핵심입니다. SIFS, DIFS, RTS/CTS, NAV 4개 용어는 서술형/단답형 단골입니다.",
  },

  // =================================================================
  // [문제 81] 단답형 (3점) - 정보보안 일반 (위험의 3요소: 자산, 위협, 취약점)
  // =================================================================
  {
    id: 81,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "정보보안 일반",
    title: "정보보호 위험(Risk)을 구성하는 3대 기본 요소",
    description:
      "정보보호 위험관리(ISO 27005 / ISO 13335)에서 '위험(Risk)'은 조직이 보호해야 할 대상과 이를 침해할 수 있는 요인들의 상호작용으로 정의된다. 위험의 크기를 산정하기 위해 분석하는 3대 핵심 요소를 기술하시오.",
    answer: [
      "1. 자산 (Asset)",
      "2. 위협 (Threat)",
      "3. 취약점 (Vulnerability)",
    ],
    scoringPoints: [
      "자산(Asset), 위협(Threat), 취약점(Vulnerability) 3가지를 모두 기술 시 3점 (2가지는 2점)",
    ],
    explanation:
      "• 위험(Risk)의 기본 공식:\n`위험(Risk) = f(자산 가치, 위협, 취약점)`\n1. 자산(Asset): 조직이 업무를 수행하는 데 가치가 있어 보호해야 할 유·무형의 정보 자원\n2. 위협(Threat): 자산에 손실이나 피해를 끼칠 잠재적 원인이나 행위 (내부자 유출, 해킹, 천재지변 등)\n3. 취약점(Vulnerability): 위협이 자산에 피해를 입히는 데 악용될 수 있는 자산 자체의 물리적·기술적·관리적 약점이나 결함",
    examTips:
      "위험 = 자산(보호대상) × 위협(외부요인) × 취약점(내부약점)의 관계는 위험관리의 절대 기초입니다.",
  },

  // =================================================================
  // [문제 82] 단답형 (3점) - 애플리케이션 보안 (XXE 취약점)
  // =================================================================
  {
    id: 82,
    subjectId: "application",
    type: "short",
    score: 3,
    domain: "애플리케이션 보안",
    title: "XML 외부 개체 참조(XXE) 보안 약점 및 방어 대책",
    description:
      "웹 애플리케이션이 XML 입력을 파싱할 때 외부 엔티티(External Entity, DTD의 `SYSTEM` 키워드) 처리를 차단하지 않아, 공격자가 서버 내부 파일(`/etc/passwd` 등)을 유출하거나 내부망 포트 스캐닝 및 SSRF를 수행할 수 있게 되는 보안 취약점의 영문 약어와 근본적인 조치 방안을 쓰시오.",
    scenario:
      "<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<!DOCTYPE foo [  \n  <!ELEMENT foo ANY >\n  <!ENTITY xxe SYSTEM \"file:///etc/passwd\" >]>\n<foo>&xxe;</foo>",
    answer: [
      "취약점 명칭: XXE (XML External Entity Injection / XML 외부 개체 참조)",
      "보안 조치: XML 파서에서 외부 엔티티 및 DTD 기능 비활성화 (예: `setFeature(\"http://apache.org/xml/features/disallow-doctype-decl\", true)` 또는 `setExpandEntityReferences(false)`)",
    ],
    scoringPoints: [
      "취약점 약어 XXE 정확히 기술 시 1.5점",
      "XML 파서의 DTD/외부 엔티티 참조 비활성화 조치 서술 시 1.5점",
    ],
    explanation:
      "XXE 공격은 XML 1.0 표준의 외부 엔티티 선언(`<!ENTITY xxe SYSTEM \"uri\">`)을 악용합니다.\n• 방어 기법:\n1. XML 파서 설정에서 `disallow-doctype-decl`을 true로 지정하여 DTD 선언 자체를 전면 차단\n2. `external-general-entities` 및 `external-parameter-entities`를 false로 비활성화\n3. 불필요한 경우 JSON 포맷으로 대체",
    examTips:
      "전자정부 SW 개발보안 가이드 및 OWASP Top 10 단골 문제입니다. 'XXE'와 '외부 DTD 비활성화'를 기억하세요.",
  },

  // =================================================================
  // [문제 83] 서술·작업형 (14점) - 애플리케이션 보안 (XSS 취약점 3대 유형 및 심층 방어)
  // =================================================================
  {
    id: 83,
    subjectId: "application",
    type: "descriptive",
    score: 14,
    domain: "애플리케이션 보안",
    title: "XSS(Cross-Site Scripting) 3대 유형 비교 및 다계층 방어 체계",
    description:
      "웹 애플리케이션의 대표적인 클라이언트 측 코드 인젝션 공격인 XSS(크로스 사이트 스크립팅)에 관한 서술형 물음이다. 하위 3가지 요구사항에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "XSS의 3대 유형인 저장형(Stored XSS), 반사형(Reflected XSS), DOM 기반(DOM-based XSS)의 스크립트 저장 위치 및 실행 경로의 차이점을 각각 비교 설명하시오.",
        answer:
          "1. 저장형(Stored XSS): 악성 스크립트가 게시판 DB 등 서버 저장소에 영구 보관된 후, 해당 페이지를 열람하는 모든 희생자의 브라우저에서 실행됨.\n2. 반사형(Reflected XSS): 스크립트가 포함된 악성 URL 링크를 희생자가 클릭했을 때 서버 응답 본문에 그대로 반사(Reflect)되어 1회성으로 실행됨.\n3. DOM 기반(DOM-based XSS): 서버를 거치지 않고, 브라우저가 클라이언트 측 자바스크립트를 해석하여 DOM 트리(document.location, innerHTML 등)를 조작하는 과정에서 실행됨.",
        scoringCriteria:
          "3가지 유형의 스크립트 위치 및 실행 메커니즘을 정확히 대조 설명 시 6점 (각 2점)",
      },
      {
        number: 2,
        question:
          "XSS 공격을 원천 무력화하기 위해 서버 측에서 HTML 특수문자(`<`, `>`, `\"`, `'`, `&`)를 변환하는 기술의 명칭과 `<` 및 `>`의 변환 결과(HTML Entity)를 쓰시오.",
        answer:
          "기술 명칭: HTML 엔티티 인코딩 (HTML Entity Encoding / 출력값 치환)\n변환 결과: `<` → `&lt;` / `>` → `&gt;`",
        scoringCriteria:
          "HTML 엔티티 인코딩 명칭 (2점), &lt; 및 &gt; 표기 (2점) - 총 4점",
      },
      {
        number: 3,
        question:
          "공격자가 XSS 취약점을 통해 사용자의 세션 쿠키(Cookie)를 탈취하지 못하도록 웹 서버 응답 헤더에서 설정해야 하는 쿠키 보안 속성과, 웹 브라우저가 인가된 출처의 스크립트만 실행하도록 제한하는 HTTP 응답 보안 헤더의 명칭을 쓰시오.",
        answer:
          "1. 쿠키 보안 속성: `HttpOnly` (자바스크립트의 document.cookie 접근 차단)\n2. HTTP 보안 헤더: `CSP (Content-Security-Policy)`",
        scoringCriteria:
          "HttpOnly 속성 명칭 (2점), Content-Security-Policy (CSP) 헤더 명칭 (2점) - 총 4점",
      },
    ],
    answer: [
      "1. Stored XSS(DB 저장 후 다수 감염), Reflected XSS(URL 파라미터 반사 1회 실행), DOM-based XSS(클라이언트 DOM 조작 실행)",
      "2. HTML 엔티티 인코딩 (< → &lt;, > → &gt;)",
      "3. HttpOnly 쿠키 플래그 및 CSP(Content-Security-Policy) 헤더",
    ],
    scoringPoints: [
      "XSS 3대 세부 유형 동작 메커니즘 대조 (6점)",
      "HTML Entity Encoding 및 &lt;, &gt; 치환 (4점)",
      "HttpOnly 속성 및 CSP(Content-Security-Policy) 헤더 (4점)",
    ],
    explanation:
      "• XSS 방어 심층 체계:\n1. 입·출력 검증: 입력을 화이트리스트 검증하고, 출력 시 HTML Entity Encoding(`&lt;`, `&gt;`, `&quot;`, `&#x27;`, `&amp;`)\n2. 쿠키 보호: 세션 쿠키에 `HttpOnly` 플래그를 설정하여 스크립트 탈취 차단\n3. 브라우저 정책 강화: `Content-Security-Policy: default-src 'self'` 헤더를 적용하여 인라인 스크립트 실행 차단",
    examTips:
      "실기 시험에서 가장 출제 빈도가 높은 14점 서술형 문제입니다. 3가지 유형 대조, 인코딩, HttpOnly/CSP 콤보는 완벽히 숙지해야 합니다.",
  },

  // =================================================================
  // [문제 84] 단답형 (3점) - 네트워크 보안 (Local DNS vs Authoritative DNS)
  // =================================================================
  {
    id: 84,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "Local DNS(Recursive) 서버와 Authoritative DNS 서버의 역할 구분",
    description:
      "DNS 계층 구조에서 클라이언트(호스트)의 질의를 받아 루트 DNS부터 순차적으로 반복 질의(Iterative Query)를 수행하여 최종 IP를 찾아 캐싱하는 서버와, 특정 도메인 존(Zone) 파일의 원본 레코드를 직접 보유하고 최종 권한 응답을 제공하는 서버의 명칭을 각각 기술하시오.",
    answer: [
      "1. 반복 질의 대행 및 캐싱 서버: Local DNS 서버 (또는 Recursive DNS 서버 / Recursive Resolver)",
      "2. 원본 레코드 보유 권한 서버: Authoritative DNS 서버 (권위 DNS 서버)",
    ],
    scoringPoints: [
      "Local DNS (또는 Recursive Resolver) 기술 시 1.5점",
      "Authoritative DNS (권위 DNS) 기술 시 1.5점",
    ],
    explanation:
      "• Local DNS (Recursive Resolver):\n- PC(스텁 리졸버)가 가장 먼저 조회하는 ISP 등의 캐시 네임서버\n- 클라이언트를 대신해 루트(.) → TLD(.com) → SLD 순으로 반복 질의를 수행하고 TTL 동안 결과를 캐싱함\n• Authoritative DNS (권위 네임서버):\n- 해당 도메인에 대한 최종 책임(Zone File)을 지니고 있으며, 질문에 대해 권한 있는 응답(Authoritative Answer)을 반환하는 서버",
    examTips:
      "DNS 캐시 포이즈닝은 Local DNS가 표적이며, 존 트랜스퍼 공격은 Authoritative DNS가 표적입니다.",
  },

  // =================================================================
  // [문제 85] 서술·작업형 (14점) - 애플리케이션 보안 (HTTP Request Smuggling)
  // =================================================================
  {
    id: 85,
    subjectId: "application",
    type: "descriptive",
    score: 14,
    domain: "애플리케이션 보안",
    title: "HTTP Request Smuggling(요청 밀수) 공격 원리 및 헤더 불일치 분석",
    description:
      "프론트엔드 프록시(WAF/로드밸런서)와 백엔드 웹 서버 간에 HTTP 요청 경계를 해석하는 방식의 차이를 악용하여 발생하는 'HTTP Request Smuggling(HTTP 요청 밀수)' 취약점에 관한 서술형 물음이다. 하위 3가지 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "HTTP Request Smuggling 공격이 발생하는 근본 원인인 프론트엔드와 백엔드 서버 간의 2가지 요청 본문 길이 명시 헤더 처리 불일치를 기술하시오.",
        answer:
          "HTTP 요청의 본문 길이를 나타내는 `Content-Length(CL)` 헤더와 청크 분할 전송을 지정하는 `Transfer-Encoding: chunked (TE)` 헤더가 하나의 HTTP 요청에 동시에 포함되었을 때, 두 서버 중 하나는 CL을 우선하고 다른 하나는 TE를 우선하여 요청 경계(끝점)를 서로 다르게 파싱하기 때문에 발생한다.",
        scoringCriteria:
          "Content-Length 및 Transfer-Encoding: chunked 두 헤더의 처리 불일치(CL-TE, TE-CL) 원인을 정확히 서술 시 5점",
      },
      {
        number: 2,
        question:
          "CL-TE 취약점 환경에서 프론트엔드는 Content-Length를 처리하고 백엔드는 Transfer-Encoding을 처리할 때, 악성 페이로드가 백엔드 서버의 다음 사용자 요청에 주입되는 메커니즘을 설명하시오.",
        answer:
          "프론트엔드는 Content-Length 길이만큼을 정상적인 단일 요청으로 인식하여 백엔드로 전달하지만, 백엔드는 Transfer-Encoding: chunked에 따라 청크 종료 바이트(`0\\r\\n\\r\\n`)까지만 처리하고 남은 나머지 데이터를 다음 수신 요청의 시작 부분으로 오인하여 연결 소켓 큐에 잔류시킨다. 그 결과 다음 무고한 사용자의 요청 앞에 공격자의 악성 요청 조각이 결합(밀수)되어 실행된다.",
        scoringCriteria:
          "청크 종료 후 잔여 데이터가 백엔드 큐에 남아 다음 사용자 요청과 결합되는 원리 서술 시 5점",
      },
      {
        number: 3,
        question:
          "HTTP Request Smuggling 공격을 방어하기 위한 웹 서버 및 프록시 설정 대책 2가지를 기술하시오.",
        answer:
          "1. HTTP/2 프로토콜 종단 간(End-to-End) 사용: 프론트엔드와 백엔드 간 통신을 프레임 기반 바이너리 프로토콜인 HTTP/2로 일원화하여 모호한 텍스트 헤더 파싱을 제거한다.\n2. 모호한 헤더 차단 및 프론트엔드 정규화: Content-Length와 Transfer-Encoding이 동시에 포함된 요청이나 난독화된 헤더가 유입되면 프론트엔드에서 즉시 400 Bad Request로 드롭(차단)한다.",
        scoringCriteria:
          "HTTP/2 도입 및 이중 헤더(CL/TE 동시 유입) 즉시 차단 서술 시 4점 (각 2점)",
      },
    ],
    answer: [
      "1. Content-Length(CL)와 Transfer-Encoding: chunked(TE) 헤더의 서버 간 우선순위 불일치(CL-TE, TE-CL)",
      "2. 백엔드가 청크 종료 후 남은 바이트를 파이프라인 상 다음 요청의 접두어로 오인 결합(밀수)",
      "3. 종단 간 HTTP/2 사용 및 CL/TE 동시 포함 모호한 요청 400 Bad Request 차단",
    ],
    scoringPoints: [
      "CL과 TE 헤더 불일치 원인 정확 기술 (5점)",
      "백엔드 큐 내 다음 요청 결합 메커니즘 서술 (5점)",
      "HTTP/2 일원화 및 모호 헤더 거부 방어 대책 (4점)",
    ],
    explanation:
      "• HTTP Request Smuggling 유형:\n- CL-TE: 프론트는 CL 기준 파싱, 백엔드는 TE 기준 파싱\n- TE-CL: 프론트는 TE 기준 파싱, 백엔드는 CL 기준 파싱\n- TE-TE: 양쪽 모두 TE를 지원하지만 헤더 난독화(`Transfer-Encoding: xchunked`)로 한쪽이 CL로 폴백",
    examTips:
      "최신 웹 보안 시험에서 고난도로 출제되는 트렌드 주제입니다. CL과 TE 헤더 간의 충돌을 명확히 이해해야 합니다.",
  },

  // =================================================================
  // [문제 86] 단답형 (3점) - 정보보안 일반 (지능형 지속 위협 - APT)
  // =================================================================
  {
    id: 86,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "정보보안 일반",
    title: "지능형 지속 위협(APT)의 개념 및 3대 핵심 특성",
    description:
      "불특정 다수가 아닌 특정 표적(기업, 국가기관 등)을 사전에 정하고, 장기간에 걸쳐 다양한 최신 공격 기법(스피어 피싱, 제로데이, 악성코드 등)을 잠복·우회 활용하여 목표를 은밀히 달성하는 공격 형태의 명칭과 약어(3글자)를 기술하시오.",
    answer: "APT (Advanced Persistent Threat / 지능형 지속 위협)",
    scoringPoints: [
      "영문 약어 'APT' 또는 '지능형 지속 위협' 기술 시 3점 인정",
    ],
    explanation:
      "• APT의 3대 요소:\n1. Advanced (지능형): 제로데이 취약점, 맞춤형 악성코드, 루트킷 등 고도화된 기술 사용\n2. Persistent (지속형): 목표가 달성될 때까지 수주~수개월 동안 은밀히 잠복하며 시스템 침투 유지\n3. Threat (위협): 명확한 경제적·군사적 목적을 지닌 조직화된 공격 주체",
    examTips:
      "기출 단골 단답형입니다. 침투(Infiltration) → 거점 확보 → 내부 정찰 → 권한 상승 → 자료 유출 단계로 이어집니다.",
  },

  // =================================================================
  // [문제 87] 단답형 (3점) - 네트워크 보안 (HTTP Read DoS / Slow Read)
  // =================================================================
  {
    id: 87,
    subjectId: "network",
    type: "short",
    score: 3,
    domain: "네트워크 보안",
    title: "TCP 윈도우 크기를 조작하는 Slow HTTP Read DoS 공격",
    description:
      "공격자가 웹 서버와 정상적인 TCP 3-Way Handshake를 맺고 대용량 리소스를 요청한 뒤, TCP 헤더의 `Window Size`를 매우 작은 크기(0 또는 수십 바이트)로 지속 설정하여 서버가 응답 데이터를 보내지 못하고 버퍼에 담아둔 채 TCP 연결 세션을 장시간 점유하게 만들어 자원을 고갈시키는 DoS 공격 기법은?",
    answer: "Slow HTTP Read DoS (또는 Slow Read DoS / Slowloris Read)",
    scoringPoints: [
      "Slow HTTP Read DoS (또는 Slow Read DoS) 명칭 정확히 기술 시 3점",
    ],
    explanation:
      "• Slow HTTP 공격 계열 비교:\n1. Slowloris (Slow HTTP Header): 요청 헤더 끝에 `\\r\\n\\r\\n`을 보내지 않고 불완전한 헤더를 천천히 전송\n2. RUDY (Slow HTTP POST): Content-Length를 크게 설정하고 본문(Body)을 1바이트씩 전송\n3. Slow HTTP Read DoS: 정상 요청 후 수신 윈도우 크기(Window Size)를 0으로 줄여 서버의 송신 버퍼와 연결 소켓 고갈",
    examTips:
      "Slowloris(헤더 조작), RUDY(바디 조작), Slow Read(TCP Window Size 조작) 3형제를 명확히 구분하세요.",
  },

  // =================================================================
  // [문제 88] 단답형 (3점) - 정보보안 일반 (오탐 False Positive vs 미탐 False Negative)
  // =================================================================
  {
    id: 88,
    subjectId: "general",
    type: "short",
    score: 3,
    domain: "정보보안 일반",
    title: "보안관제 및 탐지 시스템의 오탐(False Positive)과 미탐(False Negative)",
    description:
      "침입 탐지 시스템(IDS) 및 보안관제 장비에서 발생하는 탐지 오류 중 (A) 정상적인 트래픽이나 행위를 공격으로 잘못 판단하여 경보를 울리는 오류와, (B) 실제 공격이 발생하였음에도 정상 트래픽으로 오인하여 탐지하지 못하고 놓치는 오류의 명칭을 각각 쓰시오.",
    answer: [
      "(A): 오탐 (False Positive / 거짓 긍정)",
      "(B): 미탐 (False Negative / 거짓 부정)",
    ],
    scoringPoints: [
      "(A) 오탐 (False Positive) 정확히 기술 시 1.5점",
      "(B) 미탐 (False Negative) 정확히 기술 시 1.5점",
    ],
    explanation:
      "• 혼동 행렬(Confusion Matrix) 기준:\n- 정탐(True Positive): 공격을 공격으로 올바르게 탐지\n- 정탐(True Negative): 정상을 정상으로 올바르게 통과\n- 오탐(False Positive): 정상을 공격으로 잘못 판정 (업무 불편, 관리자 피로 증가)\n- 미탐(False Negative): 공격을 정상으로 잘못 판정 (시스템 침해 위험 초래, 가장 치명적)",
    examTips:
      "보안 관제에서 가장 위험한 것은 '미탐(False Negative)'입니다. 미탐은 침해 사고로 직결되기 때문입니다.",
  },

  // =================================================================
  // [문제 89] 서술·작업형 (14점) - 시스템 & 네트워크 보안 (HIDS vs NIDS)
  // =================================================================
  {
    id: 89,
    subjectId: "system",
    type: "descriptive",
    score: 14,
    domain: "시스템 보안",
    title: "호스트 기반 침입탐지시스템(HIDS)과 네트워크 기반 침입탐지시스템(NIDS) 비교",
    description:
      "조직의 보안 인프라를 감시하기 위해 운영하는 HIDS와 NIDS에 관한 서술형 물음이다. 하위 3가지 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "HIDS와 NIDS의 주요 감시 대상 및 데이터 수집 위치의 차이점을 각각 서술하시오.",
        answer:
          "1. HIDS(Host-based IDS): 개별 서버나 엔드포인트 호스트 내부에 에이전트로 설치되어 시스템 로그, 프로세스 실행, 파일 무결성(Tripwire 등), 레지스트리, 시스템 콜을 감시한다.\n2. NIDS(Network-based IDS): 스위치 미러링(SPAN) 포트나 네트워크 탭(TAP)에 설치되어 네트워크 세그먼트를 통과하는 원시 패킷(헤더 및 페이로드) 전체를 스니핑하여 감시한다.",
        scoringCriteria:
          "HIDS(서버 내부 로그/시스템콜/무결성) 및 NIDS(네트워크 패킷/스위치 미러링) 감시 대상 서술 시 5점",
      },
      {
        number: 2,
        question:
          "네트워크 패킷이 암호화(HTTPS/IPSec)된 환경에서 NIDS와 HIDS가 갖는 탐지 역량의 결정적 차이점을 서술하시오.",
        answer:
          "NIDS는 암호화된 트래픽(HTTPS 등)을 복호화하지 못하면 패킷 페이로드 내부의 악성 행위를 탐지하기 어렵다. 반면 HIDS는 서버가 트래픽을 복호화한 이후 애플리케이션 계층이나 운영체제 수준에서 실행되는 데이터와 행위를 직접 감시하므로 암호화 여부와 무관하게 정밀 탐지가 가능하다.",
        scoringCriteria:
          "암호화 트래픽 복호화 한계(NIDS)와 복호화 후 호스트 수준 탐지 가능(HIDS) 대비 서술 시 5점",
      },
      {
        number: 3,
        question:
          "대규모 전산망 환경에서 NIDS 대비 HIDS가 지닌 단점(운영 및 시스템 리소스 측면) 2가지를 서술하시오.",
        answer:
          "1. 개별 호스트의 CPU/메모리 부하: 에이전트 구동 및 로깅 분석으로 인해 대상 서버의 시스템 성능 저하를 초래할 수 있다.\n2. 설치 및 유지관리 복잡성: 보호 대상 서버마다 개별 OS에 맞춰 일일이 에이전트를 설치·패치·관리해야 하므로 관리 오버헤드가 크며, 서버 침해 시 HIDS 에이전트 자체가 무력화되거나 로그가 변조될 위험이 있다.",
        scoringCriteria:
          "호스트 자원 부하 및 관리 오버헤드/에이전트 무력화 위험 서술 시 4점 (각 2점)",
      },
    ],
    answer: [
      "1. HIDS(호스트 내부 로그/시스템콜 감시) vs NIDS(네트워크 미러링 패킷 감시)",
      "2. HTTPS 암호화 시 NIDS는 페이로드 검사 불가, HIDS는 복호화 후 호스트 레벨 감시 가능",
      "3. 단점: 서버 CPU/메모리 자원 점유 부하, 다수 서버 설치·관리 오버헤드 및 에이전트 변조 위험",
    ],
    scoringPoints: [
      "HIDS/NIDS 수집 위치 및 감시 데이터 정확 서술 (5점)",
      "암호화 트래픽 환경에서의 탐지 한계 및 장단점 비교 (5점)",
      "HIDS의 자원 부하 및 관리 비용 단점 서술 (4점)",
    ],
    explanation:
      "• HIDS의 대표 사례: OSSEC, Wazuh, Tripwire\n• NIDS의 대표 사례: Snort, Suricata, Zeek\n• 실제 엔터프라이즈 환경에서는 경계 NIDS로 외부 1차 탐지를 수행하고, 중요 DB/웹 서버에는 HIDS(또는 EDR)를 결합하는 다계층 심층 방어를 구현합니다.",
    examTips:
      "HIDS와 NIDS의 장단점 비교(암호화 환경 대응력, 리소스 부하, 감시 영역)는 14점 서술형 단골 주제입니다.",
  },

  // =================================================================
  // [문제 90] 단답형 (3점) - 정보보안 관리 및 법률 (위험관리 프로세스 및 명세서)
  // =================================================================
  {
    id: 90,
    subjectId: "law",
    type: "short",
    score: 3,
    domain: "정보보안 관리 및 법률",
    title: "위험분석, 위험평가, 위험관리의 개념 및 정보보호대책 명세서(SoA)",
    description:
      "ISMS-P 및 ISO 27001 인증 기준에서 (A) 조직의 수용 가능한 위험 수준(DoA)을 설정하고 위험 처리 전략을 수립하여 잔여 위험을 관리하는 전체 일련의 프로세스와, (B) 적용 가능한 보안 통제 항목 중 조직에 채택할 항목과 제외할 항목 및 그 사유를 기술한 최종 산출물 문서의 명칭을 쓰시오.",
    answer: [
      "(A): 위험관리 (Risk Management)",
      "(B): 정보보호대책 명세서 (또는 적용성 보고서 / SoA - Statement of Applicability)",
    ],
    scoringPoints: [
      "(A) 위험관리 (Risk Management) 1.5점",
      "(B) 정보보호대책 명세서 (또는 적용성 보고서 / SoA) 1.5점",
    ],
    explanation:
      "• 단계적 구분:\n1. 위험분석(Risk Analysis): 자산, 위협, 취약점을 식별하고 위험도를 산정하는 작업\n2. 위험평가(Risk Assessment): 산정된 위험도를 조직의 DoA(수용 가능 위험 수준)와 비교하여 우선순위를 매기는 작업\n3. 위험관리(Risk Management): 위험분석/평가 결과를 바탕으로 위험 처리(수용/감소/회피/전가)를 실행하고 지속 통제하는 전체 프레임워크\n• 정보보호대책 명세서(SoA):\n- 통제 항목별 적용 여부(Yes/No), 구현 현황, 제외 시 명확한 사유를 기재한 핵심 필수 문서",
    examTips:
      "ISMS-P 인증 심사의 필수 제출 문서인 '정보보호대책 명세서(적용성 보고서, SoA)'는 실기 단골 키워드입니다.",
  },

  // =================================================================
  // [문제 91] 단답형 (3점) - 시스템 보안 (윈도우 사용자 계정 컨트롤 - UAC)
  // =================================================================
  {
    id: 91,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "윈도우 사용자 계정 컨트롤(UAC) 메커니즘 및 권한 상승 방어",
    description:
      "윈도우 비스타 이후 도입된 보안 기능으로, 관리자 권한을 가진 계정이라도 평상시에는 표준 사용자 토큰으로 프로그램을 실행하다가 시스템 설정 변경이나 관리자 권한이 필요한 작업 시 사용자 동의 화면(Secure Desktop 팝업)을 띄워 악성코드의 무단 권한 상승을 통제하는 기술의 명칭과 약어(3글자)를 기술하시오.",
    answer: "UAC (사용자 계정 컨트롤 / User Account Control)",
    scoringPoints: [
      "영문 약어 'UAC' 또는 '사용자 계정 컨트롤' 정확히 기술 시 3점",
    ],
    explanation:
      "• UAC의 핵심 원리:\n1. 이중 토큰(Dual Token): 관리자 계정 로그인 시 '필터링된 표준 토큰'과 '전체 관리자 토큰' 2개를 발급\n2. 기본적으로 모든 프로세스는 표준 토큰으로 실행\n3. 높은 권한 요청 시(Shield 아이콘 프로그램 실행) UAC 프롬프트를 Secure Desktop(보안 데스크톱)에 표시하여 화면 스크린샷이나 후킹 조작을 차단하고 명시적 승인을 요구함",
    examTips:
      "윈도우 보안의 기초 메커니즘입니다. UAC 팝업 창이 뜨는 격리된 화면을 '보안 데스크톱(Secure Desktop)'이라 부릅니다.",
  },

  // =================================================================
  // [문제 92] 서술·작업형 (14점) - 정보보안 관리 및 법률 (개인정보 영향평가 PIA)
  // =================================================================
  {
    id: 92,
    subjectId: "law",
    type: "descriptive",
    score: 14,
    domain: "정보보안 관리 및 법률",
    title: "개인정보 영향평가(PIA) 수행 대상 기준 및 법정 고려사항 4가지",
    description:
      "개인정보보호법 제33조에 따른 '개인정보 영향평가(Privacy Impact Assessment)'에 관한 서술형 물음이다. 하위 2가지 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "공공기관이 개인정보 영향평가를 의무적으로 수행해야 하는 대상 기준 3가지를 관련 정보의 규모(정보주체 수) 관점에서 서술하시오.",
        answer:
          "1. 5만 명 이상의 민감정보 또는 고유식별정보의 처리가 수반되는 개인정보파일을 구축·운용·변경하려는 경우\n2. 50만 명 이상의 개인정보가 포함된 개인정보파일을 다른 개인정보파일과 연계하려는 경우\n3. 100만 명 이상의 정보주체에 관한 개인정보파일을 구축·운용·변경하려는 경우",
        scoringCriteria:
          "5만 명(민감/고유식별), 50만 명(연계), 100만 명(구축/운용) 3가지 기준을 정확히 제시 시 6점 (각 2점)",
      },
      {
        number: 2,
        question:
          "개인정보 영향평가를 수행할 때 반드시 고려하여 평가하여야 하는 법정 고려사항 4가지를 서술하시오.",
        answer:
          "1. 처리하는 개인정보의 수량 (규모)\n2. 개인정보가 침해될 경우 정보주체의 권리가 침해받을 가능성 및 그 위험 정도 (침해 위험성)\n3. 개인정보의 성질 및 종류 (민감정보, 고유식별정보 등 자산의 성격)\n4. 개인정보의 안전성 확보조치 기준에 따른 암호화, 접근 통제 등 기술적·물리적·관리적 보호조치 현황",
        scoringCriteria:
          "개인정보 수량, 권리 침해 위험 정도, 개인정보 성질/종류, 안전성 확보조치 수준 4가지를 서술 시 8점 (각 2점)",
      },
    ],
    answer: [
      "1. 공공기관 PIA 의무 기준: 5만 명(민감·고유식별), 50만 명(연계), 100만 명(구축·운용)",
      "2. PIA 법정 고려사항 4가지: ① 처리하는 개인정보의 수량, ② 정보주체 권리 침해 위험 정도, ③ 개인정보의 성질 및 종류, ④ 안전성 확보조치 수준",
    ],
    scoringPoints: [
      "PIA 수량 기준 5만/50만/100만 명 정확 서술 (6점)",
      "법정 고려사항 4가지 명확 서술 (8점)",
    ],
    explanation:
      "• 개인정보 영향평가(PIA):\n개인정보를 활용하는 새로운 시스템 도입이나 변경 시 정보주체의 사생활 침해 위험을 사전에 분석하고 개선 대책을 도출하는 제도입니다.\n• 공공기관 의무 기준 암기법: 5만(민감), 50만(연계), 100만(일반)",
    examTips:
      "개인정보보호법 서술형 1순위 문제입니다. 5만/50만/100만 숫자와 4대 고려사항은 백지에 완벽히 쓸 수 있어야 합니다.",
  },

  // =================================================================
  // [문제 93] 단답형 (3점) - 시스템 & 네트워크 보안 (무차별 모드 promiscuous mode)
  // =================================================================
  {
    id: 93,
    subjectId: "system",
    type: "short",
    score: 3,
    domain: "시스템 보안",
    title: "리눅스 로그의 promiscuous mode 경고와 네트워크 스니핑 공격",
    description:
      "보안 담당자가 리눅스 서버의 `/var/log/messages` 파일을 점검하던 중 다음과 같은 로그를 발견하였다. (A) 해당 네트워크 인터페이스가 활성화한 동작 모드의 명칭과, (B) 내부 침입자가 해당 모드를 켜서 수행하려는 대표적인 네트워크 공격 기법을 쓰시오.",
    scenario: "kernel: device eth0 entered promiscuous mode",
    answer: [
      "(A) 동작 모드: 무차별 모드 (Promiscuous Mode / 프로미스큐어스 모드)",
      "(B) 공격 기법: 스니핑 (Sniffing / 패킷 도청)",
    ],
    scoringPoints: [
      "(A) 무차별 모드 (Promiscuous Mode) 기술 시 1.5점",
      "(B) 스니핑 (Sniffing / 도청) 기술 시 1.5점",
    ],
    explanation:
      "• Promiscuous Mode (무차별 모드):\n- 일반적인 NIC(네트워크 카드)는 목적지 MAC 주소가 자신의 MAC 주소이거나 브로드캐스트인 패킷만 수신하고 나머지는 폐기합니다.\n- 그러나 tcpdump, Wireshark, 악성 스니퍼가 NIC를 '무차별 모드'로 전환하면, 목적지와 무관하게 해당 이더넷 세그먼트를 지나가는 모든 패킷을 OS 커널로 전달하여 도청(Sniffing)할 수 있게 됩니다.",
    examTips:
      "ifconfig eth0 명령어로 PROMISC 플래그가 켜져 있는지 확인하거나 `ip link show`로 점검합니다.",
  },

  // =================================================================
  // [문제 94] 서술·작업형 (14점) - 애플리케이션 보안 (데이터베이스 권한 관리 및 통제)
  // =================================================================
  {
    id: 94,
    subjectId: "application",
    type: "descriptive",
    score: 14,
    domain: "애플리케이션 보안",
    title: "데이터베이스(DBMS) 사용자 권한 관리 원칙 및 제한 대상 권한",
    description:
      "데이터베이스의 기밀성과 무결성을 보호하기 위해 일반 사용자 계정 및 웹 애플리케이션 연동 계정에 적용해야 하는 권한 통제 방안에 관한 서술형 물음이다. 하위 3가지 물음에 답하시오.",
    subItems: [
      {
        number: 1,
        question:
          "DB 사용자 권한 관리의 가장 기본이 되는 보안 원칙인 '최소 권한의 원칙(Principle of Least Privilege)'의 개념을 DB 운영 관점에서 설명하시오.",
        answer:
          "각 사용자와 애플리케이션 계정에 업무 수행에 반드시 필요한 최소한의 테이블 및 SQL 연산 권한(SELECT, INSERT, UPDATE 등)만 부여하고, 업무와 무관하거나 불필요한 관리자 권한 및 DDL/DCL 권한을 일체 배제하는 원칙이다.",
        scoringCriteria:
          "업무에 필요한 최소 권한만 부여하고 불필요한 권한을 배제한다는 핵심 개념 서술 시 4점",
      },
      {
        number: 2,
        question:
          "웹 애플리케이션 연동 계정이나 일반 사용자 계정에게 절대로 부여해서는 안 되는 위험한 DB 권한(또는 롤) 3가지를 서술하시오.",
        answer:
          "1. 데이터베이스 관리자 최고 권한 (DBA 롤, SUPER, SA, SYSDBA 등)\n2. 테이블/스키마 구조를 변경·삭제할 수 있는 DDL 권한 (DROP TABLE, ALTER TABLE 등)\n3. 다른 사용자에게 권한을 재부여할 수 있는 권한 (`WITH GRANT OPTION`)\n4. OS 시스템 명령 실행 및 파일 접근 프로시저 실행 권한 (Oracle의 `UTL_FILE`, MSSQL의 `xp_cmdshell` 등)",
        scoringCriteria:
          "DBA 관리자 권한, DROP/ALTER 등 DDL 권한, WITH GRANT OPTION, 시스템 프로시저 실행 권한 중 3가지를 명시 시 6점 (각 2점)",
      },
      {
        number: 3,
        question:
          "SQL 인젝션 공격이 발생하더라도 공격자가 민감한 전체 테이블을 일괄 조회하거나 타 계정의 테이블에 침범하지 못하도록 차단하는 DBMS 설계 및 권한 격리 기법 2가지를 서술하시오.",
        answer:
          "1. 뷰(View) 및 저장 프로시저(Stored Procedure)를 통한 간접 접근 제한: 원본 테이블 직접 조회 권한을 박탈하고 필요한 컬럼만 정의된 뷰(View)나 파라미터화된 저장 프로시저 실행 권한만 부여한다.\n2. 스키마 분리 및 전용 계정 격리: 애플리케이션 기능 단위(서비스별)로 DB 스키마와 계정을 엄격히 분리하여 타 업무 테이블에 대한 교차 접근(SELECT) 권한을 원천 차단한다.",
        scoringCriteria:
          "View/저장 프로시저 활용 제한 및 업무별 스키마/계정 격리 방안 서술 시 4점 (각 2점)",
      },
    ],
    answer: [
      "1. 최소 권한의 원칙: 업무에 반드시 필요한 최소한의 CRUD 권한만 부여",
      "2. 제한 대상 권한: DBA 롤, DROP/ALTER 등 DDL, WITH GRANT OPTION, OS 프로시저(xp_cmdshell 등)",
      "3. 격리 방안: 원본 테이블 대신 View/저장프로시저 권한만 부여, 서비스별 DB 스키마 및 계정 분리",
    ],
    scoringPoints: [
      "최소 권한의 원칙 개념 정확 서술 (4점)",
      "부여 금지 대상 권한(DBA, DROP/ALTER, WITH GRANT OPTION, 시스템 프로시저) 3가지 명시 (6점)",
      "View/Stored Procedure 활용 및 스키마 분리 격리 방안 서술 (4점)",
    ],
    explanation:
      "• DB 계정 권한 점검 가이드:\n- 웹 앱 계정에 `DBA` 롤이 부여되어 있으면 SQL 인젝션 한 번으로 DB 전체 탈취 및 OS 쉘 장악으로 직결됩니다.\n- `WITH GRANT OPTION`이 있으면 탈취된 계정으로 임의의 백도어 계정에 관리자 권한을 부여할 수 있어 절대 금기입니다.",
    examTips:
      "DB 보안 가이드에서 단골로 출제되는 서술형 문제입니다. DDL 배제, WITH GRANT OPTION 배제, 최소 권한 원칙을 키워드로 정리하세요.",
  },
];


