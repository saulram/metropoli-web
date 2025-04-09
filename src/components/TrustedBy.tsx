'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const SCROLL_SPEED = 0.1; // pixels per frame
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

  useEffect(() => {
    let animationFrameId: number;
    let offset = 0;

    const animate = () => {
      offset = (offset + SCROLL_SPEED) % (LOGO_WIDTH * (logos.length / 2));
      
      if (scrollRef1.current) {
        scrollRef1.current.style.transform = `translateX(-${offset}px)`;
      }
      if (scrollRef2.current) {
        scrollRef2.current.style.transform = `translateX(-${offset}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
              <div className="h-[100px] mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 flex whitespace-nowrap">
                  <div ref={scrollRef1} className="flex transition-transform duration-1000 ease-linear">
                    {[...firstHalf, ...firstHalf].map((logo, index) => (
                     
                        <Image
                        key={`${logo.alt}-1-${index}`}
                          src={logo.src}
                          alt={logo.alt}
                          width={220}
                          height={0}
                          className="w-[150px]!important h-auto filter brightness-0 invert mx-4"
                          priority={index < 5}
                        />
                    ))}
                  </div>
                </div>
              </div>

              {/* Second row of logos */}
              <div className="h-[100px] relative overflow-hidden">
                <div className="absolute top-0 left-0 flex whitespace-nowrap">
                  <div ref={scrollRef2} className="flex transition-transform duration-1000 ease-linear">
                    {[...secondHalf, ...secondHalf].map((logo, index) => (
                    
                        <Image
                          key={`${logo.alt}-2-${index}`}
                          src={logo.src}
                          alt={logo.alt}
                          width={220}
                          height={0}
                          className="w-[150px]!important h-auto filter brightness-0 invert mx-4"
                          priority={index < 5}
                        />
                    ))}
                  </div>
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