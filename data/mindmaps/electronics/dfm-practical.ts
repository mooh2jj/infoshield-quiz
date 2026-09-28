import type { MindmapSection } from "@/types/mindmap";

export const dfmPracticalMindmap: MindmapSection = {
  id: "dfm-practical",
  title: "실기 작업형과 양산 DFM",
  description: "PSpice 시뮬레이션·OrCAD PCB 실기, 패널라이징·툼스톤 방지·스택업 등 양산 설계",
  chart: `mindmap
  root((실기 작업형과 양산 DFM))
    PSpice와 OrCAD 실기 작업형
      pspiceBox["PSpice 시뮬레이션(실기)<br/>1) DC Sweep, Transient(과도해석), AC Sweep<br/>2) 몬테카를로(Monte Carlo) 최악조건 해석"]
      orcadBox["OrCAD Capture와 PCB Editor(실기)<br/>1) 회로 캡처, 부품 생성, 넷리스트, 배선, 동판 타설<br/>2) 출력 직전 Status 창 3대 지표 — Unrouted Nets 0, DRC Errors 0, Unplaced Symbols 0"]
    DFM과 DFA 양산 설계
      dfmBox["DFM DFA 기본 기법<br/>1) 패널라이징(Panelization), V-Scoring, 마우스 바이트(Mouse Bites)<br/>2) 피듀셜 마크 — 패널 모서리 3개 이상 비대칭 배치(직경 1.0mm 구리패드 + 2.0mm 솔더마스크 오픈)"]
      tombstoneBox["툼스톤 방지와 솔더마스크 댐<br/>1) 솔더 마스크 댐(Solder Mask Dam)<br/>2) 열 릴리프(Thermal Relief) — 양쪽 패드의 열 균형을 맞춰 부품이 한쪽으로 들리는 툼스톤(맨해튼 현상) 방지"]
      stackupBox["PCB 층 구성 Stack-up(실기)<br/>1) 표준 4층 — Top(신호) / Inner1(GND, 무절단 기준면) / Inner2(Power 또는 신호) / Bottom(저속신호)<br/>2) 신호층 바로 아래 GND에 슬릿·분할갭이 있으면 귀환전류 루프가 커져 EMI가 급증"]`,
};
