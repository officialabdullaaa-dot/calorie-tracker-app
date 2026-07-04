"use client";

import { useEffect } from "react";
import { useNutritionStore } from "@/store/nutrition-store";

export function useNutrition() {
  const store = useNutritionStore();

  useEffect(() => {
    store.hydrate();
  }, []);

  const caloriesConsumed = store.dailyLog.meals.reduce(
    (total, meal) => total + meal.totalCalories,
    0
  );

  const proteinConsumed = store.dailyLog.meals.reduce(
    (total, meal) => total + meal.totalProtein,
    0
  );

  const carbsConsumed = store.dailyLog.meals.reduce(
    (total, meal) => total + meal.totalCarbs,
    0
  );

  const fatConsumed = store.dailyLog.meals.reduce(
    (total, meal) => total + meal.totalFat,
    0
  );

  return {
    ...store,
    caloriesConsumed,
    caloriesRemaining: store.profile.dailyCalorieGoal - caloriesConsumed,
    proteinConsumed,
    carbsConsumed,
    fatConsumed,
  };
}
