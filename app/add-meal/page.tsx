"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AddMealPage() {
  const [quantity, setQuantity] = useState("150");
  const [caloriesPer100g, setCaloriesPer100g] = useState("165");
  const [mealType, setMealType] = useState("Lunch");

  const totalCalories = useMemo(() => {
    const qty = Number(quantity);
    const calories = Number(caloriesPer100g);

    if (!qty || !calories) return 0;

    return Math.round((qty / 100) * calories);
  }, [quantity, caloriesPer100g]);

  return (
    <main className="min-h-screen bg-brand-bg px-5 pb-10 pt-6 text-brand-text">
      <section className="mx-auto max-w-md">
        <div className="mb-6 flex items-center gap-4">
          <a href="/dashboard" className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft">
            <ArrowLeft size={22} />
          </a>

          <div>
            <h1 className="text-2xl font-bold">Add meal</h1>
            <p className="text-sm text-brand-muted">Enter food and quantity manually</p>
          </div>
        </div>

        <Card>
          <label className="text-sm font-bold">Meal type</label>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {["Breakfast", "Lunch", "Dinner", "Snack"].map((meal) => (
  <button
    key={meal}
    onClick={() => setMealType(meal)}
    className={`rounded-2xl px-4 py-3 text-sm font-bold transition active:scale-95 ${
      mealType === meal
        ? "bg-brand-primary text-white"
        : "bg-brand-soft text-brand-primary"
    }`}
  >
    {meal}
  </button>
))}
          </div>
        </Card>

        <Card className="mt-5 space-y-4">
          <Input label="Food name" placeholder="Chicken breast" />
          <Input
            label="Quantity in grams"
            placeholder="150"
            value={quantity}
            onChange={setQuantity}
          />
          <Input
            label="Calories per 100g"
            placeholder="165"
            value={caloriesPer100g}
            onChange={setCaloriesPer100g}
          />
        </Card>

        <Card className="mt-5">
          <p className="text-sm text-brand-muted">Estimated calories</p>
          <h2 className="mt-2 text-4xl font-bold">{totalCalories} kcal</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Based on {quantity || 0}g × {caloriesPer100g || 0} kcal per 100g
          </p>
        </Card>

        <Button className="mt-6 w-full gap-2">
          <Plus size={18} />
          Add to today
        </Button>
      </section>
    </main>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-sm font-bold">{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-primary"
      />
    </div>
  );
}