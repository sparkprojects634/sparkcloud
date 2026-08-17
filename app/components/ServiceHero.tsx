'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ServiceHeroProps {
  eyebrow: string
  title: string
  titleAccent: string
  tagline: string
  video: string
  index: string
}

const ServiceHero = ({
  eyebrow,
  title,
  titleAccent,
  tagline,
  video,
  index,
}: ServiceHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }
      )

      gsap.fromTo(
        contentRef.current,
        { y: 0, opacity: 1 },
        {
          y: -120,
          opacity: 0.15,
          ease: 'none',
          immediateRender: false,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      )

      gsap.fromTo(
        videoRef.current,
        { padding: 0 },
        {
          padding: '18px',
          ease: 'none',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Video */}
      <div
        ref={videoRef}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full overflow-hidden rounded-3xl object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative flex h-full flex-col items-center justify-center gap-5 px-5 text-center text-white"
      >
        <span className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur-md md:text-sm">
          <span className="h-2 w-2 rounded-full bg-[#0079ff]" />
          {eyebrow}
        </span>

        <h1 className="font-mona-bold text-[clamp(4rem,15vw,13rem)] uppercase leading-[0.85] tracking-wide">
          {title}
          <br />
          <span className="text-[#828282]">{titleAccent}</span>
        </h1>

        <p className="max-w-2xl text-lg font-medium md:text-xl lg:text-3xl">
          {tagline}
        </p>
      </div>

      {/* Corner meta */}
      <div className="pointer-events-none absolute bottom-8 left-5 flex items-center gap-4 text-white/70 md:left-10">
        <Image
          src="/images/logo.svg"
          alt="SparkCloud"
          width={34}
          height={34}
          className="opacity-80"
        />
        <span className="font-mona-bold text-sm uppercase tracking-[0.2em]">
          ({index}) Service
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-5 hidden items-center gap-3 text-white/70 md:right-10 md:flex">
        <span className="text-sm uppercase tracking-[0.2em]">scroll</span>
        <span className="h-px w-12 bg-white/40" />
      </div>
    </section>
  )
}

export default ServiceHero
