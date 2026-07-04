type MacroCardProps = {
  title: string;
  current: number;
  goal: number;
  color: "blue" | "purple" | "green";
};

const styles = {
  blue: "bg-blue-500",
  purple: "bg-violet-500",
  green: "bg-emerald-500",
};

export function MacroCard({ title, current, goal, color }: MacroCardProps) {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className={`${styles[color]} rounded-3xl p-4 text-white shadow-soft`}>
      <p className="text-sm font-semibold text-white/80">
        {current}/{goal}
      </p>

      <div className="mt-3 h-1.5 rounded-full bg-white/30">
        <div
          className="h-1.5 rounded-full bg-white"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-3 text-sm font-bold">{title}</p>
    </div>
  );
}