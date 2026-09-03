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
  const bannerRef = useRef<HTMLDivElement>(null)

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
      scale: 0.5,
      y: -380,
      x: -850,
      ease: 'none',

      scrollTrigger: {
        trigger: logoRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    })

    gsap.fromTo(
      videoRef.current,
      {
        padding: 0,
      },
      {
        padding: "18px",
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    )

    gsap.fromTo(
      bannerRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 1.02,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: 'none',

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      }
    )

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

        {/* <div
          className='absolute inset-0 bg-linear-to-t from-[#f5f5f5] to-40% to-transparent w-full h-full -z-2'
        /> */}

        {/* Overlay */}
        {/* <div className='absolute inset-0 bg-black/30 z-1 p-7 rounded-2xl' /> */}

        {/* Video */}
        <div
          ref={videoRef}
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
              src="/videos/earth-banner.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Logo */}

        <Image
          src='/images/logo.svg'
          alt='Hero-Image'
          width={150}
          height={100}
          className='z-10'
          fetchPriority='high'
          ref={logoRef}
          loading='eager'
        />

        {/* Text */}
        <div className='absolute bottom-15 lg:bottom-30 left-10 lg:left-20 z-20 flex flex-col gap-5 lg:gap-8' ref={contentRef}>
          <h1 className='text-3xl lg:text-[44px] text-white font-bold w-2/3 lg:w-sm leading-10 lg:leading-14'>
            Design Bold. Global Impact. Multiply Revenue.
          </h1>

          <hr className='bg-white h-1 w-1/4 border-0' />

          <p className='text-white italic'>
            Not Just Beautiful, Built to Convert.
          </p>
        </div>

        <div
          ref={bannerRef}
          className="absolute flex-col text-white gap-5 inset-0 flex items-center justify-center will-change-[filter,opacity,transform]"
        >
          <Image
            src='/images/logo.svg'
            alt='Hero-Image'
            width={100}
            height={100}
            className='z-10 w-25 lg:w-45'
            fetchPriority='high'
            loading='eager'
          />
          <h2 className='text-6xl md:text-6xl lg:text-9xl font-medium'>SparkCloud</h2>
          <h3 className=" text-lg md:text-xl lg:text-3xl font-medium">
            We Add Spark to Your Brand
          </h3>
        </div>

      </div>
    </section>
  )
}

export default Hero