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
  <div className="marquee-track grid-a4">
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
          className="h-18 w-auto object-contain transition-all duration-500 grayscale-100 hover:grayscale-0 hover:opacity-100"
          unoptimized
        />
      </div>
    ))}
  </div>
);

const Partners = () => {
  return (
    <section className="py-10">
      <div className="">
        <h2 className="community-title text-white roboto-condensed mb-4 text-center font-semibold text-[clamp(2rem,6vw,3.5rem)] tracking-wider">
          Portfolio
        </h2>
        <LogoRow />
      </div>
    </section>
  );
}

export default Partners;