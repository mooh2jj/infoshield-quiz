import type { MindmapSection } from "@/types/mindmap";

export const communicationEquipmentMindmap: MindmapSection = {
  id: "communication-equipment",
  title: "정보통신기기",
  description: "단말·인터페이스, 홈네트워크·영상보안, 교환·집선 장비, 광전송·계측기",
  chart: `mindmap
  root((정보통신기기))
    단말 및 인터페이스 설비
      interfaceBox["DTE/DCE 상호접속 규격<br/>1) EIA RS-232C — 핀 배열, 전압레벨 -15~-3V(1)/3~15V(0)<br/>2) V.24, USB-C, HDMI"]
      modemBox["모뎀 및 코덱<br/>1) ADSL, VDSL, Giga-Wire<br/>2) 스마트 단말 하드웨어 인터페이스"]
    홈네트워크와 영상보안
      homeNetBox["지능형 홈네트워크 설비(실기)<br/>1) 홈게이트웨이, 월패드, 단지서버, 예비전원장치<br/>2) 세대망 분리 — 물리적 분리 / 논리적 분리(VLAN 등)"]
      cctvBox["영상보안 설비<br/>1) CCTV — IP 카메라, PoE(802.3af/at/bt)<br/>2) NVR, DVR<br/>3) 화소수 및 조도 기준"]
    전송 및 교환 장비
      switchModeBox["교환 방식<br/>1) 공간분할(S), 시분할(T), T-S-T 스위치<br/>2) 패킷교환 — X.25, 프레임릴레이, ATM"]
      lanSwitchBox["네트워크 집선 장비<br/>1) L2 스위치 — MAC 테이블, STP<br/>2) L3 스위치 — IP 라우팅<br/>3) L4 스위치 — 로드밸런싱, L7 — 보안스위치"]
    광전송 장비 및 측정기
      opticalModuleBox["송수신 광모듈<br/>1) LD(레이저 다이오드), LED<br/>2) PIN-PD, APD(애벌런치 포토다이오드)<br/>3) SFP/SFP+/QSFP"]
      opticalAmpBox["증폭 및 분기 장치<br/>1) EDFA — 어븀첨가 광증폭기, 1550nm C/L밴드<br/>2) SOA, 라만 증폭기<br/>3) 광스플리터(PLC Splitter)"]
      opticalMeterBox["광 계측기(실기)<br/>1) 광파워미터, 광원<br/>2) OTDR — 거리·손실·단선·접속손실 측정<br/>3) 레일리 산란(배경 손실 원인) vs 프레넬 반사(접속면 반사 이벤트)<br/>4) 스펙트럼 분석기(OSA)"]
    위성통신과 이동통신망
      satelliteBox["위성통신 궤도와 구성(실기)<br/>1) 정지궤도(GEO) — 고도 약 35,786km, 전파 지연 편도 약 120ms<br/>2) 저궤도(LEO)·중궤도(MEO) — 지연은 짧지만 다수의 위성군 필요<br/>3) 지구국과 트랜스폰더(중계기) — 상향주파수를 하향주파수로 변환 후 증폭·재송신"]
      cellBox["이동통신망 구성요소<br/>1) 기지국(BTS) → 기지국제어기(BSC) → 교환기(MSC)<br/>2) 셀룰러 개념 — 동일 주파수의 재사용 거리를 확보하도록 클러스터 단위로 배치<br/>3) 핸드오버(Handover) — 이동 중 인접 셀로 통화·세션을 이어받는 절차"]
    안테나·전파 특성과 VoIP
      antennaBox["안테나와 전파 특성<br/>1) 이득(Gain) — 기준 안테나 대비 특정 방향으로 집중된 전력비<br/>2) 지향성 — 무지향성(옴니) vs 지향성(빔형), 방사 패턴의 방향 집중도<br/>3) 편파 — 수직·수평·원형 편파, 송수신 안테나 편파 불일치 시 손실 발생"]
      voipBox["VoIP 장비와 프로토콜<br/>1) SIP — 세션 설정·종료를 담당하는 시그널링 프로토콜<br/>2) RTP — 음성·영상 등 실시간 미디어 데이터 전송<br/>3) 코덱 — G.711(무압축 고품질), G.729(저비트레이트 압축)"]`,
};
