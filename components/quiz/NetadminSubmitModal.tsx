"use client";

import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NetadminSubmitModalProps {
  isOpen: boolean;
  totalQuestions: number;
  answeredCount: number;
  unansweredIndices: number[]; // 미작성 문항 인덱스 목록
  onClose: () => void;
  onConfirm: () => void;
  onJumpToQuestion: (index: number) => void;
}

export function NetadminSubmitModal({
  isOpen,
  totalQuestions,
  answeredCount,
  unansweredIndices,
  onClose,
  onConfirm,
  onJumpToQuestion,
}: NetadminSubmitModalProps) {
  if (!isOpen) return null;

  const unansweredCount = unansweredIndices.length;
  const isAllAnswered = unansweredCount === 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-modal-title"
    >
      <div className="relative flex w-full max-w-md flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-xl animate-in zoom-in-95 duration-200">
        {/* 모달 헤더 */}
        <div className="flex items-center gap-3">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
              isAllAnswered ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
            }`}
          >
            {isAllAnswered ? (
              <CheckCircle2 className="size-6" />
            ) : (
              <AlertTriangle className="size-6" />
            )}
          </div>
          <div className="flex flex-col">
            <h2 id="submit-modal-title" className="text-lg font-bold tracking-tight text-foreground">
              {isAllAnswered ? "시험을 종료하고 제출하시겠습니까?" : "아직 작성하지 않은 문항이 있습니다"}
            </h2>
            <p className="text-xs text-muted-foreground">
              {isAllAnswered
                ? "모든 문항의 답안이 마킹되었습니다. 결과를 확인하세요."
                : `총 ${totalQuestions}문항 중 ${unansweredCount}개의 답안이 비어 있습니다.`}
            </p>
          </div>
        </div>

        {/* 답안 작성 상태 요약 */}
        <div className="flex flex-col gap-2 rounded-xl bg-muted/40 p-3.5 text-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">답안 작성 완료</span>
            <span className="font-semibold text-foreground">
              {answeredCount} / {totalQuestions} 문항
            </span>
          </div>

          {!isAllAnswered && (
            <div className="flex flex-col gap-1.5 pt-2 border-t border-border/60">
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                미작성 문항 번호:
              </span>
              <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto">
                {unansweredIndices.map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      onJumpToQuestion(idx);
                      onClose();
                    }}
                    className="rounded bg-background px-2 py-0.5 text-xs font-semibold tabular-nums text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {idx + 1}번
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 액션 버튼 */}
        <div className="flex items-center justify-end gap-2.5 pt-2">
          <Button variant="outline" onClick={onClose} className="text-sm">
            계속 풀기
          </Button>
          <Button
            variant="default"
            onClick={onConfirm}
            className={`text-sm font-semibold ${
              isAllAnswered ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""
            }`}
          >
            {isAllAnswered ? "제출 및 결과 보기" : "미작성 상태로 제출"}
          </Button>
        </div>
      </div>
    </div>
  );
}
