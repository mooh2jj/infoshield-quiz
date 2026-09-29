import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { AICE_MINDMAP_SECTIONS } from "@/data/mindmaps/aice";

export default function AiceMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            AICE Associate 마인드맵
          </h1>
          <p className="text-muted-foreground">
            3단계 핵심 프로세스 요약 — EDA부터 전처리, 머신러닝·딥러닝 모델링까지
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={AICE_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {AICE_MINDMAP_SECTIONS.map((section, index) => (
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
            <MermaidDiagram id={`mindmap-aice-${section.id}`} chart={section.chart} />
          </section>
        ))}
      </div>
    </main>
  );
}
