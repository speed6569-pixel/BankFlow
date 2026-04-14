"use client";

import { FormEvent, useState } from "react";

const mockAccounts = ["주거래 입출금 계좌", "생활비 통장", "비상금 통장"];
const mockTargets = ["홍길동", "신한카드 결제계좌", "적금 자동이체"];

export function TransferSimulator() {
  const [fromAccount, setFromAccount] = useState(mockAccounts[0]);
  const [target, setTarget] = useState(mockTargets[0]);
  const [amount, setAmount] = useState("500000");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount < 1000) {
      setResult("최소 이체 금액은 1,000원입니다.");
      return;
    }

    setResult(
      `${fromAccount}에서 ${target}(으)로 ₩${numericAmount.toLocaleString("ko-KR")} 이체 요청이 생성되었습니다. 실제 서비스에서는 Lambda와 DynamoDB 거래 로그가 연결됩니다.`,
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <p className="text-sm font-semibold text-primary">안정성 평가용 구현 모듈</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">이체 시뮬레이션</h3>
          </div>
          <span className="status-pill">실행 가능</span>
        </div>

        <div className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-600">
            출금 계좌
            <select
              value={fromAccount}
              onChange={(event) => setFromAccount(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            >
              {mockAccounts.map((account) => (
                <option key={account}>{account}</option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-600">
            받는 사람
            <select
              value={target}
              onChange={(event) => setTarget(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            >
              {mockTargets.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-600">
            이체 금액
            <input
              value={amount}
              onChange={(event) => setAmount(event.target.value.replace(/[^0-9]/g, ""))}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </label>
        </div>

        <button
          type="submit"
          className="primary-button mt-6"
        >
          이체 요청 생성
        </button>
      </form>

      <div className="space-y-6">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-primary">검증 포인트</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>• 금액 입력 유효성 검사</li>
            <li>• 결과 메시지 즉시 표시</li>
            <li>• 실제 연결 시 거래 로그 적재 위치 명시</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-slate-800 bg-slate-950 p-6 text-white shadow-soft">
          <p className="text-sm font-semibold tracking-[0.16em] text-slate-300">실행 결과</p>
          <p className="mt-4 text-sm leading-6 text-slate-200">
            {result ?? "왼쪽 폼을 제출하면 데모 결과가 여기에 표시됩니다."}
          </p>
        </div>
      </div>
    </div>
  );
}
