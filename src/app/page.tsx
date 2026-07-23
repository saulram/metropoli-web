'use client'

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SecurityPaceOfmind from "@/components/SecurityPaceOfmind";
import WayToGo from "@/components/WayToGo";
import CreateMore from "@/components/CreateMore";
import ImpeccableTradition from "@/components/ImpeccableTradition";
import Footer from "@/components/footer";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import PartnerAtFront from "@/components/PartnerAtFront";
import ClosingCTA from "@/components/ClosingCTA";
export default function Example() {

  return (
    <div className="bg-white w-full max-w-[100vw] overflow-x-hidden">   
      <Navigation />
      <HeroSection />
      <TrustedBy />
      <Testimonials />
      <SecurityPaceOfmind />
      <CreateMore/>
      <PartnerAtFront />
      <WayToGo />
      <ImpeccableTradition/>
      <ClosingCTA />
      <Footer />
    </div>
  )
}
