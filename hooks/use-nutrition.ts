"use client";

import { useEffect } from "react";

import { useNutritionStore } from "@/store/nutrition-store";

export const useNutrition = () => {
  const profile = useNutritionStore((state) => state.profile);
  const dailyLog = useNutritionStore((state) => state.dailyLog);
  const pendingMeal = useNutritionStore((state) => state.pendingMeal);

  const hydrate = useNutritionStore((state) => state.hydrate);
  const setProfile = useNutritionStore((state) => state.setProfile);
  const updateWater = useNutritionStore((state) => state.updateWater);
  const setPendingMeal = useNutritionStore((state) => state.setPendingMeal);

  const addMeal = useNutritionStore((state) => state.addMeal);
  const deleteMeal = useNutritionStore((state) => state.deleteMeal);
  const clearDailyLog = useNutritionStore((state) => state.clearDailyLog);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return {
    profile,
    dailyLog,
    pendingMeal,

    setProfile,
    updateWater,
    setPendingMeal,

    addMeal,
    deleteMeal,
    clearDailyLog,
  };
};