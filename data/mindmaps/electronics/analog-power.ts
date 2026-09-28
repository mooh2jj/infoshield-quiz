import type { MindmapSection } from "@/types/mindmap";

export const analogPowerMindmap: MindmapSection = {
  id: "analog-power",
  title: "전자회로설계와 전원 아날로그 Front-End",
  description: "반도체 소자·OP-Amp·발진기, LDO·벅/부스트 컨버터와 열 설계 실무",
  chart: `mindmap
  root((전자회로설계와 전원 Front-End))
    반도체 소자와 증폭기
      diodeTransistorBox["다이오드와 BJT FET<br/>1) 다이오드 — 정류, 클램퍼, 제너<br/>2) BJT/FET 바이어스와 소신호 모델 — CE/CC/CB(BJT), CS/CD(FET)"]
      opampBox["연산증폭기 OP-Amp(실기)<br/>1) 반전/비반전, 차동, 계측증폭기(In-Amp)<br/>2) CMRR = 20log(Ad/Ac) — 공통모드 노이즈 억제 능력<br/>3) 슬루율(Slew Rate)과 GBW(이득대역폭곱) — 최대 무왜곡 주파수 fmax = SR / (2πVp)"]
      oscillatorFilterBox["발진기와 필터<br/>1) 바크하우젠 조건 — |βA|=1, ∠βA=0도<br/>2) 윈-브리지 발진기, 수정 진동자<br/>3) 능동 LPF/HPF/BPF"]
    전원 회로와 열 설계
      ldoBox["LDO 선형 레귤레이터(실기)<br/>1) 드롭아웃 전압, PSRR(전원 노이즈 제거비)<br/>2) 발열 손실 PD = (Vin-Vout) × Iload<br/>3) 접합부 온도 TJ = TA + PD×θJA, 통상 125도 이하 유지"]
      buckBoostBox["벅·부스트 컨버터(실기)<br/>1) 인덕터 선정 — L = Vout(Vin-Vout) / (ΔIL × fsw × Vin)<br/>2) 불연속 모드(DCM) vs 연속 모드(CCM)<br/>3) 포화전류(Isat)는 피크전류보다 20~30% 이상 마진 확보"]
      hotLoopBox["스위칭 노이즈 핫루프 최소화(실기)<br/>1) 입력 커패시터를 IC 전원핀 바로 옆 최단 배선으로 배치해 루프 면적 최소화<br/>2) 쇼트키 다이오드·동기정류 MOSFET 선정"]
      thermalBox["열저항과 방열 설계<br/>1) 열저항 θJA 기반 방열판(Heatsink) 용량 계산<br/>2) 써멀 비아(Thermal Via) 팜 면적 확대로 방열 경로 확보"]`,
};
