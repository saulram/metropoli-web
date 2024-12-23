"use client"
import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "@/i18n/useTranslations";
import Link from "next/link";
import { motion } from 'motion/react';
import { useState } from "react";

export default function CompetenciesAndValues() {
  const messages = useTranslations();
  const [active, setActive] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imges = [
    {
      src: "/ensure.svg",
      alt: "ensure",
      text: messages.ensurePeaceOfMind
    },
    {
      src: "/grow.svg",
      alt: "grow",
      text: messages.growTogether
    },
    {
      src: "/honor.svg",
      alt: "honor",
      text: messages.honorOurWord
    },
    {
      src: "/inspire.svg",
      alt: "inspire",
      text: messages.inspireByExample
    },
    {
      src: "/innovate.svg",
      alt: "innovate",
      text: messages.innovateDaily
    }
  ]

  return (
    <div style={{
      background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
    }}>
      <Navigation />
      <div className="px-10 md:px-28 py-2" style={{
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
      }}>
        <motion.h1 initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="font-black text-center text-[#444444] text-xl mb-4">{messages.competenciesAndValues}</motion.h1>
        <motion.hr initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="hr-gradient" />
        <div className="mt-10 mb-4">
          <motion.h2 initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="values-title-gradient text-40 mb-5">{messages.accompanimentValue}</motion.h2>
          <motion.p initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="text-black text-lg">{messages.clientFeelings}</motion.p>
        </div>
        <motion.hr initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="hr-gradient" />
        <div className="mt-5 mb-4">
          <motion.h2 initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="values-title-gradient text-40 mb-5">{messages.zeroFriction}</motion.h2>
          <motion.p initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="text-black text-lg">{messages.simpleAndEasy}</motion.p>
        </div>
        <motion.hr initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="hr-gradient" />
        <div className="stain"
          style={{
            height: '130vh',
            right: 0,
            rotate: '180deg',
            position: 'absolute',
          }} />
        <div className="mt-5 mb-4">
          <motion.h2 initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="values-title-gradient text-40 mb-5">{messages.expertise}</motion.h2>
          <motion.p initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="text-black text-lg">{messages.yearsOfExperience}</motion.p>
        </div>
        <div className="my-28 mb-4">
          <motion.h2 initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="font-black text-center text-3xl text-[#444444] mb-4">{messages.values}</motion.h2>
        </div>

        <div className="flex md:flex-row flex-col " style={{ minHeight: "100vh" }}>
          <div className="md:my-48 my-10 md:left-[-15%] left-[-40%]" style={{ position: "relative", zIndex: "49" }}>
            <div style={{ borderColor: "#90a0c030", borderRadius: "1000px", position: "relative" }} className="border-solid border-2 md:w-[25vw] md:h-[25vw] w-[80vw] h-[80vw]">
              <div onMouseEnter={() => { setActive(1); setCurrentIndex(1 - 1) }} className={active == 1 ? "values-selecte-gradient" : 'values-text'} style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)" }}>{messages.ensure}</div>
              <div onMouseEnter={() => { setActive(2); setCurrentIndex(2 - 1) }} className={active == 2 ? "values-selecte-gradient" : 'values-text'} style={{ position: "absolute", top: "15%", left: "90%", transform: "translate(-50%, -50%)" }}>{messages.grow}</div>
              <div onMouseEnter={() => { setActive(3); setCurrentIndex(3 - 1) }} className={active == 3 ? "values-selecte-gradient" : 'values-text'} style={{ position: "absolute", top: "50%", left: "100%", transform: "translate(-50%, -50%)" }}>{messages.honor}</div>
              <div onMouseEnter={() => { setActive(4); setCurrentIndex(4 - 1) }} className={active == 4 ? "values-selecte-gradient" : 'values-text'} style={{ position: "absolute", top: "85%", left: "90%", transform: "translate(-50%, -50%)" }}>{messages.inspire}</div>
              <div onMouseEnter={() => { setActive(5); setCurrentIndex(5 - 1) }} className={active == 5 ? "values-selecte-gradient" : 'values-text'} style={{ position: "absolute", bottom: "-15px", left: "50%", transform: "translateX(-50%)" }}>{messages.innovate}</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="" style={{ overflow: 'hidden' }}>
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imges.map((element, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center md:w-[70%]' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                      <img src={element.src} alt={element.alt} style={{ objectFit: "contain" }} className="mb-6 w-[60%] md:max-w-[492px] md:max-h-[345px]" />
                      <p className="text-3xl values-title-gradient w-3/5 text-center whitespace-pre-line">{element.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col justify-center items-center mt-10 w-full">
                <Link href="/contact-us">
                  <div className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
                    style={{
                      background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                      border: '0.5px solid',
                      borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                      boxShadow: '0px 4px 4px 0px #00000040 inset',
                      width: '275px',
                      height: '50px',
                      textAlign: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      borderRadius: '10px'
                    }}>{messages.EnsureYourPeaceOfMind}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />

    </div>
  )
}