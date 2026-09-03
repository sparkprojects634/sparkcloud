'use client'

import Link from 'next/link'
import { useState } from 'react'
import AnimatedButton from '../components/AnimatedButton'

const sections = [
    { id: 'eligibility', number: '01', title: 'Eligibility' },
    { id: 'account', number: '02', title: 'Account Registration' },
    { id: 'use-of-services', number: '03', title: 'Use of Services' },
    { id: 'intellectual-property', number: '04', title: 'Intellectual Property' },
    { id: 'user-content', number: '05', title: 'User Content' },
    { id: 'payments', number: '06', title: 'Payments and Billing' },
    { id: 'availability', number: '07', title: 'Service Availability' },
    { id: 'termination', number: '08', title: 'Termination' },
    { id: 'disclaimer', number: '09', title: 'Disclaimer of Warranties' },
    { id: 'liability', number: '10', title: 'Limitation of Liability' },
    { id: 'indemnification', number: '11', title: 'Indemnification' },
    { id: 'governing-law', number: '12', title: 'Governing Law' },
    { id: 'changes', number: '13', title: 'Changes to Terms' },
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

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="mt-5 space-y-3">
            {items.map((item) => (
                <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-7 text-black/60 md:text-base"
                >
                    <span className="mt-2.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[#287CF5]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

const page = () => {
    const [activeSection, setActiveSection] = useState('eligibility')

    const handleSectionClick = (id: string) => {
        setActiveSection(id)
        scrollToSection(id)
    }

    return (
        <>
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#287CF5]/10 blur-[140px]" />
                <div className="absolute -right-40 top-140 h-120 w-120 rounded-full bg-[#287CF5]/8 blur-[160px]" />
            </div>

            <section className="relative border-b border-white/10">
                <div className="mx-auto w-full max-w-350 px-6 pt-18 md:px-10 md:pt-25">

                    <div className="max-w-4xl">
                        <h1 className="font-mona-bold text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.82]">
                            Terms and Conditions
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg md:leading-8">
                            Please read these Terms of Service carefully before
                            accessing or using SparkCloud Services.
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
                            <div className="sticky top-10 rounded-3xl border border-white/10 bg-white/3 p-5 backdrop-blur-xl">

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
                                            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 ${activeSection === section.id
                                                    ? 'bg-[#287CF5]/10 text-black'
                                                    : 'text-black/45 hover:bg-white/5 hover:text-black'
                                                }`}
                                        >
                                            <span
                                                className={`text-[10px] font-semibold tracking-widest ${activeSection ===
                                                        section.id
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
                                    Welcome to{' '}
                                    <strong className="font-semibold text-black">
                                        SparkCloud
                                    </strong>{' '}
                                    (“Company”, “we”, “our”, or “us”). By
                                    accessing or using our website,
                                    applications, software, cloud services,
                                    or related products (collectively, the
                                    “Services”), you agree to these Terms of
                                    Service (“Terms”).
                                </p>

                                <p className="mt-5 text-base leading-8 text-black/65 md:text-lg">
                                    If you do not agree with these Terms, do not
                                    use the Services.
                                </p>
                            </div>

                            <div className="space-y-6">

                                {/* 01 */}
                                <article
                                    id="eligibility"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="01"
                                        title="Eligibility"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        You must be at least 18 years old or
                                        the age of majority in your
                                        jurisdiction to use the Services.
                                    </p>

                                    <p className="mt-5 text-[15px] leading-7 text-black/60 md:text-base">
                                        By using SparkCloud, you represent that:
                                    </p>

                                    <BulletList
                                        items={[
                                            'You can legally enter into a binding agreement',
                                            'The information you provide is accurate',
                                            'You will comply with all applicable laws',
                                        ]}
                                    />
                                </article>

                                {/* 02 */}
                                <article
                                    id="account"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="02"
                                        title="Account Registration"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        To access certain features, you may
                                        need to create an account.
                                    </p>

                                    <p className="mt-5 text-[15px] leading-7 text-black/60 md:text-base">
                                        You are responsible for:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Maintaining account confidentiality',
                                            'All activities under your account',
                                            'Providing accurate account information',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        We reserve the right to suspend or
                                        terminate accounts that violate these
                                        Terms.
                                    </p>
                                </article>

                                {/* 03 */}
                                <article
                                    id="use-of-services"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="03"
                                        title="Use of Services"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        You agree not to:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Use the Services for illegal purposes',
                                            'Attempt unauthorized access to systems or data',
                                            'Interfere with platform security or performance',
                                            'Upload malicious code, spam, or harmful content',
                                            'Reverse engineer or copy our technology without permission',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        We may monitor usage to ensure
                                        compliance and platform security.
                                    </p>
                                </article>

                                {/* 04 */}
                                <article
                                    id="intellectual-property"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="04"
                                        title="Intellectual Property"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        All content, software, branding, logos,
                                        and technology related to SparkCloud
                                        are owned by SparkCloud or its
                                        licensors.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        You may not reproduce, distribute, or
                                        exploit any part of the Services
                                        without written permission.
                                    </p>
                                </article>

                                {/* 05 */}
                                <article
                                    id="user-content"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="05"
                                        title="User Content"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        You retain ownership of content you
                                        upload or submit.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        By using the Services, you grant
                                        SparkCloud a limited license to host,
                                        process, and display your content
                                        solely for operating and improving the
                                        Services.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        You are responsible for ensuring your
                                        content:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Does not violate laws',
                                            'Does not infringe intellectual property rights',
                                            'Does not contain harmful or unlawful material',
                                        ]}
                                    />
                                </article>

                                {/* 06 */}
                                <article
                                    id="payments"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="06"
                                        title="Payments and Billing"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        If paid plans are offered:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Fees are billed according to your selected plan',
                                            'Payments are non-refundable unless required by law',
                                            'We may change pricing with prior notice',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        Failure to pay may result in
                                        suspension or termination.
                                    </p>
                                </article>

                                {/* 07 */}
                                <article
                                    id="availability"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="07"
                                        title="Service Availability"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We strive to maintain reliable
                                        services but do not guarantee
                                        uninterrupted access.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        We may:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Modify features',
                                            'Perform maintenance',
                                            'Suspend or discontinue services at any time',
                                        ]}
                                    />
                                </article>

                                {/* 08 */}
                                <article
                                    id="termination"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="08"
                                        title="Termination"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We may suspend or terminate access if:
                                    </p>

                                    <BulletList
                                        items={[
                                            'You violate these Terms',
                                            'Your use creates legal or security risks',
                                            'Required by law',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        You may stop using the Services at any
                                        time.
                                    </p>
                                </article>

                                {/* 09 */}
                                <article
                                    id="disclaimer"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="09"
                                        title="Disclaimer of Warranties"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        The Services are provided{' '}
                                        <strong className="text-black">
                                            “AS IS”
                                        </strong>{' '}
                                        and{' '}
                                        <strong className="text-black">
                                            “AS AVAILABLE”
                                        </strong>
                                        .
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        To the maximum extent permitted by
                                        law, SparkCloud disclaims all
                                        warranties, including:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Merchantability',
                                            'Fitness for a particular purpose',
                                            'Non-infringement',
                                            'Availability or error-free operation',
                                        ]}
                                    />
                                </article>

                                {/* 10 */}
                                <article
                                    id="liability"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="10"
                                        title="Limitation of Liability"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        To the fullest extent permitted by
                                        law, SparkCloud shall not be liable
                                        for:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Indirect or consequential damages',
                                            'Loss of profits, data, or business opportunities',
                                            'Service interruptions or security incidents',
                                        ]}
                                    />

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        Our total liability shall not exceed
                                        the amount paid by you in the previous
                                        12 months.
                                    </p>
                                </article>

                                {/* 11 */}
                                <article
                                    id="indemnification"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="11"
                                        title="Indemnification"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        You agree to indemnify and hold
                                        SparkCloud harmless from claims
                                        arising from:
                                    </p>

                                    <BulletList
                                        items={[
                                            'Your use of the Services',
                                            'Your violation of these Terms',
                                            'Your infringement of third-party rights',
                                        ]}
                                    />
                                </article>

                                {/* 12 */}
                                <article
                                    id="governing-law"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="12"
                                        title="Governing Law"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        These Terms shall be governed by the
                                        laws of India, without regard to
                                        conflict-of-law principles.
                                    </p>

                                    <p className="mt-6 text-[15px] leading-7 text-black/60 md:text-base">
                                        Any disputes shall be resolved in the
                                        courts located in Kolkata, West
                                        Bengal, India.
                                    </p>
                                </article>

                                {/* 13 */}
                                <article
                                    id="changes"
                                    className="scroll-mt-10 rounded-[28px] border border-white/10 bg-white/2.5 p-7 md:p-10"
                                >
                                    <SectionHeading
                                        number="13"
                                        title="Changes to Terms"
                                    />

                                    <p className="text-[15px] leading-7 text-black/60 md:text-base">
                                        We may update these Terms
                                        periodically. Continued use of the
                                        Services after updates constitutes
                                        acceptance of the revised Terms.
                                    </p>
                                </article>

                            </div>

                            {/* Bottom CTA */}
                            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#287CF5]/20 bg-[#287CF5]/[0.07] p-7 md:p-10">

                                <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                                            Need Help?
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold text-black md:text-3xl">
                                            Have questions about these terms?
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-6 text-black/50 md:text-base">
                                            Contact the SparkCloud team if you
                                            need clarification regarding these
                                            Terms of Service.
                                        </p>
                                    </div>

                                    <AnimatedButton text='Contact' href='/contact' theme='dark'/>

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