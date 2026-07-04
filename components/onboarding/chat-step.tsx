import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ChatStepProps = {
  question: string;
  helper?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onNext: () => void;
};

export function ChatStep({
  question,
  helper,
  value,
  placeholder,
  onChange,
  onNext,
}: ChatStepProps) {
  return (
    <div className="flex min-h-screen flex-col justify-center px-5">
      <section className="mx-auto w-full max-w-md">
        <Card>
          <p className="text-sm font-bold text-brand-primary">
            Your AI nutrition coach
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight">
            {question}
          </h1>

          {helper && (
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              {helper}
            </p>
          )}

          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="mt-6 w-full rounded-2xl border border-brand-border bg-white px-4 py-4 text-base outline-none focus:border-brand-primary"
          />

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