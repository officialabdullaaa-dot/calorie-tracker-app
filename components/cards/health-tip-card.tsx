import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function HealthTipCard() {
  return (
    <Card className="bg-brand-primary text-white">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
          <Sparkles size={22} />
        </div>

        <div>
          <p className="text-sm font-semibold text-white/75">Today&apos;s tip</p>
          <h3 className="mt-1 text-lg font-bold">
            Add protein to your next meal
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/80">
            You&apos;re a little behind your protein goal. Try eggs, chicken,
            Greek yogurt, or lentils.
          </p>
        </div>
      </div>
    </Card>
  );
}