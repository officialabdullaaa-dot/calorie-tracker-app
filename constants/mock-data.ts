import type { DailyLog, UserProfile, WeightLog } from "@/types/nutrition";

export const mockUserProfile: UserProfile = {
  id: "user_1",
  name: "Maaz",
  age: 24,
  gender: "male",
  heightCm: 175,
  currentWeightKg: 80.8,
  goalWeightKg: 75,
  goalType: "lose_weight",
  activityLevel: "moderate",
  dailyCalorieGoal: 2200,
  proteinGoal: 180,
  carbsGoal: 260,
  fatGoal: 80,
  waterGoalGlasses: 8,
  stepsGoal: 10000,
};

export const mockDailyLog: DailyLog = {
  date: "2026-07-04",
  waterGlasses: 5,
  steps: 7500,
  meals: [
    {
      id: "meal_1",
      date: "2026-07-04",
      mealType: "Breakfast",
      rawInput: "2 eggs, 1 roti, 250ml milk",
      totalCalories: 531,
      totalProtein: 25,
      totalCarbs: 45,
      totalFat: 18,
      coachNote:
        "Good protein start. Add one fruit later for more fiber and vitamins.",
      foods: [],
    },
  ],
};

export const mockWeightLogs: WeightLog[] = [
  { id: "w1", date: "2026-06-20", weightKg: 82, waistInches: 36 },
  { id: "w2", date: "2026-07-04", weightKg: 80.8, waistInches: 34 },
];