import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ExploreServices = () => {
    const services = [
        {
          title: "Digital Printing",
          description: "High-quality digital printing services with quick turnaround times",
          image: "/placeholder.svg?height=200&width=300",
          completion: "2-3 days"
        },
        {
          title: "Offset Printing",
          description: "Professional offset printing for large volume requirements",
          image: "/placeholder.svg?height=200&width=300",
          completion: "3-5 days"
        },
        {
          title: "Large Format",
          description: "Wide format printing for banners, posters and displays",
          image: "/placeholder.svg?height=200&width=300",
          completion: "1-2 days"
        }
      ]
  return (
    <div>
        <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4">FILTER BY</h3>
                <input type="search" placeholder="Type to filter" className="mb-4" />
                <div className="space-y-4">
                  <h4 className="font-medium">Choose your service</h4>
                  <div className="space-y-2">
                    {['Digital', 'Offset', 'Large Format', 'Business Cards', 'Banners'].map((item) => (
                      <label key={item} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600">{service.completion}</span>
                        <span className="text-sm text-gray-500">In progress</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Button className="w-full">Learn more</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreServices
