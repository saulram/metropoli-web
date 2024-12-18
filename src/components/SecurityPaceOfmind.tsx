"use client"
import Image from 'next/image';
import { useTranslations } from '@/i18n/useTranslations';
import DescriptiveText from './DescriptiveText';
import { useEffect, useRef, useState } from 'react';

const SecurityPeaceOfMind = () => {
    const messages = useTranslations();
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div className="bg-metropoliBg" style={{
            backgroundImage: 'url(/waves_bottom.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
        }}>
            <div className='px-10 md:px-28 py-28' ref={ref}>
                <div className="w-full md:w-2/5">
                    <h1 className={`font-normal text-40 text-black ${isVisible ? 'slide-in-left' : 'hidden'}`}>
                        {messages.noPolicy}
                    </h1>
                    <h2 className={`font-normal text-40 text-gradient ${isVisible ? 'slide-in-left' : 'hidden'}`} style={{ animationDelay: '0.2s' }}>
                        {messages.securityAndPeaceOfMind}
                    </h2>
                </div>
            </div>

            <div className="flex gap-24">
                <div className='w-1/2'>
                    <div className="relative" style={{ height: '80vh' }}>
                        <Image
                            src="/persona-paz.png"
                            alt="Persona caminando en la naturaleza"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="w-1/2 ps-20">
                    <div className='w-72'>
                        <DescriptiveText title={messages.futureWithoutFear} text={messages.noMoreWorries} />
                    </div>
                    <div className='mt-10 w-72'>
                        <DescriptiveText title={messages.enjoyPeaceOfMind} text={messages.wellInsured} />
                    </div>
                    <div className='mt-10 w-72'>
                        <DescriptiveText title={messages.focusYourEnergy} text={messages.growYourBusiness} />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center text-center py-40'>
                <div className='w-2/5 '>
                    <DescriptiveText title={messages.threeGenerations} titleSize='36' text='' />
                </div>
            </div>
        </div>
    );
};

export default SecurityPeaceOfMind;