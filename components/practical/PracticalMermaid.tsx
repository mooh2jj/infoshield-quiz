"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { GitGraph, Check, Copy } from "lucide-react";

interface PracticalMermaidProps {
  id: string;
  chart: string;
  title?: string;
}

export function PracticalMermaid({
  id,
  chart,
  title = "이해를 돕는 구조·흐름 다이어그램",
}: PracticalMermaidProps) {
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
                primaryColor: "#1e293b",
                primaryTextColor: "#f1f5f9",
                primaryBorderColor: "#3b82f6",
                lineColor: "#64748b",
                secondaryColor: "#0f172a",
                tertiaryColor: "#1e1e38",
              }
            : {
                primaryColor: "#eff6ff",
                primaryTextColor: "#0f172a",
                primaryBorderColor: "#2563eb",
                lineColor: "#64748b",
                secondaryColor: "#f8fafc",
                tertiaryColor: "#f1f5f9",
              },
          flowchart: {
            curve: "basis",
            htmlLabels: true,
          },
        });

        // 고유 유효 DOM ID 생성 (공백/특수기호 치환 및 매 렌더링별 고유 해시 부여)
        const uniqueSuffix = Math.random().toString(36).substring(2, 8);
        const safeId = `mermaid_${id.replace(/[^a-zA-Z0-9_-]/g, "_")}_${uniqueSuffix}`;
        const { svg, bindFunctions } = await mermaid.render(safeId, chart.trim());

        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
      } catch (err: unknown) {
        if (cancelled || !containerRef.current) return;
        const msg = err instanceof Error ? err.message : String(err);
        console.error("Mermaid Render Error:", msg, chart);
        setRenderError(msg);
      }
    }

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [id, chart, resolvedTheme]);

  function copyCode() {
    navigator.clipboard.writeText(chart.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col rounded-xl border border-primary/20 bg-card overflow-hidden shadow-xs">
      {/* 다이어그램 헤더 */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-3.5 py-2 text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-foreground">
          <GitGraph className="size-3.5 text-primary" />
          <span>{title}</span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="flex items-center gap-1 rounded px-2 py-0.5 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title="Mermaid 코드 복사"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-500" />
              <span className="text-emerald-500 font-medium">복사됨</span>
            </>
          ) : (
            <>
              <Copy className="size-3" />
              <span>Mermaid 코드</span>
            </>
          )}
        </button>
      </div>

      {/* 다이어그램 렌더링 영역 */}
      <div className="p-4 overflow-x-auto bg-background/50">
        {renderError ? (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
            <p className="font-semibold mb-1">다이어그램을 렌더링하지 못했습니다.</p>
            <p className="font-mono text-[11px] text-muted-foreground whitespace-pre-wrap">{renderError}</p>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="flex items-center justify-center min-h-[120px] [&_svg]:max-w-full [&_svg]:h-auto"
          />
        )}
      </div>
    </div>
  );
}
