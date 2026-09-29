import type { MindmapSection } from "@/types/mindmap";

export const preprocessingMindmap: MindmapSection = {
  id: "preprocessing",
  title: "데이터 전처리와 특성 공학 (Step 2 · 30점)",
  description: "결측치·불필요 열 제거, 범주형 인코딩·스케일링, Train Test Split",
  chart: `mindmap
  root((데이터 전처리와 특성 공학))
    결측치와 컬럼 정리
      missingBox["결측치 처리(실기)<br/>1) 확인 — df.isna().sum(), df.isnull().sum()<br/>2) 삭제 — df.dropna(axis=0, inplace=True) 또는 df.dropna(subset=['col'])<br/>3) 대체 — fillna(평균 .mean(), 중앙값 .median(), 최빈값 .mode()[0])"]
      dropColBox["불필요한 열 행 제거(실기)<br/>1) df.drop(columns=['id', 'Unnamed: 0'], inplace=True)<br/>2) 분석에 불필요한 식별자 컬럼은 모델링 전 제거"]
    인코딩과 스케일링
      encodingBox["범주형 데이터 인코딩(실기)<br/>1) 라벨 인코딩(LabelEncoder) — 순서가 있거나 이진 분류용, fit_transform 사용<br/>2) 원-핫 인코딩 — pd.get_dummies(df, columns=['col'], drop_first=True)로 다중공선성 방지"]
      scalingBox["수치형 데이터 스케일링(실기)<br/>1) StandardScaler — 평균 0, 표준편차 1, 이상치에 민감<br/>2) MinMaxScaler — 0~1 정규화, 이상치가 없을 때 유용"]
    데이터셋 분할
      splitBox["Train Test Split(실기)<br/>1) 특성·타깃 분리 — X = df.drop('target', axis=1), y = df['target']<br/>2) train_test_split(X, y, test_size=0.2, random_state=42, stratify=y) — 층화추출로 타깃 비율 유지"]`,
};
