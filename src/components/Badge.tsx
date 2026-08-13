export function VerifiedBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a9ccb4] bg-[#e4f0e7] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-[#2e6b47]">
      ✓ {children}
    </span>
  );
}

export function PlaceholderBadge({ children = "Placeholder" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-brass bg-[#f3e9cd] px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-widest text-[#9a7a38]">
      {children}
    </span>
  );
}
