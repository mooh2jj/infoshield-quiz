import type { MindmapSection } from "@/types/mindmap";

export const modelingMindmap: MindmapSection = {
  id: "modeling",
  title: "빅데이터 모델링",
  description: "회귀·분류·앙상블·군집분석과 딥러닝 기초",
  chart: `mindmap
  root((빅데이터 모델링))
    회귀 분석
      regressionBox["회귀 모델<br/>1) 선형회귀 — 선형성·독립성·등분산성·정규성 가정 필요<br/>2) 로지스틱 회귀 — Sigmoid로 확률을 출력, Odds Ratio로 해석"]
      oddsRatioBox["오즈비 계산(실기)<br/>1) 로짓 변환 ln(p/(1−p)) = β0 + β1X<br/>2) X가 1단위 증가하면 오즈는 e^β1배 증가<br/>3) 예: β1=0.693 → e^0.693≈2, 오즈가 약 2배 증가"]
    지도학습 분류
      classificationBox["분류 알고리즘<br/>1) 의사결정나무 — 지니계수·엔트로피로 분할 기준 결정<br/>2) SVM — 마진을 최대화, 커널트릭으로 비선형 분리<br/>3) KNN — 가까운 k개 이웃의 다수결로 분류<br/>4) 나이브 베이즈 — 변수 간 조건부 독립을 가정"]
      ensembleBox["앙상블 기법<br/>1) 배깅 — Bootstrap 샘플로 병렬 학습(Random Forest)<br/>2) 부스팅 — 이전 모델의 오차를 순차적으로 보완(AdaBoost·GBM·XGBoost·LightGBM)"]
    비지도학습
      clusteringBox["군집 분석<br/>1) K-Means — 엘보우 기법으로 k 선택, 실루엣 계수로 품질 평가<br/>2) 계층적 군집 — 덴드로그램으로 병합 과정을 표현<br/>3) DBSCAN — 밀도 기반, 노이즈에 강함"]
      assocRuleBox["연관분석 지표(실기)<br/>1) 지지도 — 두 항목이 동시에 등장하는 비율<br/>2) 신뢰도 — A를 포함할 때 B도 포함할 조건부 확률<br/>3) 향상도 — 신뢰도 ÷ B의 지지도, 1보다 크면 양의 상관"]
    deepLearningBox["딥러닝 기초<br/>1) 퍼셉트론 — 가중합과 활성화함수로 출력 결정<br/>2) 활성화함수 — ReLU(은닉층), Softmax(출력층 확률화)<br/>3) 역전파(Backpropagation) — 오차를 거꾸로 전파해 가중치 갱신<br/>4) 과적합 방지 — Dropout, Early Stopping"]`,
};
