import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

type MealCardProps = {
  title: string;
  subtitle: string;
  calories: string;
};

export function MealCard({ title, subtitle, calories }: MealCardProps) {
  return (
    <Card className="flex items-center justify-between p-4">
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm text-brand-muted">{subtitle}</p>
        <p className="mt-1 text-xs font-semibold text-brand-primary">
          {calories}
        </p>
      </div>

      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
        <Plus size={20} />
      </button>
    </Card>
  );
}