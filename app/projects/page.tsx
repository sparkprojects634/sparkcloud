import { Metadata } from "next"
import Projects from "../pages/Projects"

export const metadata: Metadata = {
  title: 'Our Work | Digital Projects & Case Studies | SparkCloud',
  description:
    'Explore SparkCloud’s digital projects and case studies across industries, showcasing our approach to strategy, design, development and digital growth.',
}

const page = () => {
  return (
    <>
      <Projects />
    </>
  )
}

export default page