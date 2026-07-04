import type { FoodItem, MealLog, MealType } from "@/types/nutrition";
import { analyzeMealWithAI } from "@/services/ai.service";

function sumFoods(foods: FoodItem[]) {
  return foods.reduce(
    (total, food) => ({
      calories: total.calories + food.calories,
      protein: total.protein + food.protein,
      carbs: total.carbs + food.carbs,
      fat: total.fat + food.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

export async function createMealFromText({
  rawInput,
  mealType,
}: {
  rawInput: string;
  mealType: MealType;
}): Promise<MealLog> {
  const result = await analyzeMealWithAI(rawInput);
  const totals = sumFoods(result.foods);

  return {
    id: crypto.randomUUID(),
    date: new Date().toISOString().slice(0, 10),
    mealType,
    rawInput,
    foods: result.foods,
    totalCalories: Math.round(totals.calories),
    totalProtein: Math.round(totals.protein),
    totalCarbs: Math.round(totals.carbs),
    totalFat: Math.round(totals.fat),
    coachNote: result.coachNote,
  };
}
