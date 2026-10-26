import fs from "node:fs";

const mdPath = "data/mindmaps/adsp/기출/adsp_50.md";
const adspJsonPath = "data/questions/adsp.json";

const content = fs.readFileSync(mdPath, "utf-8");
const sections = content.split(/\n###\s+/);

const TITLES = [
  "",
  "50회 기출 (2026년): DIKW 피라미드 기본 4단계 계층 구조 (Data-Info-Knowledge-Wisdom)",
  "50회 기출 (2026년): 디지털 정보 시스템의 물리적·논리적 최소 단위 (Bit vs Byte)",
  "50회 기출 (2026년): 데이터베이스(DB) 핵심 특성 (통합·공용·운영 데이터 및 중복 최소화)",
  "50회 기출 (2026년): 개인에게 체화된 경험적 노하우와 직관 (암묵지 vs 형식지)",
  "50회 기출 (2026년): 전사 DW 기반 특정 부서·주제별 맞춤형 소규모 저장소 (데이터 마트)",
  "50회 기출 (2026년): 고객 통합 관리 및 맞춤형 서비스 지원 시스템 (CRM)",
  "50회 기출 (2026년): 하둡(Hadoop) 생태계 맵리듀스(MapReduce) 분산 병렬 처리 모델",
  "50회 기출 (2026년): 빅데이터 분석 패러다임 변화 (상관관계 및 패턴 예측 활용 확대)",
  "50회 기출 (2026년): 개체 간 상호작용 및 연결망 구조 파악 (소셜 네트워크 분석 SNA)",
  "50회 기출 (2026년): 데이터 사이언티스트 역량 구분 (DB 튜닝 및 최적화 = 하드 스킬)",
  "50회 기출 (2026년): 데이터 분석 기획 단계 분석 과제 정의서 핵심 구성요소",
  "50회 기출 (2026년): 파일럿 분석 모델 도입 후 발전 흐름 (유효성 검증 → 전사 확산 및 고도화)",
  "50회 기출 (2026년): KDD 분석 방법론 5단계 수행 절차 (선택-전처리-변환-마이닝-해석/평가)",
  "50회 기출 (2026년): CRISP-DM 6단계 중 모델링(Modeling) 세부 태스크와 평가(Evaluation) 구분",
  "50회 기출 (2026년): 데이터 자체 탐색을 통한 새로운 패턴 발견 및 과제 도출 (상향식 접근법)",
  "50회 기출 (2026년): 메타데이터 및 태그/키-값 구조를 포함하는 반정형 데이터 (JSON, XML, 로그)",
  "50회 기출 (2026년): 데이터 분석 프로젝트의 순환적(Iterative) 피드백과 가설 보완",
  "50회 기출 (2026년): 전사 데이터 분석 문화 내재화를 위한 분석 거버넌스(Governance) 관리 구성요소",
  "50회 기출 (2026년): 분석 마스터플랜 수립을 위한 분석 수준 진단(준비도 및 성숙도 평가) 목적",
  "50회 기출 (2026년): 분석 수준 진단 사분면 (준비도 낮음 + 성숙도 낮음 = 준비형)",
  "50회 기출 (2026년): 정규분포 가정 평균에서 3표준편차 이탈치 판별 통계 기법 (ESD 기법)",
  "50회 기출 (2026년): 상호 독립인 세 번의 반복 시행에서 사건 발생 결합확률 (p³)",
  "50회 기출 (2026년): 공정한 동전 5회 독립 던지기 앞면 0회(뒷면 5회) 발생 이항확률 (1/32)",
  "50회 기출 (2026년): 표본 관측치들의 함수로 계산되는 특성값 (통계량 Statistic vs 모수)",
  "50회 기출 (2026년): 선형 회귀분석 4대 기본 가정(선형성·독립성·등분산성·정규성)과 모수 선형 결합",
  "50회 기출 (2026년): 분산분석(ANOVA) 총제곱합 분해 (SST = SSR + SSE)",
  "50회 기출 (2026년): 두 확률변수의 선형 방향성을 나타내는 공분산(Covariance)의 단위 의존성",
  "50회 기출 (2026년): 주성분분석(PCA) 최적 주성분 개수 결정 기준 (고유값, 누적설명분산, 엘보우)",
  "50회 기출 (2026년): 피어슨 상관계수 절댓값에 따른 선형적 상관관계 강도 비교 (|-0.8| > |0.6|)",
  "50회 기출 (2026년): 2개 범주 이항 분류 문제 사건 발생 확률 추정 모형 (로지스틱 회귀분석)",
  "50회 기출 (2026년): 독립변수 개수가 다른 다중 선형 회귀모형 설명력 비교 지표 (수정된 결정계수)",
  "50회 기출 (2026년): 크기 d 데이터셋 d회 복원추출 시 특정 관측치 미선택 확률 ((1-1/d)^d)",
  "50회 기출 (2026년): 앙상블(Ensemble) 학습 성능 극대화 조건 (개별 모형 정확성 및 다양성)",
  "50회 기출 (2026년): 지도 학습 기반 분류(Classification) 알고리즘 (로지스틱 회귀, SVM, KNN)",
  "50회 기출 (2026년): 이진 분류 모형의 정확도(Accuracy)와 오분류율(Error Rate)의 보수 관계",
  "50회 기출 (2026년): 인공신경망 활성화 함수 하이퍼볼릭 탄젠트(tanh) 출력값 범위 ([-1, 1])",
  "50회 기출 (2026년): 로지스틱 회귀분석 회귀계수(β1)의 로그 오즈(로짓) 단위 증가 효과",
  "50회 기출 (2026년): 밀도 기반 군집 알고리즘 DBSCAN의 특징 (K 사전 지정 불필요, 잡음 분리)",
  "50회 기출 (2026년): 연관규칙 마이닝 두 품목 간 향상도(Lift) 수식 산출 계산",
  "50회 기출 (2026년): 장바구니 분석 조건부 구매 확률 지표 신뢰도(Confidence, P(B|A)) 정의",
  "50회 기출 (2026년): 소수 클래스 탐지를 저해하는 클래스 불균형(Class Imbalance) 현상",
  "50회 기출 (2026년): 의사결정나무 모델의 과대적합(Overfitting) 방지를 위한 정지규칙(Stopping Rule)",
  "50회 기출 (2026년): Z-표준화 변수 기반 표준화 회귀계수(베타 계수)의 상대적 영향력 해석",
  "50회 기출 (2026년): 머신러닝 모형 학습·검증·평가를 위한 데이터 분할(Train/Validation/Test) 원칙",
  "50회 기출 (2026년): 의사결정나무 분할 기준 지니지수(Gini Index) 감소와 노드 순수도 향상",
  "50회 기출 (2026년): 시계열 데이터의 단기 잡음 완화 및 추세 파악을 위한 평활화(Smoothing) 기법",
  "50회 기출 (2026년): 시계열 2차 자기회귀 AR(2) 모형 ACF 점진 감소 vs PACF 시차 2 절단 패턴",
  "50회 기출 (2026년): 시계열 이동평균모형 MA(q)의 현시점 및 과거 q개 백색잡음 오차 선형 결합",
  "50회 기출 (2026년): 자기회귀 이동평균 모형 ARMA(2, 0)과 AR(2) 모형의 수학적 동등성",
  "50회 기출 (2026년): 시계열 AR(2) 수식에서 과거 관측치의 자기회귀계수 표기 기호 (φ1, φ2)"
];

const DEV_CONTEXTS = [
  "",
  "데이터 레이크하우스 파이프라인에서 S3의 미가공 원천 로그는 Data, 이를 SQL로 일별 집계한 매출 테이블은 Information, 전환율 예측 임계치에 따른 마케팅 자동화 트리거는 Knowledge에 대응됩니다.",
  "저수준 네트워크 프로그래밍이나 임베디드 IoT 센서 통신 프로토콜 설계 시 1비트 플래그 필드를 비트마스크(Bitmask) 연산으로 패킹하여 네트워크 대역폭과 메모리를 극대화합니다.",
  "엔터프라이즈 RDBMS 아키텍처 구축 시 제3정규화(3NF)를 통해 중복 데이터를 최소화함으로써 데이터 갱신 이상(Anomaly)을 원천 차단하고 원자성·일관성(ACID)을 보장합니다.",
  "시니어 아키텍트의 경험적 장애 대응 노하우(암묵지)를 Notion이나 Jira 장애 보고서(형식지)로 문서화하여 공유함으로써 엔지니어링 온보딩 속도를 단축합니다.",
  "전사 데이터 웨어하우스(Snowflake/BigQuery)의 거대한 팩트 테이블에서 마케팅팀 전용 분석을 위해 필요한 컬럼과 지표만을 별도 데이터 마트(Data Mart) 뷰로 서빙하여 쿼리 비용과 지연시간을 낮춥니다.",
  "고객의 실시간 구매 행동 및 CS 이력을 단일 고객 뷰(Single Customer View)로 통합하는 CRM 백엔드를 구축하여 이탈 위험군 유저 대상 타겟 푸시 알림을 자동 전송합니다.",
  "대규모 분산 클러스터에서 수 테라바이트의 로그를 키-값 쌍으로 매핑(Map)하고 그룹화하여 리듀스(Reduce) 집계하는 Spark/Hadoop 파이프라인으로 대용량 배치 처리를 구현합니다.",
  "실시간 추천 시스템 구축 시 클릭 수와 체류 시간 사이의 강력한 통계적 상관관계를 기반으로 우선 추천 모델을 릴리즈한 뒤 점진적인 인과추론 A/B 테스트로 모델을 개선합니다.",
  "소셜 미디어 사용자 간의 팔로우/언팔로우 관계를 Neo4j와 같은 그래프 데이터베이스에 Node와 Edge로 모델링하여 인플루언서 탐지 및 친구 추천 피처를 산출합니다.",
  "데이터 엔지니어와 MLOps 엔지니어에게는 RDBMS 인덱스 튜닝, 파티셔닝, 분산 쿼리 최적화 등의 하드 스킬이 서비스 SLA와 인프라 비용 절감의 핵심 역량으로 평가됩니다.",
  "데이터 분석 프로젝트 킥오프 시 분석 목적, 데이터 소스, 검증 방법론, 예상 KPI를 담은 분석 과제 정의서를 명문화하여 기획팀과 엔지니어링팀 간의 스코프 크립(Scope Creep)을 방지합니다.",
  "신규 머신러닝 피처 도입 시 소규모 A/B 테스트나 샌드박스 환경에서 유효성을 사전 검증한 후, Kubernetes 기반 추론 클러스터로 무중단 전사 확산 및 재학습 파이프라인을 구축합니다.",
  "ETL 파이프라인 설계 시 KDD 표준에 맞춰 Raw 데이터 수집(Selection), 결측치·이상치 정제(Preprocessing), 피처 엔지니어링(Transformation), 모델 학습(Data Mining), 비즈니스 모니터링(Evaluation) 순으로 DAG를 구성합니다.",
  "CRISP-DM 파이프라인 구축 시 모델링(Modeling) 단계에서는 알고리즘 튜닝과 교차 검증을 집중 수행하고, 실제 배포(Deployment) 직전 최종 비즈니스 ROI 검토는 평가(Evaluation) 단계에서 게이트키핑합니다.",
  "명확한 가설이 부재한 신규 서비스 초기에는 사용자 행동 로그에서 비지도 클러스터링(Bottom-Up)을 수행하여 사용자 페르소나와 숨겨진 니즈를 상향식으로 발굴합니다.",
  "MongoDB, Elasticsearch나 AWS Kinesis 로그 수집기에서 JSON/XML 형태로 유입되는 반정형 데이터는 유연한 스키마 온 리드(Schema-on-Read) 방식으로 적재하여 다변화된 필드를 유연하게 수용합니다.",
  "머신러닝 프로젝트는 폭포수 방식이 아닌 애자일 스프린트로 운영되며, 탐색적 데이터 분석(EDA)과 파일럿 모델의 검증 피드백에 따라 초기 피처 설계와 가설을 유연하게 보완·반복합니다.",
  "사내 데이터 플랫폼 구축 시 조직 구조, 파이프라인 표준 프로세스, CI/CD 인프라, 데이터 품질 카탈로그, 전사 데이터 리터러시 교육을 묶는 거버넌스 체계를 수립해야 지속 가능한 확장이 가능합니다.",
  "전사 디지털 전환 컨설팅 시 기업의 인프라 준비도(Readiness)와 성숙도(Maturity)를 4분면으로 진단하여 퀵윈(Quick Win) 과제와 장기 마스터플랜의 우선순위 로드맵을 체계화합니다.",
  "분석 준비도와 성숙도가 모두 낮은 '준비형' 기업의 경우 고난도 딥러닝 도입보다 기초 데이터 웨어하우스 구축, 로깅 인프라 정비, 데이터 분석 전문 조직 신설이 최우선 선결 과제입니다.",
  "센서 모니터링 시스템에서 정규분포를 따르는 지표의 이상 스파이크를 탐지하기 위해 `μ ± 3σ` 기준의 ESD 규칙을 적용하여 실시간 슬랙 알림 임계치로 연동합니다.",
  "마이크로서비스 아키텍처에서 서로 독립적인 3개의 결제 게이트웨이 호출이 모두 성공할 확률을 계산할 때 각 성공 확률의 곱($p^3$)으로 전체 트랜잭션 성공률을 산출합니다.",
  "비트코인 해시 난이도 조절이나 블록 검증 알고리즘에서 매 독립 시행마다 동일한 확률을 갖는 베르누이 시행의 결합 확률을 이항분포 확률질량함수로 정량 계산합니다.",
  "백엔드 모니터링 대시보드(Grafana)에서 관측된 최근 1시간 동안의 요청 지연시간 평균과 분산은 표본 통계량(Statistic)이며, 이를 통해 미지의 전체 시스템 모수(Parameter)를 신뢰구간으로 추정합니다.",
  "다중 선형 회귀 모형을 프로덕션 API로 서빙하기 전 잔차의 선형성, 정규성(Q-Q 플롯), 등분산성(잔차 대 예측값 플롯), 독립성(더빈-왓슨) 가정을 철저히 검증하여 신뢰성을 확보합니다.",
  "머신러닝 회귀 모델의 설명력 진단 시 분산분석(ANOVA) 표를 생성하여 총변동(SST) 대비 회귀 설명 변동(SSR)과 잔차 변동(SSE)의 비율을 계산하고 $R^2$ 결정계수를 도출합니다.",
  "피처 엔지니어링 시 두 수치형 변수의 공분산은 피처의 단위(스케일)에 따라 수치가 왜곡되므로, StandardScaler 전처리 후 피어슨 상관계수로 변환하여 표준화된 상관성을 비교합니다.",
  "고차원 피처 공간을 차원 축소할 때 Scikit-learn의 PCA 결과에서 Scree Plot의 엘보우 포인트와 누적 분산 설명력 80% 기준을 조합하여 최적의 임베딩 차원을 결정합니다.",
  "피처 선택(Feature Selection) 시 타겟 변수와의 상관관계 절댓값이 큰 피처를 우선 선별하며, $|-0.8| > |0.6|$ 이므로 음의 상관관계가 강한 피처가 더 높은 예측 정보를 제공합니다.",
  "핀테크 서비스의 대출 연체 예측이나 이상 거래 탐지(FDS)와 같은 이진 분류 문제에서 Scikit-learn의 LogisticRegression을 기본 베이스라인 분류기로 학습시켜 연체 확률을 서빙합니다.",
  "설명변수 개수가 많은 피처 세트에서 모델을 비교할 때 불필요한 피처 추가에 페널티를 부과하는 수정된 결정계수(Adjusted $R^2$)나 AIC/BIC를 기준으로 최적의 서빙 모형을 선택합니다.",
  "Random Forest 알고리즘의 Bootstrap 표본 추출 시 약 36.8%((1 - 1/d)^d)의 데이터가 학습에서 제외되어 OOB(Out-of-Bag) 데이터로 남으며, 이를 교차 검증셋으로 활용합니다.",
  "배깅(Random Forest)이나 보팅 앙상블 구성 시 단일 결정트리들의 다양성(Diversity)을 극대화하기 위해 피처 무작위 추출(max_features)과 부트스트랩 샘플링을 병행합니다.",
  "실시간 이상 유저 판별 서비스 개발 시 타겟 라벨이 존재하는 지도 학습 문제이므로 로지스틱 회귀, SVM, KNN 분류기를 파이프라인 후보군으로 벤치마킹합니다.",
  "이진 분류 모델의 모니터링 메트릭 수집 시 정확도(Accuracy)가 40%라면 오분류율(Error Rate)은 60%로 상호 보완적 관계를 가지며, 클래스 불균형 상황에서는 F1-score를 함께 모니터링합니다.",
  "딥러닝 인공신경망의 은닉층 설계 시 0을 중심으로 대칭인 [-1, 1] 범위를 출력하는 tanh 함수는 시그모이드(0~1)의 편향 기울기 소실 문제를 완화하는 장점이 있습니다.",
  "의료 진단이나 마케팅 전환 로지스틱 회귀 모델 서빙 시 설명변수가 1단위 증가할 때 오즈비($e^{\beta_1}$)와 로그 오즈 증가분을 추출하여 현업 비즈니스 팀에 모델의 의사결정 근거를 설명합니다.",
  "GPS 이동 경로 데이터나 이상 결제 클러스터링 시 기하학적 형태의 군집을 탐색하고 노이즈(이상치)를 필터링하기 위해 $K$를 미리 정하지 않는 Scikit-learn의 DBSCAN을 활용합니다.",
  "추천 시스템에서 연관규칙 마이닝(Apriori)을 수행할 때 향상도(Lift)가 1을 초과하는 유의미한 양의 상관 규칙만을 추출하여 번들 상품 할인 프로모션 룰 엔진에 등록합니다.",
  "이커머스 장바구니 추천 알고리즘에서 A 상품을 장바구니에 담았을 때 B 상품을 추가 구매할 조건부 확률(신뢰도 Confidence)을 계산하여 실시간 연관 추천 슬롯을 구성합니다.",
  "금융 사기 거래 탐지(FDS) 모델 학습 시 정상 거래(99.9%) 대비 사기 거래(0.1%)의 극심한 클래스 불균형을 극복하기 위해 SMOTE 오버샘플링과 Focal Loss를 적용합니다.",
  "LightGBM이나 Scikit-learn DecisionTreeClassifier 서빙 시 모델 과적합을 방지하고 추론 지연시간을 낮추기 위해 `max_depth`와 `min_samples_split` 등의 정지규칙을 필수로 튜닝합니다.",
  "회귀 모델의 각 피처 단위를 통일한 후 표준화 회귀계수(Standardized Beta)를 비교하여 매출액 증가에 가장 큰 영향력을 미치는 핵심 KPI 피처를 도출합니다.",
  "MLOps 파이프라인에서 데이터 누수(Data Leakage)를 방지하고 공정한 모델 평가를 수행하기 위해 원천 데이터를 Train(60%), Validation(20%), Test(20%)로 엄격히 분할하여 보존합니다.",
  "의사결정나무 CART 알고리즘은 노드 분할 시 자식 노드의 가중 평균 지니지수(Gini Impurity)가 최소화(즉, 순수도 Purity 극대화)되는 최적의 특성과 분할점을 탐욕적으로 선택합니다.",
  "실시간 서버 CPU 사용량 모니터링 시 스파이크 잡음을 제거하고 기저 트렌드를 파악하기 위해 단순 이동평균(SMA)과 지수평활법(EMA) 필터를 적용하여 알림 억제 로직을 구현합니다.",
  "시계열 분석에서 AR(2) 모형을 자동 식별하기 위해 ACF 플롯의 지수적 감쇠 패턴과 PACF 플롯의 시차 2 이후 급격한 0 수렴(Cut-off) 특성을 통계적으로 검증합니다.",
  "시계열 데이터 모델링 시 MA(q) 모형은 과거의 예측 잔차(백색잡음 오차)들의 선형 결합으로 현재 값을 모델링하므로 충격의 지속 효과가 시차 q 이후 완전히 사라지는 특성을 갖습니다.",
  "시계열 파이프라인에서 `statsmodels.tsa.arima.model.ARIMA`를 구성할 때 order=(2, 0, 0)으로 설정하면 MA 항이 제외된 순수 2차 자기회귀 AR(2) 모형으로 최적화 학습됩니다.",
  "AR(2) 시계열 수식 $Y_t = c + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + \epsilon_t$ 에서 파이($\phi$) 계수들의 절대값 합과 특성방정식의 근을 검사하여 시계열 모형의 정상성(Stationarity) 조건을 검증합니다."
];

const TAGS_MAP = {
  1: ["dikw-pyramid", "data-hierarchy", "knowledge-information", "wisdom"],
  2: ["data-representation", "bit", "byte", "information-unit"],
  3: ["database", "integrated-data", "dbms-characteristics", "redundancy-control"],
  4: ["tacit-knowledge", "explicit-knowledge", "knowledge-management", "seci"],
  5: ["data-mart", "data-warehouse", "subject-oriented", "etl"],
  6: ["crm", "customer-relationship-management", "enterprise-systems"],
  7: ["hadoop", "mapreduce", "distributed-computing", "batch-processing"],
  8: ["bigdata-paradigm", "correlation-over-causation", "pattern-discovery"],
  9: ["sna", "social-network-analysis", "node-link", "centrality"],
  10: ["data-scientist", "hard-skill", "soft-skill", "sql-tuning"],
  11: ["task-definition", "analytics-planning", "project-charter"],
  12: ["pilot-project", "model-scaling", "validation-to-expansion"],
  13: ["kdd-methodology", "data-selection", "data-mining-steps"],
  14: ["crisp-dm", "modeling-phase", "evaluation-phase", "process-model"],
  15: ["bottom-up", "exploratory-discovery", "unsupervised-approach"],
  16: ["semi-structured-data", "json", "xml", "web-logs"],
  17: ["project-flexibility", "iterative-feedback", "hypothesis-revision"],
  18: ["analytics-governance", "organization-process-system", "human-resource"],
  19: ["analytics-diagnosis", "readiness-maturity", "master-plan-roadmap"],
  20: ["readiness-quadrants", "preparation-type", "readiness-maturity-matrix"],
  21: ["esd", "outlier-detection", "3-sigma-rule", "extreme-studentized-deviate"],
  22: ["independent-events", "joint-probability", "multiplication-rule"],
  23: ["binomial-distribution", "coin-toss", "bernoulli-trials", "independent-events"],
  24: ["statistic", "parameter", "sample-distribution", "population"],
  25: ["linear-regression-assumptions", "linearity", "homoscedasticity", "normality"],
  26: ["anova", "sum-of-squares", "sst-ssr-sse", "variance-decomposition"],
  27: ["covariance", "scale-dependence", "linear-direction", "correlation"],
  28: ["pca", "scree-plot", "eigenvalue-rule", "elbow-point"],
  29: ["pearson-correlation", "correlation-magnitude", "absolute-value-comparison"],
  30: ["logistic-regression", "binary-classification", "odds-logit"],
  31: ["adjusted-r-squared", "model-comparison", "degrees-of-freedom-penalty"],
  32: ["bootstrap", "bagging", "oob-probability", "sampling-with-replacement"],
  33: ["ensemble-learning", "diversity", "model-synergy", "base-learners"],
  34: ["classification-algorithms", "supervised-learning", "logistic-svm-knn"],
  35: ["accuracy", "error-rate", "complementary-metrics", "model-evaluation"],
  36: ["activation-function", "tanh", "sigmoid", "neural-networks"],
  37: ["logistic-coefficients", "log-odds", "logit-increase", "odds-ratio"],
  38: ["dbscan", "density-based-clustering", "noise-handling", "arbitrary-shapes"],
  39: ["association-rules", "lift-calculation", "joint-probability"],
  40: ["market-basket", "confidence", "conditional-probability", "support-confidence"],
  41: ["class-imbalance", "imbalanced-data", "smote", "fraud-detection"],
  42: ["decision-tree", "stopping-rule", "overfitting-prevention", "max-depth"],
  43: ["standardized-coefficients", "beta-coefficient", "standard-deviation-effect"],
  44: ["data-splitting", "train-validation-test", "model-generalization"],
  45: ["gini-index", "impurity", "purity", "cart-algorithm"],
  46: ["time-series-smoothing", "moving-average", "exponential-smoothing", "noise-reduction"],
  47: ["ar-model", "acf-pacf-identification", "cut-off", "tails-off"],
  48: ["ma-model", "moving-average-time-series", "white-noise-linear-combination"],
  49: ["arma-model", "ar-ma-equivalence", "time-series-order"],
  50: ["ar-equation", "autoregressive-parameter", "phi-symbol", "time-series-notation"]
};

const CODE_SNIPPETS = {
  23: `[동전 5회 독립 시행 이항확률 계산]
- 시행 횟수 (n): 5회
- 앞면 발생 확률 (p): 1/2
- 뒷면 발생 확률 (q = 1 - p): 1/2
- 앞면 발생 횟수 (X): 0회 (5회 모두 뒷면)
---------------------------------------------
P(X = 0) = 5C0 × (1/2)^0 × (1/2)^5 = 1 × 1 × (1/32) = 1/32`,

  26: `[선형 회귀 분산분석(ANOVA) 제곱합 분해]
- SST (Total Sum of Squares): 종속변수 Y의 총변동
- SSR (Regression Sum of Squares): 회귀모형에 의해 설명되는 변동
- SSE (Error Sum of Squares): 회귀모형으로 설명되지 않는 잔차 변동
---------------------------------------------
관계식: SST = SSR + SSE
결정계수 (R²): SSR / SST = 1 - (SSE / SST)`,

  35: `[이진 분류 모형의 기본 평가지표 관계]
- 전체 표본 수: N
- 맞힌 관측치 수: TP + TN
- 틀린 관측치 수: FP + FN
---------------------------------------------
정확도 (Accuracy) = (TP + TN) / N = 0.40 (40%)
오분류율 (Error Rate) = (FP + FN) / N = 1 - Accuracy = 0.60 (60%)`,

  39: `[연관규칙 A → B 향상도(Lift) 계산]
- 품목 A 구매 확률: P(A) = 3/4 = 0.75
- 품목 B 구매 확률: P(B) = 1/2 = 0.50
- 동시 구매 확률: P(A ∩ B) = 1/2 = 0.50
---------------------------------------------
Lift(A → B) = P(A ∩ B) / [P(A) × P(B)]
            = (1/2) / [(3/4) × (1/2)]
            = (1/2) / (3/8) = (1/2) × (8/3) = 4/3 ≈ 1.333`,

  47: `[시계열 모형 ACF / PACF 식별 패턴]
┌─────────────┬──────────────────────────┬──────────────────────────┐
│ 모형        │ 자기상관함수 (ACF)       │ 편자기상관함수 (PACF)    │
├─────────────┼──────────────────────────┼──────────────────────────┤
│ AR(p)       │ 지수적 감쇠 / 파동 감소  │ 시차 p 이후 절단 (Cut-off)│
│ MA(q)       │ 시차 q 이후 절단 (Cut-off)│ 지수적 감쇠 / 파동 감소  │
│ ARMA(p, q)  │ 시차 q 이후 감쇠         │ 시차 p 이후 감쇠         │
└─────────────┴──────────────────────────┴──────────────────────────┘
* AR(2) 식별: ACF는 점진적 감쇠, PACF는 시차 2 이후 급격히 0으로 절단`,

  50: `[2차 자기회귀 모형 AR(2) 표준 수식]
Y_t = c + φ₁·Y_{t-1} + φ₂·Y_{t-2} + ε_t

- c : 상수항 (Constant)
- φ₁, φ₂ : 자기회귀 계수 (Autoregressive Parameters)
- Y_{t-1}, Y_{t-2} : 과거 1시점, 2시점 관측값 (Lags)
- ε_t : 현시점 백색잡음 오차항 (White Noise Error, ~ N(0, σ²))`
};

const newQuestions = [];

for (let i = 1; i <= 50; i++) {
  const sec = sections[i];
  if (!sec) {
    console.error(`Section ${i} not found!`);
    continue;
  }

  const numMatch = sec.match(/^(\d+)번/);
  const qNum = parseInt(numMatch[1], 10);

  // Extract Question
  const qMatch = sec.match(/\*\s*\*\*문제:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*보기:\*\*)/);
  let questionText = qMatch ? qMatch[1].trim() : "";

  // Extract Options block
  const optsMatch = sec.match(/\*\s*\*\*보기:\*\*\s*\n([\s\S]*?)(?=\n\*\s*\*\*정답:\*\*)/);
  const optsBlock = optsMatch ? optsMatch[1].trim() : "";

  // Extract Answer
  const ansMatch = sec.match(/\*\s*\*\*정답:\*\*\s*([\s\S]*?)(?=\n\*\s*\*\*해설:\*\*)/);
  const ansText = ansMatch ? ansMatch[1].trim() : "";

  // Extract Explanation
  const expMatch = sec.match(/\*\s*\*\*해설:\*\*\s*([\s\S]*?)(?=(?:\n---|\n##|$))/);
  const expText = expMatch ? expMatch[1].trim() : "";

  let ansIdx = -1;
  if (ansText.includes("①")) ansIdx = 0;
  else if (ansText.includes("②")) ansIdx = 1;
  else if (ansText.includes("③")) ansIdx = 2;
  else if (ansText.includes("④")) ansIdx = 3;

  // Process rawOptions
  const lines = optsBlock.split("\n").map(l => l.trim()).filter(Boolean);
  const premiseLines = lines.filter(l => !/^[1-4]\.\s+/.test(l));
  const optionLines = lines.filter(l => /^[1-4]\.\s+/.test(l));

  if (premiseLines.length > 0) {
    const formattedPremise = premiseLines.map(l => l.replace(/^(\*|-)\s+/, "")).join("\n");
    questionText += `\n\n[보기]\n${formattedPremise}`;
  }

  const options = optionLines.map(l => l.replace(/^[1-4]\.\s*/, "").trim());

  let category = "adsp-understanding";
  if (qNum >= 11 && qNum <= 20) {
    category = "adsp-planning";
  } else if (qNum >= 21) {
    category = "adsp-analysis";
  }

  const id = `adsp-50-${String(qNum).padStart(3, "0")}`;
  const title = TITLES[qNum] || `50회 기출: 문제 ${qNum}번`;
  const devContext = DEV_CONTEXTS[qNum] || "실무 데이터 분석 및 백엔드 시스템 개발 시 해당 개념을 적용합니다.";
  const tags = TAGS_MAP[qNum] || ["adsp", "50회"];

  const circleNums = ["①", "②", "③", "④"];
  const optionsBreakdown = options.map((opt, idx) => {
    if (idx === ansIdx) {
      return `${circleNums[idx]} (정답) ${opt}`;
    } else {
      return `${circleNums[idx]} ${opt}`;
    }
  });

  const item = {
    id,
    category,
    type: "multiple_choice",
    title,
    question: questionText,
    options,
    answerIndex: ansIdx,
    explanation: {
      definition: expText,
      optionsBreakdown,
      devContext
    },
    tags
  };

  if (CODE_SNIPPETS[qNum]) {
    item.codeSnippet = CODE_SNIPPETS[qNum];
  }

  newQuestions.push(item);
}

console.log(`Generated ${newQuestions.length} questions for 50회.`);

// Read existing adsp.json
const existing = JSON.parse(fs.readFileSync(adspJsonPath, "utf-8"));
console.log(`Existing questions count: ${existing.length}`);

// Remove any existing adsp-50-* questions if present
const filtered = existing.filter(q => !q.id.startsWith("adsp-50-"));
const combined = [...filtered, ...newQuestions];

fs.writeFileSync(adspJsonPath, JSON.stringify(combined, null, 2), "utf-8");
console.log(`Updated ${adspJsonPath}. New total questions count: ${combined.length}`);
