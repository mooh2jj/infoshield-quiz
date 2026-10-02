"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { getQuestionById } from "@/lib/questions";
import { SUBJECT_LABELS, type SubjectCategory } from "@/types/quiz";

const ALL_SUBJECTS: SubjectCategory[] = ["sqld-modeling", "sqld-sql"];

export default function SqldResultPage() {
  const router = useRouter();
  const queue = useQuizStore((state) => state.queue);
  const answers = useQuizStore((state) => state.answers);
  const resetSession = useQuizStore((state) => state.resetSession);
  const startSession = useQuizStore((state) => state.startSession);
  const wrongAnswers = useNotebookStore((state) => state.wrongAnswers);

  const total = queue.length;
  const correctCount = queue.filter((id) => answers[id]?.correct).length;
  const scorePercent =
    total === 0 ? 0 : Math.round((correctCount / total) * 100);

  const bySubject = ALL_SUBJECTS.map((subject) => {
    const ids = queue.filter(
      (id) => getQuestionById(id)?.category === subject
    );
    const correct = ids.filter((id) => answers[id]?.correct).length;
    return { subject, total: ids.length, correct };
  }).filter((row) => row.total > 0);

  const wrongIds = Object.keys(wrongAnswers).filter(
    (id) => getQuestionById(id)?.category.startsWith("sqld-")
  );

  function handleRetryWrong() {
    if (wrongIds.length === 0) return;
    startSession({ subjects: [], types: [] }, { questionIds: wrongIds });
    router.push("/sqld/quiz");
  }

  function handleHome() {
    resetSession();
    router.push("/sqld");
  }

  if (total === 0) {
    return (
      <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center">
        <p className="text-muted-foreground">완료된 퀴즈 세션이 없습니다.</p>
        <Button onClick={handleHome}>홈으로</Button>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-10 px-6 py-12">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">퀴즈 결과</h1>
        <p className="text-4xl font-bold tabular-nums">
          {scorePercent}점
          <span className="ml-2 text-base font-normal text-muted-foreground">
            ({correctCount}/{total} 정답)
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          과목별 정답률
        </h2>
        <div className="divide-y divide-border rounded-lg border border-border">
          {bySubject.map(({ subject, total: subTotal, correct: subCorrect }) => {
            const pct = Math.round((subCorrect / subTotal) * 100);
            return (
              <div
                key={subject}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="text-sm">{SUBJECT_LABELS[subject]}</span>
                <span className="text-sm tabular-nums text-muted-foreground">
                  {subCorrect}/{subTotal} ({pct}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {wrongIds.length > 0 && (
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full text-base font-medium"
            onClick={handleRetryWrong}
          >
            오답 다시 풀기 ({wrongIds.length}개)
          </Button>
        )}
        <Button
          size="lg"
          className="h-12 w-full text-base font-medium"
          onClick={handleHome}
        >
          처음으로
        </Button>
      </div>
    </main>
  );
}
