"use client";

import { create } from "zustand";

export type OnboardingData = {
  name: string;
  gender: string;
  age: number;
  height: number;
  heightUnit: "cm" | "ft";
  weight: number;
  weightUnit: "kg" | "lb";
  goal: "lose_weight" | "maintain" | "gain_muscle";
  activityLevel:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "athlete";
};

type OnboardingStore = {
  data: Partial<OnboardingData>;

  update: (key: keyof OnboardingData, value: any) => void;

  reset: () => void;
};

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  data: {},

  update(key, value) {
    set((state) => ({
      data: {
        ...state.data,
        [key]: value,
      },
    }));
  },

  reset() {
    set({
      data: {},
    });
  },
}));
