"use client";

import { NAV_ITEMS } from "@/components/nav/nav-items";
import { NavLink } from "@/components/nav/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SidebarNav() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground print:hidden md:flex">
      <div className="px-4 py-5">
        <span className="text-sm font-semibold tracking-tight">
          infoshield-quiz
        </span>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} variant="sidebar" />
        ))}
      </nav>
      <div className="flex items-center justify-between border-t border-sidebar-border px-4 py-3">
        <span className="text-xs text-sidebar-foreground/60">테마</span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
