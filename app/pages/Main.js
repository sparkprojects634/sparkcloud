import Image from "next/image"
import Hero from "../components/Hero"
import OurPartners from "../components/OurPartners"
import SubHeadingMarquee from "../components/SubHeadingMarquee"
import AnimatedHeading from "../components/AnimatedHeading"
import { headingLines } from "@/app/data/headingLines"
import AnimatedButton from "../components/AnimatedButton"
import AnimatedTextLink from "../components/AnimatedTextLink"
import GrowthSection from "../components/GrowthSection"
import FeaturedProjects from "../components/FeaturedProjects"
import { stats } from "../data/projects"
import FAQSection from "../components/FAQSection"

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-6 md:py-10">
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

      <section>
        <GrowthSection />
      </section>

      <section className="py-6 lg:py-10 bg-black rounded-b-4xl">
        <div className="mx-auto w-full max-w-350 px-5 md:px-8">
          <SubHeadingMarquee text="OUR PORTFOLIO" color="white" />
          <div className="flex justify-between items-end py-6">
            <h3 className="font-mona-bold font-bold text-white text-5xl md:text-7xl lg:text-9xl tracking-wider">SELECTED <br /> <span className="text-[#8D8D8D]">WORK</span></h3>
            <h4 className="font-mona-bold font-bold text-5xl md:text-7xl lg:text-9xl tracking-wide text-[#8D8D8D]">©2026</h4>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      <section className="py-6 lg:py-10">
        <div className="mx-auto w-full max-w-350 px-5 md:px-8">
          <SubHeadingMarquee text="WHY CHOOSE US" color="black" />
          <div className="flex justify-between items-end py-6">
            <h3 className="font-mona-bold font-bold text-black text-5xl md:text-7xl lg:text-9xl tracking-wider">CHOOSE <br /> <span className="text-[#8D8D8D]">EXCELLENCE</span></h3>
            <AnimatedButton text="Get In Touch" href='#' theme='dark' />
          </div>
          <div className="mx-auto grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            {/* Left */}
            <div className="relative overflow-hidden rounded-4xl bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full min-h-105 w-full object-cover"
              >
                <source
                  src="/videos/choose-video.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-black/20" />

              <Image
                src="/images/logo.svg"
                alt="SparkCloud"
                width={90}
                height={40}
                className="absolute left-1/2 top-10 -translate-x-1/2"
              />
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex h-full flex-col rounded-4xl bg-white p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-mona-bold font-bold tracking-wide text-[clamp(4rem,8vw,7rem)] leading-none">
                      <span className="text-[#9B9B9B]">
                        {stat.value.startsWith('+') ? '+' : ''}
                      </span>

                      {stat.value.replace('+', '')}
                    </h3>

                    <p className="max-w-60 text-right text-sm leading-tight text-[#111] md:text-xl">
                      {stat.title}
                    </p>
                  </div>

                  <div className="my-6 h-px bg-[#E5E5E5]" />

                  <div className="flex items-end justify-between gap-4">
                    <p className="max-w-md text-sm leading-relaxed text-[#7A7A7A] md:text-base">
                      {stat.description}
                    </p>

                    <Image
                      src="/images/icon-wheel.svg"
                      alt="points"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-10">
        <FAQSection />
      </section>

      <OurPartners />
    </div>
  )
}

export default Home