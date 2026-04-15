import Link from "next/link";

import { architectureNodes, heroMetrics, productItems } from "@/data/demo";

export default function HomePage() {
  return (
    <div>
      <section className="section-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="section-eyebrow">TRUSTED DIGITAL BANKING MVP</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950">
            더 차분하고 믿음직한 디지털 뱅킹 경험을 보여주는 BankFlow
          </h1>
          <p className="section-copy">
            BankFlow는 실제 금융 코어 시스템을 모두 구현하는 대신, 고객이 은행 서비스를 이용할 때
            기대하는 신뢰감 있는 화면 구성과 자산 정보 흐름, AWS 기반 확장 구조를 시연하기 위해
            설계된 데모입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="primary-button">
              대시보드 보기
            </Link>
            <Link href="/ai-chat" className="secondary-button">
              AI 챗봇 체험
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">CUSTOMER FLOW</p>
              <p className="mt-2 text-sm text-slate-800">로그인부터 자산 조회, 상담, 이체까지 핵심 여정을 구성</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">AWS DESIGN</p>
              <p className="mt-2 text-sm text-slate-800">아키텍처 설명이 바로 가능한 인프라 흐름과 문서 제공</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft">
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">AI ADVISORY</p>
              <p className="mt-2 text-sm text-slate-800">금융 상담 톤에 맞춘 Amazon Lex 연계 시나리오를 즉시 시연</p>
            </div>
          </div>
        </div>

        <div className="surface-strong">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-slate-300">SERVICE SNAPSHOT</p>
              <h2 className="mt-3 text-3xl font-semibold">금융 서비스 데모 운영 현황</h2>
            </div>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              Ready for Demo
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-300">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>인증/접속 흐름</span>
              <span>Amazon Cognito 가정</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>거래 처리 경로</span>
              <span>API Gateway + Lambda</span>
            </div>
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>AI 상담 확장성</span>
              <span>Amazon Lex 연계 가능</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <h2 className="section-title">왜 은행 서비스처럼 보여야 하는가</h2>
        <p className="section-copy">
          금융 서비스 데모는 기능 수보다 신뢰감을 주는 정보 구조가 더 중요합니다. 과도한 기능 확장보다,
          고객이 바로 이해할 수 있는 자산 요약, 상품 설명, 상담 흐름, 거래 화면을 정제된 톤으로
          보여주는 데 초점을 맞췄습니다.
        </p>

        <div className="card-grid">
          <div className="feature-card">
            <p className="text-sm font-semibold text-primary">신뢰감 있는 첫 인상</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">절제된 레이아웃과 금융권 톤</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              과장된 마케팅 표현 대신, 핵심 정보와 수치가 먼저 보이도록 구성해 안정적인 인상을 줍니다.
            </p>
          </div>
          <div className="feature-card">
            <p className="text-sm font-semibold text-primary">운영 구조 설명력</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">리소스 연결 관계를 바로 설명</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              인증, 거래, 저장, AI 상담이 어떤 흐름으로 이어지는지 발표 자리에서 곧바로 연결해 말할 수 있습니다.
            </p>
          </div>
          <div className="feature-card">
            <p className="text-sm font-semibold text-primary">상담 경험</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">차분한 AI 금융 상담 UX</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              실제 상담원이 설명하듯 답변이 이어지는 형태로, AI 기능이 화면과 자연스럽게 연결됩니다.
            </p>
          </div>
          <div className="feature-card">
            <p className="text-sm font-semibold text-primary">구현 안정성</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">시연에 적합한 실행 가능한 화면</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              핵심 화면을 안정적으로 실행할 수 있어 짧은 시연 시간 안에도 완성도를 전달하기 좋습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-strong">
          <p className="text-sm font-semibold tracking-[0.16em] text-slate-300">AWS RESOURCE MAP</p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
            {architectureNodes.map((node) => (
              <li key={node}>• {node}</li>
            ))}
          </ul>
        </div>

        <div className="surface-panel p-8">
          <p className="text-sm font-semibold text-primary">대표 금융 상품</p>
          <div className="mt-6 grid gap-4">
            {productItems.map((product) => (
              <div key={product.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                    {product.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{product.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
