import { Metadata } from "next"
import Services from "../pages/Services"

export const metadata: Metadata = {
  title: 'Digital Services Built for Sustainable Growth | SparkCloud',
  description:
    'Explore SparkCloud’s integrated digital services across design, development, SEO, AEO, GEO, paid media and social media to support lasting growth.',
}

const page = () => {
  return (
    <div className="mt-18">
     <Services />
    </div>
  )
}

export default page