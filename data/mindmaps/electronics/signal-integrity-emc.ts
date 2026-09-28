import type { MindmapSection } from "@/types/mindmap";

export const signalIntegrityEmcMindmap: MindmapSection = {
  id: "signal-integrity-emc",
  title: "전자회로검증과 신호 전원 무결성 EMC",
  description: "회로망 해석·계측 실무·신뢰성, 특성임피던스·PI·차동배선·EMC 인증 대책",
  chart: `mindmap
  root((전자회로검증과 SI PI EMC))
    회로망 해석과 계측
      networkAnalysisBox["회로망 해석<br/>1) KCL/KVL, 테브난·노턴 등가회로<br/>2) 과도현상 — τ=RC, τ=L/R<br/>3) 4단자망 파라미터"]
      measurementBox["계측 장비 실무(실기)<br/>1) 오실로스코프 대역폭 5배 규칙 — 무릎주파수 fknee=0.35/tr의 3~5배 대역폭 확보<br/>2) 프로브 10:1 감쇄와 접지 스프링 — 긴 악어클립 접지선은 기생 인덕턴스로 허위 링잉을 유발<br/>3) 로직 분석기, 스펙트럼 분석기"]
      reliabilityBox["신뢰성 분석<br/>1) 욕조 곡선(Bathtub Curve) — 초기고장·우발고장·마모고장 구간<br/>2) MTBF/MTTF<br/>3) 가속 수명 시험(ALT)"]
    신호 전원 무결성과 EMC
      impedanceBox["특성 임피던스와 반사(실기)<br/>1) Z0 = √(L0/C0) ≈ 50Ω, 마이크로스트립 근사식<br/>2) 반사계수 Γ=(ZL-Z0)/(ZL+Z0) — Open이면 Γ=+1(2배 오버슈트), Short면 Γ=-1(위상 반전)<br/>3) 직렬 종단저항 Rs = Z0 - Rout으로 반사파 흡수"]
      piBox["전원 무결성(PI)<br/>1) PDN(전력분배망) 타깃 임피던스 설계<br/>2) 디커플링 — 벌크 커패시터와 세라믹 MLCC 병렬 배치"]
      differentialBox["차동 임피던스 레이아웃(실기)<br/>1) 100Ω USB/이더넷 차동쌍 — 길이정합(Length Matching), Skew 최소화<br/>2) 레퍼런스 플레인 스플릿 금지 — 귀환전류 루프 확대로 공통모드 노이즈·EMI 유발"]
      emcBox["EMC 인증 대책(실기)<br/>1) 전도성 방출(CE) — 입력단 라인 필터<br/>2) 방사 방출(RE) — 페라이트 비드(직류 바이어스로 임피던스 급감 주의)<br/>3) ESD 보호 — TVS 다이오드"]`,
};
