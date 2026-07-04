import { CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function DailyScoreCard() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-brand-muted">Daily score</p>
          <h2 className="mt-1 text-3xl font-bold">92%</h2>
          <p className="mt-1 text-sm font-semibold text-brand-success">
            Excellent day
          </p>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-2xl font-bold text-brand-primary">
          92
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <ScoreItem type="good" label="Calories on track" />
        <ScoreItem type="good" label="Water goal almost done" />
        <ScoreItem type="warn" label="Steps need attention" />
      </div>
    </Card>
  );
}

function ScoreItem({ type, label }: { type: "good" | "warn"; label: string }) {
  const Icon = type === "good" ? CheckCircle2 : AlertCircle;

  return (
    <div className="flex items-center gap-2">
      <Icon
        size={18}
        className={type === "good" ? "text-brand-success" : "text-brand-warning"}
      />
      <span className="text-brand-muted">{label}</span>
    </div>
  );
}