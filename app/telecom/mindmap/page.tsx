import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { TELECOM_MINDMAP_SECTIONS } from "@/data/mindmaps/telecom";

export default function TelecomMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            정보통신기사 마인드맵
          </h1>
          <p className="text-muted-foreground">
            5개 과목 핵심 요약 — 정보전송일반부터 컴퓨터일반·법규까지
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={TELECOM_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {TELECOM_MINDMAP_SECTIONS.map((section, index) => (
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
            <MermaidDiagram id={`mindmap-telecom-${section.id}`} chart={section.chart} />
          </section>
        ))}
      </div>
    </main>
  );
}
