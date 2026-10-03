"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronsDownUp,
  ChevronsUpDown,
  Home,
  X,
} from "lucide-react";
import { NAV_GROUPS } from "@/components/nav/nav-items";
import { NavLink } from "@/components/nav/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileSidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebarDrawer({
  isOpen,
  onClose,
}: MobileSidebarDrawerProps) {
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

  // 페이지 이동 시 드로어 자동 닫기
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // 드로어 열림 상태일 때 배경 스크롤 잠금 & ESC 키 닫기
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // 각 그룹의 열림/닫힘 상태 판별
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
      {/* 1. 어두운 반투명 배경 (Backdrop) */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. 슬라이드오버 드로어 컨테이너 */}
      <aside
        className="fixed inset-y-0 left-0 flex h-full w-[85vw] max-w-[320px] flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-2xl animate-in slide-in-from-left duration-250 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="모바일 내비게이션 메뉴"
      >
        {/* 상단 헤더: 로고 + 닫기 버튼 */}
        <div className="flex shrink-0 items-center justify-between border-b border-sidebar-border/70 px-4 py-3.5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs shadow-xs">
              IS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-sidebar-foreground">
                infoshield-quiz
              </span>
              <span className="text-[10px] text-sidebar-foreground/60 leading-tight">
                자격증 퀴즈 & 마인드맵
              </span>
            </div>
          </Link>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="size-8 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground rounded-lg"
            aria-label="메뉴 닫기"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* 상단 퀵 네비게이션: 전체 홈 버튼 */}
        <div className="shrink-0 px-3 pt-3">
          <Link
            href="/"
            onClick={onClose}
            className={cn(
              "flex min-h-10 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors select-none",
              isHomeActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-xs"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
            )}
          >
            <Home className="size-4 shrink-0" />
            <span>전체 자격증 홈</span>
          </Link>

          <div className="mt-3 flex items-center justify-between px-2 pb-1 text-[11px] font-semibold text-sidebar-foreground/60">
            <span>자격증 목록 ({NAV_GROUPS.length})</span>
            <button
              type="button"
              onClick={toggleAll}
              className="flex items-center gap-1 rounded px-2 py-1 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground active:bg-sidebar-accent/80"
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

        {/* 중앙: 터치 친화적 아코디언 메뉴 스크롤 영역 */}
        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-1.5 overscroll-contain">
          {NAV_GROUPS.map((group) => {
            const isOpen = isGroupOpen(group.id);
            const isCurrentActive = group.id === activeGroupId;

            const isQuizAvailable = group.items.some(
              (i) => i.href.includes("quiz") || (i.label === "퀴즈" && i.status !== "coming-soon")
            );

            return (
              <div key={group.id} className="flex flex-col">
                {/* 자격증 그룹 버튼 (터치 높이 42px 보장) */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  aria-expanded={isOpen}
                  className={cn(
                    "group flex min-h-[42px] w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors select-none",
                    isCurrentActive
                      ? "bg-sidebar-accent/75 font-semibold text-sidebar-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 active:bg-sidebar-accent/70 hover:text-sidebar-foreground"
                  )}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span
                      className={cn(
                        "size-2 shrink-0 rounded-full",
                        isCurrentActive
                          ? "bg-primary ring-2 ring-primary/20"
                          : isQuizAvailable
                          ? "bg-emerald-500"
                          : "bg-sidebar-foreground/30"
                      )}
                    />
                    <span className="truncate">{group.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {isQuizAvailable && (
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                        퀴즈
                      </span>
                    )}
                    <ChevronDown
                      className={cn(
                        "size-4 text-sidebar-foreground/50 transition-transform duration-200 group-hover:text-sidebar-foreground",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>
                </button>

                {/* 하위 세부 링크들 */}
                {isOpen && (
                  <div className="ml-4 flex flex-col border-l border-sidebar-border/70 pl-2.5 pt-1 pb-1 space-y-1">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.href + item.label}
                        item={item}
                        variant="drawer"
                        onClick={onClose}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* 하단 푸터: 테마 설정 */}
        <div className="flex shrink-0 items-center justify-between border-t border-sidebar-border/70 px-4 py-3 bg-sidebar/50">
          <span className="text-xs font-medium text-sidebar-foreground/70">
            화면 테마 설정
          </span>
          <ThemeToggle />
        </div>
      </aside>
    </div>
  );
}
