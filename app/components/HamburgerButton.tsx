'use client'

interface Props {
  open: boolean
  onClick: () => void
}

const HamburgerButton = ({
  open,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#828282]/10 backdrop-blur-xl"
    >
      <div className="relative h-5 w-6">

        <span
          className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-500 ${
            open
              ? 'top-2 rotate-45'
              : 'top-0'
          }`}
        />

        <span
          className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-all duration-300 ${
            open
              ? 'opacity-0'
              : ''
          }`}
        />

        <span
          className={`absolute left-0 h-0.5 w-full bg-white transition-all duration-500 ${
            open
              ? 'top-2 -rotate-45'
              : 'top-4'
          }`}
        />

      </div>
    </button>
  )
}

export default HamburgerButton