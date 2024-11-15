'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MapPin, Home, Info, Printer, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import logo from "../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Printer },
  ]

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image src={logo} alt="Satghumti Printing Press" className="h-8 w-auto mb-4  mt-3 mr-1" />
              <h3 className='font-medium ml-2 pt-0 py-0   text-xl'>
                Satghumti Printing Press
                </h3>
          
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                      pathname === item.href
                        ? 'bg-white text-blue-600'
                        : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-blue-600 border-white bg-white hover:bg-blue-600 hover:text-white">
              <MapPin className="mr-2 h-4 w-4" /> Location
            </Button>
            <a href="tel:+9779860104336">
              <Button size="default" variant="default" className="bg-blue-600 text-white border border-white hover:bg-white hover:text-blue-600">
                <PhoneCall className="mr-2 h-4 w-4" /> Contact
              </Button>
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
              className="text-white hover:bg-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-white text-blue-600'
                    : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+9779860104336"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:bg-blue-500 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Contact
            </a>
            <Button
              variant="outline"
              className="w-full mt-2 text-blue-600 bg-white border-white hover:bg-blue-600 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="mr-2 h-4 w-4" /> Location
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar