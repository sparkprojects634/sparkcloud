import AnimatedButton from "../components/AnimatedButton"
import ProjectCard from "../components/ProjectCard"
import RevealSection from "../components/RevealSection"
import SubHeadingMarquee from "../components/SubHeadingMarquee"
import { projects } from "../data/projects"

const Projects = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-350 py-6 lg:py-10 mt-20">
                <SubHeadingMarquee
                    text="OUR PORTFOLIO"
                    color="black"
                />

                <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    {/* Heading */}
                    <div>
                        <h2 className="font-mona-bold text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.88]">
                            CREATIVE <br/> <span className="font-mona-bold text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.88] text-[#8F8F8F]"> SHOWCASE
                        </span>
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

            <section className="mx-auto max-w-350 grid grid-cols-1 gap-5 lg:grid-cols-2 py-6 lg:py-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </section>
            <RevealSection />
        </>
    )
}

export default Projects