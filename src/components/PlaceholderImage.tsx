export function PlaceholderImage({
  label,
  aspect = "4/3",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1.5 rounded border border-dashed border-brass bg-brass-soft p-2.5 text-center text-[11px] font-semibold uppercase tracking-wide text-[#7a6a3f] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AD8A44" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
