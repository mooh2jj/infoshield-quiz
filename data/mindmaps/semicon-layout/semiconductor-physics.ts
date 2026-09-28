import type { MindmapSection } from "@/types/mindmap";

export const semiconductorPhysicsMindmap: MindmapSection = {
  id: "semiconductor-physics",
  title: "반도체공학",
  description: "에너지 밴드·캐리어·pn접합, MOSFET 소자 원리와 단채널 효과, 전공정 8대 공정",
  chart: `mindmap
  root((반도체공학))
    반도체 물리 기초
      bandBox["에너지 밴드와 페르미 준위<br/>1) 가전자대, 전도대, 밴드갭 Eg — Si 1.12eV, GaAs 1.42eV, Ge 0.66eV<br/>2) 페르미-디락 분포와 페르미 준위(Ef)"]
      carrierBox["캐리어 농도와 이동<br/>1) 진성(Intrinsic) vs 외인성(Extrinsic)<br/>2) 도핑 — n형(P, As), p형(B)<br/>3) 드리프트(Drift) vs 확산(Diffusion), 아인슈타인 관계식"]
      pnJunctionBox["pn 접합 다이오드<br/>1) 공핍 영역(Depletion Region), 빌트인 전위(Vbi)<br/>2) 항복 현상 — 제너(Zener) vs 애벌런치(Avalanche) 항복"]
    MOSFET 소자 원리
      mosStructureBox["MOS 구조와 동작 영역<br/>1) 축적(Accumulation) → 공핍(Depletion) → 반전(Inversion), 문턱전압(Vth)<br/>2) 차단(Cut-off) → 선형/트라이오드(Vds<Vgs-Vth) → 포화(Vds≥Vgs-Vth, 핀치오프)"]
      mosCurrentBox["MOSFET 드레인 전류 수식(실기)<br/>1) 차단 영역 — Id ≈ 0<br/>2) 선형 영역 — Id = μCox(W/L)[(Vgs-Vth)Vds - 0.5Vds^2]<br/>3) 포화 영역 — Id = 0.5μCox(W/L)(Vgs-Vth)^2(1+λVds)"]
      sceBox["단채널 효과 SCE(실기)<br/>1) DIBL — 드레인 유도 장벽 감소, Vds 증가로 Vth 감소<br/>2) 속도 포화(Velocity Saturation), 핫 캐리어 주입(HCI)<br/>3) 펀치스루(Punch-through) — 소스·드레인 공핍층이 맞닿아 게이트 제어 불능"]
    반도체 제조 공정
      frontEndBox["전공정 8대 공정(실기)<br/>1) 웨이퍼 제조 → 산화(Thermal Oxidation, Dry vs Wet) → 포토리소그래피(노광·현상)<br/>2) 식각(습식 등방성 vs 건식 이방성 RIE) → 박막 증착(CVD, ALD, PVD/Sputter) → 이온 주입<br/>3) 금속 배선(Metallization, Cu Damascene) 및 화학기계적 연마(CMP)"]
      channelingBox["이온주입 채널링 현상(실기)<br/>1) 결정 격자 방향과 이온빔이 나란할 때 충돌 없이 깊이 침투해 불순물 프로파일 왜곡<br/>2) 방지책 — 웨이퍼를 약 7도 틸트(Tilt) 및 트위스트(Twist)하여 입사, 스크린 산화막으로 입사각 무작위화"]`,
};
