import RevealSection from "../components/RevealSection"
import ContactForm from "../components/ContactForm"

const Contact = () => {
    return (
        <>
            <section
                className='relative h-full'
            >
                <div className='sticky top-0 h-screen overflow-hidden flex items-center justify-center'>

                    {/* <div
                className='absolute inset-0 bg-linear-to-t from-[#f5f5f5] to-40% to-transparent w-full h-full -z-2'
              /> */}

                    {/* Overlay */}
                    {/* <div className='absolute inset-0 bg-black/30 z-1 p-7 rounded-2xl' /> */}

                    {/* Video */}
                    <div
                        className="absolute inset-0 -z-10 overflow-hidden p-4"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover overflow-hidden rounded-3xl"
                        >
                            <source
                                src="/videos/earth-banner.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>


                    <div
                        className="absolute flex-col text-white gap-5 inset-0 flex items-center justify-center will-change-[filter,opacity,transform]"
                    >
                        <span className="uppercase text-white/80">contact us</span>
                        <h1 className='text-6xl md:text-6xl lg:text-[200px] font-medium font-mona-bold uppercase text-center'>GET IN <br /><span className='text-[#828282]'>Touch</span></h1>
                    </div>

                </div>
            </section>

            <section className='mx-auto w-full max-w-200 py-7 px-5 md:px-8'>
                <ContactForm />
            </section>

            <RevealSection />
        </>
    )
}

export default Contact