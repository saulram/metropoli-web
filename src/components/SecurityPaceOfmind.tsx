"use client"
import Image from 'next/image';
import { useTranslations } from '@/i18n/useTranslations';
import DescriptiveText from './DescriptiveText';

const SecurityPeaceOfMind = () => {
    const messages = useTranslations();

    return (
        <div className="bg-metropoliBg" style={{
            backgroundImage: 'url(/waves_bottom.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
        }}>
            <div className='px-10 md:px-28 py-28'>
                <div className="w-full md:w-2/5">
                    <h1 className="font-normal text-40 text-black">
                        {messages.noPolicy}
                    </h1>
                    <h2 className="font-normal text-40 text-gradient">
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