export type AdspExamRound = "48" | "47" | "44" | "43" | "42";

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
// 제48회 ADsP 실전 기출 복원 (2026년 출시, 50문항)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_48_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번)
  "adsp-past-056", // 48회(2026) 데이터 리터러시
  "adsp-past-041", // 43회 개인정보 비식별화
  "adsp-past-011", // 43회 데이터 구조 형태
  "adsp-past-012", // 43회 가치 패러다임 3단계
  "adsp-past-019", // DW 4대 특징
  "adsp-001",      // DIKW 피라미드
  "adsp-002",      // SECI 모델
  "adsp-003",      // 빅데이터 3대 위기 요인
  "adsp-past-046", // 44회(2025) RDBMS 무결성
  "adsp-past-051", // 47회(2025) 데이터 레이크 vs DW

  // 2과목: 데이터 분석 기획 (11 ~ 20번)
  "adsp-past-057", // 48회(2026) 과제 우선순위 매트릭스
  "adsp-past-042", // 43회 CMMI 성숙도 5단계
  "adsp-past-013", // 43회 과제 발굴 4분면
  "adsp-past-014", // 43회 CRISP-DM 6단계
  "adsp-past-020", // 조직 3대 형태
  "adsp-past-021", // 거버넌스 4대 요소
  "adsp-004",      // 분석 과제 발굴 4분면
  "adsp-005",      // 하향식 vs 상향식
  "adsp-006",      // 준비도 vs 성숙도
  "adsp-past-047", // 44회(2025) ROI 4V 평가

  // 3과목: 데이터 분석 (21 ~ 50번)
  "adsp-past-058", // 48회(2026) 크루스칼-왈리스 검정
  "adsp-past-059", // 48회(2026) 시계열 계절 조정 지수
  "adsp-past-060", // 48회(2026) 연관성 분석 Lift=1
  "adsp-past-043", // 43회 AIC vs BIC
  "adsp-past-044", // 43회 SVM 마진
  "adsp-past-045", // 43회 덴드로그램 절단
  "adsp-past-015", // 43회 나이브 베이즈
  "adsp-past-016", // 43회 회귀 잔차 4대 가정
  "adsp-past-017", // 43회 연관분석
  "adsp-past-018", // 43회 군집분석
  "adsp-past-048", // 44회(2025) PCA 누적분산 85%
  "adsp-past-049", // 44회(2025) 로지스틱 오즈/로짓
  "adsp-past-050", // 44회(2025) 랜덤포레스트 OOB
  "adsp-past-053", // 47회(2025) 더빈-왓슨 자기상관
  "adsp-past-054", // 47회(2025) K-Means 엘보우 기법
  "adsp-past-055", // 47회(2025) 인공신경망 드롭아웃
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
  "adsp-past-024", // IQR 이상값 경계
  "adsp-past-025", // 1종/2종 오류와 검정력
  "adsp-past-026", // 피어슨 vs 스피어만
  "adsp-past-027", // 회귀 F검정과 결정계수
];

