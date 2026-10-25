import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import { ITPE_CHAPTERS, ITPE_QUIZ_LIST } from "@/data/speed-quiz/itpe";

export const metadata: Metadata = {
  title: "정보관리기술사(ITPE) 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 정답을 떠올리는 6개 도메인 기출·최신 트렌드 105문항 스피드 퀴즈 플래시카드",
};

export default function ItpeSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="정보관리기술사(ITPE) 단답형 스피드 퀴즈"
        subtitle="3초 안에 핵심 키워드와 메커니즘을 떠올리는 6대 도메인 105문항 플래시카드 트레이닝"
        chapters={ITPE_CHAPTERS}
        quizList={ITPE_QUIZ_LIST}
        exitHref="/itpe"
        exitLabel="기술사 홈"
      />
    </main>
  );
}
