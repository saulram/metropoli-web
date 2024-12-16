"use client"
import Image from 'next/image';
import { useTranslations } from '@/i18n/useTranslations';

const SecurityPeaceOfMind = () => {
    const messages = useTranslations();

    return (
        <div className="bg-metropoliBg rounded-lg" style={{
            backgroundImage: 'url(/waves_bottom.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
        }}>
            <div className='sm:px-0 md:px-28 py-28'>
                <div className="w-3/5">
                    <h1 className="font-normal text-40 text-black">
                        {messages.noPolicy}
                    </h1>
                    <h2 className="font-normal text-40 text-gradient">
                        {messages.securityAndPeaceOfMind}
                    </h2>
                </div>
            </div>
            <div className="flex">
                <div>
                    <Image
                        src="/persona-paz.png"
                        alt="Persona caminando en la naturaleza"
                        width={473}
                        height={367}
                    />
                </div>
                <div>

                </div>
            </div>

            <div className="text-center max-w-2xl mx-auto pt-8 text-gray-600 text-base md:text-lg" style={{
                fontSize: '26px',
                color: '#707070',
            }}>
                <p>
                    Desde hace tres generaciones, te acompañamos y diseñamos contigo la protección que realmente
                    necesitas. Así, recuperas tu tiempo y sigues creando más valor para tus clientes.
                </p>
            </div>
        </div>
    );
};

export default SecurityPeaceOfMind;