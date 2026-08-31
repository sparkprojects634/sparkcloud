"use client";

import Image from "next/image";

const PARTNERS = [
  "/images/portfolio/1.png",
  "/images/portfolio/2.png",
  "/images/portfolio/3.png",
  "/images/portfolio/4.png",
  "/images/portfolio/5.png",
  "/images/portfolio/6.png",
  "/images/portfolio/7.png",
  "/images/portfolio/8.png",
  "/images/portfolio/9.png",
  "/images/portfolio/10.png",
];

const LogoRow = () => (
  <div className="relative w-full overflow-hidden">

    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#040404] to-transparent md:w-40 lg:w-56"
    />

    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#040404] to-transparent md:w-40 lg:w-56"
    />

    <div className="marquee-track">
      {[...PARTNERS, ...PARTNERS].map((logo, i) => (
        <div
          key={i}
          className="flex h-28 w-56 shrink-0 items-center justify-center px-8"
        >
          <Image
            src={logo}
            alt=""
            width={160}
            height={80}
            className="h-18 w-auto object-contain grayscale opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            unoptimized
          />
        </div>
      ))}
    </div>

  </div>
);

const Partners = () => {
  return (
    <div className="w-full max-w-330 overflow-hidden py-20" id="partners">
      <div className="">
        <h2 className="community-title text-white roboto-condensed mb-4 text-center font-semibold text-[clamp(2rem,6vw,3.5rem)] tracking-wider">
          Portfolio
        </h2>
        <LogoRow />
      </div>
    </div>
  );
}

export default Partners;