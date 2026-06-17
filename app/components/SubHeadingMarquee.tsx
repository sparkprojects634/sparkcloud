import Image from 'next/image'

interface SubHeadingMarqueeProps {
  text: string
}

const repeatedText = Array(8).fill(null)

const SubHeadingMarquee = ({
  text,
}: SubHeadingMarqueeProps) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/icon-wheel.svg"
        alt="icon"
        width={30}
        height={30}
        aria-hidden="true"
        className="shrink-0"
      />

      <div className="max-w-2xs overflow-hidden font-mona mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {repeatedText.map((_, index) => (
            <span
              key={index}
              className="px-2 text-sm font-medium uppercase tracking-wider text-neutral-900 md:text-xl"
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