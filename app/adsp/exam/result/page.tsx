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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathText } from "@/components/ui/MathText";
import { CodeBlock } from "@/components/quiz/CodeBlock";
import {
  evaluateAdspExam,
  getAdspExamRound,
  getSectionByQuestionIndex,
  ADSP_ROUND_KEYS,
  type AdspExamRound,
} from "@/data/adsp-exam";
import { useQuizStore } from "@/lib/store/quizStore";
import { getQuestionById } from "@/lib/questions";
import { cn } from "@/lib/utils";

const CIRCLE_NUMBERS = ["①", "②", "③", "④"];

export default function AdspExamResultPage() {
  const router = useRouter();
  const queue = useQuizStore((state) => state.queue);
  const answers = useQuizStore((state) => state.answers);
  const examRound = useQuizStore((state) => state.examRound);
  const setExamRound = useQuizStore((state) => state.setExamRound);
  const timeSpentSeconds = useQuizStore((state) => state.timeSpentSeconds);
  const startSession = useQuizStore((state) => state.startSession);
  const resetSession = useQuizStore((state) => state.resetSession);

  const [activeFilter, setActiveFilter] = useState<"all" | "wrong" | "correct">("all");

  const roundInfo = getAdspExamRound(examRound);
  const nextRound: AdspExamRound =
    examRound === "48"
      ? "47"
      : examRound === "47"
      ? "44"
      : examRound === "44"
      ? "43"
      : examRound === "43"
      ? "42"
      : "48";
  const nextRoundInfo = getAdspExamRound(nextRound);

  const effectiveQueue = queue.length > 0 ? queue : roundInfo.questionIds;
  const evalResult = evaluateAdspExam(answers, effectiveQueue);

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
        subjects: ["adsp-understanding", "adsp-planning", "adsp-analysis", "adsp-past"],
        types: ["multiple_choice"],
      },
      { questionIds: wrongQuestionIds }
    );
    router.push("/adsp/exam");
  }

  function handleRetakeFullExam() {
    startSession(
      {
        subjects: ["adsp-understanding", "adsp-planning", "adsp-analysis", "adsp-past"],
        types: ["multiple_choice"],
      },
      { questionIds: roundInfo.questionIds }
    );
    router.push("/adsp/exam");
  }

  function handleSwitchRound(targetRound: AdspExamRound) {
    setExamRound(targetRound);
    const targetInfo = getAdspExamRound(targetRound);
    startSession(
      {
        subjects: ["adsp-understanding", "adsp-planning", "adsp-analysis", "adsp-past"],
        types: ["multiple_choice"],
      },
      { questionIds: targetInfo.questionIds }
    );
    router.push(`/adsp/exam?round=${targetRound}`);
  }

  function handleHome() {
    resetSession();
    router.push("/adsp");
  }

  // 필터링된 문항 목록
  const displayedQuestionIds = effectiveQueue.filter((id) => {
    const isCorrect = answers[id]?.correct;
    if (activeFilter === "wrong") return !isCorrect;
    if (activeFilter === "correct") return isCorrect;
    return true;
  });

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-4 py-8 pb-20">
      {/* 상단 타이틀 */}
      <div className="flex flex-col gap-1.5 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
            ADsP {roundInfo.name} ({roundInfo.year})
          </span>
          <span className="text-xs text-muted-foreground">50문항 채점 결과</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {roundInfo.name} ({roundInfo.year}) 결과 리포트
        </h1>
      </div>

      {/* 종합 성적 및 합격 판정 카드 */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border p-6 sm:p-8 shadow-sm transition-all",
          evalResult.isPassed
            ? "border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-card to-transparent"
            : "border-destructive/40 bg-gradient-to-br from-destructive/10 via-card to-transparent"
        )}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              {evalResult.isPassed ? (
                <Award className="size-6 text-emerald-500" />
              ) : (
                <AlertTriangle className="size-6 text-destructive" />
              )}
              <span
                className={cn(
                  "text-xs font-bold uppercase tracking-wider",
                  evalResult.isPassed ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
                )}
              >
                {evalResult.isPassed ? "합격 판정" : "불합격 판정"}
              </span>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {evalResult.isPassed ? "🎉 축하합니다! 최종 합격" : "⚠️ 아쉽습니다. 불합격"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {evalResult.isPassed
                  ? "총점 60점 이상 및 전과목 과락(40% 미만) 없이 합격 기준을 충족했습니다."
                  : evalResult.hasCutoffFailure
                  ? "총점과 무관하게 40% 미만 득점 과목이 발생하여 과락으로 불합격 처리되었습니다."
                  : "합격 기준인 총점 60점에 미달하였습니다."}
              </p>
            </div>
          </div>

          {/* 대형 점수 표시 */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card/90 px-8 py-5 shadow-sm min-w-[180px]">
            <span className="text-xs font-semibold text-muted-foreground">총점 (100점 만점)</span>
            <span
              className={cn(
                "text-5xl font-black tracking-tight tabular-nums mt-1",
                evalResult.isPassed ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
              )}
            >
              {evalResult.totalScore}
              <span className="text-2xl font-bold text-foreground">점</span>
            </span>
            <span className="text-xs text-muted-foreground mt-1 tabular-nums">
              50문항 중 {evalResult.totalCorrect}개 정답 ({Math.round((evalResult.totalCorrect / 50) * 100)}%)
            </span>
          </div>
        </div>

        {/* 부가 메타 지표 (소요 시간 등) */}
        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-primary" />
            <span>시험 소요 시간:</span>
            <strong className="text-foreground">{formattedSpentTime}</strong>
            <span className="text-muted-foreground/70">(제한시간 90분)</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <span>합격 기준:</span>
            <span className="text-foreground font-medium">총점 60점 이상 + 과목별 40% 이상</span>
          </div>
        </div>
      </div>

      {/* 과목별 점수 및 과락 판정 표 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          과목별 세부 득점 및 과락 분석
        </h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-12 border-b border-border bg-muted/50 p-3 text-xs font-semibold text-muted-foreground">
            <div className="col-span-5 sm:col-span-4">과목명 (문항 범위)</div>
            <div className="col-span-3 sm:col-span-3 text-center">정답수 / 문항수</div>
            <div className="col-span-2 sm:col-span-3 text-center">취득 점수 (만점)</div>
            <div className="col-span-2 sm:col-span-2 text-right">과락 여부</div>
          </div>

          <div className="divide-y divide-border text-sm">
            {evalResult.sections.map((sec) => (
              <div
                key={sec.section.id}
                className={cn(
                  "grid grid-cols-12 items-center p-3.5 transition-colors",
                  sec.isCutoffFailed && "bg-destructive/5"
                )}
              >
                <div className="col-span-5 sm:col-span-4">
                  <span className="font-semibold text-foreground">{sec.section.name}</span>
                  <span className="text-xs text-muted-foreground ml-1.5">
                    ({sec.section.rangeLabel}번)
                  </span>
                </div>
                <div className="col-span-3 sm:col-span-3 text-center tabular-nums text-xs sm:text-sm">
                  <span className="font-semibold text-foreground">{sec.correctCount}</span>
                  <span className="text-muted-foreground"> / {sec.totalCount}문항</span>
                </div>
                <div className="col-span-2 sm:col-span-3 text-center tabular-nums">
                  <span className="font-bold text-foreground">{sec.score}점</span>
                  <span className="text-xs text-muted-foreground"> / {sec.section.maxScore}점</span>
                </div>
                <div className="col-span-2 sm:col-span-2 text-right">
                  {sec.isCutoffFailed ? (
                    <span className="inline-flex items-center gap-1 rounded bg-destructive/15 px-2 py-0.5 text-xs font-bold text-destructive">
                      과락 탈락
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/15 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      통과
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 액션 버튼 그룹 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {wrongQuestionIds.length > 0 && (
          <Button
            type="button"
            variant="outline"
            onClick={handleRetryWrongOnly}
            className="gap-2 h-11 border-destructive/40 text-destructive hover:bg-destructive/10 font-semibold text-xs sm:text-sm"
          >
            <RotateCcw className="size-4" />
            오답만 다시 풀기 ({wrongQuestionIds.length}개)
          </Button>
        )}
        <Button
          type="button"
          variant="outline"
          onClick={handleRetakeFullExam}
          className="gap-2 h-11 font-semibold text-xs sm:text-sm"
        >
          <RefreshCw className="size-4" />
          {roundInfo.round}회 재도전
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => handleSwitchRound(nextRound)}
          className="gap-2 h-11 font-semibold text-xs sm:text-sm"
        >
          <Award className="size-4 text-primary" />
          {nextRoundInfo.name} 도전
        </Button>
        <Button
          type="button"
          variant="default"
          onClick={handleHome}
          className="gap-2 h-11 font-semibold text-xs sm:text-sm"
        >
          기출 복원 홈으로
        </Button>
      </div>

      {/* 문항별 상세 해설 및 OMR 검토 섹션 */}
      <section className="flex flex-col gap-4 pt-4 border-t border-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              문항별 정답 및 상세 해설 검토
            </h2>
            <span className="text-xs text-muted-foreground">
              (총 {effectiveQueue.length}문항)
            </span>
          </div>

          {/* 필터 탭 */}
          <div className="flex items-center rounded-lg border border-border bg-card p-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={cn(
                "rounded px-3 py-1 font-medium transition-colors",
                activeFilter === "all" ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              전체 ({effectiveQueue.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("wrong")}
              className={cn(
                "rounded px-3 py-1 font-medium transition-colors",
                activeFilter === "wrong" ? "bg-destructive text-destructive-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              오답만 ({wrongQuestionIds.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("correct")}
              className={cn(
                "rounded px-3 py-1 font-medium transition-colors",
                activeFilter === "correct" ? "bg-emerald-600 text-white font-semibold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              정답만 ({evalResult.totalCorrect})
            </button>
          </div>
        </div>

        {/* 문항 해설 카드 리스트 */}
        <div className="flex flex-col gap-4">
          {displayedQuestionIds.map((qId) => {
            const item = getQuestionById(qId);
            if (!item) return null;

            const qIndex = effectiveQueue.indexOf(qId);
            const userAns = answers[qId];
            const isCorrect = userAns?.correct ?? false;
            const userPickIndex = userAns?.submitted !== undefined ? Number(userAns.submitted) : -1;
            const section = getSectionByQuestionIndex(qIndex);

            return (
              <div
                key={qId}
                className={cn(
                  "flex flex-col gap-4 rounded-xl border p-5 shadow-sm transition-all bg-card",
                  isCorrect ? "border-border" : "border-destructive/30 bg-destructive/[0.02]"
                )}
              >
                {/* 문항 헤더 */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex size-6 items-center justify-center rounded-full text-xs font-bold text-white",
                        isCorrect ? "bg-emerald-600" : "bg-destructive"
                      )}
                    >
                      {isCorrect ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
                    </span>
                    <span className="font-bold text-sm text-foreground">
                      문항 {qIndex + 1}
                    </span>
                    <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground font-medium">
                      {section.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">내가 고른 답:</span>
                    <span
                      className={cn(
                        "font-bold px-2 py-0.5 rounded",
                        userPickIndex === -1
                          ? "bg-muted text-muted-foreground"
                          : isCorrect
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          : "bg-destructive/15 text-destructive"
                      )}
                    >
                      {userPickIndex === -1 ? "미답안" : `${CIRCLE_NUMBERS[userPickIndex]}번`}
                    </span>
                    <span className="text-muted-foreground">| 정답:</span>
                    <span className="font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {item.answerIndex !== undefined ? `${CIRCLE_NUMBERS[item.answerIndex]}번` : "단답형"}
                    </span>
                  </div>
                </div>

                {/* 문제 내용 */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-base text-foreground">
                    <MathText text={item.title} />
                  </h3>
                  <div className="text-sm text-foreground/90 whitespace-pre-wrap">
                    <MathText text={item.question} />
                  </div>
                </div>

                {/* 코드 스니펫 */}
                {item.codeSnippet && <CodeBlock code={item.codeSnippet} />}

                {/* 4지선다 보기 비교 */}
                <div className="flex flex-col gap-1.5 pt-1">
                  {item.options?.map((opt, optIdx) => {
                    const isRightAnswer = optIdx === item.answerIndex;
                    const isUserChoice = optIdx === userPickIndex;

                    return (
                      <div
                        key={optIdx}
                        className={cn(
                          "flex items-start gap-2.5 rounded-lg border p-3 text-xs sm:text-sm",
                          isRightAnswer
                            ? "border-emerald-500/40 bg-emerald-500/10 font-medium text-foreground"
                            : isUserChoice && !isCorrect
                            ? "border-destructive/40 bg-destructive/10 text-destructive line-through"
                            : "border-border/60 bg-muted/20 text-muted-foreground"
                        )}
                      >
                        <span className="font-bold shrink-0">{CIRCLE_NUMBERS[optIdx]}</span>
                        <span className="flex-1">
                          <MathText text={opt} />
                        </span>
                        {isRightAnswer && (
                          <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                            정답
                          </span>
                        )}
                        {isUserChoice && !isRightAnswer && (
                          <span className="rounded bg-destructive/20 px-1.5 py-0.2 text-[10px] font-bold text-destructive">
                            내 선택 (오답)
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* 상세 해설 박스 */}
                <div className="rounded-lg border border-border bg-muted/40 p-4 space-y-3 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <span className="font-bold text-primary flex items-center gap-1">
                      💡 정답 및 핵심 개념 해설
                    </span>
                    <p className="text-foreground leading-relaxed">
                      <MathText text={item.explanation.definition} />
                    </p>
                  </div>

                  {item.explanation.optionsBreakdown && (
                    <div className="space-y-1.5 border-t border-border/60 pt-2.5">
                      <span className="font-semibold text-muted-foreground text-xs">
                        보기별 오답 정리:
                      </span>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {item.explanation.optionsBreakdown.map((txt, bIdx) => (
                          <li key={bIdx} className="leading-relaxed">
                            <MathText text={txt} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.explanation.devContext && (
                    <div className="rounded border border-primary/20 bg-primary/5 p-2.5 text-xs text-foreground/90">
                      <strong className="text-primary font-bold">💻 실무 팁: </strong>
                      <MathText text={item.explanation.devContext} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
