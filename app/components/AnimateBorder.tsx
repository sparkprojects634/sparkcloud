'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedBorderCardProps {
    children: React.ReactNode
    className?: string
    duration?: number
}

const AnimatedBorderCard = ({
    children,
    className = '',
    duration = 8,
}: AnimatedBorderCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const gradientRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const card = cardRef.current
        const gradient = gradientRef.current

        if (!card || !gradient) return

        const ctx = gsap.context(() => {
            gsap.to(gradient, {
                rotation: 360,
                duration,
                repeat: -1,
                ease: 'none',
            })
        }, card)

        return () => ctx.revert()
    }, [duration])

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden rounded-[20px] p-px ${className}`}
        >
            {/* Animated blue border */}
            <div
                ref={gradientRef}
                className="pointer-events-none absolute inset-[-150%]"
                style={{
                    background:
                        'conic-gradient(from 0deg, transparent 0deg, transparent 250deg, #0079ff 285deg, #0066ff 315deg, transparent 350deg)',
                }}
            />

            {/* Actual card */}
            <div className="relative h-full rounded-[19px] bg-[#040404]">
                {children}
            </div>
        </div>
    )
}

export default AnimatedBorderCard