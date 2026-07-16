import Image from 'next/image'
import React from 'react'
import SubHeadingMarquee from '../components/SubHeadingMarquee'
import AboutSection from '../components/AboutSection'
import { pillars, workProcess, team } from '../data/about'
import RevealSection from '../components/RevealSection'

const About = () => {
  return (
    <>
      <section
        className='relative h-full'
      >
        <div className='sticky top-0 h-screen overflow-hidden flex items-center justify-center'>

          {/* <div
                className='absolute inset-0 bg-linear-to-t from-[#f5f5f5] to-40% to-transparent w-full h-full -z-2'
              /> */}

          {/* Overlay */}
          {/* <div className='absolute inset-0 bg-black/30 z-1 p-7 rounded-2xl' /> */}

          {/* Video */}
          <div
            className="absolute inset-0 -z-10 overflow-hidden p-4"
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


          <div
            className="absolute flex-col text-white gap-5 inset-0 flex items-center justify-center will-change-[filter,opacity,transform]"
          >
            <span className="uppercase text-white/80">ui/ux design</span>
            <h2 className='text-6xl md:text-6xl lg:text-[200px] font-medium font-mona-bold uppercase text-center'>Digital <br /><span className='text-[#828282]'>Agency</span></h2>
            <h3 className=" text-lg md:text-xl lg:text-3xl font-medium">
              We Add Spark to Your Brand
            </h3>
          </div>

        </div>
      </section>

      <section className='mx-auto w-full max-w-350 px-5 md:px-8 flex flex-col items-center'>
        <AboutSection />
      </section>

      <section className="mx-auto w-full max-w-350 px-5 py-8 md:px-8 lg:py-12">

        <div className="flex flex-col items-center">

          <SubHeadingMarquee
            text="OUR VALUES"
            color="black"
          />

          <div className="mt-5 text-center">
            <h2 className="font-mona-bold text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.9]">
              VISION <span className="text-[#9A9A9A]">PILLARS</span>
            </h2>
          </div>

        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.05fr]">

          {/* Left Image */}

          <div className="overflow-hidden rounded-[30px]">
            <Image
              src="/images/about-company.png"
              alt="Vision Pillars"
              width={800}
              height={1000}
              className="h-full min-h-150 w-full object-cover"
            />
          </div>

          {/* Right */}

          <div className="flex flex-col gap-4">

            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-[26px] bg-white p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-white">
                    <Image src={pillar.icon} alt={pillar.title} width={40} height={20} unoptimized />
                  </div>

                  <div>

                    <h3 className="font-mona-bold text-[clamp(2rem,3vw,3rem)] uppercase leading-none">
                      {pillar.title}{' '}
                      <span className="text-[#9A9A9A]">
                        {pillar.highlight}
                      </span>
                    </h3>

                    <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-[#666]">
                      {pillar.description}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className='mx-auto w-full max-w-350 px-5 md:px-8 flex flex-col items-center'>
      </section>

      <section className="mx-auto w-full max-w-350 px-5 py-8 md:px-8 lg:py-12">

        <div className="overflow-hidden rounded-[36px] bg-[#101010] px-6 py-8 text-white md:px-10 md:py-12 lg:px-14 lg:py-16">

          <SubHeadingMarquee
            text="HOW WE WORK"
            color="white"
          />

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <h2 className="font-mona-bold text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.9]">
              WORK <br />
              <span className="text-[#8D8D8D]">
                PROCESS
              </span>
            </h2>

            <span className="font-mona-bold text-[clamp(4rem,9vw,6rem)] leading-none text-[#8D8D8D]">
              (03)
            </span>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {workProcess.map((item) => (
              <div
                key={item.id}
                className="rounded-[22px] border border-white/5 bg-[#1F1F1F] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/15 hover:bg-[#262626]"
              >

                <span className="font-mona-bold text-5xl leading-none text-[#6D6D6D]">
                  {item.id}
                </span>

                <div className="mt-6">

                  <h3 className="font-mona-bold text-4xl uppercase leading-none text-white">
                    {item.title}
                  </h3>

                  <span className="mt-1 block font-mona-bold text-4xl uppercase leading-none text-[#6D6D6D]">
                    {item.subtitle}
                  </span>

                </div>

                <p className="mt-6 text-sm leading-relaxed text-[#7A7A7A]">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="mx-auto w-full max-w-350 px-5 py-8 md:px-8 lg:py-12">

        <div className="flex flex-col items-center">

          <SubHeadingMarquee
            text="OUR TEAM"
            color="black"
          />

          <div className="mt-5">
            <h2 className="font-mona-bold text-center text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.9]">
              CORE <span className="text-[#9A9A9A]">SQUAD</span>
            </h2>
          </div>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5">

          {team.map((member) => (
            <div
              key={member.name}
              className="group flex overflow-hidden rounded-[22px] bg-[#ECECEC] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-4"
            >
              {/* Image */}

              <div className="relative aspect-square w-[110px] bg-[#363632] shrink-0 overflow-hidden md:w-[250px] rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col justify-start p-4 md:p-5">

                <h3 className="font-mona-bold text-xl uppercase leading-none text-black md:text-3xl">
                  {member.name}
                </h3>

                <p className="mt-1 font-sans text-sm text-[#5C5C5C] md:text-base">
                  {member.role}
                </p>

              </div>
            </div>
          ))}

        </div>

      </section>

      <RevealSection />
    </>
  )
}

export default About