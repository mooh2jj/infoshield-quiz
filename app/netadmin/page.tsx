"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Clock, FileText, Minus, Play, Plus, Zap, Network, BookOpen, Layers } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SubjectChip } from "@/components/quiz/SubjectChip";
import {
  NETADMIN_EXAM_ROUNDS,
  NETADMIN_ROUND_KEYS,
  getNetadminExamRound,
  type NetadminExamRound,
} from "@/data/netadmin-exam";
import { useQuizStore } from "@/lib/store/quizStore";
import { cn } from "@/lib/utils";
import type { SubjectCategory } from "@/types/quiz";

const ALL_NETADMIN_SUBJECTS: SubjectCategory[] = [
  "netadmin-general",
  "netadmin-devices",
  "netadmin-windows",
  "netadmin-linux",
];

const MIN_QUESTION_COUNT = 5;
const MAX_QUESTION_COUNT = 31;
const DEFAULT_QUESTION_COUNT = 15;

export default function NetadminPage() {
  const router = useRouter();
  const hasHydrated = useQuizStore((state) => state.hasHydrated);
  const startSession = useQuizStore((state) => state.startSession);
  const setExamRound = useQuizStore((state) => state.setExamRound);
  const [selectedRound, setSelectedRound] = useState<NetadminExamRound>("20261101");
  const [selected, setSelected] = useState<SubjectCategory[]>(ALL_NETADMIN_SUBJECTS);
  const [questionCount, setQuestionCount] = useState(DEFAULT_QUESTION_COUNT);

  function toggleSubject(subject: SubjectCategory) {
    setSelected((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  }

  function adjustQuestionCount(delta: number) {
    setQuestionCount((prev) =>
      Math.min(MAX_QUESTION_COUNT, Math.max(MIN_QUESTION_COUNT, prev + delta))
    );
  }

  // 실전 기출 31문제 풀세트 CBT 모의고사 시작
  function handleStartFullExam() {
    const roundInfo = getNetadminExamRound(selectedRound);
    setExamRound(selectedRound);
    startSession(
      {
        subjects: ALL_NETADMIN_SUBJECTS,
        types: ["multiple_choice"],
      },
      { questionIds: roundInfo.questionIds }
    );
    router.push(`/netadmin/exam?round=${selectedRound}`);
  }

  // 과목별 연습 퀴즈 풀기
  function handleStartPractice() {
    if (selected.length === 0) return;
    startSession(
      { subjects: selected, types: ["multiple_choice"] },
      { count: questionCount }
    );
    router.push("/netadmin/quiz");
  }

  const roundInfo = getNetadminExamRound(selectedRound);

  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col gap-8 px-6 py-10 pb-28 sm:pb-12">
      {/* 헤더 섹션 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
            CBT 시험장
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            20261101 (2026년 11월 1일 시행) 필기 실전 기출 복원
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          네트워크관리사 2급 기출 복원
        </h1>
        <p className="text-sm text-muted-foreground">
          실제 시험과 동일한 CBT 시험장 환경, 50분 타이머, 실시간 OMR 사이드바로 1:1 완벽 실전 감각 완성
        </p>
      </div>

      {/* [★ 핵심] 실전 기출 31문항 풀세트 CBT 모의고사 메인 카드 */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/15 via-card to-background p-6 sm:p-7 shadow-md">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-sm">
              <FileText className="size-3.5" />
              실전 CBT 모의고사
            </span>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              31문항 풀세트 복원
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              네트워크관리사 2급 20261101 실전 기출 복원
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              2026년 11월 1일 실시된 최신 필기 기출 복원 31문항을 실제 시험과 동일한 조건(50분 카운트다운, OMR 실시간 마킹, 100점 만점 채점)으로 응시합니다.
            </p>
          </div>

          {/* 시험 조건 뱃지 */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 pt-1">
            <div className="flex flex-col rounded-xl border border-border/70 bg-card/60 p-3">
              <span className="text-[11px] font-medium text-muted-foreground">복원 문항</span>
              <span className="text-base font-bold text-foreground">31문항 풀세트</span>
            </div>
            <div className="flex flex-col rounded-xl border border-border/70 bg-card/60 p-3">
              <span className="text-[11px] font-medium text-muted-foreground">제한 시간</span>
              <span className="text-base font-bold text-foreground">50분 타이머</span>
            </div>
            <div className="flex flex-col rounded-xl border border-border/70 bg-card/60 p-3">
              <span className="text-[11px] font-medium text-muted-foreground">합격 기준</span>
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">60점 이상 합격</span>
            </div>
            <div className="flex flex-col rounded-xl border border-border/70 bg-card/60 p-3">
              <span className="text-[11px] font-medium text-muted-foreground">포함 과목</span>
              <span className="text-base font-bold text-foreground">4개 전과목</span>
            </div>
          </div>

          {/* 시작 버튼 */}
          <Button
            size="lg"
            onClick={handleStartFullExam}
            className="w-full gap-2 text-base font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Play className="size-4 fill-current" />
            20261101 실전 기출 CBT 모의고사 응시하기
          </Button>
        </div>
      </div>

      {/* [선택 2] 과목별 집중 모의고사 카드 */}
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="rounded bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
              연습 모드
            </span>
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              과목별 집중 모의고사
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            취약한 과목만 선택하여 문제를 풀고, 즉시 상세 해설 및 실무 팁을 확인합니다.
          </p>
        </div>

        {/* 과목 선택 칩 */}
        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            과목 선택 (다중 선택 가능)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ALL_NETADMIN_SUBJECTS.map((subject) => (
              <SubjectChip
                key={subject}
                subject={subject}
                selected={selected.includes(subject)}
                onToggle={() => toggleSubject(subject)}
              />
            ))}
          </div>
        </div>

        {/* 문항 수 조절 */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-medium">연습 문항 수</span>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => adjustQuestionCount(-5)}
              disabled={questionCount <= MIN_QUESTION_COUNT}
              aria-label="문항 수 5개 감소"
            >
              <Minus className="size-3.5" />
            </Button>
            <span className="w-12 text-center text-sm font-bold tabular-nums">
              {questionCount}개
            </span>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              onClick={() => adjustQuestionCount(5)}
              disabled={questionCount >= MAX_QUESTION_COUNT}
              aria-label="문항 수 5개 증가"
            >
              <Plus className="size-3.5" />
            </Button>
          </div>
        </div>

        {/* 연습 시작 버튼 */}
        <Button
          onClick={handleStartPractice}
          disabled={selected.length === 0}
          variant="outline"
          className="w-full gap-2 border-primary/40 text-primary hover:bg-primary/10 font-semibold"
        >
          <Play className="size-4" />
          선택한 과목으로 연습 문제 풀기 ({questionCount}문항)
        </Button>
      </div>

      {/* 마인드맵 바로가기 배너 */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-muted/40 p-5">
        <div className="flex items-center gap-3.5">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Layers className="size-6" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-foreground">
              네트워크관리사 5대 핵심 도메인 마인드맵
            </h3>
            <p className="text-xs text-muted-foreground">
              네트워크 일반, TCP/IP, NOS, 네트워크 기기, 보안 전 과목 핵심 요약 맵
            </p>
          </div>
        </div>
        <Link
          href="/netadmin/mindmap"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "shrink-0 font-semibold text-xs h-9 px-4"
          )}
        >
          마인드맵 전체 보기
        </Link>
      </div>

      {/* 수험 가이드 및 합격 전략 안내 */}
      <div className="flex flex-col gap-3 rounded-xl border border-border/70 bg-card p-5 text-xs text-muted-foreground leading-relaxed">
        <h4 className="font-bold text-foreground flex items-center gap-1.5">
          <BookOpen className="size-4 text-primary" />
          네트워크관리사 2급 필기 합격 기준 & 출제 특징
        </h4>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>문항 구성:</strong> 네트워크 일반(10~15문항), TCP/IP 프로토콜(10~15문항), NOS(Windows/Linux 10~15문항), 네트워크 기기 및 보안(5~10문항) 총 50문항 객관식 4지선다형.</li>
          <li><strong>합격 기준:</strong> 100점 만점 기준 <strong>60점 이상(총 50문항 중 30문항 이상 정답)</strong> 득점 시 합격 (별도 과목별 과락 없음).</li>
          <li><strong>최신 출제 경향:</strong> IPv6 축약 표기, 서브넷 마스크 가용 호스트 계산, Linux 시스템 관리 명령어(free, ps -ef, ip addr, chmod), Apache httpd.conf 지시어 등 실무 연계형 문항의 출제 비중이 높습니다.</li>
        </ul>
      </div>
    </main>
  );
}
