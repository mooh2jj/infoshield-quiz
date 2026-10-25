import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const SECURITY_NOTES: Record<string, MindmapNodeNote> = {
  "N2SF": {
    title: "국가망보안체계 (N2SF) 및 다층보안체계(MLS)",
    importance: 5,
    badge: "국가 정책 1순위 S등급",
    definition: "2006년 도입 이후 공공 SaaS 및 AI 도입을 가로막았던 획일적 물리적 망분리 정책을 탈피하여, 공공 데이터를 업무 중요도에 따라 3개 등급으로 나누고 차등화된 보안을 적용하는 국가 사이버 보안 개편 체계.",
    keyPoints: [
      "데이터 중요도 3등급 분류: 기밀(Classified, C) - 민감(Sensitive, S) - 공개(Open, O)",
      "C 등급(기밀): 국가안보, 외교, 국방 등 최상위 기밀로 기존 수준의 강력한 망분리 및 통제 유지",
      "S 등급(민감): 개인정보, 비공개 행정업무로 보안 통제(인증, 암호화, 접근제어) 하에 클라우드/AI 연계 허용",
      "O 등급(공개): 일반 대국민 공개 데이터 및 비기밀 업무로 인터넷망 및 글로벌 SaaS/생성형 AI 전면 활용",
      "제로 트러스트(Zero Trust) 및 암호화 아키텍처와의 결합 필수",
    ],
    examTip: "'C-S-O 3단계 분류 + 제로트러스트 결합 + 공공 AI/클라우드 활용 촉진' 3단 논법 필수 전개!",
  },
  "제로 트러스트": {
    title: "제로 트러스트 2.0 (Zero Trust) 성숙도 모델",
    importance: 5,
    badge: "보안 아키텍처 S등급",
    definition: "'결코 신뢰하지 않고, 항상 검증한다(Never Trust, Always Verify)'는 기본 철학 아래, 경계선 기반 보안을 폐기하고 모든 접속 요구의 사용자, 기기, 네트워크, 데이터 상태를 매번 동적으로 검증하는 아키텍처.",
    keyPoints: [
      "핵심 제어 컴포넌트: PDP(Policy Decision Point, 정책 결정점)와 PEP(Policy Enforcement Point, 정책 시행점)",
      "5대 축(Pillars): 신원(Identity), 기기(Device), 네트워크(Network/Environment), 애플리케이션 및 워크로드, 데이터",
      "마이크로 세그멘테이션(Micro-segmentation): 내부망 수평 이동(Lateral Movement)을 원천 차단하기 위해 네트워크를 최소 단위로 분할",
      "ICAM(통합 계정·자격 증명 및 접근 관리) 기반의 문맥 기반 동적 접근 통제",
    ],
    examTip: "NIST SP 800-207 기반의 '주체 → PEP → PDP → 리소스' 동적 통제 흐름도 작도!",
  },
  "양자내성암호": {
    title: "양자내성암호 (PQC) NIST 최종 표준 확정",
    importance: 5,
    badge: "차세대 암호학 S등급",
    definition: "쇼어(Shor) 알고리즘을 탑재한 양자컴퓨터가 상용화되어도 소인수분해(RSA)와 이산대수(ECC) 기반의 공개키 암호체계가 붕괴되지 않도록 개발된 새로운 수학적 난제 기반 암호 체계.",
    keyPoints: [
      "NIST 최종 공식 표준(2024 발표): ML-KEM(FIPS 203, 키 캡슐화), ML-DSA(FIPS 204, 전자서명), SLH-DSA(FIPS 205, 상태비저장 해시 서명)",
      "수학적 기반: 격자 기반 암호(Lattice-based, LWE/MLWE 난제)가 고효율과 높은 안전성으로 주류 채택",
      "도입 전략(Crypto-Agility): 하이브리드 모드(기존 RSA/ECDH + PQC 동시 적용)를 거쳐 점진적 전면 전환",
    ],
    examTip: "FIPS 203(ML-KEM)과 FIPS 204(ML-DSA) 표준 명칭 및 격자 난제(LWE) 키워드 명시!",
  },
  "OWASP LLM Top 10": {
    title: "OWASP Top 10 for LLM & AI 가드레일",
    importance: 5,
    badge: "AI 보안 위협 S등급",
    definition: "대규모 언어 모델(LLM) 및 생성형 AI 애플리케이션을 배포하고 활용할 때 직면하는 10대 핵심 보안 취약점 목록과 방어 체계.",
    keyPoints: [
      "LLM01 프롬프트 인젝션(Prompt Injection): 직접 공격(탈옥 Jailbreak) 및 외부 웹페이지/문서를 통한 간접 주입(Indirect Injection)",
      "주요 위협: 민감 정보 노출(LLM06), 공급망 취약점(LLM05, 오염된 HuggingFace 모델), 과도한 대리권(LLM08, Excessive Agency)",
      "AI 가드레일(Guardrails): NeMo Guardrails, Llama Guard 등을 통해 입출력 프롬프트의 유해성 및 악성 코드 필터링",
      "AI 레드팀(Red Teaming): 고도화된 적대적 공격 시뮬레이션을 상시 수행하여 취약점 사전 발굴",
    ],
    examTip: "프롬프트 인젝션의 '직접 탈옥 vs 간접 주입' 메커니즘 차이와 AI 가드레일 계층 도식화!",
  },
  "SBOM": {
    title: "SBOM (Software Bill of Materials) & 유럽 CRA",
    importance: 4,
    badge: "공급망 보안 A등급",
    definition: "소프트웨어를 구성하는 모든 오픈소스 라이브러리, 패키지, 모듈 간의 의존성 및 버전 정보를 상세히 기록한 기계 판독형 디지털 명세서(부품명세서).",
    keyPoints: [
      "표준 포맷: SPDX (ISO/IEC 5962), CycloneDX",
      "도입 배경: Log4j 사태, SolarWinds 등 SW 공급망 공격(Supply Chain Attack) 급증",
      "유럽 사이버복원력법(CRA, Cyber Resilience Act): 디지털 기기 및 SW 제품의 SBOM 제출 및 보안 업데이트를 법적 의무화",
    ],
    examTip: "SPDX vs CycloneDX 포맷 및 CRA 법제화에 따른 공급망 보안 라이프사이클 서술!",
  },
  "프라이버시 강화 기술": {
    title: "프라이버시 강화 기술 (PETs: 차분 프라이버시 / 동형암호)",
    importance: 4,
    badge: "개인정보보호 A등급",
    definition: "데이터의 활용 가치(분석, AI 학습)를 훼손하지 않으면서도 개인정보의 노출 및 재식별 위험을 수학적으로 방지하는 고도화된 보호 기술 집합.",
    keyPoints: [
      "차분 프라이버시(Differential Privacy, $\\epsilon$-DP): 쿼리 결과에 정밀 계산된 라플라스/가우시안 노이즈를 주입하여 특정 개인의 존재 여부를 은폐",
      "동형암호(Homomorphic Encryption, HE): 데이터를 복호화하지 않고 암호화된 상태 그대로 사칙연산 및 AI 추론 수행",
      "연합학습(Federated Learning): 원본 데이터를 중앙 서버로 전송하지 않고 로컬 기기에서 모델 가중치만 전송하여 공동 학습",
    ],
    examTip: "DP(노이즈 주입) / 동형암호(암호상태 연산) / 연합학습(가중치 공유) 3대 기술 비교표!",
  },
};

