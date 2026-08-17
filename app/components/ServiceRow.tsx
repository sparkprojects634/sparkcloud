'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  image: string
  href?: string
}

export default function ServiceRow({ service }: { service: Service }) {
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
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      onMouseMove={move}
      className="relative grid border-b border-white/10 py-12 md:grid-cols-[60px_1fr_320px]"
    >
      <span className="text-xs text-zinc-500">
        ({service.id})
      </span>

      {service.href ? (
        <Link
          href={service.href}
          className="group/title relative z-20 flex items-start gap-4"
        >
          <h3 className="font-mona-bold text-[clamp(3rem,6vw,7rem)] uppercase leading-none text-zinc-400 transition-colors duration-300 group-hover/title:text-white">
            {service.title}
          </h3>

          <ArrowUpRight
            size={32}
            className="mt-2 shrink-0 text-zinc-500 transition-all duration-300 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 group-hover/title:text-[#0079ff]"
          />
        </Link>
      ) : (
        <h3 className="relative z-20 font-mona-bold text-[clamp(3rem,6vw,7rem)] uppercase text-zinc-400 transition-colors duration-300 hover:text-white">
          {service.title}
        </h3>
      )}

      <p className="self-center text-zinc-500">
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
    </div>
  )
}