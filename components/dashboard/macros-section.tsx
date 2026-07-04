import { MacroCard } from "@/components/cards/macro-card";

export function MacrosSection() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-3">
      <MacroCard title="Carbs" current={70} goal={260} color="purple" />
      <MacroCard title="Protein" current={45} goal={200} color="blue" />
      <MacroCard title="Fat" current={30} goal={80} color="green" />
    </div>
  );
}
