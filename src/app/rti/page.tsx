import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ListRow } from "@/components/ListRow";
import { PlaceholderBadge } from "@/components/Badge";

export const metadata: Metadata = { title: "RTI — TGDDCF" };

export default function RtiPage() {
  return (
    <>
      <PageHero eyebrow="Transparency" title="Right to Information" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <ul>
          <ListRow title="Public Information Officer — designation & contact" detail={<PlaceholderBadge />} />
          <ListRow title="RTI application procedure" detail={<PlaceholderBadge />} />
          <ListRow title="Suo-motu disclosures (Section 4(1)(b))" detail={<PlaceholderBadge />} />
        </ul>
      </div>
    </>
  );
}
