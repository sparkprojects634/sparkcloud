/**
 * Single-service page content.
 *
 * Every service page (SEO, Web Development, SMO ...) is rendered from one
 * entry in this array by `app/pages/ServiceSingle.js` via the
 * `/services/[slug]` route. To publish a new service page, add an object
 * with the same shape below — no component changes required.
 */

export interface ServiceHeadingLine {
  text: string
  highlight?: boolean
  icon?: string
  highlightedText?: string
}

export interface ServicePillar {
  id: string
  abbr: string
  name: string
  title: string
  description: string
  image: string
  points: string[]
}

export interface ServiceCapabilityGroup {
  id: string
  title: string
  subtitle: string
  items: string[]
}

export interface ServiceProcessStep {
  id: string
  title: string
  subtitle: string
  description: string
}

export interface ServiceMetric {
  id: string
  value: string
  label: string
  description: string
}

export interface ServiceDeliverable {
  id: string
  title: string
  description: string
}

export interface ServiceFaq {
  id: string
  question: string
  answer: string
}

export interface ServiceDetail {
  slug: string
  index: string
  eyebrow: string
  title: string
  titleAccent: string
  tagline: string
  heroVideo: string
  metaTitle: string
  metaDescription: string

  intro: {
    marquee: string
    heading: ServiceHeadingLine[]
    description: string
  }

  pillarsSection: {
    marquee: string
    title: string
    titleAccent: string
    description: string
    pillars: ServicePillar[]
  }

  capabilitiesSection: {
    marquee: string
    title: string
    titleAccent: string
    description: string
    groups: ServiceCapabilityGroup[]
  }

  processSection: {
    marquee: string
    title: string
    titleAccent: string
    steps: ServiceProcessStep[]
  }

  metricsSection: {
    marquee: string
    title: string
    titleAccent: string
    description: string
    image: string
    metrics: ServiceMetric[]
  }

  deliverablesSection: {
    marquee: string
    title: string
    titleAccent: string
    image: string
    deliverables: ServiceDeliverable[]
  }

  faqSection: {
    marquee: string
    title: string
    titleAccent: string
    image: string
    faqs: ServiceFaq[]
  }
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'seo',
    index: '04',
    eyebrow: 'search growth service',
    title: 'SEO',
    titleAccent: 'AEO / GEO',
    tagline: 'Be the answer — not just another result.',
    heroVideo: '/videos/earth-banner.mp4',
    metaTitle: 'SEO, AEO & GEO Services in Kolkata | SparkCloud',
    metaDescription:
      'SparkCloud builds search visibility across Google, answer engines and AI assistants — technical SEO, on-page, authority building, answer engine optimisation and generative engine optimisation.',

    intro: {
      marquee: 'SEARCH VISIBILITY',
      heading: [
        {
          text: 'We make brands',
          icon: '/images/empower.png',
          highlightedText: 'FINDABLE',
          highlight: false,
        },
        { text: 'on search engines,', highlight: false },
        { text: 'answer engines', highlight: true },
        { text: '& AI assistants.', highlight: true },
      ],
      description:
        'Search no longer ends at ten blue links. People ask Google, they ask voice assistants, and increasingly they ask ChatGPT, Gemini and Perplexity — and take the first answer they are given. We optimise for all three surfaces at once, so your brand is the source that gets ranked, quoted and cited.',
    },

    pillarsSection: {
      marquee: 'THREE SEARCH LAYERS',
      title: 'SEARCH',
      titleAccent: 'STACK',
      description:
        'Classic SEO still drives the traffic. AEO wins the zero-click answer. GEO decides whether an AI recommends you at all. A modern search programme needs all three working together.',
      pillars: [
        {
          id: '01',
          abbr: 'SEO',
          name: 'Search Engine Optimisation',
          title: 'Rank where the demand already is',
          description:
            'The foundation. We fix what search engines struggle to crawl, build pages that match real intent, and earn the authority that makes those pages rank and hold position.',
          image: '/images/services/seo/seo-serp.svg',
          points: [
            'Technical audits, crawl & indexation control',
            'Core Web Vitals and page experience',
            'Keyword, intent & topical cluster mapping',
            'On-page, internal linking & content depth',
            'Digital PR and authority building',
            'Local SEO and Google Business Profile',
          ],
        },
        {
          id: '02',
          abbr: 'AEO',
          name: 'Answer Engine Optimisation',
          title: 'Own the answer, not just the link',
          description:
            'More than half of searches now end without a click. We structure your content so featured snippets, People Also Ask, voice results and AI overviews pull their answer from you.',
          image: '/images/services/seo/aeo-answer.svg',
          points: [
            'Featured snippet & People Also Ask targeting',
            'Question-led content and answer blocks',
            'FAQ, HowTo and Q&A schema markup',
            'Voice and conversational query optimisation',
            'Concise, extractable answer formatting',
            'Zero-click visibility tracking',
          ],
        },
        {
          id: '03',
          abbr: 'GEO',
          name: 'Generative Engine Optimisation',
          title: 'Get cited by the AI that answers',
          description:
            'When an AI assistant recommends a brand, it draws on entities, citations and consensus across the web. We build that footprint deliberately so your brand is the one it names.',
          image: '/images/services/seo/geo-graph.svg',
          points: [
            'Entity and knowledge graph development',
            'Visibility in AI Overviews & AI Mode',
            'ChatGPT, Gemini, Perplexity & Copilot citation tracking',
            'llms.txt and AI crawler access strategy',
            'Brand mention, review & consensus building',
            'Share-of-answer benchmarking vs competitors',
          ],
        },
      ],
    },

    capabilitiesSection: {
      marquee: 'WHAT WE DO',
      title: 'FULL',
      titleAccent: 'SCOPE',
      description:
        'Everything below sits inside a single retainer — no separate line item for the advanced work.',
      groups: [
        {
          id: '01',
          title: 'TECHNICAL',
          subtitle: 'SEO',
          items: [
            'Full technical audit',
            'Crawl budget & log-file analysis',
            'Indexation & canonical control',
            'Core Web Vitals optimisation',
            'JavaScript rendering & hydration',
            'Sitemaps, robots & redirects',
            'Site architecture & URL design',
            'Hreflang & international setup',
          ],
        },
        {
          id: '02',
          title: 'CONTENT',
          subtitle: '& ON-PAGE',
          items: [
            'Keyword & search intent research',
            'Topical authority clusters',
            'Content gap & competitor analysis',
            'Semantic on-page optimisation',
            'Internal linking architecture',
            'E-E-A-T & author signals',
            'Content refresh & pruning',
            'Landing page copy for conversion',
          ],
        },
        {
          id: '03',
          title: 'AUTHORITY',
          subtitle: '& OFF-PAGE',
          items: [
            'Backlink profile audit & disavow',
            'Digital PR & linkable assets',
            'Editorial link acquisition',
            'Unlinked brand mention reclamation',
            'Competitor link gap analysis',
            'Review & reputation velocity',
          ],
        },
        {
          id: '04',
          title: 'ANSWER',
          subtitle: 'ENGINE / AEO',
          items: [
            'Snippet & PAA opportunity mapping',
            'Structured Q&A content design',
            'Schema & rich result markup',
            'Voice search optimisation',
            'Entity-first answer writing',
            'Zero-click share reporting',
          ],
        },
        {
          id: '05',
          title: 'GENERATIVE',
          subtitle: 'ENGINE / GEO',
          items: [
            'AI Overview & AI Mode monitoring',
            'LLM citation & share-of-answer tracking',
            'Knowledge panel & entity building',
            'Wikidata, directory & profile consistency',
            'llms.txt & AI crawler policy',
            'Prompt-level competitor benchmarking',
          ],
        },
        {
          id: '06',
          title: 'LOCAL',
          subtitle: '& COMMERCE',
          items: [
            'Google Business Profile management',
            'Local pack & map ranking',
            'Citation & NAP consistency',
            'Multi-location landing pages',
            'Product & merchant feed schema',
            'Category & faceted navigation SEO',
          ],
        },
        {
          id: '07',
          title: 'ANALYTICS',
          subtitle: '& CRO',
          items: [
            'GA4 & Search Console configuration',
            'Custom rank & visibility dashboards',
            'Attribution and assisted conversions',
            'Forecasting & opportunity sizing',
            'Landing page CRO testing',
            'Monthly reporting & strategy calls',
          ],
        },
        {
          id: '08',
          title: 'MIGRATION',
          subtitle: '& RECOVERY',
          items: [
            'Site migration SEO planning',
            'Redirect mapping & QA',
            'Algorithm update diagnosis',
            'Traffic drop & penalty recovery',
            'Pre-launch staging audits',
            'Post-launch monitoring',
          ],
        },
      ],
    },

    processSection: {
      marquee: 'HOW WE WORK',
      title: 'SEARCH',
      titleAccent: 'PROCESS',
      steps: [
        {
          id: '01',
          title: 'AUDIT',
          subtitle: '& BENCHMARK',
          description:
            'We audit technical health, content, backlinks and current AI citation share, then benchmark you against the competitors actually winning the answers.',
        },
        {
          id: '02',
          title: 'STRATEGY',
          subtitle: '& ROADMAP',
          description:
            'Intent-mapped keyword universe, topical cluster plan and a prioritised roadmap scored by traffic potential, business value and effort.',
        },
        {
          id: '03',
          title: 'FIX',
          subtitle: '& OPTIMISE',
          description:
            'Technical fixes ship first, then on-page and schema work — so every page that follows is crawlable, fast and structured for extraction.',
        },
        {
          id: '04',
          title: 'CONTENT',
          subtitle: '& AUTHORITY',
          description:
            'We publish cluster content built to be quoted, and earn links and mentions that push both classic rankings and AI consensus in your favour.',
        },
        {
          id: '05',
          title: 'MEASURE',
          subtitle: '& COMPOUND',
          description:
            'Rankings, zero-click share, AI citations, conversions. We report monthly, double down on what moves, and cut what does not.',
        },
      ],
    },

    metricsSection: {
      marquee: 'WHAT WE MEASURE',
      title: 'SIGNALS',
      titleAccent: 'THAT MATTER',
      description:
        'Vanity rankings are easy. We report the metrics that connect search visibility to revenue — including the AI surfaces most agencies still cannot see.',
      image: '/images/services/seo/growth-curve.svg',
      metrics: [
        {
          id: '01',
          value: 'SOV',
          label: 'Organic share of voice',
          description:
            'How much of the total search demand in your category your brand captures — tracked against named competitors, not the whole internet.',
        },
        {
          id: '02',
          value: 'AI',
          label: 'Share of answer',
          description:
            'How often ChatGPT, Gemini, Perplexity and Google AI Overviews cite or recommend your brand for the prompts your buyers actually use.',
        },
        {
          id: '03',
          value: 'CWV',
          label: 'Technical health score',
          description:
            'Core Web Vitals, crawlability, indexation coverage and schema validity — the foundation every other metric depends on.',
        },
        {
          id: '04',
          value: 'ROI',
          label: 'Pipeline from organic',
          description:
            'Assisted and last-click conversions, qualified leads and revenue attributed to organic search in GA4 — the only number that settles the argument.',
        },
      ],
    },

    deliverablesSection: {
      marquee: 'WHAT YOU GET',
      title: 'THE',
      titleAccent: 'DELIVERABLES',
      image: '/images/about-company.png',
      deliverables: [
        {
          id: '01',
          title: 'Technical & AI-readiness audit',
          description:
            'A prioritised, developer-ready document covering crawl, speed, schema and how AI crawlers currently see your site.',
        },
        {
          id: '02',
          title: 'Keyword & intent universe',
          description:
            'Every query worth owning, mapped to funnel stage, page and cluster — including the conversational prompts AI users type.',
        },
        {
          id: '03',
          title: 'Content & schema roadmap',
          description:
            'A publishing calendar of cluster content and answer blocks, with the structured data each page needs to be extractable.',
        },
        {
          id: '04',
          title: 'Authority & digital PR plan',
          description:
            'Target publications, linkable asset concepts and outreach angles that build both backlinks and brand consensus.',
        },
        {
          id: '05',
          title: 'Live visibility dashboard',
          description:
            'One link, always current: rankings, snippet ownership, AI citations, traffic and conversions in a single view.',
        },
        {
          id: '06',
          title: 'Monthly strategy session',
          description:
            'A working call — what moved, what did not, what ships next month — with a named strategist, not an account inbox.',
        },
      ],
    },

    faqSection: {
      marquee: 'FREQUENTLY ASKED QUESTIONS',
      title: 'SEO',
      titleAccent: 'ANSWERS',
      image: '/images/quick-help.webp',
      faqs: [
        {
          id: '01',
          question: 'How long before we see results from SEO?',
          answer:
            'Technical fixes can show within weeks. Meaningful ranking and traffic movement typically starts around month three and compounds from there, depending on your domain authority, competition and how much content debt we start with. Anyone promising page one in 30 days is selling something else.',
        },
        {
          id: '02',
          question: 'What is the difference between SEO, AEO and GEO?',
          answer:
            'SEO earns you a ranked link in classic search results. AEO makes your content the source that fills featured snippets, People Also Ask and voice answers. GEO builds the entity footprint and citations that make generative AI tools recommend your brand by name. They share a foundation but need different content structures and different measurement.',
        },
        {
          id: '03',
          question: 'Is SEO still worth it now that AI answers everything?',
          answer:
            'More than before — but the target has moved. AI systems still ground their answers in indexed, crawlable, authoritative pages. Strong SEO is what makes you eligible to be cited. What changes is that being ranked is no longer enough; you also have to be quotable.',
        },
        {
          id: '04',
          question: 'Do you work with our existing developers and content team?',
          answer:
            'Yes. We can hand over prioritised, ticket-ready specs for your team to implement, brief your writers with content and schema requirements, or handle the execution end to end. Most engagements end up somewhere in the middle.',
        },
        {
          id: '05',
          question: 'How do you track whether AI tools mention our brand?',
          answer:
            'We run your category prompts across the major assistants on a fixed schedule and log which brands are cited, in what order, and with which sources. That gives a share-of-answer baseline we can move deliberately, the same way we move rankings.',
        },
        {
          id: '06',
          question: 'What does an engagement cost?',
          answer:
            'It depends on site size, competition and whether you need execution or just strategy. We scope after the audit so the number reflects the actual work, and we will tell you plainly if paid search would get you there faster.',
        },
      ],
    },
  },
]

export const getServiceDetail = (slug: string) =>
  serviceDetails.find((service) => service.slug === slug)
