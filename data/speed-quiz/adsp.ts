export type AdspChapterId = "all" | "ch1" | "ch2" | "ch3";

export interface AdspChapter {
  id: AdspChapterId;
  name: string;
  shortName: string;
}

export const ADSP_CHAPTERS: { id: "ch1" | "ch2" | "ch3"; name: string; shortName: string }[] = [
  { id: "ch1", name: "제1과목 데이터 이해", shortName: "데이터 이해" },
  { id: "ch2", name: "제2과목 데이터 분석 기획", shortName: "데이터 분석 기획" },
  { id: "ch3", name: "제3과목 데이터 분석", shortName: "데이터 분석" },
];

export interface SpeedQuizItem {
  id: number;
  chapterId: "ch1" | "ch2" | "ch3";
  chapterName: string;
  question: string;
  answer: string;
}

export const QUIZ_LIST: SpeedQuizItem[] = [
  // =================================================================
  // === [제1과목] 데이터 이해 (13문항)
  // =================================================================
  {
    id: 1,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "제조, 물류 등 유통공급망 전체를 최적화하여 재고와 비용을 줄이는 솔루션은?",
    answer: "SCM (공급망 관리)"
  },
  {
    id: 2,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "빅데이터 가치 패러다임 변화 3단계 순서는?",
    answer: "디지털화 ➔ 연결 ➔ 에이전시"
  },
  {
    id: 3,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "데이터 웨어하우스(DW)의 4대 핵심 특징은?",
    answer: "주제 지향성, 통합성, 시계열성, 비휘발성"
  },
  {
    id: 4,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "빅데이터 3V(Volume, Velocity, Variety)에 가치 창출을 위해 추가된 대표적인 요소는?",
    answer: "Value (가치) / Veracity (정확성)"
  },
  {
    id: 5,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "순수 수치·기호(Data)에서 관계와 규칙을 찾아 지식(Knowledge)을 거쳐 지혜(Wisdom)로 나아가는 4단계 위계 구조는?",
    answer: "DIKW 피라미드"
  },
  {
    id: 6,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "개인에게 내재되어 언어로 표현하기 힘든 암묵지와 문서·매뉴얼로 공유 가능한 형식지 간의 상호작용 모델은?",
    answer: "SECI 모델 (지식창출 사이클)"
  },
  {
    id: 7,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "빅데이터 시대 사생활 침해를 방지하기 위해 사전 동의(Opt-in) 대신 정보 사용자에게 부과하는 새로운 통제 패러다임은?",
    answer: "책임 원칙 (동의제 ➔ 책임제)"
  },
  {
    id: 8,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "고객과 관련된 모든 기업 내·외부 정보를 통합하여 고객 맞춤형 마케팅 및 장기 관계를 구축하는 시스템은?",
    answer: "CRM (고객관계관리)"
  },
  {
    id: 9,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "정형, 반정형, 비정형 등 데이터 형태에 구애받지 않고 원시(Raw) 상태 그대로 대규모 저장하는 저장소는?",
    answer: "데이터 레이크 (Data Lake)"
  },
  {
    id: 10,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "데이터의 구조, 속성, 이력, 생성자 등을 설명하여 데이터 자산화와 카탈로그 관리의 핵심이 되는 '데이터에 관한 데이터'는?",
    answer: "메타데이터 (Metadata)"
  },
  {
    id: 11,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "빅데이터 알고리즘에 의해 부당하게 피해를 입은 사람을 구제하거나 알고리즘의 편향성과 오작동을 감시하는 전문 직업은?",
    answer: "알고리즈미스트 (Algorithmist)"
  },
  {
    id: 12,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "분산 네트워크 참여자들이 거래 정보를 블록으로 연결하고 합의 알고리즘을 통해 공동으로 검증·저장하는 분산 원장 기술은?",
    answer: "블록체인 (Blockchain)"
  },
  {
    id: 13,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "개인정보의 일부를 삭제하거나 대체하여 추가 정보 없이는 특정 개인을 식별할 수 없도록 안전하게 처리하는 기법은?",
    answer: "가명처리 (비식별화)"
  },

  // =================================================================
  // === [제2과목] 데이터 분석 기획 (15문항)
  // =================================================================
  {
    id: 14,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "분석 대상은 알고 있으나(Known), 구체적 분석 방법을 모르는(Unknown) 과제 유형은?",
    answer: "솔루션 (Solution)"
  },
  {
    id: 15,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "빅데이터 분석 방법론의 3계층 계층적 프로세스 모델 구성은?",
    answer: "단계(Phase) ➔ 태스크(Task) ➔ 스텝(Step)"
  },
  {
    id: 16,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "데이터 거버넌스 체계의 4대 핵심 구성요소는?",
    answer: "조직, 프로세스, 시스템, 데이터 표준"
  },
  {
    id: 17,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "기업의 분석 성숙도(Maturity) 4단계 순서는?",
    answer: "도입 ➔ 활용 ➔ 확산 ➔ 최적화"
  },
  {
    id: 18,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "분석 마스터 플랜 수립 시 우선순위 평가 기준 2가지는?",
    answer: "전략적 중요도, 실행 용이성"
  },
  {
    id: 19,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "소프트웨어 개발 생명주기(SDLC) 중 목표설정 ➔ 위험분석 ➔ 개발/검증 ➔ 고객평가를 점진적으로 반복하는 모델은?",
    answer: "나선형 모델 (Spiral Model)"
  },
  {
    id: 20,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "문제 정의가 불명확하거나 데이터 관찰을 통해 새로운 통찰과 문제를 스스로 발굴해나가는 역발상 분석 접근법은?",
    answer: "상향식 접근법 (Bottom-Up)"
  },
  {
    id: 21,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "전사 분석 전담 조직이 별도로 존재하여 각 사업부서의 분석 니즈를 직접 총괄·지원하는 조직 형태는?",
    answer: "집중형 조직 구조"
  },
  {
    id: 22,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "CRISP-DM 분석 방법론의 6단계 중 데이터 이해 다음으로 모델링에 직접 투입할 데이터를 가공하는 단계는?",
    answer: "데이터 준비 (Data Preparation)"
  },
  {
    id: 23,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "디자인 씽킹에서 문제를 발견·정의하고 솔루션을 개발·전달할 때 '발산'과 '수렴'을 반복하는 프로세스 모델은?",
    answer: "더블 다이아몬드 모델"
  },
  {
    id: 24,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "전사적 데이터 분석 역량을 내재화하고 현업 부서의 과제를 체계적으로 지원·육성하기 위해 구축하는 전문 센터는?",
    answer: "CoE (Center of Excellence)"
  },
  {
    id: 25,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "데이터셋 선택 ➔ 전처리 ➔ 변환 ➔ 데이터 마이닝 ➔ 평가의 5단계로 진행되는 전통적인 데이터 분석 방법론은?",
    answer: "KDD 분석 방법론"
  },
  {
    id: 26,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "기업의 분석 역량 수준 진단을 위해 인프라, 인력·조직, 분석 기법, 데이터, 문화, 업무 등 6개 영역을 진단하는 모델은?",
    answer: "분석 준비도 (Readiness)"
  },
  {
    id: 27,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "계획 중심의 폭포수 모델과 달리, 짧은 반복 주기(스프린트)를 통해 요구 변화에 유연하게 대응하며 프로토타입을 빠르게 검증하는 방법론은?",
    answer: "애자일 (Agile) 방법론"
  },
  {
    id: 28,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "분석 마스터 플랜 수립 시 적용 범위 및 방식을 고려할 때 평가하는 핵심 요소 2가지는?",
    answer: "업무 내재화 적용 수준, 분석 기술 난이도"
  },

  // =================================================================
  // === [제3과목] 데이터 분석 (29문항)
  // =================================================================
  {
    id: 29,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "독립변수의 값 변화와 무관하게 오차의 분산이 항상 일정해야 한다는 회귀 기본 가정은?",
    answer: "등분산성"
  },
  {
    id: 30,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "주성분 분석(PCA)에서 고윳값(Eigenvalue)이 1 이상인 주성분만을 선택하는 기준은?",
    answer: "카이저 기준 (Kaiser Rule)"
  },
  {
    id: 31,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "군집분석에서 두 군집 간 거리를 가장 가까운 데이터 포인트 간의 거리로 정의하는 방법은?",
    answer: "단일연결법 (최단연결법)"
  },
  {
    id: 32,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "모형의 복잡도 증가에 따라 편향은 줄어들고 분산은 늘어나는 상충 관계를 일컫는 용어는?",
    answer: "편향-분산 트레이드오프 (Bias-Variance Tradeoff)"
  },
  {
    id: 33,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "데이터를 k개의 균등한 서브셋으로 나누어 순차적으로 검증하는 교차검증 기법은?",
    answer: "k-Fold 교차검증"
  },
  {
    id: 34,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "ROC 곡선의 X축과 Y축에 각각 배치되는 평가지표는?",
    answer: "X축: 1-특이도 (FPR), Y축: 민감도 (TPR)"
  },
  {
    id: 35,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "텍스트 마이닝에서 특정 단어의 문서 내 빈도와 전체 문서군 내 희소성을 결합한 가중치는?",
    answer: "TF-IDF"
  },
  {
    id: 36,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "연관성 분석(장바구니 분석)의 대표적인 3대 평가 척도는?",
    answer: "지지도(Support), 신뢰도(Confidence), 향상도(Lift)"
  },
  {
    id: 37,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "인공신경망 은닉층에서 기울기 소실(Vanishing Gradient)을 방지하기 위해 널리 쓰이는 활성화 함수는?",
    answer: "ReLU (Rectified Linear Unit)"
  },
  {
    id: 38,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "회귀분석에서 독립변수들 간에 강한 선형 상관관계가 존재하여 추정이 불안정해지는 현상은?",
    answer: "다중공선성 (Multicollinearity)"
  },
  {
    id: 39,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "기존 원천 변수들을 조합하거나 특정 조건식으로 분석가가 새롭게 정의하여 만들어낸 변수는?",
    answer: "파생변수 (Derived Variable)"
  },
  {
    id: 40,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "시계열 데이터가 시간에 관계없이 평균과 분산이 일정하고 자기공분산이 시차(Lag)에만 의존하는 성질은?",
    answer: "정상성 (Stationarity)"
  },
  {
    id: 41,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "상자그림(Boxplot)에서 IQR(Q3 - Q1)을 기준으로 이상치(Outlier)를 판정하는 경계값 기준은?",
    answer: "Q1 - 1.5×IQR 미만 또는 Q3 + 1.5×IQR 초과"
  },
  {
    id: 42,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "의사결정나무(Decision Tree)의 CART 알고리즘에서 노드 분할 기준으로 사용하는 불순도 지표는?",
    answer: "지니 지수 (Gini Index)"
  },
  {
    id: 43,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "회귀분석에서 독립변수 간 다중공선성을 진단하는 지표로, 통상 10 이상이면 심각한 다중공선성이 있다고 판단하는 수치는?",
    answer: "VIF (분산팽창계수)"
  },
  {
    id: 44,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "부트스트랩(Bootstrap) 샘플링으로 여러 개의 트리를 독립적으로 학습시키고 보팅(투표)하여 분산을 줄이는 앙상블 기법은?",
    answer: "배깅 (Bagging) / 랜덤 포레스트"
  },
  {
    id: 45,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "군집 내 응집도와 타 군집 간 분리도를 종합하여 -1에서 +1 사이 값으로 클러스터링 품질을 평가하는 척도는?",
    answer: "실루엣 계수 (Silhouette Coefficient)"
  },
  {
    id: 46,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "귀무가설이 참일 때 관측된 통계량 이상의 극단적인 값이 나올 확률로, 유의수준(α=0.05)보다 작을 때 귀무가설을 기각하는 지표는?",
    answer: "p-value (유의확률)"
  },
  {
    id: 47,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "모델이 학습 데이터의 노이즈까지 지나치게 외워버려 훈련 오차는 낮으나 실제 테스트 데이터의 성능이 급격히 저하되는 현상은?",
    answer: "과적합 (Overfitting)"
  },
  {
    id: 48,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "연관성 분석에서 품목 A와 B가 우연히 독립적으로 팔릴 확률 대비 함께 팔릴 확률의 비율로, 1보다 클 때 유의미한 양의 상관관계를 나타내는 지표는?",
    answer: "향상도 (Lift)"
  },
  {
    id: 49,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "원천 데이터를 데이터 마트에 적합하도록 집계(합계, 횟수, 평균 등)하여 특정 기간이나 대상별로 간단히 요약해 놓은 변수는?",
    answer: "요약변수 (Summary Variable)"
  },
  {
    id: 50,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "회귀모형에서 전체 변동(SST) 중 회귀식에 의해 설명되는 변동(SSR)의 비율로, 모형의 적합도와 설명력을 나타내는 0과 1 사이의 지표는?",
    answer: "결정계수 (R-squared)"
  },
  {
    id: 51,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "회귀분석 잔차의 독립성을 검정하기 위한 방법으로, 값이 2에 가까울수록 자기상관(Autocorrelation)이 없다고 판단하는 검정법은?",
    answer: "더빈-왓슨 검정 (Durbin-Watson Test)"
  },
  {
    id: 52,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "가설검정에서 실제로는 귀무가설(H0)이 참임에도 불구하고 귀무가설을 잘못 기각하여 발생하는 오류는?",
    answer: "제1종 오류 (알파 오류)"
  },
  {
    id: 53,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "이전 단계에서 잘못 분류된 오차 데이터에 더 큰 가중치를 부여하면서 순차적으로 약한 학습기들을 결합해 나가는 앙상블 기법은?",
    answer: "부스팅 (Boosting)"
  },
  {
    id: 54,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "주성분 분석(PCA)에서 각 주성분의 고윳값 크기를 내림차순으로 연결하여 곡선이 완만해지는 엘보우 지점에서 주성분 수를 결정하는 그래프는?",
    answer: "스크리 산점도 (Scree Plot)"
  },
  {
    id: 55,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "군집의 중심점(Centroid)과 데이터 사이의 거리를 계산하여 가장 가까운 중심점에 할당하고 갱신을 반복하는 대표적 비계층 군집화 알고리즘은?",
    answer: "k-평균 군집화 (k-Means)"
  },
  {
    id: 56,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "전체 데이터셋을 훈련용(Training)과 테스트용(Testing)으로 독립적으로 분할하여 모델의 일반화 성능을 객관적으로 평가하는 기법은?",
    answer: "홀드아웃 (Hold-out) 기법"
  },
  {
    id: 57,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "비정상 시계열을 차분(Differencing)하여 정상화한 후, 자기회귀(AR)와 이동평균(MA)을 결합하여 예측하는 대표적 시계열 모델은?",
    answer: "ARIMA 모형"
  },

  // =================================================================
  // === [최신 기출 분석] 적중률 극대화 고득점 ROI TOP 10 (신규 10문항)
  // =================================================================
  {
    id: 58,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 1위] 불균형 데이터 분류 평가에서 정밀도(Precision)와 재현율(Recall)의 가중치를 동등하게 부여하여 계산하는 조화평균(Harmonic Mean) 지표는?",
    answer: "F1-Score (F-측도)"
  },
  {
    id: 59,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 2위] 사건이 발생할 확률(p)을 발생하지 않을 확률(1-p)로 나눈 비율로, 로지스틱 회귀에서 로짓(Logit) 변환의 근간이 되는 통계적 개념은?",
    answer: "오즈 (Odds, 승산)"
  },
  {
    id: 60,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 3위] 계층적 군집분석에서 두 군집이 병합되었을 때 발생하는 군집 내 오차제곱합(ESS)의 증가량을 최소화하도록 군집을 결합해 나가는 연결법은?",
    answer: "와드 연결법 (Ward's Method)"
  },
  {
    id: 61,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 4위] 자료 분포의 비대칭 정도를 나타내는 통계량으로, 0보다 크면 오른쪽으로 긴 꼬리를 가지며(평균 > 중앙값) 양(+)의 비대칭을 나타내는 척도는?",
    answer: "왜도 (Skewness)"
  },
  {
    id: 62,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 5위] 연관성 분석에서 '어떤 항목집합이 빈발하지 않으면 이를 포함하는 모든 슈퍼셋도 빈발하지 않다'는 가지치기 원리로 탐색 공간을 줄이는 대표 알고리즘은?",
    answer: "아프리오리 (Apriori) 알고리즘"
  },
  {
    id: 63,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 6위] 회귀 및 시계열 모형 선택 시, 모형의 적합도와 설명변수 개수에 따른 페널티를 동시에 반영하여 수치가 작을수록 우수한 모형으로 평가하는 정보 기준은?",
    answer: "AIC (아카이케 정보 기준)"
  },
  {
    id: 64,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[ROI 7위] 분석 대상이 이미 식별된 상태에서 체계적으로 과제를 발굴하고 구체화하는 하향식(Top-Down) 접근법의 4단계 순서는?",
    answer: "문제 탐색 ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토"
  },
  {
    id: 65,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 8위] 시계열 데이터를 추세(Trend), 계절(Seasonal), 순환(Cyclical), 불규칙(Irregular) 요인 등 4가지 변동 요소로 분리하여 해석하는 기법은?",
    answer: "시계열 분해법 (Time Series Decomposition)"
  },
  {
    id: 66,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[ROI 9위] 전사적 데이터 웨어하우스(DW)로부터 특정 부서나 특정 주제 영역의 신속한 의사결정과 분석을 지원하기 위해 구축한 소규모 맞춤형 데이터 저장소는?",
    answer: "데이터 마트 (Data Mart, DM)"
  },
  {
    id: 67,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[ROI 10위] 등간·비율 척도로 측정된 두 연속형 변수 간의 '선형적(Linear) 상관관계'의 방향과 강도를 -1부터 +1 사이의 값으로 측정하는 대표적인 모수적 상관계수는?",
    answer: "피어슨 상관계수 (Pearson Correlation)"
  },

  // =================================================================
  // === [기출 복원 분석] 단답형 빈출 1순위 고득점 ROI 15문항 (ID 68~82)
  // =================================================================
  {
    id: 68,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 1위] 가설검정에서 실제 효과나 차이가 존재할 때(귀무가설이 거짓일 때), 귀무가설을 올바르게 기각하여 실제 효과를 감지해낼 확률(1 - β)은?",
    answer: "검정력 (Power of Test)"
  },
  {
    id: 69,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 2위] 가설검정에서 실제로는 귀무가설이 거짓(대립가설 참)임에도 불구하고 귀무가설을 잘못 채택하여 발생하는 오류(소비자 위험)는?",
    answer: "제2종 오류 (베타 오류)"
  },
  {
    id: 70,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 3위] 혼동행렬(Confusion Matrix)에서 실제로 음성(Negative)인 데이터 전체 중 모델이 음성이라고 정확하게 분류해낸 비율(TN / (TN + FP))은?",
    answer: "특이도 (Specificity)"
  },
  {
    id: 71,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 4위] 배깅과 랜덤 포레스트의 부트스트랩 샘플링 과정에서 복원추출에 선택되지 않고 남은 약 36.8%의 데이터로 별도 검증셋 없이 모델을 자체 평가하는 데이터는?",
    answer: "OOB (Out-Of-Bag) 평가"
  },
  {
    id: 72,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 5위] 두 변수의 값이 순위(Rank)나 서열 척도로 주어졌을 때 두 변수 간의 비선형적인 단조(Monotonic) 관계를 평가하는 비모수 상관계수는?",
    answer: "스피어만 상관계수 (Spearman Correlation)"
  },
  {
    id: 73,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 6위] 시계열 데이터에서 시간에 따라 평균이 일정하지 않은 추세(Trend)를 제거하고 정상성을 확보하기 위해 현 시점 값에서 바로 이전 시점 값을 빼주는 변환 연산은?",
    answer: "차분 (Differencing)"
  },
  {
    id: 74,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 7위] 전진선택법과 후진제거법을 결합하여, 새로운 변수를 추가할 때마다 이미 선택된 변수들의 중요도를 재평가하여 기준 미달 변수를 제거해 나가는 변수 선택법은?",
    answer: "단계적 선택법 (Stepwise Selection)"
  },
  {
    id: 75,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 8위] 계층적 군집분석에서 두 군집 간 거리를 서로 다른 군집에 속한 데이터 포인트 쌍 중 '가장 먼 거리'로 정의하여 군집을 결합하는 연결법은?",
    answer: "완전연결법 (최장연결법)"
  },
  {
    id: 76,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 9위] 변수 간의 상관관계(공분산 행렬)와 각 변수의 분산 차이를 고려하여 데이터 포인트 사이의 통계적 거리를 측정하는 척도는?",
    answer: "마할라노비스 거리 (Mahalanobis Distance)"
  },
  {
    id: 77,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 10위] 데이터가 정규분포를 따르는지(정규성) 검정하기 위해 널리 사용되며, 표본 수가 비교적 작을 때(주로 2,000개 미만) 강력한 검정력을 보이는 대표적인 통계 검정법은?",
    answer: "샤피로-윌크 검정 (Shapiro-Wilk Test)"
  },
  {
    id: 78,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[기출 복원 11위] 분석 과제 4분면 매트릭스에서 분석 대상도 불명확하고(Unknown), 구체적인 분석 방법론도 모르는(Unknown) 상태에서 데이터 탐색을 통해 새로운 기회를 발굴하는 과제 유형은?",
    answer: "발견 (Discovery)"
  },
  {
    id: 79,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[기출 복원 12위] 전사 전담 분석 부서가 별도로 존재하지 않고, 마케팅·영업·재무 등 각 해당 현업 업무 부서 내에서 자체적으로 필요에 따라 분석 과제를 수행하는 조직 형태는?",
    answer: "기능형 조직 구조"
  },
  {
    id: 80,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[기출 복원 13위] SECI 지식 창출 모델에서 개인의 머릿속에 축적된 '암묵지'를 매뉴얼, 문서, 서적 등 다른 사람이 이해할 수 있는 '형식지'로 언어화·시각화하여 공유하는 변환 단계는?",
    answer: "표출화 (Externalization)"
  },
  {
    id: 81,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[기출 복원 14위] 정보주체인 개인이 본인의 개인정보에 대한 전송요구권을 행사하여 자신의 데이터를 능동적으로 관리·통제하고 맞춤형 서비스를 제공받는 패러다임은?",
    answer: "마이데이터 (MyData)"
  },
  {
    id: 82,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[기출 복원 15위] 의사결정나무 C4.5 알고리즘에서 ID3의 다치 속성(하위 범주가 많은 변수) 과대 분할 편향을 해결하기 위해 엔트로피 대신 도입한 분할 기준 척도는?",
    answer: "정보 획득 비율 (Gain Ratio)"
  }
];
