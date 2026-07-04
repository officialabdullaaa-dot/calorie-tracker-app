"use client";

import { useEffect } from "react";
import { useNutritionStore } from "@/store/nutrition-store";
import { calculateHealthSummary } from "@/services/health/health-engine";

export function useNutrition() {
  const store = useNutritionStore();

  useEffect(() => {
    store.hydrate();
  }, []);

  const health = calculateHealthSummary({
    profile: store.profile,
    dailyLog: store.dailyLog,
  });

  return {
    ...store,
    ...health,
  };
}