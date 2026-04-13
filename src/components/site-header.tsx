"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/demo";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-700 font-bold text-white shadow-soft">
            B
          </div>
          <div>
            <p className="text-sm font-semibold text-cyan-700">BankFlow</p>
            <p className="text-xs text-slate-500">AWS + AI 금융 데모</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
