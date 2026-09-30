import type { MindmapSection } from "@/types/mindmap";

export const intelligenceSoftwareMindmap: MindmapSection = {
  id: "intelligence-software",
  title: "지능 소프트웨어 (위치추정·SLAM·로봇비전)",
  description: "EKF/AMCL과 TF 트리, 2D/그래프 기반 SLAM, 카메라 모델·PnP, Nav2 코스트맵과 협동로봇 안전",
  chart: `mindmap
  root((지능 소프트웨어))
    위치 추정과 센서 융합
      sensorBox["센서 계측<br/>1) 휠 엔코더 기반 오도메트리<br/>2) IMU — 자이로/가속도계, 바이어스 드리프트"]
      filterBox["확률적 필터<br/>1) EKF(확장 칼만 필터) — 비선형 모델을 자코비안으로 선형화<br/>2) 파티클 필터/AMCL — 비가우시안 다중모달(Multi-modal) 분포 처리, 납치된 로봇 문제 시 파티클 전역 분산, KLD-sampling으로 파티클 수 동적 조절(불확실성 클수록 많게)"]
      tfTreeBox["TF 트리(실기 핵심)<br/>1) map → odom → base_footprint → base_link → sensor_link<br/>2) 오도메트리 노드가 odom→base_link 발행 — 누적 드리프트는 있으나 항상 매끄럽고 연속적(고주파 50Hz+)<br/>3) SLAM/AMCL 노드가 map→odom 발행 — 루프클로저·전역보정 시 순간 도약(불연속) 가능"]
    SLAM (동시적 위치추정 및 지도작성)
      mapRepBox["맵 표현<br/>1) 점유 격자 지도(Occupancy Grid Map)<br/>2) 3D 포인트 클라우드(OctoMap)"]
      lidarSlamBox["2D LiDAR SLAM<br/>1) Cartographer, Gmapping<br/>2) ICP(Iterative Closest Point) — 두 점군의 최근접점을 반복 매칭해 오차제곱합 최소화하는 회전R·병진T 추정"]
      graphSlamBox["그래프 기반 SLAM<br/>1) 노드 — 특정 시점 로봇 포즈(Pose)<br/>2) 엣지 — 연속 포즈간 또는 루프클로저로 관측된 상대적 기하 제약(Spatial Constraint)<br/>3) 프론트엔드(특징추출·오도메트리) + 백엔드(포즈그래프 최적화, g2o/Ceres)"]
    로봇 비전과 작업 지능
      cameraBox["카메라 모델(실기)<br/>1) 핀홀 카메라, 내부파라미터 K(fx,fy,cx,cy) vs 외부파라미터(R,T)<br/>2) 투영식: s·p = K·[R|T]·Pw"]
      perception3dBox["3D 인지<br/>1) 스테레오 비전 — 시차(Disparity)<br/>2) 깊이 카메라(RGB-D), PCL(Point Cloud Library)"]
      aiVisionBox["AI 융합과 PnP<br/>1) YOLO — 객체 인식<br/>2) 6D 포즈 추정, 딥러닝 기반 파지점(Grasp Point) 생성<br/>3) PnP(Perspective-n-Point) — 3D-2D 대응쌍으로 카메라 포즈(R,T) 추정"]
      costmapBox["Nav2 코스트맵 3대 레이어<br/>1) Static Layer — 사전 점유격자지도<br/>2) Obstacle/Voxel Layer — 실시간 동적 장애물<br/>3) Inflation Layer — 로봇 반경 반영 팽창"]
      safetyBox["협동로봇 안전(ISO/TS 15066) 4대 운전모드<br/>1) 안전 등급 모니터링 정지<br/>2) 핸드 가이딩<br/>3) 속도 및 이격거리 감시<br/>4) 동력·힘 제한(Power and Force Limiting)"]`,
};
