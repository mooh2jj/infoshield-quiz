export interface MindmapNodeNote {
  title: string;
  importance: 1 | 2 | 3 | 4 | 5; // 시험 중요도 (별점 1~5)
  badge?: string; // 예: "필기/실기 빈출", "ADsP 1순위"
  definition: string; // 개념 핵심 설명
  keyPoints: string[]; // 시험 빈출 & 함정 포인트
  examTip?: string; // 암기 비법 / 초고속 풀이 공식
  relatedQuestionIds?: number[]; // 연관된 실기 모의고사 문제 번호 (선택적)
}

export interface MindmapSection {
  id: string;
  title: string;
  description: string;
  chart: string;
  notes?: Record<string, MindmapNodeNote>;
}

