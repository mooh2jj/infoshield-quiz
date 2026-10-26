import fs from "node:fs";

const mdPath = "data/mindmaps/adsp/기출/adsp_47.md";
const adspJsonPath = "data/questions/adsp.json";

const content = fs.readFileSync(mdPath, "utf-8");
const sections = content.split(/\n###\s+/);

const TITLES = [
  "",
  "47회 기출 (2025년): SECI 모델 지식 변환 나선 순환 과정 (공통화-표출화-연결화-내면화)",
  "47회 기출 (2025년): DIKW 피라미드 계층 구조와 데이터/정보/지식 사례 구분",
  "47회 기출 (2025년): 데이터베이스 고유 특성 (기계가독성, 검색가능성, 원격조작성)",
  "47회 기출 (2025년): 개인정보 보호를 위한 비식별 조치 및 익명화(Anonymization)",
  "47회 기출 (2025년): 가트너 빅데이터 3대 핵심 특징(3V: Volume, Velocity, Variety)",
  "47회 기출 (2025년): 연관분석(장바구니 분석)의 비지도 학습 특성과 회귀분석 차이",
  "47회 기출 (2025년): 정형·반정형·비정형 데이터 분류와 로그/센서 데이터 특성",
  "47회 기출 (2025년): 빅데이터 3대 위기 요인과 통제 기제 매칭 (책임 원칙 및 설명책임)",
  "47회 기출 (2025년): 트랜잭션 데이터 실시간 무결성 보장 처리 방식 (OLTP vs OLAP)",
  "47회 기출 (2025년): 데이터 사이언티스트 핵심 역량 (소프트 스킬과 도메인 지식)",
  "47회 기출 (2025년): 데이터 분석 기획 시 모델링 복잡도와 오컴의 면도날 법칙",
  "47회 기출 (2025년): 빅데이터 분석 기법별 비즈니스 활용 사례 매칭 (회귀분석 vs 연관분석)",
  "47회 기출 (2025년): 분석 과제 발굴 하향식(Top-Down)과 상향식(Bottom-Up)의 상호 보완",
  "47회 기출 (2025년): 분석 과제 발굴 4사분면 (What 앎, How 모름 = Solution)",
  "47회 기출 (2025년): 하향식 접근법의 문제 탐색 단계 프레임워크 (STEEP, 캔버스)",
  "47회 기출 (2025년): 분석 마스터플랜 우선순위 3대 평가 기준 (전략적 중요도, ROI, 실행용이성)",
  "47회 기출 (2025년): 분석 수준 진단 사분면 (준비도 높음 + 성숙도 낮음 = 정착형)",
  "47회 기출 (2025년): 전사 분석 전담 부서 중심의 집중형(Centralized) 조직 구조",
  "47회 기출 (2025년): 데이터 거버넌스(Data Governance)와 비즈니스/IT 프로세스 연계",
  "47회 기출 (2025년): 분석 준비도(Readiness) 6대 핵심 진단 영역과 예산 집행 한계",
  "47회 기출 (2025년): 사칙연산과 절대 영점이 존재하는 최상위 척도 (비율척도)",
  "47회 기출 (2025년): 탐색적 데이터 분석(EDA)의 목적과 모델 평가 단계와의 구분",
  "47회 기출 (2025년): 상자 그림(Box Plot) 사분위범위(IQR) 기준 이상치 상한선/하한선 계산",
  "47회 기출 (2025년): 통계적 가설검정 오류와 유의수준(알파: 제1종 오류 최대 허용치)",
  "47회 기출 (2025년): 표본조사의 표본오차와 비표본오차(Non-sampling Error) 특성",
  "47회 기출 (2025년): 오른쪽 꼬리 비대칭 분포(양의 왜도)의 평균·중앙값·최빈값 관계",
  "47회 기출 (2025년): 표본추출 기법 (군집추출법: 군집 내 이질, 군집 간 동질)",
  "47회 기출 (2025년): 통계적 가설검정 유의확률(p-값)의 수학적 정의와 기각 기준",
  "47회 기출 (2025년): 상자 그림(Box Plot) 해석의 한계와 집단 간 평균 차이 검정(t-검정)",
  "47회 기출 (2025년): 주성분분석(PCA) 스크리 산점도(Scree Plot)의 엘보우(Elbow) 기준",
  "47회 기출 (2025년): 단순 선형 회귀모형 잔차평균제곱(MSE) 계산과 자유도(n-2)",
  "47회 기출 (2025년): 다중 회귀분석 다중공선성(Multicollinearity) 해결 방안",
  "47회 기출 (2025년): 설명변수 간 다중공선성 진단 지표 분산팽창요인(VIF)",
  "47회 기출 (2025년): 시계열 데이터의 정상성(Stationarity) 3대 조건",
  "47회 기출 (2025년): R lm() 회귀분석 결과표 개별 회귀계수 유의성 검정 (t-통계량 p-값)",
  "47회 기출 (2025년): 선형 회귀분석 잔차의 4대 기본 가정 (선형성, 독립성, 등분산성, 정규성)",
  "47회 기출 (2025년): 순위 기반 비선형 단조 관계 평가 비모수 상관계수 (스피어만)",
  "47회 기출 (2025년): 비정상 시계열 차분(d)과 자기회귀/이동평균 결합 모형 (ARIMA)",
  "47회 기출 (2025년): 분할표 상의 관찰도수와 기대도수 편차 검정 (카이제곱 독립성 검정)",
  "47회 기출 (2025년): 정상 시계열의 자기상관함수(ACF) 시차 증가에 따른 감쇄 특성",
  "47회 기출 (2025년): 다중 클래스 분류 신경망 출력층 확률 정규화 함수 (소프트맥스 Softmax)",
  "47회 기출 (2025년): 머신러닝 앙상블 배깅(병렬)과 부스팅(순차 가중치 학습) 비교",
  "47회 기출 (2025년): 입력값을 0~1 사이 S자 곡선 확률로 변환하는 활성화 함수 (시그모이드)",
  "47회 기출 (2025년): 혼동 행렬(Confusion Matrix) 기반 정밀도(Precision) 산출 계산",
  "47회 기출 (2025년): 혼합분포군집(GMM) 잠재변수 모수 최대우도 추정 (EM 알고리즘)",
  "47회 기출 (2025년): 의사결정나무(Decision Tree) 과적합 방지 가지치기(Pruning) 목적",
  "47회 기출 (2025년): 비지도 학습 군집 기법 비교 (DBSCAN, SOM, GMM)",
  "47회 기출 (2025년): K-평균(K-Means) 군집분석의 한계 (이상치 민감성 및 사전 K 결정)",
  "47회 기출 (2025년): 군집 내 오차제곱합(SSE) 증가량 최소화 계층적 연결법 (와드연결법)",
  "47회 기출 (2025년): 편의점 영수증 동시 구매 데이터 연관규칙 지지도(Support) 계산"
];

const DEV_CONTEXTS = [
  "",
  "사내 기술 위키나 엔지니어링 온보딩 문서는 시니어 개발자의 암묵지를 명문화(표출화)하고 조직의 표준 아키텍처 가이드로 결합(연결화)하는 전형적인 지식 변환 프로세스입니다.",
  "데이터 엔지니어링 파이프라인에서 S3의 Raw JSON 로그는 Data, 이를 Athena로 쿼리한 일일 주문 통계는 Information, 구매 전환율 임계치를 기반으로 한 자동 프로모션 로직은 Knowledge에 대응됩니다.",
  "현대 분산 시스템에서는 REST API나 gRPC를 통해 원격 DB 및 마이크로서비스에 안전하게 질의하고 응답받을 수 있는 기계가독성(Machine Readability)과 원격조작성이 아키텍처의 필수 요건입니다.",
  "개인정보보호법 및 금융 보안 컴플라이언스를 충족하기 위해 사용자 결제 및 회원 DB에서 주민번호, 전화번호를 SHA-256 해시 및 AES 마스킹 처리하여 안전한 분석 데이터 마트를 구성합니다.",
  "클라우드 아키텍처 설계 시 PB 단위의 대용량 스토리지(Volume), Kafka 스트리밍의 실시간 처리(Velocity), 그리고 JSON/Parquet/이미지 등 다양한 형식(Variety)을 처리할 수 있는 Lakehouse를 설계합니다.",
  "이커머스 서비스 개발 시 유저의 장바구니에 담긴 아이템들을 기반으로 '자주 함께 구매되는 상품'을 실시간 추천하는 연관분석 엔진(Apriori/FP-Growth)을 서빙 모듈로 구축합니다.",
  "관계형 데이터베이스(PostgreSQL)의 고정 스키마는 정형 데이터, 로그 수집기(Fluentd)가 수집하는 JSON/XML 로그는 반정형 데이터, 사용자 리뷰 음성/이미지 파일은 비정형 데이터로 분류하여 맞춤 스토리지를 할당합니다.",
  "AI 신용평가나 대출 심사 시스템 배포 시 알고리즘의 편향이나 오작동으로 인한 피해를 방지하기 위해 모델의 설명가능성(XAI)과 사후 감사 로깅을 필수 거버넌스로 도입합니다.",
  "결제 및 재고 차감과 같은 핵심 금융 비즈니스는 ACID 트랜잭션을 보장하는 OLTP(RDBMS)로 처리하고, 일별 집계 및 대시보드 리포팅은 분석 전용 OLAP(Snowflake/ClickHouse)로 분리합니다.",
  "데이터 엔지니어와 분석가는 파이썬/SQL/스파크 등의 하드 스킬뿐 아니라, 현업 도메인의 핵심 비즈니스 KPI를 이해하고 기획팀과 원활히 소통하는 소프트 스킬이 갖춰져야 프로젝트를 성공으로 이끕니다.",
  "ML 엔지니어링 실무에서 모델의 파라미터를 과도하게 늘리면 서빙 지연(Latency)이 급증하고 과적합이 발생하므로, 단순하면서도 추론 속도가 빠른 가벼운 모델을 우선 검토하는 것이 원칙입니다.",
  "연비 최적화나 서버 응답 시간 예측처럼 연속형 수치를 예측할 때는 선형/비선형 회귀분석을 적용하고, 장바구니 묶음 구매 패턴을 찾을 때는 연관규칙 마이닝을 분리하여 파이프라인을 구성합니다.",
  "초기 신규 서비스 런칭 시에는 사용자 행동 로그에서 비지도 학습으로 예상치 못한 패턴을 찾는 상향식 접근과, 기존 KPI 개선 문제를 타겟팅하는 하향식 접근을 순환 병행하여 백로그를 도출합니다.",
  "현업에서 '결제 이탈률 감소'라는 명확한 문제(What)는 정해져 있으나 이를 머신러닝으로 풀지 룰 기반으로 풀지 모를 때(How 모름), 파일럿 분석을 거쳐 최적의 해결책을 도출하는 솔루션 과제를 수행합니다.",
  "애자일 데이터 프로젝트 킥오프 시 비즈니스 모델 캔버스와 고객 여정 맵을 활용하여 현업 담당자의 개인적 편향을 배제하고 전사적 임팩트가 큰 핵심 병목 문제를 도출합니다.",
  "데이터 마스터플랜 로드맵 수립 시 엔지니어링 리소스 한계를 극복하기 위해 비즈니스 기대 효과(ROI), 전략적 정합도, 현업 적용 용이성을 3대 축으로 가중치 평가 매트릭스를 작성합니다.",
  "엔터프라이즈 데이터 전환 시 분석 인프라와 툴은 완비되었으나 현업 실무진의 활용 역량과 프로세스 내재화가 부족한 '정착형' 단계에서는 실무 교육과 분석 CoE 지원이 최우선 과제가 됩니다.",
  "전사 데이터 플랫폼 팀을 집중형으로 운영하면 파이프라인 표준화와 전사 데이터 정합성 유지가 수월해지며, 전사 전략 과제에 컴퓨팅 자원과 인력을 집중 투자할 수 있습니다.",
  "데이터 거버넌스 프레임워크 구축 시 현업의 데이터 소비 파이프라인 및 CI/CD 배포 프로세스와 밀접하게 통합해야 메타데이터 카탈로그와 데이터 무결성이 지속 가능하게 관리됩니다.",
  "사내 데이터 혁신 프로젝트 진단 시 단순 툴 도입 비용보다는 실제 분석 데이터의 품질, 인프라 완성도, 데이터 기반 의사결정 문화가 정착되었는지를 다차원 진단 체크리스트로 검증합니다.",
  "서버의 응답 지연 시간(초), 처리 트래픽(Bytes), 결제 금액(원) 등은 절대 영점이 존재하여 2배, 3배의 비율 계산이 가능한 비율척도로서 실시간 모니터링 메트릭으로 가장 널리 집계됩니다.",
  "판다스(Pandas) 데이터 전처리 단계에서 결측치, 이상치, 왜도 등을 시각적으로 확인하는 작업이 EDA이며, 최종 모형 튜닝 후의 정밀도·재현율 평가는 모델 검증 단계에서 수행하여 역할을 분리합니다.",
  "시계열 서버 모니터링 메트릭에서 `Q1 - 1.5 * IQR` 미만이거나 `Q3 + 1.5 * IQR`을 초과하는 스파이크 트래픽을 자동 탐지하여 장애 알림 임계치로 활용합니다.",
  "신규 기능 배포를 위한 A/B 테스트 검정 시 유의수준 알파를 0.05(5%)로 설정하는 것은 기존 기능보다 낫지 않은데도 신규 기능이 낫다고 잘못 판단할 제1종 오류의 최대 허용 상한선입니다.",
  "서비스 로깅 파이프라인에서 샘플링 로그를 추출할 때 표본 크기를 늘리면 표본오차는 줄어들지만, 클라이언트의 네트워크 지연이나 응답 누락으로 인한 비표본오차는 데이터 정제로 극복해야 합니다.",
  "웹 트래픽이나 결제 금액 데이터는 대부분 오른쪽으로 긴 꼬리를 갖는 양의 왜도 분포를 보이므로, 이상치에 취약한 산술평균 대신 중앙값(Median)을 대표 지표로 삼아 모니터링합니다.",
  "대규모 유저 군집화 시 층화추출은 회원 등급별로 균등하게 표본을 추출할 때 사용하며, 군집추출은 지점이나 매장 단위로 통째로 추출하여 현장 조사 비용을 절감할 때 활용합니다.",
  "A/B 테스트 검정 결과 p-값이 0.01로 도출되었다면 귀무가설(차이 없음)이 참일 때 현재와 같은 차이가 관측될 확률이 1%에 불과하므로 귀무가설을 기각하고 신규 기능을 정식 배포합니다.",
  "대시보드 상에서 두 유저 그룹 간 체류 시간 상자 그림의 중앙값 차이가 크더라도, 표본의 변동성을 감안한 2-Sample t-검정을 통해 통계적으로 유의미한지 교차 검증해야 합니다.",
  "고차원 유저 벡터를 주성분분석(PCA)으로 축소할 때 스크리 플롯의 고유값이 급격히 꺾이는 변곡점(Elbow Point)을 찾아 최적의 임베딩 차원 크기를 결정합니다.",
  "회귀 모델의 성능 평가 시 잔차제곱합(SSE)을 잔차 자유도(n - 2)로 나누어 비편향 분산인 MSE를 산출하고, 이를 바탕으로 모델의 일반화 오차 범위를 추정합니다.",
  "피처 간 상관계수가 높은 다중공선성 문제를 방지하기 위해 Scikit-learn의 Ridge(L2) 또는 Lasso(L1) 규제를 적용하거나, 상관된 변수들을 PCA로 합성하여 모형의 불안정성을 해소합니다.",
  "피처 엔지니어링 과정에서 `statsmodels`의 VIF(분산팽창요인)를 계산하여 10을 초과하는 피처들을 단계적으로 제거함으로써 선형 모델의 다중공선성 노이즈를 정제합니다.",
  "서버의 일별 트래픽을 예측하기 위해 시계열 ARIMA 모델을 적용할 때, 먼저 평균과 분산이 일정한지 ADF 단위근 검정을 수행하여 정상성을 사전 확인합니다.",
  "회귀 모델 학습 후 파이썬 statsmodels의 summary()를 출력했을 때, 각 피처의 p-value(`P>|t|`)가 0.05 미만인 변수만을 최종 피처 스토어에 등록하여 서빙 모형을 경량화합니다.",
  "선형 회귀 모델 서빙 전 잔차 플롯과 Q-Q 플롯을 통해 오차항의 정규성, 등분산성, 독립성을 시각적으로 검증하여 통계적 예측 구간의 신뢰성을 확보합니다.",
  "유저의 나이와 결제 금액이 비선형적으로 증가하는 관계를 가질 때, 피어슨 대신 순위 기반 스피어만 상관계수를 적용하여 단조 증가 경향성을 왜곡 없이 측정합니다.",
  "주기적인 스파이크와 우상향 추세를 갖는 비정상 시계열 메트릭은 1차 차분(d=1)을 통해 정상화한 후 ARIMA(p, 1, q) 파이프라인으로 미래 리소스 사용량을 예측합니다.",
  "마케팅 채널(A/B/C)과 구매 전환 여부(전환/이탈)의 두 범주형 변수 간의 독립성을 `scipy.stats.chi2_contingency`로 검정하여 채널별 전환 효과의 유의성을 판정합니다.",
  "정상 시계열은 시차가 커질수록 과거 데이터와의 연관성이 빠르게 소멸하므로, ACF 플롯이 시차 증가에 따라 지수적으로 0에 수렴하는 감쇄 형태를 보입니다.",
  "딥러닝 다중 클래스 분류 모델의 최종 출력층에 Softmax 활성화 함수를 배치하여 각 클래스별 예측 확률의 합이 정확히 1.0(100%)이 되도록 정규화합니다.",
  "앙상블 배깅(Random Forest)은 여러 코어에서 병렬 학습이 가능하여 훈련 속도가 빠르고, 부스팅(LightGBM)은 오분류 샘플에 순차 가중치를 부여하므로 예측 성능이 극대화됩니다.",
  "이진 분류 모델의 로지스틱 회귀 및 신경망 은닉층에서 입력 신호를 0과 1 사이의 확률값으로 부드럽게 매핑하기 위해 Sigmoid 활성화 함수가 기본 빌딩 블록으로 활용됩니다.",
  "이상 거래 탐지(FDS)나 보안 침해 탐지 모델 평가 시 실제 사기 거래 중 탐지한 비율(Recall)과 사기라고 알람을 울린 것 중 진짜 사기인 비율(Precision)의 혼동행렬을 구축하여 평가합니다.",
  "고객 세그먼트가 여러 개의 정규분포 집단으로 혼합되어 있을 때, Scikit-learn의 GaussianMixture 모델에서 EM 알고리즘을 수행하여 각 군집의 평균과 공분산을 반복 수렴 추정합니다.",
  "결정트리 모델 배포 시 과적합을 방지하고 트리의 복잡도를 제어하기 위해 `ccp_alpha`(비용 복잡도 가지치기) 또는 `max_depth` 하이퍼파라미터를 튜닝합니다.",
  "복잡한 기하학적 클러스터나 지리 정보 좌표 데이터를 군집화할 때는 K의 사전 지정 없이 밀도를 기반으로 이상치를 자동 분리하는 DBSCAN 알고리즘을 우선 적용합니다.",
  "K-Means 군집화 적용 전 이상치(Outlier)가 중심점 위치를 크게 왜곡하므로 RobustScaler나 IQR 전처리를 선행하고, Elbow 기법과 실루엣 계수로 적정 K를 선정합니다.",
  "계층적 클러스터링에서 군집 병합 시 발생하는 분산(SSE)의 증가를 최소화하는 와드연결법(`linkage(method='ward')`)은 크기가 유사하고 균등한 구형 군집을 형성하는 데 가장 우수합니다.",
  "연관규칙 마이닝에서 두 상품 A, B의 동시 구매 비율인 지지도(Support)를 먼저 계산하여 최소 지지도(Min Support) 임계치를 넘는 빈발 품목 집합만을 선별합니다."
];

const TAGS_MAP = {
  1: ["seci-model", "knowledge-spiral", "socialization-externalization"],
  2: ["dikw-pyramid", "data-hierarchy", "knowledge-information"],
  3: ["database", "dbms-characteristics", "machine-readability"],
  4: ["privacy", "anonymization", "de-identification"],
  5: ["bigdata-3v", "volume-velocity-variety", "gartner"],
  6: ["association-analysis", "market-basket", "unsupervised-learning"],
  7: ["data-types", "structured-semistructured-unstructured", "json-logs"],
  8: ["bigdata-crisis", "responsibility-principle", "algorithmist"],
  9: ["oltp", "olap", "transaction-processing", "acid"],
  10: ["data-scientist", "soft-skills", "domain-knowledge"],
  11: ["model-complexity", "occams-razor", "overfitting-prevention"],
  12: ["bigdata-applications", "regression-vs-association", "sentiment-analysis"],
  13: ["top-down", "bottom-up", "complementary-approaches"],
  14: ["task-discovery", "solution", "known-what-unknown-how"],
  15: ["problem-discovery", "steep-framework", "business-model-canvas"],
  16: ["master-plan", "strategic-importance", "roi", "priority-evaluation"],
  17: ["maturity-readiness", "readiness-quadrants", "settlement-type"],
  18: ["analytics-organization", "centralized-structure", "coe"],
  19: ["data-governance", "process-integration", "standardization"],
  20: ["readiness-diagnosis", "6-dimensions", "budget-limitation"],
  21: ["measurement-scales", "ratio-scale", "absolute-zero"],
  22: ["eda", "exploratory-data-analysis", "model-evaluation-difference"],
  23: ["box-plot", "iqr", "inner-fence", "outlier-detection"],
  24: ["type-1-error", "type-2-error", "significance-level", "alpha"],
  25: ["sampling-error", "non-sampling-error", "sample-survey"],
  26: ["skewness", "right-skewed", "mean-median-mode-order"],
  27: ["sampling-methods", "cluster-sampling", "stratified-sampling"],
  28: ["p-value", "hypothesis-testing", "null-hypothesis"],
  29: ["box-plot-limitation", "t-test", "statistical-significance"],
  30: ["pca", "scree-plot", "elbow-point", "eigenvalue"],
  31: ["linear-regression", "mse", "sse", "residual-degrees-of-freedom"],
  32: ["multicollinearity", "ridge-lasso", "pca-regression"],
  33: ["vif", "variance-inflation-factor", "multicollinearity-diagnosis"],
  34: ["time-series", "stationarity", "mean-variance-covariance"],
  35: ["regression-summary", "t-statistic", "p-value-coefficients"],
  36: ["residual-assumptions", "linearity-independence-homoscedasticity-normality"],
  37: ["spearman-correlation", "rank-correlation", "monotonic-relation"],
  38: ["arima", "differencing", "stationarity-transformation"],
  39: ["chi-square-test", "contingency-table", "independence-test"],
  40: ["acf", "autocorrelation", "stationarity-decay"],
  41: ["softmax", "activation-function", "multiclass-classification"],
  42: ["ensemble", "bagging", "boosting", "random-forest"],
  43: ["sigmoid", "logistic-activation", "binary-classification"],
  44: ["confusion-matrix", "precision-calculation", "tp-fp"],
  45: ["gmm", "em-algorithm", "latent-variables", "maximum-likelihood"],
  46: ["decision-tree", "pruning", "overfitting-prevention"],
  47: ["clustering-comparison", "dbscan", "som", "gmm"],
  48: ["k-means", "outlier-sensitivity", "centroid-initialization"],
  49: ["ward-method", "hierarchical-clustering", "sse-minimization"],
  50: ["association-rule", "support-calculation", "joint-probability"]
};

const CODE_SNIPPETS = {
  23: `[상자 그림 사분위수 정보]
- 제1사분위수 (Q1): 4
- 제3사분위수 (Q3): 12
---------------------------------------------
사분위범위 (IQR) = Q3 - Q1 = 12 - 4 = 8
하한선 (Lower Fence) = Q1 - 1.5 × IQR = 4 - 12 = -8
상한선 (Upper Fence) = Q3 + 1.5 × IQR = 12 + 12 = 24`,

  31: `[단순 선형 회귀 모형 요약]
- 모형: y = β0 + β1 × x
- 잔차제곱합 (SSE): 20
- 표본 크기 (n): 10
- 잔차 자유도 (DF): n - 2 = 10 - 2 = 8
---------------------------------------------
잔차평균제곱 (MSE) = SSE / (n - 2) = 20 / 8 = 2.50`,

  44: `[이진 분류 모델 혼동 행렬 (Confusion Matrix)]
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ 실제 \\ 예측 │ 예측 True   │ 예측 False  │ 합계        │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ 실제 True   │ 200 (TP)    │ 100 (FN)    │ 300         │
│ 실제 False  │ 300 (FP)    │ 300 (TN)    │ 600         │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ 합계        │ 500         │ 400         │ 900         │
└─────────────┴─────────────┴─────────────┴─────────────┘
* 정밀도(Precision) = TP / (TP + FP) = 200 / 500 = 0.40 (40%)`,

  50: `[편의점 영수증 100건 거래 분석]
- 전체 영수증 거래 건수 (N): 100건
- 품목 A와 B 동시 구매 건수 (n(A ∩ B)): 30건
---------------------------------------------
지지도 Support(A → B) = n(A ∩ B) / N = 30 / 100 = 0.30 (30%)`
};

const newQuestions = [];

for (let i = 1; i <= 50; i++) {
  const sec = sections[i];
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

  const id = `adsp-47-${String(qNum).padStart(3, "0")}`;
  const title = TITLES[qNum] || `47회 기출: 문제 ${qNum}번`;
  const devContext = DEV_CONTEXTS[qNum] || "실무 데이터 분석 및 백엔드 시스템 개발 시 해당 개념을 적용합니다.";
  const tags = TAGS_MAP[qNum] || ["adsp", "47회"];

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

console.log(`Generated ${newQuestions.length} questions for 47회.`);

// Read existing adsp.json
const existing = JSON.parse(fs.readFileSync(adspJsonPath, "utf-8"));
console.log(`Existing questions count: ${existing.length}`);

// Remove any existing adsp-47-* questions if present
const filtered = existing.filter(q => !q.id.startsWith("adsp-47-"));
const combined = [...filtered, ...newQuestions];

fs.writeFileSync(adspJsonPath, JSON.stringify(combined, null, 2), "utf-8");
console.log(`Updated ${adspJsonPath}. New total questions count: ${combined.length}`);
