"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MathText } from "@/components/ui/MathText";
import { CodeBlock } from "@/components/quiz/CodeBlock";
import { AdspQuestionDiagram } from "@/components/quiz/AdspQuestionDiagram";
import { getSectionByQuestionIndex } from "@/data/adsp-exam";
import { cn } from "@/lib/utils";
import type { QuizItem } from "@/types/quiz";

interface AdspCbtQuestionCardProps {
  item: QuizItem;
  questionIndex: number; // 0 ~ 49
  totalQuestions: number; // 50
  selectedAnswer?: string;
  onSelectOption: (optionIndex: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  onSubmitPrompt?: () => void;
}

const CIRCLE_NUMBERS = ["①", "②", "③", "④"];

export function AdspCbtQuestionCard({
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
}: AdspCbtQuestionCardProps) {
  const currentSection = getSectionByQuestionIndex(questionIndex);
  const selectedIndex = selectedAnswer !== undefined ? Number(selectedAnswer) : undefined;

  // 키보드 단축키 지원 (1, 2, 3, 4번 키로 보기 선택)
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
          {item.tags.slice(0, 2).map((tag) => (
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

      {/* 시각 다이어그램 / 도표 영역 */}
      <AdspQuestionDiagram questionId={item.id} />

      {/* 코드 스니펫 영역 */}
      {item.codeSnippet && <CodeBlock code={item.codeSnippet} />}

      {/* 4지선다 보기 리스트 (CBT 원형 라디오 스타일) */}
      <div className="flex flex-col gap-2.5 pt-2" role="radiogroup" aria-label="답안 보기">
        {item.options?.map((optionText, idx) => {
          const isSelected = selectedIndex === idx;

          return (
            <button
              key={idx}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectOption(idx)}
              className={cn(
                "group flex w-full items-start gap-3.5 rounded-lg border p-4 text-left transition-all",
                isSelected
                  ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary"
                  : "border-border bg-background hover:border-primary/50 hover:bg-muted/40"
              )}
            >
              {/* 원형 번호 라디오 마커 */}
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors mt-0.5",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-muted/30 text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
                )}
              >
                {CIRCLE_NUMBERS[idx]}
              </span>

              {/* 보기 지문 텍스트 */}
              <span
                className={cn(
                  "flex-1 text-sm sm:text-base leading-relaxed",
                  isSelected ? "font-semibold text-foreground" : "text-foreground/90"
                )}
              >
                <MathText text={optionText} />
              </span>

              {/* 선택 완료 체크 표시 */}
              {isSelected && (
                <Check className="size-4 shrink-0 text-primary mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* 하단 이동 및 액션 바 */}
      <div className="flex items-center justify-between border-t border-border pt-4 mt-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="gap-1.5 h-10 px-4"
        >
          <ChevronLeft className="size-4" />
          이전 문항
        </Button>

        <span className="text-xs text-muted-foreground hidden sm:inline">
          키보드 숫자 <kbd className="rounded border px-1.5 py-0.5 bg-muted">1</kbd>~<kbd className="rounded border px-1.5 py-0.5 bg-muted">4</kbd>로 선택 가능
        </span>

        {hasNext ? (
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={onNext}
            className="gap-1.5 h-10 px-4"
          >
            다음 문항
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={onSubmitPrompt}
            className="gap-1.5 h-10 px-4 bg-primary text-primary-foreground font-semibold"
          >
            시험 제출하기
          </Button>
        )}
      </div>
    </div>
  );
}
