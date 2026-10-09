"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ChevronDown, ChevronUp, BookOpen, CheckCircle2 } from "lucide-react";
import type { MindmapNodeNote } from "@/types/mindmap";
import { getRelatedPracticalQuestions } from "@/lib/mindmap-related-matcher";

interface RelatedPracticalQuestionsFeedProps {
  note: MindmapNodeNote;
  matchedKey?: string;
  maxCount?: number;
}

export function RelatedPracticalQuestionsFeed({
  note,
  matchedKey,
  maxCount = 2,
}: RelatedPracticalQuestionsFeedProps) {
  const relatedQuestions = getRelatedPracticalQuestions(note, matchedKey, maxCount);
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({});

  if (relatedQuestions.length === 0) {
    return null;
  }

  const toggleAnswer = (qId: number) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  return (
    <div className="mt-3 pt-3 border-t border-border/70 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <BookOpen className="size-3.5 text-primary shrink-0" />
          <span className="text-xs font-bold text-foreground">
            연관 실기 모의고사 ({relatedQuestions.length})
          </span>
        </div>
        <span className="text-[10px] text-muted-foreground">
          실기 모의고사 연동
        </span>
      </div>

      <div className="space-y-2">
        {relatedQuestions.map((q) => {
          const isOpen = Boolean(openAnswers[q.id]);
          const isShort = q.type === "short";

          return (
            <div
              key={q.id}
              className="rounded-lg border border-border/80 bg-background/80 p-2.5 shadow-xs transition-all hover:border-primary/40 space-y-1.5"
            >
              {/* 상단 뱃지 & 바로가기 링크 */}
              <div className="flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="rounded bg-foreground px-1.5 py-0.5 text-[10px] font-bold text-background">
                    문제 {q.id}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                      isShort
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    }`}
                  >
                    {isShort ? "단답형" : "서술형"} {q.score}점
                  </span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                    {q.domain}
                  </span>
                </div>

                <Link
                  href={`/security/practical?q=${q.id}#practical-q-${q.id}`}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline shrink-0"
                  title="실기 모의고사 전체 화면에서 풀기"
                >
                  <span>풀러가기</span>
                  <ExternalLink className="size-3" />
                </Link>
              </div>

              {/* 문제 제목 */}
              <p className="text-xs font-medium text-foreground line-clamp-2 leading-snug">
                {q.title}
              </p>

              {/* 하단 미니 정답 토글 버튼 */}
              <div className="pt-0.5">
                <button
                  type="button"
                  onClick={() => toggleAnswer(q.id)}
                  className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="size-3" />
                      <span>정답 접기</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="size-3" />
                      <span>정답 확인하기</span>
                    </>
                  )}
                </button>

                {isOpen && (
                  <div className="mt-1.5 rounded-md bg-muted/60 p-2 text-[11px] text-foreground leading-relaxed animate-in fade-in duration-150 space-y-1">
                    <div className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-3 shrink-0" />
                      <span>모범 답안</span>
                    </div>
                    <div className="pl-4 text-muted-foreground break-keep font-medium">
                      {Array.isArray(q.answer) ? (
                        <ol className="list-decimal space-y-0.5">
                          {q.answer.map((ans, idx) => (
                            <li key={idx}>
                              <span className="text-foreground">{ans}</span>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <span className="text-foreground">{q.answer}</span>
                      )}
                    </div>
                    {q.scoringPoints && q.scoringPoints.length > 0 && (
                      <div className="mt-1 border-t border-border/40 pt-1 text-[10px] text-muted-foreground">
                        <span className="font-semibold text-foreground/80">채점 포인트: </span>
                        {q.scoringPoints.slice(0, 2).join(", ")}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
