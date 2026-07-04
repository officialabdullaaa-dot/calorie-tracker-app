import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type MealCardProps = {
  title: string;
  subtitle: string;
  calories: string;
};

export function MealCard({
  title,
  subtitle,
  calories,
}: MealCardProps) {
  return (
    <Card className="flex items-center justify-between">
      <div className="min-w-0">
        <h3 className="font-bold">{title}</h3>

        <p className="mt-1 truncate text-sm text-brand-muted">
          {subtitle}
        </p>

        <p className="mt-2 text-sm font-semibold text-brand-primary">
          {calories}
        </p>
      </div>

      <ChevronRight
        size={20}
        className="text-brand-muted"
      />
    </Card>
  );
}