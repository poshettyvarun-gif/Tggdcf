import Image from "next/image";
import { VerifiedBadge } from "@/components/Badge";
import { CampaignCarousel } from "@/components/CampaignCarousel";

const LEADERS = [
  { photo: "/images/official/cm.png", name: "Sri A Revanth Reddy", title: "Hon’ble Chief Minister, Telangana" },
  {
    photo: "/images/official/Minister.png",
    name: "Sri Vakiti Srihari",
    title: "Hon’ble Minister for Animal Husbandry, Dairy Development and Fisheries, Sports and Youth Services",
  },
  { photo: "/images/official/chairman.png", name: "Sri Gutha Amith Reddy", title: "Hon’ble Chairman, TGDDCF Ltd" },
];

const WHY = [
  {
    image: "/images/campaign/farmer-milking.png",
    alt: "Dairy farmer milking a cow",
    title: "Farmer-first procurement",
    copy: "Fair pricing routed through village cooperative societies.",
    contain: false,
  },
  {
    image: "/images/campaign/dairy-cattle.png",
    alt: "Dairy cattle at a feeding station",
    title: "Quality-tested at every stage",
    copy: "Chilling centres and plants run to state food-safety standards.",
    contain: false,
  },
  {
    image: "/images/campaign/telangana-map.png",
    alt: "Map of Telangana and its districts",
    title: "Telangana’s own brand",
    copy: "Decades of daily presence in homes across the state.",
    contain: true,
  },
];

export default function HomePage() {
  return (
    <>
      <div className="w-full px-6 pt-5 md:px-10 lg:px-16">
        <VerifiedBadge>Verified — matches official site (screenshot, Aug 2026)</VerifiedBadge>

        <div className="mt-4.5 mb-7.5 flex items-center overflow-hidden rounded bg-paper-line text-sm font-semibold">
          <span className="bg-maroon px-4 py-2.5 text-white">Quotes on Dairy</span>
          <span className="px-4 py-2.5 text-ink-soft">Health is Wealth</span>
        </div>

        <div className="flex flex-wrap justify-center gap-10 pt-2 pb-9.5">
          {LEADERS.map((leader) => (
            <div key={leader.name} className="max-w-[190px] text-center">
              <Image
                src={leader.photo}
                alt={leader.name}
                width={150}
                height={150}
                className="mx-auto mb-3 h-[150px] w-[150px] rounded-full border-3 border-brass bg-brass-soft object-cover"
              />
              <h3 className="font-display mb-1 text-base text-forest-deep">{leader.name}</h3>
              <p className="text-xs text-ink-soft">{leader.title}</p>
            </div>
          ))}
        </div>

        <div className="pb-11">
          <CampaignCarousel />
        </div>
      </div>

      <div className="border-t border-b border-paper-line bg-white py-12">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <div className="mx-auto mb-8 max-w-[640px] text-center">
            <p className="mb-2 text-[11px] font-bold tracking-[0.18em] text-maroon uppercase">Why Vijaya</p>
            <h2 className="font-display text-[clamp(22px,3vw,28px)] text-forest-deep">
              Milk you can trace back to a farmer, not a factory
            </h2>
          </div>
          <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(210px,1fr))]">
            {WHY.map((item) => (
              <div key={item.title} className="rounded-md border border-paper-line bg-white p-5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={640}
                  height={320}
                  className={`mb-3.5 aspect-16/8 w-full rounded border border-paper-line ${
                    item.contain ? "-mt-0.5 bg-white object-contain p-2.5" : "-mt-0.5 object-cover"
                  }`}
                />
                <h3 className="font-display my-2 text-base">{item.title}</h3>
                <p className="text-[13px] text-ink-soft">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
