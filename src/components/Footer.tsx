import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { assets } from "@/assets/assets";

import Image from 'next/image';
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-600 text-white border-blue-700 border-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 ">
            <div className="flex">

            <Image src={assets.logo} alt="Satghumti Printing Press" className="h-8 w-auto mb-4" />
            <h3 className='font-medium ml-4  text-xl'>
              Satghumti Printing Press
              </h3>
            </div>
            <p className="text-blue-100 mb-4">
              Delivering excellence in printing services since 1990. We combine cutting-edge technology with decades of expertise to bring your ideas to life.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook" className="text-white hover:bg-blue-500">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" className="text-white hover:bg-blue-500">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram" className="text-white hover:bg-blue-500">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-white hover:bg-blue-500">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-blue-100 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-blue-100">
                <MapPin className="h-5 w-5 mr-2" />
                Kathmandu, Nepal, 44600
              </li>
              <li className="flex items-center text-blue-100">
                <Phone className="h-5 w-5 mr-2" />
                +977 9840704336
              </li>
              <li className="flex items-center text-blue-100">
                <Mail className="h-5 w-5 mr-2" />
                info@satghumtiprinting.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-500">
          <p className="text-center text-blue-100">
            © {currentYear} Satghumti Printing Press. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer