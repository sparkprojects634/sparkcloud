import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-8 right-8 z-9999">
      <Link
        href="https://wa.me/917439381155"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={32} color="white" />
      </Link>
    </div>
  )
}

export default WhatsappIcon