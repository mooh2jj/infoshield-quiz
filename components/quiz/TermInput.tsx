"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TermInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  hint?: string;
  isHintShown: boolean;
  onToggleHint: () => void;
}

export function TermInput({
  value,
  onChange,
  onSubmit,
  disabled,
  hint,
  isHintShown,
  onToggleHint,
}: TermInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <Input
        autoFocus
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            onSubmit();
          }
        }}
        disabled={disabled}
        placeholder="정답을 입력하세요"
        className="h-12 text-base"
      />
      <div className="flex min-h-6 items-center justify-between gap-3">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={disabled || !hint}
          onClick={onToggleHint}
        >
          힌트 {isHintShown ? "숨기기" : "보기 (H)"}
        </Button>
        {isHintShown && hint && (
          <span className="text-sm text-muted-foreground">{hint}</span>
        )}
      </div>
    </div>
  );
}
