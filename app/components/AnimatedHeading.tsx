'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Line {
  text: string
  highlight?: boolean
  icon?: string
  highlightedText?: string
}

interface AnimatedHeadingProps {
  lines: Line[]
}

const AnimatedHeading = ({ lines }: AnimatedHeadingProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(linesRef.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="space-y-2">
      {lines.map((line, index) => (
        <div
          key={index}
          className="overflow-hidden"
        >
          <div
            ref={(el) => {
              linesRef.current[index] = el
            }}
            className="flex flex-wrap items-center gap-4"
          >
            <h3
              className={`text-4xl font-bold uppercase leading-none md:text-5xl ${
                line.highlight ? 'text-[#828282]' : 'text-black'
              }`}
            >
              {line.text}
            </h3>

            {line.icon && (
              <>
                <Image
                  src={line.icon}
                  alt=""
                  width={80}
                  height={80}
                  aria-hidden="true"
                />

                <span className="text-4xl font-bold uppercase text-[#828282] md:text-5xl">
                  {line.highlightedText}
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnimatedHeading