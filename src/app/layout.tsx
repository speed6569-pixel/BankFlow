import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "BankFlow",
  description: "신뢰감 있는 디지털 뱅킹 경험을 시연하기 위한 금융 서비스 MVP 웹사이트",
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
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-500 md:px-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-primary">BANKFLOW</p>
              <p className="mt-3 max-w-xl leading-6 text-slate-600">
                디지털 뱅킹 UX, AWS 아키텍처, AI 상담 시나리오를 하나의 흐름으로 시연하는 금융
                서비스 MVP입니다.
              </p>
            </div>
            <div className="flex gap-5">
              <Link href="/products" className="hover:text-slate-900">
                금융상품
              </Link>
              <Link href="/ai-chat" className="hover:text-slate-900">
                AI 챗봇
              </Link>
              <Link href="/transfer" className="hover:text-slate-900">
                이체 시뮬레이션
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
