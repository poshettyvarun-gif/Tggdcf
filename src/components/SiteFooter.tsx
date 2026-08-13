import Link from "next/link";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block py-1 text-sm text-[#c9d4cd] opacity-85 hover:text-brass hover:opacity-100">
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-9 bg-forest-deep pt-10 pb-5.5 text-[#c9d4cd]">
      <div className="grid w-full grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 md:px-10 lg:px-16">
        <div>
          <h4 className="mb-3 text-xs font-bold tracking-wide text-brass uppercase">Vijaya / TGDDCF</h4>
          <p className="max-w-[220px] text-[12.5px] opacity-85">
            Telangana Dairy Development Cooperative Federation Ltd.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold tracking-wide text-brass uppercase">Explore</h4>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/products">Products</FooterLink>
          <FooterLink href="/marketing">Marketing</FooterLink>
          <FooterLink href="/gallery">Photo Gallery</FooterLink>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold tracking-wide text-brass uppercase">Governance</h4>
          <FooterLink href="/gos">GOs &amp; Circulars</FooterLink>
          <FooterLink href="/charter">Citizen Charter</FooterLink>
          <FooterLink href="/rti">RTI</FooterLink>
          <FooterLink href="/related">Related Links</FooterLink>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold tracking-wide text-brass uppercase">Registered Office</h4>
          <p className="text-[12.5px] opacity-85">
            Vijaya Bhavan, Lalapet, Tarnaka,
            <br />
            Hyderabad – 500017
          </p>
        </div>
      </div>
      <div className="mt-6 w-full border-t border-brass/25 px-6 pt-4 text-center text-[11px] text-[#8fa095] md:px-10 lg:px-16">
        Content sourced from tgdairy.telangana.gov.in where published; sections marked &ldquo;Not yet
        published&rdquo; reflect gaps in the Federation&rsquo;s own site.
      </div>
    </footer>
  );
}
