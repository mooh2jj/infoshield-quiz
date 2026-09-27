import type { MindmapSection } from "@/types/mindmap";

export const lawMindmap: MindmapSection = {
  id: "law",
  title: "정보보호 관리 및 법규",
  description: "위험관리·BCP·ISMS-P와 개인정보보호법",
  chart: `mindmap
  root((정보보호 관리 및 법규))
    위험관리
      구성요소 자산 위협 취약점
      분석기법
        정성적 분석
        정량적 분석
        기준선 접근법
      responseBox["위험 대응 전략<br/>1) 위험 수용 — 감수하고 받아들임<br/>2) 위험 감소 — 통제를 적용해 낮춤<br/>3) 위험 회피 — 활동 자체를 중단<br/>4) 위험 전가 — 보험 등 제3자에게 이전"]
    비상계획
      bcpBox["BCP 업무연속성<br/>1) BCP 정책 선언<br/>2) BIA로 핵심 기능과 RTO 산정<br/>3) 예방 통제 식별<br/>4) 복구 전략 및 연속성 계획 개발<br/>5) 계획 및 모의훈련"]
        BIA 영향분석
        RTO RPO
      DRP 재해복구
        drsBox["DRS 유형<br/>1) Mirror — Active Active 실시간 이중화<br/>2) Hot — Active Standby, 높은 가용성<br/>3) Warm — 핵심 업무 위주로만 구축<br/>4) Cold — 기반 시설만 미리 구축"]
      백업 전략 Full Incremental Differential
    ISMS P 인증
      의무대상 ISP IDC 매출 1500억 이상
      관리체계 수립운영
      보호대책 12개 영역
      2단계 구조
        ISMS
        ISMS P
    개인정보보호법
      처리 원칙 수집 이용 제공 파기
      정보주체 권리 열람 정정 삭제 처리정지
      아동 보호 법정대리인 동의
      유출 대응 72시간 이내 통지
      처리 방식
        가명처리
        위탁과 제3자 제공 구분
    safetyBox["개인정보 안전성 확보조치<br/>1) 비밀번호 — 일방향(해시) 암호화<br/>2) 고유식별정보 — 양방향 암호화<br/>3) 접속기록 — 6개월 이상 보관<br/>4) 접근권한 부여·변경 기록 — 5년간 보관"]
    거버넌스와 국제
      CPO 개인정보 보호책임자
      개인정보 처리방침
      GDPR 역외적용`,
};
