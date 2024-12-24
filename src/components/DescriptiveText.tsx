import React, { useEffect, useRef, useState } from 'react';

interface DescriptiveTextProps {
    title: string;
    text: string;
    width?: string;
    titleSize?: string;
    active?: boolean;
    button?: string;
    customMobileSize?: string;
    customDesktopSize?: string;
    onClick?: () => void;
}

const DescriptiveText: React.FC<DescriptiveTextProps> = ({ title, text, titleSize, active, button, onClick ,customMobileSize ,customDesktopSize }) => {
    const [isActive, setIsActive] = useState(active || false);
    const elementRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const elementTop = elementRef.current.getBoundingClientRect().top + window.scrollY;
                const elementHeight = elementRef.current.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight * 0.5;

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

    const getTitleSize = () => {
        if (isMobile) return '20px';
        return titleSize || '28px';
    };

    const getTextSize = () => {
        if (isMobile) return '14px';
        return '18px';
    };

    const commonTextStyles = {
        lineHeight: '1.2',
        maxWidth: isMobile ? customMobileSize ?? '55%' : customDesktopSize ?? '350px',
        whiteSpace: 'normal' as const,
        wordWrap: 'break-word' as const,
        overflowWrap: 'break-word' as const,
        wordBreak: 'normal' as const,
        hyphens: 'none' as const,
    };

    return (
        <div ref={elementRef} className="max-w-full">
            <h3
                className="text-lg font-medium mb-3 whitespace-pre-line"
                style={{
                    ...commonTextStyles,
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'hsl(0, 0%, 44%)',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)',
                    fontSize: getTitleSize(),
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                }}
            >
                {title}
            </h3>
            {button ? (
                <div
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
                            ...commonTextStyles,
                            backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #103575 100%)' : 'hsl(0, 0%, 44%)',
                            WebkitBackgroundClip: isActive ? 'text' : 'none',
                            backgroundClip: isActive ? 'text' : 'none',
                            color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)',
                            fontSize: getTitleSize(),
                            transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                        }}
                    >
                        {button}
                    </div>
                </div>
            ) : null}
            <p
                className="text-sm whitespace-pre-line"
                style={{
                    ...commonTextStyles,
                    backgroundImage: isActive ? 'linear-gradient(90deg, #091934 0%, #1C6EF6 100%)' : 'hsl(0, 0%, 44%)',
                    WebkitBackgroundClip: isActive ? 'text' : 'none',
                    backgroundClip: isActive ? 'text' : 'none',
                    color: isActive ? 'transparent' : 'hsl(0, 0%, 44%)',
                    fontSize: getTextSize(),
                    transition: 'background-image 0.6s ease, color 0.6s ease, font-size 0.6s ease, line-height 0.6s ease',
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default DescriptiveText;