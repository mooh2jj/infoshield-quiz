import type { MindmapSection } from "@/types/mindmap";

export const layoutPracticalMindmap: MindmapSection = {
  id: "layout-practical",
  title: "실기 작업형과 단면도 스케치",
  description: "EDA 레이아웃 실무, 공통중심점·더미패턴, CMOS 단면 구조와 LVS 디버깅",
  chart: `mindmap
  root((실기 작업형과 단면도 스케치))
    EDA 레이아웃 작업형
      edaBox["EDA 툴 커스텀 레이아웃(실기)<br/>1) MyCAD, L-Edit, Virtuoso 등 툴로 회로도 해석과 부품 사이징(W/L) 매핑<br/>2) 공유 액티브(Diffusion)와 VDD/VSS 파워 레일 라우팅으로 면적 최소화<br/>3) DRC 0개, LVS 무오류(Clean) 달성 후 셀 저장"]
      commonCentroidBox["공통 중심점 배치(실기)<br/>1) 소자를 4개 이상 유닛으로 쪼개 중심점이 일치하도록 교차 배치(Cross-coupled)<br/>2) 웨이퍼의 온도 구배·산화막 두께 편차를 상쇄해 두 소자의 매칭 오프셋을 극소화"]
      dummyBox["더미 패턴 삽입(실기)<br/>1) 식각·CMP 공정에서 패턴 밀도 불균일로 인한 디싱(Dishing)·가장자리 깎임(WPE) 방지<br/>2) 외곽에 더미 트랜지스터·더미 메탈을 채워 중심부와 동일한 공정 환경을 조성, 소자 매칭 정밀도 확보"]
    단면도 스케치와 디버깅
      crossSectionBox["CMOS 단면 구조(실기)<br/>1) P-substrate 위에 N-well이 위치 — PMOS는 N-well 내부(p+ 소스/드레인), NMOS는 P-기판 영역(n+ 소스/드레인)<br/>2) 게이트 산화막 위에 Polysilicon 게이트, Metal 1은 층간절연막(ILD)을 관통하는 Contact로 연결"]
      lvsDebugBox["LVS 에러 디버깅(실기)<br/>1) Unmatched Nets/Short Circuit — 서로 다른 넷의 Metal·Poly가 레이아웃 상에서 물리적으로 겹쳤는지 확인<br/>2) 핀 레이블(Text Pin)이 엉뚱한 메탈 레이어에 찍혀 포트 매핑이 잘못됐는지 확인"]
      emCalcBox["전자이동 메탈폭 계산(실기)<br/>1) 최소 배선폭 Wmin = IDC(또는 IRMS) / (Jmax × tmetal)<br/>2) 전원선(VDD/VSS)·출력 패드는 신호선보다 넓은 폭(Wide Metal)과 Multi-Via(어레이)로 배치"]`,
};
