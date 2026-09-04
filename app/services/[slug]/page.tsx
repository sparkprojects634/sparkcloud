import { notFound } from 'next/navigation'

import LetsWork from "@/app/components/Services/LetsWork"
import StrategicSection from "@/app/components/Services/StrategicSection"
import { services } from "../../data/services"
import CoreSkillsSection from '@/app/components/Services/CoreSkillsSection'
import { projectsSingle } from '@/app/data/projects'
import { Metadata } from 'next'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug.split('/').filter(Boolean).pop()!,
    }))
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params

    const service = services.find((item) => {
        const serviceSlug = item.slug
            .split('/')
            .filter(Boolean)
            .pop()

        return serviceSlug === slug
    })

    if (!service) {
        return {
            title: 'Digital Services Built for Sustainable Growth | SparkCloud',
            description:
                'Explore SparkCloud’s integrated digital services across design, development, SEO, AEO, GEO, paid media and social media to support lasting growth.',
        }
    }

    return {
        title: `${service.metaTitle} | SparkCloud`,
        description: service.metaDescription,
    }
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
                        {service.heading} <span className="text-[#8F8F8F]">{service.subHeading} </span>
                        <br />
                        {service.subHeading2}
                    </h1>
                </div>
                <hr className='text-gray-300' />

                <div className="grid gap-6 md:grid-cols-2">
                    <h2 className="uppercase tracking-widest text-sm">{service.subHeading3}</h2>
                    <p className="text-md leading-relaxed md:text-lg tracking-wide">
                        {service.description}
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