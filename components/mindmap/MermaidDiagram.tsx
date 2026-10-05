"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Sparkles, Star, X } from "lucide-react";
import type { MindmapNodeNote } from "@/types/mindmap";

interface MermaidDiagramProps {
  id: string;
  chart: string;
  notes?: Record<string, MindmapNodeNote>;
}

export function MermaidDiagram({ id, chart, notes }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // 활성화된 메모 상태 및 마우스 화면 좌표
  const [activeNote, setActiveNote] = useState<MindmapNodeNote | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    if (!resolvedTheme) return;
    let cancelled = false;

    async function draw() {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: resolvedTheme === "dark" ? "dark" : "default",
        mindmap: { padding: 56, maxNodeWidth: 280 },
      });

      try {
        const { svg, bindFunctions } = await mermaid.render(id, chart);
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);

        // notes가 있는 경우 SVG 노드에 호버 인터랙션 이벤트 바인딩
        if (notes && Object.keys(notes).length > 0) {
          const svgEl = containerRef.current.querySelector("svg");
          if (!svgEl) return;

          // Mermaid mindmap에서 실제 개별 leaf 노드만 선별
          const potentialNodes = Array.from(
            svgEl.querySelectorAll("g.mindmap-node, g[class*='node']")
          ).filter((el) => {
            return el.querySelectorAll("g.mindmap-node, g[class*='node']").length === 0;
          });

          const targetNodes =
            potentialNodes.length > 0
              ? potentialNodes
              : Array.from(svgEl.querySelectorAll("text"))
                  .map((t) => t.closest("g"))
                  .filter((g, idx, arr): g is SVGGElement => Boolean(g) && arr.indexOf(g) === idx);

          targetNodes.forEach((nodeEl) => {
            const textContent = nodeEl.textContent || "";
            if (!textContent.trim()) return;

            // notes의 키 중 매칭되는 가장 알맞은 키 찾기
            let matchedKey: string | null = null;
            for (const key of Object.keys(notes)) {
              if (textContent.includes(key)) {
                matchedKey = key;
                break;
              }
            }

            if (matchedKey) {
              const noteData = notes[matchedKey];
              const htmlNode = nodeEl as HTMLElement;

              const bkgShape = nodeEl.querySelector(
                "rect, path, circle, polygon"
              ) as SVGGraphicsElement | null;

              htmlNode.style.cursor = "pointer";

              // 마우스 진입 시 (고정 상태가 아닐 때만)
              htmlNode.addEventListener("mouseenter", (e: MouseEvent) => {
                e.stopPropagation();
                if (isPinned) return;
                setActiveNote(noteData);
                setPopoverPos({ x: e.clientX, y: e.clientY });

                if (bkgShape) {
                  bkgShape.style.filter = "drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))";
                  bkgShape.style.stroke = "#3b82f6";
                  bkgShape.style.strokeWidth = "2.5px";
                } else {
                  htmlNode.style.filter = "drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))";
                }
              });

              // 마우스 이동 시 좌표 추적 (고정 상태가 아닐 때만)
              htmlNode.addEventListener("mousemove", (e: MouseEvent) => {
                e.stopPropagation();
                if (isPinned) return;
                setPopoverPos({ x: e.clientX, y: e.clientY });
              });

              // 마우스 이탈 시 복구 (고정 상태가 아닐 때만)
              htmlNode.addEventListener("mouseleave", (e: MouseEvent) => {
                e.stopPropagation();
                if (isPinned) return;
                setActiveNote(null);
                setPopoverPos(null);

                if (bkgShape) {
                  bkgShape.style.filter = "none";
                  bkgShape.style.stroke = "";
                  bkgShape.style.strokeWidth = "";
                } else {
                  htmlNode.style.filter = "none";
                }
              });

              // 클릭 또는 모바일 탭 시: 팝오버 고정(Pin) 토글
              htmlNode.addEventListener("click", (e: MouseEvent) => {
                e.stopPropagation();
                setActiveNote(noteData);
                setPopoverPos({ x: e.clientX, y: e.clientY });
                setIsPinned((prev) => !prev);

                if (bkgShape) {
                  bkgShape.style.filter = "drop-shadow(0 0 8px rgba(59, 130, 246, 1))";
                  bkgShape.style.stroke = "#3b82f6";
                  bkgShape.style.strokeWidth = "2.5px";
                }
              });
            }
          });
        }
      } catch {
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML =
          '<p class="p-4 text-sm text-destructive">다이어그램을 그리지 못했습니다.</p>';
      }
    }

    draw();

    return () => {
      cancelled = true;
    };
  }, [id, chart, notes, resolvedTheme]);

  // 팝오버가 뷰포트 바깥으로 나가지 않도록 좌표 보정
  const popoverStyle = popoverPos
    ? {
        left: Math.max(16, Math.min(popoverPos.x + 16, (typeof window !== "undefined" ? window.innerWidth : 1000) - 340)),
        top: Math.max(16, Math.min(popoverPos.y + 16, (typeof window !== "undefined" ? window.innerHeight : 800) - 320)),
      }
    : undefined;

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="min-h-60 overflow-x-auto overflow-y-hidden rounded-lg border border-border bg-card p-4 [&_svg]:mx-auto [&_svg]:max-w-none"
      />

      {/* 시험 중요도 및 상세 메모 팝오버 카드 (플로팅 메모장) */}
      {activeNote && popoverStyle && (
        <div
          style={popoverStyle}
          className="pointer-events-auto fixed z-50 w-80 rounded-xl border border-border/80 bg-popover/95 p-4 text-popover-foreground shadow-2xl backdrop-blur-md transition-opacity duration-150 animate-in fade-in zoom-in-95"
        >
          {/* 헤더: 뱃지, 중요도 별점, 닫기 버튼 */}
          <div className="mb-2 flex items-center justify-between gap-2 border-b border-border/60 pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-amber-500 shrink-0" />
              <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                {activeNote.badge ?? "핵심 개념"}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {/* 별점 */}
              <div className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-3 ${
                      i < activeNote.importance
                        ? "fill-amber-500 text-amber-500"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* 닫기 버튼 */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNote(null);
                  setPopoverPos(null);
                  setIsPinned(false);
                }}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                title="메모장 닫기"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>

          {/* 제목 */}
          <h4 className="mb-1.5 text-sm font-bold tracking-tight">
            {activeNote.title}
          </h4>

          {/* 개념 상세 정의 */}
          <p className="mb-2.5 text-xs text-muted-foreground leading-relaxed">
            {activeNote.definition}
          </p>

          {/* 핵심 시험 포인트 */}
          {activeNote.keyPoints && activeNote.keyPoints.length > 0 && (
            <div className="mb-2.5 rounded-lg bg-muted/60 p-2 text-[11px] space-y-1">
              <span className="font-semibold text-foreground/90 block">
                ⚡ 핵심 빈출 & 함정
              </span>
              <ul className="space-y-0.5 text-muted-foreground">
                {activeNote.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-primary">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 암기 비법 / 실무 팁 */}
          {activeNote.examTip && (
            <div className="flex items-start gap-1.5 rounded-md bg-amber-500/10 px-2.5 py-1.5 text-[11px] text-amber-700 dark:text-amber-300 font-medium">
              <span>💡</span>
              <span className="leading-snug">{activeNote.examTip}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
