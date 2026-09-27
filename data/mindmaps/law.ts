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
      대응전략
        위험 수용
        위험 감소
        위험 회피
        위험 전가
    비상계획
      BCP 업무연속성
        BIA 영향분석
        RTO RPO
      DRP 재해복구
        Mirror Hot Warm Cold
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
    안전성 확보조치
      비밀번호 일방향 암호화
      고유식별정보 양방향 암호화
      접속기록 보관
    거버넌스와 국제
      CPO 개인정보 보호책임자
      개인정보 처리방침
      GDPR 역외적용`,
  notes: [
    {
      term: "위험 대응 전략",
      items: [
        "위험 수용 — 감수하고 그대로 받아들임",
        "위험 감소 — 통제를 적용해 위험을 낮춤",
        "위험 회피 — 위험을 유발하는 활동 자체를 중단",
        "위험 전가 — 보험 등으로 제3자에게 이전",
      ],
    },
    {
      term: "BCP 수립 절차",
      items: [
        "BCP 정책 선언",
        "BIA로 핵심 기능과 RTO 산정",
        "예방 통제 식별",
        "복구 전략 개발과 연속성 계획 수립",
        "계획 및 모의훈련",
      ],
    },
    {
      term: "DRS 유형",
      items: [
        "Mirror Site — Active-Active 이중화, 실시간 동기",
        "Hot Site — Active-Standby, 높은 가용성",
        "Warm Site — 핵심 업무 위주로만 구축",
        "Cold Site — 기반 시설만 미리 구축",
      ],
    },
    {
      term: "개인정보 안전성 확보조치",
      items: [
        "비밀번호 — 일방향(해시) 암호화",
        "주민번호 등 고유식별정보 — 양방향 암호화",
        "접속기록 — 6개월 이상 보관",
        "접근권한 부여·변경 기록 — 5년간 보관",
      ],
    },
  ],
};
