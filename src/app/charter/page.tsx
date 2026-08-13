import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge } from "@/components/Badge";

export const metadata: Metadata = { title: "Citizen Charter — TGDDCF" };

export default function CharterPage() {
  return (
    <>
      <PageHero eyebrow="Governance" title="Citizen Charter" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-3.5">
          <PlaceholderBadge>Not yet published</PlaceholderBadge>
        </div>
        <p className="text-ink-soft">
          The Federation has not published a Citizen Charter on its official site (tgdairy.telangana.gov.in) as
          of this writing. Service standards, grievance-redressal timelines, and citizen commitments will be
          added here once the Federation releases them.
        </p>
      </div>
    </>
  );
}
