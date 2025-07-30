"use client"
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslations } from "@/i18n/useTranslations";
import Link from "next/link";
import { motion } from 'motion/react';


export default function Footer() {
  const messages = useTranslations();
  const { setLanguage } = useLanguage();

  return (
    <div className="bg-transparent backdrop-blur" style={{
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      minHeight: "215px",
      transform: "rotate(180deg)"
    }}>
      <footer className="metropoliBg-dark drop-shadow-custom" style={{ transform: "rotate(-180deg)", minHeight: "215px", borderRadius: "40px 40px 0px 0px" }}>
        <div className="px-10 md:px-28 pt-14 md:flex md:justify-between grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-sm">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex mb-20 md:mb-0 justify-between flex-col items-center col-span-2 md:col-span-1">
            <img src="/GM_logo.svg" alt="logo dorado" width={177} className="mb-4" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}>
            <p className="mb-3">{messages.menu}</p>
            <Link href="/competenciesAndValues">
              <p className="block">{messages.competenciesAndValues}</p>
            </Link>
            <Link href="/#roads">
              <p className="block">{messages.roads}</p>
            </Link>
            <Link href="/contact-us">
              <p className="block">{messages.sendRequest}</p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}>
            <p className="mb-3">{messages.legal}</p>
            <Link href="/privacyNotice">
              <p className="block">{messages.privacyNotice}</p>
            </Link>
            <Link href="/termsAndConditions">
              <p className="block">{messages.termsAndConditions}</p>
            </Link>
            <Link href="/securityRecommendations">
              <p className="block">{messages.securityRecommendations}</p>
            </Link>
            <Link href="/Formato-Derechos-ARCO-2025.pdf" target="_blank">
              <p className="block">{messages.arcoRights}</p>
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }} className="grid grid-cols-2 col-span-2 gap-4 md:col-span-1 mb-10 md:mb-0 md:flex md:flex-col">
            <div>
              <p>{messages.languages}</p>
              <div className="flex mb-2">
                <img onClick={() => setLanguage('es')} src="/flag.svg" alt="español" className="mr-2" width={17} />
                <img onClick={() => setLanguage('en')} src="/usa.svg" alt="english" width={17} />
              </div>
            </div>
            <div>
              <p>{messages.followUs}</p>
              <div className="flex mb-2">
                <Link href={"https://www.facebook.com/profile.php?id=61575930904222"} target="_blank">
                  <img src="/facebook.svg" alt="facebook" className="mr-2" width={18} height={18} />
                </Link>
                <Link href={"https://www.linkedin.com/company/grupo-metropoli/?viewAsMember=true"} target="_blank">
                  <img src="/linkedin.svg" alt="inkedin" className="mr-2" width={18} height={18} />
                </Link>
                <Link href={"https://www.instagram.com/grupo_metropoli/"} target="_blank">
                  <img src="/instagram.png" alt="instagram" width={18} height={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}