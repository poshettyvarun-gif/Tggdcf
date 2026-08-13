import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge } from "@/components/Badge";
import { ListRow } from "@/components/ListRow";

export const metadata: Metadata = { title: "Marketing — TGDDCF" };

export default function MarketingPage() {
  return (
    <>
      <PageHero eyebrow="Marketing" title="Marketing" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <div className="mb-3.5">
          <PlaceholderBadge />
        </div>
        <p className="mb-5 text-ink-soft">
          This section on the real site covers distribution network, parlours, booths, and marketing/dealership
          information. Replace with actual content.
        </p>
        <ul>
          <ListRow title="Vijaya Priority Parlours" detail="Placeholder" />
          <ListRow title="Distribution & Dealership" detail="Placeholder" />
          <ListRow title="Booth / Outlet Locations" detail="Placeholder" />
        </ul>
      </div>
    </>
  );
}
