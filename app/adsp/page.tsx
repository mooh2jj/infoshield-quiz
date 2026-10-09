"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Minus, Plus, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SubjectChip } from "@/components/quiz/SubjectChip";
import { useQuizStore } from "@/lib/store/quizStore";
import { cn } from "@/lib/utils";
import type { SubjectCategory } from "@/types/quiz";

const ALL_SUBJECTS: SubjectCategory[] = [
  "adsp-understanding",
  "adsp-planning",
  "adsp-analysis",
];

const MIN_QUESTION_COUNT = 5;
const MAX_QUESTION_COUNT = 20;
const DEFAULT_QUESTION_COUNT = 10;

export default function AdspPage() {
  const router = useRouter();
  const hasHydrated = useQuizStore((state) => state.hasHydrated);
  const startSession = useQuizStore((state) => state.startSession);
  const [selected, setSelected] = useState<SubjectCategory[]>(ALL_SUBJECTS);
  const [questionCount, setQuestionCount] = useState(DEFAULT_QUESTION_COUNT);

  function toggleSubject(subject: SubjectCategory) {
    setSelected((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  }

  function adjustQuestionCount(delta: number) {
    setQuestionCount((prev) =>
      Math.min(MAX_QUESTION_COUNT, Math.max(MIN_QUESTION_COUNT, prev + delta))
    );
  }

  function handleStart() {
    if (selected.length === 0) return;
    startSession(
      { subjects: selected, types: ["multiple_choice"] },
      { count: questionCount }
    );
    router.push("/adsp/quiz");
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-10 px-6 py-12 pb-28 sm:pb-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          ADsP (데이터분석 준전문가)
        </h1>
        <p className="text-muted-foreground">
          데이터 이해부터 분석 기획, 통계 및 정형 데이터 마이닝까지 핵심 ROI 퀴즈
        </p>
      </div>

      {/* ADsP 단답형 스피드 퀴즈 배너 */}
      <div className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-md bg-amber-500/20 text-amber-500">
                <Zap className="size-3.5 fill-amber-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                SPEED QUIZ
              </span>
              <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                82문항 완비
              </span>
            </div>
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              ADsP 기출 복원 스피드 퀴즈
            </h2>
            <p className="text-xs text-muted-foreground">
              3초 안에 정답을 떠올리는 단답형 주관식 & 빈출 킬러 집중 암기 트레이닝
            </p>
          </div>
          <Link
            href="/adsp/speed-quiz"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 shrink-0 gap-1.5 bg-amber-600 font-semibold text-white hover:bg-amber-700 shadow-sm"
            )}
          >
            <Zap className="size-3.5 fill-current" />
            스피드 퀴즈 시작
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">과목 선택</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSelected([...ALL_SUBJECTS])}
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              전체 선택
            </button>
            <span className="text-xs text-muted-foreground">·</span>
            <button
              type="button"
              onClick={() => setSelected([])}
              className="text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              전체 해제
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_SUBJECTS.map((subject) => (
            <SubjectChip
              key={subject}
              subject={subject}
              selected={selected.includes(subject)}
              onToggle={() => toggleSubject(subject)}
            />
          ))}
        </div>
        {selected.length === 0 && (
          <p className="text-xs text-destructive">
            최소 하나 이상의 과목을 선택해주세요.
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium">문제 수</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-9"
              onClick={() => adjustQuestionCount(-5)}
              disabled={questionCount <= MIN_QUESTION_COUNT}
              aria-label="문제 수 감소"
            >
              <Minus className="size-4" />
            </Button>
            <span className="w-12 text-center text-lg font-semibold tabular-nums">
              {questionCount}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="size-9"
              onClick={() => adjustQuestionCount(5)}
              disabled={questionCount >= MAX_QUESTION_COUNT}
              aria-label="문제 수 증가"
            >
              <Plus className="size-4" />
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">
            {MIN_QUESTION_COUNT} ~ {MAX_QUESTION_COUNT}문제
          </span>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-background p-4 sm:static sm:border-0 sm:bg-transparent sm:p-0">
        <Button
          size="lg"
          className="h-12 w-full text-base font-medium"
          disabled={!hasHydrated || selected.length === 0}
          onClick={handleStart}
        >
          문제 풀기 시작
        </Button>
      </div>
    </main>
  );
}
