"use client";

import { FormEvent, useMemo, useState } from "react";

import { chatbotQuickPrompts } from "@/data/demo";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "안녕하세요. 저는 Bedrock 연동을 가정한 BankFlow AI 상담 도우미예요. 소비 분석, 상품 추천, 대출 상담 흐름을 시연할 수 있어요.",
  },
];

function getMockResponse(input: string) {
  const normalized = input.trim();

  if (!normalized) {
    return "질문을 입력하면 소비 패턴 요약이나 상품 추천 데모를 보여드릴게요.";
  }

  if (normalized.includes("소비") || normalized.includes("패턴")) {
    return "최근 30일 기준으로 식비와 구독비 비중이 높고, 고정 지출은 안정적이에요. 이번 주는 식비 예산을 8%만 줄여도 월 예상 잔액이 약 12만원 개선되는 흐름입니다.";
  }

  if (normalized.includes("저축") || normalized.includes("추천")) {
    return "현재 소비 패턴이라면 'AI 절약 챌린지 통장'과 '생활 안정 적금' 조합이 가장 설득력 있어요. 입출금 통장에서 주간 소비 리포트를 받고, 월 50만원 적금으로 이어지는 구성이 MVP 데모에 잘 맞습니다.";
  }

  if (normalized.includes("대출") || normalized.includes("소상공인")) {
    return "소상공인 브릿지 대출 상담 시나리오를 시작할게요. 1단계는 업종과 매출 규모 확인, 2단계는 필요 서류 체크리스트 제시, 3단계는 심사 예상 기간과 유의사항 안내입니다. 실제 서비스에서는 Bedrock Agent와 내부 심사 API가 연결됩니다.";
  }

  return "이 데모에서는 Bedrock 기반 상담 흐름을 가정하고 있어요. 소비 분석, 저축 추천, 소상공인 대출 상담 중 하나로 질문하면 가장 자연스럽게 시연할 수 있습니다.";
}

export function AiChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");

  const conversationCount = useMemo(
    () => messages.filter((message) => message.role === "assistant").length,
    [messages],
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
      { role: "assistant", content: getMockResponse(trimmed) },
    ];

    setMessages(nextMessages);
    setInput("");
  };

  const applyQuickPrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-700">실제 UI 시연용 AI 기능</p>
            <h3 className="text-2xl font-semibold text-slate-900">BankFlow AI 챗봇</h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            응답 {conversationCount}건
          </span>
        </div>

        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-3xl rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "assistant"
                  ? "bg-slate-100 text-slate-700"
                  : "ml-auto bg-slate-900 text-white"
              }`}
            >
              {message.content}
            </div>
          ))}
        </div>

        <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="예: 이번 달 소비 패턴 요약해줘"
            className="min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-700"
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            AI 응답 생성
          </button>
        </form>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-cyan-700">빠른 시연 질문</p>
          <div className="mt-4 space-y-3">
            {chatbotQuickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => applyQuickPrompt(prompt)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-cyan-700 hover:text-cyan-700"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
          <p className="text-sm font-semibold text-cyan-300">Bedrock 설계 포인트</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>• Claude 또는 Titan 기반 상담 응답 생성</li>
            <li>• Lambda에서 계좌/상품 더미 데이터 결합</li>
            <li>• CloudWatch로 프롬프트 로그와 오류 추적</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
