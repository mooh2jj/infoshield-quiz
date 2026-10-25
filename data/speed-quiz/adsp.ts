export type AdspChapterId = "all" | "ch1" | "ch2" | "ch3";

export interface AdspChapter {
  id: AdspChapterId;
  name: string;
  shortName: string;
}

export const ADSP_CHAPTERS: { id: "ch1" | "ch2" | "ch3"; name: string; shortName: string }[] = [
  { id: "ch1", name: "제1과목 데이터 이해", shortName: "데이터 이해 (기출 20선)" },
  { id: "ch2", name: "제2과목 데이터 분석 기획", shortName: "분석 기획 (기출 20선)" },
  { id: "ch3", name: "제3과목 데이터 분석", shortName: "데이터 분석 (기출 60선)" },
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
  // === [제1과목] 데이터 이해 (기출 ROI 핵심 20문항, Q1 ~ Q20)
  // =================================================================
  {
    id: 1,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[48회 기출] 데이터를 비즈니스 맥락에서 비판적으로 이해하고 데이터에 기반하여 원활하게 소통하는 전인적 역량은?",
    answer: "데이터 리터러시 (Data Literacy)"
  },
  {
    id: 2,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[47회 기출] 데이터 레이크에서 메타데이터와 거버넌스 부재로 쓸모없는 데이터만 쌓여 검색조차 불가능해진 상태는?",
    answer: "데이터 늪 (Data Swamp)"
  },
  {
    id: 3,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[44회 기출] 관계형 데이터베이스에서 기본키(PK)를 구성하는 속성은 NULL 값이나 중복값을 가질 수 없다는 제약조건은?",
    answer: "개체 무결성 (Entity Integrity)"
  },
  {
    id: 4,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[43회 기출] 기상청 관측소 최고기온 수치처럼 행과 열의 고정된 스키마 구조를 갖는 데이터 유형은?",
    answer: "정형 데이터 (Structured Data)"
  },
  {
    id: 5,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[43회 기출] 빅데이터 가치 패러다임 변화 3단계(디지털화 ➔ 연결 ➔ ?) 중 맞춤 행동을 추천·대행하는 최종 단계는?",
    answer: "에이전시 (Agency)"
  },
  {
    id: 6,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[43회 기출] 개인정보 비식별화 기법 중 32세 나이를 '30대'처럼 넓은 구간값으로 변환하여 식별성을 낮추는 기법은?",
    answer: "범주화 (Categorization)"
  },
  {
    id: 7,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[42회 기출] 수치로 측정되는 정량적 데이터와 달리, 언어나 문자로 주관적 현상을 기술한 기상특보 같은 데이터 유형은?",
    answer: "정성적 데이터 (Qualitative Data)"
  },
  {
    id: 8,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[42회 기출] DIKW 피라미드에서 'B마트가 A마트보다 싸니 B마트에서 사야겠다'처럼 정보를 실행 규칙과 지침으로 정립한 단계는?",
    answer: "지식 (Knowledge)"
  },
  {
    id: 9,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[42회 기출] 예측 알고리즘의 성향 판단만으로 아직 범죄를 저지르지 않은 사람의 기본권을 제한하는 빅데이터 위기 요인은?",
    answer: "책임 원칙의 훼손"
  },
  {
    id: 10,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[41회 기출] 노나카 SECI 모형에서 개인의 머릿속 암묵지를 매뉴얼, 보고서 등 객관적 형식지로 구체화하는 단계는?",
    answer: "표출화 (Externalization)"
  },
  {
    id: 11,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[40회 기출] 빌 인몬(Inmon)이 정의한 데이터 웨어하우스(DW)의 4대 핵심 특징은?",
    answer: "주제 지향성, 통합성, 시계열성, 비휘발성"
  },
  {
    id: 12,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[40회 기출] 빅데이터 3V(Volume, Velocity, Variety)에 비즈니스 가치 창출을 위해 추가된 대표 요소는?",
    answer: "Value (가치) / Veracity (정확성)"
  },
  {
    id: 13,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[39회 기출] 제조, 물류 등 유통공급망 전체를 최적화하여 재고와 비용을 줄이는 기업 통합 솔루션은?",
    answer: "SCM (공급망 관리)"
  },
  {
    id: 14,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[39회 기출] 고객 데이터를 통합 관리하여 고객 만족도를 높이고 마케팅 및 재구매율을 극대화하는 시스템은?",
    answer: "CRM (고객관계관리)"
  },
  {
    id: 15,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[38회 기출] 대용량 정형, 반정형, 비정형 데이터를 가공 없이 원시(Raw) 형태로 보관하는 확장형 저장소는?",
    answer: "데이터 레이크 (Data Lake)"
  },
  {
    id: 16,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[38회 기출] 개인정보 비식별화 중 홍길동을 '홍*동'으로, 전화번호 뒷자리를 '****'로 가리는 기법은?",
    answer: "데이터 마스킹 (Masking)"
  },
  {
    id: 17,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[37회 기출] 빅데이터 시대 가치 패러다임 변화 중 복잡한 원인 규명보다 패턴과 연관성에 주목하는 변화는?",
    answer: "인과관계에서 상관관계로의 변화"
  },
  {
    id: 18,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[37회 기출] 알고리즘 맹신에 따른 부당한 피해를 방지하고 판정 알고리즘의 작동 근거와 부당성을 설명하는 전문가는?",
    answer: "알고리즈미스트 (Algorithmist)"
  },
  {
    id: 19,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[36회 기출] 데이터베이스의 4대 기본 특성(실시간 접근성, 계속적 변화, 동시 공유 외 1가지)은?",
    answer: "내용에 의한 참조 (Content Reference)"
  },
  {
    id: 20,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[빈출 기출] 개인이 자신의 개인정보에 대한 열람, 전송, 활용 권리를 직접 행사하는 새로운 데이터 패러다임은?",
    answer: "마이데이터 (MyData)"
  },

  // =================================================================
  // === [제2과목] 데이터 분석 기획 (기출 ROI 핵심 20문항, Q21 ~ Q40)
  // =================================================================
  {
    id: 21,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[48회 기출] 분석 과제 우선순위 매트릭스 4사분면 중 가장 먼저 추진해야 하는 최우선 1순위 과제 조건은?",
    answer: "시급성 높음(현재) + 난이도 낮음(쉬움) [Quick-Win]"
  },
  {
    id: 22,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 요구사항이 모호할 때 가벼운 시제품을 빠르게 개발해 사용자 피드백을 수용하며 구체화하는 상향식 모델은?",
    answer: "프로토타이핑 모델 (Prototyping)"
  },
  {
    id: 23,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[44회 기출] 분석 마스터플랜의 투자비용 요소(ROI) 4V 중 비즈니스 효과성(Benefit)을 나타내는 요소는?",
    answer: "가치 (Value)"
  },
  {
    id: 24,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[43회 기출] CMMI 기반 분석 성숙도(Maturity) 5단계의 올바른 발전 순서는?",
    answer: "도입 ➔ 관리 ➔ 정의 ➔ 측정 ➔ 최적화"
  },
  {
    id: 25,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[43회 기출] 분석 과제 발굴 4분면에서 분석 대상(What)은 알고 있으나 구체적 해결 방법(How)을 모를 때 도출되는 과제는?",
    answer: "솔루션 (Solution)"
  },
  {
    id: 26,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[43회 기출] CRISP-DM 6단계 중 전체 분석 공수의 60~80%가 소요되는 가장 노동집약적인 단계는?",
    answer: "데이터 준비 (Data Preparation)"
  },
  {
    id: 27,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[42회 기출] 데이터 거버넌스 체계 중 원천 스키마 변경 시 사전 영향도 분석과 통제 승인을 거치는 프로세스는?",
    answer: "데이터 변경 관리"
  },
  {
    id: 28,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[42회 기출] KDD 분석 방법론 5단계 중 데이터셋의 차원을 축소하거나 정규화하여 마이닝에 적합하게 가공하는 3번째 단계는?",
    answer: "데이터 변환 (Transformation)"
  },
  {
    id: 29,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[41회 기출] 전사 전담 분석 조직이 분석을 독점 주도하여 현업 부서와 갈등이나 우선순위 충돌이 생길 수 있는 구조는?",
    answer: "집중형 조직 구조 (Centralized)"
  },
  {
    id: 30,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[41회 기출] 기업의 분석 수준 진단에서 분석 준비도(Readiness)와 성숙도(Maturity)가 모두 낮은 초기 진입 기업 유형은?",
    answer: "준비형 (Ready)"
  },
  {
    id: 31,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[40회 기출] 데이터 분석 수준 진단 6대 영역(분석 인력, 인프라, 거버넌스, 분석 기법, 데이터 외 1가지)은?",
    answer: "분석 문화 (Culture)"
  },
  {
    id: 32,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[40회 기출] 분석 과제 발굴 4분면에서 분석 대상(What)도 모르고 해결 방법(How)도 모를 때 시도하는 과제 유형은?",
    answer: "발견 (Discovery)"
  },
  {
    id: 33,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[39회 기출] 하향식 접근법(Top-Down)의 4단계 순서는?",
    answer: "문제 식별 ➔ 문제 정의 ➔ 원인 탐색 ➔ 대안 도출"
  },
  {
    id: 34,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[39회 기출] 빅데이터 분석 방법론의 3계층 프로세스 모델 구성 단위는?",
    answer: "단계(Phase) ➔ 태스크(Task) ➔ 스텝(Step)"
  },
  {
    id: 35,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[38회 기출] 데이터 거버넌스(Data Governance) 체계의 4대 핵심 구성 요소는?",
    answer: "원칙(Principles), 조직, 프로세스, 관리체계"
  },
  {
    id: 36,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[38회 기출] 분석 마스터플랜 수립 시 우선순위 평가의 2대 핵심 축은?",
    answer: "전략적 중요도 (시급성), 실행 용이성 (난이도)"
  },
  {
    id: 37,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[37회 기출] 전담 분석 부서의 분석가를 현업 부서에 직접 전진 배치하여 신속한 협업과 피드백을 유도하는 구조는?",
    answer: "분산형 조직 구조 (Decentralized)"
  },
  {
    id: 38,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[37회 기출] 데이터 마이닝 표준 방법론인 CRISP-DM의 6단계 순서는?",
    answer: "비즈니스 이해 ➔ 데이터 이해 ➔ 데이터 준비 ➔ 모델링 ➔ 평가 ➔ 전개"
  },
  {
    id: 39,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[36회 기출] 문제를 미리 정의하지 않고 보유한 데이터의 탐색과 결합을 통해 인사이트를 발굴하는 접근법은?",
    answer: "상향식 접근법 (Bottom-Up)"
  },
  {
    id: 40,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[빈출 기출] 분석 과제 관리 5대 주요 속성(Data, Speed, Value, Complexity 외 1가지)은?",
    answer: "Accuracy (정확도)"
  },

  // =================================================================
  // === [제3과목] 데이터 분석 (기출 ROI 핵심 60문항, Q41 ~ Q100)
  // =================================================================
  {
    id: 41,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 3개 이상의 독립된 집단 간 중앙값 차이를 비교하며 정규성을 가정하지 않는 비모수 통계 검정은?",
    answer: "크루스칼-왈리스 검정 (Kruskal-Wallis)"
  },
  {
    id: 42,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 시계열 곱셈 모형에서 원계열을 계절 지수로 나눈(Yt / St) 시계열은?",
    answer: "계절 조정 시계열 (Seasonally Adjusted)"
  },
  {
    id: 43,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 연관성 분석에서 향상도(Lift)가 정확히 1일 때 두 품목 간의 통계적 관계는?",
    answer: "상호 독립 (Independent)"
  },
  {
    id: 44,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 선형 회귀분석 잔차의 자기상관(독립성)을 검정하며 2에 가까울수록 독립인 검정 통계량은?",
    answer: "더빈-왓슨 검정 (Durbin-Watson)"
  },
  {
    id: 45,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] K-Means 군집분석에서 군집 내 오차제곱합(WSS) 감소율이 완만해지는 변곡점의 k를 선택하는 기법은?",
    answer: "엘보우 기법 (Elbow Method)"
  },
  {
    id: 46,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 심층 신경망 학습 시 뉴런의 일부를 임의의 확률로 비활성화하여 과적합을 억제하는 기법은?",
    answer: "드롭아웃 (Dropout)"
  },
  {
    id: 47,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[44회 기출] PCA에서 주성분 분산 비율을 순차 합산하여 누적 설명력 85% 이상 지점을 찾는 척도는?",
    answer: "누적 기여율 (Cumulative Proportion)"
  },
  {
    id: 48,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[44회 기출] 로지스틱 회귀분석에서 성공 확률 p에 대한 오즈(Odds)의 계산 공식은?",
    answer: "p / (1 - p)"
  },
  {
    id: 49,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[44회 기출] 랜덤포레스트에서 부트스트랩 미선택 잔여치(약 36.8%)를 활용하여 모델 성능을 평가하는 오차는?",
    answer: "OOB 오차 (Out-of-Bag Error)"
  },
  {
    id: 50,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 모든 예측 변수가 상호 조건부 독립이라는 가정을 전제로 사후확률을 계산하는 분류기는?",
    answer: "나이브 베이즈 분류기 (Naive Bayes)"
  },
  {
    id: 51,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 회귀분석 잔차가 만족해야 하는 4대 기본 가정(선형성, 등분산성, 독립성 외 1가지)은?",
    answer: "정규성 (Normality)"
  },
  {
    id: 52,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 서포트 벡터 머신(SVM)에서 두 클래스를 분리하는 초평면과 가장 가까운 위치의 경계 샘플은?",
    answer: "서포트 벡터 (Support Vector)"
  },
  {
    id: 53,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 계층적 군집분석에서 개체 간의 결합 거리와 순서를 시각화한 수형도 다이어그램은?",
    answer: "덴드로그램 (Dendrogram)"
  },
  {
    id: 54,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] AIC 대비 표본 크기(ln n)를 페널티에 반영하여 변수 증가에 더 엄격한 제약을 주는 정보 기준은?",
    answer: "BIC (Bayesian Information Criterion)"
  },
  {
    id: 55,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] PCA 수행 시 변수 간 단위(Scale)나 분산의 차이가 극심할 때 입력으로 사용해야 하는 행렬은?",
    answer: "상관행렬 (Correlation Matrix)"
  },
  {
    id: 56,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 시계열 오차항이 만족해야 하는 평균 0, 분산 σ², 시차 k ≠ 0 자기상관 0인 정상 시계열은?",
    answer: "백색잡음 (White Noise)"
  },
  {
    id: 57,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 장바구니 분석 Apriori에서 '비빈발 항목의 초집합은 무조건 비빈발하다'는 원리는?",
    answer: "가지치기 (Pruning / 반단조성)"
  },
  {
    id: 58,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] K-Fold 교차검증에서 K = N으로 설정하여 표본 수만큼 모델을 학습시키는 기법은?",
    answer: "LOOCV (Leave-One-Out)"
  },
  {
    id: 59,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 시계열 데이터 4대 분해 요소 중 2~10년 이상 주기의 불규칙한 경제 변동 파동은?",
    answer: "순환 요인 (Cycle / 순환 변동)"
  },
  {
    id: 60,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 의사결정나무 CART에서 불순도가 낮을수록 0에 수렴하는 불순도 지표는?",
    answer: "지니 지수 (Gini Index)"
  },
  {
    id: 61,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 다중공선성(Multicollinearity) 진단 지표로 VIF가 몇 이상일 때 심각한 공선성이 있다고 판정하는가?",
    answer: "10 이상 (VIF ≥ 10)"
  },
  {
    id: 62,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 로지스틱 회귀에서 독립변수 X가 1단위 증가할 때 성공 오즈가 변화하는 배수는?",
    answer: "오즈비 (Odds Ratio, exp(β₁))"
  },
  {
    id: 63,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 시계열 모형 판별 시 자기상관함수(ACF)가 시차 q 이후 절단되는 모형은?",
    answer: "MA(q) 모형 (이동평균 모형)"
  },
  {
    id: 64,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 시계열 모형 판별 시 부분자기상관함수(PACF)가 시차 p 이후 절단되는 모형은?",
    answer: "AR(p) 모형 (자기회귀 모형)"
  },
  {
    id: 65,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[40회 기출] 부트스트랩 표본을 병렬 학습시켜 모델의 분산(Variance)을 줄여주는 앙상블 기법은?",
    answer: "배깅 (Bagging)"
  },
  {
    id: 66,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[40회 기출] 이전 모델의 오분류 오차에 가중치를 부여해 순차 학습하여 편향(Bias)을 줄이는 기법은?",
    answer: "부스팅 (Boosting)"
  },
  {
    id: 67,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[40회 기출] 군집분석 실루엣 계수의 값 범위와 군집 구조가 매우 타당하다고 평가되는 기준 수치는?",
    answer: "-1 ~ +1 (0.5 이상)"
  },
  {
    id: 68,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 실제 참인 귀무가설(H₀)을 통계적으로 잘못 기각하는 오류는?",
    answer: "제1종 오류 (α)"
  },
  {
    id: 69,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 거짓인 귀무가설을 채택하지 않고 올바르게 기각할 확률(1 - β)은?",
    answer: "검정력 (Power)"
  },
  {
    id: 70,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 상자그림(Boxplot)에서 이상치를 판정하는 바깥 울타리 경계 공식은?",
    answer: "Q1 - 1.5×IQR 미만, Q3 + 1.5×IQR 초과"
  },
  {
    id: 71,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 연속형 두 변수의 선형 관계 강도를 측정하며 -1에서 +1 사이 값을 갖는 상관계수는?",
    answer: "피어슨 상관계수 (Pearson)"
  },
  {
    id: 72,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 두 변수의 순위(Rank)를 기반으로 비모수적 단조 관계를 측정하는 상관계수는?",
    answer: "스피어만 상관계수 (Spearman)"
  },
  {
    id: 73,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] R에서 동일한 단일 자료형(숫자형, 문자형 등)으로만 구성된 1차원 데이터 구조는?",
    answer: "벡터 (Vector)"
  },
  {
    id: 74,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] R에서 열마다 서로 다른 자료형을 담을 수 있는 2차원 표 형태의 구조는?",
    answer: "데이터프레임 (Data Frame)"
  },
  {
    id: 75,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] R에서 숫자, 문자, 행렬, 리스트 등 서로 다른 객체를 중첩해서 담을 수 있는 구조는?",
    answer: "리스트 (List)"
  },
  {
    id: 76,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] 회귀 변수선택법 중 변수를 추가하면서도 유의성이 낮아진 기존 변수를 다시 제거하는 기법은?",
    answer: "단계적 방법 (Stepwise)"
  },
  {
    id: 77,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] 개체 간 거리를 저차원에 사상할 때 불일치 정도를 측정하며 0에 가까울수록 좋은 지표는?",
    answer: "스트레스 지수 (Stress)"
  },
  {
    id: 78,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] 분류 모델 평가 지표 중 실제 Positive 중 모델이 맞춘 비율(민감도, 재현율)은?",
    answer: "Recall (재현율 = TP / (TP + FN))"
  },
  {
    id: 79,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] 모델이 Positive로 예측한 것 중 실제 Positive인 비율은?",
    answer: "Precision (정밀도 = TP / (TP + FP))"
  },
  {
    id: 80,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] 정밀도(Precision)와 재현율(Recall)의 조화평균으로 클래스 불균형에 강한 지표는?",
    answer: "F1-Score"
  },
  {
    id: 81,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] ROC 곡선의 가로축(X축)과 세로축(Y축)을 구성하는 지표는?",
    answer: "X축: 1-특이도 (FPR), Y축: 민감도 (TPR)"
  },
  {
    id: 82,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] ROC 곡선 아래의 면적을 나타내며 1에 가까울수록 완벽한 성능을 뜻하는 지표는?",
    answer: "AUC (Area Under the Curve)"
  },
  {
    id: 83,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 2개의 독립 표본에 대해 정규분포를 가정할 수 없을 때 사용하는 비모수 순위 검정은?",
    answer: "만-휘트니 U 검정 (Mann-Whitney U)"
  },
  {
    id: 84,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 2개의 대응(Paired) 표본에 대해 정규분포를 가정할 수 없을 때 사용하는 비모수 검정은?",
    answer: "윌콕슨 부호순위 검정 (Wilcoxon Signed-Rank)"
  },
  {
    id: 85,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 계층적 군집분석에서 두 군집을 병합할 때 군집 내 오차제곱합의 증가량을 최소화하는 연결법은?",
    answer: "와드 연결법 (Ward's Method)"
  },
  {
    id: 86,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 왜도(Skewness) > 0인 오른쪽 꼬리가 긴 분포에서 평균, 중앙값, 최빈값의 크기 순서는?",
    answer: "평균 > 중앙값 > 최빈값"
  },
  {
    id: 87,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 첨도(Kurtosis) > 0일 때 정규분포 대비 형태적 특징은?",
    answer: "정점이 더 뾰족하고 양쪽 꼬리가 두꺼움"
  },
  {
    id: 88,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[35회 기출] 인공신경망 은닉층이 깊어질 때 시그모이드 기울기가 0으로 사라지는 현상은?",
    answer: "기울기 소실 문제 (Vanishing Gradient)"
  },
  {
    id: 89,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[35회 기출] max(0, x) 형태로 계산이 빠르며 기울기 소실을 극복한 표준 활성화 함수는?",
    answer: "ReLU 함수"
  },
  {
    id: 90,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[35회 기출] 다중 클래스 분류 신경망의 출력층에서 전체 확률의 합이 1이 되도록 변환하는 함수는?",
    answer: "소프트맥스 함수 (Softmax)"
  },
  {
    id: 91,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[35회 기출] 선형 회귀분석 summary 결과에서 모형 전체의 통계적 유의성을 검정하는 통계량은?",
    answer: "F-통계량 (F-statistic의 p-value)"
  },
  {
    id: 92,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 모형의 설명력을 나타내며 총제곱합(SST) 대비 회귀제곱합(SSR)의 비율을 뜻하는 척도는?",
    answer: "결정계수 (R²)"
  },
  {
    id: 93,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 독립변수가 증가할 때 무조건 커지는 결점을 보완해 페널티를 부과한 결정계수는?",
    answer: "수정된 결정계수 (Adjusted R²)"
  },
  {
    id: 94,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 회귀 계수의 절댓값 합에 페널티를 주어 변수를 자동으로 0으로 만들어 희소화하는 규제는?",
    answer: "L1 규제 (Lasso 라쏘)"
  },
  {
    id: 95,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 회귀 계수의 제곱합에 페널티를 주어 계수를 0에 가깝게 축소하는 규제는?",
    answer: "L2 규제 (Ridge 릿지)"
  },
  {
    id: 96,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[33회 기출] 의사결정나무의 과적합을 방지하기 위해 불필요한 하위 가지를 잘라내는 작업은?",
    answer: "가지치기 (Pruning)"
  },
  {
    id: 97,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[33회 기출] ID3 의사결정나무에서 노드 분할 기준으로 사용하는 불순도 척도는?",
    answer: "엔트로피 (Entropy)"
  },
  {
    id: 98,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[32회 기출] C4.5 알고리즘에서 ID3의 다치 속성 과대분할 결점을 보완하기 위해 도입한 척도는?",
    answer: "정보 획득 비율 (Gain Ratio)"
  },
  {
    id: 99,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[32회 기출] 결측치 대치법 중 결측 관측치를 평균값으로 채우지만 분산을 과소추정하는 기법은?",
    answer: "평균 대치법 (Mean Imputation)"
  },
  {
    id: 100,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[31회 기출] 연관규칙에서 전체 거래 중 품목 A와 B가 동시에 포함된 거래의 비율을 뜻하는 지표는?",
    answer: "지지도 (Support)"
  }
];
