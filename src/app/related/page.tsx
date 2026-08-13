import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge } from "@/components/Badge";
import { RELATED_LINKS } from "@/data/official";

export const metadata: Metadata = { title: "Related Links — TGDDCF" };

export default function RelatedPage() {
  return (
    <>
      <PageHero eyebrow="Elsewhere" title="Related Links" />
      <div className="w-full px-6 py-12 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — sourced from tgdairy.telangana.gov.in</VerifiedBadge>
        <ul className="mt-4">
          {RELATED_LINKS.map((link) => (
            <li
              key={link.href}
              className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]"
            >
              <span className="font-semibold">{link.label}</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[11.5px] text-muted hover:text-maroon hover:underline"
              >
                {link.href.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
