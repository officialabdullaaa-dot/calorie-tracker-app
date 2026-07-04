export function DashboardHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-brand-muted">Good morning,</p>
        <h1 className="mt-1 text-3xl font-bold">Maaz 👋</h1>
        <p className="mt-1 text-sm text-brand-muted">Tuesday, 4 July</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft">
          🔔
        </button>

        <img
          src="https://i.pravatar.cc/100"
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
