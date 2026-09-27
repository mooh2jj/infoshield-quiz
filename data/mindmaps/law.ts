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
};
