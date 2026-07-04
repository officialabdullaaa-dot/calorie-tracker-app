"use client";

import { Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNutrition } from "@/hooks/use-nutrition";

export function TodaysPlanSection() {
  const {
    caloriesRemaining,
    proteinRemaining,
    waterRemaining,
    stepsRemaining,
    dailyScore,
    nextBestAction,
  } = useNutrition();

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
            <p>🔥 {caloriesRemaining} kcal remaining</p>
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
