'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative pt-12 pb-8 px-6 text-center animate-fade-in-down">
      <Link href="/" className="inline-block mb-2 transition-transform hover:scale-105">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-deepBlue leading-none tracking-tight">
          Just Good News
        </h1>
      </Link>
      <p className="font-body text-lg md:text-xl text-terracotta font-light tracking-wide">
        Noticias positivas para empezar bien el día
      </p>
      
      <nav className="mt-8 flex justify-center gap-8 flex-wrap">
        <Link
          href="/"
          className={`
            font-body text-base px-6 py-2 rounded-full transition-all duration-300
            ${pathname === '/' 
              ? 'bg-sage/15 text-deepBlue' 
              : 'text-deepBlue hover:bg-sage/10'}
          `}
        >
          Inicio
        </Link>
        <Link
          href="/about"
          className={`
            font-body text-base px-6 py-2 rounded-full transition-all duration-300
            ${pathname === '/about' 
              ? 'bg-sage/15 text-deepBlue' 
              : 'text-deepBlue hover:bg-sage/10'}
          `}
        >
          Acerca del proyecto
        </Link>
      </nav>
    </header>
  );
}
