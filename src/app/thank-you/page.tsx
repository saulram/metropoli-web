"use client"
import { useTranslations } from "@/i18n/useTranslations";
import { motion } from "motion/react";
import Link from "next/link";


export default function ThankYou() {
  const messages = useTranslations();

  return (
    <motion.div
      className="relative flex justify-center items-center bg-cover bg-center bg-metropoliBg"
      style={{ backgroundImage: 'url(/waves.png)', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="container md:pt-40 pt-20 mx-auto px-4 py-8 md:py-16">
        <div className="max-w-[800px] mx-auto w-full">
          <motion.h1
            className="text-[32px] mb-10 text-center md:text-[40px] font-normal leading-[48px] bg-gradient-to-r from-[#091934] to-[#1C6EF6] bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.thankYouMessage}
          </motion.h1>
          <motion.p
            className="text-[#666] w-full text-center mb-8 md:mb-12 text-base md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {messages.followUsOnSocialMedia}
          </motion.p>
          <motion.div
            className="relative flex justify-evenly items-center bg-cover bg-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Link href={"https://www.facebook.com/profile.php?id=61575930904222"} target="_blank">
              <img src="/social3.svg" alt="social" />
            </Link>
            <Link href={"https://www.linkedin.com/company/grupo-metropoli/?viewAsMember=true"} target="_blank">
              <img src="/social2.svg" alt="social" />
            </Link>
            <Link href={"https://www.instagram.com/grupo_metropoli/"} target="_blank">
              <img src="/social1.svg" alt="social" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}