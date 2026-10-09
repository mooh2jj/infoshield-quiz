"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { getQuestionById } from "@/lib/questions";
import { SUBJECT_LABELS, type SubjectCategory } from "@/types/quiz";

const ALL_SUBJECTS: SubjectCategory[] = [
  "adsp-understanding",
  "adsp-planning",
  "adsp-analysis",
];

export default function AdspResultPage() {
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
    (id) => getQuestionById(id)?.category.startsWith("adsp-")
  );

  function handleRetryWrong() {
    if (wrongIds.length === 0) return;
    startSession({ subjects: [], types: [] }, { questionIds: wrongIds });
    router.push("/adsp/quiz");
  }

  function handleHome() {
    resetSession();
    router.push("/adsp");
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
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">학습 결과</h1>
        <p className="text-muted-foreground">
          ADsP (데이터분석 준전문가) 세션 결과
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-8 text-center">
        <span className="text-sm font-medium text-muted-foreground">
          정답률
        </span>
        <span className="text-5xl font-bold tracking-tight">
          {scorePercent}%
        </span>
        <span className="text-sm text-muted-foreground">
          {total}문제 중 {correctCount}문제 정답
        </span>
      </div>

      {bySubject.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-sm font-medium">과목별 결과</h2>
          <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card">
            {bySubject.map(({ subject, total: subTotal, correct }) => {
              const pct = Math.round((correct / subTotal) * 100);
              return (
                <div
                  key={subject}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span className="font-medium">{SUBJECT_LABELS[subject]}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">
                      {correct} / {subTotal}
                    </span>
                    <span className="w-12 text-right font-medium">{pct}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
