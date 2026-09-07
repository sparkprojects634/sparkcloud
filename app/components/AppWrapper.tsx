'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import PageLoader from './PageLoader'

gsap.registerPlugin(ScrollTrigger)

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    const [loading, setLoading] = useState(true)
    const lenisRef = useRef<Lenis | null>(null)
    const pathname = usePathname()


    useEffect(() => {
        let mounted = true
        let timeoutId: ReturnType<typeof setTimeout> | null = null

        const image = new window.Image()
        image.src = '/images/spaceship-banner.avif'

        const finishLoading = () => {
            if (!mounted) return

            timeoutId = setTimeout(() => {
                if (mounted) {
                    setLoading(false)
                }
            }, 500)
        }

        image.onload = finishLoading
        image.onerror = finishLoading

        const lenis = new Lenis({
            autoRaf: false,
            lerp: 0.08,
            anchors: true,
            allowNestedScroll: true,
        })

        // IMPORTANT
        lenisRef.current = lenis

        lenis.on('scroll', ScrollTrigger.update)

        const update = (time: number) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        return () => {
            mounted = false

            image.onload = null
            image.onerror = null

            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            lenis.destroy()
            lenisRef.current = null

            gsap.ticker.remove(update)
        }
    }, [])

    useEffect(() => {
        // Wait until Next.js has rendered the new page
        const resetScroll = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            })

            lenisRef.current?.scrollTo(0, {
                immediate: true,
            })

            ScrollTrigger.clearScrollMemory()

            ScrollTrigger.refresh()
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(resetScroll)
        })
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
                {children}
            </div>
        </>
    )
}