import type { MindmapSection } from "@/types/mindmap";
import { EXPLORATION_NOTES } from "@/data/mindmaps/bigdata/exploration-notes";

export const explorationMindmap: MindmapSection = {
  id: "exploration",
  title: "빅데이터 탐색",
  description: "결측값·이상값 처리, 데이터 변환, 변수 선택과 EDA",
  chart: `mindmap
  root((빅데이터 탐색))
    데이터 전처리
      missingBox["결측값 유형과 대치법(실기)<br/>1) MCAR — 완전 무작위 결측, 다른 변수와 무관<br/>2) MAR — 다른 관측 변수에 의존해 발생하는 결측<br/>3) MNAR — 결측 여부가 그 값 자체에 의존<br/>4) 대치법 — 평균·중앙값·KNN·다중대치법(MICE)"]
      outlierBox["이상값 탐지 기준(실기)<br/>1) ESD — 평균에서 표준편차의 n배 이상 벗어난 값<br/>2) IQR = Q3 − Q1<br/>3) 정상 범위 = [Q1 − 1.5×IQR, Q3 + 1.5×IQR]"]
      iqrCalcBox["IQR 이상치 계산 예제(실기)<br/>1) Q1=30, Q3=70일 때 IQR = 70−30 = 40<br/>2) 하한선 = 30 − 1.5×40 = −30<br/>3) 상한선 = 70 + 1.5×40 = 130<br/>4) −30 미만 또는 130 초과 데이터는 이상치로 판정"]
      transformBox["데이터 변환 기법<br/>1) 표준화(Z-Score) — 평균 0, 분산 1로 변환<br/>2) 정규화(Min-Max) — 값을 0~1 범위로 변환<br/>3) 로그 변환 — 오른쪽으로 치우친 왜도를 보정<br/>4) Box-Cox 변환 — 정규성을 확보하기 위한 변환"]
    변수 선택과 차원 축소
      featureSelectBox["변수 선택·차원 축소 기법<br/>1) 필터(Filter) — 통계적 지표로 변수를 사전 선택<br/>2) 래퍼(Wrapper) — RFE 등 모델 성능 기반으로 반복 선택<br/>3) 임베디드(Embedded) — Lasso(L1)·Ridge(L2), 학습 과정에서 자동 선택<br/>4) PCA — 분산을 최대한 보존하며 차원을 축소"]
    탐색적 데이터 분석
      edaBox["EDA 핵심 지표<br/>1) 왜도(Skewness) — 양수면 오른쪽으로 긴 꼬리<br/>2) 첨도(Kurtosis) — 분포가 뾰족한 정도<br/>3) 피어슨 상관계수 — 두 변수의 선형 관계<br/>4) 스피어만 상관계수 — 순위 기반 관계"]
    표본과 분할
      samplingBox["표본추출 기법<br/>1) 단순무작위추출 — 임의로 표본을 추출<br/>2) 층화추출 — 계층별 비율을 유지하며 추출<br/>3) 군집추출 — 군집 단위로 추출<br/>4) 계통추출 — 일정한 간격으로 추출"]
      dataSplitBox["데이터 분할(실기)<br/>1) Train·Validation·Test로 분할해 각기 다른 목적에 사용<br/>2) train_test_split(..., stratify=y)로 클래스 비율을 유지<br/>3) 검증세트로 하이퍼파라미터를 튜닝, 테스트세트는 최종 평가에만 사용"]
    파생변수와 다중공선성
      binningBox["파생변수 생성 기법<br/>1) 구간화(Binning) — 연속형 변수를 범주형으로 변환<br/>2) 더미변수 — 범주형 변수를 0/1로 인코딩<br/>3) 변수 결합 — 기존 변수를 조합해 새 변수를 생성"]
      vifBox["다중공선성 진단(실기)<br/>1) VIF(분산팽창계수)로 독립변수 간 상관 정도를 계산<br/>2) 일반적으로 VIF ≥ 10이면 다중공선성을 의심<br/>3) 해당 변수를 제거하거나 PCA로 차원을 축소해 대응"]
    R 기초와 확률분포
      rTypesBox["R 자료형(ADsP)<br/>1) 벡터 — 동일 자료형으로 구성된 1차원 구조<br/>2) 행렬(Matrix) — 동일 자료형의 2차원 구조<br/>3) 배열(Array) — 동일 자료형의 다차원 구조<br/>4) 리스트 — 서로 다른 자료형을 함께 담을 수 있음<br/>5) 데이터프레임 — 열마다 다른 자료형을 허용하는 표 형태"]
      probDistBox["확률분포 종류(ADsP)<br/>1) 이산형 — 베르누이(1회 성공·실패), 이항(n회 반복 성공횟수), 포아송(단위시간당 발생횟수)<br/>2) 연속형 — 정규분포, t분포, 카이제곱분포, F분포"]
    가설검정 심화
      nonparametricBox["비모수 검정 기법(ADsP)<br/>1) 부호검정 — 중앙값을 비교<br/>2) 윌콕슨 순위합·부호순위검정<br/>3) 만-휘트니 U검정 — 두 독립표본 비교<br/>4) 크루스칼-왈리스 검정 — 3개 이상 집단 비교<br/>5) 모집단 분포를 가정할 수 없을 때 사용"]
      errorTypeBox["가설검정 오류와 검정력(ADsP)<br/>1) 1종 오류(α) — 참인 귀무가설을 잘못 기각<br/>2) 2종 오류(β) — 거짓인 귀무가설을 잘못 채택<br/>3) 검정력(Power) = 1 − β<br/>4) 표본 크기가 고정이면 α를 줄일수록 β는 커지는 상충 관계"]`,
  notes: EXPLORATION_NOTES,
};
