import type { PracticalQuestion } from "../types";

export type PastExamRoundId = "2026-2" | "2026-1" | "2025-3";

export interface PastExamOverview {
  summary: string;
  difficulty: "상" | "중상" | "중";
  passRateEstimate?: string;
  keyThemes: string[];
  analysis: { domain: string; desc: string }[];
}

export interface SecurityPastExamRound {
  id: PastExamRoundId;
  title: string;
  roundLabel: string;
  examDate: string;
  overview: PastExamOverview;
  questions: PracticalQuestion[];
}
