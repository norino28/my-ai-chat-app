import { Hono } from "hono";
import { handle } from "hono/vercel";
import { quizAgent } from "@/lib/mastra/agent";

export const runtime = "nodejs";

type MessageRole = "user" | "assistant";

interface Message {
  role: MessageRole;
  content: string;
}

const app = new Hono().basePath("/api/chat");

app.post("/", async (c) => {
  const body = await c.req.json<{ messages: Message[] }>();
  const { messages } = body;

  if (!messages || messages.length === 0) {
    return c.json({ error: "メッセージが必要です" }, 400);
  }

  const lastMessage = messages[messages.length - 1];
  if (lastMessage.role !== "user") {
    return c.json({ error: "最後のメッセージはユーザーからである必要があります" }, 400);
  }

  const response = await quizAgent.generate(messages);

  return c.json({ content: response.text });
});

export const POST = handle(app);
