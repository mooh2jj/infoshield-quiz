import type { PracticalQuestion } from "./types";

export const SECURITY_PRACTICAL_TRENDS = {
  title: "정보보안기사 실기 최신 출제 트렌드 분석",
  summary:
    "단순 암기를 넘어 실제 리눅스/네트워크 설정 파일 구조 분석, Snort/iptables 실무 룰 작성, 최신 웹 공격 벡터(CORS, XSS 세부유형, 크리덴셜 스터핑) 및 ISMS-P 기반 위험관리 시나리오 서술 비중이 대폭 강화되었습니다.",
  keyPoints: [
    {
      domain: "시스템 & 네트워크",
      desc: "리눅스 계정/패스워드 파일 구조(/etc/shadow), 네트워크 프로토콜 보안(IPSec 세부 헤더/시퀀스 번호), 로그 분석 및 윈도우 보안 명령어",
    },
    {
      domain: "애플리케이션 & 공격 기법",
      desc: "XSS 세부 유형, HTTP Request Smuggling, Slow 계열 DoS, 크리덴셜 스터핑, OpenSSL Heartbleed 취약점 패치 및 후속 조치",
    },
    {
      domain: "보안 관리 & 법률",
      desc: "자산-위협-취약점 관계 분석, 정성적 위험 산정(델파이법 등), 위험 처리 4대 전략, 개인정보 처리자 의무사항 및 ISMS-P 인증 기준",
    },
  ],
};

export const SECURITY_PRACTICAL_QUESTIONS: PracticalQuestion[] = [
  {
    id: 1,
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
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
];
