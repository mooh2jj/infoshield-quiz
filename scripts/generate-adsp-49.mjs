import fs from "node:fs";

const mdPath = "data/mindmaps/adsp/기출/adsp_49.md";
const adspJsonPath = "data/questions/adsp.json";

const content = fs.readFileSync(mdPath, "utf-8");
const sections = content.split(/\n###\s+/);

const TITLES = [
  "",
  "49회 기출 (2026년): 데이터웨어하우스(DW)와 부서별 데이터 마트(DM)의 범위 및 차이점",
  "49회 기출 (2026년): SECI 모델 암묵지를 형식지로 명문화하는 표출화(Externalization)",
  "49회 기출 (2026년): DIKW 피라미드 계층 구조 (데이터➔정보➔지식➔지혜)와 단계별 정의",
  "49회 기출 (2026년): DIKW 계층 구조 사례 구분 (내수 비중 통계 = 정보 Information)",
  "49회 기출 (2026년): 데이터베이스 정보 관리 측면의 특성 (계속적인 변화 Continuous Evolution)",
  "49회 기출 (2026년): 데이터베이스 및 DBMS 구조 (다양한 비관계형 NoSQL 구조 지원)",
  "49회 기출 (2026년): 트랜잭션 무결성 OLTP vs 다차원 이력 분석 OLAP 특성 비교",
  "49회 기출 (2026년): 빅데이터 3대 위기 요인과 통제 기제 (책임 원칙 및 알고리즈미스트)",
  "49회 기출 (2026년): 디지털 시스템 데이터 저장 용량 단위 계층 순서 (Byte부터 PB까지)",
  "49회 기출 (2026년): 생물학적 진화 원리를 모방한 최적화 탐색 기법 (유전 알고리즘 GA)",
  "49회 기출 (2026년): 분석 과제 발굴 4사분면 매트릭스 (What 앎/모름 x How 앎/모름)",
  "49회 기출 (2026년): 빅데이터 분석 방법론 평가 및 전개 단계의 운영 모니터링 계획",
  "49회 기출 (2026년): 위험 관리를 동반하며 점진적으로 개발하는 나선형 모델(Spiral Model)",
  "49회 기출 (2026년): 분석 품질 관리 과녁판 비유 (반복 측정 안정성 = 정밀도 Precision)",
  "49회 기출 (2026년): 데이터 자체 탐색을 통한 새로운 패턴과 과제 발굴 (상향식 접근법)",
  "49회 기출 (2026년): 명확한 목표와 가설 검증으로부터 출발하는 하향식 접근법(Top-Down)",
  "49회 기출 (2026년): 현대 데이터 분석 과제 발굴에서 하향식과 상향식의 유기적 융합",
  "49회 기출 (2026년): 전사적 의사결정을 지원하는 정보 시스템(Information System)의 목적",
  "49회 기출 (2026년): 전사 분석 전담 부서(CoE) 중심의 집중형 조직 구조 (Centralized)",
  "49회 기출 (2026년): 협의의 분석 플랫폼 핵심 도구 및 소프트웨어 계층 구성 요소",
  "49회 기출 (2026년): 두 수치형(연속형) 변수 간 상관관계와 패턴 시각화 (산점도 Scatter Plot)",
  "49회 기출 (2026년): 통계적 가설검정 p-값 판정 기준과 유의수준(제1종 오류 최대 허용치)",
  "49회 기출 (2026년): 연속확률분포 확률밀도함수(PDF) 면적(적분=1)과 함수 높이 특성",
  "49회 기출 (2026년): 단순 선형 회귀모형 결정계수(R²)의 정의와 평균 예측 기준값(0)",
  "49회 기출 (2026년): 표본추출 기법 비교 (집락추출: 군집 내 이질, 군집 간 동질)",
  "49회 기출 (2026년): 상자그림(Box Plot) 이상값 식별과 비즈니스 목적별 이상치 처리 원칙",
  "49회 기출 (2026년): 이산확률변수 확률분포표 기반 기댓값 E(X) 산출 계산 (13/6)",
  "49회 기출 (2026년): 선형 변환(Z = aX + b) 시 통계량의 불변성 (왜도 Skewness 불변)",
  "49회 기출 (2026년): 선형 변환에 따른 피어슨 상관계수 크기와 부호 변화 (r = -0.2)",
  "49회 기출 (2026년): 이원배치 분산분석(Two-Way) 및 두 집단 t-검정과 F-검정 동등성(F = t²)",
  "49회 기출 (2026년): 시계열 데이터의 정상성(Stationarity) 3대 조건과 독립성 오답 구분",
  "49회 기출 (2026년): R summary() 수면 시간 사분위수 결과표 통계적 해석",
  "49회 기출 (2026년): 머신러닝 모형 유형 구분 (다중 선형 회귀 = 수치 예측 회귀 모형)",
  "49회 기출 (2026년): 사분위범위(IQR) 기반 이상치 판별 하한선/상한선 수식 계산",
  "49회 기출 (2026년): 시계열 4대 변동 요인 중 불규칙 변동(Irregular)의 우연적 잡음 특성",
  "49회 기출 (2026년): 고차원 개체 간 거리를 저차원에 시각화하는 다차원 척도법(MDS)",
  "49회 기출 (2026년): 표본오차(표본 크기 증가 시 감소)와 비표본오차의 특성 비교",
  "49회 기출 (2026년): 비지도 학습 군집분석(Clustering)의 본질적 목표 (유사도 기반 그룹화)",
  "49회 기출 (2026년): 이산확률분포와 대기 시간을 다루는 연속형 지수분포(Exponential) 구분",
  "49회 기출 (2026년): 다수의 약한 학습기를 결합하여 일반화 성능을 높이는 앙상블 학습",
  "49회 기출 (2026년): 서포트 벡터 머신(SVM) 초평면, 최대 마진 및 커널 트릭의 고차원 매핑",
  "49회 기출 (2026년): 결측치가 포함된 관측치를 통째로 제거하는 완전 분석법(Complete Analysis)",
  "49회 기출 (2026년): 인공신경망 은닉층 깊이 증가에 따른 기울기 소실(Vanishing Gradient) 위험",
  "49회 기출 (2026년): 혼동 행렬 기반 양성 클래스 F1-Score 조화평균 계산 (6/19)",
  "49회 기출 (2026년): 의사결정나무 불순도 지표 (지니지수·엔트로피 작을수록 순수도 높음)",
  "49회 기출 (2026년): 단일 클래스로만 구성된 완전 순수 노드의 지니지수 및 엔트로피 값 (0)",
  "49회 기출 (2026년): 군집 내 오차제곱합(SSE) 증가량을 최소화하는 와드 연결법(Ward's Linkage)",
  "49회 기출 (2026년): 격자 경로 맨해튼 거리(L1)와 최단 직선 유클리드 거리(L2)의 크기 관계",
  "49회 기출 (2026년): 100건 마트 영수증 연관규칙 기저귀➔맥주 신뢰도(Confidence) 계산 (0.67)",
  "49회 기출 (2026년): 100건 마트 영수증 연관규칙 기저귀➔맥주 지지도(Support) 계산 (0.34)"
];

const DEV_CONTEXTS = [
  "",
  "엔터프라이즈 데이터 레이크하우스 구축 시 전사 DW(BigQuery/Snowflake)에 전체 팩트 테이블을 보관하고, 현업 마케팅팀의 실시간 대시보드 서빙 지연을 줄이기 위해 전용 데이터 마트(Data Mart)를 분리 구성합니다.",
  "사내 시니어 아키텍트의 경험적 장애 해결 노하우(암묵지)를 Notion이나 Confluence 기술 문서(형식지)로 표출화(Externalization)하여 온보딩 속도와 시스템 복원력을 높입니다.",
  "데이터 엔지니어링 파이프라인에서 센서의 원시 수치는 Data, 이를 시간별 집계하여 평균 온도로 가공한 것은 Information, 임계치 초과 시 장비 과열 패턴을 도출한 것은 Knowledge에 대응됩니다.",
  "비즈니스 리포팅 대시보드에서 단순 집계된 매출 및 점유율 수치는 Information에 불과하며, 이를 기반으로 사업 포트폴리오를 다변화하는 실행 로직이 Wisdom 단계에 속합니다.",
  "프로덕션 RDBMS에서 사용자 상태와 결제 잔액은 항상 최신 무결성을 유지해야 하므로, 지속적인 트랜잭션 갱신을 지원하는 계속적인 변화(Continuous Evolution) 특성이 보장됩니다.",
  "마이크로서비스 아키텍처에서는 결제 및 주문은 RDBMS로, 유저 소셜 관계망은 Neo4j(그래프), 세션 캐시는 Redis(Key-Value), 로그 저장은 MongoDB/ES(문서) 등 목적별 다차원 DB를 조합합니다.",
  "결제 및 주문 처리는 ACID 트랜잭션 무결성을 보장하는 OLTP로 처리하고, 일별 매출 분석 및 고객 세그먼트 분석은 분석 전용 OLAP(ClickHouse/Redshift)로 분리 서빙합니다.",
  "대출 심사나 채용 AI 모델 배포 시 편향과 오작동으로 인한 피해를 방지하기 위해 모델의 설명가능성(XAI)과 알고리즈미스트의 사후 감사 로깅을 거버넌스 파이프라인에 필수 통합합니다.",
  "클라우드 오브젝트 스토리지(S3) 용량 산정 및 네트워크 대역폭 비용 계산 시 Byte, KB, MB, GB, TB, PB 단위의 2진/10진 환산 기준을 명확히 정의합니다.",
  "복잡한 물류 배송 경로 최적화(TSP)나 반도체 칩 배치 설계 시 목적 함수의 탐색 공간이 방대할 때 유전 알고리즘(Genetic Algorithm)의 교차와 돌연변이 연산으로 근사 최적해를 도출합니다.",
  "분석 과제 킥오프 시 목표(What)는 명확하나 분석 기법(How)이 미정인 '솔루션(Solution)' 과제인지, 둘 다 모르는 '발견(Discovery)' 과제인지를 4사분면 매트릭스로 규정합니다.",
  "MLOps 배포 파이프라인 구축 시 모델 서빙 직후 Prometheus와 Evidently를 연동하여 입력 데이터 드리프트(Data Drift)와 성능 저하를 감시하는 운영 모니터링 계획을 수립합니다.",
  "대규모 분산 시스템 아키텍처 설계 시 초기 요구사항의 불확실성을 완화하기 위해 나선형 모델(Spiral Model)의 점진적 위험 분석과 프로토타이핑 스프린트를 반복 적용합니다.",
  "센서 모니터링이나 모델 평가 시 타겟 중심에 얼마나 일치하는가(Accuracy)와 반복 측정 시 분산이 얼마나 일관되게 좁은가(Precision)를 분리하여 SLA 메트릭을 수립합니다.",
  "신규 앱 서비스 런칭 초기에는 명확한 가설이 없으므로 유저 행동 로그에서 비지도 학습(상향식 Bottom-Up)을 수행하여 사용자 군집 페르소나와 숨겨진 니즈를 발굴합니다.",
  "핵심 KPI(이탈률 5% 감축 등)가 명확히 수립된 엔터프라이즈 환경에서는 하향식 접근법(Top-Down)을 통해 가설을 수립하고 단계별 회귀/분류 모델을 학습·검증합니다.",
  "애자일 데이터 프로젝트에서는 현업의 비즈니스 KPI를 타겟팅하는 하향식 프레임워크와, 로그 데이터의 비지도 마이닝에서 새로운 인사이트를 얻는 상향식 탐색을 순환 결합합니다.",
  "엔터프라이즈 데이터 거버넌스 구축 시 정보 시스템(IS)의 데이터 수집, 파이프라인 처리, 카탈로그화, 권한 제어를 통합하여 데이터 기반의 객관적 의사결정을 실시간 지원합니다.",
  "전사 데이터 플랫폼을 집중형(Centralized) 조직으로 운영하면 파이프라인 표준화와 메타데이터 정합성 유지가 수월해지고, 전사 핵심 전략 과제에 컴퓨팅 자원을 집중할 수 있습니다.",
  "사내 머신러닝 플랫폼(Kubeflow 등) 구축 시 협의의 플랫폼(분석 엔진, 파이썬 라이브러리, Jupyter IDE, 피처 스토어)과 광의의 하드웨어 인프라 계층을 분리 관리합니다.",
  "피처 엔지니어링 단계에서 `seaborn.pairplot`을 통해 수치형 변수 쌍 간의 선형/비선형 패턴과 이상치 분포를 사전에 시각적으로 점검합니다.",
  "A/B 테스트 검정 시 유의수준 알파를 0.05로 고정하고, 실험군과 대조군 간 전환율 차이의 p-value가 0.05 미만일 때 귀무가설(차이 없음)을 기각하고 신규 기능을 정식 배포합니다.",
  "연속확률변수의 확률밀도함수(PDF)는 전체 적분 면적이 1이어야 하므로, 구간 폭이 0.5인 균등분포에서는 함수 높이가 2가 되는 것처럼 특정 지점의 밀도 높이는 1을 초과할 수 있습니다.",
  "회귀 모델 서빙 시 종속변수의 평균만으로 예측하는 더미 모델의 R²는 0이며, 설명변수가 의미 있는 정보를 제공할수록 R²가 1에 가까워져 모델의 설명력이 향상됩니다.",
  "고객 설문 조사나 매장별 트래픽 샘플링 시 지점/매장 단위로 통째로 추출하여 현장 조사 비용을 절감하고자 할 때는 군집 내 이질성과 군집 간 동질성을 갖는 집락추출법을 적용합니다.",
  "신용카드 이상 거래(FDS)나 서버 보안 침해 로그 탐지 시 상자그림에서 이상치로 판별된 관측값은 삭제 대상이 아니라 오히려 핵심 분석 타겟으로 보존합니다.",
  "게임 아이템 확률형 뽑기 시스템 설계 시 각 아이템의 가치와 확률의 곱을 모두 합산한 이산 기댓값($E(X) = 13/6$)을 계산하여 게임 내 재화 인플레이션을 제어합니다.",
  "피처 스케일링 시 변수에 양수 스칼라를 곱하고 상수를 더하는 선형 변환($aX+b$)을 수행하더라도, 무차원 정규화된 왜도(Skewness)와 피어슨 상관계수는 수치가 변하지 않고 보존됩니다.",
  "상관관계 분석 시 피처 $X$에 음의 계수를 곱해 역전시키면 선형 밀접성 크기는 그대로 유지되면서 상관계수의 부호만 $+0.2$에서 $-0.2$로 반전됩니다.",
  "두 집단 간 성능 비교 시 독립표본 t-검정 통계량을 제곱하면 일원배치 분산분석의 F-통계량($t^2 = F$)과 수학적으로 완벽히 일치하여 동일한 결론을 도출합니다.",
  "서버 트래픽 예측을 위한 ARIMA 모델링 시 각 시점의 관측값이 서로 독립이면 시계열 분석이 불가능하므로, 시계열 데이터는 과거와 현재 간의 자기상관성을 전제로 정상성을 검증합니다.",
  "임상 시험이나 사용자 반응 시간 분석 시 R의 사분위수 요약표에서 중앙값과 사분위수 범위를 검토하여 극단값에 왜곡되지 않는 견고한 효과 크기를 판정합니다.",
  "머신러닝 파이프라인 구축 시 타겟 변수가 이탈 여부(0/1)인 분류 문제에는 로지스틱 회귀나 SVM을 적용하고, 연속 수치 예측에는 다중 선형 회귀 모형을 분리 적용합니다.",
  "실시간 모니터링 파이프라인에서 `Q1 - 1.5 * IQR` 미만이거나 `Q3 + 1.5 * IQR`을 초과하는 스파이크 메트릭을 탐지하여 이상 징후 알림 임계치로 자동 등록합니다.",
  "시계열 트래픽 분석 시 장기 추세(Trend)와 계절성(Seasonal)은 예측 가능한 성분으로 분해 모델링하고, 우연적인 불규칙 잡음(Irregular)은 필터링하여 기저 패턴을 파악합니다.",
  "고객 설문 평가 점수나 제품 간 거리 데이터를 저차원(2D) 지도로 시각화할 때 MDS(다차원 척도법)의 스트레스 지수를 최소화하여 직관적인 포지셔닝 맵을 생성합니다.",
  "대규모 유저 로깅 데이터 수집 시 표본 크기($n$)를 늘려 표본오차를 줄이더라도, 네트워크 지연이나 응답자 탈락으로 인한 비표본오차는 데이터 정제 파이프라인으로 해결해야 합니다.",
  "이커머스 유저 군집화 시 정답 라벨이 없으므로 K-Means나 계층적 클러스터링으로 유저 간 유사도를 측정하여 장바구니 규모별 세그먼트를 생성합니다.",
  "서버의 요청 처리 대기 시간이나 고장 발생 간격과 같이 연속적인 시간 변수를 모델링할 때는 이산형 분포가 아닌 연속형 지수분포(Exponential Distribution)를 적용합니다.",
  "단일 결정트리의 높은 분산과 과적합 문제를 극복하기 위해 다수의 트리를 부트스트랩 샘플링으로 병렬 결합하는 Random Forest 앙상블을 기본 분류기로 활용합니다.",
  "SVM 분류기 서빙 시 두 클래스를 분리하는 초평면과 서포트 벡터 간의 마진(Margin)을 최대화하며, 비선형 데이터는 커널 트릭을 통해 고차원 특징 공간으로 사상하여 분류합니다.",
  "전처리 단계에서 결측치가 포함된 관측치 행을 통째로 삭제하는 완전 분석(Complete Analysis)은 데이터 손실이 크므로, 결측 비율이 낮을 때만 제한적으로 적용합니다.",
  "딥러닝 다층 신경망 학습 시 은닉층이 깊어질수록 역전파 오차 기울기가 소실(Vanishing Gradient)되는 문제를 방지하기 위해 ReLU 활성화 함수와 Residual Connection을 적용합니다.",
  "사기 거래 탐지(FDS) 모델 평가 시 불균형 데이터 환경에서 단순 정확도 대신 양성 클래스에 대한 정밀도($3/11$)와 재현율($3/8$)의 조화평균인 F1-Score($6/19$)를 핵심 KPI로 모니터링합니다.",
  "의사결정나무 CART 알고리즘은 노드 분할 시 자식 노드의 지니지수(Gini)가 최소화(즉, 순수도 Purity 극대화)되는 최적의 특성과 분할점을 탐욕적으로 선택합니다.",
  "의사결정나무의 단일 노드에 속한 모든 데이터가 동일한 클래스인 완전 순수 노드일 때, 지니지수($1 - 1^2$)와 엔트로피($-1\log_2 1$)는 모두 0이 되어 분할을 종료합니다.",
  "계층적 군집분석에서 두 군집을 병합할 때 군집 내 오차제곱합(SSE)의 증가량을 최소화하는 와드 연결법(`linkage(method='ward')`)은 크기가 균등한 구형 군집을 형성하는 데 최적입니다.",
  "격자형 도로망이나 도심지 내 내비게이션 경로 거리를 산출할 때는 직선 유클리드 거리($L_2$)보다 도로 블록을 따라 이동하는 맨해튼 거리($L_1$)를 우선 적용합니다.",
  "이커머스 연관 추천 룰 엔진에서 기저귀를 장바구니에 담았을 때 맥주를 추가 구매할 조건부 확률(신뢰도 Confidence = 34/51 ≈ 67%)을 계산하여 번들 상품으로 노출합니다.",
  "연관규칙 마이닝에서 기저귀와 맥주의 동시 구매 비율(지지도 Support = 34/100 = 34%)을 계산하여 최소 지지도 임계치를 충족하는 빈발 품목 집합만을 선별합니다."
];

const TAGS_MAP = {
  1: ["data-warehouse", "data-mart", "dw-dm-difference", "subject-oriented"],
  2: ["seci-model", "externalization", "tacit-to-explicit", "knowledge-management"],
  3: ["dikw-pyramid", "data-information-knowledge-wisdom", "data-hierarchy"],
  4: ["dikw-examples", "information-vs-wisdom", "business-cases"],
  5: ["database-characteristics", "continuous-evolution", "information-management"],
  6: ["database-structure", "dbms", "nosql-rdbms", "data-independence"],
  7: ["oltp", "olap", "transaction-processing", "analytical-processing"],
  8: ["bigdata-crisis", "privacy-responsibility", "algorithmist", "opt-out"],
  9: ["storage-units", "byte-to-petabyte", "data-capacity-hierarchy"],
  10: ["genetic-algorithm", "optimization-search", "darwinian-evolution", "mutation"],
  11: ["task-discovery", "quadrant-matrix", "optimization-solution-insight-discovery"],
  12: ["bigdata-methodology", "evaluation-deployment", "monitoring-plan"],
  13: ["spiral-model", "risk-management", "iterative-development"],
  14: ["accuracy-vs-precision", "measurement-stability", "quality-control", "dart-board"],
  15: ["bottom-up", "exploratory-approach", "data-driven-discovery"],
  16: ["top-down", "hypothesis-testing", "problem-driven-approach"],
  17: ["methodology-convergence", "topdown-bottomup-synthesis", "design-thinking"],
  18: ["information-system", "decision-support", "enterprise-it"],
  19: ["analytics-organization", "centralized-structure", "coe"],
  20: ["analytics-platform", "narrow-definition", "platform-architecture"],
  21: ["eda", "scatter-plot", "continuous-variables", "correlation-pattern"],
  22: ["hypothesis-testing", "p-value", "significance-level", "type-1-error"],
  23: ["probability-density-function", "continuous-distribution", "pdf-height", "integration-1"],
  24: ["linear-regression", "r-squared", "baseline-model", "coefficient-of-determination"],
  25: ["sampling-methods", "cluster-sampling", "stratified-sampling", "heterogeneity"],
  26: ["box-plot", "outlier-detection", "outlier-treatment", "business-context"],
  27: ["discrete-distribution", "expected-value", "probability-mass-function", "mean-calculation"],
  28: ["linear-transformation", "invariance-property", "skewness-invariance", "z-transformation"],
  29: ["pearson-correlation", "linear-transformation-sign", "negative-scalar-effect"],
  30: ["anova", "two-way-anova", "t-test-f-test-equivalence", "t-squared-equals-f"],
  31: ["time-series-stationarity", "mean-variance-covariance", "independence-fallacy"],
  32: ["r-summary", "quartiles", "sleep-data", "median-interpretation"],
  33: ["machine-learning-types", "multiple-linear-regression", "classification-vs-regression"],
  34: ["iqr", "tukey-fences", "outlier-formula", "lower-upper-bounds"],
  35: ["time-series-components", "irregular-variation", "noise-vs-trend"],
  36: ["mds", "multidimensional-scaling", "dimensionality-reduction", "stress-measure"],
  37: ["sampling-error", "non-sampling-error", "sample-size-effect"],
  38: ["clustering", "unsupervised-learning", "homogeneity-heterogeneity"],
  39: ["discrete-vs-continuous", "exponential-distribution", "waiting-time"],
  40: ["ensemble", "weak-learners", "generalization-performance"],
  41: ["svm", "hyperplane", "maximum-margin", "kernel-trick"],
  42: ["missing-values", "complete-analysis", "listwise-deletion", "imputation"],
  43: ["neural-networks", "hidden-layers", "vanishing-gradient", "backpropagation"],
  44: ["confusion-matrix", "f1-score-calculation", "harmonic-mean", "precision-recall"],
  45: ["decision-tree", "gini-index", "entropy", "impurity-reduction"],
  46: ["pure-node", "zero-impurity", "gini-entropy-zero", "purity-100"],
  47: ["ward-linkage", "hierarchical-clustering", "sse-minimization"],
  48: ["manhattan-distance", "euclidean-distance", "l1-l2-norm", "triangle-inequality"],
  49: ["association-rule", "confidence-calculation", "diaper-beer", "market-basket"],
  50: ["association-rule", "support-calculation", "diaper-beer", "joint-probability"]
};

const CODE_SNIPPETS = {
  23: `[연속확률변수 확률밀도함수(PDF) 높이 특성]
- 확률밀도함수: f(x)
- 전체 면적 적분: ∫ f(x) dx = 1.0 (항상 1)
---------------------------------------------
예시: 균등분포 X ~ U(0, 0.5)
구간 폭 = 0.5 - 0 = 0.5
밀도 높이 f(x) = 1 / 0.5 = 2.0 > 1.0 !
* 특정 x에서의 f(x) 높이 자체는 1을 얼마든지 초과할 수 있음!`,

  27: `[이산확률변수 기댓값 E(X) 계산]
- P(X = 1) = 1/6
- P(X = 2) = 1/2 = 3/6
- P(X = 3) = 1/3 = 2/6
---------------------------------------------
E(X) = Σ x_i · P(X = x_i)
     = (1 × 1/6) + (2 × 3/6) + (3 × 2/6)
     = 1/6 + 6/6 + 6/6 = 13/6 ≈ 2.167`,

  29: `[선형 변환 시 피어슨 상관계수 변화]
- 원래 상관계수: r(X, Y) = 0.2
- U = aX + b (a = -3 < 0)
- V = cY + d (c = 2 > 0)
---------------------------------------------
r(U, V) = [a·c / (|a|·|c|)] × r(X, Y)
        = [(-3)×2 / (3×2)] × 0.2
        = (-6 / 6) × 0.2 = -1 × 0.2 = -0.2`,

  34: `[Tukey 사분위범위(IQR) 이상치 판별 기준]
- 제1사분위수 (Q1): 10
- 제3사분위수 (Q3): 14
- IQR = Q3 - Q1 = 14 - 10 = 4
---------------------------------------------
하한선 (Lower Fence) = Q1 - 1.5 × IQR = 10 - (1.5 × 4) = 4
상한선 (Upper Fence) = Q3 + 1.5 × IQR = 14 + (1.5 × 4) = 20`,

  44: `[혼동 행렬 기반 양성 클래스 F1-Score 계산]
- TP: 3, FN: 5  ➔  재현율(Recall) = 3 / (3 + 5) = 3/8
- TP: 3, FP: 8  ➔  정밀도(Precision) = 3 / (3 + 8) = 3/11
---------------------------------------------
F1 = 2 × (Precision × Recall) / (Precision + Recall)
   = 2 × (9/88) / (57/88) = 18 / 57 = 6 / 19 ≈ 0.3158`,

  48: `[맨해튼 거리 vs 유클리드 거리 크기 비교]
- 두 점: A(x1, y1), B(x2, y2)
- 맨해튼 거리 (L1): |x1 - x2| + |y1 - y2|
- 유클리드 거리 (L2): √[(x1 - x2)² + (y1 - y2)²]
---------------------------------------------
직각삼각형의 삼각부등식에 의해:
빗변(L2) ≤ 직각변들의 합(L1)  ➔  L1 ≥ L2 (항상 성립)`,

  49: `[기저귀 ➔ 맥주 연관규칙 신뢰도(Confidence) 계산]
- 전체 영수증 (N): 100건
- 기저귀 구매 건수 (n(A)): 51건
- 동시 구매 건수 (n(A ∩ B)): 34건
---------------------------------------------
Confidence(기저귀 ➔ 맥주) = n(A ∩ B) / n(A)
                          = 34 / 51 = 2/3 ≈ 0.6667 (66.7%)`,

  50: `[기저귀 ➔ 맥주 연관규칙 지지도(Support) 계산]
- 전체 거래 건수 (N): 100건
- 기저귀와 맥주 동시 구매 건수 (n(A ∩ B)): 34건
---------------------------------------------
Support(기저귀 ➔ 맥주) = n(A ∩ B) / N
                       = 34 / 100 = 0.34 (34%)`
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

  const id = `adsp-49-${String(qNum).padStart(3, "0")}`;
  const title = TITLES[qNum] || `49회 기출: 문제 ${qNum}번`;
  const devContext = DEV_CONTEXTS[qNum] || "실무 데이터 분석 및 백엔드 시스템 개발 시 해당 개념을 적용합니다.";
  const tags = TAGS_MAP[qNum] || ["adsp", "49회"];

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

console.log(`Generated ${newQuestions.length} questions for 49회.`);

// Read existing adsp.json
const existing = JSON.parse(fs.readFileSync(adspJsonPath, "utf-8"));
console.log(`Existing questions count: ${existing.length}`);

// Remove any existing adsp-49-* questions if present
const filtered = existing.filter(q => !q.id.startsWith("adsp-49-"));
const combined = [...filtered, ...newQuestions];

fs.writeFileSync(adspJsonPath, JSON.stringify(combined, null, 2), "utf-8");
console.log(`Updated ${adspJsonPath}. New total questions count: ${combined.length}`);
