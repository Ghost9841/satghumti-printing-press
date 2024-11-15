import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award } from 'lucide-react'
import TransitionEffect from "@/components/TransitionEffect"

const stats = [
  { label: "Years of Experience", value: "30+", icon: Clock },
  { label: "Satisfied Clients", value: "10,000+", icon: Users },
  { label: "Industry Awards", value: "25", icon: Award },
]

const teamMembers = [
  { name: "Parmila Acharya", role: "Co-Founder", image: "/placeholder.svg?height=300&width=300" },
  { name: "Harihar Subedi", role: "CEO", image: "/placeholder.svg?height=300&width=300" },
  { name: "Aakash Subedi", role: "Designer", image: "/placeholder.svg?height=300&width=300" },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <TransitionEffect/>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-16 sm:py-24 md:py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Satghumti Printing Press
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-blue-100">
              Delivering excellence in printing services since 1990. We combine cutting-edge technology with decades of expertise to bring your ideas to life.
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

      {/* Our Story */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1990, Satghumti Printing Press began as a small family-owned business with a vision to provide top-quality printing services to our local community. Over the years, we've grown into one of the leading printing companies in Nepal, serving clients across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey has been marked by continuous innovation, investment in cutting-edge technology, and a commitment to excellence. We've weathered industry changes and economic challenges, always adapting and evolving to meet our clients' needs.
              </p>
              <Button size="lg">Learn More About Our Journey</Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Satghumti Printing Press History"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xl text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}