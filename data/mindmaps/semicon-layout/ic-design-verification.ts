import type { MindmapSection } from "@/types/mindmap";

export const icDesignVerificationMindmap: MindmapSection = {
  id: "ic-design-verification",
  title: "집적회로 설계와 검증",
  description: "레이어 순서·래치업·핑거링, DRC·LVS·PEX, 전자이동·IR Drop·안테나 효과",
  chart: `mindmap
  root((집적회로 설계와 검증))
    커스텀 레이아웃 기본 규칙
      layerOrderBox["레이어 순서(실기)<br/>1) N-well → Active(OD) → Poly<br/>2) N+/P+ Implant → Contact<br/>3) Metal 1 → Via 1 → Metal 2"]
      latchupBox["래치업과 가드링(실기)<br/>1) 기생 pnp(p+소스-Nwell-Psub)와 기생 npn(n+소스-Psub-Nwell)이 결합된 기생 SCR 구조<br/>2) 방지 — Guard Ring을 소자 주위에 밀착 배치해 기판·웰 저항 최소화<br/>3) Well Tap·Sub Tap 간격을 통상 20~30μm 이내로 촘촘히 배치"]
      fingerBox["트랜지스터 핑거링과 멀티플라이어<br/>1) 큰 채널폭(W)을 여러 핑거(Finger)로 병렬 분할해 소스·드레인을 공유(Interdigitated)<br/>2) 게이트 저항(Rg) 감소와 접합 기생 커패시턴스(Cdb, Csb) 감소, 채널길이(L)는 그대로 유지"]
    물리적 검증
      drcLvsBox["DRC와 LVS(실기)<br/>1) DRC(Design Rule Check) — 폭(Width), 간격(Spacing), 둘러쌈(Enclosure), 확장(Extension) 검사<br/>2) LVS(Layout Versus Schematic) — 회로도와 레이아웃의 소자·넷리스트 일치 검사(단락, 개방, 파라미터 불일치)"]
      ercPexBox["ERC와 PEX<br/>1) ERC(Electrical Rule Check) — 플로팅 게이트, 웰 탭 누락, 파워 쇼트 검사<br/>2) PEX(Parasitic Extraction) — 기생 저항·커패시턴스 추출 후 포스트 레이아웃 시뮬레이션"]
    신뢰성과 레이아웃 이펙트
      emIrBox["전자이동과 IR Drop(실기)<br/>1) 전자이동(Electromigration) — 전류밀도 한계치(Jmax) 초과 시 보이드(Void)·힐록(Hillock) 발생<br/>2) IR Drop — VDD/VSS 금속배선 저항으로 인한 전압강하, 메쉬형 파워 그리드로 완화"]
      antennaBox["안테나 효과(실기)<br/>1) 식각 공정 플라즈마 전하가 긴 금속배선에 축적되어 얇은 게이트 산화막을 파괴<br/>2) 방지책 — 안테나 다이오드(역방향 pn)를 병렬 삽입, 상위 메탈로 점퍼(Jumper) 배선해 배선 길이 분할"]
      ldeBox["레이아웃 의존성 효과 LDE<br/>1) WPE(웰 근접 효과) — 웰 경계와의 거리에 따른 소자 특성 변화<br/>2) PSE(포토 스트레스 효과), STI 응력 효과"]`,
};
