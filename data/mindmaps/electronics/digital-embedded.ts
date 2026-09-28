import type { MindmapSection } from "@/types/mindmap";

export const digitalEmbeddedMindmap: MindmapSection = {
  id: "digital-embedded",
  title: "디지털응용회로와 임베디드 인터페이스",
  description: "디지털 논리 기초, 메모리 체계, I2C·SPI·UART 통신버스와 타이밍 설계",
  chart: `mindmap
  root((디지털응용회로와 임베디드 인터페이스))
    디지털 논리 기초
      numberLogicBox["수 체계와 부울대수<br/>1) 2진·8진·16진 수 체계<br/>2) 부울대수 간소화, 카르노맵(K-Map)<br/>3) 글리치(Glitch) 제거"]
      combSeqBox["조합·순서논리<br/>1) 가산기, MUX/DEMUX<br/>2) 래치·플립플롭 — RS, D, T, JK<br/>3) 동기식·비동기식 카운터, FSM(유한상태기계)"]
      memoryBox["메모리 체계<br/>1) SRAM vs DRAM<br/>2) Flash(NAND/NOR), EEPROM<br/>3) 메모리 맵과 버스 디코딩"]
    임베디드 통신 버스와 타이밍
      i2cBox["I2C 버스(실기)<br/>1) 오픈 드레인(Open-Drain) 구조<br/>2) 풀업 저항 계산 — 버스 커패시턴스 Cb와 상승시간 tr 기반 Rmax = tr / (0.8473 × Cb)<br/>3) Clock Stretching — 슬레이브가 클록을 로우로 유지해 처리 시간 확보"]
      spiUartBox["SPI와 UART(실기)<br/>1) SPI — 전이중(Full-Duplex), 클록 극성/위상(CPOL, CPHA)<br/>2) UART, RS-232/422/485 차동 전송"]
      timingBox["셋업·홀드 타이밍과 준안정 상태(실기)<br/>1) 셋업 시간(tsetup) — 클록 유효 에지 직전 데이터가 안정되어야 하는 시간<br/>2) 홀드 시간(thold) — 클록 유효 에지 직후 데이터가 안정되어야 하는 시간<br/>3) 위반 시 메타스테이빌리티 발생 — 2단 플립플롭 동기화기(2-Stage Synchronizer)로 방지"]
      levelShifterBox["전압 레벨 시프터<br/>1) 1.8V - 3.3V - 5V 간 전압 레벨 변환<br/>2) 트랜지스터 구성 또는 전용 레벨 시프터 IC 사용"]`,
};
