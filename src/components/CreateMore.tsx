"use client"
import { useTranslations } from "@/i18n/useTranslations";
import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';

export default function CreateMore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = useTranslations();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  const texts = [
    {
      title: messages.peaceOfMind,
      content: messages.insuranceStress,
      title2: messages.weUnderstand,
      content2: messages.differentApproach
    },
    {
      title: messages.freedomToEnjoy,
      content: messages.experience,
      content2: messages.longTermRelationships
    },
  ];

  return (
    <motion.div
      className="py-36 px-10 md:px-28"
      style={{
        background: '#F1F1F1 url(/bg-Impecable.svg) center/cover no-repeat',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex justify-center items-center"
          >
            <div className='md:w-2/3 md:h-[400px]'>
              <motion.p
                className="font-medium text-center text-3xl text-gradient mb-6 whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {texts[currentIndex].title}
              </motion.p>
              <motion.p
                className="font-medium text-center text-lg text-black mb-6 whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {texts[currentIndex].content}
              </motion.p>
              {texts[currentIndex].title2 && (
                <motion.p
                  className="font-medium text-center text-3xl text-gradient mb-6 whitespace-pre-line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {texts[currentIndex].title2}
                </motion.p>
              )}
              <motion.p
                className="font-medium text-center text-lg text-black whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {texts[currentIndex].content2}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation container with buttons and dots */}
        <div className="flex justify-center items-center gap-6 mt-6 md:mt-10">
          <motion.button
            onClick={handlePrev}
            className="p-2 md:p-4"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/rightArrow.png" 
              alt="Previous" 
              className="w-6 h-6 md:w-8 md:h-8 rotate-180" 
            />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-3">
            {texts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="rounded-full"
                style={{
                  backgroundColor: currentIndex === index ? '#618FDC' : '#BFCCE4',
                  width: "10px",
                  height: "10px"
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            className="p-2 md:p-4"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/rightArrow.png" 
              alt="Next" 
              className="w-6 h-6 md:w-8 md:h-8" 
            />
          </motion.button>
        </div>
      </div>

      {/* Slider image */}
      <div className="w-full overflow-hidden mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex + 'img'}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex justify-center items-center"
          >
            <motion.img
              src={`slide${currentIndex + 1}.png`}
              alt={'slide' + currentIndex}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}