'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Testimonial {
    author: string;
    role: string;
    company: string;
    website: string;
    content: string[];
    logoSrc: string;
    logoAlt: string;
}

const testimonials: Testimonial[] = [
    {
        author: 'José Carlos Pérez y Pérez',
        role: 'Presidente del Consejo',
        company: 'Grupo Diagnóstico Proa',
        website: 'https://www.chopo.com.mx/',
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
        company: 'Clase Azul',
        website: 'https://www.claseazul.com/',
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
        company: 'Bosque Real',
        website: 'https://www.bosquereal.com.mx/',
        content: [
            'La construcción y el desarrollo van más allá de levantar estructuras; implica enfrentar riesgos en cada etapa del proceso. Con Metrópoli, hemos encontrado más que un seguro: una estrategia de protección integral que nos permite enfocarnos en lo que mejor sabemos hacer: desarrollar.',
            'Su equipo nos da la confianza y seguridad que nos libera de preocupaciones innecesarias, asegurando que cada proyecto avance con estabilidad, respaldo y tranquilidad.'
        ],
        logoSrc: '/logos/Bosque Real 1.svg',
        logoAlt: 'Bosque Real Logo'
    },
    {
        author: 'Leonel Cravioto',
        role: 'CEO',
        company: 'Credifiel',
        website: 'https://www.credifiel.com.mx/',
        content: [
            'Durante más de 20 años, Metrópoli ha sido un aliado estratégico para Credifiel, un pilar fundamental en nuestro crecimiento y estabilidad.',
            'Su acompañamiento nos ha dado la confianza para tomar decisiones con seguridad, sabiendo que siempre contamos con su respaldo. Lo que realmente los hace únicos es su cercanía, su profundo conocimiento del sector y su compromiso genuino con nuestras necesidades. Los resultados que hemos obtenido son el reflejo de una relación basada en confianza, experiencia y visión compartida.'
        ],
        logoSrc: '/logos/color_credifiel.svg',
        logoAlt: 'Credifiel Logo'
    },
    {
        author: 'Jose Antonio Sanchez Perez',
        role: 'CEO',
        company: 'Mainbit',
        website: 'https://www.mainbit.com.mx/',
        content: [
            'Para mí, trabajar con Grupo Metrópoli por más de 30 años ha significado poder delegar los temas de seguros y fianzas en una de las empresas más profesionales del rubro que conozco.',
            'Es saber que siempre estás asegurado ante cualquier percance, ya sea profesional o médico a nivel personal, con gente que tiene la experiencia y el conocimiento de sobra para resolver cualquier situación que se presente, por más compleja que esta sea.',
            'El continuo estudio y especialización de su equipo directivo en las nuevas tendencias de este mundo globalizado del siglo XXI, así como ante sucesos como la pandemia vivida en años recientes, son sin duda el fiel de la balanza que hace que Grupo Metrópoli esté siempre a la vanguardia. Tener un equipo así a tu lado es invaluable.'
        ],
        logoSrc: '/logos/color_mainbit.svg',
        logoAlt: 'Mainbit Logo'
    },
    {
        author: 'Eduardo Hadad Zarur',
        role: 'CEO',
        company: 'Tapón Corona',
        website: 'https://www.taponcorona.com.mx/',
        content: [
            'Trabajar con Grupo Metrópoli ha sido una experiencia extraordinaria a lo largo de los años. Su equipo de expertos en cada rubro nos ha brindado un respaldo invaluable, siempre a la vanguardia y con un conocimiento profundo del mercado.',
            'Nos han ayudado a encontrar las mejores condiciones y opciones. Su capacidad para resolver problemas y gestionar cualquier tipo de siniestralidad nos ha dado la tranquilidad de saber que siempre contamos con un equipo que vela por nuestros intereses. Gracias a su profesionalismo y compromiso, cada decisión que tomamos está respaldada por su asesoría experta, asegurándonos la mejor protección y estabilidad.'
        ],
        logoSrc: '/logos/Tapon Corona 1.svg',
        logoAlt: 'Tapón Corona Logo'
    },
    {
        author: 'Antonio Elola Salas',
        role: 'CEO',
        company: 'Transportes ELOLA',
        website: 'https://transporteselola.com.mx/',
        content: [
            'Trabajar con Metrópoli me da, además de mucha confianza, tranquilidad.',
            'Su buen desempeño y los resultados en las gestiones que realizamos me hacen sentir seguro al saber que un gran equipo de profesionales está resolviendo los problemas de mi empresa.',
            'Creo que la mayor diferencia es que trabajamos directamente con los directivos de Metrópoli, lo que nos permite obtener respuestas ágiles y soluciones siempre alineadas con nuestra razón de ser. Es un placer colaborar con su empresa. ¡Muchas gracias!'
        ],
        logoSrc: '/logos/Transportes Elola 1.svg',
        logoAlt: 'Transportes ELOLA Logo'
    },
    {
        author: 'Mario Domínguez Vazquez',
        role: 'CEO',
        company: 'Kassel',
        website: 'https://kassel.mx/',
        content: [
            'En nuestra industria, los imprevistos pueden afectar desde la producción hasta la entrega final. Con Metrópoli, hemos encontrado un equipo que entiende nuestros riesgos y nos da soluciones claras y eficientes.',
            'Su acompañamiento nos ha permitido operar con la tranquilidad de saber que, pase lo que pase, estamos protegidos. Más que un bróker de seguros, son aliados que realmente cuidan nuestra empresa.'
        ],
        logoSrc: '/logos/Kassel 1.svg',
        logoAlt: 'Kassel Logo'
    },
    {
        author: 'Jesús Martínez',
        role: 'Director Jurídico',
        company: 'Gas Uribe',
        website: 'https://www.gasuribe.com.mx/',
        content: [
            'Para el sector de Hidrocarburos, cada minuto cuenta. Por eso, tener el respaldo de Metrópoli ha hecho toda la diferencia. Su conocimiento experto, tiempos rápidos de respuesta y la simplicidad con la que gestionan nuestras necesidades nos da justo lo que más valoramos: tranquilidad.',
            'Se nota su experiencia de generaciones en cada interacción. Con ellos, todo es más fácil.'
        ],
        logoSrc: '/logos/49650862_804535846559613_1509308325936758784_n 1.svg',
        logoAlt: 'Gas Uribe Logo'
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
                    className="w-full sm:h-[1056px] md:h-[750px] lg:h-[500px] object-cover object-center"
                    priority
                />

                {/* Contenedor con blur y gradiente */}
                <div
                    className="absolute inset-0 w-full sm:h-[1056px] md:h-[750px] lg:h-[500px] rounded-bl-[9px] rounded-br-[9px] border border-[#CBDCF8]"
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
                        className="absolute left-8 md:top-1/4 lg:top-1/2 -translate-y-1/4 z-10 sm:hidden md:block"
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
                        className="absolute right-8 md:top-1/4 lg:top-1/2 -translate-y-1/4 z-10 sm:hidden md:block"
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
                                        <div className='flex flex-row justify-between'>
                                            <div onClick={handlePrev} className='sm:flex md:hidden flex-row justify-center sm:items-center md:items-start'>
                                                <Image src="/arrow-back.svg" alt="Previous" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                            </div>
                                            <div className='flex flex-col justify-center  sm:mx-4 md:mx-0'>
                                                <h2 className="text-[#1C6EF6] text-xl sm:text-2xl md:text-4xl font-normal mb-1 sm:mb-2 sm:text-center md:text-left">
                                                    {testimonials[currentIndex].author}
                                                </h2>
                                                <h3 className="text-[#1C6EF6] text-base sm:text-lg md:text-2xl font-normal sm:text-center md:text-left">
                                                    <Link 
                                                        href={testimonials[currentIndex].website} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="hover:underline"
                                                    >
                                                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div onClick={handleNext} className='sm:flex md:hidden flex-row justify-center items-center'>
                                                <Image src="/arrow-forward.svg" alt="Previous" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Logo desktop hidden in mobile display after 768px */}
                                    <div className="sm:hidden md:block w-[225px]">
                                        <Link 
                                            href={testimonials[currentIndex].website}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={testimonials[currentIndex].logoSrc}
                                                alt={testimonials[currentIndex].logoAlt}
                                                width={225}
                                                height={90}
                                                className="w-auto h-[100px] object-contain"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4 sm:space-y-6">
                                    {testimonials[currentIndex].content.map((paragraph, idx) => (
                                        <p key={idx} className="text-[#444444] text-[13px] sm:text-lg font-[400] leading-[100%] text-center sm:text-left font-lato">
                                            {paragraph}
                                        </p>
                                    ))}
                                    <div className="sm:flex md:hidden w-full flex justify-center items-center">
                                        <Link 
                                            href={testimonials[currentIndex].website}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={testimonials[currentIndex].logoSrc}
                                                alt={testimonials[currentIndex].logoAlt}
                                                width={150}
                                                height={60}
                                                className="w-auto max-w-[150px] h-[100px] object-contain"
                                            />
                                        </Link>
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