import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { OnboardingQuestion } from "@/types/onboarding";

type QuestionRendererProps = {
  question: OnboardingQuestion;
  value: string;
  unit?: string;
  onChange: (value: string) => void;
  onUnitChange?: (unit: string) => void;
  onNext: () => void;
  onBack?: () => void;
  canGoBack?: boolean;
};

export function QuestionRenderer({
  question,
  value,
  unit,
  onChange,
  onUnitChange,
  onNext,
  onBack,
  canGoBack = false,
}: QuestionRendererProps) {
  return (
    <div className="flex min-h-screen flex-col justify-center px-5">
      <section className="mx-auto w-full max-w-md">
        {canGoBack && (
          <button
            onClick={onBack}
            className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
          >
            <ArrowLeft size={22} />
          </button>
        )}

        <Card>
          <p className="text-sm font-bold text-brand-primary">
            Your AI nutrition coach
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight">
            {question.question}
          </h1>

          {question.helper && (
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              {question.helper}
            </p>
          )}

          {question.type === "select" ? (
            <div className="mt-6 space-y-3">
              {question.options?.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChange(option.value)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left text-sm font-bold transition ${
                    value === option.value
                      ? "border-brand-primary bg-brand-soft text-brand-primary"
                      : "border-brand-border bg-white text-brand-text"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-6 flex rounded-2xl border border-brand-border bg-white p-1 focus-within:border-brand-primary">
              <input
                type={unit === "ft" ? "text" : question.type === "number" ? "number" : "text"}
                value={value}
                onChange={(e) => {
  let nextValue = e.target.value;

  if (unit === "ft") {
    nextValue = nextValue.replace(/\D/g, "");

    if (nextValue.length > 1) {
      nextValue = `${nextValue[0]}'${nextValue.slice(1, 3)}`;
    }
  }

  onChange(nextValue);
}}
                placeholder={question.placeholder}
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base outline-none"
              />

              {question.unitOptions && (
                <div className="flex shrink-0 gap-1">
                  {question.unitOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => onUnitChange?.(option.value)}
                      className={`rounded-xl px-3 text-sm font-bold ${
                        unit === option.value
                          ? "bg-brand-primary text-white"
                          : "bg-brand-soft text-brand-primary"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <Button
            onClick={onNext}
            disabled={!value.trim()}
            className="mt-6 w-full"
          >
            Continue
          </Button>
        </Card>
      </section>
    </div>
  );
}