import { LoginForm } from "@/components/login-form";
import { DEMO_USER_EMAIL, DEMO_USER_PASSWORD } from "@/data/auth";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { redirect?: string };
}) {
  const redirectTo = searchParams?.redirect ?? "/dashboard";

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
            <li>• ID: {DEMO_USER_EMAIL}</li>
            <li>• PW: {DEMO_USER_PASSWORD}</li>
            <li>• 잘못된 계정 입력 시 오류 메시지를 표시하도록 보강</li>
          </ul>
        </div>
      </div>

      <LoginForm redirectTo={redirectTo} />
    </section>
  );
}
