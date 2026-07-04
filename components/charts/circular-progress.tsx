import { Flame } from "lucide-react";

type CircularProgressProps = {
  value: number;
  max: number;
  label: string;
  subLabel?: string;
};

export function CircularProgress({
  value,
  max,
  label,
  subLabel,
}: CircularProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const radius = 105;
  const stroke = 18;
  const center = 120;
  const progressAngle = 180 - (percentage / 100) * 180;

  function polarToCartesian(angle: number) {
    const angleRad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(angleRad),
      y: center - radius * Math.sin(angleRad),
    };
  }

  function describeArc(start: number, end: number) {
    const startPoint = polarToCartesian(start);
    const endPoint = polarToCartesian(end);

    return [
      "M",
      startPoint.x,
      startPoint.y,
      "A",
      radius,
      radius,
      0,
      0,
      1,
      endPoint.x,
      endPoint.y,
    ].join(" ");
  }

  return (
    <div className="relative mx-auto flex h-[190px] w-[260px] items-center justify-center">
      <svg width="260" height="170" viewBox="0 0 240 160">
        <path
          d={describeArc(180, 0)}
          fill="none"
          stroke="#DBEAFE"
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        <path
          d={describeArc(180, progressAngle)}
          fill="none"
          stroke="#2563EB"
          strokeWidth={stroke}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>

      <div className="absolute top-[52px] text-center">
        <Flame className="mx-auto mb-2 text-brand-primary" size={24} />
        <p className="text-5xl font-bold tracking-tight">{label}</p>
        {subLabel && <p className="mt-1 text-base text-brand-muted">{subLabel}</p>}
      </div>

      <div className="absolute bottom-4 left-8 text-xs font-medium text-brand-muted">
        0
      </div>

      <div className="absolute bottom-4 right-8 text-xs font-medium text-brand-muted">
        100
      </div>

      <div className="absolute right-6 top-11 rounded-full border-2 border-brand-primary bg-white px-2 py-1 text-xs font-bold text-brand-primary shadow-sm">
        {Math.round(percentage)}%
      </div>
    </div>
  );
}