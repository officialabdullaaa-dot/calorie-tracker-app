import { MealCard } from "@/components/cards/meal-card";
import { SectionHeader } from "@/components/ui/section-header";

export function MealsSection() {
  return (
    <div className="mt-7">
      <SectionHeader title="Today's meals" actionLabel="View all" />

      <div className="space-y-3">
        <MealCard title="Breakfast" subtitle="Recommended" calories="440 - 615 kcal" />
        <MealCard title="Lunch" subtitle="Recommended" calories="527 - 703 kcal" />
        <MealCard title="Dinner" subtitle="Recommended" calories="615 - 780 kcal" />
      </div>
    </div>
  );
}
