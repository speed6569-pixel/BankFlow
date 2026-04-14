import Link from "next/link";

import { DashboardCard } from "@/components/dashboard-card";
import { ProtectedRoute } from "@/components/protected-route";
import { dashboardMetrics, recentTransactions } from "@/data/demo";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <section className="section-shell">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-primary">ACCOUNT OVERVIEW</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
            자산 현황과 주요 액션을 정돈된 흐름으로 보여주는 대시보드
          </h1>
          <p className="section-copy max-w-3xl">
            잔액, 소비, AI 요약, 최근 거래 내역을 한 화면에서 확인할 수 있도록 은행 앱의 메인 화면처럼
            구성했습니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/transfer" className="primary-button">
            이체 시뮬레이션 열기
          </Link>
          <Link href="/ai-chat" className="secondary-button">
            AI 상담 연결
          </Link>
        </div>
      </div>

      <div className="card-grid">
        {dashboardMetrics.map((item) => (
          <DashboardCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface-panel">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-primary">최근 거래 내역</p>
            <span className="status-pill">최근 7일 기준</span>
          </div>
          <div className="mt-5 space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={`${transaction.date}-${transaction.title}`}
                className="data-row"
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
          <div className="surface-panel">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-primary">AI 요약 브리핑</p>
              <span className="status-pill">분석 완료</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              이번 주 소비는 안정적이지만, 식비와 구독비가 소폭 상승했습니다. 자동 저축 목표를 유지하면
              월말 예상 잔액은 플러스 흐름을 유지할 수 있습니다.
            </p>
          </div>

          <div className="surface-strong p-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-slate-300">RECOMMENDED ACTIONS</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>• 생활 안정 적금 월 50만원 유지</li>
              <li>• AI 챗봇에서 소비 패턴 분석 실행</li>
              <li>• 자동이체 일정 재확인</li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </ProtectedRoute>
  );
}
