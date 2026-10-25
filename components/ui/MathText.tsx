"use client";

import React, { useMemo } from "react";
import katex from "katex";

export interface MathTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

/**
 * Parses and renders text with LaTeX math expressions.
 * Supports:
 * - Block math: $$...$$ or \[...\]
 * - Inline math: $...$ or \(...\)
 */
export function MathText({
  text,
  className,
  as: Component = "span",
}: MathTextProps) {
  const renderedContent = useMemo(() => {
    if (!text) return null;
    if (
      !text.includes("$") &&
      !text.includes("\\(") &&
      !text.includes("\\[")
    ) {
      return text;
    }

    // Matches $$...$$, \[...\], $...$, or \(...\)
    const regex =
      /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\))/g;

    const parts = text.split(regex);

    return parts.map((part, index) => {
      // 1. Block Math: $$...$$ or \[...\]
      if (
        (part.startsWith("$$") && part.endsWith("$$") && part.length >= 4) ||
        (part.startsWith("\\[") && part.endsWith("\\]") && part.length >= 4)
      ) {
        const math = part.startsWith("$$")
          ? part.slice(2, -2).trim()
          : part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="my-1.5 block overflow-x-auto text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      }

      // 2. Inline Math: $...$ or \(...\)
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
              key={index}
              className="inline-math px-0.5 align-baseline"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      }

      // Plain text part
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  }, [text]);

  return <Component className={className}>{renderedContent}</Component>;
}
