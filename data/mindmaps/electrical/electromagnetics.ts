import type { MindmapSection } from "@/types/mindmap";

export const electromagneticsMindmap: MindmapSection = {
  id: "electromagnetics",
  title: "전기자기학 (정전계·정자계·전자계 & 맥스웰)",
  description: "쿨롱의 법칙, 가우스 정리와 유전체 경계조건, 비오-사바르 법칙, 인덕턴스와 맥스웰 4대 방정식",
  chart: `mindmap
  root((전기자기학))
    정전계 Electrostatics
      쿨롱의 법칙과 전계
        coulombBox["쿨롱 법칙과 전계<br/>1) 쿨롱 법칙: F = 1/(4πε0) * (Q1Q2 / r^2) ≈ 9×10^9 Q1Q2/r^2<br/>2) 전계 E = -∇V, 전위 V = Q / (4πε0 r)<br/>3) 가우스 정리: ∮E·da = Q/ε, 발산정리 ∇·E = ρ/ε"]
      도체계와 정전에너지
        energyBox["정전용량과 에너지<br/>1) 정전용량: C = Q/V = εA/d [F]<br/>2) 구도체 C = 4πεr, 동심구 C = 4πεab/(b-a)<br/>3) 정전에너지: W = 1/2 QV = 1/2 CV^2 = Q^2/(2C) [J]<br/>4) 단위체적당 에너지: w = 1/2 εE^2 = 1/2 ED [J/m^3]"]
      유전체와 경계조건
        dielectricBox["유전체와 분극<br/>1) 분극의 세기: P = ε0(εr - 1)E = D(1 - 1/εr)<br/>2) 전속밀도: D = εE = ε0 E + P [C/m^2]<br/>3) 경계조건: 전속밀도 법선성분 연속 (D1n = D2n)<br/>4) 전계 접선성분 연속 (E1t = E2t), 굴절법칙 tanθ1/tanθ2 = ε1/ε2"]
    정자계 Magnetostatics
      자석과 자계
        magnetBox["쿨롱 법칙과 자계<br/>1) 자석 쿨롱 법칙: F = 1/(4πμ0) * (m1m2 / r^2) ≈ 6.33×10^4 m1m2/r^2<br/>2) 자계의 세기: H = m / (4πμ0 r^2) [AT/m]<br/>3) 자위 U, 자기 쌍극자 모멘트 M = ml"]
      전류와 자계
        currentMagBox["전류에 의한 자계<br/>1) 비오-사바르 법칙: dH = (I dl sinθ) / (4π r^2)<br/>2) 앙페르 주회적분 법칙: ∮H·dl = ΣI<br/>3) 무한직선 H = I/(2πr), 원형코일 중심 H = NI/(2r)<br/>4) 무한솔레노이드 내부 H = n0 I [AT/m]"]
      자성체와 자기회로
        magCircuitBox["자성체와 자기회로<br/>1) 자화의 세기: J = μ0(μr - 1)H [Wb/m^2]<br/>2) 자기저항: Rm = l / (μ A) [AT/Wb]<br/>3) 옴의 법칙: Φ = NI / Rm [Wb]<br/>4) 자기 인덕턴스: L = NΦ/I = μN^2 A / l [H]<br/>5) 자기에너지: W = 1/2 LI^2 [J]"]
    전자계 및 맥스웰 방정식
      전자유도와 와전류
        inductionBox["패러데이 전자유도<br/>1) 유기기전력: e = -N (dΦ/dt) (렌츠의 법칙: 역방향)<br/>2) 플레밍의 오른손 법칙: e = B l v sinθ<br/>3) 표피효과: 침투깊이 δ = √(2 / (ω μ σ))<br/>4) 와류손 Pe ∝ f^2 Bm^2 t^2"]
      맥스웰 4대 방정식
        maxwellBox["맥스웰 방정식 & 파동<br/>1) ∇·D = ρ (전하에서 전속선 발생)<br/>2) ∇·B = 0 (고립된 자극 부존재)<br/>3) ∇×E = -∂B/∂t (패러데이 법칙)<br/>4) ∇×H = J + ∂D/∂t (앙페르-맥스웰, 변위전류 포함)<br/>5) 포인팅 벡터: S = E × H [W/m^2], 파동속도 v = 1/√(με)"]`,
};
