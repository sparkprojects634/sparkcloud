'use client'

import clsx from 'clsx'

interface BrushHighlightProps {
  children: React.ReactNode
  className?: string
}

const BrushHighlight = ({ children, className }: BrushHighlightProps) => {
  return (
    <span
      className={clsx(
        'relative inline-block whitespace-nowrap font-bold',
        className
      )}
    >
      <span
        aria-hidden
        className="brush-highlight absolute left-1/2 top-1/2 h-[85%] w-[112%] -translate-x-1/2 -translate-y-1/2"
      />
      <span className="relative">{children}</span>
    </span>
  )
}

export default BrushHighlight