// =================================================================
// 제47회 ADsP 실전 기출 복원 (2025년 출시, 50문항)
// 1과목(10) + 2과목(10) + 3과목(30)
// =================================================================
export const ADSP_EXAM_47_IDS: string[] = [
  // 1과목: 데이터 이해 (1 ~ 10번)
  "adsp-past-051", // 47회(2025) 데이터 레이크 vs DW
  "adsp-past-046", // 44회(2025) RDBMS 무결성
  "adsp-past-041", // 43회 개인정보 비식별화
  "adsp-past-011", // 43회 데이터 구조 형태
  "adsp-past-012", // 43회 가치 패러다임 3단계
  "adsp-past-019", // DW 4대 특징
  "adsp-001",      // DIKW 피라미드
  "adsp-002",      // SECI 모델
  "adsp-003",      // 빅데이터 3대 위기 요인
  "adsp-past-001", // 정성/정량 데이터

  // 2과목: 데이터 분석 기획 (11 ~ 20번)
  "adsp-past-052", // 47회(2025) 상향식 프로토타이핑
  "adsp-past-047", // 44회(2025) ROI 4V 평가
  "adsp-past-042", // 43회 CMMI 성숙도 5단계
  "adsp-past-013", // 43회 과제 발굴 4분면
  "adsp-past-014", // 43회 CRISP-DM 6단계
  "adsp-past-020", // 조직 3대 형태
  "adsp-past-021", // 거버넌스 4대 요소
  "adsp-004",      // 분석 과제 발굴 4분면
  "adsp-005",      // 하향식 vs 상향식
  "adsp-006",      // 준비도 vs 성숙도

  // 3과목: 데이터 분석 (21 ~ 50번)
  "adsp-past-053", // 47회(2025) 더빈-왓슨 자기상관
  "adsp-past-054", // 47회(2025) K-Means 엘보우 기법
  "adsp-past-055", // 47회(2025) 인공신경망 드롭아웃
  "adsp-past-048", // 44회(2025) PCA 누적분산 85%
  "adsp-past-049", // 44회(2025) 로지스틱 오즈/로짓
  "adsp-past-050", // 44회(2025) 랜덤포레스트 OOB
  "adsp-past-043", // 43회 AIC vs BIC
  "adsp-past-044", // 43회 SVM 마진
  "adsp-past-045", // 43회 덴드로그램 절단
  "adsp-past-015", // 43회 나이브 베이즈
  "adsp-past-016", // 43회 회귀 잔차 4대 가정
  "adsp-past-017", // 43회 연관분석
  "adsp-past-018", // 43회 군집분석
  "adsp-008",      // 로지스틱 회귀 오즈비
  "adsp-009",      // 의사결정나무 불순도
  "adsp-010",      // 다중공선성 VIF
  "adsp-011",      // AR vs MA 식별
  "adsp-012",      // 정밀도/재현율/F1
  "adsp-013",      // 연관성 3대 지표
  "adsp-014",      // 계층적 군집 와드법
  "adsp-015",      // 실루엣 계수
  "adsp-past-028", // 변수선택법
  "adsp-past-029", // PCA 고유값과 기여율
  "adsp-past-030", // 인공신경망 역전파
  "adsp-past-031", // 배깅 vs 부스팅
  "adsp-past-032", // k-means 군집화
  "adsp-past-033", // 비모수 검정
  "adsp-past-034", // MDS 스트레스 지수
  "adsp-past-035", // ROC-AUC 해석
  "adsp-past-008", // 혼동행렬 계산
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

export const ADSP_EXAM_50_IDS: string[] = ADSP_EXAM_48_IDS;

export interface AdspRoundInfo {
  round: AdspExamRound;
  year: string;
  name: string;
  badge: string;
  description: string;
  questionIds: string[];
}

export const ADSP_EXAM_ROUNDS: Record<AdspExamRound, AdspRoundInfo> = {
  "48": {
    round: "48",
    year: "2026년",
    name: "제48회 기출 복원",
    badge: "2026 최신 출제",
    description: "2026년 제48회 최신 기출 복원 문항 집중 배치 (50문항 풀세트)",
    questionIds: ADSP_EXAM_48_IDS,
  },
  "47": {
    round: "47",
    year: "2025년",
    name: "제47회 기출 복원",
    badge: "2025 하반기",
    description: "2025년 제47회 실전 기출 복원 문항 집중 배치 (50문항 풀세트)",
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

export const ADSP_ROUND_KEYS: AdspExamRound[] = ["48", "47", "44", "43", "42"];

export function getAdspExamRound(round?: string | null): AdspRoundInfo {
  if (round && round in ADSP_EXAM_ROUNDS) {
    return ADSP_EXAM_ROUNDS[round as AdspExamRound];
  }
  return ADSP_EXAM_ROUNDS["48"];
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
