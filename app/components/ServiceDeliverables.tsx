'use client'

import Image from 'next/image'

import SubHeadingMarquee from './SubHeadingMarquee'
import AnimatedTextLink from './AnimatedTextLink'
import type { ServiceDeliverable } from '../data/serviceDetails'

interface ServiceDeliverablesProps {
  marquee: string
  title: string
  titleAccent: string
  image: string
  deliverables: ServiceDeliverable[]
}

const ServiceDeliverables = ({
  marquee,
  title,
  titleAccent,
  image,
  deliverables,
}: ServiceDeliverablesProps) => {
  return (
    <div className="mx-auto w-full max-w-350 px-5 md:px-8">
      <SubHeadingMarquee text={marquee} color="black" />

      <div className="py-6">
        <h2 className="font-mona-bold text-[clamp(3.5rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide">
          {title} <span className="text-[#9A9A9A]">{titleAccent}</span>
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        {/* Image */}
        <div className="relative overflow-hidden rounded-[30px]">
          <Image
            src={image}
            alt={`${title} ${titleAccent}`}
            width={700}
            height={900}
            quality={100}
            unoptimized
            className="h-full min-h-125 w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

          <div className="absolute inset-x-6 bottom-6 text-white">
            <p className="max-w-xs text-lg font-medium leading-snug md:text-2xl">
              One retainer. Strategy, execution and reporting included.
            </p>

            <div className="mt-4">
              <AnimatedTextLink text="Start A Project" href="/contact" />
            </div>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col">
          {deliverables.map((item) => (
            <div
              key={item.id}
              className="group flex gap-5 border-b border-[#E5E5E5] py-6 transition-colors duration-300 first:pt-0"
            >
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#111] text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-[#0079ff]">
                {item.id}
              </span>

              <div>
                <h3 className="text-xl font-medium leading-snug md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-xl text-base leading-relaxed text-[#6E6E6E]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceDeliverables
