import { PhoneCall } from 'lucide-react'
import { PrinterIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div>
       {/* Hero Section */}
       <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="pt-24 sm:pt-32">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Unlock Professional
                  <br />
                  <span className="text-blue-200">Printing Solutions</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Highest quality printing with latest technology, engaging and productive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+977 984-1877618">

                <Button variant="outline" className="text-blue-600 border-white bg-white hover:bg-blue-600 hover:text-white">
              <PrinterIcon className="mr-2 h-4 w-4" /> Print Now
            </Button>
                </a>
                <a href="tel:+977 984-1877618">

            <Button size="default" variant="default" className="bg-blue-600 text-white border border-white hover:bg-white hover:text-blue-600">
                <PhoneCall className="mr-2 h-4 w-4" /> Available for 24/7
              </Button>
                </a>
                </div>
                
                <p className="text-sm text-blue-100">
                  Available in Kathmandu, Nepal. Professional printing services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-20 fill-white"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
