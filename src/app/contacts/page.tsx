import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge } from "@/components/Badge";
import { OfficerTable } from "@/components/OfficerTable";
import { MINISTER, STATE_OFFICERS, UNIT_OFFICERS } from "@/data/contacts";

export const metadata: Metadata = { title: "Key Contacts — TGDDCF" };

export default function ContactsPage() {
  return (
    <>
      <PageHero eyebrow="Directory" title="Key Contacts" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — sourced from tgdairy.telangana.gov.in</VerifiedBadge>

        <h2 id="minister" className="font-display mt-7 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Honourable Minister
        </h2>
        <div className="mb-8 rounded-md border border-paper-line bg-white p-5">
          <h3 className="font-display text-base">{MINISTER.name}</h3>
          <p className="mt-1 text-[13px] text-ink-soft">{MINISTER.designation}</p>
          <p className="mt-1 text-[12px] text-muted">{MINISTER.office}</p>
        </div>

        <h2 id="state-officers" className="font-display mt-9 mb-3 scroll-mt-24 text-xl text-forest-deep">
          State Officers
        </h2>
        <div className="mb-8">
          <OfficerTable officers={STATE_OFFICERS} />
        </div>

        <h2 id="unit-officers" className="font-display mt-9 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Unit Officers
        </h2>
        <OfficerTable officers={UNIT_OFFICERS} />

        <p className="mt-4 text-[11px] text-muted">
          Chairman, TGDDCF Ltd — Sri Gutha Amith Reddy (verified against the official homepage; not separately
          listed in the officer directory above).
        </p>
      </div>
    </>
  );
}
