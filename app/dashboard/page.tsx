import type { ReactNode } from "react";
import { Droplets, Footprints, Scale, TrendingDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { CircularProgress } from "@/components/charts/circular-progress";
import { MacroCard } from "@/components/cards/macro-card";
import { MealCard } from "@/components/cards/meal-card";
import { DailyScoreCard } from "@/components/cards/daily-score-card";
import { QuickActions } from "@/components/cards/quick-actions";
import { BottomNav } from "@/components/layout/bottom-nav";
import { WeeklyProgress } from "@/components/charts/weekly-progress";
import { DateStrip } from "@/components/layout/date-strip";
import { SectionHeader } from "@/components/ui/section-header";
import { HealthTipCard } from "@/components/cards/health-tip-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg px-5 pb-28 pt-6 text-brand-text">
      <section className="mx-auto max-w-md">
        <DashboardHeader />
  <DateStrip />
  <CaloriesSection />
  <MacrosSection />
  <DailyScoreSection />
  <MetricsSection />
  <MealsSection />
  <QuickActionsSection />
  <WeeklyProgressSection />
  <HealthTipSection />
        
      </section>

      <BottomNav />
    </main>
  );
}

function DashboardHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-brand-muted">Good morning,</p>
        <h1 className="mt-1 text-3xl font-bold">Maaz 👋</h1>
        <p className="mt-1 text-sm text-brand-muted">Tuesday, 4 July</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft">
          🔔
        </button>

        <img
          src="https://i.pravatar.cc/100"
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

function CaloriesSection() {
  return (
    <Card className="text-center">
      <p className="mb-4 text-sm font-semibold text-brand-muted">
        Calories today
      </p>

      <CircularProgress value={1450} max={2200} label="750" subLabel="kcal left" />

      <div className="mt-5 flex justify-between rounded-2xl bg-brand-soft px-4 py-3 text-sm">
        <span>1,450 eaten</span>
        <span>2,200 goal</span>
      </div>
    </Card>
  );
}

function MacrosSection() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-3">
      <MacroCard title="Carbs" current={70} goal={260} color="purple" />
      <MacroCard title="Protein" current={45} goal={200} color="blue" />
      <MacroCard title="Fat" current={30} goal={80} color="green" />
    </div>
  );
}

function DailyScoreSection() {
  return (
    <div className="mt-5">
      <DailyScoreCard />
    </div>
  );
}

function MetricsSection() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4">
      <MetricCard icon={<Droplets />} title="Water" value="5 / 8" unit="glasses" />
      <MetricCard icon={<Footprints />} title="Steps" value="7,500" unit="steps" />
      <MetricCard icon={<Scale />} title="Weight" value="80.8" unit="kg" />
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

function MealsSection() {
  return (
    <div className="mt-7">
      <SectionHeader title="Today&apos;s meals" actionLabel="View all" />

      <div className="space-y-3">
        <MealCard title="Breakfast" subtitle="Recommended" calories="440 - 615 kcal" />
        <MealCard title="Lunch" subtitle="Recommended" calories="527 - 703 kcal" />
        <MealCard title="Dinner" subtitle="Recommended" calories="615 - 780 kcal" />
      </div>
    </div>
  );
}

function QuickActionsSection() {
  return (
    <div className="mt-5">
      <QuickActions />
    </div>
  );
}


function WeeklyProgressSection() {
  return (
    <div className="mt-5">
      <WeeklyProgress />
    </div>
  );
}

function HealthTipSection() {
  return (
    <div className="mt-5">
      <HealthTipCard />
    </div>
  );
}