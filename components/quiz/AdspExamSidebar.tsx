"use client";

import { CheckCircle2, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADSP_EXAM_SECTIONS } from "@/data/adsp-exam";
import { cn } from "@/lib/utils";

interface AdspExamSidebarProps {
  queue: string[];
  currentIndex: number;
  answers: Record<string, { submitted: string; correct: boolean }>;
  onSelectQuestion: (index: number) => void;
  onSubmitExam: () => void;
  roundName?: string;
  className?: string;
}

export function AdspExamSidebar({
  queue,
  currentIndex,
  answers,
  onSelectQuestion,
  onSubmitExam,
  roundName,
  className,
}: AdspExamSidebarProps) {
  const total = queue.length;
  const answeredCount = queue.filter((id) => answers[id]?.submitted !== undefined).length;
  const progressPercent = total === 0 ? 0 : Math.round((answeredCount / total) * 100);

  return (
    <aside
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm",
        className
      )}
      aria-label="OMR 문제 이동 사이드바"
    >
      {/* 사이드바 상단 헤더: 완료율 및 통계 */}
      <div className="flex flex-col gap-2 pb-3 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h2 className="text-sm font-semibold tracking-tight text-foreground">
              문제 이동
            </h2>
            {roundName && (
              <span className="text-[10px] text-muted-foreground font-medium border border-border px-1.5 py-0.2 rounded">
                {roundName.replace(" 기출 복원", "")}
              </span>
            )}
          </div>
          <span className="text-xs font-semibold tabular-nums text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {answeredCount} / {total} ({progressPercent}%)
          </span>
        </div>

        {/* 진행도 게이지 바 */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 상태 범례 (Legend) */}
        <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="size-2.5 rounded border-2 border-primary bg-transparent" />
            <span>현재 문항</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-2.5 rounded bg-primary" />
            <span>답안 완료</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-2.5 rounded border border-border bg-muted/40" />
            <span>미작성</span>
          </div>
        </div>
      </div>

      {/* 과목별 번호 그리드 리스트 */}
      <div className="flex-1 overflow-y-auto py-3 space-y-4 pr-1">
        {ADSP_EXAM_SECTIONS.map((section) => {
          const sectionQuestionIds = queue.slice(
            section.startIndex,
            section.startIndex + section.count
          );
          const sectionAnswered = sectionQuestionIds.filter(
            (id) => answers[id]?.submitted !== undefined
          ).length;

          return (
            <div key={section.id} className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span className="text-foreground font-semibold flex items-center gap-1">
                  <ChevronRight className="size-3 text-muted-foreground" />
                  {section.name} ({section.rangeLabel})
                </span>
                <span className="tabular-nums text-[11px]">
                  {sectionAnswered}/{section.count}
                </span>
              </div>

              {/* 5열 번호 버튼 그리드 */}
              <div className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: section.count }).map((_, idx) => {
                  const qIndex = section.startIndex + idx;
                  if (qIndex >= total) return null;

                  const qId = queue[qIndex];
                  const isCurrent = qIndex === currentIndex;
                  const isAnswered = answers[qId]?.submitted !== undefined;

                  return (
                    <button
                      key={qIndex}
                      type="button"
                      onClick={() => onSelectQuestion(qIndex)}
                      className={cn(
                        "relative flex h-8 items-center justify-center rounded-md text-xs font-medium transition-all",
                        // 현재 문항 강조
                        isCurrent && "ring-2 ring-primary ring-offset-1 ring-offset-background font-bold z-10",
                        // 상태별 배경/텍스트
                        isAnswered
                          ? isCurrent
                            ? "bg-primary text-primary-foreground font-bold shadow-sm"
                            : "bg-primary/15 text-primary border border-primary/30 font-semibold hover:bg-primary/25"
                          : isCurrent
                          ? "bg-accent text-accent-foreground border border-primary"
                          : "bg-muted/30 text-muted-foreground border border-border/60 hover:bg-muted hover:text-foreground"
                      )}
                      aria-label={`${qIndex + 1}번 문항으로 이동 ${
                        isAnswered ? "(답안 작성 완료)" : "(미답안)"
                      }`}
                      aria-current={isCurrent ? "true" : undefined}
                    >
                      {qIndex + 1}
                      {isAnswered && !isCurrent && (
                        <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 사이드바 하단: 시험 제출 버튼 */}
      <div className="pt-3 border-t border-border mt-auto">
        <Button
          type="button"
          onClick={onSubmitExam}
          className="w-full gap-2 font-semibold h-11 shadow-sm"
          variant="default"
        >
          <Send className="size-4" />
          시험 종료 및 답안 제출
        </Button>
      </div>
    </aside>
  );
}
