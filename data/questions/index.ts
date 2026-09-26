import type { QuizItem, SubjectCategory } from "@/types/quiz";
import system from "./system.json";
import network from "./network.json";
import application from "./application.json";
import general from "./general.json";
import law from "./law.json";

export const QUESTIONS_BY_CATEGORY: Record<SubjectCategory, QuizItem[]> = {
  system: system as QuizItem[],
  network: network as QuizItem[],
  application: application as QuizItem[],
  general: general as QuizItem[],
  law: law as QuizItem[],
};

export const ALL_QUESTIONS: QuizItem[] = Object.values(
  QUESTIONS_BY_CATEGORY
).flat();
