type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
};

export function SectionHeader({ title, actionLabel }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>

      {actionLabel && (
        <button className="text-sm font-bold text-brand-primary">
          {actionLabel}
        </button>
      )}
    </div>
  );
}