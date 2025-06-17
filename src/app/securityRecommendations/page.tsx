"use client"
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/useTranslations";

export default function SecurityRecommendations() {
  const messages = useTranslations();

  // Definir los índices de las recomendaciones para mapearlas
  const recommendations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div style={{
      background: '#d1d7e1 url(/waves.png) bottom/cover no-repeat',
    }}>
      <Navigation />
      <div className="px-10 pb-28 md:px-28 bg-white text-black" style={{
        background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
        rotate: '180deg',
      }}>
        <div style={{
          zIndex: 10,
          position: 'relative',
          rotate: '180deg'
        }}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-center text-[#444444] text-xl mb-4"
          >
            {messages.securityRecommendations_title}
          </motion.h1>
          <hr className="hr-gradient mb-6" />

          {/* Lista de recomendaciones */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <ol className="list-decimal ml-6 space-y-4">
              {recommendations.map(idx => {
                const key = `securityRecommendations_item_${idx}`;
                return (
                  <li key={idx} className="text-justify">
                    {messages[key as keyof typeof messages] as string}
                  </li>
                );
              })}
            </ol>
          </motion.div>
          <div className="h-[10vh] md:h-[30vh]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
