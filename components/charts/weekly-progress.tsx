import { Card } from "@/components/ui/card";

const days = [
  { day: "Mon", value: 65 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 92 },
  { day: "Sun", value: 60 },
];

export function WeeklyProgress() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Weekly progress</h2>
          <p className="text-sm text-brand-muted">Calories goal completion</p>
        </div>

        <button className="text-sm font-bold text-brand-primary">Details</button>
      </div>

      <div className="flex h-40 items-end justify-between gap-3">
        {days.map((item) => (
          <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-28 w-full items-end rounded-full bg-brand-soft">
              <div
                className="w-full rounded-full bg-brand-primary"
                style={{ height: `${item.value}%` }}
              />
            </div>

            <span className="text-xs font-semibold text-brand-muted">
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}