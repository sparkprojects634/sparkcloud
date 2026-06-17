import Image from "next/image"
import Hero from "../components/Hero"
import OurPartners from "../components/OurPartners"
import SubHeadingMarquee from "../components/SubHeadingMarquee"
import AnimatedHeading from "../components/AnimatedHeading"
import { headingLines } from "@/app/data/headingLines"
import AnimatedButton from "../components/AnimatedButton"
import AnimatedTextLink from "../components/AnimatedTextLink"

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-350 px-5 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[400px_1fr] lg:gap-20 items-start">
            <SubHeadingMarquee text="DRIVEN BY DESIGN" />
            <div className="space-y-6">
              <AnimatedHeading lines={headingLines} />
              <p className="w-full lg:w-3/4 text-black text-xl lg:text-2xl font-normal">By combining strategy, design, and technology, we transform ideas into meaningful digital experiences. Our work blends imagination with precision to create bold outcomes that drive growth.</p>
              <div className="flex items-center gap-3 lg:gap-6">
                <AnimatedButton text="our story" theme="dark" href="/about-us" />
                <AnimatedTextLink text="contact us" href="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPartners />
    </div>
  )
}

export default Home