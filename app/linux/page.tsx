import Link from "next/link";
import {
  Terminal,
  Zap,
  BookOpen,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FolderGit2,
  Cpu,
  Layers,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LinuxPage() {
  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col gap-8 px-6 py-10 pb-20">
      {/* 타이틀 헤더 */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
            <Terminal className="size-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            한국정보통신진흥협회(KAIT) 공인 민간자격
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          리눅스마스터 2급
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          문제은행식 기출 변형 80% 완벽 대비! 2차 시험 실제 80문항 비중(1과목 48제 + 2과목 32제)을 그대로 반영한
          <strong> 80제 단답형 스피드 퀴즈</strong>와 <strong>기출 빈출 ROI 50선 전략 메모장</strong>으로 단기간에 합격권을 완성하세요.
        </p>
      </div>

      {/* 핵심 학습 모듈 2개 (스피드 퀴즈 & 마인드맵) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* [모듈 1] 80제 스피드 퀴즈 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/[0.04] p-5 shadow-sm transition-all hover:border-emerald-500 hover:shadow-emerald-500/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <Zap className="size-5 fill-current text-amber-300" />
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                실전 80문항 완비
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">80제 단답형 스피드 퀴즈</h2>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                3초 안에 정답을 떠올리는 플래시카드 트레이닝! 대소문자 옵션 함정부터 네트워크 포트, X-Window까지 5개 챕터 전수 수록.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href="/linux/speed-quiz"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 text-sm shadow-md"
              )}
            >
              <span>스피드 퀴즈 풀기</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* [모듈 2] 마인드맵 & ROI 전략 메모장 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-emerald-500/50 hover:shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-800 shadow-sm">
                <Flame className="size-5 fill-current text-amber-400" />
              </span>
              <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                ROI 50선 + 도식 15선
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">마인드맵 & ROI 메모장</h2>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                5개 챕터 시각화 체계도와 우하단 플로팅 전략 메모장(출제 1순위 50선, 단골 함정 15선, 직전 치트시트) 탑재.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href="/linux/mindmap"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full h-11 border-border hover:bg-muted font-bold gap-2 text-sm"
              )}
            >
              <BookOpen className="size-4" />
              <span>마인드맵 & 메모장 보기</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2차 시험 구조 및 과락 방지 전략 테이블 */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="size-4 text-emerald-600" />
          <h2 className="text-sm font-bold tracking-tight">
            시험 구조 및 합격 커트라인 전략 (ROI 관점)
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-muted-foreground font-semibold">
                <th className="py-2 px-3">구분</th>
                <th className="py-2 px-3">과목 및 문항 수</th>
                <th className="py-2 px-3">과락 및 합격 기준</th>
                <th className="py-2 px-3">핵심 공략 포인트</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              <tr>
                <td className="py-2.5 px-3 font-bold text-foreground">1차 (온라인)</td>
                <td className="py-2.5 px-3">리눅스 일반 (50문항 / 60분)</td>
                <td className="py-2.5 px-3">60점 이상 (30문제)</td>
                <td className="py-2.5 px-3 text-muted-foreground">PDF 족보 검색 활용 가능, 가볍게 통과</td>
              </tr>
              <tr className="bg-emerald-500/[0.02]">
                <td className="py-2.5 px-3 font-bold text-emerald-700 dark:text-emerald-300">2차 - 1과목</td>
                <td className="py-2.5 px-3 font-semibold">리눅스 운영 및 관리 (48문항)</td>
                <td className="py-2.5 px-3">
                  <span className="font-bold text-amber-600 dark:text-amber-400">과락 40% 미만</span>
                  <span className="text-muted-foreground block text-[11px]">(최소 20문제 이상 필요)</span>
                </td>
                <td className="py-2.5 px-3 text-muted-foreground">
                  <strong className="text-foreground">명령어와 대소문자 옵션 구분</strong>이 합격 당락 결정
                </td>
              </tr>
              <tr className="bg-sky-500/[0.02]">
                <td className="py-2.5 px-3 font-bold text-sky-700 dark:text-sky-300">2차 - 2과목</td>
                <td className="py-2.5 px-3 font-semibold">리눅스 활용 (32문항)</td>
                <td className="py-2.5 px-3">
                  <span className="font-bold text-amber-600 dark:text-amber-400">과락 40% 미만</span>
                  <span className="text-muted-foreground block text-[11px]">(최소 13문제 이상 필요)</span>
                </td>
                <td className="py-2.5 px-3 text-muted-foreground">
                  <strong className="text-foreground">X-Window, 네트워크, 최신 IT기술</strong> (암기 대비 득점 가성비 최고)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-3 rounded-lg bg-muted/40 p-2.5 text-[11px] text-muted-foreground leading-relaxed">
          💡 <strong>2차 시험 최종 합격 기준:</strong> 총 80문항(100분) 중 문항당 1.25점이며, 과목별 40% 과락 없이 <strong>총 48문제(60점) 이상</strong> 맞히면 합격합니다.
        </div>
      </div>

      {/* 단골 함정 포인트 TOP 4 미리보기 */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-4 text-amber-500" />
          <h2 className="text-sm font-bold tracking-tight">
            수험생 오답률 1위! 단골 옵션 함정 미리보기
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-border bg-card p-3.5">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
              1. umask 0027 계산 함정
            </span>
            <p className="text-muted-foreground leading-relaxed">
              디렉터리는 777-027=<strong>750</strong>이지만, 파일은 666-027=639가 아니라 실행 비트가 없으므로 <strong>640</strong>입니다!
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-3.5">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
              2. nice -10 bash 우선순위 함정
            </span>
            <p className="text-muted-foreground leading-relaxed">
              앞의 -는 옵션 기호이므로 NI 값이 <strong>+10</strong>(우선순위 낮아짐)이 됩니다. -10은 <strong>nice --10 bash</strong>!
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-3.5">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
              3. tar xz 압축 대소문자
            </span>
            <p className="text-muted-foreground leading-relaxed">
              gzip은 <code className="bg-muted px-1 rounded">-z</code>, bzip2는 <code className="bg-muted px-1 rounded">-j</code>, xz 압축은 반드시 대문자 <code className="bg-muted px-1 rounded">-J</code>입니다.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-3.5">
            <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
              4. 데스크톱 라이브러리 매칭
            </span>
            <p className="text-muted-foreground leading-relaxed">
              <strong>GNOME</strong> = GTK+ + Nautilus / <strong>KDE</strong> = Qt + Dolphin. 두 진영을 교차한 보기를 반드시 피하세요.
            </p>
          </div>
        </div>
      </div>

      {/* 홈 네비게이션 */}
      <div className="flex justify-center pt-2">
        <Link
          href="/"
          className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
        >
          전체 자격증 메인으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
