import { ListChecks, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  pillLabel?: string;
  icon: LucideIcon;
  matchPrefixes: string[];
  status?: "available" | "coming-soon";
}

export interface NavGroup {
  id: string;
  label: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "security",
    label: "정보보안기사",
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
    items: [
      {
        href: "/processing",
        label: "퀴즈",
        pillLabel: "처리 퀴즈 준비중",
        icon: ListChecks,
        matchPrefixes: ["/processing"],
        status: "coming-soon",
      },
      {
        href: "/processing/mindmap",
        label: "마인드맵",
        pillLabel: "처리 마인드맵",
        icon: Network,
        matchPrefixes: ["/processing/mindmap"],
      },
    ],
  },
  {
    id: "bigdata",
    label: "빅데이터분석기사+Adsp",
    items: [
      {
        href: "/bigdata",
        label: "퀴즈",
        pillLabel: "빅데이터 퀴즈 준비중",
        icon: ListChecks,
        matchPrefixes: ["/bigdata"],
        status: "coming-soon",
      },
      {
        href: "/bigdata/mindmap",
        label: "마인드맵",
        pillLabel: "빅데이터 마인드맵",
        icon: Network,
        matchPrefixes: ["/bigdata/mindmap"],
      },
    ],
  },
  {
    id: "linux",
    label: "리눅스마스터 2급",
    items: [
      {
        href: "/linux",
        label: "퀴즈",
        pillLabel: "리눅스 퀴즈 준비중",
        icon: ListChecks,
        matchPrefixes: ["/linux"],
        status: "coming-soon",
      },
      {
        href: "/linux/mindmap",
        label: "마인드맵",
        pillLabel: "리눅스 마인드맵",
        icon: Network,
        matchPrefixes: ["/linux/mindmap"],
      },
    ],
  },
  {
    id: "telecom",
    label: "정보통신기사",
    items: [
      {
        href: "/telecom",
        label: "퀴즈",
        pillLabel: "정보통신 퀴즈 준비중",
        icon: ListChecks,
        matchPrefixes: ["/telecom"],
        status: "coming-soon",
      },
      {
        href: "/telecom/mindmap",
        label: "마인드맵",
        pillLabel: "정보통신 마인드맵",
        icon: Network,
        matchPrefixes: ["/telecom/mindmap"],
      },
    ],
  },
  {
    id: "netadmin",
    label: "네트워크관리사 1·2급",
    items: [
      {
        href: "/netadmin",
        label: "퀴즈",
        pillLabel: "네트워크관리사 퀴즈 준비중",
        icon: ListChecks,
        matchPrefixes: ["/netadmin"],
        status: "coming-soon",
      },
      {
        href: "/netadmin/mindmap",
        label: "마인드맵",
        pillLabel: "네트워크관리사 마인드맵",
        icon: Network,
        matchPrefixes: ["/netadmin/mindmap"],
      },
    ],
  },
  {
    id: "aws-saa",
    label: "AWS SAA",
    items: [
      {
        href: "/aws-saa",
        label: "퀴즈",
        pillLabel: "AWS SAA 퀴즈",
        icon: ListChecks,
        matchPrefixes: ["/aws-saa", "/aws-saa/quiz", "/aws-saa/result"],
      },
      {
        href: "/aws-saa/mindmap",
        label: "마인드맵",
        pillLabel: "AWS SAA 마인드맵",
        icon: Network,
        matchPrefixes: ["/aws-saa/mindmap"],
      },
    ],
  },
];
