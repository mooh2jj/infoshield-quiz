"use client";

import { NAV_ITEMS } from "@/components/nav/nav-items";
import { NavLink } from "@/components/nav/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

export function MobileTopBar() {
  return (
    <div className="sticky top-0 z-40 flex h-12 items-center justify-between gap-2 border-b border-sidebar-border bg-sidebar px-3 print:hidden md:hidden">
      <nav className="flex items-center gap-2 overflow-x-auto">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} item={item} variant="pill" />
        ))}
      </nav>
      <ThemeToggle />
    </div>
  );
}
