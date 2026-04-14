import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold tracking-[0.16em] text-primary">SIGN IN FLOW</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
          실제 뱅킹 앱 진입 화면처럼 차분하게 설계한 로그인 데모
        </h1>
        <p className="section-copy max-w-xl">
          MVP에서는 Amazon Cognito 연동을 가정하고, 발표 시연용으로는 빠르게 대시보드로 이동할 수
          있는 화면을 제공합니다.
        </p>

        <div className="mt-8 surface-panel">
          <p className="text-sm font-semibold text-primary">데모 계정</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• ID: demo@bankflow.ai</li>
            <li>• PW: BankFlow!2026</li>
            <li>• 실제 인증 미구현, 시연용 이동 버튼 제공</li>
          </ul>
        </div>
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm font-semibold text-primary">개인뱅킹 로그인</p>
            <p className="mt-1 text-sm text-slate-500">안전한 접속 환경을 가정한 시연 화면</p>
          </div>
          <span className="status-pill">Cognito Ready</span>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            이메일
            <input
              defaultValue="demo@bankflow.ai"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            비밀번호
            <input
              type="password"
              defaultValue="BankFlow!2026"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard" className="primary-button">
            대시보드로 이동
          </Link>
          <Link href="/ai-chat" className="secondary-button">
            AI 상담 보기
          </Link>
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-500">
          본 화면은 발표용 데모입니다. 실제 서비스에서는 다중 인증, 기기 등록, 이상 거래 탐지 흐름이
          추가됩니다.
        </p>
      </div>
    </section>
  );
}
