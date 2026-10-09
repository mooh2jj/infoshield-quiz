"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Flame,
  Search,
  Copy,
  Check,
  X,
  Minimize2,
  Maximize2,
  Bookmark,
  FileText,
  Sparkles,
  ExternalLink,
  RotateCcw,
  Star,
  Zap,
  HelpCircle,
  AlertTriangle,
  BookmarkCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface RoiMemoItem {
  id: string;
  subjectId: "ch1" | "ch2" | "ch3";
  subjectName: string;
  grade: "S" | "A" | "B";
  stars: 3 | 4 | 5;
  frequencyRate: string;
  title: string;
  formula: string;
  trap: string;
  sectionId: string;
  tags: string[];
}

export const ADSP_ROI_ITEMS: RoiMemoItem[] = [
  // =================================================================
  // === [제1과목] 데이터 이해 (10문항)
  // =================================================================
  {
    id: "roi-01",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "DIKW 피라미드 4단계",
    formula: "데이터(Data) ➔ 정보(Information) ➔ 지식(Knowledge) ➔ 지혜(Wisdom)",
    trap: "지혜(Wisdom)는 지식 없이 발생하는 단순 직관이 아니라, 축적된 지식을 바탕으로 창의적 아이디어와 유연한 통찰을 발휘하는 단계!",
    sectionId: "adsp-understanding",
    tags: ["DIKW", "데이터", "정보", "지식", "지혜"],
  },
  {
    id: "roi-02",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "SECI 모델 (지식 창출 사이클)",
    formula: "공통화(암묵➔암묵) ➔ 표출화(암묵➔형식) ➔ 연결화(형식➔형식) ➔ 내면화(형식➔암묵)",
    trap: "개인의 머릿속 암묵지를 매뉴얼/보고서 등 형식지로 언어화·시각화하는 것은 '표출화(Externalization)'!",
    sectionId: "adsp-understanding",
    tags: ["SECI", "암묵지", "형식지", "표출화", "공통화"],
  },
  {
    id: "roi-03",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 92%+",
    title: "빅데이터 3대 위기 요인 & 통제 방안",
    formula: "사생활 침해(책임 원칙) / 책임 원칙 훼손(알고리즘 접근권) / 데이터 오용(알고리즈미스트)",
    trap: "사생활 침해의 통제는 '사전 동의제 강화'가 아니라 정보 사용자에게 책임을 묻는 '사후 책임 원칙'으로의 전환!",
    sectionId: "adsp-understanding",
    tags: ["위기요인", "책임원칙", "알고리즘접근권", "알고리즈미스트"],
  },
  {
    id: "roi-04",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "데이터 웨어하우스(DW) 4대 특징",
    formula: "주제 지향성, 통합성, 시계열성, 비휘발성 (읽기 전용)",
    trap: "운영 데이터베이스(OLTP)와 달리 분석을 위해 과거 데이터를 누적 보관하므로 '비휘발성'을 가짐!",
    sectionId: "adsp-understanding",
    tags: ["DW", "데이터웨어하우스", "비휘발성", "주제지향성"],
  },
  {
    id: "roi-05",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 78%+",
    title: "데이터 마트(DM) vs 데이터 레이크",
    formula: "DM = 특정 부서 맞춤형 소규모 주제 DB / Data Lake = 모든 형태(정형·비정형) 원시 Raw 대규모 저장소",
    trap: "특정 부서(마케팅, 재무)의 빠른 의사결정 지원은 DW가 아니라 '데이터 마트(DM)'!",
    sectionId: "adsp-understanding",
    tags: ["데이터마트", "데이터레이크", "DM"],
  },
  {
    id: "roi-26",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "정성적 데이터 vs 정량적 데이터",
    formula: "정성적 = 언어·문자·비정형(해석 중심, 주관식 설문) / 정량적 = 수치·도형·기호(통계 분석 용이, 매출·온도)",
    trap: "설문조사의 주관식 텍스트나 SNS 글은 정량적이 아닌 '정성적 데이터'!",
    sectionId: "adsp-understanding",
    tags: ["정성적데이터", "정량적데이터", "데이터유형"],
  },
  {
    id: "roi-27",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "데이터 사이언티스트 핵심 역량 (Hard vs Soft)",
    formula: "Hard Skill = 빅데이터 이론·통계 기법·IT 엔지니어링 / Soft Skill = 통찰력·설득력 있는 전달·다분야 협업",
    trap: "분석 결과를 경영진에 설득력 있게 전달하는 프레젠테이션과 비즈니스 통찰력은 'Soft Skill'에 해당!",
    sectionId: "adsp-understanding",
    tags: ["데이터사이언티스트", "HardSkill", "SoftSkill", "역량"],
  },
  {
    id: "roi-28",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "빅데이터 가치 패러다임 변화 3단계",
    formula: "1단계: 디지털화(Digitalization) ➔ 2단계: 연결(Connection) ➔ 3단계: 에이전시(Agency/지능화)",
    trap: "가치 패러다임 3단계 발전 순서(디지털화 ➔ 연결 ➔ 에이전시) 암기 필수!",
    sectionId: "adsp-understanding",
    tags: ["패러다임", "디지털화", "연결", "에이전시"],
  },
  {
    id: "roi-29",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "마이데이터 (MyData)와 개인정보 전송요구권",
    formula: "정보주체(개인)가 본인의 데이터를 능동적으로 관리·통제하고, 본인 또는 제3자에게 전송을 요구할 권리",
    trap: "기업의 데이터 독점을 막고 정보주체의 '개인정보 자기결정권'을 실질적으로 보장하는 제도!",
    sectionId: "adsp-understanding",
    tags: ["마이데이터", "MyData", "전송요구권", "자기결정권"],
  },
  {
    id: "roi-30",
    subjectId: "ch1",
    subjectName: "1과목 데이터 이해",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 82%+",
    title: "개인정보 비식별 조치 5대 기법",
    formula: "1) 가명처리(식별자 대체), 2) 총계처리(평균·합계), 3) 데이터 삭제(감추기), 4) 범주화(구간화), 5) 데이터 마스킹(***)",
    trap: "주민번호 뒷자리를 ***로 가리는 것은 '마스킹', 나이 23세를 20대로 묶는 것은 '범주화'!",
    sectionId: "adsp-understanding",
    tags: ["비식별화", "가명처리", "마스킹", "범주화"],
  },

  // =================================================================
  // === [제2과목] 데이터 분석 기획 (11문항)
  // =================================================================
  {
    id: "roi-06",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "분석 과제 4분면 (Target × How)",
    formula: "최적화(Known×Known) / 솔루션(Target Known×How Unknown) / 통찰(Target Unknown×How Known) / 발견(Unknown×Unknown)",
    trap: "분석 대상은 명확하지만 구체적 알고리즘/방법을 모르는 과제는 '솔루션(Solution)'!",
    sectionId: "adsp-planning",
    tags: ["4분면", "최적화", "솔루션", "통찰", "발견"],
  },
  {
    id: "roi-07",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "하향식 접근법(Top-Down) 4단계",
    formula: "문제 탐색 ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토",
    trap: "문제가 이미 주어진 상태에서 해법을 찾는 절차로, 4단계 순서 나열이 시험 단골!",
    sectionId: "adsp-planning",
    tags: ["하향식", "문제탐색", "문제정의", "타당성검토"],
  },
  {
    id: "roi-08",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "CRISP-DM 분석 방법론 6단계",
    formula: "업무 이해 ➔ 데이터 이해 ➔ 데이터 준비 ➔ 모델링 ➔ 평가 ➔ 전개",
    trap: "전체 프로젝트 기간의 60~80%가 소요되는 가장 많은 공수 단계는 '데이터 준비(Data Preparation)'!",
    sectionId: "adsp-planning",
    tags: ["CRISP-DM", "데이터준비", "방법론"],
  },
  {
    id: "roi-09",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "분석 수준 4분면 (준비도 × 성숙도)",
    formula: "준비형(준비도 高, 성숙도 低) / 정착형(준비도 低, 성숙도 高) / 도입형(둘 다 低) / 확산형(둘 다 高)",
    trap: "조직·인프라 준비는 되어 있으나 실제 업무 성숙도가 낮으면 '준비형(Preparation)'!",
    sectionId: "adsp-planning",
    tags: ["준비도", "성숙도", "준비형", "확산형"],
  },
  {
    id: "roi-10",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 80%+",
    title: "마스터 플랜 우선순위 (시급성 vs 난이도)",
    formula: "최우선 추진 = 3사분면 (시급성 높고, 난이도 낮음 = Quick-Win 과제)",
    trap: "난이도 중심 추진 시 순서는 '3사분면 ➔ 1사분면 ➔ 2사분면 ➔ 4사분면'!",
    sectionId: "adsp-planning",
    tags: ["마스터플랜", "시급성", "난이도", "Quick-Win"],
  },
  {
    id: "roi-31",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "분석 조직 구조 3가지 모델",
    formula: "집중형(전사 전담 CoE 총괄) / 기능형(전담 없이 각 현업 부서 수행) / 분산형(전담 분석가를 현업에 직접 배치)",
    trap: "전담 부서 없이 각 현업 부서가 자체적으로 필요할 때 분석을 수행하는 것은 '기능형 조직 구조'!",
    sectionId: "adsp-planning",
    tags: ["조직구조", "집중형", "기능형", "분산형"],
  },
  {
    id: "roi-32",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "CoE (Center of Excellence) 전담 센터",
    formula: "기업의 전사적 분석 역량을 내재화하고 분석 기획·방법론·교육을 표준화·총괄 지원하는 전문 조직",
    trap: "일회성 프로젝트 TF가 아니라 전사 데이터 거버넌스와 역량을 영구 총괄하는 전담 센터!",
    sectionId: "adsp-planning",
    tags: ["CoE", "조직", "거버넌스", "역량내재화"],
  },
  {
    id: "roi-33",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "소프트웨어 개발 모델 (나선형 vs 애자일)",
    formula: "폭포수(순차 하향식) / 나선형(목표➔위험분석➔개발➔평가 반복 점진적) / 애자일(짧은 스프린트, 기민한 변화 대응)",
    trap: "목표 설정 후 '위험 분석(Risk Analysis)'을 주기적으로 거치며 점진적으로 반복하는 모델은 '나선형 모델(Spiral)'!",
    sectionId: "adsp-planning",
    tags: ["SDLC", "폭포수", "나선형", "애자일", "위험분석"],
  },
  {
    id: "roi-34",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 85%+",
    title: "KDD 분석 방법론 5단계 순서",
    formula: "데이터셋 선택(Selection) ➔ 전처리(Preprocessing) ➔ 변환(Transformation) ➔ 데이터 마이닝(Mining) ➔ 평가(Evaluation)",
    trap: "잡음과 이상치를 제거하는 것은 '전처리', 파생변수를 만들고 차원을 축소하는 것은 '변환(Transformation)'!",
    sectionId: "adsp-planning",
    tags: ["KDD", "선택", "전처리", "변환", "데이터마이닝"],
  },
  {
    id: "roi-35",
    subjectId: "ch2",
    subjectName: "2과목 분석 기획",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 81%+",
    title: "데이터 거버넌스 4대 구성요소 & 표준화",
    formula: "조직, 프로세스, 시스템, 데이터 표준 (표준 단어, 표준 용어, 표준 도메인, 표준 코드)",
    trap: "데이터 표준화 관리 대상 4가지는 '단어, 용어, 도메인, 코드'!",
    sectionId: "adsp-planning",
    tags: ["거버넌스", "데이터표준", "용어사전", "도메인"],
  },

  // =================================================================
  // === [제3과목] 데이터 분석 (29문항 - 시험 60% 비중)
  // =================================================================
  {
    id: "roi-11",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "F1-Score (F-측도) 공식",
    formula: "F1 = 2 × (Precision × Recall) / (Precision + Recall) [정밀도와 재현율의 조화평균]",
    trap: "불균형 데이터 평가에서 정확도(Accuracy)의 왜곡을 방지하기 위해 쓰이며, 산술평균이 아닌 '조화평균'!",
    sectionId: "adsp-analysis",
    tags: ["F1-Score", "정밀도", "재현율", "조화평균"],
  },
  {
    id: "roi-12",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "로지스틱 회귀 & 오즈비 (Odds Ratio)",
    formula: "Odds = p / (1 - p), ln(Odds) = β0 + β1*X, 독립변수 1단위 증가 시 승산 배율 = exp(β1)",
    trap: "회귀계수의 exp값은 '확률'의 증가가 아니라 '승산(Odds = 발생확률/미발생확률)'의 배율 증가!",
    sectionId: "adsp-analysis",
    tags: ["로지스틱", "오즈비", "로짓", "Odds"],
  },
  {
    id: "roi-13",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "계층 군집 와드 연결법 (Ward's Method)",
    formula: "두 군집 병합 시 발생하는 군집 내 오차제곱합(ESS: Error Sum of Squares) 증가량 최소화",
    trap: "군집 내 분산을 최소화하여 비슷한 크기의 조밀한 구형 군집을 형성함!",
    sectionId: "adsp-analysis",
    tags: ["군집분석", "와드연결법", "ESS", "오차제곱합"],
  },
  {
    id: "roi-14",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "왜도(Skewness)와 대표값 위치 관계",
    formula: "양의 왜도(오른쪽 꼬리, > 0): 최빈값 < 중앙값 < 평균 / 음의 왜도(왼쪽 꼬리, < 0): 평균 < 중앙값 < 최빈값",
    trap: "오른쪽 긴 꼬리(양의 왜도)는 극단적 이상치가 평균을 끌어올리므로 평균이 제일 큼!",
    sectionId: "adsp-analysis",
    tags: ["왜도", "Skewness", "평균", "중앙값", "최빈값"],
  },
  {
    id: "roi-15",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "연관성 분석 3대 지표 (장바구니)",
    formula: "지지도 P(A∩B), 신뢰도 P(B|A), 향상도 신뢰도 / P(B)",
    trap: "향상도(Lift) > 1일 때 양의 상관(보완재), = 1이면 독립(무관), < 1이면 음의 상관(대체재)!",
    sectionId: "adsp-analysis",
    tags: ["지지도", "신뢰도", "향상도", "연관분석"],
  },
  {
    id: "roi-16",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "시계열 ACF / PACF 모형 식별",
    formula: "AR(p): PACF p차 시차 이후 절단 + ACF 지수감소 / MA(q): ACF q차 시차 이후 절단 + PACF 지수감소",
    trap: "PACF가 뚝 끊겨 절단되면 무조건 'AR 모형', ACF가 뚝 끊기면 'MA 모형'!",
    sectionId: "adsp-analysis",
    tags: ["시계열", "ACF", "PACF", "AR", "MA"],
  },
  {
    id: "roi-17",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "앙상블: 배깅(Bagging) vs 부스팅(Boosting)",
    formula: "배깅(랜덤포레스트) = 독립 병렬 복원추출 ➔ '분산 감소' / 부스팅(XGBoost) = 오차 가중 순차 학습 ➔ '편향 감소'",
    trap: "배깅은 '분산(Variance) 감소', 부스팅은 '편향(Bias) 감소' 목적이 정반대!",
    sectionId: "adsp-analysis",
    tags: ["앙상블", "배깅", "부스팅", "분산감소", "편향감소"],
  },
  {
    id: "roi-18",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "다중공선성 (Multicollinearity) & VIF",
    formula: "VIF(분산팽창계수) ≥ 10이면 심각. 해결: 변수 제거, PCA 주성분 직교화, 릿지/라쏘 규제",
    trap: "F-검정 유의하고 R² 높으나 개별 t-검정이 유의하지 않고 부호가 왜곡될 때 의심!",
    sectionId: "adsp-analysis",
    tags: ["다중공선성", "VIF", "회귀분석", "PCA"],
  },
  {
    id: "roi-19",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "의사결정나무 불순도 (지니 vs 엔트로피)",
    formula: "지니 지수(CART, 50:50 분할 시 최댓값 0.5) / 엔트로피(C4.5, 50:50 분할 시 최댓값 1.0)",
    trap: "CART는 지니 지수를 사용하고 오직 '이진 분할'만 수행!",
    sectionId: "adsp-analysis",
    tags: ["의사결정나무", "CART", "지니지수", "엔트로피"],
  },
  {
    id: "roi-20",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "실루엣 계수 (Silhouette Coefficient)",
    formula: "s(i) = (b(i) - a(i)) / max(a(i), b(i)) [-1 ~ +1 범위]",
    trap: "1에 가까울수록 조밀·우수, 0 근처는 경계 중첩, 음수(-1)는 타 군집에 잘못 할당됨!",
    sectionId: "adsp-analysis",
    tags: ["실루엣", "군집평가", "비지도학습"],
  },
  {
    id: "roi-21",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "가설검정 오류 (제1종·제2종) & 검정력",
    formula: "제1종 오류(α: H0 참인데 기각) / 제2종 오류(β: H0 거짓인데 채택) / 검정력(1 - β)",
    trap: "표본 크기(N)를 대규모로 늘리면 제1종 오류와 제2종 오류를 동시에 줄일 수 있음!",
    sectionId: "adsp-analysis",
    tags: ["가설검정", "제1종오류", "제2종오류", "검정력"],
  },
  {
    id: "roi-22",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "모형 선택 지표 AIC (Akaike)",
    formula: "AIC = -2×ln(Likelihood) + 2k (우도 + 변수 개수 복잡도 페널티)",
    trap: "값이 '작을수록(최소일수록)' 적합도와 간명성을 갖춘 우수한 모형!",
    sectionId: "adsp-analysis",
    tags: ["AIC", "BIC", "모형선택", "회귀분석"],
  },
  {
    id: "roi-23",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "R² vs 수정된 결정계수 (Adjusted R²)",
    formula: "일반 R²는 쓰레기 변수 추가해도 항상 증가/유지 ➔ 다중회귀 모형 간 비교는 자유도 반영한 수정된 R² 필수",
    trap: "독립변수 수가 다른 다중회귀 모델을 비교할 때 일반 R²를 쓰면 과적합된 모델이 선택됨!",
    sectionId: "adsp-analysis",
    tags: ["결정계수", "수정된R2", "회귀평가"],
  },
  {
    id: "roi-24",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "아프리오리 알고리즘 (Apriori)",
    formula: "어떤 항목집합이 빈발하지 않으면, 이를 포함하는 모든 슈퍼셋도 빈발하지 않다",
    trap: "최소 지지도 기준 미달 집합의 가지치기(Pruning)로 탐색 공간을 극적으로 축소!",
    sectionId: "adsp-analysis",
    tags: ["아프리오리", "Apriori", "가지치기", "연관규칙"],
  },
  {
    id: "roi-25",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 82%+",
    title: "랜덤 포레스트 OOB (Out-of-Bag)",
    formula: "부트스트랩 복원추출 시 선택되지 않고 남은 약 36.8%의 데이터로 별도 검증셋 없이 자체 평가",
    trap: "별도의 Validation 데이터셋 분할 없이도 일반화 오차를 객관적으로 측정 가능!",
    sectionId: "adsp-analysis",
    tags: ["OOB", "랜덤포레스트", "부트스트랩"],
  },
  {
    id: "roi-36",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "상관계수: 피어슨 vs 스피어만",
    formula: "피어슨 = 등간/비율 척도, '선형적(Linear)' 상관 측정 / 스피어만 = 순위/서열 척도, 비모수, '단조적(Monotonic)' 상관 측정",
    trap: "수능 등수나 만족도 설문처럼 서열/순위 척도로 매겨진 데이터의 상관관계는 '스피어만 상관계수' 사용!",
    sectionId: "adsp-analysis",
    tags: ["상관계수", "피어슨", "스피어만", "순위척도"],
  },
  {
    id: "roi-37",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 95%+",
    title: "더빈-왓슨(Durbin-Watson) 검정과 잔차 독립성",
    formula: "검정통계량 d ≈ 2이면 자기상관 없음(독립성 만족), 0에 가까우면 양의 자기상관, 4에 가까우면 음의 자기상관",
    trap: "d = 0이 아니라 'd ≈ 2'일 때 자기상관이 없고 독립성을 만족한다는 점이 킬러 함정!",
    sectionId: "adsp-analysis",
    tags: ["더빈왓슨", "DurbinWatson", "독립성", "잔차분석"],
  },
  {
    id: "roi-38",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 94%+",
    title: "PCA 주성분 개수 결정 기준 3가지",
    formula: "1) 고윳값(Eigenvalue) ≥ 1 (카이저 기준) / 2) 누적설명분산비율 70~85% 이상 / 3) 스크리 플롯 엘보우 지점",
    trap: "스크리 산점도에서 곡선 경사가 완만해지는 엘보우(Elbow) 지점 직전의 주성분 수를 선택!",
    sectionId: "adsp-analysis",
    tags: ["PCA", "카이저기준", "고윳값", "스크리플롯"],
  },
  {
    id: "roi-39",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 93%+",
    title: "혼동행렬 특이도(Specificity)와 1-특이도(FPR)",
    formula: "특이도(TNR) = TN / (TN + FP) [실제 음성 중 맞춘 비율] / 위양성률(FPR) = 1 - 특이도 = FP / (TN + FP)",
    trap: "ROC 곡선의 가로축(X축)은 특이도 자체가 아니라 '1 - 특이도(위양성률, FPR)'임에 유의!",
    sectionId: "adsp-analysis",
    tags: ["특이도", "Specificity", "FPR", "혼동행렬"],
  },
  {
    id: "roi-40",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 92%+",
    title: "군집 거리 척도 (유클리드 vs 맨해튼 vs 마할라노비스)",
    formula: "유클리드 = 최단 직선거리 / 맨해튼 = 격자 블록 거리(|x1-x2|+|y1-y2|) / 마할라노비스 = 공분산·상관관계 고려 통계적 거리",
    trap: "변수 간 상관관계와 분산 차이를 통계적으로 보정하여 측정하는 거리는 '마할라노비스 거리(Mahalanobis)'!",
    sectionId: "adsp-analysis",
    tags: ["거리척도", "유클리드", "맨해튼", "마할라노비스"],
  },
  {
    id: "roi-41",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 89%+",
    title: "완전연결법(최장) vs 단일연결법(최단)",
    formula: "단일연결 = 군집 간 최단거리 (사슬 형태 체이닝 발생, 이상치 취약) / 완전연결 = 군집 간 최장거리 (체이닝 방지)",
    trap: "사슬처럼 길게 늘어지는 체이닝(Chaining) 문제가 발생하는 것은 완전연결이 아니라 '단일연결법'!",
    sectionId: "adsp-analysis",
    tags: ["계층군집", "단일연결법", "완전연결법", "체이닝효과"],
  },
  {
    id: "roi-42",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "k-Means 비계층 군집화의 한계와 단점",
    formula: "중심점(Centroid) 기반 빠른 연산. 단점: 1) 이상치 민감, 2) 초기 중심점 위치 의존성, 3) k값 사전 지정 필수, 4) 비구형 군집 실패",
    trap: "이상치에 매우 취약하며, 초기 중심점 위치에 따라 로컬 최적해에 빠질 수 있음!",
    sectionId: "adsp-analysis",
    tags: ["k-Means", "비계층군집", "중심점", "초기값"],
  },
  {
    id: "roi-43",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "회귀분석 4대 기본 가정과 진단 플롯",
    formula: "선형성(산점도), 독립성(더빈-왓슨 d≈2), 등분산성(잔차 산점도 균일 폭), 정규성(Q-Q 플롯, 샤피로-윌크)",
    trap: "잔차 산점도에서 깔때기나 부채꼴 모양이 나타나면 '등분산성 위반'!",
    sectionId: "adsp-analysis",
    tags: ["회귀가정", "선형성", "등분산성", "정규성", "잔차분석"],
  },
  {
    id: "roi-44",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "시계열 차분(Differencing)과 계절 차분",
    formula: "일반 차분(∇Yt = Yt - Yt-1) ➔ '평균 추세(Trend) 제거' / 계절 차분(Yt - Yt-s) ➔ '계절성(Seasonality) 제거'",
    trap: "시간에 따라 분산이 변하는 경우는 차분이 아니라 '로그 변환'을 적용해야 함!",
    sectionId: "adsp-analysis",
    tags: ["시계열", "차분", "계절차분", "정상성", "추세제거"],
  },
  {
    id: "roi-45",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 87%+",
    title: "변수 선택법 3가지 (전진, 후진, 단계적)",
    formula: "전진(절편부터 유의 변수 추가) / 후진(전체에서 무의미 변수 제거) / 단계적(추가와 제거를 반복하며 기존 변수 재평가)",
    trap: "변수가 매우 많고 설명변수 간 다중공선성이 심할 때 후진제거법은 시작부터 모델 피팅이 불안정할 수 있음!",
    sectionId: "adsp-analysis",
    tags: ["변수선택법", "전진선택법", "후진제거법", "단계적선택법"],
  },
  {
    id: "roi-46",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 86%+",
    title: "의사결정나무 가지치기(Pruning) 목적",
    formula: "트리의 과적합(Overfitting) 방지. 학습 데이터 오차는 약간 허용하되 검증 데이터 일반화 오차를 최소화",
    trap: "가치치기를 하지 않은 최대 트리는 학습 데이터 정확도는 100%에 가깝지만 실제 테스트 시 과적합으로 성능 폭락!",
    sectionId: "adsp-analysis",
    tags: ["의사결정나무", "가지치기", "과적합방지", "비용복잡도"],
  },
  {
    id: "roi-47",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 83%+",
    title: "정규성 검정: 샤피로-윌크(Shapiro-Wilk)",
    formula: "H0(귀무가설): 데이터가 정규분포를 따른다. p-value ≥ 0.05면 귀무가설 채택 ➔ 정규성 만족",
    trap: "p-value가 0.05보다 작으면 귀무가설 기각 ➔ 정규분포를 따르지 않는다고 판정!",
    sectionId: "adsp-analysis",
    tags: ["샤피로윌크", "정규성검정", "p-value", "가설검정"],
  },
  {
    id: "roi-48",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 82%+",
    title: "텍스트 마이닝 TF-IDF 가중치 공식",
    formula: "TF-IDF = TF(단어의 문서 내 빈도) × IDF(단어의 역문서 빈도 = log(전체문서수 / 단어등장문서수))",
    trap: "문서 내 빈도가 높더라도 모든 문서에 흔하게 등장하는 불용어(the, a 등)는 IDF가 낮아져 가중치가 낮아짐!",
    sectionId: "adsp-analysis",
    tags: ["TF-IDF", "텍스트마이닝", "단어빈도", "역문서빈도"],
  },
  {
    id: "roi-49",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 81%+",
    title: "요약변수 vs 파생변수 비교",
    formula: "요약변수 = 기간별 합계, 결제 횟수 등 단순 집계 / 파생변수 = 분석가가 조건식·수식으로 특정 의미를 부여해 새로 정의",
    trap: "최근 3개월 구매 총금액은 '요약변수', 주말/평일 구매 비율을 계산해 VIP성향을 정의한 것은 '파생변수'!",
    sectionId: "adsp-analysis",
    tags: ["요약변수", "파생변수", "데이터마트", "피처엔지니어링"],
  },
  {
    id: "roi-50",
    subjectId: "ch3",
    subjectName: "3과목 데이터 분석",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 80%+",
    title: "R기초 패키지 reshape vs plyr",
    formula: "reshape = melt(넓은 형태➔긴 형태 변환) & cast(긴 형태➔넓은 형태 요약) / plyr = ddply (데이터 분할·적용·결합)",
    trap: "가로로 넓은 데이터를 세로로 긴(Long) 데이터로 녹이는 함수는 'melt()'!",
    sectionId: "adsp-analysis",
    tags: ["R패키지", "reshape", "melt", "cast", "plyr"],
  },
];

