"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronsDownUp, ChevronsUpDown, Home } from "lucide-react";
import { NAV_GROUPS } from "@/components/nav/nav-items";
import { NavLink } from "@/components/nav/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function SidebarNav() {
  const pathname = usePathname();

  // 사용자가 수동으로 토글한 상태만 기록 (true: 강제 열림, false: 강제 닫힘)
  const [manualToggleState, setManualToggleState] = useState<Record<string, boolean>>({});

  // 현재 활성화된 자격증 그룹 ID 계산
  const activeGroupId = useMemo(() => {
    for (const group of NAV_GROUPS) {
      const isGroupActive = group.items.some((item) =>
        item.matchPrefixes.some((prefix) =>
          prefix === "/"
            ? pathname === "/"
            : pathname === prefix || pathname.startsWith(`${prefix}/`)
        )
      );
      if (isGroupActive) return group.id;
    }
    return null;
  }, [pathname]);

  // 각 그룹의 최종 열림/닫힘 상태 판별
  // 1순위: 사용자가 수동으로 토글한 상태
  // 2순위: 현재 방문 중인 그룹이면 기본 열림
  // 3순위: 기본적으로 닫힌 상태 (컴팩트 뷰 유지)
  function isGroupOpen(groupId: string): boolean {
    if (groupId in manualToggleState) {
      return manualToggleState[groupId];
    }
    return groupId === activeGroupId;
  }

  function toggleGroup(groupId: string) {
    setManualToggleState((prev) => ({
      ...prev,
      [groupId]: !isGroupOpen(groupId),
    }));
  }

  const allExpanded = NAV_GROUPS.every((g) => isGroupOpen(g.id));

  function toggleAll() {
    const nextState = !allExpanded;
    const newState: Record<string, boolean> = {};
    for (const group of NAV_GROUPS) {
      newState[group.id] = nextState;
    }
    setManualToggleState(newState);
  }

  const isHomeActive = pathname === "/";

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground print:hidden md:flex">
      {/* 사이드바 상단 로고 */}
      <div className="flex shrink-0 items-center justify-between px-4 py-4 border-b border-sidebar-border/60">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xs">
            IS
          </div>
          <span className="text-sm font-semibold tracking-tight">
            infoshield-quiz
          </span>
        </Link>
      </div>

      {/* 홈 버튼 & 자격증 헤더 툴바 */}
      <div className="flex shrink-0 flex-col gap-1 px-3 pt-3">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
            isHomeActive
              ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
          )}
        >
          <Home className="size-4 shrink-0" />
          <span>전체 자격증 홈</span>
        </Link>

        <div className="mt-2 flex items-center justify-between px-2 pb-1 text-[11px] font-semibold text-sidebar-foreground/50">
          <span>자격증 목록 ({NAV_GROUPS.length})</span>
          <button
            type="button"
            onClick={toggleAll}
            className="flex items-center gap-1 rounded px-1.5 py-0.5 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            title={allExpanded ? "모두 접기" : "모두 펼치기"}
          >
            {allExpanded ? (
              <>
                <ChevronsDownUp className="size-3" />
                <span>모두 접기</span>
              </>
            ) : (
              <>
                <ChevronsUpDown className="size-3" />
                <span>모두 펼치기</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 아코디언 네비게이션 스크롤 영역 */}
      <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-2">
        {NAV_GROUPS.map((group) => {
          const isOpen = isGroupOpen(group.id);
          const isCurrentActive = group.id === activeGroupId;

          // 퀴즈 서비스 제공 여부 (준비중 여부 판별)
          const isQuizAvailable = group.items.some(
            (i) => i.href.includes("quiz") || (i.label === "퀴즈" && i.status !== "coming-soon")
          );

          return (
            <div key={group.id} className="flex flex-col">
              {/* 자격증 그룹 헤더 토글 버튼 */}
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isOpen}
                className={cn(
                  "group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors select-none",
                  isCurrentActive
                    ? "bg-sidebar-accent/70 font-semibold text-sidebar-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={cn(
                      "size-1.5 shrink-0 rounded-full",
                      isCurrentActive
                        ? "bg-primary"
                        : isQuizAvailable
                        ? "bg-emerald-500"
                        : "bg-sidebar-foreground/30"
                    )}
                  />
                  <span className="truncate">{group.label}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {isQuizAvailable && (
                    <span className="rounded bg-emerald-500/10 px-1 py-0.2 text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
                      퀴즈
                    </span>
                  )}
                  <ChevronDown
                    className={cn(
                      "size-3.5 text-sidebar-foreground/50 transition-transform duration-200 group-hover:text-sidebar-foreground",
                      isOpen && "rotate-180"
                    )}
                  />
                </div>
              </button>

              {/* 하위 메뉴 (퀴즈 / 마인드맵) - 아코디언 바디 */}
              {isOpen && (
                <div className="ml-3.5 flex flex-col border-l border-sidebar-border/70 pl-2.5 pt-0.5 pb-1 space-y-0.5">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.href + item.label}
                      item={item}
                      variant="sidebar"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* 사이드바 하단 테마 토글 */}
      <div className="flex shrink-0 items-center justify-between border-t border-sidebar-border px-4 py-3">
        <span className="text-xs text-sidebar-foreground/60">테마 설정</span>
        <ThemeToggle />
      </div>
    </aside>
  );
}
