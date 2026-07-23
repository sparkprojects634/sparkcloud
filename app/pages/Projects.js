import AnimatedButton from "../components/AnimatedButton"
import RevealSection from "../components/RevealSection"
import SubHeadingMarquee from "../components/SubHeadingMarquee"

const Projects = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-350 px-5 py-8 md:px-8 lg:py-12">
                <SubHeadingMarquee
                    text="OUR PORTFOLIO"
                    color="black"
                />

                <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    {/* Heading */}
                    <div>
                        <h2 className="font-mona-bold text-[clamp(4rem,10vw,9rem)] leading-[0.88] uppercase tracking-wide text-black">
                            CREATIVE
                        </h2>

                        <h2 className="font-mona-bold text-[clamp(4rem,10vw,9rem)] leading-[0.88] uppercase tracking-wide text-[#9A9A9A]">
                            SHOWCASE
                        </h2>
                    </div>

                    {/* CTA */}
                    <div className="md:pb-4">
                        <AnimatedButton
                            text="Get In Touch"
                            href="/contact"
                            theme="dark"
                        />
                    </div>
                </div>
            </section>

            <RevealSection />
        </>
    )
}

export default Projects