"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Zap,
  BookOpen,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Layers,
  HelpCircle,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/lib/store/quizStore";
import type { SubjectCategory } from "@/types/quiz";

const CSTS_SUBJECTS: SubjectCategory[] = [
  "csts-principles",
  "csts-static",
  "csts-blackbox",
  "csts-whitebox",
  "csts-management",
];

interface DomainRoiRow {
  domain: string;
  weight: string;
  difficulty: string;
  roi: string;
  roiBadgeClass: string;
  keyTopics: string;
}

const DOMAIN_ROI_TABLE: DomainRoiRow[] = [
  {
    domain: "1. 테스트 기본 원리 & V-모델",
    weight: "약 20%",
    difficulty: "보통",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30 font-bold",
    keyTopics: "오류-결함-장애, 검증 vs 확인, 테스팅 7대 원리(살충제 패러독스, 오류 부재의 궤변), V-모델 단위/통합(상향식 Driver, 하향식 Stub)/시스템/인수",
  },
  {
    domain: "2. 정적 테스팅 & 4대 리뷰",
    weight: "약 15%",
    difficulty: "보통",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30 font-bold",
    keyTopics: "비공식 리뷰 < 워크스루(작성자 주도) < 기술 리뷰 < 인스펙션(중재자, 체크리스트, 메트릭), 정적 분석(Dead Code, 코딩 표준)",
  },
  {
    domain: "3. 동적 블랙박스 기법",
    weight: "약 25%",
    difficulty: "높음",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30 font-bold",
    keyTopics: "2-Value vs 3-Value 경곗값 분석(BVA), 의사결정 테이블(2^N 규칙), 0-스위치 vs 1-스위치 전이, 페어와이즈(Pairwise) 조합 압축",
  },
  {
    domain: "4. 동적 화이트박스 기법",
    weight: "약 25%",
    difficulty: "높음",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30 font-bold",
    keyTopics: "커버리지 위계(다중조건 ⟹ MC/DC ⟹ 조건/결정 ⟹ 결정 ⟹ 구문), MC/DC 독립 영향성 공식(N+1개), McCabe 순환 복잡도(E-N+2=P+1)",
  },
  {
    domain: "5. 테스트 관리 & 품질 표준",
    weight: "약 15%",
    difficulty: "보통",
    roi: "A (높음)",
    roiBadgeClass: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30 font-bold",
    keyTopics: "탐색적 테스팅(헌장/타임박스), 확인 테스트(Re-test) vs 회귀 테스트(Regression), 결함 주기, ISO/IEC 25010 8대 특성(개발 생산성 제외)",
  },
];

