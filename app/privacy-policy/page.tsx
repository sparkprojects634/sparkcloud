'use client'

import Link from 'next/link'
import { useState } from 'react'

const sections = [
    { id: 'information-we-collect', number: '01', title: 'Information We Collect' },
    { id: 'how-we-use', number: '02', title: 'How We Use Information' },
    { id: 'cookies-analytics', number: '03', title: 'Cookies and Analytics' },
    { id: 'data-sharing', number: '04', title: 'Data Sharing' },
    { id: 'data-retention', number: '05', title: 'Data Retention' },
    { id: 'data-security', number: '06', title: 'Data Security' },
    { id: 'international-transfers', number: '07', title: 'International Transfers' },
    { id: 'your-rights', number: '08', title: 'Your Rights' },
    { id: 'childrens-privacy', number: '09', title: "Children's Privacy" },
    { id: 'third-party-services', number: '10', title: 'Third-Party Services' },
    { id: 'changes', number: '11', title: 'Changes to This Policy' },
]

const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
}

function SectionHeading({
    number,
    title,
}: {
    number: string
    title: string
}) {
    return (
        <div className="mb-6 flex items-start gap-4">
            <span className="pt-1 text-sm font-semibold tracking-widest text-[#287CF5]">
                {number}
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">
                {title}
            </h2>
        </div>
    )
}

