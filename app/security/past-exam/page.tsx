import type { Metadata } from "next";
import { Suspense } from "react";
import { PracticalPastExamViewer } from "@/components/practical/PracticalPastExamViewer";

export const metadata: Metadata = {
  title: "정보보안기사 실기 기출 (2026년 2회/1회, 2025년 3회) | infoshield-quiz",
  description:
    "정보보안기사 실기 최신 기출 복원 문제(2026년 2회, 2026년 1회, 2025년 3회) 풀세트 및 100점 만점 실시간 자가 채점 시스템",
};

export default function SecurityPastExamPage() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Suspense
        fallback={
          <div className="mx-auto flex w-full max-w-[840px] flex-1 items-center justify-center p-12 text-sm text-muted-foreground">
            기출문제를 불러오는 중입니다...
          </div>
        }
      >
        <PracticalPastExamViewer />
      </Suspense>
    </main>
  );
}
