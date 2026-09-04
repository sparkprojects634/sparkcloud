import { Metadata } from 'next'
import PrivacyPolicyContent from '../components/Legal/PrivacyPolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy | SparkCloud',
  description:
    'Learn how SparkCloud collects, uses, stores and protects information while maintaining transparency around privacy, cookies, analytics and website usage.',
}


const page = () => {
 return (
    <>
        <PrivacyPolicyContent />
    </>
 )
}

export default page