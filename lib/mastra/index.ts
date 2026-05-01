import { Mastra } from "@mastra/core";
import { quizAgent } from "./agent";

export const mastra = new Mastra({
  agents: { quizAgent },
});
