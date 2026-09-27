import type { MindmapSection } from "@/types/mindmap";

export const systemOperationsMindmap: MindmapSection = {
  id: "system-operations",
  title: "정보시스템운용",
  description: "서버·클라우드·스토리지, QoS·트래픽 관리, 망관리·전원·접지 설비",
  chart: `mindmap
  root((정보시스템운용))
    서버 운용 및 스토리지
      serverOsBox["서버 OS와 가상화<br/>1) Linux/Unix CLI 명령어, systemd 데몬 관리, 쉘 스크립트<br/>2) 클라우드·가상화 — 하이퍼바이저(Type-1 vs Type-2), Docker 컨테이너, Kubernetes 오케스트레이션"]
      storageBox["스토리지 구조<br/>1) DAS — 직접연결<br/>2) NAS — 파일단위, NFS/CIFS<br/>3) SAN — 블록단위, 광채널(FC) 스위치<br/>4) RAID — 0, 1, 5, 6, 10"]
    QoS와 트래픽 관리
      qosMetricBox["QoS 4대 지표<br/>1) 지연(Delay), 지터(Jitter)<br/>2) 패킷손실(Packet Loss), 대역폭(Throughput)"]
      qosModelBox["QoS 모델<br/>1) Best-Effort<br/>2) IntServ — RSVP 기반 자원예약<br/>3) DiffServ — IP 헤더 DSCP 기반 차등 서비스"]
      trafficBox["트래픽 제어(실기)<br/>1) 쉐이핑(Traffic Shaping) — 리키 버킷(Leaky Bucket)<br/>2) 폴리싱(Traffic Policing) — 토큰 버킷(Token Bucket)"]
    망 관리, 전원 및 접지 설비
      snmpBox["네트워크 관리<br/>1) SNMP — v1, v2c, v3(보안 강화), SMI, MIB-2, Trap/Get/Set<br/>2) NetFlow"]
      upsBox["무정전 전원설비(UPS)(실기)<br/>1) 정류기(Converter) → 축전지(Battery) → 인버터(Inverter)<br/>2) Bypass 회로(정지형 절체 스위치, STS) — 인버터 장애·과부하·점검 시 무순단 우회 공급"]
      groundBox["접지설비(실기)<br/>1) 공통접지, 통합접지, 단독접지<br/>2) 서지보호장치(SPD Class I/II/III), 피뢰침 보호반경<br/>3) 접지저항 기준 — 통신설비 100Ω 이하"]
    망관리 기능과 이중화·백업
      fcapsBox["망관리 5대 기능(FCAPS)(실기)<br/>1) Fault — 장애 감지 및 복구<br/>2) Configuration, Accounting — 구성 관리, 자원 사용량 관리<br/>3) Performance, Security — 성능 관리, 보안 관리"]
      haBox["이중화와 백업 전략<br/>1) Active-Active — 두 장비가 동시에 트래픽을 처리<br/>2) Active-Standby(Failover) — 장애 시 대기 장비로 절체<br/>3) 백업 유형 — 완전백업(Full), 증분백업(Incremental), 차등백업(Differential)"]
    재해복구와 IDC 운영 기준
      drBox["재해복구(DR)와 서비스 수준<br/>1) RTO(목표복구시간) — 장애 후 서비스 정상화까지 허용 시간<br/>2) RPO(목표복구시점) — 데이터 손실을 허용할 수 있는 시점 범위<br/>3) DR 사이트 등급 — Mirror(실시간 이중화) > Hot(수분 내 전환) > Warm(수시간) > Cold(수일)"]
      idcBox["IDC(데이터센터) 운영 기준<br/>1) 전산실 온습도 — 항온항습기로 서버 발열을 관리해 안정 범위로 유지<br/>2) 이중화 — 이중 전원(UPS+상용전원), 이중 냉방·이중 회선으로 단일장애점(SPOF) 제거"]`,
};
