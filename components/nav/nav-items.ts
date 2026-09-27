import { Clock, ListChecks, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  pillLabel?: string;
  icon: LucideIcon;
  matchPrefixes: string[];
}

export interface NavGroup {
  id: string;
  label: string;
  status: "available" | "coming-soon";
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "security",
    label: "정보보안기사",
    status: "available",
    items: [
      {
        href: "/security",
        label: "퀴즈",
        pillLabel: "보안 퀴즈",
        icon: ListChecks,
        matchPrefixes: ["/security", "/security/quiz", "/security/result"],
      },
      {
        href: "/security/mindmap",
        label: "마인드맵",
        pillLabel: "보안 마인드맵",
        icon: Network,
        matchPrefixes: ["/security/mindmap"],
      },
    ],
  },
  {
    id: "processing",
    label: "정보처리기사",
    status: "coming-soon",
    items: [
      {
        href: "/processing",
        label: "준비 중",
        pillLabel: "정보처리기사",
        icon: Clock,
        matchPrefixes: ["/processing"],
      },
    ],
  },
];
