import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProcessingPage() {
  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col items-center justify-center gap-4 px-6 py-12 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">정보처리기사</h1>
      <p className="text-muted-foreground">
        퀴즈와 마인드맵 콘텐츠를 준비 중입니다. 곧 만나요!
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
        홈으로
      </Link>
    </main>
  );
}
