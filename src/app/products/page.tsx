import { productItems } from "@/data/demo";

export default function ProductsPage() {
  return (
    <section className="section-shell">
      <p className="text-sm font-semibold text-cyan-700">금융상품 소개</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
        데모 발표에 맞춘 3가지 핵심 상품 시나리오
      </h1>
      <p className="section-copy max-w-3xl">
        단기간 프로젝트에서는 상품 수를 늘리기보다, 입출금, 적금, 대출 상담처럼 목적이 분명한 상품을
        선별해 스토리텔링을 강화하는 편이 더 현실적입니다.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {productItems.map((product) => (
          <article
            key={product.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
              {product.badge}
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{product.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {product.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
