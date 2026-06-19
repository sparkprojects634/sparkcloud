'use client'

import { useRef } from 'react'

import AnimatedPath from './AnimatedPath'
import ImageFillText from './ImageFillText'

const GrowthSection = () => {
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-[250vh] bg-black rounded-tl-4xl overflow-hidden">
      <AnimatedPath targetRef={textRef} />

      <div className="sticky top-0 flex h-screen items-center justify-center">
        <ImageFillText ref={textRef}>
          DIGITAL GROWTH
        </ImageFillText>
      </div>
    </section>
  )
}

export default GrowthSection