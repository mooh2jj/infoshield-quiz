import type { SecurityPastExamRound } from "./types";

export const SECURITY_PAST_EXAM_2025_3: SecurityPastExamRound = {
  id: "2025-3",
  title: "2025년 제3회 정보보안기사 실기 기출 완제 복원",
  roundLabel: "2025년 3회",
  examDate: "2025년 11월 시행",
  overview: {
    summary:
      "2025년 11월(3회차) 기출 18문항 완제 복원입니다. 단답형 1~10번(shadow $6$·Salt·경고일수, IPSec ESP·Sequence Number, Windows net session 및 net share, 크리덴셜 스터핑, SDM/DDM 데이터 마스킹, L2 스위치 3종, 제로데이 및 Directory Traversal, 디지털 포렌식, 델파이 기법), 서술형 11~14번(SSO/EAM/IAM/MDM, Snort 최적화 offset/depth, 위험관리 3요소 및 위험감소, Union/Blind SQLi 및 XSS), 실무형 15~18번(리눅스 securetty/TMOUT/World Writable, xinetd TFTP 비활성화, SQLi 주석문 및 PreparedStatement, 리눅스 퍼미션 및 setfacl ACL 통제) 전 문항이 수록되었습니다.",
    difficulty: "중상",
    passRateEstimate: "약 11.4%",
    keyThemes: [
      "Linux /etc/shadow 패스워드 필드 구조 ($6$, Salt, 만료 경고일수)",
      "IPSec ESP 및 Replay 방어 Sequence Number",
      "Windows 세션(net session) 및 공유(net share) 명령어",
      "크리덴셜 스터핑 (Credential Stuffing)",
      "정적/동적 데이터 마스킹 (SDM vs DDM)",
      "L2 스위치 프레임 포워딩 3종 (Cut-Through, Store-and-Forward, Fragment-Free)",
      "통합 계정 관리 아키텍처 (SSO, EAM, IAM, MDM)",
      "Snort 탐지 룰 최적화 (오탐, 패킷 드랍, offset, depth)",
      "위험 관리 3요소 (자산, 위협, 취약점) 및 위험 감소",
      "웹 취약점 원리 (Union/Blind SQLi, Stored/Reflected XSS)",
      "리눅스 서버 점검 (/etc/securetty, TMOUT, World Writable)",
      "xinetd TFTP 비활성화 및 systemctl 재시작",
      "SQL Injection 주석(# vs --) 및 PreparedStatement",
      "리눅스 chown/chmod 및 POSIX setfacl 확장 권한 통제",
    ],
    analysis: [
      {
        domain: "시스템 보안",
        desc: "/etc/shadow(3점), net session(3점), net share(3점), 포렌식(3점), SDM/DDM(3점), 제로데이(3점), securetty/TMOUT/World Writable(14점), xinetd TFTP(14점), 파일 퍼미션 및 setfacl ACL(14점)",
      },
      {
        domain: "네트워크 보안",
        desc: "IPSec ESP/시퀀스 넘버(3점), L2 스위치 포워딩 3종(3점), Snort 최적화(12점)",
      },
      {
        domain: "애플리케이션 보안",
        desc: "크리덴셜 스터핑(3점), 경로 조작(3점), Union/Blind SQLi 및 XSS(12점), SQLi 주석 및 PreparedStatement(14점)",
      },
      {
        domain: "보안 관리 및 법률",
        desc: "델파이 기법(3점), SSO/EAM/IAM/MDM(12점), 위험 관리 3요소 및 위험 감소(12점)",
      },
    ],
  },
  questions: [
    // =================================================================
    // [단답형 1~10번] 문항당 3점
    // =================================================================
    {
      id: 1,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / 리눅스 계정",
      title: "리눅스 /etc/shadow 패스워드 필드 구조",
      description:
        "리눅스 시스템의 `/etc/shadow` 파일에서 추출한 다음 행을 보고 물음에 답하시오.",
      scenario: "secuser:$6$q8Yv...$p1Zk...:19600:0:90:7:::",
      subItems: [
        {
          number: 1,
          question: "`$6$`이 나타내는 해시 암호화 알고리즘의 명칭을 쓰시오.",
          answer: "SHA-512",
          scoringCriteria: "SHA-512 작성 시 1점",
        },
        {
          number: 2,
          question: "암호화된 문자열에서 레인보우 테이블 공격을 방지하기 위해 삽입된 난수 데이터 필드의 명칭을 쓰시오.",
          answer: "솔트 (Salt)",
          scoringCriteria: "솔트 (Salt) 작성 시 1점",
        },
        {
          number: 3,
          question: "마지막 숫자 `7`이 의미하는 바를 패스워드 정책 관점에서 서술하시오.",
          answer: "패스워드 만료 경고 일수 (패스워드 만료 7일 전부터 경고 메시지 출력)",
          scoringCriteria: "패스워드 만료 경고 일수 명시 시 1점",
        },
      ],
      answer: [
        "(1) SHA-512",
        "(2) 솔트 (Salt)",
        "(3) 패스워드 만료 경고 일수 (만료 7일 전부터 경고 메시지 출력)",
      ],
      scoringPoints: [
        "(1) SHA-512 (1점)",
        "(2) 솔트 (Salt) (1점)",
        "(3) 패스워드 만료 경고 일수 (1점)",
      ],
      explanation:
        "• `/etc/shadow` 필드 순서:\n`계정명:암호화패스워드:최종변경일:최소사용일수:최대사용일수(만료일):경고일수:유예기간:계정만료일:예약필드`\n• 알고리즘 식별자: $1=MD5, $2a=Blowfish, $5=SHA-256, $6=SHA-512.",
    },
    {
      id: 2,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크 보안 / IPSec",
      title: "IPSec 프로토콜 헤더 및 재생 공격 방지",
      description:
        "IPSec 프로토콜에서 다음 설명에 해당하는 헤더와 보안 메커니즘을 쓰시오.",
      subItems: [
        {
          number: 1,
          question: "IP 패킷 페이로드를 암호화하여 기밀성을 보장할 뿐만 아니라, 인증(무결성) 기능까지 함께 제공할 수 있는 헤더 프로토콜의 명칭을 쓰시오.",
          answer: "ESP (Encapsulating Security Payload)",
          scoringCriteria: "ESP 작성 시 1.5점",
        },
        {
          number: 2,
          question: "이전 세션에서 가로챈 패킷을 재전송하여 비인가 접근을 시도하는 리플레이 공격(Replay Attack)을 차단하기 위해 IPSec 헤더에 포함되는 일련번호 필드의 명칭을 쓰시오.",
          answer: "시퀀스 넘버 (Sequence Number / 순서 번호)",
          scoringCriteria: "시퀀스 넘버 또는 Sequence Number 작성 시 1.5점",
        },
      ],
      answer: [
        "(1) ESP (Encapsulating Security Payload)",
        "(2) 시퀀스 넘버 (Sequence Number / 순서 번호)",
      ],
      scoringPoints: [
        "(1) ESP (1.5점)",
        "(2) 시퀀스 넘버 / Sequence Number (1.5점)",
      ],
      explanation:
        "• AH는 인증/무결성만 제공하고 암호화(기밀성)는 제공하지 않음. ESP는 기밀성과 인증을 모두 지원.\n• 리플레이 공격 방어 요소: Sequence Number, Timestamp, Nonce(난수).",
    },
    {
      id: 3,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / Windows CLI",
      title: "Windows 세션 관리 CLI 명령어 (net session)",
      description:
        "Windows 서버 관리자가 원격 데스크톱(RDP) 및 파일 공유를 통해 시스템에 연결된 세션 목록을 확인하고, 특정 비인가 세션을 강제로 연결 해제하고자 할 때 사용하는 명령어와 옵션을 쓰시오.",
      answer: [
        "세션 목록 확인: net session",
        "강제 종료/삭제 옵션: net session /delete (또는 net session \\\\[컴퓨터이름] /delete)",
      ],
      scoringPoints: [
        "세션 확인 net session (1.5점)",
        "강제 종료 net session /delete (1.5점)",
      ],
      explanation:
        "• `net session`: Windows 서버에 원격 접속된 세션 목록을 조회합니다.\n• `net session /delete`: 모든 세션을 종료하거나 특정 컴퓨터명을 지정하여 연결을 강제 해제합니다.",
    },
    {
      id: 4,
      subjectId: "application",
      type: "short",
      score: 3,
      domain: "애플리케이션 보안 / 인증 공격",
      title: "사용자 인증 위협 및 대입 공격 (크리덴셜 스터핑)",
      description:
        "공격자가 사전에 유출된 대량의 계정 정보(ID/비밀번호 데이터베이스)를 입수한 후, 여러 사용자가 다양한 웹사이트에서 동일한 계정 정보를 재사용한다는 취약점을 노려 다른 웹 서비스나 포털에 무차별 대입하여 로그인을 시도하는 공격 기법을 쓰시오.",
      answer: "크리덴셜 스터핑 (Credential Stuffing)",
      scoringPoints: ["'크리덴셜 스터핑' 또는 'Credential Stuffing' 기술 시 3점"],
      explanation:
        "• 크리덴셜 스터핑은 단순 무차별 대입(Brute Force), 사전 공격(Dictionary Attack)과 구분되는 '기 유출된 크리덴셜 DB의 재사용 기반 대입' 기법입니다.",
    },
    {
      id: 5,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "데이터 보안 / 마스킹",
      title: "민감 데이터 비식별화 및 마스킹 기술 (SDM vs DDM)",
      description:
        "개인정보 및 중요 데이터 보호를 위한 데이터 마스킹 기술과 관련된 다음 설명을 읽고 (A)와 (B)에 들어갈 올바른 용어를 쓰시오.",
      scenario:
        "(A): 운영 데이터베이스의 실제 데이터를 테스트 및 개발 등 비운영 환경으로 복제하기 전, 원본 데이터의 패턴을 유지하면서 고정된 가짜 데이터로 일괄 영구 치환하는 기법.\n(B): 실제 원본 데이터는 변경하지 않은 채, 사용자의 권한이나 애플리케이션의 조회 요청 시점에 맞춰 실시간으로 데이터를 마스킹 처리하여 반환하는 기법.",
      answer: [
        "(A) 정적 데이터 마스킹 (SDM / Static Data Masking)",
        "(B) 동적 데이터 마스킹 (DDM / Dynamic Data Masking)",
      ],
      scoringPoints: [
        "(A) 정적 데이터 마스킹 / SDM (1.5점)",
        "(B) 동적 데이터 마스킹 / DDM (1.5점)",
      ],
      explanation:
        "• 개발/테스트계 이관 시 SDM(정적) 적용, 운영계 조회 권한 제어 시 DDM(동적) 적용 원리입니다.",
    },
    {
      id: 6,
      subjectId: "system",
      type: "short",
      score: 3,
      domain: "시스템 보안 / Windows CLI",
      title: "Windows 공유 폴더 확인 명령어 (net share)",
      description:
        "Windows 운영체제 환경에서 시스템에 설정되어 네트워크상에 노출된 공유 폴더 및 기본 관리 공유(C$, ADMIN$ 등) 자원의 목록을 확인할 때 사용하는 명령어를 쓰시오.",
      answer: "net share",
      scoringPoints: ["'net share' 정확히 기술 시 3점"],
      explanation:
        "• Windows 기본 공유 디렉터리 및 관리 공유 확인 명령어로, 취약점 진단 시 불필요한 기본 관리 공유 존재 여부를 점검할 때 사용합니다.",
    },
    {
      id: 7,
      subjectId: "network",
      type: "short",
      score: 3,
      domain: "네트워크 보안 / L2 스위칭",
      title: "L2 스위치 프레임 포워딩 방식 3종",
      description:
        "이더넷 L2 스위치가 수신한 프레임을 목적지 포트로 전달할 때 사용하는 다음 3가지 전송 방식의 명칭을 쓰시오.",
      scenario:
        "(1) 목적지 MAC 주소(앞 6바이트)만 수신하자마자 오류 검사 없이 즉시 목적지 포트로 고속 포워딩하는 방식\n(2) 전체 프레임을 버퍼에 모두 저장한 후 CRC 체크섬 오류 검사를 완료하여 정상 프레임만 전달하는 방식\n(3) 충돌 조각(Collision Fragment)을 걸러내기 위해 프레임의 최소 크기인 64바이트(512비트)까지만 읽은 후 오류가 없으면 전송하는 방식",
      answer: [
        "(1) Cut-Through",
        "(2) Store-and-Forward",
        "(3) Fragment-Free",
      ],
      scoringPoints: [
        "(1) Cut-Through (1점)",
        "(2) Store-and-Forward (1점)",
        "(3) Fragment-Free (1점)",
      ],
      explanation:
        "• 포워딩 지연(Latency)과 신뢰성(오류 검출) 간의 트레이드오프 비교입니다.",
    },
    {
      id: 8,
      subjectId: "application",
      type: "short",
      score: 3,
      domain: "애플리케이션 보안 / 취약점",
      title: "소프트웨어 취약점 및 경로 조작 공격",
      description:
        "다음 각 물음에 해당하는 용어 및 특수 문자열을 쓰시오.",
      scenario:
        "(1) 소프트웨어 개발 및 출시 후 보안 패치가 발표되기 전 취약점을 노려 감행하는 공격 기법을 쓰시오.\n(2) 파일 다운로드 취약점 등에서 상위 디렉터리로 이동하여 시스템 중요 파일(/etc/passwd 등)에 무단 접근할 때 악용하는 특수 문자열을 쓰시오.",
      answer: [
        "(1) 제로데이 공격 (Zero-Day Attack)",
        "(2) ../ (또는 디렉터리 트래버셜 / Path Traversal 문자열)",
      ],
      scoringPoints: [
        "(1) 제로데이 공격 / Zero-Day (1.5점)",
        "(2) ../ 또는 Directory Traversal (1.5점)",
      ],
      explanation:
        "• 패치 부재 구간의 위협(Zero-Day) 및 Path Traversal 입력값 검증 누락 공격 원리입니다.",
    },
    {
      id: 9,
      subjectId: "general",
      type: "short",
      score: 3,
      domain: "디지털 포렌식 / 법률",
      title: "전자적 증거 수집 및 분석 절차 (디지털 포렌식)",
      description:
        "PC, 서버, 스마트폰 등 다양한 디지털 저장 매체에 보관된 전자적 데이터를 법적 증거 능력을 갖추도록 과학적이고 체계적으로 수집, 보존, 분석, 보고하는 일련의 절차와 기술을 무엇이라 하는지 쓰시오.",
      answer: "디지털 포렌식 (Digital Forensics)",
      scoringPoints: ["'디지털 포렌식' 또는 'Digital Forensics' 기술 시 3점"],
      explanation:
        "• 디지털 포렌식 5대 기본 원칙: 정당성, 신속성, 연계보관성(Chain of Custody), 무결성, 재현성.",
    },
    {
      id: 10,
      subjectId: "law",
      type: "short",
      score: 3,
      domain: "정보보안 관리 / 위험 분석",
      title: "정성적 위험 분석 기법 (델파이 기법)",
      description:
        "다양한 분야의 전문가 패널을 구성한 후, 전문가 간의 심리적 편견이나 상호 간섭을 배제하기 위해 익명성을 보장한 상태에서 설문 조사를 반복 수행하여 의견을 종합·수렴하는 정성적 위험 분석 기법의 명칭을 쓰시오.",
      answer: "델파이 기법 (Delphi Technique)",
      scoringPoints: ["'델파이 기법' 또는 'Delphi' 기술 시 3점"],
      explanation:
        "• 델파이(익명/반복 설문), 시나리오법, 순위결정법, 브레인스토밍 등 정성적 위험분석 방법론 비교입니다.",
    },

    // =================================================================
    // [서술형 11~14번] 문항당 12점
    // =================================================================
    {
      id: 11,
      subjectId: "general",
      type: "descriptive",
      score: 12,
      domain: "정보보안 관리 / 계정·권한 아키텍처",
      title: "기업 통합 인증 및 계정/권한 관리 아키텍처 (SSO, EAM, IAM, MDM)",
      description:
        "기업 엔터프라이즈 환경에서 사용자의 계정 및 권한을 관리하기 위한 핵심 솔루션들에 대한 다음 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "여러 이기종 시스템에 매번 로그인하지 않고 한 번의 인증으로 접근할 수 있도록 연계하는 시스템의 명칭과 약어를 쓰시오.",
          answer: "SSO (Single Sign-On / 싱글 사인온)",
          scoringCriteria: "SSO 명시 시 3점",
        },
        {
          number: 2,
          question: "SSO 기능에 더해 사용자 역할(Role)이나 그룹에 따라 메뉴 및 시스템별 세부 접근 권한(Authorization)을 중앙에서 통제하는 시스템의 명칭과 약어를 쓰시오.",
          answer: "EAM (Extranet Access Management / 통합 권한 관리)",
          scoringCriteria: "EAM 명시 시 3점",
        },
        {
          number: 3,
          question: "인사 시스템(HR)과 연동하여 계정 생성, 권한 부여, 부서 이동 및 퇴사 시 권한 회수 등 계정 라이프사이클 전반을 자동화하여 통합 관리하는 시스템의 명칭과 약어를 쓰시오.",
          answer: "IAM (Identity and Access Management / 통합 계정 및 권한 관리)",
          scoringCriteria: "IAM 명시 시 3점",
        },
        {
          number: 4,
          question: "개인 모바일 기기를 업무에 활용하는 BYOD 환경에서 단말기를 중앙에서 원격 제어 및 통제(원격 잠금, 데이터 삭제 등)하기 위한 관리 솔루션의 명칭과 약어를 쓰시오.",
          answer: "MDM (Mobile Device Management / 모바일 기기 관리)",
          scoringCriteria: "MDM 명시 시 3점",
        },
      ],
      answer: [
        "(1) SSO (Single Sign-On / 싱글 사인온)",
        "(2) EAM (Extranet Access Management / 통합 권한 관리)",
        "(3) IAM (Identity and Access Management / 통합 계정 및 권한 관리)",
        "(4) MDM (Mobile Device Management / 모바일 기기 관리)",
      ],
      scoringPoints: [
        "(1) SSO (3점)",
        "(2) EAM (3점)",
        "(3) IAM (3점)",
        "(4) MDM (3점)",
      ],
      explanation:
        "• SSO(인증 통합) -> EAM(인증 + 인가 통제) -> IAM(계정 라이프사이클 프로비저닝 자동화)으로의 엔터프라이즈 확장 단계 및 BYOD 단말 제어 MDM 이해.",
    },
    {
      id: 12,
      subjectId: "network",
      type: "descriptive",
      score: 12,
      domain: "네트워크 보안 / IDS 최적화",
      title: "침입탐지시스템(Snort) 룰 최적화 및 오탐/미탐 대응",
      description:
        "Snort 침입탐지시스템의 탐지 룰을 작성할 때 발생할 수 있는 문제점과 페이로드 옵션 설정에 대한 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "룰 패턴을 지나치게 단순하거나 느슨하게 등록했을 때 관제 환경에서 발생하는 대표적인 문제점 2가지를 서술하시오.",
          answer: [
            "1. 오탐(False Positive)의 급증: 정상적인 트래픽을 공격으로 오인하여 경보가 과다 발생하고 관제 피로도 증대",
            "2. 서버 및 네트워크 부하 증가: 모든 패킷의 전체 페이로드를 매번 전수 검사하게 되어 패킷 드랍 및 처리 지연 발생",
          ],
          scoringCriteria: "오탐 급증 (3점), 센서 부하 및 패킷 드랍 (3점) 총 6점",
        },
        {
          number: 2,
          question: "탐지 정확도를 높이고 시스템 부하를 줄이기 위해 패킷 페이로드 내에서 문자열 검색을 시작할 상대적 위치를 지정하는 옵션과, 검색할 최대 바이트 범위를 지정하는 옵션의 명칭을 각각 쓰시오.",
          answer: [
            "시작 위치 지정 옵션: offset",
            "검색 범위(깊이) 지정 옵션: depth",
          ],
          scoringCriteria: "offset (3점), depth (3점) 총 6점",
        },
      ],
      answer: [
        "1. 광범위 룰 문제점 2가지:\n• 오탐(False Positive) 급증으로 관제 피로도 증대\n• 센서 시스템 부하 급증으로 패킷 드랍 및 지연 발생",
        "2. 페이로드 검색 옵션:\n• 시작 위치: offset\n• 검색 범위(깊이): depth",
      ],
      scoringPoints: [
        "오탐(False Positive) 급증 서술 (3점)",
        "센서 부하 및 패킷 드랍 서술 (3점)",
        "시작 위치 offset (3점)",
        "검색 범위 depth (3점)",
      ],
      explanation:
        "• `content:\"pattern\"; offset:A; depth:B; distance:C; within:D;` 옵션의 역할 구분.",
    },
    {
      id: 13,
      subjectId: "law",
      type: "descriptive",
      score: 12,
      domain: "정보보안 관리 / 위험 관리",
      title: "정보보호 위험 관리 3요소 정의 및 위험 대응 전략",
      description:
        "위험 분석 및 평가 체계에서 핵심 3요소인 (1) 자산(Asset), (2) 위협(Threat), (3) 취약점(Vulnerability)의 정의를 각각 서술하고, (4) 이 중 보안 대책을 적용하여 손실 발생 가능성을 낮추는 대표적인 위험 처리 전략의 명칭을 쓰시오.",
      subItems: [
        {
          number: 1,
          question: "자산(Asset)의 정의를 서술하시오.",
          answer: "조직의 업무 수행에 가치가 있으며, 기밀성·무결성·가용성이 훼손될 경우 조직에 손실을 초래할 수 있는 유·무형의 정보 자원.",
          scoringCriteria: "가치가 있고 훼손 시 손실을 초래하는 정보 자원 명시 시 3점",
        },
        {
          number: 2,
          question: "위협(Threat)의 정의를 서술하시오.",
          answer: "자산에 잠재적인 손실이나 피해를 초래할 수 있는 내·외부의 원인, 사건, 주체(해커, 악성코드, 자연재해 등).",
          scoringCriteria: "잠재적 손실이나 피해를 초래할 수 있는 원인/사건/주체 명시 시 3점",
        },
        {
          number: 3,
          question: "취약점(Vulnerability)의 정의를 서술하시오.",
          answer: "위협이 자산에 악영향을 미칠 수 있는 계기를 제공하는 시스템, 네트워크, 관리 절차 등에 내재된 기술적·관리적 약점.",
          scoringCriteria: "자산에 악영향을 미칠 수 있는 내재된 기술적·관리적 약점 명시 시 3점",
        },
        {
          number: 4,
          question: "보안 대책을 적용하여 손실 발생 가능성을 낮추는 대표적인 위험 처리 전략의 명칭을 쓰시오.",
          answer: "위험 감소 (Risk Reduction / 위험 완화 / Mitigation)",
          scoringCriteria: "위험 감소 또는 위험 완화 기술 시 3점",
        },
      ],
      answer: [
        "(1) 자산(Asset): 업무에 가치가 있고 훼손 시 조직에 손실을 초래할 수 있는 유·무형의 정보 자원",
        "(2) 위협(Threat): 자산에 손실이나 피해를 초래할 수 있는 내·외부 원인, 사건, 주체",
        "(3) 취약점(Vulnerability): 위협 발생의 계기를 제공하는 시스템/절차에 내재된 기술적·관리적 약점",
        "(4) 위험 대응 전략: 위험 감소 (Risk Reduction / 위험 완화)",
      ],
      scoringPoints: [
        "자산 정의 (3점)",
        "위협 정의 (3점)",
        "취약점 정의 (3점)",
        "위험 감소 / 위험 완화 (3점)",
      ],
      explanation:
        "• 위험 관리 4대 대응 전략: 감소(Reduction/Mitigation), 회피(Avoidance), 전가(Transference), 수용(Acceptance).",
    },
    {
      id: 14,
      subjectId: "application",
      type: "descriptive",
      score: 12,
      domain: "애플리케이션 보안 / 웹 취약점",
      title: "웹 취약점 유형별 공격 원리 (SQL Injection, XSS)",
      description:
        "웹 애플리케이션 취약점과 관련된 다음 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "Union Based SQLi와 Blind SQLi (Boolean / Time Based)의 공격 특징을 각각 간략히 서술하시오.",
          answer: [
            "• Union Based SQLi: 기존 정상 쿼리에 UNION 연산자를 결합하여 공격자가 원하는 추가 DB 테이블의 레코드를 웹 응답 화면에 직접 출력시켜 데이터를 탈취하는 기법.",
            "• Blind SQLi: 쿼리 결과 에러나 데이터가 화면에 출력되지 않을 때, 참/거짓 조건에 따른 HTTP 응답 차이(Boolean-based) 또는 응답 지연 시간(Time-based, sleep() 등)을 측정하여 한 글자씩 유추하는 기법.",
          ],
          scoringCriteria: "Union 기반(3점), Blind 기반(3점) 총 6점",
        },
        {
          number: 2,
          question: "XSS(Cross Site Scripting) 공격 중 Stored XSS와 Reflected XSS의 악성 스크립트 전달 및 저장 위치의 차이점을 서술하시오.",
          answer: [
            "• Stored XSS: 악성 스크립트가 웹 서버의 데이터베이스(DB)나 파일에 영구 저장된 후, 해당 게시글을 열람하는 모든 피해자 브라우저에서 실행됨.",
            "• Reflected XSS: 악성 스크립트가 DB에 저장되지 않고, 공격자가 유포한 URL 파라미터나 요청값에 포함되어 전달된 후 서버 응답 페이지를 통해 사용자 브라우저로 즉시 반사되어 실행됨.",
          ],
          scoringCriteria: "Stored(DB 영구 저장) 3점, Reflected(URL 파라미터 및 즉시 반사) 3점 총 6점",
        },
      ],
      answer: [
        "1. SQL Injection:\n• Union Based: UNION 연산자로 비인가 DB 데이터를 정상 응답 화면에 결합 출력\n• Blind: 화면에 데이터가 노출되지 않을 때 참/거짓 반응 또는 sleep() 지연 시간으로 유추",
        "2. XSS 차이점:\n• Stored: 악성 스크립트가 웹 서버 DB에 저장되어 조회자에게 지속 실행됨\n• Reflected: DB 저장 없이 URL 쿼리 파라미터를 통해 서버 응답으로 즉시 반사 실행됨",
      ],
      scoringPoints: [
        "Union Based SQLi 원리 (3점)",
        "Blind SQLi 원리 (3점)",
        "Stored XSS 저장 위치 및 전달 (3점)",
        "Reflected XSS 전달 및 미저장 (3점)",
      ],
      explanation:
        "• OWASP Top 10 핵심 웹 취약점인 SQL Injection과 XSS의 세부 유형별 차이점을 명확히 비교하는 문제입니다.",
    },

    // =================================================================
    // [실무형 15~18번] 문항당 14점 (실전 2문항 선택)
    // =================================================================
    {
      id: 15,
      subjectId: "system",
      type: "practical",
      score: 14,
      domain: "시스템 보안 / 리눅스 점검",
      title: "리눅스 서버 계정 및 원격 접속 취약점 점검 실무",
      description:
        "주요정보통신기반시설 기술적 취약점 분석·평가 기준에 따른 서버 보안 점검과 관련된 물음에 답하시오.",
      subItems: [
        {
          number: 1,
          question: "루트(root) 계정의 원격 접속을 차단하기 위해 `/etc/securetty` 파일에서 조치해야 하는 터미널 설정 방안을 서술하시오.",
          answer: "`console`만 남겨두고 가상 터미널 항목인 `pts/0`, `pts/1`, `pts/2` 등을 모두 삭제하거나 주석 처리하여 콘솔을 통한 직접 로그인만 허용하고 텔넷 등의 원격 root 로그인을 원천 차단함.",
          scoringCriteria: "pts/* 가상 터미널 삭제 또는 주석 처리 명시 시 5점",
        },
        {
          number: 2,
          question: "사용자의 로그인 세션 방치를 막기 위해 환경 설정 파일(`/etc/profile`)에서 세션 유효 시간을 10분(초 단위)으로 설정하는 환경변수 구문을 쓰시오.",
          answer: "export TMOUT=600 (또는 TMOUT=600)",
          scoringCriteria: "export TMOUT=600 또는 TMOUT=600 명시 시 4.5점",
        },
        {
          number: 3,
          question: "일반 사용자의 파일 임의 변조를 막기 위해 시스템 내 World Writable(누구나 쓰기 가능한) 파일을 탐색하고 권한을 회수하는 CLI 명령어를 쓰시오.",
          answer: [
            "탐색: find / -type f -perm -2 -ls (또는 -perm -0002)",
            "권한 회수: chmod o-w <파일명>",
          ],
          scoringCriteria: "탐색 find 명령어(2.5점), 권한 회수 chmod o-w(2점) 총 4.5점",
        },
      ],
      answer: [
        "1. /etc/securetty: pts/0, pts/1 등 가상 터미널을 제거/주석 처리하여 콘솔만 유지",
        "2. 세션 타임아웃: export TMOUT=600",
        "3. World Writable 조치:\n• 탐색: find / -type f -perm -2 -ls\n• 회수: chmod o-w <파일명>",
      ],
      scoringPoints: [
        "securetty pts/* 제거 (5점)",
        "export TMOUT=600 (4.5점)",
        "find -perm -2 및 chmod o-w (4.5점)",
      ],
      explanation:
        "• KISA 점검 가이드 U-01(root 원격접속 제한), U-44(세션 타임아웃), U-15(World Writable 파일 점검) 매핑 항목입니다.",
    },
    {
      id: 16,
      subjectId: "system",
      type: "practical",
      score: 14,
      domain: "시스템 보안 / xinetd 관리",
      title: "xinetd 기반 슈퍼데몬 불필요 서비스 비활성화 실무",
      description:
        "리눅스 시스템에서 비인가 정보 유출을 유발할 수 있는 TFTP 서비스가 활성화되어 있는지 점검하고자 한다. `/etc/xinetd.d/tftp` 설정 파일의 내용이 다음과 같을 때 물음에 답하시오.",
      scenario: `service tftp
{
    socket_type     = dgram
    protocol        = udp
    wait            = yes
    user            = root
    server          = /usr/sbin/in.tftpd
    server_args     = -s /var/lib/tftpboot
    disable         = no
}`,
      subItems: [
        {
          number: 1,
          question: "현재 설정 상태에서 TFTP 서비스의 활성화 여부를 쓰고 그 근거를 서술하시오.",
          answer: "활성화 상태. `disable = no`로 설정되어 있어 xinetd 데몬 구동 시 TFTP 서비스가 활성화되어 실행된다.",
          scoringCriteria: "활성화 상태 및 disable = no 근거 서술 시 4.5점",
        },
        {
          number: 2,
          question: "보안 취약점 조치 가이드에 따라 해당 서비스를 완전히 비활성화하기 위해 수정해야 할 지시자와 값을 쓰시오.",
          answer: "disable = yes",
          scoringCriteria: "disable = yes 작성 시 5점",
        },
        {
          number: 3,
          question: "설정 변경 후 데몬에 변경 사항을 즉시 반영하기 위한 서비스 재시작 명령어를 쓰시오.",
          answer: "systemctl restart xinetd (또는 service xinetd restart)",
          scoringCriteria: "systemctl restart xinetd 작성 시 4.5점",
        },
      ],
      answer: [
        "1. 활성화 여부: 활성화 상태 (근거: disable = no 설정)",
        "2. 비활성화 수정: disable = yes",
        "3. 재시작 명령어: systemctl restart xinetd",
      ],
      scoringPoints: [
        "활성화 판단 및 disable = no 근거 (4.5점)",
        "disable = yes 지시자 (5점)",
        "systemctl restart xinetd (4.5점)",
      ],
      explanation:
        "• TFTP는 인증 없이 UDP/69 포트를 통해 파일을 전송하는 취약한 프로토콜이므로 반드시 `disable = yes`로 비활성화해야 합니다.",
    },
    {
      id: 17,
      subjectId: "application",
      type: "practical",
      score: 14,
      domain: "애플리케이션 보안 / SQL 인젝션",
      title: "SQL Injection 취약점 분석 및 입력값 변조 원리",
      description:
        "웹 로그인 검증 로직에서 취약한 동적 SQL 쿼리가 다음과 같이 구성되어 있다. 물음에 답하시오.",
      scenario: "SELECT * FROM users WHERE user_id = '$id' AND user_pw = '$pw';",
      subItems: [
        {
          number: 1,
          question: "공격자가 패스워드를 모르는 상태에서 `admin` 계정으로 인증을 우회하기 위해 `$id` 입력창에 주입할 수 있는 인젝션 문자열 예시 2가지를 쓰시오. (단, 공백 및 주석 처리 문자 활용)",
          answer: [
            "예시 1: admin' --",
            "예시 2: admin' # (또는 admin' or '1'='1)",
          ],
          scoringCriteria: "인젝션 예시 2가지 제시 시 5점",
        },
        {
          number: 2,
          question: "데이터베이스 종류별(MySQL, Oracle) 인라인 주석 처리 기호의 차이점을 서술하시오.",
          answer: [
            "• MySQL: `#` 또는 `-- ` (하이픈 2개 뒤 공백 필수), `/* */` 지원",
            "• Oracle: `--` (하이픈 2개), `/* */` 지원 (`#`은 지원하지 않음)",
          ],
          scoringCriteria: "MySQL(#, --[공백]) 및 Oracle(--) 주석 차이 서술 시 4.5점",
        },
        {
          number: 3,
          question: "소스코드 레벨에서 이러한 동적 문자열 결합 취약점을 근본적으로 방지하기 위해 적용해야 하는 구현 기법을 쓰시오.",
          answer: "PreparedStatement (파라미터화된 쿼리 / Parameterized Query) 사용 및 시큐어 코딩(입력값 화이트리스트 검증)",
          scoringCriteria: "PreparedStatement 또는 파라미터화된 쿼리 명시 시 4.5점",
        },
      ],
      answer: [
        "1. admin 우회 입력값 예시:\n• admin' --\n• admin' # (또는 admin' or '1'='1)",
        "2. DB별 주석 기호:\n• MySQL: # 또는 -- (뒤에 반드시 공백 포함)\n• Oracle: -- (하이픈 2개, #은 미지원)",
        "3. 근본 대책: PreparedStatement(파라미터화된 쿼리) 적용",
      ],
      scoringPoints: [
        "인젝션 우회 문자열 2가지 (5점)",
        "MySQL vs Oracle 주석 기호 차이 (4.5점)",
        "PreparedStatement 시큐어 코딩 (4.5점)",
      ],
      explanation:
        "• DB 엔진별 주석 구문 차이 및 동적 쿼리 컴파일 vs 바인딩 변수 분리 원리입니다.",
    },
    {
      id: 18,
      subjectId: "system",
      type: "practical",
      score: 14,
      domain: "시스템 보안 / 리눅스 권한 관리",
      title: "Linux 파일 시스템 퍼미션 및 ACL 권한 통제",
      description:
        "보안 관리자가 시스템 내 중요 설정 파일 `/etc/app_config.conf`에 대해 최소 권한 원칙을 적용하고자 한다. 다음 요구조건을 충족하는 리눅스 명령어를 작성하시오.\n\n[요구조건]\n1. 소유자는 root, 소유 그룹은 secadmin으로 변경할 것.\n2. 소유자는 읽기/쓰기(rw), 소유 그룹은 읽기 전용(r), 기타 사용자는 모든 접근 권한을 박탈(---)할 것.\n3. 특정 개발자 계정(`devuser`)에 대해서만 기본 POSIX 권한 외에 추가적으로 읽기(r) 권한을 부여하는 POSIX ACL 명령을 적용할 것.",
      subItems: [
        {
          number: 1,
          question: "요구조건 1(소유자 root, 소유 그룹 secadmin) 명령어",
          answer: "chown root:secadmin /etc/app_config.conf",
          scoringCriteria: "chown root:secadmin /etc/app_config.conf 작성 시 4.5점",
        },
        {
          number: 2,
          question: "요구조건 2(소유자 rw-, 그룹 r--, 기타 ---) 명령어",
          answer: "chmod 640 /etc/app_config.conf",
          scoringCriteria: "chmod 640 /etc/app_config.conf 작성 시 4.5점",
        },
        {
          number: 3,
          question: "요구조건 3(devuser 계정에 읽기 권한 추가 부여) POSIX ACL 명령어",
          answer: "setfacl -m u:devuser:r /etc/app_config.conf",
          scoringCriteria: "setfacl -m u:devuser:r /etc/app_config.conf 작성 시 5점",
        },
      ],
      answer: [
        "1단계 (소유자/그룹 변경): chown root:secadmin /etc/app_config.conf",
        "2단계 (권한 변경): chmod 640 /etc/app_config.conf",
        "3단계 (ACL 설정): setfacl -m u:devuser:r /etc/app_config.conf",
      ],
      codeBlock: {
        language: "bash",
        code: `# 1. 소유자 및 그룹 변경
chown root:secadmin /etc/app_config.conf

# 2. 8진수 퍼미션 설정 (rw-r-----)
chmod 640 /etc/app_config.conf

# 3. devuser 계정에 개별 읽기(r) ACL 부여
setfacl -m u:devuser:r /etc/app_config.conf

# 확인 명령어
getfacl /etc/app_config.conf`,
      },
      scoringPoints: [
        "chown root:secadmin (4.5점)",
        "chmod 640 (4.5점)",
        "setfacl -m u:devuser:r (5점)",
      ],
      explanation:
        "• 전통적 3단계 8진수 퍼미션(`chmod 640`)과 현대 엔터프라이즈 환경에서 필수적인 `setfacl` / `getfacl` 활용 능력 평가 문제입니다.",
    },
  ],
};
