"use client";

import { create } from "zustand";

import type { DailyLog, MealLog, UserProfile } from "@/types/nutrition";

import { mockDailyLog, mockUserProfile } from "@/constants/mock-data";

import { NutritionRepository } from "@/repositories/nutrition.repository";

type NutritionState = {
  profile: UserProfile;
  dailyLog: DailyLog;

  pendingMeal: MealLog | null;

  hydrate: () => void;
  setPendingMeal: (meal: MealLog | null) => void;
  addMeal: (meal: MealLog) => void;
  updateWater: (change: number) => void;
};

export const useNutritionStore = create<NutritionState>((set, get) => ({
  profile: mockUserProfile,
  dailyLog: mockDailyLog,
  pendingMeal: null,

  hydrate() {
    set({
      profile: NutritionRepository.loadProfile(),
      dailyLog: NutritionRepository.loadDailyLog(),
    });
  },

  setPendingMeal(meal) {
    set({ pendingMeal: meal });
  },

  addMeal(meal) {
    const updatedDailyLog = {
      ...get().dailyLog,
      meals: [...get().dailyLog.meals, meal],
    };

    set({
      dailyLog: updatedDailyLog,
      pendingMeal: null,
    });

    NutritionRepository.saveDailyLog(updatedDailyLog);
  },

  updateWater(change) {
    const current = get().dailyLog;

    const updatedDailyLog = {
      ...current,
      waterGlasses: Math.max(0, current.waterGlasses + change),
    };

    set({ dailyLog: updatedDailyLog });
    NutritionRepository.saveDailyLog(updatedDailyLog);
  },
}));