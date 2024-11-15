import Image from "next/image"
import { Button } from "@/components/ui/button"
import Difference from "@/components/Difference"
import HeroSection from "@/components/HeroSection"
import StayTuned from "@/components/StayTuned"
import ExploreServices from "@/components/ExploreServices"





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
            {/*Hero Section Comp */}
              <HeroSection/>

      {/* Different component */}
     <Difference/>

      {/* Explore Services */}
    <ExploreServices/>
                  {/* Stay Tuned Section */}
                  <StayTuned/>
    </div>
  )
}