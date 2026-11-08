"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckSquare, ListOrdered, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExamTimer } from "@/components/quiz/ExamTimer";
import { NetadminExamSidebar } from "@/components/quiz/NetadminExamSidebar";
import { NetadminCbtQuestionCard } from "@/components/quiz/NetadminCbtQuestionCard";
import { NetadminSubmitModal } from "@/components/quiz/NetadminSubmitModal";
import {
  NETADMIN_EXAM_ROUNDS,
  NETADMIN_ROUND_KEYS,
  getNetadminExamRound,
  type NetadminExamRound,
} from "@/data/netadmin-exam";
import { useQuizStore } from "@/lib/store/quizStore";
import { useNotebookStore } from "@/lib/store/notebookStore";
import { getQuestionById } from "@/lib/questions";

export default function NetadminExamPage() {
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

  const roundInfo = getNetadminExamRound(examRound as NetadminExamRound);

  // 세션이 비어있거나 31문제 풀세트가 아니면 해당 회차 31문항 기출 복원 모의고사로 초기화
  useEffect(() => {
    if (hasHydrated && (queue.length === 0 || queue.length !== 31)) {
      startSession(
        {
          subjects: [
            "netadmin-general",
            "netadmin-devices",
            "netadmin-windows",
            "netadmin-linux",
          ],
          types: ["multiple_choice"],
        },
        { questionIds: roundInfo.questionIds }
      );
    }
  }, [hasHydrated, queue.length, roundInfo.questionIds, startSession]);

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
    router.push("/netadmin/exam/result");
  }

  // 제한시간 종료 시 강제 제출
  function handleTimeUp() {
    alert("시험 제한시간(50분)이 종료되었습니다. 작성된 답안으로 자동 제출됩니다.");
    handleConfirmSubmit();
  }

  if (!hasHydrated || !currentItem) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium text-muted-foreground animate-pulse">
            네트워크관리사 실전 기출 CBT 모의고사 로딩 중...
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col bg-background">
      {/* CBT 시험장 상단 고정 헤더 바 */}
      <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-border bg-background/95 px-4 sm:px-6 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link
            href="/netadmin"
            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">나가기</span>
          </Link>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
              네트워크관리사 2급
            </span>
            <span className="text-xs sm:text-sm font-bold text-foreground">
              {roundInfo.name}
            </span>
          </div>
        </div>

        {/* 중앙: 50분 카운트다운 타이머 */}
        <div className="flex items-center">
          <ExamTimer
            totalSeconds={50 * 60}
            onTimeUp={handleTimeUp}
            onTick={(sec) => {
              spentSecondsRef.current = sec;
            }}
          />
        </div>

        {/* 우측 액션: 모바일 OMR 토글 & 최종 제출 버튼 */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsMobileSidebarOpen(true)}
            className="lg:hidden gap-1.5 text-xs h-8"
          >
            <ListOrdered className="size-3.5" />
            <span>OMR ({queue.length - unansweredIndices.length}/{queue.length})</span>
          </Button>

          <Button
            size="sm"
            onClick={() => setIsSubmitModalOpen(true)}
            className="gap-1.5 text-xs font-bold h-8 bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <CheckSquare className="size-3.5" />
            <span>답안 제출</span>
          </Button>
        </div>
      </header>

      {/* CBT 메인 콘텐츠 영역: 2열 레이아웃 (문제 영역 + 데스크톱 OMR 사이드바) */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 p-4 sm:p-6 lg:p-8">
        {/* 좌측 메인: CBT 문항 카드 */}
        <main className="flex flex-1 flex-col justify-start">
          <NetadminCbtQuestionCard
            item={currentItem}
            questionIndex={currentIndex}
            totalQuestions={queue.length}
            selectedAnswer={currentAnswer?.submitted}
            onSelectOption={handleSelectOption}
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            hasPrevious={currentIndex > 0}
            hasNext={currentIndex < queue.length - 1}
            onSubmitPrompt={() => setIsSubmitModalOpen(true)}
          />
        </main>

        {/* 우측: OMR 사이드바 (데스크톱 화면 고정) */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-20">
            <NetadminExamSidebar
              queue={queue}
              currentIndex={currentIndex}
              answers={answers}
              onSelectQuestion={(idx) => goToQuestion(idx)}
              onSubmitExam={() => setIsSubmitModalOpen(true)}
              roundName={roundInfo.name}
            />
          </div>
        </div>
      </div>

      {/* 모바일 화면용 OMR 오버레이 드로어 */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 flex justify-end bg-background/80 backdrop-blur-sm lg:hidden animate-in fade-in"
          onClick={() => setIsMobileSidebarOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-xs flex-col bg-card p-4 shadow-2xl animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2 border-b border-border mb-2">
              <span className="font-bold text-sm">OMR 답안지</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="h-8 px-2 text-xs"
              >
                닫기
              </Button>
            </div>
            <NetadminExamSidebar
              queue={queue}
              currentIndex={currentIndex}
              answers={answers}
              onSelectQuestion={(idx) => {
                goToQuestion(idx);
                setIsMobileSidebarOpen(false);
              }}
              onSubmitExam={() => {
                setIsMobileSidebarOpen(false);
                setIsSubmitModalOpen(true);
              }}
              roundName={roundInfo.name}
              className="border-none p-0 shadow-none"
            />
          </div>
        </div>
      )}

      {/* 제출 확인 모달 */}
      <NetadminSubmitModal
        isOpen={isSubmitModalOpen}
        totalQuestions={queue.length}
        answeredCount={queue.length - unansweredIndices.length}
        unansweredIndices={unansweredIndices}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirm={handleConfirmSubmit}
        onJumpToQuestion={(idx) => {
          goToQuestion(idx);
          setIsSubmitModalOpen(false);
        }}
      />
    </div>
  );
}
