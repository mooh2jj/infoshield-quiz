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
  // === [제3과목] 데이터 분석 (19문항)
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
  }
];
