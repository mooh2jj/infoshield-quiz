import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RobotSwPage() {
  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">로봇소프트웨어개발기사</h1>
        <p className="text-muted-foreground">
          퀴즈는 아직 준비 중이지만, 4과목 핵심 마인드맵은 먼저 확인할 수 있어요.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/robot-sw/mindmap"
          className={cn(buttonVariants({ variant: "default" }), "h-12 flex-1 text-base")}
        >
          마인드맵 보기
        </Link>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "h-12 flex-1 text-base")}
        >
          홈으로
        </Link>
      </div>
    </main>
  );
}
