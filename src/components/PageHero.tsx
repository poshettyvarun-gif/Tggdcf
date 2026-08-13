export function PageHero({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-forest-deep via-forest to-maroon-deep py-10 text-center text-paper">
      <div className="relative w-full px-6 md:px-10 lg:px-16">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.24em] text-brass uppercase">{eyebrow}</p>
        <h1 className="font-display text-[30px] font-bold">{title}</h1>
      </div>
    </div>
  );
}
