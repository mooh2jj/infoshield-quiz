"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { getQuestionById } from "@/lib/questions";
import { SUBJECT_LABELS, type SubjectCategory } from "@/types/quiz";

const CSTS_SUBJECTS: SubjectCategory[] = [
  "csts-principles",
  "csts-static",
  "csts-blackbox",
  "csts-whitebox",
  "csts-management",
];

export default function CstsResultPage() {
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
  const isPassed = scorePercent >= 70; // CSTS 커트라인 70점

  const bySubject = CSTS_SUBJECTS.map((subject) => {
    const ids = queue.filter(
      (id) => getQuestionById(id)?.category === subject
    );
    const correct = ids.filter((id) => answers[id]?.correct).length;
    return { subject, total: ids.length, correct };
  }).filter((row) => row.total > 0);

  const wrongIds = Object.keys(wrongAnswers).filter(
    (id) => getQuestionById(id)?.category.startsWith("csts-")
  );

  function handleRetryWrong() {
    if (wrongIds.length === 0) return;
    startSession({ subjects: [], types: [] }, { questionIds: wrongIds });
    router.push("/csts/quiz");
  }

  function handleRetryAll() {
    startSession(
      {
        subjects: CSTS_SUBJECTS,
        types: ["multiple_choice"],
      },
      { count: 20 }
    );
    router.push("/csts/quiz");
  }

  function handleHome() {
    resetSession();
    router.push("/csts");
  }

  if (total === 0) {
    return (
      <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center">
        <p className="text-muted-foreground">완료된 CSTS 퀴즈 세션이 없습니다.</p>
        <Button onClick={handleHome}>CSTS 홈으로</Button>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-2 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          CSTS 실전 기출 복원 결과
        </span>
        <div className="flex items-center justify-center gap-3">
          <p className="text-5xl font-black tabular-nums tracking-tight">
            {scorePercent}점
          </p>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              isPassed
                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                : "bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30"
            }`}
          >
            {isPassed ? "합격권 (70점 이상)" : "불합격 (70점 미만)"}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          총 {total}문제 중 {correctCount}문제 정답 (합격 커트라인 70점)
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-foreground">
          영역별 득점 분석
        </h2>
        <div className="flex flex-col gap-2">
          {bySubject.map((row) => {
            const passRate = row.total === 0 ? 0 : Math.round((row.correct / row.total) * 100);
            return (
              <div
                key={row.subject}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">
                    {SUBJECT_LABELS[row.subject]}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({row.correct}/{row.total})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-bold ${
                      passRate >= 70
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {passRate}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          className="h-12 flex-1 text-sm font-bold"
          disabled={wrongIds.length === 0}
          onClick={handleRetryWrong}
        >
          오답 다시 풀기 ({wrongIds.length}제)
        </Button>
        <Button
          variant="outline"
          className="h-12 flex-1 text-sm font-bold"
          onClick={handleRetryAll}
        >
          전체 다시 풀기
        </Button>
        <Button
          className="h-12 flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm"
          onClick={handleHome}
        >
          CSTS 홈으로
        </Button>
      </div>
    </main>
  );
}
