import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ListRow } from "@/components/ListRow";
import { PlaceholderBadge } from "@/components/Badge";

export const metadata: Metadata = { title: "Related Links — TGDDCF" };

export default function RelatedPage() {
  return (
    <>
      <PageHero eyebrow="Elsewhere" title="Related Links" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <ul>
          <ListRow title="Government of Telangana" detail="telangana.gov.in" />
          <ListRow title="Animal Husbandry, Dairy Dev. & Fisheries Dept." detail="ahddf.telangana.gov.in" />
          <ListRow title="[Placeholder] National Dairy Development Board" detail={<PlaceholderBadge />} />
        </ul>
      </div>
    </>
  );
}
