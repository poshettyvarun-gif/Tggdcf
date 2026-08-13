import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge, PlaceholderBadge } from "@/components/Badge";

export const metadata: Metadata = { title: "Key Contacts — TGDDCF" };

export default function ContactsPage() {
  return (
    <>
      <PageHero eyebrow="Directory" title="Key Contacts" />
      <div className="mx-auto max-w-[820px] px-6 py-12">
        <ul>
          <li className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]">
            <span className="font-semibold">Chairman, TGDDCF Ltd — Sri Gutha Amith Reddy</span>
            <VerifiedBadge>Verified name</VerifiedBadge>
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]">
            <span className="font-semibold">Managing Director</span>
            <PlaceholderBadge />
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]">
            <span className="font-semibold">Finance &amp; Accounts Wing</span>
            <PlaceholderBadge />
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]">
            <span className="font-semibold">Quality Control Wing</span>
            <PlaceholderBadge />
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-paper-line py-3 text-[13.5px]">
            <span className="font-semibold">Administration Wing</span>
            <PlaceholderBadge />
          </li>
        </ul>
        <p className="mt-4 text-xs text-muted">
          Designations above reflect the real site&rsquo;s structure; names/numbers besides the Chairman are
          placeholders pending verified contact details.
        </p>
      </div>
    </>
  );
}
