import type { MindmapSection } from "@/types/mindmap";

export const transmissionGeneralMindmap: MindmapSection = {
  id: "transmission-general",
  title: "정보전송일반",
  description: "채널용량·dB 계산, 전송매체, 변복조·PCM, 다중화·다원접속, 에러 제어",
  chart: `mindmap
  root((정보전송일반))
    전송 기본 이론
      capacityBox["채널용량 공식(실기)<br/>1) 나이퀴스트 — C = 2B·log2M [bps], 잡음 없는 채널, M은 신호 레벨(심볼) 수<br/>2) 샤논 — C = B·log2(1+S/N) [bps], 잡음이 있는 채널<br/>3) SNR dB→진수 변환 — S/N = 10^(SNRdB/10)"]
      dbBox["dB·dBm 계산(실기)<br/>1) 상대 전력비[dB] = 10·log10(Pout/Pin)<br/>2) 절대 전력레벨[dBm] = 10·log10(P[mW]/1mW), 1mW=0dBm<br/>3) 3dB 증가=2배, 3dB 감소=1/2배 — 10mW=10dBm, 100mW=20dBm, 1W=30dBm"]
    전송매체
      cableBox["유선 전송매체<br/>1) 동축케이블, 평형대 케이블<br/>2) UTP/STP — Cat.5e/6/6A/7/8, 등급별 대역폭·전송속도 규격"]
      fiberBox["광섬유(실기)<br/>1) 단일모드(SMF) — 9/125μm, 1310/1550nm, 저손실 장거리<br/>2) 다중모드(MMF) — 50·62.5/125μm, 850/1300nm, 단거리 구내<br/>3) 분산 특성 — 모드 분산, 파장 분산(재료·구조), 편광모드 분산(PMD)"]
    변복조 기술
      lineCodeBox["디지털 기저대역 부호화<br/>1) NRZ-L/M/S, RZ, AMI, Manchester<br/>2) 블록 부호화 — 4B/5B, 8B/10B"]
      digitalModBox["대역통과 디지털 변조<br/>1) ASK, FSK, PSK(BPSK, QPSK, 8PSK)<br/>2) QAM — 16/64/256/1024-QAM 성운도(constellation)"]
      pcmBox["PCM 3단계(실기)<br/>1) 표본화 — 나이퀴스트 fs≥2fm, 에일리어싱 방지 필터<br/>2) 양자화 — 선형 vs 비선형(μ-law 북미·한국, A-law 유럽)<br/>3) SQNR[dB] ≈ 6.02n + 1.76 — 비트 1개 증가 시 약 6dB 개선<br/>4) 부호화 — 이진수열 변환, 재생중계기 3R(Reshaping·Retiming·Regenerating)"]
    다중화와 다원접속
      muxBox["다중화(Multiplexing)<br/>1) FDM — 주파수 분할<br/>2) TDM — 동기식 vs 비동기식(통계적)<br/>3) WDM — CWDM 채널간격 20nm, DWDM 0.8nm 이하"]
      maBox["다원접속(Multiple Access)<br/>1) FDMA, TDMA<br/>2) CDMA — 의사잡음(PN) 코드, 코드 간 직교성<br/>3) OFDMA — 직교 주파수 분할, CP(Cyclic Prefix) 삽입"]
    에러 제어
      errorDetectBox["에러 검출<br/>1) 패리티 검사, 블록 검사(LRC), 체크섬<br/>2) CRC — 생성다항식 모듈로-2(XOR) 연산으로 FCS 산출"]
      errorCorrectBox["에러 정정<br/>1) 해밍 코드 — Hamming Distance 계산으로 정정<br/>2) 리드-솔로몬(RS), 터보 코드, LDPC"]
      arqBox["흐름 제어와 ARQ<br/>1) 정지-대기(Stop-and-Wait)<br/>2) Go-Back-N, 선택적 재전송(Selective-Repeat)<br/>3) 슬라이딩 윈도우 — 수신측 버퍼 크기만큼 연속 전송 허용"]
    정보이론과 아날로그 변조
      infoTheoryBox["정보량과 엔트로피(실기)<br/>1) 정보량 I(x) = -log2 P(x) [bit] — 발생 확률이 낮을수록 정보량이 커짐<br/>2) 엔트로피 H(X) = Σ P(xi)·log2(1/P(xi)) — 평균 정보량<br/>3) 균등분포(등확률) 조건에서 엔트로피가 최댓값 log2(N)을 가짐"]
      analogModBox["아날로그 변조 방식<br/>1) AM(진폭변조) — 반송대역폭 = 2×신호대역폭(양측파대)<br/>2) FM(주파수변조) — 카슨의 법칙 BW = 2(Δf+fm), AM보다 잡음에 강함<br/>3) PM(위상변조) — 입력신호에 비례해 반송파의 위상을 변화"]
    전송 왜곡과 동기 방식
      distortionBox["전송 선로의 왜곡과 잡음<br/>1) 감쇠왜곡 — 주파수에 따라 감쇠량이 달라 발생<br/>2) 지연왜곡 — 주파수별 전파속도 차이로 파형이 퍼짐<br/>3) 잡음 — 열잡음(내부 발생, 광대역), 누화(인접 선로 간섭), 충격성 잡음(순간적 큰 잡음)"]
      syncBox["동기 방식<br/>1) 비트 동기 — 수신측이 송신 비트열의 타이밍(클럭)을 맞춤<br/>2) 프레임 동기 — 데이터 블록(프레임)의 시작·끝 경계를 식별<br/>3) PLL(위상동기루프) — 수신 신호에서 클럭을 추출·동기화하는 대표 회로"]`,
};