const DEFAULT_MEMO_TEMPLATE = `[💡 나의 ADsP 시험 직전 최종 암기 노트]
=========================================
[제1과목 데이터 이해]
- DIKW: 데이터(사실) ➔ 정보(의미) ➔ 지식(규칙) ➔ 지혜(통찰)
- SECI: 공통화(암묵→암묵), 표출화(암묵→형식), 연결화(형식→형식), 내면화(형식→암묵)
- DW 4대 특징: 주제 지향성, 통합성, 시계열성, 비휘발성
- 빅데이터 위기 통제: 사생활 침해(사후 책임원칙), 책임 훼손(알고리즘 접근권), 오용(알고리즈미스트)

[제2과목 데이터 분석 기획]
- 분석 4분면: 최적화(K×K), 솔루션(Target K×How U), 통찰(Target U×How K), 발견(U×U)
- 하향식 4단계: 문제 탐색 ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토
- CRISP-DM 6단계: 업무이해 ➔ 데이터이해 ➔ 데이터준비(60~80% 공수) ➔ 모델링 ➔ 평가 ➔ 전개
- 마스터플랜 4분면: 3사분면(시급성 高, 난이도 低) = Quick-Win 최우선

[제3과목 데이터 분석 (60% 비중)]
- F1-Score = 2*(Precision*Recall)/(Precision+Recall) (조화평균)
- 로지스틱 오즈비 = exp(회귀계수) = 승산 배율 증가
- 와드연결법 = 군집 내 오차제곱합(ESS) 증가량 최소화
- 왜도 양수(오른쪽 긴 꼬리): 최빈값 < 중앙값 < 평균
- 시계열 ACF/PACF: PACF 절단 ➔ AR / ACF 절단 ➔ MA
- 앙상블: 배깅 = 분산 감소 / 부스팅 = 편향 감소
- 다중공선성: VIF ≥ 10이면 심각 (해결: 변수제거, PCA, 릿지/라쏘)
- 더빈-왓슨 d ≈ 2 ➔ 자기상관 없음(독립성 만족)
- AIC = 값이 작을수록 우수한 모형
- 실루엣 계수 = (b - a)/max(a, b) [-1 ~ +1 범위]
`;

