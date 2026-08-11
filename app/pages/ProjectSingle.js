'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projectsSingle } from '../data/projects'
import SubHeadingMarquee from '../components/SubHeadingMarquee'

const Media = ({ media, className = '' }) => {
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
            width={1600}
            height={1000}
            unoptimized
            className={`h-full w-full object-cover ${className}`}
        />
    )
}

const ProjectSingle = ({ project }) => {
    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <h1 className="font-mona-bold text-5xl">
                    PROJECT NOT FOUND
                </h1>
            </main>
        )
    }

    return (
        <main className="bg-[#F5F5F5] text-black">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="mx-auto w-full max-w-370 px-5 pb-10 pt-28 md:px-8 lg:pt-36">

                <div className="mb-8">
                    <p className="mb-3 text-xs uppercase text-[#777]">
                        PROJECT / {project.id}
                    </p>

                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">

                        <h1 className="max-w-5xl font-mona-bold text-[clamp(4rem,9vw,10rem)] uppercase leading-[0.82]">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="max-w-xs text-sm uppercase text-[#777] lg:text-right">
                                {project.subtitle}
                            </p>
                        )}

                    </div>
                </div>

                {/* Hero Media */}

                <div className="group relative aspect-16/8 overflow-hidden rounded-[28px] bg-[#DDD]">

                    <Media
                        media={project.hero}
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                </div>

            </section>


            {/* =====================================================
          INTRO
      ===================================================== */}

            <section className="mx-auto w-full max-w-370 px-5 py-10 md:px-8 lg:py-16">

                <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">

                    <div>
                        <p className="text-xs uppercase text-[#777]">
                            {project.intro?.label || 'PROJECT OVERVIEW'}
                        </p>
                    </div>

                    <div>
                        <p className="max-w-5xl font-mona text-[clamp(1.5rem,3vw,3rem)] leading-tight">
                            {project.intro?.description}
                        </p>
                    </div>

                </div>

            </section>


            {/* =====================================================
          MEDIA SHOWCASE
      ===================================================== */}

            {project.media?.length > 0 && (
                <section className="mx-auto w-full max-w-370 px-5 py-8 md:px-8 lg:py-12">

                    <div className="flex flex-col gap-6">

                        {project.media.map((media, index) => (

                            <div
                                key={`${media.src}-${index}`}
                                className={`group relative overflow-hidden rounded-[28px] bg-[#DDD] ${index === 0
                                    ? 'aspect-16/8'
                                    : 'aspect-video'
                                    }`}
                            >

                                <Media
                                    media={media}
                                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                />

                            </div>

                        ))}

                    </div>

                </section>
            )}


            {/* =====================================================
          PROJECT PURPOSE
      ===================================================== */}

            {project.projectPurpose && (
                <section className="mx-auto w-full max-w-370 px-5 py-12 md:px-8 lg:py-20">

                    <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr]">

                        {/* Left */}

                        <div>

                            <p className="mb-5 text-xs uppercase text-[#777]">
                                PROJECT PURPOSE
                            </p>

                            <h2 className="font-mona-bold text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.85]">
                                {project.projectPurpose.title}
                            </h2>

                        </div>


                        {/* Right */}

                        <div>

                            <p className="max-w-4xl text-base leading-relaxed text-[#555] md:text-lg">
                                {project.projectPurpose.description}
                            </p>


                            {/* Purpose Media */}

                            {project.projectPurpose.media?.length > 0 && (
                                <div className="mt-10 grid gap-6 md:grid-cols-2">

                                    {project.projectPurpose.media.map(
                                        (media, index) => (

                                            <div
                                                key={`${media.src}-${index}`}
                                                className="group relative aspect-4/3 overflow-hidden rounded-3xl bg-[#DDD]"
                                            >

                                                <Media
                                                    media={media}
                                                    className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                                />

                                            </div>

                                        )
                                    )}

                                </div>
                            )}

                        </div>

                    </div>

                </section>
            )}


            {/* =====================================================
          ACHIEVED GOALS
      ===================================================== */}

            {project.achievedGoals && (
                <section className="mx-auto w-full max-w-370 border-t border-black/10 px-5 py-12 md:px-8 lg:py-20">

                    <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr]">

                        <div>

                            <p className="mb-5 text-xs uppercase text-[#777]">
                                PROJECT OUTCOME
                            </p>

                            <h2 className="font-mona-bold text-[clamp(3rem,6vw,7rem)] uppercase leading-[0.85]">
                                {project.achievedGoals.title}
                            </h2>

                        </div>


                        <div>

                            <p className="max-w-4xl text-base leading-relaxed text-[#555] md:text-lg">
                                {project.achievedGoals.description}
                            </p>


                            {project.achievedGoals.points?.length > 0 && (
                                <div className="mt-10 border-t border-black/10">

                                    {project.achievedGoals.points.map(
                                        (point, index) => (

                                            <div
                                                key={index}
                                                className="grid grid-cols-[50px_1fr] border-b border-black/10 py-5"
                                            >

                                                <span className="text-xs text-[#999]">
                                                    ({String(index + 1).padStart(2, '0')})
                                                </span>

                                                <p className="text-sm md:text-base">
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


            {/* =====================================================
          ADDITIONAL MEDIA
      ===================================================== */}

            {project.additionalMedia?.length > 0 && (
                <section className="mx-auto w-full max-w-370 px-5 py-8 md:px-8 lg:py-12">

                    <div className="grid gap-6 md:grid-cols-2">

                        {project.additionalMedia.map(
                            (media, index) => (

                                <div
                                    key={`${media.src}-${index}`}
                                    className="group relative aspect-4/3 overflow-hidden rounded-[28px] bg-[#DDD]"
                                >

                                    <Media
                                        media={media}
                                        className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                    />

                                </div>

                            )
                        )}

                    </div>

                </section>
            )}


            {/* =====================================================
          BACK TO PROJECTS
      ===================================================== */}

            {(() => {
                const currentIndex = projectsSingle.findIndex(
                    (item) => item.slug === project.slug
                )

                const nextProject =
                    currentIndex === -1
                        ? projectsSingle[0]
                        : projectsSingle[(currentIndex + 1) % projectsSingle.length]

                if (!nextProject) return null

                return (
                    <section className="mx-auto w-full max-w-350 px-0 py-8 md:px-0">

                        <div className="relative overflow-hidden rounded-4xl bg-[#101010] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16 lg:py-32">

                            {/* Top marquee */}

                            <div className="flex justify-center overflow-hidden">

                                <SubHeadingMarquee
                                    text="Next Project"
                                    color="white"
                                />

                            </div>


                            {/* Heading */}

                            <div className="mt-20 flex justify-center">

                                <h2 className="font-mona-bold text-center text-[clamp(4rem,11vw,9rem)] uppercase leading-[0.8] tracking-tight">

                                    <span className="text-white">
                                        EXPLORE
                                    </span>{' '}

                                    <span className="text-[#858585]">
                                        NEXT
                                    </span>

                                </h2>

                            </div>


                            {/* Actions */}

                            <div className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row">

                                {/* All Projects */}

                                <Link
                                    href="/projects"
                                    className="group relative text-lg uppercase text-white"
                                >
                                    <span>
                                        ALL PROJECTS ↗
                                    </span>

                                    <span className="absolute bottom-1.5 left-0 h-px w-full origin-left bg-white transition-transform duration-500 group-hover:scale-x-0" />
                                </Link>


                                {/* Next */}

                                <Link
                                    href={`/projects/${nextProject.slug}`}
                                    className="group flex min-w-55 items-center justify-center overflow-hidden rounded-full bg-white px-12 py-6 text-black"
                                >

                                    <span className="relative block h-[1.2em] overflow-hidden text-lg uppercase">

                                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                                            NEXT
                                        </span>

                                        <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                                            NEXT
                                        </span>

                                    </span>

                                </Link>

                            </div>


                            {/* Next project name */}

                            <div className="mt-10 flex justify-center">

                                <Link
                                    href={`/projects/${nextProject.slug}`}
                                    className="text-center text-xs uppercase tracking-widest text-[#777] transition-colors duration-300 hover:text-white"
                                >
                                    {nextProject.title}
                                </Link>

                            </div>

                        </div>

                    </section>
                )
            })()}

        </main>
    )
}

export default ProjectSingle