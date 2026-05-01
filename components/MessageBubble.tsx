"use client";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm mr-2 flex-shrink-0 self-end">
          🤖
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-blue-500 text-white rounded-br-sm"
            : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
        }`}
      >
        {content}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-sm ml-2 flex-shrink-0 self-end">
          👤
        </div>
      )}
    </div>
  );
}
