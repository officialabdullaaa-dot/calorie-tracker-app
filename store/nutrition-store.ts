"use client";

import { create } from "zustand";
import type { DailyLog, MealLog, UserProfile } from "@/types/nutrition";
import { mockDailyLog, mockUserProfile } from "@/constants/mock-data";
import { loadFromStorage, saveToStorage } from "@/services/storage.service";

type NutritionState = {
  profile: UserProfile;
  dailyLog: DailyLog;
  hydrate: () => void;
  addMeal: (meal: MealLog) => void;
};

export const useNutritionStore = create<NutritionState>((set, get) => ({
  profile: mockUserProfile,
  dailyLog: mockDailyLog,

  hydrate: () => {
    const profile = loadFromStorage("profile", mockUserProfile);
    const dailyLog = loadFromStorage("dailyLog", mockDailyLog);

    set({ profile, dailyLog });
  },

  addMeal: (meal) => {
    const current = get().dailyLog;

    const updatedDailyLog = {
      ...current,
      meals: [...current.meals, meal],
    };

    set({ dailyLog: updatedDailyLog });
    saveToStorage("dailyLog", updatedDailyLog);
  },
}));
