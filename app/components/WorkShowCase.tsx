'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    X,
    Maximize2,
} from 'lucide-react'

import { WorkData } from '../data/workData'

type WorkProject = (typeof WorkData)[number]

const WorkShowCase = () => {
    const [activeProject, setActiveProject] =
        useState<WorkProject | null>(null)

    const [activeImage, setActiveImage] = useState(0)
    const [zoomed, setZoomed] = useState(false)

    const popupRef = useRef<HTMLDivElement | null>(null)
    const popupContentRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)
    const zoomRef = useRef<HTMLDivElement | null>(null)

    /*
    |--------------------------------------------------------------------------
    | OPEN PROJECT
    |--------------------------------------------------------------------------
    */

    const openProject = (project: WorkProject) => {
        setActiveProject(project)
        setActiveImage(0)
        setZoomed(false)
    }

    /*
    |--------------------------------------------------------------------------
    | CLOSE PROJECT
    |--------------------------------------------------------------------------
    */

    const closeProject = () => {
        if (!popupRef.current || !popupContentRef.current) return

        const tl = gsap.timeline({
            onComplete: () => {
                setActiveProject(null)
                setZoomed(false)
            },
        })

        tl.to(popupContentRef.current, {
            yPercent: 100,
            duration: 0.6,
            ease: 'power3.inOut',
        })

        tl.to(
            popupRef.current,
            {
                opacity: 0,
                duration: 0.35,
                ease: 'power2.out',
            },
            '-=0.35'
        )
    }

    /*
    |--------------------------------------------------------------------------
    | POPUP OPEN ANIMATION
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!activeProject || !popupRef.current || !popupContentRef.current) {
            return
        }

        document.body.style.overflow = 'hidden'

        gsap.set(popupRef.current, {
            opacity: 0,
        })

        gsap.set(popupContentRef.current, {
            yPercent: 100,
        })

        const tl = gsap.timeline()

        tl.to(popupRef.current, {
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out',
        })

        tl.to(
            popupContentRef.current,
            {
                yPercent: 0,
                duration: 0.8,
                ease: 'power4.out',
            },
            '-=0.15'
        )

        return () => {
            document.body.style.overflow = ''
        }
    }, [activeProject])

    /*
    |--------------------------------------------------------------------------
    | KEYBOARD
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (zoomed) {
                    setZoomed(false)
                } else if (activeProject) {
                    closeProject()
                }
            }

            if (!activeProject) return

            if (event.key === 'ArrowRight') {
                nextImage()
            }

            if (event.key === 'ArrowLeft') {
                previousImage()
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [activeProject, activeImage, zoomed])

    /*
    |--------------------------------------------------------------------------
    | IMAGE TRANSITION
    |--------------------------------------------------------------------------
    */

    const changeImage = (index: number) => {
        if (!activeProject) return

        const total = activeProject.images.length

        const nextIndex = (index + total) % total

        if (nextIndex === activeImage) return

        const image = imageRef.current

        if (!image) {
            setActiveImage(nextIndex)
            return
        }

        gsap.to(image, {
            opacity: 0,
            y: 25,
            duration: 0.2,
            ease: 'power2.in',

            onComplete: () => {
                setActiveImage(nextIndex)

                requestAnimationFrame(() => {
                    gsap.fromTo(
                        image,
                        {
                            opacity: 0,
                            y: -25,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.45,
                            ease: 'power3.out',
                        }
                    )
                })
            },
        })
    }

    const nextImage = () => {
        if (!activeProject) return

        changeImage(activeImage + 1)
    }

    const previousImage = () => {
        if (!activeProject) return

        changeImage(activeImage - 1)
    }

    /*
    |--------------------------------------------------------------------------
    | ZOOM
    |--------------------------------------------------------------------------
    */

    const openZoom = () => {
        setZoomed(true)

        requestAnimationFrame(() => {
            if (!zoomRef.current) return

            gsap.fromTo(
                zoomRef.current,
                {
                    opacity: 0,
                    scale: 0.92,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power3.out',
                }
            )
        })
    }

    const closeZoom = () => {
        if (!zoomRef.current) {
            setZoomed(false)
            return
        }

        gsap.to(zoomRef.current, {
            opacity: 0,
            scale: 0.92,
            duration: 0.3,
            ease: 'power2.in',

            onComplete: () => {
                setZoomed(false)
            },
        })
    }

    return (
        <>
            {/* =========================================================
                WORK SECTION
            ========================================================= */}

            <section className="w-full bg-[#040404] py-16 text-white md:py-20 lg:py-24">

                <div className="mx-auto w-full max-w-330 px-5 md:px-8">

                    {/* =================================================
                        HEADING
                    ================================================= */}

                    <div className="mb-8 md:mb-10 text-center">

                        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-medium leading-none tracking-tight">
                            Pre-Built Templates
                        </h2>

                        <p className="mt-3 text-sm text-white">
                            Need a Website Fast? Start With a Template.
                        </p>

                        <p className="mt-2 text-xs leading-relaxed text-white/55 md:text-xs">
                            Don't want to start from zero? Choose from our
                            collection of professionally designed website
                            templates, get them customised for your brand
                            and get online faster.
                        </p>

                    </div>


                    {/* =================================================
                        TEMPLATE GRID
                    ================================================= */}

                    <div className="grid grid-cols-1 gap-x-3 gap-y-7 sm:grid-cols-2 lg:grid-cols-6">

                        {WorkData.slice(0, 3).map((project, index) => (

                            <button
                                key={project.id}
                                type="button"
                                onClick={() => openProject(project)}
                                className={`
                                    group
                                    block
                                    w-full
                                    text-left
                                    outline-none
                                    ${index < 3
                                        ? 'lg:col-span-2'
                                        : 'lg:col-span-2 lg:col-start-auto'
                                    }
                                    ${index === 3
                                        ? 'lg:col-start-2'
                                        : ''
                                    }
                                    ${index === 4
                                        ? 'lg:col-start-4'
                                        : ''
                                    }
                                `}
                            >

                                {/* IMAGE */}

                                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white">

                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        sizes="
                                            (max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            280px
                                        "
                                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                                    />

                                    {/* HOVER */}

                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

                                    {/* ARROW */}

                                    <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <ArrowUpRight size={14} />
                                    </span>

                                </div>


                                {/* CAPTION */}

                                <div className="mt-4 text-center">

                                    <p className="text-xs leading-none text-white md:text-sm">
                                        {project.title}
                                    </p>

                                </div>

                            </button>

                        ))}

                    </div>


                    <div className="mt-7 flex flex-col lg:flex-row items-center justify-center gap-x-3 gap-y-7 ">
                        {WorkData.slice(3, 5).map((project, index) => (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => openProject(project)}
                                className={`
                                    group
                                    block
                                    w-full
                                    max-w-110
                                    text-left
                                    outline-none
                                    ${index < 3
                                        ? 'lg:col-span-2'
                                        : 'lg:col-span-2 lg:col-start-auto'
                                    }
                                    ${index === 3
                                        ? 'lg:col-start-2'
                                        : ''
                                    }
                                    ${index === 4
                                        ? 'lg:col-start-4'
                                        : ''
                                    }
                                `}
                            >

                                {/* IMAGE */}

                                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white">

                                    <Image
                                        src={project.cover}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        sizes="
                                            (max-width: 640px) 100vw,
                                            (max-width: 1024px) 50vw,
                                            280px
                                        "
                                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                                    />

                                    {/* HOVER */}

                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />

                                    {/* ARROW */}

                                    <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <ArrowUpRight size={14} />
                                    </span>

                                </div>


                                {/* CAPTION */}

                                <div className="mt-4 text-center">

                                    <p className="text-xs leading-none text-white md:text-sm">
                                        {project.title}
                                    </p>

                                </div>

                            </button>

                        ))}
                    </div>

                </div>

            </section>
            
            {/* =============================================================
                PROJECT POPUP
            ============================================================= */}
            
            {activeProject && (

                <div
                    ref={popupRef}
                    className="fixed inset-0 z-100 bg-black/80 opacity-0"
                >

                    <div
                        ref={popupContentRef}
                        className="absolute inset-x-0 bottom-0 top-6 flex flex-col overflow-hidden rounded-t-[28px] bg-[#0A0A0A] md:top-4 md:rounded-t-[36px]"
                    >

                        {/* TOP BAR */}

                        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 md:px-8 lg:px-10">

                            <div className="flex items-center gap-4">

                                <span className="text-[10px] text-[#0088FF]">
                                    {activeProject.id}
                                </span>

                                <span className="h-3 w-px bg-white/20" />

                                <span className="text-[10px] uppercase text-white/50">
                                    {activeProject.category}
                                </span>

                            </div>

                            <button
                                type="button"
                                onClick={closeProject}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:bg-white hover:text-black"
                                aria-label="Close project"
                            >
                                <X size={18} />
                            </button>

                        </div>


                        {/* PROJECT CONTENT */}

                        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">

                            {/* TITLE */}

                            <div className="px-5 pb-5 pt-7 md:px-8 md:pt-8 lg:px-10">

                                <h2 className="max-w-5xl font-mona-bold text-[clamp(2.5rem,6vw,6rem)] uppercase leading-[0.85]">
                                    {activeProject.title}
                                </h2>

                                <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/50 md:text-sm">
                                    {activeProject.description}
                                </p>

                            </div>


                            {/* IMAGE VIEWER */}

                            <div className="relative flex min-h-0 flex-1 items-center justify-center px-5 pb-5 md:px-8 lg:px-10">

                                <div className="relative flex h-full max-h-[65vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#111] md:rounded-3xl">

                                    <Image
                                        ref={imageRef}
                                        src={
                                            activeProject.images[
                                            activeImage
                                            ]
                                        }
                                        alt={activeProject.title}
                                        width={1800}
                                        height={1200}
                                        className="max-h-full w-full cursor-zoom-in object-contain"
                                        onClick={openZoom}
                                        unoptimized
                                    />

                                    <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-[9px] uppercase text-white/70 backdrop-blur-md">
                                        <Maximize2 size={12} />
                                        Click to zoom
                                    </div>

                                </div>


                                {/* PREVIOUS */}

                                {activeProject.images.length > 1 && (

                                    <button
                                        type="button"
                                        onClick={previousImage}
                                        className="absolute left-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform duration-300 hover:scale-110 md:left-10"
                                        aria-label="Previous image"
                                    >
                                        <ArrowLeft size={18} />
                                    </button>

                                )}


                                {/* NEXT */}

                                {activeProject.images.length > 1 && (

                                    <button
                                        type="button"
                                        onClick={nextImage}
                                        className="absolute right-7 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform duration-300 hover:scale-110 md:right-10"
                                        aria-label="Next image"
                                    >
                                        <ArrowRight size={18} />
                                    </button>

                                )}

                            </div>


                            {/* BOTTOM */}

                            <div className="flex shrink-0 items-center justify-between gap-5 border-t border-white/10 px-5 py-4 md:px-8 lg:px-10">

                                <div className="text-xs text-white/40">

                                    <span className="text-white">
                                        {String(activeImage + 1).padStart(
                                            2,
                                            '0'
                                        )}
                                    </span>

                                    <span className="mx-2">
                                        /
                                    </span>

                                    {String(
                                        activeProject.images.length
                                    ).padStart(2, '0')}

                                </div>


                                {/* THUMBNAILS */}

                                <div className="hidden flex-1 items-center justify-center gap-2 overflow-hidden md:flex">

                                    {activeProject.images.map(
                                        (image, index) => (

                                            <button
                                                key={`${image}-${index}`}
                                                type="button"
                                                onClick={() =>
                                                    changeImage(index)
                                                }
                                                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${index === activeImage
                                                    ? 'border-[#0088FF] opacity-100'
                                                    : 'border-white/10 opacity-40 hover:opacity-100'
                                                    }`}
                                            >

                                                <Image
                                                    src={image}
                                                    alt=""
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />

                                            </button>

                                        )
                                    )}

                                </div>


                                {/* CLOSE */}

                                <button
                                    type="button"
                                    onClick={closeProject}
                                    className="rounded-full bg-white px-6 py-3 text-[10px] font-medium uppercase text-black transition-transform duration-300 hover:scale-105"
                                >
                                    Close Project
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* =========================================================
                        ZOOM
                    ========================================================= */}

                    {zoomed && (

                        <div
                            ref={zoomRef}
                            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-5 opacity-0 md:p-10"
                            onClick={closeZoom}
                        >

                            <button
                                type="button"
                                onClick={closeZoom}
                                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black md:right-8 md:top-8"
                                aria-label="Close zoom"
                            >
                                <X size={18} />
                            </button>

                            <div
                                className="relative h-full w-full"
                                onClick={(event) =>
                                    event.stopPropagation()
                                }
                            >

                                <Image
                                    src={
                                        activeProject.images[
                                        activeImage
                                        ]
                                    }
                                    alt={activeProject.title}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                    unoptimized
                                />

                            </div>

                        </div>

                    )}

                </div>

            )}
        </>
    )
}

export default WorkShowCase