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

  const desktopPathRef = useRef<SVGPathElement>(null)
  const mobilePathRef = useRef<SVGPathElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const target = targetRef.current

    if (!section || !target) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // ==================================================
      // DESKTOP
      // ==================================================

      mm.add('(min-width: 768px)', () => {
        const path = desktopPathRef.current

        if (!path) return

        const length = path.getTotalLength()

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: '+=3500',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        })

        timeline.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
        })

        timeline.to(
          target,
          {
            '--fill-size': '100%',
            ease: 'none',
          },
          0.75
        )

        return () => {
          timeline.kill()
        }
      })

      // ==================================================
      // MOBILE
      // ==================================================

      mm.add('(max-width: 767px)', () => {
        const path = mobilePathRef.current

        if (!path) return

        const length = path.getTotalLength()

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: '+=2500',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        })

        timeline.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
        })

        timeline.to(
          target,
          {
            '--fill-size': '100%',
            ease: 'none',
          },
          0.75
        )

        return () => {
          timeline.kill()
        }
      })

      // Make sure ScrollTrigger calculates
      // everything after the SVG is rendered.
      ScrollTrigger.refresh()
    }, section)

    return () => {
      ctx.revert()
    }
  }, [targetRef])

  return (
    <div
      ref={sectionRef}
      className="pointer-events-none absolute inset-0"
    >
      {/* ==================================================
          DESKTOP PATH
      ================================================== */}

      <svg
        className="absolute inset-0 hidden h-full w-full overflow-visible md:block"
        viewBox="0 -80 1625 1778"
        preserveAspectRatio="none"
      >
        <path
          ref={desktopPathRef}
          d="M 1675 50 C 1479.984375 26.900000000000002, 1329.5812937680157 -45.61626667843568, 1117.8125 -16 C 969.2000437680158 4.783733321564323, 873.2219480153306 88.9978888915119, 774.046875 176 C 721.6131589528305 221.99788889151193, 679.7899430423929 302.1923831756174, 684.64453125 364 C 689.0266617923929 419.7923831756174, 749.9202774768746 472.3565747513975, 800.4375 512 C 862.3126602893745 560.5565747513974, 946.0195948002248 564.9752905765745, 1005.765625 616 C 1073.8844385502248 674.1752905765745, 1157.9301237046939 750.3462878241216, 1165.765625 824 C 1171.9301237046939 881.9462878241216, 1106.7082696574103 965.0836652763105, 1045.765625 992 C 938.7082696574103 1039.2836652763106, 825.6034452019238 1002.3242372362511, 685.765625 1036 C 577.7784452019238 1062.0054872362512, 486.90619665500657 1079.2333062484145, 426.203125 1141.203125 C 381.3097747800066 1187.0333062484144, 398.811109375 1273.02109375, 384.06156250000004 1344"
          fill="none"
          stroke="#0079FF"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ==================================================
          MOBILE PATH
      ================================================== */}

      <svg
        className="absolute inset-0 block h-full w-full overflow-visible md:hidden"
        viewBox="0 0 490 2000"
        preserveAspectRatio="none"
      >
        <path
          ref={mobilePathRef}
          d="M 480 -25.921875 C 404.246875 -22.4765625, 338.22989354318406 -42.4201854529176, 263.5625 -16.078125 C 224.8486435431841 -2.4201854529176003, 214.28355302868354 39.50219040059358, 196.546875 74.078125 C 175.80542802868356 114.51156540059357, 146.51219125719123 159.22237964191734, 153.625 198.234375 C 160.32078500719123 234.95909839191734, 223.8913781457557 253.84845454876802, 236 290.46875 C 245.3698937707557 318.806267048768, 201.29543274774815 357.83460190793255, 214.9921875 383.828125 C 240.83449524774815 432.8713206579326, 328.34776586390535 455.9656480046502, 348.96875 504.859375 C 361.80284398890535 535.2898667546501, 341.05506520356823 592.0268326378167, 310.578125 610.46875 C 241.1081902035682 652.5057388878167, 124.48980401481776 621.8194436667327, 63.40625 677.65625 C 25.45855401481778 712.3444436667327, 44.22275448576582 789.3954483939381, 63 836.78125 C 78.91311386076582 876.9391983939381, 127.68901562500001 895.93125, 162.52156250000002 927.78125"
          fill="none"
          stroke="#0079FF"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default AnimatedPath