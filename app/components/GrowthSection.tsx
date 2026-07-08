'use client'

import { useRef } from 'react'

import AnimatedPath from './AnimatedPath'
import ImageFillText from './ImageFillText'
import BrushHighlight from './BrushHighlight'

const GrowthSection = () => {
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative min-h-[250vh] bg-black rounded-t-4xl overflow-hidden">
      <AnimatedPath targetRef={textRef} />

      <div className="sticky top-0 flex h-screen flex-col items-center justify-center">
        <div
          ref={textRef}
          className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 px-5 text-center font-medium tracking-wide text-white"
        >
          <p className="max-w-3xl text-xl leading-[1.5] md:text-3xl lg:text-4xl">
            SparkCloud builds high-performance, responsive platforms and{' '}
            <BrushHighlight>custom-engineered</BrushHighlight> systems.
          </p>

          <p className="max-w-4xl text-xl leading-[1.5] md:text-3xl lg:text-4xl">
            We leverage cutting-edge technology to deliver robust,{' '}
            <BrushHighlight>future-proof</BrushHighlight> digital
            infrastructure.
          </p>

          <p className="max-w-4xl text-xl leading-[1.5] md:text-3xl lg:text-4xl">
            Through continuous maintenance and advanced security protocols, we
            ensure stable uptime and peak performance for your{' '}
            <BrushHighlight>guaranteed business continuity.</BrushHighlight>
          </p>
        </div>
      </div>

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