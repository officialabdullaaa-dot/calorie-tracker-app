import { Camera, Droplets, Plus, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";

export function QuickActions() {
  return (
    <Card>
      <h2 className="mb-4 text-xl font-bold">Quick actions</h2>

      <div className="grid grid-cols-4 gap-3">
        <Action icon={<Plus size={20} />} label="Meal" />
        <Action icon={<Camera size={20} />} label="Scan" />
        <Action icon={<Droplets size={20} />} label="Water" />
        <Action icon={<Scale size={20} />} label="Weight" />
      </div>
    </Card>
  );
}

function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 rounded-2xl bg-brand-soft px-3 py-4 text-brand-primary transition active:scale-95">
      {icon}
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}