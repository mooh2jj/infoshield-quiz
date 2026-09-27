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
    description: "5개 챕터 마인드맵 공개 · 퀴즈는 준비 중",
    href: "/bigdata",
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
