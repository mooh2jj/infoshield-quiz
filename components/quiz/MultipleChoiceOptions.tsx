"use client";

import { cn } from "@/lib/utils";

interface MultipleChoiceOptionsProps {
  options: string[];
  answerIndex: number;
  selectedIndex?: number;
  disabled: boolean;
  onSelect: (index: number) => void;
}

const OPTION_LABELS = ["A", "B", "C", "D"];

export function MultipleChoiceOptions({
  options,
  answerIndex,
  selectedIndex,
  disabled,
  onSelect,
}: MultipleChoiceOptionsProps) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;
        const isCorrectOption = index === answerIndex;
        const showResult = disabled;

        return (
          <button
            key={option}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(index)}
            className={cn(
              "flex min-h-11 items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-colors",
              !showResult &&
                "border-border hover:bg-muted disabled:cursor-not-allowed",
              showResult &&
                isCorrectOption &&
                "border-emerald-500/60 bg-emerald-500/10",
              showResult &&
                isSelected &&
                !isCorrectOption &&
                "border-red-500/60 bg-red-500/10",
              showResult &&
                !isSelected &&
                !isCorrectOption &&
                "border-border opacity-60"
            )}
          >
            <span className="font-semibold text-muted-foreground">
              {OPTION_LABELS[index] ?? index + 1}
            </span>
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );
}
