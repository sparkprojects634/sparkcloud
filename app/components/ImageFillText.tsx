'use client'

import { forwardRef } from 'react'

interface ImageFillTextProps {
  children: React.ReactNode
}

const ImageFillText = forwardRef<HTMLDivElement, ImageFillTextProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="image-fill-text font-mona-bold text-[clamp(4rem,8vw,8rem)] uppercase"
      >
        {children}
      </div>
    )
  }
)

ImageFillText.displayName = 'ImageFillText'

export default ImageFillText