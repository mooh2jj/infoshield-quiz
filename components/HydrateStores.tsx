"use client";

import { useEffect } from "react";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";

export function HydrateStores() {
  useEffect(() => {
    useQuizStore.persist.rehydrate();
    useNotebookStore.persist.rehydrate();
  }, []);

  return null;
}
