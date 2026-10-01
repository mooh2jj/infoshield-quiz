"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
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
