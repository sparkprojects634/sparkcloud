'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SubHeadingMarquee from './SubHeadingMarquee'
import type { ServiceProcessStep } from '../data/serviceDetails'

gsap.registerPlugin(ScrollTrigger)

interface ServiceProcessProps {
  marquee: string
  title: string
  titleAccent: string
  steps: ServiceProcessStep[]
}

const ServiceProcess = ({
  marquee,
  title,
  titleAccent,
  steps,
}: ServiceProcessProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      gsap.fromTo(
        '.process-line',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.4,
          ease: 'power2.out',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
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
      <div className="overflow-hidden rounded-[36px] bg-[#101010] px-6 py-8 text-white md:px-10 md:py-12 lg:px-14 lg:py-16">
        <SubHeadingMarquee text={marquee} color="white" />

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-mona-bold text-[clamp(3.5rem,10vw,9rem)] uppercase leading-[0.9]">
            {title} <br />
            <span className="text-[#8D8D8D]">{titleAccent}</span>
          </h2>

          <span className="font-mona-bold text-[clamp(3rem,9vw,6rem)] leading-none text-[#8D8D8D]">
            ({steps.length.toString().padStart(2, '0')})
          </span>
        </div>

        {/* Progress rail */}
        <div className="relative mt-12 hidden h-px w-full bg-white/10 lg:block">
          <span className="process-line absolute inset-y-0 left-0 w-full bg-linear-to-r from-[#0079ff] to-transparent" />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="process-step group relative rounded-[22px] border border-white/5 bg-[#1F1F1F] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#0079ff]/40 hover:bg-[#262626]"
            >
              {/* Node dot aligned to the rail */}
              <span className="absolute -top-[calc(1.5rem+4px)] left-6 hidden h-2 w-2 rounded-full bg-[#0079ff] lg:block" />

              <span className="font-mona-bold text-5xl leading-none text-[#6D6D6D] transition-colors duration-300 group-hover:text-[#0079ff]">
                {step.id}
              </span>

              <div className="mt-6">
                <h3 className="font-mona-bold text-3xl uppercase leading-none text-white">
                  {step.title}
                </h3>

                <span className="mt-1 block font-mona-bold text-3xl uppercase leading-none text-[#6D6D6D]">
                  {step.subtitle}
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#7A7A7A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceProcess
