import Link from 'next/link';

export default function ClosingCTA() {
  return (
    <section className="bg-[#112039] px-8 py-24 text-center text-white md:px-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-3xl leading-tight md:text-5xl">No somos el bróker más barato de México. Nunca lo seremos.</p>
        <p className="mt-6 text-lg text-blue-100">Si tu prioridad es el precio, hay opciones más convenientes. Si tu prioridad es dormir tranquilo, hablemos.</p>
        <Link href="/contact-us" className="mt-10 inline-block rounded-[10px] bg-gradient-to-r from-[#1E2D49] to-[#0E50BB] px-6 py-3 text-lg font-bold shadow-sm">
          Asegura tu tranquilidad
        </Link>
      </div>
    </section>
  );
}
