import type { FoodItem } from "@/types/nutrition";

export type AnalyzeMealResult = {
  foods: FoodItem[];
  coachNote: string;
};

export async function analyzeMealWithAI(rawInput: string): Promise<AnalyzeMealResult> {
  // Temporary mock. Later this will call GPT API.
  return {
    foods: [
      {
        id: crypto.randomUUID(),
        name: "Eggs",
        quantity: 2,
        unit: "pieces",
        calories: 156,
        protein: 12,
        carbs: 1,
        fat: 10,
      },
      {
        id: crypto.randomUUID(),
        name: "Roti",
        quantity: 1,
        unit: "piece",
        calories: 120,
        protein: 4,
        carbs: 22,
        fat: 2,
      },
    ],
    coachNote:
      "Good protein start. Add one fruit later for more fiber and vitamins.",
  };
}
