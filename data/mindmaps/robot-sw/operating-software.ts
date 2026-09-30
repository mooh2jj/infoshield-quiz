import type { MindmapSection } from "@/types/mindmap";

export const operatingSoftwareMindmap: MindmapSection = {
  id: "operating-software",
  title: "로봇 운영 소프트웨어 (다수 로봇 제어·원격관제·운동해석)",
  description: "군집로봇·필드버스·보안, 원격관제 GUI, 좌표계·FK/IK·물리엔진 시뮬레이션",
  chart: `mindmap
  root((로봇 운영 소프트웨어))
    시스템 통합과 다수 로봇 제어
      swarmBox["군집·플릿 관리<br/>1) Swarm/Fleet Management System(FMS) 연동<br/>2) 다수 로봇 간 공통 맵 공유"]
      fieldbusBox["산업용 필드버스(실기)<br/>1) EtherCAT — On-the-fly 방식, 전용 컨트롤러(ESC)가 프레임 통과 중 실시간 읽기·쓰기, 지연 수십ns~수µs<br/>2) CAN/CANopen, Modbus TCP<br/>3) 기존 Store-and-Forward 방식과 달리 확정성(Determinism) 확보, 수십 축 동기오차 1µs 이내"]
      securityBox["로봇 보안<br/>1) 제어 패킷 위변조 방지<br/>2) SROS 2 보안 프로파일 — DDS 보안, TLS 인증, 암호화"]
    원격 관제와 시각화 GUI
      backendBox["통신 백엔드<br/>1) WebSocket<br/>2) MQTT — 초경량 IoT 브로커, QoS 레벨 0/1/2"]
      visBox["3D 모니터링<br/>1) RViz 2<br/>2) Web 기반: rosbridge, Foxglove Studio"]
      hmiBox["HMI 프레임워크<br/>1) Qt/C++ — QML 기반 고성능 대시보드<br/>2) Web HMI"]
    로봇 운동해석 기초와 시뮬레이션
      coordBox["좌표계 표현<br/>1) 동차변환행렬(Homogeneous Transformation Matrix)<br/>2) 쿼터니언 q=[w,x,y,z] vs 오일러각<br/>3) 짐벌 락(Gimbal Lock) — 피치 ±90도에서 회전축이 겹쳐 1자유도 상실, 쿼터니언은 SLERP로 매끄러운 보간 가능"]
      fkBox["순기구학 FK<br/>1) Denavit-Hartenberg(D-H) 4대 파라미터: a(링크길이), α(링크비틀림각), d(링크오프셋), θ(관절각)<br/>2) 2관절 평면암 말단좌표: x=L1cosθ1+L2cos(θ1+θ2), y=L1sinθ1+L2sin(θ1+θ2)"]
      ikBox["역기구학 IK<br/>1) 해석적 해(Closed-form)<br/>2) 수치해법 — 자코비안 전치(Jacobian Transpose), 감쇠최소자승법(DLS)"]
      simBox["물리 엔진 시뮬레이션<br/>1) Gazebo — ODE, Bullet, DART<br/>2) Isaac Sim — PhysX GPU 가속, 합성 데이터 생성"]`,
};
