"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/components/nav/nav-items";

const EXACT_ONLY_PREFIXES = new Set([
  "/",
  "/security",
  "/processing",
  "/bigdata",
  "/linux",
  "/telecom",
  "/netadmin",
  "/aws-saa",
  "/electronics",
  "/semicon-layout",
  "/cppg",
  "/aice",
]);

function isPrefixActive(pathname: string, prefix: string): boolean {
  if (EXACT_ONLY_PREFIXES.has(prefix)) return pathname === prefix;
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

interface NavLinkProps {
  item: NavItem;
  variant: "sidebar" | "pill" | "drawer";
  onClick?: () => void;
}

export function NavLink({ item, variant, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = item.matchPrefixes.some((prefix) =>
    isPrefixActive(pathname, prefix)
  );
  const Icon = item.icon;

  if (variant === "pill") {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium whitespace-nowrap transition-colors",
          isActive
            ? "border-primary bg-primary text-primary-foreground font-semibold shadow-xs"
            : "border-sidebar-border bg-sidebar text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
        )}
      >
        <Icon className="size-3.5" />
        {item.pillLabel ?? item.label}
      </Link>
    );
  }

  if (variant === "drawer") {
    return (
      <Link
        href={item.href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "flex min-h-10 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors select-none",
          isActive
            ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-xs"
            : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground active:bg-sidebar-accent/80"
        )}
      >
        <Icon className="size-4 shrink-0" />
        <span className="truncate">{item.label}</span>
        {item.status === "coming-soon" && (
          <span className="ml-auto rounded bg-sidebar-accent/80 px-1.5 py-0.5 text-[10px] font-medium text-sidebar-foreground/60">
            준비중
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex min-h-8 items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors",
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
      )}
    >
      <Icon className="size-3.5 shrink-0" />
      <span className="truncate">{item.label}</span>
      {item.status === "coming-soon" && (
        <span className="ml-auto rounded bg-sidebar-accent/80 px-1 py-0.2 text-[9px] font-medium text-sidebar-foreground/60">
          준비중
        </span>
      )}
    </Link>
  );
}
