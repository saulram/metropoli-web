import React from 'react';

export default function HeroSection() {
    return (
        <div className="relative bg-cover bg-center bg-metropoliBg "
             style={{backgroundImage: 'url(/waves.png)', height: '90dvh'}}>
            <div className="absolute top-1/2 left-52 transform -translate-y-1/2 p-8">
                <p className="text-left text-2xl font-bold text-white" style={{
                    fontSize: '48px',
                    fontWeight: 500,
                    lineHeight: '48px',
                    textAlign: 'left',
                    color: "#000506",
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none'
                }}>
                    Los líderes estratégicos y visionarios no <br/>compran <strong>seguros</strong>, invierten en
                </p>
                <p className="text-left text-4xl font-bold bg-clip-text text-transparent" style={{
                    fontSize: '48px',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    lineHeight: '48px',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    background: 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                }}>
                    Momentos de Tranquilidad
                </p>
                <div className="h-20"></div>
                <button
                    className="rounded-md px-5 py-3 text-lg font-bold text-white shadow-sm focus:outline-none"
                    style={{
                        background: 'linear-gradient(90deg, #1E2D49 0%, #112039 25.5%, rgba(25, 57, 113, 0.99299) 78.5%, rgba(14, 80, 187, 0.98) 100%)',
                        border: '0.5px solid',
                        borderImageSource: 'linear-gradient(90deg, #99C0FF 0%, #1C6EF6 100%)',
                        boxShadow: '0px 4px 4px 0px #00000040 inset',
                        width: '270px',
                        textAlign: 'center',
                        borderRadius: '10px'
                    }}>
                    Asegura tu tranquilidad
                </button>
            </div>
        </div>
    );
}