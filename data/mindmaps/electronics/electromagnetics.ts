import type { MindmapSection } from "@/types/mindmap";

export const electromagneticsMindmap: MindmapSection = {
  id: "electromagnetics",
  title: "전기자기학과 고주파 물리 현상",
  description: "정전계·정자계, 맥스웰 방정식, 표피효과·기생성분 등 실무 연계 고주파 현상",
  chart: `mindmap
  root((전기자기학과 고주파 물리 현상))
    정전계와 정자계
      electrostaticBox["정전계 기초<br/>1) 전하, 쿨롱 법칙, 가우스 법칙<br/>2) 전계 E, 전위 V<br/>3) 정전에너지 W = (1/2)CV^2"]
      magnetostaticBox["정자계와 자성체<br/>1) 비오-사바르 법칙, 앙페르 주회적분 법칙<br/>2) 자화 세기<br/>3) 자기회로 — 자기저항 Rm = l/(μA)"]
    시변 전자계와 맥스웰 방정식
      maxwellBox["맥스웰 4대 방정식(실기)<br/>1) ∇·D = ρ — 가우스 법칙(전기)<br/>2) ∇·B = 0 — 가우스 법칙(자기)<br/>3) ∇×E = -∂B/∂t — 패러데이 법칙<br/>4) ∇×H = J + ∂D/∂t — 앙페르-맥스웰 법칙"]
      displacementBox["변위전류와 포인팅 벡터(실기)<br/>1) 변위전류밀도 id = ∂D/∂t — 유전체 내 전하 이동 없이도 회전 자계 H를 형성<br/>2) 포인팅 벡터 S = E×H [W/m^2] — 전자파가 운반하는 전력밀도"]
    기생 성분과 고주파 효과
      skinEffectBox["표피 효과(실기)<br/>1) δ = √(ρ/(πfμ)) — 주파수가 높을수록 표피 두께가 얇아지고 도체 손실 증가<br/>2) 고주파 전류가 도체 표면 근처로 집중되는 현상"]
      parasiticBox["배선 기생성분과 커플링<br/>1) 배선 인덕턴스(ESL) — V = L(di/dt)에 의한 접지 바운스(Ground Bounce)<br/>2) 근접장(Near-Field)의 용량성·유도성 커플링과 차폐(Shielding) 원리"]`,
};
