"use client";

import type { ReactNode } from "react";
import { Droplets, Footprints, Minus, Plus, Scale, TrendingDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { useNutrition } from "@/hooks/use-nutrition";
import { useNutritionStore } from "@/store/nutrition-store";

export function MetricsSection() {
  const { profile, dailyLog } = useNutrition();
  const updateWater = useNutritionStore((state) => state.updateWater);

  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      <Card>
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
          <Droplets />
        </div>

        <p className="text-sm text-brand-muted">Water</p>
        <h3 className="mt-1 text-2xl font-bold">
          {dailyLog.waterGlasses} / {profile.waterGoalGlasses}
        </h3>
        <p className="text-xs text-brand-muted">glasses</p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => updateWater(-1)}
            className="flex h-9 flex-1 items-center justify-center rounded-xl bg-brand-bg text-brand-primary"
          >
            <Minus size={16} />
          </button>

          <button
            onClick={() => updateWater(1)}
            className="flex h-9 flex-1 items-center justify-center rounded-xl bg-brand-primary text-white"
          >
            <Plus size={16} />
          </button>
        </div>
      </Card>

      <MetricCard icon={<Footprints />} title="Steps" value={dailyLog.steps.toLocaleString()} unit="steps" />
      <MetricCard icon={<Scale />} title="Weight" value={profile.currentWeightKg.toString()} unit="kg" />
      <MetricCard icon={<TrendingDown />} title="Waist" value="34" unit="inches" />
    </div>
  );
}

function MetricCard({
  icon,
  title,
  value,
  unit,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  unit: string;
}) {
  return (
    <Card>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
        {icon}
      </div>
      <p className="text-sm text-brand-muted">{title}</p>
      <h3 className="mt-1 text-2xl font-bold">{value}</h3>
      <p className="text-xs text-brand-muted">{unit}</p>
    </Card>
  );
}