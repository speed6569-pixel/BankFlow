import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "BankFlow",
  description: "1주일 MVP 기준으로 설계한 금융/은행 서비스 데모 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>BankFlow, AWS 아키텍처와 AI 금융 상담 흐름을 시연하는 MVP</p>
            <div className="flex gap-4">
              <Link href="/products" className="hover:text-slate-900">
                금융상품
              </Link>
              <Link href="/ai-chat" className="hover:text-slate-900">
                AI 챗봇
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
