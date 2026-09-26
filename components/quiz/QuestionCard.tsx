"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/quiz/CodeBlock";
import { TermInput } from "@/components/quiz/TermInput";
import { ExplanationPanel } from "@/components/quiz/ExplanationPanel";
import { buildHint } from "@/lib/hint";
import { cn } from "@/lib/utils";
import { SUBJECT_LABELS, type QuizItem } from "@/types/quiz";

interface QuestionCardProps {
  item: QuizItem;
  answer?: { submitted: string; correct: boolean };
  isHintShown: boolean;
  onToggleHint: () => void;
  onSubmit: (value: string) => void;
}

export function QuestionCard({
  item,
  answer,
  isHintShown,
  onToggleHint,
  onSubmit,
}: QuestionCardProps) {
  const [value, setValue] = useState("");

  const isAnswered = Boolean(answer);

  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-xl border p-6 transition-colors",
        !isAnswered && "border-border",
        isAnswered &&
          answer?.correct &&
          "border-emerald-500/60 bg-emerald-500/5",
        isAnswered && answer && !answer.correct && "border-red-500/60 bg-red-500/5"
      )}
    >
      <div className="flex items-center gap-2">
        <Badge variant="secondary">{SUBJECT_LABELS[item.category]}</Badge>
        <span className="text-xs text-muted-foreground">{item.title}</span>
      </div>

      <p className="text-base leading-relaxed">{item.question}</p>

      {item.codeSnippet && <CodeBlock code={item.codeSnippet} />}

      <TermInput
        value={value}
        onChange={setValue}
        onSubmit={() => {
          if (!isAnswered && value.trim()) onSubmit(value);
        }}
        disabled={isAnswered}
        hint={item.termAnswers ? buildHint(item.termAnswers) : undefined}
        isHintShown={isHintShown}
        onToggleHint={onToggleHint}
      />

      {isAnswered && (
        <div className="flex flex-col gap-4">
          <p
            className={cn(
              "text-sm font-semibold",
              answer?.correct
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            )}
          >
            {answer?.correct
              ? "정답입니다!"
              : `오답입니다. 정답: ${item.termAnswers?.[0] ?? ""}`}
          </p>
          <ExplanationPanel item={item} />
        </div>
      )}
    </div>
  );
}
