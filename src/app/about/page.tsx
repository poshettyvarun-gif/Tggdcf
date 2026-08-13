import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge, PlaceholderBadge } from "@/components/Badge";
import { ListRow } from "@/components/ListRow";
import { WINGS, STAFF_PATTERN_DISTRICTS } from "@/data/official";

export const metadata: Metadata = { title: "About Us — TGDDCF" };

const OBJECTIVES = [
  "Facilitating seamless connections between milk producers and consumers",
  "Enabling milk producers to own and manage procurement, processing, and marketing systems",
  "Allowing small-scale farmers (owning 2–3 animals) to sustain livelihoods through dairying",
  "Establishing dairying as an independent, self-sustaining economic activity",
  "Regulating market prices to provide fair compensation to farmers",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About Us" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — sourced from tgdairy.telangana.gov.in</VerifiedBadge>

        <h2 id="introduction" className="font-display mt-6 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Introduction
        </h2>
        <p className="mb-4 text-ink-soft italic">
          &ldquo;TGDDCF Ltd seeks to usher in an era of rural prosperity in Telangana State through organized
          commercial dairying based on the principles of cooperatives.&rdquo;
        </p>
        <p className="mb-4 text-ink-soft">
          The Federation aims to transform itself into a vehicle for village-based dairy sector development,
          integrating milk producers with urban and metropolitan consumers. It operates the Vijaya brand from
          Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad – 500017.
        </p>

        <h2 id="objectives" className="font-display mt-8 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Objectives
        </h2>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-ink-soft">
          {OBJECTIVES.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>

        <h2 id="functions" className="font-display mt-8 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Functions
        </h2>
        <p className="mb-2 text-ink-soft">
          <PlaceholderBadge>Not yet published</PlaceholderBadge>
        </p>
        <p className="mb-4 text-ink-soft">
          The Federation has not published a detailed Functions statement on its official site as of this
          writing.
        </p>

        <h2 id="organogram" className="font-display mt-8 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Organogram &amp; Staff Pattern
        </h2>
        <ul className="mb-8">
          <ListRow title="TGDDCF Ltd Organogram" />
          {STAFF_PATTERN_DISTRICTS.map((d) => (
            <ListRow key={d.id} title={`Staff Pattern — ${d.label}`} />
          ))}
        </ul>

        <h2 id="wings" className="font-display mt-8 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Wings &amp; Sections
        </h2>
        <ul>
          {WINGS.map((w) => (
            <ListRow key={w} title={w} />
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-muted">
          The Federation has not published detailed content for most wings as of this writing.
        </p>
      </div>
    </>
  );
}
