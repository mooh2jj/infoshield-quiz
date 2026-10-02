import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { SQLD_MINDMAP_SECTIONS } from "@/data/mindmaps/sqld";

export default function SqldMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            SQLD 핵심 마인드맵
          </h1>
          <p className="text-muted-foreground">
            한국데이터산업진흥원(K-Data) 출제기준 — 데이터 모델링·SQL 기본·SQL 활용·고급 SQL
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={SQLD_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {SQLD_MINDMAP_SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="flex scroll-mt-24 flex-col gap-3 break-after-page"
          >
            <div>
              <h2 className="text-lg font-semibold">
                {index + 1}. {section.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {section.description}
              </p>
            </div>
            <MermaidDiagram
              id={`mindmap-sqld-${section.id}`}
              chart={section.chart}
              notes={section.notes}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
