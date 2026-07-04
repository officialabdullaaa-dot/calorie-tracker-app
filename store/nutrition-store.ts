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
  setProfile: (profile: UserProfile) => void;
  updateWater: (amount: number) => void;
  setPendingMeal: (meal: MealLog | null) => void;

  addMeal: (meal: MealLog) => void;
  deleteMeal: (mealId: string) => void;
  clearDailyLog: () => void;
};

export const useNutritionStore = create<NutritionState>((set, get) => ({
  profile: mockUserProfile,
  dailyLog: mockDailyLog,
  pendingMeal: null,

  hydrate: () => {
    const profile = NutritionRepository.getProfile();
    const dailyLog = NutritionRepository.getDailyLog();

    set({
      profile: profile ?? mockUserProfile,
      dailyLog: dailyLog ?? mockDailyLog,
    });
  },

  setProfile: (profile) => {
    NutritionRepository.saveProfile(profile);

    set({
      profile,
    });
  },

  updateWater: (amount) => {
    const currentLog = get().dailyLog;

    const updatedLog: DailyLog = {
      ...currentLog,
      waterGlasses: amount,
    };

    NutritionRepository.saveDailyLog(updatedLog);

    set({
      dailyLog: updatedLog,
    });
  },

  setPendingMeal: (meal) => {
    set({
      pendingMeal: meal,
    });
  },

  addMeal: (meal) => {
    const currentLog = get().dailyLog;

    const updatedLog: DailyLog = {
      ...currentLog,
      meals: [...currentLog.meals, meal],
    };

    NutritionRepository.saveDailyLog(updatedLog);

    set({
      dailyLog: updatedLog,
      pendingMeal: null,
    });
  },

  deleteMeal: (mealId) => {
    const currentLog = get().dailyLog;

    const updatedLog: DailyLog = {
      ...currentLog,
      meals: currentLog.meals.filter((meal) => meal.id !== mealId),
    };

    NutritionRepository.saveDailyLog(updatedLog);

    set({
      dailyLog: updatedLog,
    });
  },

  clearDailyLog: () => {
    NutritionRepository.saveDailyLog(mockDailyLog);

    set({
      dailyLog: mockDailyLog,
      pendingMeal: null,
    });
  },
}));