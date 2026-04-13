import Link from "next/link";

import { architectureNodes, heroMetrics, productItems } from "@/data/demo";

export default function HomePage() {
  return (
    <div>
      <section className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">
            1주 완성 기준 금융 서비스 MVP
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900">
            AWS 아키텍처와 AI 상담 흐름이 한 화면에 보이는 은행 서비스 데모
          </h1>
          <p className="section-copy">
            BankFlow는 실제 금융 코어 시스템 대신, 평가 기준에 맞춘 프론트엔드 화면과 AWS
            구성 문서, Bedrock 기반 상담 시나리오를 함께 보여주는 시연용 웹사이트입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              대시보드 보기
            </Link>
            <Link
              href="/ai-chat"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              AI 챗봇 체험
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold text-cyan-700">평가 기준 중심 MVP 범위</p>
          <div className="card-grid mt-6 md:grid-cols-2">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <h2 className="section-title">무엇을 보여주는 데모인가</h2>
        <p className="section-copy">
          과도한 계정계 구현 대신, 로그인, 사용자 대시보드, 상품 소개, AI 챗봇, 이체 시뮬레이션을
          연결해 금융 서비스의 핵심 경험을 빠르게 검증하는 데 초점을 맞췄습니다.
        </p>

        <div className="card-grid">
          <div className="feature-card">
            <p className="text-sm font-semibold text-cyan-700">프로젝트 개요</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">실행 가능한 1주 범위 정의</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              문서에서 목표, 우선순위, 데모 제외 범위를 명확히 정리해 실행 가능성을 보여줍니다.
            </p>
          </div>
          <div className="feature-card">
            <p className="text-sm font-semibold text-cyan-700">AWS 아키텍처</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">리소스 연결 관계 시각화</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Cognito, API Gateway, Lambda, DynamoDB, S3, Bedrock, CloudWatch를 한 흐름으로
              설명합니다.
            </p>
          </div>
          <div className="feature-card">
            <p className="text-sm font-semibold text-cyan-700">AI 기능</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">Bedrock 상담 챗봇 시연</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              실제 응답처럼 보이는 상담 플로우를 UI에서 바로 확인할 수 있습니다.
            </p>
          </div>
          <div className="feature-card">
            <p className="text-sm font-semibold text-cyan-700">안정성</p>
            <p className="mt-3 text-xl font-semibold text-slate-900">실행 가능한 MVP 화면 제공</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              로컬에서 바로 실행 가능하며, 테스트 결과와 구현 범위를 함께 문서화합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-soft">
          <p className="text-sm font-semibold text-cyan-300">AWS 리소스 맵</p>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
            {architectureNodes.map((node) => (
              <li key={node}>• {node}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold text-cyan-700">대표 금융 상품</p>
          <div className="mt-6 grid gap-4">
            {productItems.map((product) => (
              <div key={product.name} className="rounded-3xl bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
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
