"use client";

import { Button } from "@/components/ui/button";

export function WelcomeStep({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <div className="mb-8 text-6xl">
        🥗
      </div>

      <h1 className="text-4xl font-bold">
        Welcome
      </h1>

      <p className="mt-4 max-w-sm text-brand-muted">
        Let's build a personalized nutrition plan that fits your lifestyle and goals.
      </p>

      <Button
        onClick={onNext}
        className="mt-12 w-full max-w-sm"
      >
        Get Started
      </Button>
    </div>
  );
}