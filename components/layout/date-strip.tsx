const dates = [
  { date: "19", day: "Sat" },
  { date: "20", day: "Sun" },
  { date: "21", day: "Mon" },
  { date: "22", day: "Tue", active: true },
  { date: "23", day: "Wed" },
  { date: "24", day: "Thu" },
];

export function DateStrip() {
  return (
    <div className="mb-5 flex gap-3 overflow-x-auto rounded-[2rem] bg-white p-3 shadow-soft">
      {dates.map((item) => (
        <button
          key={item.date}
          className={`min-w-[58px] rounded-2xl px-4 py-3 text-center transition active:scale-95 ${
            item.active
              ? "bg-brand-primary text-white"
              : "bg-brand-bg text-brand-text"
          }`}
        >
          <p className="text-sm font-bold">{item.date}</p>
          <p
            className={`text-xs ${
              item.active ? "text-white/80" : "text-brand-muted"
            }`}
          >
            {item.day}
          </p>
        </button>
      ))}
    </div>
  );
}