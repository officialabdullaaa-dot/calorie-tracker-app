import type { DailyLog, UserProfile } from "@/types/nutrition";

export type HealthSummary = {
  caloriesConsumed: number;
  caloriesRemaining: number;
  proteinConsumed: number;
  proteinRemaining: number;
  carbsConsumed: number;
  fatConsumed: number;
  waterRemaining: number;
  stepsRemaining: number;
  dailyScore: number;
  nextBestAction: string;
};

export function calculateHealthSummary({
  profile,
  dailyLog,
}: {
  profile: UserProfile;
  dailyLog: DailyLog;
}): HealthSummary {
  const caloriesConsumed = dailyLog.meals.reduce(
    (sum, meal) => sum + meal.totalCalories,
    0
  );

  const proteinConsumed = dailyLog.meals.reduce(
    (sum, meal) => sum + meal.totalProtein,
    0
  );

  const carbsConsumed = dailyLog.meals.reduce(
    (sum, meal) => sum + meal.totalCarbs,
    0
  );

  const fatConsumed = dailyLog.meals.reduce(
    (sum, meal) => sum + meal.totalFat,
    0
  );

  const caloriesRemaining = profile.dailyCalorieGoal - caloriesConsumed;
  const proteinRemaining = Math.max(profile.proteinGoal - proteinConsumed, 0);
  const waterRemaining = Math.max(
    profile.waterGoalGlasses - dailyLog.waterGlasses,
    0
  );
  const stepsRemaining = Math.max(profile.stepsGoal - dailyLog.steps, 0);

  const calorieScore = Math.min(
    (caloriesConsumed / profile.dailyCalorieGoal) * 100,
    100
  );

  const proteinScore = Math.min(
    (proteinConsumed / profile.proteinGoal) * 100,
    100
  );

  const waterScore = Math.min(
    (dailyLog.waterGlasses / profile.waterGoalGlasses) * 100,
    100
  );

  const stepsScore = Math.min((dailyLog.steps / profile.stepsGoal) * 100, 100);

  const dailyScore = Math.round(
    calorieScore * 0.35 +
      proteinScore * 0.3 +
      waterScore * 0.2 +
      stepsScore * 0.15
  );

  let nextBestAction = "Keep going. You're building a solid day.";

  if (proteinRemaining > 30) {
    nextBestAction = `Eat about ${Math.round(
      proteinRemaining
    )}g more protein today.`;
  } else if (waterRemaining > 0) {
    nextBestAction = `Drink ${waterRemaining} more glass${
      waterRemaining > 1 ? "es" : ""
    } of water.`;
  } else if (stepsRemaining > 2000) {
    nextBestAction = `Walk about ${stepsRemaining.toLocaleString()} more steps.`;
  } else if (caloriesRemaining < 250) {
    nextBestAction = "Keep dinner light to stay within your calorie goal.";
  }

  return {
    caloriesConsumed,
    caloriesRemaining,
    proteinConsumed,
    proteinRemaining,
    carbsConsumed,
    fatConsumed,
    waterRemaining,
    stepsRemaining,
    dailyScore,
    nextBestAction,
  };
}