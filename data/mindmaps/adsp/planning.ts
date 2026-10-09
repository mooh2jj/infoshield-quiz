import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const PLANNING_NOTES: Record<string, MindmapNodeNote> = {
  "분석 과제 발굴": {
    title: "분석 과제 4분면 매트릭스 (Target × How)",
    importance: 5,
    badge: "2과목 빈출 1순위",
    definition: "분석 대상(Target, What)과 분석 방법(How)의 인지 여부에 따라 도출되는 4가지 과제 유형.",
    keyPoints: [
      "최적화(Optimization): 대상 알고(Known), 방법 안다(Known)",
      "솔루션(Solution): 대상 알고(Known), 방법 모른다(Unknown)",
      "통찰(Insight): 대상 모르고(Unknown), 방법 안다(Known)",
      "발견(Discovery): 대상 모르고(Unknown), 방법 모른다(Unknown)",
    ],
    examTip: "Known/Unknown 조합별 명칭(최적화, 솔루션, 통찰, 발견) 암기!",
  },
  "접근법 비교": {
    title: "하향식(Top-Down) vs 상향식(Bottom-Up)",
    importance: 5,
    badge: "프로세스 필수",
    definition: "명확한 비즈니스 문제로부터 시작하는 하향식과 데이터 탐색으로부터 새로운 통찰을 찾는 상향식 접근법.",
    keyPoints: [
      "하향식 접근 4단계: 문제 탐색 ➔ 문제 정의 ➔ 해결방안 탐색 ➔ 타당성 검토",
      "상향식 접근: 데이터 관찰 및 EDA를 통해 문제 자체를 새롭게 정의(비지도학습 주도)",
      "디자인 씽킹: 더블 다이아몬드 모델(발산 ➔ 수렴 ➔ 발산 ➔ 수렴)로 두 접근법 통합",
    ],
    examTip: "하향식 4단계 순서: 탐색 ➔ 정의 ➔ 해결방안 ➔ 타당성검토 순서 암기 필수!",
  },
  "분석 방법론": {
    title: "KDD와 CRISP-DM 분석 방법론",
    importance: 4,
    badge: "표준 프로세스",
    definition: "데이터 마이닝 및 분석 프로젝트를 체계적으로 수행하기 위한 표준 생명주기 프로세스.",
    keyPoints: [
      "KDD 5단계: 선택 ➔ 전처리 ➔ 변환 ➔ 데이터 마이닝 ➔ 평가",
      "CRISP-DM 6단계: 업무 이해 ➔ 데이터 이해 ➔ 데이터 준비 ➔ 모델링 ➔ 평가 ➔ 전개",
      "가장 많은 공수 소요: '데이터 준비(Data Preparation)' 단계 (전체의 60~80%)",
      "빅데이터 방법론 3계층: 단계(Phase) ➔ 태스크(Task) ➔ 스텝(Step)",
    ],
    examTip: "CRISP-DM 6단계 순서와 데이터 준비 단계의 비중이 단골 출제!",
  },
  "거버넌스 및 성숙도": {
    title: "데이터 거버넌스와 분석 성숙도/준비도",
    importance: 5,
    badge: "조직 및 전략",
    definition: "전사 분석을 지속적이고 체계적으로 관리하기 위한 제도, 조직 구조 및 역량 진단 체계.",
    keyPoints: [
      "거버넌스 4대 구성요소: 조직, 프로세스, 시스템, 데이터 표준",
      "성숙도 4단계: 도입 ➔ 활용 ➔ 확산 ➔ 최적화",
      "분석 수준 4분면: 준비형(준비도 高, 성숙도 低), 정착형(준비도 低, 성숙도 高), 도입형(둘 다 低), 확산형(둘 다 高)",
      "조직 구조 3가지: 집중형(전담 CoE), 기능형(각 현업 부서 수행), 분산형(현업에 분석가 배치)",
    ],
    examTip: "준비형(준비도만 높음)과 확산형(둘 다 높음)의 차이점 기억하기!",
  },
};

export const adspPlanningMindmap: MindmapSection = {
  id: "adsp-planning",
  title: "제2과목 데이터 분석 기획",
  description: "과제 발굴 4분면, 하향식/상향식 접근법, CRISP-DM 방법론, 데이터 거버넌스 및 성숙도 진단",
  chart: `mindmap
  root((제2과목<br/>분석 기획))
    분석 과제 발굴
      과제 4분면 매트릭스
        최적화
        솔루션
        통찰
        발견
      하향식 접근법
        문제 탐색
        문제 정의
        해결방안 탐색
        타당성 검토
      상향식 접근법
        발산과 수렴
        디자인 씽킹
    분석 방법론
      KDD 방법론
        선택 전처리 변환 마이닝 평가
      CRISP-DM
        업무이해
        데이터이해
        데이터준비
        모델링
        평가
        전개
      빅데이터 방법론
        단계 태스크 스텝
    마스터 플랜 수립
      우선순위 평가
        전략적 중요도
        실행 용이성
      포트폴리오 사분면
        시급성 vs 난이도
        Quick-Win 과제
    분석 거버넌스
      4대 구성요소
        조직 프로세스 시스템 표준
      분석 조직 구조
        집중형 조직
        기능형 조직
        분산형 조직
      성숙도 및 준비도
        준비형 정착형 도입형 확산형
        성숙도 4단계`,
  notes: PLANNING_NOTES,
};
