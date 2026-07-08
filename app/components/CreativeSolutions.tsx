'use client'

import SubHeadingMarquee from './SubHeadingMarquee'
import { services } from '../data/services'
import ServiceRow from './ServiceRow'

const CreativeSolutions = () => {
    return (
        <section className="py-6 lg:py-10">
            <div className="mx-auto w-full">

                <div className="overflow-hidden w-full rounded-[38px] bg-[#101010] p-6 text-white md:p-10 lg:p-14">

                    <div className="mx-auto max-w-350">
                        <SubHeadingMarquee
                            text="OUR SERVICES"
                            color="white"
                        />

                        <div className="mt-6 mb-12">

                            <h2 className="font-mona-bold text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide">
                                CREATIVE
                            </h2>

                            <h2 className="font-mona-bold text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.9] tracking-wide text-[#8B8B8B]">
                                SOLUTIONS
                            </h2>

                        </div>

                        <div className="border-t border-white/10">
                            {services.map(service => (
                                <ServiceRow
                                    key={service.id}
                                    service={service}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CreativeSolutions