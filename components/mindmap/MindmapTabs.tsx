import type { MindmapSection } from "@/types/mindmap";

interface MindmapTabsProps {
  sections: MindmapSection[];
}

export function MindmapTabs({ sections }: MindmapTabsProps) {
  return (
    <nav
      aria-label="마인드맵 챕터 이동"
      className="sticky top-12 z-30 -mx-6 flex flex-wrap gap-2 border-b border-border bg-background/95 px-6 py-3 backdrop-blur print:hidden md:top-0"
    >
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="min-h-9 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {index + 1}. {section.title}
        </a>
      ))}
    </nav>
  );
}
