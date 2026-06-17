import Image from 'next/image'

const partners = [
    {
        name: 'DBound Media & Marketing',
        logo: '/images/partners/dbound-logo.png',
    },
    {
        name: 'House of R-Martin',
        logo: '/images/partners/r-martin-logo.png',
    },
    {
        name: 'Convrse AI',
        logo: '/images/partners/convrse-logo.png',
    },
    {
        name: 'BMW',
        logo: '/images/partners/bmw-logo.png',
    },
    {
        name: 'Land Rover',
        logo: '/images/partners/land-rover-logo.png',
    },
    {
        name: 'UiUK',
        logo: '/images/partners/uluk-logo.png',
    },
    {
        name: 'TLG',
        logo: '/images/partners/tlg-logo.png',
    },
    {
        name: 'Nautics World',
        logo: '/images/partners/dnaughties-logo.png',
    },
]

const OurPartners = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto w-full max-w-350 px-5 md:px-8">
                <h2 className="mb-14 text-center font-mona-bold text-5xl font-monosans font-semibold uppercase tracking-normal text-neutral-400 md:mb-20 md:text-7xl lg:text-9xl">
                    <span className="text-black">Our</span> Partners
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex h-28 items-center justify-center rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                        >
                            <div className="relative h-14 w-full flex items-center justify-center">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    height={150}
                                    width={80}
                                    className="transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw,
                         (max-width: 1280px) 50vw,
                         25vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurPartners