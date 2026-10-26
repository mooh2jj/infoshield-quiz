export type AdspExamRound = "50" | "48" | "47" | "44" | "43" | "42";

export interface AdspExamSection {
  id: string;
  name: string;
  rangeLabel: string;
  startIndex: number;
  count: number;
  maxScore: number;
  cutoffScore: number; // 40% 미만 과락 (1과목 8점, 2과목 8점, 3과목 24점)
}

// =================================================================
// 제50회 ADsP 실전 기출 복원 (2026년 최신 기출 50문항 전수 1:1 매핑)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_50_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번)
  "adsp-50-001", // 1번: DIKW 피라미드 기본 4단계 계층 구조 (Data-Info-Knowledge-Wisdom)
  "adsp-50-002", // 2번: 디지털 정보 시스템의 물리적·논리적 최소 단위 (Bit vs Byte)
  "adsp-50-003", // 3번: 데이터베이스(DB) 핵심 특성 (통합·공용·운영 데이터 및 중복 최소화)
  "adsp-50-004", // 4번: 개인에게 체화된 경험적 노하우와 직관 (암묵지 vs 형식지)
  "adsp-50-005", // 5번: 전사 DW 기반 특정 부서·주제별 맞춤형 소규모 저장소 (데이터 마트)
  "adsp-50-006", // 6번: 고객 통합 관리 및 맞춤형 서비스 지원 시스템 (CRM)
  "adsp-50-007", // 7번: 하둡(Hadoop) 생태계 맵리듀스(MapReduce) 분산 병렬 처리 모델
  "adsp-50-008", // 8번: 빅데이터 분석 패러다임 변화 (상관관계 및 패턴 예측 활용 확대)
  "adsp-50-009", // 9번: 개체 간 상호작용 및 연결망 구조 파악 (소셜 네트워크 분석 SNA)
  "adsp-50-010", // 10번: 데이터 사이언티스트 역량 구분 (DB 튜닝 및 최적화 = 하드 스킬)

  // 2과목: 데이터 분석 기획 (11 ~ 20번)
  "adsp-50-011", // 11번: 데이터 분석 기획 단계 분석 과제 정의서 핵심 구성요소
  "adsp-50-012", // 12번: 파일럿 분석 모델 도입 후 발전 흐름 (유효성 검증 → 전사 확산 및 고도화)
  "adsp-50-013", // 13번: KDD 분석 방법론 5단계 수행 절차 (선택-전처리-변환-마이닝-해석/평가)
  "adsp-50-014", // 14번: CRISP-DM 6단계 중 모델링(Modeling) 세부 태스크와 평가(Evaluation) 구분
  "adsp-50-015", // 15번: 데이터 자체 탐색을 통한 새로운 패턴 발견 및 과제 도출 (상향식 접근법)
  "adsp-50-016", // 16번: 메타데이터 및 태그/키-값 구조를 포함하는 반정형 데이터 (JSON, XML, 로그)
  "adsp-50-017", // 17번: 데이터 분석 프로젝트의 순환적(Iterative) 피드백과 가설 보완
  "adsp-50-018", // 18번: 전사 데이터 분석 문화 내재화를 위한 분석 거버넌스(Governance) 관리 구성요소
  "adsp-50-019", // 19번: 분석 마스터플랜 수립을 위한 분석 수준 진단(준비도 및 성숙도 평가) 목적
  "adsp-50-020", // 20번: 분석 수준 진단 사분면 (준비도 낮음 + 성숙도 낮음 = 준비형)

  // 3과목: 데이터 분석 (21 ~ 50번)
  "adsp-50-021", // 21번: 정규분포 가정 평균에서 3표준편차 이탈치 판별 통계 기법 (ESD 기법)
  "adsp-50-022", // 22번: 상호 독립인 세 번의 반복 시행에서 사건 발생 결합확률 (p³)
  "adsp-50-023", // 23번: 공정한 동전 5회 독립 던지기 앞면 0회(뒷면 5회) 발생 이항확률 (1/32)
  "adsp-50-024", // 24번: 표본 관측치들의 함수로 계산되는 특성값 (통계량 Statistic vs 모수)
  "adsp-50-025", // 25번: 선형 회귀분석 4대 기본 가정(선형성·독립성·등분산성·정규성)과 모수 선형 결합
  "adsp-50-026", // 26번: 분산분석(ANOVA) 총제곱합 분해 (SST = SSR + SSE)
  "adsp-50-027", // 27번: 두 확률변수의 선형 방향성을 나타내는 공분산(Covariance)의 단위 의존성
  "adsp-50-028", // 28번: 주성분분석(PCA) 최적 주성분 개수 결정 기준 (고유값, 누적설명분산, 엘보우)
  "adsp-50-029", // 29번: 피어슨 상관계수 절댓값에 따른 선형적 상관관계 강도 비교 (|-0.8| > |0.6|)
  "adsp-50-030", // 30번: 2개 범주 이항 분류 문제 사건 발생 확률 추정 모형 (로지스틱 회귀분석)
  "adsp-50-031", // 31번: 독립변수 개수가 다른 다중 선형 회귀모형 설명력 비교 지표 (수정된 결정계수)
  "adsp-50-032", // 32번: 크기 d 데이터셋 d회 복원추출 시 특정 관측치 미선택 확률 ((1-1/d)^d)
  "adsp-50-033", // 33번: 앙상블(Ensemble) 학습 성능 극대화 조건 (개별 모형 정확성 및 다양성)
  "adsp-50-034", // 34번: 지도 학습 기반 분류(Classification) 알고리즘 (로지스틱 회귀, SVM, KNN)
  "adsp-50-035", // 35번: 이진 분류 모형의 정확도(Accuracy)와 오분류율(Error Rate)의 보수 관계
  "adsp-50-036", // 36번: 인공신경망 활성화 함수 하이퍼볼릭 탄젠트(tanh) 출력값 범위 ([-1, 1])
  "adsp-50-037", // 37번: 로지스틱 회귀분석 회귀계수(β1)의 로그 오즈(로짓) 단위 증가 효과
  "adsp-50-038", // 38번: 밀도 기반 군집 알고리즘 DBSCAN의 특징 (K 사전 지정 불필요, 잡음 분리)
  "adsp-50-039", // 39번: 연관규칙 마이닝 두 품목 간 향상도(Lift) 수식 산출 계산
  "adsp-50-040", // 40번: 장바구니 분석 조건부 구매 확률 지표 신뢰도(Confidence, P(B|A)) 정의
  "adsp-50-041", // 41번: 소수 클래스 탐지를 저해하는 클래스 불균형(Class Imbalance) 현상
  "adsp-50-042", // 42번: 의사결정나무 모델의 과대적합(Overfitting) 방지를 위한 정지규칙(Stopping Rule)
  "adsp-50-043", // 43번: Z-표준화 변수 기반 표준화 회귀계수(베타 계수)의 상대적 영향력 해석
  "adsp-50-044", // 44번: 머신러닝 모형 학습·검증·평가를 위한 데이터 분할(Train/Validation/Test) 원칙
  "adsp-50-045", // 45번: 의사결정나무 분할 기준 지니지수(Gini Index) 감소와 노드 순수도 향상
  "adsp-50-046", // 46번: 시계열 데이터의 단기 잡음 완화 및 추세 파악을 위한 평활화(Smoothing) 기법
  "adsp-50-047", // 47번: 시계열 2차 자기회귀 AR(2) 모형 ACF 점진 감소 vs PACF 시차 2 절단 패턴
  "adsp-50-048", // 48번: 시계열 이동평균모형 MA(q)의 현시점 및 과거 q개 백색잡음 오차 선형 결합
  "adsp-50-049", // 49번: 자기회귀 이동평균 모형 ARMA(2, 0)과 AR(2) 모형의 수학적 동등성
  "adsp-50-050", // 50번: 시계열 AR(2) 수식에서 과거 관측치의 자기회귀계수 표기 기호 (φ1, φ2)
];

