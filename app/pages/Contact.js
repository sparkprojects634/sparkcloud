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
                            preload="auto"
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

            <section className='mx-auto w-full max-w-380 py-7 px-5 md:px-8'>
                <ContactForm />
            </section>

            <section className="mt-6 w-full overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.932874259574!2d88.46114329999999!3d22.618981699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fc3c35b9be9%3A0xe88071924f1c898a!2sSparkcloud%20%7C%7C%20Digital%20Marketing%20Agency%20%7C%7C%20Website%20Development%20%7C%7C%20Performance%20Marketing%20%7C%7C!5e0!3m2!1sen!2sin!4v1786093436047!5m2!1sen!2sin"
                    className="h-100 w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            </section>
        </>
    )
}

export default Contact