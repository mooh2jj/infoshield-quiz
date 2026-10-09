import Link from "next/link";
import { cn } from "@/lib/utils";

interface CertificationCard {
  id: string;
  label: string;
  description: string;
  href: string;
  status: "available" | "coming-soon";
}

const CERTIFICATIONS: CertificationCard[] = [
  {
    id: "security",
    label: "정보보안기사",
    description: "시스템·네트워크·애플리케이션 보안 퀴즈와 마인드맵",
    href: "/security",
    status: "available",
  },
  {
    id: "processing",
    label: "정보처리기사",
    description: "5개 과목 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/processing",
    status: "coming-soon",
  },
  {
    id: "bigdata",
    label: "빅데이터분석기사",
    description: "4개 필기 과목 + 실기 작업형 마인드맵 · 핵심 실전 퀴즈",
    href: "/bigdata",
    status: "available",
  },
  {
    id: "adsp",
    label: "ADsP (데이터분석 준전문가)",
    description: "3개 과목 마인드맵 · 82제 스피드 퀴즈 · 최신 기출 4지선다",
    href: "/adsp",
    status: "available",
  },
  {
    id: "sqld",
    label: "SQLD (SQL 개발자)",
    description: "4개 파트 마인드맵 · 핵심 ROI 실전 퀴즈",
    href: "/sqld",
    status: "available",
  },
  {
    id: "linux",
    label: "리눅스마스터 2급",
    description: "5개 챕터 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/linux",
    status: "coming-soon",
  },
  {
    id: "telecom",
    label: "정보통신기사",
    description: "5개 과목 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/telecom",
    status: "coming-soon",
  },
  {
    id: "netadmin",
    label: "네트워크관리사 1·2급",
    description: "5개 과목 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/netadmin",
    status: "coming-soon",
  },
  {
    id: "aws-saa",
    label: "AWS SAA",
    description: "4대 도메인 마인드맵 · 실전 시나리오 4지선다 퀴즈",
    href: "/aws-saa",
    status: "available",
  },
  {
    id: "electrical",
    label: "전기기사",
    description: "5개 과목 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/electrical",
    status: "coming-soon",
  },
  {
    id: "electronics",
    label: "전자기사",
    description: "4대 과목 + 실기 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/electronics",
    status: "coming-soon",
  },
  {
    id: "semicon-layout",
    label: "반도체커스텀레이아웃산업기사",
    description: "3대 과목 + 실기 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/semicon-layout",
    status: "coming-soon",
  },
  {
    id: "cppg",
    label: "CPPG(개인정보관리사)",
    description: "5대 영역 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/cppg",
    status: "coming-soon",
  },
  {
    id: "aice",
    label: "AICE Associate",
    description: "3단계 프로세스 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/aice",
    status: "coming-soon",
  },
  {
    id: "robot-sw",
    label: "로봇소프트웨어개발기사",
    description: "4과목 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/robot-sw",
    status: "coming-soon",
  },
  {
    id: "embedded",
    label: "임베디드기사",
    description: "4과목 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/embedded",
    status: "coming-soon",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-8 px-6 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          infoshield-quiz
        </h1>
        <p className="text-muted-foreground">준비할 자격증을 선택하세요.</p>
      </div>

      <div className="flex flex-col gap-3">
        {CERTIFICATIONS.map((cert) => (
          <Link
            key={cert.id}
            href={cert.href}
            className={cn(
              "flex flex-col gap-1 rounded-lg border border-border px-5 py-4 transition-colors hover:bg-muted",
              cert.status === "coming-soon" && "opacity-70"
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-base font-medium">{cert.label}</span>
              {cert.status === "coming-soon" && (
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  준비중
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{cert.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
