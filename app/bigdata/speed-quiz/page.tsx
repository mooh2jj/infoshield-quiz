import type { Metadata } from "next";
import { SpeedQuiz } from "@/components/quiz/SpeedQuiz";
import { BIGDATA_CHAPTERS, BIGDATA_QUIZ_LIST } from "@/data/speed-quiz/bigdata";

export const metadata: Metadata = {
  title: "빅데이터분석기사 단답형 스피드 퀴즈 | infoshield-quiz",
  description: "3초 안에 떠올리는 빅데이터분석기사 핵심 단답형 스피드 퀴즈 플래시카드",
};

export default function BigdataSpeedQuizPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center">
      <SpeedQuiz
        title="빅데이터분석기사 단답형 스피드 퀴즈"
        subtitle="4개 필기 과목 핵심 단답형 빈출 키워드 3초 플래시카드 암기 트레이닝"
        chapters={BIGDATA_CHAPTERS}
        quizList={BIGDATA_QUIZ_LIST}
        exitHref="/bigdata"
        exitLabel="빅데이터 퀴즈 홈"
      />
    </main>
  );
}
