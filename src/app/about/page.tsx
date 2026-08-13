import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge, PlaceholderBadge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = { title: "About Us — TGDDCF" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About Us" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <VerifiedBadge>Verified — registered address &amp; founding year</VerifiedBadge>
        <p className="mt-4 mb-4 text-ink-soft">
          The Telangana Dairy Development Cooperative Federation Ltd. operates the Vijaya brand from Vijaya
          Bhavan, Lalapet, Tarnaka, Hyderabad – 500017. Public records place its founding at 1964, predating the
          formation of Telangana state.
        </p>
        <p className="mb-6 text-ink-soft">
          <PlaceholderBadge /> Full history, vision, mission, and organisational chart go here — replace with the
          actual &ldquo;About Us&rdquo; page content from the Federation site once accessible.
        </p>
        <PlaceholderImage label="Organisational chart / history photo pending" aspect="16/9" />
      </div>
    </>
  );
}
