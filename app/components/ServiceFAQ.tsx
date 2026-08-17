'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

import AnimatedButton from './AnimatedButton'
import SubHeadingMarquee from './SubHeadingMarquee'
import type { ServiceFaq } from '../data/serviceDetails'

interface ServiceFAQProps {
  marquee: string
  title: string
  titleAccent: string
  image: string
  faqs: ServiceFaq[]
}

const ServiceFAQ = ({
  marquee,
  title,
  titleAccent,
  image,
  faqs,
}: ServiceFAQProps) => {
  const [activeId, setActiveId] = useState<string | null>(faqs[0]?.id ?? null)

  const toggleFAQ = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mx-auto w-full max-w-350 px-5 md:px-8">
      <SubHeadingMarquee text={marquee} color="black" />

      <div className="flex items-end justify-between py-6">
        <h2 className="font-mona-bold text-[clamp(3.5rem,9vw,9rem)] uppercase leading-none tracking-wide">
          {title} <span className="text-[#8D8D8D]">{titleAccent}</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr]">
        {/* Left */}
        <div className="overflow-hidden rounded-4xl">
          <Image
            src={image}
            alt={`${title} ${titleAccent}`}
            width={700}
            height={900}
            quality={100}
            unoptimized
            className="h-full min-h-125 w-full object-cover lg:min-h-162.5"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          {faqs.map((faq) => {
            const open = activeId === faq.id

            return (
              <div key={faq.id} className="border-b border-[#E5E5E5]">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <div className="flex gap-3">
                    <span className="mt-1 text-xs text-[#888]">
                      ({faq.id})
                    </span>

                    <h3 className="text-lg font-medium md:text-2xl">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 ${
                      open ? 'rotate-45 bg-[#0079ff]' : 'bg-[#111]'
                    }`}
                  >
                    <Plus size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden pl-9">
                    <p className="max-w-xl text-base leading-relaxed text-[#6E6E6E]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="mt-auto pt-8">
            <p className="mb-4 text-sm text-[#777]">Any questions?</p>

            <AnimatedButton
              text="Ask A Question"
              href="/contact"
              theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceFAQ
