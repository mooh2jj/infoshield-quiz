export type SubjectCategory =
  | "system"
  | "network"
  | "application"
  | "general"
  | "law"
  | "aws-security"
  | "aws-resilient"
  | "aws-performance"
  | "aws-cost"
  | "bigdata-planning"
  | "bigdata-exploration"
  | "bigdata-modeling"
  | "bigdata-evaluation";

export type QuestionType = "multiple_choice" | "term_identification";

export interface QuizItem {
  id: string;
  category: SubjectCategory;
  type: QuestionType;
  title: string;
  question: string;
  codeSnippet?: string;
  options?: string[]; // 4지선다용 (단답형일 경우 생략)
  answerIndex?: number; // 4지선다 정답 인덱스
  termAnswers?: string[]; // 단답형 허용 정답 리스트 (대소문자/한영 동의어)
  explanation: {
    definition: string;
    optionsBreakdown?: string[];
    devContext: string; // 웹 개발 실무 팁
  };
  tags: string[];
}

export const SUBJECT_LABELS: Record<SubjectCategory, string> = {
  system: "시스템 보안",
  network: "네트워크 보안",
  application: "어플리케이션 보안",
  general: "정보보호 일반",
  law: "정보보호 관리 및 법규",
  "aws-security": "보안 아키텍처",
  "aws-resilient": "복원력 아키텍처",
  "aws-performance": "고성능 아키텍처",
  "aws-cost": "비용 최적화",
  "bigdata-planning": "빅데이터 기획",
  "bigdata-exploration": "빅데이터 탐색",
  "bigdata-modeling": "빅데이터 모델링",
  "bigdata-evaluation": "빅데이터 결과 해석",
};
