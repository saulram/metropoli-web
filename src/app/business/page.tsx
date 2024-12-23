"use client"
import DescriptiveText from "@/components/DescriptiveText";
import Footer from "@/components/footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "@/i18n/useTranslations";
import { motion } from 'motion/react';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CompetenciesAndValues() {
  const messages = useTranslations();
  const router = useRouter();

  return (
    <div>
      <Navigation />
      <div className="px-10 md:px-28 py-28 bg-white" style={{
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
        rotate: '180deg'
      }}>
        <div style={{ rotate: '180deg' }}>
          <motion.h1 initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="font-black text-center text-[#444444] text-xl mb-4">{messages.business}</motion.h1>
          <motion.hr initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="hr-gradient" />
          <div className="md:mt-28 mt-10 mb-4">
            <motion.h2 initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }} className="values-title-gradient text-40 md:w-2/5 mb-14">{messages.firefighting}</motion.h2>
            <div className="grid grid-cols-3 gap-0">
              <div className=""></div>
              <div className="col-span-2">
                <motion.div initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }} className=' md:w-4/5'>
                  <DescriptiveText title={messages.deserveToBeHeard} text={messages.weHandleFires} active={true} />
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }} className='mt-10 md:w-4/5'>
                  <p className="text-[#444444] text-lg">{messages.marketExperience}</p>
                  <DescriptiveText title={messages.leadersSeekPeace} text='' />
                </motion.div>
                <motion.div initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }} className='mt-10 mb-14 md:w-4/5'>
                  <DescriptiveText onClick={() => {
                    router.push('/contact-us')
                  }} title={messages.yourPathToYourPeace} text='' button={messages.startsHere} />
                </motion.div>
                <Link href="/contact-us">
                  <motion.div initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }} className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
                    style={{
                      background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                      border: '0.5px solid',
                      borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                      boxShadow: '0px 4px 4px 0px #00000040 inset',
                      width: '230px',
                      textAlign: 'center',
                      borderRadius: '10px'
                    }}>{messages.EnsureYourPeaceOfMind}</motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#d1d7e1] px-10 md:px-28 " style={{
        marginTop: '-1px',
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
      }}>

        <motion.p initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="text-black text-3xl md:w-2/5 md:mb-40 mb-10 z-10" >
          <b className="text-[#444444] font-normal">{messages.longTrajectory}</b> <b className="values-title-gradient font-normal">{messages.clientsFromAllIndustries}</b> <b className="text-[#444444] font-normal">{messages.comprehensiveInsurancePrograms}</b>
        </motion.p>
        <div className="stain"
          style={{
            left: 0,
            position: 'absolute', // Asegúrate de que el div esté posicionado correctamente
          }} />
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 md:mb-40 mb-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.art}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.vehicles}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.aviationAndDrones}</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex flex-col containersemitransparente justify-center items-center md:px-10 px-2 text-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.employeeBenefits}</p>
            <p className="text-[#444] text-xs ">{messages.healthAndLifeInsurance}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.flexibleBenefits}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.cargoTransport}</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.constructionCivilWorks}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.businessInsurance}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex flex-col containersemitransparente justify-center items-center md:px-10 px-2 text-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.bonds}</p>
            <p className="text-[#444] text-xs">{messages.administrativeInsurance}</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex flex-col containersemitransparente justify-center items-center md:px-10 px-2 text-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.financialLines}</p>
            <p className="text-[#444] text-xs">{messages.cyberAndCredit}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.microInsurance}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.civilLiability}</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.vessels}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.terrorism}</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex containersemitransparente justify-center items-center">
            <p className="values-title-gradient font-bold text-base  text-center md:text-2xl">{messages.etc}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="flex justify-center items-center md:mb-40 mb-10">
          <p className="text-center md:w-4/5 values-title-gradient text-2xl font-normal whitespace-pre-line">
            {messages.everythingIsInsurable}
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="flex justify-center items-center w-full mb-14">
          <img src="/business-page.svg" alt="business-img-page" />
        </motion.div>
        <Link href="/contact-us">
          <div className="flex justify-center items-center w-full md:mb-40 mb-10">
            <div className="rounded-md px-3.5 py-2.5 text-sm font-bold text-white shadow-sm focus:outline-none"
              style={{
                background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                border: '0.5px solid',
                borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                boxShadow: '0px 4px 4px 0px #00000040 inset',
                width: '230px',
                textAlign: 'center',
                borderRadius: '10px'
              }}>{messages.EnsureYourPeaceOfMind}</div>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}