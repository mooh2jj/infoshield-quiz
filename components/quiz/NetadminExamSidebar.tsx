"use client";

import { CheckCircle2, ChevronRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NETADMIN_EXAM_SECTIONS } from "@/data/netadmin-exam";
import { cn } from "@/lib/utils";

interface NetadminExamSidebarProps {
  queue: string[];
  currentIndex: number;
  answers: Record<string, { submitted: string; correct: boolean }>;
  onSelectQuestion: (index: number) => void;
  onSubmitExam: () => void;
  roundName?: string;
  className?: string;
}

export function NetadminExamSidebar({
  queue,
  currentIndex,
  answers,
  onSelectQuestion,
  onSubmitExam,
  roundName,
  className,
}: NetadminExamSidebarProps) {
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
              문제 이동 (OMR)
            </h2>
            {roundName && (
              <span className="text-[10px] text-muted-foreground font-medium border border-border px-1.5 py-0.2 rounded">
                {roundName.replace(" 필기 실전 기출 복원", "")}
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

      {/* 과목별 OMR 그리드 영역 */}
      <div className="flex flex-col gap-4 py-3 overflow-y-auto max-h-[calc(100vh-280px)] pr-1">
        {NETADMIN_EXAM_SECTIONS.map((section) => {
          const sectionIds = queue.slice(
            section.startIndex,
            section.startIndex + section.count
          );

          if (sectionIds.length === 0) return null;

          const sectionAnswered = sectionIds.filter(
            (id) => answers[id]?.submitted !== undefined
          ).length;

          return (
            <div key={section.id} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span className="truncate pr-1 text-foreground/80 font-semibold text-[11px]">
                  {section.name}
                </span>
                <span className="tabular-nums shrink-0 text-[11px]">
                  {sectionAnswered}/{section.count}
                </span>
              </div>

              {/* 번호 그리드 (5열 배치) */}
              <div className="grid grid-cols-5 gap-1.5">
                {sectionIds.map((id, localIdx) => {
                  const globalIdx = section.startIndex + localIdx;
                  const isCurrent = globalIdx === currentIndex;
                  const isAnswered = answers[id]?.submitted !== undefined;

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => onSelectQuestion(globalIdx)}
                      className={cn(
                        "relative flex h-8 w-full items-center justify-center rounded text-xs font-medium tabular-nums transition-all",
                        isCurrent &&
                          "border-2 border-primary font-bold shadow-sm ring-1 ring-primary/40",
                        !isCurrent &&
                          isAnswered &&
                          "bg-primary text-primary-foreground hover:bg-primary/90",
                        !isCurrent &&
                          !isAnswered &&
                          "border border-border bg-muted/30 text-muted-foreground hover:border-foreground/30 hover:bg-muted"
                      )}
                      aria-label={`${globalIdx + 1}번 문항으로 이동`}
                    >
                      {globalIdx + 1}
                      {isAnswered && !isCurrent && (
                        <span className="absolute -top-1 -right-1 flex size-2 items-center justify-center rounded-full bg-emerald-500 ring-1 ring-background" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 최종 제출 버튼 영역 */}
      <div className="pt-3 border-t border-border mt-auto">
        <Button
          onClick={onSubmitExam}
          className="w-full gap-2 font-semibold shadow-sm"
          variant="default"
        >
          <Send className="size-4" />
          <span>시험 종료 및 답안 제출</span>
        </Button>
      </div>
    </aside>
  );
}
