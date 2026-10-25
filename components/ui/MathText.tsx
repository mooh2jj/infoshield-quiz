"use client";

import React, { useMemo } from "react";
import katex from "katex";

export interface MathTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

/**
 * Parses and renders text with LaTeX math expressions ($...$, $$...$$)
 * and markdown bold syntax (**...**).
 */
function renderParsedTokens(text: string, keyPrefix = ""): React.ReactNode {
  if (!text) return null;

  if (
    !text.includes("$") &&
    !text.includes("\\(") &&
    !text.includes("\\[") &&
    !text.includes("**")
  ) {
    return text;
  }

  // Matches:
  // 1. Block math: $$...$$ or \[...\]
  // 2. Markdown bold: **...**
  // 3. Inline math: $...$ or \(...\)
  const tokenRegex =
    /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\*\*(?:[^*]|\*(?!\*))+?\*\*|\$[^\$\n]+?\$|\\\([\s\S]*?\\\))/g;

  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;
    const key = `${keyPrefix}-${index}`;

    // 1. Block Math: $$...$$ or \[...\]
    if (
      (part.startsWith("$$") && part.endsWith("$$") && part.length >= 4) ||
      (part.startsWith("\\[") && part.endsWith("\\]") && part.length >= 4)
    ) {
      const math = part.slice(2, -2).trim();
      try {
        const html = katex.renderToString(math, {
          displayMode: true,
          throwOnError: false,
        });
        return (
          <span
            key={key}
            className="my-1.5 block overflow-x-auto text-center"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <span key={key}>{part}</span>;
      }
    }

    // 2. Markdown Bold: **...**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      const inner = part.slice(2, -2);
      return (
        <strong key={key} className="font-bold text-foreground">
          {renderParsedTokens(inner, `${key}-b`)}
        </strong>
      );
    }

    // 3. Inline Math: $...$ or \(...\)
    if (
      (part.startsWith("$") && part.endsWith("$") && part.length >= 2) ||
      (part.startsWith("\\(") && part.endsWith("\\)") && part.length >= 4)
    ) {
      const math = part.startsWith("$")
        ? part.slice(1, -1).trim()
        : part.slice(2, -2).trim();
      try {
        const html = katex.renderToString(math, {
          displayMode: false,
          throwOnError: false,
        });
        return (
          <span
            key={key}
            className="inline-math px-0.5 align-baseline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <span key={key}>{part}</span>;
      }
    }

    // Plain text part
    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

export function MathText({
  text,
  className,
  as: Component = "span",
}: MathTextProps) {
  const renderedContent = useMemo(() => {
    return renderParsedTokens(text);
  }, [text]);

  return <Component className={className}>{renderedContent}</Component>;
}
