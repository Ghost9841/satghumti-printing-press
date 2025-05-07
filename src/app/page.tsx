

import Difference from "@/components/Difference"
import HeroSection from "@/components/HeroSection"
import StayTuned from "@/components/StayTuned"
import ExploreServices from "@/components/ExploreServices"
import TransitionEffect from "@/components/TransitionEffect"





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TransitionEffect/>
           
         <HeroSection/>

        
          <Difference/>

            
         <ExploreServices/>
                  

          <StayTuned/>
    </div>
  )
}