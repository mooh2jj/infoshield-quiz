"use client";

import { cn } from "@/lib/utils";
import { SUBJECT_LABELS, type SubjectCategory } from "@/types/quiz";

interface SubjectChipProps {
  subject: SubjectCategory;
  selected: boolean;
  onToggle: (subject: SubjectCategory) => void;
}

export function SubjectChip({ subject, selected, onToggle }: SubjectChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(subject)}
      className={cn(
        "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-muted"
      )}
    >
      {SUBJECT_LABELS[subject]}
    </button>
  );
}
