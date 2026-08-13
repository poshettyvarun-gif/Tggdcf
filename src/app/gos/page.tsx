import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge } from "@/components/Badge";
import { ListRow } from "@/components/ListRow";

export const metadata: Metadata = { title: "GOs & Circulars — TGDDCF" };

export default function GosPage() {
  return (
    <>
      <PageHero eyebrow="Downloads" title="GOs &amp; Circulars" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — sourced from tgdairy.telangana.gov.in</VerifiedBadge>

        <h2 id="gos" className="font-display mt-7 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Government Orders
        </h2>
        <p className="mb-4 text-ink-soft">
          Government Orders relevant to the Federation are published on the Government of Telangana&rsquo;s
          central GO portal, not on the Federation&rsquo;s own site.
        </p>
        <a
          href="http://goir.telangana.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-block text-[13px] font-bold text-maroon uppercase tracking-wide hover:underline"
        >
          goir.telangana.gov.in ↗
        </a>

        <h2 id="circulars" className="font-display mt-4 mb-3 scroll-mt-24 text-xl text-forest-deep">
          Circulars
        </h2>
        <ul>
          <ListRow title="Proc No. 78/Per-I/B1/2007, dt. 16-03-2017 — G. Sunitha, Welfare Officer" />
        </ul>
      </div>
    </>
  );
}
