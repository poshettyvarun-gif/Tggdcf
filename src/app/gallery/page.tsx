import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = { title: "Photo Gallery — TGDDCF" };

const LABELS = [
  "Plant floor",
  "Farmer visit",
  "Procurement",
  "Product line",
  "Leadership event",
  "Quality lab",
  "Distribution",
  "Training center (VTC)",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Photo Gallery" />
      <div className="mx-auto max-w-[1180px] px-6 py-12">
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
          {LABELS.map((label) => (
            <PlaceholderImage key={label} label={`${label} — pending`} />
          ))}
        </div>
      </div>
    </>
  );
}
