'use client'

import { useEffect, useState } from 'react'

import { navigation } from '../data/navigation'

import NavButton from './NavButton'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="fixed left-0 top-0 z-50 mx-auto w-full">
        {/* Background */}
        <div
          className={`pointer-events-none absolute mx-5 my-2 rounded-full inset-x-0 top-2 -z-10 h-18 bg-black/80 backdrop-blur-sm transition-opacity duration-800 ease-in-out ${scrolled
            ? 'opacity-100'
            : 'opacity-0'
            }`}
        />

        <div className={`mx-auto flex items-center justify-between px-3 py-6 lg:px-6 transition-opacity duration-800 ease-in-out ${scrolled
          ? 'opacity-100'
          : 'opacity-0'
          }`}>

          {/* Mobile */}
          <div className="ml-auto lg:hidden flex justify-between items-center gap-3 rounded-full px-4 w-full">
            <Image
              src='/images/logo.svg'
              alt='Hero-Image'
              width={60}
              height={100}
              className='z-10'
              fetchPriority='high'
              loading='eager'
            />

            <HamburgerButton
              open={open}
              onClick={() => setOpen(!open)}
            />
          </div>

          {/* Desktop */}
          <div className="mx-auto hidden w-full items-center justify-between gap-3 rounded-full lg:flex px-2">

            <Image
              src='/images/logo.svg'
              alt='Hero-Image'
              width={80}
              height={100}
              className='z-10'
              fetchPriority='high'
              loading='eager'
            />

            <div className="ml-auto flex items-center gap-3">
              {navigation.map((item) => (
                <NavButton
                  key={item.id}
                  text={item.label}
                  href={item.href}
                />
              ))}

              <HamburgerButton
                open={open}
                onClick={() => setOpen(!open)}
              />
            </div>

          </div>

        </div>

        <MobileMenu
          open={open}
          close={() => setOpen(false)}
        />

      </header>
    </>
  )
}

export default Header