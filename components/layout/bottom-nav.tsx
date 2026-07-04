import { BarChart3, Home, Lightbulb, Plus, Settings } from "lucide-react";

export function BottomNav() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2">
      <div className="relative flex items-center justify-between rounded-[2rem] bg-white px-7 py-4 shadow-soft">
        <NavItem icon={<Home size={22} />} label="Home" active />
        <NavItem icon={<BarChart3 size={22} />} label="Analytics" />

        <a
  href="/add-meal"
  className="flex h-16 w-16 -translate-y-5 items-center justify-center rounded-full bg-brand-primary text-white shadow-soft transition active:scale-95"
>
  <Plus size={30} />
</a>

        <NavItem icon={<Lightbulb size={22} />} label="Plan" />
        <NavItem icon={<Settings size={22} />} label="Settings" />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-1 text-xs font-semibold ${
        active ? "text-brand-primary" : "text-brand-muted"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}