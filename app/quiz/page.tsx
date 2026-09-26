"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { useKeyboardShortcuts } from "@/lib/keyboard";
import { isTermAnswerCorrect } from "@/lib/fuzzyMatch";
import { getQuestionById } from "@/lib/questions";

export default function QuizPage() {
  const router = useRouter();
  const hasHydrated = useQuizStore((state) => state.hasHydrated);
  const queue = useQuizStore((state) => state.queue);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const answers = useQuizStore((state) => state.answers);
  const isHintShown = useQuizStore((state) => state.isHintShown);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const toggleHint = useQuizStore((state) => state.toggleHint);
  const resetSession = useQuizStore((state) => state.resetSession);
  const addWrongAnswer = useNotebookStore((state) => state.addWrongAnswer);
  const removeWrongAnswer = useNotebookStore(
    (state) => state.removeWrongAnswer
  );

  useEffect(() => {
    if (hasHydrated && queue.length === 0) {
      router.replace("/");
    }
  }, [hasHydrated, queue.length, router]);

  useEffect(() => {
    if (hasHydrated && queue.length > 0 && currentIndex >= queue.length) {
      router.replace("/result");
    }
  }, [hasHydrated, queue.length, currentIndex, router]);

  const currentId = queue[currentIndex];
  const currentItem = currentId ? getQuestionById(currentId) : undefined;
  const currentAnswer = currentId ? answers[currentId] : undefined;
  const isAnswered = Boolean(currentAnswer);

  useKeyboardShortcuts({
    onEnter: () => {
      if (isAnswered) nextQuestion();
    },
    onHint: () => toggleHint(),
  });

  if (!hasHydrated || !currentItem) {
    return (
      <main className="mx-auto flex w-full max-w-[680px] flex-1 items-center justify-center px-6 py-12">
        <p className="text-sm text-muted-foreground">불러오는 중...</p>
      </main>
    );
  }

  function handleSubmit(value: string) {
    if (!currentItem) return;
    const correct = isTermAnswerCorrect(value, currentItem.termAnswers ?? []);
    submitAnswer(currentItem.id, value, correct);
    if (correct) {
      removeWrongAnswer(currentItem.id);
    } else {
      addWrongAnswer(currentItem.id);
    }
  }

  function handleExit() {
    if (
      window.confirm(
        "퀴즈를 종료하고 홈으로 이동할까요? 진행 상황은 저장되지 않습니다."
      )
    ) {
      resetSession();
      router.push("/");
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-6 px-6 py-8 pb-28 sm:pb-8">
      <div className="flex items-center gap-4">
        <ProgressBar current={currentIndex + 1} total={queue.length} />
        <Button
          variant="ghost"
          size="icon"
          className="size-11 shrink-0"
          onClick={handleExit}
          aria-label="나가기"
        >
          <X className="size-4" />
        </Button>
      </div>

      <QuestionCard
        key={currentItem.id}
        item={currentItem}
        answer={currentAnswer}
        isHintShown={isHintShown}
        onToggleHint={toggleHint}
        onSubmit={handleSubmit}
      />

      <p className="hidden text-xs text-muted-foreground sm:block">
        단축키 — Enter: 다음 문제 · H: 힌트
      </p>

      {isAnswered && (
        <div className="fixed inset-x-0 bottom-0 border-t border-border bg-background p-4 sm:static sm:flex sm:justify-end sm:border-0 sm:bg-transparent sm:p-0">
          <Button
            size="lg"
            className="h-12 w-full px-8 sm:w-auto"
            onClick={() => nextQuestion()}
          >
            다음 문제 (Enter)
          </Button>
        </div>
      )}
    </main>
  );
}
