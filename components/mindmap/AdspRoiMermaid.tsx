"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { BarChart3, Check, Copy, AlertCircle } from "lucide-react";

interface AdspRoiMermaidProps {
  id: string;
  chart: string;
  title?: string;
}

export function AdspRoiMermaid({
  id,
  chart,
  title = "ADsP 핵심 구조·프로세스 도표",
}: AdspRoiMermaidProps) {
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
                primaryColor: "#292524",
                primaryTextColor: "#fef3c7",
                primaryBorderColor: "#f59e0b",
                lineColor: "#78716c",
                secondaryColor: "#1c1917",
                tertiaryColor: "#18181b",
                fontFamily: "var(--font-geist-sans), Pretendard, sans-serif",
                fontSize: "13px",
              }
            : {
                primaryColor: "#fffbeb",
                primaryTextColor: "#78350f",
                primaryBorderColor: "#d97706",
                lineColor: "#a8a29e",
                secondaryColor: "#fef3c7",
                tertiaryColor: "#f5f5f4",
                fontFamily: "var(--font-geist-sans), Pretendard, sans-serif",
                fontSize: "13px",
              },
          flowchart: {
            curve: "basis",
            htmlLabels: true,
            padding: 16,
          },
        });

        // 고유 유효 DOM ID 생성 (공백/특수기호 치환 및 렌더링별 고유 해시)
        const uniqueSuffix = Math.random().toString(36).substring(2, 8);
        const safeId = `mermaid_adsp_${id.replace(/[^a-zA-Z0-9_-]/g, "_")}_${uniqueSuffix}`;
        const { svg, bindFunctions } = await mermaid.render(safeId, chart.trim());

        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
      } catch (err: unknown) {
        if (cancelled || !containerRef.current) return;
        const msg = err instanceof Error ? err.message : String(err);
        console.error("ADsP Mermaid Render Error:", msg, chart);
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
    <div className="flex flex-col rounded-xl border border-amber-500/30 bg-card overflow-hidden shadow-xs my-2.5">
      {/* 다이어그램 헤더 */}
      <div className="flex items-center justify-between border-b border-border/60 bg-amber-500/5 dark:bg-amber-500/10 px-3.5 py-1.5 text-xs">
        <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200">
          <BarChart3 className="size-3.5 text-amber-600 dark:text-amber-400" />
          <span>{title}</span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="flex items-center gap-1 rounded px-2 py-0.5 text-[11px] text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title="Mermaid 다이어그램 코드 복사"
        >
          {copied ? (
            <>
              <Check className="size-3 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">복사됨</span>
            </>
          ) : (
            <>
              <Copy className="size-3" />
              <span>코드 복사</span>
            </>
          )}
        </button>
      </div>

      {/* 다이어그램 본체 렌더링 영역 */}
      <div className="relative min-h-[100px] p-3 flex items-center justify-center bg-card/60 overflow-x-auto">
        {renderError ? (
          <div className="flex flex-col items-center gap-1.5 p-3 text-center text-xs text-rose-500">
            <AlertCircle className="size-4" />
            <span>도표 렌더링 중 오류가 발생했습니다.</span>
            <pre className="max-w-md overflow-x-auto rounded bg-muted p-2 text-[10px] text-muted-foreground text-left">
              {chart}
            </pre>
          </div>
        ) : (
          <div
            ref={containerRef}
            className="w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:drop-shadow-xs"
          />
        )}
      </div>
    </div>
  );
}