export function AdspFloatingMemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<"roi" | "scratchpad">("roi");

  // 필터링 상태
  const [selectedSubject, setSelectedSubject] = useState<"all" | "ch1" | "ch2" | "ch3">("all");
  const [selectedGrade, setSelectedGrade] = useState<"all" | "S" | "A" | "B">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // 즐겨찾기(북마크) 상태
  const [starredIds, setStarredIds] = useState<string[]>([]);

  // 유저 스크래치패드 메모 상태
  const [userNotes, setUserNotes] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isCopiedNotes, setIsCopiedNotes] = useState(false);

  // 로컬 스토리지 메모 및 즐겨찾기 동기화
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedNotes = localStorage.getItem("adsp_mindmap_scratchpad");
      if (savedNotes !== null) {
        setUserNotes(savedNotes);
      } else {
        setUserNotes(DEFAULT_MEMO_TEMPLATE);
      }

      const savedStarred = localStorage.getItem("adsp_mindmap_favorites");
      if (savedStarred !== null) {
        try {
          setStarredIds(JSON.parse(savedStarred));
        } catch {
          setStarredIds([]);
        }
      }
    }
  }, []);

  const handleNotesChange = (text: string) => {
    setUserNotes(text);
    if (typeof window !== "undefined") {
      localStorage.setItem("adsp_mindmap_scratchpad", text);
    }
  };

  const toggleStar = (id: string) => {
    setStarredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      if (typeof window !== "undefined") {
        localStorage.setItem("adsp_mindmap_favorites", JSON.stringify(next));
      }
      return next;
    });
  };

  const handleCopyCard = (item: RoiMemoItem) => {
    const textToCopy = `[ADsP 기출 빈출 - ${item.title}]\n공식: ${item.formula}\n주의: ${item.trap}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleCopyAllNotes = () => {
    navigator.clipboard.writeText(userNotes);
    setIsCopiedNotes(true);
    setTimeout(() => setIsCopiedNotes(false), 1800);
  };

  const handleResetNotes = () => {
    if (window.confirm("메모장을 기본 템플릿으로 초기화할까요?")) {
      handleNotesChange(DEFAULT_MEMO_TEMPLATE);
    }
  };

  // 검색 및 필터링된 ROI 리스트
  const filteredList = useMemo(() => {
    return ADSP_ROI_ITEMS.filter((item) => {
      if (onlyFavorites && !starredIds.includes(item.id)) return false;
      if (selectedSubject !== "all" && item.subjectId !== selectedSubject) return false;
      if (selectedGrade !== "all" && item.grade !== selectedGrade) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inFormula = item.formula.toLowerCase().includes(q);
        const inTrap = item.trap.toLowerCase().includes(q);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!inTitle && !inFormula && !inTrap && !inTags) return false;
      }
      return true;
    });
  }, [selectedSubject, selectedGrade, searchQuery, onlyFavorites, starredIds]);

  // 마인드맵 특정 섹션으로 스크롤 이동
  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. 우측 하단 플로팅 트리거 버튼 (창이 닫혀 있을 때 표시) */}
      {/* ======================================================== */}
      {!isOpen && (
        <aside aria-label="ADsP 플로팅 메모장 토글" className="fixed bottom-6 right-6 z-40 print:hidden flex items-center">
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-4 py-3 text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40 active:scale-95"
            aria-label="ADsP 기출 ROI 플로팅 메모장 열기"
          >
            <span className="relative flex size-6 items-center justify-center rounded-full bg-white/20">
              <Flame className="size-3.5 fill-white text-white animate-pulse" />
            </span>
            <div className="flex flex-col items-start leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-tight">ADsP 기출 ROI 메모장</span>
                <span className="rounded bg-black/30 px-1 py-0.2 text-[9px] font-extrabold text-amber-200">
                  TOP 50
                </span>
              </div>
              <span className="text-[10px] text-amber-100/90 font-medium">출제율 95%+ 빈출 요약 & 메모</span>
            </div>
            <Sparkles className="size-4 text-amber-200 transition-transform group-hover:rotate-12" />
          </button>
        </aside>
      )}

      {/* ======================================================== */}
      {/* 2. 플로팅 메모장 위젯 본체 */}
      {/* ======================================================== */}
      {isOpen && (
        <aside aria-label="ADsP 기출 ROI 플로팅 메모장" className={cn(
          "fixed bottom-4 right-4 z-50 print:hidden flex flex-col rounded-2xl border border-amber-500/30 bg-background/95 backdrop-blur-md shadow-2xl transition-all duration-200",
          isMinimized
            ? "w-80 h-14"
            : "w-[94vw] sm:w-[500px] md:w-[560px] max-h-[82vh] h-[660px]"
        )}>
          {/* 상단 헤더 바 */}
          <div className="flex items-center justify-between border-b border-border/80 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-4 py-3 select-none">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-500">
                <Flame className="size-4 fill-amber-500" />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-foreground">
                    ADsP 기출 빈도 & ROI 메모장
                  </h3>
                  <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-300">
                    50개 킬러 탑재
                  </span>
                </div>
                {!isMinimized && (
                  <p className="text-[11px] text-muted-foreground">
                    합격 당락을 가르는 50대 킬러 개념 & 나만의 시험 요약장
                  </p>
                )}
              </div>
            </div>

            {/* 최소화 / 닫기 컨트롤 버튼 */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:text-foreground"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "펼치기" : "최소화"}
                aria-label={isMinimized ? "펼치기" : "최소화"}
              >
                {isMinimized ? <Maximize2 className="size-3.5" /> : <Minimize2 className="size-3.5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:text-foreground hover:bg-destructive/10 hover:text-destructive"
                onClick={() => setIsOpen(false)}
                title="닫기"
                aria-label="닫기"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {/* 본문 콘텐츠 (최소화가 아닐 때만 렌더) */}
          {!isMinimized && (
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* 탭 전환 바 */}
              <div className="flex border-b border-border px-4 pt-2 bg-muted/20">
                <button
                  type="button"
                  onClick={() => setActiveTab("roi")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                    activeTab === "roi"
                      ? "border-amber-500 text-amber-600 dark:text-amber-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Flame className="size-3.5 fill-current" />
                  기출 빈출 ROI 랭킹 (50제)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("scratchpad")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                    activeTab === "scratchpad"
                      ? "border-amber-500 text-amber-600 dark:text-amber-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <FileText className="size-3.5" />
                  나만의 직전 암기장 (Scratchpad)
                </button>
              </div>

              {/* ==================================================== */}
              {/* [TAB 1] 기출 빈출 ROI 랭킹 목록 */}
              {/* ==================================================== */}
              {activeTab === "roi" && (
                <div className="flex flex-1 flex-col overflow-hidden">
                  {/* 검색창 및 필터 바 */}
                  <div className="flex flex-col gap-2 p-3 border-b border-border/60 bg-muted/10">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="키워드 검색 (예: 와드, 오즈, ACF, 지니, 더빈왓슨, F1...)"
                        className="w-full rounded-md border border-input bg-background/80 py-1.5 pl-8 pr-7 text-xs placeholder:text-muted-foreground focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                        >
                          <X className="size-3.5" />
                        </button>
                      )}
                    </div>

                    {/* 과목 필터 칩 */}
                    <div className="flex flex-wrap items-center justify-between gap-1 text-[11px]">
                      <div className="flex flex-wrap gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSubject("all");
                            setOnlyFavorites(false);
                          }}
                          className={cn(
                            "rounded px-2 py-0.5 font-medium transition-colors",
                            selectedSubject === "all" && !onlyFavorites
                              ? "bg-amber-500 text-white font-bold"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          전체 ({ADSP_ROI_ITEMS.length})
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSubject("ch1");
                            setOnlyFavorites(false);
                          }}
                          className={cn(
                            "rounded px-2 py-0.5 font-medium transition-colors",
                            selectedSubject === "ch1" && !onlyFavorites
                              ? "bg-amber-500 text-white font-bold"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          1과목 (10)
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSubject("ch2");
                            setOnlyFavorites(false);
                          }}
                          className={cn(
                            "rounded px-2 py-0.5 font-medium transition-colors",
                            selectedSubject === "ch2" && !onlyFavorites
                              ? "bg-amber-500 text-white font-bold"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          2과목 (11)
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSubject("ch3");
                            setOnlyFavorites(false);
                          }}
                          className={cn(
                            "rounded px-2 py-0.5 font-medium transition-colors",
                            selectedSubject === "ch3" && !onlyFavorites
                              ? "bg-amber-500 text-white font-bold"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          3과목 분석 60% (29)
                        </button>
                        <button
                          type="button"
                          onClick={() => setOnlyFavorites(!onlyFavorites)}
                          className={cn(
                            "rounded px-2 py-0.5 font-bold transition-colors flex items-center gap-1",
                            onlyFavorites
                              ? "bg-amber-600 text-white"
                              : "bg-amber-500/15 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25"
                          )}
                        >
                          <Star className={cn("size-2.5", onlyFavorites ? "fill-white" : "fill-amber-500")} />
                          즐겨찾기 ({starredIds.length})
                        </button>
                      </div>

                      {/* 등급 필터 */}
                      <div className="flex items-center gap-1">
                        {(["all", "S", "A"] as const).map((grade) => (
                          <button
                            key={grade}
                            type="button"
                            onClick={() => setSelectedGrade(grade)}
                            className={cn(
                              "rounded px-1.5 py-0.5 text-[10px] font-bold transition-colors",
                              selectedGrade === grade
                                ? "bg-amber-600 text-white"
                                : "text-muted-foreground hover:bg-muted"
                            )}
                          >
                            {grade === "all" ? "전체급" : `${grade}급`}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 카드 리스트 스크롤 영역 */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                    {filteredList.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                        <HelpCircle className="size-8 stroke-1 text-muted-foreground/60 mb-2" />
                        <p className="text-xs">일치하는 기출 ROI 항목이 없습니다.</p>
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedSubject("all");
                            setSelectedGrade("all");
                            setOnlyFavorites(false);
                          }}
                          className="mt-2 text-xs text-amber-600 underline"
                        >
                          필터 초기화
                        </button>
                      </div>
                    ) : (
                      filteredList.map((item) => {
                        const isStarred = starredIds.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            className="group relative rounded-xl border border-border bg-card p-3 shadow-xs transition-all hover:border-amber-500/50 hover:shadow-md"
                          >
                            {/* 상단 뱃지 및 메타 */}
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={cn(
                                    "rounded px-1.5 py-0.2 text-[10px] font-extrabold uppercase",
                                    item.grade === "S"
                                      ? "bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30"
                                      : item.grade === "A"
                                      ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                                      : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                                  )}
                                >
                                  {item.grade}급 ★★★★★
                                </span>
                                <span className="text-[10px] text-muted-foreground">
                                  {item.subjectName}
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                                  {item.frequencyRate}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleStar(item.id)}
                                  className="flex size-5 items-center justify-center rounded text-muted-foreground hover:text-amber-500"
                                  title={isStarred ? "즐겨찾기 해제" : "즐겨찾기 추가"}
                                >
                                  <Star className={cn("size-3", isStarred && "fill-amber-500 text-amber-500")} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleCopyCard(item)}
                                  className="flex size-5 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
                                  title="암기 요약 복사"
                                >
                                  {copiedId === item.id ? (
                                    <Check className="size-3 text-emerald-500" />
                                  ) : (
                                    <Copy className="size-3" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* 제목 */}
                            <h4 className="text-xs font-bold text-foreground mb-1">
                              {item.title}
                            </h4>

                            {/* 핵심 공식 / 정답 키워드 */}
                            <div className="rounded-md bg-amber-500/10 dark:bg-amber-500/15 p-2 text-[11px] font-medium text-amber-950 dark:text-amber-100 mb-1.5">
                              <div className="flex items-start gap-1">
                                <Zap className="size-3 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                                <span className="font-semibold leading-relaxed">{item.formula}</span>
                              </div>
                            </div>

                            {/* 시험 함정 주의 포인트 */}
                            <div className="rounded-md bg-muted/60 p-2 text-[11px] text-muted-foreground leading-relaxed flex items-start gap-1.5 mb-2">
                              <AlertTriangle className="size-3 shrink-0 text-amber-500 mt-0.5" />
                              <span><strong className="text-foreground font-semibold">함정 방어:</strong> {item.trap}</span>
                            </div>

                            {/* 하단 인터랙션 액션 */}
                            <div className="flex items-center justify-between pt-1 border-t border-border/50 text-[10px]">
                              <div className="flex flex-wrap gap-1 text-muted-foreground">
                                {item.tags.map((tag) => (
                                  <span key={tag} className="hover:text-amber-600">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <button
                                type="button"
                                onClick={() => handleScrollToSection(item.sectionId)}
                                className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                              >
                                마인드맵 이동
                                <ExternalLink className="size-2.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* [TAB 2] 나만의 직전 암기장 (Scratchpad) */}
              {/* ==================================================== */}
              {activeTab === "scratchpad" && (
                <div className="flex flex-1 flex-col p-3 overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                      <BookmarkCheck className="size-3.5 text-amber-500" />
                      작성한 내용은 브라우저에 자동 저장됩니다.
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 text-[10px] gap-1 px-2"
                        onClick={handleCopyAllNotes}
                      >
                        {isCopiedNotes ? (
                          <>
                            <Check className="size-3 text-emerald-500" />
                            복사됨
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" />
                            전체 복사
                          </>
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-[10px] gap-1 px-2 text-muted-foreground hover:text-destructive"
                        onClick={handleResetNotes}
                      >
                        <RotateCcw className="size-3" />
                        초기화
                      </Button>
                    </div>
                  </div>

                  <textarea
                    value={userNotes}
                    onChange={(e) => handleNotesChange(e.target.value)}
                    placeholder="시험 직전 헷갈리는 공식이나 나만의 암기 팁을 자유롭게 적어보세요..."
                    className="flex-1 w-full rounded-xl border border-input bg-card p-3 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none leading-relaxed"
                  />
                  <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>글자 수: {userNotes.length}자</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ 실시간 자동 저장됨</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </aside>
      )}
    </>
  );
}
