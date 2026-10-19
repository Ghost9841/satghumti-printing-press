
import NavBar from "@/components/bar/NavBar"
import QuoteForm from "@/app/(home)/QuoteForm"
import Contact from "@/app/(home)/ContactComp"
import Footer from "@/components/bar/Footer"
import HeroWithAH from "@/app/(home)/HeroSectionComp"
import Services from "@/app/(home)/ServicesComp"
import Audiences from "@/app/(home)/AudiencesComp"
import Process from "@/app/(home)/ProcessComp"
import WorkGallery from "@/components/work-gallery"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <HeroWithAH />
        <Services />
        <WorkGallery />
        <Audiences />
        <Process />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}