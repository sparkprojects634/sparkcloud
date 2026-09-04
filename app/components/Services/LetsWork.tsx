'use client'

import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedTextLink from '../AnimatedTextLink'

gsap.registerPlugin(ScrollTrigger)

const LetsWork = () => {
    const sectionRef = useRef<HTMLElement>(null)

    const letsRef = useRef<HTMLSpanElement>(null)
    const workRef = useRef<HTMLSpanElement>(null)
    const togetherRef = useRef<HTMLSpanElement>(null)

    const imageRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const section = sectionRef.current

        if (!section) return

        const ctx = gsap.context(() => {
            const lets = letsRef.current
            const work = workRef.current
            const together = togetherRef.current
            const image = imageRef.current
            const content = contentRef.current

            if (!lets || !work || !together || !image || !content) {
                return
            }

            /*
            |--------------------------------------------------------------------------
            | INITIAL STATE
            |--------------------------------------------------------------------------
            */

            gsap.set([lets, work, together], {
                yPercent: 110,
                opacity: 0,
            })

            /*
             * Image starts outside the left.
             */

            gsap.set(image, {
                xPercent: -120,
                opacity: 0,
            })

            /*
             * Together starts at the LEFT.
             */

            gsap.set(together, {
                xPercent: -30,
                yPercent: 110,
                opacity: 0,
            })

            /*
             * Right content
             */

            gsap.set(content, {
                y: 30,
                opacity: 0,
            })

            /*
            |--------------------------------------------------------------------------
            | TIMELINE
            |--------------------------------------------------------------------------
            */

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                    once: true,
                },
            })

            /*
            |--------------------------------------------------------------------------
            | LET'S
            |--------------------------------------------------------------------------
            */

            tl.to(lets, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power4.out',
            })

            /*
            |--------------------------------------------------------------------------
            | WORK
            |--------------------------------------------------------------------------
            */

            tl.to(
                work,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power4.out',
                },
                '-=0.65'
            )

            /*
            |--------------------------------------------------------------------------
            | TOGETHER
            |--------------------------------------------------------------------------
            |
            | First bring TOGETHER into view from the left.
            |
            */

            tl.to(
                together,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.75,
                    ease: 'power4.out',
                },
                '-=0.6'
            )

            /*
            |--------------------------------------------------------------------------
            | IMAGE + TOGETHER
            |--------------------------------------------------------------------------
            |
            | Measure the real image width.
            |
            */

            const imageWidth = image.offsetWidth

            const gap =
                window.innerWidth >= 1024
                    ? 20
                    : window.innerWidth >= 768
                        ? 16
                        : 10

            /*
             * Image enters from left.
             */

            tl.to(
                image,
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power4.inOut',
                },
                '-=0.25'
            )

            /*
             * At the same time TOGETHER moves right.
             */

            tl.to(
                together,
                {
                    x: imageWidth + gap,
                    duration: 1,
                    ease: 'power4.inOut',
                },
                '<'
            )

            /*
            |--------------------------------------------------------------------------
            | RIGHT CONTENT
            |--------------------------------------------------------------------------
            */

            tl.to(
                content,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                },
                '-=0.55'
            )
        }, section)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="w-full overflow-hidden bg-[#f4f4f2] py-20 md:py-28 lg:py-32"
        >
            <div className="mx-auto grid w-full max-w-425 items-start gap-12 lg:grid-cols-[1fr_0.42fr] lg:gap-16">

                {/* =====================================================
                    LEFT
                ===================================================== */}

                <div className="min-w-0">

                    {/* =================================================
                        LET'S WORK
                    ================================================= */}

                    <div className="flex items-baseline whitespace-nowrap">

                        <span
                            ref={letsRef}
                            className="inline-block font-mona-bold text-[clamp(3.8rem,9.5vw,10rem)] uppercase leading-[0.78] tracking-normal"
                        >
                            LET'S
                        </span>

                        <span
                            ref={workRef}
                            className="ml-3 inline-block font-mona-bold text-[clamp(3.8rem,9.5vw,10rem)] uppercase leading-[0.78] tracking-normal md:ml-5"
                        >
                            WORK
                        </span>

                    </div>


                    {/* =================================================
                        IMAGE + TOGETHER
                    ================================================= */}

                    <div className="mt-3 flex h-[clamp(4rem,9.5vw,10rem)] items-center overflow-visible md:mt-5">

                        {/* IMAGE */}

                        <div
                            ref={imageRef}
                            className="
                                relative
                                z-10
                                h-[clamp(4rem,6.2vw,6.4rem)]
                                w-[clamp(6rem,9.5vw,9.8rem)]
                                shrink-0
                                overflow-hidden
                                rounded-md
                            "
                        >
                            <Image
                                src="/services/lets-work.webp"
                                alt="Our work"
                                fill
                                sizes="(max-width: 768px) 100px, 160px"
                                className="object-cover"
                                unoptimized
                            />
                        </div>


                        {/* TOGETHER */}

                        <span
                            ref={togetherRef}
                            className="
                                ml-0
                                inline-block
                                shrink-0
                                whitespace-nowrap
                                font-mona-bold
                                text-[clamp(3.8rem,9.5vw,10rem)]
                                uppercase
                                leading-[0.78]
                                tracking-normal
                            "
                        >
                            TOGETHER
                        </span>

                    </div>

                </div>


                {/* =====================================================
                    RIGHT CONTENT
                ===================================================== */}

                <div
                    ref={contentRef}
                    className="max-w-sm pt-1 lg:pt-2"
                >

                    <p className="text-md mb-4 font-medium leading-[1.35] text-black md:text-base lg:text-lg">
                        Work with us if average isn't your thing.
                        <br />
                        Drop it, we'll build it!
                    </p>

                    <AnimatedTextLink text="Say Hello" href="/contact" />
                </div>
            </div>
        </section>
    )
}

export default LetsWork 