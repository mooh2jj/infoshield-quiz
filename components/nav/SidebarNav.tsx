"use client";

import { NAV_GROUPS } from "@/components/nav/nav-items";
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
      <nav className="flex flex-1 flex-col gap-4 px-3">
        {NAV_GROUPS.map((group) => (
          <div key={group.id} className="flex flex-col gap-1">
            <div className="px-3 py-1">
              <span className="text-xs font-semibold text-sidebar-foreground/60">
                {group.label}
              </span>
            </div>
            {group.items.map((item) => (
              <NavLink key={item.href + item.label} item={item} variant="sidebar" />
            ))}
          </div>
        ))}
      </nav>
      <div className="flex items-center justify-between border-t border-sidebar-border px-4 py-3">
        <span className="text-xs text-sidebar-foreground/60">테마</span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
