export type AdspChapterId = "all" | "ch1" | "ch2" | "ch3";

export interface AdspChapter {
  id: AdspChapterId;
  name: string;
  shortName: string;
}

export const ADSP_CHAPTERS: { id: "ch1" | "ch2" | "ch3"; name: string; shortName: string }[] = [
  { id: "ch1", name: "제1과목 데이터 이해", shortName: "데이터 이해 (기출 24선)" },
  { id: "ch2", name: "제2과목 데이터 분석 기획", shortName: "분석 기획 (기출 24선)" },
  { id: "ch3", name: "제3과목 데이터 분석", shortName: "데이터 분석 (기출 72선)" },
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
  // === [제1과목] 데이터 이해 (기출 ROI 핵심 24문항, Q1 ~ Q24)
  // =================================================================
  {
    id: 1,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[48회 기출] SECI 모델에서 개별 형식지들을 조합·편집·분류하여 새로운 형식지를 창출하거나 체계화하는 지식 변환 과정은?",
    answer: "연결화 (Combination)"
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
    question: "[47회 기출] 행과 열의 고정된 테이블 스키마 구조를 가지며 관계형 데이터베이스(RDBMS)에 저장되는 데이터 유형은?",
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
    question: "[47회 기출] 빅데이터 예측 알고리즘의 성향 분석만으로 개인의 미래 행동을 예단하여 불이익을 주는 위기 요인은?",
    answer: "책임 원칙의 훼손 (Responsibility)"
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
    question: "[48회 기출] 통찰력 있는 분석, 스토리텔링 시각화, 비즈니스 리더십 및 협업 소통 능력 등 데이터 사이언티스트에게 요구되는 인문학적 소양은?",
    answer: "소프트 스킬 (Soft Skill)"
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
    question: "[48회 기출] 자동화된 알고리즘과 의사결정 시스템으로 인해 발생할 수 있는 부작용, 차별 및 피해 보상을 전담하는 직무는?",
    answer: "알고리즈미스트 (Algorithmist)"
  },
  {
    id: 19,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[48회 기출] 다수의 사용자가 서로 다른 목적으로 동일한 데이터베이스의 자원을 동시에 공유하여 일관성 있게 활용할 수 있는 DB의 핵심 특성은?",
    answer: "공용 데이터 (Shared Data)"
  },
  {
    id: 20,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[빈출 기출] 개인이 자신의 개인정보에 대한 열람, 전송, 활용 권리를 직접 행사하는 새로운 데이터 패러다임은?",
    answer: "마이데이터 (MyData)"
  },
  {
    id: 21,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[47회 기출] 개인정보 비식별 조치 중 특정 개인을 알아볼 수 없도록 관련 정보를 영구 삭제하거나 복원 불가능하게 비가역적으로 처리하는 기법은?",
    answer: "익명화 (Anonymization)"
  },
  {
    id: 22,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[47회 기출] 은행의 입출금이나 결제처럼 일상 업무에서 발생하는 대량의 트랜잭션을 실시간으로 무결성 있게 처리하는 시스템 방식은?",
    answer: "OLTP (Online Transaction Processing)"
  },
  {
    id: 23,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[47회 기출] 노나카의 지식 창출 SECI 모델에서 개인이 현장 경험과 관찰을 통해 머릿속 노하우(암묵지)를 동료에게 직접 전수하여 공유(암묵지)하는 첫 단계는?",
    answer: "공통화 (Socialization)"
  },
  {
    id: 24,
    chapterId: "ch1",
    chapterName: "제1과목 데이터 이해",
    question: "[47회 기출] 데이터베이스(DB)가 지닌 본질적 특성 중 기계가독성, 검색가능성과 함께 네트워크를 통해 원격지에서 다룰 수 있는 특성은?",
    answer: "원격조작성 (Remote Operability)"
  },

  // =================================================================
  // === [제2과목] 데이터 분석 기획 (기출 ROI 핵심 24문항, Q25 ~ Q48)
  // =================================================================
  {
    id: 25,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[48회 기출] 분석 과제 발굴 4사분면 중 분석 방법(How)은 이미 알고 있으나 분석 대상(What)을 모를 때 도출하는 분석 유형은?",
    answer: "통찰 (Insight)"
  },
  {
    id: 26,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 요구사항이 모호할 때 가벼운 시제품을 빠르게 개발해 사용자 피드백을 수용하며 구체화하는 상향식 모델은?",
    answer: "프로토타이핑 모델 (Prototyping)"
  },
  {
    id: 27,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[44회 기출] 분석 마스터플랜의 투자비용 요소(ROI) 4V 중 비즈니스 효과성(Benefit)을 나타내는 요소는?",
    answer: "가치 (Value)"
  },
  {
    id: 28,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[43회 기출] CMMI 기반 분석 성숙도(Maturity) 5단계의 올바른 발전 순서는?",
    answer: "도입 ➔ 관리 ➔ 정의 ➔ 측정 ➔ 최적화"
  },
  {
    id: 29,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 분석 과제 발굴 4사분면에서 분석 대상(What)은 알고 있으나 구체적인 해결 방법(How)을 모를 때 도출되는 과제는?",
    answer: "솔루션 (Solution)"
  },
  {
    id: 30,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[48회 기출] CRISP-DM 방법론에서 데이터 탐색(EDA) 및 데이터 품질 식별 업무를 수행하는 단계(데이터 준비 단계 이전)는?",
    answer: "데이터 이해 (Data Understanding)"
  },
  {
    id: 31,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[42회 기출] 데이터 거버넌스 체계 중 원천 스키마 변경 시 사전 영향도 분석과 통제 승인을 거치는 프로세스는?",
    answer: "데이터 변경 관리"
  },
  {
    id: 32,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[42회 기출] KDD 분석 방법론 5단계 중 데이터셋의 차원을 축소하거나 정규화하여 마이닝에 적합하게 가공하는 3번째 단계는?",
    answer: "데이터 변환 (Transformation)"
  },
  {
    id: 33,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 전사 분석 전담 조직이 분석 업무를 일괄 주관하여 시너지는 높으나 현업 부서와의 우선순위 갈등이 발생할 수 있는 구조는?",
    answer: "집중형 조직 구조 (Centralized)"
  },
  {
    id: 34,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[48회 기출] 데이터 분석 프로젝트 관리에서 절차와 수행 체계가 사전에 정의된 표준에 부합하는지 점검하는 활동은?",
    answer: "품질 보증 (Quality Assurance, QA)"
  },
  {
    id: 35,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[40회 기출] 데이터 분석 수준 진단 6대 영역(분석 인력, 인프라, 거버넌스, 분석 기법, 데이터 외 1가지)은?",
    answer: "분석 문화 (Culture)"
  },
  {
    id: 36,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[40회 기출] 분석 과제 발굴 4분면에서 분석 대상(What)도 모르고 해결 방법(How)도 모를 때 시도하는 과제 유형은?",
    answer: "발견 (Discovery)"
  },
  {
    id: 37,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[39회 기출] 하향식 접근법(Top-Down)의 4단계 순서는?",
    answer: "문제 식별 ➔ 문제 정의 ➔ 원인 탐색 ➔ 대안 도출"
  },
  {
    id: 38,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[48회 기출] 분석 준비도(Readiness) 6대 진단 영역(업무, 인력/조직, 기법, IT인프라, 데이터 외 1개) 중 데이터 기반 의사결정 태도를 뜻하는 영역은?",
    answer: "분석 문화 (Analytics Culture)"
  },
  {
    id: 39,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[38회 기출] 데이터 거버넌스(Data Governance) 체계의 4대 핵심 구성 요소는?",
    answer: "원칙(Principles), 조직, 프로세스, 관리체계"
  },
  {
    id: 40,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[38회 기출] 분석 마스터플랜 수립 시 우선순위 평가의 2대 핵심 축은?",
    answer: "전략적 중요도 (시급성), 실행 용이성 (난이도)"
  },
  {
    id: 41,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[37회 기출] 전담 분석 부서의 분석가를 현업 부서에 직접 전진 배치하여 신속한 협업과 피드백을 유도하는 구조는?",
    answer: "분산형 조직 구조 (Decentralized)"
  },
  {
    id: 42,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[37회 기출] 데이터 마이닝 표준 방법론인 CRISP-DM의 6단계 순서는?",
    answer: "비즈니스 이해 ➔ 데이터 이해 ➔ 데이터 준비 ➔ 모델링 ➔ 평가 ➔ 전개"
  },
  {
    id: 43,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[36회 기출] 문제를 미리 정의하지 않고 보유한 데이터의 탐색과 결합을 통해 인사이트를 발굴하는 접근법은?",
    answer: "상향식 접근법 (Bottom-Up)"
  },
  {
    id: 44,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[빈출 기출] 분석 과제 관리 5대 주요 속성(Data, Speed, Value, Complexity 외 1가지)은?",
    answer: "Accuracy (정확도)"
  },
  {
    id: 45,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 동일한 현상을 설명할 수 있는 모델이 여러 개 존재할 때, 복잡한 모델보다 가장 단순하고 직관적인 모델을 우선 채택해야 한다는 원리는?",
    answer: "오컴의 면도날 법칙 (Occam's Razor)"
  },
  {
    id: 46,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 하향식 과제 발굴의 거시적 문제 탐색 시 활용되는 도구로, 사회(S)·기술(T)·경제(E)·환경(E)·정치(P)의 5대 영역을 통합 분석하는 프레임워크는?",
    answer: "STEEP 분석"
  },
  {
    id: 47,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 기업 데이터 분석 수준 진단 사분면에서 분석 인프라와 기법 등 '준비도(Readiness)'는 높으나, 조직적 확산과 활용 성숙도(Maturity)는 낮은 기업 유형은?",
    answer: "정착형 (Settle)"
  },
  {
    id: 48,
    chapterId: "ch2",
    chapterName: "제2과목 데이터 분석 기획",
    question: "[47회 기출] 분석 마스터플랜 수립 시 개별 분석 과제의 우선순위를 결정하는 3대 핵심 평가 기준(전략적 중요도, 실행 용이성 외 1가지)은?",
    answer: "비즈니스 효과 (ROI: 투자자본수익률)"
  },

  // =================================================================
  // === [제3과목] 데이터 분석 (기출 ROI 핵심 72문항, Q49 ~ Q120)
  // =================================================================
  {
    id: 49,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 불균형 데이터셋 분류에서 정밀도(Precision)와 재현율(Recall) 간의 상충 관계를 보완하는 조화평균 지표는?",
    answer: "F1-Score"
  },
  {
    id: 50,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 시계열 데이터가 추세를 보여 평균이 일정하지 않을 때 정상 시계열로 변환하기 위해 현시점 값에서 이전 시점 값을 빼주는 기법은?",
    answer: "차분 (Differencing)"
  },
  {
    id: 51,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 계층적 군집분석에서 군집 병합 시 발생하는 군집 내 오차제곱합(SSE)의 증가량을 최소화하는 결합 방법은?",
    answer: "와드연결법 (Ward's Method)"
  },
  {
    id: 52,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 선형 회귀분석 잔차의 자기상관(독립성)을 검정하며 2에 가까울수록 독립인 검정 통계량은?",
    answer: "더빈-왓슨 검정 (Durbin-Watson)"
  },
  {
    id: 53,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] K-Means 군집분석에서 군집 내 오차제곱합(WSS) 감소율이 완만해지는 변곡점의 k를 선택하는 기법은?",
    answer: "엘보우 기법 (Elbow Method)"
  },
  {
    id: 54,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 심층 신경망 학습 시 뉴런의 일부를 임의의 확률로 비활성화하여 과적합을 억제하는 기법은?",
    answer: "드롭아웃 (Dropout)"
  },
  {
    id: 55,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[44회 기출] PCA에서 주성분 분산 비율을 순차 합산하여 누적 설명력 85% 이상 지점을 찾는 척도는?",
    answer: "누적 기여율 (Cumulative Proportion)"
  },
  {
    id: 56,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[44회 기출] 로지스틱 회귀분석에서 성공 확률 p에 대한 오즈(Odds)의 계산 공식은?",
    answer: "p / (1 - p)"
  },
  {
    id: 57,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[44회 기출] 랜덤포레스트에서 부트스트랩 미선택 잔여치(약 36.8%)를 활용하여 모델 성능을 평가하는 오차는?",
    answer: "OOB 오차 (Out-of-Bag Error)"
  },
  {
    id: 58,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 모든 예측 변수가 상호 조건부 독립이라는 가정을 전제로 사후확률을 계산하는 분류기는?",
    answer: "나이브 베이즈 분류기 (Naive Bayes)"
  },
  {
    id: 59,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 선형 회귀분석 잔차(Residual)가 만족해야 하는 4대 기본 가정(선형성, 독립성, 등분산성 외 1가지)은?",
    answer: "정규성 (Normality)"
  },
  {
    id: 60,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 서포트 벡터 머신(SVM)에서 두 클래스를 분리하는 초평면과 가장 가까운 위치의 경계 샘플은?",
    answer: "서포트 벡터 (Support Vector)"
  },
  {
    id: 61,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] 계층적 군집분석에서 개체 간의 결합 거리와 순서를 시각화한 수형도 다이어그램은?",
    answer: "덴드로그램 (Dendrogram)"
  },
  {
    id: 62,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[43회 기출] AIC 대비 표본 크기(ln n)를 페널티에 반영하여 변수 증가에 더 엄격한 제약을 주는 정보 기준은?",
    answer: "BIC (Bayesian Information Criterion)"
  },
  {
    id: 63,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] PCA 수행 시 변수 간 단위(Scale)나 분산의 차이가 극심할 때 입력으로 사용해야 하는 행렬은?",
    answer: "상관행렬 (Correlation Matrix)"
  },
  {
    id: 64,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 시계열 오차항이 만족해야 하는 평균 0, 분산 σ², 시차 k ≠ 0 자기상관 0인 정상 시계열은?",
    answer: "백색잡음 (White Noise)"
  },
  {
    id: 65,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 장바구니 분석 Apriori에서 '비빈발 항목의 초집합은 무조건 비빈발하다'는 원리는?",
    answer: "가지치기 (Pruning / 반단조성)"
  },
  {
    id: 66,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] K-Fold 교차검증에서 K = N으로 설정하여 표본 수만큼 모델을 학습시키는 기법은?",
    answer: "LOOCV (Leave-One-Out)"
  },
  {
    id: 67,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 시계열 데이터 4대 분해 요소 중 2~10년 이상 주기의 불규칙한 경제 변동 파동은?",
    answer: "순환 요인 (Cycle / 순환 변동)"
  },
  {
    id: 68,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[42회 기출] 의사결정나무 CART에서 불순도가 낮을수록 0에 수렴하는 불순도 지표는?",
    answer: "지니 지수 (Gini Index)"
  },
  {
    id: 69,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 다중 회귀분석에서 설명변수 간의 상관관계(다중공선성)를 진단하는 지표로 10 이상일 때 심각하다고 판정하는 통계량은?",
    answer: "분산팽창요인 (VIF: Variance Inflation Factor)"
  },
  {
    id: 70,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 로지스틱 회귀에서 독립변수 X가 1단위 증가할 때 성공 오즈가 변화하는 배수는?",
    answer: "오즈비 (Odds Ratio, exp(β₁))"
  },
  {
    id: 71,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 시계열 모형 판별 시 자기상관함수(ACF)가 시차 q 이후 절단되는 모형은?",
    answer: "MA(q) 모형 (이동평균 모형)"
  },
  {
    id: 72,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[41회 기출] 시계열 모형 판별 시 부분자기상관함수(PACF)가 시차 p 이후 절단되는 모형은?",
    answer: "AR(p) 모형 (자기회귀 모형)"
  },
  {
    id: 73,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 상자 그림(Box Plot)에서 이상값 경계 펜스를 설정할 때 사분위범위(IQR)에 곱해주는 기준 배수는?",
    answer: "1.5배 (1.5 × IQR)"
  },
  {
    id: 74,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 배깅(병렬 학습)과 달리 이전 분류기의 오분류 오차에 가중치를 부여하여 순차적으로 약분류기를 학습시키는 앙상블 기법은?",
    answer: "부스팅 (Boosting)"
  },
  {
    id: 75,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 주성분분석(PCA)에서 원본 데이터의 전체 변동(분산)을 가장 많이 설명하는 선형결합 축은?",
    answer: "제1주성분 (PC1)"
  },
  {
    id: 76,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 실제 참인 귀무가설(H₀)을 통계적으로 잘못 기각할 확률이며, 유의수준(α)으로 최대 허용 한계를 통제하는 오류는?",
    answer: "제1종 오류 (Type I Error, α)"
  },
  {
    id: 77,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 거짓인 귀무가설을 채택하지 않고 올바르게 기각할 확률(1 - β)은?",
    answer: "검정력 (Power)"
  },
  {
    id: 78,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[39회 기출] 상자그림(Boxplot)에서 이상치를 판정하는 바깥 울타리 경계 공식은?",
    answer: "Q1 - 1.5×IQR 미만, Q3 + 1.5×IQR 초과"
  },
  {
    id: 79,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 두 변수 X, Y의 피어슨 상관계수가 0.5일 때, 각 변수에 양수를 곱하거나 상수를 더하는 선형변환(aX+b, cY+d, a,c>0) 후의 상관계수는?",
    answer: "0.5 (선형변환 불변)"
  },
  {
    id: 80,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 두 변수 간의 비선형 단조적 관계를 평가하기 위해 원시 데이터 값 대신 순위(Rank)를 활용하는 비모수 상관계수는?",
    answer: "스피어만 상관계수 (Spearman)"
  },
  {
    id: 81,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] R에서 동일한 단일 자료형(숫자형, 문자형 등)으로만 구성된 1차원 데이터 구조는?",
    answer: "벡터 (Vector)"
  },
  {
    id: 82,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] R에서 열마다 서로 다른 자료형을 담을 수 있는 2차원 표 형태의 구조는?",
    answer: "데이터프레임 (Data Frame)"
  },
  {
    id: 83,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[38회 기출] R에서 숫자, 문자, 행렬, 리스트 등 서로 다른 객체를 중첩해서 담을 수 있는 구조는?",
    answer: "리스트 (List)"
  },
  {
    id: 84,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 회귀분석 후 잔차도가 2차 곡선(U자 형태) 패턴을 나타낼 때 선형성 가정을 보완하기 위해 사용하는 모형은?",
    answer: "다항 회귀 모형 (Polynomial)"
  },
  {
    id: 85,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 수치로 표현되어 덧셈·뺄셈은 가능하지만 절대 영점(0)이 없어 비율 계산(나눗셈)이 성립하지 않는 척도는?",
    answer: "등간척도 (구간척도)"
  },
  {
    id: 86,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] 분류 모델 평가 지표 중 실제 Positive 중 모델이 맞춘 비율(민감도, 재현율)은?",
    answer: "Recall (재현율 = TP / (TP + FN))"
  },
  {
    id: 87,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 혼동행렬에서 모델이 Positive(참)로 예측한 전체 건수 중 실제 정답이 Positive인 비율을 나타내는 지표는?",
    answer: "정밀도 (Precision = TP / (TP + FP))"
  },
  {
    id: 88,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] 정밀도(Precision)와 재현율(Recall)의 조화평균으로 클래스 불균형에 강한 지표는?",
    answer: "F1-Score"
  },
  {
    id: 89,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] ROC 곡선의 가로축(X축)과 세로축(Y축)을 구성하는 지표는?",
    answer: "X축: 1-특이도 (FPR), Y축: 민감도 (TPR)"
  },
  {
    id: 90,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[37회 기출] ROC 곡선 아래의 면적을 나타내며 1에 가까울수록 완벽한 성능을 뜻하는 지표는?",
    answer: "AUC (Area Under the Curve)"
  },
  {
    id: 91,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 2개의 독립 표본에 대해 정규분포를 가정할 수 없을 때 사용하는 비모수 순위 검정은?",
    answer: "만-휘트니 U 검정 (Mann-Whitney U)"
  },
  {
    id: 92,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[36회 기출] 2개의 대응(Paired) 표본에 대해 정규분포를 가정할 수 없을 때 사용하는 비모수 검정은?",
    answer: "윌콕슨 부호순위 검정 (Wilcoxon Signed-Rank)"
  },
  {
    id: 93,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 계층적 군집분석에서 군집 병합 시 발생하는 오차제곱합(SSE)의 증가량(ΔSSE)을 최소화하는 방식으로 군집을 형성하는 연결법은?",
    answer: "와드 연결법 (Ward's Linkage)"
  },
  {
    id: 94,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 상자 그림(Box Plot)을 통해 사분위수, 최댓값, 최솟값, 이상치는 알 수 있으나 그래프 자체만으로는 직접 확인할 수 없는 정보는?",
    answer: "표본 관측치 수 (샘플 크기 N)"
  },
  {
    id: 95,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 다변량 데이터 분석에서 변수 간 측정 단위 차이를 보정하고 변수 간의 통계적 상관관계(공분산)를 반영하여 계산하는 거리는?",
    answer: "마할라노비스 거리 (Mahalanobis)"
  },
  {
    id: 96,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 일반화선형모형(GLM) 관점에서 로지스틱 회귀의 독립변수 선형 결합과 사건 발생 확률 p를 연결하는 함수는?",
    answer: "로짓 함수 (Logit Function)"
  },
  {
    id: 97,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[35회 기출] max(0, x) 형태로 계산이 빠르며 기울기 소실을 극복한 표준 활성화 함수는?",
    answer: "ReLU 함수"
  },
  {
    id: 98,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 다중 클래스 분류(Multi-class) 신경망의 최종 출력층에서 각 클래스 예측 확률의 총합이 1.0이 되도록 정규화하는 활성화 함수는?",
    answer: "소프트맥스 함수 (Softmax)"
  },
  {
    id: 99,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 선형 회귀 모형 전체의 설명력이 통계적으로 유의미한지 검정하기 위해 사용하는 통계량은?",
    answer: "F-통계량 (F-검정)"
  },
  {
    id: 100,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 단순 선형 회귀분석 결과표에서 잔차 자유도(Residual DF)가 576일 때 전체 관측치 표본 수(n)는 몇 개인가?",
    answer: "578개 (576 + 2)"
  },
  {
    id: 101,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 독립변수가 증가할 때 무조건 커지는 결점을 보완해 페널티를 부과한 결정계수는?",
    answer: "수정된 결정계수 (Adjusted R²)"
  },
  {
    id: 102,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 회귀 계수의 절댓값 합에 페널티를 주어 변수를 자동으로 0으로 만들어 희소화하는 규제는?",
    answer: "L1 규제 (Lasso 라쏘)"
  },
  {
    id: 103,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[34회 기출] 회귀 계수의 제곱합에 페널티를 주어 계수를 0에 가깝게 축소하는 규제는?",
    answer: "L2 규제 (Ridge 릿지)"
  },
  {
    id: 104,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 의사결정나무에서 과적합(Overfitting)을 방지하고 일반화 성능을 높이기 위해 복잡하고 불안정한 말단 분기를 잘라내는 작업은?",
    answer: "가지치기 (Pruning)"
  },
  {
    id: 105,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[33회 기출] ID3 의사결정나무에서 노드 분할 기준으로 사용하는 불순도 척도는?",
    answer: "엔트로피 (Entropy)"
  },
  {
    id: 106,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[32회 기출] C4.5 알고리즘에서 ID3의 다치 속성 과대분할 결점을 보완하기 위해 도입한 척도는?",
    answer: "정보 획득 비율 (Gain Ratio)"
  },
  {
    id: 107,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[32회 기출] 결측치 대치법 중 결측 관측치를 평균값으로 채우지만 분산을 과소추정하는 기법은?",
    answer: "평균 대치법 (Mean Imputation)"
  },
  {
    id: 108,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[48회 기출] 연관규칙 분석에서 두 품목이 상호 독립일 때의 기준값이며, 1보다 클 때 두 품목 간 양의 연관성(보완 관계)이 있음을 나타내는 지표는?",
    answer: "향상도 (Lift)"
  },
  {
    id: 109,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 측정 척도(명목, 서열, 등간, 비율) 중 '절대 영점(True Zero)'이 존재하여 사칙연산(덧셈, 뺄셈, 곱셈, 나눗셈)과 비율 계산이 모두 성립하는 최상위 척도는?",
    answer: "비율척도 (Ratio Scale)"
  },
  {
    id: 110,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 상자수염그림(Box Plot)에서 Q1=4, Q3=12일 때, 이상치를 판정하기 위한 안쪽 울타리(Inner Fence)의 하한과 상한은?",
    answer: "하한 -8, 상한 24 (IQR=8, 1.5×IQR=12)"
  },
  {
    id: 111,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 데이터의 분포가 오른쪽으로 긴 꼬리를 갖는 비대칭 분포(양의 왜도)일 때, 최빈값(Mode), 중앙값(Median), 평균(Mean) 간의 올바른 대소 관계는?",
    answer: "최빈값 < 중앙값 < 평균"
  },
  {
    id: 112,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 표본추출 기법 중 군집(집락) 내부는 상호 이질적이고, 군집 간에는 상호 동질적이 되도록 집단을 구분한 후 군집 단위로 무작위 추출하는 방법은?",
    answer: "군집추출법 (집락추출법, Cluster Sampling)"
  },
  {
    id: 113,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 통계적 가설검정에서 '귀무가설(H₀)이 참'이라는 전제하에 현재 표본 통계량보다 더 극단적인 관측값이 나타날 확률은?",
    answer: "유의확률 (p-value)"
  },
  {
    id: 114,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 주성분분석(PCA)에서 주성분 번호에 따른 고유값(Eigenvalue)의 크기 감소세를 나타내며 경사가 완만해지는 엘보우(Elbow) 지점을 찾는 그래프는?",
    answer: "스크리 산점도 (Scree Plot)"
  },
  {
    id: 115,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 관측치가 12개인 단순 선형 회귀분석에서 잔차제곱합(SSE)이 25일 때, 잔차평균제곱(MSE)은 얼마인가? (잔차 자유도 n-2 = 10)",
    answer: "2.50 (25 / 10)"
  },
  {
    id: 116,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 시계열 데이터가 정상성(Stationarity)을 만족하기 위해 일정해야 하는 3대 조건(평균, 분산 외 1가지)은?",
    answer: "시점과 무관하고 시차(Lag)에만 의존하는 공분산"
  },
  {
    id: 117,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 비정상 시계열을 d회 차분(Difference)하여 정상화한 후 자기회귀(AR) 및 이동평균(MA)을 결합하여 분석하는 시계열 모형은?",
    answer: "ARIMA(p, d, q) 모형"
  },
  {
    id: 118,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 교차 분할표(Cross-tabulation) 상에서 두 범주형 변수의 관찰도수와 기대도수 간 편차를 바탕으로 상호 독립 여부를 검정하는 기법은?",
    answer: "카이제곱 독립성 검정 (Chi-Square Test)"
  },
  {
    id: 119,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 로지스틱 회귀나 인공신경망 이진 분류 출력층에서 실수 입력값을 0과 1 사이의 S자 곡선 형태 확률로 변환하는 활성화 함수는?",
    answer: "시그모이드 함수 (Sigmoid Function)"
  },
  {
    id: 120,
    chapterId: "ch3",
    chapterName: "제3과목 데이터 분석",
    question: "[47회 기출] 전체 100건의 영수증 거래 중 A품목과 B품목을 동시에 함께 구매한 거래가 30건일 때, 연관규칙 A ➔ B의 지지도(Support)는?",
    answer: "0.30 (30% = 30 / 100)"
  }
];
