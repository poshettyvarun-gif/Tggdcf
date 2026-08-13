import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ListRow } from "@/components/ListRow";

export const metadata: Metadata = { title: "GOs & Circulars — TGDDCF" };

export default function GosPage() {
  return (
    <>
      <PageHero eyebrow="Downloads" title="GOs &amp; Circulars" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <ul>
          <ListRow title="[Placeholder] G.O. Ms. No. XX — Procurement pricing revision" detail="PDF · Placeholder" />
          <ListRow title="[Placeholder] Circular — Quality control protocol update" detail="PDF · Placeholder" />
          <ListRow title="[Placeholder] G.O. — Farmer welfare scheme notification" detail="PDF · Placeholder" />
        </ul>
      </div>
    </>
  );
}