// =================================================================
// 제48회 ADsP 실전 기출 복원 (2026년 최신 기출 50문항 전수 1:1 매핑)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_48_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번)
  "adsp-48-001", // 1번: SECI 모델 지식 변환 과정 (연결화)
  "adsp-48-002", // 2번: 정량적 데이터와 정성적 데이터의 특성
  "adsp-48-003", // 3번: 데이터베이스(DB)와 DBMS의 정의 및 개념
  "adsp-48-004", // 4번: 데이터베이스의 핵심 목적과 공용·동적 특성
  "adsp-48-005", // 5번: 공부 시간과 시험 성적 간의 인과관계 회귀분석
  "adsp-48-006", // 6번: 빅데이터 시대의 3대 위기 요인 (사생활, 책임, 오용)
  "adsp-48-007", // 7번: 빅데이터 가치 창출 3요소 (데이터, 인력, 기술)
  "adsp-48-008", // 8번: 데이터 사이언티스트 직무와 알고리즈미스트 역할
  "adsp-48-009", // 9번: 데이터 사이언티스트의 하드 스킬과 소프트 스킬
  "adsp-48-010", // 10번: 빅데이터 가치 패러다임 변화 (디지털화-연결-에이전시)

  // 2과목: 데이터 분석 기획 (11 ~ 20번)
  "adsp-48-011", // 11번: 분석 과제 발굴 4사분면 (What 모름, How 앎 = Insight)
  "adsp-48-012", // 12번: CRISP-DM 방법론의 데이터 준비(Data Preparation) 단계
  "adsp-48-013", // 13번: 상향식(Bottom-Up) 접근법과 비지도 학습
  "adsp-48-014", // 14번: 데이터 분석 프로젝트의 품질 관리 (품질 검토와 보증)
  "adsp-48-015", // 15번: 분석 과제 우선순위 결정 기준 (시급성 vs 난이도)
  "adsp-48-016", // 16번: 데이터 분석 성숙도 모델과 CMMI 프레임워크
  "adsp-48-017", // 17번: 분석 마스터플랜 우선순위 평가 기준 (중요도/ROI/용이성)
  "adsp-48-018", // 18번: 데이터 분석 수준 진단 (분석 준비도 6대 영역)
  "adsp-48-019", // 19번: 분석 조직 구조 3대 유형 (집중형, 기능형, 분산형)
  "adsp-48-020", // 20번: 전사 데이터 거버넌스(Governance) 핵심 관리 체계

  // 3과목: 데이터 분석 (21 ~ 50번)
  "adsp-48-021", // 21번: 상자 그림(Box Plot) 해석 및 관측치 수 한계
  "adsp-48-022", // 22번: 데이터 전처리 이상값(Outlier) 식별 기준과 IQR 1.5
  "adsp-48-023", // 23번: 통계적 추론 원리와 다양한 검정통계량 적용
  "adsp-48-024", // 24번: 선형 회귀 모형 적합도 검증과 F검정/결정계수
  "adsp-48-025", // 25번: 척도의 4가지 유형과 절대 영점이 없는 등간척도
  "adsp-48-026", // 26번: 통계적 가설검정 원리와 유의확률(p-값)의 기각 기준
  "adsp-48-027", // 27번: 분할표를 활용한 교차분석과 범주형 변수 독립성 검정
  "adsp-48-028", // 28번: 피어슨 상관계수의 선형변환 불변성 성질
  "adsp-48-029", // 29번: 회귀 잔차도의 U자형 곡선 패턴과 다항 회귀 모형
  "adsp-48-030", // 30번: 표본 통계적 추론의 점추정과 구간추정(표준오차)
  "adsp-48-031", // 31번: 독립표본 t-검정 결과 해석 (p-값 0.073과 귀무가설 채택)
  "adsp-48-032", // 32번: 주성분분석(PCA)의 주성분별 설명 분산 크기 순서
  "adsp-48-033", // 33번: 다중 회귀분석 결과표 해석과 수정된 결정계수
  "adsp-48-034", // 34번: 로지스틱 회귀분석(GLM)의 로짓 연결 함수(Link Function)
  "adsp-48-035", // 35번: 수치형 변수 상관계수 음수와 반비례의 통계적 차이
  "adsp-48-036", // 36번: 시계열 분해법(Decomposition)의 4대 구성 요인
  "adsp-48-037", // 37번: 단순 선형 회귀분석 잔차 자유도와 회귀계수 통계적 유의성
  "adsp-48-038", // 38번: 비정상 시계열의 평균 정상화 변환 기법 (차분)
  "adsp-48-039", // 39번: 머신러닝 데이터 분할과 검증(Val) vs 평가(Test) 역할
  "adsp-48-040", // 40번: 정형 데이터마이닝 5단계 표준 수행 절차
  "adsp-48-041", // 41번: 의사결정나무(Decision Tree) 모형 특성과 회귀나무 오차
  "adsp-48-042", // 42번: 인공신경망 가중합 비선형 변환 활성화 함수(Activation)
  "adsp-48-043", // 43번: 공분산 및 상관관계를 반영한 마할라노비스 거리
  "adsp-48-044", // 44번: 이진분류 정밀도와 재현율의 조화평균 (F1-Score)
  "adsp-48-045", // 45번: 연관규칙 분석 핵심 지표인 지지도(Support) 산출 공식
  "adsp-48-046", // 46번: 독립 사건 확률 계산과 레코드 결측치 제거 확률
  "adsp-48-047", // 47번: 계층적 군집분석 오차제곱합(SSE) 최소화 와드연결법
  "adsp-48-048", // 48번: 비지도 학습 유사도 기반 군집 탐색 (K-Means)
  "adsp-48-049", // 49번: 마트 거래 연관규칙 신뢰도(Confidence) 조건부 확률 계산
  "adsp-48-050", // 50번: 연관규칙 향상도(Lift) 기준값(1)과 품목 간 보완 관계
];

// =================================================================
// 제47회 ADsP 실전 기출 복원 (2025년 실전 기출 50문항 전수 1:1 매핑)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_47_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번)
  "adsp-47-001", // 1번: SECI 모델 지식 변환 나선 순환 과정 (공통화-표출화-연결화-내면화)
  "adsp-47-002", // 2번: DIKW 피라미드 계층 구조와 데이터/정보/지식 사례 구분
  "adsp-47-003", // 3번: 데이터베이스 고유 특성 (기계가독성, 검색가능성, 원격조작성)
  "adsp-47-004", // 4번: 개인정보 보호를 위한 비식별 조치 및 익명화(Anonymization)
  "adsp-47-005", // 5번: 가트너 빅데이터 3대 핵심 특징(3V: Volume, Velocity, Variety)
  "adsp-47-006", // 6번: 연관분석(장바구니 분석)의 비지도 학습 특성과 회귀분석 차이
  "adsp-47-007", // 7번: 정형·반정형·비정형 데이터 분류와 로그/센서 데이터 특성
  "adsp-47-008", // 8번: 빅데이터 3대 위기 요인과 통제 기제 매칭 (책임 원칙 및 설명책임)
  "adsp-47-009", // 9번: 트랜잭션 데이터 실시간 무결성 보장 처리 방식 (OLTP vs OLAP)
  "adsp-47-010", // 10번: 데이터 사이언티스트 핵심 역량 (소프트 스킬과 도메인 지식)

  // 2과목: 데이터 분석 기획 (11 ~ 20번)
  "adsp-47-011", // 11번: 데이터 분석 기획 시 모델링 복잡도와 오컴의 면도날 법칙
  "adsp-47-012", // 12번: 빅데이터 분석 기법별 비즈니스 활용 사례 매칭 (회귀분석 vs 연관분석)
  "adsp-47-013", // 13번: 분석 과제 발굴 하향식(Top-Down)과 상향식(Bottom-Up)의 상호 보완
  "adsp-47-014", // 14번: 분석 과제 발굴 4사분면 (What 앎, How 모름 = Solution)
  "adsp-47-015", // 15번: 하향식 접근법의 문제 탐색 단계 프레임워크 (STEEP, 캔버스)
  "adsp-47-016", // 16번: 분석 마스터플랜 우선순위 3대 평가 기준 (전략적 중요도, ROI, 실행용이성)
  "adsp-47-017", // 17번: 분석 수준 진단 사분면 (준비도 높음 + 성숙도 낮음 = 정착형)
  "adsp-47-018", // 18번: 전사 분석 전담 부서 중심의 집중형(Centralized) 조직 구조
  "adsp-47-019", // 19번: 데이터 거버넌스(Data Governance)와 비즈니스/IT 프로세스 연계
  "adsp-47-020", // 20번: 분석 준비도(Readiness) 6대 핵심 진단 영역과 예산 집행 한계

  // 3과목: 데이터 분석 (21 ~ 50번)
  "adsp-47-021", // 21번: 사칙연산과 절대 영점이 존재하는 최상위 척도 (비율척도)
  "adsp-47-022", // 22번: 탐색적 데이터 분석(EDA)의 목적과 모델 평가 단계와의 구분
  "adsp-47-023", // 23번: 상자 그림(Box Plot) 사분위범위(IQR) 기준 이상치 상한선/하한선 계산
  "adsp-47-024", // 24번: 통계적 가설검정 오류와 유의수준(알파: 제1종 오류 최대 허용치)
  "adsp-47-025", // 25번: 표본조사의 표본오차와 비표본오차(Non-sampling Error) 특성
  "adsp-47-026", // 26번: 오른쪽 꼬리 비대칭 분포(양의 왜도)의 평균·중앙값·최빈값 관계
  "adsp-47-027", // 27번: 표본추출 기법 (군집추출법: 군집 내 이질, 군집 간 동질)
  "adsp-47-028", // 28번: 통계적 가설검정 유의확률(p-값)의 수학적 정의와 기각 기준
  "adsp-47-029", // 29번: 상자 그림(Box Plot) 해석의 한계와 집단 간 평균 차이 검정(t-검정)
  "adsp-47-030", // 30번: 주성분분석(PCA) 스크리 산점도(Scree Plot)의 엘보우(Elbow) 기준
  "adsp-47-031", // 31번: 단순 선형 회귀모형 잔차평균제곱(MSE) 계산과 자유도(n-2)
  "adsp-47-032", // 32번: 다중 회귀분석 다중공선성(Multicollinearity) 해결 방안
  "adsp-47-033", // 33번: 설명변수 간 다중공선성 진단 지표 분산팽창요인(VIF)
  "adsp-47-034", // 34번: 시계열 데이터의 정상성(Stationarity) 3대 조건
  "adsp-47-035", // 35번: R lm() 회귀분석 결과표 개별 회귀계수 유의성 검정 (t-통계량 p-값)
  "adsp-47-036", // 36번: 선형 회귀분석 잔차의 4대 기본 가정 (선형성, 독립성, 등분산성, 정규성)
  "adsp-47-037", // 37번: 순위 기반 비선형 단조 관계 평가 비모수 상관계수 (스피어만)
  "adsp-47-038", // 38번: 비정상 시계열 차분(d)과 자기회귀/이동평균 결합 모형 (ARIMA)
  "adsp-47-039", // 39번: 분할표 상의 관찰도수와 기대도수 편차 검정 (카이제곱 독립성 검정)
  "adsp-47-040", // 40번: 정상 시계열의 자기상관함수(ACF) 시차 증가에 따른 감쇄 특성
  "adsp-47-041", // 41번: 다중 클래스 분류 신경망 출력층 확률 정규화 함수 (소프트맥스 Softmax)
  "adsp-47-042", // 42번: 머신러닝 앙상블 배깅(병렬)과 부스팅(순차 가중치 학습) 비교
  "adsp-47-043", // 43번: 입력값을 0~1 사이 S자 곡선 확률로 변환하는 활성화 함수 (시그모이드)
  "adsp-47-044", // 44번: 혼동 행렬(Confusion Matrix) 기반 정밀도(Precision) 산출 계산
  "adsp-47-045", // 45번: 혼합분포군집(GMM) 잠재변수 모수 최대우도 추정 (EM 알고리즘)
  "adsp-47-046", // 46번: 의사결정나무(Decision Tree) 과적합 방지 가지치기(Pruning) 목적
  "adsp-47-047", // 47번: 비지도 학습 군집 기법 비교 (DBSCAN, SOM, GMM)
  "adsp-47-048", // 48번: K-평균(K-Means) 군집분석의 한계 (이상치 민감성 및 사전 K 결정)
  "adsp-47-049", // 49번: 군집 내 오차제곱합(SSE) 증가량 최소화 계층적 연결법 (와드연결법)
  "adsp-47-050", // 50번: 편의점 영수증 동시 구매 데이터 연관규칙 지지도(Support) 계산
];

// =================================================================
// 제44회 ADsP 실전 기출 복원 (2025년 출시, 50문항)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_44_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번)
  "adsp-past-046", // 44회(2025) RDBMS 무결성
  "adsp-past-041", // 43회 개인정보 비식별화
  "adsp-past-011", // 43회 데이터 구조 형태
  "adsp-past-012", // 43회 가치 패러다임 3단계
  "adsp-past-019", // DW 4대 특징
  "adsp-001",      // DIKW 피라미드
  "adsp-002",      // SECI 모델
  "adsp-003",      // 빅데이터 3대 위기 요인
  "adsp-past-001", // 정성/정량 데이터
  "adsp-past-002", // DIKW 사례 매칭

  // 2과목: 데이터 분석 기획 (11 ~ 20번)
  "adsp-past-047", // 44회(2025) ROI 4V 평가
  "adsp-past-042", // 43회 CMMI 성숙도 5단계
  "adsp-past-013", // 43회 과제 발굴 4분면
  "adsp-past-014", // 43회 CRISP-DM 6단계
  "adsp-past-020", // 조직 3대 형태
  "adsp-past-021", // 거버넌스 4대 요소
  "adsp-004",      // 분석 과제 발굴 4분면
  "adsp-005",      // 하향식 vs 상향식
  "adsp-006",      // 준비도 vs 성숙도
  "adsp-007",      // 마스터플랜 우선순위

  // 3과목: 데이터 분석 (21 ~ 50번)
  "adsp-past-048", // 44회(2025) PCA 누적분산 85%
  "adsp-past-049", // 44회(2025) 로지스틱 오즈/로짓
  "adsp-past-050", // 44회(2025) 랜덤포레스트 OOB
  "adsp-past-015", // 43회 나이브 베이즈
  "adsp-past-016", // 43회 회귀 잔차 4대 가정
  "adsp-past-017", // 43회 연관분석
  "adsp-past-018", // 43회 군집분석
  "adsp-past-043", // 43회 AIC vs BIC
  "adsp-past-044", // 43회 SVM 마진
  "adsp-past-045", // 43회 덴드로그램 절단
  "adsp-008",      // 로지스틱 회귀 오즈비
  "adsp-009",      // 의사결정나무 불순도
  "adsp-010",      // 다중공선성 VIF
  "adsp-011",      // AR vs MA 식별
  "adsp-012",      // 정밀도/재현율/F1
  "adsp-013",      // 연관성 3대 지표
  "adsp-014",      // 계층적 군집 와드법
  "adsp-015",      // 실루엣 계수
  "adsp-past-022", // R 자료구조
  "adsp-past-023", // 왜도/첨도
  "adsp-past-024", // IQR 이상값 공식
  "adsp-past-025", // 1종/2종 오류와 검정력
  "adsp-past-026", // 피어슨 vs 스피어만
  "adsp-past-027", // 회귀 F검정과 결정계수
  "adsp-past-028", // 변수선택법
  "adsp-past-029", // PCA 고유값과 기여율
  "adsp-past-030", // 인공신경망 역전파
  "adsp-past-031", // 배깅 vs 부스팅
  "adsp-past-032", // k-means 군집화
  "adsp-past-033", // 비모수 검정
];

