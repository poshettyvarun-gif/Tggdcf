import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge } from "@/components/Badge";
import { ListRow } from "@/components/ListRow";

export const metadata: Metadata = { title: "Marketing — TGDDCF" };

export default function MarketingPage() {
  return (
    <>
      <PageHero eyebrow="Marketing" title="Marketing" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — sourced from tgdairy.telangana.gov.in</VerifiedBadge>
        <p className="mt-4 mb-5 text-ink-soft">
          Vijaya products reach consumers through a statewide network of dairy parlours, booths, and dealers.
          The Federation maintains an official parlour list record.
        </p>
        <ul>
          <ListRow title="Dairy Parlours List" />
        </ul>
        <p className="mt-4 text-[11px] text-muted">
          The Federation has not published further distribution/dealership figures as of this writing.
        </p>
      </div>
    </>
  );
}
