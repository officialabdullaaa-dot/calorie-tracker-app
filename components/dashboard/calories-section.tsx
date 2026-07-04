"use client";

import { Card } from "@/components/ui/card";
import { CircularProgress } from "@/components/charts/circular-progress";
import { useNutrition } from "@/hooks/use-nutrition";

export function CaloriesSection() {
  const { profile, caloriesConsumed, caloriesRemaining } = useNutrition();

  return (
    <Card className="text-center">
      <p className="mb-4 text-sm font-semibold text-brand-muted">
        Calories today
      </p>

      <CircularProgress
        value={caloriesConsumed}
        max={profile.dailyCalorieGoal}
        label={String(caloriesRemaining)}
        subLabel="kcal left"
      />

      <div className="mt-5 flex justify-between rounded-2xl bg-brand-soft px-4 py-3 text-sm">
        <span>{caloriesConsumed} eaten</span>
        <span>{profile.dailyCalorieGoal} goal</span>
      </div>
    </Card>
  );
}