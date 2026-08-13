import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge, PlaceholderBadge } from "@/components/Badge";
import { ListRow } from "@/components/ListRow";

export const metadata: Metadata = { title: "RTI — TGDDCF" };

export default function RtiPage() {
  return (
    <>
      <PageHero eyebrow="Transparency" title="Right to Information" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — sourced from tgdairy.telangana.gov.in</VerifiedBadge>
        <ul className="mt-4">
          <ListRow title="List of Appellate Authority, PIOs & APIOs" />
          <ListRow title="RTI application procedure" detail={<PlaceholderBadge>Not yet published</PlaceholderBadge>} />
          <ListRow title="Suo-motu disclosures (Section 4(1)(b))" detail={<PlaceholderBadge>Not yet published</PlaceholderBadge>} />
        </ul>
      </div>
    </>
  );
}
