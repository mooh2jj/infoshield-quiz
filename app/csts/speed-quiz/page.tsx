import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import { CSTS_CHAPTERS, CSTS_QUIZ_LIST } from "@/data/speed-quiz/csts";

export const metadata: Metadata = {
  title: "CSTS 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 정답을 떠올리는 CSTS (소프트웨어 테스트 전문가) 60문항 핵심 플래시카드 트레이닝",
};

export default function CstsSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="CSTS 단답형 스피드 퀴즈"
        subtitle="3초 안에 정답 키워드를 연상하는 CSTS 6대 영역 60문항 플래시카드 집중 암기 트레이닝"
        chapters={CSTS_CHAPTERS}
        quizList={CSTS_QUIZ_LIST}
        exitHref="/csts"
        exitLabel="CSTS 홈으로"
      />
    </main>
  );
}
