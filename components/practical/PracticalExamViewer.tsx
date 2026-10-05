"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  Layers,
  BookOpen,
  ChevronsDownUp,
  ChevronsUpDown,
  RotateCcw,
  PenLine,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PracticalQuestion, PracticalSubject } from "@/data/practical/types";
import { PracticalMermaid } from "./PracticalMermaid";

interface PracticalExamViewerProps {
  title: string;
  subtitle: string;
  trendAnalysis?: {
    title: string;
    summary: string;
    keyPoints: { domain: string; desc: string }[];
  };
  subjects?: PracticalSubject[];
  questions: PracticalQuestion[];
  exitHref?: string;
  exitLabel?: string;
}

export function PracticalExamViewer({
  title,
  subtitle,
  trendAnalysis,
  subjects = [],
  questions,
  exitHref = "/security",
  exitLabel = "보안기사 홈",
}: PracticalExamViewerProps) {
  // 개별 문제별 정답 열림 상태 (기본: 모두 닫힘)
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({});

  // 개별 문제별 사용자 답안 메모
  const [userNotes, setUserNotes] = useState<Record<number, string>>({});

  // 개별 문제별 셀프 평가 (correct: 맞춤, review: 복습 필요)
  const [selfAssessment, setSelfAssessment] = useState<
    Record<number, "correct" | "review" | undefined>
  >({});

  // 출제 트렌드 브리핑 열림/닫힘
  const [isTrendOpen, setIsTrendOpen] = useState(true);

  // 과목 필터 ('all' | subjectId)
  const [selectedSubject, setSelectedSubject] = useState<string>("all");

  // 유형 필터 (all, short, practical/descriptive)
  const [typeFilter, setTypeFilter] = useState<"all" | "short" | "practical">("all");

  const filteredQuestions = questions.filter((q) => {
    // 1. 과목 필터
    if (selectedSubject !== "all" && q.subjectId !== selectedSubject) {
      return false;
    }
    // 2. 유형 필터
    if (typeFilter === "short") return q.type === "short";
    if (typeFilter === "practical") return q.type === "practical" || q.type === "descriptive";
    return true;
  });

  // 현재 선택된 과목 풀에 따른 카운트
  const subjectPool = selectedSubject === "all"
    ? questions
    : questions.filter((q) => q.subjectId === selectedSubject);

  const subjectPoolCount = subjectPool.length;
  const shortCount = subjectPool.filter((q) => q.type === "short").length;
  const practicalCount = subjectPool.filter(
    (q) => q.type === "practical" || q.type === "descriptive"
  ).length;

  const allOpen = filteredQuestions.length > 0 && filteredQuestions.every((q) => openAnswers[q.id]);

  function toggleAnswer(id: number) {
    setOpenAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function toggleAllAnswers() {
    const nextState = !allOpen;
    const nextMap: Record<number, boolean> = {};
    for (const q of filteredQuestions) {
      nextMap[q.id] = nextState;
    }
    setOpenAnswers((prev) => ({ ...prev, ...nextMap }));
  }

  function resetNotesAndAssessments() {
    if (confirm("작성한 메모와 자가 채점 기록을 모두 초기화하시겠습니까?")) {
      setUserNotes({});
      setSelfAssessment({});
      setOpenAnswers({});
    }
  }

  const totalScore = questions.reduce((sum, q) => sum + q.score, 0);
  const correctCount = Object.values(selfAssessment).filter((v) => v === "correct").length;
  const reviewCount = Object.values(selfAssessment).filter((v) => v === "review").length;

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
      {/* 상단 네비게이션 & 타이틀 */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link
            href={exitHref}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="size-3.5" />
            <span>{exitLabel}</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" />
              실전 실기 대비
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-sm text-muted-foreground break-keep">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 최신 출제 트렌드 분석 브리핑 카드 */}
      {trendAnalysis && (
        <div className="overflow-hidden rounded-xl border border-primary/20 bg-primary/5 transition-all">
          <button
            type="button"
            onClick={() => setIsTrendOpen((v) => !v)}
            className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-primary/10"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                <TrendingUp className="size-4" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-foreground">
                  {trendAnalysis.title}
                </h2>
                <span className="text-xs text-muted-foreground">
                  최신 실기 시험 출제 방향 및 빈출 유형 요약
                </span>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-200",
                isTrendOpen && "rotate-180"
              )}
            />
          </button>

          {isTrendOpen && (
            <div className="border-t border-primary/15 px-4 pb-4 pt-3 text-xs leading-relaxed space-y-3">
              <p className="text-foreground/90 font-medium bg-background/60 p-3 rounded-lg border border-border/50">
                {trendAnalysis.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {trendAnalysis.keyPoints.map((point) => (
                  <div
                    key={point.domain}
                    className="flex flex-col gap-1 rounded-lg border border-border/60 bg-card p-3 shadow-2xs"
                  >
                    <span className="font-semibold text-primary text-[11px]">
                      {point.domain}
                    </span>
                    <span className="text-[11px] text-muted-foreground leading-normal">
                      {point.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 과목 선택 (과목별 문제 필터링) */}
      {subjects.length > 0 && (
        <section className="flex flex-col gap-2 rounded-xl border border-border/70 bg-card p-3.5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
              <BookOpen className="size-3.5 text-primary" />
              과목 선택
            </span>
            <span className="text-[11px] text-muted-foreground">
              {selectedSubject === "all"
                ? `전체 ${questions.length}문항`
                : `${subjects.find((s) => s.id === selectedSubject)?.name ?? ""} (${
                    questions.filter((q) => q.subjectId === selectedSubject).length
                  }문항)`}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-0.5">
            <button
              type="button"
              onClick={() => setSelectedSubject("all")}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all select-none",
                selectedSubject === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span>전체 과목</span>
              <span
                className={cn(
                  "rounded px-1.5 py-0.2 text-[10px]",
                  selectedSubject === "all"
                    ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                    : "bg-background text-muted-foreground"
                )}
              >
                {questions.length}
              </span>
            </button>

            {subjects.map((sub) => {
              const count = questions.filter((q) => q.subjectId === sub.id).length;
              const isSelected = selectedSubject === sub.id;

              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubject(sub.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all select-none",
                    isSelected
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>{sub.name}</span>
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.2 text-[10px]",
                      isSelected
                        ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                        : "bg-background text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* 학습 컨트롤 툴바: 유형 필터 + 전체 토글 + 자가 채점 현황 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-card p-3.5 shadow-xs">
        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant={typeFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("all")}
            className="h-8 text-xs font-semibold"
          >
            전체 ({subjectPoolCount})
          </Button>
          <Button
            type="button"
            variant={typeFilter === "short" ? "default" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("short")}
            className="h-8 text-xs font-semibold"
          >
            단답형 ({shortCount})
          </Button>
          <Button
            type="button"
            variant={typeFilter === "practical" ? "default" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("practical")}
            className="h-8 text-xs font-semibold"
          >
            서술·작업형 ({practicalCount})
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {/* 자가 채점 현황 뱃지 */}
          {(correctCount > 0 || reviewCount > 0) && (
            <div className="flex items-center gap-1.5 text-xs font-medium mr-1">
              <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-3.5" />
                {correctCount}
              </span>
              <span className="text-muted-foreground">/</span>
              <span className="flex items-center gap-0.5 text-rose-500">
                <XCircle className="size-3.5" />
                {reviewCount}
              </span>
            </div>
          )}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleAllAnswers}
            className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            {allOpen ? (
              <>
                <ChevronsDownUp className="size-3.5" />
                <span>정답 모두 닫기</span>
              </>
            ) : (
              <>
                <ChevronsUpDown className="size-3.5" />
                <span>정답 모두 보기</span>
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={resetNotesAndAssessments}
            className="size-8 text-muted-foreground hover:text-foreground"
            title="자가 채점 및 메모 초기화"
          >
            <RotateCcw className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* 문제 리스트 */}
      <div className="flex flex-col gap-6">
        {filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <Layers className="size-8 text-muted-foreground/50" />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-foreground">
                선택한 조건에 해당하는 문제가 없습니다.
              </h3>
              <p className="text-xs text-muted-foreground">
                과목이나 문제 유형(단답형/서술형) 필터를 변경해 보세요.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedSubject("all");
                setTypeFilter("all");
              }}
              className="mt-1 h-8 text-xs font-medium"
            >
              전체 필터 초기화
            </Button>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isOpen = Boolean(openAnswers[q.id]);
            const assessment = selfAssessment[q.id];

            return (
              <article
              key={q.id}
              className={cn(
                "flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all",
                assessment === "correct" && "border-emerald-500/40 bg-emerald-500/[0.02]",
                assessment === "review" && "border-amber-500/40 bg-amber-500/[0.02]",
                !assessment && "border-border"
              )}
            >
              {/* 문제 헤더 */}
              <div className="flex flex-col gap-3 p-5 sm:p-6 border-b border-border/70">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center justify-center rounded-md bg-foreground px-2 py-0.5 text-xs font-bold text-background">
                      문제 {q.id}
                    </span>
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      {q.domain}
                    </span>
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {q.type === "short" ? "단답형" : "서술·작업형"}
                    </span>
                  </div>

                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    배점 {q.score}점
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground break-keep">
                  {q.title}
                </h3>

                {/* 문제 본문 설명 */}
                <p className="text-sm text-foreground/90 leading-relaxed break-keep">
                  {q.description}
                </p>

                {/* 시나리오 또는 예시 코드 박스 */}
                {q.scenario && (
                  <div className="rounded-lg border border-border/70 bg-muted/50 p-3.5 font-mono text-xs text-foreground/90 leading-relaxed overflow-x-auto">
                    {q.scenario}
                  </div>
                )}

                {/* 하위 문항이 있는 경우 (서술형 세부 문제) */}
                {q.subItems && q.subItems.length > 0 && (
                  <div className="flex flex-col gap-3 pt-2">
                    {q.subItems.map((sub) => (
                      <div
                        key={sub.number}
                        className="rounded-lg border border-border/60 bg-muted/30 p-3.5 text-xs"
                      >
                        <span className="font-bold text-foreground mr-1.5">
                          ({sub.number})
                        </span>
                        <span className="text-foreground/90 leading-relaxed break-keep">
                          {sub.question}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 답안 연습장 (메모 입력창) */}
                <div className="mt-2 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 font-medium">
                      <PenLine className="size-3 text-muted-foreground" />
                      내 답안 작성 연습 (직접 써보고 정답을 확인하세요)
                    </span>
                    <span className="text-[11px] tabular-nums">
                      {(userNotes[q.id] || "").length}자
                    </span>
                  </div>
                  <textarea
                    rows={2}
                    value={userNotes[q.id] || ""}
                    onChange={(e) =>
                      setUserNotes((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    placeholder="여기에 생각한 답안이나 키워드를 메모한 후 아래 '정답 확인' 토글을 눌러보세요..."
                    className="w-full rounded-lg border border-border/70 bg-background/80 px-3 py-2 text-xs leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-y"
                  />
                </div>
              </div>

              {/* 정답 확인 토글 트리거 버튼 */}
              <div className="flex items-center justify-between bg-muted/20 px-5 py-3 border-b border-border/40">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => toggleAnswer(q.id)}
                  className={cn(
                    "gap-1.5 text-xs font-semibold transition-all",
                    isOpen
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20"
                      : "border-border bg-card text-foreground hover:bg-muted"
                  )}
                >
                  <FileCheck2 className="size-3.5" />
                  <span>{isOpen ? "정답 및 해설 접기" : "정답 및 모범답안 보기"}</span>
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>

                {/* 셀프 채점 버튼 */}
                {isOpen && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setSelfAssessment((prev) => ({
                          ...prev,
                          [q.id]: prev[q.id] === "correct" ? undefined : "correct",
                        }))
                      }
                      className={cn(
                        "flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all",
                        assessment === "correct"
                          ? "bg-emerald-600 text-white font-semibold shadow-xs"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      <CheckCircle2 className="size-3.5" />
                      <span>정답 맞춤</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelfAssessment((prev) => ({
                          ...prev,
                          [q.id]: prev[q.id] === "review" ? undefined : "review",
                        }))
                      }
                      className={cn(
                        "flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all",
                        assessment === "review"
                          ? "bg-rose-600 text-white font-semibold shadow-xs"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      <XCircle className="size-3.5" />
                      <span>복습 필요</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 토글 정답 & 모범 답안 & 해설 바디 */}
              {isOpen && (
                <div className="flex flex-col gap-4 p-5 sm:p-6 bg-muted/10 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* 정답 / 모범 답안 섹션 */}
                  <div className="flex flex-col gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/20 p-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="size-4" />
                      모범 정답 (Standard Answer)
                    </span>
                    <div className="space-y-1.5 text-sm font-semibold text-emerald-950 dark:text-emerald-200 leading-relaxed whitespace-pre-line">
                      {Array.isArray(q.answer) ? (
                        q.answer.map((ans, aIdx) => (
                          <div key={aIdx} className="break-keep">
                            {ans}
                          </div>
                        ))
                      ) : (
                        <div className="break-keep">{q.answer}</div>
                      )}
                    </div>
                  </div>

                  {/* 코드 블록 (존재 시) */}
                  {q.codeBlock && (
                    <div className="rounded-xl border border-border bg-slate-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner">
                      <pre>
                        <code>{q.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Mermaid 구조·흐름 시각화 다이어그램 (존재 시) */}
                  {q.mermaidChart && (
                    <PracticalMermaid
                      chart={q.mermaidChart}
                      id={`practical-q-${q.id}`}
                    />
                  )}

                  {/* 채점 기준 및 핵심 키워드 */}
                  {q.scoringPoints && q.scoringPoints.length > 0 && (
                    <div className="flex flex-col gap-1.5 rounded-lg border border-border/70 bg-card p-3.5 text-xs">
                      <span className="font-bold text-foreground flex items-center gap-1">
                        <Sparkles className="size-3.5 text-amber-500" />
                        부분 점수 및 채점 핵심 포인트
                      </span>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground pt-1">
                        {q.scoringPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed break-keep">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 상세 기술 해설 */}
                  <div className="flex flex-col gap-1.5 rounded-lg border border-border/70 bg-card p-3.5 text-xs">
                    <span className="font-bold text-foreground flex items-center gap-1">
                      <BookOpen className="size-3.5 text-primary" />
                      상세 이론 및 메커니즘 해설
                    </span>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line pt-1 break-keep">
                      {q.explanation}
                    </div>
                  </div>

                  {/* 시험 합격 팁 */}
                  {q.examTips && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
                      <Lightbulb className="size-4 shrink-0 text-amber-500 mt-0.5" />
                      <div>
                        <span className="font-bold mr-1">실전 팁:</span>
                        <span>{q.examTips}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        }))}
      </div>

      {/* 하단 완료 및 다음 행동 안내 바 */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border/70 bg-muted/40 p-5 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold text-foreground">
            실기 모의고사 {questions.length}문항 학습 완료!
          </h4>
          <p className="text-xs text-muted-foreground">
            단답형과 서술형 답안 작성 요령을 익혔다면, 스피드 퀴즈로 핵심 개념 암기를 병행해 보세요.
          </p>
        </div>
        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/security/speed-quiz"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-9 text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white gap-1.5"
            )}
          >
            스피드 퀴즈 풀기
          </Link>
          <Link
            href={exitHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-9 text-xs font-semibold"
            )}
          >
            {exitLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
