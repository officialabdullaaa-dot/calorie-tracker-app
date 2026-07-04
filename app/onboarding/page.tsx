"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { OnboardingProgress } from "@/components/onboarding/onboarding-progress";
import { QuestionRenderer } from "@/components/onboarding/question-renderer";
import { onboardingQuestions } from "@/constants/onboarding-questions";
import { createProfileFromOnboarding } from "@/services/health/nutrition-calculator";
import { useNutritionStore } from "@/store/nutrition-store";
import type { OnboardingData } from "@/store/onboarding-store";

export default function OnboardingPage() {
  const router = useRouter();
  const setProfile = useNutritionStore((state) => state.setProfile);

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [units, setUnits] = useState<Record<string, string>>({});

  const question = onboardingQuestions[step];

  const currentValue = answers[question.id] ?? "";
  const currentUnit =
    units[question.id] ??
    question.defaultUnit ??
    question.unitOptions?.[0]?.value ??
    "";

  function updateAnswer(value: string) {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));
  }

  function updateUnit(unit: string) {
    setUnits((prev) => ({
      ...prev,
      [question.id]: unit,
    }));
  }

  function finishOnboarding() {
    const onboardingData: OnboardingData = {
      name: answers.name,
      gender: answers.gender,
      age: Number(answers.age),
      height: Number(String(answers.height).replace(/\D/g, "")),
      heightUnit: (units.height || "cm") as "cm" | "ft",
      weight: Number(answers.weight),
      weightUnit: (units.weight || "kg") as "kg" | "lb",
      goal: answers.goal as OnboardingData["goal"],
      activityLevel: answers.activityLevel as OnboardingData["activityLevel"],
    };

    const profile = createProfileFromOnboarding(onboardingData);

    setProfile(profile);
    router.push("/dashboard");
  }

  function nextStep() {
    if (step < onboardingQuestions.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }

    finishOnboarding();
  }

  const currentPhase = useMemo(() => {
    if (step <= 4) return 0;
    if (step === 5) return 1;
    return 2;
  }, [step]);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <div className="mx-auto max-w-md px-5 pt-6">
        <OnboardingProgress currentStep={currentPhase} />
      </div>

      <QuestionRenderer
        question={question}
        value={currentValue}
        unit={currentUnit}
        onChange={updateAnswer}
        onUnitChange={updateUnit}
        onNext={nextStep}
        canGoBack={step > 0}
        onBack={() => setStep((prev) => Math.max(prev - 1, 0))}
      />
    </main>
  );
}