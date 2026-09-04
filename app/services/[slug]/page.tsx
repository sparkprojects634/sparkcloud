import { notFound } from 'next/navigation'

import LetsWork from "@/app/components/Services/LetsWork"
import StrategicSection from "@/app/components/Services/StrategicSection"
import { services } from "../../data/services"
import CoreSkillsSection from '@/app/components/Services/CoreSkillsSection'

type Props = {
    params: Promise<{   
        slug: string
    }>
}

const page = async ({ params }: Props) => {

    const { slug } = await params

    const service = services.find(
        (item) => item.slug === `/services/${slug}`
    )

    if (!service) {
        notFound()
    }


    return (
        <section className="mx-auto w-full max-w-350 px-4 pt-28 md:px-8 md:pt-32 lg:pt-36">
            <div className="flex h-full flex-col gap-10 justify-between pb-10 md:pb-15 lg:pb-20">
                <div>
                    <h1 className="font-mona-bold text-center text-[clamp(4rem,9vw,9rem)] uppercase leading-none tracking-wider mt-10">
                        BUILD <span className="text-[#8F8F8F]">BRANDS </span>
                        <br />
                        THAT LAST
                    </h1>
                </div>
                <hr className='text-gray-300' />

                <div className="grid gap-6 md:grid-cols-2">
                    <h2 className="uppercase tracking-widest text-sm">Define. Shape. Stand out.</h2>
                    <p className="text-md leading-relaxed md:text-lg tracking-wide">
                        People don’t read. They feel. A strong brand hits in 3 seconds. No words needed. No scrolling required. At Namma, we design sharp identities
                        that speak instantly. No fluff. No guesswork. Positioning, art direction,
                        typography, tone, design system — every piece is built to deliver the
                        right message, at the right time, with the right energy. Have a brand? We make it unforgettable.
                    </p>
                </div>
            </div>

            <StrategicSection
                service={service}
            />

            <CoreSkillsSection service={service} />

            <LetsWork />
        </section>
    )
}

export default page