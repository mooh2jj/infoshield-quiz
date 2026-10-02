import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Database, Network, Sparkles, BookOpen } from "lucide-react";

export default function SqldPage() {
  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-semibold tracking-tight">SQLD (SQL 개발자)</h1>
        </div>
        <p className="text-muted-foreground">
          한국데이터산업진흥원(K-Data) 최신 출제기준 반영 — 4개 파트 핵심 마인드맵과 시험 중요도·핵심 포인트 인터랙티브 메모장을 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border p-4 bg-card">
          <h3 className="font-semibold text-base mb-1 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            1과목: 데이터 모델링의 이해
          </h3>
          <p className="text-sm text-muted-foreground">
            10문항 (과락 4문항 미만 주의) · 3단계 모델링, 엔터티·속성·관계, 식별자 체계, 1~3차 정규화 및 반정규화
          </p>
        </div>
        <div className="rounded-lg border border-border p-4 bg-card">
          <h3 className="font-semibold text-base mb-1 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            2과목: SQL 기본 및 활용
          </h3>
          <p className="text-sm text-muted-foreground">
            40문항 · DDL/DML/TCL, NULL 연산, 다양한 JOIN, 서브쿼리, 집합연산자, 윈도우 함수, 계층형 질의, PIVOT
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground mb-1">💡 인터랙티브 마인드맵 팁</p>
        <p>마인드맵의 핵심 노드에 마우스를 올리면 시험 중요도(★), 핵심 정의, 빈출 족보 및 오답 함정이 담긴 플로팅 메모장이 나타납니다.</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/sqld/mindmap"
          className={cn(buttonVariants({ variant: "default" }), "h-12 flex-1 text-base flex items-center justify-center gap-2")}
        >
          <Network className="h-4 w-4" />
          SQLD 마인드맵 전체 보기
        </Link>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "h-12 flex-1 text-base flex items-center justify-center")}
        >
          홈으로
        </Link>
      </div>
    </main>
  );
}
