"use client"
import { useTranslations } from "@/i18n/useTranslations";
import SliderComponent from "./SliderComponent";
import { motion } from "motion/react";
import Link from "next/link";

const WayToGo = () => {
  const messages = useTranslations();

  return (
    <div style={{ background: '#F1F1F1' }}>
      <div className='px-10 md:px-28 pt-28'>
        <div className="">
          <motion.h1
            className="font-medium text-40 text-gradient mb-4 md:w-3/5 w-4/5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.whichPath}
          </motion.h1>
          <motion.h2
            className="font-medium text-2xl text-black md:w-3/5 "
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.thinkingOfOthers}
          </motion.h2>
          <motion.h2
            className="font-medium text-2xl text-gradient lg:w-3/5 whitespace-pre-line"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.investingWisely}
          </motion.h2>
        </div>

        <div className="flex justify-around mt-32 flex-col md:flex-row">
          <motion.div
            className="text-center hover-effect mb-10 md:mb-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/business">
              <img src="/business.png" alt="business" />
              <h3 className="font-medium text-xl mt-3 text-slate-400">
                {messages.business}
              </h3>
            </Link>
          </motion.div>

          <motion.div
            className="text-center hover-effect"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={"/personalOrFamily"}>
              <img src="/family.png" alt="family" />
              <h3 className="font-medium text-xl mt-3 text-slate-400">
                {messages.personalOrFamily}
              </h3>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col justify-center items-center mt-32"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <h3 className="text-black text-xl">{messages.yourPathToPeace}</h3>
          <h3 className="text-black text-3xl text-center mt-4 text-gradient">{messages.focusOnValue}</h3>
          <h3 className="text-black text-lg mt-4 text-black md:w-2/5 text-center whitespace-pre-line">{messages.weEliminateRisks}</h3>
        </motion.div>
      </div>

      <div className="w-full">
        <motion.img
          src="camino.svg"
          alt="path"
          className="w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
        <motion.div
          className='md:w-2/5 w-4/5 md:bottom-40 float-end me-8 md:mt-[-200px]'
          style={{ overflow:"hidden", }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <div className="flex flex-col justify-end items-end">
            <h3 className="font-medium md:text-end w-3/5 md:w-full text-start text-40 text-gradient">{messages.discoverHow}</h3>
            <h3 className="font-medium md:text-end w-3/5 md:w-full text-start text-lg text-black whitespace-pre-line">{messages.simpleProcess}</h3>
          </div>
        </motion.div>
      </div>

      <div className='pb-32'>
        <SliderComponent />
      </div>
    </div>
  )
}

export default WayToGo;