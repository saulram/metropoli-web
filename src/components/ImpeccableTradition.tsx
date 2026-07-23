"use client"
import { useRef } from "react";
import DescriptiveTextInContainer from "./DescriptiveTextInContainer";
import { motion } from 'motion/react';

const ImpeccableTradition = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="bg-metropoliBg pb-40"
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
      <div className='px-10 md:px-28  md:py-28 py-20'>
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
            Más de 60 años. Tres generaciones. Trayectoria impecable.
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
            No prometemos. Cumplimos.
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
            Clientes en todos los continentes y acceso directo a los mercados de reaseguro del mundo a través de TBS, The Broker Services.
          </motion.h2>
        </div>
      </div>

      <div className="flex gap-24">
        <div className="md:w-1/2"></div>
        <motion.div
          className="md:w-1/2 md:ps-28 scrollable-container md:w-[35%]"
          ref={containerRef}
        >
          {[
            { title: '200M+ USD pagados en siniestros en los últimos 5 años.', text: 'No prometemos. Cumplimos.', isActive: true },
            { title: '98.7% de renovación de clientes.', text: 'La confianza se gana cada año. Por algo será.' },
            { title: 'Empresas AAA aseguradas con nosotros por 35+ años.', text: 'Las grandes empresas no se arriesgan con cualquiera.' },
            { title: 'Clientes en todos los continentes.', text: 'Nuestra experiencia no tiene fronteras.' },
            { title: 'Acceso directo al reaseguro mundial.', text: 'A través de TBS, The Broker Services.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${index !== 0 ? 'mt-10' : ''} `}
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
