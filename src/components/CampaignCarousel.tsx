"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    photo: "/images/campaign/farmer-milking.png",
    alt: "Farmer milking a dairy cow",
    eyebrow: "Telangana Rising",
    title: "Growing with every dairy farmer",
    copy: "Supporting farmers, nourishing families, and strengthening Telangana's dairy ecosystem.",
  },
  {
    photo: "/images/campaign/dairy-cattle.png",
    alt: "Dairy cattle feeding at a farm",
    eyebrow: "Vijaya Dairy",
    title: "Care that begins at the farm",
    copy: "Quality milk starts with healthy cattle, skilled farmers, and daily care.",
  },
] as const;

export function CampaignCarousel() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const slideCount = SLIDES.length + 1;

  const start = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slideCount);
    }, 5000);
  };

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const show = (index: number) => {
    setCurrent(index);
    start();
  };

  return (
    <div
      className="relative aspect-21/7 max-[600px]:aspect-4/3 overflow-hidden rounded-md bg-forest-deep"
      aria-label="Telangana Rising dairy campaign"
      onMouseEnter={() => timer.current && clearInterval(timer.current)}
      onMouseLeave={start}
    >
      {SLIDES.map((slide, i) => (
        <article
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === i ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.photo}
            alt={slide.alt}
            fill
            sizes="100vw"
            className={`object-cover ${current === i ? "animate-campaign-zoom" : ""}`}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[rgba(13,54,34,0.83)] via-[rgba(13,54,34,0.28)] via-55% to-[rgba(13,54,34,0.12)]" />
          <div className="absolute top-1/2 left-[clamp(20px,5vw,64px)] max-w-[450px] -translate-y-1/2 text-white max-[600px]:max-w-[64%]">
            <p className="mb-1.5 text-[#f1d58c] text-[11px] font-semibold tracking-[0.24em] uppercase">
              {slide.eyebrow}
            </p>
            <h2 className="font-display mb-2 text-[clamp(22px,3.5vw,42px)] leading-[1.06]">{slide.title}</h2>
            <p className="text-[clamp(12px,1.4vw,15px)] text-[#e6efe9]">{slide.copy}</p>
          </div>
          <Image
            src="/images/campaign/telangana-rising.png"
            alt="Telangana Rising"
            width={150}
            height={150}
            className="absolute top-1/2 right-[clamp(18px,5vw,62px)] w-[clamp(74px,11vw,150px)] -translate-y-1/2 rounded-full shadow-[0_5px_20px_rgba(0,0,0,0.22)] max-[600px]:top-auto max-[600px]:bottom-9 max-[600px]:translate-y-0"
          />
        </article>
      ))}

      <article
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          current === SLIDES.length ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle at 50% 35%, #fffdf5 0 20%, #e7f0e9 54%, #123e2a 100%)",
        }}
      >
        <Image
          src="/images/campaign/telangana-rising.png"
          alt="Telangana Rising campaign mark"
          width={245}
          height={245}
          className="h-auto w-[clamp(130px,22vw,245px)] rounded-full shadow-[0_7px_26px_rgba(0,0,0,0.18)]"
        />
      </article>

      <div className="absolute bottom-3.5 left-1/2 z-2 flex -translate-x-1/2 gap-2">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={i < SLIDES.length ? `Show ${SLIDES[i].eyebrow} slide` : "Show Telangana Rising mark"}
            onClick={() => show(i)}
            className={`h-2.5 w-2.5 rounded-full border border-white p-0 transition-transform ${
              current === i ? "scale-115 bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
