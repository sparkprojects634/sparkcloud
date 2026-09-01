import LetsWork from "@/app/components/LetsWork"

const page = () => {
    return (
        <section className="mx-auto w-full max-w-350 px-4 pt-28 md:px-8 md:pt-32 lg:pt-36">
            <div className="flex h-full flex-col gap-10 justify-between">
                <div>
                    <h1 className="font-mona-bold text-center text-[clamp(4rem,9vw,9rem)] uppercase leading-none tracking-wider mt-10">
                        BUILD <span className="text-[#8F8F8F]">BRANDS </span>
                        <br />
                        THAT LAST
                    </h1>
                </div>
                <hr className='text-gray-300' />

                <div className="grid gap-6 md:grid-cols-2">
                    <h2 className="uppercase tracking-widest text-sm">Define. Shape. Stand out.</h2>
                    <p className="text-md leading-relaxed md:text-lg tracking-wide">
                        People don’t read. They feel. A strong brand hits in 3 seconds. No words needed. No scrolling required. At Namma, we design sharp identities
                        that speak instantly. No fluff. No guesswork. Positioning, art direction,
                        typography, tone, design system — every piece is built to deliver the
                        right message, at the right time, with the right energy. Have a brand? We make it unforgettable.
                    </p>
                </div>
            </div>

            <LetsWork />
        </section>
    )
}

export default page