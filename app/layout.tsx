import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "pretendard/dist/web/variable/pretendardvariable.css";
import "./globals.css";
import { HydrateStores } from "@/components/HydrateStores";
import { ThemeToggle } from "@/components/ThemeToggle";

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
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HydrateStores />
          <div className="flex justify-end px-2 py-2">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
