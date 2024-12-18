import React, { useEffect, useRef, useState } from 'react';

interface DescriptiveTextProps {
    title: string;
    text: string;
    width?: string;
    titleSize?: string;
    isActiveProp?: boolean;
    containerRef: React.RefObject<HTMLDivElement>;
}

const DescriptiveTextInContainer: React.FC<DescriptiveTextProps> = ({ title, text, width, titleSize, containerRef, isActiveProp }) => {
    const [isActive, setIsActive] = useState(isActiveProp || false); // Indica si el texto está activo con el gradiente
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current && containerRef.current) {
                const elementTop = elementRef.current.getBoundingClientRect().top + containerRef.current.scrollTop;
                const elementHeight = elementRef.current.offsetHeight;
                const scrollPosition = containerRef.current.scrollTop + containerRef.current.clientHeight * 0.5;

                // Activa el gradiente solo cuando el elemento está completamente visible en la posición central
                if (scrollPosition > elementTop - elementHeight && scrollPosition < elementTop + elementHeight) {
                    setIsActive(true);
                } else {
                    setIsActive(false);
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [containerRef]);

    return (
        <div ref={elementRef} style={{ width: width && '25vw' }}>
            <h3
                className="text-lg font-medium mb-3"
                style={{
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'hsl(0, 0%, 44%)',
                    lineHeight: '1.2',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)', // Negro cuando no hay gradiente, transparente cuando hay gradiente
                    fontSize: `${titleSize || 27}px`, // Incrementa la fuente en 3px cuando está activo
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                }}
            >
                {title}
            </h3>
            <p
                className="text-sm"
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

export default DescriptiveTextInContainer;