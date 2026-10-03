import type { SpeedQuizChapter, SpeedQuizItem } from "./types";

export const AWS_SAA_CHAPTERS: SpeedQuizChapter[] = [
  { id: "resilient", name: "도메인 1: 회복탄력성 있는 아키텍처 설계", shortName: "회복탄력성" },
  { id: "performance", name: "도메인 2: 고성능 아키텍처 설계", shortName: "고성능 설계" },
  { id: "security", name: "도메인 3: 안전한 아키텍처 설계", shortName: "보안 설계" },
  { id: "cost", name: "도메인 4: 비용 최적화 아키텍처 설계", shortName: "비용 최적화" },
];

export const AWS_SAA_QUIZ_LIST: SpeedQuizItem[] = [
  // =================================================================
  // === [도메인 1] 회복탄력성 있는 아키텍처 설계 (4문항)
  // =================================================================
  {
    id: 1,
    chapterId: "resilient",
    chapterName: "도메인 1: 회복탄력성 있는 아키텍처 설계",
    question: "분산 애플리케이션 컴포넌트 간 결합도를 낮추고(디커플링), 트래픽 급증 시 메시지 손실 없이 버퍼링을 제공하는 완전관리형 대기열 서비스는?",
    answer: "Amazon SQS (Simple Queue Service)"
  },
  {
    id: 2,
    chapterId: "resilient",
    chapterName: "도메인 1: 회복탄력성 있는 아키텍처 설계",
    question: "단일 메시지를 발행(Publish)하면 구독 중인 여러 개의 SQS 대기열이나 Lambda 등으로 동시에 브로드캐스트(Fanout)하는 서비스는?",
    answer: "Amazon SNS (Simple Notification Service)"
  },
  {
    id: 3,
    chapterId: "resilient",
    chapterName: "도메인 1: 회복탄력성 있는 아키텍처 설계",
    question: "수백 개의 VPC와 온프레미스 네트워크를 복잡한 피어링 대신 중앙 집중형 허브-앤-스포크(Hub-and-Spoke) 구조로 연결하는 라우터는?",
    answer: "AWS Transit Gateway"
  },
  {
    id: 4,
    chapterId: "resilient",
    chapterName: "도메인 1: 회복탄력성 있는 아키텍처 설계",
    question: "1초 미만의 복제 지연시간으로 전 세계 여러 리전에 읽기 복제본을 제공하며 리전 장애 시 신속한 재해 복구(DR)를 지원하는 고가용성 DB 기능은?",
    answer: "Amazon Aurora Global Database"
  },

  // =================================================================
  // === [도메인 2] 고성능 아키텍처 설계 (4문항)
  // =================================================================
  {
    id: 5,
    chapterId: "performance",
    chapterName: "도메인 2: 고성능 아키텍처 설계",
    question: "여러 가용 영역(AZ)의 수많은 EC2 인스턴스가 동시에 읽기/쓰기(POSIX 호환)를 수행할 수 있는 리눅스용 완전관리형 탄력적 공유 파일 시스템은?",
    answer: "Amazon EFS (Elastic File System)"
  },
  {
    id: 6,
    chapterId: "performance",
    chapterName: "도메인 2: 고성능 아키텍처 설계",
    question: "HPC, 머신러닝, 금융 분석 등 서브 밀리초 수준의 초저지연과 초당 수백 기가바이트 처리량을 제공하는 Lustre 기반 고성능 파일 스토리지는?",
    answer: "Amazon FSx for Lustre"
  },
  {
    id: 7,
    chapterId: "performance",
    chapterName: "도메인 2: 고성능 아키텍처 설계",
    question: "2개의 고정 Anycast IP를 제공하여 글로벌 사용자의 트래픽을 AWS 글로벌 백본망을 통해 최적의 리전 엔드포인트로 신속하게 전달하는 가속 서비스는?",
    answer: "AWS Global Accelerator"
  },
  {
    id: 8,
    chapterId: "performance",
    chapterName: "도메인 2: 고성능 아키텍처 설계",
    question: "관계형 DB 앞에 배치하여 자주 조회되는 읽기 쿼리를 메모리에 캐싱함으로써 응답 지연을 마이크로초 단위로 줄여주는 인메모리 캐시 서비스는?",
    answer: "Amazon ElastiCache (Redis / Memcached)"
  },

  // =================================================================
  // === [도메인 3] 안전한 아키텍처 설계 (3문항)
  // =================================================================
  {
    id: 9,
    chapterId: "security",
    chapterName: "도메인 3: 안전한 아키텍처 설계",
    question: "데이터 암호화에 사용되는 암호화 키를 생성·관리하고, FIPS 140-2 표준 하드웨어 보안 모듈(HSM)을 통해 안전하게 통제하는 AWS 키 관리 서비스는?",
    answer: "AWS KMS (Key Management Service)"
  },
  {
    id: 10,
    chapterId: "security",
    chapterName: "도메인 3: 안전한 아키텍처 설계",
    question: "SQL 인젝션, XSS, IP 기반 차단 규칙 등을 설정하여 ALB, CloudFront, API Gateway 앞단에서 악성 L7 웹 트래픽을 차단하는 웹 방화벽은?",
    answer: "AWS WAF (Web Application Firewall)"
  },
  {
    id: 11,
    chapterId: "security",
    chapterName: "도메인 3: 안전한 아키텍처 설계",
    question: "AWS Organizations 환경에서 하위 멤버 계정 및 조직 단위(OU)가 사용할 수 있는 권한의 최대 한도(가드레일)를 중앙에서 제어하는 정책은?",
    answer: "SCP (Service Control Policy, 서비스 제어 정책)"
  },

  // =================================================================
  // === [도메인 4] 비용 최적화 아키텍처 설계 (2문항)
  // =================================================================
  {
    id: 12,
    chapterId: "cost",
    chapterName: "도메인 4: 비용 최적화 아키텍처 설계",
    question: "1년에 한두 번 조회하지만 장기 보관이 필요한 규제 준수 데이터에 적합하며, 기가바이트당 비용이 가장 저렴한(복원 9~12시간) S3 스토리지 티어는?",
    answer: "S3 Glacier Deep Archive"
  },
  {
    id: 13,
    chapterId: "cost",
    chapterName: "도메인 4: 비용 최적화 아키텍처 설계",
    question: "온디맨드 대비 최대 90%까지 저렴한 비용으로 미사용 EC2 용량을 활용할 수 있으며, 중단 허용 무상태 웹이나 배치 작업에 최적인 인스턴스 옵션은?",
    answer: "Spot Instance (스팟 인스턴스)"
  }
];
