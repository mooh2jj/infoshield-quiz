import type { MindmapSection } from "@/types/mindmap";

export const costOptimizedMindmap: MindmapSection = {
  id: "cost-optimized",
  title: "비용 최적화 아키텍처 설계 (Domain 4 · 20%)",
  description: "컴퓨팅 비용 모델, S3 스토리지 수명 주기, 데이터 전송 비용 구조",
  chart: `mindmap
  root((비용 최적화 아키텍처 설계))
    컴퓨팅 비용 모델
      onDemandSpotBox["On-Demand와 Spot<br/>1) On-Demand — 단기·불규칙·예측 불가 워크로드<br/>2) Spot Instances — 최대 90% 할인, 2분 전 중단 알림, 무상태/배치 워크로드에 적합"]
      savingsPlanBox["Savings Plans와 예약 인스턴스<br/>1) 1년/3년 약정으로 On-Demand 대비 큰 폭 할인<br/>2) Compute Savings Plans — 인스턴스 패밀리·리전·OS 변경에 유연하게 적용"]
    S3 스토리지 수명 주기
      tieringBox["S3 스토리지 클래스 선택 기준<br/>1) Intelligent-Tiering — 접근 패턴이 불명확·변동적일 때, 검색 수수료 없음<br/>2) Standard-IA / One Zone-IA — 월 1회 미만 접근, GB당 검색 비용 발생(One Zone은 단일 AZ라 유실 위험)<br/>3) Glacier Flexible(분~수 시간) vs Glacier Deep Archive(약 12시간, 최저 비용 장기 보관)"]
    데이터 전송 비용 최적화
      transferCostBox["데이터 전송 비용 구조<br/>1) 동일 AZ 내 프라이빗 통신 — 무료<br/>2) 동일 리전 내 타 AZ 간 통신 — 송수신 모두 과금<br/>3) 인터넷 아웃바운드 — 비용 발생, CloudFront·VPC 엔드포인트 경유로 절감 가능"]`,
};
