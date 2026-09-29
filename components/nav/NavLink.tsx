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
  variant: "sidebar" | "pill";
}

export function NavLink({ item, variant }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = item.matchPrefixes.some((prefix) =>
    isPrefixActive(pathname, prefix)
  );
  const Icon = item.icon;

  if (variant === "pill") {
    return (
      <Link
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "flex min-h-11 items-center gap-1.5 rounded-full border px-3 text-sm font-medium whitespace-nowrap transition-colors",
          isActive
            ? "border-primary bg-primary text-primary-foreground"
            : "border-sidebar-border bg-background text-foreground hover:bg-muted"
        )}
      >
        <Icon className="size-4" />
        {item.pillLabel ?? item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center gap-2.5 rounded-lg px-3 text-sm font-medium transition-colors",
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="size-4" />
      {item.label}
      {item.status === "coming-soon" && (
        <span className="ml-auto rounded-full bg-sidebar-accent px-1.5 py-0.5 text-[10px] font-medium text-sidebar-accent-foreground/70">
          준비중
        </span>
      )}
    </Link>
  );
}
