'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    author: string;
    role: string;
    content: string[];
    logoSrc: string;
    logoAlt: string;
}

const testimonials: Testimonial[] = [
    {
        author: 'José Carlos Pérez y Pérez',
        role: 'Presidente del Consejo Grupo Diagnóstico Proa',
        content: [
            'Hemos tenido la suerte de trabajar con Grupo Metrópoli desde hace más de 35 años, siempre con un servicio excepcional, lo que lo convierte en uno de los mejores proveedores con los que cuenta el Grupo.',
            'A lo largo de estos años de colaboración, hemos encontrado un aliado estratégico que ha demostrado un compromiso inquebrantable con la excelencia. Su capacidad para ofrecer soluciones, siempre con las mejores alternativas en precio y calidad, ha sido clave en nuestra relación de confianza y respeto.',
            'Grupo Metrópoli no solo ha cumplido consistentemente con nuestras expectativas, sino que las ha superado, consolidándose como un Socio fundamental en nuestra operación. Su dedicación y alto nivel de servicio lo han convertido en un referente en su sector, y es un orgullo para nosotros contar con su respaldo.'
        ],
        logoSrc: '/logos/color_chopo.svg',
        logoAlt: 'Chopo Logo'
    },
    {
        author: 'Arturo Lomeli',
        role: 'Fundador y CEO',
        content: [
            'Nuestra experiencia con Grupo Metrópoli se ha sostenido en la solidez de su propósito de Asegurar Momentos de Tranquilidad. Juntos hemos aprendido y construido una relación de mucho valor y largo plazo, basada en el respeto, la confianza y los valores que comparten nuestras empresas.',
            'Ha sido una gran experiencia que ya acumula tres generaciones.'
        ],
        logoSrc: '/logos/color_clase_azul.svg',
        logoAlt: 'Clase Azul Logo'
    },
    {
        author: 'Marcos Salame',
        role: 'CEO',
        content: [
            'La construcción y el desarrollo van más allá de levantar estructuras; implica enfrentar riesgos en cada etapa del proceso. Con Metrópoli, hemos encontrado más que un seguro: una estrategia de protección integral que nos permite enfocarnos en lo que mejor sabemos hacer: desarrollar.',
            'Su equipo nos da la confianza y seguridad que nos libera de preocupaciones innecesarias, asegurando que cada proyecto avance con estabilidad, respaldo y tranquilidad.'
        ],
        logoSrc: '/logos/Bosque Real.svg',
        logoAlt: 'Bosque Real Logo'
    },
    {
        author: 'Leonel Cravioto',
        role: 'CEO',
        content: [
            'Durante más de 20 años, Metrópoli ha sido un aliado estratégico para Credifiel, un pilar fundamental en nuestro crecimiento y estabilidad.',
            'Su acompañamiento nos ha dado la confianza para tomar decisiones con seguridad, sabiendo que siempre contamos con su respaldo. Lo que realmente los hace únicos es su cercanía, su profundo conocimiento del sector y su compromiso genuino con nuestras necesidades. Los resultados que hemos obtenido son el reflejo de una relación basada en confianza, experiencia y visión compartida.'
        ],
        logoSrc: '/logos/color_credifiel.svg',
        logoAlt: 'Credifiel Logo'
    }
];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="w-full h-auto">
            <div className="relative w-full h-auto">
                {/* Fondo SVG */}
                <Image
                    src="/testimonials_bg.svg"
                    alt="Background"
                    width={1920}
                    height={501}
                    className="w-full sm:h-[1056px] md:h-[750px] object-cover object-center"
                    priority
                />

                {/* Contenedor con blur y gradiente */}
                <div
                    className="absolute inset-0 w-full sm:h-[1056px] md:h-[750px] rounded-bl-[9px] rounded-br-[9px] border border-[#CBDCF8]"
                    style={{
                        backdropFilter: 'blur(72.5px)',
                        background: 'rgba(203, 220, 248, 0.14)',
                        borderTop: 'none'
                    }}
                >
                    {/* Gradiente overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, #99C0FF, #1C6EF6)',
                            opacity: '0.14',
                            mixBlendMode: 'multiply'
                        }}
                    />

                    {/* Navigation arrows desktop, hidden in mobile display after 768px */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrev}
                        className="absolute left-8 top-1/4 -translate-y-1/4 z-10 sm:hidden md:block"
                    >
                        <Image
                            src="/arrow-back.svg"
                            alt="Previous"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="absolute right-8 top-1/4 -translate-y-1/4 z-10 sm:hidden md:block"
                    >
                        <Image
                            src="/arrow-forward.svg"
                            alt="Next"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </motion.button>

                    <div className="absolute inset-0 px-[10%] pt-[60px] sm:pt-[100px] pb-8 sm:pb-12 overflow-y-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4 sm:mb-8">
                                    <div className="flex-1">
                                        <div className='flex flex-row justify-between items-center'>
                                            <div onClick={handlePrev} className='sm:flex md:hidden flex-row justify-center items-center'>
                                                <Image src="/arrow-back.svg" alt="Previous" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                            </div>
                                            <div className='flex flex-col justify-center items-center sm:mx-4 md:mx-0'>
                                                <h2 className="text-[#1C6EF6] text-xl sm:text-2xl md:text-4xl font-normal mb-1 sm:mb-2 sm:text-center md:text-left">
                                                    {testimonials[currentIndex].author}
                                                </h2>
                                                <h3 className="text-[#1C6EF6] text-base sm:text-lg md:text-2xl font-normal sm:text-center md:text-left">
                                                    {testimonials[currentIndex].role}
                                                </h3>
                                            </div>
                                            <div onClick={handleNext} className='sm:flex md:hidden flex-row justify-center items-center'>
                                                <Image src="/arrow-forward.svg" alt="Previous" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Logo desktop hidden in mobile display after 768px */}
                                    <div className="sm:hidden md:block w-[150px]">
                                        <Image
                                            src={testimonials[currentIndex].logoSrc}
                                            alt={testimonials[currentIndex].logoAlt}
                                            width={150}
                                            height={60}
                                            className="w-auto h-[60px] object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4 sm:space-y-6">
                                    {testimonials[currentIndex].content.map((paragraph, idx) => (
                                        <p key={idx} className="text-[#444444] text-[13px] sm:text-lg font-[400] leading-[100%] text-center sm:text-left font-lato">
                                            {paragraph}
                                        </p>
                                    ))}
                                    <div className="sm:flex md:hidden w-full flex justify-center items-center">
                                        <Image
                                            src={testimonials[currentIndex].logoSrc}
                                            alt={testimonials[currentIndex].logoAlt}
                                            width={150}
                                            height={60}
                                            className="w-auto h-[40px] object-contain"
                                        />
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials; 