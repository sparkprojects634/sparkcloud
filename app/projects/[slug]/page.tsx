import { notFound } from 'next/navigation'

import ProjectSingle from '../../pages/ProjectSingle'
import { projectsSingle } from '../../data/projects'
 
export async function generateStaticParams() {
  return projectsSingle.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projectsSingle.find(
    (item) => item.slug === slug
  )

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} | SparkCloud`,
    description:
      project.intro?.description ||
      `${project.title} project by SparkCloud.`,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projectsSingle.find(
    (item) => item.slug === slug
  )

  if (!project) {
    notFound()
  }

  return <ProjectSingle project={project} />
}