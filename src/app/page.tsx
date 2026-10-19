

import Difference from "@/components/Difference"
import HeroSection from "@/components/HeroSection"
import StayTuned from "@/components/StayTuned"
import ExploreServices from "@/components/ExploreServices"
import TransitionEffect from "@/components/TransitionEffect"
import Header from "@/components/header"

import QuoteForm from "@/components/quote-form"
import Contact from "@/components/contact"
import Footer from "@/components/footer copy"
import HeroWithAH from "@/components/hero"
import Services from "@/components/services"
import Audiences from "@/components/audiences"
import Process from "@/components/process"





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroWithAH />
        <Services />
        <Audiences />
        <Process />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}