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
    const image = new window.Image()
    image.src = '/images/spaceship-banner.avif'

    const video = document.createElement('video')
    video.src = '/videos/earth-banner.mp4'
    video.preload = 'auto'

    let imageLoaded = false
    let videoLoaded = false

    const finish = () => {
      if (!imageLoaded || !videoLoaded) return

      setTimeout(() => {
        setLoading(false)
      }, 800)
    }

    image.onload = () => {
      imageLoaded = true
      finish()
    }

    image.onerror = () => {
      imageLoaded = true
      finish()
    }

    video.onloadeddata = () => {
      videoLoaded = true
      finish()
    }

    video.onerror = () => {
      videoLoaded = true
      finish()
    }

    /* =====================================================
       LENIS
    ===================================================== */

    const lenis = new Lenis({
      autoRaf: false,

      // Lower = smoother / slower
      // Higher = more responsive
      lerp: 0.08,

      // Allow anchor links such as #contact
      anchors: true,

      // Useful if you have nested scroll areas
      allowNestedScroll: true,
    })

    /* =====================================================
       LENIS → GSAP
    ===================================================== */

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    // Prevent GSAP from adding its own lag smoothing
    gsap.ticker.lagSmoothing(0)

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      image.onload = null
      image.onerror = null
      video.onloadeddata = null
      video.onerror = null

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