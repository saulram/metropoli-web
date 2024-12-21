"use client"
import { useTranslations } from "@/i18n/useTranslations";
import SliderComponent from "./SliderComponent";
import { motion } from "motion/react";

const WayToGo = () => {
  const messages = useTranslations();

  return (
    <div style={{ background: '#F1F1F1' }}>
      <div className='px-10 md:px-28 pt-28'>
        <div className="w-3/5">
          <motion.h1
            className="font-medium text-40 text-gradient"
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
            className="font-medium text-2xl text-black"
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
            className="font-medium text-2xl text-gradient lg:w-3/5"
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

        <div className="flex justify-around mt-32">
          <motion.div
            className="text-center hover-effect"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/business.png" alt="business" />
            <h3 className="font-medium text-xl mt-3 text-slate-400">
              {messages.business}
            </h3>
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
            <img src="/family.png" alt="family" />
            <h3 className="font-medium text-xl mt-3 text-slate-400">
              {messages.personalOrFamily}
            </h3>
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
          <h3 className="text-black text-3xl mt-4 text-gradient">{messages.focusOnValue}</h3>
          <h3 className="text-black text-lg mt-4 text-black w-2/5 text-center">{messages.weEliminateRisks}</h3>
        </motion.div>
      </div>

      <div className="relative w-full">
        <motion.img
          src="path.png"
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
          className='absolute'
          style={{ bottom: '15%', right: '5%', width: '30%' }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <h3 className="font-medium text-end text-40 text-gradient">{messages.discoverHow}</h3>
          <h3 className="font-medium text-end text-lg text-black">{messages.simpleProcess}</h3>
        </motion.div>
      </div>

      <div className='pb-32'>
        <SliderComponent />
      </div>
    </div>
  )
}

export default WayToGo;