import Image from 'next/image';
import DescriptiveText from "@/components/DescriptiveText";

const SecurityPeaceOfMind = () => {
    return (
        <div className="bg-metropoliBg p-8 md:p-24 rounded-lg flex flex-col items-start space-y-8" style={{
            backgroundImage: 'url(/waves_bottom.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
        }}>
            {/* Título principal */}
            <div className="text-left w-full md:w-2/3">
                <h1 className="font-medium text-black text-4xl md:text-5xl leading-tight">
                    No estás comprando una póliza.
                </h1>
                <h2 className="font-medium text-transparent bg-clip-text" style={{
                    fontSize: '40',
                    lineHeight: '48px',
                    background: 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)',
                    WebkitBackgroundClip: 'text',
                }}>
                    Estás invirtiendo en tu seguridad y <br/>paz mental.
                </h2>
            </div>
            {/* Contenido */}
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 w-full">
                {/* Imagen */}
                <div className="w-full lg:w-1/2 h-dvh relative">
                    <Image
                        src="/persona-paz.png"
                        alt="Persona caminando en la naturaleza"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* Texto descriptivo */}
                <div className="space-y-6 md:space-y-8 lg:space-y-10 w-full lg:w-1/2">
                    <DescriptiveText title="Un futuro sin tener miedo a lo desconocido."
                                     text="No más preocupaciones por sentirte sobrevenido o ser un número de cliente más ignorado hasta su próxima renovación."/>
                    <DescriptiveText title="Gozar de la tranquilidad y paz mental"
                                     text="de saber que todo lo que te importa está bien asegurado."/>
                    <DescriptiveText title="Enfocar tu energía en lo que importa:"
                                     text="crecer tu empresa, disfrutar de tu familia y vivir a tu manera."/>
                </div>
            </div>

            {/* Texto final */}
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