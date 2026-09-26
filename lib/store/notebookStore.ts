import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface WrongAnswerEntry {
  itemId: string;
  missedAt: string;
  timesWrong: number;
}

interface NotebookState {
  hasHydrated: boolean;
  wrongAnswers: Record<string, WrongAnswerEntry>;
  addWrongAnswer: (itemId: string) => void;
  removeWrongAnswer: (itemId: string) => void;
  clearNotebook: () => void;
  setHasHydrated: (value: boolean) => void;
}

export const useNotebookStore = create<NotebookState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      wrongAnswers: {},
      addWrongAnswer: (itemId) =>
        set((state) => {
          const existing = state.wrongAnswers[itemId];
          return {
            wrongAnswers: {
              ...state.wrongAnswers,
              [itemId]: {
                itemId,
                missedAt: new Date().toISOString(),
                timesWrong: (existing?.timesWrong ?? 0) + 1,
              },
            },
          };
        }),
      removeWrongAnswer: (itemId) =>
        set((state) => {
          const next = { ...state.wrongAnswers };
          delete next[itemId];
          return { wrongAnswers: next };
        }),
      clearNotebook: () => set({ wrongAnswers: {} }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: "infoshield-notebook",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({ wrongAnswers: state.wrongAnswers }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
