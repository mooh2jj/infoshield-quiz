"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  Award,
  CheckCircle2,
  Clock,
  Filter,
  RefreshCw,
  RotateCcw,
  XCircle,
  Home,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathText } from "@/components/ui/MathText";
import { CodeBlock } from "@/components/quiz/CodeBlock";
import {
  evaluateNetadminExam,
  getNetadminExamRound,
  getNetadminSectionByQuestionIndex,
  type NetadminExamRound,
} from "@/data/netadmin-exam";
import { useQuizStore } from "@/lib/store/quizStore";
import { getQuestionById } from "@/lib/questions";
import { cn } from "@/lib/utils";

const CIRCLE_NUMBERS = ["①", "②", "③", "④"];

export default function NetadminExamResultPage() {
  const router = useRouter();
  const queue = useQuizStore((state) => state.queue);
  const answers = useQuizStore((state) => state.answers);
  const examRound = useQuizStore((state) => state.examRound);
  const timeSpentSeconds = useQuizStore((state) => state.timeSpentSeconds);
  const startSession = useQuizStore((state) => state.startSession);
  const resetSession = useQuizStore((state) => state.resetSession);

  const [activeFilter, setActiveFilter] = useState<"all" | "wrong" | "correct">("all");

  const roundInfo = getNetadminExamRound(examRound as NetadminExamRound);
  const effectiveQueue = queue.length > 0 ? queue : roundInfo.questionIds;
  const evalResult = evaluateNetadminExam(answers, effectiveQueue);

  // 소요 시간 포맷팅
  const spentMinutes = Math.floor(timeSpentSeconds / 60);
  const spentSecs = timeSpentSeconds % 60;
  const formattedSpentTime =
    spentMinutes > 0 ? `${spentMinutes}분 ${spentSecs}초` : `${spentSecs}초`;

  // 오답 문항 ID 모음
  const wrongQuestionIds = effectiveQueue.filter((id) => !answers[id]?.correct);

  function handleRetryWrongOnly() {
    if (wrongQuestionIds.length === 0) return;
    startSession(
      {
        subjects: [
          "netadmin-general",
          "netadmin-devices",
          "netadmin-windows",
          "netadmin-linux",
        ],
        types: ["multiple_choice"],
      },
      { questionIds: wrongQuestionIds }
    );
    router.push("/netadmin/exam");
  }

  function handleRetakeFullExam() {
    startSession(
      {
        subjects: [
          "netadmin-general",
          "netadmin-devices",
          "netadmin-windows",
          "netadmin-linux",
        ],
        types: ["multiple_choice"],
      },
      { questionIds: roundInfo.questionIds }
    );
    router.push("/netadmin/exam");
  }

  function handleHome() {
    resetSession();
    router.push("/netadmin");
  }

  // 필터링된 문항 목록
  const filteredQueue = effectiveQueue.filter((id) => {
    const isCorrect = answers[id]?.correct;
    if (activeFilter === "wrong") return !isCorrect;
    if (activeFilter === "correct") return isCorrect;
    return true;
  });

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10 pb-28">
      {/* 1. 상단 합격/불합격 판정 히어로 배너 */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border p-6 sm:p-8 shadow-md transition-all",
          evalResult.isPassed
            ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-card to-background"
            : "border-rose-500/40 bg-gradient-to-br from-rose-500/10 via-card to-background"
        )}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                네트워크관리사 2급 필기
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {roundInfo.name}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {evalResult.isPassed ? (
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
                  <Award className="size-7" />
                </div>
              ) : (
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-md">
                  <AlertTriangle className="size-7" />
                </div>
              )}
              <div className="flex flex-col">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                  {evalResult.isPassed ? "최종 합격입니다! 🎉" : "아쉽게도 불합격입니다 ⚠️"}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {evalResult.isPassed
                    ? "합격 기준(60점 이상)을 안정적으로 달성하셨습니다. 실기 시험도 도전해보세요!"
                    : "총점 60점 미만으로 합격 기준에 도달하지 못했습니다. 오답을 복습하고 재도전하세요."}
                </p>
              </div>
            </div>
          </div>

          {/* 종합 점수 스코어보드 */}
          <div className="flex items-center gap-4 self-start rounded-xl border border-border bg-card/80 p-4 shadow-sm sm:self-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold text-muted-foreground">환산 총점</span>
              <span
                className={cn(
                  "text-3xl font-black tabular-nums tracking-tight",
                  evalResult.isPassed ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                )}
              >
                {evalResult.totalScore}
                <span className="text-sm font-semibold text-muted-foreground">점</span>
              </span>
            </div>
            <div className="h-9 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold text-muted-foreground">정답 수</span>
              <span className="text-2xl font-bold tabular-nums text-foreground">
                {evalResult.totalCorrect}
                <span className="text-xs font-normal text-muted-foreground"> / {evalResult.totalQuestions}</span>
              </span>
            </div>
            <div className="h-9 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-semibold text-muted-foreground">소요 시간</span>
              <span className="text-xs font-semibold tabular-nums text-muted-foreground mt-1.5 flex items-center gap-1">
                <Clock className="size-3" />
                {formattedSpentTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 과목별 취약점 성적 분석 카드 그리드 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-sm font-bold tracking-tight text-foreground">
          과목별 성적 분석
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {evalResult.sections.map((secEval) => {
            return (
              <div
                key={secEval.section.id}
                className={cn(
                  "flex flex-col justify-between rounded-xl border p-4 shadow-sm transition-all bg-card",
                  secEval.isCutoffFailed
                    ? "border-amber-500/50 bg-amber-500/5"
                    : "border-border"
                )}
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground truncate pr-1">
                      {secEval.section.name.replace("제", "").replace("과목 ", "과목: ")}
                    </span>
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                        secEval.accuracy >= 60
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      )}
                    >
                      {secEval.accuracy}%
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    문항 범위: {secEval.section.rangeLabel}번 ({secEval.section.count}문항)
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-3 border-t border-border/60 mt-3">
                  <span className="text-xs text-muted-foreground">정답률</span>
                  <span className="text-base font-extrabold tabular-nums text-foreground">
                    {secEval.correctCount} / {secEval.totalCount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. 응시 액션 버튼 바 */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {wrongQuestionIds.length > 0 && (
            <Button
              onClick={handleRetryWrongOnly}
              className="gap-1.5 font-bold text-xs h-9 bg-rose-600 hover:bg-rose-700 text-white"
            >
              <RotateCcw className="size-3.5" />
              오답 {wrongQuestionIds.length}문제만 다시 풀기
            </Button>
          )}

          <Button
            variant="outline"
            onClick={handleRetakeFullExam}
            className="gap-1.5 font-semibold text-xs h-9"
          >
            <RefreshCw className="size-3.5" />
            31문항 전체 다시 응시
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/netadmin/mindmap"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-semibold hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <BookOpen className="size-3.5" />
            마인드맵 복습
          </Link>
          <Button
            variant="ghost"
            onClick={handleHome}
            className="gap-1.5 text-xs h-9 font-semibold"
          >
            <Home className="size-3.5" />
            기출 복원 홈으로
          </Button>
        </div>
      </div>

      {/* 4. 문항별 상세 해설 및 오답 노트 리뷰 영역 */}
      <div className="flex flex-col gap-4 pt-2">
        {/* 필터 탭 바 */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-muted-foreground" />
            <h2 className="text-base font-bold text-foreground">
              문항별 정답 및 상세 해설 검토
            </h2>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 p-1">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-semibold transition-all",
                activeFilter === "all"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              전체 ({effectiveQueue.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("wrong")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-semibold transition-all",
                activeFilter === "wrong"
                  ? "bg-card text-rose-600 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              오답만 ({wrongQuestionIds.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("correct")}
              className={cn(
                "rounded-md px-2.5 py-1 text-xs font-semibold transition-all",
                activeFilter === "correct"
                  ? "bg-card text-emerald-600 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              정답만 ({evalResult.totalCorrect})
            </button>
          </div>
        </div>

        {/* 문항 카드 목록 */}
        <div className="flex flex-col gap-5">
          {filteredQueue.map((id) => {
            const item = getQuestionById(id);
            if (!item) return null;

            const globalIndex = effectiveQueue.indexOf(id);
            const userAns = answers[id];
            const isCorrect = Boolean(userAns?.correct);
            const submittedIndex =
              userAns?.submitted !== undefined ? Number(userAns.submitted) : undefined;
            const section = getNetadminSectionByQuestionIndex(globalIndex);

            return (
              <div
                key={id}
                className={cn(
                  "flex flex-col gap-4 rounded-xl border p-5 shadow-sm transition-all bg-card",
                  isCorrect
                    ? "border-border/80"
                    : "border-rose-500/40 bg-rose-500/[0.02]"
                )}
              >
                {/* 문항 헤더 */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold",
                        isCorrect
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                      )}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="size-3.5" />
                          정답
                        </>
                      ) : (
                        <>
                          <XCircle className="size-3.5" />
                          오답
                        </>
                      )}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {section.name} · 문항 {globalIndex + 1}번
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded bg-muted px-1.5 py-0.5 font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 문제 지문 */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    <MathText text={item.title} />
                  </h3>
                  <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap">
                    <MathText text={item.question} />
                  </div>
                </div>

                {/* 코드 스니펫 */}
                {item.codeSnippet && <CodeBlock code={item.codeSnippet} />}

                {/* 보기 영역 및 사용자 마킹 비교 */}
                {item.options && (
                  <div className="flex flex-col gap-2 pt-1">
                    {item.options.map((option, optIdx) => {
                      const isCorrectAnswer = optIdx === item.answerIndex;
                      const isUserSelected = optIdx === submittedIndex;

                      return (
                        <div
                          key={optIdx}
                          className={cn(
                            "flex items-start gap-3 rounded-lg border p-3 text-sm leading-relaxed transition-all",
                            isCorrectAnswer &&
                              "border-emerald-500/60 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 font-medium",
                            !isCorrectAnswer &&
                              isUserSelected &&
                              "border-rose-500/60 bg-rose-500/10 text-rose-900 dark:text-rose-200",
                            !isCorrectAnswer &&
                              !isUserSelected &&
                              "border-border/60 bg-muted/20 text-muted-foreground"
                          )}
                        >
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5">
                            {CIRCLE_NUMBERS[optIdx]}
                          </span>
                          <div className="flex-1">
                            <MathText text={option} />
                          </div>
                          {isCorrectAnswer && (
                            <span className="shrink-0 rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                              정답
                            </span>
                          )}
                          {!isCorrectAnswer && isUserSelected && (
                            <span className="shrink-0 rounded bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                              내가 고른 답
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 상세 해설 박스 */}
                <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-muted/40 p-4 text-xs sm:text-sm leading-relaxed mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground flex items-center gap-1.5 text-xs">
                      💡 핵심 개념 및 정답 해설
                    </span>
                    <p className="text-foreground/90 whitespace-pre-wrap leading-relaxed">
                      {item.explanation.definition}
                    </p>
                  </div>

                  {item.explanation.optionsBreakdown && (
                    <div className="flex flex-col gap-1 pt-2 border-t border-border/60">
                      <span className="font-bold text-foreground text-xs">
                        🔍 보기별 세부 분석
                      </span>
                      <ul className="space-y-1 text-muted-foreground pl-3 text-xs leading-relaxed list-disc">
                        {item.explanation.optionsBreakdown.map((breakdown, bIdx) => (
                          <li key={bIdx}>
                            <MathText text={breakdown} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.explanation.devContext && (
                    <div className="flex flex-col gap-1 pt-2 border-t border-border/60 text-xs">
                      <span className="font-bold text-primary flex items-center gap-1">
                        🛠️ 실무 엔지니어 & 시스템 관리 팁
                      </span>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.explanation.devContext}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
