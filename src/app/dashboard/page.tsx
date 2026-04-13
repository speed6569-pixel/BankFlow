import Link from "next/link";

import { DashboardCard } from "@/components/dashboard-card";
import { dashboardMetrics, recentTransactions } from "@/data/demo";

export default function DashboardPage() {
  return (
    <section className="section-shell">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold text-cyan-700">사용자 대시보드</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            금융 현황과 AI 추천을 한 번에 보는 메인 화면
          </h1>
          <p className="section-copy max-w-3xl">
            계좌 요약, 소비 분석, 최근 거래, 다음 액션을 함께 보여주는 구조로 설계했습니다.
          </p>
        </div>
        <Link
          href="/transfer"
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          이체 시뮬레이션 열기
        </Link>
      </div>

      <div className="card-grid">
        {dashboardMetrics.map((item) => (
          <DashboardCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-cyan-700">최근 거래 내역</p>
          <div className="mt-5 space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={`${transaction.date}-${transaction.title}`}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4"
              >
                <div>
                  <p className="font-medium text-slate-900">{transaction.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {transaction.date} · {transaction.type}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-900">{transaction.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold text-cyan-700">AI 요약 브리핑</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              이번 주 소비는 안정적이지만, 식비와 구독비가 소폭 상승했습니다. 자동 저축 목표를 유지하면
              월말 예상 잔액은 플러스 흐름을 유지할 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
            <p className="text-sm font-semibold text-cyan-300">추천 액션</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• 생활 안정 적금 월 50만원 유지</li>
              <li>• AI 챗봇에서 소비 패턴 분석 실행</li>
              <li>• 자동이체 일정 재확인</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
