'use client'

import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const navigation = [
    {
        label: 'Home',
        href: '#',
    },
    {
        label: 'Services',
        href: '#services',
    },
    {
        label: 'Bootcamp',
        href: '#bootcamp',
    },
    {
        label: 'Mentors',
        href: '#mentors',
    },
    {
        label: 'Pricing',
        href: '#pricing',
    },
    {
        label: 'Blog',
        href: '#blog',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
]

const servicesData = [
    {
        id: '01',
        title: 'Website Design',
        description:
            'Modern, clean and engaging website designs that make your brand stand out and communicate clearly.',
        image: '/images/web-design/services/website-design.webp',
        imagePosition: 'left',
    },
    {
        id: '02',
        title: 'Website Development',
        description:
            'Fast, responsive and technically strong websites built using modern web technologies.',
        image: '/images/web-design/services/website-development.webp',
        imagePosition: 'right',
    },
    {
        id: '03',
        title: 'Business Websites',
        description:
            'Professional websites for companies, startups and businesses designed to generate trust and enquiries.',
        image: '/images/web-design/services/business-websites.webp',
        imagePosition: 'left',
    },
    {
        id: '04',
        title: 'Landing Pages',
        description:
            'High-converting landing pages designed to turn visitors into leads, customers and enquiries.',
        image: '/images/web-design/services/landing-pages.webp',
        imagePosition: 'right',
    },
    {
        id: '05',
        title: 'E-Commerce Websites',
        description:
            'Powerful online stores designed to showcase products and create a smooth shopping experience.',
        image: '/images/web-design/services/ecommerce.webp',
        imagePosition: 'left',
    },
    {
        id: '06',
        title: 'Website Redesign',
        description:
            'Transforming outdated websites into modern, responsive and conversion-focused digital experiences.',
        image: '/images/web-design/services/website-redesign.webp',
        imagePosition: 'right',
    },
    {
        id: '07',
        title: 'UI/UX Design',
        description:
            'Thoughtful user interfaces and experiences created to make websites intuitive, useful and easy to navigate.',
        image: '/images/web-design/services/uiux.webp',
        imagePosition: 'left',
    },
    {
        id: '08',
        title: 'Website Maintenance',
        description:
            'Reliable ongoing website maintenance, updates, improvements and technical support.',
        image: '/images/web-design/services/website-maintenance.webp',
        imagePosition: 'right',
    },
]

const WhyChooseData = [
  {
    id: '01',
    icon: '◈',
    title: 'Immersive Visuals,\nIntentional Conversions',
    description:
      'We blend high-impact aesthetics with human-centric UX architecture to turn casual visitors into loyal brand advocates.',
  },
  {
    id: '02',
    icon: '⚙',
    title: 'Flawless Engineering,\nUnmatched Speed',
    description:
      'Our robust, mobile-first development delivers lightning-fast load times and seamless performance across every device.',
  },
  {
    id: '03',
    icon: '✦',
    title: 'Optimized for Modern Search\n& AI Discovery',
    description:
      'Built with clean, semantic markup engineered to rank high on traditional search engines and stand out in generative AI discovery.',
  },
  {
    id: '04',
    icon: '⚙',
    title: 'Seamless Ecosystem\nIntegration',
    description:
      'We effortlessly connect your website with advanced e-commerce platforms, custom CMS workflows, and powerful marketing tools.',
  },
]


const WhyChoose = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      if (!card) return

      const gradient = card.querySelector(
        '.card-gradient'
      )

      if (!gradient) return

      gsap.to(gradient, {
        rotate: 360,
        duration: 5 + index * 5.5,
        repeat: -1,
        ease: 'none',
      })
    })

    return () => {
      gsap.killTweensOf('.card-gradient')
    }
  }, [])

  return (
    <section className="py-20 text-white md:py-28 lg:py-36">

      <div className="mx-auto flex w-full max-w-350 flex-col gap-10 px-5 md:px-8 lg:flex-row lg:gap-16 lg:px-10">

        {/* LEFT */}

        <div className="lg:w-[30%]">

          <span className="text-sm text-[#0088FF]">
            Career Support
          </span>

          <h2 className="mt-3 max-w-sm text-[clamp(2.5rem,4vw,4rem)] font-medium leading-[1.05] tracking-tight">
            Why Choose
            <br />
            SparkCloud?
          </h2>

        </div>


        {/* RIGHT */}

        <div className="grid flex-1 gap-3 md:grid-cols-2">

          {WhyChooseData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el
                }
              }}
              className="relative overflow-hidden rounded-2xl p-px"
            >

              {/* Animated border */}

              <div
                className="card-gradient pointer-events-none absolute inset-[-150%]"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, transparent 250deg, #0088ff 285deg, #0066ff 315deg, transparent 350deg)',
                }}
              />

              {/* Card */}

              <div className="relative flex h-full min-h-47.5 flex-col rounded-[15px] bg-[#040404] px-5 py-5 md:min-h-65 lg:px-5 lg:py-5">

                {/* Icon */}

                <div className="mb-4 flex h-10 w-9 items-center justify-center text-4xl text-white">
                  {item.icon}
                </div>


                {/* Title */}

                <h3 className="whitespace-pre-line text-xl font-medium leading-[1.05] tracking-tight md:text-[21px]">
                  {item.title}
                </h3>


                {/* Description */}

                <p className="mt-auto pt-5 text-[11px] leading-[1.45] text-white/60 md:max-w-[95%]">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}


