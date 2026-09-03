'use client'

import { useEffect, useState } from 'react'
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

    useEffect(() => {
        let mounted = true
        let timeoutId: ReturnType<typeof setTimeout> | null = null

        const image = new window.Image()
        image.src = '/images/spaceship-banner.avif'

        const video = document.createElement('video')
        video.src = '/videos/earth-banner.mp4'
        video.preload = 'metadata'
        video.muted = true
        video.playsInline = true

        let imageLoaded = false
        let videoLoaded = false

        const finish = () => {
            if (!mounted) return

            // Do not block the entire website waiting for video.
            if (!imageLoaded) return

            timeoutId = setTimeout(() => {
                if (mounted) {
                    setLoading(false)
                }
            }, 500)
        }

        image.onload = () => {
            imageLoaded = true
            finish()
        }

        image.onerror = () => {
            // Don't block the website if the image fails.
            imageLoaded = true
            finish()
        }

        video.onloadedmetadata = () => {
            videoLoaded = true
            finish()
        }

        video.onerror = () => {
            videoLoaded = true
            finish()
        }

        // Safari fallback:
        // never leave the entire website stuck on the loader.
        const fallbackTimeout = setTimeout(() => {
            if (!mounted) return

            imageLoaded = true
            videoLoaded = true
            finish()
        }, 4000)

        /* =====================================================
           LENIS
        ===================================================== */

        const lenis = new Lenis({
            autoRaf: false,
            lerp: 0.08,
            anchors: true,
            allowNestedScroll: true,
        })

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
            video.onloadedmetadata = null
            video.onerror = null

            clearTimeout(fallbackTimeout)

            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            lenis.destroy()
            gsap.ticker.remove(update)
        }
    }, [])

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