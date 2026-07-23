"use client"
import DescriptiveText from './DescriptiveText';
import { motion } from 'motion/react';

const SecurityPeaceOfMind = () => {
    return (
        <div className="bg-metropoliBg" style={{
            backgroundImage: 'url(/waves_bottom.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
        }}>
            <div className='px-10 md:px-28 py-28'>
                <div className="w-full md:w-3/5">
                    <motion.h2
                        className="font-normal text-40 text-black"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        No estás comprando una póliza.
                    </motion.h2>
                    <motion.h2
                        className="font-normal text-40 text-gradient"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        Estás comprando experiencia que te acompaña cuando alguien se enferma, te roban un transporte o se incendia tu fábrica.
                    </motion.h2>
                </div>
            </div>

            <div className="flex gap-24 flex-col-reverse md:flex-row md:item-center md:justify-center">
                <motion.div
                    className='md:w-1/2 w-4/5'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <div>
                        <img src="/persona-paz.svg" alt="Persona caminando en la naturaleza" className='w-full'/>
                    </div>
                </motion.div>

                <div className="sm:ps-36 w-1/2 ps-20">
                    {[
                        {
                            title: 'Un futuro sin sorpresas.',
                            text: 'Sabes exactamente qué cubre tu póliza y qué no. Te lo explicamos en tu idioma, sin letras chiquitas.',
                            delay: 0
                        },
                        {
                            title: 'Dormir tranquilo.',
                            text: 'Todo lo que te ha tomado una vida construir está bien asegurado. Y si algo pasa, no vas a pelear solo con la aseguradora. Para eso estamos nosotros.',
                            delay: 0.2
                        },
                        {
                            title: 'Tu energía donde importa.',
                            text: 'Crecer tu empresa, disfrutar a tu familia y vivir a tu manera. Del riesgo nos encargamos nosotros.',
                            delay: 0.4
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`w-96 ${index !== 0 ? 'mt-10' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.6,
                                delay: item.delay,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <DescriptiveText title={item.title} text={item.text} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className='flex justify-center items-center text-center py-40'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1]
                }}
            >
                <div className='md:w-2/5 px-10 md:px-0 text-40'>
                    <DescriptiveText customDesktopSize='650px' customMobileSize='250px' title="Más de 60 años. Tres generaciones. Trayectoria impecable." text={''}  />
                </div>
            </motion.div>
        </div>
    );
};

export default SecurityPeaceOfMind;
