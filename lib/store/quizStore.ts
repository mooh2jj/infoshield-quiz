import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { QuestionType, SubjectCategory } from "@/types/quiz";
import { filterQuestions, shuffle } from "@/lib/questions";

export interface QuizFilters {
  subjects: SubjectCategory[];
  types: QuestionType[];
}

interface AnswerRecord {
  submitted: string;
  correct: boolean;
}

export interface StartSessionOptions {
  questionIds?: string[];
  count?: number;
}

interface QuizSessionState {
  hasHydrated: boolean;
  filters: QuizFilters;
  queue: string[];
  currentIndex: number;
  answers: Record<string, AnswerRecord>;
  isHintShown: boolean;
  timeSpentSeconds: number;
  examRound: "48" | "47" | "44" | "43" | "42";
  startSession: (filters: QuizFilters, options?: StartSessionOptions) => void;
  submitAnswer: (itemId: string, submitted: string, correct: boolean) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  setTimeSpentSeconds: (seconds: number) => void;
  setExamRound: (round: "48" | "47" | "44" | "43" | "42") => void;
  toggleHint: () => void;
  resetSession: () => void;
  setHasHydrated: (value: boolean) => void;
}

const EMPTY_FILTERS: QuizFilters = { subjects: [], types: [] };

export const useQuizStore = create<QuizSessionState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      filters: EMPTY_FILTERS,
      queue: [],
      currentIndex: 0,
      answers: {},
      isHintShown: false,
      timeSpentSeconds: 0,
      examRound: "48",
      startSession: (filters, options) => {
        const { questionIds, count } = options ?? {};
        let ids: string[];
        if (questionIds) {
          ids = questionIds;
        } else {
          const shuffled = shuffle(
            filterQuestions(filters.subjects, filters.types)
          ).map((item) => item.id);
          ids = typeof count === "number" ? shuffled.slice(0, count) : shuffled;
        }
        set({
          filters,
          queue: ids,
          currentIndex: 0,
          answers: {},
          isHintShown: false,
          timeSpentSeconds: 0,
        });
      },
      submitAnswer: (itemId, submitted, correct) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [itemId]: { submitted, correct },
          },
        })),
      nextQuestion: () =>
        set((state) => ({
          currentIndex: Math.min(state.currentIndex + 1, state.queue.length),
          isHintShown: false,
        })),
      previousQuestion: () =>
        set((state) => ({
          currentIndex: Math.max(state.currentIndex - 1, 0),
          isHintShown: false,
        })),
      goToQuestion: (index) =>
        set((state) => ({
          currentIndex: Math.max(0, Math.min(index, state.queue.length - 1)),
          isHintShown: false,
        })),
      setTimeSpentSeconds: (seconds) => set({ timeSpentSeconds: seconds }),
      setExamRound: (round) => set({ examRound: round }),
      toggleHint: () => set((state) => ({ isHintShown: !state.isHintShown })),
      resetSession: () =>
        set({
          filters: EMPTY_FILTERS,
          queue: [],
          currentIndex: 0,
          answers: {},
          isHintShown: false,
          timeSpentSeconds: 0,
          examRound: "48",
        }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "infoshield-session",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({
        filters: state.filters,
        queue: state.queue,
        currentIndex: state.currentIndex,
        answers: state.answers,
        timeSpentSeconds: state.timeSpentSeconds,
        examRound: state.examRound,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
