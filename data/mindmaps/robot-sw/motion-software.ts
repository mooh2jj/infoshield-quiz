import type { MindmapSection } from "@/types/mindmap";

export const motionSoftwareMindmap: MindmapSection = {
  id: "motion-software",
  title: "모션 소프트웨어 (궤적계획·충돌회피·매니퓰레이터 동역학)",
  description: "경로·궤적 보간, 전역/지역 플래너, 자코비안·특이점, 임피던스/어드미턴스 제어",
  chart: `mindmap
  root((모션 소프트웨어))
    궤적 계획과 보간
      pathVsTrajBox["경로 vs 궤적<br/>1) Path — 시간 개념 없는 기하학적 형상<br/>2) Trajectory — 시간에 따른 위치·속도·가속도<br/>3) 관절 공간(Joint Space) vs 작업 공간(Cartesian/Task Space) 궤적 생성"]
      profileBox["보간 프로파일(실기)<br/>1) 3차/5차 다항식(Quintic Polynomial)<br/>2) 사다리꼴 속도 프로파일 — 가속도 계단식 급변, 저크 무한대<br/>3) S-Curve(7구간) — 저크(Jerk, da/dt)를 유한값으로 제한해 기계적 충격·진동 억제"]
    충돌회피 알고리즘
      globalBox["전역 플래너<br/>1) Dijkstra<br/>2) A* — f=g+h<br/>3) RRT — 고차원 탐색<br/>4) RRT* — 신규 노드 추가 시 주변 재배선(Rewiring)으로 비용 감소 시 부모 재지정, 점근적 최적성(Asymptotically Optimal) 보장"]
      localBox["지역 플래너<br/>1) DWA(Dynamic Window Approach)<br/>2) TEB(Timed Elastic Band)<br/>3) APF(인공전위장법)"]
    액추에이터 제어와 매니퓰레이터 동역학
      motorBox["모터 구동<br/>1) BLDC, PMSM<br/>2) FOC(자속기준제어)<br/>3) 엔코더 — 인크리멘탈/앱솔루트"]
      controllerBox["제어기<br/>1) PID 이산화 제어<br/>2) 피드포워드 — 중력 및 마찰력 보상"]
      jacobianBox["자코비안과 특이점(실기)<br/>1) 기구학적 자코비안: xdot = J(q)·qdot<br/>2) 정역학 토크(가상일 원리): τ = J^T(q)·F<br/>3) 특이점(Singularity): det(J)=0에서 관절속도 발산<br/>4) DLS(감쇠최소자승법): J* = J^T·(J·J^T + λ^2·I)^-1 — 특이점 부근 발산 억제"]
      complianceBox["순응 제어<br/>1) 임피던스 제어(x→F) — Md(xddot-xddot_d)+Bd(xdot-xdot_d)+Kd(x-x_d) = -Fext, 모션에 반응해 힘 발생, 직동 다이렉트드라이브에 적합<br/>2) 어드미턴스 제어(F→x) — 외력 센서로 힘을 측정해 목표 변위 생성 후 위치 제어기에 전달, 고강성 위치제어 루프를 가진 일반 산업로봇에 적합<br/>3) 하이브리드 힘/위치 제어 — 접촉방향은 Kd 낮게, 비접촉방향은 Kd 높게"]`,
};
