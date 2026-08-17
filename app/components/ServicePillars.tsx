'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SubHeadingMarquee from './SubHeadingMarquee'
import type { ServicePillar } from '../data/serviceDetails'

gsap.registerPlugin(ScrollTrigger)

interface ServicePillarsProps {
  marquee: string
  title: string
  titleAccent: string
  description: string
  pillars: ServicePillar[]
}

const ServicePillars = ({
  marquee,
  title,
  titleAccent,
  description,
  pillars,
}: ServicePillarsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="mx-auto w-full">
      <div className="overflow-hidden rounded-[38px] bg-[#101010] p-6 text-white md:p-10 lg:p-14">
        <div className="mx-auto max-w-350">
          <SubHeadingMarquee text={marquee} color="white" />

          <div className="mt-6 mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-mona-bold text-[clamp(3.5rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide">
              {title}
              <br />
              <span className="text-[#8B8B8B]">{titleAccent}</span>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-[#9A9A9A] md:text-xl">
              {description}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.id}
                className="pillar-card group flex flex-col overflow-hidden rounded-[26px] border border-white/5 bg-[#181818] transition-all duration-500 hover:-translate-y-2 hover:border-[#0079ff]/40 hover:bg-[#1d1d1d]"
              >
                {/* Graphic */}
                <div className="relative overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={pillar.image}
                    alt={`${pillar.abbr} — ${pillar.name}`}
                    width={520}
                    height={360}
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-[#0079ff] px-3 py-1 text-xs font-semibold tracking-wider text-white">
                    ({pillar.id})
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-mona-bold text-[clamp(2.5rem,4vw,3.5rem)] uppercase leading-none">
                    {pillar.abbr}
                  </h3>

                  <span className="mt-2 block text-sm uppercase tracking-[0.15em] text-[#0079ff]">
                    {pillar.name}
                  </span>

                  <p className="mt-5 text-lg font-medium leading-snug text-white/90">
                    {pillar.title}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#8A8A8A]">
                    {pillar.description}
                  </p>

                  <div className="my-6 h-px bg-white/10" />

                  <ul className="mt-auto flex flex-col gap-3">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-[#B4B4B4]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0079ff]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePillars
