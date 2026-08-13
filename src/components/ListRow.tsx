export function ListRow({ title, detail }: { title: React.ReactNode; detail?: React.ReactNode }) {
  return (
    <li className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]">
      <span className="font-semibold">{title}</span>
      {detail && <span className="shrink-0 text-[11.5px] text-muted">{detail}</span>}
    </li>
  );
}
