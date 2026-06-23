'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface AnimatedButtonProps {
  text: string
  href: string
  theme?: 'light' | 'dark'
}

const AnimatedButton = ({
  text,
  href,
  theme = 'dark',
}: AnimatedButtonProps) => {
  const chars = text.split('')

  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center justify-center overflow-hidden rounded-full tracking-wider px-10 py-4',
        theme === 'dark'
          ? 'bg-black text-white'
          : 'border border-neutral-200 bg-white text-black'
      )}
    >
      <span className="flex uppercase items-center font-medium text-sm md:text-xl">
        {chars.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="relative inline-block h-[1.2em] overflow-hidden"
          >
            {/* Current Character */}
            <span
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* Incoming Character */}
            <span
              className="absolute left-0 top-full inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </span>
    </Link>
  )
}

export default AnimatedButton