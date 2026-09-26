"use client";

import { useEffect, useState } from "react";

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export function CodeBlock({ code, lang = "bash" }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    import("shiki").then(({ codeToHtml }) =>
      codeToHtml(code, {
        lang,
        themes: { light: "github-light", dark: "github-dark" },
      })
    ).then((result) => {
      if (!cancelled) setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (!html) {
    return (
      <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-sm">
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
