'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const SCROLL_SPEED = 0.1; // pixels per frame
const LOGO_WIDTH = 280; // Aumentado de 220 a 280 pixels

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
//first row
  { src: '/logos/Grupo Avante copy.png', alt: 'Grupo Avante' },
  { src: '/logos/amexgas.png', alt: 'Amexgas' },
  { src: '/logos/berlitz-puebla-white 1.png', alt: 'Berlitz' },
  { src: '/logos/Bosque Real.png', alt: 'Bosque Real' },
  { src: '/logos/Credifiel.png', alt: 'Credifiel' },
  { src: '/logos/Global Gas copy.png', alt: 'Global Gas' },
  { src: '/logos/Gas uribe.png', alt: 'Gas Uribe' },
  { src: '/logos/Grupo Urrea copy.png', alt: 'Grupo Urrea' },
  { src: '/logos/Landstar_System.png', alt: 'Landstar System' },
  { src: '/logos/Tramontina.png', alt: 'Tramontina' },
  { src: '/logos/Mainbit_V2 copy.png', alt: 'Mainbit' },
//second row
  { src: '/logos/Centur.png', alt: 'Centur' },
  { src: '/logos/Chopo.png', alt: 'Chopo' },
  { src: '/logos/Clase Azul.png', alt: 'Clase Azul' },
  { src: '/logos/Consorcio Ara.png', alt: 'Consorcio ARA' },
  { src: '/logos/Grupo VYG.png', alt: 'Grupo VYG' },
  { src: '/logos/jauregui-y-del-valle.png', alt: 'Jauregui y del Valle' },
  { src: '/logos/Kassel.png', alt: 'Kassel' },
  { src: '/logos/ICCS.png', alt: 'ICCS' },
  { src: '/logos/Specialized.png', alt: 'Specialized' },
  { src: '/logos/Tapon Corona.png', alt: 'Tapon Corona' },
  { src: '/logos/Transportes Elola.png', alt: 'Transportes Elola' },
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Column */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Confían su <span className="italic">tranquilidad</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-light">
                en nosotros:
              </h3>
            </div>

            {/* Logos Column */}
            <div className="relative">
              {/* First row of logos */}
              <div className="h-[100px] mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 flex whitespace-nowrap">
                  <div ref={scrollRef1} className="flex transition-transform duration-1000 ease-linear">
                    {[...firstHalf, ...firstHalf].map((logo, index) => (
                      <div
                        key={`${logo.alt}-1-${index}`}
                        className="w-[280px] h-[80px] flex items-center justify-center px-6"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={280}
                          height={40}
                          className="w-auto h-[30px!important] object-fill filter brightness-0 invert"
                          priority={index < 5}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second row of logos */}
              <div className="h-[100px] relative overflow-hidden">
                <div className="absolute top-0 left-0 flex whitespace-nowrap">
                  <div ref={scrollRef2} className="flex transition-transform duration-1000 ease-linear">
                    {[...secondHalf, ...secondHalf].map((logo, index) => (
                      <div
                        key={`${logo.alt}-2-${index}`}
                        className="w-[280px] flex items-center justify-center px-6"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={280}
                          height={40}
                          className="w-auto h-[30px!important] object-fill filter brightness-0 invert"
                          priority={index < 5}
                        />
                      </div>
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