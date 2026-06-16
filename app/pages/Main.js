import Image from "next/image"
import Hero from "../components/Hero"
import OurPartners from "../components/OurPartners"
import SubHeadingMarquee from "../components/SubHeadingMarquee"
import AnimatedHeading from "../components/AnimatedHeading"
import { headingLines } from "@/app/data/headingLines"

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-350 px-5 md:px-8">
          <div className="flex gap-3 lg:gap-6 items-start">
            <SubHeadingMarquee text="DRIVEN BY DESIGN" />
            <div className="space-y-6">
              <AnimatedHeading lines={headingLines}/>
              <p className="w-full text-black text-sm lg:text-xl font-medium">By combining strategy, design, and technology, we transform ideas into meaningful digital experiences. Our work blends imagination with precision to create bold outcomes that drive growth.</p>
            </div>
          </div>
        </div>
      </section>

      <OurPartners />
    </div>
  )
}

export default Home