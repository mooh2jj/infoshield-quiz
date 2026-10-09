import type { SpeedQuizChapter, SpeedQuizItem } from "./types";

export const BIGDATA_CHAPTERS: SpeedQuizChapter[] = [
  { id: "bd-ch1", name: "제1과목 빅데이터 분석 기획", shortName: "분석 기획" },
  { id: "bd-ch2", name: "제2과목 빅데이터 탐색", shortName: "빅데이터 탐색" },
  { id: "bd-ch3", name: "제3과목 빅데이터 모델링", shortName: "빅데이터 모델링" },
  { id: "bd-ch4", name: "제4과목 빅데이터 결과 해석", shortName: "결과 해석" },
];

export const BIGDATA_QUIZ_LIST: SpeedQuizItem[] = [
  // =================================================================
  // === [제1과목] 빅데이터 분석 기획
  // =================================================================
  {
    id: 1,
    chapterId: "bd-ch1",
    chapterName: "제1과목 빅데이터 분석 기획",
    question: "데이터 거버넌스(Data Governance) 체계를 구축하는 4대 핵심 구성요소는?",
    answer: "조직, 프로세스, 시스템, 데이터 표준"
  },
  {
    id: 2,
    chapterId: "bd-ch1",
    chapterName: "제1과목 빅데이터 분석 기획",
    question: "비식별화 조치 중 동일한 준식별자 값을 가진 레코드가 데이터셋 내에 최소 k개 이상 존재하도록 보장하는 모델은?",
    answer: "k-익명성 (k-Anonymity)"
  },
  {
    id: 3,
    chapterId: "bd-ch1",
    chapterName: "제1과목 빅데이터 분석 기획",
    question: "k-익명성의 취약점인 '동질성 공격'을 방어하기 위해 각 동질 집단 내 민감정보가 최소 l개 이상의 서로 다른 값을 갖도록 보장하는 기법은?",
    answer: "l-다양성 (l-Diversity)"
  },
  {
    id: 4,
    chapterId: "bd-ch1",
    chapterName: "제1과목 빅데이터 분석 기획",
    question: "산업 표준 데이터 마이닝 방법론인 CRISP-DM의 6단계 프로세스 순서는?",
    answer: "업무 이해 ➔ 데이터 이해 ➔ 데이터 준비 ➔ 모델링 ➔ 평가 ➔ 전개"
  },
  {
    id: 5,
    chapterId: "bd-ch1",
    chapterName: "제1과목 빅데이터 분석 기획",
    question: "CRISP-DM 6단계 중 결측치 처리, 데이터 변환, 파생변수 생성 등 전체 프로젝트 공수의 60~80%가 소요되는 단계는?",
    answer: "데이터 준비 (Data Preparation)"
  },
  {
    id: 6,
    chapterId: "bd-ch1",
    chapterName: "제1과목 빅데이터 분석 기획",
    question: "분석 과제 4분면 매트릭스에서 분석 대상(Target)은 알고 있으나 구체적 분석 방법(How)을 모르는 과제 유형은?",
    answer: "솔루션 (Solution)"
  },

  // =================================================================
  // === [제2과목] 빅데이터 탐색
  // =================================================================
  {
    id: 7,
    chapterId: "bd-ch2",
    chapterName: "제2과목 빅데이터 탐색",
    question: "상자그림(Boxplot)에서 IQR(Q3 - Q1)을 기준으로 이상치(Outlier)를 판정하는 수식 경계는?",
    answer: "Q1 - 1.5×IQR 미만 또는 Q3 + 1.5×IQR 초과"
  },
  {
    id: 8,
    chapterId: "bd-ch2",
    chapterName: "제2과목 빅데이터 탐색",
    question: "분포의 비대칭 정도를 나타내는 통계량으로, 0보다 클 때 오른쪽으로 긴 꼬리를 갖는(평균 > 중앙값) 척도는?",
    answer: "왜도 (Skewness)"
  },
  {
    id: 9,
    chapterId: "bd-ch2",
    chapterName: "제2과목 빅데이터 탐색",
    question: "고차원 데이터의 분산을 최대한 보존하면서 서로 직교하는 새로운 무상관 성분 축으로 차원을 축소하는 기법은?",
    answer: "주성분 분석 (PCA)"
  },
  {
    id: 10,
    chapterId: "bd-ch2",
    chapterName: "제2과목 빅데이터 탐색",
    question: "결측값을 단순히 제거하지 않고, 결측 변수와 타 변수 간의 관계를 통계적 시뮬레이션으로 여러 번 대치하여 불확실성을 반영하는 방법은?",
    answer: "다중 대치법 (MICE / Multiple Imputation)"
  },
  {
    id: 11,
    chapterId: "bd-ch2",
    chapterName: "제2과목 빅데이터 탐색",
    question: "데이터의 최솟값을 0, 최댓값을 1로 정규화하여 모든 피처를 [0, 1] 범위로 변환하는 스케일링 기법은?",
    answer: "Min-Max 정규화 (최대-최소 스케일링)"
  },
  {
    id: 12,
    chapterId: "bd-ch2",
    chapterName: "제2과목 빅데이터 탐색",
    question: "연속형 변수 간의 선형 상관관계를 나타내는 피어슨 상관계수와 달리, 순위(서열) 척도 변수 간의 단조 상관성을 측정하는 비모수 상관계수는?",
    answer: "스피어만 상관계수 (Spearman)"
  },

  // =================================================================
  // === [제3과목] 빅데이터 모델링
  // =================================================================
  {
    id: 13,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "성공 확률(p) 대 실패 확률(1-p)의 비인 승산(Odds)에 자연로그를 취해 선형 모델과 연결하는 변환은?",
    answer: "로짓 변환 (Logit Transformation)"
  },
  {
    id: 14,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "다중회귀분석에서 독립변수들 간에 강한 선형 상관관계가 존재하여 계수 추정이 왜곡되는 현상은?",
    answer: "다중공선성 (Multicollinearity)"
  },
  {
    id: 15,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "의사결정나무 CART 알고리즘에서 노드 분할 기준으로 사용하며 50:50 분할 시 최댓값 0.5를 갖는 불순도 지표는?",
    answer: "지니 지수 (Gini Index)"
  },
  {
    id: 16,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "부트스트랩(Bootstrap) 표본을 이용해 여러 결정 트리를 독립 병렬 학습시키고 투표(Voting)하여 모형의 분산을 줄이는 앙상블 기법은?",
    answer: "배깅 (Bagging) / 랜덤 포레스트"
  },
  {
    id: 17,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "이전 단계의 약한 학습기가 틀린 오차(잔차)에 가중치를 부여하며 순차적으로 결합해 편향을 줄여나가는 앙상블 기법은?",
    answer: "부스팅 (Boosting / XGBoost / LightGBM)"
  },
  {
    id: 18,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "계층적 군집분석에서 두 군집 병합 시 발생하는 군집 내 오차제곱합(ESS)의 증가량을 최소화하여 결합하는 연결법은?",
    answer: "와드 연결법 (Ward's Method)"
  },
  {
    id: 19,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "인공신경망 은닉층에서 시그모이드의 기울기 소실(Vanishing Gradient) 문제를 해결하기 위해 양수는 그대로, 음수는 0을 출력하는 활성화 함수는?",
    answer: "ReLU (Rectified Linear Unit)"
  },
  {
    id: 20,
    chapterId: "bd-ch3",
    chapterName: "제3과목 빅데이터 모델링",
    question: "밀도 기반 군집분석 알고리즘으로, 기하학적 형태의 군집을 탐색할 수 있고 노이즈(이상치)를 자동으로 판별해내는 비계층 군집화 기법은?",
    answer: "DBSCAN"
  },

  // =================================================================
  // === [제4과목] 빅데이터 결과 해석
  // =================================================================
  {
    id: 21,
    chapterId: "bd-ch4",
    chapterName: "제4과목 빅데이터 결과 해석",
    question: "불균형 데이터 이진 분류 모델 평가에서 정밀도(Precision)와 재현율(Recall)의 조화평균으로 계산되는 핵심 지표는?",
    answer: "F1-Score (F-측도)"
  },
  {
    id: 22,
    chapterId: "bd-ch4",
    chapterName: "제4과목 빅데이터 결과 해석",
    question: "ROC 곡선의 가로축(X축)과 세로축(Y축)에 각각 배치되는 성능 평가 지표는?",
    answer: "X축: 1-특이도 (FPR), Y축: 민감도 (TPR)"
  },
  {
    id: 23,
    chapterId: "bd-ch4",
    chapterName: "제4과목 빅데이터 결과 해석",
    question: "군집 내 응집도 a(i)와 타 군집 간 분리도 b(i)를 이용해 -1에서 +1 사이 값으로 클러스터링 품질을 평가하는 지표는?",
    answer: "실루엣 계수 (Silhouette Coefficient)"
  },
  {
    id: 24,
    chapterId: "bd-ch4",
    chapterName: "제4과목 빅데이터 결과 해석",
    question: "회귀분석에서 독립변수의 개수가 증가할 때 무조건 증가하는 일반 R²의 단점을 보완하여 자유도를 반영한 설명력 지표는?",
    answer: "수정된 결정계수 (Adjusted R-squared)"
  },
  {
    id: 25,
    chapterId: "bd-ch4",
    chapterName: "제4과목 빅데이터 결과 해석",
    question: "모형의 과적합을 방지하기 위해 가중치의 제곱합(L2 Norm)을 손실함수에 페널티로 추가하여 계수를 0에 가깝게 축소하는 정규화 회귀는?",
    answer: "릿지 회귀 (Ridge Regression / L2 정규화)"
  },
  {
    id: 26,
    chapterId: "bd-ch4",
    chapterName: "제4과목 빅데이터 결과 해석",
    question: "연관성 분석에서 두 품목이 우연히 독립적으로 구매될 확률 대비 함께 구매될 확률의 배율로, 1보다 클 때 양의 상관성을 나타내는 지표는?",
    answer: "향상도 (Lift)"
  }
];
