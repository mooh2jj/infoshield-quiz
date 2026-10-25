"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, FileText, Minus, Play, Plus, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SubjectChip } from "@/components/quiz/SubjectChip";
import {
  ADSP_EXAM_ROUNDS,
  ADSP_ROUND_KEYS,
  getAdspExamRound,
  type AdspExamRound,
} from "@/data/adsp-exam";
import { useQuizStore } from "@/lib/store/quizStore";
import { cn } from "@/lib/utils";
import type { SubjectCategory } from "@/types/quiz";

const ALL_SUBJECTS: SubjectCategory[] = [
  "adsp-understanding",
  "adsp-planning",
  "adsp-analysis",
  "adsp-past",
];

const MIN_QUESTION_COUNT = 5;
const MAX_QUESTION_COUNT = 50;
const DEFAULT_QUESTION_COUNT = 20;

export default function AdspPage() {
  const router = useRouter();
  const hasHydrated = useQuizStore((state) => state.hasHydrated);
  const startSession = useQuizStore((state) => state.startSession);
  const setExamRound = useQuizStore((state) => state.setExamRound);
  const [selectedRound, setSelectedRound] = useState<AdspExamRound>("48");
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

  // 실전 기출 50문제 풀세트 CBT 모의고사 시작
  function handleStartFullExam() {
    const roundInfo = getAdspExamRound(selectedRound);
    setExamRound(selectedRound);
    startSession(
      {
        subjects: ALL_SUBJECTS,
        types: ["multiple_choice"],
      },
      { questionIds: roundInfo.questionIds }
    );
    router.push(`/adsp/exam?round=${selectedRound}`);
  }

  // 자유 선택 연습 문제 풀기
  function handleStart() {
    if (selected.length === 0) return;
    startSession(
      { subjects: selected, types: ["multiple_choice"] },
      { count: questionCount }
    );
    router.push("/adsp/quiz");
  }

  return (
    <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col gap-8 px-6 py-10 pb-28 sm:pb-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
            CBT 시험장
          </span>
          <span className="text-xs text-muted-foreground">42회·43회·44회·47회·48회 (2024~2026년) 실전 기출 복원</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          ADsP (데이터분석 준전문가) 기출 복원
        </h1>
        <p className="text-sm text-muted-foreground">
          실제 시험과 동일한 50문항 CBT 환경, 90분 제한시간 타이머, 실시간 OMR 사이드바로 실전 감각 완성
        </p>
      </div>

      {/* [★ 핵심] 실전 기출 50문항 풀세트 CBT 모의고사 메인 카드 */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/15 via-card to-background p-6 sm:p-7 shadow-md">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
              <FileText className="size-3.5" />
              실전 CBT 모의고사
            </span>
            <span className="text-xs font-semibold text-primary">
              정확히 50문항 (100점 만점 / 문항당 2점)
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              실전 기출 복원 50문제 풀기
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              1과목 데이터 이해(10) + 2과목 데이터 분석 기획(10) + 3과목 데이터 분석(30)
              순서대로 진행되며, 40% 미만 과목 과락 판정과 최종 합격 여부를 판독합니다.
            </p>
          </div>

          {/* 회차 선택 세그먼트 버튼 (48회 / 47회 / 44회 / 43회 / 42회) */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground">
                응시할 회차를 선택하세요 (출시 연도 순):
              </span>
              <span className="text-[11px] text-primary font-medium">
                선택: {ADSP_EXAM_ROUNDS[selectedRound].name} ({ADSP_EXAM_ROUNDS[selectedRound].year})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {ADSP_ROUND_KEYS.map((roundKey) => {
                const roundInfo = ADSP_EXAM_ROUNDS[roundKey];
                const isSelected = selectedRound === roundKey;

                return (
                  <button
                    key={roundKey}
                    type="button"
                    onClick={() => setSelectedRound(roundKey)}
                    className={cn(
                      "flex flex-col items-start gap-1.5 rounded-xl border p-3.5 text-left transition-all",
                      isSelected
                        ? "border-primary bg-primary/10 shadow-sm ring-2 ring-primary"
                        : "border-border bg-card/60 hover:border-primary/40 hover:bg-card"
                    )}
                  >
                    <div className="flex items-center gap-1.5 w-full justify-between">
                      <span className="font-bold text-sm text-foreground">
                        {roundInfo.name}
                      </span>
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.2 text-[10px] font-bold shrink-0",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {roundInfo.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-primary">출시 연도: {roundInfo.year}</span>
                      <span>·</span>
                      <span>50문항</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 특징 태그 뱃지 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-medium text-foreground/90">
            <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 p-2.5">
              <Clock className="size-4 text-primary shrink-0" />
              <span>90분 실시간 타이머</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 p-2.5">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <span>1~50 OMR 마킹 사이드바</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 rounded-lg border border-border/80 bg-background/80 p-2.5">
              <Zap className="size-4 text-amber-500 shrink-0" />
              <span>과락 판정 및 오답노트</span>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleStartFullExam}
            disabled={!hasHydrated}
            className="h-12 w-full gap-2 text-base font-bold shadow-md bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Play className="size-4 fill-current" />
            {ADSP_EXAM_ROUNDS[selectedRound].name} 50문제 CBT 시작 (90분)
          </Button>
        </div>
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
                100문항 완비 (48~31회 역대 기출 수록)
              </span>
            </div>
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              ADsP 기출 복원 단답형 스피드 퀴즈
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

      {/* 과목별 부분 연습 풀이 옵션 */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-base font-semibold tracking-tight text-foreground">
            과목별 맞춤 연습 풀이
          </h2>
          <p className="text-xs text-muted-foreground">
            특정 과목만 골라서 즉시 해설을 확인하며 문제 풀기를 연습할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">과목 선택</span>
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
          <span className="text-xs font-medium text-muted-foreground">문제 수</span>
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

        <Button
          variant="outline"
          className="h-11 w-full text-sm font-medium"
          disabled={!hasHydrated || selected.length === 0}
          onClick={handleStart}
        >
          선택한 과목 ({questionCount}문제) 연습 풀기
        </Button>
      </div>
    </main>
  );
}
