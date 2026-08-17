'use client'

import Image from 'next/image'

import SubHeadingMarquee from './SubHeadingMarquee'
import AnimatedButton from './AnimatedButton'
import type { ServiceMetric } from '../data/serviceDetails'

interface ServiceMetricsProps {
  marquee: string
  title: string
  titleAccent: string
  description: string
  image: string
  metrics: ServiceMetric[]
}

const ServiceMetrics = ({
  marquee,
  title,
  titleAccent,
  description,
  image,
  metrics,
}: ServiceMetricsProps) => {
  return (
    <div className="mx-auto w-full max-w-350 px-5 md:px-8">
      <SubHeadingMarquee text={marquee} color="black" />

      <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-mona-bold text-[clamp(3.5rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide">
          {title} <br />
          <span className="text-[#8D8D8D]">{titleAccent}</span>
        </h2>

        <AnimatedButton text="Get In Touch" href="/contact" theme="dark" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Left — chart panel */}
        <div className="relative flex min-h-105 flex-col justify-between overflow-hidden rounded-4xl bg-[#101010] p-6 text-white md:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0079ff]" />
              organic visibility
            </span>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#A5A5A5] md:text-xl">
              {description}
            </p>
          </div>

          <Image
            src={image}
            alt="Organic visibility growth over time"
            width={640}
            height={320}
            className="mt-8 w-full"
          />
        </div>

        {/* Right — metric cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group flex h-full flex-col rounded-4xl bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mona-bold text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-wide text-[#0079ff]">
                  {metric.value}
                </h3>

                <span className="text-xs tracking-wider text-[#9A9A9A]">
                  ({metric.id})
                </span>
              </div>

              <p className="mt-4 text-lg font-medium leading-tight text-[#111]">
                {metric.label}
              </p>

              <div className="my-5 h-px bg-[#E5E5E5]" />

              <p className="text-sm leading-relaxed text-[#7A7A7A]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceMetrics
