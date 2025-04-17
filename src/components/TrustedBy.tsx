'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SCROLL_SPEED = 0.3; // pixels per frame
const LOGO_WIDTH = 220; // Reducido a 220px para mostrar 4 logos

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
//first row
  { src: '/logos/Grupo Avante copy.svg', alt: 'Grupo Avante' },
  { src: '/logos/amexgas.svg', alt: 'Amexgas' },
  { src: '/logos/berlitz-puebla-white 1.svg', alt: 'Berlitz' },
  { src: '/logos/Bosque Real.svg', alt: 'Bosque Real' },
  { src: '/logos/Credifiel.svg', alt: 'Credifiel' },
  { src: '/logos/Global Gas copy.svg', alt: 'Global Gas' },
  { src: '/logos/Gas uribe.svg', alt: 'Gas Uribe' },
  { src: '/logos/Grupo Urrea copy.svg', alt: 'Grupo Urrea' },
  { src: '/logos/Landstar_System.svg', alt: 'Landstar System' },
  { src: '/logos/Tramontina.svg', alt: 'Tramontina' },
  { src: '/logos/Mainbit_V2 copy.svg', alt: 'Mainbit' },
//second row
  { src: '/logos/Centur.svg', alt: 'Centur' },
  { src: '/logos/Chopo.svg', alt: 'Chopo' },
  { src: '/logos/Clase Azul.svg', alt: 'Clase Azul' },
  { src: '/logos/Consorcio Ara.svg', alt: 'Consorcio ARA' },
  { src: '/logos/Grupo VYG.svg', alt: 'Grupo VYG' },
  { src: '/logos/jauregui-y-del-valle.svg', alt: 'Jauregui y del Valle' },
  { src: '/logos/Kassel.svg', alt: 'Kassel' },
  { src: '/logos/ICCS.svg', alt: 'ICCS' },
  { src: '/logos/Specialized.svg', alt: 'Specialized' },
  { src: '/logos/Tapon Corona.svg', alt: 'Tapon Corona' },
  { src: '/logos/Transportes Elola.svg', alt: 'Transportes Elola' },
];

export const TrustedBy = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const [autoScrollOffset, setAutoScrollOffset] = useState(0);
  const autoScrollRef = useRef<number | null>(null);

  // Auto-scroll animation
  useEffect(() => {
    if (isDragging) {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      return;
    }

    const animate = () => {
      setAutoScrollOffset(prev => (prev + SCROLL_SPEED) % (LOGO_WIDTH * (logos.length / 2)));
      autoScrollRef.current = requestAnimationFrame(animate);
    };

    autoScrollRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isDragging]);

  // Apply auto-scroll position
  useEffect(() => {
    if (!isDragging && scrollRef1.current && scrollRef2.current) {
      scrollRef1.current.style.transform = `translateX(-${autoScrollOffset}px)`;
      scrollRef2.current.style.transform = `translateX(-${autoScrollOffset}px)`;
    }
  }, [autoScrollOffset, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    
    if (scrollRef1.current) {
      const transformValue = window.getComputedStyle(scrollRef1.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transformValue);
      setScrollLeft1(-matrix.m41);
    }
    
    if (scrollRef2.current) {
      const transformValue = window.getComputedStyle(scrollRef2.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transformValue);
      setScrollLeft2(-matrix.m41);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX;
    const walkX = (startX - x) * 2; // Multiplicador para hacer el movimiento más rápido
    
    const maxScroll = LOGO_WIDTH * (logos.length / 2);
    
    if (scrollRef1.current) {
      let newScrollLeft = scrollLeft1 + walkX;
      if (newScrollLeft < 0) newScrollLeft = maxScroll + newScrollLeft;
      if (newScrollLeft > maxScroll) newScrollLeft = newScrollLeft % maxScroll;
      
      scrollRef1.current.style.transform = `translateX(-${newScrollLeft}px)`;
    }
    
    if (scrollRef2.current) {
      let newScrollLeft = scrollLeft2 + walkX;
      if (newScrollLeft < 0) newScrollLeft = maxScroll + newScrollLeft;
      if (newScrollLeft > maxScroll) newScrollLeft = newScrollLeft % maxScroll;
      
      scrollRef2.current.style.transform = `translateX(-${newScrollLeft}px)`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Get current positions to continue auto-scroll from here
    if (scrollRef1.current) {
      const transformValue = window.getComputedStyle(scrollRef1.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transformValue);
      setAutoScrollOffset(-matrix.m41);
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    
    if (scrollRef1.current) {
      const transformValue = window.getComputedStyle(scrollRef1.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transformValue);
      setScrollLeft1(-matrix.m41);
    }
    
    if (scrollRef2.current) {
      const transformValue = window.getComputedStyle(scrollRef2.current).getPropertyValue('transform');
      const matrix = new DOMMatrix(transformValue);
      setScrollLeft2(-matrix.m41);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX;
    const walkX = (startX - x) * 2;
    
    const maxScroll = LOGO_WIDTH * (logos.length / 2);
    
    if (scrollRef1.current) {
      let newScrollLeft = scrollLeft1 + walkX;
      if (newScrollLeft < 0) newScrollLeft = maxScroll + newScrollLeft;
      if (newScrollLeft > maxScroll) newScrollLeft = newScrollLeft % maxScroll;
      
      scrollRef1.current.style.transform = `translateX(-${newScrollLeft}px)`;
    }
    
    if (scrollRef2.current) {
      let newScrollLeft = scrollLeft2 + walkX;
      if (newScrollLeft < 0) newScrollLeft = maxScroll + newScrollLeft;
      if (newScrollLeft > maxScroll) newScrollLeft = newScrollLeft % maxScroll;
      
      scrollRef2.current.style.transform = `translateX(-${newScrollLeft}px)`;
    }
  };

  const handleTouchEnd = handleMouseUp;

  const firstHalf = logos.slice(0, Math.ceil(logos.length / 2));
  const secondHalf = logos.slice(Math.ceil(logos.length / 2));

  return (
    <div className="w-full bg-[#B8CEFF]">
      <section className="w-full bg-gradient-to-r from-[#112039] via-[#193971] to-[#0E50BB] py-16 md:py-24 rounded-[30px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-10 gap-8 items-center">
            {/* Text Column - 3 columns of 10 */}
            <div className="text-white md:col-span-4">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Confían su <span className="italic">tranquilidad</span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-light">
                en nosotros:
              </h3>
            </div>

            {/* Logos Column - 7 columns of 10 */}
            <div className="relative md:col-span-6">
              {/* First row of logos */}
              <div 
                className={`h-[100px] mb-8 relative overflow-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="absolute top-0 left-0 flex whitespace-nowrap">
                  <div ref={scrollRef1} className="flex">
                    {[...firstHalf, ...firstHalf].map((logo, index) => (
                     
                        <Image
                        key={`${logo.alt}-1-${index}`}
                          src={logo.src}
                          alt={logo.alt}
                          width={220}
                          height={0}
                          className="w-[150px]!important h-auto filter brightness-0 invert mx-4"
                          priority={index < 5}
                          draggable={false}
                        />
                    ))}
                  </div>
                </div>
              </div>

              {/* Second row of logos */}
              <div 
                className={`h-[100px] relative overflow-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="absolute top-0 left-0 flex whitespace-nowrap">
                  <div ref={scrollRef2} className="flex">
                    {[...secondHalf, ...secondHalf].map((logo, index) => (
                    
                        <Image
                          key={`${logo.alt}-2-${index}`}
                          src={logo.src}
                          alt={logo.alt}
                          width={220}
                          height={0}
                          className="w-[150px]!important h-auto filter brightness-0 invert mx-4"
                          priority={index < 5}
                          draggable={false}
                        />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Indicator */}
              <div className="absolute inset-x-0 top-0 mt-[-12px] h-1 bg-blue-500 opacity-0 transition-opacity duration-200 z-10" 
                style={{ opacity: isDragging ? 0.8 : 0 }} />
              
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${isDragging ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  Arrastra horizontalmente
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy; 