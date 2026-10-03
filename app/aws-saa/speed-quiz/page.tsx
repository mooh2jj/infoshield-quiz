import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import {
  AWS_SAA_CHAPTERS,
  AWS_SAA_QUIZ_LIST,
} from "@/data/speed-quiz/aws-saa";

export const metadata: Metadata = {
  title: "AWS SAA 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 최적의 AWS 솔루션 서비스를 떠올리는 핵심 아키텍처 플래시카드",
};

export default function AwsSaaSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="AWS SAA 단답형 스피드 퀴즈"
        subtitle="3초 안에 최적의 AWS 솔루션을 떠올리는 핵심 아키텍처 플래시카드 트레이닝"
        chapters={AWS_SAA_CHAPTERS}
        quizList={AWS_SAA_QUIZ_LIST}
        exitHref="/aws-saa"
        exitLabel="AWS SAA 홈"
      />
    </main>
  );
}
