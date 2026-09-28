import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { ELECTRONICS_MINDMAP_SECTIONS } from "@/data/mindmaps/electronics";

export default function ElectronicsMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            전자기사 마인드맵
          </h1>
          <p className="text-muted-foreground">
            4대 과목 + 실기 핵심 요약 — 전기자기학부터 SI/PI·EMC, 양산 DFM까지
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={ELECTRONICS_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {ELECTRONICS_MINDMAP_SECTIONS.map((section, index) => (
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
            <MermaidDiagram id={`mindmap-electronics-${section.id}`} chart={section.chart} />
          </section>
        ))}
      </div>
    </main>
  );
}
