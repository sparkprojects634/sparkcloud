'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return
    if (!contentRef.current) return

    gsap.to(bgRef.current, {
      scale: 5.5,
      filter: 'blur(5px)',

      ease: 'none',
      
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    gsap.to(contentRef.current, {
      scale: 4.5,
      y: 500,
      x: -2000,
      ease: 'none',

      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    gsap.to(logoRef.current, {
      scale: 0.8,
      y: -350,
      x: -850,
      ease: 'none',

      scrollTrigger: {
        trigger: logoRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    gsap.to(videoRef.current, {
      filter: 'blur(0px)',
      ease: 'none',
      
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative h-[300vh]'
    >
      <div className='sticky top-0 h-screen overflow-hidden flex items-center justify-center'>

        {/* Background */}
        <div
          ref={bgRef}
          className='absolute inset-0 bg-[url(/images/spaceship-banner.avif)] bg-cover bg-center scale-110 will-change-transform'
        />

        {/* Overlay */}
        {/* <div className='absolute inset-0 bg-black/30 z-1 p-7 rounded-2xl' /> */}

        {/* Video */}
        <div className='absolute inset-0 -z-10 blur-[2px]' ref={videoRef}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          >
            <source src='/videos/earth-banner.webm' type='video/webm' />
          </video>
        </div>

        {/* Logo */}

        <Image
          src='/images/logo.svg'
          alt='Hero-Image'
          width={100}
          height={100}
          className='z-10'
          fetchPriority='high'
          ref={logoRef}
        />

        {/* Text */}
        <div className='absolute bottom-15 lg:bottom-30 left-10 lg:left-20 z-20 flex flex-col gap-5' ref={contentRef}>
          <h1 className='text-2xl lg:text-4xl text-white font-semibold w-68'>
            Look Premium. Attract More. Sell Better.
          </h1>

          <hr className='bg-white h-1 w-1/4 border-0' />

          <p className='text-white italic'>
            Not Just Beautiful, Built to Convert.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero