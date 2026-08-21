'use client'

import Image from 'next/image'
import Link from 'next/link'

const navigation = [
    {
        label: 'Home',
        href: '#',
    },
    {
        label: 'About',
        href: '#about',
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

const WebDesign = () => {
    return (
        <main className="bg-[#040404]">

            {/* Navigation */}

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

                        <h1 className="max-w-175 text-white text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.04em]">
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

        </main>
    )
}

export default WebDesign