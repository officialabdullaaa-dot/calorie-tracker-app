"use client";

import { Plus } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { useNutrition } from "@/hooks/use-nutrition";
import type { MealType } from "@/types/nutrition";

const mealTypes: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snack"];

export function MealsSection() {
  const { dailyLog } = useNutrition();

  return (
    <div className="mt-7">
      <SectionHeader title="Today's diary" actionLabel="View day" />

      <div className="space-y-3">
        {mealTypes.map((mealType) => {
          const meals = dailyLog.meals.filter(
            (meal) => meal.mealType === mealType
          );

          const totalCalories = meals.reduce(
            (sum, meal) => sum + meal.totalCalories,
            0
          );

          return (
            <Card key={mealType} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{mealType}</h3>

                  {meals.length > 0 ? (
                    <p className="mt-1 text-sm text-brand-muted">
                      {meals.map((meal) => meal.rawInput).join(", ")}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-brand-muted">
                      No meal added yet
                    </p>
                  )}

                  <p className="mt-2 text-sm font-semibold text-brand-primary">
                    {totalCalories} kcal
                  </p>
                </div>

                <a
                  href="/add-meal"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-primary"
                >
                  <Plus size={20} />
                </a>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}