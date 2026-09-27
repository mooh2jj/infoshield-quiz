import type { MindmapSection } from "@/types/mindmap";

export const explorationMindmap: MindmapSection = {
  id: "exploration",
  title: "빅데이터 탐색",
  description: "결측값·이상값 처리, 데이터 변환, 변수 선택과 EDA",
  chart: `mindmap
  root((빅데이터 탐색))
    데이터 전처리
      missingBox["결측값 유형과 대치법(실기)<br/>1) MCAR — 완전 무작위 결측, 다른 변수와 무관<br/>2) MAR — 다른 관측 변수에 의존해 발생하는 결측<br/>3) MNAR — 결측 여부가 그 값 자체에 의존<br/>4) 대치법 — 평균·중앙값·KNN·다중대치법(MICE)"]
      outlierBox["이상값 탐지 기준(실기)<br/>1) ESD — 평균에서 표준편차의 n배 이상 벗어난 값<br/>2) IQR = Q3 − Q1<br/>3) 정상 범위 = [Q1 − 1.5×IQR, Q3 + 1.5×IQR]"]
      iqrCalcBox["IQR 이상치 계산 예제(실기)<br/>1) Q1=30, Q3=70일 때 IQR = 70−30 = 40<br/>2) 하한선 = 30 − 1.5×40 = −30<br/>3) 상한선 = 70 + 1.5×40 = 130<br/>4) −30 미만 또는 130 초과 데이터는 이상치로 판정"]
      transformBox["데이터 변환 기법<br/>1) 표준화(Z-Score) — 평균 0, 분산 1로 변환<br/>2) 정규화(Min-Max) — 값을 0~1 범위로 변환<br/>3) 로그 변환 — 오른쪽으로 치우친 왜도를 보정<br/>4) Box-Cox 변환 — 정규성을 확보하기 위한 변환"]
    변수 선택과 차원 축소
      featureSelectBox["변수 선택·차원 축소 기법<br/>1) 필터(Filter) — 통계적 지표로 변수를 사전 선택<br/>2) 래퍼(Wrapper) — RFE 등 모델 성능 기반으로 반복 선택<br/>3) 임베디드(Embedded) — Lasso(L1)·Ridge(L2), 학습 과정에서 자동 선택<br/>4) PCA — 분산을 최대한 보존하며 차원을 축소"]
    탐색적 데이터 분석
      edaBox["EDA 핵심 지표<br/>1) 왜도(Skewness) — 양수면 오른쪽으로 긴 꼬리<br/>2) 첨도(Kurtosis) — 분포가 뾰족한 정도<br/>3) 피어슨 상관계수 — 두 변수의 선형 관계<br/>4) 스피어만 상관계수 — 순위 기반 관계"]`,
};
