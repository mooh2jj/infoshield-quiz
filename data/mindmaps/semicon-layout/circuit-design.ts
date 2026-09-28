import type { MindmapSection } from "@/types/mindmap";

export const circuitDesignMindmap: MindmapSection = {
  id: "circuit-design",
  title: "반도체 회로 설계",
  description: "단일단 증폭기·차동증폭기·캐스코드·2단 OP-Amp, CMOS 인버터와 복합게이트",
  chart: `mindmap
  root((반도체 회로 설계))
    아날로그 증폭 회로
      singleStageBox["BJT MOS 단일단 증폭기<br/>1) 공통 소스(CS) — 전압이득 -gm·ro<br/>2) 공통 드레인(CD, 소스 팔로워) — 전압이득 ≈ 1<br/>3) 공통 게이트(CG)"]
      diffAmpBox["차동증폭기와 전류거울<br/>1) 차동 이득(Ad), 공통모드 이득(Ac), CMRR 향상 기법<br/>2) 전류 거울(Current Mirror) — 기본 거울, 캐스코드 전류거울(출력 임피던스 향상)"]
      cascodeBox["캐스코드 구조(실기)<br/>1) 출력저항을 단일 트랜지스터 대비 gm·ro배 증가시켜 높은 전압이득 확보<br/>2) 드레인 전압을 일정하게 유지해 Cgd 밀러 커패시턴스를 억제, 고주파 대역폭 확장<br/>3) 단점 — 전압 헤드룸(Headroom) 감소"]
      opampBox["2단 OP-Amp<br/>1) 차동 입력단 + 공통 소스 증폭단 2단 구성<br/>2) 밀러 보상 커패시터(Cc)를 통한 위상 마진 확보"]
    디지털 CMOS 로직 설계
      cmosInverterBox["CMOS 인버터(실기)<br/>1) VTC(전압 전달 특성), 노이즈 마진(NMH, NML)<br/>2) 논리 임계전압 — βn=βp, |Vthn|=|Vthp| 대칭 조건에서 Vinv = VDD/2"]
      delayBox["지연 시간과 사이징(실기)<br/>1) 상승시간(tr), 하강시간(tf), 전파지연(tpd)<br/>2) 실리콘의 μn ≈ 2.5×μp(전자가 정공보다 빠름)를 보정하기 위해 (W/L)p ≈ (2~3)×(W/L)n으로 설계"]
      logicGateBox["조합 순서논리와 복합게이트(실기)<br/>1) 복합 게이트 — AOI, OAI, 풀업(PMOS)·풀다운(NMOS)은 서로 쌍대(Dual) 구조(직렬↔병렬)<br/>2) Pass-Transistor/Transmission Gate<br/>3) D 플립플롭, 래치"]`,
};
