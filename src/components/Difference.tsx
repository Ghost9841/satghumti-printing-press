import { Printer } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Difference = () => {
    const features = [
        {
          title: "Advanced Printing Technology",
          description: "Experience state-of-the-art printing equipment for superior quality results",
          icon: Printer
        },
        {
          title: "Fast Turnaround",
          description: "Get your prints delivered quickly with our efficient production process",
          icon: ArrowRight
        },
        {
          title: "Expert Consultation",
          description: "Professional guidance for all your printing needs and requirements",
          icon: MapPin
        }
      ]
      
  return (
    <div>
       <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What makes Satghumti different?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find the ideal printing solutions with our advanced technology and expert team
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow">
                <div className="absolute top-6 left-6 bg-blue-600 rounded-lg p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Difference
