import SubHeadingMarquee from '../components/SubHeadingMarquee'
import AnimatedHeading from '../components/AnimatedHeading'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedTextLink from '../components/AnimatedTextLink'
import ServiceHero from '../components/ServiceHero'
import ServicePillars from '../components/ServicePillars'
import ServiceCapabilities from '../components/ServiceCapabilities'
import ServiceProcess from '../components/ServiceProcess'
import ServiceMetrics from '../components/ServiceMetrics'
import ServiceDeliverables from '../components/ServiceDeliverables'
import ServiceFAQ from '../components/ServiceFAQ'
import RevealSection from '../components/RevealSection'

const ServiceSingle = ({ service }) => {
  return (
    <div>
      <ServiceHero
        eyebrow={service.eyebrow}
        title={service.title}
        titleAccent={service.titleAccent}
        tagline={service.tagline}
        video={service.heroVideo}
        index={service.index}
      />

      {/* Intro */}
      <section className="py-10 md:py-16">
        <div className="mx-auto w-full max-w-350 px-5 md:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[400px_1fr] lg:gap-20">
            <SubHeadingMarquee
              text={service.intro.marquee}
              color="black"
            />

            <div className="space-y-6">
              <AnimatedHeading lines={service.intro.heading} />

              <p className="w-full text-xl font-normal text-black lg:w-3/4 lg:text-2xl">
                {service.intro.description}
              </p>

              <div className="flex items-center gap-3 lg:gap-6">
                <AnimatedButton
                  text="Get A Free Audit"
                  theme="dark"
                  href="/contact"
                />

                <AnimatedTextLink text="our work" href="/projects" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO / AEO / GEO pillars */}
      <section className="py-6 lg:py-10">
        <ServicePillars {...service.pillarsSection} />
      </section>

      {/* Full scope of capabilities */}
      <section className="py-6 lg:py-10">
        <ServiceCapabilities {...service.capabilitiesSection} />
      </section>

      {/* Process */}
      <section className="py-6 lg:py-10">
        <ServiceProcess {...service.processSection} />
      </section>

      {/* Metrics */}
      <section className="py-6 lg:py-10">
        <ServiceMetrics {...service.metricsSection} />
      </section>

      {/* Deliverables */}
      <section className="py-6 lg:py-10">
        <ServiceDeliverables {...service.deliverablesSection} />
      </section>

      {/* FAQ */}
      <section className="py-6 lg:py-10">
        <ServiceFAQ {...service.faqSection} />
      </section>

      <RevealSection />
    </div>
  )
}

export default ServiceSingle
