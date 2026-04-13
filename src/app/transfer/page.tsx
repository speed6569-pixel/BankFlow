import { TransferSimulator } from "@/components/transfer-simulator";

export default function TransferPage() {
  return (
    <section className="section-shell">
      <p className="text-sm font-semibold text-cyan-700">거래 모듈 시연</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
        실제 서비스처럼 보이되, 발표용으로 안정적인 이체 시뮬레이션
      </h1>
      <p className="section-copy max-w-3xl">
        입력값 검증과 결과 메시지를 즉시 보여주는 방식으로 구현해, 짧은 기간 안에도 구현 모듈 안정성을
        보여줄 수 있도록 구성했습니다.
      </p>

      <div className="mt-10">
        <TransferSimulator />
      </div>
    </section>
  );
}
