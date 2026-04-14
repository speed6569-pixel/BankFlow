import { productItems } from "@/data/demo";

export default function ProductsPage() {
  return (
    <section className="section-shell">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary">PRODUCT LINEUP</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        고객 목적에 맞게 이해하기 쉬운 3가지 핵심 상품 구성
      </h1>
      <p className="section-copy max-w-3xl">
        단기간 프로젝트에서는 상품 수를 늘리기보다, 입출금, 적금, 대출 상담처럼 목적이 분명한 상품을
        선별해 스토리텔링을 강화하는 편이 더 현실적입니다.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {productItems.map((product) => (
          <article
            key={product.name}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
          >
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-primary">
              {product.badge}
            </span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">{product.name}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{product.summary}</p>
            <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700">
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
