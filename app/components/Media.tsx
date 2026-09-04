'use client'

import Image from 'next/image'
import { useState } from 'react'

type MediaType = {
    type: 'image' | 'video'
    src: string
    poster?: string
    alt?: string
}

const Media = ({
    media,
    className = '',
}: {
    media?: MediaType
    className?: string
}) => {
    const [videoError, setVideoError] = useState(false)

    if (!media) return null

    if (media.type === 'image') {
        return (
            <Image
                src={media.src}
                alt={media.alt || ''}
                fill
                sizes="100vw"
                className={`object-cover  ${className}`}
                unoptimized
            />
        )
    }


    if (videoError) {
        if (media.poster) {
            return (
                <Image
                    src={media.poster}
                    alt={media.alt || ''}
                    fill
                    sizes="100vw"
                    className={`object-cover object-top ${className}`}
                    unoptimized
                />
            )
        }

        return null
    }

    return (
        <video
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            onError={() => setVideoError(true)}
            className={`h-full w-full object-cover ${className}`}
        />
    )
}

export default Media