function BulletList({
    items,
}: {
    items: string[]
}) {
    return (
        <ul className="mt-5 space-y-3">
            {items.map((item) => (
                <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-7 text-black/60 md:text-base"
                >
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#287CF5]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

const page = () => {
    const [activeSection, setActiveSection] = useState(
        'information-we-collect'
    )

    const handleSectionClick = (id: string) => {
        setActiveSection(id)
        scrollToSection(id)
    }

    return (
        <>
            {/* Background glow */}
            <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#287CF5]/10 blur-[140px]" />

                <div className="absolute right-[-10rem] top-[35rem] h-[30rem] w-[30rem] rounded-full bg-[#287CF5]/8 blur-[160px]" />
            </div>

            {/* Hero */}
            <section className="relative border-b border-white/10">
                <div className="mx-auto w-full max-w-350 px-6 pt-28 md:px-10 md:pt-40">

                    <div className="max-w-5xl">

                        <h1 className="font-mona-bold text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.82]">
                            Privacy Policy
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg md:leading-8">
                            This Privacy Policy explains how SparkCloud
                            collects, uses, discloses, and protects your
                            information when you use our Services.
                        </p>

                    </div>

                </div>
            </section>

            {/* Content */}
            <section className="relative">
                <div className="mx-auto w-full max-w-350 px-6 py-14 md:px-10 md:py-20">

                    <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[310px_minmax(0,1fr)]">

                        {/* Desktop navigation */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                                <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35">
                                    Table of Contents
                                </p>

                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            type="button"
                                            onClick={() =>
                                                handleSectionClick(section.id)
                                            }
                                            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                                                activeSection === section.id
                                                    ? 'bg-[#287CF5]/10 text-black'
                                                    : 'text-black/45 hover:bg-white/5 hover:text-black'
                                            }`}
                                        >
                                            <span
                                                className={`text-[10px] font-semibold tracking-widest ${
                                                    activeSection === section.id
                                                        ? 'text-[#287CF5]'
                                                        : 'text-black/25'
                                                }`}
                                            >
                                                {section.number}
                                            </span>

                                            <span className="text-sm">
                                                {section.title}
                                            </span>
                                        </button>
                                    ))}
                                </nav>

                            </div>
                        </aside>

                        {/* Content */}
                        <div className="min-w-0">

                            {/* Intro */}
                            <div className="mb-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-7 md:p-10">

                                <p className="text-base leading-8 text-black/65 md:text-lg">
                                    SparkCloud{' '}
                                    <strong className="font-semibold text-black">
                                        (“we”, “our”, or “us”)
                                    </strong>{' '}
                                    values your privacy. This Privacy Policy
                                    explains how we collect, use, disclose,
                                    and protect your information when you use
                                    our Services.
                                </p>

                            </div>

                            <div className="space-y-6">

                                {/* 01 */}
                                <article
                                    id="information-we-collect"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="01"
                                        title="Information We Collect"
                                    />

                                    <h3 className="text-lg font-semibold text-black md:text-xl">
                                        Information You Provide
                                    </h3>

                                    <p className="mt-3 text-[15px] leading-7 text-black/60 md:text-base">
                                        We may collect:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Name',
                                            'Email address',
                                            'Billing information',
                                            'Account credentials',
                                            'Files and content you upload',
                                            'Support communications',
                                        ]}
                                    />

                                    <h3 className="mt-8 text-lg font-semibold text-black md:text-xl">
                                        Automatically Collected Information
                                    </h3>

                                    <p className="mt-3 text-[15px] leading-7 text-black/60 md:text-base">
                                        We may automatically collect:
                                    </p>

                                    <BulletList
                                        items={[
                                            'IP address',
                                            'Device information',
                                            'Browser type',
                                            'Usage data',
                                            'Cookies and analytics data',
                                        ]}
                                    />
                                </article>

                                {/* 02 */}
                                <article
                                    id="how-we-use"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="02"
                                        title="How We Use Information"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We use information to:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Provide and maintain Services',
                                            'Improve performance and security',
                                            'Process payments',
                                            'Respond to support requests',
                                            'Communicate updates and notices',
                                            'Detect fraud or abuse',
                                            'Comply with legal obligations',
                                        ]}
                                    />
                                </article>

                                {/* 03 */}
                                <article
                                    id="cookies-analytics"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="03"
                                        title="Cookies and Analytics"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We may use cookies and analytics tools
                                        to:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Remember preferences',
                                            'Measure traffic and usage',
                                            'Improve user experience',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        You can disable cookies through
                                        browser settings.
                                    </p>
                                </article>

                                {/* 04 */}
                                <article
                                    id="data-sharing"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="04"
                                        title="Data Sharing"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We do not sell personal information.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        We may share information with:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Service providers and hosting partners',
                                            'Payment processors',
                                            'Legal authorities when required by law',
                                            'Business successors during mergers or acquisitions',
                                        ]}
                                    />
                                </article>

                                {/* 05 */}
                                <article
                                    id="data-retention"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="05"
                                        title="Data Retention"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We retain information only as long as
                                        necessary for:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Providing Services',
                                            'Legal compliance',
                                            'Security and dispute resolution',
                                        ]}
                                    />
                                </article>

                                {/* 06 */}
                                <article
                                    id="data-security"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="06"
                                        title="Data Security"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We implement reasonable technical and
                                        organizational safeguards to protect
                                        user information.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        However, no system can guarantee
                                        absolute security.
                                    </p>
                                </article>

                                {/* 07 */}
                                <article
                                    id="international-transfers"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="07"
                                        title="International Transfers"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        Your information may be processed and
                                        stored in countries outside your
                                        jurisdiction where data protection
                                        laws may differ.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        By using the Services, you consent to
                                        such transfers.
                                    </p>
                                </article>

                                {/* 08 */}
                                <article
                                    id="your-rights"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="08"
                                        title="Your Rights"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        Depending on your location, you may
                                        have rights to:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Access personal data',
                                            'Correct inaccurate information',
                                            'Delete your data',
                                            'Object to certain processing',
                                            'Withdraw consent',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        To exercise these rights, contact us
                                        at the email below.
                                    </p>
                                </article>

                                {/* 09 */}
                                <article
                                    id="childrens-privacy"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="09"
                                        title="Children's Privacy"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        The Services are not intended for
                                        children under 13 years of age.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        We do not knowingly collect personal
                                        data from children.
                                    </p>
                                </article>

                                {/* 10 */}
                                <article
                                    id="third-party-services"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="10"
                                        title="Third-Party Services"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        Our Services may contain links or
                                        integrations with third-party
                                        services. We are not responsible for
                                        their privacy practices.
                                    </p>
                                </article>

                                {/* 11 */}
                                <article
                                    id="changes"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/[0.025] p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="11"
                                        title="Changes to This Policy"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We may update this Privacy Policy
                                        periodically. Continued use of the
                                        Services after updates means you
                                        accept the revised policy.
                                    </p>
                                </article>

                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#287CF5]/20 bg-[#287CF5]/[0.07] p-7 md:p-10">

                                <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#287CF5]">
                                            Privacy Questions?
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold text-black md:text-3xl">
                                            Need more information about your privacy?
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-6 text-black/50 md:text-base">
                                            Contact the SparkCloud team if you
                                            have questions about how your
                                            information is collected, used, or
                                            protected.
                                        </p>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#287CF5] hover:text-black"
                                    >
                                        Contact Us
                                    </Link>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page