'use client'

import { projects } from '../data/projects'
import AnimatedButton from './AnimatedButton'
import ProjectCard from './ProjectCard'

const FeaturedProjects = () => {
  return (
    <section className="relative bg-black py-10">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
      <div className='mt-4'>
        <AnimatedButton text="ALL Porjects" href='#' theme='light'/>
      </div>
    </section>
  )
}

export default FeaturedProjects