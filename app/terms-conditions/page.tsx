import { Metadata } from 'next'
import TermsConditionsContent from '../components/Legal/TermsConditionsContent'

export const metadata: Metadata = {
  title: 'Terms & Conditions | SparkCloud',
  description:
    'Review SparkCloud’s terms covering website usage, services, intellectual property, payments, responsibilities, limitations and other important conditions.',
}


const page = () => {
 return (
    <>
        <TermsConditionsContent />
    </>
 )
}

export default page