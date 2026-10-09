import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { ADSP_MINDMAP_SECTIONS } from "@/data/mindmaps/adsp";

export default function AdspMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            ADsP (데이터분석 준전문가) 마인드맵
          </h1>
          <p className="text-muted-foreground">
            3개 과목 핵심 체계도 — 데이터 이해부터 기획, 정형 데이터 분석까지
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={ADSP_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {ADSP_MINDMAP_SECTIONS.map((section, index) => (
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
              id={`mindmap-adsp-${section.id}`}
              chart={section.chart}
              notes={section.notes}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
