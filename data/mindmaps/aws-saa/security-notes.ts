import type { MindmapNodeNote } from "@/types/mindmap";

export const SECURITY_NOTES: Record<string, MindmapNodeNote> = {
  "IAM": {
    title: "IAM 핵심 개념과 최소 권한 원칙",
    importance: 5,
    badge: "Domain 1 필수 1순위",
    definition: "AWS 리소스에 대한 접근 제어 서비스로, 장기 자격증명(Access Key) 대신 임시 자격증명(STS)과 IAM Role을 활용하는 것이 보안 표준이다.",
    keyPoints: [
      "최소 권한(Least Privilege): 업무 수행에 필요한 최소한의 작업만 명시적 허용",
      "IAM Role: 장기 키 노출 방지, STS AssumeRole로 15분~12시간 임시 토큰 발급",
      "인스턴스 프로파일: EC2 인스턴스에 IAM 역할을 안전하게 전달하는 컨테이너 객체",
    ],
    examTip: "EC2나 Lambda에 자격증명을 하드코딩하지 말고 무조건 'IAM Role(인스턴스 프로파일)' 연결!",
  },
  "SCP": {
    title: "AWS Organizations 서비스 제어 정책 (SCP)",
    importance: 5,
    badge: "상급 빈출 가드레일",
    definition: "Organizations 내 모든 회원 계정에 적용되는 중앙 집중식 최대 권한 가드레일 정책이다.",
    keyPoints: [
      "최우선 순위: 명시적 거부(Explicit Deny)가 모든 IAM 정책을 오버라이드",
      "루트 사용자 제약: 회원 계정의 루트(Root) 사용자조차도 SCP의 Deny를 우회 불가",
      "권한 경계(Permissions Boundary): 개별 IAM 엔터티의 최대 권한을 제한하지만 루트 사용자에게는 미적용",
    ],
    examTip: "문제에 '회원 계정의 루트 사용자까지 통제/금지'가 나오면 정답은 100% 'SCP'!",
  },
  "외부 ID": {
    title: "외부 ID 연동 (Identity Center vs Cognito)",
    importance: 4,
    badge: "엔터프라이즈 인증",
    definition: "사내 IdP(Active Directory, Okta) 또는 일반 B2C 사용자를 AWS 인프라 및 앱과 연동하는 솔루션.",
    keyPoints: [
      "IAM Identity Center (기존 AWS SSO): SAML 2.0/OIDC 기반으로 사내 직원의 멀티 계정 통합 로그인 지원",
      "Cognito User Pool: 모바일/웹 앱 최종 사용자 '인증(Authentication)' — 회원가입, 로그인, JWT 발급",
      "Cognito Identity Pool: 인증된 사용자에게 임시 AWS 자격증명 '인가(Authorization)' — S3 직접 업로드 허용",
    ],
    examTip: "직원 SSO = Identity Center, 고객 앱 로그인 = User Pool, 고객에게 S3 접근 권한 = Identity Pool!",
  },
  "KMS": {
    title: "AWS KMS & 봉투 암호화 (Envelope Encryption)",
    importance: 5,
    badge: "암호화 핵심",
    definition: "데이터 암호화 키를 생성 및 통제하는 완전관리형 FIPS 140-2 검증 키 관리 서비스.",
    keyPoints: [
      "고객 관리형 키(CMK): 자동 로테이션(1년 주기) 설정 가능, 키 정책(Key Policy)으로 접근 제어",
      "봉투 암호화: 대용량 데이터는 DEK(데이터 암호화 키)로 암호화하고, DEK는 KMS KEK(키 암호화 키)로 암호화하여 저장",
      "다중 리전 키(Multi-Region Keys): 동일한 키 ID와 메타데이터를 여러 리전에 복제하여 교차 리전 재암호화 없이 복호화",
    ],
    examTip: "KMS API 호출 제한(Throttling)을 방지하고 4KB 이상 데이터를 암호화하려면 '봉투 암호화' 적용!",
  },
  "자격증명": {
    title: "Secrets Manager vs SSM Parameter Store",
    importance: 5,
    badge: "시험 빈출 비교표",
    definition: "DB 비밀번호, API 토큰 등 민감한 자격증명을 안전하게 보관하고 관리하는 두 서비스의 차이점.",
    keyPoints: [
      "Secrets Manager: RDS, DocumentDB, Redshift 비밀번호 자동 교체(Rotation Lambda) 내장, 유료($0.40/월)",
      "SSM Parameter Store: 계층형 구조(/dev/db/password), KMS 암호화(SecureString), 표준 파라미터는 완전 무료",
      "자동 로테이션 필요 여부가 두 서비스를 가르는 핵심 판별 기준",
    ],
    examTip: "문제에 '자동 교체(Automatic Rotation)'가 나오면 무조건 Secrets Manager! 단순 환경변수 무료 저장은 Parameter Store!",
  },
  "S3": {
    title: "S3 심층 보안 및 Object Lock (WORM)",
    importance: 5,
    badge: "데이터 보존 규정",
    definition: "S3 버킷의 데이터 변조·삭제를 방지하고 오리진을 안전하게 격리하는 심층 방어 체계.",
    keyPoints: [
      "S3 Object Lock Compliance 모드: 보존 기간 동안 루트 사용자를 포함한 그 누구도 객체 버전 삭제 불가",
      "S3 Object Lock Governance 모드: 특수 권한(s3:BypassGovernanceRetention) 보유자는 삭제 및 잠금 해제 가능",
      "S3 버킷 정책 + OAC(Origin Access Control): CloudFront만 S3를 읽을 수 있도록 퍼블릭 차단 상태로 허용",
      "MFA Delete: 버전 관리 활성화 상태에서 영구 삭제 시 루트의 MFA 토큰 입력 강제",
    ],
    examTip: "루트 사용자조차 삭제 불가능한 금융/법적 WORM 보존 = 'Object Lock Compliance 모드'!",
  },
  "경계 방어": {
    title: "AWS WAF vs AWS Shield",
    importance: 4,
    badge: "엣지 경계 보안",
    definition: "인터넷 진입점에서 애플리케이션 계층 공격(L7)과 네트워크 디도스 공격(L3/L4)을 방어하는 보안 체계.",
    keyPoints: [
      "AWS WAF: L7 웹 방화벽, SQL Injection, XSS, Rate-based 규칙(IP당 요청 수 제한), CloudFront/ALB/API Gateway에 연결",
      "AWS Shield Standard: L3/L4 SYN 플러드, UDP 반사 공격 무료 자동 방어 (기본 활성화)",
      "AWS Shield Advanced: 24/7 전담 DDoS 대응팀(SRT), 비용 급증 보호(Cost Spike Protection)",
    ],
    examTip: "SQLi/XSS/IP 속도 제한 차단 = WAF! 대규모 디도스로 인한 트래픽 비용 보상 = Shield Advanced!",
  },
  "VPC 보안": {
    title: "Security Group vs Network ACL (NACL)",
    importance: 5,
    badge: "네트워크 기초 필수",
    definition: "VPC 인스턴스 레벨과 서브넷 경계 레벨에서 작동하는 방화벽 메커니즘 비교.",
    keyPoints: [
      "Security Group: Stateful(요청이 허용되면 응답 포트 자동 허용), 인스턴스 ENI 단위, Allow 규칙만 지원",
      "Network ACL: Stateless(인바운드와 아웃바운드 임시 포트 1024~65535 개별 허용 필요), 서브넷 경계, 번호순 평가, Deny 지원",
      "특정 악성 IP 차단: Security Group은 Deny 규칙이 없으므로 반드시 NACL의 명시적 Deny 규칙 번호(낮은 번호 우선)로 차단",
    ],
    examTip: "특정 IP 1개만 명시적으로 차단(Deny)해야 할 때는 무조건 'NACL Deny 규칙'!",
  },
  "보안 모니터링": {
    title: "Amazon GuardDuty vs Amazon Macie",
    importance: 4,
    badge: "AI 위협 탐지",
    definition: "머신러닝과 패턴 매칭을 통해 위협 행위와 민감 데이터 노출을 감지하는 지능형 보안 서비스.",
    keyPoints: [
      "GuardDuty: VPC Flow Logs, DNS 로그, CloudTrail 이벤트, EKS 로그를 머신러닝으로 분석해 비정상 침해 행위 실시간 탐지",
      "Macie: S3 버킷 내부의 데이터를 분석하여 주민번호, 신용카드 등 개인식별정보(PII) 자동 분류 및 탐지",
      "인스턴스 성능 영향: 두 서비스 모두 에이전트 설치 없이 AWS 백엔드 로그를 읽으므로 워크로드 성능 저하 0%",
    ],
    examTip: "암호화폐 채굴/비정상 리전 로그인 감지 = GuardDuty! S3 버킷 내 개인정보(PII) 유출 탐지 = Macie!",
  },
  "Systems Manager": {
    title: "AWS Systems Manager 운영 관리 (SSM)",
    importance: 4,
    badge: "서버 관리 자동화",
    definition: "SSH/RDP 인바운드 포트를 열지 않고 대규모 EC2 플릿을 원격으로 안전하게 유지관리하는 통합 관리 콘솔.",
    keyPoints: [
      "Run Command: 22번 포트 개방 없이 수백 대의 인스턴스에 즉시(Ad-hoc) 셸 스크립트 실행 (긴급 보안 패치에 최적)",
      "Patch Manager: 유지보수 기간(Maintenance Window)에 승인된 보안 패치 기준선(Baseline)을 자동 배포",
      "Session Manager: 배스천 호스트(Bastion) 없이 IAM 권한만으로 브라우저에서 안전하게 원격 터미널 접속",
    ],
    examTip: "배스천 호스트 제거 및 22번 포트 폐쇄 = 'Session Manager'! 대규모 인스턴스 일괄 즉시 명령 = 'Run Command'!",
  },
  "구성 감사": {
    title: "AWS Config vs AWS CloudTrail",
    importance: 5,
    badge: "감사/컴플라이언스",
    definition: "리소스 구성 변경 이력 추적과 API 호출 활동 감사 로그의 역할 분담.",
    keyPoints: [
      "AWS Config: '리소스가 과거에 어떻게 설정되어 있었는가?' — 형상 관리, 변경 타임라인, 보안 규정(예: 80포트 차단) 위반 탐지",
      "AWS CloudTrail: '누가 언제 어떤 API를 호출했는가?' — 사용자, IAM 역할, IP, 호출 시간, 요청 파라미터 활동 기록",
      "사후 자동 조치: Config 규칙 위반 시 EventBridge + SSM Automation(또는 Lambda)으로 자동 수정(Remediation)",
    ],
    examTip: "리소스의 상태와 형상 추적 = Config! API 호출 주체와 시간 감사 = CloudTrail!",
  },
};

