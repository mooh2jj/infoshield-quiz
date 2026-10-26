"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { BarChart3, Check, Copy, AlertCircle } from "lucide-react";

interface LinuxRoiMermaidProps {
  id: string;
  chart: string;
  title?: string;
}

export function LinuxRoiMermaid({
  id,
  chart,
  title = "리눅스 핵심 아키텍처·프로세스 구조도",
}: LinuxRoiMermaidProps) {
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
                primaryColor: "#064e3b",
                primaryTextColor: "#a7f3d0",
                primaryBorderColor: "#10b981",
                lineColor: "#6ee7b7",
                secondaryColor: "#022c22",
                tertiaryColor: "#0f172a",
                fontFamily: "var(--font-geist-sans), Pretendard, monospace, sans-serif",
                fontSize: "13px",
              }
            : {
                primaryColor: "#ecfdf5",
                primaryTextColor: "#064e3b",
                primaryBorderColor: "#059669",
                lineColor: "#047857",
                secondaryColor: "#d1fae5",
                tertiaryColor: "#f8fafc",
                fontFamily: "var(--font-geist-sans), Pretendard, monospace, sans-serif",
                fontSize: "13px",
              },
          flowchart: {
            curve: "basis",
            htmlLabels: true,
          },
        });

        // Unique ID per render
        const renderId = `linux-roi-mermaid-${id.replace(/[^a-zA-Z0-9_-]/g, "_")}-${Date.now()}`;
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
          console.error("Linux ROI Mermaid render failed:", err);
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
      // ignore clipboard error
    }
  };

  return (
    <div className="my-2.5 overflow-hidden rounded-lg border border-emerald-500/20 bg-emerald-950/5 dark:bg-emerald-950/20">
      <div className="flex items-center justify-between border-b border-emerald-500/15 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="size-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{title}</span>
        </div>
        <button
          onClick={handleCopyCode}
          className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-normal text-muted-foreground transition hover:bg-emerald-500/20 hover:text-foreground"
          title="Mermaid 코드 복사"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-600" />
              <span>복사됨</span>
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
          <div className="flex flex-col gap-1 rounded bg-destructive/10 p-2.5 text-xs text-destructive">
            <div className="flex items-center gap-1.5 font-semibold">
              <AlertCircle className="size-4" />
              <span>도표 렌더링 오류</span>
            </div>
            <pre className="max-h-24 overflow-auto whitespace-pre-wrap font-mono text-[11px]">
              {renderError}
            </pre>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="mermaid-container flex justify-center overflow-x-auto text-center [&>svg]:mx-auto"
          />
        )}
      </div>
    </div>
  );
}
