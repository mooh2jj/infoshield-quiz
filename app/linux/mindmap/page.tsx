import Link from "next/link";
import { Zap } from "lucide-react";
import { MermaidDiagram } from "@/components/mindmap/MermaidDiagram";
import { MindmapTabs } from "@/components/mindmap/MindmapTabs";
import { PrintButton } from "@/components/mindmap/PrintButton";
import { LinuxFloatingMemo } from "@/components/mindmap/LinuxFloatingMemo";
import { LINUX_MINDMAP_SECTIONS } from "@/data/mindmaps/linux";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LinuxMindmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              리눅스마스터 2급 마인드맵
            </h1>
            <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              ROI 30선 탑재
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            5개 챕터 핵심 체계도 — 계정·권한·쿼터부터 X-Window, 네트워크, 오픈소스 라이선스까지
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/linux/speed-quiz"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5 border-emerald-500/30 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300 font-semibold"
            )}
          >
            <Zap className="size-3.5 fill-current text-amber-500" />
            <span>80제 스피드 퀴즈</span>
          </Link>
          <PrintButton />
        </div>
      </div>

      <MindmapTabs sections={LINUX_MINDMAP_SECTIONS} />

      <div className="flex flex-col gap-16">
        {LINUX_MINDMAP_SECTIONS.map((section, index) => (
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
            <MermaidDiagram id={`mindmap-linux-${section.id}`} chart={section.chart} />
          </section>
        ))}
      </div>

      {/* 기출 빈출 ROI 30선 + 함정 10선 + 직전 암기장 플로팅 메모 모달 */}
      <LinuxFloatingMemo />
    </main>
  );
}
