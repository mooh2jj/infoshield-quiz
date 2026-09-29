import type { MindmapSection } from "@/types/mindmap";

export const dataExplorationMindmap: MindmapSection = {
  id: "data-exploration",
  title: "환경 준비와 데이터 탐색 EDA (Step 1 · 30점)",
  description: "라이브러리 임포트, 데이터 로딩·통계 탐색, 기초 시각화, 채점 유의사항",
  chart: `mindmap
  root((환경 준비와 데이터 탐색 EDA))
    라이브러리와 데이터 로딩
      importBox["필수 임포트(실기)<br/>1) pandas as pd, numpy as np<br/>2) matplotlib.pyplot as plt, seaborn as sns"]
      loadBox["데이터 로딩과 기본 확인(실기)<br/>1) pd.read_csv('data.csv') → df<br/>2) df.head(), df.tail(), df.info(), df.describe()<br/>3) df.shape(행·열 개수), df.columns(컬럼 목록)"]
    데이터 통계 탐색
      uniqueBox["고유값과 빈도 분석(실기)<br/>1) df['col'].unique() — 고유값 목록<br/>2) df['col'].nunique() — 고유값 개수<br/>3) df['col'].value_counts() — 값별 빈도수"]
      filterBox["조건부 필터링과 통계(실기)<br/>1) df[df['age']>=30]['salary'].mean() — 조건을 만족하는 행만 골라 통계 산출<br/>2) 불리언 인덱싱으로 행 단위 조건 필터링"]
      corrBox["상관관계 분석(실기)<br/>1) df.corr(numeric_only=True) — 수치형 컬럼 간 피어슨 상관계수, corr_matrix 변수에 저장<br/>2) sns.heatmap(corr_matrix, annot=True, fmt='.2f', cmap='coolwarm') — 소수점 둘째 자리 히트맵"]
    기초 시각화
      vizBox["기초 차트(실기)<br/>1) 히스토그램 — plt.hist(), sns.histplot(df['col'])<br/>2) 카운트플롯 — sns.countplot(data=df, x='category')<br/>3) 산점도·박스플롯 — sns.scatterplot(x='A', y='B', data=df), sns.boxplot(data=df, y='target')"]
    채점 방식과 유의사항
      gradingBox["AICE 채점 방식과 유의사항(실기)<br/>1) 문제가 지정한 변수명(df_clean, X_train, scaler 등)을 철자 하나라도 틀리면 오답(0점)<br/>2) 원본 변경 지시 시 inplace=True 적용 또는 df = df.drop(...) 형태로 명시적 재할당 필요<br/>3) 90분 14문항, 100점 만점 중 80점 이상 합격"]`,
};
