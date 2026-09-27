import type { MindmapSection } from "@/types/mindmap";

export const resilientMindmap: MindmapSection = {
  id: "resilient",
  title: "복원력 있는 아키텍처 설계 (Domain 2 · 26%)",
  description: "Route 53·ELB·오토스케일링, DR 전략, SQS/SNS/EventBridge/Kinesis, RDS·Aurora·DynamoDB",
  chart: `mindmap
  root((복원력 있는 아키텍처 설계))
    고가용성과 장애 격리
      route53Box["Route 53 글로벌 라우팅 정책<br/>1) Failover(능동-수동), Weighted(가중치 분산)<br/>2) Latency(저지연 리전 우선), Geolocation(접속자 위치 기반)<br/>3) Geoproximity — 바이어스 값으로 트래픽 편향을 조정"]
      elbBox["로드밸런싱(ELB)<br/>1) ALB — L7, HTTP/HTTPS/gRPC, URL 경로·호스트 헤더 기반 라우팅<br/>2) NLB — L4, TCP/UDP, 고정 IP(EIP) 지원, 극저지연 대규모 트래픽"]
      asgBox["오토스케일링(ASG)<br/>1) 다중 AZ에 인스턴스를 분산 배치<br/>2) 스케일링 정책 — Target Tracking, Step, Scheduled<br/>3) 수명 주기 후크(Lifecycle Hook) — 시작/종료 전 커스텀 작업 삽입"]
    재해 복구 전략과 RTO RPO
      drBox["DR 전략 4단계<br/>1) Backup & Restore — RTO/RPO 수 시간, 최저 비용<br/>2) Pilot Light — 핵심 DB만 실시간 복제, 장애 시 컴퓨팅 기동, RTO 수십 분<br/>3) Warm Standby — 축소 규모 환경 상시 가동, RTO 수 분<br/>4) Multi-Site Active-Active — 다중 리전 상시 트래픽 처리, RTO/RPO ≈ 0, 최고 비용"]
    결합도 완화와 이벤트 주도 아키텍처
      sqsBox["Amazon SQS<br/>1) 표준 큐 — 무제한 처리량, 최소 1회 전달<br/>2) FIFO 큐 — 순서 엄격 보장, 정확히 1회 처리<br/>3) Visibility Timeout(중복 처리 방지), DLQ(오류 메시지 격리), Long Polling(비용 절감)"]
      snsEventBox["SNS와 EventBridge<br/>1) SNS — Pub/Sub 팬아웃(Fan-out), SQS/Lambda/Email 다중 구독<br/>2) EventBridge — 서버리스 이벤트 버스, 룰 기반 타깃 라우팅, 서드파티 SaaS 연동"]
      kinesisBox["Amazon Kinesis<br/>1) Data Streams — 샤드 기반 실시간 순서 보장, 다중 소비자가 동일 스트림을 독립적으로 병렬 소비<br/>2) Data Firehose — S3/Redshift로 변환·적재하는 버퍼링 서비스"]
      messagingChoiceBox["메시징 서비스 선택 기준<br/>1) 순서 보장 + 다중 컨슈머 대규모 스트리밍 — Kinesis Data Streams<br/>2) 단순 1:1 작업 버퍼링·디커플링 — SQS<br/>3) 이벤트 기반 1:N 알림 브로드캐스트 — SNS<br/>4) SaaS 연동·룰 기반 이벤트 필터링 라우팅 — EventBridge"]
    데이터베이스 복원력
      rdsBox["Amazon RDS<br/>1) Multi-AZ — 동기식 복제, 자동 페일오버(고가용성 목적)<br/>2) Read Replica — 비동기식 복제, 읽기 부하 분산 목적(DR 대응 시 수동 승격 필요)"]
      auroraBox["Amazon Aurora<br/>1) 3개 AZ에 6개 데이터 복사본을 자동 분산 저장<br/>2) 글로벌 데이터베이스 — Cross-Region 스토리지 기반 복제, 지연 1초 미만"]
      dynamoResBox["DynamoDB 복원력<br/>1) 글로벌 테이블 — 다중 리전 Active-Active 복제<br/>2) PITR(특정 시점 복구) — 최근 시점 중 임의 지점으로 복원"]`,
};
