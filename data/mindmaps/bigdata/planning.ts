import type { MindmapSection } from "@/types/mindmap";

export const planningMindmap: MindmapSection = {
  id: "planning",
  title: "빅데이터 분석 기획",
  description: "빅데이터 특성, 분석 방법론, 과제 발굴과 개인정보 비식별화",
  chart: `mindmap
  root((빅데이터 분석 기획))
    빅데이터 특성
      vBox["빅데이터 특성(실기)<br/>1) Volume — 데이터의 규모<br/>2) Velocity — 데이터 생성·처리 속도<br/>3) Variety — 정형·비정형 등 데이터 다양성<br/>4) Veracity — 데이터의 정확성·신뢰성<br/>5) Value — 데이터가 가지는 가치"]
    분석 방법론
      methodologyBox["데이터 분석 방법론<br/>1) KDD — 선택→전처리→변환→마이닝→해석평가<br/>2) CRISP-DM — 산업 표준 데이터 마이닝 방법론, 6단계<br/>3) SEMMA — Sample→Explore→Modify→Model→Assess"]
      crispDmBox["CRISP-DM 6단계 순서(실기)<br/>1) 업무 이해 — 비즈니스 목표 설정<br/>2) 데이터 이해 — 초기 데이터 수집·탐색<br/>3) 데이터 준비 — 정제·변환(전체 시간의 60~80% 소요)<br/>4) 모델링 — 알고리즘 적용과 파라미터 튜닝<br/>5) 평가 — 비즈니스 목적 부합 여부 평가<br/>6) 전개 — 운영 환경 배포와 모니터링"]
    분석 과제 발굴
      taskDiscoveryBox["분석 과제 발굴 접근법<br/>1) 하향식(Top-Down) — 문제 탐색→정의→해결방안, 이미 알려진 문제 해결<br/>2) 상향식(Bottom-Up) — 데이터 기반으로 인사이트를 발견, 비지도학습 활용"]
      masterPlanBox["분석 마스터플랜 우선순위<br/>1) 전략적 중요도 — 비즈니스 성과에 미치는 영향<br/>2) 실행 용이성 — 데이터 준비도와 기술 난이도<br/>3) 시급성을 먼저 고려한 뒤 난이도를 함께 판단"]
    개인정보 비식별화
      deidentifyBox["개인정보 비식별화 기법<br/>1) 가명처리 — 다른 값으로 대체<br/>2) 총계처리 — 개별값 대신 통계값으로 대체<br/>3) 데이터 삭제 — 식별 가능 항목 자체를 삭제<br/>4) 범주화 — 구체적 값을 범주로 묶음<br/>5) 마스킹 — 값의 일부를 가림"]
      privacyModelBox["프라이버시 보호 모델(실기)<br/>1) k-익명성 — 동일 준식별자 레코드를 k개 이상 유지, 동질성 공격에 취약<br/>2) l-다양성 — 동질 집단 내 민감정보가 l개 이상의 다른 값을 가지도록 보장<br/>3) t-근접성 — 동질 집단과 전체 데이터셋의 분포 차이를 t 이하로 유지"]`,
};
