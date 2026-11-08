"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { BarChart3, Check, Copy, AlertCircle } from "lucide-react";

interface CstsRoiMermaidProps {
  id: string;
  chart: string;
  title?: string;
}

export function CstsRoiMermaid({
  id,
  chart,
  title = "CSTS 핵심 구조·원리 도식",
}: CstsRoiMermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function renderChart() {
      if (!containerRef.current) return;
      try {
        setRenderError(null);
        const { default: mermaid } = await import("mermaid");

        const isDark = resolvedTheme === "dark";
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: isDark ? "dark" : "neutral",
          themeVariables: isDark
            ? {
                primaryColor: "#312e81",
                primaryTextColor: "#c7d2fe",
                primaryBorderColor: "#6366f1",
                lineColor: "#818cf8",
                secondaryColor: "#1e1b4b",
                tertiaryColor: "#0f172a",
                fontFamily: "var(--font-geist-sans), Pretendard, monospace, sans-serif",
                fontSize: "13px",
              }
            : {
                primaryColor: "#e0e7ff",
                primaryTextColor: "#312e81",
                primaryBorderColor: "#4f46e5",
                lineColor: "#4338ca",
                secondaryColor: "#c7d2fe",
                tertiaryColor: "#f8fafc",
                fontFamily: "var(--font-geist-sans), Pretendard, monospace, sans-serif",
                fontSize: "13px",
              },
          flowchart: {
            curve: "basis",
            htmlLabels: true,
          },
        });

        const renderId = `csts-roi-mermaid-${id.replace(/[^a-zA-Z0-9_-]/g, "_")}-${Date.now()}`;
        const { svg } = await mermaid.render(renderId, chart.trim());

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          const svgElement = containerRef.current.querySelector("svg");
          if (svgElement) {
            svgElement.removeAttribute("height");
            svgElement.style.width = "100%";
            svgElement.style.maxWidth = "100%";
            svgElement.style.height = "auto";
            svgElement.style.display = "block";
          }
        }
      } catch (err: unknown) {
        if (!cancelled) {
          console.error("CSTS ROI Mermaid render failed:", err);
          const errorMsg = err instanceof Error ? err.message : String(err);
          setRenderError(errorMsg);
        }
      }
    }

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, id, resolvedTheme]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(chart.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-indigo-500/30 bg-indigo-500/[0.03] dark:bg-indigo-950/20 shadow-sm transition-all">
      <div className="flex items-center justify-between border-b border-indigo-500/20 bg-indigo-500/10 px-3.5 py-2">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-3.5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xs font-semibold text-indigo-900 dark:text-indigo-200">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopyCode}
          className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-indigo-700 hover:bg-indigo-500/20 dark:text-indigo-300 transition-colors"
          title="Mermaid 코드 복사"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-500" />
              <span>복사완료</span>
            </>
          ) : (
            <>
              <Copy className="size-3" />
              <span>코드 복사</span>
            </>
          )}
        </button>
      </div>

      <div className="p-3">
        {renderError ? (
          <div className="flex flex-col gap-1.5 p-3 text-xs text-rose-600 dark:text-rose-400">
            <div className="flex items-center gap-1.5 font-semibold">
              <AlertCircle className="size-4" />
              <span>다이어그램 렌더링 오류</span>
            </div>
            <pre className="overflow-x-auto rounded bg-muted/60 p-2 font-mono text-[11px]">
              {chart}
            </pre>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="flex items-center justify-center overflow-x-auto py-2"
          />
        )}
      </div>
    </div>
  );
}
