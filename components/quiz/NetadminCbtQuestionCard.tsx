"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathText } from "@/components/ui/MathText";
import { CodeBlock } from "@/components/quiz/CodeBlock";
import { getNetadminSectionByQuestionIndex } from "@/data/netadmin-exam";
import { cn } from "@/lib/utils";
import type { QuizItem } from "@/types/quiz";

interface NetadminCbtQuestionCardProps {
  item: QuizItem;
  questionIndex: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onSelectOption: (optionIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  onSubmitPrompt?: () => void;
}

const CIRCLE_NUMBERS = ["①", "②", "③", "④"];

export function NetadminCbtQuestionCard({
  item,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectOption,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  onSubmitPrompt,
}: NetadminCbtQuestionCardProps) {
  const currentSection = getNetadminSectionByQuestionIndex(questionIndex);
  const selectedIndex = selectedAnswer !== undefined ? Number(selectedAnswer) : undefined;

  // 키보드 단축키 지원 (1, 2, 3, 4번 키로 보기 선택, 좌우 화살표로 탐색)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "1") onSelectOption(0);
      else if (e.key === "2") onSelectOption(1);
      else if (e.key === "3") onSelectOption(2);
      else if (e.key === "4") onSelectOption(3);
      else if (e.key === "ArrowLeft" && hasPrevious) onPrevious();
      else if (e.key === "ArrowRight" && hasNext) onNext();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSelectOption, onPrevious, onNext, hasPrevious, hasNext]);

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm">
      {/* 문항 헤더 정보 */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
        <div className="flex items-center gap-2.5">
          <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
            {currentSection.name}
          </span>
          <span className="text-sm font-semibold tracking-tight text-muted-foreground">
            문항 <span className="text-foreground font-bold">{questionIndex + 1}</span> / {totalQuestions}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-muted px-2 py-0.5 text-[11px] font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 문제 제목 및 본문 지문 */}
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-foreground leading-snug">
          <MathText text={item.title} />
        </h2>
        <div className="text-sm sm:text-base leading-relaxed text-foreground/90 whitespace-pre-wrap">
          <MathText text={item.question} />
        </div>
      </div>

      {/* 코드/설정 스니펫 영역 */}
      {item.codeSnippet && <CodeBlock code={item.codeSnippet} />}

      {/* 4지선다형 객관식 보기 영역 */}
      {item.options && (
        <div className="flex flex-col gap-2.5 pt-2" role="radiogroup" aria-label="객관식 보기 선택">
          {item.options.map((option, idx) => {
            const isSelected = selectedIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectOption(idx)}
                className={cn(
                  "group relative flex w-full items-start gap-3.5 rounded-lg border p-3.5 text-left text-sm transition-all sm:text-base",
                  isSelected
                    ? "border-primary bg-primary/10 text-primary font-medium shadow-sm ring-1 ring-primary/40"
                    : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/40"
                )}
                role="radio"
                aria-checked={isSelected}
              >
                {/* 동그라미 번호 아이콘 */}
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors mt-0.5",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-muted-foreground/30 bg-muted/50 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                  )}
                >
                  {isSelected ? <Check className="size-3.5 stroke-[3]" /> : CIRCLE_NUMBERS[idx]}
                </span>

                {/* 보기 텍스트 */}
                <div className="flex-1 leading-relaxed">
                  <MathText text={option} />
                </div>

                {/* 키보드 단축키 힌트 뱃지 (데스크톱 전용) */}
                <span className="hidden sm:inline-flex shrink-0 items-center justify-center rounded border border-border bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* 하단 탐색 버튼 영역 */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="gap-1.5"
        >
          <ChevronLeft className="size-4" />
          <span>이전 문제</span>
        </Button>

        <div className="text-xs text-muted-foreground hidden sm:block">
          키보드 <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[11px]">1~4</kbd> 번호 선택 ·{" "}
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[11px]">←</kbd>
          <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[11px]">→</kbd> 문제 이동
        </div>

        {hasNext ? (
          <Button
            variant="default"
            size="sm"
            onClick={onNext}
            className="gap-1.5"
          >
            <span>다음 문제</span>
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            onClick={onSubmitPrompt}
            className="gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <span>최종 답안 제출</span>
            <Check className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
