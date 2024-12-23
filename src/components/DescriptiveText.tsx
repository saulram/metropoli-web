import React, { useEffect, useRef, useState } from 'react';

interface DescriptiveTextProps {
    title: string;
    text: string;
    width?: string;
    titleSize?: string;
    active?: boolean;
    button?: string;
    onClick?: () => void;
}

const DescriptiveText: React.FC<DescriptiveTextProps> = ({ title, text, width, titleSize, active, button,onClick }) => {
    const [isActive, setIsActive] = useState(active || false); // Indica si el texto está activo con el gradiente
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const elementTop = elementRef.current.getBoundingClientRect().top + window.scrollY;
                const elementHeight = elementRef.current.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight * 0.5;

                // Activa el gradiente solo cuando el elemento está completamente visible en la posición central
                if (scrollPosition > elementTop - elementHeight && scrollPosition < elementTop + elementHeight) {
                    setIsActive(true);
                } else {
                    setIsActive(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={elementRef} style={{ width: width && '25vw' }}>
            <h3
                className="text-lg font-medium mb-3 whitespace-pre-line"
                style={{
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'hsl(0, 0%, 44%)',
                    lineHeight: '1.2',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)', // Negro cuando no hay gradiente, transparente cuando hay gradiente
                    fontSize: `${titleSize || 27}px`, // Incrementa la fuente en 3px cuando está activo
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                    whiteSpace:'pre-line'
                }}
            >
                {title}
            </h3>
            {button ? <div
                className="inline-block py-1 px-4"
                onClick={onClick}
                style={{
                    borderRadius: '12px',
                    background: isActive
                        ? 'linear-gradient(90deg, #96beff 0%, #1e70f6 100%)'
                        : 'linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
                    transition: 'background 0.6s ease',
                }}
            >
                <div
                    className="text-lg font-medium"
                    style={{
                        backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #103575 100%)' : 'hsl(0, 0%, 44%)',
                        lineHeight: '1.2',
                        WebkitBackgroundClip: isActive ? 'text' : 'none',
                        backgroundClip: isActive ? 'text' : 'none',
                        color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)', // Negro cuando no hay gradiente, transparente cuando hay gradiente
                        fontSize: `${titleSize || 27}px`, // Incrementa la fuente en 3px cuando está activo
                        transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                    }}
                >
                    {button}
                </div>
            </div> : <></>}
            <p
                className="text-sm whitespace-pre-line"
                style={{
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'hsl(0, 0%, 44%)',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    lineHeight: '1.5',
                    color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)',
                    fontSize: '19px',// Incrementa la fuente en 2px cuando está activo
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default DescriptiveText;
