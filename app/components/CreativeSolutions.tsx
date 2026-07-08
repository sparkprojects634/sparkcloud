'use client'

import SubHeadingMarquee from './SubHeadingMarquee'
import { services } from '../data/services'

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

                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="grid gap-8 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-white/3 md:grid-cols-[60px_1fr_320px]"
                                >
                                    <span className="text-xs text-[#7E7E7E]">
                                        ({service.id})
                                    </span>

                                    <h3 className="font-mona-bold text-[clamp(2.5rem,5vw,5rem)] uppercase leading-none tracking-wide text-[#9A9A9A] transition-colors duration-300 hover:text-white">
                                        {service.title}
                                    </h3>

                                    <p className="self-center text-sm leading-relaxed text-[#7E7E7E] md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CreativeSolutions