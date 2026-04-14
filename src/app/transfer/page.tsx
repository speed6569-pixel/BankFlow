import { TransferSimulator } from "@/components/transfer-simulator";

export default function TransferPage() {
  return (
    <section className="section-shell">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary">TRANSFER FLOW</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        거래 화면처럼 정돈된 이체 시뮬레이션
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
