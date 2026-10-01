import type { MindmapSection } from "@/types/mindmap";

export const circuitControlMindmap: MindmapSection = {
  id: "circuit-control",
  title: "회로이론 및 제어공학 (교류회로·과도현상·라플라스·안정도)",
  description: "RLC 공진과 테브난 등가회로, 과도응답과 시정수, 메이슨 이득 공식, 루스-후르비츠 판별법 및 나이퀴스트/보드선도",
  chart: `mindmap
  root((회로이론 및 제어))
    회로이론 기초 및 교류해석
      RLC 공진 및 전력
        resonanceBox["공진회로와 전력<br/>1) RLC 직렬 공진: f0 = 1 / (2π√(LC)), Z = R (임피던스 최소, 전류 최대)<br/>2) 첨예도: Q = ω0 L / R = 1 / (ω0 C R) = 1/R √(L/C)<br/>3) 복소전력: S = P + jQ = V I* [VA], 유효전력 P = VI cosθ, 무효전력 Q = VI sinθ<br/>4) 역률개선 콘덴서: Qc = P (tanθ1 - tanθ2) [kVA]"]
      회로망 정리 및 3상 교류
        networkTheoryBox["회로망 정리와 3상<br/>1) 테브난 정리: 전압원 Vth 직렬 Rth 등가변환<br/>2) 노턴 정리: 전류원 In 병렬 Rn 등가변환<br/>3) 최대전력 전달조건: ZL = Zi* (내부임피던스의 공액복소수)<br/>4) Y결선: 선간전압 VL = √3 Vp ∠30°, 선전류 IL = Ip<br/>5) Δ결선: 선간전압 VL = Vp, 선전류 IL = √3 Ip ∠-30°<br/>6) 3상 전력: P = √3 VL IL cosθ = 3 Vp Ip cosθ"]
      과도현상 및 4단자망
        transientBox["과도현상과 4단자망<br/>1) RC 직렬 시정수: τ = R C [sec], i(t) = (E/R) e^(-t/RC)<br/>2) RL 직렬 시정수: τ = L / R [sec], i(t) = (E/R)(1 - e^(-Rt/L))<br/>3) 시정수의 의미: 최종값의 63.2%에 도달하는 시간<br/>4) 4단자 정수: 대칭 4단자망 A = D, 상반정리 AD - BC = 1"]
    제어공학
      블록선도와 신호흐름선도
        blockDiagramBox["전달함수와 메이슨 공식<br/>1) 라플라스 변환: L[1] = 1/s, L[e^(-at)] = 1/(s+a), L[sinωt] = ω/(s^2+ω^2)<br/>2) 초기값 정리: f(0) = lim(s→∞) s F(s), 최종값 정리: f(∞) = lim(s→0) s F(s)<br/>3) 메이슨 이득공식: G = Σ(Pk Δk) / Δ (루프 및 비접촉 루프)"]
      시간응답 및 2차 시스템
        timeResponseBox["과도응답과 감쇠비<br/>1) 특성방정식: s^2 + 2ζωn s + ωn^2 = 0<br/>2) 감쇠비 ζ 판정: ζ > 1 (과감쇠), ζ = 1 (임계감쇠, 오버슈트 없음), 0 < ζ < 1 (부족감쇠, 감쇠진동), ζ = 0 (무감쇠 지속진동)<br/>3) 성능지표: 지연시간 td, 상승시간 tr, 정정시간 ts ≈ 4 / (ζωn)"]
      안정도 판별법
        stabilityBox["안정도 판별 3대 기법<br/>1) 루스-후르비츠: 특성방정식 모든 계수 부호 일치(필요조건), 루스 배열 제1열 부호 변화 횟수 = 우반면 극점 수(0이어야 안정)<br/>2) 나이퀴스트 판별법: G(jω)H(jω) 궤적이 (-1, j0)점을 시계방향으로 감싸지 않아야 안정<br/>3) 보드선도: 이득여유 GM > 0 dB, 위상여유 PM > 0° 일 때 폐루프 안정"]
      근궤적법 및 상태방정식
        rootLocusBox["근궤적과 상태공간<br/>1) 근궤적 가지 수 = 극점 수 n, 시작점 = 극점(K=0), 종착점 = 영점(K=∞)<br/>2) 점근선 교차점: σ = (Σ극점 - Σ영점) / (n - m)<br/>3) 상태천이행렬: Φ(t) = L^-1[(sI - A)^-1]"]`,
};
