import type { Metadata } from "next";
import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { ItpeFloatingMemo } from "@/components/mindmap/ItpeFloatingMemo";
import { ITPE_MINDMAP_SECTIONS } from "@/data/mindmaps/itpe";

export const metadata: Metadata = {
  title: "정보관리기술사(ITPE) 마인드맵 & 기출 ROI | infoshield-quiz",
  description:
    "6대 도메인(정보전략, SW공학, DB/빅데이터, 컴퓨터시스템/NW, 정보보안, 최신기술/법규) 인터랙티브 마인드맵 및 기출빈도 ROI 전략 메모장",
};

export default function ItpeMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      {/* 상단 헤더 */}
      <div className="flex items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            정보관리기술사(ITPE) 마인드맵
            <span className="rounded-md bg-rose-500/10 px-2 py-0.5 text-xs font-semibold text-rose-600 dark:text-rose-400">
              2026 최신판
            </span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            6대 도메인 전체 체계도 & 기출 ROI — 노드를 클릭하면 실전 핵심 메모가 팝업됩니다.
          </p>
        </div>
        <PrintButton />
      </div>

      {/* 도메인 탭 이동 바 */}
      <MindmapTabs sections={ITPE_MINDMAP_SECTIONS} />

      {/* 마인드맵 다이어그램 섹션 리스트 */}
      <div className="flex flex-col gap-16">
        {ITPE_MINDMAP_SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="flex scroll-mt-24 flex-col gap-3 break-after-page"
          >
            <div className="border-b border-border/80 pb-2">
              <h2 className="text-lg font-bold text-foreground">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {section.description}
              </p>
            </div>
            <MermaidDiagram
              id={`mindmap-itpe-${section.id}`}
              chart={section.chart}
              notes={section.notes}
            />
          </section>
        ))}
      </div>

      {/* 기출 빈도 및 최고 ROI 핵심 플로팅 메모장 */}
      <ItpeFloatingMemo />
    </main>
  );
}
