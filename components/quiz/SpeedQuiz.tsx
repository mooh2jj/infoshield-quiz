"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  Zap,
  Pause,
  Play,
  X,
  RotateCcw,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  BookOpen,
  Layers,
  Shuffle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SpeedQuizChapter, SpeedQuizItem } from "@/data/speed-quiz/types";

// 기본 시간 설정 상수
export const CONFIG = {
  COUNTDOWN_SECONDS: 3, // 시작 전 카운트다운 (초)
  QUESTION_TIME: 3,     // 문제 제한 시간 기본값 (3초)
  ANSWER_TIME: 2,       // 정답 확인 시간 기본값 (2초)
};

export type QuizStatus =
  | "READY"
  | "START_COUNT"
  | "QUESTION"
  | "SHOW_ANSWER"
  | "FINISHED";

export interface SpeedQuizProps {
  /** 퀴즈 헤더 및 카드 타이틀 (예: 'ADsP 단답형 스피드 퀴즈', '정보보안기사 단답형 스피드 퀴즈') */
  title?: string;
  /** 퀴즈 설명 부제목 */
  subtitle?: string;
  /** 자격증별 챕터/과목 목록 (선택 사항, 없으면 단일 전체 과목으로 처리) */
  chapters?: SpeedQuizChapter[];
  /** 문제 데이터 배열 */
  quizList: SpeedQuizItem[];
  /** 문제당 제한 시간 (기본 3초) */
  defaultQuestionTime?: number;
  /** 정답 공개 유지 시간 (기본 2초) */
  defaultAnswerTime?: number;
  /** 나가기 및 완료 후 이동할 링크 URL */
  exitHref?: string;
  /** 완료 후 복귀 버튼 텍스트 (예: '정보보안기사 홈', '빅데이터 퀴즈 홈') */
  exitLabel?: string;
}

