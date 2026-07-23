import { motion } from 'motion/react';

export default function PartnerAtFront() {
  return (
    <section className="bg-[#112039] px-10 py-24 text-white md:px-28">
      <motion.div className="mx-auto max-w-4xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-40 font-medium">En Metrópoli, un <span className="text-[#99C0FF]">Socio</span> está al frente de tu póliza.</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-blue-100">
          <p>Los otros brókers delegan tu cuenta a un ejecutivo junior que cambia de trabajo en cualquier momento. Nosotros estamos aquí desde hace tres generaciones y para siempre.</p>
          <p>Un socio diseña tu estrategia, el equipo la ejecuta y —siempre— estamos a una llamada, mensaje o mail de distancia.</p>
          <p className="font-semibold text-white">Nuestra reputación está en cada renovación. Por eso el 98.7% de nuestros clientes se queda.</p>
        </div>
      </motion.div>
    </section>
  );
}
