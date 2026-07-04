"use client";

import { Target } from "lucide-react";

import { Card } from "@/components/ui/card";
import { useNutrition } from "@/hooks/use-nutrition";

const getNumber = (value: unknown, fallback = 0) => {
  return typeof value === "number" && !Number.isNaN(value) ? value : fallback;
};

export function TodaysPlanSection() {
  const nutrition = useNutrition();

  const dailyLog = nutrition.dailyLog as any;
  const profile = nutrition.profile as any;

  const caloriesGoal = getNumber(profile?.dailyCaloriesGoal, 2000);
  const proteinGoal = getNumber(profile?.dailyProteinGoal, 120);
  const waterGoal = getNumber(profile?.dailyWaterGoal, 8);
  const stepsGoal = getNumber(profile?.dailyStepsGoal, 10000);

  const caloriesConsumed = getNumber(dailyLog?.caloriesConsumed, 0);
  const proteinConsumed = getNumber(dailyLog?.proteinConsumed, 0);
  const waterIntake = getNumber(dailyLog?.waterIntake, 0);
  const steps = getNumber(dailyLog?.steps, 0);

  const caloriesRemaining = Math.max(0, caloriesGoal - caloriesConsumed);
  const proteinRemaining = Math.max(0, proteinGoal - proteinConsumed);
  const waterRemaining = Math.max(0, waterGoal - waterIntake);
  const stepsRemaining = Math.max(0, stepsGoal - steps);

  const completedGoals = [
    caloriesRemaining === 0,
    proteinRemaining === 0,
    waterRemaining === 0,
    stepsRemaining === 0,
  ].filter(Boolean).length;

  const dailyScore = Math.round((completedGoals / 4) * 100);

  const nextBestAction =
    caloriesRemaining > 0
      ? "Log your next meal to stay on track."
      : proteinRemaining > 0
        ? "Add a protein-rich meal or snack."
        : waterRemaining > 0
          ? "Drink one more glass of water."
          : stepsRemaining > 0
            ? "Take a short walk to complete your steps."
            : "Great job. You completed your daily plan.";

  return (
    <Card className="mt-5">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
          <Target size={22} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-brand-muted">Today&apos;s plan</p>
              <h2 className="mt-1 text-2xl font-bold">{dailyScore}%</h2>
            </div>

            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-primary">
              Smart goal
            </span>
          </div>

          <div className="mt-4 space-y-2 text-sm text-brand-muted">
            <p>🔥 {caloriesRemaining.toLocaleString()} kcal remaining</p>
            <p>🍗 {Math.round(proteinRemaining)}g protein left</p>
            <p>💧 {waterRemaining} glasses water left</p>
            <p>🚶 {stepsRemaining.toLocaleString()} steps left</p>
          </div>

          <div className="mt-4 rounded-2xl bg-brand-bg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-muted">
              Next best action
            </p>
            <p className="mt-1 text-sm font-semibold">{nextBestAction}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}