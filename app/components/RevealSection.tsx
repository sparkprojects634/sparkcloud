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

  const letsRef = useRef<HTMLSpanElement>(null)
  const buildRef = useRef<HTMLSpanElement>(null)
  const yourRef = useRef<HTMLSpanElement>(null)
  const brandRef = useRef<HTMLSpanElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const stage = stageRef.current
    const panel = panelRef.current

    if (!stage || !panel) return

    const ctx = gsap.context(() => {
      // ==========================================
      // PANEL SPLIT — driven from a proxy object
      // ==========================================

      const split = { edge: 50 }

      const applyEdge = () => {
        const value = `inset(${split.edge}% 0% ${split.edge}% 0%)`
        const panelStyle = panel.style as CSSStyleDeclaration & {
          webkitClipPath?: string
        }

        panelStyle.clipPath = value
        panelStyle.webkitClipPath = value
      }

      applyEdge()

      // ==========================================
      // TEXT INITIAL STATES
      // ==========================================

      gsap.set([letsRef.current, buildRef.current], { yPercent: 110 })
      gsap.set([yourRef.current, brandRef.current], { yPercent: -110 })
      gsap.set(buttonRef.current, { yPercent: 110, opacity: 0 })
      gsap.set(marqueeRef.current, { yPercent: -110, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      const SPLIT_DURATION = 1
      const TEXT_START = SPLIT_DURATION * 0.4 // text begins once the split is 20% open

      // 1. SPLIT
      tl.to(split, {
        edge: 0,
        duration: SPLIT_DURATION,
        ease: 'none',
        onUpdate: applyEdge,
      }, 0)

      // 2. TEXT — overlaps the back 80% of the split
      tl.to([letsRef.current, brandRef.current], {
        yPercent: 0,
        duration: 0.4,
        ease: 'power3.out',
      }, TEXT_START)

        .to([buildRef.current, yourRef.current], {
          yPercent: 0,
          duration: 0.4,
          ease: 'power3.out',
        }, TEXT_START + 0.15)

        .to(buttonRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        }, TEXT_START + 0.35)


        .to(marqueeRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 0.35,
          ease: 'power3.out',
        }, TEXT_START + 0.35)
    }, stage)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={stageRef}
      className="relative h-screen overflow-hidden"
    >
      {/* ==========================================
          KEEP SCROLLING
      ========================================== */}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mona-bold uppercase text-black/80 tracking-wider text-sm lg:text-xl">
          Keep scrolling
        </span>
      </div>

      {/* ==========================================
          WHOLE SECTION REVEAL PANEL
      ========================================== */}

      <div
        ref={panelRef}
        className="reveal-panel absolute inset-0"
        style={{
          clipPath: 'inset(var(--edge) 0% var(--edge) 0%)',
          WebkitClipPath:
            'inset(var(--edge) 0% var(--edge) 0%)',
        }}
      >
        {/* ========================================
            BACKGROUND VIDEO
        ======================================== */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full rounded-3xl object-cover"
          >
            <source
              src="/videos/choose-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* ========================================
            HERO CONTENT
        ======================================== */}

        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center">


          <div
            ref={marqueeRef}
            className="overflow-hidden will-change-transform"
          >
            <SubHeadingMarquee
              text="BRING IDEAS TO LIFE"
              color="white"
            />
          </div>

          {/* ======================================
              HEADLINE
          ====================================== */}

          <h3 className="font-mona-bold uppercase leading-[0.9] tracking-tight text-[clamp(2.5rem,10vw,8rem)]">

            {/* --------------------------------------
                LET'S BUILD
            -------------------------------------- */}

            <span className="block whitespace-nowrap">

              {/* LET'S */}
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  ref={letsRef}
                  className="inline-block will-change-transform text-white"
                >
                  Let’s
                </span>
              </span>

              {' '}

              {/* BUILD */}
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  ref={buildRef}
                  className="inline-block will-change-transform text-neutral-500"
                >
                  Build
                </span>
              </span>

            </span>

            {/* --------------------------------------
                YOUR BRAND
            -------------------------------------- */}

            <span className="block whitespace-nowrap">

              {/* YOUR */}
              <span className="inline-block overflow-hidden align-top">
                <span
                  ref={yourRef}
                  className="inline-block will-change-transform text-neutral-500"
                >
                  Your
                </span>
              </span>

              {' '}

              {/* BRAND */}
              <span className="inline-block overflow-hidden align-top">
                <span
                  ref={brandRef}
                  className="inline-block will-change-transform text-white"
                >
                  Brand
                </span>
              </span>

            </span>

          </h3>

          {/* ======================================
              BUTTON
          ====================================== */}

          <div
            ref={buttonRef}
            className="overflow-hidden will-change-transform"
          >
            <AnimatedButton
              text="GET IN TOUCH"
              theme="light"
              href="/contact"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RevealSection