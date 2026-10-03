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
  "aws-security",
  "aws-resilient",
  "aws-performance",
  "aws-cost",
];

const MIN_QUESTION_COUNT = 5;
const MAX_QUESTION_COUNT = 20;
const DEFAULT_QUESTION_COUNT = 10;

export default function AwsSaaPage() {
  const router = useRouter();
  const hasHydrated = useQuizStore((state) => state.hasHydrated);
  const startSession = useQuizStore((state) => state.startSession);
  const [selected, setSelected] = useState<SubjectCategory[]>([]);
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
    router.push("/aws-saa/quiz");
  }

  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-10 px-6 py-12 pb-28 sm:pb-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          AWS SAA (SAA-C03)
        </h1>
        <p className="text-muted-foreground">
          4대 도메인 실전 시나리오 퀴즈 — 4지선다형
        </p>
      </div>

      {/* AWS SAA 단답형 스피드 퀴즈 배너 */}
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
              AWS SAA 단답형 스피드 퀴즈
            </h2>
            <p className="text-xs text-muted-foreground">
              3초 안에 최적의 AWS 솔루션을 떠올리는 핵심 아키텍처 플래시카드 트레이닝
            </p>
          </div>
          <Link
            href="/aws-saa/speed-quiz"
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

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          도메인 선택
        </h2>
        <div className="flex flex-wrap gap-2">
          {ALL_SUBJECTS.map((subject) => (
            <SubjectChip
              key={subject}
              subject={subject}
              selected={selected.includes(subject)}
              onToggle={toggleSubject}
            />
          ))}
        </div>
        {selected.length === 0 && (
          <p className="text-xs text-muted-foreground">
            풀어볼 도메인을 1개 이상 선택하세요.
          </p>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium text-muted-foreground">
          문제 수
        </h2>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-11"
            disabled={questionCount <= MIN_QUESTION_COUNT}
            onClick={() => adjustQuestionCount(-1)}
            aria-label="문제 수 줄이기"
          >
            <Minus className="size-4" />
          </Button>
          <span className="w-8 text-center text-lg font-semibold tabular-nums">
            {questionCount}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-11"
            disabled={questionCount >= MAX_QUESTION_COUNT}
            onClick={() => adjustQuestionCount(1)}
            aria-label="문제 수 늘리기"
          >
            <Plus className="size-4" />
          </Button>
          <span className="text-xs text-muted-foreground">
            {MIN_QUESTION_COUNT}~{MAX_QUESTION_COUNT}문제 중 선택
          </span>
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/aws-saa/mindmap"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-12 flex-1 text-base"
          )}
        >
          마인드맵 보기
        </Link>
      </div>

      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-background p-4 sm:static sm:border-0 sm:bg-transparent sm:p-0">
        <Button
          size="lg"
          className="h-12 w-full text-base"
          disabled={selected.length === 0 || !hasHydrated}
          onClick={handleStart}
        >
          {hasHydrated ? "퀴즈 시작" : "불러오는 중..."}
        </Button>
      </div>
    </main>
  );
}
