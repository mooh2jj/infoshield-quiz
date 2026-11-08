import type { Metadata } from "next";
import Link from "next/link";
import { Zap, HelpCircle } from "lucide-react";
import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { CstsFloatingMemo } from "@/components/mindmap/CstsFloatingMemo";
import { CSTS_MINDMAP_SECTIONS } from "@/data/mindmaps/csts";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CSTS (소프트웨어 테스트 전문가) 인터랙티브 마인드맵 | infoshield-quiz",
  description: "5대 핵심 영역(기본원리, 정적테스팅, 블랙박스, 화이트박스, 품질관리) 시각화 마인드맵과 기출빈도 ROI 전략 메모장 & 10대 구조 도식",
};

export default function CstsMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      {/* 상단 헤더 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              CSTS 소프트웨어 테스트 전문가 마인드맵
            </h1>
            <span className="rounded bg-indigo-500/15 px-2 py-0.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
              ROI 24선 & 도식 10선 탑재
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            5대 핵심 영역 전체 체계도 — V-모델, 4대 리뷰, BVA·의사결정테이블, 커버리지 위계 & MC/DC, ISO 25010까지
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/csts/speed-quiz"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5 border-indigo-500/30 text-indigo-700 hover:bg-indigo-500/10 dark:text-indigo-300 font-semibold"
            )}
          >
            <Zap className="size-3.5 fill-current text-amber-500" />
            <span>60제 스피드 퀴즈</span>
          </Link>

          <Link
            href="/csts/quiz"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5 border-border hover:bg-muted font-semibold text-xs"
            )}
          >
            <HelpCircle className="size-3.5 text-emerald-600" />
            <span>실전 20제 풀기</span>
          </Link>

          <PrintButton />
        </div>
      </div>

      {/* 마인드맵 탭 바 */}
      <MindmapTabs sections={CSTS_MINDMAP_SECTIONS} />

      {/* 5개 영역 섹션 렌더링 */}
      <div className="flex flex-col gap-16">
        {CSTS_MINDMAP_SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="flex scroll-mt-24 flex-col gap-4 break-after-page rounded-2xl border border-border/80 bg-card p-6 shadow-sm"
          >
            <div className="flex flex-col gap-1 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-md bg-indigo-600 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h2 className="text-lg font-bold tracking-tight text-foreground">
                  {section.title}
                </h2>
              </div>
              <p className="text-xs text-muted-foreground ml-8">
                {section.description}
              </p>
            </div>

            <MermaidDiagram
              id={`mindmap-csts-${section.id}`}
              chart={section.chart}
              notes={section.notes}
            />
          </section>
        ))}
      </div>

      {/* 우하단 플로팅 기출 ROI 메모장 (24선 + 함정 10선 + 직전 암기장) */}
      <CstsFloatingMemo />
    </main>
  );
}
