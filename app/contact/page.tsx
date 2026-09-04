import { Metadata } from "next"
import Contact from "../pages/Contact"

export const metadata: Metadata = {
  title: 'Contact SparkCloud | Let’s Build Something Better',
  description:
    'Have a project in mind? Connect with SparkCloud to discuss digital strategy, design, development, marketing or a solution tailored to your business.',
}

const page = () => {
  return (
    <>
     <Contact />
    </>
  )
}

export default page