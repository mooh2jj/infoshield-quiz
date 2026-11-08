"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FileCheck2,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  Layers,
  BookOpen,
  ChevronsDownUp,
  ChevronsUpDown,
  RotateCcw,
  PenLine,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Search,
  X,
  Tag,
  Trophy,
  Award,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { PracticalQuestion, PracticalSubject } from "@/data/practical/types";
import {
  SECURITY_PAST_EXAMS,
  SECURITY_PAST_EXAM_LIST,
  DEFAULT_PAST_EXAM_ROUND,
  type PastExamRoundId,
  type SecurityPastExamRound,
} from "@/data/practical/past-exams";
import { PracticalMermaid } from "./PracticalMermaid";

// 기출 빈출 추천 검색 키워드 (실제 복원 기출 기반)
const RECOMMENDED_PAST_KEYWORDS = [
  "shadow",
  "IPSec",
  "net session",
  "크리덴셜 스터핑",
  "net share",
  "L2 스위치",
  "델파이",
  "SSO",
  "Snort",
  "securetty",
  "TMOUT",
  "DNS 스푸핑",
  "iptables",
  "Tripwire",
  "Nessus",
  "httperr",
  "퍼징",
  "access",
  "SIEM",
  "CISO",
  "XSS",
  "Fiddler",
  "named.conf",
  "resolv.conf",
  "ACL",
  "개인정보",
  "Heartbleed",
  "hping3",
  "hosts.equiv",
  "Land",
  "Smurf",
  "Teardrop",
  "SPF",
  "DKIM",
  "DMARC",
  "웹쉘",
  "SetUID",
  "MDM",
  "TFTP",
  "setfacl",
  "생체정보",
  "CSRF",
  "SameSite",
];

const DEFAULT_SUBJECTS: PracticalSubject[] = [
  { id: "system", name: "시스템 보안", shortName: "시스템" },
  { id: "network", name: "네트워크 보안", shortName: "네트워크" },
  { id: "application", name: "애플리케이션 보안", shortName: "애플리케이션" },
  { id: "general", name: "정보보안 일반 & 암호학", shortName: "보안일반·암호" },
  { id: "law", name: "정보보안 관리 및 법률", shortName: "관리·법률" },
];

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightText({ text, query }: { text?: string; query: string }) {
  if (!text) return null;
  const trimmed = query.trim();
  if (!trimmed) return <>{text}</>;

  const terms = trimmed.split(/\s+/).filter(Boolean);
  if (terms.length === 0) return <>{text}</>;

  try {
    const regex = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark
              key={i}
              className="rounded-xs bg-amber-400/35 px-0.5 font-semibold text-foreground dark:bg-amber-500/30 dark:text-amber-200"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  } catch {
    return <>{text}</>;
  }
}

function matchesQuestionSearch(q: PracticalQuestion, query: string): boolean {
  const trimmed = query.trim();
  if (!trimmed) return true;

  const tokens = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;

  const textPool: string[] = [
    String(q.id),
    `문제 ${q.id}`,
    `문제${q.id}`,
    `#${q.id}`,
    `${q.score}점`,
    q.title,
    q.domain,
    q.description,
    q.scenario || "",
    q.explanation,
    q.examTips || "",
    ...(Array.isArray(q.answer) ? q.answer : [q.answer]),
    ...(q.scoringPoints || []),
    q.codeBlock?.code || "",
    ...(q.subItems?.flatMap((s) => [
      s.question,
      Array.isArray(s.answer) ? s.answer.join(" ") : s.answer,
      s.scoringCriteria || "",
    ]) || []),
  ];

  const searchableString = textPool.join(" ").toLowerCase();
  return tokens.every((token) => searchableString.includes(token));
}