// =================================================================
// 제43회 ADsP 실전 기출 복원 (2024년 출시, 50문항)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_43_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번) - 43회 기출 우선 배치
  "adsp-past-011", // 43회 데이터 구조적 형태
  "adsp-past-012", // 43회 가치 패러다임 3단계
  "adsp-past-041", // 43회 개인정보 비식별화
  "adsp-001",      // DIKW 피라미드
  "adsp-002",      // SECI 모델
  "adsp-003",      // 빅데이터 3대 위기 요인
  "adsp-past-019", // DW 4대 특징
  "adsp-past-001", // 정성/정량 데이터
  "adsp-past-002", // DIKW 사례
  "adsp-past-003", // 데이터 사이언티스트 역량

  // 2과목: 데이터 분석 기획 (11 ~ 20번) - 43회 기출 우선 배치
  "adsp-past-013", // 43회 과제 발굴 4분면
  "adsp-past-014", // 43회 CRISP-DM 6단계
  "adsp-past-042", // 43회 CMMI 분석 성숙도 5단계
  "adsp-004",      // 분석 과제 발굴 4분면
  "adsp-005",      // 하향식 vs 상향식
  "adsp-006",      // 준비도 vs 성숙도
  "adsp-007",      // 마스터플랜 우선순위
  "adsp-past-020", // 집중형/기능형/분산형 조직
  "adsp-past-021", // 데이터 거버넌스 4대 요소
  "adsp-past-005", // KDD 5단계 프로세스

  // 3과목: 데이터 분석 (21 ~ 50번) - 43회 기출 우선 배치
  "adsp-past-015", // 43회 나이브 베이즈 조건부 독립
  "adsp-past-016", // 43회 회귀 잔차 4대 가정
  "adsp-past-017", // 43회 연관분석 지지도/신뢰도/향상도
  "adsp-past-018", // 43회 지도학습 비지도학습 군집분석
  "adsp-past-043", // 43회 AIC vs BIC 페널티 비교
  "adsp-past-044", // 43회 SVM 마진과 서포트 벡터
  "adsp-past-045", // 43회 덴드로그램 절단과 군집 수
  "adsp-008",      // 로지스틱 회귀 오즈비
  "adsp-009",      // 의사결정나무 불순도 (지니/엔트로피)
  "adsp-010",      // 다중공선성 VIF
  "adsp-011",      // 시계열 ACF/PACF AR vs MA
  "adsp-012",      // 혼동행렬 정밀도/재현율/F1
  "adsp-013",      // 연관성 분석 3대 평가지표
  "adsp-014",      // 계층적 군집분석 거리/와드법
  "adsp-015",      // 실루엣 계수
  "adsp-past-022", // R 자료구조 매칭
  "adsp-past-023", // 왜도와 첨도
  "adsp-past-024", // IQR 이상값 경계
  "adsp-past-025", // 1종오류/2종오류/검정력
  "adsp-past-026", // 피어슨 vs 스피어만
  "adsp-past-027", // 회귀 F검정과 결정계수
  "adsp-past-028", // 변수선택법 (전진/후진/단계적)
  "adsp-past-029", // PCA 고유값과 기여율
  "adsp-past-030", // 인공신경망 역전파/활성화함수
  "adsp-past-031", // 배깅 vs 부스팅
  "adsp-past-032", // k-means 군집화
  "adsp-past-033", // 비모수 검정
  "adsp-past-034", // MDS 스트레스 지수
  "adsp-past-035", // ROC 곡선과 AUC
  "adsp-past-008", // 혼동행렬 지표 계산
];

