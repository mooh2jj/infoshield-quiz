import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { BIGDATA_MINDMAP_SECTIONS } from "@/data/mindmaps/bigdata";

export default function BigdataMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            빅데이터분석기사 마인드맵
          </h1>
          <p className="text-muted-foreground">
            5개 챕터 핵심 요약 — 분석 기획부터 실기 작업형까지
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={BIGDATA_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {BIGDATA_MINDMAP_SECTIONS.map((section, index) => (
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
            <MermaidDiagram id={`mindmap-bigdata-${section.id}`} chart={section.chart} />
          </section>
        ))}
      </div>
    </main>
  );
}
