import type { MindmapSection } from "@/types/mindmap";

export const practicalMindmap: MindmapSection = {
  id: "practical",
  title: "실기 작업형",
  description: "작업형 1·2·3유형 — 전처리, ML 파이프라인, 가설검정",
  chart: `mindmap
  root((실기 작업형))
    작업형 제1유형
      type1Box["작업형 제1유형 핵심(실기)<br/>1) 데이터 전처리와 pandas 연산 위주<br/>2) 이상치 대체, 조건 필터링(loc), 정렬(sort_values)<br/>3) Groupby 집계 후 단일 값을 print()로 출력"]
      type1ExampleBox["작업형 1유형 코드 패턴(실기)<br/>1) sort_values(ascending=False) 후 iloc[9]로 10번째 값 추출<br/>2) df.loc[idx, col] = value로 상위 값들을 대체<br/>3) round(value, 1)로 반올림해 출력"]
    작업형 제2유형
      type2ChecklistBox["작업형 제2유형 체크리스트(실기)<br/>1) 결측치 처리 — fillna 또는 SimpleImputer<br/>2) 인코딩 — get_dummies 또는 OneHotEncoder<br/>3) 스케일링 — StandardScaler<br/>4) train_test_split(..., stratify=y)로 분할<br/>5) RandomForestClassifier로 모델 학습<br/>6) predict_proba로 확률 예측 후 CSV 저장"]
    작업형 제3유형 가설검정
      hypothesisTestBox["가설검정 4대 유형(실기)<br/>1) t-검정 — 두 집단(또는 대응표본)의 평균 비교<br/>2) 분산분석(ANOVA) — 3개 이상 집단의 평균 비교<br/>3) 카이제곱 검정 — 범주형 변수의 적합도·독립성 검정<br/>4) 회귀계수 검정 — 회귀계수의 유의성을 p-value로 확인"]
      검정 코드 패턴
        tTestBox["t-검정 코드 패턴(실기)<br/>1) stats.ttest_ind(A, B, equal_var=True)로 t통계량과 p-value 산출<br/>2) p < 0.05면 귀무가설 기각(차이가 유의함)"]
        chiSquareBox["카이제곱 검정 코드 패턴(실기)<br/>1) pd.crosstab으로 교차표(Contingency Table) 생성<br/>2) stats.chi2_contingency(table)로 카이제곱통계량·p-value·자유도 산출"]
        olsBox["다중회귀 계수 검정 코드 패턴(실기)<br/>1) sm.add_constant로 상수항을 추가<br/>2) sm.OLS(y, X).fit()로 모델 적합<br/>3) model.params·model.pvalues로 계수와 유의성 확인, model.rsquared로 결정계수 확인"]`,
};
