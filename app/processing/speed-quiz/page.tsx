import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import {
  PROCESSING_CHAPTERS,
  PROCESSING_QUIZ_LIST,
} from "@/data/speed-quiz/processing";

export const metadata: Metadata = {
  title: "정보처리기사 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 정보처리기사 핵심 실무·기출 단답형 스피드 퀴즈 플래시카드",
};

export default function ProcessingSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="정보처리기사 단답형 스피드 퀴즈"
        subtitle="3초 안에 핵심 개념을 빠르게 떠올리는 고빈출 실무·기출 플래시카드 트레이닝"
        chapters={PROCESSING_CHAPTERS}
        quizList={PROCESSING_QUIZ_LIST}
        exitHref="/processing"
        exitLabel="정보처리기사 홈"
      />
    </main>
  );
}
