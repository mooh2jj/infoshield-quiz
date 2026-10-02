import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { AWS_SAA_MINDMAP_SECTIONS } from "@/data/mindmaps/aws-saa";

export default function AwsSaaMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            AWS SAA 마인드맵
          </h1>
          <p className="text-muted-foreground">
            4대 도메인 핵심 요약 — 보안·복원력·고성능·비용 최적화 아키텍처
          </p>
        </div>
        <PrintButton />
      </div>

      <MindmapTabs sections={AWS_SAA_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {AWS_SAA_MINDMAP_SECTIONS.map((section, index) => (
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
              id={`mindmap-aws-saa-${section.id}`}
              chart={section.chart}
              notes={section.notes}
            />
          </section>
        ))}
      </div>
    </main>
  );
}
