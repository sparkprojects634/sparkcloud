'use client'

import { useEffect, useState } from 'react'

import { navigation } from '../data/navigation'

import NavButton from './NavButton'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'

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
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-black/50 via-black/40 to-transparent transition-opacity duration-700 ${
            scrolled
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        />

        <div className="mx-auto flex items-center justify-between px-3 py-6 lg:px-6">

          {/* Mobile */}
          <div className="ml-auto lg:hidden">
            <HamburgerButton
              open={open}
              onClick={() => setOpen(!open)}
            />
          </div>

          {/* Desktop */}
          <div className="mx-auto hidden w-full items-center justify-end gap-3 rounded-full lg:flex">

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

        <MobileMenu
          open={open}
          close={() => setOpen(false)}
        />

      </header>
    </>
  )
}

export default Header