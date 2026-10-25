import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  Zap,
  Network,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "정보관리기술사 (ITPE) | infoshield-quiz",
  description:
    "정보관리기술사 6대 도메인 인터랙티브 마인드맵, 기출빈도 ROI 전략 메모장, 105문항 단답형 스피드 퀴즈",
};

interface DomainRoiRow {
  domain: string;
  weight: string;
  difficulty: string;
  roi: string;
  roiBadgeClass: string;
  trends: string;
}

const DOMAIN_ROI_TABLE: DomainRoiRow[] = [
  {
    domain: "1. 정보 전략 및 관리 (ISP/PM/감리)",
    weight: "14%",
    difficulty: "낮음",
    roi: "A (높음)",
    roiBadgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    trends: "AI 거버넌스(ISO/IEC 42001), 생성형 AI 대가산정, DPG, 공공 SW 법제도 중심 방어",
  },
  {
    domain: "2. 소프트웨어 공학 (SW Eng.)",
    weight: "22%",
    difficulty: "중간",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30 font-bold",
    trends: "MSA 분산 트랜잭션(Saga/Outbox), 플랫폼 엔지니어링(IDP), ISO 25010:2023(Safety), STPA 필수",
  },
  {
    domain: "3. 자료처리 및 빅데이터 (DB/Data)",
    weight: "20%",
    difficulty: "높음",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30 font-bold",
    trends: "Vector DB(HNSW), 하이브리드 검색(RRF), Lakehouse(Iceberg)/Data Mesh, MVCC, ISO 5259",
  },
  {
    domain: "4. 컴퓨터 시스템 및 통신 (CA/OS/NW)",
    weight: "12%",
    difficulty: "매우 높음",
    roi: "B (보통)",
    roiBadgeClass: "bg-muted text-muted-foreground border-border",
    trends: "eBPF/Cilium 사이드카리스, AI 반도체(HBM/CXL), Karpenter, HTTP/3 QUIC, 6G NTN",
  },
  {
    domain: "5. 정보보안 (Security)",
    weight: "16%",
    difficulty: "중간",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30 font-bold",
    trends: "국가망보안체계(N2SF/MLS), 제로트러스트 2.0, 양자내성암호(NIST 표준), OWASP LLM Top 10",
  },
  {
    domain: "6. 최신 기술, 법규 및 정책 (AI/Law)",
    weight: "16% (급증)",
    difficulty: "중간",
    roi: "S (최고)",
    roiBadgeClass: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30 font-bold",
    trends: "추론형 AI(Test-Time Compute), GraphRAG, Agentic AI(MCP/A2A), 인공지능기본법(2026 시행)",
  },
];

