import type { MindmapSection } from "@/types/mindmap";

export const understandingMindmap: MindmapSection = {
  id: "understanding",
  title: "개인정보보호의 이해 (1과목 · 10%)",
  description: "개인정보 3단계 개념, 프라이버시권 변천, 신기술 위협과 OECD·GDPR 국제규범",
  chart: `mindmap
  root((개인정보보호의 이해))
    개인정보의 정의와 개념체계
      conceptBox["개인정보 3단계 개념<br/>1) 식별정보 — 그 자체로 개인을 직접 알아볼 수 있는 정보<br/>2) 결합식별정보 — 다른 정보와 쉽게 결합해 알아볼 수 있는 정보<br/>3) 가명정보(개인정보 O) — 추가정보 없이는 식별불가, 보호법 전면 적용(일부 특례)<br/>4) 익명정보(개인정보 X) — 더 이상 식별 불가능, 보호법 적용 완전 제외"]
      privacyHistoryBox["프라이버시 권리의 역사적 변천<br/>1) 1세대 — 혼자 있을 권리(Warren & Brandeis, 1890)<br/>2) 2세대 — 자기정보통제권(독일 연방헌법재판소 인구조사 판결, 1983)<br/>3) 3세대 — 적극적 자기결정권 및 데이터 주권(전송요구권, 프로파일링 대응권)"]
    신기술 프라이버시 이슈와 국제 규범
      newThreatBox["신기술 환경과 새로운 위협<br/>1) 생성형 AI(LLM 학습데이터·프롬프트 유출), IoT 상시수집, 클라우드 컴퓨팅<br/>2) 다크 패턴(Dark Pattern), 알고리즘 편향성과 필터 버블, 디지털 발자국"]
      globalNormBox["국제 프라이버시 원칙과 글로벌 규범<br/>1) OECD 8대 원칙 — 수집제한, 정보정확성, 목적명확화, 이용제한, 안전보호, 공개, 개인참가, 책임<br/>2) EU GDPR — DPO 의무지정, 잊힐 권리(삭제권), 전송요구권, 영향평가(DPIA), 적정성 결정<br/>3) APEC CBPR(국경간 프라이버시 규칙), ISO/IEC 27701(개인정보보호 경영시스템)"]`,
};
