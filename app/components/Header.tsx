'use client'

import { useState } from 'react'

import { navigation } from '../data/navigation'

import NavButton from './NavButton'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full max-w-420 mx-auto">
        <div className="mx-auto flex items-center justify-between px-3 lg:px-6 py-6">

          {/* Mobile */}
          <div className="ml-auto lg:hidden">
            <HamburgerButton
              open={open}
              onClick={() => setOpen(!open)}
            />
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex mx-auto items-center w-full justify-end gap-3 rounded-full">
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