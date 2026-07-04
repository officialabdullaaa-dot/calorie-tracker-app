const steps = ["About You", "Goal", "Lifestyle", "Plan"];

export function OnboardingProgress({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex justify-between text-xs font-bold text-brand-muted">
        {steps.map((step, index) => (
          <span
            key={step}
            className={index <= currentStep ? "text-brand-primary" : ""}
          >
            {step}
          </span>
        ))}
      </div>

      <div className="h-2 rounded-full bg-brand-border">
        <div
          className="h-2 rounded-full bg-brand-primary transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}