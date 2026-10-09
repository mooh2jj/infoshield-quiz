import type { MindmapNodeNote, MindmapSection } from "@/types/mindmap";

export const UNDERSTANDING_NOTES: Record<string, MindmapNodeNote> = {
  "데이터 정의": {
    title: "데이터의 정의와 DIKW 피라미드",
    importance: 5,
    badge: "1과목 빈출 필수",
    definition: "순수 사실인 데이터에서 의미 있는 정보, 체계화된 지식을 거쳐 통찰인 지혜로 발전하는 4단계 위계 구조.",
    keyPoints: [
      "데이터(Data): 순수 관찰·측정된 가공되지 않은 사실 (A마트 1,000원, B마트 1,200원)",
      "정보(Information): 데이터를 가공해 의미와 맥락을 부여한 것 (A마트가 200원 더 싸다)",
      "지식(Knowledge): 정보를 개인의 경험과 규칙으로 구조화한 것 (더 싼 A마트에서 구매한다)",
      "지혜(Wisdom): 축적된 지식을 바탕으로 창의적 아이디어와 유연한 통찰을 발휘하는 단계",
    ],
    examTip: "데이터 ➔ 정보 ➔ 지식 ➔ 지혜 순서와 각 단계별 구체적 사례 매칭 암기 필수!",
  },
  "암묵지와 형식지": {
    title: "암묵지와 형식지의 SECI 모델",
    importance: 5,
    badge: "기출 단골",
    definition: "개인에게 체화된 암묵지와 문서로 표준화된 형식지가 상호작용하며 나선형으로 지식이 창출되는 모델.",
    keyPoints: [
      "공통화(Socialization): 암묵지 ➔ 암묵지 (경험 공유, 도제식 훈련)",
      "표출화(Externalization): 암묵지 ➔ 형식지 (매뉴얼 작성, 개념화·시각화)",
      "연결화(Combination): 형식지 ➔ 형식지 (여러 보고서 취합, 데이터베이스화)",
      "내면화(Internalization): 형식지 ➔ 암묵지 (매뉴얼을 읽고 체화·실습)",
    ],
    examTip: "암묵지를 문서로 만드는 것은 '표출화', 문서를 읽고 체득하는 것은 '내면화'!",
  },
  "데이터베이스 특징": {
    title: "데이터베이스와 DW / Data Lake",
    importance: 4,
    badge: "핵심 저장소",
    definition: "통합, 저장, 운영, 공용 데이터로서의 DB와 분석을 위한 DW, 원시 저장을 위한 데이터 레이크 비교.",
    keyPoints: [
      "DB 4대 특성: 통합된 데이터(Integrated), 저장된 데이터(Stored), 운영 데이터(Operational), 공용 데이터(Shared)",
      "데이터 웨어하우스(DW) 4대 특징: 주제 지향성, 통합성, 시계열성, 비휘발성",
      "데이터 마트(DM): 특정 부서나 주제 영역 중심의 소규모 맞춤형 분석 DB",
      "데이터 레이크(Data Lake): 정형·반정형·비정형 원시 데이터를 원본 그대로 대규모 저장",
    ],
    examTip: "DW 4대 특징(주제지향/통합/시계열/비휘발)은 매 시험 단골 출제!",
  },
  "빅데이터 위기와 통제": {
    title: "빅데이터 3대 위기 요인과 통제 방안",
    importance: 5,
    badge: "1과목 킬러",
    definition: "빅데이터 기술 확산에 따라 나타나는 위험 요인과 이를 해결하기 위한 새로운 제도적 통제 패러다임.",
    keyPoints: [
      "사생활 침해: 동의제(Opt-in) 한계 ➔ 사용자에게 책임을 묻는 '책임 원칙'으로 전환",
      "책임 원칙 훼손: 알고리즘에 의한 잠재적 차별 ➔ '알고리즘 접근권(설명 요구권)' 보장",
      "데이터 오용: 통계적 왜곡과 편향 ➔ 전문가인 '알고리즈미스트' 육성 및 객관적 감시",
    ],
    examTip: "사생활 침해 대응은 '책임 원칙', 책임 원칙 훼손 대응은 '알고리즘 접근권' 매칭!",
  },
};

export const adspUnderstandingMindmap: MindmapSection = {
  id: "adsp-understanding",
  title: "제1과목 데이터 이해",
  description: "데이터의 가치, DIKW 피라미드, SECI 지식경영, DW/데이터 레이크 및 빅데이터 위기 통제 방안",
  chart: `mindmap
  root((제1과목<br/>데이터 이해))
    데이터의 개념과 가치
      데이터 정의
        객관적 사실 기호
        정성적 데이터 vs 정량적 데이터
      암묵지와 형식지
        암묵지 노하우
        형식지 매뉴얼
        SECI 지식순환
          공통화
          표출화
          연결화
          내면화
    데이터베이스 구축
      DB 4대 특징
        통합된 데이터
        저장된 데이터
        운영 데이터
        공용 데이터
      데이터 웨어하우스 DW
        주제 지향성
        통합성
        시계열성
        비휘발성
      데이터 마트 DM
      데이터 레이크 Data Lake
    빅데이터의 가치와 미래
      빅데이터 3V
        Volume 규모
        Velocity 속도
        Variety 다양성
        Value 가치
      가치 패러다임 변화
        디지털화
        연결
        에이전시
    위기 요인과 통제
      사생활 침해
        책임 원칙 강화
      책임 원칙 훼손
        알고리즘 접근권
      데이터 오용
        알고리즈미스트`,
  notes: UNDERSTANDING_NOTES,
};
