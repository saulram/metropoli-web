import React, { useEffect, useRef, useState } from 'react';

interface DescriptiveTextProps {
    title: string;
    text: string;
}

const DescriptiveText: React.FC<DescriptiveTextProps> = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false); // Indica si el texto está activo con el gradiente
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
        <div ref={elementRef} className="mt-10" style={{ width: '25vw' }}>
            <h3
                className="text-lg font-medium"
                style={{
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'none',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    lineHeight: isActive ? '1.5' : '1.75', // Incrementa el interlineado en 0.25 cuando está activo
                    color: isActive ? 'transparent' : 'black', // Negro cuando no hay gradiente, transparente cuando hay gradiente
                    fontSize: isActive ? '27px' : '24px', // Incrementa la fuente en 3px cuando está activo
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                }}
            >
                {title}
            </h3>
            <p
                className="text-sm"
                style={{
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'none',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    lineHeight: isActive ? '1.5' : '1.75',
                    color: isActive ? 'transparent' : 'black',
                    fontSize: isActive ? '19px' : '17px', // Incrementa la fuente en 2px cuando está activo
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default DescriptiveText;
