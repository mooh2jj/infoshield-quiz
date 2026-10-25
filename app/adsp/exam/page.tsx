"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckSquare, ListOrdered, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExamTimer } from "@/components/quiz/ExamTimer";
import { AdspExamSidebar } from "@/components/quiz/AdspExamSidebar";
import { AdspCbtQuestionCard } from "@/components/quiz/AdspCbtQuestionCard";
import { AdspSubmitModal } from "@/components/quiz/AdspSubmitModal";
import {
  ADSP_EXAM_ROUNDS,
  ADSP_ROUND_KEYS,
  getAdspExamRound,
  type AdspExamRound,
} from "@/data/adsp-exam";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { getQuestionById } from "@/lib/questions";

export default function AdspExamPage() {
  const router = useRouter();
  const hasHydrated = useQuizStore((state) => state.hasHydrated);
  const queue = useQuizStore((state) => state.queue);
  const currentIndex = useQuizStore((state) => state.currentIndex);
  const answers = useQuizStore((state) => state.answers);
  const examRound = useQuizStore((state) => state.examRound);
  const setExamRound = useQuizStore((state) => state.setExamRound);
  const startSession = useQuizStore((state) => state.startSession);
  const submitAnswer = useQuizStore((state) => state.submitAnswer);
  const goToQuestion = useQuizStore((state) => state.goToQuestion);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const previousQuestion = useQuizStore((state) => state.previousQuestion);
  const setTimeSpentSeconds = useQuizStore((state) => state.setTimeSpentSeconds);
  const addWrongAnswer = useNotebookStore((state) => state.addWrongAnswer);
  const removeWrongAnswer = useNotebookStore((state) => state.removeWrongAnswer);

  const spentSecondsRef = useRef(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const roundInfo = getAdspExamRound(examRound);

  // 세션이 비어있거나 50문제 풀세트가 아니면 해당 회차 50문항 기출 복원 모의고사로 초기화
  useEffect(() => {
    if (hasHydrated && (queue.length === 0 || queue.length !== 50)) {
      startSession(
        { subjects: ["adsp-understanding", "adsp-planning", "adsp-analysis", "adsp-past"], types: ["multiple_choice"] },
        { questionIds: roundInfo.questionIds }
      );
    }
  }, [hasHydrated, queue.length, roundInfo.questionIds, startSession]);

  function handleSwitchRound(nextRound: AdspExamRound) {
    if (nextRound === examRound) return;
    if (
      window.confirm(
        `제${nextRound}회 기출 복원 시험으로 변경하시겠습니까? 현재 시험 진행 상황은 초기화됩니다.`
      )
    ) {
      setExamRound(nextRound);
      const nextInfo = getAdspExamRound(nextRound);
      startSession(
        { subjects: ["adsp-understanding", "adsp-planning", "adsp-analysis", "adsp-past"], types: ["multiple_choice"] },
        { questionIds: nextInfo.questionIds }
      );
    }
  }

  const currentId = queue[currentIndex];
  const currentItem = currentId ? getQuestionById(currentId) : undefined;
  const currentAnswer = currentId ? answers[currentId] : undefined;

  // 미답안 문항 인덱스 추출
  const unansweredIndices = queue
    .map((id, idx) => (answers[id]?.submitted === undefined ? idx : -1))
    .filter((idx) => idx !== -1);

  // 보기 선택 시 답안 저장
  function handleSelectOption(optionIndex: number) {
    if (!currentItem) return;
    const isCorrect = optionIndex === currentItem.answerIndex;
    submitAnswer(currentItem.id, String(optionIndex), isCorrect);

    // 오답노트 동기화
    if (isCorrect) {
      removeWrongAnswer(currentItem.id);
    } else {
      addWrongAnswer(currentItem.id);
    }
  }

  // 최종 제출 실행
  function handleConfirmSubmit() {
    setTimeSpentSeconds(spentSecondsRef.current);
    setIsSubmitModalOpen(false);
    router.push("/adsp/exam/result");
  }

  // 나가기 확인
  function handleExit() {
    if (
      window.confirm(
        "시험을 중단하고 홈으로 나갈까요? 저장되지 않은 진행 기록은 사라질 수 있습니다."
      )
    ) {
      router.push("/adsp");
    }
  }

  if (!hasHydrated || !currentItem) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-5xl items-center justify-center px-4 py-12">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">ADsP 50문항 실전 시험지 불러오는 중...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-5 px-4 py-6 pb-24 sm:pb-8">
      {/* 상단 CBT 헤더: 뒤로가기 / 시험명 / 90분 타이머 / 모바일 OMR 토글 / 제출 버튼 */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleExit}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label="시험 종료 후 홈으로 이동"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">나가기</span>
          </button>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                ADsP {roundInfo.name}
              </h1>
              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                50문항 풀세트
              </span>
            </div>
            <div className="flex items-center gap-2 pt-0.5">
              <p className="text-xs text-muted-foreground hidden md:block">
                1과목(10) + 2과목(10) + 3과목(30)
              </p>
              <span className="text-xs text-muted-foreground hidden md:inline">·</span>
              {/* 회차 변경 토글 칩 */}
              <div className="inline-flex items-center rounded-md border border-border p-0.5 text-[11px] gap-0.5">
                {ADSP_ROUND_KEYS.map((rk) => (
                  <button
                    key={rk}
                    type="button"
                    onClick={() => handleSwitchRound(rk)}
                    className={`px-1.5 py-0.5 rounded font-semibold transition-colors ${
                      examRound === rk
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {rk}회
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* 90분 실시간 카운트다운 타이머 */}
          <ExamTimer
            totalSeconds={90 * 60}
            onTick={(spent) => {
              spentSecondsRef.current = spent;
            }}
            onTimeUp={() => {
              alert("시험 제한시간(90분)이 종료되었습니다. 답안을 자동 제출합니다.");
              spentSecondsRef.current = 90 * 60;
              handleConfirmSubmit();
            }}
          />

          {/* 모바일 화면용 OMR 답안표 토글 버튼 */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsMobileSidebarOpen((prev) => !prev)}
            className="lg:hidden gap-1.5 h-9 text-xs font-medium"
          >
            <ListOrdered className="size-3.5" />
            OMR ({queue.filter((id) => answers[id]?.submitted !== undefined).length}/50)
          </Button>

          {/* 최종 답안 제출 버튼 */}
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() => setIsSubmitModalOpen(true)}
            className="gap-1.5 h-9 font-semibold text-xs sm:text-sm shadow-sm"
          >
            <CheckSquare className="size-3.5" />
            답안 제출
          </Button>
        </div>
      </div>

      {/* 메인 시험 공간: 왼쪽 문제 풀이 카드 (1fr) + 오른쪽 OMR 사이드바 (320px) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        {/* 문항 문제 풀이 카드 */}
        <section aria-label="문제 풀이 영역" className="w-full">
          <AdspCbtQuestionCard
            item={currentItem}
            questionIndex={currentIndex}
            totalQuestions={queue.length}
            selectedAnswer={currentAnswer?.submitted}
            onSelectOption={handleSelectOption}
            onPrevious={() => previousQuestion()}
            onNext={() => nextQuestion()}
            hasPrevious={currentIndex > 0}
            hasNext={currentIndex < queue.length - 1}
            onSubmitPrompt={() => setIsSubmitModalOpen(true)}
          />
        </section>

        {/* 데스크탑 고정 OMR 사이드바 (화면 우측 sticky) */}
        <div className="hidden lg:block sticky top-20">
          <AdspExamSidebar
            queue={queue}
            currentIndex={currentIndex}
            answers={answers}
            roundName={roundInfo.name}
            onSelectQuestion={(idx) => goToQuestion(idx)}
            onSubmitExam={() => setIsSubmitModalOpen(true)}
          />
        </div>
      </div>

      {/* 모바일 슬라이드 OMR 사이드바 모달 */}
      {isMobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-h-[85vh] rounded-t-2xl border-t border-border bg-card p-4 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="font-bold text-sm">OMR 문제 이동</span>
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="text-xs text-muted-foreground px-2 py-1 rounded bg-muted hover:text-foreground"
              >
                닫기
              </button>
            </div>
            <div className="overflow-y-auto py-2 flex-1">
              <AdspExamSidebar
                queue={queue}
                currentIndex={currentIndex}
                answers={answers}
                roundName={roundInfo.name}
                onSelectQuestion={(idx) => {
                  goToQuestion(idx);
                  setIsMobileSidebarOpen(false);
                }}
                onSubmitExam={() => {
                  setIsMobileSidebarOpen(false);
                  setIsSubmitModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 최종 제출 확인 모달 */}
      <AdspSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={handleConfirmSubmit}
        totalQuestions={queue.length}
        unansweredIndices={unansweredIndices}
        onJumpToQuestion={(idx) => goToQuestion(idx)}
      />
    </main>
  );
}
