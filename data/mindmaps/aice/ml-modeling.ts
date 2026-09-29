import type { MindmapSection } from "@/types/mindmap";

export const mlModelingMindmap: MindmapSection = {
  id: "ml-modeling",
  title: "머신러닝 모델링과 평가 (Step 3-A · Scikit-Learn)",
  description: "분류·회귀 모델 학습, 분류 평가지표와 혼동행렬, 회귀 평가지표",
  chart: `mindmap
  root((머신러닝 모델링과 평가))
    지도학습 모델
      modelTypeBox["분류 회귀 모델(실기)<br/>1) 분류 — LogisticRegression, DecisionTreeClassifier, RandomForestClassifier<br/>2) 회귀 — LinearRegression, RandomForestRegressor"]
      fitPredictBox["학습과 예측(실기)<br/>1) model.fit(X_train, y_train) — 스케일링된 학습 데이터로 학습<br/>2) y_pred = model.predict(X_test) — 테스트 데이터 예측<br/>3) 예: RandomForestClassifier(n_estimators=100, random_state=42)"]
    성능 평가
      classMetricBox["분류 평가지표(실기)<br/>1) accuracy_score, precision_score, recall_score, f1_score(y_test, y_pred)<br/>2) confusion_matrix(y_test, y_pred) — 실제·예측 교차표"]
      regMetricBox["회귀 평가지표(실기)<br/>1) mean_squared_error(MSE) — 오차 제곱의 평균<br/>2) mean_absolute_error(MAE) — 오차 절댓값의 평균<br/>3) r2_score — 모델이 설명하는 분산의 비율(1에 가까울수록 좋음)"]`,
};
