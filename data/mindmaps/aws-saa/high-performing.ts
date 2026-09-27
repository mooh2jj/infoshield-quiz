import type { MindmapSection } from "@/types/mindmap";

export const highPerformingMindmap: MindmapSection = {
  id: "high-performing",
  title: "고성능 아키텍처 설계 (Domain 3 · 24%)",
  description: "EC2 배치그룹·서버리스, EBS/EFS/FSx, CloudFront·Global Accelerator·ElastiCache, TGW·VPC 엔드포인트",
  chart: `mindmap
  root((고성능 아키텍처 설계))
    컴퓨팅 및 배치 최적화
      placementBox["EC2 배치 그룹<br/>1) Cluster — 단일 AZ, 극저지연 100Gbps급 HPC 워크로드<br/>2) Spread — 랙 분리로 장애 격리<br/>3) Partition — 대규모 분산 시스템(HDFS, Kafka)"]
      serverlessBox["서버리스·컨테이너 최적화<br/>1) Lambda — 프로비저닝된 동시성으로 콜드 스타트 제거<br/>2) ECS/EKS — Fargate로 서버 관리 없는 컨테이너 운영"]
    고성능 스토리지 계층화
      ebsBox["블록 스토리지(EBS)<br/>1) gp3 — 기본 3,000 IOPS/125MB/s를 용량과 독립적으로 설정<br/>2) io2 Block Express — SAN급 최고 IOPS, 다중 연결(Multi-Attach) 지원"]
      fileStorageBox["파일 스토리지 — EFS vs FSx<br/>1) EFS — Linux 다중 인스턴스 공유, NFSv4<br/>2) FSx for Windows — SMB, Active Directory 연동<br/>3) FSx for Lustre — S3 데이터 리포지토리 연동, 초고속 병렬 파일 시스템(HPC·ML)"]
      instanceStoreBox["인스턴스 스토어<br/>1) NVMe SSD 로컬 직접 연결<br/>2) 휘발성 — 인스턴스 중지·종료 시 데이터 소실<br/>3) 임시 고속 스크래치 공간 용도"]
      storageGatewayBox["AWS Storage Gateway<br/>1) File Gateway — 온프레미스 NFS/SMB 클라이언트가 S3를 파일시스템처럼 사용하도록 확장<br/>2) 온프레미스 데이터를 클라우드로 점진적으로 이관·백업할 때 활용"]
    캐싱 및 엣지 가속
      cloudfrontBox["CloudFront<br/>1) 엣지 로케이션에서 정적·동적 콘텐츠 캐싱<br/>2) OAC(Origin Access Control) — S3 오리진을 CloudFront 경유로만 접근하도록 보호"]
      gaBox["Global Accelerator<br/>1) Anycast 고정 IP 2개 제공<br/>2) AWS 글로벌 백본망을 경유해 TCP/UDP 트래픽을 가속"]
      elastiCacheBox["ElastiCache<br/>1) Redis — 클러스터링, 복제, 영속성, 정렬 집합 등 풍부한 자료구조<br/>2) Memcached — 단순 멀티스레드 캐시, 영속성 없음"]
    하이브리드 네트워킹과 라우팅
      hybridConnBox["하이브리드 연결 옵션<br/>1) Site-to-Site VPN — IPSec, 공용 인터넷 경유 터널<br/>2) Direct Connect(DX) — 전용선, 일관된 고대역폭"]
      tgwBox["AWS Transit Gateway<br/>1) 다중 VPC와 온프레미스를 허브-스포크 구조로 단일 연결<br/>2) 전이적 라우팅(Transitive Routing) 지원 — VPC Peering(1:1 풀 메시, 전이적 라우팅 불가)과의 핵심 차이점"]
      endpointBox["VPC 엔드포인트<br/>1) Gateway Endpoint — S3, DynamoDB 전용, 라우팅 테이블 등록, 무료<br/>2) Interface Endpoint(PrivateLink) — 그 외 서비스, 사설 IP ENI 생성, 유료"]
      networkInspectionBox["인라인 트래픽 검사 아키텍처<br/>1) AWS Network Firewall — AWS 네이티브 완전관리형 IDS/IPS, 상태 저장 트래픽 검사<br/>2) Gateway Load Balancer(GWLB) — 서드파티 방화벽 어플라이언스를 인라인으로 투명하게 삽입, GENEVE(포트 6081) 캡슐화로 트래픽 전달"]`,
};
