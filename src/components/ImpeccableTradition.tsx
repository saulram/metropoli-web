"use client"
import { useTranslations } from "@/i18n/useTranslations";
import { useRef } from "react";
import DescriptiveTextInContainer from "./DescriptiveTextInContainer";
import { motion } from 'motion/react';

const ImpeccableTradition = () => {
  const messages = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div 
      className="bg-metropoliBg pb-48" 
      style={{
        backgroundImage: 'url(/waves_bottom.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className='px-10 md:px-28 py-28'>
        <div className="w-full md:w-2/5">
          <motion.h2 
            className="font-normal text-40 text-gradient mb-2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.impeccableTrajectory}
          </motion.h2>
          <motion.h2 
            className="font-normal text-2xl text-gradient mb-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.sixtyYearsExperience}
          </motion.h2>
          <motion.h2 
            className="font-normal text-lg text-black"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.decadesOfKnowledge}
          </motion.h2>
        </div>
      </div>

      <div className="flex gap-24">
        <div className="w-1/2"></div>
        <motion.div 
          className="w-1/2 ps-28 scrollable-container" 
          ref={containerRef}
        >
          {[
            { title: messages.claimsPaid, text: messages.weDeliver, isActive: true },
            { title: messages.clientRenewal, text: messages.trustEarned },
            { title: messages.aaaCompanies, text: messages.bigCompaniesTrust },
            { title: messages.globalClients, text: messages.noBorders },
            { title: messages.reinsuranceAccess, text: messages.tbsBroker }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`${index !== 0 ? 'mt-10' : ''} w-72`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1, // Escalonado basado en el índice
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <DescriptiveTextInContainer 
                title={item.title} 
                text={item.text} 
                containerRef={containerRef}
                isActiveProp={item.isActive}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImpeccableTradition;