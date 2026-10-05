export type PracticalQuestionType = "short" | "descriptive" | "practical";

export interface PracticalSubject {
  id: string;
  name: string;
  shortName: string;
}

export interface PracticalQuestionSubItem {
  number: number;
  question: string;
  answer: string | string[];
  scoringCriteria?: string;
}

export interface PracticalQuestion {
  id: number;
  subjectId: string; // 과목 ID (예: 'system', 'network', 'application', 'general', 'law')
  type: PracticalQuestionType; // 'short' (단답형), 'descriptive' (서술형), 'practical' (실무 작업형)
  score: number; // 배점 (예: 3, 14)
  domain: string; // 세부 영역 (예: '시스템 보안', '네트워크 보안', '침해사고 분석')
  title: string; // 문제 제목
  description: string; // 문제 지문 및 요구사항
  scenario?: string; // 시나리오 박스 (옵션)
  subItems?: PracticalQuestionSubItem[]; // 하위 문항 (서술형의 1번, 2번 등)
  answer: string | string[]; // 정답 또는 모범 답안
  codeBlock?: {
    language: string;
    code: string;
  };
  scoringPoints?: string[]; // 채점 기준 / 키워드
  explanation: string; // 상세 해설 및 배경 지식
  examTips?: string; // 실전 시험 팁
  mermaidChart?: string; // 이해를 돕기 위한 Mermaid 시각화 다이어그램 (옵션)
}
