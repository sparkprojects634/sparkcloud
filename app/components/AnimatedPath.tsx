'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedPathProps {
  targetRef: React.RefObject<HTMLDivElement | null>
}

const AnimatedPath = ({ targetRef }: AnimatedPathProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useLayoutEffect(() => {
    if (!pathRef.current || !sectionRef.current) return

    const path = pathRef.current
    const length = path.getTotalLength()

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: '+=4500',
        scrub: 1.2,
        markers: true,
      },
    })

    tl.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
    })

    tl.to(
      targetRef.current,
      {
        '--fill-size': '100%',
        ease: 'none',
      },
      0.75
    )
  }, [targetRef])

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 pointer-events-none"
    >
      <svg
        viewBox="-200 0 1553 1620"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M1552.5 47.5396C1300.22 8.71453 1031.18 -52.6117 799.636 116.364C723.335 172.046 603.371 252.247 580.437 381.072C575.585 401.808 575.673 453.25 614.838 493.133C663.794 542.987 700.401 590.194 805.37 625.488C910.339 660.783 965.469 720.784 1016.63 775.932C1067.79 831.08 1137.15 921.197 1003.4 1050.35C909 1141.5 740.5 1127 740.5 1127C678.313 1124.06 292 1127 166 1226.5C64 1286.5 4 1454.5 4 1619.5"
          stroke="#0079FF"
          strokeWidth="8"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default AnimatedPath