import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import { ADSP_CHAPTERS, QUIZ_LIST } from "@/data/speed-quiz/adsp";

export const metadata: Metadata = {
  title: "ADsP 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 ADsP 핵심 단답형 스피드 퀴즈 플래시카드",
};

export default function BigdataSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="ADsP 단답형 스피드 퀴즈"
        subtitle="문제를 보고 정답을 빠르게 떠올리는 핵심 ROI 빈출 플래시카드 암기 트레이닝"
        chapters={ADSP_CHAPTERS}
        quizList={QUIZ_LIST}
        exitHref="/bigdata"
        exitLabel="빅데이터 퀴즈 홈"
      />
    </main>
  );
}
