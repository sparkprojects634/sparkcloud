'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

import AnimatedButton from './AnimatedButton'
import { navigation } from '../data/navigation'

interface Props {
    open: boolean
    close: () => void
}

const MobileMenu = ({ open, close }: Props) => {
    const menuRef = useRef<HTMLDivElement>(null)
    const itemsRef = useRef<HTMLAnchorElement[]>([])
    const buttonRef = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    useLayoutEffect(() => {
        if (!menuRef.current) return

        const ctx = gsap.context(() => {
            gsap.set(menuRef.current, {
                opacity: 0,
                scale: 0.75,
                x: 60,
                y: -60,
                transformOrigin: 'top right',
            })

            tl.current = gsap.timeline({ paused: true })

            tl.current
                .to(menuRef.current, {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                })
                .from(
                    itemsRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        stagger: 0.08,
                        duration: 0.45,
                        ease: 'power3.out',
                    },
                    '-=0.25'
                )
                .from(
                    buttonRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.35,
                        ease: 'power3.out',
                    },
                    '-=0.2'
                )
        }, menuRef)

        return () => {
            ctx.revert()
        }
    }, [])

    useLayoutEffect(() => {
  if (!tl.current) return

  if (open) {
    tl.current.play()
  } else {
    tl.current.reverse()
  }
}, [open])

    return (
        <div
            className={`fixed right-5 top-24 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
        >
            <div
                ref={menuRef}
                className="w-[min(92vw,700px)] rounded-[40px] bg-[#F5F5F5] p-8 md:p-12 shadow-2xl"
            >
                <div className="space-y-2">
                    {navigation.map((item, index) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            onClick={close}
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el
                            }}
                            className="group flex items-start gap-4"
                        >
                            <h2 className="font-mona-bold text-[clamp(3rem,8vw,7rem)] leading-none uppercase text-black">
                                {item.label}
                            </h2>

                            <span className="mt-3 text-[#9D9D9D]">
                                ({item.id})
                            </span>
                        </Link>
                    ))}
                </div>

                <div
                    ref={buttonRef}
                    className="mt-12"
                >
                    <AnimatedButton
                        text="Get In Touch ✦"
                        href="/contact"
                        theme="dark"
                    />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu