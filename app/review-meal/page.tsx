"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNutritionStore } from "@/store/nutrition-store";

export default function ReviewMealPage() {
  const router = useRouter();

  const meal = useNutritionStore((state) => state.pendingMeal);
  const addMeal = useNutritionStore((state) => state.addMeal);

  function handleConfirmMeal() {
    if (!meal) return;

    addMeal(meal);
    router.push("/dashboard");
  }

  if (!meal) {
    return (
      <main className="min-h-screen bg-brand-bg px-5 py-6 text-brand-text">
        <section className="mx-auto max-w-md">
          <Card>
            <h1 className="text-xl font-bold">No meal to review</h1>

            <p className="mt-2 text-sm text-brand-muted">
              Please analyze a meal first.
            </p>

            <Button
              className="mt-5 w-full"
              onClick={() => router.push("/add-meal")}
            >
              Go to Add Meal
            </Button>
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg px-5 py-6 text-brand-text">
      <section className="mx-auto max-w-md">
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
          >
            <ArrowLeft size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold">Review meal</h1>
            <p className="text-sm text-brand-muted">
              AI analyzed your meal
            </p>
          </div>
        </div>

        {/* Foods */}

        <Card>
          <h2 className="text-lg font-bold">Foods</h2>

          <div className="mt-5 space-y-4">
            {meal.foods.map((food) => (
              <FoodRow
                key={food.id}
                name={food.name}
                quantity={`${food.quantity} ${food.unit}`}
                calories={`${food.calories} kcal`}
              />
            ))}
          </div>
        </Card>

        {/* Nutrition */}

        <Card className="mt-5">
          <h2 className="text-lg font-bold">Nutrition</h2>

          <div className="mt-4 space-y-2 text-sm">
            <Row title="Calories" value={`${meal.totalCalories} kcal`} />
            <Row title="Protein" value={`${meal.totalProtein} g`} />
            <Row title="Carbs" value={`${meal.totalCarbs} g`} />
            <Row title="Fat" value={`${meal.totalFat} g`} />
          </div>
        </Card>

        {/* Coach */}

        {meal.coachNote && (
          <Card className="mt-5">
            <h2 className="text-lg font-bold">AI Coach</h2>

            <p className="mt-3 text-sm leading-6 text-brand-muted">
              {meal.coachNote}
            </p>
          </Card>
        )}

        <Button
          onClick={handleConfirmMeal}
          className="mt-6 w-full gap-2"
        >
          <Check size={18} />
          Confirm Meal
        </Button>
      </section>
    </main>
  );
}

function FoodRow({
  name,
  quantity,
  calories,
}: {
  name: string;
  quantity: string;
  calories: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-brand-muted">{quantity}</p>
      </div>

      <p className="font-semibold text-brand-primary">
        {calories}
      </p>
    </div>
  );
}

function Row({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between">
      <span>{title}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}