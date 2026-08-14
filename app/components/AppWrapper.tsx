'use client'

import { useEffect, useState } from 'react'
import PageLoader from './PageLoader'

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

    return () => {
      image.onload = null
      image.onerror = null
      video.onloadeddata = null
      video.onerror = null
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