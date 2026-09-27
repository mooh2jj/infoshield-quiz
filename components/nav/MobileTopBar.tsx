"use client";

import { NAV_GROUPS } from "@/components/nav/nav-items";
import { NavLink } from "@/components/nav/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";

export function MobileTopBar() {
  const items = NAV_GROUPS.flatMap((group) => group.items);

  return (
    <div className="sticky top-0 z-40 flex h-12 items-center justify-between gap-2 border-b border-sidebar-border bg-sidebar px-3 print:hidden md:hidden">
      <nav className="flex items-center gap-2 overflow-x-auto">
        {items.map((item) => (
          <NavLink key={item.href + item.label} item={item} variant="pill" />
        ))}
      </nav>
      <ThemeToggle />
    </div>
  );
}
