'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedButton from './AnimatedButton'
import SubHeadingMarquee from './SubHeadingMarquee'

gsap.registerPlugin(ScrollTrigger)

const RevealSection = () => {
  const stageRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const stage = stageRef.current
    const panel = panelRef.current
    if (!stage || !panel) return

    const ctx = gsap.context(() => {
      gsap.set(panel, { '--edge': '56%' }) // thin center slit to start
      gsap.to(panel, {
        '--edge': '0%',
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: '+=1600',
          scrub: 1,
          pin: true,
        },
      })
    }, stage)

    return () => ctx.revert()
  }, [])

  return (

    <section ref={stageRef} className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className='font-mona-bold uppercase text-black/80 tracking-wider text-sm lg:text-xl'>Keep scrolling</span>
      </div>
      <div
        ref={panelRef}
        className="reveal-panel absolute inset-0"
        style={{
          clipPath: 'inset(var(--edge) 0% var(--edge) 0%)',
          WebkitClipPath: 'inset(var(--edge) 0% var(--edge) 0%)',
        }}
      >
        {/* background image / 3D render behind the hero */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover overflow-hidden rounded-3xl"
          >
            <source
              src="/videos/choose-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30" />

        {/* hero content */}
        <div className="relative flex h-full gap-5 flex-col items-center justify-center px-6 text-center">

          <SubHeadingMarquee text="BRING IDEAS TO LIFE" color="white" />

          {/* two-tone headline */}
          <h3 className="font-mona-bold uppercase leading-[0.9] tracking-tight text-[clamp(2.5rem,10vw,8rem)]">
            <span className="block">
              <span className="text-white">Let’s </span>
              <span className="text-neutral-500">Build</span>
            </span>
            <span className="block">
              <span className="text-neutral-500">Your </span>
              <span className="text-white">Brand</span>
            </span>
          </h3>

          {/* button */}
          <AnimatedButton text="GET IN TOUCH" theme="light" href="/contact" />
        </div>
      </div>
    </section>
  )
}

export default RevealSection