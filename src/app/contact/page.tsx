import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VerifiedBadge, PlaceholderBadge } from "@/components/Badge";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export const metadata: Metadata = { title: "Contact Us — TGDDCF" };

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div className="w-20 shrink-0 pt-0.5 text-[11px] font-bold tracking-wide text-maroon uppercase">{label}</div>
      <div>{children}</div>
    </div>
  );
}

function Field({ label, type = "text", textarea = false }: { label: string; type?: string; textarea?: boolean }) {
  return (
    <div className="mb-3.5">
      <label className="mb-1.5 block text-[11px] font-semibold tracking-wide text-ink-soft uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          rows={4}
          placeholder="How can we help?"
          className="w-full rounded border border-paper-line bg-white px-3 py-2.5 text-[13.5px]"
        />
      ) : (
        <input
          type={type}
          placeholder={label === "Name" ? "Your name" : "you@example.com"}
          className="w-full rounded border border-paper-line bg-white px-3 py-2.5 text-[13.5px]"
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Us" />
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 px-6 py-12 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <VerifiedBadge>Verified — registered address</VerifiedBadge>
          </div>
          <InfoRow label="Address">Vijaya Bhavan, Lalapet, Tarnaka, Hyderabad – 500017, Telangana</InfoRow>
          <InfoRow label="Phone">
            <PlaceholderBadge />
            <br />
            +91-XX-XXXX-XXXX
          </InfoRow>
          <InfoRow label="Email">
            <PlaceholderBadge />
            <br />
            info@tgdairy.telangana.gov.in
          </InfoRow>
          <div className="mt-4.5">
            <PlaceholderImage label="Map embed pending — Vijaya Bhavan, Lalapet, Tarnaka" aspect="16/10" />
          </div>
        </div>
        <div className="rounded-md border border-paper-line bg-white p-5">
          <h3 className="font-display mb-4 text-base">Send a message</h3>
          <Field label="Name" />
          <Field label="Email" type="email" />
          <Field label="Message" textarea />
          <button
            type="button"
            className="w-full rounded bg-forest py-2.75 text-center text-[12.5px] font-bold tracking-wide text-paper uppercase"
          >
            Submit
          </button>
          <p className="mt-2.5 text-[11px] text-muted">
            Form is non-functional in this preview — wire to a real endpoint before launch.
          </p>
        </div>
      </div>
    </>
  );
}
