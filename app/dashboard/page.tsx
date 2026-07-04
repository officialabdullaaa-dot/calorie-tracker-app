import { CaloriesSection } from "@/components/dashboard/calories-section";
import { DailyScoreSection } from "@/components/dashboard/daily-score-section";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { HealthTipSection } from "@/components/dashboard/health-tip-section";
import { MacrosSection } from "@/components/dashboard/macros-section";
import { MealsSection } from "@/components/dashboard/meals-section";
import { MetricsSection } from "@/components/dashboard/metrics-section";
import { QuickActionsSection } from "@/components/dashboard/quick-actions-section";
import { WeeklyProgressSection } from "@/components/dashboard/weekly-progress-section";
import { BottomNav } from "@/components/layout/bottom-nav";
import { DateStrip } from "@/components/layout/date-strip";
import { TodaysPlanSection } from "@/components/dashboard/todays-plan-section";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-brand-bg px-5 pb-28 pt-6 text-brand-text">
      <section className="mx-auto max-w-md">
        <DashboardHeader />
        <DateStrip />
        <CaloriesSection />
        <MacrosSection />
        <TodaysPlanSection />
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