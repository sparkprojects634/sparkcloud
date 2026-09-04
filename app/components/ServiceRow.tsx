'use client'

import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function ServiceRow({ service }: { service: any }) {
  const imageRef = useRef<HTMLDivElement>(null)

  const enter = () => {
    gsap.killTweensOf(imageRef.current)

    gsap.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      rotate: -8,
      duration: 0.35,
      ease: 'power3.out',
    })
  }

  const leave = () => {
    gsap.killTweensOf(imageRef.current)

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: .8,
      duration: .25,
      ease: 'power2.out',
    })
  }

  const move = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()

    gsap.to(imageRef.current, {
      x: e.clientX - rect.left - 120,
      y: e.clientY - rect.top - 120,
      duration: .35,
      ease: 'power3.out',
    })
  }

  return (
    <Link
      href={service.slug}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onMouseMove={move}
      className="relative grid border-b border-white/10 py-12 md:grid-cols-[60px_1fr_320px]"
    >
      <span className="text-xs text-zinc-500">
        ({service.id})
      </span>

      <h3 className="relative z-20 font-mona-bold text-[clamp(3rem,6vw,7rem)] uppercase text-zinc-400 transition-colors duration-300 hover:text-white">
        {service.title}
      </h3>

      <p className="self-center text-zinc-500 line-clamp-3">
        {service.description}
      </p>
      <div
        ref={imageRef}
        className="pointer-events-none absolute left-0 top-0 z-10 opacity-0"
      >
        <div className="overflow-hidden rounded-[26px] shadow-2xl">
          <Image
            src={service.image}
            alt=""
            width={260}
            height={320}
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  )
}