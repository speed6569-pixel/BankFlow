import { AiChatPanel } from "@/components/ai-chat-panel";

export default function AiChatPage() {
  return (
    <section className="section-shell">
      <p className="text-sm font-semibold tracking-[0.16em] text-primary">AI ADVISORY DESK</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
        상담 창구처럼 보이도록 정리한 AI 금융 상담 페이지
      </h1>
      <p className="section-copy max-w-3xl">
        현재 데모는 모의 응답으로 동작하지만, 실제 구조는 API Gateway와 Lambda를 통해 Bedrock 모델을
        호출하는 방식으로 확장할 수 있게 설계했습니다.
      </p>

      <div className="mt-10">
        <AiChatPanel />
      </div>
    </section>
  );
}
