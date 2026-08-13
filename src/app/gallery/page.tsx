import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { GALLERY_CATEGORIES } from "@/data/official";

export const metadata: Metadata = { title: "Photo Gallery — TGDDCF" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Photo Gallery" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — categories sourced from tgdairy.telangana.gov.in</VerifiedBadge>
        <div className="mt-6 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
          {GALLERY_CATEGORIES.map((cat) => (
            <PlaceholderImage key={cat.label} label={`${cat.label} — ${cat.count} photo${cat.count > 1 ? "s" : ""}`} />
          ))}
        </div>
        <p className="mt-4 text-[11px] text-muted">
          Categories and photo counts match the Federation&rsquo;s official gallery; the underlying photos have
          not been published in a form this site can reproduce.
        </p>
      </div>
    </>
  );
}
