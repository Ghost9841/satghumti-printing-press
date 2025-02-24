import { MapPin } from 'lucide-react'
import React from 'react'

const StayTuned = () => {
  return (
    <div>
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
              <a href="https://maps.app.goo.gl/S7jXg6KXJaes5i2k8">

              <span>Kathmandu, Nepal, 44600</span>
              </a>
            </div>
            <div className="flex items-center">
            <a href="tel:+977 984-1877618">

              <span>+977 984-1877618</span>
            </a>
            </div>
            <div className="flex items-center">
            <a href="mailto:asubedi778@gmail.com">
              <span>logo@mailaddress@gmail.com</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StayTuned
