'use client'

import AnimatedHeading from './AnimatedHeading'
import AnimatedButton from './AnimatedButton'
import {
  aboutHeading,
  aboutDescription,
} from '../data/about'
import AnimatedTextLink from './AnimatedTextLink'

const AboutSection = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-350 px-5 md:px-8">

        <div className="flex flex-col items-center">

          <AnimatedHeading lines={aboutHeading} />

          <div className="mt-12 max-w-5xl">
            <p className="font-sans text-center text-lg leading-relaxed text-[#1B1B1B] md:text-2xl">
              {aboutDescription}
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-8">

            <AnimatedButton
              text="Get In Touch"
              href="/contact"
              theme="dark"
            />

            <AnimatedTextLink
              text="Our Portfolio"
              href="/projects"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection