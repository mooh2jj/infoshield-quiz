import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import { LINUX_CHAPTERS, LINUX_QUIZ_LIST } from "@/data/speed-quiz/linux";

export const metadata: Metadata = {
  title: "리눅스마스터 2급 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 리눅스마스터 2급 핵심 단답형 스피드 퀴즈 플래시카드 (실제 2차 시험과 동일한 80문항, 5개 챕터 전수 수록)",
};

export default function LinuxSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="리눅스마스터 2급 단답형 스피드 퀴즈"
        subtitle="3초 안에 정답을 떠올리는 2차 시험 대비 80문항 플래시카드 집중 암기 트레이닝 (1과목 48문항 + 2과목 32문항)"
        chapters={LINUX_CHAPTERS}
        quizList={LINUX_QUIZ_LIST}
        exitHref="/linux"
        exitLabel="리눅스마스터 홈"
      />
    </main>
  );
}
