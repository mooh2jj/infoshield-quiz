"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface MermaidDiagramProps {
  id: string;
  chart: string;
}

export function MermaidDiagram({ id, chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    let cancelled = false;

    async function draw() {
      const { default: mermaid } = await import("mermaid");
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: resolvedTheme === "dark" ? "dark" : "default",
        mindmap: { padding: 40, maxNodeWidth: 260 },
      });

      try {
        const { svg, bindFunctions } = await mermaid.render(id, chart);
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        bindFunctions?.(containerRef.current);
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
  }, [id, chart, resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="min-h-60 overflow-x-auto overflow-y-hidden rounded-lg border border-border bg-card p-4 [&_svg]:mx-auto [&_svg]:max-w-none"
    />
  );
}
