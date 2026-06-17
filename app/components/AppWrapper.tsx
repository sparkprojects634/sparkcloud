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

    Promise.all([
      new Promise((resolve) => {
        image.onload = resolve
      }),

      new Promise((resolve) => {
        video.onloadeddata = resolve
      }),
    ]).then(() => {
      setTimeout(() => {
        setLoading(false)
      }, 800)
    })
  }, [])

  return (
    <>
      {loading && <PageLoader />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  )
}