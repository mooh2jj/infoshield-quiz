"use client";

import { useEffect, useState, useCallback } from "react";
import { AlertTriangle, Clock, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExamTimerProps {
  totalSeconds?: number; // 기본 90분 (5400초)
  initialSpentSeconds?: number;
  onTimeUp?: () => void;
  onTick?: (spentSeconds: number) => void;
  className?: string;
}

export function ExamTimer({
  totalSeconds = 90 * 60, // 90분 (5,400초)
  initialSpentSeconds = 0,
  onTimeUp,
  onTick,
  className,
}: ExamTimerProps) {
  const [spentSeconds, setSpentSeconds] = useState(initialSpentSeconds);
  const [isPaused, setIsPaused] = useState(false);

  const remainingSeconds = Math.max(0, totalSeconds - spentSeconds);

  useEffect(() => {
    if (isPaused || remainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setSpentSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, remainingSeconds]);

  // spentSeconds 변경 시 부모 컴포넌트에 이펙트로 안전하게 전달
  useEffect(() => {
    if (onTick) {
      onTick(spentSeconds);
    }
    if (spentSeconds >= totalSeconds && onTimeUp) {
      onTimeUp();
    }
  }, [spentSeconds, totalSeconds, onTick, onTimeUp]);

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime =
    hours > 0
      ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const isWarning = remainingSeconds <= 10 * 60 && remainingSeconds > 5 * 60; // 10분 이하
  const isDanger = remainingSeconds <= 5 * 60; // 5분 이하

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-colors font-mono text-sm",
        isDanger
          ? "border-destructive bg-destructive/10 text-destructive animate-pulse"
          : isWarning
          ? "border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400"
          : "border-border bg-card text-foreground",
        className
      )}
      role="timer"
      aria-label={`남은 시험 시간: ${formattedTime}`}
    >
      {isDanger ? (
        <AlertTriangle className="size-4 shrink-0" />
      ) : (
        <Clock className="size-4 shrink-0 text-muted-foreground" />
      )}

      <div className="flex items-center gap-1">
        <span className="text-xs text-muted-foreground font-sans hidden sm:inline">
          남은 시간
        </span>
        <span className="font-bold tabular-nums text-base tracking-tight">
          {formattedTime}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setIsPaused((prev) => !prev)}
        className="ml-1 p-0.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        title={isPaused ? "타이머 계속하기" : "타이머 일시정지"}
        aria-label={isPaused ? "타이머 계속하기" : "타이머 일시정지"}
      >
        {isPaused ? <Play className="size-3.5 fill-current" /> : <Pause className="size-3.5 fill-current" />}
      </button>
    </div>
  );
}
