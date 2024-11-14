import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Printer, Maximize, FileText, PenTool, Truck } from 'lucide-react'

const services = [
  {
    title: "Digital Printing",
    description: "High-quality digital printing services with quick turnaround times. Perfect for small to medium runs of brochures, flyers, and business cards.",
    icon: Printer,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Offset Printing",
    description: "Traditional offset printing for large volume jobs with consistent, high-quality results. Ideal for magazines, books, and high-volume marketing materials.",
    icon: FileText,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Large Format Printing",
    description: "Eye-catching large format prints for banners, posters, and signage. Make a big impact with our high-resolution wide format printing services.",
    icon: Maximize,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Graphic Design",
    description: "Professional graphic design services to bring your ideas to life. Our team of experienced designers can help create stunning visuals for your print projects.",
    icon: PenTool,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Finishing & Binding",
    description: "Complete your print projects with our range of finishing and binding services, including lamination, embossing, die-cutting, and various binding options.",
    icon: Truck,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-16 sm:py-24 md:py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-blue-100">
              Discover our comprehensive range of printing services designed to meet all your needs, from digital and offset printing to large format and graphic design.
            </p>
          </div>
        </div>
        {/* Curved Bottom */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 200" className="w-full h-20 fill-white" preserveAspectRatio="none">
            <path d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Services */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-24`}>
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <Button size="lg">Learn More</Button>
              </div>
              <div className="flex-1">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Printing Project?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation and quote. Our team of experts is ready to bring your ideas to life.</p>
          <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  )
}