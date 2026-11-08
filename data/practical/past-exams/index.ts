import { SECURITY_PAST_EXAM_2026_2 } from "./2026-2";
import { SECURITY_PAST_EXAM_2026_1 } from "./2026-1";
import { SECURITY_PAST_EXAM_2025_3 } from "./2025-3";
import type { SecurityPastExamRound, PastExamRoundId } from "./types";

export * from "./types";
export { SECURITY_PAST_EXAM_2026_2 } from "./2026-2";
export { SECURITY_PAST_EXAM_2026_1 } from "./2026-1";
export { SECURITY_PAST_EXAM_2025_3 } from "./2025-3";

export const SECURITY_PAST_EXAMS: Record<PastExamRoundId, SecurityPastExamRound> = {
  "2026-2": SECURITY_PAST_EXAM_2026_2,
  "2026-1": SECURITY_PAST_EXAM_2026_1,
  "2025-3": SECURITY_PAST_EXAM_2025_3,
};

export const SECURITY_PAST_EXAM_LIST: SecurityPastExamRound[] = [
  SECURITY_PAST_EXAM_2026_2,
  SECURITY_PAST_EXAM_2026_1,
  SECURITY_PAST_EXAM_2025_3,
];

export const DEFAULT_PAST_EXAM_ROUND: PastExamRoundId = "2026-2";

export function getSecurityPastExam(roundId: string): SecurityPastExamRound {
  if (roundId in SECURITY_PAST_EXAMS) {
    return SECURITY_PAST_EXAMS[roundId as PastExamRoundId];
  }
  return SECURITY_PAST_EXAM_2026_2;
}