export default function CstsPage() {
  const router = useRouter();
  const startSession = useQuizStore((state) => state.startSession);

  const handleStartRealExam = () => {
    startSession(
      {
        subjects: CSTS_SUBJECTS,
        types: ["multiple_choice"],
      },
      { count: 20 }
    );
    router.push("/csts/quiz");
  };

  return (
    <main className="mx-auto flex w-full max-w-[780px] flex-1 flex-col gap-8 px-6 py-10 pb-20">
      {/* 타이틀 헤더 */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
            <ShieldCheck className="size-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            한국정보통신기술협회(TTA) 국가공인 민간자격
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
          CSTS (소프트웨어 테스트 전문가)
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          소프트웨어 테스트 국제 표준(ISO/IEC/IEEE 29119, ISO/IEC 25010) 기반의 핵심 이론부터
          화이트박스/블랙박스 설계 기법, MC/DC $N+1$ 공식, McCabe 순환 복잡도 계산까지!
          <strong> 60제 단답형 스피드 퀴즈</strong>, <strong>인터랙티브 마인드맵 & ROI 24선 전략 메모장</strong>,
          그리고 <strong>실전 기출 20제 복원 모의고사</strong>로 단기간에 70점 합격선을 돌파하세요.
        </p>
      </div>

      {/* 3대 핵심 학습 모듈 카드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* [모듈 1] 60제 스피드 퀴즈 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-indigo-500/40 bg-indigo-500/[0.04] p-5 shadow-sm transition-all hover:border-indigo-500 hover:shadow-indigo-500/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <Zap className="size-5 fill-current text-amber-300" />
              </span>
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[11px] font-bold text-indigo-800 dark:text-indigo-300">
                60문항 플래시카드
              </span>
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight text-foreground">
                60제 단답형 스피드 퀴즈
              </h2>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                3초 안에 핵심 키워드를 떠올리는 플래시카드 트레이닝! 기본 원리부터 품질 표준까지 6개 챕터 전수 수록.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href="/csts/speed-quiz"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full h-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold gap-1.5 text-xs shadow-md"
              )}
            >
              <span>스피드 퀴즈 풀기</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* [모듈 2] 마인드맵 & ROI 메모장 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-indigo-500/50 hover:shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-slate-800 shadow-sm">
                <Flame className="size-5 fill-current text-amber-400" />
              </span>
              <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-bold text-amber-800 dark:text-amber-300">
                ROI 24선 + 도식 10선
              </span>
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight text-foreground">
                마인드맵 & ROI 메모장
              </h2>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                5대 영역 체계도와 우측 하단 플로팅 전략 메모장(핵심 24선, 단골 함정 10제, 직전 치트시트) 탑재.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href="/csts/mindmap"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full h-10 border-border hover:bg-muted font-bold gap-1.5 text-xs"
              )}
            >
              <span>마인드맵 열기</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* [모듈 3] 실전 기출 20제 모의고사 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] p-5 shadow-sm transition-all hover:border-emerald-500 hover:shadow-sm">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                <CheckCircle2 className="size-5" />
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                실전 4지선다 20제
              </span>
            </div>
            <div>
              <h2 className="text-base font-bold tracking-tight text-foreground">
                실전 기출 복원 모의고사
              </h2>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                실제 출제 기준을 100% 반영한 4지선다 20문항 실전 응시 및 즉시 채점, 영역별 합격선 분석 리포트.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <button
              type="button"
              onClick={handleStartRealExam}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full h-10 border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300 font-bold gap-1.5 text-xs"
              )}
            >
              <span>모의고사 시작</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 도메인별 출제 비중 및 학습 ROI 총괄표 */}
      <section className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-base font-bold tracking-tight text-foreground">
              CSTS 영역별 출제 비중 및 학습 득점 ROI 총괄표
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            출제 문항 수와 득점 용이성 기준 — 블랙박스·화이트박스 설계 기법에서 고득점을 확보하는 것이 합격의 열쇠입니다.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/60 text-muted-foreground font-semibold border-b border-border">
              <tr>
                <th className="px-3.5 py-3">시험 영역</th>
                <th className="px-3 py-3 text-center">출제 비중</th>
                <th className="px-3 py-3 text-center">체감 난이도</th>
                <th className="px-3 py-3 text-center">학습 ROI</th>
                <th className="px-3.5 py-3">핵심 출제 테마 & 득점 공식</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {DOMAIN_ROI_TABLE.map((row) => (
                <tr key={row.domain} className="hover:bg-muted/30 transition-colors">
                  <td className="px-3.5 py-3 font-semibold text-foreground whitespace-nowrap">
                    {row.domain}
                  </td>
                  <td className="px-3 py-3 text-center font-medium text-foreground whitespace-nowrap">
                    {row.weight}
                  </td>
                  <td className="px-3 py-3 text-center text-muted-foreground whitespace-nowrap">
                    {row.difficulty}
                  </td>
                  <td className="px-3 py-3 text-center whitespace-nowrap">
                    <span className={cn("inline-block rounded px-2 py-0.5 text-[11px]", row.roiBadgeClass)}>
                      {row.roi}
                    </span>
                  </td>
                  <td className="px-3.5 py-3 text-muted-foreground leading-relaxed">
                    {row.keyTopics}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 시험 직전 5대 핵심 공식 치트시트 카드 */}
      <section className="flex flex-col gap-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.03] dark:bg-indigo-950/20 p-6 shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-base font-bold tracking-tight text-foreground">
            시험 직전 5대 핵심 암기 공식 & 치트시트
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-indigo-500/20 bg-background/80 p-3.5 space-y-1">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
              1. 커버리지 포함 위계 (100% 보장 관계)
            </span>
            <p className="text-foreground leading-relaxed">
              다중 조건($2^N$) ⟹ MC/DC($N+1$) ⟹ 조건/결정 ⟹ <strong>결정(분기)</strong> ⟹ <strong>구문(문장)</strong>
            </p>
            <p className="text-muted-foreground text-[11px]">
              * 결정 커버리지 100% 만족 시 구문 100% 자동 보장! (조건 커버리지는 결정 커버리지 보장 X)
            </p>
          </div>

          <div className="rounded-xl border border-indigo-500/20 bg-background/80 p-3.5 space-y-1">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
              2. MC/DC 최소 테스트 케이스 수
            </span>
            <p className="text-foreground font-semibold leading-relaxed">
              최소 케이스 수 = <span className="text-rose-600 dark:text-rose-400">N + 1개</span>
            </p>
            <p className="text-muted-foreground text-[11px]">
              (N: 개별 조건식의 수. 항공 DO-178C, 자동차 ISO 26262 안전 필수 표준)
            </p>
          </div>

          <div className="rounded-xl border border-indigo-500/20 bg-background/80 p-3.5 space-y-1">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
              3. 매케이브 순환 복잡도 공식
            </span>
            <p className="text-foreground font-semibold leading-relaxed">
              V(G) = <span className="text-indigo-600 dark:text-indigo-400">E - N + 2</span> = P + 1 = 닫힌 영역 + 1
            </p>
            <p className="text-muted-foreground text-[11px]">
              (E: 간선 수, N: 노드 수, P: 조건 분기 노드 수)
            </p>
          </div>

          <div className="rounded-xl border border-indigo-500/20 bg-background/80 p-3.5 space-y-1">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
              4. 2-Value vs 3-Value 경곗값 분석 (1~100)
            </span>
            <p className="text-foreground leading-relaxed">
              - 2-Value: <span className="font-bold">{`{0, 1, 100, 101}`}</span> (경계 + 바깥)<br/>
              - 3-Value: <span className="font-bold">{`{0, 1, 2, 99, 100, 101}`}</span> (안쪽 + 경계 + 바깥)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
