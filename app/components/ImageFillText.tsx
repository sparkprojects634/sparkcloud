'use client'

import { forwardRef } from 'react'
import clsx from 'clsx'

interface ImageFillTextProps {
  children: React.ReactNode
  className?: string
}

const ImageFillText = forwardRef<
  HTMLDivElement,
  ImageFillTextProps
>(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'image-fill-text font-mona-bold uppercase leading-none',
        'text-[clamp(3rem,10vw,11.5rem)]',
        className
      )}
    >
      {children}
    </div>
  )
})

ImageFillText.displayName = 'ImageFillText'

export default ImageFillText