const WebDesign = () => {
    return (
        <main className="bg-[#040404]">

            <header className="w-full">
                <div className="mx-auto flex h-25 w-full max-w-350 items-center justify-between px-6 lg:px-10">


                    <Link
                        href="#"
                        className="shrink-0"
                    >
                        <Image
                            src="/images/sparkcloud-logo-white.svg"
                            alt="SparkCloud"
                            width={290}
                            height={70}
                            priority
                            className="h-auto w-47.5 md:w-57.5"
                        />
                    </Link>


                    {/* Navigation */}

                    <nav className="hidden items-center gap-9 lg:flex">

                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-[15px] font-semibold transition-colors duration-300 ${item.label === 'Home'
                                    ? 'text-[#0088FF]'
                                    : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                    </nav>


                    {/* Mobile Menu */}

                    <button
                        type="button"
                        aria-label="Open menu"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
                    >
                        <span className="flex w-5 flex-col gap-1.5">
                            <span className="h-px w-full bg-white" />
                            <span className="h-px w-full bg-white" />
                            <span className="h-px w-full bg-white" />
                        </span>
                    </button>

                </div>
            </header>

            <section className="mx-auto w-full max-w-350 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 lg:px-10 lg:pt-20">

                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

                    {/* LEFT CONTENT */}

                    <div className="flex flex-col items-start">

                        <h1 className="max-w-175 text-white text-[clamp(2rem,5vw,3.2rem)] font-medium leading-[1.2] tracking-[-0.04em]">
                            Your Business deserves a Website that works.
                        </h1>

                        <p className="mt-7 max-w-162.5 text-base leading-relaxed text-white/80 md:text-lg">
                            Build websites that make your brand look professional
                            and your business stand out.
                        </p>


                        {/* CALL BUTTON */}

                        <Link
                            href="tel:+918363000000"
                            className="group mt-8 flex h-17 items-center rounded-3xl border border-white px-2 pl-8 transition-all duration-300 hover:bg-white hover:text-black"
                        >
                            <span className="mr-8 text-sm font-bold tracking-wide text-white group-hover:text-black">
                                CALL NOW
                            </span>

                            <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-r from-[#087FF5] to-[#003366] text-white">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='transition-transform duration-300 group-hover:-rotate-12'
                                >
                                    <path
                                        d="M22 16.92V20.92C22 21.47 21.55 21.92 21 21.92C10.51 21.92 2.08 13.49 2.08 3C2.08 2.45 2.53 2 3.08 2H7.08C7.63 2 8.08 2.45 8.08 3C8.08 4.25 8.28 5.49 8.67 6.68C8.73 6.89 8.68 7.12 8.52 7.29L6.13 9.68C7.55 12.47 9.53 14.45 12.32 15.87L14.71 13.48C14.88 13.32 15.11 13.27 15.32 13.33C16.51 13.72 17.75 13.92 19 13.92H21C21.55 13.92 22 14.37 22 14.92V16.92Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </Link>

                    </div>


                    {/* RIGHT IMAGE */}

                    <div className="group relative overflow-hidden rounded-3xl md:rounded-[30px] lg:rounded-4xl">

                        <Image
                            src="/images/web-design-hero.webp"
                            alt="Professional website design and development"
                            width={1000}
                            height={700}
                            priority
                            unoptimized
                            className="h-auto min-h-90 w-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.03] md:min-h-120 lg:min-h-140"
                        />

                    </div>

                </div>

            </section>

            <section className="mx-auto w-full max-w-350 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 lg:px-10 lg:pt-20" id="services">

                {/* Heading */}

                <div className="mb-10 flex flex-col items-center text-center md:mb-14">

                    <h2 className="font-semibold text-[clamp(2rem,6vw,3.5rem)] text-white leading-[0.9] tracking-wide">
                        Services
                    </h2>

                    <p className="mt-4 text-[10px] leading-widest text-white/70 lg:text-sm">
                        From your first idea to your final launch, we have got you covered.
                    </p>

                </div>


                {/* Services */}

                <div className="flex flex-col gap-3 md:gap-4">

                    {servicesData.map((service) => {

                        const image = (
                            <div className="group relative min-h-60 overflow-hidden rounded-[20px] md:min-h-70 lg:min-h-88.75 md:w-[45%]">

                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 767px) 100vw, 40vw"
                                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    unoptimized
                                    quality={100}
                                />

                            </div>
                        )

                        const content = (
                            <div className="flex min-h-60 flex-1 flex-col justify-center rounded-[20px] border border-white/15 px-8 py-10 transition-colors duration-500 hover:border-white/30 md:min-h-70 lg:min-h-88.75 lg:px-10">

                                <h3 className="font-semibold text-2xl leading-none tracking-wide text-white md:text-3xl lg:text-[30px]">
                                    {service.title}
                                </h3>

                                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                                    {service.description}
                                </p>

                            </div>
                        )

                        return (
                            <div
                                key={service.id}
                                className={`flex flex-col gap-3 md:flex-row md:gap-6 ${service.imagePosition === 'right'
                                        ? 'md:flex-row-reverse'
                                        : ''
                                    }`}
                            >

                                {image}

                                {content}

                            </div>
                        )
                    })}

                </div>

            </section>

            <WhyChoose />

        </main>
    )
}

export default WebDesign