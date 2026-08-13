import type { Officer } from "@/data/contacts";

export function OfficerTable({ officers }: { officers: Officer[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-paper-line bg-white">
      <table className="w-full min-w-[720px] border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-paper-line bg-paper text-left text-[11px] font-bold tracking-wide text-ink-soft uppercase">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Designation</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {officers.map((o, i) => (
            <tr key={`${o.name}-${i}`} className="border-b border-paper-line last:border-0">
              <td className="px-4 py-3 font-semibold whitespace-nowrap">{o.name}</td>
              <td className="px-4 py-3 text-ink-soft">{o.designation}</td>
              <td className="px-4 py-3 text-ink-soft">{o.location}</td>
              <td className="px-4 py-3 whitespace-nowrap text-ink-soft">{o.phone}</td>
              <td className="px-4 py-3 text-ink-soft">{o.email ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
