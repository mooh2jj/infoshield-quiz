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
  startSession: (filters: QuizFilters, options?: StartSessionOptions) => void;
  submitAnswer: (itemId: string, submitted: string, correct: boolean) => void;
  nextQuestion: () => void;
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
      toggleHint: () => set((state) => ({ isHintShown: !state.isHintShown })),
      resetSession: () =>
        set({
          filters: EMPTY_FILTERS,
          queue: [],
          currentIndex: 0,
          answers: {},
          isHintShown: false,
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
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
