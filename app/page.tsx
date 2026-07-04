import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-brand-bg px-5 py-6 text-brand-text">
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center">
        <p className="text-sm font-semibold text-brand-primary">Calorie Tracker</p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Healthy habits, one day at a time.
        </h1>

        <p className="mt-5 text-base leading-7 text-brand-muted">
          Track calories, meals, water, steps, weight, waist and progress from
          one clean dashboard.
        </p>

        <a href="/dashboard" className="mt-8">
          <Button className="w-full gap-2">
            Go to dashboard
            <ArrowRight size={18} />
          </Button>
        </a>
      </section>
    </main>
  );
}
