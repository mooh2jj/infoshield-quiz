import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";

export const metadata: Metadata = {
  title: "ADsP 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 ADsP 핵심 단답형 스피드 퀴즈 플래시카드",
};

export default function BigdataSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz exitHref="/bigdata" />
    </main>
  );
}
