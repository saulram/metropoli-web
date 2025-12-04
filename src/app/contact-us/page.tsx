'use client'
//import ContactForm from '@/components/ContactForm';
import Footer from '@/components/footer';
import Navigation from '@/components/Navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from '@/i18n/useTranslations';

const ContactPage: React.FC = () => {
    const messages = useTranslations();
    const [formLoaded, setFormLoaded] = useState(false);

    useEffect(() => {
        // Detectar cuando el iframe de HubSpot se ha cargado
        const checkForm = setInterval(() => {
            const iframe = document.querySelector('.hs-form-iframe');
            if (iframe) {
                setFormLoaded(true);
                clearInterval(checkForm);
            }
        }, 100);

        // Limpiar el intervalo después de 10 segundos
        const timeout = setTimeout(() => {
            clearInterval(checkForm);
            setFormLoaded(true);
        }, 10000);

        return () => {
            clearInterval(checkForm);
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div style={
            {

                background: '#d1d7e1 url(/waves.png) center/cover no-repeat',
            }
        }>
            <Navigation />
            <div className="max-w-[800px] mx-auto pt-[100px]">
                <div className='px-[40px] mb-[-40px] '>
                    <motion.h1
                        className="text-[32px] md:text-[40px] font-normal leading-[48px] bg-gradient-to-r from-[#091934] to-[#1C6EF6] bg-clip-text text-transparent"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {messages.contactFormTitle}
                    </motion.h1>
                    <motion.p
                        className="text-[#3b3b3b] mb-8 md:mb-12 text-base md:text-lg max-w-[600px] whitespace-pre-line"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {messages.contactFormDescription}
                    </motion.p>
                </div>

                <div className="relative min-h-[600px]">
                    {!formLoaded && (
                        <div className="absolute inset-0 px-[40px] space-y-4 animate-pulse">
                            <div className="h-12 bg-gray-500 rounded"></div>
                            <div className="h-12 bg-gray-500 rounded"></div>
                            <div className="h-12 bg-gray-500 rounded"></div>
                            <div className="h-32 bg-gray-500 rounded"></div>
                            <div className="h-12 bg-gray-500 rounded w-1/3"></div>
                        </div>
                    )}

                    <div
                        className={`hs-form-frame transition-opacity duration-300 ${formLoaded ? 'opacity-100' : 'opacity-0'}`}
                        data-region="na1"
                        data-form-id="053cd3b5-2374-4e68-953c-5dabb2ca4323"
                        data-portal-id="48421759"
                    ></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
