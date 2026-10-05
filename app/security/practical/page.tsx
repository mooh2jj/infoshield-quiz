import type { Metadata } from "next";
import { PracticalExamViewer } from "@/components/practical/PracticalExamViewer";
import {
  SECURITY_PRACTICAL_QUESTIONS,
  SECURITY_PRACTICAL_SUBJECTS,
  SECURITY_PRACTICAL_TRENDS,
} from "@/data/practical/security";

export const metadata: Metadata = {
  title: "정보보안기사 실기 실전 모의고사 | infoshield-quiz",
  description:
    "최신 정보보안기사 실기 출제 경향 분석 기반 단답형·서술형 실전 모의고사 및 정밀 모범답안 해설",
};

export default function SecurityPracticalPage() {
  return (
    <main className="relative flex flex-1 flex-col">
      <PracticalExamViewer
        title="정보보안기사 실기 실전 모의고사"
        subtitle="최신 기출 분석 기반 단답형 및 14점 서술·작업형 핵심 모의고사 (토글 정답 & 모범 답안)"
        trendAnalysis={SECURITY_PRACTICAL_TRENDS}
        subjects={SECURITY_PRACTICAL_SUBJECTS}
        questions={SECURITY_PRACTICAL_QUESTIONS}
        exitHref="/security"
        exitLabel="정보보안기사 홈"
      />
    </main>
  );
}
