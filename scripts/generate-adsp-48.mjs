import fs from "node:fs";
import path from "node:path";

const mdPath = "data/mindmaps/adsp/기출/adsp_48.md";
const adspJsonPath = "data/questions/adsp.json";

const content = fs.readFileSync(mdPath, "utf-8");
const sections = content.split(/\n###\s+/);

const TITLES = [
  "", // 0 index dummy
  "48회 기출 (2026년): SECI 모델 지식 변환 과정 (연결화)",
  "48회 기출 (2026년): 정량적 데이터와 정성적 데이터의 특성",
  "48회 기출 (2026년): 데이터베이스(DB)와 DBMS의 정의 및 개념",
  "48회 기출 (2026년): 데이터베이스의 핵심 목적과 공용·동적 특성",
  "48회 기출 (2026년): 공부 시간과 시험 성적 간의 인과관계 회귀분석",
  "48회 기출 (2026년): 빅데이터 시대의 3대 위기 요인 (사생활, 책임, 오용)",
  "48회 기출 (2026년): 빅데이터 가치 창출 3요소 (데이터, 인력, 기술)",
  "48회 기출 (2026년): 데이터 사이언티스트 직무와 알고리즈미스트 역할",
  "48회 기출 (2026년): 데이터 사이언티스트의 하드 스킬과 소프트 스킬",
  "48회 기출 (2026년): 빅데이터 가치 패러다임 변화 (디지털화-연결-에이전시)",
  "48회 기출 (2026년): 분석 과제 발굴 4사분면 (What 모름, How 앎 = Insight)",
  "48회 기출 (2026년): CRISP-DM 방법론의 데이터 준비(Data Preparation) 단계",
  "48회 기출 (2026년): 상향식(Bottom-Up) 접근법과 비지도 학습",
  "48회 기출 (2026년): 데이터 분석 프로젝트의 품질 관리 (품질 검토와 보증)",
  "48회 기출 (2026년): 분석 과제 우선순위 결정 기준 (시급성 vs 난이도)",
  "48회 기출 (2026년): 데이터 분석 성숙도 모델과 CMMI 프레임워크",
  "48회 기출 (2026년): 분석 마스터플랜 우선순위 평가 기준 (중요도/ROI/용이성)",
  "48회 기출 (2026년): 데이터 분석 수준 진단 (분석 준비도 6대 영역)",
  "48회 기출 (2026년): 분석 조직 구조 3대 유형 (집중형, 기능형, 분산형)",
  "48회 기출 (2026년): 전사 데이터 거버넌스(Governance) 핵심 관리 체계",
  "48회 기출 (2026년): 상자 그림(Box Plot) 해석 및 관측치 수 한계",
  "48회 기출 (2026년): 데이터 전처리 이상값(Outlier) 식별 기준과 IQR 1.5",
  "48회 기출 (2026년): 통계적 추론 원리와 다양한 검정통계량 적용",
  "48회 기출 (2026년): 선형 회귀 모형 적합도 검증과 F검정/결정계수",
  "48회 기출 (2026년): 척도의 4가지 유형과 절대 영점이 없는 등간척도",
  "48회 기출 (2026년): 통계적 가설검정 원리와 유의확률(p-값)의 기각 기준",
  "48회 기출 (2026년): 분할표를 활용한 교차분석과 범주형 변수 독립성 검정",
  "48회 기출 (2026년): 피어슨 상관계수의 선형변환 불변성 성질",
  "48회 기출 (2026년): 회귀 잔차도의 U자형 곡선 패턴과 다항 회귀 모형",
  "48회 기출 (2026년): 표본 통계적 추론의 점추정과 구간추정(표준오차)",
  "48회 기출 (2026년): 독립표본 t-검정 결과 해석 (p-값 0.073과 귀무가설 채택)",
  "48회 기출 (2026년): 주성분분석(PCA)의 주성분별 설명 분산 크기 순서",
  "48회 기출 (2026년): 다중 회귀분석 결과표 해석과 수정된 결정계수",
  "48회 기출 (2026년): 로지스틱 회귀분석(GLM)의 로짓 연결 함수(Link Function)",
  "48회 기출 (2026년): 수치형 변수 상관계수 음수와 반비례의 통계적 차이",
  "48회 기출 (2026년): 시계열 분해법(Decomposition)의 4대 구성 요인",
  "48회 기출 (2026년): 단순 선형 회귀분석 잔차 자유도와 회귀계수 통계적 유의성",
  "48회 기출 (2026년): 비정상 시계열의 평균 정상화 변환 기법 (차분)",
  "48회 기출 (2026년): 머신러닝 데이터 분할과 검증(Val) vs 평가(Test) 역할",
  "48회 기출 (2026년): 정형 데이터마이닝 5단계 표준 수행 절차",
  "48회 기출 (2026년): 의사결정나무(Decision Tree) 모형 특성과 회귀나무 오차",
  "48회 기출 (2026년): 인공신경망 가중합 비선형 변환 활성화 함수(Activation)",
  "48회 기출 (2026년): 공분산 및 상관관계를 반영한 마할라노비스 거리",
  "48회 기출 (2026년): 이진분류 정밀도와 재현율의 조화평균 (F1-Score)",
  "48회 기출 (2026년): 연관규칙 분석 핵심 지표인 지지도(Support) 산출 공식",
  "48회 기출 (2026년): 독립 사건 확률 계산과 레코드 결측치 제거 확률",
  "48회 기출 (2026년): 계층적 군집분석 오차제곱합(SSE) 최소화 와드연결법",
  "48회 기출 (2026년): 비지도 학습 유사도 기반 군집 탐색 (K-Means)",
  "48회 기출 (2026년): 마트 거래 연관규칙 신뢰도(Confidence) 조건부 확률 계산",
  "48회 기출 (2026년): 연관규칙 향상도(Lift) 기준값(1)과 품목 간 보완 관계"
];

const DEV_CONTEXTS = [
  "",
  "개발 조직 내 Confluence 위키나 엔지니어링 플레이북을 구축하는 작업은 개별 개발자의 암묵지를 전사 공유 가능한 형식지로 변환(표출화) 및 통합 체계화(연결화)하는 대표적인 SECI 모델 사례입니다.",
  "RDBMS의 정규화된 테이블 컬럼에 저장되는 숫자·날짜 등은 '정량적 데이터'이며, S3에 적재되는 비정형 애플리케이션 로그, 사용자 리뷰 텍스트, 음성 파일 등은 전처리 비용이 큰 '정성적 데이터'에 해당합니다.",
  "실무 백엔드 개발에서 순수 파일 시스템(CSV/JSON) 직접 입출력 대신 PostgreSQL, MySQL과 같은 DBMS를 사용하는 이유는 ACID 트랜잭션 보장, 동시성 제어, 인덱싱 최적화가 필수적이기 때문입니다.",
  "엔터프라이즈 마이크로서비스 아키텍처에서는 다수의 서비스 인스턴스가 PgBouncer 커넥션 풀을 통해 동일 DB 클러스터에 동시 접근(공용 데이터)하며, MVCC 격리 수준을 통해 실시간 CRUD 동적 변경을 안전하게 처리합니다.",
  "서버의 동시 요청 수(독립변수)에 따른 API 응답 지연 시간(종속변수) 추이를 Scikit-learn LinearRegression으로 모델링하여 오토스케일링 임계치를 산정할 때 회귀분석이 활용됩니다.",
  "EU GDPR 및 개인정보보호법 준수를 위해 백엔드 개발 시 주민번호/카드번호의 SHA-256 일방향 해시 및 AES-256 암호화(익명화/가명화)를 적용하여 데이터 유출 위기에 선제 대응합니다.",
  "클라우드 모던 데이터 스택(MDS) 구축 시 Snowflake/BigQuery(기술), Data Warehouse/Lakehouse(데이터), 그리고 dbt와 분석을 주도하는 데이터 엔지니어/분석가(인력)의 유기적 결합이 핵심입니다.",
  "최근 LLM 서비스 배포 시 프롬프트 인젝션 방어, 편향성 완화, AI 윤리 가이드라인 준수 및 사용자 피해 보상 체계를 전담 설계하는 AI 거버넌스 및 알고리즈미스트 역할의 중요성이 급증하고 있습니다.",
  "데이터 엔지니어에게 Python, SQL, Spark, 분산 인프라 지식은 필수 하드 스킬이며, 기획자 및 비즈니스 의사결정권자에게 분석 가치를 설득하고 조율하는 커뮤니케이션 능력은 소프트 스킬입니다.",
  "과거 단순 웹 DB 기록(디지털화)에서 IoT 센서 및 Kafka 실시간 스트리밍(연결)을 거쳐, 현재는 LLM 기반 Agent가 유저 요청을 자율 수행하는(에이전시) 방향으로 백엔드 시스템 패러다임이 진화했습니다.",
  "기존 서비스 로그는 방대하게 쌓여있으나 개선 포인트를 특정하지 못했을 때(How는 알지만 What을 모를 때), 사용자 이탈 원인을 찾기 위해 진행하는 코호트 탐색적 데이터 분석(EDA)이 통찰(Insight) 과제입니다.",
  "데이터 파이프라인 개발 시 원천 데이터 탐색(EDA)은 데이터 이해 단계에서 완료하며, dbt나 Airflow를 통해 결측치 대치, 타입 캐스팅, 원-핫 인코딩 등 최종 Feature를 생성하는 과정이 데이터 준비 단계입니다.",
  "고객 구매 이력이나 서버 접속 로그의 숨겨진 이상 패턴을 사전에 정의된 라벨 없이 발견하고자 할 때는 비지도 학습 기반의 군집 분석(K-Means, DBSCAN)이나 Isolation Forest를 적용합니다.",
  "지속적 통합(CI/CD) 파이프라인에서 SonarQube 정적 코드 분석과 Great Expectations 데이터 무결성 검증을 상시 수행하여 개발 전 과정에서 품질 보증(QA) 및 검토(QC)를 자동화합니다.",
  "애자일 스프린트 백로그 관리 시 비즈니스 임팩트(시급성)와 구현 공수/기술 난이도(복잡도)를 매트릭스로 평가하여 Quick-Win 과제를 1순위로 배분합니다.",
  "엔터프라이즈 데이터 플랫폼 구축 시 조직의 데이터 거버넌스 성숙도를 진단하고, 데이터 품질/메타데이터 관리 체계를 도입-활용-확산-최적화 단계로 점진 고도화합니다.",
  "데이터 마스터플랜 수립 시 아키텍처 도입 비용 대비 비즈니스 기여도(ROI), 전략적 우선순위, 현업 개발팀의 적용 용이성을 가중 평가하여 마일스톤을 확정합니다.",
  "기업이 AI/빅데이터 인프라를 도입하기 전 사내 데이터 자산 현황, 파이프라인 인프라, 전담 인력 유무, 데이터 기반 의사결정 문화를 점검하는 사전 진단 체크리스트를 실행합니다.",
  "데이터 조직 구성 시 초기에는 중앙 집중형 플랫폼 팀으로 시작하여 파이프라인을 표준화한 뒤, 비즈니스 확장에 맞춰 각 도메인 스쿼드에 분석가를 전진 배치하는 분산형/데이터 메시(Data Mesh) 형태로 진화합니다.",
  "대규모 분산 시스템 환경에서 Apache Atlas나 OpenMetadata를 연동하여 전사 메타데이터 정합성, 데이터 카탈로그, 스키마 변경 이력을 표준화된 거버넌스로 통제합니다.",
  "웹 대시보드(Chart.js, Recharts) 개발 시 박스플롯은 데이터의 분위수와 왜도를 효과적으로 보여주지만 샘플 수($N$)를 숨기므로, 툴팁이나 서브 라벨로 표본 크기를 함께 표기하는 UI 패턴이 권장됩니다.",
  "판다스(Pandas) 전처리 파이프라인에서 `df['val'].quantile(0.75) + 1.5 * IQR` 범위를 벗어나는 이상치를 탐지하여 윈저라이징(Clipping)하거나 모델 노이즈 제거용으로 필터링합니다.",
  "서비스 A/B 테스트 검정 시 전환율(범주형)에는 카이제곱 검정을, 체류시간(연속형)에는 2-Sample t-검정을 적용하듯 데이터의 형태와 분산 조건에 맞춰 적합한 검정통계량을 선택해야 합니다.",
  "Statsmodels OLS 라이브러리로 선형 회귀 모형을 학습시킨 후 `f_pvalue`를 통해 전체 모형의 유효성을 검증하고, 잔차의 Q-Q 플롯을 통해 오차항의 정규성을 확인합니다.",
  "서버의 CPU 온도나 섭씨 온도는 절대 영점이 없는 등간척도이므로 20℃가 10℃보다 2배 뜨겁다고 연산할 수 없으며, 요청 처리 시간(초)이나 트래픽 용량(Byte)은 비율 연산이 가능한 비율척도입니다.",
  "신규 기능 릴리즈 A/B 테스트에서 유의확률(p-value)이 유의수준 0.05보다 작을 때 귀무가설(효과 없음)을 기각하고 신규 UI가 유의미하게 전환율을 높였다고 판정합니다.",
  "결제 수단(신용카드, 간편결제, 계좌이체)과 구매 완료 여부(성공/이탈)의 두 범주형 변수 간 독립성 여부를 검증할 때 `scipy.stats.chi2_contingency`를 활용합니다.",
  "Scikit-learn의 StandardScaler(Z-Score)나 MinMaxScaler를 적용하여 입력 Feature에 선형 변환($aX+b$)을 적용해도 두 변수 간 피어슨 상관계수 값은 수학적으로 불변합니다.",
  "회귀 모델 학습 후 잔차 플롯이 곡선 형태를 띨 경우 독립변수와 종속변수 간 비선형 상호작용이 존재함을 뜻하므로 `PolynomialFeatures(degree=2)`를 추가하여 다항 회귀로 개선합니다.",
  "실시간 모니터링 대시보드에서 서버 응답속도 평균(점추정)만 표기하기보다, 95% 신뢰구간([Min, Max])을 함께 시각화해야 트래픽 변동에 따른 오차 범위를 안전하게 모니터링할 수 있습니다.",
  "두 결제 모듈 간 결제 소요시간을 t-검정한 결과 p-값이 0.073(> 0.05)으로 나왔다면, 두 모듈 간 유의미한 속도 차이가 존재한다고 단정할 수 없으므로 기존 모듈을 유지하는 근거가 됩니다.",
  "고차원 로그 임베딩 벡터를 PCA로 차원 축소할 때 고유값(Eigenvalue)이 가장 큰 첫 번째 주성분이 원본 데이터의 분산을 가장 많이 보존하므로 설명 분산 비율을 기준으로 차원 수를 결정합니다.",
  "다중 선형 회귀에서 불필요한 무의미한 독립변수가 추가되더라도 $R^2$는 기계적으로 증가하므로, 변수 개수에 페널티를 부과하는 수정된 결정계수(Adjusted $R^2$)를 기준으로 서빙 모델을 선택합니다.",
  "PyTorch 등 딥러닝 프레임워크에서 이진 분류 모델 출력단에 `nn.BCEWithLogitsLoss`를 사용하는 것은 로짓(Logit) 선형 결합값을 내부적으로 안정적인 시그모이드 확률로 매핑하기 위함입니다.",
  "상관계수 $r = -0.8$은 음의 선형 경향성을 의미할 뿐 $y = k/x$와 같은 반비례 곡선 관계를 나타내는 것이 아니므로 두 개념을 혼동하지 않도록 유의합니다.",
  "시계열 메트릭(예: 일별 활성 사용자 수) 분석 시 `statsmodels.tsa.seasonal_decompose`를 사용하여 장기 추세(Trend), 요일별 주기(Seasonal), 잔차(Irregular)로 분해하여 비즈니스 원인을 분석합니다.",
  "회귀 분석 요약표에서 잔차 자유도는 $n - p - 1$로 계산되며, 자유도와 추정 계수 개수를 역산하여 학습에 사용된 전체 로그 레코드 수($n$)를 검증할 수 있습니다.",
  "서버 일일 트래픽이 꾸준히 우상향하는 비정상 시계열 데이터는 이전 시점 값과의 차이(`df.diff()`)를 구하는 1차 차분을 통해 평균이 일정한 정상 시계열로 변환한 후 ARIMA 모형에 투입합니다.",
  "ML 파이프라인 구축 시 하이퍼파라미터 튜닝은 검증(Validation) 세트로 수행하고, 모델 배포 전 최종 일반화 성능 평가는 모델 학습 과정에 전혀 관여하지 않은 평가(Test) 세트로만 측정하여 데이터 누수를 방지합니다.",
  "표준 MLOps 파이프라인은 비즈니스 문제 정의 -> 원천 데이터 수집/적재 -> 특성 엔지니어링 및 가공 -> 모델 학습/알고리즘 적용 -> 검증 및 모니터링의 5단계 순서로 파이프라인을 구축합니다.",
  "Scikit-learn의 DecisionTreeRegressor는 리프 노드에 속한 샘플들의 평균값으로 연속형 값을 예측하므로, 실제 연속값과의 차이(잔차)가 반드시 존재하며 100% 무오차 모형 구축은 불가능합니다.",
  "신경망의 각 퍼셉트론에서 입력 가중합($\sum w_i x_i + b$)에 ReLU, GELU, Sigmoid와 같은 활성화 함수를 통과시키는 이유는 신경망에 비선형 표현력을 부여하기 위함입니다.",
  "다변량 서버 이상 징후 탐지 시 CPU 사용률과 네트워크 I/O처럼 단위가 다르고 상관관계가 존재하는 메트릭 간의 이상 거리를 계산할 때 마할라노비스 거리가 표준적으로 사용됩니다.",
  "이상 거래 탐지(FDS)나 보안 침해 탐지처럼 정상 데이터가 99.9%인 불균형 데이터셋에서는 단순 정확도 대신 정밀도와 재현율의 조화평균인 F1-Score를 메인 지표로 삼아 평가합니다.",
  "추천 시스템에서 두 상품 A, B를 묶음 상품으로 추천하기 위해 전체 장바구니 거래 중 A와 B가 동시에 결제된 비율($P(A \cap B)$)인 지지도(Support)를 먼저 필터링합니다.",
  "SQL 데이터 파이프라인에서 `WHERE col1 IS NOT NULL AND col2 IS NOT NULL` 조건으로 레코드를 필터링할 때, 두 컬럼의 결측이 독립이라면 정상 레코드 비율은 $0.9 \times 0.9 = 0.81$이 되어 19%가 필터링됩니다.",
  "고객 세그멘테이션을 위한 계층적 군집분석 시 Scipy의 `scipy.cluster.hierarchy.linkage(method='ward')`를 사용하여 군집 내 분산 증가를 최소화하는 와드법을 가장 널리 활용합니다.",
  "비지도 학습 환경에서 고객의 로그 행동 벡터나 비정형 텍스트 임베딩을 유사한 특성을 지닌 K개의 대표 세그먼트로 자동 군집화할 때 Scikit-learn의 KMeans 클러스터링을 적용합니다.",
  "장바구니 추천 규칙에서 A 상품을 장바구니에 담은 유저 중 50%가 B 상품도 함께 담았다면, 규칙 $A \rightarrow B$의 신뢰도(Confidence)는 0.5가 되며 개인화 추천 엔진의 신뢰도 임계치로 활용됩니다.",
  "추천 규칙 평가 시 향상도(Lift)가 1보다 큰 규칙($\text{Lift} > 1$)만을 추출하여, A 상품 구매가 B 상품 구매 확률을 실질적으로 증대시키는 유의미한 상호 보완 상품을 선별합니다."
];

const TAGS_MAP = {
  1: ["seci-model", "implicit-knowledge", "explicit-knowledge", "combination"],
  2: ["quantitative-data", "qualitative-data", "data-property"],
  3: ["database", "dbms", "database-system"],
  4: ["shared-data", "dynamic-change", "dbms-properties"],
  5: ["regression-analysis", "cause-and-effect", "statistical-modeling"],
  6: ["bigdata-crisis", "privacy", "responsibility", "data-misuse"],
  7: ["bigdata-value", "data-people-technology", "value-creation"],
  8: ["data-scientist", "algorithmist", "ai-ethics"],
  9: ["hard-skill", "soft-skill", "data-science-capabilities"],
  10: ["value-paradigm", "digitalization", "connection", "agency"],
  11: ["insight", "discovery", "solution", "optimization", "task-discovery"],
  12: ["crisp-dm", "data-preparation", "eda", "data-cleaning"],
  13: ["bottom-up", "unsupervised-learning", "pattern-discovery"],
  14: ["quality-management", "quality-assurance", "quality-control"],
  15: ["priority-matrix", "urgency", "difficulty"],
  16: ["maturity-model", "cmmi", "competency-assessment"],
  17: ["master-plan", "strategic-importance", "roi", "priority-criteria"],
  18: ["readiness", "6-dimensions", "capability-diagnosis"],
  19: ["organization-structure", "centralized", "functional", "distributed"],
  20: ["data-governance", "standardization", "metadata", "repository"],
  21: ["box-plot", "quartiles", "sample-size-limitation"],
  22: ["outlier", "iqr", "trimming", "imputation"],
  23: ["statistical-inference", "test-statistic", "hypothesis-testing"],
  24: ["linear-regression", "f-statistic", "r-squared", "model-fit"],
  25: ["scale-measurement", "interval-scale", "ratio-scale", "absolute-zero"],
  26: ["hypothesis-testing", "p-value", "null-hypothesis", "type-1-error"],
  27: ["cross-tabulation", "chi-square", "categorical-variable"],
  28: ["pearson-correlation", "linear-transformation", "invariance"],
  29: ["residual-plot", "non-linearity", "polynomial-regression"],
  30: ["point-estimation", "interval-estimation", "standard-error"],
  31: ["t-test", "p-value", "null-hypothesis-retention"],
  32: ["pca", "principal-component", "variance-ordering", "dimension-reduction"],
  33: ["multiple-regression", "adjusted-r-squared", "p-value"],
  34: ["logistic-regression", "link-function", "logit", "sigmoid"],
  35: ["correlation-coefficient", "inverse-proportion", "linear-relation"],
  36: ["time-series", "decomposition", "trend-seasonal-cyclical-irregular"],
  37: ["residual-degrees-of-freedom", "intercept-p-value", "sample-size"],
  38: ["stationarity", "differencing", "trend-removal"],
  39: ["data-split", "train-validation-test", "generalization"],
  40: ["data-mining-steps", "modeling", "evaluation"],
  41: ["decision-tree", "regression-tree", "purity", "entropy-gini"],
  42: ["artificial-neural-network", "activation-function", "weighted-sum"],
  43: ["mahalanobis-distance", "covariance-matrix", "scale-invariance"],
  44: ["f1-score", "precision-recall", "harmonic-mean", "class-imbalance"],
  45: ["association-rule", "support", "joint-probability"],
  46: ["missing-values", "independent-events", "probability-calculation"],
  47: ["hierarchical-clustering", "ward-method", "sse-minimization"],
  48: ["k-means", "unsupervised-learning", "clustering"],
  49: ["association-rule", "confidence", "conditional-probability"],
  50: ["association-rule", "lift", "independence", "complementary-relation"]
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

  // If there are premise lines, append them to the question text
  if (premiseLines.length > 0) {
    const formattedPremise = premiseLines.map(l => l.replace(/^(\*|-)\s+/, "")).join("\n");
    questionText += `\n\n[보기]\n${formattedPremise}`;
  }

  // Options cleaned
  const options = optionLines.map(l => l.replace(/^[1-4]\.\s*/, "").trim());

  let category = "adsp-understanding";
  if (qNum >= 11 && qNum <= 20) {
    category = "adsp-planning";
  } else if (qNum >= 21) {
    category = "adsp-analysis";
  }

  const id = `adsp-48-${String(qNum).padStart(3, "0")}`;
  const title = TITLES[qNum] || `48회 기출: 문제 ${qNum}번`;
  const devContext = DEV_CONTEXTS[qNum] || "실무 데이터 파이프라인 및 백엔드 시스템 개발 시 해당 개념을 적용합니다.";
  const tags = TAGS_MAP[qNum] || ["adsp", "48회"];

  // Options breakdown
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

  newQuestions.push(item);
}

console.log(`Generated ${newQuestions.length} questions.`);

// Read existing adsp.json
const existing = JSON.parse(fs.readFileSync(adspJsonPath, "utf-8"));
console.log(`Existing questions count: ${existing.length}`);

// Remove any existing adsp-48-* questions if present
const filtered = existing.filter(q => !q.id.startsWith("adsp-48-"));
const combined = [...filtered, ...newQuestions];

fs.writeFileSync(adspJsonPath, JSON.stringify(combined, null, 2), "utf-8");
console.log(`Updated ${adspJsonPath}. New total questions count: ${combined.length}`);
