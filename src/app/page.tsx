'use client'

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SecurityPaceOfmind from "@/components/SecurityPaceOfmind";
import WayToGo from "@/components/WayToGo";


export default function Example() {

  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <SecurityPaceOfmind />
      <WayToGo />
    </div>
  )
}
