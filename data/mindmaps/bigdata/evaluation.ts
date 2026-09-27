import type { MindmapSection } from "@/types/mindmap";

export const evaluationMindmap: MindmapSection = {
  id: "evaluation",
  title: "빅데이터 결과 해석",
  description: "분류·회귀 평가지표, 과적합 진단과 시각화 기법",
  chart: `mindmap
  root((빅데이터 결과 해석))
    분류 평가지표
      confusionMatrixBox["혼동행렬 평가지표(실기)<br/>1) Accuracy — (TP+TN) ÷ 전체<br/>2) Precision — TP ÷ (TP+FP)<br/>3) Recall(TPR) — TP ÷ (TP+FN)<br/>4) F1-Score — 정밀도와 재현율의 조화평균<br/>5) ROC-AUC — 임계값 변화에 따른 분류 성능 종합 지표"]
      precisionRecallCalcBox["정밀도·재현율 계산 예제(실기)<br/>1) TP=80, FN=20, FP=20, TN=880<br/>2) Precision = 80÷(80+20) = 0.80<br/>3) Recall = 80÷(80+20) = 0.80"]
      specificityBox["추가 분류지표(실기)<br/>1) 특이도(Specificity) = TN ÷ (TN+FP)<br/>2) 거짓양성률(FPR) = FP ÷ (FP+TN) = 1 − 특이도<br/>3) ROC 곡선 — FPR 대비 TPR(재현율)을 표현"]
      confusionTableBox["혼동행렬 표 구조(ADsP)<br/>1) 실제 Positive×예측 Positive = TP<br/>2) 실제 Positive×예측 Negative = FN(2종 오류)<br/>3) 실제 Negative×예측 Positive = FP(1종 오류)<br/>4) 실제 Negative×예측 Negative = TN"]
    회귀 평가지표
      regressionMetricBox["회귀 평가지표<br/>1) MAE — 오차 절댓값의 평균<br/>2) MSE — 오차 제곱의 평균<br/>3) RMSE — MSE의 제곱근, 원래 단위로 해석 가능<br/>4) R-squared(R²) — 모델의 설명력(결정계수)<br/>5) MAPE — 오차를 백분율로 표현"]
    과적합 진단
      overfitBox["과적합 진단<br/>1) 편향-분산 트레이드오프 — 모델이 단순하면 편향↑분산↓, 복잡하면 반대<br/>2) K-Fold 교차검증 — 데이터를 K개로 나눠 번갈아 검증해 일반화 성능 추정"]
      underOverfitBox["과소적합·과적합 진단<br/>1) 과소적합 — 훈련오차와 검증오차가 모두 높음(모델이 너무 단순)<br/>2) 과적합 — 훈련오차는 낮으나 검증오차가 높음(모델이 너무 복잡)"]
      learningCurveBox["학습곡선(Learning Curve)<br/>1) 데이터 크기에 따른 훈련·검증 성능 변화를 시각화<br/>2) 두 곡선이 수렴하지 않고 간격이 크면 과적합을 의심"]
    시각화 기법
      vizBox["시각화 기법<br/>1) Boxplot — 사분위수와 이상치를 함께 표현<br/>2) 히트맵 — 상관관계·값의 크기를 색상으로 표현<br/>3) 산점도 행렬 — 여러 변수 쌍의 관계를 한 번에 파악<br/>4) 모자이크 플롯 — 범주형 변수 간 비율을 표현"]
    추론통계
      confidenceIntervalBox["신뢰구간과 표준오차(실기)<br/>1) 표준오차(SE) = 표준편차 ÷ √n<br/>2) 95% 신뢰구간 = 평균 ± 1.96×SE<br/>3) 신뢰수준이 높아질수록 구간의 폭이 넓어짐"]
    군집·회귀식 평가
      silhouetteBox["실루엣 계수 해석 기준(ADsP)<br/>1) 범위는 −1 이상 1 이하<br/>2) 평균 실루엣 계수 0.5 이상이면 군집 구조가 합리적<br/>3) 0.7 이상이면 매우 우수, 0.25 이하면 군집 구조가 불명확"]
      rSummaryBox["R 다중회귀 summary 판독 순서(ADsP)<br/>1) F-statistic의 p-value로 모형 전체의 유의성 확인<br/>2) Adjusted R-squared로 모형의 설명력 확인<br/>3) 각 변수의 Pr(>|t|)이 0.05 미만인지로 개별 유의성 판정"]`,
};
