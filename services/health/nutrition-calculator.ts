import type { ActivityLevel, GoalType, UserProfile } from "@/types/nutrition";
import type { OnboardingData } from "@/store/onboarding-store";

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  athlete: 1.9,
};

function convertWeightToKg(weight: number, unit: "kg" | "lb") {
  return unit === "lb" ? weight * 0.453592 : weight;
}

function convertHeightToCm(height: number, unit: "cm" | "ft") {
  if (unit === "cm") return height;

  const raw = String(height);
  const feet = Number(raw[0] ?? 0);
  const inches = Number(raw.slice(1) || 0);

  return feet * 30.48 + inches * 2.54;
}

export function createProfileFromOnboarding(data: OnboardingData): UserProfile {
  const weightKg = convertWeightToKg(data.weight, data.weightUnit);
  const heightCm = convertHeightToCm(data.height, data.heightUnit);

  const bmr =
    data.gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * data.age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * data.age - 161;

  const tdee = bmr * activityMultipliers[data.activityLevel];

  let calorieGoal = tdee;

  if (data.goal === "lose_weight") calorieGoal = tdee - 400;
  if (data.goal === "gain_muscle") calorieGoal = tdee + 250;

  const proteinGoal = weightKg * 2;
  const fatGoal = (calorieGoal * 0.25) / 9;
  const carbsGoal = (calorieGoal - proteinGoal * 4 - fatGoal * 9) / 4;

  return {
    id: crypto.randomUUID(),
    name: data.name,
    age: data.age,
    gender: data.gender as "male" | "female",
    heightCm: Math.round(heightCm),
    currentWeightKg: Math.round(weightKg * 10) / 10,
    goalWeightKg: Math.round(weightKg * 0.92 * 10) / 10,
    goalType: data.goal as GoalType,
    activityLevel: data.activityLevel,
    dailyCalorieGoal: Math.round(calorieGoal),
    proteinGoal: Math.round(proteinGoal),
    carbsGoal: Math.round(carbsGoal),
    fatGoal: Math.round(fatGoal),
    waterGoalGlasses: 8,
    stepsGoal: 10000,
  };
}