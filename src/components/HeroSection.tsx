"use client"
import { useTranslations } from '@/i18n/useTranslations';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

export default function HeroSection() {
    const messages = useTranslations();

    return (
        <div className="relative bg-cover bg-center bg-metropoliBg min-h-screen flex items-center justify-center"
            style={{ 
                backgroundImage: 'url(/waves.png)',
                minHeight: '100dvh'
            }}>
            <div className="px-5 md:px-28 py-16 md:py-28 w-full">
                <motion.p
                    className="text-left text-40 line font-bold text-white md:w-3/5"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                    style={{
                        fontWeight: 500,
                        textAlign: 'left',
                        color: "#000506",
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none'
                    }}>
                    {messages.leadersInStrategy} <strong>{messages.insurance}</strong> {messages.invest}
                </motion.p>
                <motion.p
                    className="text-left text-40 font-bold bg-clip-text text-transparent"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                        fontStyle: 'italic',
                        fontWeight: 700,
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        background: 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text'
                    }}>
                    {messages.momentsOfTranquility}
                </motion.p>

                <div className="h-20"></div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                >
                    <Link
                        className="rounded-md px-5 py-3 text-lg font-bold text-white shadow-sm focus:outline-none"
                        style={{
                            background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                            border: '0.5px solid',
                            borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                            boxShadow: '0px 4px 4px 0px #00000040 inset',
                            width: '270px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            display: 'inline-block'
                        }}
                        href={'/contact-us'}
                    >
                        {messages.EnsureYourPeaceOfMind}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}