import type { MindmapNote } from "@/types/mindmap";

interface MindmapNotesProps {
  notes: MindmapNote[];
}

export function MindmapNotes({ notes }: MindmapNotesProps) {
  if (notes.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-muted/40 p-4">
      <h3 className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        핵심 보충 설명
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {notes.map((note) => (
          <div key={note.term} className="flex flex-col gap-1.5">
            <p className="text-sm font-semibold">{note.term}</p>
            <ol className="flex flex-col gap-1">
              {note.items.map((item, i) => (
                <li key={i} className="flex gap-1.5 text-sm leading-relaxed">
                  <span className="shrink-0 font-medium text-muted-foreground">
                    {i + 1})
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
