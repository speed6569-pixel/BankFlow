import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold text-cyan-700">로그인 데모 화면</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          실제 인증 대신 UX 흐름을 검증하는 간소화 로그인
        </h1>
        <p className="section-copy max-w-xl">
          MVP에서는 Amazon Cognito 연동을 가정하고, 발표 시연용으로는 빠르게 대시보드로 이동할 수
          있는 화면을 제공합니다.
        </p>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-cyan-700">데모 계정</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• ID: demo@bankflow.ai</li>
            <li>• PW: BankFlow!2026</li>
            <li>• 실제 인증 미구현, 시연용 이동 버튼 제공</li>
          </ul>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            이메일
            <input
              defaultValue="demo@bankflow.ai"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-700"
            />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            비밀번호
            <input
              type="password"
              defaultValue="BankFlow!2026"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-700"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            대시보드로 이동
          </Link>
          <Link
            href="/ai-chat"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
          >
            AI 상담 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
