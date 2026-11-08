import type { MindmapSection } from "@/types/mindmap";

export const managementQualityMindmap: MindmapSection = {
  id: "management-quality",
  title: "테스트 관리, 결함 주기 및 품질 표준",
  description: "경험 기반 테스팅, 결함 생명주기, 조직 독립성 및 ISO/IEC 25010 8대 품질 모델",
  chart: `mindmap
  root((테스트 관리 및 품질))
    경험 기반 테스팅
      오류추정["오류 추정 Error Guessing<br/>과거 결함 이력과 직관으로 결함 예측"]
      탐색적테스팅["탐색적 테스팅 Exploratory<br/>- 테스트 헌장 Test Charter 기반<br/>- 타임박스 Timebox (60~120분)<br/>- 설계·실행·학습 동시 수행"]
      체크리스트["체크리스트 테스팅<br/>과거 결함 경험 목록 기반 점검"]
    결함 생명주기 Defect Lifecycle
      상태흐름["New/Submitted -> Assigned -> Open -> Fixed -> Verified -> Closed"]
      재발생["재발견 시: Reopened 상태로 회귀"]
      확인vs회귀["확인 vs 회귀<br/>- 확인 테스트(Re-test): 고쳤는지 실패 TC 재실행<br/>- 회귀 테스트(Regression): 타 영역 부작용 점검"]
    조직 독립성 4단계
      단계1_개발자["1단계: 개발자 본인 (가장 낮음)"]
      단계2_동료["2단계: 개발팀 내 동료 개발자"]
      단계3_독립QA["3단계: 사내 독립 QA/테스트 팀"]
      단계4_외부기관["4단계: 외부 공인 전문 시험 기관 (가장 높음)"]
    ISO/IEC 25010 제품 품질 8대 특성
      기능적합성["1. 기능 적합성 Functional Suitability"]
      성능효율성["2. 성능 효율성 Performance Efficiency"]
      호환성["3. 호환성 Compatibility"]
      사용성["4. 사용성 Usability"]
      신뢰성["5. 신뢰성 Reliability"]
      보안성["6. 보안성 Security"]
      유지보수성["7. 유지보수성 Maintainability"]
      이식성["8. 이식성 Portability"]
      주의_생산성제외["* 개발 생산성(Productivity)은 8대 품질 특성이 아님! *"]`,
  notes: {
    탐색적테스팅: {
      title: "탐색적 테스팅 (Exploratory Testing)",
      importance: 5,
      badge: "CSTS 1순위",
      definition: "사전에 상세한 테스트 케이스를 설계하지 않고, 테스터의 직관과 제품에 대한 이해를 바탕으로 테스트 설계, 실행, 학습을 동시에 병행하는 경험 기반 테스팅 기법.",
      keyPoints: [
        "3대 핵심 구성 요소: 테스트 헌장(Test Charter - 테스트 목적/범위 기술), 타임박스(Timebox - 60~120분 시간 제약), 세션 기반 관리(Session-based Test Management).",
        "민첩한 애자일 환경 및 형식적인 테스트 케이스가 커버하지 못하는 엣지 케이스 발견에 탁월.",
      ],
      examTip: "테스트 헌장 + 타임박스 + 설계/실행/학습 동시 수행 = 탐색적 테스팅",
    },
    확인테스트: {
      title: "확인 테스트 (Confirmation Test / Re-test)",
      importance: 5,
      badge: "비교 빈출",
      definition: "보고된 결함을 개발자가 수정한 후, 해당 결함이 실제로 제거되었는지 확인하기 위해 결함 발생 당시 실패했던 원래 테스트 케이스를 다시 실행하는 테스트.",
      keyPoints: [
        "확인 테스트(Re-test): 특정 결함 1건의 수정 완료 여부 확인.",
        "회귀 테스트(Regression Test): 코드 수정으로 인해 기존에 잘 동작하던 다른 기능에 결함(Side-effect)이 유입되지 않았는지 전체 또는 일부 영역을 재점검.",
      ],
      examTip: "버그 고쳤나 본래 실패 TC 재실행 = 확인 테스트 / 다른 곳 안 터졌나 검사 = 회귀 테스트",
    },
    ISO25010: {
      title: "ISO/IEC 25010 제품 품질 모델 8대 특성",
      importance: 5,
      badge: "단골 함정",
      definition: "소프트웨어 제품 품질을 정량적으로 평가하기 위해 국제 표준화 기구에서 제정한 8가지 제품 품질 주특성.",
      keyPoints: [
        "8대 주특성: 기능 적합성, 성능 효율성, 호환성, 사용성, 신뢰성, 보안성, 유지보수성, 이식성.",
        "단골 오답 함정: '개발 생산성(Productivity)', '프로세스 준수도', '원가 절감률' 등은 프로세스/경영 척도로서 제품 품질 8대 특성이 아닙니다.",
      ],
      examTip: "개발 생산성은 제품 품질 8대 특성이 아님!",
    },
  },
};
