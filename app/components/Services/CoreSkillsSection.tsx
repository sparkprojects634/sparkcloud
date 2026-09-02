'use client'

import Image from 'next/image'
import type { Service } from '../../data/serviceTypes'

interface CoreSkillsSectionProps {
    service: Service
}

const CoreSkillsSection = ({
    service,
}: CoreSkillsSectionProps) => {
    return (
        <section className="w-full bg-[#f4f4f2] py-16 md:py-24 lg:py-28">

            <div className="mx-auto w-full max-w-425">

                <div className="space-y-16 md:space-y-24 lg:space-y-28">

                    {service.serviceContent.sections.map((skill, index) => (

                        <div
                            key={skill.id}
                            className="grid gap-8 lg:grid-cols-[0.35fr_1fr_0.6fr] lg:items-start lg:gap-16"
                        >

                            {/* =================================================
                                LABEL
                            ================================================= */}

                            <div>
                                {index === 0 && (
                                    <p className="text-sm uppercase tracking-wide text-black/70">
                                        CORE SKILLS
                                    </p>
                                )}
                            </div>


                            {/* =================================================
                                CONTENT
                            ================================================= */}

                            <div>

                                <h2 className="font-mona-bold text-[clamp(2.8rem,5vw,5rem)] uppercase leading-none tracking-2">
                                    {skill.title}
                                </h2>

                                <p className="mt-6 max-w-140 text-sm leading-[1.6] text-black/85 md:text-base">
                                    {skill.description}
                                </p>

                            </div>


                            {/* =================================================
                                MEDIA
                            ================================================= */}

                            <div className="relative aspect-1.5/1 min-h-45 overflow-hidden rounded-lg bg-[#9fc5ff]">

                                {skill.media.type === 'video' ? (
                                    <video
                                        src={skill.media.src}
                                        poster={skill.media.poster}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <Image
                                        src={skill.media.src}
                                        alt={
                                            skill.media.alt ||
                                            skill.title
                                        }
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover"
                                    />
                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default CoreSkillsSection