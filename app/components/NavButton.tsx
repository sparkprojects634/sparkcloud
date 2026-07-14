'use client'

import Link from 'next/link'

interface Props {
  text: string
  href: string
}

const NavButton = ({ text, href }: Props) => {
  const chars = text.split('')

  return (
    <Link
      href={href}
      className="group flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#828282]/10 px-6 text-white backdrop-blur-xl"
    >
      <span className="flex text-sm font-semibold uppercase tracking-wide">
        {chars.map((char, index) => (
          <span
            key={index}
            className="relative inline-block h-[1.2em] overflow-hidden"
          >
            <span
              className="block transition-transform duration-500 group-hover:-translate-y-full"
              style={{
                transitionDelay: `${index * 35}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>

            <span
              className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full"
              style={{
                transitionDelay: `${index * 35}ms`,
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

export default NavButton