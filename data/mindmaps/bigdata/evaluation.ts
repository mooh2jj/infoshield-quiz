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
    회귀 평가지표
      regressionMetricBox["회귀 평가지표<br/>1) MAE — 오차 절댓값의 평균<br/>2) MSE — 오차 제곱의 평균<br/>3) RMSE — MSE의 제곱근, 원래 단위로 해석 가능<br/>4) R-squared(R²) — 모델의 설명력(결정계수)<br/>5) MAPE — 오차를 백분율로 표현"]
    과적합 진단
      overfitBox["과적합 진단<br/>1) 편향-분산 트레이드오프 — 모델이 단순하면 편향↑분산↓, 복잡하면 반대<br/>2) K-Fold 교차검증 — 데이터를 K개로 나눠 번갈아 검증해 일반화 성능 추정"]
    시각화 기법
      vizBox["시각화 기법<br/>1) Boxplot — 사분위수와 이상치를 함께 표현<br/>2) 히트맵 — 상관관계·값의 크기를 색상으로 표현<br/>3) 산점도 행렬 — 여러 변수 쌍의 관계를 한 번에 파악<br/>4) 모자이크 플롯 — 범주형 변수 간 비율을 표현"]`,
};
