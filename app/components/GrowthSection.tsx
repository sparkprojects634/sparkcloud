'use client'

import { useRef } from 'react'

import AnimatedPath from './AnimatedPath'
import ImageFillText from './ImageFillText'

const GrowthSection = () => {
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-[250vh] bg-black rounded-tl-4xl overflow-hidden">
      <AnimatedPath targetRef={textRef} />

      <div className="absolute w-full bottom-0 flex h-screen flex-col items-center justify-center">
        <span className='text-white text-7xl'>SparkCloud is a </span>
        <ImageFillText ref={textRef}>
          DIGITAL GROWTH
        </ImageFillText>
      </div>
    </section>
  )
}

export default GrowthSection