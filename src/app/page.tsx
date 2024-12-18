'use client'

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SecurityPaceOfmind from "@/components/SecurityPaceOfmind";
import WayToGo from "@/components/WayToGo";
import CreateMore from "@/components/CreateMore";
import ImpeccableTradition from "@/components/ImpeccableTradition";
import Footer from "@/components/footer";


export default function Example() {

  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <SecurityPaceOfmind />
      <WayToGo />
      <CreateMore/>
      <ImpeccableTradition/>
      <Footer />
    </div>
  )
}