export function SpeedQuiz({
  title = "단답형 스피드 퀴즈",
  subtitle = "3초 안에 정답을 빠르게 떠올리는 핵심 플래시카드 암기 트레이닝",
  chapters = [],
  quizList = [],
  defaultQuestionTime = CONFIG.QUESTION_TIME,
  defaultAnswerTime = CONFIG.ANSWER_TIME,
  exitHref = "/",
  exitLabel = "퀴즈 홈으로",
}: SpeedQuizProps) {
  // 상태 관리
  const [status, setStatus] = useState<QuizStatus>("READY");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [countdown, setCountdown] = useState(CONFIG.COUNTDOWN_SECONDS);

  // 챕터 선택 및 문제 수 설정
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [isShuffle, setIsShuffle] = useState<boolean>(true);

  // 실행 중인 세션의 문제 목록
  const [activeQueue, setActiveQueue] = useState<SpeedQuizItem[]>([]);

  // 시간 설정 (기본: 문제 3초, 정답 2초)
  const [questionTime, setQuestionTime] = useState(defaultQuestionTime);
  const [answerTime, setAnswerTime] = useState(defaultAnswerTime);
  const [showExtraSettings, setShowExtraSettings] = useState(false);

  // 남은 시간(밀리초) 및 총 기준 시간
  const [timerMs, setTimerMs] = useState(defaultQuestionTime * 1000);
  const [totalTimerMs, setTotalTimerMs] = useState(defaultQuestionTime * 1000);

  // 퀴즈 진행 도중 실시간 슬라이더 바 조작 핸들러
  const handleQuestionTimeChange = useCallback((newSec: number) => {
    setQuestionTime(newSec);
    if (status === "QUESTION") {
      // 진행 중인 현재 문제의 타이머도 늘어난 비율에 맞추어 즉시 동적 확장
      setTimerMs((prev) => {
        const prevRatio = totalTimerMs > 0 ? prev / totalTimerMs : 1;
        return Math.max(100, newSec * 1000 * prevRatio);
      });
      setTotalTimerMs(newSec * 1000);
    }
  }, [status, totalTimerMs]);

  // 선택된 챕터에 따른 문제 풀(Pool)
  const filteredPool = useMemo(() => {
    if (selectedChapter === "all" || chapters.length === 0) return quizList;
    return quizList.filter((item) => item.chapterId === selectedChapter);
  }, [quizList, selectedChapter, chapters.length]);

  // 유효 문제 수 (선택된 풀 크기 이하로 자동 보정)
  const effectiveCount = Math.min(questionCount, filteredPool.length);

  // 연타 및 더블클릭 방지를 위한 마지막 조작 시각 ref
  const lastActionTimeRef = useRef(0);

  // 최신 상태를 ref로 보관하여 비동기 핸들러 등에서 참조
  const stateRef = useRef({
    status,
    isPaused,
    currentIndex,
    questionTime,
    answerTime,
    queueLength: activeQueue.length,
  });

  useEffect(() => {
    stateRef.current = {
      status,
      isPaused,
      currentIndex,
      questionTime,
      answerTime,
      queueLength: activeQueue.length,
    };
  }, [status, isPaused, currentIndex, questionTime, answerTime, activeQueue.length]);

  // 정답 공개 단계로 전환 (QUESTION -> SHOW_ANSWER)
  const revealAnswer = useCallback(() => {
    setStatus("SHOW_ANSWER");
    const duration = stateRef.current.answerTime * 1000;
    setTimerMs(duration);
    setTotalTimerMs(duration);
  }, []);

  // 다음 문제로 이동 또는 전체 종료 (SHOW_ANSWER -> QUESTION or FINISHED)
  const nextQuestionOrFinish = useCallback(() => {
    const queueLen = stateRef.current.queueLength;
    if (queueLen === 0) {
      setStatus("FINISHED");
      return;
    }

    setCurrentIndex((prev) => {
      const next = prev + 1;
      // 정해진 문제 수를 모두 완주했으면 즉시 FINISHED 전환 (인덱스는 초과 증가 방지)
      if (next >= queueLen) {
        setStatus("FINISHED");
        return prev;
      }
      setStatus("QUESTION");
      const duration = stateRef.current.questionTime * 1000;
      setTimerMs(duration);
      setTotalTimerMs(duration);
      return next;
    });
  }, []);

  // 퀴즈 시작 함수
  const startQuiz = useCallback(() => {
    if (filteredPool.length === 0) return;

    let pool = [...filteredPool];
    if (isShuffle) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }
    // 사용자가 선택한 정확한 개수만큼 큐 구성
    const queue = pool.slice(0, effectiveCount);
    setActiveQueue(queue);
    setCurrentIndex(0);
    setCountdown(CONFIG.COUNTDOWN_SECONDS);
    setIsPaused(false);
    setStatus("START_COUNT");
  }, [filteredPool, isShuffle, effectiveCount]);

  // 화면 클릭 / 스페이스바 통합 인터랙션 (120ms 디바운스 적용)
  const handleInteraction = useCallback(() => {
    const { status: curStatus, isPaused: curPaused } = stateRef.current;
    if (curPaused) return;

    const now = performance.now();
    if (now - lastActionTimeRef.current < 120) return;
    lastActionTimeRef.current = now;

    if (curStatus === "READY") {
      startQuiz();
    } else if (curStatus === "QUESTION") {
      revealAnswer();
    } else if (curStatus === "SHOW_ANSWER") {
      nextQuestionOrFinish();
    } else if (curStatus === "FINISHED") {
      startQuiz();
    }
  }, [startQuiz, revealAnswer, nextQuestionOrFinish]);

  // 일시정지 토글
  const togglePause = useCallback(() => {
    if (status === "QUESTION" || status === "SHOW_ANSWER" || status === "START_COUNT") {
      setIsPaused((prev) => !prev);
    }
  }, [status]);

  // 키보드 이벤트 핸들러 (Space: 인터랙션, P: 일시정지)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // 키보드 꾹 누름(repeat) 중복 입력 방지
      if (e.repeat) return;

      const target = e.target as HTMLElement;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable) {
        return;
      }

      // 'P' 키 (영문/한글 ㅔ) 일시정지 토글
      if (e.key === "p" || e.key === "P" || e.key === "ㅔ" || e.key === "ㅖ") {
        e.preventDefault();
        togglePause();
        return;
      }

      // 스페이스바 조작
      if (e.code === "Space") {
        e.preventDefault();
        handleInteraction();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInteraction, togglePause]);

  // 카운트다운 타이머 (3 -> 2 -> 1)
  useEffect(() => {
    if (status !== "START_COUNT" || isPaused) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setStatus("QUESTION");
          setTimerMs(questionTime * 1000);
          setTotalTimerMs(questionTime * 1000);
          return CONFIG.COUNTDOWN_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status, isPaused, questionTime]);

  // 문제 및 정답 노출 타이머 (고정밀 performance.now 기반)
  useEffect(() => {
    if ((status !== "QUESTION" && status !== "SHOW_ANSWER") || isPaused) return;

    let lastTick = performance.now();
    let currentRemaining = timerMs;

    const interval = setInterval(() => {
      const now = performance.now();
      const delta = now - lastTick;
      lastTick = now;

      currentRemaining -= delta;
      if (currentRemaining <= 0) {
        clearInterval(interval);
        // 타이머 만료 시 안전한 단일 상태 전이 실행
        if (status === "QUESTION") {
          revealAnswer();
        } else if (status === "SHOW_ANSWER") {
          nextQuestionOrFinish();
        }
        return;
      }

      setTimerMs(currentRemaining);
    }, 25);

    return () => clearInterval(interval);
  }, [status, isPaused, revealAnswer, nextQuestionOrFinish]);

  // 안전한 총 문제 수 및 현재 인덱스 클램핑
  const totalCount = activeQueue.length > 0 ? activeQueue.length : effectiveCount;
  const safeIndex = totalCount > 0 ? Math.min(currentIndex, totalCount - 1) : 0;
  const currentQuiz = activeQueue[safeIndex] ?? quizList[0];
  const displayQuestionNumber = totalCount > 0 ? Math.min(currentIndex + 1, totalCount) : 1;
  const progressRatio = totalCount > 0 ? displayQuestionNumber / totalCount : 0;
  const timeProgressRatio = totalTimerMs > 0 ? Math.max(0, Math.min(1, timerMs / totalTimerMs)) : 0;
  const timerSecondsDisplay = (Math.max(0, timerMs) / 1000).toFixed(1);

  // 현재 선택된 챕터 이름
  const currentChapterName = useMemo(() => {
    if (selectedChapter === "all" || chapters.length === 0) return "전체 과목 통합";
    return chapters.find((c) => c.id === selectedChapter)?.name ?? "전체 과목 통합";
  }, [selectedChapter, chapters]);

  return (
    <div className="flex min-h-[calc(100dvh-5rem)] w-full items-center justify-center p-4 sm:p-6">
      {/* 화면 정중앙 미니멀 집중형 카드 */}
      <div
        onClick={handleInteraction}
        className={cn(
          "relative flex w-full max-w-[640px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl transition-all select-none",
          status === "QUESTION" && "cursor-pointer hover:border-primary/50",
          status === "SHOW_ANSWER" && "cursor-pointer hover:border-emerald-500/50"
        )}
      >
        {/* 상단 헤더: 타이틀 + 진행률 + 컨트롤 버튼 */}
        <div
          className="flex items-center justify-between border-b border-border/60 pb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
              <Zap className="size-4 fill-amber-500" />
            </span>
            <div>
              <h1 className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
                {title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* 진행률 게이지 텍스트 (예: 3 / 20) */}
            {(status === "QUESTION" || status === "SHOW_ANSWER" || status === "START_COUNT") && (
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground tabular-nums">
                {displayQuestionNumber} / {totalCount}
              </span>
            )}

            {/* 일시정지 아이콘 버튼 */}
            {(status === "QUESTION" || status === "SHOW_ANSWER" || status === "START_COUNT") && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={togglePause}
                className="size-8 text-muted-foreground hover:text-foreground"
                title={isPaused ? "재개 (P)" : "일시정지 (P)"}
                aria-label="일시정지 토글"
              >
                {isPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
              </Button>
            )}

            {/* 나가기 버튼 */}
            <Link
              href={exitHref}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-8 text-muted-foreground hover:text-foreground"
              )}
              title="나가기"
              aria-label="나가기"
            >
              <X className="size-4" />
            </Link>
          </div>
        </div>

        {/* 상단 전체 진행률 게이지 바 (START_COUNT, QUESTION, SHOW_ANSWER 상태) */}
        {(status === "QUESTION" || status === "SHOW_ANSWER" || status === "START_COUNT") && (
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progressRatio * 100}%` }}
            />
          </div>
        )}

        {/* 중앙: 상태별 콘텐츠 영역 */}
        <div className="my-auto flex min-h-[300px] flex-col items-center justify-center py-6 text-center">
          {/* 1. READY (대기 화면) */}
          {status === "READY" && (
            <div className="flex w-full flex-col items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
                <Zap className="size-7 fill-amber-500" />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                  ⚡ {title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[460px]">
                  {subtitle}
                </p>
              </div>

              {/* 문제가 없는 경우 예외 처리 */}
              {quizList.length === 0 ? (
                <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
                  <AlertCircle className="size-6 text-amber-500" />
                  <p>등록된 스피드 퀴즈가 준비 중입니다.</p>
                </div>
              ) : (
                <>
                  {/* 챕터(과목) 선택 섹션 (챕터가 정의되어 있을 때만 렌더링) */}
                  {chapters.length > 0 && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-full rounded-xl border border-border/70 bg-muted/30 p-3.5 text-left"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                          <BookOpen className="size-3.5 text-amber-500" />
                          과목 선택
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          총 {filteredPool.length}문항 준비됨
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedChapter("all")}
                          className={cn(
                            "flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all text-left",
                            selectedChapter === "all"
                              ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                              : "bg-background border border-border/70 text-foreground hover:bg-muted/60"
                          )}
                        >
                          <span>전체 과목 통합</span>
                          <span
                            className={cn(
                              "text-[11px] rounded px-1.5 py-0.5",
                              selectedChapter === "all"
                                ? "bg-primary-foreground/20 text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            {quizList.length}문항
                          </span>
                        </button>
                        {chapters.map((ch) => {
                          const count = quizList.filter((q) => q.chapterId === ch.id).length;
                          const isSelected = selectedChapter === ch.id;
                          return (
                            <button
                              key={ch.id}
                              type="button"
                              onClick={() => setSelectedChapter(ch.id)}
                              className={cn(
                                "flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all text-left",
                                isSelected
                                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                                  : "bg-background border border-border/70 text-foreground hover:bg-muted/60"
                              )}
                            >
                              <span>{ch.name}</span>
                              <span
                                className={cn(
                                  "text-[11px] rounded px-1.5 py-0.5",
                                  isSelected
                                    ? "bg-primary-foreground/20 text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                )}
                              >
                                {count}문항
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 퀴즈 문제 수 설정 섹션 */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full rounded-xl border border-border/70 bg-muted/30 p-3.5 text-left"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <Layers className="size-3.5 text-amber-500" />
                        문제 수 설정
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setIsShuffle((prev) => !prev)}
                          className={cn(
                            "flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium transition-colors",
                            isShuffle
                              ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                          title="문제 순서 무작위 셔플"
                        >
                          <Shuffle className="size-3" />
                          <span>무작위 셔플</span>
                        </button>
                        <span className="text-xs font-bold tabular-nums text-foreground">
                          {effectiveCount}문항 출제
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {[5, 10, 15, 20, 30].map((preset) => {
                        const isDisabled = preset > filteredPool.length;
                        const isSelected = questionCount === preset && !isDisabled;
                        return (
                          <button
                            key={preset}
                            type="button"
                            disabled={isDisabled}
                            onClick={() => setQuestionCount(preset)}
                            className={cn(
                              "flex-1 rounded-lg py-1.5 text-xs font-medium transition-all text-center",
                              isSelected
                                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                                : isDisabled
                                ? "cursor-not-allowed opacity-30 bg-muted/40 text-muted-foreground"
                                : "bg-background border border-border/70 text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {preset}개
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setQuestionCount(filteredPool.length)}
                        className={cn(
                          "flex-1 rounded-lg py-1.5 text-xs font-medium transition-all text-center",
                          questionCount >= filteredPool.length
                            ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                            : "bg-background border border-border/70 text-muted-foreground hover:text-foreground"
                        )}
                      >
                        전체
                      </button>
                    </div>
                  </div>

                  {/* 제한시간 슬라이더 바 섹션 (기본값: 3초) */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full rounded-xl border border-border/70 bg-muted/30 p-3.5 text-left"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <Clock className="size-3.5 text-amber-500" />
                        제한시간 슬라이더
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold tabular-nums text-amber-600 dark:text-amber-400">
                          {questionTime}초
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          (기본 기준: 3초)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={2}
                        max={10}
                        step={0.5}
                        value={questionTime}
                        onChange={(e) => handleQuestionTimeChange(parseFloat(e.target.value))}
                        className="h-2 w-full cursor-pointer accent-amber-500 bg-muted-foreground/20 rounded-lg"
                        aria-label="문제 제한시간 슬라이더"
                      />
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>빠름 (2초)</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">원래 기준: 3초</span>
                      <span>여유 (10초)</span>
                    </div>
                  </div>

                  {/* 추가 상세 설정 (정답 노출 시간 등) 접기/펼치기 */}
                  <div onClick={(e) => e.stopPropagation()} className="w-full">
                    <button
                      type="button"
                      onClick={() => setShowExtraSettings((v) => !v)}
                      className="flex w-full items-center justify-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <SlidersHorizontal className="size-3.5" />
                      <span>상세 설정 (정답 확인 {answerTime}초)</span>
                    </button>

                    {showExtraSettings && (
                      <div className="mt-2.5 flex flex-col gap-2 rounded-xl border border-border bg-muted/40 p-3 text-xs animate-in fade-in duration-150">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">정답 노출 시간</span>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((sec) => (
                              <button
                                key={sec}
                                type="button"
                                onClick={() => setAnswerTime(sec)}
                                className={cn(
                                  "rounded px-2 py-1 font-medium transition-colors",
                                  answerTime === sec
                                    ? "bg-primary text-primary-foreground font-semibold"
                                    : "bg-card text-foreground hover:bg-muted"
                                )}
                              >
                                {sec}초
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-2 pt-1">
                    <Button
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        startQuiz();
                      }}
                      className="h-12 w-48 text-base font-semibold shadow-md bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      퀴즈 시작
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      키보드 <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground">Space</kbd> 키를 눌러도 시작됩니다
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          {/* 2. START_COUNT (카운트다운: 3 -> 2 -> 1) */}
          {status === "START_COUNT" && (
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Get Ready
              </span>
              <div
                key={countdown}
                className="flex size-32 items-center justify-center text-8xl font-black text-amber-500 animate-in zoom-in-50 duration-300 select-none tabular-nums"
              >
                {countdown}
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                  {currentChapterName}
                </span>
                <p className="text-xs text-muted-foreground">
                  총 {totalCount}문항 출제 · 제한시간 {questionTime}초
                </p>
              </div>
            </div>
          )}

          {/* 3. QUESTION (문제 출제) */}
          {status === "QUESTION" && currentQuiz && (
            <div className="flex w-full flex-col items-center justify-center gap-4 px-2">
              <div className="flex items-center gap-2">
                {currentQuiz.chapterName && (
                  <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {currentQuiz.chapterName}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  문제 {displayQuestionNumber}
                </span>
              </div>
              <p className="text-lg sm:text-2xl font-bold leading-relaxed tracking-tight text-foreground break-keep max-w-[540px]">
                {currentQuiz.question}
              </p>
              <p className="text-xs text-muted-foreground/75">
                화면을 클릭하거나 <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">Space</kbd>를 누르면 즉시 정답 공개
              </p>
            </div>
          )}

          {/* 4. SHOW_ANSWER (정답 공개) */}
          {status === "SHOW_ANSWER" && currentQuiz && (
            <div className="flex w-full flex-col items-center justify-center gap-3 px-2">
              <div className="flex items-center gap-2">
                {currentQuiz.chapterName && (
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {currentQuiz.chapterName}
                  </span>
                )}
                <span className="text-xs text-muted-foreground line-clamp-1 max-w-[360px]">
                  {currentQuiz.question}
                </span>
              </div>

              {/* 강조 색상(Emerald/Sky Blue) 정답 영역 */}
              <div className="w-full max-w-[520px] rounded-2xl border border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-950/30 p-6 text-center shadow-lg transition-all animate-in fade-in zoom-in-95 duration-200">
                <span className="mb-2 inline-block rounded-md bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  정답
                </span>
                <p className="text-xl sm:text-3xl font-black tracking-tight text-emerald-600 dark:text-emerald-400 break-keep">
                  {currentQuiz.answer}
                </p>
              </div>

              <p className="text-xs text-muted-foreground/75">
                화면을 클릭하거나 <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">Space</kbd>를 누르면 다음 문제로 즉시 이동
              </p>
            </div>
          )}

          {/* 5. FINISHED (완료 화면) */}
          {status === "FINISHED" && (
            <div className="flex flex-col items-center gap-5">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="size-10" />
              </div>

              <div className="flex flex-col gap-1.5">
                <h2 className="text-2xl font-bold tracking-tight">
                  스피드 퀴즈 완료!
                </h2>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {currentChapterName}
                  </span>
                  에서 총 <span className="font-semibold text-foreground">{totalCount}문항</span>의 핵심 단답형 문제를 모두 완주하셨습니다.
                </p>
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  onClick={() => setStatus("READY")}
                  className="h-11 w-full sm:w-auto gap-2 text-sm font-semibold bg-primary"
                >
                  <RotateCcw className="size-4" />
                  조건 변경 및 다시 풀기
                </Button>
                <Link
                  href={exitHref}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 w-full sm:w-auto gap-1 text-sm font-semibold"
                  )}
                >
                  {exitLabel}
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 하단: 시각적 타이머 게이지 바 및 실시간 속도 조절 슬라이더 바 */}
        <div className="mt-auto border-t border-border/60 pt-3">
          {(status === "QUESTION" || status === "SHOW_ANSWER") ? (
            <div className="flex flex-col gap-2.5">
              {/* 퀴즈 도중 실시간 제한시간 조절 슬라이더 바 */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/40 px-3.5 py-1.5 transition-colors hover:bg-muted/70"
              >
                <div className="flex items-center gap-1.5 shrink-0 text-xs font-medium text-muted-foreground">
                  <Clock className="size-3.5 text-amber-500" />
                  <span className="hidden sm:inline">속도 조절</span>
                  <span>(제한시간)</span>
                </div>
                <div className="flex items-center gap-2.5 flex-1 max-w-[260px]">
                  <input
                    type="range"
                    min={2}
                    max={10}
                    step={0.5}
                    value={questionTime}
                    onChange={(e) => handleQuestionTimeChange(parseFloat(e.target.value))}
                    className="h-1.5 w-full cursor-pointer accent-amber-500 bg-muted-foreground/25 rounded-lg"
                    aria-label="문제 제한시간 조절 슬라이더 바"
                  />
                  <span className="shrink-0 text-xs font-bold tabular-nums text-foreground min-w-[2.5rem] text-right">
                    {questionTime}초
                  </span>
                </div>
              </div>

              {/* 남은 시간 표시 및 시각적 타이머 게이지 바 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs font-medium tabular-nums">
                  <span className="text-muted-foreground">
                    {status === "QUESTION" ? "생각할 시간" : "정답 확인 중"}
                  </span>
                  <span
                    className={cn(
                      "font-bold",
                      status === "QUESTION"
                        ? timeProgressRatio > 0.3
                          ? "text-amber-500"
                          : "text-rose-500 animate-pulse"
                        : "text-emerald-500"
                    )}
                  >
                    {timerSecondsDisplay}s
                  </span>
                </div>

                {/* 시각적 타이머 게이지 바 (Progress Bar) */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full transition-all duration-75 ease-linear",
                      status === "QUESTION"
                        ? timeProgressRatio > 0.4
                          ? "bg-amber-500"
                          : "bg-rose-500"
                        : "bg-emerald-500"
                    )}
                    style={{ width: `${timeProgressRatio * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-0.5 text-[11px] text-muted-foreground">
                <span>
                  {status === "QUESTION"
                    ? "스페이스바 / 클릭: 정답 확인"
                    : "스페이스바 / 클릭: 다음 문제"}
                </span>
                <span>'P' 키: 일시정지</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span>단축키 가이드: 스페이스바 [Space]</span>
              <span>일시정지: 'P' 키</span>
            </div>
          )}
        </div>

        {/* 일시정지 오버레이 */}
        {isPaused && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-4 bg-background/85 backdrop-blur-sm p-6 text-center animate-in fade-in duration-200"
          >
            <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
              <Pause className="size-7" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold tracking-tight">일시정지</h3>
              <p className="text-xs text-muted-foreground">
                타이머가 멈춰있습니다. 속도를 조절하거나 계속 진행하세요.
              </p>
            </div>

            {/* 일시정지 창에서도 슬라이더 조절 가능 */}
            <div className="w-full max-w-[280px] rounded-xl border border-border bg-card p-3 text-xs">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-muted-foreground">문제 제한시간</span>
                <span className="font-bold text-amber-500">{questionTime}초</span>
              </div>
              <input
                type="range"
                min={2}
                max={10}
                step={0.5}
                value={questionTime}
                onChange={(e) => handleQuestionTimeChange(parseFloat(e.target.value))}
                className="h-1.5 w-full cursor-pointer accent-amber-500 bg-muted-foreground/20 rounded-lg"
              />
            </div>

            <Button
              type="button"
              onClick={togglePause}
              className="mt-1 h-10 gap-2 px-6 font-semibold"
            >
              <Play className="size-4" />
              계속하기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
