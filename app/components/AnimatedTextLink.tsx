'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface AnimatedTextLinkProps {
  text: string
  href: string
}

const AnimatedTextLink = ({
  text,
  href,
}: AnimatedTextLinkProps) => {
  const chars = text.split('')

  return (
    <Link
      href={href}
      className="group inline-flex flex-col gap-2"
    >
      <div className="flex items-center gap-2 overflow-hidden uppercase">
        <span className="flex text-xl">
          {chars.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="relative inline-block h-[1.2em] overflow-hidden"
            >
              {/* Top Character */}
              <span
                className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                style={{
                  transitionDelay: `${index * 25}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>

              {/* Bottom Character */}
              <span
                className="absolute left-0 top-full inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                style={{
                  transitionDelay: `${index * 25}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          ))}
        </span>

        <ArrowUpRight
          size={24}
          className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>

      <span className="h-px w-full origin-left bg-neutral-300 transition-transform duration-500 group-hover:scale-x-110" />
    </Link>
  )
}

export default AnimatedTextLink