// =================================================================
// 제42회 ADsP 실전 기출 복원 (2024년 출시, 50문항)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_42_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번) - 42회 기출 우선 배치
  "adsp-past-001", // 42회 정성/정량 데이터 구분
  "adsp-past-002", // 42회 DIKW 단계별 사례
  "adsp-past-003", // 42회 데이터 사이언티스트 역량
  "adsp-past-004", // 42회 빅데이터 위기요인과 통제
  "adsp-001",      // DIKW 피라미드 4단계
  "adsp-002",      // 암묵지/형식지 SECI 모형
  "adsp-003",      // 빅데이터 위기 요인 매칭
  "adsp-past-019", // DW 4대 핵심 특징
  "adsp-past-011", // 데이터 구조 형태
  "adsp-past-012", // 가치 패러다임 변화

  // 2과목: 데이터 분석 기획 (11 ~ 20번) - 42회 기출 우선 배치
  "adsp-past-005", // 42회 KDD 방법론 5단계
  "adsp-past-006", // 42회 마스터플랜 우선순위
  "adsp-past-036", // 42회 데이터 거버넌스 변경관리
  "adsp-004",      // 분석 과제 발굴 4분면
  "adsp-005",      // 하향식 vs 상향식 접근법
  "adsp-006",      // 분석 준비도-성숙도 진단
  "adsp-007",      // 시급성 vs 난이도 우선순위
  "adsp-past-020", // 분석 조직 3대 구조 형태
  "adsp-past-021", // 거버넌스 4대 구성 요소
  "adsp-past-013", // 분석 과제 발굴 4분면 매트릭스

  // 3과목: 데이터 분석 (21 ~ 50번) - 42회 기출 우선 배치
  "adsp-past-007", // 42회 시계열 4대 분해 요소
  "adsp-past-008", // 42회 혼동행렬 지표 계산
  "adsp-past-009", // 42회 지니 지수 불순도 계산
  "adsp-past-010", // 42회 결측값 대치법
  "adsp-past-037", // 42회 PCA 공분산 vs 상관행렬
  "adsp-past-038", // 42회 시계열 백색잡음 과정
  "adsp-past-039", // 42회 Apriori 가지치기 원리
  "adsp-past-040", // 42회 홀드아웃과 K-Fold 교차검증
  "adsp-008",      // 로지스틱 회귀 오즈비
  "adsp-009",      // 의사결정나무 노드 분할
  "adsp-010",      // 다중공선성 진단
  "adsp-011",      // AR vs MA 식별
  "adsp-012",      // 정밀도/재현율/F1
  "adsp-013",      // 연관성 분석 3대 지표
  "adsp-014",      // 계층적 군집 거리 측정법
  "adsp-015",      // 실루엣 계수
  "adsp-past-022", // R 데이터 구조 차원
  "adsp-past-023", // 왜도와 첨도 형태
  "adsp-past-024", // IQR 이상값 공식
  "adsp-past-025", // 가설검정 1종/2종 오류
  "adsp-past-026", // 상관분석 피어슨 vs 스피어만
  "adsp-past-027", // 회귀 F검정 결정계수
  "adsp-past-028", // 변수선택법
  "adsp-past-029", // PCA 고유값 누적기여율
  "adsp-past-030", // 역전파와 활성화 함수
  "adsp-past-031", // 배깅 vs 부스팅
  "adsp-past-032", // k-means 중심점 민감성
  "adsp-past-033", // 비모수 검정 기법
  "adsp-past-034", // MDS 스트레스 지수
  "adsp-past-035", // ROC-AUC 해석
];

export interface AdspRoundInfo {
  round: AdspExamRound;
  year: string;
  name: string;
  badge: string;
  description: string;
  questionIds: string[];
}

export const ADSP_EXAM_ROUNDS: Record<AdspExamRound, AdspRoundInfo> = {
  "50": {
    round: "50",
    year: "2026년",
    name: "제50회 기출 복원",
    badge: "2026 최신 기출",
    description: "2026년 제50회 실전 기출 전수 100% 복원 (1~50번 원본 문제 세트)",
    questionIds: ADSP_EXAM_50_IDS,
  },
  "48": {
    round: "48",
    year: "2026년",
    name: "제48회 기출 복원",
    badge: "2026 전수 복원",
    description: "2026년 제48회 실전 기출 전수 100% 복원 (1~50번 원본 문제 세트)",
    questionIds: ADSP_EXAM_48_IDS,
  },
  "47": {
    round: "47",
    year: "2025년",
    name: "제47회 기출 복원",
    badge: "2025 전수 복원",
    description: "2025년 제47회 실전 기출 전수 100% 복원 (1~50번 원본 문제 세트)",
    questionIds: ADSP_EXAM_47_IDS,
  },
  "44": {
    round: "44",
    year: "2025년",
    name: "제44회 기출 복원",
    badge: "2025 상반기",
    description: "2025년 제44회 실전 기출 복원 문항 집중 배치 (50문항 풀세트)",
    questionIds: ADSP_EXAM_44_IDS,
  },
  "43": {
    round: "43",
    year: "2024년",
    name: "제43회 기출 복원",
    badge: "2024 하반기",
    description: "2024년 제43회 실전 기출 복원 문항 집중 배치 (50문항 풀세트)",
    questionIds: ADSP_EXAM_43_IDS,
  },
  "42": {
    round: "42",
    year: "2024년",
    name: "제42회 기출 복원",
    badge: "2024 상반기",
    description: "2024년 제42회 실전 기출 복원 문항 집중 배치 (50문항 풀세트)",
    questionIds: ADSP_EXAM_42_IDS,
  },
};

export const ADSP_ROUND_KEYS: AdspExamRound[] = ["50", "48", "47", "44", "43", "42"];

export function getAdspExamRound(round?: string | null): AdspRoundInfo {
  if (round && round in ADSP_EXAM_ROUNDS) {
    return ADSP_EXAM_ROUNDS[round as AdspExamRound];
  }
  return ADSP_EXAM_ROUNDS["50"];
}

export const ADSP_EXAM_SECTIONS: AdspExamSection[] = [
  {
    id: "understanding",
    name: "데이터 이해",
    rangeLabel: "1-10",
    startIndex: 0,
    count: 10,
    maxScore: 20,
    cutoffScore: 8, // 최소 4문항 이상 정답 필요
  },
  {
    id: "planning",
    name: "데이터 분석 기획",
    rangeLabel: "11-20",
    startIndex: 10,
    count: 10,
    maxScore: 20,
    cutoffScore: 8, // 최소 4문항 이상 정답 필요
  },
  {
    id: "analysis",
    name: "데이터 분석",
    rangeLabel: "21-50",
    startIndex: 20,
    count: 30,
    maxScore: 60,
    cutoffScore: 24, // 최소 12문항 이상 정답 필요
  },
];

export function getSectionByQuestionIndex(index: number): AdspExamSection {
  if (index < 10) return ADSP_EXAM_SECTIONS[0];
  if (index < 20) return ADSP_EXAM_SECTIONS[1];
  return ADSP_EXAM_SECTIONS[2];
}

export interface AdspSectionEvaluation {
  section: AdspExamSection;
  correctCount: number;
  totalCount: number;
  score: number;
  isCutoffFailed: boolean; // 과락 여부
}

export interface AdspExamEvaluation {
  totalQuestions: number;
  totalCorrect: number;
  totalScore: number;
  sections: AdspSectionEvaluation[];
  isPassed: boolean; // 총점 60점 이상 AND 모든 과목 과락 없음
  hasCutoffFailure: boolean;
}

export function evaluateAdspExam(
  answers: Record<string, { submitted: string; correct: boolean }>,
  queue: string[] = ADSP_EXAM_50_IDS
): AdspExamEvaluation {
  const sections: AdspSectionEvaluation[] = ADSP_EXAM_SECTIONS.map((sec) => {
    const secQuestionIds = queue.slice(sec.startIndex, sec.startIndex + sec.count);
    const correctCount = secQuestionIds.filter((id) => answers[id]?.correct).length;
    const score = correctCount * 2; // 문항당 2점
    const isCutoffFailed = score < sec.cutoffScore;

    return {
      section: sec,
      correctCount,
      totalCount: sec.count,
      score,
      isCutoffFailed,
    };
  });

  const totalCorrect = sections.reduce((acc, s) => acc + s.correctCount, 0);
  const totalScore = totalCorrect * 2;
  const hasCutoffFailure = sections.some((s) => s.isCutoffFailed);
  const isPassed = totalScore >= 60 && !hasCutoffFailure;

  return {
    totalQuestions: queue.length,
    totalCorrect,
    totalScore,
    sections,
    isPassed,
    hasCutoffFailure,
  };
}
