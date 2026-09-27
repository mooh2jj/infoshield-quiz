import { ListChecks, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  matchPrefixes: string[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "퀴즈",
    icon: ListChecks,
    matchPrefixes: ["/", "/quiz", "/result"],
  },
  {
    href: "/mindmap",
    label: "마인드맵",
    icon: Network,
    matchPrefixes: ["/mindmap"],
  },
];
