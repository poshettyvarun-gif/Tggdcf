import Image from "next/image";

export function Masthead() {
  return (
    <div className="border-b border-paper-line bg-white">
      <div className="mx-auto max-w-[1180px] px-6 py-4">
        <Image
          src="/images/official/dairytg_header.png"
          alt="Telangana Dairy Development Cooperative Federation Limited — official Telangana and Vijaya branding"
          width={1167}
          height={125}
          className="h-auto w-full max-w-[1167px]"
          priority
        />
      </div>
    </div>
  );
}
