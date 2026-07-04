export type GoalType = "lose_weight" | "maintain" | "gain_muscle";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "athlete";

export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snack";

export type UserProfile = {
  id: string;
  name: string;
  age: number;
  gender: "male" | "female";
  heightCm: number;
  currentWeightKg: number;
  goalWeightKg: number;
  goalType: GoalType;
  activityLevel: ActivityLevel;
  dailyCalorieGoal: number;
  proteinGoal: number;
  carbsGoal: number;
  fatGoal: number;
  waterGoalGlasses: number;
  stepsGoal: number;
};

export type FoodItem = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type MealLog = {
  id: string;
  date: string;
  mealType: MealType;
  rawInput: string;
  foods: FoodItem[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  coachNote?: string;
};

export type DailyLog = {
  date: string;
  meals: MealLog[];
  waterGlasses: number;
  steps: number;
};

export type WeightLog = {
  id: string;
  date: string;
  weightKg: number;
  waistInches?: number;
};