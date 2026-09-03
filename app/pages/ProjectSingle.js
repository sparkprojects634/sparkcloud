'use client'

import Image from 'next/image'
import Link from 'next/link'

import { projectsSingle } from '../data/projects'
import SubHeadingMarquee from '../components/SubHeadingMarquee'
import AnimatedTextLink from '../components/AnimatedTextLink'
import AnimatedButton from '../components/AnimatedButton'

/* =========================================================
   MEDIA
========================================================= */

const Media = ({
    media,
    className = '',
}) => {
    if (!media) return null

    if (media.type === 'video') {
        return (
            <video
                src={media.src}
                poster={media.poster}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className={`h-full w-full object-cover ${className}`}
            />
        )
    }

    return (
        <Image
            src={media.src}
            alt={media.alt || ''}
            width={1800}
            height={1200}
            unoptimized
            className={`h-full w-full object-cover ${className}`}
        />
    )
}


/* =========================================================
   PROJECT SINGLE
========================================================= */

const ProjectSingle = ({
    project,
}) => {

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F5F5F5]">
                <h1 className="font-mona-bold text-4xl uppercase md:text-6xl">
                    Project Not Found
                </h1>
            </main>
        )
    }


    /* =====================================================
       NEXT PROJECT
    ===================================================== */

    const currentIndex = projectsSingle.findIndex(
        (item) => item.slug === project.slug
    )

    const nextProject =
        currentIndex === -1
            ? projectsSingle[0]
            : projectsSingle[
            (currentIndex + 1) % projectsSingle.length
            ]


    /* =====================================================
       MEDIA
    ===================================================== */

    const media = project.media || []

    const media01 = media[0]
    const media02 = media[1]

    const purposeMedia = project.projectPurpose?.media || []

    const purpose01 = purposeMedia[0]
    const purpose02 = purposeMedia[1]

    const additionalMedia = project.additionalMedia || []


    return (
        <main className="bg-[#F5F5F5] text-black">
            
            {/* =================================================
                HERO
            ================================================= */}

            <section className="mx-auto w-full max-w-425 px-4 pt-28 md:px-8 md:pt-32 lg:pt-36">
                <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* LEFT */}
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <SubHeadingMarquee text={`PROJECT / ${project.id}`} />

                            <h1 className="font-mona-bold text-[clamp(4rem,9vw,9rem)] uppercase leading-none tracking-tight mt-10">
                                {project.title}
                            </h1>
                        </div>

                        <hr className='text-gray-300' />

                        {/* Description */}
                        {project.intro?.description && (
                            <p className="mt-8 max-w-sm text-xs leading-relaxed text-[#555] md:text-sm">
                                {project.intro.description}
                            </p>
                        )}
                    </div>


                    {/* HERO */}
                    <div className="group relative lg:aspect-16/10 overflow-hidden rounded-3xl bg-[#DDD] md:rounded-[30px]">
                        <Media
                            media={project.hero}
                            className="transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                        />
                    </div>
                </div>


                {/* META */}

                <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">

                    {/* SERVICE */}

                    <div className="rounded-xl bg-[#E8E8E8] px-4 py-3 text-center font-semibold text-sm md:px-5">
                        <span className="text-[#999]">
                            Service:
                        </span>{' '}
                        {project.service}
                    </div>


                    {/* INDUSTRY */}

                    <div className="rounded-xl bg-[#E8E8E8] px-4 py-3 text-center font-semibold text-sm md:px-5">
                        <span className="text-[#999]">
                            Industry:
                        </span>{' '}
                        {project.industry}
                    </div>


                    {/* YEAR */}

                    <div className="rounded-xl bg-[#E8E8E8] px-4 py-3 text-center font-semibold text-sm md:px-5">
                        <span className="text-[#999]">
                            Year:
                        </span>{' '}
                        {project.year}
                    </div>


                    {/* LIVE PROJECT */}

                    <div className="rounded-xl bg-[#E8E8E8] px-4 py-3 text-center font-semibold text-sm md:px-5">
                        {project.liveUrl ? (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1"
                            >
                                <span className="text-[#999]">
                                    View Live:
                                </span>

                                <span className="underline underline-offset-2">
                                    {new URL(project.liveUrl).hostname.replace('www.', '')}
                                </span>

                                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    ↗
                                </span>
                            </Link>
                        ) : (
                            <>
                                <span className="text-[#999]">
                                    View Live:
                                </span>{' '}
                                Coming Soon
                            </>
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                MEDIA SHOWCASE
            ================================================= */}

            {(media01 || media02) && (
                <section className="mx-auto w-full max-w-425 px-4 py-8 md:px-8 md:py-10">

                    <div className="w-auto">
                        {media01 && (
                            <div className="group relative aspect-video lg:aspect-16/7 overflow-hidden rounded-[22px] bg-black">

                                <Media
                                    media={media02}
                                    className="transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                                />

                            </div>
                        )}
                    </div>

                </section>
            )}


            {/* =================================================
                PROJECT PURPOSE
            ================================================= */}

            {project.projectPurpose && (
                <section className="mx-auto w-full max-w-425 px-4 py-10 md:px-8 md:py-16 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                        {/* TEXT */}
                        <div className='flex flex-col justify-between h-full'>
                            <div>
                                <SubHeadingMarquee text={`${project.projectPurpose.title}`} />
                                <p className="mt-3 lg:mt-7 max-w-lg text-sm leading-relaxed text-[#555] md:text-base">
                                    {project.projectPurpose.description}
                                </p>
                            </div>

                            {purpose01 && (
                                <div className="group relative aspect-video overflow-hidden rounded-[20px] bg-[#DDD]">
                                    <Media
                                        media={purpose01}
                                        className="transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                                    />
                                </div>
                            )}
                        </div>

                        {/* MEDIA */}
                        <div className="">
                            {purpose02 && (
                                <div className="group relative aspect-square overflow-hidden rounded-[20px] bg-[#DDD]">
                                    <Media
                                        media={purpose02}
                                        className="transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                                    />
                                </div>
                            )}
                        </div>

                    </div>

                </section>
            )}


            {/* =================================================
                ACHIEVED GOALS
            ================================================= */}

            {project.achievedGoals && (
                <section className="mx-auto w-full max-w-425 border-t border-black/10 px-4 py-10 md:px-8 md:py-16">

                    <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">

                        {/* TITLE */}

                        <div>
                            <SubHeadingMarquee text="PROJECT / OUTCOME" />
                            <h2 className="mt-3 lg:mt-7 font-mona-bold text-[clamp(3rem,6vw,6rem)] uppercase leading-none">
                                {project.achievedGoals.title}
                            </h2>
                        </div>


                        {/* CONTENT */}

                        <div>

                            <p className="max-w-3xl text-sm leading-relaxed text-[#555] md:text-base">
                                {project.achievedGoals.description}
                            </p>


                            {project.achievedGoals.points?.length > 0 && (

                                <div className="mt-8 border-t border-black/10">

                                    {project.achievedGoals.points.map(
                                        (point, index) => (

                                            <div
                                                key={index}
                                                className="grid grid-cols-[40px_1fr] gap-4 border-b border-black/10 py-4"
                                            >

                                                <span className="text-sm text-[#999]">
                                                    ({String(index + 1).padStart(2, '0')})
                                                </span>

                                                <p className="text-xs uppercase md:text-sm">
                                                    {point}
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                    </div>

                </section>
            )}


            {/* =================================================
                NEXT PROJECT
            ================================================= */}

            {nextProject && (
                <section className="mx-auto w-full max-w-425 px-0 py-6 md:px-0 md:py-10">

                    <div className="relative overflow-hidden rounded-[28px] bg-[#101010] px-5 py-16 text-white md:rounded-[36px] md:px-10 md:py-24 lg:py-32">


                        {/* MARQUEE */}

                        <div className="flex justify-center overflow-hidden">

                            <SubHeadingMarquee
                                text="NEXT PROJECT"
                                color="white"
                            />

                        </div>


                        {/* TITLE */}

                        <div className="mt-16 flex justify-center">

                            <h2 className="font-mona-bold text-center text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.8] tracking-tight">

                                <span className="text-white">
                                    EXPLORE
                                </span>

                                {' '}

                                <span className="text-[#858585]">
                                    NEXT
                                </span>

                            </h2>

                        </div>


                        {/* ACTIONS */}

                        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">

                            <AnimatedTextLink text="All Projects" href={`/projects`} />


                            <AnimatedButton text="Next" href={`/projects/${nextProject.slug}`} theme='light' />

                        </div>


                        {/* PROJECT NAME */}

                        <div className="mt-8 flex justify-center">

                            <Link
                                href={`/projects/${nextProject.slug}`}
                                className="text-center text-sm uppercase tracking-[0.2em] text-[#777] transition-colors duration-300 hover:text-white"
                            >
                                {nextProject.title}
                            </Link>

                        </div>

                    </div>

                </section>
            )}

        </main>
    )
}

export default ProjectSingle