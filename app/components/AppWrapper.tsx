'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import PageLoader from './PageLoader'
import WhatsappIcon from './WhatsappIcon'

gsap.registerPlugin(ScrollTrigger)

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    const [loading, setLoading] = useState(true)

    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: false,
            lerp: 0.08,
            anchors: true,
            allowNestedScroll: true,
        })

        lenisRef.current = lenis

        const update = (time: number) => {
            lenis.raf(time * 1000)
        }

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        // Initial refresh
        requestAnimationFrame(() => {
            ScrollTrigger.refresh()
        })

        return () => {
            lenis.off('scroll', ScrollTrigger.update)

            gsap.ticker.remove(update)

            lenis.destroy()

            lenisRef.current = null
        }
    }, [])

    useEffect(() => {
        let mounted = true
        let timeoutId: ReturnType<typeof setTimeout> | null = null

        const image = new window.Image()

        const finishLoading = () => {
            if (!mounted) return

            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            timeoutId = setTimeout(() => {
                if (!mounted) return

                setLoading(false)

                requestAnimationFrame(() => {
                    ScrollTrigger.refresh()
                })
            }, 500)
        }

        image.onload = finishLoading
        image.onerror = finishLoading
        image.src = '/images/spaceship-banner.avif'

        // Cached image
        if (image.complete) {
            finishLoading()
        }

        return () => {
            mounted = false

            image.onload = null
            image.onerror = null

            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [])

    // --------------------------------------------------
    // ROUTE CHANGE
    // --------------------------------------------------

    useEffect(() => {
        let raf1 = 0
        let raf2 = 0
        let raf3 = 0

        const resetScroll = () => {
            const lenis = lenisRef.current

            // Reset Lenis
            if (lenis) {
                lenis.scrollTo(0, {
                    immediate: true,
                })
            }

            // Reset native scroll
            window.scrollTo(0, 0)

            // Reset ScrollTrigger memory
            ScrollTrigger.clearScrollMemory()

            // Wait until new page DOM is painted
            raf1 = requestAnimationFrame(() => {
                raf2 = requestAnimationFrame(() => {
                    raf3 = requestAnimationFrame(() => {
                        ScrollTrigger.refresh(true)
                        ScrollTrigger.update()
                    })
                })
            })
        }

        resetScroll()

        return () => {
            cancelAnimationFrame(raf1)
            cancelAnimationFrame(raf2)
            cancelAnimationFrame(raf3)
        }
    }, [pathname])

    return (
        <>
            {loading && <PageLoader />}

            <div
                className={`transition-opacity duration-700 ${
                    loading
                        ? 'pointer-events-none opacity-0'
                        : 'opacity-100'
                }`}
            >
                <WhatsappIcon />

                {children}
            </div>
        </>
    )
}