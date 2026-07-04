import type { AIMealAnalysis } from "@/services/ai/ai.types";
import { MockAIProvider } from "@/services/ai/providers/mock.provider";

const provider = MockAIProvider;

export const AI = {
  analyzeMeal(input: {
    rawInput: string;
    mealType: string;
  }): Promise<AIMealAnalysis> {
    return provider.analyzeMeal(input);
  },
};
