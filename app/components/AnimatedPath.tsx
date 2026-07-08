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
        start: 'top 70%',
        end: '+=3500',
        scrub: 1.2,
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
        className="h-full w-fit overflow-visible"
        viewBox="-5 -80 1625 1778"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 1675 50 C 1479.984375 26.900000000000002, 1329.5812937680157 -45.61626667843568, 1117.8125 -16 C 969.2000437680158 4.783733321564323, 873.2219480153306 88.9978888915119, 774.046875 176 C 721.6131589528305 221.99788889151193, 679.7899430423929 302.1923831756174, 684.64453125 364 C 689.0266617923929 419.7923831756174, 749.9202774768746 472.3565747513975, 800.4375 512 C 862.3126602893745 560.5565747513974, 946.0195948002248 564.9752905765745, 1005.765625 616 C 1073.8844385502248 674.1752905765745, 1157.9301237046939 750.3462878241216, 1165.765625 824 C 1171.9301237046939 881.9462878241216, 1106.7082696574103 965.0836652763105, 1045.765625 992 C 938.7082696574103 1039.2836652763106, 825.6034452019238 1002.3242372362511, 685.765625 1036 C 577.7784452019238 1062.0054872362512, 486.90619665500657 1079.2333062484145, 426.203125 1141.203125 C 381.3097747800066 1187.0333062484144, 398.811109375 1273.02109375, 384.06156250000004 1344"
          fill="none"
          stroke="#0079FF"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default AnimatedPath