import { Metadata } from "next"
import About from "../pages/About"

export const metadata: Metadata = {
  title: 'About SparkCloud | Where Ideas Become Digital Growth',
  description:
    'Meet SparkCloud a team combining technology, creativity and strategic thinking to create meaningful digital experiences and sustainable brand growth.',
}

const page = () => {
  return (
    <>
     <About />
    </>
  )
}

export default page