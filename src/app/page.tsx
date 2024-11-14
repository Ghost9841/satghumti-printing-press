import Image from "next/image"
import Link from "next/link"
import { MapPin, Printer, Search, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "postcss"


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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
                  <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
                    Print Now
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                    Available for free consultation
                  </Button>
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

      {/* What makes us different */}
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

      {/* Explore Services */}
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

      {/* Stay Tuned */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay tuned</h2>
          <p className="mb-8">
            Reach out to us for any queries or support. We're here to help you with your printing needs.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>Kathmandu, Nepal, 44600</span>
            </div>
            <div className="flex items-center">
              <span>+977 9840704336</span>
            </div>
            <div className="flex items-center">
              <span>logo@mailaddress@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}