import type { MindmapSection } from "@/types/mindmap";
import { PLANNING_NOTES } from "@/data/mindmaps/bigdata/planning-notes";

export const planningMindmap: MindmapSection = {
  id: "planning",
  title: "빅데이터 분석 기획",
  description: "빅데이터 특성, 분석 방법론, 과제 발굴과 개인정보 비식별화",
  chart: `mindmap
  root((빅데이터 분석 기획))
    빅데이터 특성
      vBox["빅데이터 특성(실기)<br/>1) Volume — 데이터의 규모<br/>2) Velocity — 데이터 생성·처리 속도<br/>3) Variety — 정형·비정형 등 데이터 다양성<br/>4) Veracity — 데이터의 정확성·신뢰성<br/>5) Value — 데이터가 가지는 가치"]
    분석 방법론
      methodologyBox["데이터 분석 방법론<br/>1) KDD — 선택→전처리→변환→마이닝→해석평가<br/>2) CRISP-DM — 산업 표준 데이터 마이닝 방법론, 6단계<br/>3) SEMMA — Sample→Explore→Modify→Model→Assess"]
      crispDmBox["CRISP-DM 6단계 순서(실기)<br/>1) 업무 이해 — 비즈니스 목표 설정<br/>2) 데이터 이해 — 초기 데이터 수집·탐색<br/>3) 데이터 준비 — 정제·변환(전체 시간의 60~80% 소요)<br/>4) 모델링 — 알고리즘 적용과 파라미터 튜닝<br/>5) 평가 — 비즈니스 목적 부합 여부 평가<br/>6) 전개 — 운영 환경 배포와 모니터링"]
    분석 과제 발굴
      taskDiscoveryBox["분석 과제 발굴 접근법<br/>1) 하향식(Top-Down) — 문제 탐색→정의→해결방안, 이미 알려진 문제 해결<br/>2) 상향식(Bottom-Up) — 데이터 기반으로 인사이트를 발견, 비지도학습 활용"]
      masterPlanBox["분석 마스터플랜 우선순위<br/>1) 전략적 중요도 — 비즈니스 성과에 미치는 영향<br/>2) 실행 용이성 — 데이터 준비도와 기술 난이도<br/>3) 시급성을 먼저 고려한 뒤 난이도를 함께 판단"]
      analysisTypeBox["4가지 분석 과제 유형(Target×How, ADsP)<br/>1) 최적화 — 대상 Known + 방법 Known<br/>2) 통찰 — 대상 Known + 방법 Unknown<br/>3) 솔루션 — 대상 Unknown + 방법 Known<br/>4) 발견 — 대상 Unknown + 방법 Unknown"]
      readinessBox["분석 준비도·성숙도 매트릭스(ADsP)<br/>1) 준비형 — 준비도↓ 성숙도↓, 분석 미도입<br/>2) 정착형 — 준비도↑ 성숙도↓, 인프라는 있으나 현업에 미내재화<br/>3) 도입형 — 준비도↓ 성숙도↑, 부서 주도로 실무 활용 중<br/>4) 확산형 — 준비도↑ 성숙도↑, 전사적 분석 역량 완비"]
    조직과 역량
      dataScienceSkillBox["데이터 사이언티스트 역량<br/>1) Hard Skill — 빅데이터 이론 지식과 분석 기술 숙련도<br/>2) Soft Skill — 통찰력 있는 분석, 설득력 있는 전달력, 협업 능력"]
      orgStructureBox["빅데이터 조직 구조 유형<br/>1) 집중형 — 전사 분석조직을 신설, 우선순위가 명확<br/>2) 기능형 — 현업부서가 자체 수행, 신속하나 중복 투자 우려<br/>3) 분산형 — 별도 조직을 각 부서에 배치, 협업과 전사 관점을 함께 유지"]
      governanceBox["데이터 거버넌스 구성요소<br/>1) 원칙 — 데이터 유지·관리를 위한 지침<br/>2) 조직 — 역할과 책임을 가진 담당 조직<br/>3) 프로세스 — 데이터 관리를 위한 활동과 체계"]
    개인정보 비식별화
      deidentifyBox["개인정보 비식별화 기법<br/>1) 가명처리 — 다른 값으로 대체<br/>2) 총계처리 — 개별값 대신 통계값으로 대체<br/>3) 데이터 삭제 — 식별 가능 항목 자체를 삭제<br/>4) 범주화 — 구체적 값을 범주로 묶음<br/>5) 마스킹 — 값의 일부를 가림"]
      privacyModelBox["프라이버시 보호 모델(실기)<br/>1) k-익명성 — 동일 준식별자 레코드를 k개 이상 유지, 동질성 공격에 취약<br/>2) l-다양성 — 동질 집단 내 민감정보가 l개 이상의 다른 값을 가지도록 보장<br/>3) t-근접성 — 동질 집단과 전체 데이터셋의 분포 차이를 t 이하로 유지"]
      threeActsBox["데이터 3법(실기)<br/>1) 개인정보보호법·정보통신망법·신용정보법 개정을 묶어 지칭<br/>2) 가명정보는 통계작성·과학적연구·공익적기록보존 목적이면 동의 없이 활용 가능"]
    지식체계와 패러다임
      dikwBox["DIKW 피라미드(ADsP)<br/>1) Data — 가공되지 않은 순수한 사실<br/>2) Information — 데이터를 상황에 맞게 가공·정리<br/>3) Knowledge — 정보를 통해 파악한 원리·규칙<br/>4) Wisdom — 지식에 창의적 아이디어를 더한 통찰"]
      seciBox["SECI 지식창조 모델(ADsP)<br/>1) 공통화 — 암묵지→암묵지, 경험·관찰로 공유<br/>2) 표출화 — 암묵지→형식지, 노하우를 문서로 기록<br/>3) 연결화 — 형식지→형식지, 문서·지식을 결합·재구성<br/>4) 내면화 — 형식지→암묵지, 학습해 개인 역량으로 체화"]
      paradigmBox["빅데이터 4대 패러다임 변화(ADsP)<br/>1) 사전처리 → 사후처리 — 먼저 적재한 뒤 필요할 때 가공<br/>2) 표본조사 → 전수조사 — 인프라 발전으로 전체 데이터 처리 가능<br/>3) 품질(Quality) → 양(Quantity) — 대량의 비정형 데이터도 포용<br/>4) 인과관계 → 상관관계 — 통계적 상관성 발견에 주력"]
      crisisBox["빅데이터 3대 위기 요인과 통제(ADsP)<br/>1) 사생활 침해 — 동의제에서 책임제로 전환해 대응<br/>2) 책임 원칙 훼손 — 예측만으로 불이익을 주지 않는 결과 기반 책임 원칙 고수<br/>3) 데이터 오용(알고리즘 맹신) — 알고리즈미스트가 판단 근거를 설명"]`,
  notes: PLANNING_NOTES,
};
