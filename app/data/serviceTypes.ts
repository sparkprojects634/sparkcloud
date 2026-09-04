export type ServiceMedia = {
  type: 'image' | 'video'
  src: string
  poster?: string
  alt?: string
}

export type CoreSkill = {
  id: string
  title: string
  description: string
  media: ServiceMedia
}

export type ServiceMeta = {
  label: string
  value: string
}

export type ServiceContent = {
  label: string
  sections: CoreSkill[]
  meta: ServiceMeta[]
}

export type Service = {
  id: string
  title: string
  heading: string
  subHeading: string
  subHeading2: string
  slug: string
  description: string
  image: string
  lines: {
    text: string
  }[]

  mediaLineText: string

  media: ServiceMedia

  serviceContent: ServiceContent
}