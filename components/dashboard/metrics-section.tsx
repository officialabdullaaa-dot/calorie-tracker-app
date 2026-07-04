import type { ReactNode } from "react";
import { Droplets, Footprints, Scale, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MetricsSection() {
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