export default function ItpePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-12 pb-24">
      {/* 헤더 섹션 */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-rose-500/10 px-2.5 py-1 text-xs font-bold text-rose-600 dark:text-rose-400">
            2026 최신 기출 트렌드 반영
          </span>
          <span className="text-xs text-muted-foreground">
            ITPE 전문 기술사 통합 전략
          </span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          정보관리기술사 (ITPE)
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          방대한 기술사 범위를 체계화한 <strong>6대 도메인 마인드맵</strong>,
          최신 법제도와 기출 빈도를 집약한 <strong>기출빈도 ROI 전략 메모장(42선)</strong>,
          그리고 3초 안에 핵심 키워드를 떠올리는 <strong>단답형 스피드 퀴즈(105문항)</strong>를 제공합니다.
        </p>
      </div>

      {/* 스피드 퀴즈 히어로 배너 */}
      <div className="relative overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/15 via-orange-500/10 to-transparent p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-lg bg-rose-600 text-white shadow-sm">
                <Zap className="size-3.5 fill-white" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                SPEED QUIZ
              </span>
              <span className="rounded bg-rose-500/20 px-2 py-0.5 text-[11px] font-semibold text-rose-700 dark:text-rose-300">
                105문항 완비
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              정보관리기술사 단답형 스피드 퀴즈
            </h2>
            <p className="text-xs text-muted-foreground sm:text-sm">
              3초 안에 정답을 빠르게 떠올리는 6대 도메인 핵심 기출 & 킬러 토픽 플래시카드 트레이닝
            </p>
          </div>
          <Link
            href="/itpe/speed-quiz"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-11 shrink-0 gap-2 bg-gradient-to-r from-rose-600 to-orange-600 font-bold text-white shadow-md hover:from-rose-700 hover:to-orange-700 transition-all"
            )}
          >
            <Zap className="size-4 fill-current" />
            스피드 퀴즈 시작
          </Link>
        </div>
      </div>

      {/* 2대 핵심 기능 바로가기 카드 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/itpe/mindmap"
          className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-rose-500/50 hover:shadow-md"
        >
          <div className="flex flex-col gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Network className="size-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                6대 도메인 마인드맵
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                정보전략, SW공학, DB, 컴퓨터/NW, 정보보안, 최신기술/법규 전체 구조를 한눈에 조망하는 인터랙티브 다이어그램
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
            <span>마인드맵 전체 탐색</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        <Link
          href="/itpe/mindmap"
          className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-amber-500/50 hover:shadow-md"
        >
          <div className="flex flex-col gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
              <Flame className="size-5 fill-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                기출빈도 ROI 전략 메모장
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                S등급 최우선 토픽, 2026년 법제도(N2SF, 인공지능기본법), 실전 1페이지 모범답안 개념도 및 채점 함정 수록
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <span>ROI 메모장 열기</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>

      {/* 도메인별 출제 비중 및 학습 ROI 총괄표 */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <TrendingUp className="size-5 text-rose-600" />
              도메인별 출제 비중 및 학습 ROI 총괄표
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              배점이 높고 매회 출제되는 S등급 영역(SW공학, DB, 보안, 최신AI)에 70% 이상 집중해야 합니다.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border bg-muted/50 font-semibold text-muted-foreground">
              <tr>
                <th className="px-4 py-3">도메인 분류</th>
                <th className="px-3 py-3 text-center">출제 비중</th>
                <th className="px-3 py-3 text-center">난이도</th>
                <th className="px-3 py-3 text-center">득점 ROI</th>
                <th className="px-4 py-3">2025~2026 핵심 출제 트렌드 및 전략</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {DOMAIN_ROI_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.domain}
                  </td>
                  <td className="px-3 py-3 text-center font-semibold text-foreground">
                    {row.weight}
                  </td>
                  <td className="px-3 py-3 text-center text-muted-foreground">
                    {row.difficulty}
                  </td>
                  <td className="px-3 py-3 text-center">
                    <span
                      className={cn(
                        "inline-block rounded-md border px-2 py-0.5 text-[11px]",
                        row.roiBadgeClass
                      )}
                    >
                      {row.roi}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground leading-relaxed">
                    {row.trends}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2대 실전 모범 답안 쇼케이스 배너 */}
      <div className="rounded-2xl border border-border bg-gradient-to-r from-muted/60 to-muted/20 p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-foreground font-bold text-base">
          <BookOpen className="size-5 text-rose-600" />
          <span>실전 서술형(25점) 모범 답안 예시 탑재</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          마인드맵 화면의 플로팅 메모장에서 실제 시험장 답안지에 그대로 적용할 수 있는 텍스트 개념도와 비교표를 확인할 수 있습니다.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-lg border border-border/80 bg-background p-3.5 flex flex-col gap-1">
            <span className="font-bold text-foreground">
              [모범 답안 1] GraphRAG vs Agentic RAG
            </span>
            <span className="text-muted-foreground">
              Leiden 클러스터링 기반 지식 그래프 구축, Local/Global Search 및 에이전트 자율 재검색 루프
            </span>
          </div>
          <div className="rounded-lg border border-border/80 bg-background p-3.5 flex flex-col gap-1">
            <span className="font-bold text-foreground">
              [모범 답안 2] Saga 패턴 & Transactional Outbox
            </span>
            <span className="text-muted-foreground">
              Choreography vs Orchestration 비교, Debezium CDC를 통한 이중 쓰기 방지 및 소비자 멱등성 보장
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
