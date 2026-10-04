import Link from "next/link";
import { Zap, Network } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProcessingPage() {
  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">정보처리기사</h1>
        <p className="text-muted-foreground">
          5개 과목 핵심 개념을 빠르게 정리하는 단답형 스피드 퀴즈와 인터랙티브 마인드맵
        </p>
      </div>

      {/* 정보처리기사 단답형 스피드 퀴즈 배너 카드 */}
      <div className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-md bg-amber-500/20 text-amber-500">
                <Zap className="size-3.5 fill-amber-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                SPEED QUIZ
              </span>
              <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                신규
              </span>
            </div>
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              정보처리기사 단답형 스피드 퀴즈
            </h2>
            <p className="text-xs text-muted-foreground">
              3초 안에 정답을 빠르게 떠올리는 고빈출 실무·기출 플래시카드 트레이닝
            </p>
          </div>
          <Link
            href="/processing/speed-quiz"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-10 shrink-0 gap-1.5 bg-amber-600 font-semibold text-white hover:bg-amber-700 shadow-sm"
            )}
          >
            <Zap className="size-3.5 fill-current" />
            스피드 퀴즈 시작
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/processing/mindmap"
          className={cn(buttonVariants({ variant: "outline" }), "h-12 flex-1 gap-2 text-base")}
        >
          <Network className="size-4 text-muted-foreground" />
          5개 과목 마인드맵 보기
        </Link>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost" }), "h-12 flex-1 text-base")}
        >
          홈으로
        </Link>
      </div>
    </main>
  );
}
