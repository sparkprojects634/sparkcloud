'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

import AnimatedButton from './AnimatedButton'
import SubHeadingMarquee from './SubHeadingMarquee'
import { faqs } from '../data/faqs'

const FAQSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mx-auto w-full max-w-350 px-5 md:px-8">

      <SubHeadingMarquee
        text="FREQUENTLY ASKED QUESTIONS"
        color="black"
      />

      <div className="flex items-end justify-between py-6">
        <h2 className="font-mona-bold text-5xl leading-none tracking-wide md:text-7xl lg:text-9xl">
          QUICK <span className="text-[#8D8D8D]">HELP</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr]">

        {/* Left */}

        <div className="overflow-hidden rounded-4xl">
          <Image
            src="/images/quick-help.webp"
            alt="FAQ"
            width={700}
            height={900}
            priority
            quality={100}
            unoptimized
            className="h-full min-h-162.5 w-full object-cover"
          />
        </div>

        {/* Right */}

        <div className="flex flex-col">

          {faqs.map((faq) => {
            const open = activeId === faq.id

            return (
              <div
                key={faq.id}
                className="border-b border-[#E5E5E5]"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between py-6 text-left"
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
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#111] text-white transition-transform duration-300 ${
                      open ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus size={18} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    open
                      ? 'grid-rows-[1fr] pb-6'
                      : 'grid-rows-[0fr]'
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

            <p className="mb-4 text-sm text-[#777]">
              Any questions?
            </p>

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

export default FAQSection