'use client'

import Image from 'next/image'

const PageLoader = () => {
  return (
    <div className='fixed inset-0 z-9999 flex items-center justify-center bg-[#050816] h-full w-full'>
      <div className='flex flex-col items-center gap-6'>
        <Image
          src='/images/logo.svg'
          alt='Loader Logo'
          width={120}
          height={120}
          priority
          className='animate-pulse blur-animate'
        />

        <div className='w-40 h-0.5 bg-white/10 overflow-hidden rounded-full'>
          <div className='h-full w-full bg-white animate-loader' />
          <span className='absolute ml-12 text-sm text-white/50 mt-2'>Sit tight...</span>
        </div>
      </div>
    </div>
  )
}

export default PageLoader