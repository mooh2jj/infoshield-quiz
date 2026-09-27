"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { getQuestionById } from "@/lib/questions";
import { SUBJECT_LABELS, type SubjectCategory } from "@/types/quiz";

const ALL_SUBJECTS: SubjectCategory[] = [
  "aws-security",
  "aws-resilient",
  "aws-performance",
  "aws-cost",
];

export default function AwsSaaResultPage() {
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
    (id) => getQuestionById(id)?.category.startsWith("aws-")
  );

  function handleRetryWrong() {
    if (wrongIds.length === 0) return;
    startSession({ subjects: [], types: [] }, { questionIds: wrongIds });
    router.push("/aws-saa/quiz");
  }

  function handleHome() {
    resetSession();
    router.push("/aws-saa");
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
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm text-muted-foreground">세션 결과</p>
        <p className="text-4xl font-semibold tabular-nums">{scorePercent}%</p>
        <p className="text-sm text-muted-foreground">
          {total}문제 중 {correctCount}문제 정답
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          도메인별 결과
        </h2>
        <div className="flex flex-col gap-2">
          {bySubject.map((row) => (
            <div
              key={row.subject}
              className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm"
            >
              <span>{SUBJECT_LABELS[row.subject]}</span>
              <span className="tabular-nums text-muted-foreground">
                {row.correct}/{row.total}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          className="h-12 flex-1 text-base"
          disabled={wrongIds.length === 0}
          onClick={handleRetryWrong}
        >
          오답 다시 풀기 ({wrongIds.length})
        </Button>
        <Button className="h-12 flex-1 text-base" onClick={handleHome}>
          홈으로
        </Button>
      </div>
    </main>
  );
}
