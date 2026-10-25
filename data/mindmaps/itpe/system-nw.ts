import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const SYSTEM_NW_NOTES: Record<string, MindmapNodeNote> = {
  "eBPF": {
    title: "eBPF (Extended Berkeley Packet Filter) & 사이드카리스 인프라",
    importance: 5,
    badge: "클라우드 인프라 S등급",
    definition: "리눅스 커널 소스코드를 변경하거나 별도 모듈을 빌드하지 않고도, 커널 이벤트(네트워크, 시스템 콜, 트레이싱) 발생 시 안전하게 샌드박스 바이트코드를 실행하는 혁신적 커널 확장 기술.",
    keyPoints: [
      "검증기(Verifier) & JIT 컴파일러: 메모리 침범이나 무한 루프 가능성을 사전에 차단하여 안전성 보장",
      "사이드카리스(Sidecarless) 서비스 메시: Istio Envoy 사이드카 프록시의 지연 시간 및 메모리 오버헤드를 해소하고 커널 레벨에서 L4/L7 트래픽 직접 라우팅 (Cilium 등)",
      "초고속 네트워크(XDP, eXpress Data Path) 및 커널 레벨 제로 트러스트 보안 관측성 제공",
    ],
    examTip: "'iptables 및 사이드카 방식 vs eBPF 커널 레벨 제어' 비교 구조도 작성!",
  },
  "HBM": {
    title: "AI 메모리 혁신: HBM (High Bandwidth Memory)",
    importance: 5,
    badge: "AI 반도체 S등급",
    definition: "DRAM 칩을 수직으로 여러 층 적층하고 TSV(실리콘 관통전극)로 연결하여, 기존 GDDR 대비 극적으로 넓은 인터페이스 대역폭을 제공하는 고성능 메모리 기술.",
    keyPoints: [
      "메모리 월(Memory Wall) 극복: GPU 연산 유닛의 속도 향상에 비해 메모리 전송 속도가 병목이 되는 문제 해결",
      "TSV (Through-Silicon Via): 칩을 관통하는 미세 전극 통로를 뚫어 수천 개의 핀을 패키지 기판 인터포저(Interposer)에 실장",
      "발전 단계: HBM1 → HBM2 → HBM2E → HBM3 → HBM3E → HBM4 (커스텀 로직 다이 적용)",
    ],
    examTip: "GPU-인터포저-HBM 적층 단면도와 TSV 수직 배선 개념도 제시!",
  },
  "CXL": {
    title: "CXL (Compute Express Link 3.0) & 메모리 풀링",
    importance: 5,
    badge: "차세대 서버 아키텍처 S등급",
    definition: "PCIe 물리 계층을 기반으로 CPU, GPU, 가속기, 메모리 장치 간에 초저지연과 캐시 일관성(Cache Coherency)을 보장하는 개방형 고속 인터커넥트 표준.",
    keyPoints: [
      "3대 하위 프로토콜: CXL.io (초기화 및 장치 탐색), CXL.cache (가속기가 호스트 메모리 캐싱), CXL.mem (호스트가 가속기/메모리 직접 접근)",
      "메모리 풀링(Memory Pooling): 여러 서버가 독립된 대규모 메모리 풀을 스위치로 공유하여 유휴 메모리(Stranded Memory) 낭비를 근절",
      "CXL 3.0: 패브릭(Fabric) 스위칭 지원 및 P2P(Peer-to-Peer) 직접 통신 지원",
    ],
    examTip: "CXL 3대 프로토콜(.io, .cache, .mem)과 분산 메모리 풀링 아키텍처 서술!",
  },
  "Karpenter": {
    title: "쿠버네티스 지능형 오토스케일러: Karpenter vs HPA/CA",
    importance: 4,
    badge: "클라우드 네이티브 A등급",
    definition: "전통적인 Cluster Autoscaler(CA)의 노드 그룹 기반 정적 스케일링 한계를 극복하고, 파드의 리소스 요구사항(CPU, GPU, 스팟 인스턴스)에 맞춰 클라우드 인스턴스를 JIT(Just-In-Time)로 즉각 프로비저닝하는 오픈소스 오토스케일러.",
    keyPoints: [
      "노드 그룹리스(Node-groupless): 복잡한 ASG(오토스케일링 그룹) 설정 없이 직접 인스턴스 타입 선택",
      "고속 프로비저닝: 파드 스케줄링 대기 시간을 분 단위에서 초 단위로 단축",
      "노드 통합(Consolidation): 비용 효율을 위해 유휴 자원이 있는 노드를 자동으로 축소 및 재배치",
    ],
    examTip: "기존 Cluster Autoscaler(노드풀 종속, 지연 큼)와 Karpenter(동적 JIT 선택, 초단위) 비교표!",
  },
  "HTTP3": {
    title: "HTTP/3 & QUIC 프로토콜 메커니즘",
    importance: 4,
    badge: "네트워크 B등급",
    definition: "전통적인 TCP/TLS 계층 대신 UDP 기반의 QUIC 프로토콜을 전송 계층으로 채택하여, 연결 지연을 최소화하고 TCP의 고질적인 HOL 블로킹 문제를 원천 해결한 최신 웹 표준.",
    keyPoints: [
      "0-RTT / 1-RTT 고속 연결: 암호화 핸드셰이크와 전송 연결을 단일화하여 첫 요청부터 즉시 데이터 전송",
      "헤드오브라인(HOL) 블로킹 해소: 각 스트림이 독립적인 UDP 패킷으로 전송되어 한 스트림의 패킷 손실이 다른 스트림을 지연시키지 않음",
      "연결 마이그레이션(Connection Migration): Connection ID 기반으로 IP가 바뀌는 이동 중(Wi-Fi ↔ LTE)에도 세션 끊김 없음",
    ],
    examTip: "프로토콜 스택 비교(TCP+TLS+HTTP/2 vs UDP+QUIC+HTTP/3) 도식화!",
  },
  "NTN": {
    title: "NTN (Non-Terrestrial Network, 비지상 네트워크) & 6G",
    importance: 4,
    badge: "차세대 무선통신 A등급",
    definition: "지상 기지국의 통신 범위를 넘어, 저궤도(LEO) 위성, 정지궤도 위성, HAPS(고고도 플랫폼 무인기)를 결합하여 해상·공중·극지방 등 지구 전역에 3차원 입체 통신 커버리지를 제공하는 3GPP 표준 기술.",
    keyPoints: [
      "3GPP Release 17/18 채택: 5G-Advanced 및 6G의 필수 무선 액세스 규격",
      "극복 과제: 거대 도플러 시프트(Doppler Shift) 주파수 보정, 긴 전파 지연(Propagation Delay) 극복, 잦은 핸드오버 제어",
      "피지컬 AI, 자율운항 선박, UAM(도심항공교통)의 핵심 백본 네트워크로 부상",
    ],
    examTip: "LEO 저궤도 위성-지상 게이트웨이-단말기 간 3차원 입체망 연결도 도식화!",
  },
};

