"use client"
import { motion } from 'motion/react';

export default function CreateMore() {
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
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-40 text-gradient">El problema no es la aseguradora. Es enfrentarla solo.</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#24334d]">
          <p>La aseguradora tiene procesos, formatos, criterios y tiempos. Es normal: su trabajo es administrar riesgos.</p>
          <p>Tú tienes una empresa que proteger, una familia que cuidar y una vida que no puede detenerse por tecnicismos, procesos que desgastan o un call center que nadie responde.</p>
          <p>Cuando llega un siniestro, lo último que necesitas es descifrar coberturas y exclusiones o perseguir respuestas de tu bróker.</p>
          <p className="font-semibold text-gradient">Para eso existe Metrópoli.</p>
          <p>Te hablamos claro. Llenamos los documentos por ti para que solo firmes. Y cuando algo pasa, no te decimos “revisa tu póliza”. Te decimos “contigo, pase lo que pase”.</p>
        </div>
      </div>
    </motion.div>
  );
}
