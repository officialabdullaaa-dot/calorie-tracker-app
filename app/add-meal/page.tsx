"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMealFromText } from "@/services/nutrition.service";
import { useNutritionStore } from "@/store/nutrition-store";
import type { MealType } from "@/types/nutrition";

const examples = [
  "2 eggs, 1 roti, 250ml milk",
  "Chicken rice, cucumber",
  "1 banana, oats, milk",
];

export default function AddMealPage() {
  const router = useRouter();

  const setPendingMeal = useNutritionStore((state) => state.setPendingMeal);

  const [mealType, setMealType] = useState<MealType>("Breakfast");
  const [rawInput, setRawInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  async function handleAnalyzeMeal() {
    if (!rawInput.trim()) return;

    setIsAnalyzing(true);

    const meal = await createMealFromText({
      rawInput,
      mealType,
    });

    setPendingMeal(meal);
    router.push("/review-meal");
  }

  return (
    <main className="min-h-screen bg-brand-bg px-5 pb-10 pt-6 text-brand-text">
      <section className="mx-auto max-w-md">
        <div className="mb-6 flex items-center gap-4">
          <a
            href="/dashboard"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
          >
            <ArrowLeft size={22} />
          </a>

          <div>
            <h1 className="text-2xl font-bold">Add meal</h1>
            <p className="text-sm text-brand-muted">Tell the app what you ate</p>
          </div>
        </div>

        <Card>
          <p className="text-sm font-bold">Meal type</p>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {(["Breakfast", "Lunch", "Dinner", "Snack"] as MealType[]).map(
              (meal) => (
                <button
                  key={meal}
                  type="button"
                  onClick={() => setMealType(meal)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition active:scale-95 ${
                    mealType === meal
                      ? "bg-brand-primary text-white"
                      : "bg-brand-soft text-brand-primary"
                  }`}
                >
                  {meal}
                </button>
              )
            )}
          </div>
        </Card>

        <Card className="mt-5">
          <div className="mb-3 flex items-center gap-2 text-brand-primary">
            <Sparkles size={20} />
            <p className="text-sm font-bold">AI meal input</p>
          </div>

          <textarea
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder="Example: 2 eggs, 1 roti, 250ml milk"
            className="min-h-36 w-full resize-none rounded-2xl border border-brand-border bg-white p-4 text-sm leading-6 outline-none focus:border-brand-primary"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setRawInput(example)}
                className="rounded-full bg-brand-soft px-3 py-2 text-xs font-bold text-brand-primary"
              >
                {example}
              </button>
            ))}
          </div>
        </Card>

        <Button
          onClick={handleAnalyzeMeal}
          disabled={!rawInput.trim() || isAnalyzing}
          className="mt-6 w-full gap-2"
        >
          <Sparkles size={18} />
          {isAnalyzing ? "Analyzing meal..." : "Analyze Meal"}
        </Button>
      </section>
    </main>
  );
}