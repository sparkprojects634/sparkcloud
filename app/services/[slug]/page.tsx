import { notFound } from 'next/navigation'

import ServiceSingle from '../../pages/ServiceSingle'
import { serviceDetails, getServiceDetail } from '../../data/serviceDetails'

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = getServiceDetail(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const service = getServiceDetail(slug)

  if (!service) {
    notFound()
  }

  /**
   * Structured data so the page itself is eligible for the rich results
   * and AI citations it sells — Service for the offering, FAQPage for the
   * answer blocks.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `${service.title} ${service.titleAccent}`.trim(),
        serviceType: service.eyebrow,
        description: service.metaDescription,
        provider: {
          '@type': 'Organization',
          name: 'SparkCloud',
          url: 'https://sparkcloud.in',
          email: 'projects@sparkcloud.in',
          telephone: '+91 74393 81155',
          address: {
            '@type': 'PostalAddress',
            streetAddress:
              '3rd floor, PS Abacus, Unit 337, Action Area IIIE, Newtown',
            addressLocality: 'Kolkata',
            addressRegion: 'West Bengal',
            postalCode: '700157',
            addressCountry: 'IN',
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} capabilities`,
          itemListElement: service.capabilitiesSection.groups.map((group) => ({
            '@type': 'OfferCatalog',
            name: `${group.title} ${group.subtitle}`.trim(),
            itemListElement: group.items.map((item) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: item,
              },
            })),
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqSection.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceSingle service={service} />
    </>
  )
}
