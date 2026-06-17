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
        stagger: 0.3,
        ease: 'none',

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 1.2,
        }
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
            className="flex flex-wrap items-center gap-4 font-mona-bold"
          >
            <h3
              className={`text-5xl font-bold uppercase leading-none lg:leading-20 md:text-7xl lg:text-7xl ${line.highlight ? 'text-[#828282]' : 'text-black'
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
                  className='-mt-4 w-15 lg:w-20'
                />

                <span className="text-5xl font-bold uppercase text-[#828282] md:text-5xl lg:text-7xl">
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