import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { HydrateStores } from "@/components/HydrateStores";
import { SidebarNav } from "@/components/nav/SidebarNav";
import { MobileTopBar } from "@/components/nav/MobileTopBar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "infoshield-quiz",
  description: "웹 개발자를 위한 정보보안기사 1분 트레이닝",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HydrateStores />
          <div className="app-shell-row flex min-h-dvh flex-col md:flex-row">
            <SidebarNav />
            <MobileTopBar />
            <div className="flex min-w-0 flex-1 flex-col">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