export const itpeSecurityMindmap: MindmapSection = {
  id: "itpe-security",
  title: "5. 정보보안 (Security)",
  description: "출제 비중 16% (최고 ROI) | 국가망보안체계(N2SF/MLS), 제로트러스트 2.0, 양자내성암호(NIST PQC), OWASP LLM, SBOM",
  chart: `mindmap
  root((5. 정보보안))
    국가 보안 정책 및 프레임워크
      N2SF 국가망보안체계
        물리적 망분리 개편
        다층보안 MLS 체계
        기밀 C 등급 엄격 통제
        민감 S 등급 선별 활용
        공개 O 등급 전면 허용
      클라우드 인증 CSAP
      정보보호 공시제도
    차세대 보안 아키텍처
      제로 트러스트 2.0
        Never Trust Always Verify
        PDP 정책결정점과 PEP 정책시행점
        마이크로 세그멘테이션
        ICAM 동적 문맥 인증
      SASE 보안 서비스 엣지
      CNAPP 클라우드 네이티브 보호
    차세대 암호학
      양자내성암호 PQC
        NIST 최종 표준 채택
        ML-KEM 암호키 교환
        ML-DSA 전자서명
        격자 기반 암호 LWE
      동형암호 HE 암호문 상태 연산
    AI 보안 및 공급망
      OWASP LLM Top 10
        직접 탈옥 및 간접 프롬프트 인젝션
        과도한 대리권 Excessive Agency
      AI 가드레일 Guardrails
      AI 레드팀 모의 침투
      SBOM 공급망 명세서
        SPDX와 CycloneDX
        유럽 사이버복원력법 CRA
    개인정보 및 프라이버시
      차분 프라이버시 노이즈 주입
      연합학습 분산 가중치 공유
      가명 익명 처리 기법`,
  notes: SECURITY_NOTES,
};
