import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PlaceholderBadge } from "@/components/Badge";

export const metadata: Metadata = { title: "Citizen Charter — TGDDCF" };

export default function CharterPage() {
  return (
    <>
      <PageHero eyebrow="Governance" title="Citizen Charter" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <div className="mb-3.5">
          <PlaceholderBadge />
        </div>
        <p className="text-ink-soft">
          The Federation&rsquo;s service standards, grievance-redressal timelines, and citizen commitments belong
          here — replace with the actual Citizen Charter document/text.
        </p>
      </div>
    </>
  );
}
