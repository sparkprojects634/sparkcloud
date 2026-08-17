'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SubHeadingMarquee from './SubHeadingMarquee'
import type { ServiceCapabilityGroup } from '../data/serviceDetails'

gsap.registerPlugin(ScrollTrigger)

interface ServiceCapabilitiesProps {
  marquee: string
  title: string
  titleAccent: string
  description: string
  groups: ServiceCapabilityGroup[]
}

const ServiceCapabilities = ({
  marquee,
  title,
  titleAccent,
  description,
  groups,
}: ServiceCapabilitiesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.capability-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
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
    <div
      ref={sectionRef}
      className="mx-auto w-full max-w-350 px-5 md:px-8"
    >
      <SubHeadingMarquee text={marquee} color="black" />

      <div className="mt-6 mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-mona-bold text-[clamp(3.5rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide">
          {title} <span className="text-[#9A9A9A]">{titleAccent}</span>
        </h2>

        <p className="max-w-md text-base leading-relaxed text-[#6E6E6E] md:text-lg">
          {description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {groups.map((group) => (
          <div
            key={group.id}
            className="capability-card group relative flex flex-col overflow-hidden rounded-[26px] bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-7"
          >
            {/* Accent wash on hover */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#0079ff] transition-transform duration-500 group-hover:scale-x-100" />

            <span className="text-xs tracking-wider text-[#9A9A9A]">
              ({group.id})
            </span>

            <h3 className="mt-5 font-mona-bold text-3xl uppercase leading-none md:text-4xl">
              {group.title}
            </h3>

            <span className="mt-1 block font-mona-bold text-3xl uppercase leading-none text-[#9A9A9A] md:text-4xl">
              {group.subtitle}
            </span>

            <div className="my-6 h-px bg-[#E5E5E5]" />

            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-snug text-[#5C5C5C]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[#0079ff]"
                  >
                    <path
                      d="M2 7.5l3.2 3.2L12 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCapabilities
