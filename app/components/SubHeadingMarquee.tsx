import Image from 'next/image'

interface SubHeadingMarqueeProps {
  text: string
  color: string
}

interface IconWheelProps {
  className?: string
}

interface IconWheelProps extends React.SVGProps<SVGSVGElement> {}

const IconWheel = ({ className, ...props  }: IconWheelProps) => {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0)">
        <mask
          id="mask0"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="32"
        >
          <path d="M30 0H0V32H30V0Z" fill="white" />
        </mask>

        <g mask="url(#mask0)">
          <path
            d="M12.5771 12.2603V2.08203H17.0387V12.2603H12.5771ZM10.3464 16.1158L1.57715 11.0266L3.80792 7.17119L12.5387 12.2603L10.3464 16.1158ZM19.1925 16.1158L17.0387 12.2989L25.8079 7.17119L28.0387 11.0266L19.1925 16.1158ZM25.8079 25.0603L16.9618 19.9712L19.1925 16.1543L28.0387 21.2049L25.8079 25.0603ZM3.80792 25.0603L1.57715 21.2049L10.3464 16.1543L12.5771 19.9712L3.80792 25.0603ZM12.5771 30.1495V20.0097H16.9618V30.1495H12.5771Z"
            fill="currentColor"
          />
        </g>
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="30" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}


const repeatedText = Array(8).fill(null)

const SubHeadingMarquee = ({
  text,
  color
}: SubHeadingMarqueeProps) => {
  return (
    <div className="flex items-center gap-3">
      <IconWheel
        className="h-8 w-8 shrink-0"
        style={{ color }}
      />

      <div className="max-w-2xs overflow-hidden font-mona mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {repeatedText.map((_, index) => (
            <span
              key={index}
              className={`px-2 text-sm font-medium uppercase tracking-wider text-${color} md:text-xl`}
            >
              {text} -
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeadingMarquee