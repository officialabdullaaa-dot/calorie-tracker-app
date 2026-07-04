import type { AIProvider } from "@/services/ai/ai.types";

export const MockAIProvider: AIProvider = {
  async analyzeMeal() {
    return {
      foods: [
        {
          name: "Eggs",
          quantity: 2,
          unit: "pieces",
          calories: 156,
          protein: 12,
          carbs: 1,
          fat: 10,
          confidence: 0.95,
        },
        {
          name: "Roti",
          quantity: 1,
          unit: "piece",
          calories: 120,
          protein: 4,
          carbs: 22,
          fat: 2,
          confidence: 0.85,
        },
      ],
      totals: {
        calories: 276,
        protein: 16,
        carbs: 23,
        fat: 12,
      },
      coach: {
        summary: "Good protein start for this meal.",
        suggestion: "Add a fruit or salad later for more fiber.",
      },
      confidence: 0.9,
      warnings: [],
      estimatedServing: false,
    };
  },
};
