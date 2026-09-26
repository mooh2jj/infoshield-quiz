import type { QuestionType, QuizItem, SubjectCategory } from "@/types/quiz";
import { ALL_QUESTIONS } from "@/data/questions";

export function getQuestionById(id: string): QuizItem | undefined {
  return ALL_QUESTIONS.find((item) => item.id === id);
}

export function filterQuestions(
  subjects: SubjectCategory[],
  types: QuestionType[]
): QuizItem[] {
  return ALL_QUESTIONS.filter(
    (item) =>
      (subjects.length === 0 || subjects.includes(item.category)) &&
      (types.length === 0 || types.includes(item.type))
  );
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
