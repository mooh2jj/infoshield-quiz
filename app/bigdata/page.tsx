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
  "bigdata-planning",
  "bigdata-exploration",
  "bigdata-modeling",
  "bigdata-evaluation",
];

const MIN_QUESTION_COUNT = 5;
const MAX_QUESTION_COUNT = 20;
const DEFAULT_QUESTION_COUNT = 5;

export default function BigdataPage() {
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
    router.push("/bigdata/quiz");
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-10 px-6 py-12 pb-28 sm:pb-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          빅데이터분석기사 + ADsP
        </h1>
        <p className="text-muted-foreground">
          데이터 분석 기획부터 탐색, 머신러닝 모델링, 결과 해석까지 핵심 ROI 퀴즈
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
                신규
              </span>
            </div>
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              ADsP 단답형 스피드 퀴즈
            </h2>
            <p className="text-xs text-muted-foreground">
              3초 안에 정답을 떠올리는 플래시카드형 스피드 집중 암기 트레이닝
            </p>
          </div>
          <Link
            href="/bigdata/speed-quiz"
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
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium">문제 수</span>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            size="icon"
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
            type="button"
            variant="outline"
            size="icon"
            onClick={() => adjustQuestionCount(5)}
            disabled={questionCount >= MAX_QUESTION_COUNT}
            aria-label="문제 수 증가"
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          size="lg"
          className="h-12 w-full text-base font-medium"
          disabled={!hasHydrated || selected.length === 0}
          onClick={handleStart}
        >
          {selected.length === 0 ? "과목을 선택하세요" : "퀴즈 시작"}
        </Button>
        <Link
          href="/bigdata/mindmap"
          className={cn(buttonVariants({ variant: "outline" }), "h-12 text-base")}
        >
          마인드맵 전체보기
        </Link>
      </div>
    </main>
  );
}