export function PracticalPastExamViewer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. 회차(Round) 관리
  const initialRound = (searchParams.get("round") as PastExamRoundId) || DEFAULT_PAST_EXAM_ROUND;
  const [selectedRoundId, setSelectedRoundId] = useState<PastExamRoundId>(
    initialRound in SECURITY_PAST_EXAMS ? initialRound : DEFAULT_PAST_EXAM_ROUND
  );

  const currentRound: SecurityPastExamRound =
    SECURITY_PAST_EXAMS[selectedRoundId] || SECURITY_PAST_EXAMS[DEFAULT_PAST_EXAM_ROUND];

  // 2. 검색 및 필터 상태
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "short" | "practical">("all");
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);

  // 3. 문제별 열림/메모/점수 상태 (회차별 로컬스토리지 저장)
  const [openAnswers, setOpenAnswers] = useState<Record<number, boolean>>({});
  const [userNotes, setUserNotes] = useState<Record<number, string>>({});
  const [userScores, setUserScores] = useState<Record<number, number>>({});

  // 회차 변경 시 localStorage에서 불러오기
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem(`infoshield_past_notes_${selectedRoundId}`);
      if (savedNotes) setUserNotes(JSON.parse(savedNotes));
      else setUserNotes({});

      const savedScores = localStorage.getItem(`infoshield_past_scores_${selectedRoundId}`);
      if (savedScores) setUserScores(JSON.parse(savedScores));
      else setUserScores({});

      setOpenAnswers({});
    } catch {
      // ignore
    }
  }, [selectedRoundId]);

  // 답안 메모 변경 시 저장
  const handleNoteChange = (qId: number, val: string) => {
    setUserNotes((prev) => {
      const next = { ...prev, [qId]: val };
      try {
        localStorage.setItem(`infoshield_past_notes_${selectedRoundId}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // 점수 부여 변경 시 저장
  const handleScoreChange = (qId: number, score: number) => {
    setUserScores((prev) => {
      const currentScore = prev[qId];
      const next = { ...prev };
      if (currentScore === score) {
        delete next[qId]; // 토글 시 점수 취소
      } else {
        next[qId] = score;
      }
      try {
        localStorage.setItem(`infoshield_past_scores_${selectedRoundId}`, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // 회차 탭 전환 함수
  const switchRound = (newRoundId: PastExamRoundId) => {
    setSelectedRoundId(newRoundId);
    setSearchQuery("");
    setSelectedSubject("all");
    setTypeFilter("all");
    router.replace(`/security/past-exam?round=${newRoundId}`, { scroll: false });
  };

  // 단축키 '/' 누르면 검색 포커스
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 전체 문제 검색 일치 목록
  const searchMatchedQuestions = currentRound.questions.filter((q) =>
    matchesQuestionSearch(q, searchQuery)
  );

  // 현재 필터(검색 + 과목 + 유형) 적용된 문항 목록
  const filteredQuestions = currentRound.questions.filter((q) => {
    if (!matchesQuestionSearch(q, searchQuery)) return false;
    if (selectedSubject !== "all" && q.subjectId !== selectedSubject) return false;
    if (typeFilter === "short") return q.type === "short";
    if (typeFilter === "practical") return q.type === "practical" || q.type === "descriptive";
    return true;
  });

  const allOpen =
    filteredQuestions.length > 0 && filteredQuestions.every((q) => openAnswers[q.id]);

  const toggleAnswer = (id: number) => {
    setOpenAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllAnswers = () => {
    const nextState = !allOpen;
    const nextMap: Record<number, boolean> = {};
    for (const q of filteredQuestions) {
      nextMap[q.id] = nextState;
    }
    setOpenAnswers((prev) => ({ ...prev, ...nextMap }));
  };

  const resetCurrentRoundData = () => {
    if (confirm(`'${currentRound.roundLabel}' 회차의 메모와 채점 기록을 모두 초기화하시겠습니까?`)) {
      setUserNotes({});
      setUserScores({});
      setOpenAnswers({});
      try {
        localStorage.removeItem(`infoshield_past_notes_${selectedRoundId}`);
        localStorage.removeItem(`infoshield_past_scores_${selectedRoundId}`);
      } catch {}
    }
  };

  // 실시간 점수 및 회차 통계 산출 (회차별 동적 배점 계산)
  const totalEarnedScore = Object.values(userScores).reduce((sum, s) => sum + s, 0);
  const maxRoundScore = currentRound.questions.reduce((sum, q) => sum + q.score, 0);
  const passingScore = Math.ceil(maxRoundScore * 0.6);
  const isPassed = totalEarnedScore >= passingScore;

  const shortQuestions = currentRound.questions.filter((q) => q.type === "short");
  const shortCount = shortQuestions.length;
  const shortMax = shortQuestions.reduce((sum, q) => sum + q.score, 0);
  const shortEarned = shortQuestions.reduce((sum, q) => sum + (userScores[q.id] || 0), 0);

  const descQuestions = currentRound.questions.filter((q) => q.type === "descriptive");
  const descCount = descQuestions.length;
  const descMax = descQuestions.reduce((sum, q) => sum + q.score, 0);
  const descEarned = descQuestions.reduce((sum, q) => sum + (userScores[q.id] || 0), 0);

  const practicalQuestions = currentRound.questions.filter((q) => q.type === "practical");
  const practicalCount = practicalQuestions.length;
  const practicalMax = practicalQuestions.reduce((sum, q) => sum + q.score, 0);
  const practicalEarned = practicalQuestions.reduce((sum, q) => sum + (userScores[q.id] || 0), 0);

  const descAndPracticalQuestions = currentRound.questions.filter((q) => q.type !== "short");
  const descAndPracticalCount = descAndPracticalQuestions.length;
  const descAndPracticalMax = descAndPracticalQuestions.reduce((sum, q) => sum + q.score, 0);

  return (
    <div className="mx-auto flex w-full max-w-[840px] flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
      {/* 상단 네비게이션 & 타이틀 */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link
            href="/security"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="size-3.5" />
            <span>정보보안기사 홈</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-3.5" />
              실전 기출 복원 풀세트
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              정보보안기사 실기 기출
            </h1>
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
              실전 복원 모드
            </span>
          </div>
          <p className="text-sm text-muted-foreground break-keep">
            2026년 2회, 2026년 1회, 2025년 3회 기출 복원 문제 및 실시간 자가 채점 시스템
          </p>
        </div>
      </div>

      {/* 회차 선택 탭 (Round Selector) */}
      <section className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-xs">
        <div className="flex items-center justify-between px-3 pt-1">
          <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
            <Calendar className="size-3.5 text-primary" />
            기출 회차 선택
          </span>
          <span className="text-[11px] text-muted-foreground">
            선택된 회차: <strong className="text-foreground">{currentRound.title}</strong>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 p-1">
          {SECURITY_PAST_EXAM_LIST.map((round) => {
            const isSelected = round.id === selectedRoundId;
            return (
              <button
                key={round.id}
                type="button"
                onClick={() => switchRound(round.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-xl py-3 px-2 text-center transition-all select-none border",
                  isSelected
                    ? "border-primary bg-primary/10 text-primary shadow-xs font-bold"
                    : "border-transparent bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground font-medium"
                )}
              >
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-sm">{round.roundLabel}</span>
                  {isSelected && (
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground/80 hidden sm:inline">
                  {round.examDate}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 실시간 합격 스코어보드 */}
      <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-background p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Trophy className="size-4" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-foreground">
                  {currentRound.roundLabel} 실시간 자가 채점 스코어보드
                </h2>
                <span className="text-[11px] text-muted-foreground">
                  합격 기준: 총 {maxRoundScore}점 중 60%({passingScore}점) 이상 (과락 없음)
                </span>
              </div>
            </div>

            {/* 세부 점수 지표 */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground">
              <span>
                단답형: <strong className="text-foreground">{shortEarned}</strong> / {shortMax}점
              </span>
              {descCount > 0 && (
                <>
                  <span>•</span>
                  <span>
                    서술형: <strong className="text-foreground">{descEarned}</strong> / {descMax}점
                  </span>
                </>
              )}
              {practicalCount > 0 && (
                <>
                  <span>•</span>
                  <span>
                    작업형: <strong className="text-foreground">{practicalEarned}</strong> / {practicalMax}점
                  </span>
                </>
              )}
            </div>
          </div>

          {/* 총점 및 합격 판정 배지 */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-border/60">
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-semibold text-muted-foreground">내 총점:</span>
              <span
                className={cn(
                  "text-3xl font-extrabold tabular-nums tracking-tight",
                  isPassed ? "text-emerald-600 dark:text-emerald-400" : "text-primary"
                )}
              >
                {totalEarnedScore}
              </span>
              <span className="text-xs text-muted-foreground">/ {maxRoundScore}점</span>
            </div>

            <div>
              {isPassed ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-xs animate-in zoom-in-95">
                  <Award className="size-3.5" />
                  합격선 통과 (합격권 달성!)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  합격선({passingScore}점)까지 {passingScore - totalEarnedScore}점 필요
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 게이지 바 */}
        <div className="mt-4 relative h-2.5 w-full rounded-full bg-muted/80 overflow-hidden">
          <div
            className={cn(
              "h-full transition-all duration-300 rounded-full",
              isPassed ? "bg-emerald-500" : "bg-primary"
            )}
            style={{ width: `${Math.min(100, Math.max(0, (totalEarnedScore / maxRoundScore) * 100))}%` }}
          />
          {/* 60% 합격선 마커 */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-foreground/60 z-10"
            style={{ left: "60%" }}
            title={`60% 합격 기준선 (${passingScore}점)`}
          />
        </div>
      </section>

      {/* 회차 출제 총평 및 난이도 분석 아코디언 */}
      <div className="overflow-hidden rounded-xl border border-primary/20 bg-primary/5 transition-all">
        <button
          type="button"
          onClick={() => setIsOverviewOpen((v) => !v)}
          className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-primary/10"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <TrendingUp className="size-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-foreground">
                  {currentRound.roundLabel} 출제 경향 총평 및 난이도 브리핑
                </h2>
                <span className="rounded bg-rose-500/15 px-1.5 py-0.2 text-[10px] font-bold text-rose-600 dark:text-rose-400">
                  난이도: {currentRound.overview.difficulty}
                </span>
                {currentRound.overview.passRateEstimate && (
                  <span className="text-[11px] text-muted-foreground hidden sm:inline">
                    ({currentRound.overview.passRateEstimate})
                  </span>
                )}
              </div>
              <span className="text-xs text-muted-foreground">
                출제 비중 분석 및 회차별 핵심 테마 요약
              </span>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              isOverviewOpen && "rotate-180"
            )}
          />
        </button>

        {isOverviewOpen && (
          <div className="border-t border-primary/15 px-4 pb-4 pt-3 text-xs leading-relaxed space-y-3">
            <p className="text-foreground/90 font-medium bg-background/60 p-3 rounded-lg border border-border/50">
              {currentRound.overview.summary}
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] font-bold text-primary mr-1 flex items-center gap-1">
                <Sparkles className="size-3" />
                핵심 출제 테마:
              </span>
              {currentRound.overview.keyThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                >
                  {theme}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
              {currentRound.overview.analysis.map((item) => (
                <div
                  key={item.domain}
                  className="flex flex-col gap-1 rounded-lg border border-border/60 bg-card p-3 shadow-2xs"
                >
                  <span className="font-semibold text-primary text-[11px]">
                    {item.domain}
                  </span>
                  <span className="text-[11px] text-muted-foreground leading-normal">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 키워드 검색 바 & 추천 검색어 */}
      <section className="flex flex-col gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Search className="size-3.5" />
            </span>
            <span className="text-xs font-bold text-foreground">
              기출문제 키워드 검색
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span>단축키</span>
            <kbd className="inline-flex h-4.5 items-center rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-semibold text-muted-foreground shadow-2xs">
              /
            </kbd>
            <span>를 누르면 바로 검색</span>
          </div>
        </div>

        <div className="relative flex items-center">
          <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
          <Input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setSearchQuery("");
                searchInputRef.current?.blur();
              }
            }}
            placeholder="문제 번호, 키워드, 개념 검색 (예: iptables, pam, Snort, XSS, 14점, 문제 1)..."
            className="h-10 w-full pl-9 pr-9 text-xs sm:text-sm bg-background/80"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                searchInputRef.current?.focus();
              }}
              className="absolute right-2.5 flex size-5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="검색어 지우기"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* 추천 키워드 칩 */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground mr-1">
            <Tag className="size-3" />
            기출 키워드:
          </span>
          {RECOMMENDED_PAST_KEYWORDS.map((kw) => {
            const isCurrent = searchQuery.trim().toLowerCase() === kw.toLowerCase();
            return (
              <button
                key={kw}
                type="button"
                onClick={() => setSearchQuery(isCurrent ? "" : kw)}
                className={cn(
                  "rounded-md px-2 py-1 text-[11px] font-medium transition-all select-none",
                  isCurrent
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                #{kw}
              </button>
            );
          })}
        </div>

        {/* 검색 결과 카운트 안내 */}
        {searchQuery.trim() && (
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-primary/20 bg-primary/5 p-2.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">
                ‘{searchQuery.trim()}’ 검색 결과:
              </span>
              <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[11px] font-bold text-primary">
                {filteredQuestions.length}건
              </span>
              <span className="text-muted-foreground text-[11px]">
                (해당 회차 {currentRound.questions.length}문항 중 {searchMatchedQuestions.length}건 일치)
              </span>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="h-6 px-2 text-[11px] text-muted-foreground hover:text-foreground gap-1"
            >
              <X className="size-3" />
              <span>검색 초기화</span>
            </Button>
          </div>
        )}
      </section>

      {/* 과목 필터 */}
      <section className="flex flex-col gap-2 rounded-xl border border-border/70 bg-card p-3.5 shadow-xs">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
            <BookOpen className="size-3.5 text-primary" />
            과목 필터
          </span>
          <span className="text-[11px] text-muted-foreground">
            {selectedSubject === "all"
              ? `전체 15문항 (100점)`
              : `${DEFAULT_SUBJECTS.find((s) => s.id === selectedSubject)?.name ?? ""} (${
                  currentRound.questions.filter((q) => q.subjectId === selectedSubject).length
                }문항)`}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-0.5">
          <button
            type="button"
            onClick={() => setSelectedSubject("all")}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all select-none",
              selectedSubject === "all"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <span>전체 과목</span>
            <span
              className={cn(
                "rounded px-1.5 py-0.2 text-[10px]",
                selectedSubject === "all"
                  ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                  : "bg-background text-muted-foreground"
              )}
            >
              {searchQuery.trim() ? searchMatchedQuestions.length : currentRound.questions.length}
            </span>
          </button>

          {DEFAULT_SUBJECTS.map((sub) => {
            const count = currentRound.questions.filter((q) => q.subjectId === sub.id).length;
            if (count === 0) return null;
            const isSelected = selectedSubject === sub.id;

            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setSelectedSubject(sub.id)}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all select-none",
                  isSelected
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span>{sub.name}</span>
                <span
                  className={cn(
                    "rounded px-1.5 py-0.2 text-[10px]",
                    isSelected
                      ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                      : "bg-background text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 학습 컨트롤 툴바: 유형 필터 + 전체 토글 + 초기화 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border bg-card p-3.5 shadow-xs">
        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant={typeFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("all")}
            className="h-8 text-xs font-semibold"
          >
            전체 ({currentRound.questions.length}문항)
          </Button>
          <Button
            type="button"
            variant={typeFilter === "short" ? "default" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("short")}
            className="h-8 text-xs font-semibold"
          >
            단답형 ({shortCount}문항 / {shortMax}점)
          </Button>
          <Button
            type="button"
            variant={typeFilter === "practical" ? "default" : "outline"}
            size="sm"
            onClick={() => setTypeFilter("practical")}
            className="h-8 text-xs font-semibold"
          >
            서술·작업형 ({descAndPracticalCount}문항 / {descAndPracticalMax}점)
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleAllAnswers}
            className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            {allOpen ? (
              <>
                <ChevronsDownUp className="size-3.5" />
                <span>정답 모두 닫기</span>
              </>
            ) : (
              <>
                <ChevronsUpDown className="size-3.5" />
                <span>정답 모두 보기</span>
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={resetCurrentRoundData}
            className="size-8 text-muted-foreground hover:text-foreground"
            title="현재 회차 채점 및 메모 초기화"
          >
            <RotateCcw className="size-3.5" />
          </Button>
        </div>
      </div>

      {/* 문제 리스트 */}
      <div className="flex flex-col gap-6">
        {filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-12 text-center bg-card">
            <Layers className="size-8 text-muted-foreground/50" />
            <h3 className="text-sm font-semibold text-foreground">
              선택한 조건에 해당하는 기출문제가 없습니다.
            </h3>
            <p className="text-xs text-muted-foreground">
              검색어나 과목 필터를 초기화해 보세요.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedSubject("all");
                setTypeFilter("all");
              }}
              className="text-xs mt-2"
            >
              필터 전체 초기화
            </Button>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isOpen = Boolean(openAnswers[q.id]);
            const score = userScores[q.id];
            const isFullScore = score === q.score;
            const isPartial = score !== undefined && score > 0 && score < q.score;
            const isZero = score === 0;

            return (
              <article
                key={q.id}
                id={`past-q-${q.id}`}
                className={cn(
                  "flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all scroll-mt-24",
                  isFullScore && "border-emerald-500/40 bg-emerald-500/[0.02]",
                  isPartial && "border-amber-500/40 bg-amber-500/[0.02]",
                  isZero && "border-rose-500/40 bg-rose-500/[0.02]",
                  score === undefined && "border-border"
                )}
              >
                {/* 문제 헤더 */}
                <div className="flex flex-col gap-3 p-5 sm:p-6 border-b border-border/70">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center justify-center rounded-md bg-foreground px-2 py-0.5 text-xs font-bold text-background">
                        문제 {q.id}
                      </span>
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        <HighlightText text={q.domain} query={searchQuery} />
                      </span>
                      <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {q.type === "short"
                          ? "단답형"
                          : q.type === "descriptive"
                          ? "서술형"
                          : "실무 작업형"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                        배점 {q.score}점
                      </span>
                      {score !== undefined && (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-xs font-bold",
                            isFullScore && "bg-emerald-600 text-white",
                            isPartial && "bg-amber-600 text-white",
                            isZero && "bg-rose-600 text-white"
                          )}
                        >
                          득점: {score}점
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground break-keep">
                    <HighlightText text={q.title} query={searchQuery} />
                  </h3>

                  {/* 지문 */}
                  <p className="text-sm text-foreground/90 leading-relaxed break-keep">
                    <HighlightText text={q.description} query={searchQuery} />
                  </p>

                  {/* 시나리오 박스 */}
                  {q.scenario && (
                    <div className="rounded-lg border border-border/70 bg-muted/50 p-3.5 font-mono text-xs text-foreground/90 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      <HighlightText text={q.scenario} query={searchQuery} />
                    </div>
                  )}

                  {/* 서술형 하위 문항 */}
                  {q.subItems && q.subItems.length > 0 && (
                    <div className="flex flex-col gap-2.5 pt-1">
                      {q.subItems.map((sub) => (
                        <div
                          key={sub.number}
                          className="rounded-lg border border-border/60 bg-muted/30 p-3.5 text-xs"
                        >
                          <span className="font-bold text-foreground mr-1.5">
                            ({sub.number})
                          </span>
                          <span className="text-foreground/90 leading-relaxed break-keep">
                            <HighlightText text={sub.question} query={searchQuery} />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 답안 작성 메모 (로컬스토리지 저장) */}
                  <div className="mt-2 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 font-medium">
                        <PenLine className="size-3 text-muted-foreground" />
                        내 답안 작성 연습 (직접 입력 후 정답을 맞춰보세요)
                      </span>
                      <span className="text-[11px] tabular-nums">
                        {(userNotes[q.id] || "").length}자 (자동 저장됨)
                      </span>
                    </div>
                    <textarea
                      rows={2}
                      value={userNotes[q.id] || ""}
                      onChange={(e) => handleNoteChange(q.id, e.target.value)}
                      placeholder="여기에 생각한 답안이나 키워드를 작성한 후 '정답 확인' 토글을 눌러보세요..."
                      className="w-full rounded-lg border border-border/70 bg-background/80 px-3 py-2 text-xs leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-y"
                    />
                  </div>
                </div>

                {/* 정답 확인 토글 버튼 & 자가 채점 바 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-muted/20 px-5 py-3 border-b border-border/40">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => toggleAnswer(q.id)}
                    className={cn(
                      "gap-1.5 text-xs font-semibold transition-all self-start sm:self-auto",
                      isOpen
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    )}
                  >
                    <FileCheck2 className="size-3.5" />
                    <span>{isOpen ? "정답 및 해설 접기" : "정답 및 모범답안 보기"}</span>
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </Button>

                  {/* 자가 채점 점수 부여 버튼군 */}
                  <div className="flex items-center gap-1.5 self-end sm:self-auto">
                    <span className="text-[11px] text-muted-foreground mr-1">채점:</span>
                    {q.type === "short" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleScoreChange(q.id, q.score)}
                          className={cn(
                            "flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-all",
                            score === q.score
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          <CheckCircle2 className="size-3" />
                          <span>정답 (+{q.score}점)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleScoreChange(q.id, 0)}
                          className={cn(
                            "flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all",
                            score === 0
                              ? "bg-rose-600 text-white font-semibold shadow-xs"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          <XCircle className="size-3" />
                          <span>오답 (0점)</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => handleScoreChange(q.id, q.score)}
                          className={cn(
                            "flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-all",
                            score === q.score
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          <CheckCircle2 className="size-3" />
                          <span>만점 (+{q.score}점)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleScoreChange(q.id, Math.round(q.score / 2))}
                          className={cn(
                            "flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-all",
                            score === Math.round(q.score / 2)
                              ? "bg-amber-600 text-white shadow-xs"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          <span>부분점수 (+{Math.round(q.score / 2)}점)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleScoreChange(q.id, 0)}
                          className={cn(
                            "flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all",
                            score === 0
                              ? "bg-rose-600 text-white font-semibold shadow-xs"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          <XCircle className="size-3" />
                          <span>오답 (0점)</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* 정답 및 상세 해설 영역 */}
                {isOpen && (
                  <div className="flex flex-col gap-4 p-5 sm:p-6 bg-muted/10 animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* 모범 정답 */}
                    <div className="flex flex-col gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/20 p-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="size-4" />
                        모범 정답 (Model Answer)
                      </span>
                      <div className="space-y-1.5 text-sm font-semibold text-emerald-950 dark:text-emerald-200 leading-relaxed whitespace-pre-line">
                        {Array.isArray(q.answer) ? (
                          q.answer.map((ans, idx) => (
                            <div key={idx} className="flex items-start gap-1.5">
                              <span className="shrink-0">•</span>
                              <span>
                                <HighlightText text={ans} query={searchQuery} />
                              </span>
                            </div>
                          ))
                        ) : (
                          <HighlightText text={q.answer} query={searchQuery} />
                        )}
                      </div>
                    </div>

                    {/* 코드 블록 */}
                    {q.codeBlock && (
                      <div className="flex flex-col gap-1.5 rounded-xl border border-border bg-slate-950 p-4 text-slate-100 shadow-xs">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          {q.codeBlock.language} Snippet
                        </span>
                        <pre className="font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre">
                          <code>{q.codeBlock.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* 채점 기준표 / 키워드 */}
                    {q.scoringPoints && q.scoringPoints.length > 0 && (
                      <div className="flex flex-col gap-2 rounded-xl border border-border/80 bg-card p-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                          <FileCheck2 className="size-3.5 text-primary" />
                          실전 채점 기준표 & 부분점수 가이드
                        </span>
                        <ul className="space-y-1 text-xs text-muted-foreground leading-relaxed">
                          {q.scoringPoints.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="font-bold text-primary shrink-0">✓</span>
                              <span>
                                <HighlightText text={pt} query={searchQuery} />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* 상세 기술 해설 */}
                    <div className="flex flex-col gap-2 rounded-xl border border-border/80 bg-card p-4">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                        <Lightbulb className="size-3.5 text-amber-500" />
                        상세 기술 해설 및 배경 지식
                      </span>
                      <div className="text-xs text-foreground/90 leading-relaxed whitespace-pre-line break-keep space-y-2">
                        <HighlightText text={q.explanation} query={searchQuery} />
                      </div>
                    </div>

                    {/* Mermaid 시각화 다이어그램 */}
                    {q.mermaidChart && (
                      <PracticalMermaid
                        id={`past-chart-${q.id}`}
                        chart={q.mermaidChart}
                        title={`문제 ${q.id} 기술 원리 시각화`}
                      />
                    )}

                    {/* 실전 시험 팁 */}
                    {q.examTips && (
                      <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/20 p-3.5 text-xs">
                        <Sparkles className="size-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                        <div className="space-y-1">
                          <span className="font-bold text-amber-900 dark:text-amber-200">
                            실전 합격 팁:
                          </span>
                          <p className="text-amber-950 dark:text-amber-300/90 leading-relaxed break-keep">
                            <HighlightText text={q.examTips} query={searchQuery} />
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
