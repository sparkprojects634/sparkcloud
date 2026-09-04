'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Service = {
    lines: {
        text: string
    }[]
    mediaLineText: string
    media: {
        src: string
        poster?: string
        alt?: string
    }
}

type StrategicSectionProps = {
    service: Service
}

const StrategicSection = ({
    service,
}: StrategicSectionProps) => {

    const sectionRef = useRef<HTMLElement>(null)

    const lineRefs = useRef<HTMLSpanElement[]>([])
    const mediaTextRef = useRef<HTMLSpanElement>(null)
    const videoRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const section = sectionRef.current

        if (!section) return

        const ctx = gsap.context(() => {
            const strategic = lineRefs.current[0]
            const timeless = lineRefs.current[1]

            const mediaText = mediaTextRef.current
            const video = videoRef.current

            if (!strategic || !timeless || !mediaText || !video) {
                return
            }

            /*
            |--------------------------------------------------------------------------
            | INITIAL STATE
            |--------------------------------------------------------------------------
            */

            // Strategic
            gsap.set(strategic, {
                yPercent: 110,
                opacity: 0,
            })

            // Timeless
            gsap.set(timeless, {
                yPercent: 110,
                opacity: 0,
            })

            // Video starts outside from LEFT
            gsap.set(video, {
                xPercent: -120,
                opacity: 0,
            })

            // Bold starts from LEFT
            gsap.set(mediaText, {
                xPercent: -25,
                yPercent: 110,
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
            | 01 — STRATEGIC
            |--------------------------------------------------------------------------
            */

            tl.to(strategic, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power4.out',
            })


            /*
            |--------------------------------------------------------------------------
            | 02 — BOLD
            |--------------------------------------------------------------------------
            |
            | Bring Bold into the viewport first.
            |
            */

            tl.to(
                mediaText,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.75,
                    ease: 'power4.out',
                },
                '-=0.45'
            )


            /*
            |--------------------------------------------------------------------------
            | 03 — VIDEO + BOLD MOVE
            |--------------------------------------------------------------------------
            |
            | Video enters from the left.
            | At the exact same time Bold moves to the right.
            |
            */

            const videoWidth = video.offsetWidth

            const gap =
                window.innerWidth >= 1024
                    ? 20
                    : window.innerWidth >= 768
                        ? 16
                        : 10

            tl.to(
                video,
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power4.inOut',
                },
                '-=0.2'
            )

            tl.to(
                mediaText,
                {
                    x: videoWidth + gap,
                    xPercent: -25,
                    duration: 1,
                    ease: 'power4.inOut',
                },
                '<'
            )


            /*
            |--------------------------------------------------------------------------
            | 04 — TIMELESS
            |--------------------------------------------------------------------------
            */

            tl.to(
                timeless,
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power4.out',
                },
                '-=0.45'
            )

        }, section)

        return () => ctx.revert()
    }, [])


    return (
        <section
            ref={sectionRef}
            className="
                w-full
                overflow-hidden
                py-10
                md:py-15
                lg:py-20
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                "
            >
                <div className="flex flex-col">

                    {service.lines[0] && (
                        <div className="flex items-baseline whitespace-nowrap">

                            <span
                                ref={(el) => {
                                    if (el) {
                                        lineRefs.current[0] = el
                                    }
                                }}
                                className="
                                    inline-block
                                    font-mona-bold
                                    text-[clamp(3.8rem,9.5vw,10rem)]
                                    uppercase
                                    leading-[0.78]
                                    tracking-normal
                                "
                            >
                                {service.lines[0]?.text}
                            </span>

                        </div>
                    )}


                    {/* =====================================================
                        VIDEO + SECOND TEXT
                    ===================================================== */}

                    <div
                        className="
                            mt-3
                            flex
                            h-[clamp(4rem,9.5vw,10rem)]
                            items-center
                            overflow-visible
                            md:mt-5
                        "
                    >

                        {/* VIDEO */}

                        <div
                            ref={videoRef}
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

                            <video
                                src={service.media.src}
                                poster={service.media.poster}
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label={service.media.alt}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />

                        </div>


                        {/* TEXT */}

                        <span
                            ref={mediaTextRef}
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
                            {service.mediaLineText}
                        </span>

                    </div>


                    {/* =====================================================
                        LAST LINE
                    ===================================================== */}

                    {service.lines[1] && (
                        <div className="mt-3 flex items-baseline whitespace-nowrap md:mt-5">

                            <span
                                ref={(el) => {
                                    if (el) {
                                        lineRefs.current[1] = el
                                    }
                                }}
                                className="
                                    inline-block
                                    font-mona-bold
                                    text-[clamp(3.8rem,9.5vw,10rem)]
                                    uppercase
                                    leading-[0.78]
                                    tracking-normal
                                "
                            >
                                {service.lines[1]?.text}
                            </span>

                        </div>
                    )}

                </div>

            </div>

        </section>
    )
}

export default StrategicSection