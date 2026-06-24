'use client'

import { useRef } from 'react'

import AnimatedPath from './AnimatedPath'
import ImageFillText from './ImageFillText'

const GrowthSection = () => {
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-[250vh] bg-black rounded-t-4xl overflow-hidden">
      <AnimatedPath targetRef={textRef} />

      <div className="text-white absolute w-full bottom-0 flex h-screen flex-col items-center justify-center gap-4 lg:gap-8">
        <span className='font-bold text-xl md:text-6xl lg:text-8xl tracking-wide'>SparkCloud is a </span>
        <ImageFillText ref={textRef}>
          DIGITAL GROWTH
        </ImageFillText>
        <span className='font-bold text-xl md:text-6xl lg:text-8xl'>Agency.</span>
        <p className='text-lg md:text-2xl lg:text-3xl tracking-wide'>We bridge the gap between your brand and your customers.</p>
      </div>
    </section>
  )
}

export default GrowthSection