'use client'

import { useRef } from 'react'

import AnimatedPath from './AnimatedPath'
import ImageFillText from './ImageFillText'
import BrushHighlight from './BrushHighlight'
import RubicModel from './RubikModel'

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
          <p className="max-w-3xl text-xl leading-normal md:text-3xl lg:text-4xl">
            SparkCloud helps brands build visibility and achieve {' '}
            <BrushHighlight>sustainable digital</BrushHighlight> growth.
          </p>

          <p className="max-w-4xl text-xl leading-normal md:text-3xl lg:text-4xl">
            We combine strategic planning and performance analytics to,{' '}
            <BrushHighlight>generate qualified leads</BrushHighlight> and
            maximize ROI.
          </p>

          <p className="max-w-4xl text-xl leading-normal md:text-3xl lg:text-4xl">
            through continuous optimization, and data-backed decision-making, we ensure every campaign delivers maximum impact, and{' '}
            <BrushHighlight>measurable results for your business.</BrushHighlight>
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

      <RubicModel />

    </section>
  )
}

export default GrowthSection