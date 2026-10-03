"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_GROUPS } from "@/components/nav/nav-items";
import { NavLink } from "@/components/nav/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileSidebarDrawer } from "@/components/nav/MobileSidebarDrawer";
import { Button } from "@/components/ui/button";

export function MobileTopBar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 현재 방문 중인 자격증 그룹 탐색
  const currentGroup = useMemo(() => {
    for (const group of NAV_GROUPS) {
      const match = group.items.some((item) =>
        item.matchPrefixes.some((prefix) =>
          prefix === "/"
            ? pathname === "/"
            : pathname === prefix || pathname.startsWith(`${prefix}/`)
        )
      );
      if (match) return group;
    }
    return null;
  }, [pathname]);

  // 상단 서브 퀵 탭에 노출할 아이템들
  // 현재 접속한 자격증이 있으면 해당 자격증의 하위 메뉴(2~4개)만 깔끔하게 노출
  const quickItems = useMemo(() => {
    if (currentGroup) {
      return currentGroup.items;
    }
    // 루트(/) 메인 화면인 경우 주요 인기 자격증 퀵 링크 제공
    return NAV_GROUPS.slice(0, 5).map((g) => g.items[0]).filter(Boolean);
  }, [currentGroup]);

  return (
    <>
      <header className="sticky top-0 z-40 flex flex-col border-b border-sidebar-border bg-sidebar/95 backdrop-blur-md print:hidden md:hidden">
        {/* 1. 상단 메인 헤더: 햄버거 메뉴 버튼 + 로고 + 현재 위치 뱃지 + 테마 토글 */}
        <div className="flex h-13 items-center justify-between gap-3 px-3">
          <div className="flex items-center gap-2">
            {/* 햄버거 메뉴 트리거 버튼 (최소 36x36px 터치 영역) */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsDrawerOpen(true)}
              className="size-9 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent"
              aria-label="전체 자격증 메뉴 열기"
              title="전체 자격증 메뉴"
            >
              <Menu className="size-5" />
            </Button>

            {/* 서비스 로고 */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80 select-none"
            >
              <div className="flex size-6.5 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-xs shadow-xs">
                IS
              </div>
              <span className="text-sm font-bold tracking-tight text-sidebar-foreground">
                infoshield-quiz
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            {/* 현재 접속 중인 자격증 이름 뱃지 */}
            {currentGroup && (
              <span className="max-w-[120px] truncate rounded-full bg-sidebar-accent/80 px-2.5 py-1 text-[11px] font-semibold text-sidebar-accent-foreground border border-sidebar-border">
                {currentGroup.label}
              </span>
            )}

            {/* 테마 토글 */}
            <ThemeToggle />
          </div>
        </div>

        {/* 2. 하단 서브 퀵 탭: 현재 자격증의 하위 메뉴(개요, 퀴즈, 스피드 퀴즈, 마인드맵) 퀵 네비게이션 */}
        {quickItems.length > 0 && (
          <nav
            aria-label="현재 카테고리 퀵 메뉴"
            className="flex items-center gap-1.5 overflow-x-auto px-3 pb-2 pt-0.5 no-scrollbar"
          >
            {quickItems.map((item) => (
              <NavLink key={item.href + item.label} item={item} variant="pill" />
            ))}
          </nav>
        )}
      </header>

      {/* 모바일 슬라이드오버 사이드 드로어 */}
      <MobileSidebarDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
