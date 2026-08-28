'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedBorderCard from '../components/AnimateBorder'
import { useRef, useState } from 'react'
import Partners from '../components/Partners'
import EmailContactForm from '../components/EmailContactForm'
import { WorkProcessData, webDesignNavigation, servicesData, WhyChooseData, BetterWebsiteData, TestimonialsData, FAQData } from "../data/webDesign"
import WorkShowCase from '../components/WorkShowCase'

const WhyChoose = () => {

    const cardsRef = useRef([])

    return (
        <section className="py-5 text-white md:py-8 lg:py-10" id='why-choose'>

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

                        <AnimatedBorderCard
                            key={item.id}
                            duration={7 + index * 1.2}
                        >
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
                        </AnimatedBorderCard>
                    ))}

                </div>

            </div>

        </section>
    )
}

const BetterWebsite = () => {
    return (
        <section className="bg-[#040404] py-5 text-white md:py-10 lg:py-10">

            <div className="mx-auto w-full max-w-350 px-5 md:px-8 lg:px-10">

                {/* Heading */}

                <div className="mx-auto max-w-5xl text-center">

                    <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-tight">
                        A Better Website. A Better First Impression.
                    </h2>

                    <p className="mt-5 text-[clamp(1rem,1.5vw,1.35rem)] text-[#0079FF]">
                        Your website is often the first place people meet your
                        business. Make that first impression count.
                    </p>

                </div>


                {/* Cards */}

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {BetterWebsiteData.map((item, index) => (
                        <AnimatedBorderCard
                            key={item.id}
                            duration={7 + index * 1.2}
                            className="min-h-60"
                        >
                            <div className="flex h-full flex-col items-center justify-center px-6 py-10 text-center md:px-7">
                                <h3 className="whitespace-pre-line text-[clamp(1.4rem,2vw,1.5rem)] font-medium leading-[1.08] tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-7 max-w-70 text-sm leading-[1.55] text-white/75">
                                    {item.description}
                                </p>
                            </div>
                        </AnimatedBorderCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

const WebDesign = () => {
    const [active, setActive] = useState(1)

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

                        {webDesignNavigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-[15px] font-semibold transition-colors duration-300 ${item.label === ''
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

                <EmailContactForm />

            </section>

            <BetterWebsite />

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

            <section className='flex flex-col items-center w-full'>
                <Partners />
            </section>

            <WorkShowCase />

            <section className="w-full px-4 py-12 text-white sm:px-6 md:px-8 lg:px-10 lg:py-20">

                <div className="mx-auto flex w-full max-w-330 flex-col gap-10 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10">

                    {/* =====================================================
                    LEFT IMAGE
                ===================================================== */}

                    <div className="relative overflow-hidden rounded-[14px] bg-[#0B0D13]">

                        {/* Blue ambient glow */}

                        <div className="pointer-events-none absolute left-[30%] top-[10%] z-10 h-32 w-32 rounded-full bg-[#536BFF]/30 blur-[70px]" />

                        <Image
                            src="/images/web-design/work-process/work-process.webp"
                            alt="SparkCloud website development process"
                            width={900}
                            height={900}
                            priority
                            unoptimized
                            className="relative z-1 h-auto w-full object-cover"
                        />

                    </div>


                    {/* =====================================================
                    RIGHT CONTENT
                ===================================================== */}

                    <div className="flex flex-col">

                        {/* Heading */}

                        <div>

                            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-none tracking-tight">
                                Work Process
                            </h2>

                            <p className="mt-3 max-w-180 text-sm leading-[1.55] text-white/60">
                                Follow our structured learning process from selecting
                                your course to landing your dream job with expert
                                guidance and hands-on experience.
                            </p>

                        </div>


                        {/* Process */}

                        <div className="mt-6 flex flex-col overflow-scroll max-h-105 pt-4">

                            {WorkProcessData.map((item, index) => {

                                const Icon = item.icon

                                return (
                                    <div
                                        key={item.id}
                                        className="relative flex gap-8 pb-7 last:pb-0 group"
                                    >

                                        {/* Vertical line */}

                                        {index !== WorkProcessData.length - 1 && (
                                            <div className="absolute left-7 top-14 h-[calc(100%-25px)] w-px bg-white/15" />
                                        )}


                                        {/* Icon */}

                                        <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border bg-[#040404] border-white/70 group-hover:bg-linear-to-r group-hover:from-[#087FF5] group-hover:border-none group-hover:to-[#003366] transition-colors duration-500">
                                            <Image
                                                src={item.icon}
                                                width={30}
                                                height={30}
                                                alt={item.title}
                                            />

                                            {/* Number bubble */}

                                            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-medium tracking-wider text-black">
                                                {item.id}
                                            </span>

                                        </div>


                                        {/* Content */}

                                        <div className="pt-0.5">

                                            <h3 className="font-medium leading-none text-lg lg:text-2xl">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 max-w-80 text-[12px] leading-5 text-white/40">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>

            </section>


            <section className="w-full bg-[#040404] py-20 text-white md:py-28 lg:py-32">

                <div className="mx-auto w-full max-w-350 px-5 md:px-8 lg:px-10">

                    {/* HEADER */}

                    <div className="mb-12 text-center md:mb-14">

                        <span className="text-sm font-medium text-[#0088FF]">
                            Testimonials
                        </span>

                        <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1] tracking-tight">
                            Don't Just Take Our Word For It.
                        </h2>

                    </div>


                    {/* TESTIMONIALS */}

                    <div className="grid gap-4 md:grid-cols-3">

                        {TestimonialsData.map((item) => (

                            <article
                                key={item.id}
                                className="group relative"
                            >

                                <div className="relative min-h-55 overflow-visible rounded-2xl border border-white/10 bg-[#040404] px-5 pb-7 pt-8 transition-colors duration-500 hover:border-white/20 md:min-h-56 md:px-5 md:pt-8 lg:px-5">

                                    {/* QUOTE ICON */}

                                    <div className="absolute -left-3 -top-3 z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-[#087FF5] to-[#003366] shadow-[0_0_20px_rgba(0,136,255,0.15)]">

                                        <Image
                                            src="/images/web-design/testimonials/quotes.svg"
                                            alt="Quote"
                                            width={28}
                                            height={28}
                                            className="h-7 w-7 object-contain"
                                            unoptimized
                                        />

                                    </div>


                                    {/* QUOTE */}

                                    <p className="max-w-md text-[11px] font-normal italic leading-[1.5] text-white/70 md:text-[11px] lg:text-sm">
                                        {item.quote}
                                    </p>


                                    {/* PERSON */}

                                    <div className="mt-6 border-l border-white/20 pl-3">

                                        <h3 className="text-base font-medium leading-none text-[#0088FF] md:text-sm lg:text-lg">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 text-xs text-white/40 md:text-sm">
                                            {item.role}
                                        </p>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            <section className="w-full py-5 text-white md:py-28 lg:py-10">

                <div className="mx-auto grid w-full max-w-350 gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">

                    {/* LEFT */}

                    <div>
                        <span className="text-sm font-medium text-[#0088FF]">
                            FAQs
                        </span>

                        <h2 className="mt-3 max-w-lg text-[clamp(2.5rem,4vw,3.8rem)] font-medium leading-[1.05] tracking-tight">
                            Got Questions? We Have
                            <br className="hidden lg:block" />
                            {' '}Answers!
                        </h2>

                        <p className="mt-3 max-w-xl text-[11px] leading-relaxed text-white/70 md:text-xs">
                            Get answers to common questions before starting your
                            learning journey.
                        </p>
                    </div>


                    {/* RIGHT */}

                    <div className="flex flex-col gap-4">

                        {FAQData.map((item) => {
                            const isActive = active === item.id

                            return (
                                <div
                                    key={item.id}
                                    className="overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-white/20"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActive(
                                                isActive ? null : item.id
                                            )
                                        }
                                        className="flex w-full items-center justify-between px-5 py-5 text-left md:px-5 md:py-5"
                                    >
                                        <span
                                            className={`text-base font-normal leading-tight transition-colors duration-300 md:text-[17px] ${isActive
                                                    ? 'text-[#0088FF]'
                                                    : 'text-white'
                                                }`}
                                        >
                                            {item.question}
                                        </span>

                                        <span
                                            className={`ml-5 text-xl font-light text-white/60 transition-transform duration-300 ${isActive
                                                    ? 'rotate-45'
                                                    : 'rotate-0'
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>


                                    {/* ANSWER */}

                                    <div
                                        className={`grid transition-all duration-500 ease-out ${isActive
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="max-w-2xl px-5 pb-6 text-[11px] leading-[1.5] text-white/70 md:px-5 md:pb-7 md:text-xs">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </section>

            <footer className="relative overflow-hidden px-4 py-12 text-white sm:px-6 md:px-8 md:py-16">

                {/* Blue glow */}
                <div className="pointer-events-none absolute right-[-10%] top-0 h-full w-[55%] bg-[radial-gradient(circle_at_80%_50%,rgba(0,121,255,0.8),rgba(0,121,255,0.35)_35%,transparent_70%)] blur-2xl" />

                <div className="relative mx-auto w-full max-w-350">

                    {/* Main footer card */}

                    <AnimatedBorderCard
                        key={1}
                        duration={1.2 * 10}
                    >
                        <div className="rounded-[28px] bg-[#040404] px-6 py-10 text-center sm:px-10 md:rounded-2xl md:px-16 md:py-12">

                            {/* Logo */}
                            <Link
                                href="/"
                                className="mx-auto flex w-fit items-center transition-opacity duration-300 hover:opacity-80"
                            >
                                <Image
                                    src="/images/sparkcloud-logo-white.svg"
                                    alt="SparkCloud"
                                    width={180}
                                    height={50}
                                    className="h-auto w-37.5 sm:w-43.75"
                                />
                            </Link>


                            {/* CTA */}
                            <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">
                                Visit{' '}
                                <Link
                                    href="/"
                                    className="text-[#0079FF] transition-colors duration-300 hover:text-white"
                                >
                                    SPARKCLOUD
                                </Link>
                            </h2>


                            {/* Contact */}
                            <div className="mt-7 space-y-4 text-xs text-white/30 sm:text-sm">

                                <p>
                                    Email:{' '}
                                    <a
                                        href="mailto:info@sparkcloud.us"
                                        className="transition-colors hover:text-white/60"
                                    >
                                        info@sparkcloud.us
                                    </a>
                                </p>

                                <p>
                                    Phone:{' '}
                                    <a
                                        href="tel:+917439381155"
                                        className="transition-colors hover:text-white/60"
                                    >
                                        +91 7439381155
                                    </a>
                                </p>

                            </div>


                            {/* Links */}
                            <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-white/30 sm:text-sm">

                                <Link
                                    href="/about"
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    About
                                </Link>

                                <Link
                                    href="/privacy-policy"
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    Privacy & Policy
                                </Link>

                                <Link
                                    href="/disclaimer"
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    Disclaimer
                                </Link>

                                <Link
                                    href="/terms-conditions"
                                    className="transition-colors duration-300 hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>

                            </nav>


                            {/* Divider */}
                            <div className="mt-6 border-t border-white/20" />


                            {/* Copyright */}
                            <p className="mt-5 text-[10px] text-white/30 sm:text-xs">
                                © Copyright 2026. All Rights Reserved SparkCloud
                            </p>

                        </div>
                    </AnimatedBorderCard>
                </div>

            </footer>

        </main>
    )
}

export default WebDesign