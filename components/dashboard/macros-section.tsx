"use client";

import { MacroCard } from "@/components/cards/macro-card";
import { useNutrition } from "@/hooks/use-nutrition";

export function MacrosSection() {
  const { profile, carbsConsumed, proteinConsumed, fatConsumed } = useNutrition();

  return (
    <div className="mt-5 grid grid-cols-3 gap-3">
      <MacroCard
        title="Carbs"
        current={carbsConsumed}
        goal={profile.carbsGoal}
        color="purple"
      />

      <MacroCard
        title="Protein"
        current={proteinConsumed}
        goal={profile.proteinGoal}
        color="blue"
      />

      <MacroCard
        title="Fat"
        current={fatConsumed}
        goal={profile.fatGoal}
        color="green"
      />
    </div>
  );
}