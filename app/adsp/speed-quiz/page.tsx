import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import { ADSP_CHAPTERS, QUIZ_LIST } from "@/data/speed-quiz/adsp";

export const metadata: Metadata = {
  title: "ADsP 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 ADsP 핵심 단답형 스피드 퀴즈 플래시카드 (82문항)",
};

export default function AdspSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="ADsP 단답형 스피드 퀴즈"
        subtitle="3초 안에 정답을 떠올리는 3개 과목 기출 복원 82문항 플래시카드 집중 암기 트레이닝"
        chapters={ADSP_CHAPTERS}
        quizList={QUIZ_LIST}
        exitHref="/adsp"
        exitLabel="ADsP 홈"
      />
    </main>
  );
}
