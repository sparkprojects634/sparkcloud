'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
    project: {
        title: string
        category: string
        image: string
        href: string
    }
    index: number
}

const ProjectCard = ({
    project,
    index,
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const card = cardRef.current

        if (!card) return

        const ctx = gsap.context(() => {
            gsap.to(card, {
                scale: 1,
                opacity: 0.8,

                scrollTrigger: {
                    trigger: card,
                    start: 'top top+=100',
                    end: 'bottom top',
                    scrub: true,
                },
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={cardRef}
            className="sticky top-15 px-4 md:top-25 group"
            style={{
                zIndex: index + 1,
            }}
        >
            <Link
                href={project.href}
                className="block rounded-2xl border border-white/10 bg-[#161616] p-4"
            >
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-6 py-2">
                    <div className="inline-block md:flex items-center gap-2">
                        <h3 className="text-sm lg:text-xl font-bold text-white">
                            {project.title}
                        </h3>

                        <span className="text-xs lg:text-sm uppercase tracking-wider text-white/40">
                            • {project.category}
                        </span>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                        <ArrowRight className="text-white" />
                    </div>
                </div>

                <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                    <div className='absolute h-full w-full bg-black/10 z-2' />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-115 z-0"
                    />
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard




