"use client";

import { AlertTriangle, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdspSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  totalQuestions: number;
  unansweredIndices: number[]; // 0-based index list
  onJumpToQuestion: (index: number) => void;
}

export function AdspSubmitModal({
  isOpen,
  onClose,
  onConfirmSubmit,
  totalQuestions,
  unansweredIndices,
  onJumpToQuestion,
}: AdspSubmitModalProps) {
  if (!isOpen) return null;

  const answeredCount = totalQuestions - unansweredIndices.length;
  const hasUnanswered = unansweredIndices.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-dialog-title"
    >
      <div className="relative w-full max-w-md rounded-xl border border-border bg-card p-6 shadow-xl space-y-5">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="닫기"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-start gap-3.5">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
              hasUnanswered
                ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
            }`}
          >
            {hasUnanswered ? (
              <AlertTriangle className="size-5" />
            ) : (
              <CheckCircle2 className="size-5" />
            )}
          </div>

          <div className="space-y-1">
            <h3 id="submit-dialog-title" className="text-lg font-semibold tracking-tight text-foreground">
              {hasUnanswered ? "미답안 문항이 존재합니다" : "시험 답안을 제출하시겠습니까?"}
            </h3>
            <p className="text-xs text-muted-foreground">
              답안 제출 시 시험이 즉시 종료되며 최종 점수와 채점 리포트가 생성됩니다.
            </p>
          </div>
        </div>

        {/* 요약 박스 */}
        <div className="rounded-lg border border-border bg-muted/40 p-3.5 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">총 문항 수</span>
            <span className="font-semibold text-foreground">{totalQuestions}문항</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">답안 작성 완료</span>
            <span className="font-semibold text-primary">{answeredCount}문항</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">미답안 문항</span>
            <span className={`font-semibold ${hasUnanswered ? "text-destructive" : "text-emerald-500"}`}>
              {unansweredIndices.length}문항
            </span>
          </div>
        </div>

        {/* 미답안 문항 바로가기 칩 */}
        {hasUnanswered && (
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground">
              미답안 문항 번호 (클릭 시 해당 문항으로 즉시 이동):
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-1">
              {unansweredIndices.map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onJumpToQuestion(idx);
                    onClose();
                  }}
                  className="rounded border border-destructive/40 bg-destructive/10 px-2 py-0.5 text-xs font-semibold text-destructive hover:bg-destructive/20 transition-colors"
                >
                  {idx + 1}번
                </button>
              ))}
            </div>
            <p className="text-[11px] text-destructive">
              * 미답안 문항은 채점 시 오답(0점)으로 처리됩니다.
            </p>
          </div>
        )}

        <div className="flex gap-2.5 pt-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1 h-10 text-sm font-medium"
            onClick={onClose}
          >
            계속 풀기
          </Button>
          <Button
            type="button"
            variant={hasUnanswered ? "destructive" : "default"}
            className="flex-1 h-10 text-sm font-semibold"
            onClick={onConfirmSubmit}
          >
            {hasUnanswered ? "그래도 제출하기" : "최종 제출하기"}
          </Button>
        </div>
      </div>
    </div>
  );
}
