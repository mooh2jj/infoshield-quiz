import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import {
  SECURITY_CHAPTERS,
  SECURITY_QUIZ_LIST,
} from "@/data/speed-quiz/security";

export const metadata: Metadata = {
  title: "정보보안기사 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 정보보안기사 핵심 단답형 스피드 퀴즈 플래시카드",
};

export default function SecuritySpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="정보보안기사 단답형 스피드 퀴즈"
        subtitle="3초 안에 정답을 떠올리는 실기 단답형(3점) 적중 & 47대 보안약점 200문항 플래시카드 집중 트레이닝"
        chapters={SECURITY_CHAPTERS}
        quizList={SECURITY_QUIZ_LIST}
        exitHref="/security"
        exitLabel="정보보안기사 홈"
      />
    </main>
  );
}