export const itpeSystemNwMindmap: MindmapSection = {
  id: "itpe-system-nw",
  title: "4. 컴퓨터 시스템 및 통신 (CA / OS / NW)",
  description: "출제 비중 12% | eBPF 커널 샌드박스, AI 반도체(HBM/CXL), Karpenter, HTTP/3 QUIC, 6G NTN",
  chart: `mindmap
  root((4. 컴퓨터시스템 및 통신))
    클라우드 및 인프라
      eBPF 커널 프로그래밍
        커널 소스 수정 없는 샌드박스
        사이드카리스 서비스 메시
        Cilium 초고속 라우팅 및 보안
      쿠버네티스 오토스케일링
        Karpenter JIT 프로비저닝
        노드 통합 비용 최적화
        HPA VPA 자동 제어
    AI 반도체 및 하드웨어
      HBM 고대역폭 메모리
        TSV 실리콘 관통전극 적층
        메모리 월 극복
        인터포저 패키징
      CXL 3.0 인터커넥트
        캐시 일관성 보장
        메모리 풀링 및 확장
        CXL.io CXL.cache CXL.mem
      PIM 연산 통합 메모리
    차세대 네트워크
      HTTP3 및 QUIC
        UDP 기반 독립 스트림 전송
        HOL 블로킹 원천 해소
        0-RTT 빠른 연결 수립
        연결 마이그레이션
      IPv6와 SRv6 세그먼트 라우팅
    이동통신 및 위성
      6G와 NTN 비지상 통신
        저궤도 LEO 위성 결합
        UAM 도심항공교통 커버리지
        도플러 시프트 극복
      5G-Advanced Rel 18
      Wi-Fi 7 다중 링크 MLO`,
  notes: SYSTEM_NW_NOTES,
};
