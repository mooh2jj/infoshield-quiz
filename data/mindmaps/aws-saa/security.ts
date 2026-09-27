import type { MindmapSection } from "@/types/mindmap";

export const securityMindmap: MindmapSection = {
  id: "security",
  title: "보안 아키텍처 설계 (Domain 1 · 30%)",
  description: "IAM·Organizations, KMS·데이터 암호화, WAF/Shield·SG/NACL·GuardDuty",
  chart: `mindmap
  root((보안 아키텍처 설계))
    ID 및 접근 통제
      iamBox["IAM 핵심 개념<br/>1) 최소 권한(Least Privilege) 원칙<br/>2) IAM Role과 STS AssumeRole — 임시 자격증명 발급<br/>3) 인스턴스 프로파일 — EC2에 IAM Role을 연결하는 컨테이너"]
      orgBox["다중 계정 거버넌스와 SCP<br/>1) AWS Organizations — 여러 계정을 OU 단위로 그룹화 관리<br/>2) SCP(서비스 제어 정책) — 명시적 거부가 최우선, 회원 계정의 루트 사용자도 제약 가능<br/>3) 권한 경계(Permissions Boundary) — IAM 엔터티가 가질 수 있는 최대 권한을 제한(루트에는 미적용)"]
      identityBox["외부 ID 연동<br/>1) IAM Identity Center — SSO, SAML 2.0/OIDC 기반 통합 로그인<br/>2) Cognito — User Pool(사용자 인증) vs Identity Pool(AWS 자격증명 인가)"]
    데이터 보안 및 암호화
      kmsBox["AWS KMS<br/>1) 고객 관리형 키(CMK) vs AWS 관리형 키<br/>2) 다중 리전 키(Multi-Region Keys)<br/>3) 봉투 암호화 — DEK(데이터 암호화 키)를 KEK(키 암호화 키)로 재암호화"]
      secretsBox["자격증명 관리 서비스<br/>1) Secrets Manager — RDS/DocumentDB/Redshift 비밀번호 자동 로테이션 Lambda 내장, 유료<br/>2) Parameter Store — 계층형 구조, KMS 연동, 표준 파라미터는 완전 무료"]
      s3SecBox["S3 심층 보안<br/>1) 서버측 암호화 — SSE-S3, SSE-KMS, SSE-C<br/>2) 버킷 정책(Bucket Policy)<br/>3) S3 Object Lock — Compliance(누구도 삭제 불가, 루트도 예외 없음) vs Governance(권한자 예외 가능) WORM<br/>4) S3 Versioning + MFA Delete — 규정 준수 목적이 아닌 일반적인 실수 삭제 방지<br/>5) S3 Requester Pays — 대용량 다운로드 비용을 버킷 소유자 대신 요청자에게 전가"]
    네트워크 인프라 보안
      wafShieldBox["경계 방어<br/>1) AWS WAF — L7 웹 공격 차단(SQLi, XSS), Rate-based 규칙<br/>2) AWS Shield — Standard(L3/L4, 무료 기본 제공) vs Advanced(유료, 전담 대응팀)"]
      sgNaclBox["VPC 보안 규칙<br/>1) Security Group — Stateful(응답 트래픽 자동 허용), 인스턴스 ENI 단위, Allow 규칙만 지원<br/>2) Network ACL — Stateless(인/아웃바운드 개별 지정), 서브넷 경계 단위, 번호순 평가, Allow/Deny 모두 지원"]
      monitorBox["보안 모니터링<br/>1) GuardDuty — VPC Flow/DNS/CloudTrail/EKS 로그를 머신러닝으로 위협 탐지<br/>2) Macie — S3 내 개인정보(PII) 자동 탐지"]
    운영 관리와 구성 감사
      ssmBox["Systems Manager 운영 관리<br/>1) Run Command — 인바운드 포트 개방 없이 대규모 인스턴스 플릿에 즉시(ad-hoc) 명령 실행, 제로데이 긴급 패치에 적합<br/>2) Patch Manager — 정기 유지보수 기간(Maintenance Window)에 맞춰 패치 기준선(Baseline)을 스케줄 배포<br/>3) State Manager — 인스턴스 구성을 원하는 상태로 지속 강제 유지(Configuration Drift 방지)"]
      auditBox["구성 감사와 API 활동 로그<br/>1) AWS Config — 리소스 구성 변경 이력 추적, 규정 준수 규칙 위반 탐지<br/>2) AWS CloudTrail — 누가 언제 어떤 API를 호출했는지 사용자·활동 로그를 기록"]`,
};
