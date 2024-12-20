"use client"
import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "@/i18n/useTranslations";

export default function CompetenciesAndValues() {
  const messages = useTranslations();

  return (
    <div>
      <Navigation />
      <div className="pt-28 bg-white" >
        <h1 className="font-black text-center text-black text-xl mb-3">{messages.competenciesAndValues}</h1>
        <hr />

      </div>
      <Footer />
    </div>
  )
}