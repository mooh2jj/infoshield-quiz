import type { QuizItem } from "@/types/quiz";

interface ExplanationPanelProps {
  item: QuizItem;
}

export function ExplanationPanel({ item }: ExplanationPanelProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-muted/40 p-4">
      <section>
        <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Definition
        </h3>
        <p className="mt-1 text-sm leading-relaxed">
          {item.explanation.definition}
        </p>
      </section>

      {item.explanation.optionsBreakdown &&
        item.explanation.optionsBreakdown.length > 0 && (
          <section>
            <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Options Breakdown
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed">
              {item.explanation.optionsBreakdown.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        )}

      <section>
        <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Dev Context
        </h3>
        <p className="mt-1 text-sm leading-relaxed">
          {item.explanation.devContext}
        </p>
      </section>
    </div>
  );
}
